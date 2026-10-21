__d("WAWebNumberedListItemFormatMutator", [
    "WAWebCreateRegexMutator",
    "WAWebNumberedListFormatMutator",
    "WAWebNumberedListItemMutatorComponent.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = /(?:^)(\d{1,2}\.)( (?! +)[^\n]+(?:$))/gm;
    const c = /(?:^)(\d{1,2}\.)( (?! +)[^\n]*(?:$))/gm;
    const d = new Set([
        r("WAWebNumberedListFormatMutator")
    ]);
    function m(e) {
        let NumberedListItem;
        const n = r("WAWebCreateRegexMutator")(e, 2);
        NumberedListItem = ((e)=>{
            function t() {
                return e.apply(this, arguments) || this;
            }
            babelHelpers.inheritsLoose(t, e);
            t.jsx = function(t, [, numbering, u], { inline, selectable = false }) {
                const Component = r("WAWebNumberedListItemMutatorComponent.react");
                return <Component inline={inline} selectable={selectable} text={u} numbering={numbering}>{t}</Component>;
            };
            return t;
        })(n);
        NumberedListItem.displayName = "NumberedListItem";
        NumberedListItem.nestable = function(e) {
            return d.has(e);
        };
        NumberedListItem.unformatDecorations = {
            pre: function(t) {
                return t[1];
            }
        };
        return NumberedListItem;
    }
    const p = m(u);
    const _ = m(c);
    l.NumberedListItem = p;
    l.NumberedListItemWithEmpty = _;
}, 98);