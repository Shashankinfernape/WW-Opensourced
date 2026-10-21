__d("WAWebFeatureDetectionDetermineIncognito", [
    "Promise",
    "WACustomError",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBoolFunc",
    "WAWebIndexedDB",
    "WAWebLocalStorage",
    "WAWebUA",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        const t = new (s || (s = n("Promise")))(function(e) {
            function t() {
                e(false);
            }
            if (self.requestFileSystem) {
                self.requestFileSystem(window.TEMPORARY, 1, t, function(t) {
                    e(t.name === "SecurityError");
                });
            } else if (r("WAWebIndexedDB")) {
                const n = r("WAWebIndexedDB").open("pb_detect");
                if (n) {
                    n.onsuccess = t;
                    n.onerror = function(t) {
                        t.preventDefault();
                        if (window.InvalidStateError) {
                            e(t instanceof window.InvalidStateError);
                        } else {
                            e(true);
                        }
                    };
                } else {
                    t();
                }
            } else {
                if (o("WAWebUA").UA.isTrident) {
                    e(true);
                } else {
                    t();
                }
            }
        }).then((e)=>{
            if (e) {
                return e;
            }
            if (!r("WAWebLocalStorage")) {
                return false;
            }
            try {
                r("WAWebLocalStorage").setItem("INCOG", "0");
                r("WAWebLocalStorage").removeItem("INCOG");
                return false;
            } catch (error) {
                const t = r("getErrorSafe")(error);
                if (t.name === "QuotaExceededError") {
                    return true;
                }
                throw t;
            }
        });
        return o("WAPromiseTimeout").promiseTimeout(t, 100, "detectIncognitoTimeout").catch(o("WAFilteredCatch").filteredCatch(o("WACustomError").TimeoutError, o("WAWebBoolFunc").returnFalse)).catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "promiseUtil:determineIncognito failed check: ",
                ""
            ])), String(t)).sendLogs("incog-throw");
            return false;
        });
    }
    l.default = u;
}, 98);