__d("WAWebInternFormatMutator", [
    "WAWebCreateRegexMutator",
    "WAWebInternFormatRegex",
    "WAWebLinkFormatMutator",
    "WAWebLinkMutatorComponent.react",
    "WAWebMentionFormatMutator",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebCreateRegexMutator")(r("WAWebInternFormatRegex"), 2, d);
    const c = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.jsx = function(t, n, { selectable = false }) {
            const i = p(n);
            const Component = r("WAWebLinkMutatorComponent.react");
            return <Component href={i} selectable={selectable}>{t}</Component>;
        };
        return t;
    })(u);
    c.format = false;
    c.compatibility = true;
    c.nestable = function(e) {
        return e !== r("WAWebLinkFormatMutator") && e !== r("WAWebMentionFormatMutator");
    };
    function d(e, t) {
        const n = e[1];
        if (n) {
            e.index += n.length;
            e[0] = e[0].slice(n.length);
        }
        return e;
    }
    var m = "https://www.internalfb.com/intern/bunny/?q=";
    function p([o, a, i, l, s, u, c, d]) {
        return `${m}${l ?? s ?? u ?? c ?? d}`;
    }
    l.default = c;
}, 98);