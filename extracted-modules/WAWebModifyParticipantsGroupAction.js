__d("WAWebModifyParticipantsGroupAction", [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebActionToast.react",
    "WAWebFbtIntlList",
    "WAWebFrontendContactGetters",
    "WAWebGroupAddResultDialogs.react",
    "WAWebGroupAgentConflictAddResult",
    "WAWebGroupAgentRemoveNotFoundJob",
    "WAWebGroupIncompatibleDeviceAddResult",
    "WAWebGroupModifyParticipantsJob",
    "WAWebGroupMutationParticipantUtils",
    "WAWebGroupStringsAction",
    "WAWebJidToWid",
    "WAWebMembershipApprovalRequestAction",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebModifyParticipantsRateLimitText",
    "WAWebNetworkStatus",
    "WAWebNoop",
    "WAWebOutContactInviteAction",
    "WAWebOutContactInviteUtils",
    "WAWebOutContactSmsInviteConfirmModal.react",
    "WAWebStateUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumCompanionInviteOriginType",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "countWhere",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    const C = y || (y = o("react"));
    function b(e, t, n = [], addMembersEntrypoint) {
        return I({
            addMembersEntrypoint,
            chat: o("WAWebStateUtils").unproxy(e),
            contacts: t,
            outContacts: n
        });
    }
    function v(e, t) {
        return P(o("WAWebStateUtils").unproxy(e), t);
    }
    function S(e, t) {
        return w(o("WAWebStateUtils").unproxy(e), t);
    }
    function R(e, t) {
        return F(o("WAWebStateUtils").unproxy(e), t);
    }
    function L(e, t) {
        return B(o("WAWebStateUtils").unproxy(e), t);
    }
    function E(e, t) {
        return W(o("WAWebStateUtils").unproxy(e), t);
    }
    const k = [];
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ addMembersEntrypoint, chat, contacts, outContacts = k, toastId = o("WAWebActionToast.react").genId() }) {
            const g = chat.groupMetadata?.participants;
            if (g == null) {
                return (h || (h = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
            }
            if (contacts.some((e)=>g.get(e.id))) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] addParticipants: already member"
                ])));
                return (h || (h = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
            }
            if (!g.canAdd()) {
                return (h || (h = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
            }
            const y = chat.groupMetadata?.isLidAddressingMode === true;
            const b = outContacts.map((e)=>o("WAWebJidToWid").userJidToUserWid(e.id));
            const v = o("WAWebGroupModifyParticipantsJob").addGroupParticipants(chat.id, contacts.map((e)=>o("WAWebGroupMutationParticipantUtils").getGroupAddParticipant(e, y, "addParticipants")), b);
            const S = r("WAWebFbtIntlList")(contacts.map((e)=>o("WAWebFrontendContactGetters").getFormattedShortName(e)), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
            const R = r("WAWebFbtIntlList")(outContacts.map((e)=>e.getName()), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
            const L = contacts.length === 0 && outContacts.length > 0;
            const E = L ? R : S;
            const T = L ? outContacts.length : contacts.length;
            const P = new (o("WAWebActionToast.react")).ActionType(o("WAWebGroupStringsAction").addingString(E, T));
            const N = v.then((e)=>{
                const n = $(e, addMembersEntrypoint);
                const { agentConflictWids, hasIncompatibleDeviceRejection, reportedResponse } = n;
                D(chat, e);
                const m = e.invitedOutContacts ?? [];
                const _ = e.participants.some((e)=>e.code === "403");
                const f = new Set(m.filter((e)=>e.code !== "200").map((e)=>e.phoneNumberWid.toString()));
                const h = outContacts.filter((e)=>f.has(o("WAWebJidToWid").userJidToUserWid(e.id).toString()));
                const y = r("countWhere")(m, function(e) {
                    return e.code !== "200";
                });
                const b = outContacts.length > 0 ? function() {
                    if (h.length > 0) {
                        const Component = r("WAWebOutContactSmsInviteConfirmModal.react");
                        o("WAWebModalManager").ModalManager.open(<Component names={h.map((e)=>e.getName())} onConfirm={function() {
                            o("WAWebOutContactInviteAction").sendMultiGroupInvite(h.map((e)=>e.phoneNumber), o("WAWebWidToJid").widToGroupJid(chat.id), o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.GROUPS_ADD_PARTICIPANT_SELECTOR);
                            o("WAWebModalManager").closeModalManager();
                        }} onCancel={o("WAWebModalManager").closeModalManager}/>);
                        return;
                    }
                    if (!L) {
                        x(y);
                    }
                    o("WAWebModalManager").closeModalManager();
                } : r("WAWebNoop");
                o("WAWebGroupAddResultDialogs.react").runAfterAddResultDialogs({
                    agentConflictWids,
                    hasIncompatibleDeviceRejection
                }, function() {
                    if (_) {
                        g.sendForNeededAddRequest(e.participants, b);
                    } else if (b != null) {
                        b();
                    }
                });
                const v = e.participants.filter((e)=>e.code === "417");
                if (v.length > 0) {
                    const S = s._("_j{\"*\":\"{participant_count} participants can't be added to the community. You can invite them privately to join this group through its invite link.\",\"_1\":\"1 participant can't be added to the community. You can invite them privately to join this group through its invite link.\"}", [
                        s._plural(v.length, "participant_count")
                    ]);
                    const R = e.participants.some((e)=>e.code === "200");
                    if (!R) {
                        throw new (o("WAWebActionToast.react")).ActionType(S);
                    }
                    return new (o("WAWebActionToast.react")).ActionType(S);
                }
                if (L) {
                    if (h.length > 0) {
                        const E = r("WAWebFbtIntlList")(h.map((e)=>e.getName()), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
                        return new (o("WAWebActionToast.react")).ActionType(o("WAWebGroupStringsAction").addSuccessString(E, h.length));
                    }
                    throw new (o("WAWebActionToast.react")).ActionType(o("WAWebOutContactInviteUtils").getGroupInviteAddFailedToastText(y));
                }
                if ((hasIncompatibleDeviceRejection || agentConflictWids.length > 0) && reportedResponse.participants.length === 0) {
                    return null;
                }
                const k = o("WAWebGroupStringsAction").formatResult(reportedResponse, o("WAWebGroupStringsAction").addSuccessString, function(memberNames, plural, _status) {
                    return o("WAWebGroupStringsAction").addFailedString({
                        _status,
                        memberNames,
                        plural
                    });
                }, o("WAWebGroupStringsAction").addPartialFailedString, contacts);
                const I = reportedResponse.participants.some((e)=>e.code === "200");
                if (!I) {
                    throw new (o("WAWebActionToast.react")).ActionType(k);
                }
                return new (o("WAWebActionToast.react")).ActionType(k);
            }).catch((e)=>{
                if (e instanceof o("WAWebActionToast.react").ActionType) {
                    throw e;
                }
                if (outContacts.length > 0) {
                    o("WAWebModalManager").closeModalManager();
                }
                const t = new (o("WAWebActionToast.react")).ActionType(L ? o("WAWebOutContactInviteUtils").getGroupInviteAddFailedToastText(outContacts.length) : s._("_j{\"*\":\"Couldn't add {participantNames}.\"}", [
                    s._plural(contacts.length),
                    s._param("participantNames", S)
                ]), {
                    actionText: s._("Try again."),
                    actionHandler: function() {
                        return I({
                            addMembersEntrypoint,
                            chat,
                            contacts,
                            outContacts,
                            toastId
                        });
                    }
                });
                switch(e.status){
                    case 419:
                        throw new (o("WAWebActionToast.react")).ActionType(s._("This participant can't be added because the community is full."));
                    case 429:
                        {
                            if (o("WAWebABProps").getABPropConfigValue("enable_group_create_or_add_rate_limiting_error_ux")) {
                                switch(e.name){
                                    case "GroupAddParticipantTimeRateLimitServerError":
                                        throw new (o("WAWebActionToast.react")).ActionType(o("WAWebModifyParticipantsRateLimitText").WAWebModifyParticipantsTimeRateLimitText(e));
                                    case "GroupAddParticipantCountRateLimitServerError":
                                        throw new (o("WAWebActionToast.react")).ActionType(o("WAWebModifyParticipantsRateLimitText").WAWebModifyParticipantsCountRateLimitText(e));
                                }
                            }
                            throw t;
                        }
                    default:
                        o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[groupMeta] addParticipants dropped"
                        ])));
                        throw t;
                }
            });
            o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebActionToast.react").ActionToast, {
                id: toastId,
                initialAction: P,
                pendingAction: N
            }));
            return v;
        });
        return T.apply(this, arguments);
    }
    function D(chat, n) {
        const a = n.participants.filter((e)=>e.code === "200" && e.userWid.isFbidBot()).map((e)=>e.userWid);
        if (a.length !== 0) {
            o("WAWebMembershipApprovalRequestAction").rejectIncompatibleAgentRequests(chat, a).catch((t)=>{
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] incompatible agent request reject failed"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("membership-approval-agent-reject-failed");
            });
        }
    }
    function x(e) {
        if (e !== 0) {
            o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebToast.react").Toast, {
                msg: o("WAWebOutContactInviteUtils").getGroupInviteAddFailedToastText(e)
            }));
        }
    }
    function $(e, addMembersEntrypoint) {
        const n = o("WAWebGroupIncompatibleDeviceAddResult").splitIncompatibleDeviceRejections(e, addMembersEntrypoint);
        const { hasIncompatibleDeviceRejection, reportedResponse } = n;
        const agentConflictWids = o("WAWebGroupAgentConflictAddResult").getAgentConflictRejectedWids(reportedResponse.participants);
        if (agentConflictWids.length === 0) {
            return {
                agentConflictWids,
                hasIncompatibleDeviceRejection,
                reportedResponse
            };
        }
        return {
            agentConflictWids,
            hasIncompatibleDeviceRejection,
            reportedResponse: babelHelpers.extends({}, reportedResponse, {
                participants: reportedResponse.participants.filter(({ code, userWid })=>!o("WAWebGroupAgentConflictAddResult").isAgentConflictRejection(code, userWid))
            })
        };
    }
    function P(e, t, n) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a = o("WAWebActionToast.react").genId()) {
            const l = e.groupMetadata?.participants;
            if (l == null) {
                return (h || (h = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
            }
            if (t.some((e)=>!l.canRemove(e))) {
                return (h || (h = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
            }
            const u = o("WAWebGroupModifyParticipantsJob").removeGroupParticipants(e.id, t.map((e)=>o("WAWebWidFactory").asUserWidOrThrow(e.id)));
            const c = r("WAWebFbtIntlList")(t.map((e)=>o("WAWebFrontendContactGetters").getFormattedShortName(e.contact)), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
            const d = new (o("WAWebActionToast.react")).ActionType(o("WAWebGroupStringsAction").removingString(c, t.length));
            const m = u.then((n)=>M(e, n, t)).catch((n)=>{
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] removeParticipants dropped"
                ])));
                return new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Couldn't remove {participantNames}.\"}", [
                    s._plural(t.length),
                    s._param("participantNames", c)
                ]), {
                    actionText: s._("Try again."),
                    actionHandler: function() {
                        return P(e, t, a);
                    }
                });
            });
            o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebActionToast.react").ActionToast, {
                id: a,
                initialAction: d,
                pendingAction: m
            }));
            yield u;
        });
        return N.apply(this, arguments);
    }
    function M(e, t, n) {
        const i = o("WAWebGroupAgentRemoveNotFoundJob").getNotFoundGroupAgentWids(t);
        if (i.length === 0) {
            return new (o("WAWebActionToast.react")).ActionType(o("WAWebGroupStringsAction").formatRemoveResult(t, n.map((e)=>e.contact)));
        }
        o("WAWebGroupAgentRemoveNotFoundJob").removeDepartedGroupAgents(e.id, i, e.groupMetadata?.isLidAddressingMode === true).catch((e)=>{
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[groupMeta] removeParticipants: departed agent sync failed"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("group-agent-remove-404-sync-failed");
        });
        const l = new Set(i.map(String));
        const participants = t.participants.filter(({ userWid })=>!l.has(userWid.toString()));
        if (participants.length === 0) {
            return null;
        }
        return new (o("WAWebActionToast.react")).ActionType(o("WAWebGroupStringsAction").formatRemoveResult(babelHelpers.extends({}, t, {
            participants
        }), n.filter((e)=>!l.has(e.id.toString())).map((e)=>e.contact)));
    }
    function w(e, t, n) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a = o("WAWebActionToast.react").genId()) {
            const u = e.groupMetadata?.participants;
            if (u == null) {
                return (h || (h = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
            }
            if (t.some((e)=>!u.canPromote(e))) {
                return (h || (h = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
            }
            const c = o("WAWebGroupModifyParticipantsJob").promoteGroupParticipants(e.id, t.map((e)=>o("WAWebWidFactory").asUserWidOrThrow(e.id)), e.groupMetadata?.isLidAddressingMode === true);
            const d = r("WAWebFbtIntlList")(t.map((e)=>o("WAWebFrontendContactGetters").getFormattedShortName(e.contact)), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
            const m = new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Making {participantNames} group admins.\",\"_1\":\"Making {participantNames} a group admin.\"}", [
                s._plural(t.length),
                s._param("participantNames", d)
            ]));
            const p = c.then((e)=>{
                let n;
                const r = (n = o("WAWebGroupStringsAction")).formatResult(e, n.promoteSuccessString, n.promoteFailedString, n.promotePartialFailedString, t.map((e)=>e.contact));
                return new (o("WAWebActionToast.react")).ActionType(r);
            }).catch((n)=>{
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] promoteParticipants dropped"
                ])));
                return new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Couldn't make {participantNames} admins.\",\"_1\":\"Couldn't make {participantNames} an admin.\"}", [
                    s._plural(t.length),
                    s._param("participantNames", d)
                ]), {
                    actionText: s._("Try again."),
                    actionHandler: function() {
                        return w(e, t, a);
                    }
                });
            });
            o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebActionToast.react").ActionToast, {
                id: a,
                initialAction: m,
                pendingAction: p
            }));
            yield c;
        });
        return A.apply(this, arguments);
    }
    function F(e, t, n) {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a = o("WAWebActionToast.react").genId()) {
            const u = e.groupMetadata?.participants;
            if (u == null) {
                return (h || (h = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
            }
            if (t.some((e)=>!u.canDemote(e))) {
                return (h || (h = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
            }
            const c = o("WAWebGroupModifyParticipantsJob").demoteGroupParticipants(e.id, t.map((e)=>o("WAWebWidFactory").asUserWidOrThrow(e.id)), e.groupMetadata?.isLidAddressingMode === true);
            const d = r("WAWebFbtIntlList")(t.map((e)=>o("WAWebFrontendContactGetters").getFormattedShortName(e.contact)), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
            const m = new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Removing {participantNames} as group admins.\",\"_1\":\"Removing {participantNames} as a group admin.\"}", [
                s._plural(t.length),
                s._param("participantNames", d)
            ]));
            const p = c.then((e)=>{
                let n;
                const r = (n = o("WAWebGroupStringsAction")).formatResult(e, n.demoteSuccessString, n.demoteFailedString, n.demotePartialFailedString, t.map((e)=>e.contact));
                return new (o("WAWebActionToast.react")).ActionType(r);
            }).catch((n)=>{
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] demoteParticipants dropped"
                ])));
                return new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Removing {participantNames} as admins failed.\",\"_1\":\"Removing {participantNames} as an admin failed.\"}", [
                    s._plural(t.length),
                    s._param("participantNames", d)
                ]), {
                    actionText: s._("Try again."),
                    actionHandler: function() {
                        return F(e, t, a);
                    }
                });
            });
            o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebActionToast.react").ActionToast, {
                id: a,
                initialAction: m,
                pendingAction: p
            }));
            yield c;
        });
        return O.apply(this, arguments);
    }
    function B(e, t, a = o("WAWebActionToast.react").genId()) {
        const u = e.groupMetadata?.participants;
        if (u == null) {
            return (h || (h = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
        }
        const d = o("WAWebGroupModifyParticipantsJob").promoteCommunityParticipants(e.id, t.map((e)=>o("WAWebWidFactory").asUserWidOrThrow(e.id)), e.groupMetadata?.isLidAddressingMode === true);
        const m = r("WAWebFbtIntlList")(t.map((e)=>o("WAWebFrontendContactGetters").getFormattedShortName(e.contact)), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
        const p = new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"Making {userNames} community admins.\",\"_1\":\"Making {userNames} community admin.\"}", [
            s._plural(t.length),
            s._param("userNames", m)
        ]));
        const _ = d.then((e)=>{
            if (e.status === 207) {
                return new (o("WAWebActionToast.react")).ActionType(s._("_j{\"*\":\"{userNames} are now community admins.\",\"_1\":\"{userNames} is now a community admin.\"}", [
                    s._plural(t.length),
                    s._param("userNames", m)
                ]));
            }
        }).catch((e)=>{
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[groupMeta] promoteCommunityParticipants dropped"
            ])));
            return new (o("WAWebActionToast.react")).ActionType(s._("Promotion to community admin of {userNames} failed.", [
                s._param("userNames", m)
            ]));
        });
        o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebActionToast.react").ActionToast, {
            id: a,
            initialAction: p,
            pendingAction: _
        }));
        return d;
    }
    function W(e, t, n) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a = o("WAWebActionToast.react").genId()) {
            if (!r("WAWebNetworkStatus").online) {
                const u = r("WAWebFbtIntlList")(t.map((e)=>o("WAWebFrontendContactGetters").getFormattedShortName(e.contact)), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
                const c = t.length === 1 && o("WAWebUserPrefsMeUser").isMeAccount(t[0].id) ? s._("You were not dismissed as a community admin. Check your connection and try again.") : s._("_j{\"*\":\"{userNames} were not dismissed as community admins. Check your connection and try again.\",\"_1\":\"{userNames} was not dismissed as a community admin. Check your connection and try again.\"}", [
                    s._plural(t.length),
                    s._param("userNames", u)
                ]);
                o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebToast.react").Toast, {
                    msg: c
                }));
                return;
            }
            const d = e.groupMetadata?.participants;
            if (d == null) {
                return (h || (h = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
            }
            const m = o("WAWebGroupModifyParticipantsJob").demoteCommunityParticipants(e.id, t.map((e)=>o("WAWebWidFactory").asUserWidOrThrow(e.id)), e.groupMetadata?.isLidAddressingMode === true);
            const p = r("WAWebFbtIntlList")(t.map((e)=>o("WAWebFrontendContactGetters").getFormattedShortName(e.contact)), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
            const _ = new (o("WAWebActionToast.react")).ActionType(t.length === 1 && o("WAWebUserPrefsMeUser").isMeAccount(t[0].id) ? s._("Removing you as a community admin.") : s._("_j{\"*\":\"Dismissing {userNames} as community admins.\",\"_1\":\"Dismissing {userNames} as a community admin.\"}", [
                s._plural(t.length),
                s._param("userNames", p)
            ]));
            const f = m.then((e)=>{
                if (e.status === 207) {
                    return new (o("WAWebActionToast.react")).ActionType(t.length === 1 && o("WAWebUserPrefsMeUser").isMeAccount(t[0].id) ? s._("You're no longer a community admin.") : s._("_j{\"*\":\"{userNames} are no longer community admins.\",\"_1\":\"{userNames} is no longer a community admin.\"}", [
                        s._plural(t.length),
                        s._param("userNames", p)
                    ]));
                }
            }).catch((e)=>{
                o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] demoteCommunityParticipants dropped"
                ])));
                return new (o("WAWebActionToast.react")).ActionType(t.length === 1 && o("WAWebUserPrefsMeUser").isMeAccount(t[0].id) ? s._("Removing you as a community admin failed.") : s._("_j{\"*\":\"Removing {userNames} as community admins failed.\",\"_1\":\"Removing {userNames} as a community admin failed.\"}", [
                    s._plural(t.length),
                    s._param("userNames", p)
                ]));
            });
            o("WAWebToastManager").ToastManager.open(C.jsx(o("WAWebActionToast.react").ActionToast, {
                id: a,
                initialAction: _,
                pendingAction: f
            }));
            yield m;
        });
        return q.apply(this, arguments);
    }
    l.addParticipants = b;
    l.removeParticipants = v;
    l.promoteParticipants = S;
    l.demoteParticipants = R;
    l.promoteCommunityParticipants = L;
    l.demoteCommunityParticipants = E;
}, 226);