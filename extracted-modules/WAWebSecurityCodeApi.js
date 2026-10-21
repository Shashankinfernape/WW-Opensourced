__d("WAWebSecurityCodeApi", [
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebContactSystemMsg",
    "WAWebDBEncryptMultipleMsgs",
    "WAWebDBStoreEncryptedMsgs",
    "WAWebGetMessageCache",
    "WAWebSchemaChat",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "WAWebUserPrefsNotifications",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ offline: n, stanzaLid: r, user: a }) {
            if (!a.isBot()) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "addSecurityCodeChangedNotifications"
                ])));
                let i = null;
                if (a.isLid()) {
                    i = o("WAWebApiContact").getPnIfLidIsLatestMapping(a);
                } else if (a.isRegularUser() && r != null) {
                    i = r;
                }
                const l = yield d(a, i);
                let s = l.notifications;
                const u = l.chatIds;
                if (s.length !== 0) {
                    if (!n) {
                        s = s.map((e)=>babelHelpers.extends({}, e, {
                                recvFresh: true,
                                isNewMsg: true
                            }));
                        for (const c of s){
                            o("WAWebBackendApi").frontendFireAndForget("processMultipleMessages", {
                                chatId: c.from,
                                msgObjs: [
                                    c
                                ],
                                meta: {
                                    add: "after",
                                    isHistory: false
                                },
                                processMessagesOrigin: "securityCodeApi"
                            });
                        }
                        const m = yield o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(s);
                        yield o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(m, u, false);
                        return l;
                    }
                    o("WAWebGetMessageCache").getMessageCache().addMessages(s.map((e)=>({
                            msg: e
                        })), false);
                    return l;
                }
            }
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = {
                notifications: [],
                chatIds: []
            };
            const a = t == null ? [
                e
            ] : [
                e,
                t
            ];
            if (!o("WAWebUserPrefsNotifications").getGlobalSecurityNotifications()) {
                return n;
            }
            const i = [];
            try {
                const l = (yield o("WAWebSchemaChat").getChatTable().bulkGet(a.map((e)=>e.toString()), false)).filter(Boolean);
                i.push(...l.map((e)=>({
                        chatId: o("WAWebWidFactory").createWid(e.id),
                        codeChangedUser: o("WAWebWidFactory").createUserWidOrThrow(e.id)
                    })));
                const u = yield o("WAWebSchemaParticipant").getParticipantTable().anyOf([
                    "participants"
                ], a.map(String));
                const c = new Map;
                if (u.length > 0) {
                    const d = u.map((e)=>e.groupId);
                    (yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().bulkGet(d)).forEach((e)=>{
                        if (e != null) {
                            c.set(e.id, e);
                        }
                    });
                }
                u.forEach((t)=>{
                    const n = c.get(t.groupId);
                    if (!(n?.defaultSubgroup && e.isLid())) {
                        i.push({
                            chatId: o("WAWebWidFactory").createWid(t.groupId),
                            codeChangedUser: e
                        });
                    }
                });
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "get chats failed"
                ]))).verbose().sendLogs("get chats failed when creating device notification");
                throw r("err")("get chats failed");
            }
            const m = i.map(({ chatId: t, codeChangedUser: n })=>o("WAWebContactSystemMsg").genSecurityCodeNotificationMsg(t, n));
            n.notifications = m;
            n.chatIds = i.map(({ chatId: t })=>t.toString());
            return n;
        });
        return m.apply(this, arguments);
    }
    l.addSecurityCodeChangedNotifications = u;
    l.generateSecurityCodeChangedNotifications = d;
}, 98);