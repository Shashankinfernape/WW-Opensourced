__d("WAWebBotPluginCarouselWrapper.react", [
    "invariant",
    "WAWebCarouselNavigationButton",
    "WAWebChevronButton.react",
    "WAWebCmd",
    "WAWebDisplayType",
    "WAWebDomScroll",
    "WAWebErrorBoundary.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMediaLinkPreviewContainer.react",
    "WAWebMsgGetters",
    "WAWebProtobufsAICommon.pb",
    "WAWebVelocityTransitionGroup",
    "WAWebWrapperListeners.react",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebCarouselScrollUtils",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useImperativeHandle, useRef, useState } = d;
    const g = {
        botPluginCarouselControlContainer: {
            position: "x1n2onr6",
            $$css: true
        },
        botPluginCarouselControlContainerClosed: {
            marginTop: "x1aawmmo",
            $$css: true
        },
        wrapperProfilePictureDisplayed: {
            paddingInlineStart: "x1cqvox x14o1pq7",
            paddingInlineEnd: "xu7zf0c x1rzuvji",
            $$css: true
        },
        wrapperAdjustedOneOnOneChat: {
            paddingInlineStart: "x1wxbj4f xds8fti",
            paddingInlineEnd: "xh1vicy x1rzuvji",
            $$css: true
        }
    };
    const h = 100;
    function y(t) {
        const a = o("react-compiler-runtime").c(45);
        let i;
        let l;
        if (a[0] !== t) {
            l = t.ref;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            a[0] = t;
            a[1] = i;
            a[2] = l;
        } else {
            i = a[1];
            l = a[2];
        }
        const uRef = useRef(null);
        const d = i;
        const { botPluginCarouselId, isFocused, msgs } = d;
        const v = msgs[0]?.id?.remote?.isUser();
        const SRef = useRef(null);
        let R;
        if (a[3] !== msgs[0]) {
            R = o("WAWebMsgGetters").getBotPluginType(msgs[0].unsafe());
            a[3] = msgs[0];
            a[4] = R;
        } else {
            R = a[4];
        }
        const L = R === o("WAWebProtobufsAICommon.pb").BotPluginMetadata$PluginType.REELS;
        const E = useState(true);
        const k = E[0];
        const I = E[1];
        const T = useState(null);
        const D = T[0];
        const x = T[1];
        const $ = useState(false);
        const P = $[0];
        const N = $[1];
        let M;
        if (a[5] !== msgs[0]) {
            M = o("WAWebMsgGetters").getBotResponseTargetId(msgs[0]) ?? "NULL_MSG_BOT_PLUGIN_TARGET_ID";
            a[5] = msgs[0];
            a[6] = M;
        } else {
            M = a[6];
        }
        const A = M;
        let F;
        if (a[7] === Symbol.for("react.memo_cache_sentinel")) {
            F = function(t) {
                const e = t === undefined ? true : t;
                I(e);
                self.setTimeout(b);
            };
            a[7] = F;
        } else {
            F = a[7];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, `bot_toggle_plugin_search_details_for_target_id_${A}`, F);
        let O;
        if (a[8] === Symbol.for("react.memo_cache_sentinel")) {
            O = function(t, n) {
                const SRef_current = SRef.current;
                if (SRef_current) {
                    const r = SRef_current.offsetParent;
                    if (r) {
                        if (!(r instanceof HTMLElement)) {
                            s(0, 56542);
                        }
                        o("WAWebDomScroll").scrollAt(SRef_current, r, n).then(t);
                    }
                }
            };
            a[8] = O;
        } else {
            O = a[8];
        }
        const B = O;
        let W;
        if (a[9] === Symbol.for("react.memo_cache_sentinel")) {
            W = function() {
                return uRef.current;
            };
            a[9] = W;
        } else {
            W = a[9];
        }
        const q = W;
        let U;
        if (a[10] === Symbol.for("react.memo_cache_sentinel")) {
            U = function() {
                return r("nullthrows")(SRef.current);
            };
            a[10] = U;
        } else {
            U = a[10];
        }
        const V = U;
        let H;
        if (a[11] === Symbol.for("react.memo_cache_sentinel")) {
            H = function() {
                return {
                    getElement: q,
                    getContainerElement: V
                };
            };
            a[11] = H;
        } else {
            H = a[11];
        }
        useImperativeHandle(l, H);
        const G = r("useWAWebCarouselScrollUtils")(uRef, N, x, msgs.length);
        const z = G[0];
        const j = G[1];
        let K;
        if (a[12] !== L || a[13] !== msgs) {
            let Q;
            if (a[15] !== L) {
                Q = function(t) {
                    return <div key={t.id.id} {...babelHelpers.extends({}, {
                        0: {},
                        1: {
                            className: "x1e03a83 x1vd4hg5"
                        }
                    }[!!L << 0], {
                        children: c.jsx(o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer, {
                            msgKey: t.id,
                            displayType: L ? o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN : o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
                            theme: "bot_plugin_link"
                        })
                    })}/>;
                };
                a[15] = L;
                a[16] = Q;
            } else {
                Q = a[16];
            }
            K = msgs.toSorted(C).map(Q);
            a[12] = L;
            a[13] = msgs;
            a[14] = K;
        } else {
            K = a[14];
        }
        const X = K;
        let Y;
        if (a[17] !== L || a[18] !== j || a[19] !== P) {
            const Component = o("WAWebCarouselNavigationButton").CarouselNavigationButton;
            Y = P === true ? <Component buttonType={o("WAWebChevronButton.react").ButtonType.Prev} onButtonClick={function() {
                return j(false);
            }} displayType={L ? o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel : o("WAWebChevronButton.react").ChevronButtonDisplayType.BotPluginCarousel}/> : null;
            a[17] = L;
            a[18] = j;
            a[19] = P;
            a[20] = Y;
        } else {
            Y = a[20];
        }
        const J = Y;
        const Z = msgs.length > 1;
        const ee = D ?? Z;
        let te;
        if (a[21] !== ee || a[22] !== L || a[23] !== j) {
            const Component = o("WAWebCarouselNavigationButton").CarouselNavigationButton;
            te = ee ? <Component buttonType={o("WAWebChevronButton.react").ButtonType.Next} onButtonClick={function() {
                return j(true);
            }} displayType={L ? o("WAWebChevronButton.react").ChevronButtonDisplayType.BotReelsPluginCarousel : o("WAWebChevronButton.react").ChevronButtonDisplayType.BotPluginCarousel}/> : null;
            a[21] = ee;
            a[22] = L;
            a[23] = j;
            a[24] = te;
        } else {
            te = a[24];
        }
        const ne = te;
        let re;
        if (a[25] !== isFocused) {
            re = isFocused ? c.jsx(o("WAWebWrapperListeners.react").WhileFocusedListener, {
                parent: {
                    scrollMsg: B
                }
            }) : null;
            a[25] = isFocused;
            a[26] = re;
        } else {
            re = a[26];
        }
        const oe = re;
        const ae = v ? g.wrapperAdjustedOneOnOneChat : g.wrapperProfilePictureDisplayed;
        const ie = !k && g.botPluginCarouselControlContainerClosed;
        let le;
        if (a[27] !== ae || a[28] !== ie) {
            le = [
                ae,
                g.botPluginCarouselControlContainer,
                ie
            ];
            a[27] = ae;
            a[28] = ie;
            a[29] = le;
        } else {
            le = a[29];
        }
        let se;
        if (a[30] !== botPluginCarouselId || a[31] !== X || a[32] !== z || a[33] !== L || a[34] !== msgs.length || a[35] !== ne || a[36] !== J || a[37] !== k) {
            se = k ? <div {...babelHelpers.extends({}, {
                0: {
                    className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6"
                },
                4: {
                    className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 x1uo4jdz"
                },
                2: {
                    className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 xqyf9gi"
                },
                6: {
                    className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 xqyf9gi"
                },
                1: {
                    className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 x1l2rt3b"
                },
                5: {
                    className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 x1l2rt3b"
                },
                3: {
                    className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 x1l2rt3b"
                },
                7: {
                    className: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw x1n2onr6 x1l2rt3b"
                }
            }[!!(L && msgs.length === 1) << 2 | !!(L && msgs.length === 2) << 1 | !!(L && msgs.length === 3) << 0], {
                children: [
                    J,
                    <div {...babelHelpers.extends({}, {
                        0: {
                            className: "x1rife3k xlrljjx x1liijdw xu342n7 xelbjmh x16pgt24 x1xmf6yo xod5an3"
                        },
                        1: {
                            className: "x1rife3k xlrljjx x1liijdw xu342n7 xelbjmh x16pgt24 x1xmf6yo xod5an3 x1rohswg"
                        }
                    }[(msgs.length === 1) << 0], {
                        onScroll: z,
                        ref: uRef,
                        children: <div {...babelHelpers.extends({}, {
                            0: {
                                className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x75ztot"
                            },
                            8: {
                                className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x2vq7qx xtfe9a7 xeq5yr9"
                            },
                            4: {
                                className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc x15x72sd"
                            },
                            12: {
                                className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 x14atkfc x15x72sd"
                            },
                            2: {
                                className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xwv353n"
                            },
                            10: {
                                className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x2vq7qx xtfe9a7 xwv353n"
                            },
                            6: {
                                className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x15x72sd xwv353n"
                            },
                            14: {
                                className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 x15x72sd xwv353n"
                            },
                            1: {
                                className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x75ztot xgqtt45"
                            },
                            9: {
                                className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 xeq5yr9 xgqtt45"
                            },
                            5: {
                                className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf x14atkfc xgqtt45"
                            },
                            13: {
                                className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 x14atkfc xgqtt45"
                            },
                            3: {
                                className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xwv353n xgqtt45"
                            },
                            11: {
                                className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 xwv353n xgqtt45"
                            },
                            7: {
                                className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xwv353n xgqtt45"
                            },
                            15: {
                                className: "x123j3cw x1gabggj xs9asl8 xaso8d8 xrvj5dj x1ldsiy3 x9xpc1z x3xbxsf xtfe9a7 xwv353n xgqtt45"
                            }
                        }[!!L << 3 | (msgs.length === 1) << 2 | (msgs.length === 2) << 1 | (msgs.length === 4) << 0], {
                            "data-id": botPluginCarouselId,
                            children: X
                        })}/>
                    })}/>,
                    ne
                ]
            })}/> : null;
            a[30] = botPluginCarouselId;
            a[31] = X;
            a[32] = z;
            a[33] = L;
            a[34] = msgs.length;
            a[35] = ne;
            a[36] = J;
            a[37] = k;
            a[38] = se;
        } else {
            se = a[38];
        }
        let ue;
        if (a[39] !== se) {
            const Component = r("WAWebVelocityTransitionGroup");
            ue = <Component transitionName="bot-plugin-carousel">{se}</Component>;
            a[39] = se;
            a[40] = ue;
        } else {
            ue = a[40];
        }
        let ce;
        if (a[41] !== le || a[42] !== ue || a[43] !== oe) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            const Component_1 = o("WAWebErrorBoundary.react").ErrorBoundary;
            ce = <Component_1 name="bot-plugin-carousel"><Component xstyle={le} ref={SRef} tabIndex={-1}>{ue}{oe}</Component></Component_1>;
            a[41] = le;
            a[42] = ue;
            a[43] = oe;
            a[44] = ce;
        } else {
            ce = a[44];
        }
        return ce;
    }
    function C({ botPluginReferenceIndex }, t) {
        const t_botPluginReferenceIndex = t.botPluginReferenceIndex;
        if (botPluginReferenceIndex != null && t_botPluginReferenceIndex != null) {
            if (botPluginReferenceIndex > t_botPluginReferenceIndex) {
                return 1;
            }
            return -1;
        }
        return 0;
    }
    function b() {
        o("WAWebCmd").Cmd.scrollChatHeight(h);
    }
    l.default = y;
}, 98);