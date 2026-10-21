__d("WASmaxInMessageDeliverNewsletterMessageFanoutContent", [
    "WAResultOrError",
    "WASmaxInMessageDeliverNewsletterEditMixin",
    "WASmaxInMessageDeliverNewsletterMediaMixin",
    "WASmaxInMessageDeliverNewsletterPollCreationMixin",
    "WASmaxInMessageDeliverNewsletterPollResultSnapshotMixin",
    "WASmaxInMessageDeliverNewsletterPollVoteMixin",
    "WASmaxInMessageDeliverNewsletterQuestionMixin",
    "WASmaxInMessageDeliverNewsletterQuestionReplyMixin",
    "WASmaxInMessageDeliverNewsletterQuestionResponseMixin",
    "WASmaxInMessageDeliverNewsletterQuizCreationMixin",
    "WASmaxInMessageDeliverNewsletterReactionMixin",
    "WASmaxInMessageDeliverNewsletterReactionRevokeMixin",
    "WASmaxInMessageDeliverNewsletterRevokeMixin",
    "WASmaxInMessageDeliverNewsletterTextMixin",
    "WASmaxInMessageDeliverNewsletterWAMOEmptyMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInMessageDeliverNewsletterQuestionMixin").parseNewsletterQuestionMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterQuestion",
                value: t.value
            });
        }
        const n = o("WASmaxInMessageDeliverNewsletterQuestionResponseMixin").parseNewsletterQuestionResponseMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterQuestionResponse",
                value: n.value
            });
        }
        const r = o("WASmaxInMessageDeliverNewsletterEditMixin").parseNewsletterEditMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterEdit",
                value: r.value
            });
        }
        const a = o("WASmaxInMessageDeliverNewsletterQuestionReplyMixin").parseNewsletterQuestionReplyMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterQuestionReply",
                value: a.value
            });
        }
        const i = o("WASmaxInMessageDeliverNewsletterRevokeMixin").parseNewsletterRevokeMixin(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterRevoke",
                value: i.value
            });
        }
        const l = o("WASmaxInMessageDeliverNewsletterTextMixin").parseNewsletterTextMixin(e);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterText",
                value: l.value
            });
        }
        const s = o("WASmaxInMessageDeliverNewsletterMediaMixin").parseNewsletterMediaMixin(e);
        if (s.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterMedia",
                value: s.value
            });
        }
        const u = o("WASmaxInMessageDeliverNewsletterReactionMixin").parseNewsletterReactionMixin(e);
        if (u.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterReaction",
                value: u.value
            });
        }
        const c = o("WASmaxInMessageDeliverNewsletterReactionRevokeMixin").parseNewsletterReactionRevokeMixin(e);
        if (c.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterReactionRevoke",
                value: c.value
            });
        }
        const d = o("WASmaxInMessageDeliverNewsletterPollCreationMixin").parseNewsletterPollCreationMixin(e);
        if (d.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterPollCreation",
                value: d.value
            });
        }
        const m = o("WASmaxInMessageDeliverNewsletterQuizCreationMixin").parseNewsletterQuizCreationMixin(e);
        if (m.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterQuizCreation",
                value: m.value
            });
        }
        const p = o("WASmaxInMessageDeliverNewsletterPollVoteMixin").parseNewsletterPollVoteMixin(e);
        if (p.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterPollVote",
                value: p.value
            });
        }
        const _ = o("WASmaxInMessageDeliverNewsletterPollResultSnapshotMixin").parseNewsletterPollResultSnapshotMixin(e);
        if (_.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterPollResultSnapshot",
                value: _.value
            });
        }
        const f = o("WASmaxInMessageDeliverNewsletterWAMOEmptyMixin").parseNewsletterWAMOEmptyMixin(e);
        if (f.success) {
            return o("WAResultOrError").makeResult({
                name: "NewsletterWAMOEmpty",
                value: f.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "NewsletterQuestion",
            "NewsletterQuestionResponse",
            "NewsletterEdit",
            "NewsletterQuestionReply",
            "NewsletterRevoke",
            "NewsletterText",
            "NewsletterMedia",
            "NewsletterReaction",
            "NewsletterReactionRevoke",
            "NewsletterPollCreation",
            "NewsletterQuizCreation",
            "NewsletterPollVote",
            "NewsletterPollResultSnapshot",
            "NewsletterWAMOEmpty"
        ], [
            t,
            n,
            r,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m,
            p,
            _,
            f
        ]);
    }
    l.parseNewsletterMessageFanoutContent = e;
}, 98);