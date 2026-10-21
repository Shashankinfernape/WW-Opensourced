__d("WAWebBulletedListItemFormatMutator", [
    "WAWebBulletedListFormatMutator",
    "WAWebBulletedListItemMutatorComponent.react",
    "WAWebCreateRegexMutator",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = /(?:^)[\*\u2022]( (?! +)[^\n]+(?:$))/gm;
    const c = /(?:^)\-( (?! +)[^\n]+(?:$))/gm;
    const d = /(?:^)\*( (?! +)[^\n]*(?:$))/gm;
    const m = /(?:^)\-( (?! +)[^\n]*(?:$))/gm;
    const p = new Set([
        r("WAWebBulletedListFormatMutator")
    ]);
    function _(e, t) {
        let BulletedListItem;
        const o = r("WAWebCreateRegexMutator")(e, 1);
        BulletedListItem = ((e)=>{
            function n() {
                return e.apply(this, arguments) || this;
            }
            babelHelpers.inheritsLoose(n, e);
            n.jsx = function(n, [, u], { inline, selectable = false }) {
                const Component = r("WAWebBulletedListItemMutatorComponent.react");
                return <Component inline={inline} selectable={selectable} text={u} symbol={t}>{n}</Component>;
            };
            return n;
        })(o);
        BulletedListItem.displayName = "BulletedListItem";
        BulletedListItem.nestable = function(e) {
            return p.has(e);
        };
        BulletedListItem.unformatDecorations = {
            pre: t
        };
        return BulletedListItem;
    }
    const f = _(u, "*");
    const g = _(c, "-");
    const h = _(d, "*");
    const y = _(m, "-");
    l.BulletedListItem = f;
    l.HyphenListItem = g;
    l.BulletedListItemWithEmpty = h;
    l.HyphenListItemWithEmpty = y;
}, 98);