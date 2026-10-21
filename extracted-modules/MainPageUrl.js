__d("MainPageUrl", [
    "ExecutionEnvironment",
    "FBLogger",
    "SimpleHook",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = new URL((()=>{
        let href = (self !== undefined ? self : typeof window !== "undefined" ? window : {
            location: {
                href: "http://undefined"
            }
        }).location.href;
        if ((u || (u = r("ExecutionEnvironment"))).isInWorker && href && href.startsWith("blob:")) {
            href = href.substring(5, href.length);
        }
        return href;
    })());
    const d = new URL(c.href);
    const m = new (o("SimpleHook")).SimpleHook;
    function p() {
        return (u || (u = r("ExecutionEnvironment"))).isInBrowser && d?.searchParams?.get("workerlog") === "debug";
    }
    function _(t) {
        try {
            if (p()) {
                r("FBLogger")("worker").DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "received url ",
                    ""
                ])), t);
            }
            const n = new URL(t, d.href || c.href);
            if (d.href !== n.href) {
                d.href = n.href;
                m.call(d);
            } else if (p()) {
                r("FBLogger")("worker").DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "ignoring url: path didn't change in ",
                    ""
                ])), t);
            }
        } catch (error) {
            r("FBLogger")("worker").catching(r("getErrorSafe")(error)).warn("invalid url");
        }
    }
    if (typeof window === "object" && typeof window.location === "object" && typeof window.location.href === "string") {
        _(window.location.href);
    }
    l.mainPageUrl = d;
    l.onMainPageUrlChange = m;
    l.isWorkerLogEnabled = p;
    l.updateMainPageUrl = _;
}, 98);