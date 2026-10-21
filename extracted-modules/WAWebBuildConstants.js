__d("WAWebBuildConstants", [
    "SiteData",
    "WALogger",
    "WAWebEnvironment",
    "WAWebWindowsQueryParams",
    "gkx",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = r("gkx")("26258") || r("gkx")("26259");
    const u = s ? "2" : "3";
    const c = s ? "3000" : "0";
    const d = s ? `${r("SiteData").client_revision}` : "0";
    const m = `${u}.${c}.${d}`;
    const p = y();
    const _ = C();
    function f() {
        return p;
    }
    function g() {
        const t = p;
        if (t == null || t.length !== 6 || !/^\d{6}$/.test(t)) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getWindowsVersion: invalid version string"
            ]))).sendLogs("invalid-windows-version");
            return null;
        }
        const n = parseInt(t, 10);
        if (Number.isNaN(n)) {
            return null;
        }
        return n;
    }
    const h = p == null ? m : `${m}.${p}`;
    function y() {
        if (r("WAWebEnvironment").isWindows) {
            const t = new URLSearchParams(self.location.search ?? "");
            return t.get(o("WAWebWindowsQueryParams").WindowsQueryParam.BUILD);
        }
        return null;
    }
    function C() {
        return b(self.location.href);
    }
    function b(e) {
        if (!r("justknobx")._("5257")) {
            return false;
        }
        const t = new URLSearchParams(e ?? "");
        return r("WAWebEnvironment").isWindows && t.get(o("WAWebWindowsQueryParams").WindowsQueryParam.OFFLINE) === "1";
    }
    let v = "";
    if (!r("gkx")("26258")) {
        if (r("gkx")("26259")) {
            v = ".i";
        } else {
            v = ".d";
        }
    }
    const S = h + v;
    const R = `${self.location.origin}/`;
    const L = "/";
    const E = `${self.location.origin}/`;
    l.VERSION_PRIMARY = u;
    l.VERSION_SECONDARY = c;
    l.VERSION_TERTIARY = d;
    l.VERSION_BASE = m;
    l.WINDOWS_BUILD = p;
    l.WINDOWS_OFFLINE = _;
    l.getWindowsBuild = f;
    l.getWindowsVersion = g;
    l.VERSION_BASE_WITH_WINDOWS_BUILD = h;
    l.PUSH_PHASE = r("SiteData").push_phase;
    l.isWindowsOfflineUrl = b;
    l.VERSION_STR = S;
    l.DYN_ORIGIN = R;
    l.WEB_PUBLIC_PATH = L;
    l.BUILD_URL = E;
}, 98);