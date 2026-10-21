__d("WASmaxInGroupsGroupInfoAttributesMixin", [
    "WAResultOrError",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsGroupCreatorIdentityMixin",
    "WASmaxInGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup",
    "WASmaxInGroupsSubjectOwnerIdentityMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "group");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optionalChild(e, "missing_participant_identification");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "id");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrUserJid, e, "creator");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").attrIntRange(e, "creation", 0, void 0);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "p_v_id");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "a_v_id");
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "s_t", 0, void 0);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrUserJid, e, "s_o");
        if (!c.success) {
            return c;
        }
        const d = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "open_thread_id");
        if (!d.success) {
            return d;
        }
        const m = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "size", 0, 19999);
        if (!m.success) {
            return m;
        }
        const p = o("WASmaxInGroupsGroupAddressingModeMixin").parseGroupAddressingModeMixin(e);
        const _ = o("WASmaxInGroupsSubjectOwnerIdentityMixin").parseSubjectOwnerIdentityMixin(e);
        const f = o("WASmaxInGroupsGroupCreatorIdentityMixin").parseGroupCreatorIdentityMixin(e);
        const g = o("WASmaxInGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup").parseNamedSubjectOrUnnamedSubjectFallbackMixinGroup(e);
        if (g.success) {
            return o("WAResultOrError").makeResult({
                id: r.value,
                creator: a.value,
                creation: i.value,
                pVId: l.value,
                aVId: s.value,
                sT: u.value,
                sO: c.value,
                openThreadId: d.value,
                size: m.value,
                groupAddressingModeMixin: p.success ? p.value : null,
                subjectOwnerIdentityMixin: _.success ? _.value : null,
                groupCreatorIdentityMixin: f.success ? f.value : null,
                namedSubjectOrUnnamedSubjectFallbackMixinGroup: g.value,
                hasMissingParticipantIdentification: n.value != null
            });
        }
        return g;
    }
    l.parseGroupInfoAttributesMixin = e;
}, 98);