__d("WAWebBizAgentAction", [
    "WATimeUtils",
    "WAWebAgentCollection",
    "WAWebAgentModelUtils",
    "WAWebBizAgentLoginState",
    "WAWebChatAssignmentGatingUtils",
    "WAWebCmd",
    "WAWebMdExpansionAgentBrowserMdIdWamEvent",
    "WAWebMiscBrowserUtils",
    "WAWebMsgCollection",
    "WAWebSchemaAgent",
    "WAWebSchemaMessage",
    "WAWebUnattributedMessageCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMultideviceActionType",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return e.author.user !== o("WAWebUserPrefsMeUser").getMaybeMePnUser()?.user;
    }
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (!(e(t) || !o("WAWebAgentModelUtils").canUserSeeMessageAttribution())) {
                const deviceId = t.author.getDeviceId();
                const i = o("WAWebAgentCollection").AgentCollection.getByDeviceId(deviceId);
                if (i == null) {
                    const l = n.map((e)=>({
                            id: e.id.toString(),
                            deviceId
                        }));
                    o("WAWebUnattributedMessageCollection").UnattributedMessageCollection.add(l);
                    return;
                }
                const s = r("compactMap")(n, function(e) {
                    return o("WAWebMsgCollection").MsgCollection.get(e.id);
                }).filter((e)=>e.agentId == null);
                const u = String(i.id);
                s.forEach((e)=>{
                    e.agentId = u;
                });
                const c = s.map((e)=>{
                    const t = e.id.toString();
                    return {
                        id: t,
                        agentId: u
                    };
                });
                yield o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(c);
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        if (e.agentId != null || !o("WAWebAgentModelUtils").canUserSeeMessageAttribution()) {
            return e.agentId;
        }
        const t = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
        if (t != null) {
            const n = o("WAWebAgentCollection").AgentCollection.getByDeviceId(t.getDeviceId());
            if (n != null) {
                return n.id;
            }
        }
    }
    let d;
    function m(e, t = false) {
        if (o("WAWebChatAssignmentGatingUtils").isMultiDeviceMessageAttributionEnabled()) {
            new (o("WAWebMdExpansionAgentBrowserMdIdWamEvent")).MdExpansionAgentBrowserMdIdWamEvent(babelHelpers.extends({
                agentId: d
            }, e)).commitAndWaitForFlush(t).catch((e)=>{});
        }
    }
    function p(e) {
        const t = o("WAWebBizAgentLoginState").getAgentLoginPayload();
        if (t != null) {
            m(babelHelpers.extends({}, e, t, {
                multideviceAction: o("WAWebWamEnumMultideviceActionType").MULTIDEVICE_ACTION_TYPE.LOGIN
            }));
        }
    }
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebChatAssignmentGatingUtils").isMultiDeviceMessageAttributionEnabled()) {
                const e = yield o("WAWebSchemaAgent").getAgentTable().all();
                o("WAWebAgentCollection").AgentCollection.initializeFromCache(e);
            }
        });
        return f.apply(this, arguments);
    }
    function g() {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield _();
            if (o("WAWebChatAssignmentGatingUtils").isMultiDeviceMessageAttributionEnabled()) {
                const companionMdId = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId();
                const t = r("WAWebMiscBrowserUtils").persistentExpiringId();
                o("WAWebCmd").Cmd.on("logout_from_bridge", function() {
                    m({
                        browserId: t,
                        companionMdId,
                        logoutTimestamp: o("WATimeUtils").unixTimeWithoutClockSkewCorrection(),
                        multideviceAction: o("WAWebWamEnumMultideviceActionType").MULTIDEVICE_ACTION_TYPE.LOGOUT
                    }, true);
                });
                document.addEventListener("visibilitychange", function() {
                    if (!document.hidden) {
                        m({
                            browserId: t,
                            companionMdId,
                            multideviceAction: o("WAWebWamEnumMultideviceActionType").MULTIDEVICE_ACTION_TYPE.ACTIVE
                        });
                    }
                });
                const n = o("WAWebAgentCollection").AgentCollection.getByDeviceId(companionMdId);
                if (n != null) {
                    d = n.id;
                    p({
                        browserId: t,
                        companionMdId
                    });
                } else {
                    o("WAWebCmd").Cmd.on("app_state_sync_completed_from_bridge", function() {
                        const n = o("WAWebAgentCollection").AgentCollection.getByDeviceId(companionMdId);
                        if (n?.id != null && d == null) {
                            d = n.id;
                            p({
                                browserId: t,
                                companionMdId
                            });
                        }
                    });
                }
            }
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        const t = e != null ? o("WAWebAgentCollection").AgentCollection.get(e) : undefined;
        const n = r("WAWebMiscBrowserUtils").persistentExpiringId();
        m({
            browserId: n,
            agentId: t?.id,
            companionMdId: t?.deviceId,
            multideviceAction: o("WAWebWamEnumMultideviceActionType").MULTIDEVICE_ACTION_TYPE.MESSAGE_INFO
        });
    }
    l.updateUnattributedMessages = s;
    l.getAgentId = c;
    l.initializeAgentLog = g;
    l.logMessageInfo = y;
}, 98);