__d("WAWebConsumerMultiSelectBarOverflowMenu.react", [
    "fbt",
    "MetaConfig",
    "WAWebABProps",
    "WAWebBizFrontendGatingUtils",
    "WAWebChatGetters",
    "WAWebChatModel",
    "WAWebClearSelectedChatsDropdownItem.react",
    "WAWebCmd",
    "WAWebDeleteSelectedChatsDropdownItem.react",
    "WAWebFrontendChatGetters",
    "WAWebMultiSelectAddToListMenuItem.react",
    "WAWebMuteGetters",
    "WAWebNewsletterMultiSelectMuteUtils",
    "WAWebUpdateUnreadChatAction",
    "WAWebWamChatActionEventsLogger",
    "WAWebWamEnumChatActionEntryPoint",
    "WAWebWamEnumChatActionType",
    "WDSIconIcArchive.react",
    "WDSIconIcNotificationsFilled.react",
    "WDSIconIcNotificationsOff.react",
    "WDSIconIcUnarchive.react",
    "WDSIconIcUnread.react",
    "WDSIconWdsIcChat.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebSourceSnapshot"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(65);
        const { onComplete, selectedModels, unmutedChatCount, unreadChatCount } = e;
        const c = r("useWAWebSourceSnapshot")(selectedModels, "all", f);
        let y;
        if (t[0] !== c) {
            y = c.reduce(_, []);
            t[0] = c;
            t[1] = y;
        } else {
            y = t[1];
        }
        const C = y;
        let b;
        if (t[2] !== C || t[3] !== onComplete) {
            b = function(t) {
                C.forEach((e)=>{
                    o("WAWebUpdateUnreadChatAction").markUnread(e, t, false);
                });
                o("WAWebWamChatActionEventsLogger").logChatActionEvent({
                    chatActionEntryPoint: o("WAWebWamEnumChatActionEntryPoint").CHAT_ACTION_ENTRY_POINT.CONVERSATION_LIST_BULK_EDIT,
                    chatActionType: t ? o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.UNREAD : o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.READ
                });
                onComplete();
            };
            t[2] = C;
            t[3] = onComplete;
            t[4] = b;
        } else {
            b = t[4];
        }
        const v = b;
        const S = unreadChatCount !== 0;
        let R;
        if (t[5] !== C.length || t[6] !== S) {
            R = S ? s._("_j{\"*\":\"Mark as read\"}", [
                s._plural(C.length)
            ]) : s._("_j{\"*\":\"Mark as unread\"}", [
                s._plural(C.length)
            ]);
            t[5] = C.length;
            t[6] = S;
            t[7] = R;
        } else {
            R = t[7];
        }
        const L = R;
        const E = `multi-select-bar-overflow-menu-item-mark-${S ? "read" : "unread"}`;
        let k;
        if (t[8] !== v || t[9] !== S) {
            k = function() {
                v(!S);
            };
            t[8] = v;
            t[9] = S;
            t[10] = k;
        } else {
            k = t[10];
        }
        const I = k;
        const T = r(S ? "WDSIconWdsIcChat.react" : "WDSIconIcUnread.react");
        let D;
        if (t[11] !== I || t[12] !== E || t[13] !== L || t[14] !== T) {
            const Component = r("WDSMenuItem.react");
            D = <Component onPress={I} Icon={T} testid={E} title={L}/>;
            t[11] = I;
            t[12] = E;
            t[13] = L;
            t[14] = T;
            t[15] = D;
        } else {
            D = t[15];
        }
        const x = D;
        let $;
        let P;
        if (t[16] !== C || t[17] !== unmutedChatCount) {
            $ = C.some(o("WAWebChatGetters").getIsNewsletter) ? C.some(p) : unmutedChatCount !== 0;
            P = C.length === 0 || C.some((e)=>!o("WAWebChatGetters").getIsNewsletter(e) || o("WAWebNewsletterMultiSelectMuteUtils").canToggleChannelMute(e, $));
            t[16] = C;
            t[17] = unmutedChatCount;
            t[18] = $;
            t[19] = P;
        } else {
            $ = t[18];
            P = t[19];
        }
        const N = P;
        let M;
        if (t[20] !== C || t[21] !== onComplete) {
            M = function(t) {
                const e = C.filter(o("WAWebChatGetters").getIsNewsletter);
                const r = C.filter(m);
                const a = function() {
                    o("WAWebNewsletterMultiSelectMuteUtils").muteChannels(e, t);
                    o("WAWebWamChatActionEventsLogger").logChatActionEvent({
                        chatActionEntryPoint: o("WAWebWamEnumChatActionEntryPoint").CHAT_ACTION_ENTRY_POINT.CONVERSATION_LIST_BULK_EDIT,
                        chatActionType: t ? o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.MUTE : o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.UNMUTE
                    });
                    onComplete();
                };
                if (r.length === 0) {
                    a();
                    return;
                }
                o("WAWebCmd").Cmd.muteChatMultiselect(r, t, a);
            };
            t[20] = C;
            t[21] = onComplete;
            t[22] = M;
        } else {
            M = t[22];
        }
        const w = M;
        let A;
        if (t[23] !== $) {
            A = $ ? s._("Mute notifications") : s._("Unmute notifications");
            t[23] = $;
            t[24] = A;
        } else {
            A = t[24];
        }
        const F = A;
        const O = `multi-select-bar-overflow-menu-item-${$ ? "mute" : "unmute"}`;
        let B;
        if (t[25] !== w || t[26] !== $) {
            B = function() {
                w($);
            };
            t[25] = w;
            t[26] = $;
            t[27] = B;
        } else {
            B = t[27];
        }
        const W = B;
        const q = r($ ? "WDSIconIcNotificationsFilled.react" : "WDSIconIcNotificationsOff.react");
        let U;
        if (t[28] !== W || t[29] !== O || t[30] !== F || t[31] !== q) {
            const Component = r("WDSMenuItem.react");
            U = <Component Icon={q} title={F} onPress={W} testid={O}/>;
            t[28] = W;
            t[29] = O;
            t[30] = F;
            t[31] = q;
            t[32] = U;
        } else {
            U = t[32];
        }
        const V = U;
        let H;
        if (t[33] !== C) {
            H = C.some(d);
            t[33] = C;
            t[34] = H;
        } else {
            H = t[34];
        }
        const G = H;
        let z;
        if (t[35] !== C || t[36] !== onComplete) {
            z = function(t) {
                C.forEach((e)=>{
                    o("WAWebCmd").Cmd.archiveChat(e, t);
                });
                o("WAWebWamChatActionEventsLogger").logChatActionEvent({
                    chatActionEntryPoint: o("WAWebWamEnumChatActionEntryPoint").CHAT_ACTION_ENTRY_POINT.CONVERSATION_LIST_BULK_EDIT,
                    chatActionType: o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.ARCHIVE
                });
                onComplete();
            };
            t[35] = C;
            t[36] = onComplete;
            t[37] = z;
        } else {
            z = t[37];
        }
        const j = z;
        let K;
        if (t[38] !== G || t[39] !== C.length) {
            K = G ? s._("_j{\"*\":\"Archive chats\",\"_1\":\"Archive chat\"}", [
                s._plural(C.length)
            ]) : s._("_j{\"*\":\"Unarchive chats\",\"_1\":\"Unarchive chat\"}", [
                s._plural(C.length)
            ]);
            t[38] = G;
            t[39] = C.length;
            t[40] = K;
        } else {
            K = t[40];
        }
        const Q = K;
        const X = `multi-select-bar-overflow-menu-item-${G ? "archive" : "unarchive"}`;
        let Y;
        if (t[41] !== G || t[42] !== j) {
            Y = function() {
                j(G);
            };
            t[41] = G;
            t[42] = j;
            t[43] = Y;
        } else {
            Y = t[43];
        }
        const J = Y;
        const Z = r(G ? "WDSIconIcArchive.react" : "WDSIconIcUnarchive.react");
        let ee;
        if (t[44] !== X || t[45] !== Q || t[46] !== J || t[47] !== Z) {
            const Component = r("WDSMenuItem.react");
            ee = <Component Icon={Z} title={Q} onPress={J} testid={X}/>;
            t[44] = X;
            t[45] = Q;
            t[46] = J;
            t[47] = Z;
            t[48] = ee;
        } else {
            ee = t[48];
        }
        const te = ee;
        let ne;
        if (t[49] !== C) {
            ne = C.some(o("WAWebChatGetters").getIsNewsletter);
            t[49] = C;
            t[50] = ne;
        } else {
            ne = t[50];
        }
        const re = ne;
        const oe = N && V;
        let ae;
        if (t[51] !== C || t[52] !== re || t[53] !== onComplete || t[54] !== selectedModels) {
            ae = !re && <G4Component chats={C} selectedModels={selectedModels} onComplete={onComplete}/>;
            t[51] = C;
            t[52] = re;
            t[53] = onComplete;
            t[54] = selectedModels;
            t[55] = ae;
        } else {
            ae = t[55];
        }
        let ie;
        if (t[56] !== C || t[57] !== onComplete) {
            const Component = r("WAWebDeleteSelectedChatsDropdownItem.react");
            ie = h(C) && <Component chats={C} onComplete={onComplete}/>;
            t[56] = C;
            t[57] = onComplete;
            t[58] = ie;
        } else {
            ie = t[58];
        }
        let le;
        if (t[59] !== te || t[60] !== x || t[61] !== oe || t[62] !== ae || t[63] !== ie) {
            const se = <>{x}{oe}{te}{ae}{ie}</>;
            const Component = r("WDSMenu.react");
            le = <Component>{se}</Component>;
            t[59] = te;
            t[60] = x;
            t[61] = oe;
            t[62] = ae;
            t[63] = ie;
            t[64] = le;
        } else {
            le = t[64];
        }
        return le;
    }
    function d(e) {
        return !e.archive;
    }
    function m(e) {
        return !o("WAWebChatGetters").getIsNewsletter(e);
    }
    function p(e) {
        if (o("WAWebChatGetters").getIsNewsletter(e)) {
            return o("WAWebNewsletterMultiSelectMuteUtils").canToggleChannelMute(e, true);
        }
        return !o("WAWebMuteGetters").getIsMuted(e.mute);
    }
    function _(e, t) {
        if (t instanceof o("WAWebChatModel").Chat) {
            e.push(t);
        }
        return e;
    }
    function f(e) {
        return e.getSelected();
    }
    function G4Component(e) {
        const t = o("react-compiler-runtime").c(11);
        const { chats, onComplete, selectedModels } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = o("WAWebBizFrontendGatingUtils").isCTWASMBListsMultiSelectEnabled();
            t[0] = l;
        } else {
            l = t[0];
        }
        const s = l;
        let c;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            c = o("WAWebABProps").getABPropConfigValue("wa_web_clear_selected_chats_enabled");
            t[1] = c;
        } else {
            c = t[1];
        }
        const d = c;
        let m;
        if (t[2] !== chats || t[3] !== onComplete) {
            const Component = r("WAWebMultiSelectAddToListMenuItem.react");
            m = s && <Component chats={chats} onComplete={onComplete}/>;
            t[2] = chats;
            t[3] = onComplete;
            t[4] = m;
        } else {
            m = t[4];
        }
        let p;
        if (t[5] !== onComplete || t[6] !== selectedModels) {
            const Component = r("WAWebClearSelectedChatsDropdownItem.react");
            p = d && <Component selectedModels={selectedModels} onComplete={onComplete}/>;
            t[5] = onComplete;
            t[6] = selectedModels;
            t[7] = p;
        } else {
            p = t[7];
        }
        let _;
        if (t[8] !== m || t[9] !== p) {
            _ = <>{m}{p}</>;
            t[8] = m;
            t[9] = p;
            t[10] = _;
        } else {
            _ = t[10];
        }
        return _;
    }
    function h(e) {
        return y(e) && r("MetaConfig")._("578");
    }
    function y(e) {
        return e.length > 0 && !e.some((e)=>o("WAWebChatGetters").getIsNewsletter(e) || o("WAWebFrontendChatGetters").getIsCommunity(e) || o("WAWebFrontendChatGetters").getIsCAG(e) || o("WAWebChatGetters").getIsGroup(e) && !o("WAWebChatGetters").getIsReadOnly(e));
    }
    l.default = c;
}, 226);