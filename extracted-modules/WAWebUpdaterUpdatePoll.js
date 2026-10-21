__d("WAWebUpdaterUpdatePoll", [
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebBuildConstants",
    "WAWebCurrentUser",
    "WAWebEnvironment",
    "WAWebLazyPoll",
    "WAWebNetworkStatus",
    "WAWebPonyfillsFetch",
    "WAWebUpdater",
    "asyncToGeneratorRuntime",
    "cr:27423",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = `${o("WAWebBuildConstants").DYN_ORIGIN}spin`;
    const _ = 1800;
    const f = 3600;
    const g = _ * 0.1;
    const h = Date.now();
    const y = o("WATimeUtils").DAY_MILLISECONDS * 3;
    const C = o("WATimeUtils").DAY_MILLISECONDS * 30;
    let b = true;
    let v = 0;
    const S = n("$InternalEnum").Mirrored([
        "SOFT_REFRESH",
        "HARD_REFRESH"
    ]);
    const R = 60000;
    const L = new (r("WAWebLazyPoll"))({
        name: "updater",
        interval: _,
        restingInterval: f,
        randomIntervalExtension: g
    });
    function E() {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield r("WAWebNetworkStatus").checkOnline();
            if (!navigator.onLine || !r("WAWebNetworkStatus").online) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Update check skipped because user is offline."
                ])));
                return false;
            }
            const t = o("WAWebBuildConstants").VERSION_TERTIARY;
            try {
                const n = yield r("WAWebPonyfillsFetch")(`${p}?subplatform=web&revision=${t}`, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                });
                if (!n.ok) {
                    throw r("err")(`{status: ${n.status}, message: ${n.statusText}}`);
                }
                const a = yield n.json();
                const i = new Date().toISOString();
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Updater: Checked at ",
                    ""
                ])), i);
                v = 0;
                if (!(a != null && a.isBroken)) {
                    return false;
                }
                e: {
                    const l = a?.action;
                    if (l === S.SOFT_REFRESH) {
                        o("WAWebUpdater").Updater.showSoftUpdateBanner();
                        return true;
                        break e;
                    }
                    if (l === S.HARD_REFRESH) {
                        o("WAWebUpdater").Updater.update({
                            belowHard: R,
                            belowSoft: false
                        }).catch((e)=>{
                            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "Updater: hard update failed with ",
                                ""
                            ])), e).sendLogs("SPIN hard refresh failed");
                        });
                        return true;
                        break e;
                    }
                    if (l === void 0) {
                        break e;
                    }
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${l}`);
                }
            } catch (e) {
                v += 1;
                if (v >= 3) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Updater: Version check failed for ",
                        " consecutive times: ",
                        ""
                    ])), v, e).sendLogs("updater-spin-version-check-failed");
                    v = 0;
                } else {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Updater: Version check failed: ",
                        ""
                    ])), e);
                }
            }
            return false;
        });
        return k.apply(this, arguments);
    }
    function I() {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (r("WAWebEnvironment").isWindows) {
                return true;
            }
            const e = Date.now() - h;
            if (e > C) {
                o("WAWebUpdater").Updater.update({
                    belowHard: R,
                    belowSoft: false
                }).catch((e)=>{
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Updater: hard update failed with ",
                        ""
                    ])), e).sendLogs("thirty day hard expiration failed");
                });
                return true;
            }
            if (!(r("gkx")("18269") && !b && (yield E()))) {
                if (n("cr:27423") && r("gkx")("11017") && !b) {
                    yield n("cr:27423").autoRefreshWhenHidden();
                }
                if (e > y || o("WAWebCurrentUser").isEmployee() && e > o("WATimeUtils").DAY_MILLISECONDS) {
                    o("WAWebUpdater").Updater.showSoftUpdateBanner();
                }
                b = false;
            }
            return true;
        });
        return T.apply(this, arguments);
    }
    l.updatePoll = L;
    l.checkForUpdates = I;
}, 98);