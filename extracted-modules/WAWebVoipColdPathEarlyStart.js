__d("WAWebVoipColdPathEarlyStart", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebVoipBackendLoadable",
    "WAWebVoipBootInitDecision",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipQplHelpers",
    "WAWebVoipStackInterface",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(t, n) {
        try {
            if (!p()) {
                return;
            }
            const a = _();
            o("WAWebVoipQplHelpers").voipInitQplRecordEarlyStart(n);
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] early_start trigger=",
                    " wasm_loader=",
                    ""
                ])), t, a);
            });
            m(a).forEach(({ load, module })=>{
                g(t, module, load);
            });
        } catch (error) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] early_start gate_failed trigger=",
                    ""
                ])), t).catching(r("getErrorSafe")(error));
            });
        }
    }
    function m(e, t = o("WAWebVoipBackendLoadable").requireVoipJsBackend) {
        const n = [
            {
                load: t,
                module: "backend"
            },
            {
                load: o("WAWebVoipStackInterface").prefetchVoipStackInterfaceModule,
                module: "stack_interface"
            }
        ];
        if (e) {
            n.push({
                load: f,
                module: "wasm_loader"
            });
        }
        return n;
    }
    function p() {
        return !o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited() && o("WAWebVoipGatingUtils").isCallingEnabled() && o("WAWebVoipGatingUtils").isVoipDownloadEnabled() && o("WAWebVoipBootInitDecision").isDeferredVoipBootEarlyModulePrefetchEnabled();
    }
    function _() {
        return o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd() || o("WAWebABProps").getABPropConfigValue("web_voip_skip_offline_wait_on_call_intent") === true;
    }
    function f() {
        return o("WAWebBackendApi").frontendSendAndReceive("prefetchVoipWasmLoaderModule");
    }
    function g(e, t, load) {
        (c || (c = n("Promise"))).resolve().then(load).catch((n)=>{
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] early_start failed trigger=",
                    " module=",
                    ""
                ])), e, t).catching(r("getErrorSafe")(n));
            });
        });
    }
    l.startVoipColdPathEarly = d;
    l.getVoipColdPathModuleLoads = m;
}, 98);