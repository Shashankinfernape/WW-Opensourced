__d("WAWebWrapperGroupProfilePicture.react", [
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebGetDisplayType",
    "WAWebGroupChatProfilePicture.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebViewMode.flow",
    "WAWebWrapperShouldHaveTail",
    "react",
    "react-compiler-runtime",
    "useWAWebAssociatedMessages",
    "useWAWebMsgValues",
    "useWAWebReactions"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    const c = [
        o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
        o("WAWebDisplayType").DISPLAY_TYPE.ALL_REPLIES
    ];
    function d(e) {
        const t = o("react-compiler-runtime").c(35);
        const { selectable, msg, position, tailOverride, sticky, lastMsgs } = e;
        let g;
        if (t[0] !== lastMsgs) {
            g = lastMsgs === undefined ? [] : lastMsgs;
            t[0] = lastMsgs;
            t[1] = g;
        } else {
            g = t[1];
        }
        const h = g;
        let y;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            y = [
                o("WAWebFrontendMsgGetters").getSenderObj,
                o("WAWebMsgGetters").getIsGroupMsg,
                o("WAWebMsgGetters").getIsSentByMe,
                o("WAWebMsgGetters").getIsNotification
            ];
            t[2] = y;
        } else {
            y = t[2];
        }
        const C = o("useWAWebMsgValues").useMsgValues(msg.id, y);
        const userContact = C[0];
        const v = C[1];
        const S = C[2];
        const isDisplayedAsNotification = C[3];
        const L = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(h.length > 0 ? h[0].id : msg.id, o("WAWebViewMode.flow").ViewModeSurface.CHAT);
        let E;
        if (t[3] !== L || t[4] !== h) {
            E = [].concat(h, L).map(f);
            t[3] = L;
            t[4] = h;
            t[5] = E;
        } else {
            E = t[5];
        }
        const k = E;
        let I;
        if (t[6] !== L || t[7] !== h) {
            I = h.some(_) || L.some(p);
            t[6] = L;
            t[7] = h;
            t[8] = I;
        } else {
            I = t[8];
        }
        const T = r("useWAWebReactions")(k, r("WAWebNoop"), I);
        const T_reactionsModels = T.reactionsModels;
        let x;
        if (t[9] !== T_reactionsModels) {
            x = T_reactionsModels.some(m);
            t[9] = T_reactionsModels;
            t[10] = x;
        } else {
            x = t[10];
        }
        const lastMessageHasReaction = x;
        let P;
        if (t[11] !== msg) {
            P = o("WAWebGetDisplayType").getDisplayType(msg);
            t[11] = msg;
            t[12] = P;
        } else {
            P = t[12];
        }
        const N = P;
        let M;
        if (t[13] !== msg) {
            M = o("WAWebFrontendMsgGetters").getChat(msg);
            t[13] = msg;
            t[14] = M;
        } else {
            M = t[14];
        }
        const w = M;
        let A;
        if (t[15] !== w || t[16] !== N || t[17] !== isDisplayedAsNotification || t[18] !== position || t[19] !== tailOverride) {
            A = o("WAWebWrapperShouldHaveTail").shouldHaveTail({
                chat: w,
                isDisplayedAsNotification,
                displayType: N,
                tailOverride,
                position
            });
            t[15] = w;
            t[16] = N;
            t[17] = isDisplayedAsNotification;
            t[18] = position;
            t[19] = tailOverride;
            t[20] = A;
        } else {
            A = t[20];
        }
        const F = A;
        let O;
        if (t[21] !== N || t[22] !== F || t[23] !== v || t[24] !== S || t[25] !== msg.type || t[26] !== selectable || t[27] !== userContact?.id) {
            O = v && !S && (!!F || msg.type === o("WAWebMsgType").MSG_TYPE.PTV) && c.includes(N) && selectable !== true && userContact?.id != null;
            t[21] = N;
            t[22] = F;
            t[23] = v;
            t[24] = S;
            t[25] = msg.type;
            t[26] = selectable;
            t[27] = userContact?.id;
            t[28] = O;
        } else {
            O = t[28];
        }
        const B = O;
        let W;
        if (t[29] !== w || t[30] !== B || t[31] !== lastMessageHasReaction || t[32] !== userContact || t[33] !== sticky) {
            W = B ? s.jsx(r("WAWebGroupChatProfilePicture.react"), {
                userContact,
                chatWid: w.id,
                sticky,
                lastMessageHasReaction
            }) : null;
            t[29] = w;
            t[30] = B;
            t[31] = lastMessageHasReaction;
            t[32] = userContact;
            t[33] = sticky;
            t[34] = W;
        } else {
            W = t[34];
        }
        return W;
    }
    function m(e) {
        return e.reactions.length > 0;
    }
    function p(e) {
        return o("WAWebMsgGetters").getHasReaction(e);
    }
    function _(e) {
        return o("WAWebMsgGetters").getHasReaction(e.unsafe());
    }
    function f(e) {
        return e.id.toString();
    }
    l.default = d;
}, 98);