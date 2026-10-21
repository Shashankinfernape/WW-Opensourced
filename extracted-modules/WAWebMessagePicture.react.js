__d("WAWebMessagePicture.react", [
    "fbt",
    "WALogger",
    "WAUnicodeUtils",
    "WAWebBizCtwaContext.react",
    "WAWebBizTemplateMessageFooter.react",
    "WAWebClassnames",
    "WAWebClickable.react",
    "WAWebCmd",
    "WAWebDisplayType",
    "WAWebElevatedPushNamesFlag",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebHDMediaIconWrapper.react",
    "WAWebHdDownloadButton.react",
    "WAWebInteractiveMessageCarouselLogEvents",
    "WAWebMediaAlbumUtils",
    "WAWebMediaConstants",
    "WAWebMediaDataGetters",
    "WAWebMediaMissingModal.react",
    "WAWebMediaOpaqueData",
    "WAWebMediaStateControlDownload.react",
    "WAWebMediaStateControls.react",
    "WAWebMediaTypes",
    "WAWebMediaUrlProvider",
    "WAWebMessageAuthor.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageCaption.react",
    "WAWebMessageCropping",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePaidPartnershipDisclaimerText.react",
    "WAWebMessageThumbShadeBottom.react",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebShowMediaNotReadableModal",
    "WAWebStateUtils",
    "WAWebStopEvent",
    "WAWebTypesMedia",
    "WAWebVelocityTransitionGroup",
    "WAWebWamChatPSALogger",
    "WAWebWamMsgUtils",
    "WDSPaddings.stylex",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebHdBubbleState",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues",
    "useWAWebSendViewCount"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    const p = [
        "ref"
    ];
    let _;
    let f;
    const g = f || (f = o("react"));
    const h = f;
    const { useImperativeHandle, useRef } = h;
    const b = [
        o("WAWebTypesMedia").DisplayTheme.AlbumV2,
        o("WAWebTypesMedia").DisplayTheme.PhotoPoll
    ];
    const v = new Set([
        o("WAWebTypesMedia").DisplayTheme.Album,
        o("WAWebTypesMedia").DisplayTheme.AlbumV2,
        o("WAWebTypesMedia").DisplayTheme.PhotoPoll
    ]);
    const S = "xekv6nw-B";
    const R = {
        bubble: {
            boxSizing: "x9f619",
            maxWidth: "x13nahy2",
            paddingTop: "xyqdw3p",
            paddingInlineEnd: "x1im30kd",
            paddingBottom: "xg8j3zb",
            paddingInlineStart: "x1djpfga",
            position: "x1n2onr6",
            zIndex: "x1vjfegm",
            $$css: true
        },
        bubbleMaxWidthPhotoPoll: {
            maxWidth: "x193iq5w",
            $$css: true
        },
        bubbleAlbum: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        bubblePortrait: {
            maxWidth: "xpdoh32",
            $$css: true
        },
        bubbleAnnouncement: {
            maxWidth: "xmewjk2",
            $$css: true
        },
        bubbleChannelAlerts: {
            maxWidth: "x193iq5w",
            $$css: true
        },
        author: {
            paddingBottom: "xs9asl8",
            paddingInlineStart: "x25sj25",
            paddingTop: "xyqdw3p",
            $$css: true
        },
        authorElevatedPushNames: {
            paddingInlineEnd: "x11lfxj5",
            $$css: true
        },
        forwardedIndicator: {
            paddingTop: "xyqdw3p",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "xg8j3zb",
            paddingInlineStart: "x25sj25",
            $$css: true
        },
        forwardedIndicatorHasAuthor: {
            paddingTop: "xexx8yu",
            $$css: true
        },
        overlay: {
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            maxWidth: "xlfzvqq",
            position: "x1n2onr6",
            "::before_background": "x1xuolcj",
            "::before_borderStartStartRadius": "x1stc1db",
            "::before_borderStartEndRadius": "x1hhrwgz",
            "::before_borderEndEndRadius": "x1xusjh4",
            "::before_borderEndStartRadius": "xcbluxo",
            "::before_content": "x10tli2e",
            "::before_height": "xszcg87",
            "::before_position": "x1hmns74",
            "::before_width": "x1rmj1tg",
            "::before_zIndex": "x1r18s1r",
            $$css: true
        },
        overlayAnnouncement: {
            maxWidth: "x1idnn2",
            $$css: true
        },
        thumb: {
            alignItems: "x6s0dn4",
            borderStartStartRadius: "x1i282gy",
            borderStartEndRadius: "xx9ypkp",
            borderEndEndRadius: "xd15eu0",
            borderEndStartRadius: "x11ecxm0",
            display: "x78zum5",
            justifyContent: "xl56j7k",
            maxWidth: "x193iq5w",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            position: "x1n2onr6",
            $$css: true
        },
        thumbAlbum: {
            maxHeight: "xenhdjv",
            maxWidth: "x13nahy2",
            minHeight: "xqqmpm3",
            position: "x1n2onr6",
            $$css: true
        },
        thumbAlbumAnnouncement: {
            maxHeight: "xn2c4j7",
            maxWidth: "xmewjk2",
            minHeight: "x6q889",
            $$css: true
        },
        thumbGallery: {
            maxHeight: "x1983irj",
            $$css: true
        },
        thumbChannelAlerts: {
            maxHeight: "xuyqlj2",
            $$css: true
        },
        hdIcon: {
            position: "x10l6tqk",
            bottom: "x1c7jfne",
            insetInlineStart: "x1ty65gk",
            left: null,
            right: null,
            zIndex: "xk3oba8",
            $$css: true
        },
        hdControl: {
            marginBottom: "x4tpdpg",
            $$css: true
        }
    };
    function LComponent(e) {
        const t = o("react-compiler-runtime").c(19);
        const { animateIn, bubbleHeight, bubbleWidth, caption, disableContextMenu, draggable, imgRef, isPreview, mediaData, src, useDynamicSizing } = e;
        const _ = animateIn === undefined ? false : animateIn;
        const f = disableContextMenu === undefined ? false : disableContextMenu;
        const h = isPreview === undefined ? false : isPreview;
        const { fullHeight, fullWidth } = mediaData;
        const b = fullHeight || bubbleHeight;
        const v = fullWidth || bubbleWidth;
        let S;
        if (t[0] !== _ || t[1] !== h) {
            S = ({
                0: "x15kfjtz x1c4vz4f x2lah0s xdl72j9",
                2: "x15kfjtz x1c4vz4f x2lah0s xdl72j9 x1df5jli",
                1: "x15kfjtz x1c4vz4f x2lah0s xdl72j9 x127lhb5 x4afe7t xa3vuyk x10e4vud",
                3: "x15kfjtz x1c4vz4f x2lah0s xdl72j9 x1df5jli x127lhb5 x4afe7t xa3vuyk x10e4vud"
            })[!!h << 1 | !!_ << 0];
            t[0] = _;
            t[1] = h;
            t[2] = S;
        } else {
            S = t[2];
        }
        const R = S;
        let L;
        if (t[3] !== bubbleHeight || t[4] !== bubbleWidth || t[5] !== b || t[6] !== v || t[7] !== useDynamicSizing) {
            L = useDynamicSizing ? {
                width: "100%",
                height: "100%",
                objectFit: "cover"
            } : o("WAWebMessageCropping").getImgStyle(v, b, bubbleWidth, bubbleHeight);
            t[3] = bubbleHeight;
            t[4] = bubbleWidth;
            t[5] = b;
            t[6] = v;
            t[7] = useDynamicSizing;
            t[8] = L;
        } else {
            L = t[8];
        }
        const E = L;
        let k;
        if (t[9] !== f) {
            k = function(t) {
                if (f) {
                    t.preventDefault();
                }
            };
            t[9] = f;
            t[10] = k;
        } else {
            k = t[10];
        }
        const I = k;
        let T;
        if (t[11] !== caption || t[12] !== draggable || t[13] !== I || t[14] !== R || t[15] !== imgRef || t[16] !== E || t[17] !== src) {
            T = <img alt={caption} src={src} className={R} style={E} ref={imgRef} draggable={draggable} onContextMenu={I}/>;
            t[11] = caption;
            t[12] = draggable;
            t[13] = I;
            t[14] = R;
            t[15] = imgRef;
            t[16] = E;
            t[17] = src;
            t[18] = T;
        } else {
            T = t[18];
        }
        return T;
    }
    function EComponent(e) {
        const t = o("react-compiler-runtime").c(16);
        const { bubbleHeight, bubbleWidth, caption, disableContextMenu, draggable, imgRef, mediaData, useDynamicSizing } = e;
        const m = disableContextMenu === undefined ? false : disableContextMenu;
        let p;
        if (t[0] !== mediaData.fullPreviewData) {
            p = mediaData.fullPreviewData?.url() ?? null;
            t[0] = mediaData.fullPreviewData;
            t[1] = p;
        } else {
            p = t[1];
        }
        const h = p;
        let y;
        if (t[2] !== h || t[3] !== mediaData.preview) {
            y = h ?? (mediaData.preview instanceof r("WAWebMediaOpaqueData") ? mediaData.preview.url() : null);
            t[2] = h;
            t[3] = mediaData.preview;
            t[4] = y;
        } else {
            y = t[4];
        }
        const C = y;
        const b = h == null;
        let v;
        if (t[5] !== bubbleHeight || t[6] !== bubbleWidth || t[7] !== caption || t[8] !== m || t[9] !== draggable || t[10] !== imgRef || t[11] !== mediaData || t[12] !== C || t[13] !== b || t[14] !== useDynamicSizing) {
            v = <LComponent imgRef={imgRef} mediaData={mediaData} caption={caption} bubbleWidth={bubbleWidth} bubbleHeight={bubbleHeight} isPreview={b} src={C} useDynamicSizing={useDynamicSizing} disableContextMenu={m} draggable={draggable}/>;
            t[5] = bubbleHeight;
            t[6] = bubbleWidth;
            t[7] = caption;
            t[8] = m;
            t[9] = draggable;
            t[10] = imgRef;
            t[11] = mediaData;
            t[12] = C;
            t[13] = b;
            t[14] = useDynamicSizing;
            t[15] = v;
        } else {
            v = t[15];
        }
        return v;
    }
    function KComponent(e) {
        const n = o("react-compiler-runtime").c(35);
        const e_ref = e.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(e, p);
        const { albumMsgs, captionComponent, contentContainerClassName, currentAlbumMessageIndex, displayAuthor, displayType, hideMeta, isMsgVisible, maxWidth, msgKey, onThumbClick, overlayContent, preventDownload, theme, thumbClassName, zoomMsg } = i;
        const q = currentAlbumMessageIndex === undefined ? 0 : currentAlbumMessageIndex;
        const U = preventDownload === undefined ? false : preventDownload;
        const VRef = useRef(null);
        let H;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let G;
            let z;
            H = [
                (G = o("WAWebMsgGetters")).getAck,
                G.getCaption,
                (z = o("WAWebFrontendMsgGetters")).getDir,
                G.getFooter,
                G.getIsFromTemplate,
                G.getIsCarouselCard,
                G.getId,
                G.getIsGroupMsg,
                G.getIsPSA,
                G.getIsSentByMe,
                z.getRtl,
                z.getSenderObj,
                G.getType,
                G.getSupportsMessageFooter,
                z.getText,
                z.getShouldShowForwarded,
                G.getIsNewsletterMsg
            ];
            n[0] = H;
        } else {
            H = n[0];
        }
        const j = o("useWAWebMsgValues").useMsgValues(msgKey, H);
        const K = j[1];
        const Q = j[2];
        const X = j[3];
        const Y = j[4];
        const J = j[5];
        const Z = j[6];
        const ee = j[8];
        const te = j[10];
        const ne = j[11];
        const re = j[12];
        const oe = j[13];
        const ae = j[14];
        const ie = j[15];
        const le = j[16];
        const se = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(msgKey, le);
        let ue;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            let ce;
            ue = [
                (ce = o("WAWebMediaDataGetters")).getAspectRatio,
                ce.getFullPreviewData,
                ce.getPreview,
                ce.getMediaStage,
                ce.getFullWidth,
                ce.getFullHeight,
                ce.getSize,
                ce.getProgressiveStage,
                ce.getType
            ];
            n[1] = ue;
        } else {
            ue = n[1];
        }
        const de = o("useWAWebMediaDataValues").useMediaDataValues(i.mediaData, ue);
        const me = de[0];
        const pe = de[3];
        const _e = o("useWAWebSendViewCount").useSendViewCount(msgKey, {
            mediaData: i.mediaData,
            displayType: i.displayType
        });
        const fe = o("useWAWebHdBubbleState").useHdBubbleState(msgKey, i.mediaData, {
            displayTheme: theme,
            displayType,
            hasOverlay: overlayContent != null
        });
        const showMediaMissing = function() {
            const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (e != null) {
                o("WAWebModalManager").ModalManager.open(g.jsx(r("WAWebMediaMissingModal.react"), {
                    msg: e
                }));
            }
        };
        const he = function(t) {
            if (!isMsgVisible) {
                return null;
            }
            const e = isMsgVisible(t);
            if (typeof e === "boolean" || e == null) {
                return null;
            }
            const { getImgNode, getImgNodeByMsgKey, isCardVisible } = e;
            if (getImgNode != null) {
                return getImgNode();
            }
            if (getImgNodeByMsgKey != null && isCardVisible != null && isCardVisible(t)) {
                return getImgNodeByMsgKey(t);
            }
            return null;
        };
        const forceDownloadMedia = function() {
            const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (e != null) {
                e.forceDownloadMediaEvenIfExpensive().catch(x);
                w("clickToDownload", e);
            }
        };
        const cancelDownload = function() {
            o("WAWebMsgCollection").MsgCollection.get(msgKey)?.cancelDownload();
        };
        const cancelUpload = function() {
            o("WAWebMsgCollection").MsgCollection.get(msgKey)?.cancelUpload();
        };
        const resumeUpload = function() {
            const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (e != null) {
                e.resumeUpload().catch(D);
            }
        };
        const resumeRemoteUpload = function() {
            const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (e != null) {
                e.resumeRemoteUpload().catch(T);
            }
        };
        let Re;
        if (n[2] !== K || n[3] !== re) {
            Re = function() {
                if (re === o("WAWebMsgType").MSG_TYPE.IMAGE && !r("isStringNullOrEmpty")(K)) {
                    return K;
                }
            };
            n[2] = K;
            n[3] = re;
            n[4] = Re;
        } else {
            Re = n[4];
        }
        const Le = Re;
        let Ee;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            Ee = function() {
                return VRef.current;
            };
            n[5] = Ee;
        } else {
            Ee = n[5];
        }
        const ke = Ee;
        let Ie;
        if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
            Ie = function() {
                return {
                    getImgNode: ke
                };
            };
            n[6] = Ie;
        } else {
            Ie = n[6];
        }
        useImperativeHandle(e_ref, Ie);
        const launchMediaViewer = function(t) {
            if (t) {
                t.stopPropagation();
            }
            const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (e != null) {
                if (ee) {
                    o("WAWebWamChatPSALogger").logChatPSAMediaPlay(o("WAWebWamMsgUtils").getWamMediaType(e), e.campaignId, Z.id);
                }
                w("clickToView", e);
                if (theme != null && v.has(theme)) {
                    const n = new Set((albumMsgs || []).map(I));
                    o("WAWebCmd").Cmd.mediaViewerModal({
                        msg: zoomMsg != null ? o("WAWebStateUtils").unproxy(zoomMsg.unsafe()) : e,
                        getZoomNode: he,
                        highlightedMsgIds: n,
                        shouldShowNumberText: theme === o("WAWebTypesMedia").DisplayTheme.PhotoPoll
                    });
                } else {
                    o("WAWebCmd").Cmd.mediaViewerModal({
                        msg: e,
                        getZoomNode: he
                    });
                }
            }
        };
        const De = o("WAUnicodeUtils").numCodepoints(ae ?? "") > o("WAWebMediaConstants").MAX_PORTRAIT_MEDIA_CAPTION_LENGTH;
        const xe = o("WAWebMessageCropping").getBubbleDimension(re, Y, J, me, q, albumMsgs?.length ?? 0, theme, displayType, De, maxWidth, o("WAWebMediaAlbumUtils").isAlbumPortraitOriented(albumMsgs));
        const { bubbleHeight, bubbleWidth } = xe;
        const Ne = theme === o("WAWebTypesMedia").DisplayTheme.AlbumV2 && {
            transition: "height 0.3s ease-in-out, width 0.3s ease-in-out"
        };
        let Me;
        if (n[7] !== bubbleHeight || n[8] !== bubbleWidth || n[9] !== Ne) {
            Me = babelHelpers.extends({
                width: bubbleWidth,
                height: bubbleHeight
            }, Ne);
            n[7] = bubbleHeight;
            n[8] = bubbleWidth;
            n[9] = Ne;
            n[10] = Me;
        } else {
            Me = n[10];
        }
        const inlineStyle = Me;
        const Ae = Le();
        let Fe = !r("isStringNullOrEmpty")(Ae) || captionComponent != null ? null : g.jsx(r("WAWebMessageThumbShadeBottom.react"), {});
        const Oe = bubbleWidth < bubbleHeight && o("WAWebMessageCropping").canUseCustomCropping({
            displayType,
            msgType: re,
            theme
        });
        const Be = o("WAWebDisplayType").isWideDisplay(displayType);
        let We = !r("isStringNullOrEmpty")(Ae) && (theme == null || !b.includes(theme)) ? <div {...babelHelpers.extends({}, {
            0: {
                className: "x9f619 x1xtabgy xm7lytj x11lfxj5 xs9asl8 x25sj25"
            },
            4: {
                className: "x9f619 xm7lytj x11lfxj5 xs9asl8 x25sj25 xsi3fy0"
            },
            2: {
                className: "x9f619 xm7lytj x11lfxj5 xs9asl8 x25sj25 xno0opx"
            },
            6: {
                className: "x9f619 xm7lytj x11lfxj5 xs9asl8 x25sj25 xno0opx"
            },
            1: {
                className: "x9f619 x1xtabgy xm7lytj x11lfxj5 x25sj25 x1em1mmk"
            },
            5: {
                className: "x9f619 xm7lytj x11lfxj5 x25sj25 xsi3fy0 x1em1mmk"
            },
            3: {
                className: "x9f619 xm7lytj x11lfxj5 x25sj25 xno0opx x1em1mmk"
            },
            7: {
                className: "x9f619 xm7lytj x11lfxj5 x25sj25 xno0opx x1em1mmk"
            }
        }[!!Oe << 2 | !!Be << 1 | !!ee << 0], {
            children: g.jsx(r("WAWebMessageCaption.react"), {
                msgKey,
                trusted: i.trusted,
                spacer: !(oe && X),
                testId: "image-caption"
            })
        })}/> : null;
        let qe;
        if (displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW) {
            We = null;
            qe = null;
            Fe = null;
        } else if (displayType === o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS) {
            qe = null;
        } else if (displayType === o("WAWebDisplayType").DISPLAY_TYPE.EDITING) {
            qe = onThumbClick ?? null;
        } else if (overlayContent != null) {
            qe = onThumbClick || launchMediaViewer;
        } else {
            qe = M({
                cancelDownload,
                cancelUpload,
                forceDownloadMedia,
                launchMediaViewer,
                mediaStage: pe,
                onThumbClick,
                resumeRemoteUpload,
                resumeUpload,
                showMediaMissing
            });
        }
        const Ue = ie && i.theme !== o("WAWebTypesMedia").DisplayTheme.Album && i.theme !== o("WAWebTypesMedia").DisplayTheme.AlbumV2 && i.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW;
        const Ve = theme === o("WAWebTypesMedia").DisplayTheme.Album || theme === o("WAWebTypesMedia").DisplayTheme.AlbumV2;
        const He = (_ || (_ = r("stylex")))(R.bubble, Oe && R.bubblePortrait, Ve && R.bubbleAlbum, Be && R.bubbleAnnouncement, i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS && R.bubbleChannelAlerts, i.theme === o("WAWebTypesMedia").DisplayTheme.PhotoPoll && R.bubbleMaxWidthPhotoPoll);
        const Ge = i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO || i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS;
        const ze = o("WAWebClassnames").classnamesConvertMeToStylexPlease(He, {
            0: "",
            1: "x193iq5w"
        }[!!Ge << 0]);
        const je = displayAuthor ? <div {...babelHelpers.extends({}, (_ || (_ = r("stylex"))).props(R.author, Ue && o("WDSPaddings.stylex").wdsPaddings.paddingBottom0, o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(se) && R.authorElevatedPushNames), {
            children: g.jsx(r("WAWebMessageAuthor.react"), {
                msgKey,
                contact: ne,
                displayType: i.displayType
            })
        })}/> : null;
        const Ke = Ue ? g.jsx(r("WAWebMessageForwardedIndicator.react"), {
            msgKey,
            xstyle: [
                R.forwardedIndicator,
                displayAuthor && R.forwardedIndicatorHasAuthor
            ]
        }) : null;
        let Qe;
        if (n[11] !== msgKey) {
            Qe = g.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
                msgKey
            });
            n[11] = msgKey;
            n[12] = Qe;
        } else {
            Qe = n[12];
        }
        const Xe = Qe;
        const Ye = i.quotedMsg ? <div {...babelHelpers.extends({}, {
            0: {
                className: "x9f619 x1xtabgy xahult9"
            },
            2: {
                className: "x9f619 xahult9 xsi3fy0"
            },
            1: {
                className: "x9f619 xahult9 xno0opx"
            },
            3: {
                className: "x9f619 xahult9 xno0opx"
            }
        }[!!Oe << 1 | !!(Be || i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS) << 0], {
            children: i.quotedMsg
        })}/> : null;
        const Je = i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY;
        const Ze = _(R.thumb, !!overlayContent && R.overlay, !!overlayContent && Be && R.overlayAnnouncement, Ve && R.thumbAlbum, Ve && Be && R.thumbAlbumAnnouncement, Je && R.thumbGallery, i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS && R.thumbChannelAlerts);
        let et;
        if (overlayContent == null && hideMeta !== true && theme !== o("WAWebTypesMedia").DisplayTheme.AlbumV2) {
            let tt;
            if (n[13] !== Ae || n[14] !== Ve) {
                tt = ({
                    0: {
                        className: "xrb244j x10l6tqk x11dcrhx xhtitgo"
                    },
                    2: {
                        className: "x10l6tqk xhtitgo x1inkcgm xy1j3rs"
                    },
                    1: {
                        className: "x10l6tqk xhtitgo xceh6e4 xy1j3rs"
                    },
                    3: {
                        className: "x10l6tqk xhtitgo xceh6e4 xy1j3rs"
                    }
                })[!!Ae << 1 | !!Ve << 0];
                n[13] = Ae;
                n[14] = Ve;
                n[15] = tt;
            } else {
                tt = n[15];
            }
            et = <div {...babelHelpers.extends({}, tt, {
                children: g.jsx(o("WAWebMessageMeta.react").Meta, {
                    msgKey,
                    displayType,
                    isAlbum: Ve
                })
            })}/>;
        }
        const draggable = !U && !r("WAWebEnvironment").isWindows;
        let rt;
        if (n[16] === Symbol.for("react.memo_cache_sentinel")) {
            rt = "xdj266r x14z9mp xahult9 x1lziwak";
            n[16] = rt;
        } else {
            rt = n[16];
        }
        let ot;
        if (n[17] !== msgKey) {
            ot = g.jsx(r("WAWebBizCtwaContext.react"), {
                msgKey,
                wrapperClass: rt
            });
            n[17] = msgKey;
            n[18] = ot;
        } else {
            ot = n[18];
        }
        const at = qe;
        let it;
        if (n[19] === Symbol.for("react.memo_cache_sentinel")) {
            it = s._("Open picture");
            n[19] = it;
        } else {
            it = n[19];
        }
        let lt;
        if (n[20] !== fe.displayMediaData.fullHeight || n[21] !== fe.displayMediaData.fullWidth || n[22] !== fe.displayMediaData.type) {
            lt = g.jsx(r("WAWebHDMediaIconWrapper.react"), {
                height: fe.displayMediaData.fullHeight,
                width: fe.displayMediaData.fullWidth,
                type: fe.displayMediaData.type,
                xstyle: R.hdIcon
            });
            n[20] = fe.displayMediaData.fullHeight;
            n[21] = fe.displayMediaData.fullWidth;
            n[22] = fe.displayMediaData.type;
            n[23] = lt;
        } else {
            lt = n[23];
        }
        let st;
        if (n[24] !== Q || n[25] !== X || n[26] !== msgKey || n[27] !== i || n[28] !== te || n[29] !== oe || n[30] !== re) {
            st = g.jsx(r("WAWebBizTemplateMessageFooter.react"), {
                dir: Q,
                footer: X,
                isShown: oe,
                msgKey,
                rtl: te,
                trusted: i.trusted,
                type: re
            });
            n[24] = Q;
            n[25] = X;
            n[26] = msgKey;
            n[27] = i;
            n[28] = te;
            n[29] = oe;
            n[30] = re;
            n[31] = st;
        } else {
            st = n[31];
        }
        const Component = r("WAWebMediaUrlProvider");
        const Component_1 = o("WAWebClickable.react").Clickable;
        let ut = <div className={contentContainerClassName} ref={_e}>{je}{Ke}{Xe}{Ye}{ot}<Component_1 dataTestId="image-thumb" className={r("isStringNullOrEmpty")(thumbClassName) ? Ze : thumbClassName} onClick={at} ariaLabel={it} focusTheme={o("WAWebClickable.react").FocusTheme.Image} inlineStyle={inlineStyle}>{overlayContent == null && <NComponent mediaData={i.mediaData} msgKey={msgKey}/>}<Component mediaData={fe.displayMediaData} placeholderRenderer={function() {
            return <EComponent useDynamicSizing={displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER || displayType === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT} imgRef={VRef} mediaData={i.mediaData} caption={Le()} bubbleWidth={bubbleWidth} bubbleHeight={bubbleHeight} draggable={draggable} disableContextMenu={U}/>;
        }} downloadMedia={fe.downloadDisplayedLeg} renderProgressively>{function(t, n) {
            return <LComponent useDynamicSizing={displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER || displayType === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT} isPreview={n} imgRef={VRef} mediaData={i.mediaData} caption={Le()} bubbleWidth={bubbleWidth} bubbleHeight={bubbleHeight} src={t} animateIn={!n} draggable={draggable} disableContextMenu={U}/>;
        }}</Component>{Fe}{overlayContent == null && fe.canOfferHdControl && !U && g.jsx(r("WAWebHdDownloadButton.react"), babelHelpers.extends({}, fe.hdControl, {
            xstyle: [
                R.hdIcon,
                R.hdControl
            ]
        }))}{lt}</Component_1>{captionComponent || We}{st}{et}</div>;
        if (We) {
            const Component = r("WAWebMessageBubbleHiddenText.react");
            return <Component contact={ne} msgKey={msgKey} className={ze} onClick={o("WAWebStopEvent").stopPropagation}>{ut}</Component>;
        }
        if (overlayContent != null) {
            ut = <div {...babelHelpers.extends({}, {
                0: {
                    className: "x6s0dn4 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1ypdohk x78zum5 x1iyjqo2 xs83m0k x1r8uery xl56j7k xlfzvqq x6ikm8r x10wlt62 x1n2onr6"
                },
                1: {
                    className: "x6s0dn4 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1ypdohk x78zum5 x1iyjqo2 xs83m0k x1r8uery xl56j7k x6ikm8r x10wlt62 x1n2onr6 x1idnn2"
                }
            }[!!Be << 0], {
                children: [
                    ut,
                    overlayContent
                ]
            })}/>;
        }
        let ct;
        if (n[32] !== ze || n[33] !== ut) {
            ct = <div className={ze} onClick={o("WAWebStopEvent").stopPropagation}>{ut}</div>;
            n[32] = ze;
            n[33] = ut;
            n[34] = ct;
        } else {
            ct = n[34];
        }
        return ct;
    }
    function I(e) {
        return e.id.toString();
    }
    function T() {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[message-picture] failed to resume remote upload"
        ]))).sendLogs("failed-to-resume-remote-upload");
    }
    function D() {
        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[message-picture] failed to resume upload"
        ]))).sendLogs("failed-to-resume-upload");
    }
    function x() {
        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "[message-picture] failed to force download media"
        ]))).sendLogs("failed-to-force-download-media");
    }
    const P = KComponent;
    function NComponent(e) {
        const t = o("react-compiler-runtime").c(18);
        const { mediaData, msgKey } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebMediaDataGetters").getMediaStage,
                o("WAWebMediaDataGetters").getProgressiveStage
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebMediaDataValues").useMediaDataValues(mediaData, i);
        const s = l[0];
        const u = l[1];
        let c;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            c = [
                o("WAWebMsgGetters").getIsFailed
            ];
            t[1] = c;
        } else {
            c = t[1];
        }
        const m = o("useWAWebMsgValues").useMsgValues(msgKey, c);
        const p = m[0];
        let _ = null;
        e: switch(s){
            case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
            case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY:
                break e;
            case o("WAWebMediaTypes").MediaDataStage.FETCHING:
                {
                    let f;
                    if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                        f = g.jsx(o("WAWebMediaStateControls.react").Pending, {
                            cancelable: true
                        });
                        t[2] = f;
                    } else {
                        f = t[2];
                    }
                    _ = f;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.INIT:
            case o("WAWebMediaTypes").MediaDataStage.EXISTS:
            case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
                {
                    let h;
                    if (t[3] !== mediaData.size) {
                        h = g.jsx(r("WAWebMediaStateControlDownload.react"), {
                            filesize: mediaData.size
                        });
                        t[3] = mediaData.size;
                        t[4] = h;
                    } else {
                        h = t[4];
                    }
                    _ = h;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
            case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
                {
                    let y;
                    if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                        y = g.jsx(o("WAWebMediaStateControls.react").Pending, {
                            cancelable: true
                        });
                        t[5] = y;
                    } else {
                        y = t[5];
                    }
                    _ = y;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
                {
                    let C;
                    if (t[6] !== mediaData.size) {
                        C = g.jsx(o("WAWebMediaStateControls.react").Upload, {
                            filesize: mediaData.size
                        });
                        t[6] = mediaData.size;
                        t[7] = C;
                    } else {
                        C = t[7];
                    }
                    _ = C;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
                {
                    let b;
                    if (t[8] !== mediaData.size) {
                        b = g.jsx(o("WAWebMediaStateControls.react").Upload, {
                            filesize: mediaData.size
                        });
                        t[8] = mediaData.size;
                        t[9] = b;
                    } else {
                        b = t[9];
                    }
                    _ = b;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
                break e;
            case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
                {
                    let v;
                    if (t[10] !== mediaData.size) {
                        v = g.jsx(r("WAWebMediaStateControlDownload.react"), {
                            filesize: mediaData.size
                        });
                        t[10] = mediaData.size;
                        t[11] = v;
                    } else {
                        v = t[11];
                    }
                    _ = v;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.SENDING:
                {
                    let S;
                    if (t[12] !== p) {
                        S = p ? null : g.jsx(o("WAWebMediaStateControls.react").Pending, {});
                        t[12] = p;
                        t[13] = S;
                    } else {
                        S = t[13];
                    }
                    _ = S;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
                {
                    if (u == null) {
                        let R;
                        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
                            R = g.jsx(o("WAWebMediaStateControls.react").Pending, {
                                cancelable: true
                            });
                            t[14] = R;
                        } else {
                            R = t[14];
                        }
                        _ = R;
                    }
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
                {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Images should be copied in memory when selected"
                    ]))).sendLogs("media-image-not-readable-error");
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
                break e;
            case o("WAWebMediaTypes").MediaDataStage.PREPARING:
            case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
                {
                    let L;
                    if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
                        L = g.jsx(o("WAWebMediaStateControls.react").Pending, {});
                        t[15] = L;
                    } else {
                        L = t[15];
                    }
                    _ = L;
                }
        }
        let E;
        if (t[16] !== _) {
            const Component = r("WAWebVelocityTransitionGroup");
            E = <Component transitionName="fade-ease-out">{_}</Component>;
            t[16] = _;
            t[17] = E;
        } else {
            E = t[17];
        }
        return E;
    }
    function M({ cancelDownload, cancelUpload, forceDownloadMedia, launchMediaViewer, mediaStage, onThumbClick, resumeRemoteUpload, resumeUpload, showMediaMissing }) {
        switch(mediaStage){
            case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
            case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY:
                return onThumbClick || launchMediaViewer;
            case o("WAWebMediaTypes").MediaDataStage.FETCHING:
                return cancelDownload;
            case o("WAWebMediaTypes").MediaDataStage.INIT:
            case o("WAWebMediaTypes").MediaDataStage.EXISTS:
            case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
                return forceDownloadMedia;
            case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
            case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
                return cancelUpload;
            case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
                return resumeUpload;
            case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
                return resumeRemoteUpload;
            case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
                return onThumbClick || showMediaMissing;
            case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
                return onThumbClick || launchMediaViewer;
            case o("WAWebMediaTypes").MediaDataStage.SENDING:
                return;
            case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
                return;
            case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Images should be copied in memory when selected"
                ]))).sendLogs("media-image-not-readable-error");
                return r("WAWebShowMediaNotReadableModal");
            case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
                return;
            case o("WAWebMediaTypes").MediaDataStage.PREPARING:
            case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
                return;
        }
    }
    function w(e, t) {
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
    l.ImageMessage = P;
}, 226);