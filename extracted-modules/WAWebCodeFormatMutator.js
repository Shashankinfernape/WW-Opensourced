__d("WAWebCodeFormatMutator", [
    "WAWebCodeBlockFormatRegex",
    "WAWebCodeMutatorComponent.react",
    "WAWebCreateRegexMutator",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebCreateRegexMutator")(r("WAWebCodeBlockFormatRegex"), 1);
    const c = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.jsx = function(t, n, { codeXstyle, selectable = false }) {
            const Component = r("WAWebCodeMutatorComponent.react");
            return <Component selectable={selectable} xstyle={codeXstyle}>{t}</Component>;
        };
        return t;
    })(u);
    c.previewChildrenOnly = true;
    c.format = false;
    function d(e) {
        return e.replace(r("WAWebCodeBlockFormatRegex"), " ");
    }
    l.Code = c;
    l.removeCodeBlocks = d;
}, 98);