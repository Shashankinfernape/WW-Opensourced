__d("WAWebInteractiveMessageCarousel.react", [
    "invariant",
    "WALogger",
    "WAWebABProps",
    "WAWebBizVPVTrackableMessageComponent.react",
    "WAWebCarousel.react",
    "WAWebCopyPasteCopyable.react",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveActionsForCarouselCard",
    "WAWebInteractiveBubble.react",
    "WAWebInteractiveHeader",
    "WAWebInteractiveMessageCarouselLogEvents",
    "WAWebL10N",
    "WAWebMessageCropping",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebResizeObserver",
    "WAWebShowMessageActionFallbackErrorAction",
    "WAWebStateUtils",
    "WAWebStopEvent",
    "WAWebWamEnumMessageBodyTypeEnum",
    "react",
    "react-compiler-runtime",
    "useWAWebConversationPanelCanCompose",
    "useWAWebMeasureTimeOnScreen",
    "useWAWebMsgValues",
    "useWAWebOnScreen"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = [
        "menu"
    ];
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useCallback, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } = m;
    const spacing = 4;
    function v({ bizVPVData, displayType, isMsgVisible, mainMsgWrapperRef, msgComponentRef, msgKey }) {
        const m = displayType === o("WAWebDisplayType").DISPLAY_TYPE.EDITING;
        const _RefRef = useRef(null);
        const v = useState(0);
        const minTextHeight = v[0];
        const I = v[1];
        const T = useState(null);
        const carouselMargins = T[0];
        const x = T[1];
        const $ = useE();
        const P = $[0];
        const N = $[1];
        const M = o("useWAWebMsgValues").useMsgValues(msgKey, [
            o("WAWebFrontendMsgGetters").getCarouselCards,
            o("WAWebMsgGetters").getIsNewsletterMsg
        ]);
        const w = M[0];
        const A = M[1];
        const F = o("WAWebFrontendMsgGetters").getChatByMsgKey(msgKey, A);
        const O = r("useWAWebConversationPanelCanCompose")(F);
        const B = O[0];
        R(_RefRef?.current?.outerDivRef, msgKey, !m);
        const W = useMemo(function() {
            if (w == null) {
                return null;
            }
            return w.map((e)=>{
                const card = e.safe();
                if (card.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
                    s(0, 73709);
                }
                return {
                    card,
                    actions: m ? null : S(card, B)
                };
            });
        }, [
            w,
            B,
            m
        ]);
        useLayoutEffect(function() {
            const t = _RefRef?.current?.outerDivRef?.current;
            if (t != null) {
                const n = o("WAWebCopyPasteCopyable.react").findCopyableChildren(t);
                const r = n.reduce((acc, item)=>{
                    if (item.getBoundingClientRect().height > acc) {
                        return item.getBoundingClientRect().height;
                    }
                    return acc;
                }, Number.MIN_VALUE);
                I(r);
            }
        }, [
            I,
            W
        ]);
        const q = useCallback(function(e) {
            const t = getComputedStyle(e);
            x({
                left: parseFloat(t.paddingLeft),
                right: parseFloat(t.paddingRight)
            });
        }, [
            x
        ]);
        useLayoutEffect(function() {
            const t = mainMsgWrapperRef?.current ?? null;
            if (t != null) {
                q(t);
                return o("WAWebResizeObserver").observe(t, function() {
                    return q(t);
                });
            }
        }, [
            q,
            mainMsgWrapperRef,
            x
        ]);
        const scrollToCard = useCallback(function(e) {
            const n = _RefRef?.current?.scrollToCard;
            if (!(W == null || n == null)) {
                n(e);
            }
        }, [
            W
        ]);
        const V = useMemo(function() {
            const e = {};
            if (W == null) {
                return e;
            }
            for(let t = 0; t < W.length; t++){
                const n = W[t].card;
                e[n.id.toString()] = t;
            }
            return e;
        }, [
            W
        ]);
        const getImgNodeByMsgKey = useCallback(function(e) {
            const t = V[e.toString()];
            const header = P(t).header;
            if (header == null || header.getImgNode == null) {
                return null;
            }
            return header.getImgNode();
        }, [
            P,
            V
        ]);
        const isCardVisible = useCallback(function(e) {
            const t = V[e.toString()];
            return P(t).visibility === true;
        }, [
            P,
            V
        ]);
        useImperativeHandle(msgComponentRef, function() {
            return {
                scrollToCard,
                getImgNodeByMsgKey,
                isCardVisible
            };
        });
        if (W == null) {
            return null;
        }
        const z = msgKey.fromMe === false;
        const Component = r("WAWebCarousel.react");
        return <div {...babelHelpers.extends({
            onDoubleClick: o("WAWebStopEvent").stopPropagation
        }, {
            0: {
                className: "x78zum5 xh8yej3 x13a6bvl"
            },
            1: {
                className: "x78zum5 xh8yej3 x1nhvcw1"
            }
        }[!!z << 0], {
            children: <div className="x78zum5 xh8yej3"><Component cardWidth={o("WAWebMessageCropping").CAROUSEL_MEDIA_DIMS.bubbleWidth} spacing={spacing} carouselMargins={carouselMargins} enableWheelScroll allowPartialCards isRTL={r("WAWebL10N").isRTL()} stepButtonProps={{
                offset: 12,
                size: 40
            }} ref={_RefRef}>{W.map((e, mmCarouselCardIndex)=>{
                const l = <L loggingEnabled={!m} msg={e.card} visibilityRef={function(visibility) {
                    return N(mmCarouselCardIndex, {
                        visibility
                    });
                }}>{d.jsx(r("WAWebInteractiveBubble.react"), {
                    msgKey: e.card.id,
                    displayAuthor: false,
                    displayFooter: false,
                    header: d.jsx(r("WAWebInteractiveHeader"), {
                        msgKey: e.card.id,
                        isMsgVisible,
                        headerRef: function(header) {
                            return N(mmCarouselCardIndex, {
                                header
                            });
                        }
                    }),
                    actions: e.actions,
                    minTextHeight,
                    hideMeta: true
                })}</L>;
                return <div key={e.card.id.toString()} {...babelHelpers.extends({}, {
                    0: {
                        className: "xfl633f x1g5lz36 x1liijdw xu342n7 xelbjmh x16pgt24 x14ug900 x1okw0bk x12lqup9 x17fgdl5 x1n2onr6"
                    },
                    2: {
                        className: "xfl633f x1ew7x2d x1liijdw xu342n7 xelbjmh x16pgt24 x14ug900 x1okw0bk x12lqup9 x17fgdl5 x1n2onr6"
                    },
                    1: {
                        className: "xfl633f x1g5lz36 x1liijdw xu342n7 xelbjmh x16pgt24 x14ug900 x1okw0bk x12lqup9 x1n2onr6 x19v9tvf"
                    },
                    3: {
                        className: "xfl633f x1ew7x2d x1liijdw xu342n7 xelbjmh x16pgt24 x14ug900 x1okw0bk x12lqup9 x1n2onr6 x19v9tvf"
                    }
                }[!!z << 1 | !!o("WAWebABProps").getABPropConfigValue("wa_web_highlight_me_mention") << 0], {
                    ref: function(containerEl) {
                        return N(mmCarouselCardIndex, {
                            containerEl
                        });
                    },
                    children: !m && bizVPVData != null && e.card.id?.id != null ? d.jsx(r("WAWebBizVPVTrackableMessageComponent.react"), {
                        component: l,
                        visibilityData: babelHelpers.extends({}, bizVPVData, {
                            messageId: e.card.id.id,
                            messageBodyType: o("WAWebWamEnumMessageBodyTypeEnum").MESSAGE_BODY_TYPE_ENUM.CAROUSEL_CARD,
                            mmCarouselCardIndex
                        })
                    }) : l
                })}/>;
            })}</Component></div>
        })}/>;
    }
    v.displayName = `${v.name} [from ${i.id}]`;
    function S(card, t) {
        const n = r("WAWebGetInteractiveActionsForCarouselCard")(card, t);
        return n.map((e)=>{
            const e_menu = e.menu;
            const o = babelHelpers.objectWithoutPropertiesLoose(e, u);
            return babelHelpers.extends({}, o, {
                onClick: o.onClick ?? function() {
                    return r("WAWebShowMessageActionFallbackErrorAction")();
                }
            });
        });
    }
    function R(t, msgKey, a) {
        const i = o("react-compiler-runtime").c(3);
        let l;
        if (i[0] !== a || i[1] !== msgKey) {
            l = function(r) {
                if (a) {
                    const t = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                    if (t == null) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[carousel] view not logged, message left the collection"
                        ])));
                        return;
                    }
                    o("WAWebInteractiveMessageCarouselLogEvents").logViewCarousel(t, r);
                }
            };
            i[0] = a;
            i[1] = msgKey;
            i[2] = l;
        } else {
            l = i[2];
        }
        r("useWAWebMeasureTimeOnScreen")(t, l);
    }
    function L(e) {
        const t = o("react-compiler-runtime").c(11);
        const { children, loggingEnabled, msg, visibilityRef } = e;
        const sRef = useRef();
        let u;
        if (t[0] !== loggingEnabled || t[1] !== msg) {
            u = function(t) {
                if (loggingEnabled) {
                    o("WAWebInteractiveMessageCarouselLogEvents").logViewCarouselCard(o("WAWebStateUtils").unproxy(msg.unsafe()), t);
                }
            };
            t[0] = loggingEnabled;
            t[1] = msg;
            t[2] = u;
        } else {
            u = t[2];
        }
        r("useWAWebMeasureTimeOnScreen")(sRef, u);
        let m;
        if (t[3] !== visibilityRef) {
            m = function() {
                return visibilityRef(false);
            };
            t[3] = visibilityRef;
            t[4] = m;
        } else {
            m = t[4];
        }
        const p = r("useWAWebOnScreen")(sRef, m);
        let f;
        let g;
        if (t[5] !== p || t[6] !== visibilityRef) {
            f = function() {
                visibilityRef(p);
            };
            g = [
                p,
                visibilityRef
            ];
            t[5] = p;
            t[6] = visibilityRef;
            t[7] = f;
            t[8] = g;
        } else {
            f = t[7];
            g = t[8];
        }
        useEffect(f, g);
        let h;
        if (t[9] !== children) {
            h = <span ref={sRef}>{children}</span>;
            t[9] = children;
            t[10] = h;
        } else {
            h = t[10];
        }
        return h;
    }
    function useE() {
        const e = o("react-compiler-runtime").c(4);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [];
            e[0] = t;
        } else {
            t = e[0];
        }
        const nRef = useRef(t);
        let r;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            r = function(t, r) {
                nRef.current[t] = babelHelpers.extends({}, nRef.current[t], r);
            };
            e[1] = r;
        } else {
            r = e[1];
        }
        const a = r;
        let i;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            i = function(t) {
                return nRef.current[t] ?? {};
            };
            e[2] = i;
        } else {
            i = e[2];
        }
        const l = i;
        let s;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            s = [
                l,
                a
            ];
            e[3] = s;
        } else {
            s = e[3];
        }
        return s;
    }
    l.default = v;
}, 98);