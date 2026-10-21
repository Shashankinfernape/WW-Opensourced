__d("WAWebFindChat", [
    "WAAbortError",
    "WALogger",
    "WAWebApiContact",
    "WAWebBotUtils",
    "WAWebChatFindBridge",
    "WAWebCheckChatExistsOrCreate",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebMaibaWASSMigration",
    "WAWebMessageProcessUtils",
    "WAWebSyncContactJob",
    "WAWebUsernameTypes",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t != null) {
                return t(e);
            }
            return o("WAWebChatFindBridge").findLocal(e.toString());
        });
        return f.apply(this, arguments);
    }
    function g(e, t, n) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = e.equals(o("WAWebBotUtils").META_BOT_FBID_WID) ? o("WAWebBotUtils").META_BOT_PN_WID : o("WAWebMaibaWASSMigration").resolveMaibaAiHubFbidToLidOrChatId(e);
            const i = n ?? {};
            const i_getExistingChat = i.getExistingChat;
            if (!r("WAWebWid").isUser(a)) {
                return y(a, t, n).then(({ chat })=>chat);
            }
            const s = yield _(a, i_getExistingChat);
            return s || y(a, t, n).then(({ chat })=>chat);
        });
        return h.apply(this, arguments);
    }
    function y(e, t, n) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, chatOriginType, a) {
            const i = t.equals(o("WAWebBotUtils").META_BOT_FBID_WID) ? o("WAWebBotUtils").META_BOT_PN_WID : o("WAWebMaibaWASSMigration").resolveMaibaAiHubFbidToLidOrChatId(t);
            let destinationChat = {
                chatId: i
            };
            if (i.isRegularUser()) {
                if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[findOrCreateLatestChat] migration rules chat=",
                        " origin=",
                        ""
                    ])), destinationChat.chatId.toLogString(), chatOriginType);
                    let f = o("WAWebLidMigrationUtils").toUserLid(i);
                    if (f == null) {
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[findOrCreateLatestChat] id->lid failed ",
                            ""
                        ])), chatOriginType).sendLogs("findOrCreateLatestChat_lid_not_found", {
                            sampling: 0.01
                        });
                        yield o("WAWebSyncContactJob").syncContactListJob([
                            i
                        ], true, "query");
                        f = o("WAWebLidMigrationUtils").toUserLidOrThrow(i);
                    }
                    destinationChat = yield o("WAWebMessageProcessUtils").selectChatForOneOnOneMessage({
                        lid: f
                    });
                } else if (i.isLid()) {
                    const g = yield _(destinationChat.chatId, a?.getExistingChat);
                    if (g == null) {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[findOrCreateLatestChat] pre-migration chat=",
                            " origin=",
                            ""
                        ])), destinationChat.chatId.toLogString(), chatOriginType);
                        const h = o("WAWebApiContact").getPhoneNumber(i);
                        if (h == null) {
                            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[findOrCreateLatestChat] phone not found for lid ",
                                ""
                            ])), chatOriginType).sendLogs("findOrCreateLatestChat: could not find phone number for lid while enforcing pre-migration rules");
                            throw r("err")("findOrCreateLatestChat: could not find phone number for lid while enforcing pre-migration rules");
                        }
                        destinationChat = {
                            chatId: h
                        };
                    }
                }
            }
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[findOrCreateLatestChat] selected chat=",
                " origin=",
                ""
            ])), destinationChat.chatId.toLogString(), chatOriginType);
            const y = a ?? {};
            const { forceUsync, getExistingChat, isGroupJoin, nextPrivacyMode, signal } = y;
            if (signal != null && signal.aborted) {
                throw new (o("WAAbortError")).AbortError;
            }
            const L = yield _(destinationChat.chatId, getExistingChat);
            if (L) {
                return {
                    chat: L,
                    created: false
                };
            }
            const initialProps = {
                createdLocally: true
            };
            if (isGroupJoin === true) {
                initialProps.notSpam = true;
            }
            const l_chatId = destinationChat.chatId;
            if (l_chatId.isLid()) {
                initialProps.lidOriginType = o("WAWebUsernameTypes").LidOriginType.GENERAL;
                if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "findOrCreateLatestChat will create Lid chat for origin ",
                        ""
                    ])), chatOriginType).sendLogs("findOrCreateLatestChat will create Lid chat");
                }
            }
            const I = yield o("WAWebCheckChatExistsOrCreate").checkChatExistsOrCreate({
                destinationChat,
                msgMeta: null,
                chatOriginType,
                initialProps,
                options: {
                    forceUsync,
                    nextPrivacyMode
                }
            });
            const T = yield _(destinationChat.chatId, getExistingChat);
            if (T == null) {
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "findOrCreateLatestChat: new chat not found ",
                    ""
                ])), destinationChat.chatId?.toLogString()).sendLogs("findOrCreateLatestChat-new-chat-not-found");
                throw r("err")(`findChat: new chat not found ${destinationChat.chatId?.toLogString()}`);
            }
            return {
                chat: T,
                created: !I
            };
        });
        return C.apply(this, arguments);
    }
    l.findExistingChat = g;
    l.findOrCreateLatestChat = y;
}, 98);