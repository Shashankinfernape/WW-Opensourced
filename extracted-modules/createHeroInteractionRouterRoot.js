__d("createHeroInteractionRouterRoot", [
    "CancelablePromise",
    "CometHeroHoldTrigger.react",
    "CometHeroInteractionWithDiv.react",
    "ExecutionEnvironment",
    "FBLogger",
    "NavigationTracing",
    "promiseDone",
    "react",
    "vulture"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useLayoutEffect, useState } = c;
    const p = (t, metadata)=>{
        if (metadata) {
            Object.keys(metadata).forEach((e)=>{
                t.addMetadata(e, metadata[e]);
            });
        }
    };
    function _(t) {
        let n = null;
        let a = null;
        function LComponent({ promise }) {
            r("vulture")("R9s63il61FRGmFtvfaEGGjMC_tw=");
            const n = useState(true);
            const hold = n[0];
            const a = n[1];
            useLayoutEffect(function() {
                a(true);
                const e = new (r("CancelablePromise"))(promise);
                const n = function() {
                    a(false);
                };
                r("promiseDone")(e.getPromise(), n, n);
                return function() {
                    n();
                    e.cancel();
                };
            }, [
                promise,
                a
            ]);
            return u.jsx(r("CometHeroHoldTrigger.react"), {
                description: "RouteFetch",
                hold
            });
        }
        LComponent.displayName = `${LComponent.name} [from ${i.id}]`;
        function SComponent(e) {
            const c = useState({
                interactionID: a?.interactionID,
                tracePolicy: a?.tracePolicy ?? e.defaultTracePolicy,
                routeFetchPromise: null
            });
            const p = c[0];
            const _ = c[1];
            const p_routeFetchPromise = p.routeFetchPromise;
            useLayoutEffect(function() {
                if (n) {
                    r("FBLogger")("ws_tools").mustfix("more than once instance of HeroInteractionRouterRoot mounted, this is not supported");
                }
                n = _;
                return function() {
                    n = null;
                };
            }, []);
            const Component = r("CometHeroInteractionWithDiv.react");
            return <Component interactionDesc={p.tracePolicy ?? e.defaultTracePolicy} interactionUUID={p.interactionID} xstyle={e.xstyle}>{e.children}{p_routeFetchPromise != null && <LComponent promise={p_routeFetchPromise}/>}</Component>;
        }
        SComponent.displayName = `${SComponent.name} [from ${i.id}]`;
        const c = function(n) {
            if (a) {
                r("FBLogger")("ws_tools").mustfix("startInitialLoad called multiple times, this is not supported");
                return null;
            }
            let e = null;
            const i = o("NavigationTracing").traceInitialLoad({
                interactionClass: "contingent",
                qplEvent: n.qplEvent,
                tracePolicy: n.tracePolicy,
                traceType: "INITIAL_LOAD",
                cfg: n.initialLoadTraceConfig,
                namespace: t?.namespace
            }, function(t) {
                p(t, n.metadata);
                e = t;
            });
            a = {
                tracePolicy: n.tracePolicy,
                qplEvent: n.qplEvent,
                interactionID: i,
                initialLoadTraceConfig: n.initialLoadTraceConfig
            };
            return e;
        };
        const _ = function(a) {
            let e = null;
            const i = n;
            if (i) {
                const l = o("NavigationTracing").traceNavigation({
                    interactionClass: "contingent",
                    qplEvent: a.qplEvent,
                    tracePolicy: a.tracePolicy,
                    traceType: "NAVIGATION",
                    namespace: t?.namespace
                }, function(t) {
                    p(t, a.metadata);
                    e = t;
                });
                i({
                    tracePolicy: a.tracePolicy,
                    interactionID: l,
                    routeFetchPromise: a.routeFetchPromise
                });
                return e;
            } else {
                r("FBLogger")("ws_tools").mustfix("startNavigation called before interaction root component mounted, interaction trace will be lost");
                return null;
            }
        };
        return {
            Component: u.memo(SComponent),
            startInitialLoad: (e || (e = r("ExecutionEnvironment"))).canUseDOM ? c : function(e) {
                return null;
            },
            startNavigation: (e || (e = r("ExecutionEnvironment"))).canUseDOM ? _ : function(e) {
                return null;
            }
        };
    }
    l.default = _;
}, 98);