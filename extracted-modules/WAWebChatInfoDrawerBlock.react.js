__d("WAWebChatInfoDrawerBlock.react", [
    "WAWebDrawerBlock.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        container: {
            paddingInlineStart: "x1c1uobl",
            $$css: true
        },
        block: {
            paddingInlineEnd: "xyri2b",
            borderTopWidth: "x972fbf",
            $$css: true
        }
    };
    function c(e) {
        const n = o("react-compiler-runtime").c(9);
        const separator = e.separator ?? false;
        let i;
        if (n[0] !== e.xstyle) {
            i = [
                e.xstyle,
                u.container
            ];
            n[0] = e.xstyle;
            n[1] = i;
        } else {
            i = n[1];
        }
        let blockXstyle;
        if (n[2] !== e.blockXstyle) {
            blockXstyle = [
                e.blockXstyle,
                u.block
            ];
            n[2] = e.blockXstyle;
            n[3] = blockXstyle;
        } else {
            blockXstyle = n[3];
        }
        let c;
        if (n[4] !== e || n[5] !== separator || n[6] !== i || n[7] !== blockXstyle) {
            c = s.jsx(r("WAWebDrawerBlock.react"), babelHelpers.extends({}, e, {
                separator,
                xstyle: i,
                blockXstyle
            }));
            n[4] = e;
            n[5] = separator;
            n[6] = i;
            n[7] = blockXstyle;
            n[8] = c;
        } else {
            c = n[8];
        }
        return c;
    }
    l.default = c;
}, 98);