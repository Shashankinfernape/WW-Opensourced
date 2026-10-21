__d("WAWebPtvMessageComponent", [
    "WALogger",
    "WAWebABProps",
    "WAWebAddOnBubbleRenderUtils",
    "WAWebAddOnBubbleType",
    "WAWebAddOnBubblesContainer.react",
    "WAWebClock",
    "WAWebCmd",
    "WAWebDisplayType",
    "WAWebDownloadVideoThumbnail",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMarkPlayedMsgAction",
    "WAWebMediaDataGetters",
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebMessageAuthor.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePosition",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPttFindSequentialMsg",
    "WAWebPtvDownloadState.react",
    "WAWebSpinner.react",
    "WAWebStateUtils",
    "WAWebUnstyledButton.react",
    "WAWebVideo.react",
    "WDSIconIcVolumeOff.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "bx",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebAnimationFrames",
    "useWAWebDebouncedChanges",
    "useWAWebIntersection",
    "useWAWebListener",
    "useWAWebMediaDataValues",
    "useWAWebMsgDownloadMedia",
    "useWAWebMsgValues",
    "useWAWebSendViewCount"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useEffect, useRef, useState } = d;
    const g = {
        paddingInlineStart9: {
            paddingInlineStart: "x7coems",
            $$css: true
        },
        paddingBottom3: {
            paddingBottom: "xg8j3zb",
            $$css: true
        }
    };
    const h = 200;
    const y = 4;
    const C = h + y * 2;
    const b = 320;
    const v = b + y * 2;
    const S = 300;
    const R = S + y * 2;
    const L = 10;
    const E = 300;
    const k = {
        objectFit: "cover"
    };
    const renderVideoPixelsFit = function() {
        return k;
    };
    const T = r("bx").getURL(r("bx")("10047"));
    const D = {
        ptvOuterContainer: {
            transform: "x3oybdh",
            transitionDuration: "x1d8287x",
            transitionProperty: "x11xpdln",
            $$css: true
        },
        depressed: {
            transform: "x1jec706",
            transitionDuration: "x1pv9i8n",
            $$css: true
        },
        ptvContainer: {
            width: "x143tcsw",
            height: "x12bdpze",
            borderStartStartRadius: "xvs2etk",
            borderStartEndRadius: "xg3wpu6",
            borderEndEndRadius: "x1jwbhkm",
            borderEndStartRadius: "xgg4q86",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            backgroundColor: "xjbqb8w",
            $$css: true
        },
        activePtvContainer: {
            width: "xi55695",
            height: "x1lgcfn3",
            $$css: true
        },
        activePtvContainerInMsgInfo: {
            width: "xdrqleo",
            height: "xb7tys7",
            $$css: true
        },
        videoContainer: {
            zIndex: "xhtitgo",
            width: "x1oysuqx",
            height: "x1m3v4wt",
            position: "x1n2onr6",
            borderStartStartRadius: "xvs2etk",
            borderStartEndRadius: "xg3wpu6",
            borderEndEndRadius: "x1jwbhkm",
            borderEndStartRadius: "xgg4q86",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        activeVideoContainer: {
            width: "x1m258z3",
            height: "xu3xrit",
            $$css: true
        },
        activeVideoContainerInMsgInfo: {
            width: "xdzyupr",
            height: "x1vd4hg5",
            $$css: true
        },
        animateDimensions: {
            transitionProperty: "x1rn7vjc",
            transitionTimingFunction: "xb51amx",
            transitionDuration: "x1d8287x",
            $$css: true
        },
        video: {
            objectFit: "xl1xv1r",
            zIndex: "xhtitgo",
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            transitionProperty: "x1xkhett",
            transitionDuration: "x1g2r6go",
            transform: "x3oybdh",
            $$css: true
        },
        depressedVideo: {
            filter: "x1kp5ph",
            transform: "x1jec706",
            $$css: true
        },
        borderRadius: {
            borderStartStartRadius: "x1liijdw",
            borderStartEndRadius: "xu342n7",
            borderEndEndRadius: "xelbjmh",
            borderEndStartRadius: "x16pgt24",
            $$css: true
        },
        boxShadow: {
            boxShadow: "x1lpesih",
            $$css: true
        },
        authorIsMe: {
            backgroundColor: "x1g5lz36",
            $$css: true
        },
        authorIsNotMe: {
            backgroundColor: "x1ew7x2d",
            $$css: true
        },
        isFirst: {
            borderStartStartRadius: "x1bczwif",
            $$css: true
        },
        videoTimestamp: {
            position: "x10l6tqk",
            bottom: "x1wa3icf",
            width: "xh8yej3",
            color: "x1awj2ng",
            fontSize: "x1pg5gke",
            fontWeight: "x1xlr1w8",
            zIndex: "xhtitgo",
            $$css: true
        },
        muteIcon: {
            transitionProperty: "x1oc9h5i",
            transitionTimingFunction: "xz4gly6",
            transitionDuration: "x1d8287x",
            width: "x1fsd2vl",
            $$css: true
        },
        muteIconHidden: {
            opacity: "xg01cxk",
            visibility: "xlshs6z",
            width: "xnalus7",
            transform: "x11e568v",
            $$css: true
        },
        fitContent: {
            width: "xeq5yr9",
            $$css: true
        },
        quotedMsgContainer: {
            width: "xqyf9gi",
            borderStartStartRadius: "xlr9sxt",
            borderStartEndRadius: "xvvg52n",
            borderEndEndRadius: "xwd4zgb",
            borderEndStartRadius: "xq8v1ta",
            $$css: true
        },
        quotedMsgContainerSender: {
            backgroundColor: "x1g5lz36",
            $$css: true
        },
        quotedMsgContainerReceiver: {
            backgroundColor: "x1ew7x2d",
            $$css: true
        },
        groupHistoryMessage: {
            backgroundColor: "x1fast2d",
            $$css: true
        }
    };
    function XComponent({ displayAuthor, displayType, mediaData, msgKey, position, quotedMsg }) {
        let n;
        let a;
        const C = o("WAWebABProps").getABPropConfigValue("ptv_max_duration_seconds");
        const bRef = useRef(null);
        const v = useState(0);
        const S = v[0];
        const R = v[1];
        const L = useState(false);
        const E = L[0];
        const k = L[1];
        const T = useState(null);
        const x = T[0];
        const M = T[1];
        const wRef = useRef(null);
        const A = o("useWAWebMsgValues").useMsgValues(msgKey, [
            (n = o("WAWebMsgGetters")).getId,
            n.getIsSentByMe,
            o("WAWebFrontendMsgGetters").getSenderObj,
            n.getHasReaction,
            n.getIsGroupHistoryMessageInOwnChat,
            o("WAWebFrontendMsgGetters").getIsTransparentMsg,
            n.getIsNewsletterMsg
        ]);
        const F = A[0];
        const O = A[1];
        const B = A[2];
        const W = A[3];
        const q = A[4];
        const U = A[5];
        const V = A[6];
        const H = o("useWAWebMediaDataValues").useMediaDataValues(mediaData, [
            (a = o("WAWebMediaDataGetters")).getMediaStage,
            a.getRenderableUrl,
            a.getSize,
            a.getPreview,
            a.getFullPreviewData
        ]);
        const G = H[0];
        const z = H[1];
        const j = H[2];
        const K = H[3];
        const Q = H[4];
        const X = S;
        const Y = x != null ? Math.min(x, C) : null;
        const J = o("useWAWebSendViewCount").useSendViewCount(msgKey, {
            mediaData,
            displayType
        });
        o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(msgKey);
        useEffect(function() {
            const t = o("WAWebMsgCollection").MsgCollection.get(msgKey)?.safe();
            if (!(t == null || t.type !== o("WAWebMsgType").MSG_TYPE.PTV)) {
                o("WAWebDownloadVideoThumbnail").downloadVideoThumbnail({
                    msg: o("WAWebStateUtils").unproxy(t),
                    chat: o("WAWebFrontendMsgGetters").getChat(t.unsafe())
                });
            }
        }, [
            msgKey
        ]);
        const Z = useState(false);
        const isActive = Z[0];
        const te = Z[1];
        const neRef = useRef(null);
        const reRef = useRef(null);
        const oe = useState(false);
        const ae = oe[0];
        const ie = oe[1];
        const le = useCallback(function(t, n) {
            te(t);
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "PtvMessageComponent: setIsActive: ",
                " from ",
                ""
            ])), t, n);
        }, [
            te
        ]);
        o("useWAWebListener").useListener(document.body, [
            "click"
        ], function(e) {
            if (!(e.defaultPrevented || !isActive || !reRef.current || e.target instanceof Node && reRef.current.contains(e.target))) {
                le(false, "click-listener");
            }
        });
        const se = useCallback(function() {
            const bRef_current = bRef.current;
            if (bRef_current) {
                if (isActive) {
                    if (bRef_current.getPaused()) {
                        bRef_current.play();
                    } else {
                        bRef_current.pause();
                    }
                    return;
                }
                le(true, "ptv-click");
            }
        }, [
            isActive
        ]);
        const ue = useCallback(function(e) {
            if (!(e.button !== 0 || isActive)) {
                ie(true);
            }
        }, [
            isActive,
            ie
        ]);
        o("useWAWebListener").useListener(ae ? document.body : null, "mouseup", function() {
            ie(false);
        });
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "sequential_ptv_playback", function(e) {
            if (!(!bRef.current || !msgKey.equals(e))) {
                le(true, "sequential-ptv-playback");
            }
        });
        const ceRef = useRef(0);
        const de = function() {
            const bRef_current = bRef.current;
            if (bRef_current) {
                if (!isActive) {
                    ceRef.current += 1;
                    bRef_current.seek(0);
                    if (ceRef.current < N()) {
                        bRef_current.play();
                    }
                    return;
                }
                bRef_current.seek(0);
                bRef_current.play();
                le(false, "loop");
                const t = o("WAWebPttFindSequentialMsg").findSequentialPtv(msgKey, V);
                if (t) {
                    o("WAWebCmd").Cmd.playNextPtv(t.id);
                }
            }
        };
        const me = r("useWAWebIntersection")({
            root: null,
            threshold: 0
        });
        const pe = me[0];
        const isIntersecting = me[1].isIntersecting;
        const feRef = useRef(null);
        useEffect(function() {
            const feRef_current = feRef.current;
            feRef.current = isIntersecting;
            if (!isIntersecting && feRef_current === true) {
                const t = self.setTimeout(function() {
                    bRef.current?.pause("product_initiated");
                }, 100);
                ceRef.current = 0;
                return function() {
                    self.clearTimeout(t);
                };
            }
        }, [
            isIntersecting
        ]);
        useEffect(function() {
            const neRef_current = neRef.current;
            neRef.current = isActive;
            if (isActive && neRef_current === false) {
                const t = bRef.current;
                if (t) {
                    t.seek(0);
                    t.play();
                    const n = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                    if (n != null && o("WAWebMarkPlayedMsgAction").canMarkPlayed(n)) {
                        o("WAWebMarkPlayedMsgAction").markPlayed(n);
                    }
                }
                ceRef.current = 0;
            }
        }, [
            isActive,
            msgKey
        ]);
        const ge = E;
        const isPlaying = o("useWAWebDebouncedChanges").useDebouncedChanges({
            value: ge,
            debounceMs: 100,
            shouldDebounce: !ge
        });
        const ye = ae && !isActive;
        const Ce = o("WAWebMsgCollection").MsgCollection.get(F);
        const Component = o("WAWebMessageMeta.react").MetaWrapper;
        const be = <Component isSentByMe={O} isTransparent={U} displayType={displayType} xstyle={q && D.groupHistoryMessage}>{c.jsx(o("WAWebMessageMeta.react").Meta, {
            msgKey
        })}</Component>;
        const ve = <>{displayType != null && [
            o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
            o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
            o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER
        ].includes(displayType) && Ce != null && <div {...babelHelpers.extends({}, (s || (s = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStartAuto), {
            children: c.jsx(r("WAWebAddOnBubblesContainer.react"), {
                isOutgoingMsg: O,
                displayType,
                bubbleType: o("WAWebAddOnBubbleType").AddOnBubbleType.STICKER_LIKE_MSG,
                parentIds: [
                    Ce.id.toString()
                ],
                hasReaction: W
            })
        })}/>}</>;
        const Component_1 = r("WAWebPtvDownloadState.react");
        const Component_2 = r("WAWebVideo.react");
        const Component_3 = o("WAWebFlex.react").FlexRow;
        const Component_4 = r("WAWebUnstyledButton.react");
        const Component_5 = o("WAWebFlex.react").FlexRow;
        const Component_6 = o("WAWebFlex.react").FlexRow;
        const Component_7 = o("WAWebFlex.react").FlexRow;
        const Component_8 = o("WAWebFlex.react").FlexColumn;
        return <div ref={reRef}>{displayAuthor && <div {...babelHelpers.extends({
            ref: wRef
        }, (s || (s = r("stylex"))).props(D.borderRadius, D.boxShadow, o("WDSPaddings.stylex").wdsPaddings.paddingTop4, g.paddingInlineStart9, o("WDSPaddings.stylex").wdsPaddings.paddingEnd8, g.paddingBottom3, !o("WAWebDisplayType").isWideDisplay(displayType) && D.fitContent, O ? D.authorIsMe : D.authorIsNotMe, (position === o("WAWebMessagePosition").MsgPosition.FRONT || position === o("WAWebMessagePosition").MsgPosition.SINGLE) && D.isFirst, q && D.groupHistoryMessage), {
            children: c.jsx(r("WAWebMessageAuthor.react"), {
                msgKey,
                contact: B,
                displayType
            })
        })}/>}{quotedMsg && <div {...babelHelpers.extends({}, (s || (s = r("stylex"))).props(U ? D.quotedMsgContainer : null, O ? D.quotedMsgContainerSender : D.quotedMsgContainerReceiver, o("WDSMargins.stylex").wdsMargins.marginTop12, o("WDSPaddings.stylex").wdsPaddings.padding4), {
            children: quotedMsg
        })}/>}<Component_6 ref={pe} justify={o("WAWebDisplayType").isWideDisplay(displayType) ? "center" : "start"} xstyle={[
            D.ptvOuterContainer,
            ye && D.depressed
        ]}><Component_5 justify="center" align="center" xstyle={[
            D.ptvContainer,
            D.animateDimensions,
            o("WDSMargins.stylex").wdsMargins.marginTop12,
            o("WDSMargins.stylex").wdsMargins.marginBottom4,
            isActive && displayType === "MSG_INFO" && D.activePtvContainerInMsgInfo,
            isActive && displayType !== "MSG_INFO" && D.activePtvContainer
        ]}><div className="x10l6tqk x1rn7vjc xb51amx x1d8287x"><P isActive={isActive} getCurrentTime={function() {
            return bRef.current?.getCurrentTime() ?? 0;
        }} isPlaying={ge} duration={Y} isSentByMe={O} displayType={displayType}/></div><Component_4 xstyle={[
            D.videoContainer,
            D.animateDimensions,
            isActive && displayType === "MSG_INFO" && D.activeVideoContainerInMsgInfo,
            isActive && displayType !== "MSG_INFO" && D.activeVideoContainer
        ]} onMouseDown={isActive ? undefined : ue} onClick={se}><$ mediaData={mediaData}/><Component_1 mediaDataFileSize={j} mediaStage={G} isPlaying={isPlaying} onDownloadClick={function() {
            o("WAWebMsgCollection").MsgCollection.get(msgKey)?.forceDownloadMediaEvenIfExpensive();
        }}/>{G === o("WAWebMediaTypes").MediaDataStage.RESOLVED && <div ref={J}><Component_2 ref={function(t) {
            bRef.current = t ?? null;
        }} src={z} xstyle={[
            D.video,
            ye && D.depressedVideo
        ]} renderVideoPixelsFit={renderVideoPixelsFit} muted={!isActive} autoPlay={false} disableAutoplayManagement onAudioChannelRelease={function() {
            le(false, "audio-channel-release");
        }} onLoadedData={function() {
            M(bRef.current?.getDuration() ?? null);
        }} onEnded={de} onStoppedPlaying={function() {
            k(false);
        }} onPlaying={function() {
            return k(true);
        }} onTimeUpdate={function(t) {
            R(t);
            if (t >= C) {
                de();
            }
        }}/></div>}{Y != null && <><div className="xh8yej3 x1jjfqgs x10l6tqk x1ey2m1c x2iuv4i xuzhngd xhtitgo"/><Component_3 justify="center" align="center" xstyle={D.videoTimestamp}>{c.jsx(r("WDSIconIcVolumeOff.react"), {
            height: 10,
            testid: "muted",
            width: 10,
            xstyle: [
                D.muteIcon,
                isActive || !isPlaying ? [
                    D.muteIconHidden,
                    o("WDSMargins.stylex").wdsMargins.marginEnd0
                ] : o("WDSMargins.stylex").wdsMargins.marginEnd4
            ]
        })}<span>{o("WAWebClock").Clock.durationStr(isActive ? X : Y)}</span></Component_3></>}</Component_4></Component_5></Component_6>{o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(displayType) ? <Component_7 justifySelf="center" columnGap={2}>{ve}{be}</Component_7> : <Component_8>{be}{ve}</Component_8>}</div>;
    }
    XComponent.displayName = `${XComponent.name} [from ${i.id}]`;
    function $(e) {
        const t = o("react-compiler-runtime").c(12);
        const e_mediaData = e.mediaData;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMediaDataGetters").getPreview,
                o("WAWebMediaDataGetters").getFullPreviewData
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMediaDataValues").useMediaDataValues(e_mediaData, a);
        const l = i[0];
        const s = i[1];
        let u;
        let d = true;
        if (s) {
            let m;
            if (t[1] !== s) {
                m = s instanceof r("WAWebMediaOpaqueData") ? s.url() : s;
                t[1] = s;
                t[2] = m;
            } else {
                m = t[2];
            }
            u = m;
            d = false;
        } else if (l != null) {
            let p;
            if (t[3] !== l) {
                p = l instanceof r("WAWebMediaOpaqueData") ? l.url() : l;
                t[3] = l;
                t[4] = p;
            } else {
                p = t[4];
            }
            u = p;
        } else {
            u = T;
        }
        let _;
        if (t[5] !== d) {
            _ = ({
                0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1xsqp64 x18d0r48 x1vjfegm",
                1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1xsqp64 x18d0r48 x1vjfegm x1df5jli"
            })[!!d << 0];
            t[5] = d;
            t[6] = _;
        } else {
            _ = t[6];
        }
        const backgroundImage = `url(${u})`;
        let g;
        if (t[7] !== backgroundImage) {
            g = {
                backgroundImage
            };
            t[7] = backgroundImage;
            t[8] = g;
        } else {
            g = t[8];
        }
        let h;
        if (t[9] !== _ || t[10] !== g) {
            h = <div className={_} style={g}/>;
            t[9] = _;
            t[10] = g;
            t[11] = h;
        } else {
            h = t[11];
        }
        return h;
    }
    function P(e) {
        const t = o("react-compiler-runtime").c(11);
        const { displayType, duration, getCurrentTime, isActive, isPlaying, isSentByMe } = e;
        let d;
        if (t[0] !== getCurrentTime) {
            d = function() {
                return getCurrentTime();
            };
            t[0] = getCurrentTime;
            t[1] = d;
        } else {
            d = t[1];
        }
        const m = useState(d);
        const p = m[0];
        const _ = m[1];
        const g = duration == null ? 0 : p / duration;
        let h;
        if (t[2] !== getCurrentTime || t[3] !== p) {
            h = function() {
                const e = getCurrentTime();
                if (p !== e) {
                    _(e);
                }
            };
            t[2] = getCurrentTime;
            t[3] = p;
            t[4] = h;
        } else {
            h = t[4];
        }
        const y = isActive && isPlaying;
        let b;
        if (t[5] !== y) {
            b = {
                active: y
            };
            t[5] = y;
            t[6] = b;
        } else {
            b = t[6];
        }
        r("useWAWebAnimationFrames")(h, b);
        let S = C;
        if (isActive) {
            S = displayType === "MSG_INFO" ? R : v;
        }
        const L = isActive ? g : 0;
        const progressContainerColor = isSentByMe ? "outgoing" : "incoming";
        let k;
        if (t[7] !== S || t[8] !== L || t[9] !== progressContainerColor) {
            k = c.jsx(o("WAWebSpinner.react").Spinner, {
                size: S,
                value: L,
                max: 1,
                color: "highlight",
                progressContainerColor,
                strokeLinecap: "butt",
                xstyle: D.animateDimensions
            });
            t[7] = S;
            t[8] = L;
            t[9] = progressContainerColor;
            t[10] = k;
        } else {
            k = t[10];
        }
        return k;
    }
    function N() {
        const e = o("WAWebABProps").getABPropConfigValue("ptv_autoplay_loop_limit");
        if (e === 0) {
            return Infinity;
        }
        return e;
    }
    l.default = XComponent;
}, 98);