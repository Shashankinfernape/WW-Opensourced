__d("WAWebReactionsBubbleContainer.react", [
    "WADeepEquals",
    "WAWebAddOnBubbleType",
    "WAWebDisplayType",
    "WAWebDropdown.react",
    "WAWebErrorBoundary.react",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataGetters",
    "WAWebMarkAddOnsAsReadAction",
    "WAWebMessageAddOnType",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterReactionsBubbleContainer.react",
    "WAWebPnhCagDailyUtils",
    "WAWebReactionDetailsPane.react",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBEUtils",
    "WAWebReactionsBubbleWrapper.react",
    "WAWebReactionsUtils",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebWamEnumReactionUserJourneyEntryPoint",
    "react",
    "react-compiler-runtime",
    "useWAWebReactions"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { memo, useState } = u;
    function m(e) {
        const t = e.filter(Boolean);
        if (t.length > 0 && t.every((e)=>e.id.remote.isNewsletter())) {
            return t;
        }
        return null;
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(6);
        const { msgIds, onDetailsPaneClosed, reactionBubbleType } = e;
        let l;
        if (t[0] !== msgIds || t[1] !== onDetailsPaneClosed || t[2] !== reactionBubbleType) {
            l = Symbol.for("react.early_return_sentinel");
            e: {
                const u = msgIds.map(_);
                const c = m(u);
                if (c != null) {
                    if (!o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionEnabled()) {
                        l = null;
                        break e;
                    }
                    const Component = r("WAWebNewsletterReactionsBubbleContainer.react");
                    l = <Component reactionBubbleVisible msgs={c} onDetailsPaneClosed={onDetailsPaneClosed} reactionBubbleType={reactionBubbleType}/>;
                    break e;
                }
                if (msgIds.length === 1) {
                    const d = u[0];
                    if (d != null && !o("WAWebReactionsBEUtils").canHaveReactions(d)) {
                        l = null;
                        break e;
                    }
                }
            }
            t[0] = msgIds;
            t[1] = onDetailsPaneClosed;
            t[2] = reactionBubbleType;
            t[3] = l;
        } else {
            l = t[3];
        }
        if (l !== Symbol.for("react.early_return_sentinel")) {
            return l;
        }
        let p;
        if (t[4] !== e) {
            p = <F19 {...babelHelpers.extends({}, e)}/>;
            t[4] = e;
            t[5] = p;
        } else {
            p = t[5];
        }
        return p;
    }
    function _(e) {
        return o("WAWebMsgCollection").MsgCollection.get(e);
    }
    function F19(e) {
        const t = o("react-compiler-runtime").c(33);
        const { displayType, hasReaction, isOutgoingMsg, msgIds, onDetailsPaneClosed, reactionBubbleType, reactionBubbleVisible } = e;
        const reactionBubbleVisible_1 = reactionBubbleVisible === undefined ? true : reactionBubbleVisible;
        const _ = useState();
        const detailsPane = _[0];
        const y = _[1];
        const C = useState();
        const b = C[0];
        const v = C[1];
        const S = o("WAWebMarkAddOnsAsReadAction").useMarkAddOnsAsRead();
        let R;
        if (t[0] !== S || t[1] !== msgIds || t[2] !== reactionBubbleType) {
            R = function(t) {
                const e = t.map(h).flat();
                S({
                    addOnType: o("WAWebMessageAddOnType").MessageAddOnType.Reaction,
                    addOns: e.map(g)
                });
                if (reactionBubbleType !== o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER) {
                    o("WAWebReactionsUtils").lastMessageReactionChange(msgIds);
                }
            };
            t[0] = S;
            t[1] = msgIds;
            t[2] = reactionBubbleType;
            t[3] = R;
        } else {
            R = t[3];
        }
        const E = r("useWAWebReactions")(msgIds, R, hasReaction);
        const { isFirstData, numberOfSenderReactions, reactionArrayEmojis, reactionsModels } = E;
        let x;
        if (t[4] !== onDetailsPaneClosed) {
            x = function() {
                onDetailsPaneClosed?.();
                y(null);
                o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.detailsDismiss();
            };
            t[4] = onDetailsPaneClosed;
            t[5] = x;
        } else {
            x = t[5];
        }
        const $ = x;
        let P;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            P = function() {
                v(null);
            };
            t[6] = P;
        } else {
            P = t[6];
        }
        const N = P;
        let M;
        if (t[7] !== $ || t[8] !== msgIds || t[9] !== reactionsModels) {
            M = function() {
                const Component = r("WAWebReactionDetailsPane.react");
                const Component_1 = o("WAWebErrorBoundary.react").ErrorBoundary;
                return <Component_1 name="DetailsPane"><Component onCloseDetailsPane={$} onOpenEmojiPicker={v} onCloseEmojiPicker={N} msgIds={msgIds} reactionsModels={reactionsModels} isAggregated={msgIds.length > 1}/></Component_1>;
            };
            t[7] = $;
            t[8] = msgIds;
            t[9] = reactionsModels;
            t[10] = M;
        } else {
            M = t[10];
        }
        const w = M;
        let A;
        if (t[11] !== displayType || t[12] !== w || t[13] !== isOutgoingMsg || t[14] !== msgIds[0]) {
            A = function(t) {
                t.preventDefault();
                t.stopPropagation();
                const e = w();
                const r = o("WAWebMsgCollection").MsgCollection.get(msgIds[0]);
                const a = r != null ? o("WAWebFrontendMsgGetters").getChat(r) : null;
                const s = a?.groupMetadata;
                if (s != null && o("WAWebGroupMetadataGetters").getIsCag(s)) {
                    const u = s.parentGroup;
                    if (u) {
                        o("WAWebPnhCagDailyUtils").incrementPnhDailyCount(u, o("WAWebPnhCagDailyUtils").PnhCagDailyMetricsType.REACTION_OPEN_TRAY_COUNT);
                    }
                }
                if (r != null && a != null) {
                    o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionDetails(a.id, r, o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.EXISTING_REACTION_CTA);
                }
                y({
                    menu: e,
                    dirY: o("WAWebDropdown.react").DirY.BOTTOM,
                    dirX: isOutgoingMsg && !o("WAWebDisplayType").isWideDisplay(displayType) ? o("WAWebDropdown.react").DirX.LEFT : o("WAWebDropdown.react").DirX.RIGHT,
                    type: o("WAWebDropdown.react").MenuType.ReactionDetailsPane,
                    anchor: t.target,
                    flipOnRtl: true
                });
            };
            t[11] = displayType;
            t[12] = w;
            t[13] = isOutgoingMsg;
            t[14] = msgIds[0];
            t[15] = A;
        } else {
            A = t[15];
        }
        const F = A;
        let O;
        if (t[16] !== F) {
            O = {
                enter: F,
                space: F
            };
            t[16] = F;
            t[17] = O;
        } else {
            O = t[17];
        }
        const B = O;
        const W = !!hasReaction;
        let q;
        if (t[18] !== $ || t[19] !== detailsPane || t[20] !== B || t[21] !== isFirstData || t[22] !== numberOfSenderReactions || t[23] !== F || t[24] !== reactionArrayEmojis || t[25] !== reactionBubbleVisible_1 || t[26] !== W) {
            q = s.jsx(r("WAWebReactionsBubbleWrapper.react"), {
                handlers: B,
                isFirstData,
                openDetailsPane: F,
                detailsPane,
                closeDetailsPane: $,
                hasReaction: W,
                numberOfSenderReactions,
                reactionBubbleVisible: reactionBubbleVisible_1,
                reactionArrayEmojis
            });
            t[18] = $;
            t[19] = detailsPane;
            t[20] = B;
            t[21] = isFirstData;
            t[22] = numberOfSenderReactions;
            t[23] = F;
            t[24] = reactionArrayEmojis;
            t[25] = reactionBubbleVisible_1;
            t[26] = W;
            t[27] = q;
        } else {
            q = t[27];
        }
        let U;
        if (t[28] !== b) {
            const Component = o("WAWebUimUie.react").UIE;
            U = b && <Component displayName="ReactionEmojiPicker" escapable popable dismissOnWindowResize requestDismiss={N}>{s.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: b
            })}</Component>;
            t[28] = b;
            t[29] = U;
        } else {
            U = t[29];
        }
        let V;
        if (t[30] !== U || t[31] !== q) {
            V = <>{q}{U}</>;
            t[30] = U;
            t[31] = q;
            t[32] = V;
        } else {
            V = t[32];
        }
        return V;
    }
    function g(e) {
        return {
            msgKey: r("WAWebMsgKey").from(e.msgKey),
            sender: e.senderUserJid
        };
    }
    function h(e) {
        return e.unreadSenders();
    }
    function y(e, t) {
        return o("WADeepEquals").deepEqual(e, t);
    }
    const C = memo(p, y);
    l.ReactionBubbleContainer = C;
}, 98);