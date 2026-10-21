__d("WAWebEmojiRowPicker.react", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_children = e.children;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = {
                className: "x78zum5"
            };
            t[0] = r;
        } else {
            r = t[0];
        }
        let a;
        if (t[1] !== e_children) {
            a = <div {...babelHelpers.extends({}, r, {
                children: [
                    " ",
                    e_children,
                    " "
                ]
            })}/>;
            t[1] = e_children;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    l.default = UComponent;
}, 98);