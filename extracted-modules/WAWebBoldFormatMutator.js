__d("WAWebBoldFormatMutator", [
    "WAWebAdjustDelimitedRange",
    "WAWebBoldFormatRegex",
    "WAWebBoldMutatorComponent.react",
    "WAWebCreateRegexMutator",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebAdjustDelimitedRange")("*");
    const c = r("WAWebCreateRegexMutator")(r("WAWebBoldFormatRegex"), 1, u);
    const d = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.jsx = function(t, n, { boldXstyle, selectable = false }) {
            const Component = r("WAWebBoldMutatorComponent.react");
            return <Component selectable={selectable} xstyle={boldXstyle}>{t}</Component>;
        };
        return t;
    })(c);
    d.previewChildrenOnly = true;
    l.default = d;
}, 98);