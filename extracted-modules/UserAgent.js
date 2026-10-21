__d("UserAgent", [
    "UserAgentData",
    "VersionRange",
    "memoizeStringOnly"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t, n, o) {
        if (e === n) {
            return true;
        }
        if (!n.startsWith(e)) {
            return false;
        }
        let a = n.slice(e.length);
        if (t != null) {
            a = o ? o(a) : a;
            return r("VersionRange").contains(a, t);
        }
        return false;
    }
    function u(e) {
        if (r("UserAgentData").platformName === "Windows") {
            return e.replace(/^\s*NT/, "");
        }
        return e;
    }
    const c = {
        isBrowser: (e = r("memoizeStringOnly"))(function(e) {
            return s(r("UserAgentData").browserName, r("UserAgentData").browserFullVersion, e);
        }),
        isBrowserArchitecture: e(function(e) {
            return s(r("UserAgentData").browserArchitecture, null, e);
        }),
        isDevice: e(function(e) {
            return s(r("UserAgentData").deviceName, null, e);
        }),
        isEngine: e(function(e) {
            return s(r("UserAgentData").engineName, r("UserAgentData").engineVersion, e);
        }),
        isEngine_DEPRECATED_DANGEROUS: e(function(e) {
            return s(r("UserAgentData").engineName, r("UserAgentData").engineVersion, e);
        }),
        isPlatform: e(function(e) {
            return s(r("UserAgentData").platformName, r("UserAgentData").platformFullVersion, e, u);
        }),
        isPlatformArchitecture: e(function(e) {
            return s(r("UserAgentData").platformArchitecture, null, e);
        })
    };
    l.default = c;
}, 98);