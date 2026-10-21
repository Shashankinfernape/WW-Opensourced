__d("WAWebSearchTheWebGetSupportedSearchOptions", [
    "fbt",
    "WALogger",
    "WAWebExternalLink.react",
    "WAWebFrontendMsgGetters",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMiscErrors",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgType",
    "WAWebNetworkStatus",
    "WAWebSTWGatingUtils",
    "WAWebSTWImage",
    "WAWebSTWText",
    "WAWebSearchTheWebCommonUtils",
    "WAWebSearchTheWebEventLogger",
    "WAWebWamEnumStwInteraction",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    function u() {
        return s._("Something went wrong. Try again.");
    }
    function c(e) {
        const n = o("WAWebFrontendMsgGetters").getText(e);
        return d({
            imageFilehash: e.type === o("WAWebMsgType").MSG_TYPE.IMAGE && o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(e.unsafe(), o("WAWebFrontendMsgGetters").getChat(e)) ? e.mediaData?.filehash : null,
            msgText: n,
            msgUrls: n == null ? [] : o("WAWebMsgLinks").getLinksFromText(n, o("WAWebMsgGetters").getSender(e), o("WAWebMsgGetters").getInitialPageSize(e) + 1)
        });
    }
    function d({ imageFilehash, msgText, msgUrls }) {
        const s = new Map;
        if (msgUrls.length > 0 && o("WAWebSTWGatingUtils").isSearchTheWebURLSearchEnabled()) {
            const c = msgUrls[0].href;
            s.set(o("WAWebSearchTheWebCommonUtils").SearchType.URL, {
                handleSearchAction: function(t) {
                    o("WAWebSearchTheWebEventLogger").logSTWEvent(t);
                    o("WAWebExternalLink.react").openExternalLink(o("WAWebSTWText").createUrlSearchLink(c));
                }
            });
        }
        if (imageFilehash != null) {
            const d = imageFilehash;
            if (o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(d)) {
                const p = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(d);
                if (p != null) {
                    s.set(o("WAWebSearchTheWebCommonUtils").SearchType.IMAGE, {
                        handleSearchAction: function(a) {
                            o("WAWebSearchTheWebEventLogger").logSTWEvent(a);
                            function t(e) {
                                return i.apply(this, arguments);
                            }
                            function i() {
                                i = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                                    try {
                                        if (!r("WAWebNetworkStatus").online) {
                                            o("WAWebSearchTheWebCommonUtils").showSearchFailureToast(o("WAWebSearchTheWebCommonUtils").getNoInternetToastMsg());
                                            throw new (o("WAWebMiscErrors")).GoogleLensApiError(o("WAWebSTWImage").LensApiErrorType.NO_INTERNET_CONNECTION);
                                        }
                                        const n = yield o("WAWebSTWImage").getImageSearchUrl(t);
                                        if (n == null) {
                                            throw new (o("WAWebMiscErrors")).GoogleLensApiError(o("WAWebSTWImage").LensApiErrorType.NO_REDIRECT_URL);
                                        }
                                        if (n.includes("consent")) {
                                            throw new (o("WAWebMiscErrors")).GoogleLensApiError(o("WAWebSTWImage").LensApiErrorType.CONSENT_FORM_IN_URL);
                                        }
                                        a.stwInteraction = o("WAWebWamEnumStwInteraction").STW_INTERACTION.IMAGE_SEARCH_REDIRECT;
                                        o("WAWebSearchTheWebEventLogger").logSTWEvent(a);
                                        o("WAWebExternalLink.react").openExternalLink(n);
                                    } catch (error) {
                                        a.stwInteraction = o("WAWebWamEnumStwInteraction").STW_INTERACTION.IMAGE_SEARCH_FAILED;
                                        a.stwLensApiErrorType = o("WAWebSTWImage").getImageSearchWamErrorType(r("getErrorSafe")(error));
                                        o("WAWebSearchTheWebEventLogger").logSTWEvent(a);
                                        o("WAWebSearchTheWebCommonUtils").showSearchFailureToast(u());
                                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                            "Error while running image seach on web"
                                        ]))).tags("STW");
                                    }
                                });
                                return i.apply(this, arguments);
                            }
                            return t(p);
                        }
                    });
                }
            }
        }
        if (msgText != null && o("WAWebSTWGatingUtils").isSearchTheWebTextSearchEnabled() && m(msgText, msgUrls)) {
            s.set(o("WAWebSearchTheWebCommonUtils").SearchType.TEXT, {
                handleSearchAction: function(t) {
                    o("WAWebSearchTheWebEventLogger").logSTWEvent(t);
                    o("WAWebExternalLink.react").openExternalLink(o("WAWebSTWText").createTextSearchLink(msgText));
                }
            });
        }
        return s;
    }
    function m(msgText, msgUrls) {
        if (msgUrls.length === 0) {
            return true;
        }
        let n = msgText;
        msgUrls.forEach(({ href })=>{
            n = msgText.replace(href, "");
        });
        return n.trim() !== "";
    }
    l.getSupportedSearchOptions = c;
    l.getSupportedSearchOptionsFor = d;
}, 226);