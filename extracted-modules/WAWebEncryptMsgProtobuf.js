__d("WAWebEncryptMsgProtobuf", [
    "Promise",
    "WALogger",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebE2eMessageSendWamEvent",
    "WAWebMsgGetters",
    "WAWebPostE2eMessageSendMetric",
    "WAWebSendMsgCommonApi",
    "WAWebSignal",
    "WAWebSignalSessionApi",
    "WAWebUserPrefsMeUser",
    "WAWebWamAddressingModeUtils",
    "WAWebWamEnumE2eDestination",
    "WAWebWamEnumEditType",
    "WAWebWamMsgUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e, t, n, r, o, a, i, l) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i, l, editType = o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED, d, m = false, coexV2SelfHosted) {
            try {
                const f = yield o("WAWebSignal").Cipher.encryptSignalProto(t, o("WAWebSendMsgCommonApi").encodeAndPad(i), d, m);
                const { ciphertext, type } = f;
                o("WAWebPostE2eMessageSendMetric").postSuccessDirectE2eMessageSendMetric({
                    to: t,
                    retryCount: a,
                    type,
                    msg: l,
                    editType,
                    sessionScope: d,
                    coexV2SelfHosted,
                    isPq: p(ciphertext)
                });
                return {
                    type,
                    ciphertext
                };
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptMsgProtobuf: encryption fail for ",
                    ", ",
                    ""
                ])), t.toString(), r("getErrorSafe")(error)).tags("messaging");
                o("WAWebSignalSessionApi").maybeDeleteUnconvertedSession(t).catch((e)=>{
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "maybeDeleteUnconvertedSession: cleanup failed for ",
                        ", ",
                        ""
                    ])), t.toString(), r("getErrorSafe")(e)).tags("messaging");
                });
                o("WAWebPostE2eMessageSendMetric").postFailureDirectE2eMessageSendMetric({
                    to: t,
                    retryCount: a,
                    msg: l,
                    editType,
                    sessionScope: d,
                    coexV2SelfHosted
                });
                return (c || (c = n("Promise"))).reject(r("err")(`[messaging] encryptMsgProtobuf: encryption fail for ${t.toString()}, ${r("getErrorSafe")(error).message}`));
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        if (e.byteLength === 0) {
            return false;
        }
        const t = new Uint8Array(e, 0, 1)[0];
        return t >>> 4 === 4;
    }
    function _(e, t, n, r) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a, i) {
            const d = new (o("WAWebE2eMessageSendWamEvent")).E2eMessageSendWamEvent({
                e2eSuccessful: true,
                e2eCiphertextType: o("WAWebBackendJobsCommon").getMetricE2eCiphertextType(o("WAWebBackendJobs.flow").CiphertextType.Skmsg),
                e2eCiphertextVersion: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION,
                e2eDestination: o("WAWebWamEnumE2eDestination").E2E_DESTINATION.GROUP,
                messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
                retryCount: 0,
                isLid: !!i.isLid || e.author?.isLid(),
                typeOfGroup: i.wamTypeOfGroup ?? undefined,
                editType: o("WAWebMsgGetters").getWamEditType(e),
                localAddressingMode: o("WAWebWamAddressingModeUtils").getAddressingModeMetricsFromGroupMetadata(i)
            });
            const m = o("WAWebWamMsgUtils").getWamAgentEngagementType(e);
            if (m != null) {
                d.agentEngagementType = m;
            }
            const p = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
            try {
                return babelHelpers.extends({}, (yield o("WAWebSignal").Cipher.encryptSenderKeyMsgSignalProto(t, p, a)));
            } catch (error) {
                d.e2eSuccessful = false;
                d.weight = 1;
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptMsgSenderKey: encryption fail for ",
                    ", ",
                    ""
                ])), t.toString(), r("getErrorSafe")(error)).tags("messaging");
                return (c || (c = n("Promise"))).reject(r("err")(`[messaging] encryptMsgSenderKey: encryption fail for ${t.toString()}, ${r("getErrorSafe")(error).message}`));
            } finally{
                d.commit();
            }
        });
        return f.apply(this, arguments);
    }
    l.encryptMsgProtobuf = d;
    l.isPqxdhCiphertext = p;
    l.encryptMsgSenderKey = _;
}, 98);