__d("WAWebHandlePairDevice", [
    "Promise",
    "WABinary",
    "WALogger",
    "WAShiftTimer",
    "WASmaxMdSetToCompanionRPC",
    "WAWebAdvSignatureApi",
    "WAWebBackendEventBus",
    "WAWebConnModel",
    "WAWebNetworkStatus",
    "WAWebSocketConstants",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = 60000;
    const c = 20 * 1000;
    let d = [];
    let m = null;
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let a;
            try {
                a = o("WASmaxMdSetToCompanionRPC").receiveSetToCompanionRPC(t);
            } catch (t) {
                const i = r("getErrorSafe")(t);
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handlePairDevice: error"
                ]))).catching(i);
                return (s || (s = n("Promise"))).reject(i);
            }
            const l = a;
            const { makeSetToCompanionResponseClientResponse: u, parsedRequest: c } = l;
            const d = c.pairDeviceRef.map((e)=>{
                const t = new (o("WABinary")).Binary(e.elementValue);
                return t.readString(t.size());
            });
            f(d);
            return u();
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebAdvSignatureApi").generateADVSecretKey();
            d = e;
            if (!m) {
                m = new (o("WAShiftTimer")).ShiftTimer(function() {
                    if (o("WAWebUserPrefsMultiDevice").isRegistered() || !r("WAWebNetworkStatus").online) {
                        if (m) {
                            m.cancel();
                        }
                        m = null;
                    } else if (!d || !d.length) {
                        if (m) {
                            m.cancel();
                        }
                        m = null;
                        o("WAWebBackendEventBus").BackendEventBus.triggerSetSocketState(o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED_IDLE);
                    } else {
                        const e = d.length === 6 ? u : c;
                        const t = d.shift();
                        o("WAWebConnModel").Conn.set({
                            ref: t,
                            refTTL: e
                        });
                        o("WAWebBackendEventBus").BackendEventBus.triggerSetSocketState(o("WAWebSocketConstants").SOCKET_STATE.UNPAIRED);
                        if (m) {
                            m.onOrAfter(e);
                        }
                    }
                });
            }
            m.forceRunNow();
        });
        return g.apply(this, arguments);
    }
    l.default = p;
}, 98);