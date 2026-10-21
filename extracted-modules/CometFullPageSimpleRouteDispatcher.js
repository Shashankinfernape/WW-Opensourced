__d("CometFullPageSimpleRouteDispatcher", [
    "CometRouterDispatcherContext",
    "ExecutionEnvironment",
    "FBLogger",
    "buildCometRouterDispatcher",
    "goForceFullPageRedirectTo",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useMemo = s.useMemo;
    function d() {
        const t = {
            go: function(t, n) {
                r("goForceFullPageRedirectTo")(t);
            },
            goAsync: function() {
                throw r("FBLogger")("comet_infra").mustfixThrow("CometRouter.goAsync is not implemented yet on web");
            },
            goBack: function() {
                if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
                    window.history.back();
                }
            },
            goTo: function(t, n) {
                r("goForceFullPageRedirectTo")(t.url);
            },
            goToAsync: function() {
                throw r("FBLogger")("comet_infra").mustfixThrow("CometRouter.goToAsync is not implemented yet on web");
            },
            popPushView: function() {
                if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
                    window.history.back();
                }
            },
            prefetchRouteDefinition: function() {},
            prefetchRouteQueries: function(t, n) {
                return {
                    cancel: function() {},
                    usePrefetchedEntrypointForRouting: function() {}
                };
            },
            preloadRouteCode: function(t, n) {}
        };
        return new (o("buildCometRouterDispatcher")).Dispatcher(t);
    }
    function MComponent(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_children = e.children;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = d();
            t[0] = a;
        } else {
            a = t[0];
        }
        const value = a;
        let l;
        if (t[1] !== e_children) {
            const Component = r("CometRouterDispatcherContext").Provider;
            l = <Component value={value}>{e_children}</Component>;
            t[1] = e_children;
            t[2] = l;
        } else {
            l = t[2];
        }
        return l;
    }
    l.default = MComponent;
}, 98);