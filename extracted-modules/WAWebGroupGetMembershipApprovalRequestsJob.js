__d("WAWebGroupGetMembershipApprovalRequestsJob", [
    "Promise",
    "WALogger",
    "WASmaxGroupsGetMembershipApprovalRequestsRPC",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebBackendApi",
    "WAWebBackendErrors",
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebGroupsQueryApi",
    "WAWebJidToWid",
    "WAWebRequestMethodType",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "addedByPn",
        "addedByUsername",
        "phoneNumber",
        "username"
    ];
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WASmaxGroupsGetMembershipApprovalRequestsRPC").sendGetMembershipApprovalRequestsRPC({
                iqTo: o("WAWebWidToJid").widToGroupJid(e)
            });
            switch(t.name){
                case "GetMembershipApprovalRequestsResponseSuccess":
                    return t.value.membershipApprovalRequestsMembershipApprovalRequest.map((e)=>{
                        const t = o("WAWebJidToWid").userJidToUserWid(e.jid);
                        const n = e.requestor;
                        const r = {
                            id: t,
                            t: e.requestTime,
                            addedBy: n != null ? o("WAWebJidToWid").userJidToUserWid(n) : t,
                            requestMethod: m(e.requestMethod),
                            parentGroupId: e.parentGroupJid != null ? o("WAWebJidToWid").groupJidToWid(e.parentGroupJid) : void 0
                        };
                        if (o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled()) {
                            const i = e.identityMixin?.identityTypes.value.phoneNumber;
                            if (i != null) {
                                r.phoneNumber = o("WAWebJidToWid").userJidToUserWid(i);
                            }
                            const l = e.requestorPn;
                            if (l != null) {
                                r.addedByPn = o("WAWebJidToWid").userJidToUserWid(l);
                            }
                        }
                        if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                            const u = e.requestorUsername;
                            if (u != null) {
                                r.addedByUsername = u;
                            }
                            const c = e.identityMixin?.identityTypes != null ? o("WAWebGroupsQueryApi").extractUsernameFromIdentityTypes(e.identityMixin.identityTypes) : void 0;
                            if (c != null) {
                                r.username = c;
                            }
                        }
                        return r;
                    });
                case "GetMembershipApprovalRequestsResponseClientError":
                    {
                        const n = t.value.errorGetMembershipApprovalRequestsClientErrors;
                        return p(n.value);
                    }
                default:
                    t.name;
                    return p(t.value.errorServerErrors.value);
            }
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        switch(e){
            case "invite_link":
                return o("WAWebRequestMethodType").RequestMethod.InviteLink;
            case "linked_group_join":
                return o("WAWebRequestMethodType").RequestMethod.LinkedGroupJoin;
            case "non_admin_add":
                return o("WAWebRequestMethodType").RequestMethod.NonAdminAdd;
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function p({ code: t, text: r }) {
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "queryMembershipApprovalRequests failed: ",
            ":",
            ""
        ])), t, r);
        return (u || (u = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(t), r));
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield c(t);
            const r = n.map((t)=>{
                const { addedByPn: n, addedByUsername: r, phoneNumber: o, username: a } = t;
                const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
                return i;
            });
            const a = yield o("WAWebApiMembershipApprovalRequestStore").getMembershipApprovalRequests(t);
            const i = a.filter((e)=>!r.some((t)=>t.id.equals(e.id)));
            yield o("WAWebApiMembershipApprovalRequestStore").removeMembershipApprovalRequests(t, i.map((e)=>e.id));
            yield o("WAWebApiMembershipApprovalRequestStore").addMembershipApprovalRequests(t, r);
            if (o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled()) {
                const l = n.reduce((e, { addedBy: n, addedByPn: r, id: o, phoneNumber: a })=>{
                    e.push({
                        id: o,
                        lid: o.isLid() ? o : null,
                        phoneNumber: a ?? null
                    });
                    e.push({
                        id: n,
                        lid: n.isLid() ? n : null,
                        phoneNumber: r ?? null
                    });
                    return e;
                }, []);
                yield o("WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob").createOrReplaceDisplayNamesAndLidPnMappingsInBatches(l, true);
            }
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                const s = n.reduce((e, t)=>{
                    if (t.username != null) {
                        e.push({
                            username: o("WAWebUsernameTypes").asUsername(t.username),
                            userId: o("WAWebWidFactory").asUserWidOrThrow(t.id)
                        });
                    }
                    if (t.addedByUsername != null) {
                        e.push({
                            username: o("WAWebUsernameTypes").asUsername(t.addedByUsername),
                            userId: o("WAWebWidFactory").asUserWidOrThrow(t.addedBy)
                        });
                    }
                    return e;
                }, []);
                yield o("WAWebSetUsernameJob").setUsernamesJob(s);
            }
            o("WAWebBackendApi").frontendFireAndForget("removeMembershipApprovalRequests", {
                groupId: t,
                requestIds: i.map((e)=>e.id)
            });
            o("WAWebBackendApi").frontendFireAndForget("addMembershipApprovalRequests", {
                groupId: t,
                requests: r
            });
        });
        return f.apply(this, arguments);
    }
    l.queryAndUpdateGroupMembershipApprovalRequests = _;
}, 98);