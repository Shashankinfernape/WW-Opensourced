__d("useWAWebSyncedNonWAContact", [
    "WAWebContactCollection",
    "WAWebDeactivatedContactUtils",
    "WAWebOutContactCollection",
    "react-compiler-runtime",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("react-compiler-runtime").c(14);
        let a;
        if (n[0] !== t || n[1] !== e?.id) {
            a = (t ?? e?.id)?.toString() ?? "";
            n[0] = t;
            n[1] = e?.id;
            n[2] = a;
        } else {
            a = n[2];
        }
        const u = a;
        let c;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            c = [
                o("WAWebOutContactCollection").OutContactCollection,
                o("WAWebContactCollection").ContactCollection
            ];
            n[3] = c;
        } else {
            c = n[3];
        }
        let d;
        if (n[4] !== t || n[5] !== e || n[6] !== u) {
            d = function() {
                return `${u}:${o("WAWebDeactivatedContactUtils").isSyncedNonWAContact(s(e, t)) ? "1" : "0"}`;
            };
            n[4] = t;
            n[5] = e;
            n[6] = u;
            n[7] = d;
        } else {
            d = n[7];
        }
        let m;
        if (n[8] !== t || n[9] !== e) {
            m = [
                e,
                t
            ];
            n[8] = t;
            n[9] = e;
            n[10] = m;
        } else {
            m = n[10];
        }
        const p = r("useWAWebEventTargetValue")(c, "add remove reset change lid-pn-mapping-updated change:phoneNumber", d, m);
        if (p === `${u}:1`) {
            return true;
        }
        if (p === `${u}:0`) {
            return false;
        }
        let _;
        if (n[11] !== t || n[12] !== e) {
            _ = o("WAWebDeactivatedContactUtils").isSyncedNonWAContact(s(e, t));
            n[11] = t;
            n[12] = e;
            n[13] = _;
        } else {
            _ = n[13];
        }
        return _;
    }
    function s(e, t) {
        if (t != null) {
            return o("WAWebContactCollection").ContactCollection.get(t);
        }
        return e;
    }
    l.default = e;
}, 98);