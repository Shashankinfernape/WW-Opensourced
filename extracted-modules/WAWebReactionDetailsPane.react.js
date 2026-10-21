__d("WAWebReactionDetailsPane.react", [
    "WAArrayDifferenceWith",
    "WAWebAddReactionPill.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebKeyboardRotateFocusModal.react",
    "WAWebKeyboardTabUtils",
    "WAWebMsgCollection",
    "WAWebNoop",
    "WAWebReactionDetailsList.react",
    "WAWebReactionDetailsPaneTitle.react",
    "WAWebReactionPillsContainer.react",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBEUtils",
    "WAWebReactionsUtils",
    "WAWebSendReactionMsgAction",
    "WAWebUserPrefsMeUser",
    "react",
    "useLazyRef",
    "useWAWebFocusOnMount",
    "useWAWebReactionEmojiPicker",
    "useWAWebReactionPillOrder",
    "useWAWebReactions",
    "useWAWebSelectedReactions"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useRef, useState } = u;
    function m(msgIds) {
        if (msgIds == null || msgIds.length === 0) {
            return null;
        }
        const t = o("WAWebMsgCollection").MsgCollection.get(msgIds[0]);
        if (t == null || !o("WAWebReactionsUtils").canReactToMessage(t)) {
            return null;
        }
        return t;
    }
    const p = (t = [], n)=>{
        const e = (t ?? []).filter((e)=>n.some((t)=>e.isEqual(t)));
        const r = o("WAArrayDifferenceWith").differenceWith(n, t ?? [], function(e, t) {
            return e.isEqual(t);
        });
        return e.concat(...r);
    };
    function _(e, t) {
        const n = o("WAWebReactionsUtils").getReactionAggregates(e);
        const r = [];
        const a = [];
        const aggregates = [];
        n.forEach((e)=>{
            const e_reactionSenders = e.reactionSenders;
            if (!(e_reactionSenders.length <= 0)) {
                let hasMyReaction = false;
                e_reactionSenders.forEach((e)=>{
                    if (o("WAWebUserPrefsMeUser").isSerializedWidMe(e.senderUserJid)) {
                        a.push(e);
                        hasMyReaction = true;
                    } else {
                        r.push(e);
                    }
                });
                aggregates.push({
                    emoji: o("WAWebReactionsUtils").getReactionForDisplay(e),
                    count: e_reactionSenders.length,
                    hasMyReaction
                });
            }
        });
        const allSenders = p(t, r);
        allSenders.unshift(...a);
        return {
            allSenders,
            aggregates
        };
    }
    const f = {
        focusTrapContainer: {
            position: "x1n2onr6",
            $$css: true
        }
    };
    function g(e) {
        const a = r("useLazyRef")(function() {
            return new (r("WAWebFlatListController"));
        });
        const iRef = useRef(null);
        const lRef = useRef(null);
        const u = e.msgIds?.[0] ?? "";
        const p = r("useWAWebSelectedReactions")(u);
        const g = useState(function() {
            return _(e.reactionsModels).allSenders;
        });
        const senders = g[0];
        const y = g[1];
        const C = useState(function() {
            return _(e.reactionsModels).aggregates;
        });
        const b = C[0];
        const v = C[1];
        const S = r("useWAWebFocusOnMount")();
        const R = r("useWAWebReactionPillOrder")(b);
        const L = m(e.msgIds);
        const E = function(t) {
            const e = _(t, senders);
            const { aggregates, allSenders } = e;
            const o = R(aggregates);
            y(allSenders);
            v(o);
        };
        r("useWAWebReactions")(e.msgIds, E);
        const k = function(t, n) {
            if (L != null) {
                const e = n ? o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT : t;
                if (n) {
                    o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionUnselect();
                } else {
                    o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionSelect(t);
                }
                o("WAWebSendReactionMsgAction").sendReactionToMsg(L, e);
            }
        };
        const I = r("useWAWebReactionEmojiPicker")({
            msgId: u ?? "",
            onEmojiSelected: function(t) {
                if (L != null) {
                    const e = t === p ? o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT : t;
                    o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionSelect(t);
                    o("WAWebSendReactionMsgAction").sendReactionToMsg(L, e).catch((e)=>{});
                }
            },
            onCloseDetailsPane: e.onCloseDetailsPane,
            onOpenEmojiPicker: e.onOpenEmojiPicker,
            onCloseEmojiPicker: e.onCloseEmojiPicker
        });
        const T = function(t) {
            if (L != null) {
                I(t, lRef);
            }
        };
        const Component = r("WAWebAddReactionPill.react");
        const Component_1 = r("WAWebReactionPillsContainer.react");
        const Component_2 = r("WAWebReactionDetailsList.react");
        const Component_3 = o("WAWebFlex.react").FlexColumn;
        const Component_4 = r("WAWebKeyboardRotateFocusModal.react");
        return <Component_4 focusType={{
            type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        }} ref={S} xstyle={f.focusTrapContainer}>{s.jsx(r("WAWebReactionDetailsPaneTitle.react"), {
            count: senders.length
        })}<Component_1 addReactionPill={L ? <Component ref={lRef} onClick={T}/> : null} mode={L ? "interactive" : "read-only"} onPillClick={k} reactionAggregates={b}/><div className="x3x0x6p xjm9jq1"/><Component_3 ref={iRef}><Component_2 senders={senders} flatListController={a.current} onCloseDetailsPane={e.onCloseDetailsPane ? e.onCloseDetailsPane : r("WAWebNoop")} isAggregated={e.isAggregated}/></Component_3></Component_4>;
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    l.default = g;
}, 98);