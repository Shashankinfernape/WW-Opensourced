__d("WASmaxInGroupsAddParticipantsResponseSuccess", [
    "WAResultOrError",
    "WASmaxInGroupsAddParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxParseReference",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsAddParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup").parseAddParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup: n.value
            });
        }
        return n;
    }
    function s(t, n) {
        const r = o("WASmaxParseUtils").assertTag(t, "iq");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(t, "add");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseReference").attrStringFromReference(n, [
            "to"
        ]);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, t, "from", i.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, t, "type", "result");
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseReference").attrStringFromReference(n, [
            "id"
        ]);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, t, "id", u.value);
        if (!c.success) {
            return c;
        }
        const d = o("WASmaxInGroupsGroupAddressingModeMixin").parseGroupAddressingModeMixin(t);
        const m = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "participant", 1, 19999, e);
        if (m.success) {
            return o("WAResultOrError").makeResult({
                type: s.value,
                groupAddressingModeMixin: d.success ? d.value : null,
                addParticipant: m.value
            });
        }
        return m;
    }
    l.parseAddParticipantsResponseSuccessAddParticipant = e;
    l.parseAddParticipantsResponseSuccess = s;
}, 98);