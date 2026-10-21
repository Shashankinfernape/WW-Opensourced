__d("WAWebCommsSendPing", [
    "WAComms",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebABProps",
    "asyncToGeneratorRuntime",
    "cr:2960"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d = null;
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "blockSendPing: sending ping..."
                ])));
                const n = yield o("WAPromiseTimeout").promiseTimeout(o("WAComms").sendPing(), t * 1000);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "blockSendPing: is connected: ",
                    ""
                ])), n);
                return n;
            } catch (e) {
                if (e instanceof o("WACustomError").TimeoutError) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "blockSendPing: no response in ",
                        "s"
                    ])), t);
                    return false;
                }
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "blockSendPing: failed to send ping: ",
                    ""
                ])), e);
                throw e;
            } finally{
                d = null;
            }
        });
        return p.apply(this, arguments);
    }
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (d != null) {
                return d;
            }
            const e = o("WAWebABProps").getABPropConfigValue("web_offline_resume_wait_for_ping_timeout_seconds");
            d = m(e);
            return d;
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        o("WATimeUtils").setClockSkew(e);
        if (n("cr:2960") != null) {
            n("cr:2960").reportServerTimeFromPing(e);
        }
    }
    l.blockSendPing = _;
    l.updateClockSkew = g;
}, 98);