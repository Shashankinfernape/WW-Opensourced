__d("WAWebJumpToButtons.react", [
    "fbt",
    "WAWebCartCollection",
    "WAWebCartFlowLoadable",
    "WAWebCartGetters",
    "WAWebChatGetters",
    "WAWebChatUnreadCount.react",
    "WAWebDrawerManager",
    "WAWebGroupCatchUpButton.react",
    "WAWebJumpToButtons.stylex",
    "WAWebTabOrder",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "WDSIconIcChevronDown.react",
    "WDSIconIcShoppingCart.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebCartValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useMemo = u.useMemo;
    const m = {
        padding10: {
            paddingTop: "x889kno",
            paddingInlineEnd: "x2vl965",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "xe2zdcy",
            $$css: true
        }
    };
    const p = {
        incomingContainer: {
            position: "x10l6tqk",
            insetInlineEnd: "x1mhpo7k",
            bottom: "x1qs2g4o",
            zIndex: "x12xzxwr",
            display: "x3nfvp2",
            flexDirection: "xdt5ytf",
            $$css: true
        },
        buttonGap: {
            transition: "x6q2ic0",
            $$css: true
        },
        chevronRefreshed: {
            color: "xhslqc4",
            $$css: true
        },
        borderRadius: {
            borderStartStartRadius: "x17m9png",
            borderStartEndRadius: "x91sizk",
            borderEndEndRadius: "x1vva9xg",
            borderEndStartRadius: "x1jfkl46",
            $$css: true
        },
        incomingContainerRefreshed: {
            position: "x10l6tqk",
            insetInlineEnd: "x1mhpo7k",
            bottom: "x1qs2g4o",
            zIndex: "x12xzxwr",
            display: "x3nfvp2",
            flexDirection: "xdt5ytf",
            $$css: true
        }
    };
    function _(t) {
        const n = o("react-compiler-runtime").c(35);
        const { chat, handleJumpBackToContext, handleJumpToBottom, handleJumpToMention, isMostRecentAndNotLoading, isNearBottom, newUnread, unreadMentionCount } = t;
        const showIncomingMsgs = !isNearBottom || isMostRecentAndNotLoading || handleJumpBackToContext != null;
        let C;
        if (n[0] !== chat || n[1] !== unreadMentionCount) {
            C = o("WAWebChatGetters").getIsGroup(chat) && unreadMentionCount > 0;
            n[0] = chat;
            n[1] = unreadMentionCount;
            n[2] = C;
        } else {
            C = n[2];
        }
        const showGroupMention = C;
        const v = handleJumpBackToContext ?? handleJumpToBottom;
        let S = null;
        if (showGroupMention) {
            let R;
            if (n[3] !== showIncomingMsgs) {
                R = [
                    o("WAWebJumpToButtons.stylex").styles.boxShadow
                ];
                if (showIncomingMsgs) {
                    R.push(p.buttonGap, o("WDSMargins.stylex").wdsMargins.marginBottom16);
                } else {
                    R.push(p.borderRadius);
                }
                n[3] = showIncomingMsgs;
                n[4] = R;
            } else {
                R = n[4];
            }
            let L;
            if (n[5] !== R || n[6] !== handleJumpToMention || n[7] !== unreadMentionCount) {
                L = c.jsx(r("WAWebGroupCatchUpButton.react"), {
                    handleJumpToMention,
                    unreadMentionCount,
                    xstyle: R
                });
                n[5] = R;
                n[6] = handleJumpToMention;
                n[7] = unreadMentionCount;
                n[8] = L;
            } else {
                L = n[8];
            }
            S = L;
        }
        let E = null;
        if (showIncomingMsgs) {
            let k = null;
            if (newUnread && chat.unreadCount) {
                let I;
                if (n[9] !== newUnread) {
                    I = c.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                        count: newUnread,
                        theme: o("WAWebChatUnreadCount.react").UnreadCountTheme.ChatThread
                    }, "icon-unread");
                    n[9] = newUnread;
                    n[10] = I;
                } else {
                    I = n[10];
                }
                k = I;
            }
            let T;
            if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
                T = [
                    o("WAWebJumpToButtons.stylex").styles.boxShadow,
                    o("WAWebJumpToButtons.stylex").styles.incomingRefreshed,
                    m.padding10
                ];
                n[11] = T;
            } else {
                T = n[11];
            }
            let D;
            let x;
            if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
                D = s._("Scroll to bottom");
                x = c.jsx(r("WDSIconIcChevronDown.react"), {
                    width: 24,
                    height: 24,
                    xstyle: p.chevronRefreshed
                });
                n[12] = D;
                n[13] = x;
            } else {
                D = n[12];
                x = n[13];
            }
            let $;
            if (n[14] !== k) {
                $ = k && <span {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebJumpToButtons.stylex").styles.unreadRefreshed), {
                    children: k
                })}/>;
                n[14] = k;
                n[15] = $;
            } else {
                $ = n[15];
            }
            let P;
            if (n[16] !== v || n[17] !== $) {
                const Component = r("WAWebUnstyledButton.react");
                P = <Component xstyle={T} dataTab={o("WAWebTabOrder").TAB_ORDER.MESSAGE_LIST_SCROLL_BUTTON} onClick={v} aria-label={D}>{x}{$}</Component>;
                n[16] = v;
                n[17] = $;
                n[18] = P;
            } else {
                P = n[18];
            }
            E = P;
        }
        let N;
        if (n[19] !== chat || n[20] !== showGroupMention || n[21] !== showIncomingMsgs) {
            N = chat.contact?.isBusiness === true && chat.contact?.id?.isRegularUser() === true && <F2Component chat={chat} showGroupMention={showGroupMention} showIncomingMsgs={showIncomingMsgs}/>;
            n[19] = chat;
            n[20] = showGroupMention;
            n[21] = showIncomingMsgs;
            n[22] = N;
        } else {
            N = n[22];
        }
        const A = N;
        if (showIncomingMsgs && showGroupMention) {
            let F;
            if (n[23] === Symbol.for("react.memo_cache_sentinel")) {
                F = (e || (e = r("stylex"))).props(p.incomingContainerRefreshed, p.borderRadius, o("WDSMargins.stylex").wdsMargins.marginEnd4);
                n[23] = F;
            } else {
                F = n[23];
            }
            let O;
            if (n[24] !== S || n[25] !== E || n[26] !== A) {
                O = <div {...babelHelpers.extends({}, F, {
                    children: [
                        A,
                        S,
                        E
                    ]
                })}/>;
                n[24] = S;
                n[25] = E;
                n[26] = A;
                n[27] = O;
            } else {
                O = n[27];
            }
            return O;
        }
        let B;
        if (n[28] === Symbol.for("react.memo_cache_sentinel")) {
            B = (e || (e = r("stylex"))).props(p.incomingContainer, o("WDSMargins.stylex").wdsMargins.marginEnd4);
            n[28] = B;
        } else {
            B = n[28];
        }
        let W;
        if (n[29] !== E) {
            const Component = r("WAWebVelocityTransitionGroup");
            W = <Component transitionName="pop">{E}</Component>;
            n[29] = E;
            n[30] = W;
        } else {
            W = n[30];
        }
        let q;
        if (n[31] !== S || n[32] !== A || n[33] !== W) {
            q = <div {...babelHelpers.extends({}, B, {
                children: [
                    A,
                    S,
                    W
                ]
            })}/>;
            n[31] = S;
            n[32] = A;
            n[33] = W;
            n[34] = q;
        } else {
            q = n[34];
        }
        return q;
    }
    function F2Component(t) {
        const a = o("react-compiler-runtime").c(20);
        const { chat, showGroupMention, showIncomingMsgs } = t;
        let d;
        if (a[0] !== chat) {
            d = o("WAWebChatGetters").getIsGroup(chat);
            a[0] = chat;
            a[1] = d;
        } else {
            d = a[1];
        }
        const _ = d;
        let f;
        if (a[2] !== chat.id || a[3] !== _) {
            f = _ ? null : o("WAWebCartCollection").CartCollection.findCart(chat.id.toString()).id;
            a[2] = chat.id;
            a[3] = _;
            a[4] = f;
        } else {
            f = a[4];
        }
        const g = f;
        let h;
        if (a[5] === Symbol.for("react.memo_cache_sentinel")) {
            h = [
                o("WAWebCartGetters").getCartItemCount
            ];
            a[5] = h;
        } else {
            h = a[5];
        }
        const y = o("useWAWebCartValues").useOptionalCartValues(g, h);
        const C = y?.[0] ?? 0;
        let b = null;
        if (C > 0) {
            let v;
            if (a[6] !== chat) {
                v = function() {
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(o("WAWebCartFlowLoadable").CartFlowLoadable, {
                        sellerJid: chat.id.toString(),
                        chat
                    }));
                };
                a[6] = chat;
                a[7] = v;
            } else {
                v = a[7];
            }
            const S = v;
            const R = (showGroupMention || showIncomingMsgs) && p.buttonGap;
            const L = (showGroupMention || showIncomingMsgs) && o("WDSMargins.stylex").wdsMargins.marginBottom16;
            let E;
            if (a[8] !== R || a[9] !== L) {
                E = [
                    o("WAWebJumpToButtons.stylex").styles.boxShadow,
                    o("WAWebJumpToButtons.stylex").styles.incomingRefreshed,
                    m.padding10,
                    R,
                    L
                ];
                a[8] = R;
                a[9] = L;
                a[10] = E;
            } else {
                E = a[10];
            }
            let k;
            let I;
            let T;
            if (a[11] === Symbol.for("react.memo_cache_sentinel")) {
                I = s._("View cart");
                T = c.jsx(r("WDSIconIcShoppingCart.react"), {
                    xstyle: p.chevronRefreshed
                });
                k = (e || (e = r("stylex"))).props(o("WAWebJumpToButtons.stylex").styles.unreadRefreshed);
                a[11] = k;
                a[12] = I;
                a[13] = T;
            } else {
                k = a[11];
                I = a[12];
                T = a[13];
            }
            let D;
            if (a[14] !== C) {
                D = <span {...babelHelpers.extends({}, k, {
                    children: c.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                        count: C,
                        theme: o("WAWebChatUnreadCount.react").UnreadCountTheme.ChatThread
                    })
                })}/>;
                a[14] = C;
                a[15] = D;
            } else {
                D = a[15];
            }
            let x;
            if (a[16] !== S || a[17] !== D || a[18] !== E) {
                const Component = r("WAWebUnstyledButton.react");
                x = <Component xstyle={E} dataTab={o("WAWebTabOrder").TAB_ORDER.MESSAGE_LIST_SCROLL_BUTTON} onClick={S} aria-label={I}>{T}{D}</Component>;
                a[16] = S;
                a[17] = D;
                a[18] = E;
                a[19] = x;
            } else {
                x = a[19];
            }
            b = x;
        }
        return b;
    }
    l.default = _;
}, 226);