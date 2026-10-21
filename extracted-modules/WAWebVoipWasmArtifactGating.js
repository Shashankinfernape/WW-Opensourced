__d("WAWebVoipWasmArtifactGating", [
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebABPropsConfigs",
    "WAWebVoipGatingUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = {
        pinWorkerGlue: false,
        useContentAddressedWasm: false
    };
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield d();
            return e.useContentAddressedWasm;
        });
        return c.apply(this, arguments);
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebVoipGatingUtils").isGuestViewer()) {
                return s;
            }
            try {
                yield o("WAWebABPropsCache").waitForABPropConfigsReady();
                if (o("WAWebABPropsConfigs").ABPropConfigs.web_voip_use_content_addressed_wasm == null) {
                    return s;
                }
                const useContentAddressedWasm = o("WAWebABProps").getABPropConfigValue("web_voip_use_content_addressed_wasm") === true;
                if (!useContentAddressedWasm) {
                    return s;
                }
                const pinWorkerGlue = o("WAWebABPropsConfigs").ABPropConfigs.web_voip_pin_worker_glue_to_wasm != null && o("WAWebABProps").getABPropConfigValue("web_voip_pin_worker_glue_to_wasm") === true;
                return {
                    pinWorkerGlue,
                    useContentAddressedWasm
                };
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Content-addressed WASM gating failed; using unversioned loader"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-wasm-artifact-selection-failed");
                return s;
            }
        });
        return m.apply(this, arguments);
    }
    l.shouldUseContentAddressedVoipWasm = u;
    l.selectVoipWasmArtifacts = d;
}, 98);