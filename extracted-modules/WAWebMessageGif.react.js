__d("WAWebMessageGif.react", [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebBizCtwaContext.react",
    "WAWebChatPreferenceCollection",
    "WAWebChatPreferenceGetters",
    "WAWebClickable.react",
    "WAWebCmd",
    "WAWebDashDebugBubbleBadgeSlot.react",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebGiphyIcon.react",
    "WAWebMediaDataGetters",
    "WAWebMediaMissingModal.react",
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebMessageAuthor.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageCaption.react",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageGifState.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePaidPartnershipDisclaimerText.react",
    "WAWebMessageThumbShadeBottom.react",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebStopEvent",
    "WAWebTenorIcon.react",
    "WAWebVideo.react",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "react",
    "stylex",
    "useWAWebChatPreferenceValues",
    "useWAWebIntersection",
    "useWAWebMediaDataValues",
    "useWAWebMsgDownloadMedia",
    "useWAWebMsgValues",
    "useWAWebSendViewCount",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = [
        "ref"
    ];
    let m;
    let p;
    const _ = p || (p = o("react"));
    const f = p;
    const { useEffect, useImperativeHandle, useRef, useState } = f;
    const b = {
        backgroundImage: "x1e87kdn",
        $$css: true
    };
    const v = {
        caption: {
            boxSizing: "x9f619",
            minWidth: "xzd8eb0",
            maxWidth: "xdduh5l",
            paddingTop: "xm7lytj",
            paddingInlineEnd: "x11lfxj5",
            paddingBottom: "xs9asl8",
            paddingInlineStart: "x25sj25",
            $$css: true
        },
        captionPSA: {
            paddingBottom: "x1em1mmk",
            $$css: true
        },
        captionMaxWidth: function(t) {
            return [
                {
                    maxWidth: t != null ? "xf68679" : t,
                    $$css: true
                },
                {
                    "--x-maxWidth": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        thumbImage: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            width: "xh8yej3",
            height: "x5yr21d",
            backgroundPosition: "x1xsqp64",
            backgroundSize: "x18d0r48",
            $$css: true
        },
        thumbImageSrc: function(t) {
            return [
                b,
                {
                    "--x-backgroundImage": `url(${t})` != null ? `url(${t})` : undefined
                }
            ];
        }
    };
    const S = 330;
    const R = 474;
    const L = 3;
    const E = 4;
    const k = 1;
    const I = 3;
    const T = 5;
    function D(t) {
        let n;
        let a;
        const t_ref = t.ref;
        const l = babelHelpers.objectWithoutPropertiesLoose(t, d);
        const { isMsgVisible, msgKey } = l;
        const b = o("useWAWebMsgValues").useMsgValues(msgKey, [
            (n = o("WAWebMsgGetters")).getId,
            n.getAck,
            n.getCaption,
            n.getIsFailed,
            n.getIsPSA,
            n.getIsSentByMe,
            n.getIsGroupMsg,
            n.getGifAttribution,
            o("WAWebFrontendMsgGetters").getSenderObj,
            o("WAWebFrontendMsgGetters").getShouldShowForwarded
        ]);
        const D = b[0];
        const x = b[1];
        const $ = b[2];
        const isFailed = b[3];
        const N = b[4];
        const M = b[5];
        const w = b[6];
        const A = b[7];
        const F = b[8];
        const O = b[9];
        const B = o("useWAWebMediaDataValues").useMediaDataValues(l.mediaData, [
            (a = o("WAWebMediaDataGetters")).getAspectRatio,
            a.getPreview,
            a.getDuration,
            a.getType,
            a.getMediaStage,
            a.getRenderableUrl,
            a.getFullWidth,
            a.getFullHeight,
            a.getSize
        ]);
        const W = B[0];
        const q = B[1];
        const U = B[2];
        const V = B[3];
        const H = B[4];
        const G = B[5];
        const z = B[6];
        const j = B[7];
        const K = B[8];
        const QRef = useRef(null);
        const XRef = useRef(false);
        const YRef = useRef(false);
        const JRef = useRef(0);
        const ZRef = useRef(null);
        const eeRef = useRef();
        const te = useState(false);
        const ne = te[0];
        const re = te[1];
        const oe = r("useWAWebUnmountSignal")();
        const ae = o("useWAWebChatPreferenceValues").useChatPreferenceValues(r("WAWebChatPreferenceCollection").getDefault().id, [
            o("WAWebChatPreferenceGetters").getAutoplayAnimatedImages
        ]);
        const ie = ae[0];
        const le = ie === true && l.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS;
        o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(msgKey);
        const se = o("WAWebDisplayType").isWideDisplay(l.displayType) || l.displayType === o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS ? R : S;
        const ue = se / E;
        const ce = ()=>{
            re(false);
            QRef.current?.pauseAndReset();
        };
        const pause = function() {
            JRef.current = 0;
            ce();
        };
        const me = function() {
            const QRef_current = QRef.current;
            if (QRef_current) {
                if (JRef.current <= 0) {
                    pause();
                    return;
                }
                JRef.current -= 1;
                if (!ne) {
                    re(true);
                }
                QRef_current.play();
            }
        };
        const pe = ()=>{
            const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (e != null) {
                o("WAWebModalManager").ModalManager.open(_.jsx(r("WAWebMediaMissingModal.react"), {
                    msg: e
                }));
            }
        };
        const _e = function(t) {
            if (!isMsgVisible) {
                return null;
            }
            const e = isMsgVisible(t);
            if (e == null || typeof e === "boolean") {
                return null;
            }
            return e.getImgNode && e.getImgNode();
        };
        const fe = (t)=>{
            const QRef_current = QRef.current;
            if (H === o("WAWebMediaTypes").MediaDataStage.RESOLVED && QRef_current) {
                if (t) {
                    t.stopPropagation();
                }
                if (!XRef.current) {
                    YRef.current = true;
                    return;
                }
                YRef.current = false;
                if (ZRef.current == null || ZRef.current === 0) {
                    const i = QRef_current.getDuration();
                    if (i != null && !isNaN(i)) {
                        ZRef.current = i;
                    } else if (U && U !== "0") {
                        ZRef.current = parseInt(U, 10);
                    }
                }
                const l = o("WAWebABProps").getABPropConfigValue("gif_min_play_loops") ?? k;
                const s = o("WAWebABProps").getABPropConfigValue("gif_max_play_loops") ?? I;
                const u = o("WAWebABProps").getABPropConfigValue("gif_max_play_duration") ?? T;
                if (ZRef.current != null && ZRef.current !== 0) {
                    const c = Math.ceil(u / ZRef.current);
                    JRef.current = Math.max(Math.min(c, s), l);
                } else {
                    JRef.current = l;
                }
                me();
            }
        };
        const ge = ()=>{
            const t = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (t != null) {
                t.forceDownloadMediaEvenIfExpensive().catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to force download GIF media"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("gif-force-download-failed");
                });
            }
        };
        const he = ()=>{
            o("WAWebMsgCollection").MsgCollection.get(msgKey)?.cancelDownload();
        };
        const ye = ()=>{
            o("WAWebMsgCollection").MsgCollection.get(msgKey)?.cancelUpload();
        };
        const Ce = ()=>{
            const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (e != null) {
                e.resumeUpload().catch((e)=>{
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to resume GIF upload"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("gif-resume-upload-failed");
                });
            }
        };
        const be = ()=>{
            const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (e != null) {
                e.resumeRemoteUpload().catch((e)=>{
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to resume remote GIF upload"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("gif-resume-remote-upload-failed");
                });
            }
        };
        const ve = ()=>!ne && JRef.current !== Infinity;
        const Se = (t)=>{
            if (t) {
                t.stopPropagation();
            }
            const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
            if (e != null) {
                o("WAWebCmd").Cmd.mediaViewerModal({
                    msg: e,
                    getZoomNode: _e
                });
            }
        };
        let Re;
        if (l.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.EDITING && l.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW && l.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS) {
            Re = function(t) {
                switch(H){
                    case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
                        if (ve()) {
                            fe(t);
                        } else {
                            Se(t);
                        }
                        break;
                    case o("WAWebMediaTypes").MediaDataStage.INIT:
                        Se(t);
                        break;
                    case o("WAWebMediaTypes").MediaDataStage.FETCHING:
                        he();
                        break;
                    case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
                        ge();
                        break;
                    case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
                        ye();
                        break;
                    case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
                        Ce();
                        break;
                    case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
                        be();
                        break;
                    case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
                        pe();
                        break;
                    default:
                }
            };
        }
        const Le = function(t) {
            t.stopPropagation();
            t.preventDefault();
            Re?.(t);
        };
        const Ee = ()=>{
            const e = W || z / j;
            if (!e) {
                return {
                    bubbleWidth: se,
                    bubbleHeight: "100%",
                    contentWidth: se,
                    contentHeight: "100%"
                };
            }
            let t;
            let n;
            const r = ue * 1.2;
            if (e <= 1 / E) {
                n = se;
                t = r;
            } else if (e < 1) {
                n = se;
                t = se * e;
            } else if (e < E) {
                t = se;
                n = se / e;
            } else {
                t = se;
                n = ue;
            }
            if (l.displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER || l.displayType === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT) {
                t = se;
                n = ue;
            }
            let a = G && z || t;
            let i = G && j || n;
            if (a / i > t / n) {
                a = a * n / i;
                i = n;
            } else {
                i = i * t / a;
                a = t;
            }
            if (i > se) {
                i = se;
            }
            return {
                bubbleWidth: t,
                bubbleHeight: n,
                contentWidth: a,
                contentHeight: i
            };
        };
        const ke = (maxWidth)=>{
            if (l.displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW) {
                return {
                    bubbleWidth: maxWidth,
                    bubbleHeight: maxWidth,
                    contentWidth: maxWidth,
                    contentHeight: maxWidth
                };
            }
            const e = W || z / j;
            let n;
            let r;
            const a = ue * 1.2;
            if (e >= 1) {
                if (maxWidth < se) {
                    n = maxWidth;
                    r = n / e;
                    if (e >= E && r < ue) {
                        r = ue;
                    }
                } else {
                    n = se;
                    r = n / e;
                    if (r < ue) {
                        r = ue;
                    }
                }
            } else {
                r = se;
                n = r * e;
                if (n < a) {
                    n = a;
                }
                if (maxWidth < se && n > maxWidth) {
                    n = maxWidth;
                }
            }
            let i = n;
            let s = r;
            if (i / s > n / r) {
                i = i * r / s;
                s = r;
            } else {
                s = s * n / i;
                i = n;
            }
            return {
                bubbleWidth: n,
                bubbleHeight: r,
                contentWidth: i,
                contentHeight: s
            };
        };
        const Ie = function() {
            return eeRef.current;
        };
        const getPlayCount = function() {
            return JRef.current;
        };
        useImperativeHandle(t_ref, function() {
            return {
                getImgNode: Ie,
                handleKeyActivation: Le,
                pause,
                getPlayCount
            };
        });
        const De = r("useWAWebIntersection")({
            root: null,
            threshold: 0.99
        });
        const xe = De[0];
        const isIntersecting = De[1].isIntersecting;
        o("useWAWebSendViewCount").useSendViewCount(msgKey, {
            mediaData: l.mediaData,
            isIntersecting,
            displayType: l.displayType
        });
        useEffect(function() {
            self.setTimeout(function() {
                if (!oe.aborted) {
                    if (le && H === o("WAWebMediaTypes").MediaDataStage.RESOLVED && isIntersecting) {
                        fe();
                    }
                }
            }, 100);
        }, [
            H,
            isIntersecting
        ]);
        const Pe = q instanceof r("WAWebMediaOpaqueData") ? q.url() : undefined;
        let Ne = null;
        let Me = Ee();
        if (l.maxWidth != null && l.maxWidth < Me.bubbleWidth) {
            Me = ke(l.maxWidth);
        }
        const we = Me;
        const { bubbleWidth, contentHeight, contentWidth } = we;
        if (H === o("WAWebMediaTypes").MediaDataStage.RESOLVED) {
            const aspectRatio = `auto ${W || z / j}`;
            const We = W >= 1 ? {
                aspectRatio,
                width: "auto",
                height: contentHeight
            } : {
                aspectRatio,
                width: contentWidth,
                height: "auto"
            };
            const Component = r("WAWebVideo.react");
            Ne = <div ref={eeRef} className="x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k xh8yej3 x5yr21d"><Component ref={QRef} src={G} style={We} onEnded={me} onLoadedMetadata={function() {
                XRef.current = true;
                if (le && YRef.current) {
                    fe();
                }
            }} muted/></div>;
        }
        const qe = Pe != null && Pe !== "" ? <div {...babelHelpers.extends({}, (m || (m = r("stylex"))).props(v.thumbImage, v.thumbImageSrc(Pe)), {
            "data-testid": "chat_thread_gif_thumb_image"
        })}/> : null;
        let Ue = $ != null && $ !== "" ? <div {...babelHelpers.extends({}, (m || (m = r("stylex"))).props(v.caption, N && v.captionPSA, v.captionMaxWidth(o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS ? "100%" : bubbleWidth)), {
            children: _.jsx(r("WAWebMessageCaption.react"), {
                msgKey,
                trusted: l.trusted,
                testId: "gif-caption"
            })
        })}/> : null;
        let Ve = Ue ? null : _.jsx(r("WAWebMessageThumbShadeBottom.react"), {});
        const He = O && l.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW;
        const Ge = o("WAWebDisplayType").isWideDisplay(l.displayType);
        const ze = !r("isStringNullOrEmpty")($);
        const je = l.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS || l.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY || l.displayType === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO;
        const Ke = {
            0: "x1n2onr6 x1vjfegm x9f619 x13nahy2 xyqdw3p x1im30kd xg8j3zb x1djpfga",
            4: "x1n2onr6 x1vjfegm x9f619 xyqdw3p x1im30kd xg8j3zb x1djpfga xmewjk2",
            2: "x1n2onr6 x1vjfegm x9f619 xyqdw3p x1im30kd xg8j3zb x1djpfga x193iq5w",
            6: "x1n2onr6 x1vjfegm x9f619 xyqdw3p x1im30kd xg8j3zb x1djpfga x193iq5w",
            1: "x1n2onr6 x1vjfegm x9f619 xyqdw3p x1im30kd xg8j3zb x1djpfga x193iq5w xh8yej3",
            5: "x1n2onr6 x1vjfegm x9f619 xyqdw3p x1im30kd xg8j3zb x1djpfga x193iq5w xh8yej3",
            3: "x1n2onr6 x1vjfegm x9f619 xyqdw3p x1im30kd xg8j3zb x1djpfga x193iq5w xh8yej3",
            7: "x1n2onr6 x1vjfegm x9f619 xyqdw3p x1im30kd xg8j3zb x1djpfga x193iq5w xh8yej3"
        }[!!Ge << 2 | !!je << 1 | (l.displayType === o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS) << 0];
        const Qe = l.displayAuthor ? <div {...babelHelpers.extends({}, {
            0: {
                className: "x9f619 xdduh5l xyqdw3p xs9asl8 x25sj25 x14vy60q"
            },
            2: {
                className: "x9f619 xyqdw3p xs9asl8 x25sj25 x14vy60q x145dklv"
            },
            1: {
                className: "x9f619 xdduh5l xyqdw3p x25sj25 x14vy60q x18d9i69"
            },
            3: {
                className: "x9f619 xyqdw3p x25sj25 x14vy60q x145dklv x18d9i69"
            }
        }[(l.displayType === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT || l.displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER) << 1 | !!He << 0], {
            children: _.jsx(r("WAWebMessageAuthor.react"), {
                msgKey,
                contact: F,
                displayType: l.displayType
            })
        })}/> : null;
        const Component = r("WAWebMessageForwardedIndicator.react");
        const Xe = He ? <Component msgKey={msgKey} className={{
            0: "xyqdw3p xg8j3zb x25sj25 xyri2b",
            1: "xg8j3zb x25sj25 xyri2b xexx8yu"
        }[!!l.displayAuthor << 0]}/> : null;
        const Ye = _.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
            msgKey
        });
        let Je;
        switch(A){
            case o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.GIPHY:
                Je = <div className="x10l6tqk xbfrwjf x1v1hl4c">{_.jsx(o("WAWebGiphyIcon.react").GiphyIcon, {})}</div>;
                break;
            case o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.TENOR:
                Je = <div className="x10l6tqk xbfrwjf x1v1hl4c">{_.jsx(o("WAWebTenorIcon.react").TenorIcon, {})}</div>;
                break;
            default:
                Je = null;
        }
        const Ze = l.quotedMsg ? <div {...babelHelpers.extends({}, {
            0: {
                className: "xdduh5l xahult9"
            },
            1: {
                className: "xahult9 x145dklv"
            }
        }[(l.displayType === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT || l.displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER) << 0], {
            children: l.quotedMsg
        })}/> : null;
        const et = l.hideMeta === true ? null : <div {...babelHelpers.extends({}, {
            0: {
                className: "x10l6tqk x11dcrhx xrb244j xhtitgo"
            },
            1: {
                className: "x10l6tqk xhtitgo x1inkcgm xy1j3rs"
            }
        }[!!ze << 0], {
            children: _.jsx(o("WAWebMessageMeta.react").Meta, {
                msgKey,
                displayType: l.displayType
            })
        })}/>;
        const Component_1 = r("WAWebMessageGifState.react");
        let tt = <Component_1 mediaStage={H} mediaDataFileSize={K} isFailed={isFailed} shouldPlay={ve()} onClick={Re}/>;
        const inlineStyle = {
            width: contentWidth,
            height: contentHeight
        };
        if (l.displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW) {
            Ne = null;
            Ue = null;
            Ve = null;
            Je = null;
            tt = null;
            inlineStyle.minHeight = l.maxWidth ?? 56;
        }
        const ot = {
            0: "x1n2onr6 xhtitgo x78zum5 x6s0dn4 xl56j7k x193iq5w x19iali1 x11t971q xvc5jky x6ikm8r x10wlt62 x1i282gy xx9ypkp xd15eu0 x11ecxm0",
            1: "x1n2onr6 xhtitgo x78zum5 x6s0dn4 xl56j7k x193iq5w x19iali1 x11t971q xvc5jky x6ikm8r x10wlt62 x1i282gy xx9ypkp xd15eu0 x11ecxm0 xuyqlj2"
        }[(l.displayType === o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS) << 0];
        const Component_2 = o("WAWebClickable.react").Clickable;
        const at = <>{Qe}{Xe}{Ye}{Ze}{_.jsx(r("WAWebBizCtwaContext.react"), {
            msgKey,
            wrapperClass: "xdj266r x14z9mp xahult9 x1lziwak"
        })}<Component_2 ref={xe} dataTestId="image-thumb-gif" className={ot} onClick={Re} ariaLabel={s._("Play GIF")} inlineStyle={inlineStyle}>{tt}{qe}{Ne}{Ve}{Je}</Component_2>{_.jsx(r("WAWebDashDebugBubbleBadgeSlot.react"), {
            msgKey
        })}{Ue}{et}</>;
        if (Ue) {
            const Component = r("WAWebMessageBubbleHiddenText.react");
            return <Component contact={F} msgKey={msgKey} className={Ke} onClick={o("WAWebStopEvent").stopPropagation} style={{
                width: o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS ? "100%" : bubbleWidth
            }}>{at}</Component>;
        }
        const it = bubbleWidth + L * 2;
        return <div className={Ke} onClick={o("WAWebStopEvent").stopPropagation} style={{
            width: o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS ? "100%" : it
        }}>{at}</div>;
    }
    D.displayName = `${D.name} [from ${i.id}]`;
    l.WrappedGif = D;
}, 226);