__d("WAWebVoipCallLinkBundlePreloader", [
    "Promise",
    "WALogger",
    "WAWebVoipUiLoadable",
    "WAWebVoipUiVideoCallLoadable",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(requireBundle, n) {
        return requireBundle().then(()=>{}, (t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: call-link bundle preload failed"
            ]))).catching(r("getErrorSafe")(t)).sendLogs(n);
        });
    }
    function c() {
        return (s || (s = n("Promise"))).all([
            u(o("WAWebVoipUiLoadable").requireBundle, "voip-preload-call-link-ui"),
            u(o("WAWebVoipUiVideoCallLoadable").requireBundle, "voip-preload-call-link-video")
        ]).then(()=>{});
    }
    l.preloadCallLinkBundles = c;
}, 98);