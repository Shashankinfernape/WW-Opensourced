__d("WAWebMessageHoverBarContainer.react", [
    "WAWebChatGetters",
    "WAWebErrorBoundary.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMessageHoverBar.react",
    "WAWebReactionActionsWamEvent",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBEUtils",
    "WAWebWamEnumReactionActionType",
    "WAWebWamEnumReactionUserJourneyEntryPoint",
    "WAWebWamMsgUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebNewsletterReactionTrayState",
    "useWAWebReactionTrayState",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l) {
    const e = [
        "isDismissing"
    ];
    const s = [
        "canReact",
        "msg",
        "onEdit",
        "onMoreOptions",
        "onOpenEmojiPicker",
        "onReaction",
        "onReply"
    ];
    const u = [
        "canReact",
        "msg",
        "onEdit",
        "onMoreOptions",
        "onOpenEmojiPicker",
        "onReaction",
        "onReply"
    ];
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useRef } = m;
    const f = 500;
    function GComponent(t) {
        const n = o("react-compiler-runtime").c(18);
        const t_isDismissing = t.isDismissing;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const i = t_isDismissing === undefined ? false : t_isDismissing;
        const { canReact, msg, onOpenEmojiPicker, onReaction } = a;
        const m = canReact === undefined ? true : canReact;
        const gRef = useRef(false);
        const C = function() {
            if (!(gRef.current || !m)) {
                gRef.current = true;
                o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayOpen(o("WAWebFrontendMsgGetters").getChat(msg).id, msg, o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.MESSAGE_REACTION_BUTTON);
                new (o("WAWebReactionActionsWamEvent")).ReactionActionsWamEvent({
                    mediaType: o("WAWebWamMsgUtils").getWamMediaType(msg),
                    messageType: o("WAWebWamMsgUtils").getWamMessageType(msg),
                    reactionAction: o("WAWebWamEnumReactionActionType").REACTION_ACTION_TYPE.OPEN_TRAY
                }).commit();
            }
        };
        const b = o("useWAWebTimeout").useTimeout(C, f);
        const v = b[0];
        const S = b[1];
        let R;
        let L;
        if (n[0] !== S || n[1] !== i || n[2] !== v) {
            R = function() {
                if (!i) {
                    v();
                    return S;
                }
            };
            L = [
                S,
                i,
                v
            ];
            n[0] = S;
            n[1] = i;
            n[2] = v;
            n[3] = R;
            n[4] = L;
        } else {
            R = n[3];
            L = n[4];
        }
        useEffect(R, L);
        const E = (t)=>function(...n) {
                const o = n;
                C();
                t(...o);
            };
        const k = onOpenEmojiPicker != null ? E(onOpenEmojiPicker) : onOpenEmojiPicker;
        const I = onReaction != null ? E(onReaction) : onReaction;
        let T;
        if (n[5] !== m || n[6] !== a || n[7] !== k || n[8] !== I) {
            T = babelHelpers.extends({}, a, {
                canReact: m,
                onOpenEmojiPicker: k,
                onReaction: I
            });
            n[5] = m;
            n[6] = a;
            n[7] = k;
            n[8] = I;
            n[9] = T;
        } else {
            T = n[9];
        }
        const D = T;
        let x;
        if (n[10] !== msg) {
            x = o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(msg));
            n[10] = msg;
            n[11] = x;
        } else {
            x = n[11];
        }
        const $ = x;
        const P = msg.id.fromMe ? null : msg.senderObj;
        let N;
        if (n[12] !== P) {
            N = P != null ? o("WAWebFrontendContactGetters").getDisplayName(P) : null;
            n[12] = P;
            n[13] = N;
        } else {
            N = n[13];
        }
        const M = N;
        let w;
        if (n[14] !== $ || n[15] !== M || n[16] !== D) {
            const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
            w = <Component name="WAWebMessageHoverBarContainer">{$ ? <Y2 {...babelHelpers.extends({}, D, {
                messageSenderDisplayName: M
            })}/> : <H2 {...babelHelpers.extends({}, D, {
                messageSenderDisplayName: M
            })}/>}</Component>;
            n[14] = $;
            n[15] = M;
            n[16] = D;
            n[17] = w;
        } else {
            w = n[17];
        }
        return w;
    }
    function H2(e) {
        const t = o("react-compiler-runtime").c(24);
        let n;
        let a;
        let i;
        let l;
        let u;
        let c;
        let m;
        let p;
        if (t[0] !== e) {
            n = e.canReact;
            a = e.msg;
            i = e.onEdit;
            l = e.onMoreOptions;
            u = e.onOpenEmojiPicker;
            c = e.onReaction;
            m = e.onReply;
            p = babelHelpers.objectWithoutPropertiesLoose(e, s);
            t[0] = e;
            t[1] = n;
            t[2] = a;
            t[3] = i;
            t[4] = l;
            t[5] = u;
            t[6] = c;
            t[7] = m;
            t[8] = p;
        } else {
            n = t[1];
            a = t[2];
            i = t[3];
            l = t[4];
            u = t[5];
            c = t[6];
            m = t[7];
            p = t[8];
        }
        let _;
        if (t[9] !== a.id) {
            _ = a.id.toString();
            t[9] = a.id;
            t[10] = _;
        } else {
            _ = t[10];
        }
        const f = r("useWAWebReactionTrayState")(_);
        const { handleSelection, reactionOptions, selectedIndex } = f;
        let C;
        if (t[11] !== handleSelection || t[12] !== c) {
            C = function(t) {
                const e = handleSelection(t);
                if (e === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
                    c?.(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT);
                    return;
                }
                c?.(t);
            };
            t[11] = handleSelection;
            t[12] = c;
            t[13] = C;
        } else {
            C = t[13];
        }
        const v = n ? C : null;
        const S = n ? u : null;
        const R = i != null ? null : m;
        let L;
        if (t[14] !== n || t[15] !== i || t[16] !== l || t[17] !== reactionOptions || t[18] !== p || t[19] !== selectedIndex || t[20] !== v || t[21] !== S || t[22] !== R) {
            L = d.jsx(r("WAWebMessageHoverBar.react"), babelHelpers.extends({
                allowTabEscape: true,
                canReact: n,
                reactions: reactionOptions,
                selectedIndex,
                onReaction: v,
                onOpenEmojiPicker: S,
                onEdit: i,
                onMoreOptions: l,
                onReply: R
            }, p));
            t[14] = n;
            t[15] = i;
            t[16] = l;
            t[17] = reactionOptions;
            t[18] = p;
            t[19] = selectedIndex;
            t[20] = v;
            t[21] = S;
            t[22] = R;
            t[23] = L;
        } else {
            L = t[23];
        }
        return L;
    }
    function Y2(e) {
        const t = o("react-compiler-runtime").c(19);
        let n;
        let a;
        let i;
        let l;
        let s;
        let c;
        let m;
        let p;
        if (t[0] !== e) {
            n = e.canReact;
            a = e.msg;
            i = e.onEdit;
            l = e.onMoreOptions;
            s = e.onOpenEmojiPicker;
            c = e.onReaction;
            m = e.onReply;
            p = babelHelpers.objectWithoutPropertiesLoose(e, u);
            t[0] = e;
            t[1] = n;
            t[2] = a;
            t[3] = i;
            t[4] = l;
            t[5] = s;
            t[6] = c;
            t[7] = m;
            t[8] = p;
        } else {
            n = t[1];
            a = t[2];
            i = t[3];
            l = t[4];
            s = t[5];
            c = t[6];
            m = t[7];
            p = t[8];
        }
        const _ = r("useWAWebNewsletterReactionTrayState")(a, c);
        const { handleReaction, reactionOptions, selectedIndex, showFullDefaultSet } = _;
        const C = n ? handleReaction : null;
        const b = n && !showFullDefaultSet ? s : null;
        const v = i != null ? null : m;
        let S;
        if (t[9] !== n || t[10] !== i || t[11] !== l || t[12] !== reactionOptions || t[13] !== p || t[14] !== selectedIndex || t[15] !== C || t[16] !== b || t[17] !== v) {
            S = d.jsx(r("WAWebMessageHoverBar.react"), babelHelpers.extends({
                allowTabEscape: true,
                canReact: n,
                reactions: reactionOptions,
                selectedIndex,
                onReaction: C,
                onOpenEmojiPicker: b,
                onEdit: i,
                onMoreOptions: l,
                onReply: v
            }, p));
            t[9] = n;
            t[10] = i;
            t[11] = l;
            t[12] = reactionOptions;
            t[13] = p;
            t[14] = selectedIndex;
            t[15] = C;
            t[16] = b;
            t[17] = v;
            t[18] = S;
        } else {
            S = t[18];
        }
        return S;
    }
    l.default = GComponent;
}, 98);