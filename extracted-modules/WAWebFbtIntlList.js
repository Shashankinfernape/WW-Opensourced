__d("WAWebFbtIntlList", [
    "fbt",
    "invariant",
    "err",
    "react"
], function(t, n, r, o, a, i, l, s, u) {
    let e;
    const c = e || (e = o("react"));
    const d = {
        AND: "AND",
        NONE: "NONE",
        OR: "OR"
    };
    const m = {
        BULLET: "BULLET",
        COMMA: "COMMA",
        SEMICOLON: "SEMICOLON"
    };
    const p = 500;
    const _ = function(t, n, r) {
        const e = t.filter(Boolean);
        const o = e.length;
        if (o === 0) {
            return "";
        }
        if (o === 1) {
            return e[0];
        }
        const a = e[o - 1];
        let i = e[0];
        let l = 0;
        for(let u = 1; u < o - 1; ++u){
            if (u >= p) {
                l = o - u;
                break;
            }
            e: {
                if (r === m.SEMICOLON) {
                    i = s._("{previous-items}; {following-items}", [
                        s._param("previous-items", i),
                        s._param("following-items", e[u])
                    ]);
                    break e;
                }
                if (r === m.BULLET) {
                    i = s._("{previous-items} • {following-items}", [
                        s._param("previous-items", i),
                        s._param("following-items", e[u])
                    ]);
                    break e;
                }
                if (r === m.COMMA || r === null || r === void 0) {
                    i = f(i, e[u]);
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${r}`);
            }
        }
        if (l > 0) {
            return g(i, l, n || d.AND, r || m.COMMA);
        }
        return h({
            conjunction: n || d.AND,
            delimiter: r || m.COMMA,
            lastItem: a,
            list: i
        });
    };
    function f(e, t) {
        return s._("{previous-items}, {following-items}", [
            s._param("previous-items", e),
            s._param("following-items", t)
        ]);
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g(e, t, n, r) {
        if (r === m.COMMA) {
            switch(n){
                case d.AND:
                    return s._("{previous-items} & {overflow-item-count} more", [
                        s._param("previous-items", e),
                        s._param("overflow-item-count", t)
                    ]);
                case d.OR:
                    return s._("{previous-items} or {overflow-item-count} more", [
                        s._param("previous-items", e),
                        s._param("overflow-item-count", t)
                    ]);
                case d.NONE:
                    return s._("{previous-items}, {overflow-item-count} more", [
                        s._param("previous-items", e),
                        s._param("overflow-item-count", t)
                    ]);
            }
        }
        return s._("{previous-items} ...", [
            s._param("previous-items", e)
        ]);
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    function h({ conjunction: t, delimiter: n, lastItem: o, list: a }) {
        switch(t){
            case d.AND:
                return s._("{list-of-items} & {last-item}", [
                    s._param("list-of-items", a),
                    s._param("last-item", o)
                ]);
            case d.OR:
                return s._("{list-of-items} or {last-item}", [
                    s._param("list-of-items", a),
                    s._param("last-item", o)
                ]);
            case d.NONE:
                switch(n){
                    case m.SEMICOLON:
                        return s._("{previous-items}; {last-item}", [
                            s._param("previous-items", a),
                            s._param("last-item", o)
                        ]);
                    case m.BULLET:
                        return s._("{list-of-items} • {last-item}", [
                            s._param("list-of-items", a),
                            s._param("last-item", o)
                        ]);
                    default:
                        return f(a, o);
                }
            default:
                throw r("err")(`[intlList] Invalid conjunction ${t} provided to intlList`);
        }
    }
    _.DELIMITERS = m;
    _.CONJUNCTIONS = d;
    l.default = _;
}, 226);