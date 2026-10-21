__d("WAWebBulletedListFormatMutator", [
    "WAWebBoolFunc",
    "WAWebBulletedListMutatorComponent.react",
    "WAWebCreateRegexMutator",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = /((?:^)(?:[\*\-\u2022] (?! +)(?:[^\n]+)(?:\n(?:[\*\-\u2022] (?! +)[^\n]+)){0,})(?:\n|$))/gm;
    const c = r("WAWebCreateRegexMutator")(u, 0);
    const d = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.jsx = function(t, n, o) {
            return s.jsx(r("WAWebBulletedListMutatorComponent.react"), babelHelpers.extends({}, o, {
                children: t
            }));
        };
        return t;
    })(c);
    d.nestable = o("WAWebBoolFunc").returnFalse;
    l.default = d;
}, 98);