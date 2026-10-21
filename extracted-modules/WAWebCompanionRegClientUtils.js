__d("WAWebCompanionRegClientUtils", [
    "$InternalEnum",
    "WAWebBrowserInfo",
    "WAWebEnvironment"
], function(t, n, r, o, a, i, l) {
    const s = n("$InternalEnum")({
        UNKNOWN: 0,
        CHROME: 1,
        EDGE: 2,
        FIREFOX: 3,
        IE: 4,
        OPERA: 5,
        SAFARI: 6,
        ELECTRON: 7,
        UWP: 8,
        OTHER_WEB_CLIENT: 9
    });
    const u = {
        [s.UNKNOWN]: "0",
        [s.CHROME]: "1",
        [s.EDGE]: "2",
        [s.FIREFOX]: "3",
        [s.IE]: "4",
        [s.OPERA]: "5",
        [s.SAFARI]: "6",
        [s.ELECTRON]: "7",
        [s.UWP]: "8",
        [s.OTHER_WEB_CLIENT]: "9"
    };
    const c = u[d()];
    function d() {
        if (r("WAWebEnvironment").isWindows) {
            return s.UWP;
        }
        const e = r("WAWebBrowserInfo")().name;
        if (e) {
            switch(e){
                case "Chrome":
                    return s.CHROME;
                case "Firefox":
                    return s.FIREFOX;
                case "IE":
                    return s.IE;
                case "Opera":
                    return s.OPERA;
                case "Safari":
                    return s.SAFARI;
                case "Edge":
                    return s.EDGE;
                default:
                    return s.OTHER_WEB_CLIENT;
            }
        }
        return s.UNKNOWN;
    }
    l.DEVICE_PLATFORM = c;
    l.getCompanionWebClientFromBrowser = d;
}, 98);