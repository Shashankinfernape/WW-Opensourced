__d("WAWebTextMutatorComponentUtils", [
    "WAWebBulletedListItemMutatorComponent.react",
    "WAWebNumberedListItemMutatorComponent.react"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = Array.isArray(e) ? e : [
            e
        ];
        const n = [];
        let o = [];
        for (const a of t){
            if (typeof a === "string" && a.match(/^\r?\n$/) && o.length) {
                o.push(a);
            } else if (a != null && typeof a === "object" && (a.type === r("WAWebBulletedListItemMutatorComponent.react") || a.type === r("WAWebNumberedListItemMutatorComponent.react"))) {
                o.push(a);
            } else {
                let i = a;
                if (o.length) {
                    n.push({
                        isList: true,
                        children: o
                    });
                    o = [];
                    if (typeof i === "string") {
                        i = i.replace(/^\r?\n/g, "");
                    }
                }
                n.push({
                    isList: false,
                    children: i
                });
            }
        }
        if (o.length) {
            n.push({
                isList: true,
                children: o
            });
        }
        return n;
    }
    l.groupListChildren = e;
}, 98);