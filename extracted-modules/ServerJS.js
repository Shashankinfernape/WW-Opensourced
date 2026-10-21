__d("ServerJS", [
    "ContextualComponent",
    "ErrorGuard",
    "HasteBitMap",
    "HasteResourceIndexUtil",
    "ServerJSDefine",
    "__debug",
    "err",
    "ge",
    "getErrorSafe",
    "replaceTransportMarkers"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 1;
    const u = 2;
    const c = 16;
    let d = 0;
    class m {
        constructor(){
            this.$2 = {};
            this.$1 = null;
            this.$4 = {};
            this.$3 = undefined;
        }
        handle(t, n) {
            return this.$5(t, n, _);
        }
        handleWithCustomApplyEach(t, n, r) {
            this.$5(n, r, t);
        }
        $5(t, n, o) {
            this.$3 = n;
            if (t.__guard != null) {
                throw r("err")("ServerJS.handle called on data that has already been handled");
            }
            t.__guard = true;
            o(t.define || [], this.$6, this);
            o(t.markup || [], this.$7, this);
            o(t.elements || [], this.$8, this);
            this.$9(t.contexts || []);
            o(t.instances || [], this.$10, this);
            let e = o(t.pre_display_requires || [], this.$11, this);
            e = e.concat(o(t.require || [], this.$11, this));
            if (t.phd2_indexes != null) {
                this.$12(t.phd2_indexes);
            }
            return {
                cancel: function() {
                    e.forEach((e)=>{
                        if (e) {
                            e.cancel();
                        }
                    });
                }
            };
        }
        handlePartial(t, n) {
            const e = this;
            (t.instances || []).forEach((t)=>{
                h(e.$2, t);
            });
            (t.markup || []).forEach((t)=>{
                g(e.$2, t);
            });
            (t.elements || []).forEach((t)=>{
                g(e.$2, t);
            });
            return this.handle(t, n);
        }
        setRelativeTo(t) {
            this.$1 = t;
            return this;
        }
        cleanup(o) {
            const t = Object.keys(this.$2);
            if (o) {
                a.call(null, t, o.guard(function() {}, "SeverJS Cleanup requireLazy", {
                    propagationType: o.PropagationType.ORPHAN
                }));
            } else {
                a.call(null, t, function() {});
            }
            this.$2 = {};
            function i(e) {
                const t = this.$4[e];
                const o = t[0];
                const a = t[1];
                const i = t[2];
                delete this.$4[e];
                const l = a ? `JS::call("${o}", "${a}", ...)` : `JS::requireModule("${o}")`;
                const s = n("__debug").debugUnresolvedDependencies([
                    o,
                    e
                ]);
                throw p(r("err")("%s did not fire because it has missing dependencies.\n%s", l, s), i);
            }
            for(const l in this.$4){
                (e || (e = r("ErrorGuard"))).applyWithGuard(i, this, [
                    l
                ], {
                    name: `ServerJS:cleanup id: ${l}`,
                    project: "ServerJSCleanup"
                });
            }
        }
        $6(n, o, a, i) {
            return (e || (e = r("ErrorGuard"))).applyWithGuard(r("ServerJSDefine").handleDefine, r("ServerJSDefine"), [
                n,
                o,
                a,
                i,
                this.$1
            ], {
                name: "JS::define"
            });
        }
        $11(n, o, a, i) {
            return (e || (e = r("ErrorGuard"))).applyWithGuard(this.$13, this, [
                n,
                o,
                a,
                i
            ], {
                name: o != null ? "JS::call" : "JS::requireModule"
            });
        }
        $13(o, a, i, l) {
            const t = this;
            const m = r("ServerJSDefine").getModuleNameAndHash(o);
            const { hash, name } = m;
            let g;
            let h;
            if (typeof a === "object") {
                g = a;
            } else {
                g = i;
                h = a;
            }
            const y = [
                name
            ].concat(g || []);
            let C;
            if (h != null) {
                C = `__call__${name}.${h}`;
            } else if (l != null) {
                C = `__call__${name}`;
            } else {
                C = `__requireModule__${name}`;
            }
            C += `__${d++}`;
            this.$4[C] = [
                name,
                h,
                hash
            ];
            const b = this.$3 && this.$3.bigPipeContext;
            var v = (e || (e = r("ErrorGuard"))).guard(function(e) {
                const o = n.call(null, name);
                delete t.$4[C];
                if (l) {
                    r("replaceTransportMarkers")({
                        relativeTo: t.$1,
                        bigPipeContext: b
                    }, l);
                }
                if (h != null) {
                    if (!o[h]) {
                        throw p(r("err")('Module %s has no method "%s"', name, h), hash);
                    }
                } else if (l != null && typeof o !== "function") {
                    throw p(r("err")("Module %s is not a function but was called with args", name), hash);
                }
                const a = h != null ? o[h] : l != null && typeof o === "function" ? o : null;
                if (a != null) {
                    a.apply(o, l || []);
                    v.__SMmeta = a.__SMmeta || {};
                    v.__SMmeta.module = v.__SMmeta.module || name;
                    v.__SMmeta.name = v.__SMmeta.name || h;
                }
            }, {
                name: h != null ? `JS::call('${name}', '${h}', ...)` : l != null ? `JS::call('${name}', ...)` : `JS::requireModule('${name}')`
            });
            const S = define(C, y, v, s | c | u, this, 1, this.$3);
            return S;
        }
        $10(n, o, a, i) {
            (e || (e = r("ErrorGuard"))).applyWithGuard(this.$14, this, [
                n,
                o,
                a,
                i
            ], {
                name: "JS::instance"
            });
        }
        $14(t, o, a, i) {
            const e = this;
            let l = null;
            const s = r("ServerJSDefine").getModuleNameAndHash(t);
            const { hash, name } = s;
            if (o) {
                const p = this.$3 && this.$3.bigPipeContext;
                l = function() {
                    const t = n.call(null, o[0]);
                    r("replaceTransportMarkers")({
                        relativeTo: e.$1,
                        bigPipeContext: p
                    }, a);
                    const i = Object.create(t.prototype);
                    t.apply(i, a);
                    return i;
                };
            }
            define(name, o, l, u | c, null, i);
        }
        $7(n, o, a, i) {
            (e || (e = r("ErrorGuard"))).applyWithGuard(this.$15, this, [
                n,
                o,
                a,
                i
            ], {
                name: "JS::markup"
            });
        }
        $15(t, n, o, a) {
            const e = r("ServerJSDefine").getModuleNameAndHash(t);
            const { hash, name } = e;
            define(name, [
                a
            ], function(t) {
                try {
                    return t.replaceJSONWrapper(n).getRootNode();
                } catch (error) {
                    throw p(r("getErrorSafe")(error), hash);
                }
            }, c, null, o);
        }
        $8(n, o, a, i) {
            (e || (e = r("ErrorGuard"))).applyWithGuard(this.$16, this, [
                n,
                o,
                a,
                i
            ], {
                name: "JS::element"
            });
        }
        $16(t, n, o, a) {
            const e = r("ServerJSDefine").getModuleNameAndHash(t);
            const { hash, name } = e;
            if (n === null && o != null) {
                define(name, null, null, c, null, o);
                return;
            }
            const u = [];
            let d = c;
            let m = o || 0;
            if (a != null) {
                u.push(a);
                d |= s;
                m++;
            }
            define(name, u, function(t) {
                const e = r("ge")(n, t);
                if (!e) {
                    const o = "";
                    throw p(r("err")('Could not find element "%s"%s', n, o), hash);
                }
                return e;
            }, d, null, m);
        }
        $9(n) {
            (e || (e = r("ErrorGuard"))).applyWithGuard(this.$17, this, [
                n
            ], {
                name: "ContextualComponents"
            });
        }
        $17(t) {
            const e = this;
            const n = this.$3 && this.$3.bigPipeContext;
            t.map((t)=>{
                r("replaceTransportMarkers")({
                    relativeTo: e.$1,
                    bigPipeContext: n
                }, t);
                const o = t[0];
                return [
                    t,
                    f(o)
                ];
            }).sort((e, t)=>e[1] - t[1]).forEach(([t])=>{
                const element = t[0];
                const isRoot = t[1];
                r("ContextualComponent").register({
                    element,
                    isRoot
                });
            });
        }
        $12(t) {
            o("HasteResourceIndexUtil").parseResourceIndexes(t).forEach((e)=>o("HasteBitMap").add("__sjsp", e));
        }
    }
    function p(e, t) {
        e.serverHash = t;
        return e;
    }
    function _(e, t, n) {
        return e.map((r)=>t.apply(n, r));
    }
    function f(e) {
        let t = 0;
        for(let n = e; n;){
            n = n.parentElement;
            t++;
        }
        return t;
    }
    function g(e, t) {
        const n = r("ServerJSDefine").getModuleNameAndHash(t[0]);
        const n_name = n.name;
        if (!(n_name in e)) {
            t[2] = (t[2] || 0) + 1;
        }
        e[n_name] = true;
    }
    function h(e, t) {
        const n = r("ServerJSDefine").getModuleNameAndHash(t[0]);
        const n_name = n.name;
        if (!(n_name in e)) {
            t[3] = (t[3] || 0) + 1;
        }
        e[n_name] = true;
    }
    i.exports = m;
}, 34);