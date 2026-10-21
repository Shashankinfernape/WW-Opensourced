__d("JSSPStackFrameFilterBase", [
    "FBLogger",
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = -1;
    const s = ((t)=>{
        function a() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getTraceAnnotation = function() {
            return "simplified";
        };
        a_prototype.getStackIdsToRemove = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                r("FBLogger")("JSSelfProfiler").warn("JSSPStackFrameFilterBase.getStackIdsToRemove should be overridden.");
                return new Set;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.transform = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = yield this.getStackIdsToRemove(t);
                const a = yield this.getSampleIdsWithFramesRemoved(t, n);
                const i = new Map;
                const l = new Map;
                for(var s = t.stacks, u = [], c = 0, d = 0, m = 0; c < s.length;){
                    const p = s[c];
                    if (n.has(c)) {
                        if (p.parentId != null) {
                            l.set(c, p.parentId);
                        }
                        ++m;
                    } else {
                        u.push(p);
                        i.set(c, d++);
                    }
                    ++c;
                }
                for (const _ of l.keys()){
                    let g = l.get(_) ?? e;
                    if (g === e) {
                        l.delete(_);
                        continue;
                    }
                    const h = new Set;
                    while(l.has(g)){
                        const y = l.get(g);
                        if (y == null || y === e) {
                            l.delete(g);
                            break;
                        }
                        if (h.has(g)) {
                            break;
                        }
                        h.add(g);
                        g = y;
                    }
                    if (g !== e) {
                        l.set(_, g);
                    } else {
                        l.delete(_);
                    }
                }
                for (const C of l.keys()){
                    const v = l.get(C) ?? e;
                    if (v === e) {
                        l.delete(C);
                        continue;
                    }
                    const S = i.get(v);
                    if (S != null) {
                        l.set(C, S);
                    } else {
                        l.delete(C);
                    }
                }
                u.forEach((t)=>{
                    if (t.parentId != null) {
                        if (i.has(t.parentId)) {
                            t.parentId = i.get(t.parentId);
                        } else if (l.has(t.parentId)) {
                            const n = l.get(t.parentId);
                            if (n === e) {
                                delete t.parentId;
                            } else {
                                t.parentId = n;
                            }
                        } else {
                            delete t.parentId;
                        }
                        if (t.parentId === e) {
                            delete t.parentId;
                        }
                    }
                });
                t.stacks = u;
                const R = this.getTraceAnnotation();
                t.samples = t.samples.map((e, t)=>{
                    if (a.has(t)) {
                        o("JSSelfProfilerUtils").addMarkerToSample(e, R);
                    }
                    return e;
                }).filter((e)=>e.stackId != null && i.has(e.stackId)).map((e)=>{
                    e.stackId = i.get(e.stackId ?? 0);
                    return e;
                });
                if (r("gkx")("962")) {
                    const L = (m / s.length * 100).toFixed(2);
                    r("FBLogger")("JSSelfProfiler").info("JSSP trace optimizer removed %s frames (%s%)", m, L);
                }
                return t;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.getSampleIdsWithFramesRemoved = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = o("JSSelfProfilerUtils").getStackIdToSampleIdMap(e);
                const r = new Set;
                for (const a of t){
                    if (n.has(a)) {
                        r.add(n.get(a) ?? -1);
                    }
                }
                return r;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(r("JSSPTraceBaseTransformer"));
    l.default = s;
}, 98);