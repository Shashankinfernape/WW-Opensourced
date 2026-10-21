__d("WAWebFormatParse", [
    "WAUnicodeUtils",
    "WAWebFormatFilter",
    "WAWebFormatFlatten",
    "WAWebFormatMatch",
    "WAWebFormatParseTree"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n = Infinity, o) {
        return u(e, r("WAWebFormatFlatten")(t), n, o);
    }
    function s(e, t, n, o) {
        const a = u(e, r("WAWebFormatFlatten")(t), o, Infinity);
        const i = {
            mutatorIndex: 0,
            textLength: 0
        };
        if (d(a, n, i, function(e) {
            return e.ellipsifiable === true;
        })) {
            return {
                parseLimit: o,
                textLimit: i.textLength
            };
        }
        return null;
    }
    function u(e, t, n = Infinity, a) {
        const i = r("WAWebFormatMatch")(e, t, n);
        const l = i.length ? r("WAWebFormatParseTree")(e, r("WAWebFormatFilter")(i, t), t) : {
            children: [
                {
                    type: "text",
                    value: e
                }
            ]
        };
        if (a == null) {
            if (n < o("WAUnicodeUtils").numCodepoints(e)) {
                c(l, {
                    limit: n
                });
            }
        } else if (a <= 0) {
            l.children = [];
        } else if (Number.isFinite(a)) {
            c(l, {
                limit: a
            });
        }
        return l;
    }
    function c(e, t) {
        if (!(t.limit <= 0)) {
            if ("type" in e && e.type === "text") {
                const n = o("WAUnicodeUtils").numCodepoints(e.value);
                if (n >= t.limit) {
                    e.value = o("WAUnicodeUtils").toArray(e.value).slice(0, t.limit).join("");
                    t.limit = 0;
                } else {
                    t.limit -= n;
                }
                return;
            }
            if (!("type" in e && e.type === "delimiter")) {
                for(var r = 0; r < e.children.length && (c(e.children[r], t), !(t.limit <= 0));){
                    r++;
                }
                e.children = e.children.slice(0, r + 1);
            }
        }
    }
    function d(e, t, n, r) {
        if ("type" in e) {
            if (e.type === "text") {
                n.textLength += o("WAUnicodeUtils").numCodepoints(e.value);
            }
            return false;
        }
        if ("mutator" in e && r(e.mutator)) {
            if (n.mutatorIndex === t) {
                return true;
            }
            n.mutatorIndex++;
        }
        for (const a of e.children){
            if (d(a, t, n, r)) {
                return true;
            }
        }
        return false;
    }
    l.parse = e;
    l.getLimitsBeforeEllipsifiableMutator = s;
    l._parse = u;
}, 98);