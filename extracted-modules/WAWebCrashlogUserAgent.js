__d("WAWebCrashlogUserAgent", [
    "gkx"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = "web";
        let t = "unknown";
        if (r("gkx")("26259")) {
            t = "intern";
        } else if (r("gkx")("26256")) {
            t = "automation";
        } else if (r("gkx")("26258")) {
            t = "prod";
        }
        return `${e}_${t}`;
    }
    function s({ appVersion, browser, device }) {
        const o = `Web/${browser}`;
        return `WhatsApp/${appVersion} ${o} Device/${device}`;
    }
    l.getDistribution = e;
    l.getLogUserAgent = s;
}, 98);