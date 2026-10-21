__d("WAWebPollsPollVoteModel", [
    "WAWebAddOnModel",
    "WAWebBaseModel",
    "WAWebFrontendPollVoteGetters",
    "WAWebPollVoteGetters"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.msgKey = o("WAWebBaseModel").prop();
            t.parentMsgKey = o("WAWebBaseModel").prop();
            t.selectedOptionLocalIds = o("WAWebBaseModel").prop();
            t.senderTimestampMs = o("WAWebBaseModel").prop();
            t.t = o("WAWebBaseModel").prop();
            t.sender = o("WAWebBaseModel").prop();
            t.read = o("WAWebBaseModel").prop();
            t.lastSuccessfulSelectedOptionLocalIds = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebPollVoteGetters").clearPollVoteGetterCacheFor(this);
            o("WAWebFrontendPollVoteGetters").clearFrontendPollVoteGetterCacheFor(this);
        };
        t_prototype.getData = function() {
            return {
                msgKey: this.msgKey,
                parentMsgKey: this.parentMsgKey,
                selectedOptionLocalIds: this.selectedOptionLocalIds,
                senderTimestampMs: this.senderTimestampMs,
                t: this.t,
                sender: this.sender,
                ack: this.ack,
                read: this.read,
                lastSuccessfulSelectedOptionLocalIds: this.lastSuccessfulSelectedOptionLocalIds
            };
        };
        return t;
    })(o("WAWebAddOnModel").AddOnBaseModel);
    e.Proxy = "poll_vote";
    const s = o("WAWebBaseModel").defineModel(e);
    l.PollVote = s;
}, 98);