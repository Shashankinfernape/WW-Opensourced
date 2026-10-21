__d("WAWebMsgProcessingDecryptEnc", [
    "Promise",
    "WAWebBackendJobs.flow",
    "WAWebBotMessageSecret",
    "WAWebBotUtils",
    "WAWebMsgProcessingApiUtils",
    "WAWebOrphanBotMsgError",
    "WAWebSignal",
    "WAWebWasaRootSecretWriter",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ enc, from, parsedMsgPayload, participant, sessionScope }) {
        const { ciphertext, e2eType } = enc;
        if (e2eType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg) {
            return (()=>{
                if (from.isGroup() || from.isBroadcast()) {
                    if (participant) {
                        return o("WAWebSignal").Cipher.decryptGroupSignalProto({
                            ciphertext,
                            sender: participant,
                            target: from
                        });
                    }
                    return (e || (e = n("Promise"))).reject(r("err")(`['messaging'] decryptEnc: receive msg from ${from.toString()} without participant`));
                }
                return (e || (e = n("Promise"))).reject(r("err")(`['messaging'] decryptEnc: Can not do skmsg for non group ${from.toString()}`));
            })();
        }
        if (e2eType === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg || e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msg) {
            return (()=>{
                const t = from.isUser() ? from : participant;
                if (!t) {
                    return (e || (e = n("Promise"))).reject(r("err")(`['messaging'] decryptEnc: receive msg from ${from.toString()} without participant`));
                }
                const u = o("WAWebMsgProcessingApiUtils").shouldOmitSessionPersistence(e2eType, parsedMsgPayload, enc, t);
                return o("WAWebSignal").Cipher.decryptSignalProto(t, e2eType, ciphertext, u, sessionScope);
            })();
        }
        if (e2eType === o("WAWebBackendJobs.flow").CiphertextType.Msmsg) {
            return u(ciphertext, parsedMsgPayload);
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e2eType}`);
        })();
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                return yield o("WAWebBotMessageSecret").decryptMsmsgBotMessage(e, t);
            } catch (error) {
                if (!(error instanceof r("WAWebOrphanBotMsgError"))) {
                    throw error;
                }
                const n = yield d(t);
                if (n === "recovered") {
                    return o("WAWebBotMessageSecret").decryptMsmsgBotMessage(e, t);
                }
                throw n === "unrecovered" ? new (r("WAWebOrphanBotMsgError"))(error.targetMsgKey, "wasa-root-secret-missing") : error;
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msgInfo, msgMeta }) {
            const msgMeta_targetId = msgMeta.targetId;
            if (msgMeta_targetId == null) {
                return "not-wasa";
            }
            const i = msgMeta.targetChatJid ?? msgInfo.chat;
            if (o("WAWebBotUtils").isHatchBot(i)) {
                if (yield o("WAWebWasaRootSecretWriter").maybeRecoverWasaRootSecretFromStore(i, msgMeta_targetId)) {
                    return "recovered";
                }
                return "unrecovered";
            }
            return "not-wasa";
        });
        return m.apply(this, arguments);
    }
    l.decryptEnc = s;
}, 98);