__d("WAWebAutoLogoutGating", [
    "WAWebEnvironment",
    "WAWebUA"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = s();
        return e;
    }
    function s() {
        if (r("WAWebEnvironment").isWindows) {
            return false;
        }
        return o("WAWebUA").UA.hasCredentiallessIframeSupport && !o("WAWebUA").UA.isOculusBrowser;
    }
    function u() {
        const e = self.location !== self.parent.location;
        if (!e) {
            return false;
        }
        const t = new URLSearchParams(window.location.search);
        const n = t.get("autologout");
        return n === "1";
    }
    function c() {
        const e = new URL(window.location.href);
        e.searchParams.set("autologout", "1");
        return e.toString();
    }
    l.isAutoLogoutEnabled = e;
    l.isRunningInAutoLogoutIframe = u;
    l.getAutoLogoutIframeUrl = c;
}, 98);