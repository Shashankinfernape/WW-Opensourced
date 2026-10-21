__d("useWAWebNewsletterReactionTrayState", [
    "WAWebDefaultReactions",
    "WAWebFrontendMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebReactionsBEUtils",
    "WAWebReactionsUtils",
    "react",
    "useWAWebNewsletterReactions"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useMemo, useState } = s;
    function d(e, t) {
        const a = e.id.toString();
        const i = useMemo(function() {
            return [
                e.id
            ];
        }, [
            a
        ]);
        const l = r("useWAWebNewsletterReactions")(i);
        const s = l[0];
        const d = s?.myReaction ?? null;
        const m = o("WAWebReactionsUtils").getReactionsForTray(o("WAWebDefaultReactions").DEFAULT_REACTIONS, d);
        const p = d != null ? o("WAWebReactionsUtils").indexOrNull(m.indexOf(d)) : null;
        const _ = useState({
            type: "none"
        });
        const f = _[0];
        const g = _[1];
        const h = f.type === "override" && !o("WAWebReactionsUtils").isSameReactionAggregate(f.forReaction, d) ? f : null;
        const y = h != null ? h.forReaction : d;
        const selectedIndex = h != null ? h.index : p;
        const handleReaction = function(forReaction) {
            if (o("WAWebReactionsUtils").isSameReactionAggregate(forReaction, y)) {
                g({
                    type: "override",
                    index: null,
                    forReaction: null
                });
                t?.(o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT);
                return;
            }
            const e = m.indexOf(forReaction);
            g({
                type: "override",
                index: o("WAWebReactionsUtils").indexOrNull(e),
                forReaction
            });
            t?.(forReaction);
        };
        const v = o("WAWebFrontendMsgGetters").getChat(e);
        const showFullDefaultSet = v.newsletterMetadata != null && !o("WAWebNewsletterGatingUtils").shouldShowAllReactionsForNewsletter(v);
        return {
            handleReaction,
            reactionOptions: m,
            selectedIndex,
            showFullDefaultSet
        };
    }
    l.default = d;
}, 98);