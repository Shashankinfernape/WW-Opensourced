__d("WAWebBackendWorkerInitState", [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebBackendWorkerClient",
    "WAWebCallsOnlyGating",
    "WAWebGlobals",
    "WAWebJobsMigrationGating",
    "WAWebUserPrefsBase",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = 30000;
    const m = {
        abProps: new (c = o("WAResolvable")).Resolvable,
        dbInit: new c.Resolvable,
        dbFinalKey: new c.Resolvable,
        jidsReady: new c.Resolvable
    };
    let p = false;
    let _ = null;
    function f(t) {
        _ = t;
        if (!m.abProps.resolveWasCalled()) {
            m.abProps.resolve(t);
            return;
        }
        o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>e.sendAndReceive("abProps", "update", t)).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Error syncing abprops with backend worker: ",
                ""
            ])), r("getErrorSafe")(t)).sendLogs("worker-abprop-sync-failed");
        });
    }
    function g(e) {
        if (!m.dbInit.resolveWasCalled()) {
            m.dbInit.resolve(babelHelpers.extends({}, e, {
                salt: new Uint8Array(e.salt)
            }));
        }
    }
    function h(e) {
        if (!m.dbFinalKey.resolveWasCalled()) {
            m.dbFinalKey.resolve(e);
        }
    }
    function y() {
        if (!m.jidsReady.resolveWasCalled()) {
            m.jidsReady.resolve();
        }
    }
    function C() {
        if (!p) {
            p = true;
            self.setTimeout(b, d);
        }
    }
    function b() {
        const e = [];
        if (!m.dbInit.resolveWasCalled()) {
            e.push("dbInit");
        }
        if (!m.jidsReady.resolveWasCalled()) {
            e.push("jidsReady");
        }
        if (e.length !== 0) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Backend worker init data not ready after ",
                "ms, outstanding: ",
                ""
            ])), d, e.join(",")).sendLogs("backend-worker-init-data-timeout");
        }
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield (u || (u = n("Promise"))).all([
                m.dbInit.promise,
                m.jidsReady.promise
            ]);
            const r = t[0];
            const a = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME);
            const i = o("WAWebUserPrefsBase").userPreferencesStoreBase.get(o("WAWebUserPrefsKeys").KEYS.LID);
            const l = o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus();
            e.fireAndForget("workerInit", "setup", {
                globals: {
                    deviceJid: o("WAWebGlobals").getMyDeviceJid(),
                    allowHistorySyncPutAllowDuplicate: o("WAWebGlobals").getAllowHistorySyncPutAllowDuplicate(),
                    lidDeviceJid: i != null ? String(i) : null,
                    displayName: a != null ? String(a) : null,
                    callsOnly: o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled(),
                    jobsMigrationGates: o("WAWebJobsMigrationGating").getJobsMigrationGates()
                },
                dbInit: babelHelpers.extends({}, r, {
                    salt: new Uint8Array(r.salt)
                }),
                eventBusSyncState: {
                    isMainStreamReadyMd: l.isMainStreamReadyMd,
                    isOfflineDeliveryEnd: l.isOfflineDeliveryEnd,
                    socketState: l.socketState
                }
            });
            m.abProps.promise.then((t)=>{
                e.fireAndForget("workerInit", "setAbProps", {
                    abProps: _ ?? t
                });
            });
            m.dbFinalKey.promise.then((t)=>{
                e.fireAndForget("workerInit", "setDbFinalKey", {
                    dbFinalKey: t
                });
            });
        });
        return S.apply(this, arguments);
    }
    l.recordInitAbProps = f;
    l.recordInitDbInit = g;
    l.recordInitDbFinalKey = h;
    l.resolveJidsReady = y;
    l.startWorkerInitDataTimeout = C;
    l.sendInitState = v;
}, 98);