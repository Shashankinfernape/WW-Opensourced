__d("WAWebNewsletterReactionDetailsPane.react", [
    "fbt",
    "WALogger",
    "WAWebAddReactionPill.react",
    "WAWebConnectedPillButtons.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebKeyboardRotateFocusModal.react",
    "WAWebKeyboardTabUtils",
    "WAWebNewsletterContactsReactionList.react",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterReactionFrontendUtils",
    "WAWebNewsletterSendReactionAction",
    "WAWebReactionDetailsPaneTitle.react",
    "WAWebReactionPillsContainer.react",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBEUtils",
    "WAWebReactionsUtils",
    "WAWebSpinner.react",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "react",
    "sumBy",
    "useLazyRef",
    "useWAWebEventTargetValue",
    "useWAWebFocusOnMount",
    "useWAWebNewsletterReactionSenderList",
    "useWAWebReactionEmojiPicker",
    "useWAWebReactionPillOrder"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useRef, useState } = m;
    const f = {
        fullWidth: {
            width: "xh8yej3",
            $$css: true
        },
        focusTrapContainer: {
            position: "x1n2onr6",
            $$css: true
        },
        marginTop40: {
            marginTop: "x1q9ymp4",
            $$css: true
        },
        marginBottom4: {
            marginBottom: "x4tpdpg",
            $$css: true
        },
        marginTop28: {
            marginTop: "xevwqry",
            $$css: true
        }
    };
    function g({ chat, firstMsg, multipleMsgs, onCloseDetailsPane, onCloseEmojiPicker, onOpenEmojiPicker, reactionModels }) {
        const y = r("useLazyRef")(function() {
            return new (r("WAWebFlatListController"));
        });
        const C = useState("all");
        const currentlySelected = C[0];
        const v = C[1];
        const SRef = useRef(null);
        const R = o("WAWebReactionsUtils").canReactToMessage(firstMsg);
        const L = o("useWAWebNewsletterReactionSenderList").useNewsletterReactionSenderList(chat, firstMsg, multipleMsgs);
        const E = L[0];
        const reactionList = L[1];
        const I = L[2];
        const reactionSendersServerError = L[3];
        const isOffline = L[4];
        const setReactionSendersServerError = L[5];
        const retryFetchingReactionSenders = L[6];
        const P = h(reactionModels);
        const { aggregates, reactions } = P;
        const w = useState(reactions);
        const A = w[0];
        const F = w[1];
        const O = useState(aggregates);
        const B = O[0];
        const W = O[1];
        const q = r("useWAWebFocusOnMount")();
        const U = r("useWAWebReactionPillOrder")(B);
        const V = function() {
            const e = h(reactionModels);
            const { aggregates, reactions } = e;
            const r = U(aggregates);
            F(reactions);
            W(r);
        };
        r("useWAWebEventTargetValue")(reactionModels, [
            "change:myReaction",
            "change:reactionCountMapTs",
            "remove"
        ], V);
        const H = function(n, r) {
            if (r) {
                o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionUnselect();
            } else {
                o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionSelect(n);
            }
            const firstMsg_id = firstMsg.id;
            const i = r ? o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT : n;
            o("WAWebNewsletterSendReactionAction").sendNewsletterReaction(firstMsg_id, i).catch((t)=>o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to react"
                ]))));
        };
        const G = r("useWAWebReactionEmojiPicker")({
            msgId: firstMsg.id.toString(),
            onEmojiSelected: function(t) {
                o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionSelect(t);
                const firstMsg_id = firstMsg.id;
                o("WAWebNewsletterSendReactionAction").sendNewsletterReaction(firstMsg_id, t).catch((e)=>o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to react"
                    ]))));
            },
            onCloseDetailsPane,
            onOpenEmojiPicker,
            onCloseEmojiPicker
        });
        const Component = r("WAWebAddReactionPill.react");
        const Component_1 = r("WAWebReactionPillsContainer.react");
        const z = <><Component_1 addReactionPill={R && o("WAWebNewsletterGatingUtils").shouldShowAllReactionsForNewsletter(chat) ? <Component onClick={function(t) {
            return G(t, SRef);
        }} ref={SRef}/> : null} display="grid" mode={R ? "interactive" : "read-only"} onPillClick={H} reactionAggregates={B}/><div className="x3x0x6p xjm9jq1 xh8yej3"/></>;
        const Component_2 = o("WAWebFlex.react").FlexRow;
        const Component_3 = r("WAWebNewsletterContactsReactionList.react");
        const Component_4 = r("WAWebFlatListContainer.react");
        const j = currentlySelected === "contacts" ? <Component_4 className="xh8yej3 xuyqlj2 x1lumt5c xw2csxc x1odjw0f" flatListControllers={[
            y.current
        ]}>{I ? <Component_2 justify="center" xstyle={f.marginTop40}>{d.jsx(o("WAWebSpinner.react").Spinner, {
            color: "accent",
            size: 24
        })}</Component_2> : <Component_3 reactionList={reactionList} flatListController={y.current} reactionSendersServerError={reactionSendersServerError} setReactionSendersServerError={setReactionSendersServerError} retryFetchingReactionSenders={retryFetchingReactionSenders} isOffline={isOffline} onCloseDetailsPane={onCloseDetailsPane}/>}</Component_4> : null;
        const K = currentlySelected === "all" ? r("sumBy")(A, function(e) {
            return e.count;
        }) : reactionList.length;
        const Q = currentlySelected === "all" ? d.jsx(r("WAWebReactionDetailsPaneTitle.react"), {
            count: K
        }) : currentlySelected === "contacts" ? !isOffline && !reactionSendersServerError && !I ? d.jsx(r("WAWebReactionDetailsPaneTitle.react"), {
            count: K
        }) : null : (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${currentlySelected}`);
        })();
        const pills = [
            {
                id: "all",
                title: s._("All")
            },
            {
                id: "contacts",
                title: s._("Contacts")
            }
        ];
        const Component_5 = r("WAWebConnectedPillButtons.react");
        const Component_6 = o("WAWebFlex.react").FlexRow;
        const Component_7 = o("WAWebFlex.react").FlexColumn;
        const Component_8 = r("WAWebKeyboardRotateFocusModal.react");
        return <Component_8 focusType={{
            type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        }} ref={q} xstyle={f.focusTrapContainer}><Component_7 testid="newsletter-reaction-details-pane">{o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionSenderListEnabled(chat, multipleMsgs) && <Component_6 xstyle={[
            f.marginBottom4,
            f.marginTop28,
            f.fullWidth
        ]} justify="center"><Component_5 pills={pills} onChange={function(t) {
            if (t === "all" || t === "contacts") {
                v(t);
            }
        }} currentlySelected={currentlySelected}/></Component_6>}{Q}{z}{j}</Component_7></Component_8>;
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    function h(reactionModels) {
        const reactions = o("WAWebNewsletterReactionFrontendUtils").aggregateAndSortReactions(reactionModels).reactions;
        const n = reactions.map(([t, n])=>({
                emoji: t.reactionAggregate,
                count: n,
                myReactions: t.reactionSenders.filter((e)=>o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").createWid(e.senderUserJid)))
            }));
        const aggregates = n.map(({ count, emoji, myReactions })=>({
                emoji,
                count,
                hasMyReaction: myReactions.length > 0
            }));
        return {
            reactions: n,
            aggregates
        };
    }
    l.default = g;
}, 226);