__d("WAWebGroupMembershipRequestsActionJob", [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WASmaxGroupsMembershipRequestsActionRPC",
    "WAWebBackendErrors",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = n("$InternalEnum").Mirrored([
        "Approve",
        "Reject"
    ]);
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = t.map((e)=>{
                if (e.lid) {
                    return e.lid;
                }
                return e.phoneNumber;
            });
            const participantArgs = r.map((e, n)=>{
                const r = t[n];
                return {
                    participantJid: o("WAWebWidToJid").widToUserJid(e),
                    participantPhoneNumber: e.isLid() && r.phoneNumber ? o("WAWebWidToJid").widToUserJid(r.phoneNumber) : undefined,
                    participantUsername: e.isLid() ? r.username : undefined
                };
            });
            let approveArgs;
            let rejectArgs;
            if (n === u.Approve) {
                approveArgs = {
                    participantArgs
                };
            } else {
                rejectArgs = {
                    participantArgs
                };
            }
            const s = yield o("WASmaxGroupsMembershipRequestsActionRPC").sendMembershipRequestsActionRPC({
                iqTo: o("WAWebWidToJid").widToGroupJid(e),
                approveArgs,
                rejectArgs
            });
            return ((e)=>{
                if ((typeof e === "object" && e !== null || typeof e === "function") && e.name === "MembershipRequestsActionResponseSuccess" && "value" in e) {
                    const a = e.value;
                    return (n === u.Approve ? a.membershipRequestsActionApprove : a.membershipRequestsActionReject)?.participant?.map(function(e) {
                        const r = n === u.Approve ? e.membershipRequestsActionAcceptParticipantMixins : e.membershipRequestsActionRejectParticipantMixins;
                        const a = {
                            wid: o("WAWebWidFactory").createWid(e.jid),
                            username: e.identityMixin?.identityTypes.value?.username,
                            error: r
                        };
                        const i = o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled();
                        if (i) {
                            const s = e.identityMixin?.identityTypes.value.phoneNumber;
                            a.phoneNumber = s != null ? o("WAWebWidFactory").createWid(s) : undefined;
                        }
                        return a;
                    }) ?? [];
                }
                if ((typeof e === "object" && e !== null || typeof e === "function") && e.name === "MembershipRequestsActionResponseClientError" && "value" in e) {
                    const i = e.value;
                    return m(i.errorMembershipRequestsActionClientErrors.value);
                }
                if ((typeof e === "object" && e !== null || typeof e === "function") && e.name === "MembershipRequestsActionResponseServerError" && "value" in e) {
                    const l = e.value;
                    return m(l.errorServerErrors.value);
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            })(s);
        });
        return d.apply(this, arguments);
    }
    function m({ code, text }) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "membershipApprovalRequestAction failed: ",
            ":",
            ""
        ])), code, text);
        return (s || (s = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text));
    }
    l.MembershipApprovalRequestAction = u;
    l.membershipApprovalRequestAction = c;
}, 98);