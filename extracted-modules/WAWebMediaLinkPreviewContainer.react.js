__d("WAWebMediaLinkPreviewContainer.react", [
    "WAWebBotReelsPluginLinkPreview.react",
    "WAWebCallLinkPreviewThumbnail.react",
    "WAWebCmd",
    "WAWebCompactMapString",
    "WAWebDisplayType",
    "WAWebExternalLink.react",
    "WAWebFrontendMsgGetters",
    "WAWebGetCallLinkPreviewSubtitle",
    "WAWebGetCallLinkPreviewTitle",
    "WAWebLinkify",
    "WAWebLongLinkPop.react",
    "WAWebMediaDataUtils",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaLinkPreview.react",
    "WAWebMediaLinkPreviewUtils",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebParseCallLinkType",
    "WAWebPaymentLink",
    "WAWebPaymentLinkOrderDetailsHeader.react",
    "WAWebProtobufsAICommon.pb",
    "WAWebStatusContext",
    "WAWebStatusLinkFormatMutator",
    "WAWebSuspiciousLinkPopup.react",
    "WAWebURLUtils",
    "WAWebWamEnumUrlStatusClicked",
    "asyncToGeneratorRuntime",
    "punycode",
    "react",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { memo, useContext, useEffect, useRef, useState } = u;
    function f({ displayType, horizontalLayout = false, isInvite, msgKey, onClick, reelItem, theme }) {
        const y = useContext(o("WAWebStatusContext").StatusContext);
        const y_statusItemViewEventRef = y.statusItemViewEventRef;
        const b = useState(null);
        const botReelPluginThumbnailUrl = b[0];
        const S = b[1];
        const R = useState(null);
        const reelProfilePictureUrl = R[0];
        const E = R[1];
        const k = o("useWAWebMsgValues").useMsgValues(msgKey, [
            o("WAWebMsgGetters").getT,
            o("WAWebMsgGetters").getThumbnail,
            o("WAWebMsgGetters").getThumbnailHQ,
            o("WAWebMsgGetters").getThumbnailDirectPath,
            o("WAWebMsgGetters").getThumbnailHeight,
            o("WAWebMsgGetters").getThumbnailWidth,
            o("WAWebMsgGetters").getTitle,
            o("WAWebMsgGetters").getDescription,
            o("WAWebMsgGetters").getMatchedText,
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebMsgGetters").getStar,
            o("WAWebFrontendMsgGetters").getAsUrl,
            o("WAWebMsgGetters").getInviteGrpType,
            o("WAWebMsgGetters").getIsKept,
            o("WAWebMsgGetters").getMediaKey,
            o("WAWebMsgGetters").getBotReelPluginThumbnailCdnUrl,
            o("WAWebMsgGetters").getPaymentLinkPreviewMetaTags,
            o("WAWebFrontendMsgGetters").getLinksInFullText,
            o("WAWebMsgGetters").getIsNewsletterMsg,
            o("WAWebMsgGetters").getBotPluginType,
            o("WAWebMsgGetters").getBotPluginReferenceIndex
        ]);
        const I = k[0];
        const T = k[1];
        const D = k[2];
        const x = k[3];
        const $ = k[4];
        const P = k[5];
        const N = k[6];
        const M = k[7];
        const matchedText = k[8];
        const isSentByMe = k[9];
        const star = k[10];
        const O = k[11];
        const B = k[12];
        const kept = k[13];
        const q = k[14];
        const U = k[15];
        const V = k[16];
        const H = k[17];
        const G = k[18];
        const z = k[19];
        const j = k[20];
        const K = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = [
                    {
                        width: 48,
                        height: 48,
                        imageFormat: "image/jpeg",
                        imageFormatOptions: 1
                    }
                ];
                const n = yield o("WAWebMediaDataUtils").getResizedThumbData(e, t);
                const r = n[0];
                E(r?.dataUrl);
            });
            return function(n) {
                return e.apply(this, arguments);
            };
        })();
        const Q = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = [
                    {
                        width: 170,
                        height: 300,
                        imageFormat: "image/jpeg",
                        imageFormatOptions: 1
                    }
                ];
                const n = yield o("WAWebMediaDataUtils").getResizedThumbData(e, t);
                const r = n[0];
                S(r?.dataUrl);
            });
            return function(n) {
                return e.apply(this, arguments);
            };
        })();
        const XRef = useRef();
        useEffect(function() {
            const XRef_current = XRef.current;
            XRef.current = x;
            const t = O;
            if (t != null && (!t.thumbnailHQ || XRef_current !== x) && !o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(I)) {
                r("WAWebMediaDownloadMmsThumbnail")({
                    chat: o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(msgKey, G),
                    msg: t,
                    isPreload: false
                });
            }
            if (U != null) {
                Q(U);
            }
            if (reelItem != null) {
                Q(reelItem.thumbnailUrl);
                K(reelItem.profileIconUrl);
            }
        }, [
            O,
            q,
            I,
            msgKey,
            G,
            x,
            U,
            reelItem
        ]);
        let Y = null;
        if (!isInvite) {
            Y = g(matchedText);
        }
        const J = r("WAWebCompactMapString")(H, function(e) {
            return g(e.url);
        });
        if (reelItem == null && Y != null && !J.some((e)=>e === Y)) {
            return <div/>;
        }
        const Z = H.filter((e)=>e.suspiciousCharacters?.size && e.url === matchedText);
        let ee;
        let thumbnailJpeg;
        let thumbnailJpegHQ;
        let thumbnailJpegDirectPath;
        let thumbnailJpegHeight;
        let thumbnailJpegWidth;
        let ie;
        if (Z.length) {
            ie = function() {
                const link = Z[0];
                onClick?.();
                o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebSuspiciousLinkPopup.react"), {
                    link
                }));
            };
        } else {
            ie = function() {
                const n = reelItem?.videoUrl ?? matchedText;
                if (y_statusItemViewEventRef != null && y_statusItemViewEventRef.current.urlStatusClicked === o("WAWebWamEnumUrlStatusClicked").URL_STATUS_CLICKED.NO_CLICK) {
                    y_statusItemViewEventRef.current.urlStatusClicked = o("WAWebWamEnumUrlStatusClicked").URL_STATUS_CLICKED.ONE_CLICK;
                }
                if (displayType === o("WAWebDisplayType").DISPLAY_TYPE.STATUS) {
                    const link = o("WAWebLinkify").findLink({
                        text: n
                    });
                    if (link != null) {
                        const i = o("WAWebStatusLinkFormatMutator").cleanUrl(link);
                        const l = i[0];
                        const u = i[1];
                        const d = o("WAWebStatusLinkFormatMutator").redactUrl(l, u);
                        if (d !== l + u) {
                            o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebLongLinkPop.react"), {
                                link,
                                statusItemViewEventRef: y_statusItemViewEventRef
                            }));
                            o("WAWebCmd").Cmd.openLongLinkModal();
                            return;
                        }
                    }
                }
                o("WAWebExternalLink.react").openExternalLink(n);
                if (onClick) {
                    onClick();
                }
            };
            ee = M;
            thumbnailJpeg = T;
            if (!o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(I)) {
                thumbnailJpegHQ = D;
                thumbnailJpegDirectPath = x;
                thumbnailJpegHeight = $;
                thumbnailJpegWidth = P;
            }
        }
        if (displayType === o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN) {
            const Component = r("WAWebBotReelsPluginLinkPreview.react");
            return <Component title={reelItem?.title ?? N} handleClick={ie} onClick={ie} botReelPluginThumbnailUrl={botReelPluginThumbnailUrl} reelProfilePictureUrl={reelProfilePictureUrl}/>;
        }
        const parsedAmount = o("WAWebPaymentLink").getPaymentLinkOrderHeaderComponentDisplayParams(V);
        if (parsedAmount != null) {
            const Component = r("WAWebPaymentLinkOrderDetailsHeader.react");
            return <Component isSentByMe={isSentByMe} matchedText={matchedText} onClick={ie} parsedAmount={parsedAmount}/>;
        }
        const callType = isInvite === true || !o("WAWebMediaLinkPreviewUtils").supportsCallLinkCard(displayType, theme) ? null : r("WAWebParseCallLinkType")(matchedText, true);
        const thumbnail = callType != null ? s.jsx(r("WAWebCallLinkPreviewThumbnail.react"), {
            callType,
            isSentByMe
        }) : null;
        const de = thumbnail != null ? {
            thumbnailJpeg: null,
            thumbnailJpegHQ: null,
            thumbnailJpegDirectPath: null,
            thumbnailJpegHeight: null,
            thumbnailJpegWidth: null
        } : {
            thumbnailJpeg,
            thumbnailJpegHQ,
            thumbnailJpegDirectPath,
            thumbnailJpegHeight,
            thumbnailJpegWidth
        };
        return s.jsx(r("WAWebMediaLinkPreview.react"), babelHelpers.extends({
            description: callType != null ? String(r("WAWebGetCallLinkPreviewSubtitle")()) : ee,
            displayType,
            isCallLink: callType != null,
            isInvite,
            inviteGrpType: isInvite === true ? B : null,
            onClick: ie,
            isSentByMe,
            thumbnail
        }, de, {
            title: callType != null ? String(r("WAWebGetCallLinkPreviewTitle")(callType)) : N,
            star,
            kept,
            theme,
            matchedText: callType != null ? undefined : Y ?? matchedText,
            botPluginReferenceIndex: z === o("WAWebProtobufsAICommon.pb").BotPluginMetadata$PluginType.SEARCH ? j : null,
            isLoading: false,
            horizontalLayout
        }));
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g(e) {
        let t = null;
        try {
            t = r("WAWebURLUtils").hostname(e);
            t = r("punycode").toUnicode(t);
        } catch (e) {}
        return t;
    }
    const h = memo(f);
    l.getHostnameForUrl = g;
    l.LinkPreviewContainer = h;
}, 98);