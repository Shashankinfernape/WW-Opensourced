__d("ScriptPositionMapper", [
    "OneTraceSetup",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const u = 5000;
    const c = 100;
    const d = o("OneTraceSetup").getConfig()?.LoAF?.config?.skip_script_position_conversion ?? [];
    const m = new Map;
    let p = 1;
    function _(e) {
        let t = m.get(e);
        if (t == null) {
            t = p++;
            m.set(e, t);
        }
        return t;
    }
    class f {
        constructor(e){
            this.$1 = new Map;
            this.$2 = e;
        }
        get(t) {
            const e = this.$1.get(t);
            if (e != null) {
                this.$1.delete(t);
                this.$1.set(t, e);
                return e;
            }
        }
        set(t, n) {
            if (this.$1.has(t)) {
                this.$1.delete(t);
            }
            this.$1.set(t, n);
            if (this.$1.size > this.$2) {
                const e = this.$1.keys().next().value;
                if (e != null) {
                    this.$1.delete(e);
                }
            }
        }
    }
    const g = new f(u);
    const h = new f(c);
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n = h.get(e);
            if (n == null) {
                const r = yield fetch(t);
                if (!r.ok) {
                    return null;
                }
                n = yield r.text();
                h.set(e, n);
            }
            return n;
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = {
                line: -1,
                column: -1
            };
            if (t === 0) {
                return {
                    line: 1,
                    column: 0
                };
            }
            for (const r of d){
                if (r.test(e)) {
                    return n;
                }
            }
            try {
                const o = _(e);
                const a = `${o}:${t}`;
                const i = g.get(a);
                if (i) {
                    return i;
                }
                const l = yield y(o, e);
                if (l == null || t < 0 || t > l.length) {
                    return n;
                }
                for(var s = l.split("\n"), u = 0, c = 0; c < s.length; c++){
                    const m = s[c].length + 1;
                    if (u + m > t) {
                        const column = t - u;
                        const f = {
                            line: c + 1,
                            column
                        };
                        g.set(a, f);
                        return f;
                    }
                    u += m;
                }
                const h = {
                    line: s.length,
                    column: s[s.length - 1].length
                };
                g.set(a, h);
                return h;
            } catch (e) {
                return n;
            }
        });
        return v.apply(this, arguments);
    }
    l.MAX_POS_LRU_ENTRIES = u;
    l.MAX_SCRIPT_TEXT_LRU_ENTRIES = c;
    l.BLOCKLIST_REGEXPS = d;
    l.getLineAndColumnFromCharPosition = b;
}, 98);