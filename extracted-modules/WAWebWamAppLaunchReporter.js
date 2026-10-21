__d("WAWebWamAppLaunchReporter", [
    "WALogger",
    "WAWebAppLaunchWamEvent",
    "WAWebAppTracker",
    "WAWebEnvironment",
    "WAWebWamBaseAppLaunchReporter",
    "WAWebWamEnumAppLaunchType",
    "cr:9467"
], function(t, n, r, o, a, i, l) {
    let s;
    const u = n("cr:9467") ?? {};
    const c = u.WAWebWindowsWamAppLaunchReporter;
    const d = new (o("WAWebWamBaseAppLaunchReporter")).BaseAppLaunchReporter(p, _);
    var m = false;
    function p() {
        if (window.document) {
            m = !document.hidden;
            document.addEventListener("visibilitychange", f);
        }
        return new (o("WAWebAppLaunchWamEvent")).AppLaunchWamEvent;
    }
    function _(e) {
        if (!m) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "commitEvent: skip, loaded before doc visible"
            ])));
            return;
        }
        const t = Math.ceil(self.performance.now());
        e.appLaunchTypeT = o("WAWebWamEnumAppLaunchType").APP_LAUNCH_TYPE.COLD;
        e.appLaunchT = t;
        o("WAWebAppTracker").attachWAMAppContext(e, t);
        e.commit();
        if (window.document) {
            document.removeEventListener("visibilitychange", f);
        }
    }
    function f() {
        if (!document.hidden) {
            m = true;
            document.removeEventListener("visibilitychange", f);
        }
    }
    function g() {
        if (r("WAWebEnvironment").isWindows) {
            return c;
        }
        return d;
    }
    l.getAppLaunchReporter = g;
}, 98);