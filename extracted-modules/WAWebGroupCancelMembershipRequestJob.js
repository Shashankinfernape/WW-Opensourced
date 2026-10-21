__d("WAWebGroupCancelMembershipRequestJob", [
    "Promise",
    "WALogger",
    "WASmaxGroupsCancelGroupMembershipRequestsRPC",
    "WAWebBackendErrors",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WASmaxGroupsCancelGroupMembershipRequestsRPC").sendCancelGroupMembershipRequestsRPC({
                participantArgs: t.map((e)=>({
                        participantJid: o("WAWebWidToJid").widToUserJid(e)
                    })),
                iqTo: o("WAWebWidToJid").widToGroupJid(e)
            });
            return ((e)=>{
                if ((typeof e === "object" && e !== null || typeof e === "function") && e.name === "CancelGroupMembershipRequestsResponseSuccess" && "value" in e) {
                    const r = e.value;
                    return r.cancelMembershipRequestsParticipant?.map(function(e) {
                        const e_membershipRequestsCancellationParticipantMixins = e.membershipRequestsCancellationParticipantMixins;
                        return {
                            wid: o("WAWebWidFactory").createWid(e.jid),
                            error: e_membershipRequestsCancellationParticipantMixins
                        };
                    }) ?? [];
                }
                if ((typeof e === "object" && e !== null || typeof e === "function") && e.name === "CancelGroupMembershipRequestsResponseClientError" && "value" in e) {
                    const a = e.value;
                    return d(a.errorMembershipRequestsCancellationClientErrors.value);
                }
                if ((typeof e === "object" && e !== null || typeof e === "function") && e.name === "CancelGroupMembershipRequestsResponseServerError" && "value" in e) {
                    const i = e.value;
                    return d(i.errorServerErrors.value);
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            })(n);
        });
        return c.apply(this, arguments);
    }
    function d({ code, text }) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "cancelMembershipApprovalRequest failed: ",
            ":",
            ""
        ])), code, text);
        return (s || (s = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text));
    }
    l.cancelMembershipApprovalRequestJob = u;
}, 98);