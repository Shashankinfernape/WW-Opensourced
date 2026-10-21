__d("useWAWebDevicePixelRatio", [
    "err",
    "once",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect: u, useState: c } = s;
    function d() {
        const e = o("react-compiler-runtime").c(2);
        const t = c(m);
        const n = t[0];
        const r = t[1];
        let a;
        let i;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = function() {
                return p().subscribe(function(e) {
                    r(e);
                });
            };
            i = [];
            e[0] = a;
            e[1] = i;
        } else {
            a = e[0];
            i = e[1];
        }
        u(a, i);
        return n;
    }
    function m() {
        return p().getValue();
    }
    var p = r("once")(function() {
        return new _;
    });
    var _ = (()=>{
        function e() {
            this.$1 = new Set;
        }
        const t = e.prototype;
        t.subscribe = function(t) {
            const e = this;
            if (this.$1.has(t)) {
                throw r("err")("Callback can only be added once.");
            }
            this.$1.add(t);
            this.$3();
            return function() {
                e.$1.delete(t);
                e.$3();
            };
        };
        t.getValue = function() {
            return window.devicePixelRatio ?? 1;
        };
        t.$3 = function() {
            const e = this;
            if (this.$1.size === 0) {
                this.$2?.();
                return;
            }
            if (this.$2 == null) {
                const n = matchMedia(`(resolution: ${this.getValue()}dppx)`);
                const r = function() {
                    e.$2?.();
                    const t = e.getValue();
                    e.$1.forEach((e)=>{
                        e(t);
                    });
                    e.$3();
                };
                n.addListener(r);
                this.$2 = function() {
                    n.removeListener(r);
                    e.$2 = null;
                };
            }
        };
        return e;
    })();
    l.default = d;
}, 98);