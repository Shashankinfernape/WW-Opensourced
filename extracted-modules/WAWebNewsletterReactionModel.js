__d("WAWebNewsletterReactionModel", [
    "WATimeUtils",
    "WAWebBaseModel",
    "WAWebModelUtils",
    "WAWebMsgKey",
    "WAWebReactionsBEUtils"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebModelUtils").prop();
            t.parentMsgServerId = o("WAWebModelUtils").prop();
            t.myReactionMsgKey = o("WAWebModelUtils").prop();
            t.reactionCountMap = o("WAWebModelUtils").prop();
            t.reactionCountMapTs = o("WAWebModelUtils").prop();
            t.myReaction = o("WAWebModelUtils").prop();
            t.myReactionTs = o("WAWebModelUtils").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            e.prototype.initialize.call(this);
            this.reactionCountMap = this.reactionCountMap ?? new Map;
        };
        t_prototype.updateMyReaction = function(t) {
            if (t === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
                return this.$NewsletterMessageReactionsImpl$p_1();
            }
            return this.$NewsletterMessageReactionsImpl$p_2(t);
        };
        t_prototype.$NewsletterMessageReactionsImpl$p_2 = function(t) {
            const myReaction = this.myReaction;
            this.reactionCountMap = this.reactionCountMap ?? new Map;
            const reactionCountMap = this.reactionCountMap;
            const o = reactionCountMap.get(t);
            reactionCountMap.set(t, (o ?? 0) + 1);
            const a = myReaction != null ? reactionCountMap.get(myReaction) : null;
            if (a != null && myReaction != null) {
                const i = a - 1;
                if (i > 0) {
                    reactionCountMap.set(myReaction, i);
                } else {
                    reactionCountMap.delete(myReaction);
                }
            }
            this.$NewsletterMessageReactionsImpl$p_3(t);
        };
        t_prototype.$NewsletterMessageReactionsImpl$p_1 = function() {
            const myReaction = this.myReaction;
            if (myReaction != null) {
                this.reactionCountMap = this.reactionCountMap ?? new Map;
                const n = this.reactionCountMap;
                const r = n.get(myReaction);
                if (r != null && r > 1) {
                    n.set(myReaction, r - 1);
                } else {
                    n.delete(myReaction);
                }
                this.$NewsletterMessageReactionsImpl$p_3(null);
            }
        };
        t_prototype.$NewsletterMessageReactionsImpl$p_3 = function(t) {
            this.myReactionTs = o("WATimeUtils").unixTime();
            this.myReaction = t;
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "newsletterReaction";
    e.idClass = r("WAWebMsgKey");
    const s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterMessageReactions = s;
}, 98);