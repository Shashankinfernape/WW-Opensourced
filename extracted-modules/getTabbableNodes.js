__d("getTabbableNodes", [], function(t, n, r, o, a, i) {
    function e(e, t) {
        const document_activeElement = document.activeElement;
        const r = function(r, o, a) {
            if (a === document_activeElement) {
                return true;
            }
            return e(r, o, a) && a.offsetWidth > 0 && a.offsetHeight > 0 && a.tabIndex !== -1 && window.getComputedStyle(a).visibility !== "hidden";
        };
        let o = document_activeElement ? t.DO_NOT_USE_queryAllNodes(r) : null;
        if (o === null) {
            return [
                null,
                null,
                null,
                0,
                null
            ];
        }
        const a = {};
        for (const i of o){
            if (i instanceof HTMLInputElement && i.tagName === "INPUT" && i.type === "radio" && i.name != null) {
                a[i.name] = [].concat(a[i.name] ?? [], [
                    i
                ]);
            }
        }
        const s = Object.values(a).map((e)=>{
            if (e.find((e)=>e.checked)) {
                return e.filter((e)=>!e.checked);
            }
            const t = e[0];
            const n = babelHelpers.arrayLikeToArray(e).slice(1);
            return n;
        }).flat();
        o = o.filter((e)=>!s.includes(e));
        const u = o[0];
        const c = o[o.length - 1];
        const m = o.indexOf(document_activeElement);
        let p = null;
        if (m !== -1) {
            p = o[m];
        }
        return [
            o,
            u,
            c,
            m,
            p
        ];
    }
    i.default = e;
}, 66);