__d("WAWebDivider.react", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_direction = e.direction;
        let r;
        if (t[0] !== e_direction) {
            r = ({
                0: {
                    className: "x9zucqe x1co6499 x1ptxcow x1q0q8m5 xqtp20y"
                },
                1: {
                    className: "x9zucqe xbyyjgo x1lun4ml x18b5jzi x1qx5ct2 x1sa5p1d xnkmj2t"
                }
            })[(e_direction === "vertical") << 0];
            t[0] = e_direction;
            t[1] = r;
        } else {
            r = t[1];
        }
        let a;
        if (t[2] !== r) {
            a = <div {...babelHelpers.extends({}, r)}/>;
            t[2] = r;
            t[3] = a;
        } else {
            a = t[3];
        }
        return a;
    }
    l.default = u;
}, 98);