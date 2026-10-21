__d("WAWebAppWrapper.react", [
    "CometPlaceholder.react",
    "WAWebFBLogger",
    "WAWebHeroInteractionRouterRoot",
    "WAWebLocalStorage",
    "WAWebODS",
    "WAWebUserPrefsLoginKeys",
    "cr:16788",
    "cr:35042",
    "cr:7675",
    "deferredLoadComponent",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "requireDeferredForDisplay"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    const c = r("requireDeferred")("WAWebOneTraceSetup").__setRef("WAWebAppWrapper.react");
    const D1 = r("deferredLoadComponent")(r("requireDeferredForDisplay")("WAWebAppInitializer.react").__setRef("WAWebAppWrapper.react"));
    function MComponent() {
        if (n("cr:16788") != null) {
            n("cr:16788")();
        }
        e_useEffect(function() {
            const e = document.querySelectorAll('link[rel="stylesheet"]');
            e.forEach((e)=>{
                e.addEventListener("error", function() {
                    r("WAWebODS").incr("web.app.cssLoadError");
                }, {
                    once: true
                });
            });
        }, []);
        try {
            if (n("cr:7675") != null) {
                n("cr:7675").setupCometJSUsageLogging();
            }
            const e = !!(r("WAWebLocalStorage") != null && r("WAWebLocalStorage").getItem(o("WAWebUserPrefsLoginKeys").WAWebUserPrefsLoginKeys.LAST_WID_MD));
            r("WAWebHeroInteractionRouterRoot").startInitialLoad(e ? "root" : "login");
            c.load().then((e)=>{
                e();
            });
            if (n("cr:35042") != null) {
                n("cr:35042").startRSTAfterPageLoadFromMainThread();
            }
        } catch (error) {
            o("WAWebFBLogger").WAWebFBLogger().mustfix(`Failed to start HeroInteraction initial load or OneTrace setup. ${String(error)}`);
        }
        const Component = r("CometPlaceholder.react");
        const Component_1 = r("WAWebHeroInteractionRouterRoot").Component;
        return <Component_1 defaultTracePolicy="waweb.unknown"><div id="app"><Component fallback=<P1Component/> name={i.id}><D1/></Component></div></Component_1>;
    }
    MComponent.displayName = `${MComponent.name} [from ${i.id}]`;
    function P1Component() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <div/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    l.default = MComponent;
}, 98);