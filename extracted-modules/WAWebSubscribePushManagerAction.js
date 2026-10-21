__d("WAWebSubscribePushManagerAction", [
    "Promise",
    "WABase64",
    "WALogger",
    "WAWebDbErrors",
    "WAWebGetPushServerSettingsJob",
    "WAWebL10N",
    "WAWebNoop",
    "WAWebPushNotificationsGatingUtils",
    "WAWebSetPushConfigJob",
    "WAWebSetWorkerLocalStorage",
    "asyncToGeneratorRuntime",
    "cr:27584",
    "getErrorSafe",
    "gkx"
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
    let g;
    let h;
    let y;
    let C = (y || (y = n("Promise"))).resolve();
    let b = 0;
    let v = y.resolve();
    function S() {
        if (o("WAWebPushNotificationsGatingUtils").canSupportOfflineNotifications() && "serviceWorker" in navigator) {
            const e = ++b;
            return R(function() {
                return L(e);
            });
        }
    }
    function R(e) {
        const t = v.then(()=>e(), ()=>e());
        v = t.then(r("WAWebNoop"), r("WAWebNoop"));
        return t;
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const r = n("cr:27584").isOfflineNotificationsEnabled();
            const o = (yield n("cr:27584").shouldSubscribePushManager(r)) ?? false;
            const a = yield k();
            if (a != null) {
                const i = a.pushSubscription;
                yield T(r, o, i, e);
            }
        });
        return E.apply(this, arguments);
    }
    function k() {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let n;
            const a = yield window.navigator.serviceWorker?.ready;
            if (a == null) {
                yield O();
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] update failed: no SW registration"
                ])));
                return null;
            }
            const i = (n = a.pushManager) == null || n.getSubscription == null ? void 0 : n.getSubscription();
            if (i == null) {
                yield O();
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] failed to get push manager"
                ])));
                return null;
            }
            const l = window.location.origin + window.location.pathname;
            if (a.scope !== l) {
                yield O();
                return null;
            }
            try {
                return {
                    pushSubscription: yield i
                };
            } catch (e) {
                yield O();
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] failed to read push subscription"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("push-notification-get-subscription-failed");
                return null;
            }
        });
        return I.apply(this, arguments);
    }
    function T(e, t, n, r) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, o) {
            if (x(e, t, n)) {
                return M(false, o);
            }
            yield O();
            r("WAWebL10N").off("locale_change", U);
            if (t) {
                yield P(e, o);
            } else if (n != null) {
                yield G();
            }
        });
        return D.apply(this, arguments);
    }
    function x(e, t, n) {
        return e && t && window.Notification?.permission === "granted" && n != null;
    }
    function $(e) {
        const t = ++b;
        R(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (e) {
                yield P(true, t);
            } else {
                yield G();
            }
        }));
    }
    function P(e, t) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            yield O();
            r("WAWebL10N").off("locale_change", U);
            if (o("WAWebPushNotificationsGatingUtils").canEnableOfflineNotifications()) {
                try {
                    if (!("serviceWorker" in navigator)) {
                        return;
                    }
                    const i = yield window.navigator.serviceWorker?.ready;
                    if (i == null) {
                        return;
                    }
                    const l = yield i.pushManager.getSubscription();
                    if (l != null) {
                        return;
                    }
                    const s = yield o("WAWebGetPushServerSettingsJob").getPushServerSettings();
                    if (s.errorCode != null) {
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[push-notification] subscribe failed: settings err ",
                            ""
                        ])), s.errorCode);
                        return;
                    }
                    const u = new Uint8Array(o("WABase64").decodeB64UrlSafe(String(s)));
                    const p = {
                        userVisibleOnly: true,
                        applicationServerKey: u
                    };
                    const _ = yield i.pushManager.subscribe(p);
                    const f = yield o("WAWebSetPushConfigJob").setPushConfig(_);
                    if (f?.errorCode != null) {
                        o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[push-notification] subscribe failed: server err ",
                            ""
                        ])), f.errorText);
                        return;
                    }
                    if (e && window.Notification?.permission === "granted") {
                        yield M(true, t);
                    } else {
                        yield A(true);
                    }
                } catch (e) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[push-notification] subscribe failed: ",
                        ""
                    ])), e);
                }
            }
        });
        return N.apply(this, arguments);
    }
    function M(e, t) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            yield O();
            if (!r("gkx")("15473")) {
                yield A(e);
                return;
            }
            r("WAWebL10N").off("locale_change", U);
            r("WAWebL10N").on("locale_change", U);
            const n = yield W();
            const a = yield U();
            if (!(!n || !a || t !== b)) {
                try {
                    yield o("WAWebSetWorkerLocalStorage").setWorkerLocalStorageForOfflineResume(true);
                } catch (e) {
                    if (!(e instanceof o("WAWebDbErrors").DbOnLogoutAbort)) {
                        o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[push-notification] failed to store offline resume treatment"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("push-notification-offline-resume-treatment-write-failed");
                    }
                }
            }
        });
        return w.apply(this, arguments);
    }
    function A(e) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e) {
                yield o("WAWebSetWorkerLocalStorage").setWorkerLocalStorage();
            }
            n("cr:27584").updateOfflineNotificationL10nStrings();
            r("WAWebL10N").on("locale_change", function() {
                n("cr:27584").updateOfflineNotificationL10nStrings();
            });
        });
        return F.apply(this, arguments);
    }
    function O() {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            r("WAWebL10N").off("locale_change", U);
            try {
                yield o("WAWebSetWorkerLocalStorage").clearWorkerPushOfflineResumeTreatment();
            } catch (e) {
                if (!(e instanceof o("WAWebDbErrors").DbOnLogoutAbort)) {
                    o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[push-notification] failed to clear offline resume treatment"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("push-notification-offline-resume-treatment-clear-failed");
                }
            }
        });
        return B.apply(this, arguments);
    }
    function W() {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                yield o("WAWebSetWorkerLocalStorage").setWorkerLocalStorageForOfflineResume();
                return true;
            } catch (e) {
                if (!(e instanceof o("WAWebDbErrors").DbOnLogoutAbort)) {
                    o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[push-notification] failed to refresh worker storage"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("push-notification-worker-storage-refresh-failed");
                }
                return false;
            }
        });
        return q.apply(this, arguments);
    }
    function U() {
        return V.apply(this, arguments);
    }
    function V() {
        V = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let e = false;
            C = C.then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    yield n("cr:27584").updateOfflineNotificationL10nStringsForOfflineResume();
                    e = true;
                } catch (e) {
                    if (!(e instanceof o("WAWebDbErrors").DbOnLogoutAbort)) {
                        o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[push-notification] failed to refresh notification l10n"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("push-notification-l10n-refresh-failed");
                    }
                }
            }));
            yield C;
            return e;
        });
        return V.apply(this, arguments);
    }
    function H() {
        ++b;
        return R(G);
    }
    function G() {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield O();
            r("WAWebL10N").off("locale_change", U);
            if (!o("WAWebPushNotificationsGatingUtils").canSupportOfflineNotifications()) {
                return false;
            }
            try {
                if (!("serviceWorker" in navigator)) {
                    return false;
                }
                const t = yield window.navigator.serviceWorker?.ready;
                if (t == null) {
                    return false;
                }
                const n = yield t.pushManager.getSubscription();
                if (n == null) {
                    return false;
                }
                const a = yield n.unsubscribe();
                yield o("WAWebSetWorkerLocalStorage").clearWorkerLocalStorage().catch((e)=>{
                    if (!(e instanceof o("WAWebDbErrors").DbOnLogoutAbort)) {
                        throw e;
                    }
                });
                return a;
            } catch (e) {
                o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] unsubscribe failed: ",
                    ""
                ])), e);
                return false;
            }
        });
        return z.apply(this, arguments);
    }
    l.updatePushManager = S;
    l.handleOfflineNotifications = $;
    l.unsubscribePushManager = H;
}, 98);