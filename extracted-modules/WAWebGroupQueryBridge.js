__d("WAWebGroupQueryBridge", [
    "WALogger",
    "WATypeUtils",
    "WAWebBackendApi",
    "WAWebBackendErrors",
    "WAWebGroupQueryGroupJob",
    "WAWebGroupQueryJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "querying server for groupMetadata of group id ",
                ""
            ])), t.toLogString()).tags("groups");
            const n = o("WAWebGroupQueryGroupJob").queryGroupJob(t, "out_of_sync_update");
            try {
                const r = yield n;
                if (r.status === "success") {
                    const R = r.groupInfo;
                    m(t, R.subject);
                    p(t, R.isLidAddressingMode ?? true);
                    return {
                        id: R.id,
                        owner: R.owner,
                        creation: R.creation,
                        subject: R.subject,
                        desc: R.desc,
                        descId: R.descId,
                        descOwner: R.descOwner,
                        descTime: R.descTime,
                        restrict: R.restrict ?? false,
                        announce: R.announce ?? false,
                        noFrequentlyForwarded: R.noFrequentlyForwarded ?? false,
                        ephemeralDuration: R.ephemeralDuration ?? 0,
                        membershipApprovalMode: R.membershipApprovalMode,
                        participants: R.participants,
                        support: R.support ?? false,
                        suspended: R.suspended ?? false,
                        terminated: R.terminated ?? false,
                        parentGroup: R.parentGroup,
                        isParentGroup: R.isParentGroup ?? false,
                        isParentGroupClosed: R.isParentGroupClosed ?? false,
                        defaultSubgroup: R.defaultSubgroup ?? false,
                        generalSubgroup: R.generalSubgroup ?? false,
                        isLidAddressingMode: R.isLidAddressingMode ?? true,
                        allowNonAdminSubGroupCreation: R.allowNonAdminSubGroupCreation,
                        generalChatAutoAddDisabled: R.generalChatAutoAddDisabled,
                        hiddenSubgroup: R.hiddenSubgroup ?? false,
                        groupSafetyCheck: R.groupSafetyCheck ?? false
                    };
                } else if (r.status === "terminated_local" || r.status === "terminated" || r.status === "not_member") {
                    return {
                        id: t,
                        stale: false
                    };
                }
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Store:GroupMetadata Unexpected server response"
                ])));
            } catch (e) {
                if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError && e.status >= 400) {
                    return {
                        id: t,
                        stale: false
                    };
                }
                throw e;
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return o("WAWebGroupQueryJob").queryGroupInvite(e).then((e)=>({
                status: 200,
                groupInfo: e
            }));
    }
    function m(e, t) {
        if (o("WATypeUtils").isString(t)) {
            o("WAWebBackendApi").frontendFireAndForget("updateGroupSubject", {
                id: e,
                subject: t
            });
        }
    }
    function p(e, t) {
        o("WAWebBackendApi").frontendFireAndForget("updateGroupAddressingMode", {
            id: e,
            isLidAddressingMode: t
        });
    }
    l.sendQueryGroup = u;
    l.sendQueryGroupInvite = d;
    l.updateSubject = m;
}, 98);