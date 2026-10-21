__d("WASmaxInGroupsInviteLinkGroupInfoMixin", [
    "WAResultOrError",
    "WASmaxInGroupsGroupInfoAttributesMixin",
    "WASmaxInGroupsGroupInfoDescriptionMixin",
    "WASmaxInGroupsGroupInfoParticipantMixin",
    "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
    "WASmaxInGroupsNamedSubjectMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsGroupInfoParticipantMixin").parseGroupInfoParticipantMixin(e);
        n.success;
        return n;
    }
    function s(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "parent");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "num_sub_groups", 1, 1000);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                numSubGroups: n.value
            });
        }
        return n;
    }
    function u(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "linked_parent");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrGroupJid(e, "jid");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInGroupsNamedSubjectMixin").parseNamedSubjectMixin(e);
        if (r.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                jid: n.value
            }, r.value));
        }
        return r;
    }
    function c(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "membership_approval_mode");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin").parseMembershipApprovalGroupJoinModeEnabledMixin(e);
        n.success;
        return n;
    }
    function d(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "membership_approval_request");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, e, "error", "304");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                error: n.value
            });
        }
        return n;
    }
    function m(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "ephemeral");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "expiration", 0, 2147483647);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "trigger", 0, 20);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                expiration: n.value,
                trigger: r.value
            });
        }
        return r;
    }
    function p(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "group");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(t, "description");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optionalChildWithTag(t, "parent", s);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optionalChildWithTag(t, "linked_parent", u);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").optionalChild(t, "hidden_group");
        if (!l.success) {
            return l;
        }
        const p = o("WASmaxParseUtils").optionalChild(t, "default_sub_group");
        if (!p.success) {
            return p;
        }
        const _ = o("WASmaxParseUtils").optionalChild(t, "general_chat");
        if (!_.success) {
            return _;
        }
        const f = o("WASmaxParseUtils").optionalChildWithTag(t, "membership_approval_mode", c);
        if (!f.success) {
            return f;
        }
        const g = o("WASmaxParseUtils").optionalChildWithTag(t, "membership_approval_request", d);
        if (!g.success) {
            return g;
        }
        const h = o("WASmaxParseUtils").optionalChild(t, "capi");
        if (!h.success) {
            return h;
        }
        const y = o("WASmaxParseUtils").optionalChildWithTag(t, "ephemeral", m);
        if (!y.success) {
            return y;
        }
        const C = o("WASmaxParseUtils").optionalChild(t, "group_join_context");
        if (!C.success) {
            return C;
        }
        const b = o("WASmaxParseUtils").attrIntRange(t, "size", 0, 19999);
        if (!b.success) {
            return b;
        }
        const v = o("WASmaxInGroupsGroupInfoDescriptionMixin").parseGroupInfoDescriptionMixin(r.value);
        const S = o("WASmaxInGroupsGroupInfoAttributesMixin").parseGroupInfoAttributesMixin(t);
        if (!S.success) {
            return S;
        }
        const R = o("WASmaxParseUtils").mapChildrenWithTag(t, "participant", 0, 19999, e);
        if (R.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                size: b.value,
                descriptionGroupInfoDescriptionMixin: v.success ? v.value : null
            }, S.value, {
                parent: a.value,
                linkedParent: i.value,
                hasHiddenGroup: l.value != null,
                hasDefaultSubGroup: p.value != null,
                hasGeneralChat: _.value != null,
                membershipApprovalMode: f.value,
                membershipApprovalRequest: g.value,
                hasCapi: h.value != null,
                ephemeral: y.value,
                hasGroupJoinContext: C.value != null,
                participant: R.value
            }));
        }
        return R;
    }
    l.parseInviteLinkGroupInfoParticipant = e;
    l.parseInviteLinkGroupInfoParent = s;
    l.parseInviteLinkGroupInfoLinkedParent = u;
    l.parseInviteLinkGroupInfoMembershipApprovalMode = c;
    l.parseInviteLinkGroupInfoMembershipApprovalRequest = d;
    l.parseInviteLinkGroupInfoEphemeral = m;
    l.parseInviteLinkGroupInfoMixin = p;
}, 98);