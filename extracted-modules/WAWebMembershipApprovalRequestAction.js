__d("WAWebMembershipApprovalRequestAction", [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebBackendErrors",
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebGroupAgentMembershipRequest",
    "WAWebGroupCancelMembershipRequestJob",
    "WAWebGroupGetMembershipApprovalRequestsJob",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebGroupMembershipApprovalRequestModel",
    "WAWebGroupMembershipRequestsActionJob",
    "WAWebGroupMutationParticipantUtils",
    "WAWebSetUsernameJob",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = 400;
    const p = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, n ?? "GroupError") || this;
            r.name = "GroupError";
            r.status = t;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const _ = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, n ?? "RequestError") || this;
            r.name = "RequestError";
            r.status = t;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebStateUtils").unproxy(e);
            const n = (yield o("WAWebApiMembershipApprovalRequestStore").getMembershipApprovalRequests(t.id)).map((e)=>new (r("WAWebGroupMembershipApprovalRequestModel"))(e));
            r("nullthrows")(t.groupMetadata).membershipApprovalRequests.add(n, {
                merge: true
            });
        });
        return g.apply(this, arguments);
    }
    const h = (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = o("WAWebStateUtils").unproxy(e);
            try {
                const a = yield o("WAWebGroupMembershipRequestsActionJob").membershipApprovalRequestAction(r.id, [
                    b(r, t)
                ], n);
                const i = a[0];
                const { error, phoneNumber, username, wid } = i;
                if (error != null) {
                    const { name, value } = error;
                    throw new _(Number(value.error), name);
                }
                const f = o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled();
                if (f) {
                    const g = [
                        {
                            id: o("WAWebWidFactory").asUserWidOrThrow(wid),
                            lid: wid.isLid() ? wid : null,
                            phoneNumber: phoneNumber ? o("WAWebWidFactory").asUserWidOrThrow(phoneNumber) : null
                        }
                    ];
                    yield o("WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob").createOrReplaceDisplayNamesAndLidPnMappingsInBatches(g, true);
                }
                if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && username != null) {
                    yield o("WAWebSetUsernameJob").setUsernamesJob([
                        {
                            userId: o("WAWebWidFactory").asUserWidOrThrow(wid),
                            username: o("WAWebUsernameTypes").asUsername(username)
                        }
                    ]);
                }
            } catch (error) {
                throw error instanceof o("WAWebBackendErrors").ServerStatusCodeError ? new p(error.status, error.message) : error;
            }
        });
        return function(n, r, o) {
            return e.apply(this, arguments);
        };
    })();
    const y = (()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a) {
            const i = o("WAWebStateUtils").unproxy(t);
            try {
                const l = n.map((e)=>C(i, e));
                const s = l.filter(Boolean);
                const u = s.length > 0 ? yield o("WAWebGroupMembershipRequestsActionJob").membershipApprovalRequestAction(i.id, s, a) : [];
                const c = new Map;
                u.forEach((e)=>{
                    c.set(e.wid.toString(), e);
                    if (e.phoneNumber != null) {
                        c.set(e.phoneNumber.toString(), e);
                    }
                });
                const d = n.map((e, t)=>{
                    const r = l[t];
                    if (r == null) {
                        return {
                            error: new _(m, "invalid-participant"),
                            request: e,
                            response: null
                        };
                    }
                    const response = u.length === 1 && n.length === 1 ? u[0] : L(c, r);
                    return {
                        error: R(response),
                        request: e,
                        response
                    };
                });
                yield v(d.map(({ error, response })=>{
                    if (error == null) {
                        return response;
                    }
                    return null;
                }).filter(Boolean)).catch((t)=>{
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "membershipApprovalRequestsActionProxy: could not store the requesters' identities"
                    ]))).catching(r("getErrorSafe")(t));
                });
                return d.map(({ error, request })=>({
                        error,
                        request
                    }));
            } catch (error) {
                throw error instanceof o("WAWebBackendErrors").ServerStatusCodeError ? new p(error.status, error.message) : error;
            }
        });
        return function(n, r, o) {
            return t.apply(this, arguments);
        };
    })();
    function C(e, t) {
        try {
            return b(e, t);
        } catch (error) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "membershipApprovalRequestsActionProxy: skipped a requester without a usable id"
            ]))).catching(r("getErrorSafe")(error));
            return null;
        }
    }
    function b(e, t) {
        const r = o("WAWebWidFactory").asUserWidOrThrow(t.id);
        if (r.isFbidBot()) {
            return {
                phoneNumber: r
            };
        }
        return o("WAWebGroupMutationParticipantUtils").getGroupMutationParticipant(t.contact, e.groupMetadata?.isLidAddressingMode === true, "membershipApprovalRequest");
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length !== 0) {
                if (o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled()) {
                    const t = e.map(({ phoneNumber, wid })=>({
                            id: o("WAWebWidFactory").asUserWidOrThrow(wid),
                            lid: wid.isLid() ? wid : null,
                            phoneNumber: phoneNumber ? o("WAWebWidFactory").asUserWidOrThrow(phoneNumber) : null
                        }));
                    yield o("WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob").createOrReplaceDisplayNamesAndLidPnMappingsInBatches(t, true);
                }
                if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && e.some(({ username })=>username != null)) {
                    yield o("WAWebSetUsernameJob").setUsernamesJob(e.flatMap(({ username, wid })=>{
                        if (username != null) {
                            return [
                                {
                                    userId: o("WAWebWidFactory").asUserWidOrThrow(wid),
                                    username: o("WAWebUsernameTypes").asUsername(username)
                                }
                            ];
                        }
                        return [];
                    }));
                }
            }
        });
        return S.apply(this, arguments);
    }
    function R(response) {
        if (response == null) {
            return new _(0, "missing-participant-result");
        }
        const e_error = response.error;
        if (e_error != null) {
            return new _(Number(e_error.value.error), e_error.name);
        }
        return null;
    }
    function L(e, { lid, phoneNumber }) {
        return (lid != null ? e.get(lid.toString()) : null) ?? (phoneNumber != null ? e.get(phoneNumber.toString()) : null);
    }
    function E(e, t, n) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = self.performance.now();
            let a = true;
            try {
                yield h(e, t, o("WAWebGroupMembershipRequestsActionJob").MembershipApprovalRequestAction.Approve);
            } catch (error) {
                a = false;
                throw error;
            } finally{
                const i = self.performance.now() - r;
                o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestApprove({
                    groupId: e.id,
                    isSuccessful: a,
                    responseTime: i,
                    groupsInCommon: n
                });
            }
            $(e, [
                t.id
            ]);
        });
        return k.apply(this, arguments);
    }
    function I(e, t, n) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = self.performance.now();
            let a = null;
            try {
                a = yield y(e, t, o("WAWebGroupMembershipRequestsActionJob").MembershipApprovalRequestAction.Approve);
                $(e, a.filter(({ error })=>error == null).map(({ request })=>request.id));
                return a;
            } finally{
                const i = self.performance.now() - r;
                t.forEach((t, r)=>{
                    o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestApprove({
                        groupId: e.id,
                        isSuccessful: a != null && a[r].error == null,
                        responseTime: i,
                        groupsInCommon: n(t)
                    });
                });
            }
        });
        return T.apply(this, arguments);
    }
    function D(e, t, n) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = self.performance.now();
            let a = true;
            try {
                yield h(e, t, o("WAWebGroupMembershipRequestsActionJob").MembershipApprovalRequestAction.Reject);
            } catch (error) {
                a = false;
                throw error;
            } finally{
                const i = self.performance.now() - r;
                o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestReject({
                    groupId: e.id,
                    isSuccessful: a,
                    responseTime: i,
                    groupsInCommon: n
                });
            }
        });
        return x.apply(this, arguments);
    }
    function $(e, t) {
        const n = t.filter((e)=>e.isFbidBot());
        if (n.length !== 0) {
            P(e, n).catch((e)=>{
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[membershipApproval] incompatible agent request reject failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("membership-approval-agent-reject-failed");
            });
        }
    }
    function P(e, t) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = o("WAWebStateUtils").unproxy(e);
            const i = (yield o("WAWebApiMembershipApprovalRequestStore").getMembershipApprovalRequests(a.id)).filter((e)=>t.some((t)=>o("WAWebGroupAgentMembershipRequest").isAgentRequestIncompatibleWithJoinedAgent(t, e.id))).map((e)=>new (r("WAWebGroupMembershipApprovalRequestModel"))(e));
            if (i.length !== 0) {
                const l = yield (d || (d = n("Promise"))).allSettled(i.map((e)=>h(a, e, o("WAWebGroupMembershipRequestsActionJob").MembershipApprovalRequestAction.Reject)));
                l.forEach((e)=>{
                    if (e.status === "rejected") {
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[membershipApproval] incompatible agent request reject failed"
                        ]))).catching(r("getErrorSafe")(e.reason)).sendLogs("membership-approval-agent-reject-failed");
                    }
                });
                yield o("WAWebGroupGetMembershipApprovalRequestsJob").queryAndUpdateGroupMembershipApprovalRequests(a.id);
            }
        });
        return N.apply(this, arguments);
    }
    function M(e) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = self.performance.now();
            let n = true;
            const r = o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled();
            const a = r ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            try {
                const i = yield o("WAWebGroupCancelMembershipRequestJob").cancelMembershipApprovalRequestJob(e, [
                    a
                ]);
                const l = i[0];
                const s = l.error;
                if (s != null) {
                    const { name, value } = s;
                    throw new _(Number(value.error), name);
                }
            } catch (error) {
                n = false;
                throw error instanceof o("WAWebBackendErrors").ServerStatusCodeError ? new p(error.status, error.message) : error;
            } finally{
                const d = self.performance.now() - t;
                o("WAWebGroupJoinRequestMetricUtils").logMembershipRequestCancel({
                    groupId: e,
                    isSuccessful: n,
                    responseTime: d
                });
            }
        });
        return w.apply(this, arguments);
    }
    l.GroupError = p;
    l.RequestError = _;
    l.readMembershipApprovalRequestsFromDB = f;
    l.approveMembershipApprovalRequest = E;
    l.approveMembershipApprovalRequests = I;
    l.rejectMembershipApprovalRequest = D;
    l.rejectIncompatibleAgentRequests = P;
    l.cancelMembershipApprovalRequest = M;
}, 98);