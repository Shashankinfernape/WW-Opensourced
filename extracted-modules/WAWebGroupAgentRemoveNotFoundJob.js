__d("WAWebGroupAgentRemoveNotFoundJob", [
    "WATimeUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupType",
    "WAWebGroupsParticipantsApi",
    "WAWebHandleGroupNotificationAction",
    "WAWebMessageQueue",
    "WAWebMexFetchGroupInfoIncludBotsJob",
    "WAWebMsgKey",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = "404";
    function s(t) {
        const n = t.participants.filter(({ code, userWid })=>code === e && o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(userWid)).map(({ userWid })=>userWid);
        if (n.length === 0 || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
            return [];
        }
        return n;
    }
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, isLidAddressingMode) {
            const i = yield o("WAWebMexFetchGroupInfoIncludBotsJob").mexGetGroupInfoIncludBots({
                groupId: e.toString(),
                queryContext: "out_of_sync_update"
            });
            const l = i?.groupInfo;
            if (!(l == null || i?.participantPhashMatch === true)) {
                const s = new Set(l.participants.map(({ id })=>id.toString()));
                const u = t.filter((e)=>!s.has(e.toString()));
                if (u.length !== 0) {
                    yield o("WAWebMessageQueue").onMessageQueue({
                        chatWid: e,
                        isOffline: false,
                        msgCategory: null,
                        action: (()=>{
                            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                                const t = yield d(e);
                                const n = u.filter((e)=>t.has(e.toString()));
                                if (n.length !== 0) {
                                    const i = {
                                        actionType: o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                                        participants: n.map((e)=>({
                                                id: e,
                                                isAdmin: false,
                                                isSuperAdmin: false
                                            })),
                                        reason: null,
                                        isLidAddressingMode
                                    };
                                    const l = {
                                        externalId: yield r("WAWebMsgKey").newId(),
                                        chatId: e,
                                        author: null,
                                        authorPhoneNumber: null,
                                        ts: o("WATimeUtils").unixTime(),
                                        pushname: null,
                                        actions: [
                                            i
                                        ],
                                        offline: null,
                                        isLidAddressingMode,
                                        hasIncompleteParticipantInformation: false
                                    };
                                    yield o("WAWebHandleGroupNotificationAction").handleAction({
                                        action: i,
                                        meta: l
                                    });
                                    yield p(e, n);
                                }
                            });
                            function i() {
                                return t.apply(this, arguments);
                            }
                            return i;
                        })()
                    });
                }
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return new Set((yield o("WAWebGroupsParticipantsApi").getParticipants(e))?.participants ?? []);
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield d(e);
            if (t.some((e)=>n.has(e.toString()))) {
                throw r("err")("removeDepartedGroupAgents: stored participants list the agent");
            }
        });
        return _.apply(this, arguments);
    }
    l.getNotFoundGroupAgentWids = s;
    l.removeDepartedGroupAgents = u;
}, 98);