__d("WAWebL10NEnumeration.react", [
    "fbt"
], function(t, n, r, o, a, i, l, s) {
    function e(e, asString = false) {
        if (e.length === 0) {
            return "";
        }
        const n = e[0];
        if (e.length === 1) {
            const r = s._("\"{A}\"", [
                s._param("A", n)
            ]);
            if (asString) {
                return r.toString();
            }
            return r;
        }
        const lastItem = e[e.length - 1];
        if (e.length === 2) {
            return u(n, lastItem, asString);
        }
        const firstItems = e.slice(0, e.length - 2);
        const penultimateItem = e[e.length - 2];
        return c({
            asString,
            firstItems,
            lastItem,
            penultimateItem
        });
    }
    function u(e, lastItem, n = false) {
        const r = s._("\"{A}\" & \"{B}\"", [
            s._param("A", e),
            s._param("B", lastItem)
        ]);
        if (n) {
            return r.toString();
        }
        return r;
    }
    function c({ asString = false, firstItems, lastItem, penultimateItem }) {
        const i = (acc, item)=>s._("\"{A},\" {B}", [
                s._param("A", item),
                s._param("B", acc)
            ]);
        const l = firstItems.reverse();
        const u = asString ? l.reduce((acc, item)=>i(acc, item).toString(), "") : l.reduce((acc, item)=>i(acc, item), null);
        const c = s._("{A}\"{B}\" & \"{C}\"", [
            s._param("A", u),
            s._param("B", penultimateItem),
            s._param("C", lastItem)
        ]);
        if (asString) {
            return c.toString();
        }
        return c;
    }
    l.default = e;
}, 226);