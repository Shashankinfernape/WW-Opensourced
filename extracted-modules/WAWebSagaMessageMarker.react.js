__d("WAWebSagaMessageMarker.react", [
    "fbt",
    "WDSIconWdsIcAiFilled.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        icon: {
            verticalAlign: "xxymvpz",
            $$css: true
        },
        marginEnd2: {
            marginInlineEnd: "x16q7b9a",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(5);
        const { height, width } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = <span>{s._("AI")}</span>;
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                c.icon,
                c.marginEnd2
            ];
            t[1] = l;
        } else {
            l = t[1];
        }
        let d;
        if (t[2] !== height || t[3] !== width) {
            d = <>{i}{u.jsx(r("WDSIconWdsIcAiFilled.react"), {
                xstyle: l,
                displayInline: true,
                width,
                height
            })}</>;
            t[2] = height;
            t[3] = width;
            t[4] = d;
        } else {
            d = t[4];
        }
        return d;
    }
    l.default = d;
}, 226);