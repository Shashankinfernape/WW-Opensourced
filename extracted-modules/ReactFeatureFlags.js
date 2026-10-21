__d("ReactFeatureFlags", [
    "gkx",
    "justknobx",
    "qex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const d = r("gkx")("11557");
    const m = false;
    const p = true;
    const _ = r("gkx")("21072") || (r("qex")._("104") ?? false);
    const f = 250;
    const g = r("qex")._("344") ?? 5000;
    const h = r("qex")._("388") ?? 5000;
    const y = false;
    const C = r("gkx")("17201") ?? false;
    const b = false;
    const v = true;
    const S = true;
    const R = r("gkx")("17254");
    const L = true;
    const E = false;
    const k = r("justknobx")._("678") && (r("gkx")("12572") || r("qex")._("2513") === true);
    const I = false;
    const T = false;
    const D = r("gkx")("20483");
    l.alwaysThrottleRetries = d;
    l.enableNoCloningMemoCache = m;
    l.enableObjectFiber = p;
    l.enableRetryLaneExpiration = _;
    l.syncLaneExpirationMs = f;
    l.transitionLaneExpirationMs = g;
    l.retryLaneExpirationMs = h;
    l.enableScrollEndPolyfill = y;
    l.enableInfiniteRenderLoopDetection = C;
    l.enableInfiniteRenderLoopDetectionForceThrow = b;
    l.enableConditionalUseWarning = v;
    l.enableParallelTransitions = S;
    l.enableFragmentRefsTextNodes = R;
    l.enableViewTransition = L;
    l.enableTransitionTracing = E;
    l.enableInternalInstanceMap = k;
    l.disableLegacyContextForFunctionComponents = I;
    l.disableSchedulerTimeoutInWorkLoop = T;
    l.enableSchedulingProfiler = D;
}, 98);