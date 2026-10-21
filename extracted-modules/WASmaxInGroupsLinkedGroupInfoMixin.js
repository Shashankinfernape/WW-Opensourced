__d("WASmaxInGroupsLinkedGroupInfoMixin", [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsGroupInfoAttributesMixin",
    "WASmaxInGroupsGroupInfoDescriptionMixin",
    "WASmaxInGroupsGroupInfoParticipantMixin",
    "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
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
        const t = o("WASmaxParseUtils").assertTag(e, "membership_approval_mode");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin").parseMembershipApprovalGroupJoinModeEnabledMixin(e);
        n.success;
        return n;
    }
    function u(e) {
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
    function c(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "suspended");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, e, "can_auto_file", "true");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                canAutoFile: n.value
            });
        }
        return n;
    }
    function d(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "appeal_status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrStringEnum(e, "type", o("WASmaxInGroupsEnums").ENUM_APPROVED_INREVIEW_NONE_REJECTED);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                type: n.value
            });
        }
        return n;
    }
    function m(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "appeal_update_time");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "value", 0, undefined);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                value: n.value
            });
        }
        return n;
    }
    function p(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "limit_sharing_enabled");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "trigger", 0, 20);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                trigger: n.value
            });
        }
        return n;
    }
    function _(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "linked_group");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(t, "group");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "description");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optionalChildWithTag(r.value, "membership_approval_mode", s);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").optionalChildWithTag(r.value, "membership_approval_request", u);
        if (!l.success) {
            return l;
        }
        const _ = o("WASmaxParseUtils").optionalChild(r.value, "admin_request_required");
        if (!_.success) {
            return _;
        }
        const f = o("WASmaxParseUtils").optionalChild(r.value, "hidden_group");
        if (!f.success) {
            return f;
        }
        const g = o("WASmaxParseUtils").optionalChildWithTag(r.value, "suspended", c);
        if (!g.success) {
            return g;
        }
        const h = o("WASmaxParseUtils").optionalChildWithTag(r.value, "appeal_status", d);
        if (!h.success) {
            return h;
        }
        const y = o("WASmaxParseUtils").optionalChildWithTag(r.value, "appeal_update_time", m);
        if (!y.success) {
            return y;
        }
        const C = o("WASmaxParseUtils").optionalChild(r.value, "group_safety_check");
        if (!C.success) {
            return C;
        }
        const b = o("WASmaxParseUtils").optionalChild(r.value, "participant_label_enabled");
        if (!b.success) {
            return b;
        }
        const v = o("WASmaxParseUtils").optionalChildWithTag(r.value, "limit_sharing_enabled", p);
        if (!v.success) {
            return v;
        }
        const S = o("WASmaxParseJid").attrGroupJid(t, "jid");
        if (!S.success) {
            return S;
        }
        const R = o("WASmaxParseUtils").attrIntRange(r.value, "size", 1, 19999);
        if (!R.success) {
            return R;
        }
        const L = o("WASmaxInGroupsGroupInfoDescriptionMixin").parseGroupInfoDescriptionMixin(a.value);
        const E = o("WASmaxInGroupsGroupInfoAttributesMixin").parseGroupInfoAttributesMixin(r.value);
        if (!E.success) {
            return E;
        }
        const k = o("WASmaxInGroupsGroupAddressingModeMixin").parseGroupAddressingModeMixin(r.value);
        const I = o("WASmaxParseUtils").mapChildrenWithTag(r.value, "participant", 0, 19999, e);
        if (I.success) {
            return o("WAResultOrError").makeResult({
                jid: S.value,
                groupSize: R.value,
                groupDescriptionGroupInfoDescriptionMixin: L.success ? L.value : null,
                groupGroupInfoAttributesMixin: E.value,
                groupGroupAddressingModeMixin: k.success ? k.value : null,
                groupMembershipApprovalMode: i.value,
                groupMembershipApprovalRequest: l.value,
                hasGroupAdminRequestRequired: _.value != null,
                hasGroupHiddenGroup: f.value != null,
                groupSuspended: g.value,
                groupAppealStatus: h.value,
                groupAppealUpdateTime: y.value,
                hasGroupGroupSafetyCheck: C.value != null,
                hasGroupParticipantLabelEnabled: b.value != null,
                groupLimitSharingEnabled: v.value,
                groupParticipant: I.value
            });
        }
        return I;
    }
    l.parseLinkedGroupInfoGroupParticipant = e;
    l.parseLinkedGroupInfoGroupMembershipApprovalMode = s;
    l.parseLinkedGroupInfoGroupMembershipApprovalRequest = u;
    l.parseLinkedGroupInfoGroupSuspended = c;
    l.parseLinkedGroupInfoGroupAppealStatus = d;
    l.parseLinkedGroupInfoGroupAppealUpdateTime = m;
    l.parseLinkedGroupInfoGroupLimitSharingEnabled = p;
    l.parseLinkedGroupInfoMixin = _;
}, 98);