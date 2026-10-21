__d("WAWebMsgProcessingDecryptApi", [
    "WALogger",
    "WAWebAdvSignatureApi",
    "WAWebBackendJobs.flow",
    "WAWebGetMessageCache",
    "WAWebHandleMsgTypes.flow",
    "WAWebMessageReceiveFlow",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgProcessingDecryptEnc",
    "WAWebMsgProcessingDecryptionHandler",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebPostE2eMessageRecvMetric",
    "WAWebSendRetryReceiptJob",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e, t, n, r) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, sessionScope, r) {
            const { bizInfo, deviceIdentity, encs, hsmInfo, msgBotInfo, msgInfo, msgMeta, paymentInfo, rcat, reportingTokenInfo } = e;
            const b = o("WAWebMsgProcessingApiUtils").getFrom(msgInfo);
            f(encs, msgInfo);
            if (msgInfo.author.device != null && msgInfo.author.device !== 0) {
                const v = yield o("WAWebAdvSignatureApi").validateADVwithEncs({
                    author: msgInfo.author,
                    deviceIdentity,
                    encs,
                    offline: !!msgInfo.offline
                });
                if (!v) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptE2EPayload: msgId::",
                        ", validateADVIdentity failed"
                    ])), msgInfo.externalId).tags("messaging");
                    return {
                        result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY,
                        retryCount: encs[0].retryCount,
                        retryReason: o("WAWebSendRetryReceiptJob").RetryReason.AdvFailure
                    };
                }
            }
            let S = false;
            let R = false;
            const L = o("WAWebMsgProcessingDecryptionHandler").createDecryptionHandler(e);
            const E = o("WAWebMessageReceiveFlow").startMessageReceiveDecryptTimer(msgInfo.externalId, !!msgInfo.offline);
            const k = function*(i) {
                try {
                    if (!L.canDecryptNext(i)) {
                        return 1;
                    }
                    const r = o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.startMarker(o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.stage.Decryption);
                    const decrypted = yield E.timeDecrypt(function() {
                        return o("WAWebMsgProcessingDecryptEnc").decryptEnc({
                            enc: i,
                            from: b,
                            parsedMsgPayload: e,
                            participant: msgInfo.author,
                            sessionScope
                        });
                    });
                    r?.();
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptE2EPayload: msgId::",
                        " e2eType:",
                        " done"
                    ])), msgInfo.externalId, i.e2eType).tags("messaging");
                    o("WAWebPostE2eMessageRecvMetric").postSuccessE2eMessageRecvMetric({
                        enc: i,
                        from: b,
                        msgMeta,
                        msgInfo,
                        msgBotInfo,
                        error: null
                    });
                    const e2eInfo = {
                        retryCount: i.retryCount,
                        e2eType: i.e2eType,
                        encMediaType: i.encMediaType,
                        hideFail: i.hideFail,
                        isPq: i.sessionType === "pq"
                    };
                    const p = yield E.timeProcess(function() {
                        return t({
                            decrypted,
                            info: msgInfo,
                            paymentInfo,
                            e2eInfo,
                            bizInfo,
                            hsmInfo,
                            msgMeta,
                            rcat,
                            msgBotInfo,
                            reportingTokenInfo
                        });
                    });
                    if (p.hasInactiveMsg) {
                        S = true;
                    }
                    if (p.isOrphanAddon === true) {
                        R = true;
                    }
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "processDecryptedProto: msgId::",
                        " e2eType:",
                        " done"
                    ])), msgInfo.externalId, i.e2eType).tags("messaging");
                } catch (error) {
                    L.handleError(i, error);
                }
            };
            for (const I of encs){
                yield* k(I);
            }
            yield p(E, r);
            E.finish();
            return L.getResult(S, R);
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t?.awaitMessageWrites === true && o("WAWebSignalProtocolStore").getSignalProtocolStore().hasPendingPersistWrites()) {
                yield o("WAWebGetMessageCache").getMessageCache().checkpointQueueWait();
            }
            yield e.timeSignalFlush(function() {
                return o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode();
            });
        });
        return _.apply(this, arguments);
    }
    function f(encs, msgInfo) {
        if (encs.length === 2 && encs[0].e2eType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "decryptE2EPayload: msgId::",
                " skMsg is out of order"
            ])), msgInfo.externalId).tags("messaging").sendLogs("handleMsg: invalid encs order", {
                sampling: 0.01
            });
        }
    }
    l.decryptE2EPayload = d;
}, 98);