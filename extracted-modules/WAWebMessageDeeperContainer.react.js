__d("WAWebMessageDeeperContainer.react", [
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        posBottom: {
            borderStartStartRadius: "x1bczwif",
            borderStartEndRadius: "x17un8ov",
            $$css: true
        },
        posTop: {
            borderEndStartRadius: "x11o6v7j",
            borderEndEndRadius: "x1e7945m",
            $$css: true
        },
        wrapper: {
            borderStartStartRadius: "x1i282gy",
            borderStartEndRadius: "xx9ypkp",
            borderEndEndRadius: "xd15eu0",
            borderEndStartRadius: "x11ecxm0",
            cursor: "x1ypdohk",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textDecoration: "x1hl2dhg",
            width: "xh8yej3",
            $$css: true
        },
        wrapperIn: {
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        wrapperOut: {
            backgroundColor: "x1bu39yj",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(7);
        const { children, outgoingMsg, position, xstyle } = t;
        let d;
        if (n[0] !== outgoingMsg || n[1] !== position || n[2] !== xstyle) {
            d = (e || (e = r("stylex"))).props(c.wrapper, position === "bottom" && c.posBottom, position === "top" && c.posTop, !outgoingMsg && c.wrapperIn, outgoingMsg && c.wrapperOut, xstyle);
            n[0] = outgoingMsg;
            n[1] = position;
            n[2] = xstyle;
            n[3] = d;
        } else {
            d = n[3];
        }
        let m;
        if (n[4] !== children || n[5] !== d) {
            m = <div {...babelHelpers.extends({}, d, {
                children
            })}/>;
            n[4] = children;
            n[5] = d;
            n[6] = m;
        } else {
            m = n[6];
        }
        return m;
    }
    l.default = d;
}, 98);