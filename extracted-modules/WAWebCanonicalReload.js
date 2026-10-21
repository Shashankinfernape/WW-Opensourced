__d("WAWebCanonicalReload", [
    "WALogger",
    "WATimeUtils",
    "WAWebBrokerGlobalAppState",
    "WAWebCallCollection",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebCmd",
    "WAWebODS",
    "WAWebStreamModel",
    "WAWebUpdater",
    "WAWebUserPrefsAppStateSync",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = 5 * o("WATimeUtils").MINUTE_MILLISECONDS;
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!o("WAWebCanonicalUtils").isCanonicalReloadPending()) {
                if (!o("WAWebCanonicalGating").isCanonicalRecoveryAppReloadEnabled()) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] canonical recovery reload disabled"
                    ])));
                    return;
                }
                o("WAWebCanonicalUtils").setCanonicalReloadPending(true);
                r("WAWebODS").incr("web.app.canonical.recovery.reload_scheduled");
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] scheduling reload after canonical recovery"
                ])));
                h();
            }
        });
        return f.apply(this, arguments);
    }
    function g() {
        return r("WAWebCallCollection").activeCall != null || !o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced();
    }
    function h() {
        if (!g()) {
            y();
            return;
        }
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[canonical] reload deferred: call/sync pending"
        ])));
        r("WAWebODS").incr("web.app.canonical.recovery.reload_deferred");
        const t = function() {
            if (!g()) {
                n();
                y();
            }
        };
        var n = ()=>{
            r("WAWebCallCollection").off("change:activeCall", t);
            o("WAWebCmd").Cmd.off("on_critical_sync_done_from_bridge", t);
        };
        r("WAWebCallCollection").on("change:activeCall", t);
        o("WAWebCmd").Cmd.on("on_critical_sync_done_from_bridge", t);
    }
    function y() {
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[canonical] waiting for stream idle transition before reload"
        ])));
        var e = function() {
            if (o("WAWebStreamModel").Stream.couldForce) {
                n();
                C("idle");
            }
        };
        o("WAWebStreamModel").Stream.on("change:couldForce", e);
        var t = self.setTimeout(function() {
            n();
            if (g()) {
                h();
            } else {
                C("timeout");
            }
        }, p);
        function n() {
            o("WAWebStreamModel").Stream.off("change:couldForce", e);
            self.clearTimeout(t);
        }
    }
    function C(e) {
        if (r("WAWebBrokerGlobalAppState").isLogoutInProgress || !o("WAWebCanonicalUtils").isCanonicalReloadPending()) {
            o("WAWebCanonicalUtils").setCanonicalReloadPending(false);
            return;
        }
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[canonical] reload after canonical recovery trigger=",
            ""
        ])), e);
        r("WAWebODS").incr("web.app.canonical.recovery.reload_triggered");
        if (e === "idle") {
            r("WAWebODS").incr("web.app.canonical.recovery.reload_trigger_idle");
        } else if (e === "timeout") {
            r("WAWebODS").incr("web.app.canonical.recovery.reload_trigger_timeout");
        }
        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "[reload][canonical] restarting app after canonical recovery"
        ])));
        o("WAWebUpdater").Updater.restart();
    }
    l.isCanonicalReloadPending = o("WAWebCanonicalUtils").isCanonicalReloadPending;
    l.setCanonicalReloadPending = o("WAWebCanonicalUtils").setCanonicalReloadPending;
    l.scheduleCanonicalReload = _;
}, 98);