__d("WAWebVoipBootInitDecision", [
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebEnvironment",
    "WAWebVoipGatingUtils"
], function(t, n, r, o, a, i, l) {
    let e = null;
    let s = false;
    function u() {
        if (!o("WAWebABPropsCache").isABPropConfigsReady()) {
            e = null;
            s = false;
            return null;
        }
        if (e != null) {
            if (s && !f()) {
                e = "eager";
            }
            return e;
        }
        const t = _();
        if (t !== "skip") {
            e = t;
        }
        return t;
    }
    function c() {
        return u() === "deferred";
    }
    function d() {
        return c() && o("WAWebABProps").getABPropConfigValue("web_voip_deferred_boot_early_module_prefetch") === true;
    }
    function m() {
        return c() && o("WAWebABProps").getABPropConfigValue("web_voip_deferred_boot_init_max_delay_ms") <= 0 && o("WAWebABProps").getABPropConfigValue("web_voip_deferred_boot_hidden_prewarm") === true;
    }
    function p() {
        e = null;
        s = false;
    }
    function _() {
        if (o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) {
            if (r("WAWebEnvironment").isWindows || o("WAWebVoipGatingUtils").isGuestViewer()) {
                return "eager";
            }
            s = true;
            if (f()) {
                return "deferred";
            }
            return "eager";
        }
        return "skip";
    }
    function f() {
        return o("WAWebABProps").getABPropConfigValue("web_voip_deferred_boot_init") === true;
    }
    l.getVoipBootInitDecision = u;
    l.isDeferredVoipBootInitEnabled = c;
    l.isDeferredVoipBootEarlyModulePrefetchEnabled = d;
    l.isDeferredVoipBootHiddenPrewarmEnabled = m;
    l.resetVoipBootInitDecisionForTesting = p;
}, 98);