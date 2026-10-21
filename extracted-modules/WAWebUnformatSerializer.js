__d("WAWebUnformatSerializer", [
    "WAWebFormatSerializer",
    "WAWebIdentityFunction"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.onDelimiter = function(t, n) {
            return "";
        };
        t.onMutator = function(t, n, r, o, a) {
            const e = a?.spoilerReplacement;
            if (t.maskOnUnformat === true && e != null) {
                return e;
            }
            if (t.unformatDecorations != null) {
                const i = t.unformatDecorations;
                const { post, pre } = i;
                return s([
                    typeof pre === "function" ? pre(r) : pre
                ].concat(n, [
                    post
                ]));
            }
            return s(n);
        };
        return t;
    })(r("WAWebFormatSerializer"));
    e.onRoot = function(e) {
        return s(e);
    };
    e.onText = o("WAWebIdentityFunction").identityFunction;
    function s(e) {
        return e.filter(Boolean).join("");
    }
    l.default = e;
}, 98);