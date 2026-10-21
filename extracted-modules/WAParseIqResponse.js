__d("WAParseIqResponse", [
    "WAWap"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
        const r = e.content;
        if (r && Array.isArray(r) && r[0]) {
            const a = r[0];
            if (a.tag === "error") {
                const i = a.attrs || {};
                let l;
                if (n) {
                    if (typeof n === "function") {
                        l = n(e);
                    } else {
                        l = n.parseOrThrow(a);
                    }
                }
                return {
                    success: false,
                    errorCode: parseInt(i.code, 10),
                    errorText: o("WAWap").decodeAsString(i.text) || "",
                    errorType: o("WAWap").decodeAsString(i.type) || "",
                    errorBackoff: parseInt(i.backoff, 10),
                    toString: s,
                    customError: l
                };
            }
        }
        if (typeof t === "function") {
            return {
                success: true,
                result: t(e)
            };
        }
        return {
            success: true,
            result: t.parseOrThrow(e)
        };
    }
    function s() {
        return `IqError ${this.errorCode}: ${this.errorText}`;
    }
    l.parseIqResponse = e;
}, 98);