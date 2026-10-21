__d("RSTUtils", [
    "Promise",
    "RSTConfig",
    "RSTConstants",
    "asyncToGeneratorRuntime",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = S().toUpperCase();
    const u = p();
    const c = r("uuidv4")();
    const d = m();
    function m() {
        if (u && typeof self !== "undefined" && typeof self.setTimeout === "function") {
            return self;
        }
        return window;
    }
    function p() {
        if (typeof WorkerGlobalScope !== "undefined") {
            return true;
        }
        return typeof document === "undefined";
    }
    function _() {}
    function f() {}
    function g(e) {
        if (e == null) {
            return "";
        }
        const t = new URL(e);
        return t.origin + t.pathname;
    }
    function h() {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (typeof scheduler !== "undefined" && typeof scheduler.yield === "function") {
                return scheduler.yield();
            }
            return new (e || (e = n("Promise")))(function(e) {
                return d.setTimeout(e, 0);
            });
        });
        return y.apply(this, arguments);
    }
    function C() {
        return "indexedDB" in d;
    }
    function b(e) {
        if (e != null) {
            return String(e);
        }
        return null;
    }
    function v(e) {
        const e_componentName = e.componentName;
        const n = k(e.componentText);
        if (e_componentName == null && n == null) {
            return null;
        }
        if (n == null) {
            return e_componentName;
        }
        if (e_componentName == null) {
            return ` ["${n}"]`;
        }
        return `${e_componentName} ["${n}"]`;
    }
    function S() {
        if (typeof window !== "undefined" && typeof window.document !== "undefined") {
            return r("RSTConstants").executionContext.mainThread;
        }
        if (typeof self !== "undefined") {
            if (typeof ServiceWorkerGlobalScope !== "undefined" && self instanceof ServiceWorkerGlobalScope) {
                return r("RSTConstants").executionContext.serviceWorker;
            }
            if (typeof SharedWorkerGlobalScope !== "undefined" && self instanceof SharedWorkerGlobalScope) {
                return r("RSTConstants").executionContext.sharedWorker;
            }
            if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) {
                return r("RSTConstants").executionContext.webWorker;
            }
        }
        return r("RSTConstants").executionContext.unknown;
    }
    function R(e) {
        return e.startsWith("@");
    }
    function L(e) {
        return `@${e}`;
    }
    function E() {
        return S() === r("RSTConstants").executionContext.webWorker;
    }
    function k(componentText) {
        if (componentText == null) {
            return null;
        }
        return componentText.replace(/[\[\]\",\']/g, "");
    }
    l.debugLogImportant = _;
    l.debugLog = f;
    l.sanitizeURL = g;
    l.scheduleYield = h;
    l.isIndexedDBSupported = C;
    l.intToString = b;
    l.getInteractionDetail = v;
    l.getExecutionContext = S;
    l.isExternalAnnotationKey = R;
    l.getExternalAnnotationKey = L;
    l.isInWebWorker = E;
}, 98);