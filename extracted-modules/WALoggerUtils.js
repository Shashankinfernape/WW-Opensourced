__d("WALoggerUtils", [
    "WAHex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (typeof e === "string") {
            return `'${e}'`;
        }
        if (e == null || typeof e !== "object") {
            return String(e);
        }
        if (Array.isArray(e)) {
            return `[${e.join(",")}]`;
        }
        if (e instanceof Uint8Array) {
            if (e.length < 64) {
                return `<<${s(e)}>>`;
            }
            const t = e.subarray(0, 32);
            return `<<${s(t)}, ${e.length - t.length} more bytes>>`;
        } else {
            if (e instanceof Error) {
                if (e.name) {
                    return `(${e.name})`;
                }
                return "";
            }
            if (e.toString === Object.prototype.toString) {
                return JSON.stringify(e, function(e, t) {
                    if (e) {
                        return String(t);
                    }
                    return t;
                });
            }
            return String(e);
        }
    }
    function s(e) {
        for(var t = true, n = e.length; t && n;){
            const r = e[--n];
            t = r >= 32 && r < 127;
        }
        if (t) {
            return JSON.stringify(String.fromCharCode(...e));
        }
        return o("WAHex").toHex(e);
    }
    function u(t, n) {
        const r = [
            t[0]
        ];
        n.forEach((n, o)=>{
            r.push(e(n), t[o + 1]);
        });
        return r.join("");
    }
    function c(e) {
        return e;
    }
    function d(e) {
        return `${e * 100}%`;
    }
    l.debugStr = e;
    l.rebuildTemplate = u;
    l.dynamicLoggingSampling = c;
    l.loggingSamplingAsString = d;
}, 98);