__d("WAWebMessageStickyDateMarker.react", [
    "WAWebChatEntryPoint",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebCoreActionsODS",
    "WAWebDatePickerContainerLoadable",
    "WAWebDropdown.react",
    "WAWebMsgCollection",
    "WAWebNoop",
    "WAWebSearchByDateUtils",
    "WAWebSearchByTypeAndDateGatingUtils",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebVelocityTransitionGroup",
    "WAWebWrapperSystemBubble.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useImperativeHandle, useRef, useState } = c;
    function f(scrollContainerRef) {
        if (scrollContainerRef == null) {
            return 0;
        }
        return scrollContainerRef.offsetWidth - (scrollContainerRef.clientWidth + scrollContainerRef.clientLeft * 2);
    }
    const g = {
        position: "x10l6tqk",
        zIndex: "x8k05lb",
        boxSizing: "x9f619",
        display: "x78zum5",
        justifyContent: "xl56j7k",
        width: "xh8yej3",
        paddingTop: "x12mz7nx",
        paddingInlineEnd: "x120eax6",
        pointerEvents: "x47corl",
        $$css: true
    };
    const h = {
        top: "x5mnzd7",
        $$css: true
    };
    const y = {
        stickyRefreshed: function(t) {
            return [
                g,
                {
                    "--x-paddingInlineEnd": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${t}px`)
                }
            ];
        },
        topOffset: function(t) {
            return [
                h,
                {
                    "--x-insetBlockStart": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${t}px`)
                }
            ];
        },
        interactable: {
            pointerEvents: "x67bb7w",
            $$css: true
        }
    };
    function C(t) {
        const a = o("react-compiler-runtime").c(38);
        const { chat, ref, scrollContainerRef, topOffset } = t;
        const d = topOffset === undefined ? 0 : topOffset;
        let g;
        const h = useState(undefined);
        const C = h[0];
        const v = h[1];
        const S = useState(undefined);
        const R = S[0];
        const L = S[1];
        const E = useState(true);
        const k = E[0];
        const I = E[1];
        let T;
        if (a[0] !== scrollContainerRef) {
            T = function() {
                return f(scrollContainerRef);
            };
            a[0] = scrollContainerRef;
            a[1] = T;
        } else {
            T = a[1];
        }
        const D = useState(T);
        const x = D[0];
        const $ = D[1];
        const P = useState(scrollContainerRef);
        const N = P[0];
        const M = P[1];
        if (N !== scrollContainerRef) {
            M(scrollContainerRef);
            if (scrollContainerRef != null) {
                $(f(scrollContainerRef));
            }
        }
        const w = useState(null);
        const A = w[0];
        const F = w[1];
        const ORef = useRef(null);
        const BRef = useRef(false);
        const WRef = useRef(false);
        const qRef = useRef(false);
        const URef = useRef(0);
        let V;
        if (a[2] === Symbol.for("react.memo_cache_sentinel")) {
            V = o("WAWebSearchByTypeAndDateGatingUtils").dateMarkerCalendarEnabled();
            a[2] = V;
        } else {
            V = a[2];
        }
        const H = V;
        let G;
        if (a[3] === Symbol.for("react.memo_cache_sentinel")) {
            G = function() {
                qRef.current = false;
                URef.current = URef.current + 1;
                I(false);
            };
            a[3] = G;
        } else {
            G = a[3];
        }
        const z = G;
        let j;
        if (a[4] === Symbol.for("react.memo_cache_sentinel")) {
            j = function() {
                if (qRef.current && !BRef.current && !WRef.current) {
                    z();
                }
            };
            a[4] = j;
        } else {
            j = a[4];
        }
        const K = j;
        let Q;
        if (a[5] === Symbol.for("react.memo_cache_sentinel")) {
            Q = function(t, n) {
                v(t);
                L(n);
            };
            a[5] = Q;
        } else {
            Q = a[5];
        }
        const updateDateMarkerText = Q;
        let Y;
        if (a[6] === Symbol.for("react.memo_cache_sentinel")) {
            Y = function(t) {
                if (t) {
                    qRef.current = false;
                    I(true);
                } else if (H && (BRef.current || WRef.current)) {
                    qRef.current = true;
                } else {
                    z();
                }
            };
            a[6] = Y;
        } else {
            Y = a[6];
        }
        const setVisibility = Y;
        let Z;
        if (a[7] === Symbol.for("react.memo_cache_sentinel")) {
            Z = function() {
                return {
                    updateDateMarkerText,
                    setVisibility
                };
            };
            a[7] = Z;
        } else {
            Z = a[7];
        }
        useImperativeHandle(ref, Z);
        let ee;
        if (a[8] !== chat || a[9] !== R) {
            ee = o("WAWebSearchByTypeAndDateGatingUtils").dateMarkerCalendarEnabled() && chat != null && R != null;
            a[8] = chat;
            a[9] = R;
            a[10] = ee;
        } else {
            ee = a[10];
        }
        const te = ee;
        let ne;
        if (a[11] === Symbol.for("react.memo_cache_sentinel")) {
            ne = function() {
                WRef.current = false;
                F(null);
                K();
            };
            a[11] = ne;
        } else {
            ne = a[11];
        }
        const re = ne;
        let oe;
        if (a[12] !== chat) {
            oe = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    o("WAWebCoreActionsODS").logCalendarDateSelectedFromStickyDateMarker();
                    if (chat != null) {
                        const t = yield o("WAWebSearchByDateUtils").getClosestMessageFromDate(chat.id.toString(), e);
                        re();
                        if (t) {
                            const r = o("WAWebMsgCollection").MsgCollection.get(t.toString());
                            const a = o("WAWebChatMessageSearch").getSearchContext({
                                chat,
                                msgKey: r?.id ?? t
                            });
                            if (a) {
                                a.highlightMentionMsg = true;
                                a.enableAnimation = false;
                                o("WAWebCmd").Cmd.openChatAt({
                                    chat,
                                    msgContext: a,
                                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker
                                });
                            } else {
                                o("WAWebCmd").Cmd.openChatBottom({
                                    chat,
                                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker
                                });
                            }
                        } else {
                            o("WAWebCmd").Cmd.openChatBottom({
                                chat,
                                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker
                            });
                        }
                    }
                });
                return function(n) {
                    return e.apply(this, arguments);
                };
            })();
            a[12] = chat;
            a[13] = oe;
        } else {
            oe = a[13];
        }
        const ae = oe;
        let ie;
        if (a[14] !== chat?.id || a[15] !== ae || a[16] !== te || a[17] !== R) {
            ie = function() {
                if (!(!te || R == null)) {
                    o("WAWebCoreActionsODS").logCalendarOpenFromStickyDateMarker();
                    const e = URef.current = URef.current + 1;
                    o("WAWebDatePickerContainerLoadable").requireBundle().then((T1)=>{
                        if (URef.current === e) {
                            WRef.current = true;
                            F({
                                dirY: o("WAWebDropdown.react").DirY.BOTTOM,
                                dirX: o("WAWebDropdown.react").DirX.CENTER,
                                type: o("WAWebDropdown.react").MenuType.DatePicker,
                                menu: <T1 chatId={chat?.id} defaultActiveStartDate={new Date(R * 1000)} onDateSelected={function(t) {
                                    ae(t);
                                }}/>,
                                anchor: ORef.current
                            });
                        }
                    }).catch(r("WAWebNoop"));
                }
            };
            a[14] = chat?.id;
            a[15] = ae;
            a[16] = te;
            a[17] = R;
            a[18] = ie;
        } else {
            ie = a[18];
        }
        const le = ie;
        let se;
        if (a[19] === Symbol.for("react.memo_cache_sentinel")) {
            se = function() {
                BRef.current = true;
            };
            a[19] = se;
        } else {
            se = a[19];
        }
        const ue = se;
        let ce;
        if (a[20] === Symbol.for("react.memo_cache_sentinel")) {
            ce = function() {
                BRef.current = false;
                K();
            };
            a[20] = ce;
        } else {
            ce = a[20];
        }
        if (C != null && k) {
            let me;
            if (a[21] !== C) {
                const Component = r("WDSText.react");
                me = <Component type="Body3Emphasized" colorName="contentDeemphasized" dir="auto">{C}</Component>;
                a[21] = C;
                a[22] = me;
            } else {
                me = a[22];
            }
            const pe = me;
            let _e;
            if (a[23] !== A) {
                const Component = o("WAWebUimUie.react").UIE;
                _e = A ? <Component displayName="StickyDateMarkerDatePicker" escapable popable dismissOnWindowResize requestDismiss={re}>{u.jsx(r("WAWebUimUieMenu.react"), {
                    contextMenu: A
                })}</Component> : null;
                a[23] = A;
                a[24] = _e;
            } else {
                _e = a[24];
            }
            const fe = _e;
            let ge;
            if (a[25] !== x || a[26] !== d) {
                ge = (e || (e = r("stylex"))).props(y.stickyRefreshed(x), b(d), H && y.interactable);
                a[25] = x;
                a[26] = d;
                a[27] = ge;
            } else {
                ge = a[27];
            }
            let he;
            if (a[28] !== le || a[29] !== te || a[30] !== pe) {
                const Component = r("WAWebWrapperSystemBubble.react");
                const Component_1 = r("WAWebWrapperSystemBubble.react");
                he = te ? <div ref={ORef} onClick={le} onMouseEnter={ue} onMouseLeave={ce} role="button" tabIndex={0} onKeyDown={function(t) {
                    if (t.key === "Enter" || t.key === " ") {
                        t.preventDefault();
                        le();
                    }
                }} className="x1ypdohk"><Component theme="sticky">{pe}</Component></div> : <Component_1 theme="sticky">{pe}</Component_1>;
                a[28] = le;
                a[29] = te;
                a[30] = pe;
                a[31] = he;
            } else {
                he = a[31];
            }
            let ye;
            if (a[32] !== fe || a[33] !== ge || a[34] !== he) {
                ye = <div {...babelHelpers.extends({}, ge, {
                    children: [
                        he,
                        fe
                    ]
                })}/>;
                a[32] = fe;
                a[33] = ge;
                a[34] = he;
                a[35] = ye;
            } else {
                ye = a[35];
            }
            g = ye;
        }
        let Ce;
        if (a[36] !== g) {
            const Component = r("WAWebVelocityTransitionGroup");
            Ce = <Component transitionName="slide-down-date">{g}</Component>;
            a[36] = g;
            a[37] = Ce;
        } else {
            Ce = a[37];
        }
        return Ce;
    }
    function b(e) {
        if (e > 0) {
            return y.topOffset(e);
        }
        return null;
    }
    l.default = C;
}, 98);