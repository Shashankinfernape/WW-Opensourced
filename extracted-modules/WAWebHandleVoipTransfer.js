__d("WAWebHandleVoipTransfer", [
    "WALogger",
    "WAWebABProps",
    "WAWebHandleMsgTypes.flow",
    "WAWebVoipHandleIncomingSignalingMessage",
    "WAWebVoipRejectCallWithReasonEnc",
    "WAWebVoipValidateAndDecryptEnc",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (o("WAWebABProps").getABPropConfigValue("enable_call_transfer_auto_switch") !== true) {
                yield o("WAWebVoipHandleIncomingSignalingMessage").handleVoipIncomingSignalingMessage(t, n);
                return;
            }
            const r = yield o("WAWebVoipValidateAndDecryptEnc").validateAndDecryptEnc(n, t);
            const { result, retryCount } = r;
            e: {
                if (result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS) {
                    yield o("WAWebVoipHandleIncomingSignalingMessage").handleVoipIncomingSignalingMessage(t, n);
                    break e;
                }
                if (result === o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY) {
                    const l = yield o("WAWebVoipRejectCallWithReasonEnc").rejectCallWithReasonEnc(t, retryCount ?? 0, false);
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: transfer reject enc, call=",
                        " count=",
                        ""
                    ])), t.call_id, l);
                    break e;
                }
                {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: transfer dropped, e2e result=",
                        " call=",
                        ""
                    ])), String(result), t.call_id);
                    break e;
                }
            }
        });
        return c.apply(this, arguments);
    }
    l.handleVoipTransfer = u;
}, 98);