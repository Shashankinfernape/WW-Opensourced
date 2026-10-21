__d("WAWebVoipChunkLoadFailFast", [
    "BootloaderEvents",
    "Promise",
    "WALogger",
    "WAWebVoipDeferredBootLogging",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 30000;
    const d = 80;
    const m = ((e)=>{
        function t() {
            let t;
            t = e.call(this, "A VoIP chunk failed to load") || this;
            t.name = "VoipChunkLoadError";
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const p = new Map;
    const _ = new Set;
    let f = false;
    function g(e, t) {
        y();
        return new (u || (u = n("Promise")))(function(n, r) {
            const o = self.performance.now();
            let a = false;
            let i = false;
            var l = self.setTimeout(function() {
                a = true;
                u();
            }, c);
            _.add(u);
            function s() {
                if (i) {
                    return false;
                }
                i = true;
                self.clearTimeout(l);
                _.delete(u);
                return true;
            }
            function u() {
                const e = a ? b(t) : null;
                if (!(e == null || !s())) {
                    R(e, o);
                    r(new m);
                }
            }
            e.then((e)=>{
                if (s()) {
                    n(e);
                }
            }, (e)=>{
                if (s()) {
                    L(e, o);
                    r(new m);
                }
            });
        });
    }
    function h() {
        p.clear();
        _.clear();
        f = false;
    }
    function y() {
        if (!f) {
            f = true;
            o("BootloaderEvents").onBootloadError(C);
        }
    }
    function C({ bootloaderData: t, erroredResources: n }) {
        const r = n.values().next().value;
        if (r != null) {
            const o = v(r);
            for (const a of t.components){
                if (!p.has(a)) {
                    p.set(a, o);
                }
            }
            _.forEach((e)=>e());
        }
    }
    function b(e) {
        for (const t of e){
            const n = p.get(t);
            if (n != null) {
                return {
                    moduleId: t,
                    resource: n
                };
            }
        }
        return null;
    }
    function v(e) {
        const t = e.split(/[?#]/)[0];
        return t.slice(t.lastIndexOf("/") + 1).slice(0, d);
    }
    function S(e) {
        return Math.round(self.performance.now() - e);
    }
    function R(t, n) {
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] chunk_load_failed source=bootload_error module=",
                " resource=",
                " waited_ms=",
                ""
            ])), t.moduleId, t.resource, S(n)).tags("non-sad").sendLogs("voip-deferred-boot-chunk-load-failed");
        });
    }
    function L(e, t) {
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] chunk_load_failed source=load_rejected waited_ms=",
                ""
            ])), S(t)).catching(r("getErrorSafe")(e)).tags("non-sad").sendLogs("voip-deferred-boot-chunk-load-failed");
        });
    }
    l.VoipChunkLoadError = m;
    l.failFastOnVoipChunkLoadError = g;
    l.resetVoipChunkLoadFailFastForTesting = h;
}, 98);