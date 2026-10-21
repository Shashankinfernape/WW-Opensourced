__d("WAWebProcessMsgInfoForLid", [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebApiContact",
    "WAWebBotUtils",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebGetPlatformFromStanzaId",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgTypes.flow",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebLidStatusMigrationUtils",
    "WAWebMessageProcessUtils",
    "WAWebProcessPhoneNumberMapping",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "err",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatWid: n, mapping: a, msgInfo: i, msgMeta: l }) {
            let m = null;
            const p = l?.origin;
            const _ = p === "ctwa";
            if (_) {
                if (!n.isLid()) {
                    throw r("err")("received ctwa message but remote id is not Lid");
                }
                m = n;
            } else if (l?.targetSenderJid != null) {
                m = o("WAWebLidMigrationUtils").toUserLidOrThrow(o("WAWebWidFactory").asUserWidOrThrow(i.chat));
            } else if (a == null) {
                const f = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
                let g = f && (i.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT || i.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST || i.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST) && i.author.isLid() && n.isLid();
                const h = r("justknobx")._("2459") && (i.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT || i.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST || i.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST) && i.author.isHosted() && i.author.isHostedLid() && n.isLid();
                const y = i.author.isFbidBot() && o("WAWebBotUtils").isMaibaAiHubFbid(i.author) && n.isLid();
                const C = i.author.isFbidBot() && i.author.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) && n.isLid() && o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled();
                g = g || h || y || C;
                if (g) {
                    m = o("WAWebLidMigrationUtils").toUserLidOrThrow(n);
                } else if (i.username != null || i.participantUsername != null) {
                    const b = f ? "missing-pn-lid-mapping-in-1-1-message-with-username-UN-enabled" : "missing-pn-lid-mapping-in-1-1-message-with-username-UN-off";
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "findDestinationChatForSingleMapping: missing pn-lid mapping in 1-1 message with username, sender: ",
                        ", type: ",
                        ", author: ",
                        ", chatWid: ",
                        ""
                    ])), o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(i.externalId), i.type, i.author.toLogString(), n.toLogString()).sendLogs(b);
                    if (!f) {
                        m = o("WAWebLidMigrationUtils").toUserLidOrThrow(n);
                    } else {
                        throw r("err")("findDestinationChatForSingleMapping: missing pn-lid mapping in 1-1 message");
                    }
                } else {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "findDestinationChatForSingleMapping: missing pn-lid mapping in 1-1 message, sender: ",
                        ""
                    ])), o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(i.externalId)).sendLogs("misssing-pn-lid-mapping-in-1-1-message");
                    throw r("err")("findDestinationChatForSingleMapping: missing pn-lid mapping in 1-1 message");
                }
            } else if (a === "missing-peer-recipient-pn") {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "findDestinationChatForSingleMapping: missing peer recipient pn in 1-1 message from device ",
                    ""
                ])), i.author.device ?? 0).sendLogs("misssing-peer-recipient-pn-in-1-1-message");
                if (n.isLid() && o("WAWebApiContact").lidPnCache.getPhoneNumber(n) != null) {
                    m = n;
                }
                if (m == null) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "findDestinationChatForSingleMapping: missing peer recipient pn and local mapping, processing message anyway"
                    ])));
                    return;
                }
            } else if (a === "missing-peer-recipient-lid") {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "findDestinationChatForSingleMapping: missing peer recipient lid in 1-1 message"
                ]))).sendLogs("misssing-peer-recipient-lid-in-1-1-message");
                o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("syncContactListJob", {
                    contactIds: [
                        n
                    ],
                    shouldSyncDevice: false,
                    mode: "query"
                });
                m = o("WAWebApiContact").lidPnCache.getCurrentLid(n);
                if (m == null) {
                    throw r("err")("findDestinationChatForSingleMapping: missing peer recipient lid in 1-1 message");
                }
            } else {
                m = a.lid;
            }
            const S = yield o("WAWebMessageProcessUtils").selectChatForOneOnOneMessage({
                lid: m,
                lidOrigin: p
            });
            const R = S.chatId;
            if (R.isSameAccountAndAddressingMode(n)) {
                return {
                    accountLid: S.accountLid
                };
            }
            return {
                newRemote: R,
                accountLid: S.accountLid
            };
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msgInfo: t, msgMeta: a }) {
            const i = yield o("WAWebProcessPhoneNumberMapping").processPhoneNumberMappings(t, a, t.offline == null);
            if (t.category !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer) {
                if (t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS) {
                    const l = o("WAWebWidFactory").asUserWidOrThrow(t.author);
                    const s = o("WAWebWidFactory").asUserWidOrThrow(o("WAWebLidStatusMigrationUtils").matWidConvert(l));
                    if (!l.equals(s)) {
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "maybeProcessMsgInfoForLid: converting status message from ",
                            " to ",
                            ""
                        ])), t.author.toLogString(), s.toLogString());
                        t.author = o("WAWebWidFactory").createDeviceWidFromUserAndDevice(s.user, s.server, t.author.device ?? o("WAJids").DEFAULT_DEVICE_ID);
                    }
                    return;
                }
                const c = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() || t.author.isLid() || t.chat.isLid();
                if (c) {
                    if (t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST) {
                        if (i.type !== "peer-broadcast") {
                            throw r("err")("maybeProcessMsgInfoForLid: mappings type is not the expected peer-broadcast");
                        }
                        i.type;
                        const d = i.mappings.map((()=>{
                            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, n) {
                                const r = t.bclParticipants[n];
                                const i = yield _({
                                    msgInfo: t,
                                    msgMeta: a,
                                    mapping: e,
                                    chatWid: r.wid
                                });
                                if (i?.newRemote != null) {
                                    r.preMatWid = r.wid;
                                    r.wid = o("WAWebWidFactory").asUserWidOrThrow(i.newRemote);
                                }
                            });
                            return function(t, n) {
                                return e.apply(this, arguments);
                            };
                        })());
                        yield (p || (p = n("Promise"))).all(d);
                    } else {
                        if (i.type !== "not-peer-broadcast") {
                            throw r("err")("maybeProcessMsgInfoForLid: mappings type is not the expected not-peer-broadcast");
                        }
                        i.type;
                        const f = t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST;
                        const g = f ? t.author : t.chat;
                        if (!g.isRegularUser()) {
                            return;
                        }
                        const h = yield _({
                            msgInfo: t,
                            msgMeta: a,
                            mapping: i.mapping,
                            chatWid: g
                        });
                        if (h == null) {
                            return;
                        }
                        const { accountLid: y, newRemote: C } = h;
                        if (y != null) {
                            t.accountLid = y;
                        }
                        if (C == null) {
                            return;
                        }
                        if (f) {
                            t.preMatChat = t.author;
                            t.author = C;
                        } else {
                            t.preMatChat = g;
                            t.chat = C;
                        }
                    }
                }
            }
        });
        return h.apply(this, arguments);
    }
    l.maybeProcessMsgInfoForLid = g;
}, 98);