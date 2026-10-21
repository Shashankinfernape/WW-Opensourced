__d("WAWebSendReactionsTrayNewsletterContainer.react", [
    "WAWebDefaultReactions",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebReactionsBEUtils",
    "WAWebReactionsUtils",
    "WAWebSendReactionsTray.react",
    "react",
    "react-compiler-runtime",
    "useWAWebNewsletterReactions"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    function c(e) {
        const t = o("react-compiler-runtime").c(49);
        const { disableAutoFocus, isInlineMode, msg, onMouseEnter, onMouseLeave, onMouseOver, onShiftTabToMenu, onTabToMenu, ref, rotateFocusArrowsRef, selectedCallback } = e;
        const y = disableAutoFocus === undefined ? false : disableAutoFocus;
        let C;
        if (t[0] !== msg.id) {
            C = [
                msg.id
            ];
            t[0] = msg.id;
            t[1] = C;
        } else {
            C = t[1];
        }
        const b = r("useWAWebNewsletterReactions")(C);
        const v = b[0];
        const S = v?.myReaction;
        let R;
        if (t[2] !== S) {
            R = function() {
                return d(S);
            };
            t[2] = S;
            t[3] = R;
        } else {
            R = t[3];
        }
        const L = e_useState(R);
        const E = L[0];
        const k = L[1];
        const I = v?.myReaction;
        let T;
        if (t[4] !== I) {
            T = o("WAWebReactionsUtils").getReactionsForTray(o("WAWebDefaultReactions").DEFAULT_REACTIONS, I);
            t[4] = I;
            t[5] = T;
        } else {
            T = t[5];
        }
        const D = T;
        let x;
        if (t[6] !== v?.myReaction || t[7] !== D || t[8] !== selectedCallback) {
            x = function(t) {
                if (t === v?.myReaction) {
                    k(null);
                    return selectedCallback(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT);
                }
                k(o("WAWebReactionsUtils").indexOrNull(D.indexOf(t)));
                selectedCallback(t);
            };
            t[6] = v?.myReaction;
            t[7] = D;
            t[8] = selectedCallback;
            t[9] = x;
        } else {
            x = t[9];
        }
        const $ = x;
        const P = e_useState(S);
        const N = P[0];
        const M = P[1];
        if (N !== S) {
            M(S);
            k(d(S));
        }
        let w;
        let A;
        let showMoreOption;
        let O;
        let B;
        let onMouseOver_1;
        let q;
        let isInlineMode_1;
        let V;
        let H;
        if (t[10] !== isInlineMode || t[11] !== msg || t[12] !== onMouseEnter || t[13] !== onMouseLeave || t[14] !== onMouseOver || t[15] !== D || t[16] !== ref || t[17] !== E || t[18] !== $) {
            const G = o("WAWebFrontendMsgGetters").getChat(msg);
            O = ref;
            B = onMouseEnter;
            onMouseOver_1 = onMouseOver;
            q = onMouseLeave;
            w = o("WAWebSendReactionsTray.react").SendReactionsTray;
            isInlineMode_1 = isInlineMode;
            V = E;
            H = $;
            A = D;
            showMoreOption = o("WAWebNewsletterGatingUtils").shouldShowAllReactionsForNewsletter(G);
            t[10] = isInlineMode;
            t[11] = msg;
            t[12] = onMouseEnter;
            t[13] = onMouseLeave;
            t[14] = onMouseOver;
            t[15] = D;
            t[16] = ref;
            t[17] = E;
            t[18] = $;
            t[19] = w;
            t[20] = A;
            t[21] = showMoreOption;
            t[22] = O;
            t[23] = B;
            t[24] = onMouseOver_1;
            t[25] = q;
            t[26] = isInlineMode_1;
            t[27] = V;
            t[28] = H;
        } else {
            w = t[19];
            A = t[20];
            showMoreOption = t[21];
            O = t[22];
            B = t[23];
            onMouseOver_1 = t[24];
            q = t[25];
            isInlineMode_1 = t[26];
            V = t[27];
            H = t[28];
        }
        let z;
        if (t[29] !== msg) {
            z = o("WAWebMsgGetters").getIsSentByMe(msg);
            t[29] = msg;
            t[30] = z;
        } else {
            z = t[30];
        }
        let j;
        if (t[31] !== w || t[32] !== y || t[33] !== onShiftTabToMenu || t[34] !== onTabToMenu || t[35] !== rotateFocusArrowsRef || t[36] !== A || t[37] !== showMoreOption || t[38] !== z || t[39] !== isInlineMode_1 || t[40] !== V || t[41] !== H) {
            j = s.jsx(w, {
                isInlineMode: isInlineMode_1,
                selectedIndex: V,
                selectedCallback: H,
                reactions: A,
                showMoreOption,
                disableAutoFocus: y,
                isParentMsgSentByMe: z,
                onShiftTabToMenu,
                onTabToMenu,
                rotateFocusArrowsRef
            });
            t[31] = w;
            t[32] = y;
            t[33] = onShiftTabToMenu;
            t[34] = onTabToMenu;
            t[35] = rotateFocusArrowsRef;
            t[36] = A;
            t[37] = showMoreOption;
            t[38] = z;
            t[39] = isInlineMode_1;
            t[40] = V;
            t[41] = H;
            t[42] = j;
        } else {
            j = t[42];
        }
        let K;
        if (t[43] !== O || t[44] !== B || t[45] !== onMouseOver_1 || t[46] !== q || t[47] !== j) {
            K = <div ref={O} onMouseEnter={B} onMouseOver={onMouseOver_1} onMouseLeave={q}>{j}</div>;
            t[43] = O;
            t[44] = B;
            t[45] = onMouseOver_1;
            t[46] = q;
            t[47] = j;
            t[48] = K;
        } else {
            K = t[48];
        }
        return K;
    }
    function d(e) {
        if (e == null) {
            return null;
        }
        return o("WAWebReactionsUtils").indexOrNull(o("WAWebReactionsUtils").getReactionsForTray(o("WAWebDefaultReactions").DEFAULT_REACTIONS, e).indexOf(e));
    }
    l.SendReactionsTrayNewsletterContainer = c;
}, 98);