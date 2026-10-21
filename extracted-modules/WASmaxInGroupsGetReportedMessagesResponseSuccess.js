__d("WASmaxInGroupsGetReportedMessagesResponseSuccess", [
    "WAResultOrError",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsIdentityMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "reporter");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrUserJid(e, "jid");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrIntRange(e, "timestamp", 0, undefined);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInGroupsIdentityMixin").parseIdentityMixin(e);
        return o("WAResultOrError").makeResult({
            jid: n.value,
            timestamp: r.value,
            identityMixin: a.success ? a.value : null
        });
    }
    function s(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "report");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrStanzaId(t, "message_id");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").mapChildrenWithTag(t, "reporter", 1, 19999, e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                messageId: r.value,
                reporter: a.value
            });
        }
        return a;
    }
    function u(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "reports");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInGroupsIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInGroupsGroupAddressingModeMixin").parseGroupAddressingModeMixin(e);
        const l = o("WASmaxParseUtils").mapChildrenWithTag(r.value, "report", 0, 10000, s);
        if (l.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                groupAddressingModeMixin: i.success ? i.value : null,
                reportsReport: l.value
            }));
        }
        return l;
    }
    l.parseGetReportedMessagesResponseSuccessReportsReportReporter = e;
    l.parseGetReportedMessagesResponseSuccessReportsReport = s;
    l.parseGetReportedMessagesResponseSuccess = u;
}, 98);