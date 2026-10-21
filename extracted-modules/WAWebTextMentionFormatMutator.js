__d("WAWebTextMentionFormatMutator", [
    "WAWebMentionFormatMutator",
    "WAWebTextMentionMutatorComponent.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.jsx = function(t, { contact, groupMetadata }, { lastMessage, selectable, theme }) {
            return s.jsx(r("WAWebTextMentionMutatorComponent.react"), {
                contact,
                groupMetadata,
                selectable,
                theme,
                lastMessage
            });
        };
        return t;
    })(r("WAWebMentionFormatMutator"));
    l.default = u;
}, 98);