__d("WAWebBrowserApi", [
    "Promise",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = null;
    function u(e) {
        s = e;
    }
    function c() {
        return s;
    }
    let d = null;
    function m(e) {
        d = e;
    }
    function p() {
        return d;
    }
    function _() {
        if (r("gkx")("17565")) {
            return 1000;
        }
        const e = self.navigator;
        const t = e?.deviceMemory;
        if (t == null) {
            return t;
        }
        return t * 1000;
    }
    function f() {
        if (r("gkx")("17565")) {
            return 1;
        }
        return self.navigator?.hardwareConcurrency;
    }
    function g() {
        const e = globalThis.navigator;
        if (e != null) {
            const t = e.cpu;
            if (t != null) {
                const n = t.performance;
                if (typeof n === "string") {
                    return n;
                }
                return void 0;
            }
        }
    }
    function h() {
        const t = globalThis.navigator;
        if (t == null) {
            return (e || (e = n("Promise"))).resolve(void 0);
        }
        const r = t.userAgentData;
        const o = r?.getHighEntropyValues;
        if (o == null) {
            return (e || (e = n("Promise"))).resolve(void 0);
        }
        return o.call(r, [
            "architecture",
            "bitness"
        ]).then((e)=>{
            const t = e.architecture;
            if (!(t == null || t === "")) {
                const n = e.bitness;
                if (n == null || n === "") {
                    return t;
                }
                return `${t}-${n}`;
            }
        }).catch(()=>{});
    }
    l.setMemClassOverride = u;
    l.getMemClassOverride = c;
    l.setOsVersionOverride = m;
    l.getOsVersionOverride = p;
    l.getMemClass = _;
    l.getNumCpu = f;
    l.readCpuPerformanceClass = g;
    l.getCpuArchitecture = h;
}, 98);