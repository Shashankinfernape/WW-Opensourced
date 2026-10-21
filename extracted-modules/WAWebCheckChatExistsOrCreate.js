__d("WAWebCheckChatExistsOrCreate", [
    "WALogger",
    "WAWebApiChat",
    "WAWebApiChatCommon",
    "WAWebApiHydrateWidsUtil",
    "WAWebBackendApi",
    "WAWebChatViewMode.flow",
    "WAWebCreateChat",
    "WAWebCurrentUser",
    "WAWebGhostEphemeralChatSkip",
    "WAWebLid1X1MigrationGating",
    "WAWebMessageLidOriginType",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
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
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
                return (yield o("WAWebApiChatCommon").getChatRecord(e)) != null;
            }
            return o("WAWebBackendApi").frontendSendAndReceive("hasChat", {
                chatId: e
            });
        });
        return h.apply(this, arguments);
    }
    const y = new Map;
    function C({ chatOriginType: t, destinationChat: n, initialProps: r, msgMeta: a, options: i }) {
        const l = n.chatId;
        const s = l.isRegularUser() ? o("WAWebMessageLidOriginType").determineLidOriginTypeForIncomingMessage(o("WAWebWidFactory").asUserWidOrThrow(l), a) : null;
        return o("WAWebCreateChat").createChat({
            createChatOrigin: t,
            destination: n,
            initialProps: babelHelpers.extends({
                createdLocally: false,
                lidOriginType: s
            }, r),
            options: i
        });
    }
    function b({ firstIncomingMsg: t }) {
        return t != null && o("WAWebGhostEphemeralChatSkip").isSkippableIncomingEphemeralSettingMsg(t);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const a = t.destinationChat;
            const i = a.chatId;
            const l = i.toString();
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "checkChatExistsOrCreate called with chatWid=",
                ", accountLid=",
                ""
            ])), i.toLogString(), a.accountLid?.toLogString());
            if (o("WAWebCurrentUser").isEmployee()) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "checkChatExistsOrCreate: first message id: ",
                    ""
                ])), t.options.firstIncomingMsg?.id.toString() ?? "not-passed");
            }
            const S = y.get(l);
            if (S != null) {
                yield S;
            }
            const R = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const r = yield g(i);
                if (r === true) {
                    y.delete(l);
                    return r;
                }
                if (b(t.options)) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "checkChatExistsOrCreate: skipping ghost chat creation for ephemeral_setting-only first message ",
                        ""
                    ])), i.toLogString());
                    y.delete(l);
                    return r;
                }
                if (i.isLid() && !o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && t?.initialProps?.lidOriginType !== o("WAWebUsernameTypes").LidOriginType.PNH_CTWA && t.msgMeta?.origin !== "ctwa") {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "checkChatExistsOrCreate: chat origin: ",
                        ". lid origin ",
                        ", ",
                        ""
                    ])), t.chatOriginType, t.msgMeta?.origin, t?.initialProps?.lidOriginType);
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "checkChatExistsOrCreate: Lid chat not migrated ",
                        ", ",
                        ""
                    ])), i.toLogString(), t.chatOriginType).sendLogs("checkChatExistsOrCreate: asked to create Lid chat but is not migrated");
                }
                try {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "checkChatExistsOrCreate: creating chat ",
                        ", ",
                        ""
                    ])), i.toLogString(), t?.initialProps?.lidOriginType);
                    yield C(t);
                } catch (e) {
                    if (!o("WAWebRuntimeEnvironmentUtils").isWorker() && e instanceof o("WAWebApiChat").CreateChatDuplicateError) {
                        const v = yield o("WAWebApiChatCommon").getChatRecord(i);
                        if (v != null) {
                            yield o("WAWebBackendApi").frontendFireAndForget("chatCollectionGadd", {
                                chat: babelHelpers.extends({}, o("WAWebApiHydrateWidsUtil").hydrateWids(v), {
                                    id: i,
                                    chatViewMode: v.chatViewMode ?? o("WAWebChatViewMode.flow").ChatViewModeType.VISIBLE
                                })
                            });
                            const R = yield g(i);
                            if (!R) {
                                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                    "checkChatExistsOrCreate for ",
                                    ", unable to restore chat from DB"
                                ])), i.toLogString()).tags("messaging").sendLogs("checkChatExistsOrCreate failed to restore chat", {
                                    sampling: 0.01
                                });
                            }
                            return R;
                        }
                    }
                    if (e instanceof Error) {
                        o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "checkChatExistsOrCreate for ",
                            ", failed"
                        ])), i.toLogString()).catching(e).tags("messaging").sendLogs("checkChatExistsOrCreate failed", {
                            sampling: 0.01
                        });
                    } else {
                        o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "checkChatExistsOrCreate for ",
                            ", failed"
                        ])), i.toLogString()).tags("messaging").sendLogs("checkChatExistsOrCreate failed", {
                            sampling: 0.01
                        });
                    }
                }
                y.delete(l);
                return r;
            })();
            y.set(l, R);
            return R;
        });
        return S.apply(this, arguments);
    }
    l.doesChatExist = g;
    l.checkChatExistsOrCreate = v;
}, 98);