__d("WAWebStatusLinkFormatMutator", [
    "WAWebLinkFormatMutator",
    "WAWebLongLinkMutatorComponent.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = 34;
    const c = 12;
    const d = "...";
    function m(e, t) {
        const n = Math.min(t.length, Math.max(t.length - c, t.length + e.length - u));
        return t.length - n;
    }
    function p(e, t) {
        const n = t.length > c || t.length + e.length > u ? t.slice(0, m(e, t)) : t;
        return n;
    }
    function _({ domain, path }) {
        return [
            domain.replace(/^www\./, ""),
            path == null || path.length === 1 ? "" : path
        ];
    }
    function f(e, t) {
        const n = p(e, t);
        const r = e + (n.length === 1 ? "" : n);
        const o = r.length > u ? `${d}${r.slice(r.length - u)}` : r;
        const a = t !== n ? d : "";
        return o + a;
    }
    const g = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.jsx = function(n, o, a) {
            const t = _(o);
            const i = t[0];
            const l = t[1];
            const u = f(i, l);
            if (u !== i + l) {
                const Component = r("WAWebLongLinkMutatorComponent.react");
                return <Component xstyle={a.linkXstyle} selectable={a.selectable ?? false} link={o} dataTab={a.dataTab}>{u}</Component>;
            }
            return e.jsx.call(this, [
                i + l
            ], o, a);
        };
        return t;
    })(r("WAWebLinkFormatMutator"));
    l.cleanUrl = _;
    l.redactUrl = f;
    l.StatusLink = g;
}, 98);