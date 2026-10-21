__d("WAWebBrowserFeatures", [
    "Promise",
    "WAMd5",
    "WAWebIndexedDB",
    "WAWebIndexedDBPurge",
    "WAWebPlatformEstimate",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        return navigator.plugins.length;
    }
    function u() {
        return navigator.mimeTypes?.length ?? 0;
    }
    function c() {
        return "Notification" in window && Notification.permission !== "denied";
    }
    function d() {
        return "pdfViewerEnabled" in navigator && navigator.pdfViewerEnabled === true;
    }
    function m() {
        return screen.height !== screen?.availHeight || screen.width !== screen?.availWidth;
    }
    function p() {
        return "share" in navigator && "canShare" in navigator;
    }
    function _() {
        return "chrome" in window;
    }
    function f() {
        return window.history.length;
    }
    function g() {
        return `${window.innerWidth}x${window.innerHeight}`;
    }
    function h() {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = document.createElement("canvas");
                const r = t.getContext("2d");
                if (r == null) {
                    return "";
                }
                t.width = 120;
                t.height = 20;
                r.font = "14px 'Arial'";
                r.fillStyle = "#fff";
                r.fillRect(0, 0, 120, 20);
                r.fillStyle = "rgba(102, 204, 0, 0.7)";
                r.fillText("whatsapp web", 2, 15);
                const a = yield new (e || (e = n("Promise")))(function(e) {
                    return t.toBlob(e);
                });
                if (a == null) {
                    return "";
                }
                const i = yield new e(function(e, t) {
                    const n = new FileReader;
                    n.onloadend = function() {
                        const t = n.result;
                        e(typeof t === "string" ? t : "");
                    };
                    n.onerror = t;
                    n.readAsDataURL(a);
                });
                if (i !== "") {
                    return o("WAMd5").md5(i);
                }
                return "";
            } catch (e) {
                return "";
            }
        });
        return y.apply(this, arguments);
    }
    function C() {
        try {
            const e = [];
            if (Object.keys(document).some((e)=>/\$cdc_/.test(e))) {
                e.push("cdc");
            }
            if ("__selenium_unwrapped" in document) {
                e.push("selenium_unwrapped");
            }
            if ("__webdriver_evaluate" in document) {
                e.push("webdriver_evaluate");
            }
            if ("__driver_evaluate" in document) {
                e.push("driver_evaluate");
            }
            if ("callPhantom" in window || "_phantom" in window) {
                e.push("phantom");
            }
            if ("__nightmare" in window) {
                e.push("nightmare");
            }
            if ("domAutomation" in window || "domAutomationController" in window) {
                e.push("dom_automation");
            }
            return e.join(",");
        } catch (e) {
            return "";
        }
    }
    function b() {
        try {
            if (!("chrome" in window)) {
                return "missing";
            }
            const t = Object.getOwnPropertyDescriptor(window, "chrome")?.value;
            if (t == null || typeof t !== "object") {
                return "";
            }
            const n = [];
            if ("app" in t) {
                n.push("app");
            }
            if ("runtime" in t) {
                n.push("runtime");
            }
            if ("loadTimes" in t) {
                n.push("loadTimes");
            }
            if ("csi" in t) {
                n.push("csi");
            }
            try {
                const o = Object.getOwnPropertyDescriptor(t, "app")?.value;
                if (o != null && typeof o === "object" && o.isInstalled != null) {
                    n.push("app.isInstalled");
                }
            } catch (e) {}
            try {
                const i = Object.getOwnPropertyDescriptor(t, "runtime")?.value;
                if (i != null && typeof i === "object" && typeof i.connect === "function") {
                    n.push("runtime.connect");
                }
            } catch (e) {}
            return n.join(",");
        } catch (e) {
            return "";
        }
    }
    function v() {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const e = yield r("WAWebIndexedDB") == null || r("WAWebIndexedDB").databases == null ? void 0 : r("WAWebIndexedDB").databases();
                if (e == null) {
                    return "";
                }
                const t = new Set(Object.keys(o("WAWebIndexedDBPurge").WEB_IDB_DB_NAMES).map((e)=>o("WAWebIndexedDBPurge").WEB_IDB_DB_NAMES[e]));
                return e.map((e)=>e.name).filter((e)=>e != null && !t.has(e)).join(",");
            } catch (e) {
                return "";
            }
        });
        return S.apply(this, arguments);
    }
    function R() {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield (e || (e = n("Promise"))).all([
                h(),
                v()
            ]);
            const o = t[0];
            const a = t[1];
            return {
                pluginCount: s(),
                mimeTypeCount: u(),
                hasNotificationPermission: c(),
                isPDFViewerEnabled: d(),
                hasTaskbar: m(),
                hasWebShare: p(),
                hasChrome: _(),
                platformEstimate: r("WAWebPlatformEstimate")(),
                historyLength: f(),
                viewPortSize: g(),
                canvasFingerprint: o,
                automationSignals: C(),
                chromeStructure: b(),
                foreignDbList: a
            };
        });
        return L.apply(this, arguments);
    }
    l.default = R;
}, 98);