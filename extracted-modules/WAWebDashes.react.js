__d("WAWebDashes.react", [
    "fbt",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        dashContainer: {
            height: "x10w6t97",
            width: "xfo62xy",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(9);
        const { activeIndex, count } = e;
        let a;
        if (t[0] !== activeIndex || t[1] !== count) {
            a = [];
            for(let i = 0; i < count; i++){
                a.push(<M2Component key={`dash-${i}`} active={i === activeIndex}/>);
            }
            t[0] = activeIndex;
            t[1] = count;
            t[2] = a;
        } else {
            a = t[2];
        }
        let l;
        if (t[3] !== activeIndex || t[4] !== count) {
            l = s._("{current} out of {total}", [
                s._param("current", activeIndex + 1),
                s._param("total", count)
            ]);
            t[3] = activeIndex;
            t[4] = count;
            t[5] = l;
        } else {
            l = t[5];
        }
        let d;
        if (t[6] !== a || t[7] !== l) {
            const Component = o("WAWebFlex.react").FlexColumn;
            d = <Component aria-label={l} xstyle={c.dashContainer}>{a}</Component>;
            t[6] = a;
            t[7] = l;
            t[8] = d;
        } else {
            d = t[8];
        }
        return d;
    }
    function M2Component(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_active = e.active;
        let r;
        if (t[0] !== e_active) {
            r = ({
                0: {
                    className: "x5yr21d xfo62xy xr9e8f9 x1e4oeot x1ui04y5 x6en5u8 xs7vtfe xfl633f"
                },
                1: {
                    className: "x5yr21d xfo62xy xr9e8f9 x1e4oeot x1ui04y5 x6en5u8 xfl633f x3l9nec"
                }
            })[!!e_active << 0];
            t[0] = e_active;
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
    l.default = d;
}, 226);