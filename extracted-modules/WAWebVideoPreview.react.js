__d("WAWebVideoPreview.react", [
    "fbt",
    "WALogger",
    "WAUnicodeUtils",
    "WAWebClickable.react",
    "WAWebClock",
    "WAWebCmd",
    "WAWebDisplayType",
    "WAWebDownloadVideoThumbnail",
    "WAWebFrontendMsgGetters",
    "WAWebHDMediaIconWrapper.react",
    "WAWebHDMediaUtils",
    "WAWebInteractiveMessageCarouselLogEvents",
    "WAWebMediaAlbumUtils",
    "WAWebMediaConstants",
    "WAWebMediaDataGetters",
    "WAWebMediaMissingModal.react",
    "WAWebMediaOpaqueData",
    "WAWebMediaStateControlDownload.react",
    "WAWebMediaStateControls.react",
    "WAWebMediaTypes",
    "WAWebMediaUnsupportedModal.react",
    "WAWebMessageCropping",
    "WAWebMessageThumbShadeBottom.react",
    "WAWebMessageThumbShadeTop.react",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMusicNewsletterAttribution.react",
    "WAWebPipButton.react",
    "WAWebPipController",
    "WAWebPipOverlay.react",
    "WAWebShowMediaNotReadableModal",
    "WAWebStateUtils",
    "WAWebTypesMedia",
    "WAWebURLUtils",
    "WAWebVideo.react",
    "WAWebWamChatPSALogger",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebWamMsgUtils",
    "WDSIconWdsIcPipLeftBottomToTopRight.react",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "react",
    "stylex",
    "useWAWebListener",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = [
        "ref"
    ];
    let f;
    let g;
    const h = g || (g = o("react"));
    const y = g;
    const { useEffect, useImperativeHandle, useRef, useState } = y;
    const R = "xekv6nw-B";
    const L = {
        thumb: {
            position: "x1n2onr6",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            maxWidth: "x193iq5w",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            backgroundColor: "xkgd8lh",
            borderStartStartRadius: "x1i282gy",
            borderStartEndRadius: "xx9ypkp",
            borderEndEndRadius: "xd15eu0",
            borderEndStartRadius: "x11ecxm0",
            "::before_position": "x1hmns74",
            "::before_top": "x1y3wzot",
            "::before_insetInlineStart": "x1682cnc",
            "::before_zIndex": "xvi4grz",
            "::before_width": "x1rmj1tg",
            "::before_height": "xszcg87",
            "::before_content": "x1cpjm7i",
            "::before_opacity": "x56jcce",
            $$css: true
        },
        inAlbum: {
            height: "xjuwc5u",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        cursorPointer: {
            cursor: "x1ypdohk",
            $$css: true
        },
        musicAttribution: {
            zIndex: "x11uqc5h",
            position: "x10l6tqk",
            top: "xfr5jun",
            insetInlineStart: "xrr41r3",
            insetInlineEnd: "x1f889gz",
            left: null,
            right: null,
            $$css: true
        },
        musicAttributionHover: {
            insetInlineStart: "x9pwknu",
            insetInlineEnd: "xeer0ze",
            left: null,
            right: null,
            transition: "x1xgqf3o",
            $$css: true
        },
        thumbChannelAlerts: {
            maxHeight: "xuyqlj2",
            $$css: true
        },
        overlay: {
            position: "x1n2onr6",
            maxWidth: "xlfzvqq",
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            "::before_position": "x1hmns74",
            "::before_zIndex": "x6m1997",
            "::before_width": "x1rmj1tg",
            "::before_height": "xszcg87",
            "::before_content": "x1cpjm7i",
            "::before_background": "x7wzjsu",
            "::before_borderStartStartRadius": "x1stc1db",
            "::before_borderStartEndRadius": "x1hhrwgz",
            "::before_borderEndEndRadius": "x1xusjh4",
            "::before_borderEndStartRadius": "xcbluxo",
            $$css: true
        },
        ctwaThumbWidth: {
            width: "xg80ozm",
            $$css: true
        }
    };
    const E = {
        PREVIEW: "PREVIEW",
        FLOATER: "FLOATER"
    };
    function k(t) {
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, _);
        const { albumMsgs, currentAlbumMessageIndex } = i;
        const y = currentAlbumMessageIndex === undefined ? 0 : currentAlbumMessageIndex;
        const { displayType, hasOverlay } = i;
        const D = hasOverlay === undefined ? false : hasOverlay;
        const { maxWidth, msgKey, theme } = i;
        const N = o("useWAWebMsgValues").useMsgValues(msgKey, [
            o("WAWebMsgGetters").getIsCarouselCard,
            o("WAWebMsgGetters").getId,
            o("WAWebMsgGetters").getIsPSA,
            o("WAWebFrontendMsgGetters").getIsUnsentMedia,
            o("WAWebMsgGetters").getType,
            o("WAWebMsgGetters").getIsFailed,
            o("WAWebMsgGetters").getCtwaContext,
            o("WAWebFrontendMsgGetters").getText
        ]);
        const M = N[0];
        const w = N[1];
        const A = N[2];
        const F = N[3];
        const O = N[4];
        const B = N[5];
        const W = N[6];
        const q = N[7];
        const U = o("useWAWebMsgValues").useMsgValues(msgKey, [
            o("WAWebMsgGetters").getCampaignId
        ]);
        const V = U[0];
        const H = o("useWAWebMsgValues").useMsgValues(msgKey, [
            o("WAWebMsgGetters").getFirstMusicAnnotation
        ]);
        const G = H[0];
        const z = G != null;
        o("useWAWebMediaDataValues").useMediaDataValues(i.mediaData, [
            o("WAWebMediaDataGetters").getAspectRatio,
            o("WAWebMediaDataGetters").getPreview,
            o("WAWebMediaDataGetters").getFullPreviewData,
            o("WAWebMediaDataGetters").getDuration,
            o("WAWebMediaDataGetters").getMediaStage,
            o("WAWebMediaDataGetters").getFullWidth,
            o("WAWebMediaDataGetters").getFullHeight,
            o("WAWebMediaDataGetters").getSize
        ]);
        const jRef = useRef(null);
        const KRef = useRef(null);
        const i_mediaData = i.mediaData;
        const X = theme === o("WAWebTypesMedia").DisplayTheme.Album || theme === o("WAWebTypesMedia").DisplayTheme.AlbumV2;
        const Y = useState(function() {
            const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (e != null && r("WAWebPipController").isOpened(e)) {
                return E.FLOATER;
            }
            return E.PREVIEW;
        });
        const J = Y[0];
        const Z = Y[1];
        const ee = useState(false);
        const te = ee[0];
        const ne = ee[1];
        const re = A;
        const oe = function(t) {
            const KRef_current = KRef.current;
            if (i_mediaData.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED && J !== E.FLOATER && KRef_current) {
                if (t) {
                    t.stopPropagation();
                }
                KRef_current.play();
            }
        };
        const ae = (t)=>{
            const KRef_current = KRef.current;
            if (i_mediaData.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED && KRef_current) {
                if (t) {
                    t.stopPropagation();
                }
                KRef_current.pauseAndReset();
            }
        };
        useEffect(function() {
            const t = I(msgKey);
            if (t != null) {
                o("WAWebDownloadVideoThumbnail").downloadVideoThumbnail({
                    msg: t,
                    chat: o("WAWebFrontendMsgGetters").getChat(t.unsafe())
                }).catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to download video thumbnail"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("video-preview-thumbnail-download-failed");
                });
                if (re) {
                    t.downloadMedia({
                        downloadEvenIfExpensive: false,
                        rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_RENDER,
                        isUserInitiated: false
                    }).catch((e)=>{
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to download video media for autoplay"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("video-preview-autoplay-download-failed");
                    });
                }
            }
        }, []);
        const ie = function() {
            const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (e != null) {
                o("WAWebModalManager").ModalManager.open(h.jsx(r("WAWebMediaMissingModal.react"), {
                    msg: e
                }));
            }
        };
        const le = function() {
            const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (e != null) {
                e.forceDownloadMediaEvenIfExpensive().catch((e)=>{
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to force download video media"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("video-preview-force-download-failed");
                });
                T("clickToDownload", e);
            }
        };
        const se = function() {
            o("WAWebMsgCollection").MsgCollection.get(msgKey)?.cancelDownload();
        };
        const ue = function() {
            o("WAWebMsgCollection").MsgCollection.get(msgKey)?.cancelUpload();
        };
        const ce = function() {
            const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (e != null) {
                e.resumeUpload().catch((e)=>{
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to resume video upload"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("video-preview-resume-upload-failed");
                });
            }
        };
        const de = function() {
            const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (e != null) {
                e.resumeRemoteUpload().catch((e)=>{
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to resume remote video upload"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("video-preview-resume-remote-upload-failed");
                });
            }
        };
        const me = function(t) {
            if (t) {
                t.stopPropagation();
            }
            const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (e != null) {
                o("WAWebModalManager").ModalManager.open(h.jsx(r("WAWebMediaUnsupportedModal.react"), {
                    msg: e
                }));
            }
        };
        const play = function(t) {
            if (t) {
                t.stopPropagation();
            }
            const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            const n = X && i.zoomMsg != null ? o("WAWebStateUtils").unproxy(i.zoomMsg.unsafe()) : e;
            if (n != null) {
                const r = e ?? n;
                if (A) {
                    o("WAWebWamChatPSALogger").logChatPSAMediaPlay(o("WAWebWamMsgUtils").getWamMediaType(r), V, w.id);
                }
                T("clickToDownload", r);
                if (X) {
                    const highlightedMsgIds = new Set((albumMsgs || []).map((e)=>e.id.toString()));
                    o("WAWebCmd").Cmd.mediaViewerModal({
                        msg: n,
                        highlightedMsgIds
                    });
                } else {
                    o("WAWebCmd").Cmd.mediaViewerModal({
                        msg: n
                    });
                }
            }
        };
        const _e = function(t) {
            if (t) {
                t.stopPropagation();
            }
            if (re) {
                ae();
            }
            const e = jRef.current ? jRef.current.getBoundingClientRect() : null;
            const n = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (n != null) {
                r("WAWebPipController").openPiP(n, 0, e);
            }
        };
        const fe = function() {
            if (J !== E.PREVIEW) {
                Z(E.PREVIEW);
            }
        };
        const ge = function() {
            if (J !== E.FLOATER) {
                Z(E.FLOATER);
            }
        };
        useImperativeHandle(t_ref, function() {
            return {
                play
            };
        });
        o("useWAWebListener").useListener(r("WAWebPipController"), `${w.toString()}_pip_did_open`, ge);
        o("useWAWebListener").useListener(r("WAWebPipController"), `${w.toString()}_pip_did_close`, fe);
        let he = null;
        let ye = null;
        const Q_mediaStage = i_mediaData.mediaStage;
        switch(Q_mediaStage){
            case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
                if (re) {
                    oe();
                    ye = play;
                } else {
                    he = h.jsx(o("WAWebMediaStateControls.react").Play, {});
                    ye = play;
                }
                break;
            case o("WAWebMediaTypes").MediaDataStage.INIT:
            case o("WAWebMediaTypes").MediaDataStage.EXISTS:
                he = h.jsx(o("WAWebMediaStateControls.react").Play, {});
                ye = play;
                break;
            case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
                he = h.jsx(r("WAWebMediaStateControlDownload.react"), {
                    filesize: i_mediaData.size
                });
                ye = le;
                break;
            case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
                he = h.jsx(o("WAWebMediaStateControls.react").Pending, {
                    cancelable: true
                });
                ye = ue;
                break;
            case o("WAWebMediaTypes").MediaDataStage.FETCHING:
                he = h.jsx(o("WAWebMediaStateControls.react").Pending, {
                    cancelable: true
                });
                ye = se;
                break;
            case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
                he = h.jsx(o("WAWebMediaStateControls.react").Upload, {
                    filesize: i_mediaData.size
                });
                ye = ce;
                break;
            case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
                he = h.jsx(o("WAWebMediaStateControls.react").Upload, {
                    filesize: i_mediaData.size
                });
                ye = de;
                break;
            case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
                ye = ie;
                break;
            case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
                if (!F) {
                    he = h.jsx(r("WAWebMediaStateControlDownload.react"), {
                        filesize: i_mediaData.size
                    });
                    ye = me;
                }
                break;
            case o("WAWebMediaTypes").MediaDataStage.SENDING:
                if (!B) {
                    he = h.jsx(o("WAWebMediaStateControls.react").Pending, {});
                }
                break;
            case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Videos should be copied in memory when selected"
                ]))).sendLogs("media-image-not-readable-error");
                ye = r("WAWebShowMediaNotReadableModal");
                break;
            case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
                break;
            case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
            case o("WAWebMediaTypes").MediaDataStage.PREPARING:
            case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY:
            case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
                he = h.jsx(o("WAWebMediaStateControls.react").Pending, {});
                break;
        }
        if (displayType === o("WAWebDisplayType").DISPLAY_TYPE.EDITING) {
            ye = null;
        }
        const be = parseInt(i_mediaData.duration, 10) ? o("WAWebClock").Clock.durationStr(i_mediaData.duration) : null;
        const ve = r("isStringNullOrEmpty")(be) ? null : <span className="x78zum5 x6s0dn4 x10l6tqk xy1j3rs xrr41r3 x11uqc5h xx3o462 x1ncwhqj x152skdk x17t9dm2"><div {...babelHelpers.extends({}, {
            0: {
                className: "x1rg5ohu x1p8j9ns x17t9dm2 x16dsc37"
            },
            1: {
                className: "x1rg5ohu x1p8j9ns x17t9dm2 x16dsc37 x4h0osi"
            }
        }[!!o("WAWebHDMediaUtils").isHdVideo(i_mediaData.fullHeight, i_mediaData.fullWidth) << 0], {
            children: h.jsx(r("WAWebHDMediaIconWrapper.react"), {
                height: i_mediaData.fullHeight,
                width: i_mediaData.fullWidth,
                type: i_mediaData.type
            })
        })}/><span>{be}</span></span>;
        const Se = o("WAUnicodeUtils").numCodepoints(q ?? "") > o("WAWebMediaConstants").MAX_PORTRAIT_MEDIA_CAPTION_LENGTH;
        const Re = o("WAWebMessageCropping").getBubbleDimension(O, false, M, i_mediaData.aspectRatio, y, albumMsgs?.length ?? 0, theme, displayType, Se, maxWidth, o("WAWebMediaAlbumUtils").isAlbumPortraitOriented(albumMsgs));
        const { bubbleHeight, bubbleWidth } = Re;
        const inlineStyle = babelHelpers.extends({
            width: bubbleWidth,
            height: bubbleHeight
        }, theme === o("WAWebTypesMedia").DisplayTheme.AlbumV2 && {
            transition: "height 0.3s ease-in-out, width 0.3s ease-in-out"
        });
        const Ie = i_mediaData.fullHeight || bubbleHeight;
        const Te = i_mediaData.fullWidth || bubbleWidth;
        const De = o("WAWebMessageCropping").getImgStyle(Te, Ie, bubbleWidth, bubbleHeight);
        const xe = (t)=>{
            if (t instanceof r("WAWebMediaOpaqueData")) {
                return babelHelpers.extends({
                    backgroundImage: r("WAWebURLUtils").thumbAsBackgroundImage(t.url()).backgroundImage
                }, De);
            }
        };
        const $e = xe(i_mediaData.preview);
        const Pe = xe(i_mediaData.fullPreviewData);
        const Ne = i_mediaData.aspectRatio >= 1 ? {
            width: "auto",
            height: bubbleHeight
        } : {
            width: bubbleWidth,
            height: "auto"
        };
        const Component = r("WAWebVideo.react");
        const Me = i_mediaData.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED && re ? <div className="x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k xh8yej3 x5yr21d"><Component ref={KRef} src={i_mediaData.renderableUrl} style={Ne} onEnded={oe} onLoadedMetadata={oe} autoPlay muted/></div> : <>{$e ? <div className="x10l6tqk xtu3fll x2o16fc x1vjfegm x1okw0bk xh8yej3 x5yr21d xu0uyjx xhohe0 xodnr36 xks1hqh xztyhrg x18d0r48 x1df5jli" style={$e}/> : null}{Pe ? <div className="x10l6tqk xtu3fll x2o16fc x1vjfegm x1okw0bk xh8yej3 x5yr21d xu0uyjx xhohe0 xodnr36 xks1hqh xztyhrg x18d0r48 x127lhb5 x4afe7t xa3vuyk x10e4vud" style={Pe}/> : null}</>;
        let we;
        const Component_1 = o("WAWebPipButton.react").PiPButton;
        switch(i_mediaData.mediaStage){
            case o("WAWebMediaTypes").MediaDataStage.INIT:
            case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
                we = <div {...babelHelpers.extends({}, {
                    0: {
                        className: "x1rozsjd xg01cxk x23gdha"
                    },
                    1: {
                        className: "x1rozsjd x23gdha x1hc1fzr"
                    }
                }[!!(i.hover === true || te) << 0], {
                    children: <Component_1 onClick={_e} onFocus={function() {
                        return ne(true);
                    }} onBlur={function() {
                        return ne(false);
                    }} theme={o("WAWebPipButton.react").PIP_BUTTON_THEME.PREVIEW}/>
                })}/>;
                break;
            default:
                we = null;
        }
        let Ae = h.jsx(r("WAWebMessageThumbShadeBottom.react"), {});
        const Fe = z ? h.jsx(r("WAWebMessageThumbShadeTop.react"), {}) : null;
        if (displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW || displayType === o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS) {
            ye = null;
            we = null;
            he = null;
            Ae = null;
        }
        let Oe;
        const Component_2 = r("WAWebPipOverlay.react");
        switch(J){
            case E.PREVIEW:
                Oe = <>{we}{he}</>;
                break;
            case E.FLOATER:
                Oe = <Component_2 icon={h.jsx(r("WDSIconWdsIcPipLeftBottomToTopRight.react"), {
                    testid: "video-pip-large",
                    height: 37,
                    width: 37
                })}>{s._("This video is playing in picture in picture.")}</Component_2>;
                break;
        }
        const Component_3 = o("WAWebClickable.react").Clickable;
        return <Component_3 ref={jRef} dataTestId="video-content" className={(f || (f = r("stylex")))(L.thumb, X && L.inAlbum, J === E.PREVIEW && displayType !== o("WAWebDisplayType").DISPLAY_TYPE.EDITING && displayType !== o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS && L.cursorPointer, D === true && L.overlay, W != null && L.ctwaThumbWidth, displayType === o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS && L.thumbChannelAlerts)} onClick={ye} inlineStyle={inlineStyle}>{D || theme === o("WAWebTypesMedia").DisplayTheme.AlbumV2 || displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW ? null : Oe}{Me}{Ae}{Fe}{D || displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW ? null : ve}{h.jsx(r("WAWebMusicNewsletterAttribution.react"), {
            playing: false,
            msgKey,
            xstyle: i.hover === true ? [
                L.musicAttribution,
                L.musicAttributionHover
            ] : L.musicAttribution
        })}</Component_3>;
    }
    k.displayName = `${k.name} [from ${i.id}]`;
    function I(msgKey) {
        const n = o("WAWebMsgCollection").MsgCollection.get(msgKey)?.safe();
        if (n == null) {
            return null;
        }
        if (n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE || n.type === o("WAWebMsgType").MSG_TYPE.VIDEO && n.isGif !== true) {
            return n;
        }
        return null;
    }
    function T(e, t) {
        if (t.isCarouselCard) {
            switch(e){
                case "clickToDownload":
                    o("WAWebInteractiveMessageCarouselLogEvents").logCarouselCardClickToDownload(t);
                    return;
                case "clickToView":
                    o("WAWebInteractiveMessageCarouselLogEvents").logCarouselCardClickToView(t);
            }
        }
    }
    l.default = k;
}, 226);