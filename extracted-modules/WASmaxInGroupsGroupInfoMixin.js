__d("WASmaxInGroupsGroupInfoMixin", [
    "WAResultOrError",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupInfoAttributesMixin",
    "WASmaxInGroupsGroupInfoDescriptionMixin",
    "WASmaxInGroupsGroupInfoParticipantMixin",
    "WASmaxInGroupsGroupMemberAddModeMixin",
    "WASmaxInGroupsGroupMemberLinkModeMixin",
    "WASmaxInGroupsGroupMemberShareGroupHistoryModeMixin",
    "WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin",
    "WASmaxInGroupsParentGroupDefaultMembershipApprovalModeMixin",
    "WASmaxInGroupsParticipantNotAddressableMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "participant");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsGroupInfoParticipantMixin").parseGroupInfoParticipantMixin(e);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInGroupsParticipantNotAddressableMixin").parseParticipantNotAddressableMixin(e);
        return o("WAResultOrError").makeResult(babelHelpers.extends({}, n.value, {
            participantNotAddressableMixin: r.success ? r.value : null
        }));
    }
    function s(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "description");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsGroupInfoDescriptionMixin").parseGroupInfoDescriptionMixin(e);
        return o("WAResultOrError").makeResult({
            groupInfoDescriptionMixin: n.success ? n.value : null
        });
    }
    function u(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "parent");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsParentGroupDefaultMembershipApprovalModeMixin").parseParentGroupDefaultMembershipApprovalModeMixin(e);
        return o("WAResultOrError").makeResult({
            parentGroupDefaultMembershipApprovalModeMixin: n.success ? n.value : null
        });
    }
    function c(e) {
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
    function d(e) {
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
    function m(e) {
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
    function p(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "appeal_update_time");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "value", 0, void 0);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                value: n.value
            });
        }
        return n;
    }
    function _(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "growth_locked");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "invite");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrIntRange(e, "expiration", 0, void 0);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                type: n.value,
                expiration: r.value
            });
        }
        return r;
    }
    function f(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "membership_approval_mode");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxInGroupsMembershipApprovalGroupJoinModeEnabledMixin").parseMembershipApprovalGroupJoinModeEnabledMixin(e);
        return o("WAResultOrError").makeResult({
            membershipApprovalGroupJoinModeEnabledMixin: n.success ? n.value : null
        });
    }
    function g(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "linked_parent");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrGroupJid(e, "jid");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                jid: n.value
            });
        }
        return n;
    }
    function h(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "evolution_version");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "value", 0, 100);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                value: n.value
            });
        }
        return n;
    }
    function y(e) {
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
    function C(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "group");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optionalChildWithTag(t, "description", s);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optionalChild(t, "locked");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optionalChild(t, "announcement");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").optionalChildWithTag(t, "parent", u);
        if (!l.success) {
            return l;
        }
        const C = o("WASmaxParseUtils").optionalChild(t, "no_frequently_forwarded");
        if (!C.success) {
            return C;
        }
        const b = o("WASmaxParseUtils").optionalChild(t, "support");
        if (!b.success) {
            return b;
        }
        const v = o("WASmaxParseUtils").optionalChildWithTag(t, "ephemeral", c);
        if (!v.success) {
            return v;
        }
        const S = o("WASmaxParseUtils").optionalChildWithTag(t, "suspended", d);
        if (!S.success) {
            return S;
        }
        const R = o("WASmaxParseUtils").optionalChildWithTag(t, "appeal_status", m);
        if (!R.success) {
            return R;
        }
        const L = o("WASmaxParseUtils").optionalChildWithTag(t, "appeal_update_time", p);
        if (!L.success) {
            return L;
        }
        const E = o("WASmaxParseUtils").optionalChildWithTag(t, "growth_locked", _);
        if (!E.success) {
            return E;
        }
        const k = o("WASmaxParseUtils").optionalChild(t, "default_sub_group");
        if (!k.success) {
            return k;
        }
        const I = o("WASmaxParseUtils").optionalChildWithTag(t, "membership_approval_mode", f);
        if (!I.success) {
            return I;
        }
        const T = o("WASmaxParseUtils").optionalChild(t, "incognito");
        if (!T.success) {
            return T;
        }
        const D = o("WASmaxParseUtils").optionalChild(t, "allow_admin_reports");
        if (!D.success) {
            return D;
        }
        const x = o("WASmaxParseUtils").optionalChild(t, "allow_non_admin_sub_group_creation");
        if (!x.success) {
            return x;
        }
        const $ = o("WASmaxParseUtils").optionalChild(t, "general_chat");
        if (!$.success) {
            return $;
        }
        const P = o("WASmaxParseUtils").optionalChild(t, "auto_add_disabled");
        if (!P.success) {
            return P;
        }
        const N = o("WASmaxParseUtils").optionalChild(t, "group_history");
        if (!N.success) {
            return N;
        }
        const M = o("WASmaxParseUtils").optionalChildWithTag(t, "linked_parent", g);
        if (!M.success) {
            return M;
        }
        const w = o("WASmaxParseUtils").optionalChild(t, "hidden_group");
        if (!w.success) {
            return w;
        }
        const A = o("WASmaxParseUtils").optionalChild(t, "capi");
        if (!A.success) {
            return A;
        }
        const F = o("WASmaxParseUtils").optionalChildWithTag(t, "evolution_version", h);
        if (!F.success) {
            return F;
        }
        const O = o("WASmaxParseUtils").optionalChild(t, "group_safety_check");
        if (!O.success) {
            return O;
        }
        const B = o("WASmaxParseUtils").optionalChild(t, "participant_label_enabled");
        if (!B.success) {
            return B;
        }
        const W = o("WASmaxParseUtils").optionalChildWithTag(t, "limit_sharing_enabled", y);
        if (!W.success) {
            return W;
        }
        const q = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, t, "ack", "false");
        if (!q.success) {
            return q;
        }
        const U = o("WASmaxInGroupsGroupInfoAttributesMixin").parseGroupInfoAttributesMixin(t);
        if (!U.success) {
            return U;
        }
        const V = o("WASmaxInGroupsGroupMemberAddModeMixin").parseGroupMemberAddModeMixin(t);
        const H = o("WASmaxInGroupsGroupMemberLinkModeMixin").parseGroupMemberLinkModeMixin(t);
        const G = o("WASmaxInGroupsGroupMemberShareGroupHistoryModeMixin").parseGroupMemberShareGroupHistoryModeMixin(t);
        const z = o("WASmaxParseUtils").mapChildrenWithTag(t, "participant", 0, 19999, e);
        if (z.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                ack: q.value
            }, U.value, {
                groupMemberAddModeMixin: V.success ? V.value : null,
                groupMemberLinkModeMixin: H.success ? H.value : null,
                groupMemberShareGroupHistoryModeMixin: G.success ? G.value : null,
                description: r.value,
                hasLocked: a.value != null,
                hasAnnouncement: i.value != null,
                parent: l.value,
                hasNoFrequentlyForwarded: C.value != null,
                hasSupport: b.value != null,
                ephemeral: v.value,
                suspended: S.value,
                appealStatus: R.value,
                appealUpdateTime: L.value,
                growthLocked: E.value,
                hasDefaultSubGroup: k.value != null,
                membershipApprovalMode: I.value,
                hasIncognito: T.value != null,
                hasAllowAdminReports: D.value != null,
                hasAllowNonAdminSubGroupCreation: x.value != null,
                hasGeneralChat: $.value != null,
                hasAutoAddDisabled: P.value != null,
                hasGroupHistory: N.value != null,
                linkedParent: M.value,
                hasHiddenGroup: w.value != null,
                hasCapi: A.value != null,
                evolutionVersion: F.value,
                hasGroupSafetyCheck: O.value != null,
                hasParticipantLabelEnabled: B.value != null,
                limitSharingEnabled: W.value,
                participant: z.value
            }));
        }
        return z;
    }
    l.parseGroupInfoParticipant = e;
    l.parseGroupInfoDescription = s;
    l.parseGroupInfoParent = u;
    l.parseGroupInfoEphemeral = c;
    l.parseGroupInfoSuspended = d;
    l.parseGroupInfoAppealStatus = m;
    l.parseGroupInfoAppealUpdateTime = p;
    l.parseGroupInfoGrowthLocked = _;
    l.parseGroupInfoMembershipApprovalMode = f;
    l.parseGroupInfoLinkedParent = g;
    l.parseGroupInfoEvolutionVersion = h;
    l.parseGroupInfoLimitSharingEnabled = y;
    l.parseGroupInfoMixin = C;
}, 98);