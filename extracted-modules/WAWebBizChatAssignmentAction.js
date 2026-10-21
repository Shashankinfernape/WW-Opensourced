__d("WAWebBizChatAssignmentAction", [
    "Promise",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAgentCollection",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizChatAssignmentOpenedAction",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentGatingUtils",
    "WAWebChatAssignmentLogEvents",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatAssignmentModel",
    "WAWebChatAssignmentSync",
    "WAWebChatAssignmentSystemMsg",
    "WAWebChatAssignmentUtils",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMobilePlatforms",
    "WAWebNotificationController",
    "WAWebNotificationsChatAssignmentNotification",
    "WAWebSchemaChatAssignment",
    "WAWebSyncdCoreApi",
    "WAWebSyncdOrphan",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStore",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (o("WAWebChatAssignmentUtils").canAssignChats()) {
                const n = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId();
                const a = e.map((e)=>{
                    const r = e.chat.id.toString({
                        legacy: true
                    });
                    const e_agentId = e.agentId;
                    const i = o("WAWebAgentCollection").AgentCollection.getByDeviceId(n);
                    const chatOpenedByAgent = i?.deviceId === n && t !== o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.MULTI_SELECT && t !== o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.CONTACT_INFO_SCREEN;
                    return {
                        id: `${r}_${e_agentId || ""}`,
                        chatId: r,
                        agentId: e_agentId ?? "",
                        chatOpenedByAgent
                    };
                });
                const i = e.map((e)=>e.chat.assignedAgent != null);
                yield o("WAWebSyncdCoreApi").lockForSync([
                    "chat-assignment"
                ], (yield r("WAWebChatAssignmentSync").createChatAssignmentMutations(a)), function() {
                    return d(a);
                });
                e.forEach((n, r)=>{
                    o("WAWebChatAssignmentLogEvents").logChatAssignment(n.chat, n.agentId ?? "", i[r], t, e.length);
                });
                p(e.map(({ agentId, chat })=>{
                    const agent = o("WAWebAgentCollection").AgentCollection.get(agentId ?? "");
                    return {
                        chatId: chat.id,
                        agent,
                        timestamp: o("WATimeUtils").unixTime()
                    };
                }));
                r("WAWebUserPrefsStore").setUser("chat_assignment_agent_has_assigned_chats", true);
                a.filter(({ chatOpenedByAgent })=>chatOpenedByAgent === true).forEach((e)=>{
                    const t = o("WAWebChatCollection").ChatCollection.get(e.chatId);
                    if (t != null) {
                        o("WAWebBizChatAssignmentOpenedAction").markChatAsOpened(t);
                    }
                });
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getModelsArray().filter(({ chatId })=>e.includes(chatId)).map((e)=>e.id);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = c(t.map(({ chatId })=>chatId));
            const a = t.map(({ agentId, chatId, chatOpenedByAgent, id })=>new (o("WAWebChatAssignmentModel")).ChatAssignment({
                    id,
                    chatId,
                    agentId,
                    chatOpenedByAgent,
                    agent: o("WAWebAgentCollection").AgentCollection.get(agentId)
                }));
            o("WAWebChatAssignmentCollection").ChatAssignmentCollection.remove(r);
            o("WAWebChatAssignmentCollection").ChatAssignmentCollection.add(a);
            const i = o("WAWebSchemaChatAssignment").getChatAssignmentTable();
            yield (e || (e = n("Promise"))).all([
                i.bulkRemove(r),
                i.bulkCreateOrMerge(t)
            ]);
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        if (o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled()) {
            e.forEach(({ agent, chatId, timestamp })=>{
                const a = o("WAWebChatCollection").ChatCollection.get(chatId);
                if (!(a != null && o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(a))) {
                    o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                        chatId,
                        newMsg: o("WAWebChatAssignmentSystemMsg").genChatAssignmentNotificationTemplateMsg(chatId, agent, timestamp),
                        handleSingleMsgOrigin: "chatAssignmentSystemMsg"
                    }).then(()=>{
                        if (a != null) {
                            o("WAWebChatAssignmentLogEvents").logSystemMessageGeneratedFromCompanion(a);
                        }
                    }).catch(()=>{
                        if (a != null) {
                            o("WAWebChatAssignmentLogEvents").logSystemMessageFailedToGenerate(a);
                        }
                    });
                }
            });
        }
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebMobilePlatforms").isSMB()) {
                const t = c([
                    e.toString({
                        legacy: true
                    })
                ]);
                yield o("WAWebSchemaChatAssignment").getChatAssignmentTable().bulkRemove(t);
                o("WAWebChatAssignmentCollection").ChatAssignmentCollection.remove(t);
            }
        });
        return f.apply(this, arguments);
    }
    function g() {
        o("WAWebCmd").Cmd.once("app_state_sync_completed_from_bridge", function() {
            o("WAWebSyncdOrphan").checkOrphanAgents(o("WAWebAgentCollection").AgentCollection.getModelsArray().map(({ id })=>id));
            o("WAWebSyncdOrphan").checkOrphanChatAssignments(o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getModelsArray().map(({ id })=>id));
        });
    }
    function h(e, assignmentTimestamps) {
        if (!(!o("WAWebABProps").getABPropConfigValue("smb_md_agent_chat_assignment_notifications_enabled") || !o("WAWebChatAssignmentUtils").canAssignChats())) {
            const n = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId();
            const r = e.filter((e)=>{
                const t = o("WAWebAgentCollection").AgentCollection.get(e.agentId);
                return t?.deviceId === n;
            });
            if (r.length !== 0) {
                o("WAWebNotificationController").WANotificationController.triggerNotification(new (o("WAWebNotificationsChatAssignmentNotification")).WAWebNotificationsChatAssignmentNotification({
                    chats: r.map((e)=>o("WAWebWidFactory").createWid(e.chatId)),
                    assignmentTimestamps
                }));
            }
        }
    }
    l.changeChatAssignment = s;
    l.createChatAssignmentSystemMsgs = p;
    l.removeChatAssignmentsForChat = _;
    l.checkOrphanAssignments = g;
    l.triggerChatAssignmentNotification = h;
}, 98);