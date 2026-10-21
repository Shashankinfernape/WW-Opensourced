__d("WAWebNumberedListFormatMutator", [
    "WAWebBoolFunc",
    "WAWebCreateRegexMutator",
    "WAWebNumberedListMutatorComponent.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = /((?:^)(?:(\d{1,2})\. (?! +)(?:[^\n]+)(?:\n(?:(\d{1,2})\. [^\n]+)){0,})(?:\n|$))/gm;
    const c = r("WAWebCreateRegexMutator")(u, 0);
    const d = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.jsx = function(t, n, o) {
            return s.jsx(r("WAWebNumberedListMutatorComponent.react"), babelHelpers.extends({}, o, {
                children: t
            }));
        };
        return t;
    })(c);
    d.nestable = o("WAWebBoolFunc").returnFalse;
    l.default = d;
}, 98);