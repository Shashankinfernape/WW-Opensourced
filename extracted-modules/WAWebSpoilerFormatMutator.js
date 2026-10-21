__d("WAWebSpoilerFormatMutator", [
    "WAWebCreateRegexMutator",
    "WAWebSpoilerFormatRegex",
    "WAWebSpoilerMutatorComponent.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebCreateRegexMutator")(o("WAWebSpoilerFormatRegex").SPOILER_REGEX, 1);
    const c = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.jsx = function(t, n, { selectable, spoilerInteractive, spoilerRevealContext }) {
            const Component = r("WAWebSpoilerMutatorComponent.react");
            return <Component selectable={selectable} interactive={spoilerInteractive} spoilerRevealContext={spoilerRevealContext}>{t}</Component>;
        };
        return t;
    })(u);
    c.maskOnUnformat = true;
    l.default = c;
}, 98);