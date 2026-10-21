__d("WAWebMentionAllFormatMutator", [
    "WAWebExtractRangesUsingRegex",
    "WAWebFormatMutator",
    "WAWebMentionAllMutatorComponent.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.match = function(t, n) {
            if (!n || n.hasMentionAll !== true) {
                return [];
            }
            const e = /@all\b/g;
            const o = r("WAWebExtractRangesUsingRegex")(t, e);
            const a = o.map(([t, n, r, o, a])=>{
                const i = {
                    text: a[0]
                };
                return [
                    t,
                    n,
                    r,
                    o,
                    i
                ];
            });
            return a;
        };
        t.jsx = function(t, n, { lastMessage }) {
            return s.jsx(r("WAWebMentionAllMutatorComponent.react"), {
                text: n.text,
                lastMessage
            });
        };
        return t;
    })(r("WAWebFormatMutator"));
    u.compatibility = true;
    l.default = u;
}, 98);