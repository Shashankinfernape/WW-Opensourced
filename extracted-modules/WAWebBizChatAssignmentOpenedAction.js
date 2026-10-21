__d("WAWebBizChatAssignmentOpenedAction", [
    "WAWebAgentCollection",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentOpenedStatusSync",
    "WAWebChatAssignmentUtils",
    "WAWebSchemaChatAssignment",
    "WAWebSyncdCoreApi",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            e.forEach(({ chatOpenedByAgent, id })=>{
                const r = o("WAWebChatAssignmentCollection").ChatAssignmentCollection.get(id);
                if (r) {
                    r.set("chatOpenedByAgent", chatOpenedByAgent);
                }
            });
            const t = o("WAWebSchemaChatAssignment").getChatAssignmentTable();
            yield t.bulkCreateOrMerge(e);
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (o("WAWebChatAssignmentUtils").canAssignChats()) {
                const a = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId();
                const i = t.id;
                const l = o("WAWebAgentCollection").AgentCollection.getByDeviceId(a)?.id;
                if (l != null) {
                    const s = [
                        {
                            chatId: i,
                            agentId: l
                        }
                    ];
                    const u = s.map((e)=>{
                        const t = e.chatId.toString({
                            legacy: true
                        });
                        return {
                            id: `${t}_${l}`,
                            chatId: t,
                            agentId: l,
                            chatOpenedByAgent: true
                        };
                    });
                    yield o("WAWebSyncdCoreApi").lockForSync([
                        "chat-assignment"
                    ], (yield r("WAWebChatAssignmentOpenedStatusSync").createChatOpenedMutations(u)), function() {
                        return e(u);
                    });
                }
            }
        });
        return c.apply(this, arguments);
    }
    l.updateLocalOpenedState = e;
    l.markChatAsOpened = u;
}, 98);