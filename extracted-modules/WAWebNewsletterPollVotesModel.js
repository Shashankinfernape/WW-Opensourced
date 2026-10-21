__d("WAWebNewsletterPollVotesModel", [
    "WATimeUtils",
    "WAWebAddOnModel",
    "WAWebBaseModel",
    "WAWebFrontendNewsletterPollVotesGetters",
    "WAWebModelUtils",
    "WAWebMsgKey",
    "WAWebNewsletterPollVotesGetters"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebModelUtils").prop();
            t.pollVotesCountMap = o("WAWebModelUtils").prop(function() {
                return new Map;
            });
            t.pollVotesCountMapTs = o("WAWebModelUtils").prop();
            t.myVote = o("WAWebModelUtils").prop(function() {
                return new Set;
            });
            t.myVoteTs = o("WAWebModelUtils").prop();
            t.isUnvote = o("WAWebModelUtils").prop(false);
            t.msgKey = o("WAWebModelUtils").prop();
            t.pollVotersMap = o("WAWebModelUtils").prop(function() {
                return new Map;
            });
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebNewsletterPollVotesGetters").clearNewsletterPollVotesGetterCacheFor(this);
            o("WAWebFrontendNewsletterPollVotesGetters").clearFrontendNewsletterPollVotesGetterCacheFor(this);
        };
        t_prototype.updateMyVote = function(t, n, r) {
            if (!(n < (this.myVoteTs ?? 0))) {
                const l = this.myVote ?? new Set;
                const s = this.pollVotesCountMap ?? new Map;
                l.forEach((e)=>{
                    const n = s.get(e) ?? 0;
                    s.set(e, Math.max(n - 1, 0));
                });
                t.forEach((e)=>{
                    const n = s.get(e) ?? 0;
                    s.set(e, n + 1);
                });
                this.msgKey = r;
                this.pollVotesCountMap = s;
                this.myVote = t;
                this.myVoteTs = o("WATimeUtils").castToMillisTime(n);
            }
        };
        t_prototype.updatePollVotersMap = function(t, n) {
            if (n == null) {
                this.pollVotersMap = t;
                return;
            }
            const e = t.get(n);
            if (e != null) {
                const r = new Map(this.pollVotersMap);
                r.set(n, e);
                this.pollVotersMap = r;
            }
        };
        return t;
    })(o("WAWebAddOnModel").AddOnBaseModel);
    e.Proxy = "newsletterPollVote";
    e.idClass = r("WAWebMsgKey");
    const s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterPollVotes = s;
}, 98);