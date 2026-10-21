__d("WAWebJsxSerializer.react", [
    "WAWebBulletedListMutatorComponent.react",
    "WAWebFormatSerializer",
    "WAWebNumberedListMutatorComponent.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_cloneElement = e.cloneElement;
    const c = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("WAWebFormatSerializer"));
    c.onText = function(e) {
        return e;
    };
    c.onDelimiter = function(e) {};
    c.onRoot = function(e) {
        m(e);
        return d(e);
    };
    c.onMutator = function(e, t, n, r, o) {
        const A1 = d(t);
        if (o?.previewMode === true && e.previewChildrenOnly === true) {
            return <>{A1}</>;
        }
        const i = o?.markEllipsifiableEmojis === true && e.ellipsifiable === true ? babelHelpers.extends({}, r, {
            ellipsifiable: true
        }) : r;
        return <A1 key={i} {...n}/>;
    };
    function d(e) {
        const t = [];
        for(let n = 0; n < e.length; n++){
            const r = e[n];
            if (r !== undefined) {
                if (typeof r === "string") {
                    t.push(r);
                    continue;
                }
                const o = `jsx-child-${n}`;
                t.push(e_cloneElement(r, {
                    key: o
                }));
            }
        }
        return t;
    }
    function m(e) {
        let t = -1;
        for (const n of e){
            if (n?.type === r("WAWebNumberedListMutatorComponent.react")) {
                const a = n?.props?.children;
                if (Array.isArray(a)) {
                    for (const i of a){
                        const s = i?.props?.numbering;
                        if (s != null) {
                            t = Math.max(t, parseInt(s, 10));
                        }
                    }
                }
            }
        }
        if (t >= 10) {
            for(let c = 0; c < e.length; c++){
                const d = e[c];
                if (!(d?.type !== r("WAWebNumberedListMutatorComponent.react") && d?.type !== r("WAWebBulletedListMutatorComponent.react"))) {
                    e[c] = e_cloneElement(d, {
                        largerIndentation: true
                    });
                }
            }
        }
    }
    l.default = c;
}, 98);