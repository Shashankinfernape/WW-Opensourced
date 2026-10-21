__d("JSSPReactFrameDedupFilter", [
    "JSSPStackFrameFilterBase",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this) || this;
            n.$JSSPReactFrameDedupFilter$p_1 = new Set(t);
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getStackIdsToRemove = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = new Set;
                o("JSSelfProfilerUtils").mergeSets(t, (yield this.getStackIdsInBlockList(e)));
                o("JSSelfProfilerUtils").mergeSets(t, (yield this.getStackIdsInRepetitivePatterns(e)));
                return t;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getStackIdsInBlockList = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = new Set;
                for(let n = e.stacks, r = 0; r < n.length; ++r){
                    const a = n[r];
                    const i = o("JSSelfProfilerUtils").getStackFrameName(a, e);
                    if (i != null && this.$JSSPReactFrameDedupFilter$p_1.has(i)) {
                        t.add(r);
                    }
                }
                return t;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getStackIdsInRepetitivePatterns = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = new Set;
                for(let n = e.samples, r = e.stacks, o = 0; o < n.length; ++o){
                    const l = new Set;
                    const s = n[o];
                    for(let u = r[s.stackId ?? -1]?.parentId; u != null;){
                        if (l.has(u)) {
                            break;
                        }
                        const L = r[u].frameId ?? -1;
                        const E = r[u]?.parentId ?? -2;
                        const k = r[E]?.frameId ?? -3;
                        const I = r[E]?.parentId ?? -4;
                        const T = r[I]?.frameId ?? -5;
                        const D = r[I]?.parentId ?? -6;
                        const x = r[D]?.frameId ?? -7;
                        if (L === T && k === x && L !== k) {
                            t.add(u);
                            t.add(E);
                            l.add(E);
                            u = r[u].parentId ?? -1;
                        }
                        l.add(u);
                        u = r[u]?.parentId;
                    }
                }
                return t;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(r("JSSPStackFrameFilterBase"));
    l.default = e;
}, 98);