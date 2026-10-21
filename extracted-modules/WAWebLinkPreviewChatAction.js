__d("WAWebLinkPreviewChatAction", [
    "WABase64",
    "WACustomError",
    "WALogger",
    "WALongInt",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebApi",
    "WAWebApiParse",
    "WAWebBizLinkPreviewCatalogUtils",
    "WAWebChatGetters",
    "WAWebCheckIfDomainIsPreviewable",
    "WAWebGenMinimalLinkPreviewChatAction",
    "WAWebLinkPreviewCache",
    "WAWebLinkPreviewGroupUtils",
    "WAWebLinkPreviewUtils",
    "WAWebMmsMediaTypes",
    "WAWebMsgKey",
    "WAWebNewsletterFetchLinkPreviewAction",
    "WAWebNonMessageDataRequestHandlerGenLinkPreview",
    "WAWebParseCallLinkType",
    "WAWebPrimaryFeaturesModel",
    "WAWebProfilePicThumbGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsMmsRetry.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebStateUtils",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumWebcDisplayStatusType",
    "WAWebWebcLinkPreviewDisplayWamEvent",
    "WAWebWindowsHybridBridgeInitiator",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    function S() {
        if (n("cr:17219") == null) {
            return undefined;
        }
        return n("cr:17219").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebLinkPreviewChatAction);
    }
    let R;
    let L = false;
    function E() {
        if (!L) {
            R = S();
            L = true;
        }
        return R;
    }
    function k(e, t) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n;
            const a = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
            const a_disableLinkPreviews = a.disableLinkPreviews;
            if (a_disableLinkPreviews === true) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: disabled due to user settings"
                ])));
                return null;
            }
            const l = yield o("WAWebCheckIfDomainIsPreviewable").checkIfDomainIsPreviewable(e.domain, t);
            if (!l) {
                return null;
            }
            const y = t != null ? o("WAWebChatGetters").getIsNewsletter(o("WAWebStateUtils").unproxy(t)) : false;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "link preview: start flow"
            ])));
            const C = y ? o("WAWebLinkPreviewCache").getNewsletterPreviewCache() : o("WAWebLinkPreviewCache").getPreviewCache();
            if (C.has(e.url)) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: in cache"
                ])));
                return C.get(e.url);
            }
            if (y) {
                return o("WAWebNewsletterFetchLinkPreviewAction").fetchPlaintextLinkPreviewAction(e, t);
            }
            let b;
            let NONE = o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.NONE;
            let S = null;
            const R = o("WAWebApiParse").parseAPICmd(e.url);
            if (R.resultType === o("WAWebApi").APICmd.CATALOG) {
                b = yield o("WAWebBizLinkPreviewCatalogUtils").getProductOrCatalogLinkPreview(e.url, R.data.catalogOwnerJid);
            } else if (R.resultType === o("WAWebApi").APICmd.PRODUCT) {
                b = yield o("WAWebBizLinkPreviewCatalogUtils").getProductOrCatalogLinkPreview(e.url, R.data.businessOwnerJid, R.data.productId);
            } else if (R.resultType === o("WAWebApi").APICmd.GROUP_INVITE) {
                const L = yield o("WAWebLinkPreviewGroupUtils").getGroupInviteLinkPreview({
                    code: R.data.code,
                    resolveProfilePicUrl: o("WAWebProfilePicThumbGetters").getMaybeImg,
                    url: e.url
                });
                if (L) {
                    b = L;
                }
            } else {
                if (R.resultType === o("WAWebApi").APICmd.PAYMENT_LINK && R.data.shouldDetectInComposer) {
                    NONE = o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.PAYMENT_LINKS;
                    S = R.data.psp;
                } else if (R.resultType === o("WAWebApi").APICmd.CALL_LINK && r("WAWebParseCallLinkType")(e.url, true) != null) {
                    b = o("WAWebLinkPreviewUtils").genLinkPreview({
                        url: e.url,
                        linkDetails: {
                            title: e.domain,
                            description: e.url,
                            richPreviewType: o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.NONE,
                            doNotPlayInline: true,
                            isLoading: false
                        }
                    });
                } else {
                    R.resultType;
                }
            }
            if (b) {
                C.set(e.url, b);
                return b;
            }
            if ((n = e.suspiciousCharacters) != null && n.size) {
                return null;
            }
            const k = E();
            if (k?.linksPreview != null && S == null) {
                const I = yield k.linksPreview.getPreviewAsync(e.url);
                if (I != null) {
                    const N = I.thumbnail ?? "";
                    const M = {
                        thumbnail: N
                    };
                    b = o("WAWebLinkPreviewUtils").genLinkPreview({
                        url: e.url,
                        linkThumbnail: M,
                        linkDetails: {
                            title: I.title,
                            description: I.description,
                            richPreviewType: T(I.previewType, R),
                            doNotPlayInline: false,
                            isLoading: false
                        }
                    });
                    if (b != null) {
                        return b;
                    }
                }
            }
            if (!o("WAWebPrimaryFeaturesModel").PrimaryFeatures.linkPreview) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: opted out. flag=",
                    " abprop=",
                    ""
                ])), o("WAWebPrimaryFeaturesModel").PrimaryFeatures.linkPreview, true);
                if (!r("gkx")("26258")) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "link preview not enabled debug"
                    ]))).sendLogs("intern debug link preview not enabled");
                }
                return o("WAWebGenMinimalLinkPreviewChatAction").genMinimalLinkPreview(e, NONE, false, {
                    psp: S
                });
            }
            const msgId = yield r("WAWebMsgKey").newId();
            const A = o("WAWebNonMessageDataRequestHandlerGenLinkPreview").registerLinkPreviewHandlerHook(msgId);
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "link preview: request from primary"
            ])));
            const hqLinkPreview = o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hqLinkPreview;
            yield o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest(o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.GENERATE_LINK_PREVIEW, {
                urls: [
                    e.url
                ],
                includeHqThumbnail: hqLinkPreview
            }, {
                msgId
            });
            try {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: wait for primary"
                ])));
                const W = yield o("WAPromiseTimeout").promiseTimeout(A.promise, o("WAWebABProps").getABPropConfigValue("link_preview_wait_time") * 1000);
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: got primary response or timeout"
                ])));
                if (W?.linkPreviewResponse?.url != null && W?.linkPreviewResponse?.url !== e.url) {
                    o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "link preview: response url is different than expected url"
                    ])));
                }
                const previewFromPrimary = W?.linkPreviewResponse;
                if (previewFromPrimary) {
                    if (W?.mediaUploadResult != null && W?.mediaUploadResult !== o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.SUCCESS) {
                        D(W?.mediaUploadResult, hqLinkPreview);
                        return o("WAWebGenMinimalLinkPreviewChatAction").genMinimalLinkPreview(e, NONE, false, {
                            psp: S,
                            previewMetadata: previewFromPrimary.previewMetadata
                        });
                    }
                } else {
                    P(o("WAWebWamEnumWebcDisplayStatusType").WEBC_DISPLAY_STATUS_TYPE.PREVIEW_MALFORMED, hqLinkPreview);
                    const U = o("WAWebGenMinimalLinkPreviewChatAction").genMinimalLinkPreview(e, NONE, false, {
                        psp: S
                    });
                    if (W?.mediaUploadResult === o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.NOT_FOUND && U != null) {
                        C.set(e.url, U);
                    }
                    return U;
                }
                const description = R.resultType === o("WAWebApi").APICmd.GROUP_INVITE ? o("WAWebLinkPreviewGroupUtils").GROUP_INVITE_DEFAULT_DESCRIPTION : previewFromPrimary.description;
                const H = yield x({
                    previewFromPrimary,
                    chat: t,
                    includeHqThumbnail: hqLinkPreview
                });
                b = o("WAWebLinkPreviewUtils").genLinkPreview({
                    url: e.url,
                    linkDetails: {
                        title: previewFromPrimary.title,
                        description,
                        richPreviewType: T(previewFromPrimary.previewType, R),
                        doNotPlayInline: false,
                        isLoading: false
                    },
                    linkThumbnail: H,
                    paymentLinkDetails: {
                        psp: S,
                        previewMetadata: previewFromPrimary.previewMetadata
                    }
                });
                C.set(e.url, b);
                return b;
            } catch (error) {
                if (error instanceof o("WACustomError").TimeoutError) {
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "link preview: timeout during link generation"
                    ])));
                    P(o("WAWebWamEnumWebcDisplayStatusType").WEBC_DISPLAY_STATUS_TYPE.PREVIEW_TIMEOUT, hqLinkPreview);
                    return o("WAWebGenMinimalLinkPreviewChatAction").genMinimalLinkPreview(e, NONE, false, {
                        psp: S
                    });
                }
            }
        });
        return I.apply(this, arguments);
    }
    function T(previewType, t) {
        if (previewType === "video") {
            return o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.VIDEO;
        }
        if (t.resultType === o("WAWebApi").APICmd.PAYMENT_LINK && t.data.shouldDetectInComposer) {
            return o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.PAYMENT_LINKS;
        }
        return o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.NONE;
    }
    function D(e, hqLinkPreview) {
        switch(e){
            case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.DECRYPTION_ERROR:
                P(o("WAWebWamEnumWebcDisplayStatusType").WEBC_DISPLAY_STATUS_TYPE.PREVIEW_DECRYPTION_ERROR, hqLinkPreview);
                break;
            case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.NOT_FOUND:
                P(o("WAWebWamEnumWebcDisplayStatusType").WEBC_DISPLAY_STATUS_TYPE.PREVIEW_NOT_FOUND, hqLinkPreview);
                break;
            case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType.GENERAL_ERROR:
                P(o("WAWebWamEnumWebcDisplayStatusType").WEBC_DISPLAY_STATUS_TYPE.PREVIEW_GENERAL_ERROR, hqLinkPreview);
                break;
            default:
                break;
        }
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, includeHqThumbnail, previewFromPrimary }) {
            const a = previewFromPrimary.thumbData ? o("WABase64").encodeB64(previewFromPrimary.thumbData) : "";
            let i = {
                thumbnail: a
            };
            const previewFromPrimary_hqThumbnail = previewFromPrimary.hqThumbnail;
            let s = previewFromPrimary_hqThumbnail ? false : undefined;
            let mediaKeyTimestamp;
            let mediaKey_1;
            if (includeHqThumbnail && previewFromPrimary_hqThumbnail != null) {
                try {
                    const { directPath, encThumbHash, mediaKey, mediaKeyTimestampMs, thumbHash } = previewFromPrimary_hqThumbnail;
                    if (directPath != null && encThumbHash != null && thumbHash != null && mediaKey != null && mediaKeyTimestampMs != null) {
                        o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "link preview: found HQ preview"
                        ])));
                        mediaKeyTimestamp = o("WALongInt").numberOrThrowIfTooLarge(mediaKeyTimestampMs);
                        mediaKey_1 = o("WABase64").encodeB64(mediaKey);
                        i = yield o("WAWebLinkPreviewUtils").getThumbnailDetails({
                            chatWid: chat?.id,
                            mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK,
                            thumbnail: a,
                            hqThumbnailParams: previewFromPrimary_hqThumbnail,
                            encryptionParams: {
                                encFilehash: encThumbHash,
                                mediaKeyTimestamp,
                                mediaKey: mediaKey_1
                            }
                        });
                        s = i.thumbnailHQ == null;
                    } else {
                        o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                            "link preview: malformed HQ preview"
                        ])));
                        s = true;
                    }
                } catch (error) {
                    o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "link preview: could not download HQ preview. details: ",
                        ""
                    ])), error);
                    s = true;
                }
            } else {
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: did not find HQ preview"
                ])));
            }
            P(o("WAWebWamEnumWebcDisplayStatusType").WEBC_DISPLAY_STATUS_TYPE.SHOWED_PREVIEW_TO_USER, includeHqThumbnail, previewFromPrimary_hqThumbnail != null, s);
            return i;
        });
        return $.apply(this, arguments);
    }
    function P(webcDisplayStatus, didRequestHq, r, a) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "link preview: status ",
            ""
        ])), webcDisplayStatus);
        new (o("WAWebWebcLinkPreviewDisplayWamEvent")).WebcLinkPreviewDisplayWamEvent({
            webcDisplayStatus,
            didRequestHq,
            didRespondHqPreview: !!r,
            didFallbackNonHq: !!a
        }).commit();
    }
    l.getLinkPreview = k;
}, 98);