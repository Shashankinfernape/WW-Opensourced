__d("WAWebHandleAddChats", [
    "Promise",
    "WALogger",
    "WALongInt",
    "WAPromiseDelays",
    "WAWebBackendApi",
    "WAWebBlocklistMigration",
    "WAWebChatConstants",
    "WAWebCollectionConstants",
    "WAWebConnModel",
    "WAWebCoreActionsODS",
    "WAWebDBChatValidation",
    "WAWebLid1X1MigrationGating",
    "WAWebLogoutReasonConstants",
    "WAWebMobilePlatforms",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebSocketLogoutJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isEmptyIterable"
], function(t, n, r, o, a, i, l) {
    const e = [
        "accountLid",
        "disappearingModeInitiator",
        "disappearingModeTrigger",
        "pendingInitialLoading"
    ];
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(e) {
        return {
            ephemeralSettingTimestamp: o("WALongInt").maybeNumberOrThrowIfTooLarge(e.ephemeralSettingTimestamp),
            tcTokenSenderTimestamp: o("WALongInt").maybeNumberOrThrowIfTooLarge(e.tcTokenSenderTimestamp),
            tcTokenTimestamp: o("WALongInt").maybeNumberOrThrowIfTooLarge(e.tcTokenTimestamp)
        };
    }
    function _(e) {
        if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
            try {
                const t = e.filter((e)=>e.id.isRegularUser() && e.accountLid == null);
                if (t.length > 0) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "handleAddChats: no account_lid for ",
                        " chats. first: ",
                        ""
                    ])), t.length, t[0].id.toLogString()).sendLogs("add-chats-no-account-lid").tags("missing-lid");
                }
            } catch (e) {}
        }
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "handleAddChats: ",
                " chats"
            ])), t.length);
            _(t);
            try {
                yield o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(t.map((t)=>{
                    const { accountLid, disappearingModeInitiator, disappearingModeTrigger, pendingInitialLoading } = t;
                    const l = babelHelpers.objectWithoutPropertiesLoose(t, e);
                    const s = babelHelpers.extends({}, l, {
                        id: t.id.toString(),
                        muteExpiration: 0,
                        isAutoMuted: false
                    }, p(l), {
                        endOfHistoryTransferType: t.endOfHistoryTransferType
                    });
                    if (accountLid != null) {
                        s.accountLid = accountLid.toString();
                    }
                    if (disappearingModeInitiator != null) {
                        s.disappearingModeInitiator = disappearingModeInitiator;
                    }
                    if (disappearingModeTrigger != null) {
                        s.disappearingModeTrigger = disappearingModeTrigger;
                    }
                    o("WAWebDBChatValidation").validateAccountLidInChatRow(s, "handleAddChats");
                    return s;
                }));
            } catch (error) {
                yield h(r("getErrorSafe")(error), t);
            }
            yield o("WAWebBackendApi").frontendSendAndReceive("chatCollectionAdd", {
                things: t.map((e)=>babelHelpers.extends({}, e, {
                        accountLid: e.accountLid ?? undefined,
                        historyChatId: e.historyChatId ?? undefined
                    }, p(e), {
                        endOfHistoryTransferType: o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.cast(e.endOfHistoryTransferType)
                    })),
                options: {
                    merge: true
                }
            });
            if (o("WAWebBlocklistMigration").applyBlocklistV2Rules()) {
                yield o("WAWebBackendApi").frontendSendAndReceive("restoreBlocklist");
            }
            if (o("WAWebConnModel").Conn.platform === o("WAWebMobilePlatforms").PLATFORMS.IPHONE || o("WAWebConnModel").Conn.platform === o("WAWebMobilePlatforms").PLATFORMS.SMBI) {
                if (r("isEmptyIterable")(t)) {
                    o("WAWebBackendApi").frontendFireAndForget("msgCollectionTrigger", {
                        name: o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED
                    });
                } else {
                    self.setTimeout(function() {
                        o("WAWebBackendApi").frontendFireAndForget("msgCollectionTrigger", {
                            name: o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED
                        });
                    }, 2500);
                }
            }
            o("WAWebBackendApi").frontendFireAndForget("chatCollectionTrigger", {
                name: o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED,
                args: {
                    count: t.length
                }
            });
        });
        return g.apply(this, arguments);
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            yield C(t);
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "handleAddChats: bulkCreateOrMerge failed: is lid migrated: ",
                ""
            ])), o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()).catching(e).sendLogs("fail-to-add-chats-history-sync", {
                sendLogsType: o("WALogger").SendLogsType.USER_FORCEFULLY_LOGGED_OUT_SAD
            });
            yield o("WAPromiseDelays").delayMs(5000);
            o("WAWebCoreActionsODS").logSessionForcedLogout();
            return o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.WebFailAddChat);
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaChat").getChatTable().all();
            const r = t.map((e)=>e.id);
            const a = new Set(t.map((e)=>e.accountLid));
            const i = [];
            const l = function*() {
                const u_accountLid = u.accountLid;
                if (u_accountLid == null) {
                    return 0;
                }
                if (a.has(u_accountLid.toString())) {
                    const n = t.find((t)=>t.accountLid === u_accountLid.toString());
                    if (!n) {
                        return 0;
                    }
                    i.push(v(n.id));
                }
            };
            let s;
            for (var u of e){
                s = yield* l();
            }
            yield (m || (m = n("Promise"))).all(i);
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaMessage").getMessageTable().between([
                "internalId"
            ], `${e}_`, `${e}_z`, {
                lowerInclusive: true,
                upperInclusive: false,
                shouldDecrypt: false
            });
            const n = t.map((e)=>({
                    type: e.type,
                    subtype: e.subtype
                })).map((e)=>JSON.stringify(e)).join(",");
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "messages pre-existing before history for chat ",
                ": [",
                "]"
            ])), e, n);
        });
        return S.apply(this, arguments);
    }
    l.default = f;
}, 98);