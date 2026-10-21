__d("WAWebNewsletterReactionsBubbleContainer.react", [
    "WAWebAddOnBubbleType",
    "WAWebDropdown.react",
    "WAWebFrontendMsgGetters",
    "WAWebNewsletterReactionDetailsPane.react",
    "WAWebNewsletterReactionFrontendUtils",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBubbleWrapper.react",
    "WAWebReactionsUtils",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebWamEnumReactionUserJourneyEntryPoint",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebNewsletterReactions"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useState } = u;
    function m({ msgs, onDetailsPaneClosed, reactionBubbleType, reactionBubbleVisible }) {
        const l = msgs.map((e)=>e.id);
        const u = useState();
        const detailsPane = u[0];
        const p = u[1];
        const _ = useState();
        const f = _[0];
        const g = _[1];
        const reactionModels = r("useWAWebNewsletterReactions")(l);
        const y = l.join("-");
        useEffect(function() {
            if (reactionBubbleType !== o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER) {
                o("WAWebReactionsUtils").lastMessageReactionChange(msgs.map((e)=>e.id.toString()));
            }
        }, [
            y,
            reactionBubbleType
        ]);
        const C = r("useWAWebEventTargetValue")(reactionModels, [
            "change:myReaction",
            "change:reactionCountMapTs",
            "remove"
        ], function() {
            return o("WAWebNewsletterReactionFrontendUtils").aggregateAndSortReactions(reactionModels);
        });
        const { count, reactions } = C;
        const S = function() {
            p(null);
            o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.detailsDismiss();
        };
        const R = function() {
            g(null);
        };
        const L = function(n) {
            n.preventDefault();
            n.stopPropagation();
            const e = o("WAWebFrontendMsgGetters").getChat(msgs[0]);
            const Component = r("WAWebNewsletterReactionDetailsPane.react");
            const a = <Component multipleMsgs={msgs.length > 1} reactionModels={reactionModels} chat={e} firstMsg={msgs[0]} onCloseDetailsPane={S} onOpenEmojiPicker={g} onCloseEmojiPicker={R}/>;
            if (msgs[0] != null && e != null) {
                o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionDetails(e.id, msgs[0], o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.EXISTING_REACTION_CTA);
            }
            p({
                menu: a,
                dirY: o("WAWebDropdown.react").DirY.BOTTOM,
                dirX: o("WAWebDropdown.react").DirX.RIGHT,
                anchor: n.target,
                flipOnRtl: true,
                type: o("WAWebDropdown.react").MenuType.ReactionDetailsPane
            });
        };
        const handlers = {
            enter: L,
            space: L
        };
        const Component = o("WAWebUimUie.react").UIE;
        return <>{s.jsx(r("WAWebReactionsBubbleWrapper.react"), {
            closeDetailsPane: S,
            detailsPane,
            handlers,
            hasReaction: reactions.length > 0,
            isFirstData: true,
            numberOfSenderReactions: count,
            openDetailsPane: L,
            reactionArrayEmojis: reactions.map(([t])=>t).slice(0, o("WAWebReactionsUtils").getMaxReactionsInBubble()),
            reactionBubbleVisible: !!reactionBubbleVisible
        })}{f && <Component displayName="ReactionEmojiPicker" escapable popable dismissOnWindowResize requestDismiss={R}>{s.jsx(r("WAWebUimUieMenu.react"), {
            contextMenu: f
        })}</Component>}</>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = m;
}, 98);