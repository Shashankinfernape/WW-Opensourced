__d("WAWebAddonSendProcess", [
    "WALogger",
    "WAWebAck",
    "WAWebAddonConstants",
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonEncryptAddonMsgData",
    "WAWebAddonInfraError",
    "WAWebAddonPluginProcessor",
    "WAWebAddonProcessMsgs",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonRetryRequestUtils",
    "WAWebAddonSelectUtils",
    "WAWebAddonSendMsgData",
    "WAWebAddonUpdateDataUtils",
    "WAWebHandleMsgError",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebReferentialMsgKey",
    "WAWebSendMsgJob",
    "WAWebSendMsgTypes",
    "WAWebUserPrefsMeUser",
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
    function _(e) {
        if (e.parent.isGroupStatus !== true) {
            return e;
        }
        return babelHelpers.extends({}, e, {
            encryptedMsgData: babelHelpers.extends({}, e.encryptedMsgData, {
                isGroupStatus: true
            }),
            decryptedMsgData: babelHelpers.extends({}, e.decryptedMsgData, {
                isGroupStatus: true
            })
        });
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebAddonEncryptAddonMsgData").createDualEncryptionHelper(e, t);
            const r = n ? yield n.decrypt() : e;
            const tableMode = o("WAWebAddonSelectUtils").getAddonTableMode(e);
            yield o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode({
                processMode: o("WAWebAddonConstants").AddonProcessMode.SetAck,
                tableMode
            }, {
                add: [
                    r
                ]
            });
        });
        return g.apply(this, arguments);
    }
    function h({ id }) {
        const id_remote = id.remote;
        if (id.fromMe && o("WAWebUserPrefsMeUser").isMePrimary(id_remote)) {
            return o("WAWebAck").ACK.READ;
        }
        return o("WAWebAck").ACK.SENT;
    }
    function y(e, t) {
        if (e.decryptedMsgData.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE) {
            const n = o("WAWebMsgGetters").getPollEndTime(e.parent);
            const r = parseInt(t, 10) * 1000;
            if (n != null && r > n) {
                return true;
            }
        }
        return false;
    }
    const C = new Set([
        o("WAWebAddonConstants").AddonProcessMode.Send,
        o("WAWebAddonConstants").AddonProcessMode.SendRetry,
        o("WAWebAddonConstants").AddonProcessMode.SendRevoke
    ]);
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const n = t.ack === o("WAWebAck").ACK.FAILED ? o("WAWebAddonConstants").AddonProcessMode.SendRetry : o("WAWebAddonConstants").AddonProcessMode.Send;
                const r = yield o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs([
                    t
                ], n);
                const a = r[0];
                const i = o("WAWebAddonSelectUtils").createAddonParentSelector(a).getForAddon(t);
                yield f(babelHelpers.extends({}, t, {
                    ack: o("WAWebAck").ACK.FAILED
                }), i);
            } catch (n) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sendAddonMsgData: failed to mark addon send-failed without sending ",
                    ""
                ])), t.id.toString()).tags("messaging", "addons").sendLogs("sendAddonMsgData: mark-failed-without-send");
            }
        });
        return v.apply(this, arguments);
    }
    function S(e, t) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let Send = o("WAWebAddonConstants").AddonProcessMode.Send;
            if (e.kind === o("WAWebMsgType").MsgKind.ProtocolAddonRevoke) {
                Send = o("WAWebAddonConstants").AddonProcessMode.SendRevoke;
            }
            if (e.ack === o("WAWebAck").ACK.FAILED) {
                Send = o("WAWebAddonConstants").AddonProcessMode.SendRetry;
            }
            let a;
            try {
                let i;
                if (!C.has(Send)) {
                    throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError);
                }
                const l = o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e);
                if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(e)) {
                    a = yield o("WAWebAddonProcessMsgs").processOutgoingMsgOptimisticUpdate(Send, e);
                } else {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[addon-infra] send ",
                        " (",
                        ") id=",
                        " parent=",
                        " isLid=",
                        ""
                    ])), o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e), e.type, e.id.id, l.id, l.participant?.isLid());
                    const b = yield o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs([
                        e
                    ], Send);
                    const v = b[0];
                    const S = b[1];
                    a = {
                        encryptedMsgData: S[0],
                        decryptedMsgData: S[0],
                        parent: o("WAWebAddonSelectUtils").createAddonParentSelector(v).getForAddon(S[0])
                    };
                    if (Send === o("WAWebAddonConstants").AddonProcessMode.SendRetry && e.type === o("WAWebMsgType").MSG_TYPE.COMMENT) {
                        const R = o("WAWebAddonPluginProcessor").getAddonProcessor(a.decryptedMsgData);
                        if (R.convert.toDualEncryptedMsgData != null) {
                            a.encryptedMsgData = yield R.convert.toDualEncryptedMsgData(a.decryptedMsgData, a.parent);
                        }
                    }
                    a = _(a);
                    if (Send === o("WAWebAddonConstants").AddonProcessMode.Send || Send === o("WAWebAddonConstants").AddonProcessMode.SendRetry) {
                        yield o("WAWebAddonProcessMsgs").processOutgoingMsg(Send, a.encryptedMsgData, v, t);
                    }
                }
                yield o("WAWebAddonRetryRequestUtils").storeSelfMessageTypeRow(a.decryptedMsgData);
                const L = a.parent.broadcastId != null && r("WAWebWid").isWid(a.parent.broadcastId) && !!((i = a.parent.broadcastId) != null && i.isBroadcastList());
                if (L) {
                    const E = o("WAWebReferentialMsgKey").getReferentialMsgKey(a.parent);
                    a.encryptedMsgData = o("WAWebAddonProcessMsgsUtils").updateMsgParentKeyValue(a.encryptedMsgData, E);
                }
                const k = yield o("WAWebSendMsgJob").encryptAndSendMsg({
                    type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
                    data: a.encryptedMsgData
                }, t);
                const { count, error, t: t_1 } = k;
                if (L) {
                    a.encryptedMsgData = o("WAWebAddonProcessMsgsUtils").updateMsgParentKeyValue(a.encryptedMsgData, a.parent.id);
                }
                if (error != null) {
                    throw new (o("WAWebHandleMsgError")).MessageSentAckError(error);
                }
                if (y(a, t_1)) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "sendAddonMsgData: post-send validation failed, marking as failed"
                    ])));
                    throw r("err")("Post-send validation failed");
                }
                yield f(babelHelpers.extends({}, a.decryptedMsgData, {
                    ack: h(a.encryptedMsgData)
                }), a.parent);
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[addon-infra]: sent ",
                    " addon, id: ",
                    ""
                ])), a.decryptedMsgData.type, a.decryptedMsgData.id.id);
                return {
                    t: parseInt(t_1, 10),
                    count
                };
            } catch (error) {
                if (a == null) {
                    if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(e)) {
                        try {
                            const x = yield o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs([
                                e
                            ], Send);
                            const $ = x[0];
                            const P = o("WAWebAddonSelectUtils").createAddonParentSelector($).getForAddon(e);
                            yield f(babelHelpers.extends({}, e, {
                                ack: o("WAWebAck").ACK.FAILED
                            }), P);
                        } catch (t) {
                            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "sendAddonMsgData: failed to set ACK.FAILED for optimistic addon ",
                                ""
                            ])), e.id.toString()).tags("messaging", "addons").sendLogs("sendAddonMsgData: optimistic-set-ack-failed");
                        }
                    }
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "sendAddonMsgData: parent ",
                        " not found for ",
                        ""
                    ])), o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e), e.id.toString()).tags("messaging", "addons").sendLogs("sendAddonMsgData: undefined parent");
                    throw error;
                }
                yield f(babelHelpers.extends({}, a.decryptedMsgData, {
                    ack: o("WAWebAck").ACK.FAILED
                }), a.parent);
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "sendAddonMsgData: failure, msg: ",
                    ""
                ])), e.id.toString());
                throw error;
            }
        });
        return R.apply(this, arguments);
    }
    l.markAddonSendFailed = b;
    l.sendAddonProcess = S;
}, 98);