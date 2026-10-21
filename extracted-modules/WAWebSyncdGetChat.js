__d("WAWebSyncdGetChat", [
    "$InternalEnum",
    "WAJids",
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebHistorySyncLidChatGating",
    "WAWebLid1X1MigrationGating",
    "WAWebSchemaChat",
    "WAWebSyncdConst",
    "WAWebWid",
    "WAWebWidFactory",
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
    let _;
    let f;
    let g;
    const h = n("$InternalEnum")({
        GetArchiveChatMutation: "getArchiveChatMutation",
        GetClearChatMutation: "getClearChatMutation",
        GetPinMutation: "getPinMutation"
    });
    function y(t, n) {
        if (n.isRegularUserPn() && o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: ",
                ": unexpected PN chat input with isForcedHistoryLidChat enabled ",
                ""
            ])), t, n.toLogString());
        }
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ sendLogs = true, skipDb = false }) {
            try {
                const l = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat();
                if (!l) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[history lid chat] chatDistribution: skipped, isForcedHistoryLidChat is disabled"
                    ])));
                    return;
                }
                let m = null;
                if (!skipDb) {
                    let p = 0;
                    const _ = yield o("WAWebSchemaChat").getChatTable().allPrimaryKeys();
                    for (const f of _){
                        if (r("WAWebWid").isRegularUserNoImply(f) && !r("WAWebWid").isStringLid(f)) {
                            p++;
                        }
                    }
                    m = p;
                }
                const g = yield o("WAWebBackendApi").frontendSendAndReceive("getChatModelsArray", {});
                const h = yield g;
                let y = 0;
                for (const C of h){
                    if (C.id.isRegularUserPn()) {
                        y++;
                    }
                }
                if (m != null && m > 0 || y > 0) {
                    const b = o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[history lid chat] chatDistribution: found PN chats with isForcedHistoryLidChat enabled. db: pnCount=",
                        " collection: pnCount=",
                        ""
                    ])), m ?? "n/a", y);
                    if (sendLogs) {
                        b.sendLogs("syncd-pn-chats-with-forced-lid");
                    }
                } else {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[history lid chat] chatDistribution: completed, no error reported"
                    ])));
                }
            } catch (error) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[history lid chat] logLidPnChatDistribution: failed ",
                    ""
                ])), error);
            }
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && e.isLid()) {
                let t;
                const n = yield o("WAWebSchemaChat").getChatTable().equals([
                    "accountLid"
                ], e.toString(), {
                    shouldDecrypt: false
                });
                if (n.length > 0) {
                    t = n[0];
                }
                if (t == null) {
                    return {
                        success: false,
                        orphanModel: {
                            modelId: e.toString(),
                            modelType: o("WAWebSyncdConst").SyncModelType.Account
                        }
                    };
                }
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: resolveChatForMutationIndex: found chat using accountLid query ",
                    ""
                ])), e.toLogString());
                return {
                    success: true,
                    chat: t
                };
            }
            if (o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() && e.isRegularUserPn()) {
                const r = yield o("WAWebApiChatCommon").getChatRecordByHistoryChatId(o("WAJids").unsafeCoerceToPhoneUserJid(e.toString()));
                if (r != null) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: resolveChatForMutationIndex: found chat using historyChatId query ",
                        ""
                    ])), e.toLogString());
                    return {
                        success: true,
                        chat: r
                    };
                }
                return {
                    success: false,
                    orphanModel: {
                        modelId: e.toString(),
                        modelType: o("WAWebSyncdConst").SyncModelType.Chat
                    }
                };
            }
            const a = yield o("WAWebSchemaChat").getChatTable().get(e.toString(), false);
            if (a == null) {
                return {
                    success: false,
                    orphanModel: {
                        modelId: e.toString(),
                        modelType: o("WAWebSyncdConst").SyncModelType.Chat
                    }
                };
            }
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: resolveChatForMutationIndex: found chat using chatId query ",
                ""
            ])), e.toLogString());
            return {
                success: true,
                chat: a
            };
        });
        return S.apply(this, arguments);
    }
    function R(e, t) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!e.isRegularUser()) {
                return e.toJid();
            }
            const n = yield I(e);
            if (n == null) {
                yield C({
                    sendLogs: false,
                    skipDb: true
                });
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: getChatJidMutationIndexForChat: chat not found for action ",
                    " ",
                    ". is force lid chat enabled? ",
                    ""
                ])), t, e.toLogString(), o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()).sendLogs("syncd-missing-chat-outgoing-mutation");
                throw r("err")("syncd-missing-chat-outgoing-mutation");
            }
            return n;
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!e.isRegularUser()) {
                return e.toJid();
            }
            const t = yield I(e);
            if (t != null) {
                return t;
            }
            const n = o("WAWebApiContact").getCurrentLid(o("WAWebWidFactory").asUserWidOrThrow(e));
            if (n != null) {
                return n.toJid();
            }
            return e.toJid();
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() || e.isLid()) {
                return e.toJid();
            }
            const t = yield o("WAWebSchemaChat").getChatTable().get(e.toString(), false);
            if (t != null) {
                const n = t.accountLid;
                if (n == null) {
                    o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: getChatJidMutationIndexForChatImpl: accountLid not found in chat row}"
                    ]))).sendLogs("syncd-missing-accountLid-outgoing-mutation");
                    throw r("err")("syncd-missing-accountLid-outgoing-mutation");
                }
                return n;
            }
        });
        return T.apply(this, arguments);
    }
    l.PnMutationCaller = h;
    l.warnIfPnMutationWithForcedLid = y;
    l.logLidPnChatDistribution = C;
    l.resolveChatForMutationIndex = v;
    l.getChatJidMutationIndexForChat = R;
    l.getWidMutationIndexForWid = E;
}, 98);