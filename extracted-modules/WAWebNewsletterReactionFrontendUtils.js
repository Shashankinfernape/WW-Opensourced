__d("WAWebNewsletterReactionFrontendUtils", [
    "WAWebContactCollection",
    "WAWebEmoji",
    "WAWebFrontendContactGetters",
    "WAWebProfilePicThumbCollection",
    "WAWebReactionsModels",
    "WAWebUserPrefsMeUser",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e.length === 0) {
            return {
                reactions: [],
                count: 0
            };
        }
        const t = e.map(c);
        return s(t);
    }
    function s(e) {
        let t = 0;
        const n = new Map;
        for (const r of e){
            const { count, reactions } = r;
            t += count;
            for (const [l, s] of reactions.entries()){
                const reaction = s[0];
                const c = s[1];
                const d = n.get(l);
                if (d != null) {
                    d.count += c;
                    d.reaction = babelHelpers.extends({}, d.reaction, {
                        reactionSenders: d.reaction.reactionSenders.concat(reaction.reactionSenders)
                    });
                    n.set(l, d);
                } else {
                    n.set(l, {
                        reaction,
                        count: c
                    });
                }
            }
        }
        const reactions = Array.from(n.values()).sort(({ count, reaction }, { count: count_1, reaction: reaction_1 })=>{
            if (reaction.reactionByMe != null) {
                return -1;
            }
            if (reaction_1.reactionByMe != null) {
                return 1;
            }
            return count_1 - count;
        }).map(({ count, reaction })=>[
                reaction,
                count
            ]);
        return {
            count: t,
            reactions
        };
    }
    function u(e) {
        const t = new Map;
        for (const [a, i] of e.entries()){
            const l = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(a);
            const s = o("WAWebEmoji").EmojiUtil.getNormalizedOrTofu(a);
            const u = t.get(l) ?? {
                count: 0,
                reactions: new Map
            };
            u.reactions.set(s, i);
            u.count += i;
            t.set(l, u);
        }
        return t;
    }
    function c(e) {
        const t = new Map;
        const { myReaction, myReactionMsgKey } = e;
        const a = new Map(e.reactionCountMap);
        if (myReaction != null && myReaction !== "" && !a.has(myReaction)) {
            a.set(myReaction, 1);
        }
        let i = 0;
        const l = u(a);
        for (const [d, m] of l.entries()){
            i += m.count;
            t.set(d, [
                {
                    reactionAggregate: d,
                    reactionSenders: _(d, e),
                    reactionByMe: myReaction != null && myReactionMsgKey != null && d === o("WAWebEmoji").EmojiUtil.getEmojiAggregate(myReaction) ? {
                        msgKey: myReactionMsgKey.toString(),
                        orphan: 0,
                        parentMsgKey: e.id.toString(),
                        reactionText: o("WAWebEmoji").EmojiUtil.getNormalizedOrTofu(myReaction),
                        senderUserJid: o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid(),
                        timestamp: e.myReactionTs ?? 0
                    } : null
                },
                m.count
            ]);
        }
        return {
            reactions: t,
            count: i
        };
    }
    function d(e) {
        const t = new Map;
        e.reactions.map(({ reactionCode, senderList })=>{
            const i = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(reactionCode);
            const l = t.get(i) ?? [];
            t.set(i, l.concat(senderList));
        });
        return t;
    }
    function m(e) {
        const t = d(e);
        const n = new Map;
        for (const [i, l] of t.entries()){
            const s = l.sort((e, t)=>{
                const n = e?.id != null ? o("WAWebContactCollection").ContactCollection.get(e.id) : null;
                const r = t?.id != null ? o("WAWebContactCollection").ContactCollection.get(t.id) : null;
                const a = n?.type === "in";
                const i = r?.type === "in";
                if (a && n && r && i) {
                    const l = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(n.id) != null;
                    const s = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(r.id) != null;
                    if (l === s) {
                        return 0;
                    }
                    if (l) {
                        return -1;
                    }
                    return 1;
                } else if (!a && !i) {
                    return 0;
                }
                if (a) {
                    return -1;
                }
                return 1;
            }).slice(0, 5);
            const u = r("compactMap")(s, function(e) {
                if (e?.id != null) {
                    return e.id;
                }
                return e?.profileUrl;
            });
            n.set(i, u);
        }
        return n;
    }
    function p(e) {
        const t = [];
        e.reactions.map(({ reactionCode, senderList })=>{
            senderList.map((e)=>{
                if (e?.id != null) {
                    const r = o("WAWebContactCollection").ContactCollection.get(e.id);
                    if (r?.type === "in") {
                        t.push({
                            reaction: reactionCode,
                            contact: r
                        });
                    }
                }
            });
        });
        return t.sort((e, t)=>{
            const n = o("WAWebFrontendContactGetters").getFormattedUser(e.contact);
            const r = o("WAWebFrontendContactGetters").getFormattedUser(t.contact);
            return n.localeCompare(r);
        });
    }
    function _(e, t) {
        const t_myReaction = t.myReaction;
        const r = t_myReaction != null && e === o("WAWebEmoji").EmojiUtil.getEmojiAggregate(t_myReaction);
        return [
            new (o("WAWebReactionsModels")).ReactionsSenders({
                id: t.id,
                reactionText: r ? t_myReaction : e,
                senderUserJid: r ? o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid() : t.id.remote.toJid(),
                timestamp: t.reactionCountMapTs
            })
        ];
    }
    l.aggregateAndSortReactions = e;
    l.getReactionSendersForFacePile = m;
    l.getContactReactionSenders = p;
}, 98);