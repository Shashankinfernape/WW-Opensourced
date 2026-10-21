__d("WAWebGroupModifyParticipantsJob", [
    "Promise",
    "WALogger",
    "WASmaxGroupsAddParticipantsRPC",
    "WASmaxGroupsPromoteDemoteAdminRPC",
    "WASmaxGroupsPromoteDemoteRPC",
    "WASmaxGroupsRemoveParticipantsRPC",
    "WAWebBackendErrors",
    "WAWebCoreActionsODS",
    "WAWebGroupsPrivacyTokenUtils",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebSchemaChat",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
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
    let C;
    let b;
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = yield o("WASmaxGroupsRemoveParticipantsRPC").sendRemoveParticipantsRPC({
                participantArgs: t.map((e)=>({
                        participantJid: o("WAWebWidToJid").widToUserJid(e)
                    })),
                iqTo: o("WAWebWidToJid").widToGroupJid(e),
                hasRemoveLinkedGroupsTrue: false
            });
            e: {
                const a = r;
                if ((typeof a === "object" && a !== null || typeof a === "function") && a.name === "RemoveParticipantsResponseSuccess" && (typeof a.value === "object" && a.value !== null || typeof a.value === "function") && "removeParticipant" in a.value) {
                    const i = a.value.removeParticipant;
                    const l = i;
                    if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                        const c = l.reduce((acc, item)=>{
                            const t_jid = item.jid;
                            const a = item.usernameAttMixin?.username;
                            if (a != null) {
                                acc.push({
                                    userId: o("WAWebJidToWid").userJidToUserWid(t_jid),
                                    username: o("WAWebUsernameTypes").asUsername(a)
                                });
                            }
                            return acc;
                        }, []);
                        if (c.length > 0) {
                            yield o("WAWebSetUsernameJob").setUsernamesJob(c);
                        }
                    }
                    return {
                        status: 207,
                        participants: l.map((e)=>{
                            const a = e.participantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup?.value.error;
                            return {
                                userWid: o("WAWebJidToWid").userJidToUserWid(e.jid),
                                username: e.usernameAttMixin?.username ?? null,
                                code: a ?? "200",
                                invite_code: null,
                                invite_code_exp: null
                            };
                        })
                    };
                }
                if ((typeof a === "object" && a !== null || typeof a === "function") && a.name === "RemoveParticipantsResponseClientError" && (typeof a.value === "object" && a.value !== null || typeof a.value === "function") && (typeof a.value.errorRemoveParticipantsClientErrors === "object" && a.value.errorRemoveParticipantsClientErrors !== null || typeof a.value.errorRemoveParticipantsClientErrors === "function") && (typeof a.value.errorRemoveParticipantsClientErrors.value === "object" && a.value.errorRemoveParticipantsClientErrors.value !== null || typeof a.value.errorRemoveParticipantsClientErrors.value === "function") && "code" in a.value.errorRemoveParticipantsClientErrors.value && "text" in a.value.errorRemoveParticipantsClientErrors.value) {
                    const d = a.value.errorRemoveParticipantsClientErrors.value.code;
                    const m = a.value.errorRemoveParticipantsClientErrors.value.text;
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "error sending remove group participants iq: ",
                        ""
                    ])), d);
                    return (b || (b = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(+d, m));
                    break e;
                }
                if ((typeof a === "object" && a !== null || typeof a === "function") && a.name === "RemoveParticipantsResponseServerError" && (typeof a.value === "object" && a.value !== null || typeof a.value === "function") && (typeof a.value.errorServerErrors === "object" && a.value.errorServerErrors !== null || typeof a.value.errorServerErrors === "function") && (typeof a.value.errorServerErrors.value === "object" && a.value.errorServerErrors.value !== null || typeof a.value.errorServerErrors.value === "function") && "code" in a.value.errorServerErrors.value && "text" in a.value.errorServerErrors.value) {
                    const p = a.value.errorServerErrors.value.code;
                    const _ = a.value.errorServerErrors.value.text;
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "error sending remove group participants iq: ",
                        ""
                    ])), p);
                    return (b || (b = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(+p, _));
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${a}`);
            }
        });
        return S.apply(this, arguments);
    }
    function R(e, t, n) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r = []) {
            const a = t.map((e)=>{
                if (e.lid) {
                    return e.lid;
                }
                return e.phoneNumber;
            });
            const i = yield o("WAWebSchemaChat").getChatTable().bulkGet(a.map((e)=>e.toString()));
            let l;
            if (i.length > 0) {
                l = o("WAWebGroupsPrivacyTokenUtils").getPermissionTokenMap(i, a);
            }
            const s = {
                participantArgs: [].concat(a.map((e, n)=>{
                    const a = t[n];
                    return {
                        participantJid: o("WAWebWidToJid").widToUserJid(e),
                        participantPhoneNumber: e.isLid() && a.phoneNumber ? o("WAWebWidToJid").widToUserJid(a.phoneNumber) : undefined,
                        participantUsername: e.isLid() ? a.username : undefined,
                        permissionTokenMixinArgs: l?.get(e)
                    };
                }), r.map((e)=>({
                        participantJid: o("WAWebWidToJid").widToUserJid(e),
                        permissionTokenMixinArgs: l?.get(e)
                    }))),
                iqTo: o("WAWebWidToJid").widToGroupJid(e)
            };
            let u;
            try {
                u = yield o("WASmaxGroupsAddParticipantsRPC").sendAddParticipantsRPC(s);
            } catch (error) {
                o("WAWebCoreActionsODS").logGroupAddParticipantError();
                throw error;
            }
            switch(u.name){
                case "AddParticipantsResponseSuccess":
                    {
                        const m = u.value.addParticipant;
                        o("WAWebCoreActionsODS").logGroupAddParticipant();
                        if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                            const p = m.reduce((acc, item)=>{
                                const jid = item.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup.value.jid;
                                const a = item.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup?.value.usernameAttMixin?.username;
                                if (jid != null && a != null) {
                                    acc.push({
                                        userId: o("WAWebJidToWid").userJidToUserWid(jid),
                                        username: o("WAWebUsernameTypes").asUsername(a)
                                    });
                                }
                                return acc;
                            }, []);
                            if (p.length > 0) {
                                yield o("WAWebSetUsernameJob").setUsernamesJob(p);
                            }
                        }
                        return {
                            status: 207,
                            participants: m.flatMap((e)=>E(e)),
                            invitedOutContacts: m.flatMap((e)=>k(e))
                        };
                    }
                case "AddParticipantsResponseClientError":
                    {
                        const _ = u.value.errorAddParticipantsClientErrors.value;
                        const { code, text } = _;
                        const h = u.value.errorAddParticipantsClientErrors.value.rateLimitAddParticipantTimeOrCountRateLimitMixinGroup;
                        o("WAWebCoreActionsODS").logGroupAddParticipantError();
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "error sending add group participants iq: ",
                            ""
                        ])), code);
                        if (h != null) {
                            switch(h.name){
                                case "AddParticipantTimeRateLimit":
                                    return (b || (b = n("Promise"))).reject(new (o("WAWebBackendErrors")).GroupAddParticipantTimeRateLimitServerError(code, h.value.backoff, h.value.type));
                                case "AddParticipantCountRateLimit":
                                    return (b || (b = n("Promise"))).reject(new (o("WAWebBackendErrors")).GroupAddParticipantCountRateLimitServerError(code, h.value.participantLimit));
                            }
                        }
                        return (b || (b = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(+code, text));
                    }
                case "AddParticipantsResponseServerError":
                    {
                        const y = u.value.errorServerErrors.value;
                        const { code, text } = y;
                        o("WAWebCoreActionsODS").logGroupAddParticipantError();
                        o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "error sending add group participants iq: ",
                            ""
                        ])), code);
                        return (b || (b = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(+code, text));
                    }
            }
        });
        return L.apply(this, arguments);
    }
    function E({ addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup }) {
        if (addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup.name === "NonRegisteredWaUserParticipantErrorLidResponse") {
            return [];
        }
        const jid = addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup.value.jid;
        const addParticipantsParticipantMixins = addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup.value.addParticipantsParticipantMixins;
        const i = addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup.value.usernameAttMixin?.username;
        const joinTime = addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup.value.joinTime;
        if (jid == null || addParticipantsParticipantMixins?.name === "ParticipantRequestCodeCanBeSent" && addParticipantsParticipantMixins.value.participantNotAddressableMixin != null) {
            return [];
        }
        const invite_code = addParticipantsParticipantMixins?.value.addRequestCode;
        const u = addParticipantsParticipantMixins?.value.addRequestExpiration;
        const c = addParticipantsParticipantMixins?.value.error;
        return [
            {
                userWid: o("WAWebJidToWid").userJidToUserWid(jid),
                username: i ?? null,
                code: c ?? "200",
                subCode: {
                    membershipApprovalRequestError: addParticipantsParticipantMixins?.value.membershipApprovalRequestError
                },
                invite_code,
                invite_code_exp: u != null ? String(u) : undefined,
                joinTime
            }
        ];
    }
    function k({ addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup }) {
        if (addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup.name === "NonRegisteredWaUserParticipantErrorLidResponse") {
            const a = addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup.value.phoneNumber;
            const i = addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup.value.participantRequestCodeCanBeSentOrRequestCodeCannotBeCreatedForLegalConcernsOrHasInvalidPNMixinGroup;
            if (a == null || i == null) {
                return [];
            }
            return [
                {
                    phoneNumberWid: o("WAWebJidToWid").userJidToUserWid(a),
                    code: String(i.value.error ?? "200")
                }
            ];
        }
        const jid = addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup.value.jid;
        const addParticipantsParticipantMixins = addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup.value.addParticipantsParticipantMixins;
        if (jid == null || addParticipantsParticipantMixins?.name !== "ParticipantRequestCodeCanBeSent" || addParticipantsParticipantMixins.value.participantNotAddressableMixin == null) {
            return [];
        }
        return [
            {
                phoneNumberWid: o("WAWebJidToWid").userJidToUserWid(jid),
                code: String(addParticipantsParticipantMixins.value.error ?? "200")
            }
        ];
    }
    function I(e, t, n) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            const a = w(t, r, "demote");
            const i = yield o("WASmaxGroupsPromoteDemoteRPC").sendPromoteDemoteRPC({
                demoteArgs: {
                    participantArgs: a.map((e)=>({
                            participantJid: o("WAWebWidToJid").widToUserJid(e)
                        }))
                },
                iqTo: o("WAWebWidToJid").widToGroupJid(e)
            });
            switch(i.name){
                case "PromoteDemoteResponseSuccessDemote":
                    {
                        const l = i.value.demoteParticipant;
                        if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                            const s = l.reduce((acc, item)=>{
                                const t_jid = item.jid;
                                const a = item.usernameAttMixin?.username;
                                if (a != null) {
                                    acc.push({
                                        userId: o("WAWebJidToWid").userJidToUserWid(t_jid),
                                        username: o("WAWebUsernameTypes").asUsername(a)
                                    });
                                }
                                return acc;
                            }, []);
                            if (s.length > 0) {
                                yield o("WAWebSetUsernameJob").setUsernamesJob(s);
                            }
                        }
                        return {
                            status: 207,
                            participants: l.map((e)=>{
                                const e_error = e.error;
                                return {
                                    userWid: o("WAWebJidToWid").userJidToUserWid(e.jid),
                                    username: e.usernameAttMixin?.username ?? null,
                                    code: e_error ?? "200",
                                    invite_code: null,
                                    invite_code_exp: null
                                };
                            })
                        };
                    }
                case "PromoteDemoteResponseClientError":
                    {
                        const u = i.value.errorPromoteDemoteClientErrors.value;
                        const { code, text } = u;
                        o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "error sending demote group participants iq: ",
                            ""
                        ])), code);
                        return (b || (b = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(+code, text));
                    }
                case "PromoteDemoteResponseServerError":
                    {
                        const _ = i.value.errorServerErrors.value;
                        const { code, text } = _;
                        o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "error sending demote group participants iq: ",
                            ""
                        ])), code);
                        return (b || (b = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(+code, text));
                    }
                case "PromoteDemoteResponseSuccessPromote":
                    return;
            }
        });
        return T.apply(this, arguments);
    }
    function D(e, t, n) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            const a = w(t, r, "promote");
            const i = yield o("WASmaxGroupsPromoteDemoteRPC").sendPromoteDemoteRPC({
                promoteArgs: {
                    participantArgs: a.map((e)=>({
                            participantJid: o("WAWebWidToJid").widToUserJid(e)
                        }))
                },
                iqTo: o("WAWebWidToJid").widToGroupJid(e)
            });
            switch(i.name){
                case "PromoteDemoteResponseSuccessPromote":
                    {
                        const l = i.value.promoteParticipant;
                        if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                            const s = l.reduce((acc, item)=>{
                                const t_jid = item.jid;
                                const a = item.usernameAttMixin?.username;
                                if (a != null) {
                                    acc.push({
                                        userId: o("WAWebJidToWid").userJidToUserWid(t_jid),
                                        username: o("WAWebUsernameTypes").asUsername(a)
                                    });
                                }
                                return acc;
                            }, []);
                            if (s.length > 0) {
                                yield o("WAWebSetUsernameJob").setUsernamesJob(s);
                            }
                        }
                        return {
                            status: 207,
                            participants: l.map((e)=>{
                                const e_error = e.error;
                                return {
                                    userWid: o("WAWebJidToWid").userJidToUserWid(e.jid),
                                    username: e.usernameAttMixin?.username ?? null,
                                    code: e_error ?? "200",
                                    invite_code: null,
                                    invite_code_exp: null
                                };
                            })
                        };
                    }
                case "PromoteDemoteResponseClientError":
                    {
                        const u = i.value.errorPromoteDemoteClientErrors.value;
                        const { code, text } = u;
                        o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "error sending promote group participants iq: ",
                            ""
                        ])), code);
                        return (b || (b = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(+code, text));
                    }
                case "PromoteDemoteResponseServerError":
                    {
                        const m = i.value.errorServerErrors.value;
                        const { code, text } = m;
                        o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "error sending promote group participants iq: ",
                            ""
                        ])), code);
                        return (b || (b = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(+code, text));
                    }
                case "PromoteDemoteResponseSuccessDemote":
                    return;
            }
        });
        return x.apply(this, arguments);
    }
    function $(e, t, n) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            const a = w(t, r, "admin-promote");
            const i = yield o("WASmaxGroupsPromoteDemoteAdminRPC").sendPromoteDemoteAdminRPC({
                promoteArgs: {
                    participantArgs: a.map((e)=>({
                            participantJid: o("WAWebWidToJid").widToUserJid(e)
                        }))
                },
                iqTo: o("WAWebWidToJid").widToGroupJid(e)
            });
            switch(i.name){
                case "PromoteDemoteAdminResponseSuccessMultiAdmin":
                    {
                        const l = i.value.adminParticipant;
                        if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                            const s = l.reduce((acc, item)=>{
                                const t_jid = item.jid;
                                const a = item.usernameAttMixin?.username;
                                if (a != null) {
                                    acc.push({
                                        userId: o("WAWebJidToWid").userJidToUserWid(t_jid),
                                        username: o("WAWebUsernameTypes").asUsername(a)
                                    });
                                }
                                return acc;
                            }, []);
                            if (s.length > 0) {
                                yield o("WAWebSetUsernameJob").setUsernamesJob(s);
                            }
                        }
                        return {
                            status: 207,
                            participants: l.map((e)=>{
                                const e_error = e.error;
                                return {
                                    userWid: o("WAWebJidToWid").userJidToUserWid(e.jid),
                                    username: e.usernameAttMixin?.username ?? null,
                                    code: e_error ?? "200",
                                    invite_code: null,
                                    invite_code_exp: null
                                };
                            })
                        };
                    }
                case "PromoteDemoteAdminResponseClientError":
                    {
                        const u = i.value.errorPromoteDemoteAdminClientErrors.value;
                        const { code, text } = u;
                        o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "error sending promoting group participants iq: ",
                            ""
                        ])), code);
                        return (b || (b = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(+code, text));
                    }
                case "PromoteDemoteAdminResponseServerError":
                    {
                        const m = i.value.errorServerErrors.value;
                        const { code, text } = m;
                        o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "error sending promoting group participants iq: ",
                            ""
                        ])), code);
                        return (b || (b = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(+code, text));
                    }
            }
        });
        return P.apply(this, arguments);
    }
    function N(e, t, n) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            const a = w(t, r, "admin-demote");
            const i = yield o("WASmaxGroupsPromoteDemoteAdminRPC").sendPromoteDemoteAdminRPC({
                demoteArgs: {
                    participantArgs: a.map((e)=>({
                            participantJid: o("WAWebWidToJid").widToUserJid(e)
                        }))
                },
                iqTo: o("WAWebWidToJid").widToGroupJid(e)
            });
            switch(i.name){
                case "PromoteDemoteAdminResponseSuccessMultiAdmin":
                    {
                        const l = i.value.adminParticipant;
                        if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                            const s = l.reduce((acc, item)=>{
                                const t_jid = item.jid;
                                const a = item.usernameAttMixin?.username;
                                if (a != null) {
                                    acc.push({
                                        userId: o("WAWebJidToWid").userJidToUserWid(t_jid),
                                        username: o("WAWebUsernameTypes").asUsername(a)
                                    });
                                }
                                return acc;
                            }, []);
                            if (s.length > 0) {
                                yield o("WAWebSetUsernameJob").setUsernamesJob(s);
                            }
                        }
                        return {
                            status: 207,
                            participants: l.map((e)=>{
                                const e_error = e.error;
                                return {
                                    userWid: o("WAWebJidToWid").userJidToUserWid(e.jid),
                                    username: e.usernameAttMixin?.username ?? null,
                                    code: e_error ?? "200",
                                    invite_code: null,
                                    invite_code_exp: null
                                };
                            })
                        };
                    }
                case "PromoteDemoteAdminResponseClientError":
                    {
                        const u = i.value.errorPromoteDemoteAdminClientErrors.value;
                        const { code, text } = u;
                        o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "error sending demoting group participants iq: ",
                            ""
                        ])), code);
                        return (b || (b = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(+code, text));
                    }
                case "PromoteDemoteAdminResponseServerError":
                    {
                        const m = i.value.errorServerErrors.value;
                        const { code, text } = m;
                        o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                            "error sending demoting group participants iq: ",
                            ""
                        ])), code);
                        return (b || (b = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(+code, text));
                    }
            }
        });
        return M.apply(this, arguments);
    }
    function w(t, n, r) {
        const a = o("WAWebLidMigrationUtils").toAddressingModeFactory(n);
        return t.map((t, i)=>{
            const l = a(t);
            if (l) {
                return o("WAWebWidFactory").asUserWidOrThrow(l);
            }
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] Failed to normalise participant #",
                " wid to ",
                ""
            ])), r, i + 1, n ? "LID" : "PN").sendLogs(`${r}-participant-failed-to-normalise-wids`);
            return t;
        });
    }
    l.removeGroupParticipants = v;
    l.addGroupParticipants = R;
    l.demoteGroupParticipants = I;
    l.promoteGroupParticipants = D;
    l.promoteCommunityParticipants = $;
    l.demoteCommunityParticipants = N;
}, 98);