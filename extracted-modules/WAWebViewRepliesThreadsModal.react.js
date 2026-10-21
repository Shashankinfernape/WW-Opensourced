__d("WAWebViewRepliesThreadsModal.react", [
    "fbt",
    "WAWebChatGetters",
    "WAWebChatPreferenceCollection",
    "WAWebChatPreferenceGetters",
    "WAWebChatThemeValue",
    "WAWebConversationBackground.react",
    "WAWebConversationMsgs.react",
    "WAWebDomScroll",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlexBox.react",
    "WAWebIsInThreadsViewContext",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebMultiSelection",
    "WAWebNoop",
    "WAWebThemeContext",
    "WAWebThreadModelResolver",
    "WAWebThreadsViewAutoQuoteContext",
    "WAWebThreadsViewFocusMsgContext",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatPreferenceValues",
    "useWAWebChatValues",
    "useWAWebConversationPanelFiller.react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useEffect, useMemo, useRef, useState } = c;
    const g = {
        body: {
            position: "x1n2onr6",
            flex: "x1cqoux5",
            zIndex: "x1vjfegm",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        }
    };
    function h(e) {
        const n = o("react-compiler-runtime").c(52);
        const { chat, focusMsgId, threadId } = e;
        let c;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = [
                o("WAWebChatGetters").getName
            ];
            n[0] = c;
        } else {
            c = n[0];
        }
        const d = o("useWAWebChatValues").useChatValues(chat.id, c);
        const p = d[0];
        let h;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            h = r("WAWebChatPreferenceCollection").getDefault();
            n[1] = h;
        } else {
            h = n[1];
        }
        const C = h;
        let b;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            b = [
                o("WAWebChatPreferenceGetters").getWallpaperValue
            ];
            n[2] = b;
        } else {
            b = n[2];
        }
        const v = o("useWAWebChatPreferenceValues").useChatPreferenceValues(C.id, b);
        const S = v[0];
        const R = o("WAWebThemeContext").useIsDarkTheme();
        const L = R ? "dark" : "light";
        let E;
        if (n[3] !== L || n[4] !== S) {
            E = o("WAWebChatThemeValue").wallpaperBackgroundFromValue(S, L);
            n[3] = L;
            n[4] = S;
            n[5] = E;
        } else {
            E = n[5];
        }
        const k = E;
        const { showDoodle, wallpaper } = k;
        const D = useState(y);
        const x = D[0];
        let $;
        if (n[6] !== chat || n[7] !== threadId) {
            $ = o("WAWebThreadModelResolver").resolveThreadOrChat(chat, threadId);
            n[6] = chat;
            n[7] = threadId;
            n[8] = $;
        } else {
            $ = n[8];
        }
        const P = $;
        const N = P !== chat ? P : null;
        const M = N?.msgs ?? chat.msgs;
        let w;
        if (n[9] !== M || n[10] !== threadId.key) {
            w = M.get(threadId.key) ?? null;
            n[9] = M;
            n[10] = threadId.key;
            n[11] = w;
        } else {
            w = n[11];
        }
        const F = w;
        const ORef = useRef(null);
        let B;
        if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
            B = {
                canCompose: false,
                selectable: false,
                setScrollBottom: function(t) {
                    return ORef.current?.setScrollBottom(t);
                },
                getScrollBottom: function() {
                    return ORef.current?.getScrollBottom();
                },
                onComposeHeightChange: function(t) {
                    return ORef.current?.onComposeHeightChange(t);
                }
            };
            n[12] = B;
        } else {
            B = n[12];
        }
        const W = r("useWAWebConversationPanelFiller.react")(B);
        const { filler, msgPanelRef } = W;
        let V;
        let H;
        if (n[13] !== focusMsgId) {
            H = function() {
                if (focusMsgId == null) {
                    const e = window.requestAnimationFrame(function() {
                        ORef.current?.setScrollBottom(0);
                    });
                    return function() {
                        return window.cancelAnimationFrame(e);
                    };
                }
            };
            V = [
                focusMsgId
            ];
            n[13] = focusMsgId;
            n[14] = V;
            n[15] = H;
        } else {
            V = n[14];
            H = n[15];
        }
        useEffect(H, V);
        const G = useState(null);
        const z = G[0];
        const j = G[1];
        let K;
        if (n[16] !== M) {
            K = function(t) {
                const e = M.findFirst(function(e) {
                    return e.id.id === t;
                });
                if (e == null) {
                    return false;
                }
                j({
                    msg: e,
                    highlightMsg: true
                });
                return true;
            };
            n[16] = M;
            n[17] = K;
        } else {
            K = n[17];
        }
        const Q = K;
        const XRef = useRef(false);
        let Y;
        let J;
        if (n[18] !== focusMsgId || n[19] !== Q) {
            Y = function() {
                if (!(focusMsgId == null || XRef.current)) {
                    if (Q(focusMsgId)) {
                        XRef.current = true;
                    }
                }
            };
            J = [
                focusMsgId,
                Q
            ];
            n[18] = focusMsgId;
            n[19] = Q;
            n[20] = Y;
            n[21] = J;
        } else {
            Y = n[20];
            J = n[21];
        }
        useEffect(Y, J);
        let Z;
        let ee;
        if (n[22] !== z) {
            Z = function() {
                if (!(z == null || z.msg == null)) {
                    const e = z.msg.id.id;
                    const t = window.requestAnimationFrame(function() {
                        const t = document.querySelector('[data-testid="threads-view-messages"]');
                        const n = t?.querySelector(`[data-id="${CSS.escape(e)}"]`);
                        if (n instanceof HTMLElement) {
                            o("WAWebDomScroll").scrollAt(n);
                            const r = getComputedStyle(n).getPropertyValue("--WDS-accent-RGB").trim();
                            if (r !== "") {
                                n.animate([
                                    {
                                        backgroundColor: "transparent",
                                        offset: 0
                                    },
                                    {
                                        backgroundColor: `rgba(${r}, 0.35)`,
                                        offset: 0.5
                                    },
                                    {
                                        backgroundColor: "transparent",
                                        offset: 1
                                    }
                                ], {
                                    duration: 580
                                });
                            }
                        }
                    });
                    return function() {
                        return window.cancelAnimationFrame(t);
                    };
                }
            };
            ee = [
                z
            ];
            n[22] = z;
            n[23] = Z;
            n[24] = ee;
        } else {
            Z = n[23];
            ee = n[24];
        }
        useEffect(Z, ee);
        let te;
        let ne;
        if (n[25] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebDrawerHeader.react").DrawerHeader;
            te = <Component type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP} title={s._("Replies")} onCancel={o("WAWebModalManager").closeModalManager}/>;
            ne = {
                className: "x1phvje8 x1nbhmlj"
            };
            n[25] = te;
            n[26] = ne;
        } else {
            te = n[25];
            ne = n[26];
        }
        let re;
        if (n[27] !== p) {
            const Component = r("WDSText.react");
            re = <div {...babelHelpers.extends({}, ne, {
                children: <Component type="Body2" colorName="contentDeemphasized">{p}</Component>
            })}/>;
            n[27] = p;
            n[28] = re;
        } else {
            re = n[28];
        }
        let oe;
        if (n[29] !== showDoodle || n[30] !== wallpaper) {
            oe = u.jsx(r("WAWebConversationBackground.react"), {
                wallpaper,
                showDoodle
            });
            n[29] = showDoodle;
            n[30] = wallpaper;
            n[31] = oe;
        } else {
            oe = n[31];
        }
        let ae;
        if (n[32] !== chat || n[33] !== M || n[34] !== x || n[35] !== z || n[36] !== threadId) {
            let ie;
            const Component = r("WAWebConversationMsgs.react");
            ae = <Component ref={ORef} chat={chat} msgCollection={M} threadId={threadId} selectable={false} focusCtx={z} selectedMessages={x} onMessageSelect={ie = r("WAWebNoop")} onSelectMessages={ie} onCancelSelectMessages={ie} notifyChatRendered={ie} updateOpenedChatInfo={ie} updateCanShowSpamPanel={ie} bottomBanners={null}/>;
            n[32] = chat;
            n[33] = M;
            n[34] = x;
            n[35] = z;
            n[36] = threadId;
            n[37] = ae;
        } else {
            ae = n[37];
        }
        let le;
        if (n[38] !== msgPanelRef || n[39] !== oe || n[40] !== ae) {
            const Component = o("WAWebFlexBox.react").FlexColumn;
            le = <Component ref={msgPanelRef} testid="threads-view-messages" xstyle={g.body}>{oe}{ae}</Component>;
            n[38] = msgPanelRef;
            n[39] = oe;
            n[40] = ae;
            n[41] = le;
        } else {
            le = n[41];
        }
        let se;
        if (n[42] !== filler || n[43] !== Q || n[44] !== le) {
            const Component = r("WAWebThreadsViewFocusMsgContext").Provider;
            se = <Component value={Q}>{le}{filler}</Component>;
            n[42] = filler;
            n[43] = Q;
            n[44] = le;
            n[45] = se;
        } else {
            se = n[45];
        }
        let ue;
        if (n[46] !== F || n[47] !== se) {
            const Component = r("WAWebThreadsViewAutoQuoteContext").Provider;
            const Component_1 = r("WAWebIsInThreadsViewContext").Provider;
            const Component_2 = r("WAWebDrawerBody.react");
            ue = <Component_2 overflow="hidden"><Component_1 value><Component value={F}>{se}</Component></Component_1></Component_2>;
            n[46] = F;
            n[47] = se;
            n[48] = ue;
        } else {
            ue = n[48];
        }
        let ce;
        if (n[49] !== re || n[50] !== ue) {
            const Component = r("WAWebDrawer.react");
            const Component_1 = o("WAWebModal.react").Modal;
            ce = <Component_1 type={o("WAWebModal.react").ModalTheme.Box}><Component>{te}{re}{ue}</Component></Component_1>;
            n[49] = re;
            n[50] = ue;
            n[51] = ce;
        } else {
            ce = n[51];
        }
        return ce;
    }
    function y() {
        return new (r("WAWebMultiSelection"))([], C);
    }
    function C(e) {
        return e.id.toString();
    }
    l.default = h;
}, 226);