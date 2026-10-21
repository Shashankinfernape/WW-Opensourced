__d("WAWebPageVisibilityRecency", [], function(t, n, r, o, a, i) {
    "use strict";
    const globalThis_document = globalThis.document;
    let l = false;
    let s = -1;
    let u = -1;
    let c = -1;
    function d() {
        const self_performance = self.performance;
        if (!(l || globalThis_document == null || self_performance == null)) {
            l = true;
            if (globalThis_document.visibilityState === "visible") {
                s = self_performance.now();
            } else {
                u = self_performance.now();
            }
            globalThis_document.addEventListener("visibilitychange", g);
        }
    }
    function m() {
        try {
            const atMs = self.performance.now();
            return {
                atMs,
                hiddenForMs: y(atMs),
                msSinceVisible: h(atMs),
                visibility: C()
            };
        } catch (e) {
            return {
                atMs: -1,
                hiddenForMs: -1,
                msSinceVisible: -1,
                visibility: "hidden"
            };
        }
    }
    function p() {
        return h(self.performance.now());
    }
    function _() {
        return c;
    }
    function f(e) {
        if (s < 0 || c < 0) {
            return false;
        }
        return self.performance.now() - s <= e;
    }
    function g() {
        if (globalThis_document != null) {
            const t = self.performance.now();
            if (globalThis_document.visibilityState === "visible") {
                if (u >= 0) {
                    c = t - u;
                }
                s = t;
            } else {
                u = t;
            }
        }
    }
    function h(e) {
        if (s < 0) {
            return -1;
        }
        return e - s;
    }
    function y(atMs) {
        if (globalThis_document?.visibilityState === "visible") {
            return 0;
        }
        if (l) {
            if (u > s) {
                return atMs - u;
            }
            return 0;
        }
        return -1;
    }
    function C() {
        if (globalThis_document?.visibilityState !== "visible") {
            return "hidden";
        }
        if (globalThis_document.hasFocus()) {
            return "visible_focused";
        }
        return "visible_unfocused";
    }
    i.startPageVisibilityRecencyTracking = d;
    i.snapshotPageVisibility = m;
    i.getMsSinceDocumentVisible = p;
    i.getLastHiddenDurationMs = _;
    i.wasDocumentHiddenWithinMs = f;
}, 66);