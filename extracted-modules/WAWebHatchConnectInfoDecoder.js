__d("WAWebHatchConnectInfoDecoder", [
    "WAWebHatchConnectorsListDecoder",
    "WAWebHatchJsonReaders"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Set([
        "consent_only",
        "foa_auth",
        "oauth"
    ]);
    function s(e) {
        const n = o("WAWebHatchJsonReaders").readObject(e, "result") ?? e;
        const r = d(o("WAWebHatchJsonReaders").readObject(n, "action"));
        if (r == null) {
            return null;
        }
        return {
            action: r,
            consent: o("WAWebHatchConnectorsListDecoder").decodeHatchConnectConsent(o("WAWebHatchJsonReaders").readObject(n, "consent"))
        };
    }
    function u(e) {
        return s(e)?.action ?? null;
    }
    function c(e) {
        let t;
        try {
            t = new URL(e);
        } catch (e) {
            return false;
        }
        return t.protocol === "https:" && t.username === "" && t.password === "";
    }
    function d(e) {
        const t = o("WAWebHatchJsonReaders").readTrimmedString(e, "type");
        if (o("WAWebHatchJsonReaders").isBlankText(t)) {
            return null;
        }
        if (t === "oauth") {
            const n = o("WAWebHatchJsonReaders").readTrimmedString(e, "url");
            if (c(n)) {
                return {
                    kind: "oauth",
                    url: n
                };
            }
            return {
                kind: "unsupported",
                wireType: t
            };
        }
        switch(t){
            case "foa_auth":
                return {
                    kind: "foa_auth"
                };
            case "consent_only":
                return {
                    kind: "consent_only"
                };
            default:
                return {
                    kind: "unsupported",
                    wireType: t
                };
        }
    }
    l.RUNNABLE_CONNECT_ACTION_TYPES = e;
    l.decodeHatchConnectInfo = s;
    l.decodeHatchConnectAction = u;
    l.isUsableHttpsUrl = c;
}, 98);