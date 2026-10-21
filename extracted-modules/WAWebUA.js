__d("WAWebUA", [
    "gkx",
    "ua-parser-js"
], function(t, n, r, o, a, i, l) {
    const e = {
        CHROME: "chrome",
        CHROMIUM: "chromium",
        FIREFOX: "firefox",
        SAFARI: "safari",
        IE: "ie",
        OPERA: "opera",
        EDGE: "edge"
    };
    const s = {
        WINDOWS: "windows",
        MAC: "mac os",
        CHROMEOS: "chromium os"
    };
    function u(e, t) {
        let n;
        let r;
        const o = /(\.0)+[^\.]*$/;
        const a = `${e}`.replace(o, "").split(".");
        const i = `${t}`.replace(o, "").split(".");
        const l = Math.min(a.length, i.length);
        for(n = 0; n < l; n++){
            r = parseInt(a[n], 10) - parseInt(i[n], 10);
            if (r !== 0) {
                return r;
            }
        }
        return a.length - i.length;
    }
    function c(e, t) {
        return u(e, t) >= 0;
    }
    function d(e, t) {
        return u(e, t) < 0;
    }
    function m(e) {
        const t = new (r("ua-parser-js"));
        t.setUA(e || "");
        const n = (t.getBrowser().name || "").toUpperCase();
        const o = t.getBrowser().version || "0.0.0";
        const a = (t.getEngine().name || "").toUpperCase();
        const i = (t.getOS().name || "").toUpperCase();
        const l = t.getOS().version || "0.0.0";
        const s = !a || a === "WEBKIT";
        const u = n === "SAFARI";
        const m = n === "CHROME";
        const p = n === "FIREFOX";
        const _ = a === "TRIDENT" || a === "EDGEHTML";
        const f = a === "GECKO";
        const g = a === "BLINK";
        const h = !m && !u && `${n}`.includes("OCULUS");
        const y = i !== "ANDROID" && i !== "CHROMIUM OS" && /\blinux\b/i.test(e ?? "");
        let C = false;
        e: {
            if (i === "MAC OS") {
                C = true;
                break e;
            }
            if (i === "WINDOWS") {
                if (c(l, "8.1") && (f || m)) {
                    C = true;
                }
                break e;
            }
            break e;
        }
        const b = m && c(o, "110.0.0");
        return {
            isWebkit: s,
            isGecko: f,
            isTrident: _,
            isSafari: u,
            isFirefox: p,
            isBlink: g,
            isBuggyVideoLoad: g,
            hasEmoji: C,
            troublesWithLotsOfVideos: r("gkx")("26258") === true && m,
            supportsEmojiEllipsification: !u,
            isBrokenDocPip: y,
            isBrokenVoipWasm: u && c(o, "26.2") && d(o, "26.3"),
            os: i.toLowerCase(),
            osVersion: l,
            browser: n.toLowerCase(),
            browserVersion: o,
            parser: t,
            isChrome: m,
            isOculusBrowser: h,
            hasCredentiallessIframeSupport: b
        };
    }
    const p = m(typeof self !== "undefined" ? self.navigator.userAgent : null);
    l.BROWSER_TYPE = e;
    l.OS_TYPE = s;
    l.parseUA = m;
    l.UA = p;
}, 98);