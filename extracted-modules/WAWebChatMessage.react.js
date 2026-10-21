__d("WAWebChatMessage.react", [
    "WATypeUtils",
    "WAWebBoolFunc",
    "WAWebBotGating",
    "WAWebChatCell.react",
    "WAWebChatGetters",
    "WAWebChatLastMsg.react",
    "WAWebChatMessageSearch",
    "WAWebChatTimestamp.react",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebMobilePlatforms",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebName.react",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebActiveSelection",
    "useWAWebChatValues",
    "useWAWebMsgValues",
    "useWAWebSearchQuery"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(37);
        const { chat, filterPreset, msg, onClick, searchQuery, testid } = e;
        let m;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let p;
            m = [
                (p = o("WAWebMsgGetters")).getId,
                p.getIsSentByMe,
                p.getIsGroupMsg,
                p.getIsNotification,
                o("WAWebFrontendMsgGetters").getSenderObj,
                o("WAWebFrontendMsgGetters").getDir,
                o("WAWebFrontendMsgGetters").getRtl,
                p.getType,
                p.getLabels
            ];
            t[0] = m;
        } else {
            m = t[0];
        }
        const _ = o("useWAWebMsgValues").useOptionalMsgValues(e.msg.id, m);
        const f = _ != null ? _[0] : e.msg.id;
        let g;
        if (t[1] !== _) {
            g = _ != null ? _[8] : [];
            t[1] = _;
            t[2] = g;
        } else {
            g = t[2];
        }
        const h = g;
        let y;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            y = [
                o("WAWebChatGetters").getId,
                o("WAWebChatGetters").getIsUser,
                o("WAWebFrontendChatGetters").getContact,
                o("WAWebFrontendChatGetters").getFormattedTitle,
                o("WAWebFrontendChatGetters").getGroupMetadata,
                o("WAWebChatGetters").getIsNewsletter
            ];
            t[3] = y;
        } else {
            y = t[3];
        }
        o("useWAWebChatValues").useChatValues(e.chat.id, y);
        const e_active = e.active;
        let b;
        if (t[4] !== f) {
            b = f.toString();
            t[4] = f;
            t[5] = b;
        } else {
            b = t[5];
        }
        const v = r("useWAWebActiveSelection")(e_active, b);
        const S = v[0];
        const R = v[1];
        const searchQuery_1 = o("useWAWebSearchQuery").useHighlightedText(searchQuery);
        let E;
        if (t[6] !== chat || t[7] !== searchQuery_1 || t[8] !== f || t[9] !== onClick) {
            E = function(t) {
                if (o("WATypeUtils").isFunction(onClick)) {
                    const a = o("WAWebMsgCollection").MsgCollection.assertGet(f);
                    const i = o("WAWebThreadMsgUtils").getMsgAiThread(a);
                    if (i != null && o("WAWebBotGating").isAiChatThreadsEnabled()) {
                        onClick(t, o("WAWebStateUtils").unproxy(chat), {
                            msg: a,
                            key: a.id,
                            collection: chat.msgs
                        }, a);
                        return;
                    }
                    const s = o("WAWebChatMessageSearch").getSearchContext({
                        chat,
                        msgKey: a.id
                    });
                    if ((searchQuery_1?.length ?? 0) > 0) {
                        s.highlightTerms = searchQuery_1;
                    }
                    if (s.msg?.type !== o("WAWebMsgType").MSG_TYPE.ALBUM) {
                        s.msg = a;
                    }
                    onClick(t, o("WAWebStateUtils").unproxy(chat), s, a);
                }
            };
            t[6] = chat;
            t[7] = searchQuery_1;
            t[8] = f;
            t[9] = onClick;
            t[10] = E;
        } else {
            E = t[10];
        }
        const k = E;
        let I;
        if (t[11] !== k) {
            I = {
                enter: k,
                space: k
            };
            t[11] = k;
            t[12] = I;
        } else {
            I = t[12];
        }
        const T = I;
        const D = c;
        let x;
        if (t[13] !== msg) {
            x = s.jsx(r("WAWebChatTimestamp.react"), {
                msg
            });
            t[13] = msg;
            t[14] = x;
        } else {
            x = t[14];
        }
        const $ = x;
        let P;
        if (t[15] !== msg) {
            P = msg.safe();
            t[15] = msg;
            t[16] = P;
        } else {
            P = t[16];
        }
        let N;
        if (t[17] !== searchQuery_1 || t[18] !== P) {
            N = s.jsx(r("WAWebChatLastMsg.react"), {
                msg: P,
                msgType: "FTSMessage",
                searchQuery: searchQuery_1
            });
            t[17] = searchQuery_1;
            t[18] = P;
            t[19] = N;
        } else {
            N = t[19];
        }
        const M = N;
        const w = e.theme === "chat-checkbox" ? "cell-message-checkbox" : "cell-message";
        const A = filterPreset?.label;
        let F;
        if (t[20] === Symbol.for("react.memo_cache_sentinel")) {
            F = o("WAWebMobilePlatforms").isSMB();
            t[20] = F;
        } else {
            F = t[20];
        }
        let O;
        if (t[21] !== chat || t[22] !== h || t[23] !== A) {
            O = s.jsx(o("WAWebName.react").Name, {
                chat,
                labels: h,
                firstLabel: A,
                showLabelIcon: F,
                titlify: true,
                ellipsify: true
            });
            t[21] = chat;
            t[22] = h;
            t[23] = A;
            t[24] = O;
        } else {
            O = t[24];
        }
        let B;
        if (t[25] !== R || t[26] !== k || t[27] !== $ || t[28] !== M || t[29] !== w || t[30] !== O || t[31] !== testid) {
            const Component = r("WAWebChatCell.react");
            B = <Component contextEnabled={o("WAWebBoolFunc").returnFalse} theme={w} active={R} primary={O} primaryDetail={$} secondary={M} onClick={k} testid={testid}/>;
            t[25] = R;
            t[26] = k;
            t[27] = $;
            t[28] = M;
            t[29] = w;
            t[30] = O;
            t[31] = testid;
            t[32] = B;
        } else {
            B = t[32];
        }
        let W;
        if (t[33] !== T || t[34] !== S || t[35] !== B) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            W = <Component handlers={T} onFocus={D} ref={S}>{B}</Component>;
            t[33] = T;
            t[34] = S;
            t[35] = B;
            t[36] = W;
        } else {
            W = t[36];
        }
        return W;
    }
    function c(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    l.default = u;
}, 98);