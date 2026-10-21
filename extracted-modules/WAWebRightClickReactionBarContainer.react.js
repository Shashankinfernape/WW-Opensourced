__d("WAWebRightClickReactionBarContainer.react", [
    "WAWebChatGetters",
    "WAWebErrorBoundary.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMessageHoverBar.react",
    "WAWebNoop",
    "WAWebNullFunc",
    "WAWebReactionActionsWamEvent",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBEUtils",
    "WAWebWamEnumReactionActionType",
    "WAWebWamMsgUtils",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useVisibility",
    "useWAWebNewsletterReactionTrayState",
    "useWAWebReactionTrayState"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const s_useSyncExternalStore = s.useSyncExternalStore;
    function d(e) {
        return r("WAWebNoop");
    }
    function m(t) {
        const i = o("react-compiler-runtime").c(30);
        let l;
        let s;
        if (i[0] !== t) {
            s = t.ref;
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            i[0] = t;
            i[1] = l;
            i[2] = s;
        } else {
            l = i[1];
            s = i[2];
        }
        const m = l;
        const { canAnimateExpand, canReact, disableAutoFocus, isExpanded, msg, onCollapseEmojiPicker, onMouseEnter, onMouseLeave, onOpenEmojiPicker, onReaction, onShiftTabToMenu, onTabToMenu, pickerAnimationStore, rotateFocusArrowsRef, userJourneyEntryPoint } = m;
        const x = canReact === undefined ? true : canReact;
        const $ = s_useSyncExternalStore(pickerAnimationStore?.subscribe ?? d, pickerAnimationStore?.getSnapshot ?? o("WAWebNullFunc").returnNull);
        const P = $ != null ? $.isExpanded : isExpanded;
        const N = $ != null ? $.canAnimateExpand : canAnimateExpand;
        let M;
        if (i[3] !== x || i[4] !== msg || i[5] !== userJourneyEntryPoint) {
            M = {
                onVisible: function() {
                    if (x) {
                        o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayOpen(o("WAWebFrontendMsgGetters").getChat(msg).id, msg, userJourneyEntryPoint);
                        new (o("WAWebReactionActionsWamEvent")).ReactionActionsWamEvent({
                            mediaType: o("WAWebWamMsgUtils").getWamMediaType(msg),
                            messageType: o("WAWebWamMsgUtils").getWamMessageType(msg),
                            reactionAction: o("WAWebWamEnumReactionActionType").REACTION_ACTION_TYPE.OPEN_TRAY
                        }).commit();
                    }
                }
            };
            i[3] = x;
            i[4] = msg;
            i[5] = userJourneyEntryPoint;
            i[6] = M;
        } else {
            M = i[6];
        }
        const w = r("useVisibility")(M);
        const A = w[0];
        const F = r("useMergeRefs")(s, A);
        let O;
        if (i[7] !== msg) {
            O = o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(msg));
            i[7] = msg;
            i[8] = O;
        } else {
            O = i[8];
        }
        const B = O;
        const W = msg.id.fromMe ? null : msg.senderObj;
        let q;
        if (i[9] !== W) {
            q = W != null ? o("WAWebFrontendContactGetters").getDisplayName(W) : null;
            i[9] = W;
            i[10] = q;
        } else {
            q = i[10];
        }
        const U = q;
        let V;
        if (i[11] !== N || i[12] !== x || i[13] !== disableAutoFocus || i[14] !== P || i[15] !== B || i[16] !== U || i[17] !== msg || i[18] !== onCollapseEmojiPicker || i[19] !== onMouseEnter || i[20] !== onMouseLeave || i[21] !== onOpenEmojiPicker || i[22] !== onReaction || i[23] !== onShiftTabToMenu || i[24] !== onTabToMenu || i[25] !== rotateFocusArrowsRef) {
            const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
            V = <Component name="WAWebRightClickReactionBarContainer">{B ? <_ canAnimateExpand={N} canReact={x} disableAutoFocus={disableAutoFocus} isExpanded={P} messageSenderDisplayName={U} msg={msg} onCollapseEmojiPicker={onCollapseEmojiPicker} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onOpenEmojiPicker={onOpenEmojiPicker} onReaction={onReaction} onShiftTabToMenu={onShiftTabToMenu} onTabToMenu={onTabToMenu} rotateFocusArrowsRef={rotateFocusArrowsRef}/> : <P9Component canAnimateExpand={N} canReact={x} disableAutoFocus={disableAutoFocus} isExpanded={P} messageSenderDisplayName={U} msg={msg} onCollapseEmojiPicker={onCollapseEmojiPicker} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onOpenEmojiPicker={onOpenEmojiPicker} onReaction={onReaction} onShiftTabToMenu={onShiftTabToMenu} onTabToMenu={onTabToMenu} rotateFocusArrowsRef={rotateFocusArrowsRef}/>}</Component>;
            i[11] = N;
            i[12] = x;
            i[13] = disableAutoFocus;
            i[14] = P;
            i[15] = B;
            i[16] = U;
            i[17] = msg;
            i[18] = onCollapseEmojiPicker;
            i[19] = onMouseEnter;
            i[20] = onMouseLeave;
            i[21] = onOpenEmojiPicker;
            i[22] = onReaction;
            i[23] = onShiftTabToMenu;
            i[24] = onTabToMenu;
            i[25] = rotateFocusArrowsRef;
            i[26] = V;
        } else {
            V = i[26];
        }
        let H;
        if (i[27] !== F || i[28] !== V) {
            H = <div ref={F}>{V}</div>;
            i[27] = F;
            i[28] = V;
            i[29] = H;
        } else {
            H = i[29];
        }
        return H;
    }
    function P9Component(e) {
        const t = o("react-compiler-runtime").c(21);
        const { canAnimateExpand, canReact, disableAutoFocus, isExpanded, messageSenderDisplayName, msg, onCollapseEmojiPicker, onMouseEnter, onMouseLeave, onOpenEmojiPicker, onReaction, onShiftTabToMenu, onTabToMenu, rotateFocusArrowsRef } = e;
        const C = canAnimateExpand === undefined ? false : canAnimateExpand;
        const b = canReact === undefined ? true : canReact;
        const v = disableAutoFocus === undefined ? true : disableAutoFocus;
        const S = isExpanded === undefined ? false : isExpanded;
        let R;
        if (t[0] !== msg.id) {
            R = msg.id.toString();
            t[0] = msg.id;
            t[1] = R;
        } else {
            R = t[1];
        }
        const L = r("useWAWebReactionTrayState")(R);
        const { handleSelection, reactionOptions, selectedIndex } = L;
        let T;
        if (t[2] !== handleSelection || t[3] !== onReaction) {
            T = function(t) {
                const e = handleSelection(t);
                if (e === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
                    onReaction?.(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT);
                    return;
                }
                onReaction?.(t);
            };
            t[2] = handleSelection;
            t[3] = onReaction;
            t[4] = T;
        } else {
            T = t[4];
        }
        const x = b ? T : null;
        const $ = b ? onOpenEmojiPicker : null;
        const P = b ? onCollapseEmojiPicker : null;
        let N;
        if (t[5] !== C || t[6] !== b || t[7] !== v || t[8] !== S || t[9] !== messageSenderDisplayName || t[10] !== onMouseEnter || t[11] !== onMouseLeave || t[12] !== onShiftTabToMenu || t[13] !== onTabToMenu || t[14] !== reactionOptions || t[15] !== rotateFocusArrowsRef || t[16] !== selectedIndex || t[17] !== x || t[18] !== $ || t[19] !== P) {
            const Component = r("WAWebMessageHoverBar.react");
            N = <Component canAnimateExpand={C} canReact={b} collapseLabel="menu" disableAutoFocus={v} isExpanded={S} messageSenderDisplayName={messageSenderDisplayName} reactions={reactionOptions} reactionsChangeOnExpand={false} selectedIndex={selectedIndex} onReaction={x} onOpenEmojiPicker={$} onCollapseEmojiPicker={P} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onShiftTabToMenu={onShiftTabToMenu} onTabToMenu={onTabToMenu} rotateFocusArrowsRef={rotateFocusArrowsRef}/>;
            t[5] = C;
            t[6] = b;
            t[7] = v;
            t[8] = S;
            t[9] = messageSenderDisplayName;
            t[10] = onMouseEnter;
            t[11] = onMouseLeave;
            t[12] = onShiftTabToMenu;
            t[13] = onTabToMenu;
            t[14] = reactionOptions;
            t[15] = rotateFocusArrowsRef;
            t[16] = selectedIndex;
            t[17] = x;
            t[18] = $;
            t[19] = P;
            t[20] = N;
        } else {
            N = t[20];
        }
        return N;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(16);
        const { canAnimateExpand, canReact, disableAutoFocus, isExpanded, messageSenderDisplayName, msg, onCollapseEmojiPicker, onMouseEnter, onMouseLeave, onOpenEmojiPicker, onReaction, onShiftTabToMenu, onTabToMenu, rotateFocusArrowsRef } = e;
        const C = canAnimateExpand === undefined ? false : canAnimateExpand;
        const b = canReact === undefined ? true : canReact;
        const v = disableAutoFocus === undefined ? true : disableAutoFocus;
        const S = isExpanded === undefined ? false : isExpanded;
        const R = r("useWAWebNewsletterReactionTrayState")(msg, onReaction);
        const { handleReaction, reactionOptions, selectedIndex, showFullDefaultSet } = R;
        const T = S && !showFullDefaultSet;
        const D = b ? handleReaction : null;
        const x = b && !showFullDefaultSet ? onOpenEmojiPicker : null;
        const $ = b && !showFullDefaultSet ? onCollapseEmojiPicker : null;
        let P;
        if (t[0] !== C || t[1] !== b || t[2] !== v || t[3] !== T || t[4] !== messageSenderDisplayName || t[5] !== onMouseEnter || t[6] !== onMouseLeave || t[7] !== onShiftTabToMenu || t[8] !== onTabToMenu || t[9] !== reactionOptions || t[10] !== rotateFocusArrowsRef || t[11] !== selectedIndex || t[12] !== D || t[13] !== x || t[14] !== $) {
            const Component = r("WAWebMessageHoverBar.react");
            P = <Component canAnimateExpand={C} canReact={b} collapseLabel="menu" disableAutoFocus={v} isExpanded={T} messageSenderDisplayName={messageSenderDisplayName} reactions={reactionOptions} reactionsChangeOnExpand={false} selectedIndex={selectedIndex} onReaction={D} onOpenEmojiPicker={x} onCollapseEmojiPicker={$} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onShiftTabToMenu={onShiftTabToMenu} onTabToMenu={onTabToMenu} rotateFocusArrowsRef={rotateFocusArrowsRef}/>;
            t[0] = C;
            t[1] = b;
            t[2] = v;
            t[3] = T;
            t[4] = messageSenderDisplayName;
            t[5] = onMouseEnter;
            t[6] = onMouseLeave;
            t[7] = onShiftTabToMenu;
            t[8] = onTabToMenu;
            t[9] = reactionOptions;
            t[10] = rotateFocusArrowsRef;
            t[11] = selectedIndex;
            t[12] = D;
            t[13] = x;
            t[14] = $;
            t[15] = P;
        } else {
            P = t[15];
        }
        return P;
    }
    l.default = m;
}, 98);