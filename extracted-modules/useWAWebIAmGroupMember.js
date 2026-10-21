__d("useWAWebIAmGroupMember", [
    "react-compiler-runtime",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(3);
        const n = e?.participants;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                "bulk_add",
                "bulk_remove",
                "reset"
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] !== n) {
            i = function() {
                return n?.iAmMember();
            };
            t[1] = n;
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = r("useWAWebEventTargetValue")(n, a, i);
        return !!l;
    }
    l.default = e;
}, 98);