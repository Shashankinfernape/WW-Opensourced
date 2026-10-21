__d("WAWebHandleDeferredBotOrphan", [
    "WALogger",
    "WAWap",
    "WAWebAddonQueryUtils",
    "WAWebBotTypes",
    "WAWebCommonMsgUtils",
    "WAWebCreateNackFromStanza",
    "WAWebDBProcessOrphansForNewMsg",
    "WAWebDBStoreMessageOrphans",
    "WAWebHandleMsgSendReceipt",
    "WAWebHandleMsgTypes.flow",
    "WAWebLidMigrationUtils",
    "WAWebMessageInsertDeferredPlaceholder",
    "WAWebMessageReceiveFlow",
    "WAWebMsgKey",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
    "WAWebOfflineHandler",
    "WAWebPostIncomingMessageDropMetric",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = {
        "no-target-row": "bot reply deferred: waiting for the message it replies to",
        "placeholder-target-row": "bot reply deferred: the message it replies to has not decrypted yet",
        "secretless-target-row": "bot reply deferred: the message it replies to has no message secret",
        "wasa-root-secret-missing": "bot reply deferred: no Hatch key here and syncd had none to restore"
    };
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ canNack: t, decryptResult: n, input: a, node: i }) {
            const { msgInfo: l, msgMeta: c } = a;
            const d = yield L(a, n, i);
            if (d) {
                yield g(a, n.deferReason);
                try {
                    yield y(n);
                } catch (e) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "handleDeferredBotOrphan: settling the freshly stored bot orphan failed"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("bot-orphan-settle-failed", {
                        sampling: 0.01
                    });
                }
            }
            const m = d ? {
                result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.BACKFILL
            } : {
                result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR,
                nackReason: o("WAWebCreateNackFromStanza").NackReason.UnhandledError
            };
            o("WAWebMessageReceiveFlow").trackMessageReceiveReceipt(l.externalId, o("WAWebHandleMsgSendReceipt").sendReceipt(l, c, m, {
                canNack: t
            }), n.result).catch((e)=>{
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "sendReceipt failed for deferred orphan bot message"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("send-receipt-orphan-bot-error", {
                    sampling: 0.01
                });
            });
            if (l.offline != null) {
                o("WAWebOfflineHandler").OfflineMessageHandler.processMessageDecryptResult(m.result);
            }
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = e.msgBotInfo?.botEditType;
            if (!(a != null && a !== o("WAWebBotTypes").BotMsgEditType.FIRST && a !== o("WAWebBotTypes").BotMsgEditType.FULL)) {
                try {
                    yield o("WAWebMessageInsertDeferredPlaceholder").maybeInsertDeferredPlaceholder({
                        msgInfo: e.msgInfo,
                        reason: t != null ? p[t] : "bot reply deferred, waiting for its target message"
                    });
                } catch (e) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "showDeferredPlaceholder: the deferred placeholder could not be shown"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("bot-orphan-placeholder-failed", {
                        sampling: 0.01
                    });
                }
            }
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.deferReason !== "secretless-target-row") {
                const t = yield b(e.targetMsgKey);
                if (t != null) {
                    yield o("WAWebDBProcessOrphansForNewMsg").processOrphansForNewMsg(t);
                }
            }
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e == null) {
                return null;
            }
            const t = r("WAWebMsgKey").fromString(e);
            const n = yield S(t);
            if (n != null) {
                return n;
            }
            const a = o("WAWebLidMigrationUtils").getAlternateMsgKey(t);
            if (a == null) {
                return null;
            }
            return S(a);
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([
                e
            ]);
            const r = n.get(e.toString()) ?? null;
            if (r != null && o("WAWebCommonMsgUtils").isPlaceholderMsg(r.type)) {
                return null;
            }
            return r;
        });
        return R.apply(this, arguments);
    }
    function L(e, t, n) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            let a;
            let i;
            try {
                const c = e.msgInfo;
                a = babelHelpers.extends({}, o("WAWebMsgProcessingApiUtils").generateBaseMsg(c), {
                    type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                    kind: o("WAWebMsgType").MsgKind.PlaceholderMessage,
                    subtype: "bot_orphan",
                    botEditType: e.msgBotInfo?.botEditType,
                    botEditTargetId: e.msgBotInfo?.botEditTargetId,
                    botSenderTimestampMs: k(e.msgBotInfo?.botSenderTimestampMs),
                    botOrphanStanza: o("WAWap").encodeStanza(n)
                });
                i = r("WAWebMsgKey").fromString(t.targetMsgKey);
            } catch (e) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "storeOrphanBotMsg: could not build the orphan row"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("store-orphan-bot-msg-build-failed", {
                    sampling: 0.01
                });
                o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropInternalError(n);
                return false;
            }
            try {
                yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans([
                    a
                ], function() {
                    return i;
                });
                return true;
            } catch (e) {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "storeOrphanBotMsg: failed to store orphan"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("store-orphan-bot-msg-failed", {
                    sampling: 0.01
                });
                o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropDBOperationFailed(n);
                return false;
            }
        });
        return E.apply(this, arguments);
    }
    function k(t) {
        if (t == null) {
            return null;
        }
        const n = Number(t);
        if (Number.isFinite(n) && n > 0) {
            return n;
        }
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "storeOrphanBotMsg: unusable bot sender timestamp"
        ]))).tags("messaging").sendLogs("bot-orphan-sender-time-unparseable", {
            sampling: 0.01
        });
        return null;
    }
    l.handleDeferredBotOrphan = _;
}, 98);