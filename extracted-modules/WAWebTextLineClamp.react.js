__d("WAWebTextLineClamp.react", [
    "invariant",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(7);
        const { children, dir, maxLines } = e;
        if (!(maxLines >= 1)) {
            s(0, 56351);
        }
        let i;
        if (t[0] !== maxLines) {
            i = maxLines === 1 ? {
                display: "block",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            } : {
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: maxLines
            };
            t[0] = maxLines;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        let c;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = "x1n2onr6 x6ikm8r x10wlt62";
            t[2] = c;
        } else {
            c = t[2];
        }
        let d;
        if (t[3] !== children || t[4] !== dir || t[5] !== l) {
            d = <span className={c} style={l} dir={dir}>{children}</span>;
            t[3] = children;
            t[4] = dir;
            t[5] = l;
            t[6] = d;
        } else {
            d = t[6];
        }
        return d;
    }
    l.default = c;
}, 98);