__d("WAWebStrikethroughFormatMutator", [
    "WAWebAdjustDelimitedRange",
    "WAWebCreateRegexMutator",
    "WAWebStrikethroughFormatRegex",
    "WAWebStrikethroughMutatorComponent.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebAdjustDelimitedRange")("_");
    const c = r("WAWebCreateRegexMutator")(r("WAWebStrikethroughFormatRegex"), 1, u);
    const d = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.jsx = function(t, n, { selectable }) {
            const Component = r("WAWebStrikethroughMutatorComponent.react");
            return <Component selectable={selectable}>{t}</Component>;
        };
        return t;
    })(c);
    d.previewChildrenOnly = true;
    l.default = d;
}, 98);