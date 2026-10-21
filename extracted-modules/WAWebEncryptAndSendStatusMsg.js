__d("WAWebEncryptAndSendStatusMsg", [
    "Promise",
    "WAJids",
    "WALogger",
    "WAPromiseTimeout",
    "WASmaxStatusPublishPostBroadcastStatusRPC",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebApiMessageInfoStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebDBDeviceListFanout",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebGetGroupKeyDistributionMsg",
    "WAWebLidMigrationUtils",
    "WAWebLidStatusMigrationUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebMsgFanoutTypes",
    "WAWebMsgKey",
    "WAWebNoop",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebProtobufsE2E.pb",
    "WAWebReportingTokenUtils",
    "WAWebSchemaMessageInfo",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCreateFanoutStanza",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebStatusGatingUtils",
    "WAWebStatusPublishRequestArgs",
    "WAWebStatusSessionGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebWamEnumMessageDistributionEnumType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWamNumberToSizeBucket",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = [
        "statusSetting"
    ];
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    const L = 10000;
    const E = new Map;
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t = yield o("WAWebSchemaMessageInfo").getMessageInfoTable().equals([
                "msgKey"
            ], String(e));
            if (t.length === 0) {
                t = yield o("WAWebSchemaMessageInfo").getMessageInfoTable().equals([
                    "msgKey"
                ], String(o("WAWebLidMigrationUtils").getAlternateMsgKey(e)));
            }
            return t.map((e)=>o("WAWebLidStatusMigrationUtils").matWidConvert(o("WAWebWidFactory").createWid(e.receiverUserJid)));
        });
        return I.apply(this, arguments);
    }
    function T(e, t) {
        const n = e.filter((e)=>!e.isLid());
        if (n.length > 0) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusMsg: PN in ",
                ": ",
                ""
            ])), t, n.map((e)=>{
                const t = o("WAWebLidMigrationUtils").toUserLid(e);
                return `${e.toLogString()} (hasLidMapping=${String(t != null)})`;
            }));
        }
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ metricsReporter, msgProtobuf, sendMsgRecord }) {
            const b = sendMsgRecord.data.id;
            const v = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID);
            const authorId = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
            const R = J(msgProtobuf);
            const L = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(msgProtobuf);
            if (L === "reaction") {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: unexpected reaction type for status message ",
                    ""
                ])), b.id).sendLogs("status-unexpected-reaction-type");
            }
            let E;
            let isFullAudience;
            let statusSetting = null;
            const x = yield o("WAWebUserPrefsStatus").getStatusList();
            const P = r("compactMap")(x.list, o("WAWebLidMigrationUtils").toUserLid);
            x.list = P.map((e)=>e);
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusMsg: start to send ",
                ", revoke: ",
                ""
            ])), b.id, R);
            if (!(R == null && x.list.length === 0)) {
                const M = o("WAWebStatusSessionGatingUtils").getStatusSessionScope();
                if (R) {
                    metricsReporter.sendPerfReporter?.setIsRevokeMessage(true);
                    const A = yield k(R);
                    if (Z(A, x.list)) {
                        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "encryptAndSendStatusMsg: start to send direct revoke message"
                        ])));
                        T(A, "direct revoke senderList");
                        const deviceList = yield o("WAWebDBDeviceListFanout").getFanOutList({
                            wids: [].concat(A, [
                                authorId
                            ]),
                            shouldMergeAltDevices: true
                        });
                        T(deviceList, "direct revoke deviceList");
                        return ee({
                            deviceList,
                            metricsReporter,
                            msgProtobuf,
                            sendMsgRecord,
                            sessionScope: M
                        });
                    }
                    E = A;
                    isFullAudience = false;
                } else {
                    E = x.list;
                    isFullAudience = true;
                    statusSetting = x.setting;
                }
                T(E, "senderList");
                const O = yield o("WAWebDBDeviceListFanout").getFanOutList({
                    wids: [].concat(E, [
                        authorId
                    ]),
                    shouldMergeAltDevices: true
                });
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: all device list size ",
                    ""
                ])), O.length);
                T(O, "deviceList after fanout");
                const B = yield o("WAWebUserPrefsStatus").getStatusSkDistribList(O, {
                    isFullAudience
                });
                const { participantList, skDistribList } = B;
                if (skDistribList.length > 0) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "encryptAndSendStatusMsg: distribute ",
                        " sender key"
                    ])), skDistribList.length);
                    metricsReporter.sendReporter?.setMessageDistributionType(o("WAWebWamEnumMessageDistributionEnumType").MESSAGE_DISTRIBUTION_ENUM_TYPE.SENDER_KEY_DISTRIBUTION_MESSAGE);
                    metricsReporter.sendReporter?.setSessionScope(M);
                    metricsReporter.sendReporter?.setDeviceCount(skDistribList.length);
                    metricsReporter.sendPerfReporter?.setSenderKeyDistributionCount(skDistribList.length);
                }
                yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(O.map((e)=>({
                        msgKey: b,
                        receiverId: e
                    })));
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: create receipts records"
                ])));
                if (skDistribList.length > 0) {
                    try {
                        metricsReporter.sendPerfReporter?.startPrekeysFetchStage();
                        const K = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                            identityChanged: false,
                            sessionScope: M,
                            wids: skDistribList
                        });
                        metricsReporter.sendPerfReporter?.setFetchedPrekeyCount(K?.missedPrekeyCount);
                        o("WAWebPostPrekeysDepletionMetric").maybePostPrekeysDepletionMetric({
                            count: K?.depletedPrekeyCount,
                            prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                            messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS,
                            deviceSizeBucket: r("WAWebWamNumberToSizeBucket")(O.length)
                        });
                    } catch (error) {
                        o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "encryptAndSendStatusMsg: ensureE2ESessions: failed for ",
                            " devices: ",
                            ""
                        ])), skDistribList.length, error).tags("messaging");
                    }
                }
                metricsReporter.sendPerfReporter?.postPrekeysFetchStage();
                metricsReporter.sendPerfReporter?.startClientEncryptStage();
                const Q = o("WAWebStatusGatingUtils").isStatusPublishViaSmaxEnabled() ? yield N({
                    authorId,
                    msgProtobuf,
                    participantList,
                    sendMsgRecord,
                    sessionScope: M,
                    skDistribList,
                    statusSetting,
                    to: v
                }) : yield $({
                    authorId,
                    msgProtobuf,
                    participantList,
                    sendMsgRecord,
                    sessionScope: M,
                    skDistribList,
                    statusSetting,
                    to: v
                });
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: encrypt message body done"
                ])));
                yield o("WAWebSendMsgCommonApi").updateIdentityRange(sendMsgRecord, O);
                yield o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode();
                metricsReporter.sendPerfReporter?.postClientEncryptStage();
                metricsReporter.sendPerfReporter?.startWrittenWireStage();
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: start sending ",
                    ""
                ])), b.id);
                yield Q();
                metricsReporter.sendPerfReporter?.postWrittenWireStage();
                yield o("WAWebUserPrefsStatus").markStatusHasSenderKey(skDistribList);
            }
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ authorId, msgProtobuf, participantList, sendMsgRecord, sessionScope, skDistribList, statusSetting, to }) {
            const c = sendMsgRecord.data.id;
            const d = yield K({
                authorId,
                msgProtobuf,
                participantList,
                sessionScope,
                skDistribList,
                to
            });
            const m = d[0];
            const p = d[1];
            const _ = d[2];
            const f = d[3];
            const g = Y({
                sessionScope: f ? sessionScope : o("WAWebSessionScope").SessionScope.DEFAULT,
                statusSetting
            });
            const h = yield o("WAWebReportingTokenUtils").genReportingTokenBody(sendMsgRecord.data, msgProtobuf);
            const y = o("WAWap").wap("message", {
                id: o("WAWap").CUSTOM_STRING(c.id),
                to: o("WAWebCommsWapMd").CHAT_JID(to),
                type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(msgProtobuf),
                edit: o("WAWebSendMsgCommonApi").editAttribute(msgProtobuf, sendMsgRecord.data.subtype)
            }, m, p, _, g, h);
            const C = X(y);
            return function() {
                return o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndReturnAck(y, o("WAWebCommsAckParser").toCoreAckTemplate({
                    id: c.id,
                    class: C,
                    from: to,
                    participant: null
                }));
            };
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const t_statusSetting = t.statusSetting;
            const r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            const o = yield w(babelHelpers.extends({}, r, {
                statusSetting: t_statusSetting
            }));
            return function() {
                return F(o);
            };
        });
        return M.apply(this, arguments);
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ authorId, msgProtobuf, participantList, sendMsgRecord, sessionScope, skDistribList, statusSetting, to }) {
            const c = sendMsgRecord.data.id;
            const d = yield H(to, authorId, skDistribList, msgProtobuf, sessionScope);
            const { advIdentity, encMediaType, keyDistributions, senderKeyCiphertext } = d;
            return o("WAWebStatusPublishRequestArgs").toStatusBroadcastPublishArgs({
                ciphertextVersion: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION,
                clientReportingToken: yield o("WAWebReportingTokenUtils").genClientReportingTokenMixinArgs(sendMsgRecord.data, msgProtobuf),
                deviceIdentity: advIdentity,
                editOrRevoke: o("WAWebStatusPublishRequestArgs").toStatusEditOrRevokeArgs(msgProtobuf, sendMsgRecord.data.subtype),
                encMediaType,
                msgType: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(msgProtobuf),
                participants: participantList,
                senderKeyCiphertext: new Uint8Array(senderKeyCiphertext),
                senderKeyDistributions: keyDistributions,
                statusId: c.id,
                statusSetting,
                useStatusSessionScope: keyDistributions.length > 0 && sessionScope === o("WAWebSessionScope").SessionScope.STATUS
            });
        });
        return A.apply(this, arguments);
    }
    function F(e) {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const e_statusId = e.statusId;
            const n = E.get(e_statusId);
            const r = B(n, e);
            const o = V(r);
            E.set(e_statusId, o);
            o.then(()=>{
                if (E.get(e_statusId) === o) {
                    E.delete(e_statusId);
                }
            });
            if (n == null) {
                return r;
            }
            return q(n, r);
        });
        return O.apply(this, arguments);
    }
    function B(e, t) {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e != null) {
                yield e;
            }
            const n = yield o("WASmaxStatusPublishPostBroadcastStatusRPC").sendPostBroadcastStatusRPC(t);
            if (n.name === "PostBroadcastStatusResponseNegative") {
                const a = n.value.error;
                o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "status publish rejected with ",
                    ""
                ])), a).tags("messaging").sendLogs("status-publish-smax-negative-ack");
                throw r("err")(`status publish rejected: ${a}`);
            }
        });
        return W.apply(this, arguments);
    }
    function q(e, t) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                yield o("WAPromiseTimeout").promiseTimeout(e, L, "Timed out waiting for the previous status publish");
            } catch (error) {
                o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "status publish timed out waiting for the previous publish"
                ]))).tags("messaging").sendLogs("status-publish-serialization-timeout");
                throw error;
            }
            return t;
        });
        return U.apply(this, arguments);
    }
    function V(e) {
        return (R || (R = n("Promise"))).allSettled([
            e
        ]).then(r("WAWebNoop"));
    }
    function H(e, t, n, r, o) {
        return G.apply(this, arguments);
    }
    function G() {
        G = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a) {
            const l = o("WAWebSendMsgCommonApi").encodeAndPad(r);
            const encMediaType = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(r);
            const u = yield o("WAWebSignal").Cipher.encryptSenderKeyMsgSignalProto(e, t, l);
            const { ciphertext, senderKeyBytes } = u;
            o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                "[session] genStatusEncryptedParts: sessionScope=",
                " skDistribListLen=",
                ""
            ])), a, String(n.length));
            const m = n.length > 0 ? (yield o("WAWebGetGroupKeyDistributionMsg").getKeyDistributionMsg(null, e, n, senderKeyBytes, false, undefined, a)) ?? [] : [];
            const keyDistributions = m.map((e)=>babelHelpers.extends({}, e, {
                    isPqSession: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(e.ciphertext)
                }));
            const advIdentity = yield z(keyDistributions);
            return {
                advIdentity,
                encMediaType,
                keyDistributions,
                senderKeyCiphertext: ciphertext
            };
        });
        return G.apply(this, arguments);
    }
    function z(e) {
        return j.apply(this, arguments);
    }
    function j() {
        j = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.some(({ type })=>type === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg)) {
                return yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
            }
            return null;
        });
        return j.apply(this, arguments);
    }
    function K(e) {
        return Q.apply(this, arguments);
    }
    function Q() {
        Q = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ authorId, msgProtobuf, participantList, sessionScope, skDistribList, to }) {
            const s = yield H(to, authorId, skDistribList, msgProtobuf, sessionScope);
            const { advIdentity, encMediaType, keyDistributions, senderKeyCiphertext } = s;
            const p = keyDistributions.map((e)=>{
                let t;
                const { ciphertext, participant, type } = e;
                return (t = o("WAWap")).wap("to", {
                    jid: o("WAWebCommsWapMd").DEVICE_JID(participant)
                }, t.wap("enc", {
                    v: t.CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
                    type: t.CUSTOM_STRING(type)
                }, ciphertext));
            });
            const _ = participantList.map((e)=>o("WAWap").wap("to", {
                    jid: o("WAWebCommsWapMd").USER_JID(e)
                }));
            let f = null;
            if (_.length > 0 || p.length > 0) {
                f = o("WAWap").wap("participants", null, p.concat(_));
            }
            const g = o("WAWap").wap("enc", {
                v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
                type: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobs.flow").CiphertextType.Skmsg),
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(encMediaType)
            }, senderKeyCiphertext);
            const h = advIdentity != null ? o("WAWap").wap("device-identity", null, advIdentity) : null;
            return [
                f,
                g,
                h,
                keyDistributions.length > 0
            ];
        });
        return Q.apply(this, arguments);
    }
    function X(e) {
        if (o("WAWebStatusGatingUtils").isStatusStanzaSendEnabled()) {
            e.tag = "status";
            const t = Array.isArray(e.content) && e.content.some((e)=>e instanceof o("WAWap").WapNode && e.tag === "participants");
            if (!t) {
                delete e.attrs.device_fanout;
            }
            return "status";
        }
        return "message";
    }
    function Y({ sessionScope, statusSetting }) {
        if (statusSetting == null && sessionScope !== o("WAWebSessionScope").SessionScope.STATUS) {
            return null;
        }
        return o("WAWap").wap("meta", {
            status_setting: statusSetting != null ? o("WAWebStatusPublishRequestArgs").toStatusSettingMetaAttribute(statusSetting) : o("WAWap").DROP_ATTR,
            session_scope: sessionScope === o("WAWebSessionScope").SessionScope.STATUS ? o("WAWap").CUSTOM_STRING("status") : o("WAWap").DROP_ATTR
        });
    }
    function J({ protocolMessage }) {
        let n = null;
        if (protocolMessage?.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE && protocolMessage != null && protocolMessage.key) {
            const a = protocolMessage.key;
            const { id, participant, remoteJid } = a;
            if (remoteJid != null && id != null && participant != null) {
                n = new (r("WAWebMsgKey"))({
                    remote: o("WAWebWidFactory").createWid(remoteJid),
                    fromMe: true,
                    id,
                    participant: o("WAWebWidFactory").createWid(participant)
                });
            }
        }
        return n;
    }
    function Z(e, list) {
        const n = new Set(list.map((e)=>o("WAWebWidFactory").asUserWidOrThrow(e).toString()));
        return e.some((e)=>!o("WAWebUserPrefsMeUser").isMeAccount(e) && !n.has(o("WAWebWidFactory").asUserWidOrThrow(e).toString()));
    }
    function ee(e) {
        return te.apply(this, arguments);
    }
    function te() {
        te = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ deviceList, metricsReporter, msgProtobuf, sendMsgRecord, sessionScope }) {
            const u = sendMsgRecord.data.id;
            const c = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID);
            o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusDirectMsg: send ",
                " to ",
                " device"
            ])), u.id, deviceList.length);
            const d = sendMsgRecord.data.to;
            const collectDeviceEncs = o("WAWebStatusGatingUtils").isStatusPublishViaSmaxEnabled();
            const p = yield o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza({
                chatId: d,
                collectDeviceEncs,
                deviceList,
                metricReporter: metricsReporter,
                msgProtobuf,
                msgRecord: sendMsgRecord,
                option: {
                    fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
                    sessionScope
                }
            });
            const { deviceEncs, stanza } = p;
            const g = collectDeviceEncs ? yield ne({
                deviceEncs,
                msgProtobuf,
                sendMsgRecord,
                sessionScope
            }) : oe({
                sendMsgRecord,
                sessionScope,
                stanza,
                to: c
            });
            yield o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode();
            metricsReporter.sendPerfReporter?.startWrittenWireStage();
            o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusDirectMsg: start sending ",
                ""
            ])), u.id);
            yield g();
            metricsReporter.sendPerfReporter?.postWrittenWireStage();
        });
        return te.apply(this, arguments);
    }
    function ne(e) {
        return re.apply(this, arguments);
    }
    function re() {
        re = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ deviceEncs, msgProtobuf, sendMsgRecord, sessionScope }) {
            const i = sendMsgRecord.data.id;
            const deviceIdentity = yield z(deviceEncs);
            const s = o("WAWebStatusPublishRequestArgs").toStatusDirectPublishArgs({
                ciphertextVersion: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION,
                clientReportingToken: yield o("WAWebReportingTokenUtils").genClientReportingTokenMixinArgs(sendMsgRecord.data, msgProtobuf),
                deviceEncs,
                deviceIdentity,
                editOrRevoke: o("WAWebStatusPublishRequestArgs").toStatusEditOrRevokeArgs(msgProtobuf, sendMsgRecord.data.subtype),
                encMediaType: o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(msgProtobuf),
                hideDecryptFail: o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(msgProtobuf) === o("WAWebBackendJobs.flow").DecryptFailType.Hide,
                msgType: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(msgProtobuf),
                statusId: i.id,
                useStatusSessionScope: sessionScope === o("WAWebSessionScope").SessionScope.STATUS
            });
            return function() {
                return F(s);
            };
        });
        return re.apply(this, arguments);
    }
    function oe({ sendMsgRecord, sessionScope, stanza, to: from }) {
        const i = sendMsgRecord.data.id;
        const l = X(stanza);
        ae(stanza, Y({
            sessionScope
        }));
        return function() {
            return o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndReturnAck(stanza, o("WAWebCommsAckParser").toCoreAckTemplate({
                id: i.id,
                class: l,
                from,
                participant: null
            }));
        };
    }
    function ae(stanza, t) {
        if (t != null) {
            const n = Array.isArray(stanza.content) ? stanza.content : [];
            const r = n.find((e)=>e instanceof o("WAWap").WapNode && e.tag === "meta");
            if (r instanceof o("WAWap").WapNode) {
                r.attrs = babelHelpers.extends({}, r.attrs, t.attrs);
                return;
            }
            stanza.content = [].concat(n, [
                t
            ]);
        }
    }
    l.calculateRevokeSenderList = k;
    l.encryptAndSendStatusMsg = D;
    l.genStatusBroadcastPublishRequest = w;
    l.sendStatusPublishOrThrow = F;
    l.genStatusEncryptedParts = H;
    l.genMessageBody = K;
    l.maybeApplyStatusTag = X;
    l.buildStatusMetaNode = Y;
    l.encryptAndSendStatusDirectMsg = ee;
}, 98);