__d("WAWebStorageErrorHandlingUtils", [
    "WALogger",
    "WAStorageEstimator",
    "WAWebAppTracker",
    "WAWebClearFalcoBufferApi",
    "WAWebEnvironment",
    "WAWebLocalStorage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = 1048576;
    const f = 1024 * 1024 * 1024;
    const g = "storage_recovery_app_reload";
    let h = false;
    function y() {
        const t = window.location.search.includes(g);
        if (t) {
            try {
                if (r("WAWebLocalStorage") != null) {
                    const n = new Date;
                    n.setHours(n.getHours() + 12);
                    r("WAWebLocalStorage").setItem(g, n.toISOString());
                    const a = new URL(window.location.href);
                    a.searchParams.delete(g);
                    window.history.replaceState(null, "", a.toString());
                }
            } catch (t) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[quota-exceeded] Failed to set ",
                    " in localStorage. Error: ",
                    ""
                ])), g, t);
            }
        }
    }
    function C() {
        try {
            const e = r("WAWebLocalStorage") == null ? void 0 : r("WAWebLocalStorage").getItem(g);
            if (e != null) {
                const t = new Date(e);
                const n = new Date;
                if (n > t) {
                    if (r("WAWebLocalStorage") != null) {
                        r("WAWebLocalStorage").removeItem(g);
                    }
                    return false;
                }
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[quota-exceeded] App reloaded for recovery, expires: ",
                    ""
                ])), t);
                return true;
            }
        } catch (e) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to get ",
                " from localStorage."
            ])), g);
        }
        return window.location.search.includes(g);
    }
    function b() {
        const e = new URL(window.location.href);
        e.searchParams.set(g, "1");
        window.history.replaceState(null, "", e.toString());
    }
    function v() {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const n = yield o("WAStorageEstimator").estimateStorage();
            const { success: r, value: a } = n;
            if (!r || !a || a.quota <= 0) {
                return false;
            }
            const i = (a.usage ?? NaN) / (a.quota ?? NaN);
            const l = a.quota - a.usage;
            const s = 5 * _;
            return i >= 0.95 || l < s;
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return e.name === "QuotaExceededError" || e.message.includes("QuotaExceededError");
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (R(e) && !h) {
                h = true;
                let n = "";
                let a = "";
                try {
                    const i = yield k();
                    if (i) {
                        n = JSON.stringify(babelHelpers.extends({}, i, {
                            win: r("WAWebEnvironment").isWindows,
                            didReload: C()
                        }));
                    }
                    a = JSON.stringify(t ?? {});
                    yield o("WAWebClearFalcoBufferApi").clearFalcoBuffer({
                        force: true
                    });
                } catch (e) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[quota-exceeded] Failed to prepare error data: ",
                        ""
                    ])), e);
                }
                const l = o("WAWebAppTracker").AppTracker.getAppContextWithLookback(5000);
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[quota-exceeded] App Context: ",
                    ""
                ])), l ?? "null");
                const s = `[quota-exceeded] Quota: ${n ?? "Error"}, Context: ${a}`;
                if (r("WAWebEnvironment").isWindows) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ""
                    ])), s).sendLogs("win-hybrid-storage-quota-exceeded");
                    return;
                }
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), s).sendLogs("storage-quota-exceeded", {
                    sampling: 0.01
                });
            }
        });
        return E.apply(this, arguments);
    }
    function k() {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const a = yield o("WAStorageEstimator").estimateStorage();
            const { success: i, value: l } = a;
            if (!i || !l) {
                return null;
            }
            const s = {};
            const u = {
                quota: l.quota,
                usage: l.usage,
                sw: l.usageDetails?.serviceWorkerRegistrations,
                caches: l.usageDetails?.caches,
                idb: l.usageDetails?.indexedDB,
                ls: l.usageDetails?.localStorage
            };
            Object.entries(u).forEach(([t, n])=>{
                if (typeof n === "number") {
                    s[t] = Number((n / f).toFixed(4));
                }
            });
            return s;
        });
        return I.apply(this, arguments);
    }
    l.persistAppReloadMarker = y;
    l.didReloadAppForStorageRecovery = C;
    l.markAppReloadForStorageRecovery = b;
    l.isQuotaActuallyExceeded = v;
    l.isQuotaExceededError = R;
    l.reportQuotaExceededError = L;
    l.estimateStorageLogFormatted = k;
}, 98);