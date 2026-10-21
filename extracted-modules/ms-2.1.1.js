__d("ms-2.1.1", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    const l = {
        exports: e
    };
    function s() {
        const e = 1000;
        const t = e * 60;
        const n = t * 60;
        const r = n * 24;
        const o = r * 7;
        const a = r * 365.25;
        l.exports = function(e, t) {
            t = t || {};
            const n = typeof e;
            if (n === "string" && e.length > 0) {
                return i(e);
            }
            if (n === "number" && isNaN(e) === false) {
                if (t.long) {
                    return u(e);
                }
                return s(e);
            }
            throw new Error(`val is not a non-empty string or a valid number. val=${JSON.stringify(e)}`);
        };
        function i(i) {
            i = String(i);
            if (!(i.length > 100)) {
                const l = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(i);
                if (l) {
                    const s = parseFloat(l[1]);
                    const u = (l[2] || "ms").toLowerCase();
                    switch(u){
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return s * a;
                        case "weeks":
                        case "week":
                        case "w":
                            return s * o;
                        case "days":
                        case "day":
                        case "d":
                            return s * r;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return s * n;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return s * t;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return s * e;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return s;
                        default:
                            return;
                    }
                }
            }
        }
        function s(o) {
            const a = Math.abs(o);
            if (a >= r) {
                return `${Math.round(o / r)}d`;
            }
            if (a >= n) {
                return `${Math.round(o / n)}h`;
            }
            if (a >= t) {
                return `${Math.round(o / t)}m`;
            }
            if (a >= e) {
                return `${Math.round(o / e)}s`;
            }
            return `${o}ms`;
        }
        function u(o) {
            const a = Math.abs(o);
            if (a >= r) {
                return c(o, a, r, "day");
            }
            if (a >= n) {
                return c(o, a, n, "hour");
            }
            if (a >= t) {
                return c(o, a, t, "minute");
            }
            if (a >= e) {
                return c(o, a, e, "second");
            }
            return `${o} ms`;
        }
        function c(e, t, n, r) {
            const o = t >= n * 1.5;
            return `${Math.round(e / n)} ${r}${o ? "s" : ""}`;
        }
    }
    let u = false;
    function c() {
        if (!u) {
            u = true;
            s();
        }
        return l.exports;
    }
    function d(e) {
        switch(e){
            case undefined:
                return c();
        }
    }
    a.exports = d;
}, null);