__d("WAWebBackgroundSyncAction", [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebPushNotificationsGatingUtils",
    "WAWebPwaDocumentMetadataUtils",
    "WAWebSetWorkerLocalStorage",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = "background-sync";
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t = false) {
            try {
                let a;
                if (!o("WAWebPushNotificationsGatingUtils").canSupportPeriodicBackgroundSync() || !o("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa()) {
                    return;
                }
                const i = yield window.navigator.serviceWorker?.ready;
                if (!("periodicSync" in (i ?? []))) {
                    return;
                }
                const l = i?.periodicSync;
                if (!l) {
                    return;
                }
                const h = yield l.getTags?.();
                if (!h) {
                    return;
                }
                const y = yield (a = window.navigator.permissions) == null || a.query == null ? undefined : a.query({
                    name: "background-sync"
                });
                if (y?.state !== "granted") {
                    return;
                }
                const C = o("WAWebABProps").getABPropConfigValue("web_pwa_background_sync");
                if (!t && C) {
                    yield o("WAWebSetWorkerLocalStorage").setWorkerLocalStorage();
                    if (h.includes(g)) {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "pwa background sync is already registered"
                        ])));
                    } else {
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Start pwa background sync registration"
                        ])));
                        yield l.register?.(g, {
                            minInterval: o("WAWebABProps").getABPropConfigValue("web_pwa_background_sync_min_interval_hours") * o("WATimeUtils").HOUR_MILLISECONDS
                        });
                        const b = yield l.getTags?.();
                        if (b != null && b.includes != null && b.includes(g)) {
                            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "pwa background sync registered successfully"
                            ])));
                        } else {
                            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "pwa background sync failed to register"
                            ])));
                        }
                    }
                } else if (h.includes(g)) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Start pwa background sync unregistration"
                    ])));
                    yield l.unregister?.(g);
                    const v = yield l.getTags?.();
                    if (v != null && v.includes != null && v.includes(g)) {
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "pwa background sync failed to unregister"
                        ])));
                    } else {
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "pwa background sync unregistered successfully"
                        ])));
                    }
                } else {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "pwa background sync is already unregistered"
                    ])));
                }
            } catch (error) {
                const S = r("getErrorSafe")(error);
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "pwa-background-sync-registration-update-failure"
                ]))).catching(S).sendLogs("pwa-background-sync-registration-update-failure");
            }
        });
        return y.apply(this, arguments);
    }
    l.updatePeriodicBackgroundSyncRegistration = h;
}, 98);