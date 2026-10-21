__d("WAWebConversationLoadMoreMessages.react", [
    "fbt",
    "WAWebConversationLoadMoreMessagesHistorySync",
    "WAWebSpinner.react",
    "WAWebThreadMessageDBHooks",
    "WDSIconIcRefresh.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(16);
        const { chat, chatId, direction, isLoadingAroundMsgs, isLoadingEarlierMsgs, isLoadingRecentMsgs, isRepairingMsgHistory, loadMoreMsgs, mdHistorySyncTransferState, threadId } = e;
        const g = o("WAWebThreadMessageDBHooks").useWAWebThreadHasOlderMessages(threadId, chat, mdHistorySyncTransferState);
        if (threadId != null && !g) {
            return null;
        }
        const h = direction === "earlier" && isLoadingEarlierMsgs;
        const y = direction === "recent" && isLoadingRecentMsgs;
        const C = direction === "around" && isLoadingAroundMsgs;
        const b = h || y || C || isRepairingMsgHistory;
        const v = mdHistorySyncTransferState != null && !b;
        let S;
        let R;
        let L;
        if (b) {
            let E;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                E = u.jsx(o("WAWebSpinner.react").Spinner, {
                    stroke: 6,
                    size: 24,
                    color: "highlight"
                });
                t[0] = E;
            } else {
                E = t[0];
            }
            S = E;
            let k;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                k = s._("Loading messages…");
                t[1] = k;
            } else {
                k = t[1];
            }
            R = k;
        } else if (v || threadId != null) {
            let I;
            if (t[2] !== chatId || t[3] !== mdHistorySyncTransferState || t[4] !== threadId) {
                I = u.jsx(r("WAWebConversationLoadMoreMessagesHistorySync"), {
                    mdHistorySyncTransferState,
                    chatId,
                    threadId
                });
                t[2] = chatId;
                t[3] = mdHistorySyncTransferState;
                t[4] = threadId;
                t[5] = I;
            } else {
                I = t[5];
            }
            return I;
        } else {
            e: switch(direction){
                case "earlier":
                    {
                        let T;
                        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
                            T = s._("Load earlier messages…");
                            t[6] = T;
                        } else {
                            T = t[6];
                        }
                        R = T;
                        break e;
                    }
                case "recent":
                    {
                        let D;
                        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
                            D = s._("Load recent messages…");
                            t[7] = D;
                        } else {
                            D = t[7];
                        }
                        R = D;
                        break e;
                    }
                default:
                    {
                        let x;
                        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                            x = s._("Loading messages…");
                            t[8] = x;
                        } else {
                            x = t[8];
                        }
                        R = x;
                    }
            }
            let $;
            if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
                $ = u.jsx(r("WDSIconIcRefresh.react"), {
                    testid: "refresh",
                    width: 24,
                    height: 24
                });
                t[9] = $;
            } else {
                $ = t[9];
            }
            S = $;
            L = loadMoreMsgs;
        }
        let P;
        let N;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            P = {
                className: "x78zum5 x1okw0bk xl56j7k xexx8yu xyri2b xvg22vi x1c1uobl"
            };
            N = {
                className: "x78zum5 x6s0dn4 xl56j7k x187nhsf xn3w4p2 xdj266r x11t971q xat24cr xvc5jky xhslqc4 x1280gxy x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1wpep30"
            };
            t[10] = P;
            t[11] = N;
        } else {
            P = t[10];
            N = t[11];
        }
        let M;
        if (t[12] !== S || t[13] !== L || t[14] !== R) {
            M = <div {...babelHelpers.extends({}, P, {
                children: <div {...babelHelpers.extends({}, N, {
                    title: R,
                    onClick: L,
                    children: S
                })}/>
            })}/>;
            t[12] = S;
            t[13] = L;
            t[14] = R;
            t[15] = M;
        } else {
            M = t[15];
        }
        return M;
    }
    l.default = c;
}, 226);