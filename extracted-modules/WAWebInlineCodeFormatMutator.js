__d("WAWebInlineCodeFormatMutator", [
    "WAWebAdjustDelimitedRange",
    "WAWebCreateRegexMutator",
    "WAWebInlineCodeFormatRegex",
    "WAWebInlineCodeMutatorComponent.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebAdjustDelimitedRange")("`");
    const c = r("WAWebCreateRegexMutator")(r("WAWebInlineCodeFormatRegex"), 1, u);
    const d = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.jsx = function(t, n, { codeXstyle, quoted = false, selectable = false }) {
            const Component = r("WAWebInlineCodeMutatorComponent.react");
            return <Component selectable={selectable} quoted={quoted} xstyle={codeXstyle}>{t}</Component>;
        };
        return t;
    })(c);
    d.previewChildrenOnly = true;
    d.format = false;
    l.default = d;
}, 98);