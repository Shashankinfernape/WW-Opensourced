__d("useWAWebLinkPreview", [
    "WAAbortError",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebCryptoRandomMediaKey",
    "WAWebLinkPreviewChatAction",
    "WAWebLinkPreviewEligibility",
    "WAWebMediaConstants",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaOpaqueData",
    "WAWebMediaUploadMmsThumbnail",
    "WAWebMmsMediaTypes",
    "WAWebSpoilerGating",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const { useEffect, useState } = m;
    function f(e) {
        return o("WAWebLinkPreviewEligibility").findFirstPreviewEligibleWebLink({
            getShouldHideSpoilers: o("WAWebSpoilerGating").isSpoilerSenderEnabled,
            text: e
        });
    }
    function g(e, t, n) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (e.thumbnailDirectPath != null) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: use cached mms details (useLinkPreview)"
                ])));
                return {
                    mediaKey: e.mediaKey,
                    mediaKeyTimestamp: e.mediaKeyTimestamp,
                    thumbnailDirectPath: e.thumbnailDirectPath,
                    thumbnailSha256: e.thumbnailSha256,
                    thumbnailEncSha256: e.thumbnailEncSha256
                };
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "link preview: upload to mms"
            ])));
            try {
                if (e.thumbnailHQ == null) {
                    return null;
                }
                const a = yield r("WAPromiseRaceAbort")(r("WAWebMediaOpaqueData").createFromBase64Jpeg(e.thumbnailHQ), t);
                const i = yield r("WAWebMediaUploadMmsThumbnail")({
                    thumbnail: a,
                    mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK,
                    mediaKeyInfo: r("WAWebCryptoRandomMediaKey")(),
                    uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(n),
                    fileOrigin: null,
                    forwardedFromWeb: false,
                    signal: t,
                    timeout: o("WAWebMediaConstants").MMS_THUMBNAIL_UPLOAD_TIMEOUT,
                    isViewOnce: false
                });
                const l = i.mediaEntry;
                if (l) {
                    return {
                        mediaKey: l.mediaKey,
                        mediaKeyTimestamp: l.mediaKeyTimestamp,
                        thumbnailDirectPath: l.directPath,
                        thumbnailSha256: i.filehash,
                        thumbnailEncSha256: l.encFilehash
                    };
                }
                return undefined;
            } catch (error) {
                const d = r("getErrorSafe")(error);
                if (d.name === o("WAAbortError").ABORT_ERROR) {
                    return;
                }
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "useLinkPreview.uploadHQPreview: error"
                ])));
            }
        });
        return h.apply(this, arguments);
    }
    function useY(t, a) {
        const i = useState(null);
        const l = i[0];
        const s = i[1];
        const u = l != null && l.url === t?.url && l.chat === a;
        const c = u ? l?.preview : null;
        const clearLinkPreview = function() {
            s(null);
        };
        useEffect(function() {
            if (t) {
                const i = new AbortController;
                const l = i.signal;
                n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = yield r("WAPromiseRaceAbort")(o("WAWebLinkPreviewChatAction").getLinkPreview(t, a), l);
                    const preview = e?.data;
                    if (preview && (s({
                        url: t.url,
                        chat: a,
                        preview
                    }), !(preview.thumbnailHQ == null || preview.thumbnailHQ === ""))) {
                        const i = yield g(preview, l, a);
                        if (i) {
                            s({
                                url: t.url,
                                chat: a,
                                preview: babelHelpers.extends({}, preview, i)
                            });
                        }
                    }
                })().catch((t)=>{
                    const n = r("getErrorSafe")(t);
                    if (n.name !== o("WAAbortError").ABORT_ERROR) {
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "useLinkPreview: error"
                        ])));
                    }
                });
                return function() {
                    if (!i.signal.aborted) {
                        i.abort();
                    }
                };
            }
        }, [
            t?.url,
            a
        ]);
        return {
            linkPreview: c,
            clearLinkPreview
        };
    }
    l.findFirstWebLink = f;
    l.useLinkPreview = useY;
}, 98);