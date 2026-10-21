__d("WAWebGroupQueryJob", [
    "Promise",
    "WALogger",
    "WASmaxGroupsBatchGetGroupInfoRPC",
    "WASmaxGroupsGetInviteGroupInfoRPC",
    "WASmaxGroupsGetParticipatingGroupsRPC",
    "WAWebABProps",
    "WAWebApiChat",
    "WAWebApiChatCommon",
    "WAWebApiParticipantStore",
    "WAWebBackendApi",
    "WAWebBackendErrors",
    "WAWebGroupDatabaseJob",
    "WAWebGroupGetMembershipApprovalRequestsJob",
    "WAWebGroupQueryGroupJob",
    "WAWebGroupsQueryApi",
    "WAWebMexFetchGroupIsInternalJob",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap"
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
    function h() {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebApiParticipantStore").clearAdminshipCache();
            const t = yield o("WASmaxGroupsGetParticipatingGroupsRPC").sendGetParticipatingGroupsRPC({
                hasParticipants: true,
                hasDescription: true
            });
            e: {
                const r = t;
                if ((typeof r === "object" && r !== null || typeof r === "function") && r.name === "GetParticipatingGroupsResponseSuccess" && "value" in r) {
                    const a = r.value;
                    let i = 0;
                    const l = a.groupsGroup.map(({ groupInfoOrTruncatedGroupInfoGroupInfoMixinGroup: t })=>{
                        const n = t.value;
                        if (n.truncated) {
                            i++;
                        }
                        if (n.truncated) {
                            return n;
                        }
                        return o("WAWebGroupsQueryApi").parseGroupSmax(n);
                    });
                    if (i > 0) {
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[get-participating-groups] ",
                            " truncated responses received"
                        ])), i);
                    }
                    return l;
                    break e;
                }
                if ((typeof r === "object" && r !== null || typeof r === "function") && r.name === "GetParticipatingGroupsResponseClientError" && "value" in r) {
                    const c = r.value;
                    const d = c.errorIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup.value;
                    const { code: m, text: p } = d;
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "queryAllGroups failed: ",
                        ":",
                        ""
                    ])), m, p);
                    return (g || (g = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(m), p));
                    break e;
                }
                if ((typeof r === "object" && r !== null || typeof r === "function") && r.name === "GetParticipatingGroupsResponseServerError" && "value" in r) {
                    const _ = r.value;
                    const f = _.errorServerErrors.value;
                    const { code: h, text: y } = f;
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "queryAllGroups failed: ",
                        ":",
                        ""
                    ])), h, y);
                    return (g || (g = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(h), y));
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${r}`);
            }
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WASmaxGroupsGetInviteGroupInfoRPC").sendGetInviteGroupInfoRPC({
                inviteCode: e
            });
            switch(t.name){
                case "GetInviteGroupInfoResponseSuccess":
                    return o("WAWebGroupsQueryApi").parseGroupSmax(t.value.groupInviteLinkGroupInfoMixin);
                case "GetInviteGroupInfoResponseClientError":
                    {
                        const r = t.value.errorGetInviteGroupInfoClientErrors.value;
                        const { code: a, text: i } = r;
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "queryGroupInvite failed: ",
                            ":",
                            ""
                        ])), a, i);
                        return (g || (g = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(a), i));
                    }
                case "GetInviteGroupInfoResponseServerError":
                    {
                        const l = t.value.errorServerErrors.value;
                        const { code: s, text: u } = l;
                        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "queryGroupInvite failed: ",
                            ":",
                            ""
                        ])), s, u);
                        return (g || (g = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(s), u));
                    }
            }
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ actionType: t, id: n, request: r }) {
            const a = r === "enter_group_info" && o("WAWebABProps").getABPropConfigValue("internal_group_indicator");
            const i = a ? o("WAWebMexFetchGroupIsInternalJob").mexFetchGroupIsInternal(n.toString()).catch(()=>{}) : void 0;
            const l = yield o("WAWebGroupQueryGroupJob").queryGroupJob(n, r);
            if (l.status === "success") {
                let s = l.groupInfo;
                if (i != null) {
                    const u = yield i;
                    if (u != null) {
                        s = babelHelpers.extends({}, s, {
                            isInternal: u
                        });
                    }
                }
                const c = yield o("WAWebApiParticipantStore").injectPastParticipantsFromDB([
                    s
                ], t);
                const d = c[0];
                const m = yield o("WAWebApiChat").injectAdditionalEphemeralInfoFromDB([
                    d
                ]);
                const p = m[0];
                yield o("WAWebGroupDatabaseJob").updateGroupParticipantTableWithoutDeviceSyncJob([
                    p
                ]);
                o("WAWebBackendApi").frontendFireAndForget("createOrUpdateGroupMetadataFromQuery", {
                    groupInfo: p
                });
                yield R(p);
            }
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.membershipApprovalMode && e.participants.some((e)=>o("WAWebUserPrefsMeUser").isMeAccount(e.id) && e.isAdmin)) {
                const t = yield o("WAWebApiChatCommon").getChatRecord(e.id);
                if (t) {
                    return o("WAWebGroupGetMembershipApprovalRequestsJob").queryAndUpdateGroupMembershipApprovalRequests(e.id);
                }
                return void 0;
            }
        });
        return L.apply(this, arguments);
    }
    function E(e, t) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = yield o("WASmaxGroupsBatchGetGroupInfoRPC").sendBatchGetGroupInfoRPC({
                queryContext: t,
                groupArgs: e.map((e)=>({
                        groupJid: e
                    }))
            });
            switch(a.name){
                case "BatchGetGroupInfoResponseSuccess":
                    {
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "queryGroupsById: successfully received batch group info for ",
                            ""
                        ])), e.length);
                        const i = [];
                        const l = r("compactMap")(a.value.groupsGroup, function({ groupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup: t }) {
                            if (t.name === "TruncatedGroupInfo") {
                                return t.value;
                            }
                            if (t.name === "GroupInfo") {
                                return o("WAWebGroupsQueryApi").parseGroupSmax(t.value);
                            }
                            t.name;
                            i.push(t.value);
                        });
                        if (i.length > 0) {
                            o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "[batch-group-info] ",
                                " forbidden/not-exist groups"
                            ])), i.length);
                            yield (g || (g = n("Promise"))).all(i.map((e)=>{
                                const t = o("WAWebWidFactory").createWid(`${e.id}@g.us`);
                                return o("WAWebGroupQueryGroupJob").handleGroupInfoError(t, new (o("WAWebBackendErrors")).ServerStatusCodeError(parseInt(e.error, 10)));
                            }));
                        }
                        return l;
                    }
                case "BatchGetGroupInfoResponseClientError":
                    {
                        const s = a.value.errorBatchGetGroupInfoClientErrors.value;
                        const { code: u, text: c } = s;
                        o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "queryGroupsById failed: ",
                            ":",
                            ""
                        ])), u, c);
                        return (g || (g = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(u), c));
                    }
                case "BatchGetGroupInfoResponseServerError":
                    {
                        const d = a.value.errorServerErrors.value;
                        const { code: h, text: y } = d;
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "queryGroupsById failed: ",
                            ":",
                            ""
                        ])), h, y);
                        return (g || (g = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(h), y));
                    }
            }
        });
        return k.apply(this, arguments);
    }
    l.queryAllGroups = h;
    l.queryGroupInvite = C;
    l.queryAndUpdateGroupMetadataById = v;
    l.maybeQueryAndUpdateMembershipApprovalRequests = R;
    l.queryGroupsById_DO_NOT_USE_DIRECTLY = E;
}, 98);