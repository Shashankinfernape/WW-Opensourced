__d("RunComet", [
    "ExecutionEnvironment",
    "FBLogger",
    "createCancelableFunction",
    "emptyFunction",
    "getErrorSafe",
    "gkx",
    "setTimeout",
    "unexpectedUseInComet"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = {};
    let c = false;
    let d = false;
    const m = {
        remove: r("emptyFunction")
    };
    function p(e, t) {
        if (u.unload == null) {
            u.unload = [];
            u.afterunload = [];
            if ((s || (s = r("ExecutionEnvironment"))).canUseEventListeners) {
                window.addEventListener("unload", function() {
                    h("unload");
                    h("afterunload");
                });
            }
        }
        if (u[e] == null) {
            r("FBLogger")("comet_infra").mustfix("EVENT_LISTENERS.%s wasn't initialized but should have been!", e);
            u[e] = [
                t
            ];
        } else {
            u[e].push(t);
        }
    }
    function _(e) {
        return r("createCancelableFunction")(e);
    }
    function f(e, t) {
        return {
            remove: function() {
                t.cancel();
                if (r("gkx")("11588")) {
                    const n = u[e];
                    if (n != null) {
                        const o = n.indexOf(t);
                        if (o !== -1) {
                            n.splice(o, 1);
                        }
                    }
                }
            }
        };
    }
    function g(t, n) {
        try {
            n();
        } catch (error) {
            const o = r("getErrorSafe")(error);
            r("FBLogger")("comet_infra").catching(o).MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Hit an error while executing '",
                "' event listeners."
            ])), t);
        }
    }
    function h(e) {
        const t = u[e] || [];
        if (r("gkx")("11588")) {
            while(t.length > 0){
                const n = t.shift();
                if (n != null) {
                    g(e, n);
                }
            }
        } else {
            for(let o = 0; o < t.length; o++){
                g(e, t[o]);
            }
        }
        u[e] = [];
    }
    function y(e) {
        return u[e]?.length ?? 0;
    }
    function C(e) {
        if (c) {
            e();
            return m;
        }
        const t = _(e);
        if (u.domcontentloaded == null) {
            u.domcontentloaded = [
                t
            ];
            if ((s || (s = r("ExecutionEnvironment"))).canUseEventListeners) {
                window.addEventListener("DOMContentLoaded", function() {
                    h("domcontentloaded");
                }, true);
            }
        } else {
            u.domcontentloaded.push(t);
        }
        return f("domcontentloaded", t);
    }
    function b(e) {
        const t = _(e);
        p("afterunload", t);
        return f("afterunload", t);
    }
    function v(e) {
        const t = _(e);
        if (u.load == null) {
            u.load = [
                t
            ];
            if ((s || (s = r("ExecutionEnvironment"))).canUseEventListeners) {
                window.addEventListener("load", function() {
                    h("domcontentloaded");
                    h("load");
                });
            }
        } else {
            u.load.push(t);
        }
        if (d) {
            r("setTimeout")(function() {
                h("domcontentloaded");
                h("load");
            }, 0);
        }
        return f("load", t);
    }
    function S(e) {
        const t = _(e);
        p("unload", t);
        return f("unload", t);
    }
    function R(e) {
        const t = _(e);
        if (u.beforeunload == null) {
            u.beforeunload = [
                t
            ];
            if ((s || (s = r("ExecutionEnvironment"))).canUseEventListeners) {
                window.addEventListener("beforeunload", function(e) {
                    const o = r("gkx")("11588") ? [].concat(u.beforeunload ?? []) : u.beforeunload ?? [];
                    for (const a of o){
                        let i;
                        try {
                            i = a();
                        } catch (error) {
                            const l = r("getErrorSafe")(error);
                            r("FBLogger")("comet_infra").catching(l).mustfix("Hit an error while executing onBeforeUnload event listeners.");
                        }
                        if (i !== undefined) {
                            if (i != null && i.body != null) {
                                i = i.body;
                            }
                            e.preventDefault();
                            const s = typeof i === "string" ? i : String(i);
                            e.returnValue = s;
                            return s;
                        }
                    }
                });
            }
        } else {
            u.beforeunload.push(t);
        }
        return f("beforeunload", t);
    }
    const L = R;
    function E(e) {
        r("unexpectedUseInComet")("Run.onLeave");
        return m;
    }
    function k(e, t) {
        r("unexpectedUseInComet")("Run.onCleanupOrLeave");
        return m;
    }
    function I(e) {
        r("unexpectedUseInComet")("Run.removeHook");
    }
    function T() {
        if (document.readyState === "loading") {
            C(function() {
                c = true;
            });
        } else {
            c = true;
        }
        if (document.readyState === "complete") {
            d = true;
        } else {
            const e = window.onload;
            window.onload = function() {
                if (e) {
                    e();
                }
                d = true;
            };
        }
    }
    if ((s || (s = r("ExecutionEnvironment"))).canUseDOM) {
        T();
    }
    const D = null;
    const x = null;
    l.getEventListenerCountForTesting = y;
    l.onLoad = C;
    l.onAfterUnload = b;
    l.onAfterLoad = v;
    l.onUnload = S;
    l.onBeforeUnload = R;
    l.maybeOnBeforeUnload = L;
    l.onLeave = E;
    l.onCleanupOrLeave = k;
    l.__removeHook = I;
    l.__domContentCallback = D;
    l.__onloadCallback = x;
}, 98);