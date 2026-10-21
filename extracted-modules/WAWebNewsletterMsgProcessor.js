__d("WAWebNewsletterMsgProcessor", [
    "WATimeUtils",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMsgUtils",
    "WAWebPollsCreateOptionLocalIdMap",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.offline != null;
            const n = e.type === "NewsletterRevoke";
            const r = e.serverId;
            const a = u(e.type);
            const i = a && r != null ? yield o("WAWebNewsletterDBUtils").getMessageByServerId(r, e.from.toJid()) : null;
            const l = a && i == null;
            const s = yield d(i, e.pollVote);
            const m = {
                isNewMsg: !t && !n,
                addOnParentKey: a ? c({
                    addOnParentMsg: i,
                    serverId: r,
                    remote: e.from
                }) : void 0,
                pollVotesAsLocalIds: s,
                latestEditSenderTimestampMs: e.msgEditT != null ? o("WATimeUtils").castToMillisTime(e.msgEditT) : null
            };
            if (e.isWamoSub != null && o("WAWebNewsletterGatingUtils").isWamoSubMessagesProcessingEnabled()) {
                m.isWamoSub = e.isWamoSub;
            }
            if (e.hasPaidPartnershipLabel != null && o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled()) {
                m.hasPaidPartnershipLabel = e.hasPaidPartnershipLabel;
            }
            if (e.hasSelfDisclosedAiContent != null && o("WAWebNewsletterGatingUtils").isChannelSGIReceiverEnabled()) {
                m.hasSelfDisclosedAiContent = e.hasSelfDisclosedAiContent;
            }
            const p = o("WAWebNewsletterMsgUtils").mapMsgStanzaToMsgData({
                msg: e,
                msgContext: m
            }, "relay");
            const _ = yield o("WAWebApiFilterAndReplaceMessages").filterAndReplaceMessages([
                p
            ]);
            const f = _.newMsgs;
            const g = f[0];
            return {
                msgData: g,
                isOrphan: l
            };
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        switch(e){
            case "NewsletterReaction":
            case "NewsletterReactionRevoke":
            case "NewsletterPollVote":
                return true;
            default:
                return false;
        }
    }
    function c({ addOnParentMsg: t, remote: n, serverId: r }) {
        if (t != null) {
            return t.id;
        }
        return o("WAWebNewsletterDBUtils").craftNewsletterMsgKeyFromServerId(r, n.toJid());
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e?.pollOptions;
            if (!(n == null || t == null)) {
                const r = yield o("WAWebPollsCreateOptionLocalIdMap").createOptionLocalIdMap(n);
                return t.map((e)=>r.getLocalIdForHash(e.slice().buffer));
            }
        });
        return m.apply(this, arguments);
    }
    l.preprocessNewsletterMsg = e;
    l.isAddOnType = u;
}, 98);