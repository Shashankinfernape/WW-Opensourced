__d("WAWebPrefetchHatchLinkedStatusOnLogin", [
    "WALogger",
    "WAWebHatchBackendGating",
    "WAWebHatchLinkedStatusManager"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = false;
    function u() {
        if (!(s || !o("WAWebHatchBackendGating").isHatchIntegrationEnabledOnBackend())) {
            s = true;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[hatch] prefetching linked status after login"
            ])));
            r("WAWebHatchLinkedStatusManager").fetchAndUpdateStatus();
        }
    }
    function c() {
        s = false;
    }
    l.maybePrefetchHatchLinkedStatusOnLogin = u;
    l.__resetHatchLinkedStatusPrefetchForTesting = c;
}, 98);