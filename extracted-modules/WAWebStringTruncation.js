__d("WAWebStringTruncation", [
    "WAUnicodeUtils",
    "fbs"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = e ?? "";
        if (o("WAUnicodeUtils").numCodepoints(n) <= t) {
            return n;
        }
        const a = r("fbs")._("…").toString();
        return o("WAUnicodeUtils").firstNCodepoints(n, t - o("WAUnicodeUtils").numCodepoints(a)) + a;
    }
    l.truncateAtCodepoints = e;
}, 226);