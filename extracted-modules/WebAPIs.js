__d("WebAPIs", [
    "VisibilityAPI"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [];
    const s = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? window.IntersectionObserver : null;
    function u(e) {
        return e.intersectionRatio > 0 || e.intersectionRect && e.intersectionRect.height > 0 && e.intersectionRect.width > 0;
    }
    if (s == null) {
        e.push("IntersectionObserver");
    }
    const c = window.MutationObserver || window.WebKitMutationObserver;
    if (c == null) {
        e.push("MutationObserver");
    }
    if (!o("VisibilityAPI").canUseVisibilityAPI) {
        e.push("VisibilityAPI");
    }
    const window_requestAnimationFrame = window.requestAnimationFrame;
    if (window_requestAnimationFrame == null) {
        e.push("requestAnimationFrame");
    }
    const window_cancelAnimationFrame = window.cancelAnimationFrame;
    if (window_requestAnimationFrame == null) {
        e.push("cancelAnimationFrame");
    }
    function p(e) {
        try {
            window.addEventListener("beforeunload", e);
        } catch (e) {
            return null;
        }
        return {
            remove: function() {
                try {
                    window.removeEventListener("beforeunload", e);
                } catch (error) {
                    if (error.message !== "can't access dead object") {
                        throw error;
                    }
                }
            }
        };
    }
    class _ {
        constructor(e){
            this.$1 = e;
        }
        deref() {
            return this.$1;
        }
    }
    const f = typeof window.WeakRef === "function" ? window.WeakRef : _;
    if (typeof window.WeakRef !== "function") {
        e.push("WeakRef");
    }
    const { WeakMap, WeakSet } = window;
    if (typeof window.WeakMap !== "function") {
        e.push("WeakMap");
    }
    if (typeof window.WeakSet !== "function") {
        e.push("WeakSet");
    }
    function y(e) {
        return e != null && e.isConnected !== false;
    }
    function C(e) {
        const t = e?.deref();
        if (t != null && t.isConnected !== false) {
            return t;
        }
        return null;
    }
    l.unavailableAPIs = e;
    l.IntersectionObserver = s;
    l.intersectionObserverEntryIsVisible = u;
    l.MutationObserver = c;
    l.requestAnimationFrame = window_requestAnimationFrame;
    l.cancelAnimationFrame = window_cancelAnimationFrame;
    l.onBeforeUnload = p;
    l.WeakRef = f;
    l.WeakMap = WeakMap;
    l.WeakSet = WeakSet;
    l.isAttachedElement = y;
    l.derefOnlyAttachedElement = C;
}, 98);