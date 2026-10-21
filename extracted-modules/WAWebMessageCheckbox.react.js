__d("WAWebMessageCheckbox.react", [
    "WAWebAppContext.react",
    "WAWebCheckBox.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(14);
        const { ariaLabel, checked, msgTheme, onClick, ref, theme } = e;
        const c = o("WAWebAppContext.react").useAppContext();
        const c_rightDrawerOpen = c.rightDrawerOpen;
        const m = msgTheme === "gallery";
        let p;
        if (t[0] !== checked || t[1] !== m || t[2] !== c_rightDrawerOpen) {
            p = ({
                0: {
                    className: "x10l6tqk x1pdr0v7 x65okc x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x23o9q9 x5yr21d x4p5aij x1j85h84 xz7312c x1ypdohk x5jttoc xtdr1uq"
                },
                4: {
                    className: "x10l6tqk x1pdr0v7 x65okc x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x23o9q9 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc xtdr1uq xz7312c x12m67a8"
                },
                2: {
                    className: "x10l6tqk x1pdr0v7 x65okc x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x23o9q9 x5yr21d x4p5aij x1j85h84 xz7312c x1ypdohk x5jttoc x6j5u84"
                },
                6: {
                    className: "x10l6tqk x1pdr0v7 x65okc x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x23o9q9 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc xz7312c x12m67a8 x6j5u84"
                },
                1: {
                    className: "x10l6tqk x1pdr0v7 x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc x1o0tod x14atkfc x1c1uobl xjbqb8w x1n5bzlp"
                },
                5: {
                    className: "x10l6tqk x1pdr0v7 x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc x1o0tod x14atkfc x1c1uobl xjbqb8w x1n5bzlp"
                },
                3: {
                    className: "x10l6tqk x1pdr0v7 x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc x1o0tod x14atkfc x1c1uobl xjbqb8w x1n5bzlp"
                },
                7: {
                    className: "x10l6tqk x1pdr0v7 x11uqc5h x78zum5 x6s0dn4 x1nhvcw1 x5yr21d x4p5aij x1j85h84 x1ypdohk x5jttoc x1o0tod x14atkfc x1c1uobl xjbqb8w x1n5bzlp"
                }
            })[!!c_rightDrawerOpen << 2 | !!checked << 1 | !!m << 0];
            t[0] = checked;
            t[1] = m;
            t[2] = c_rightDrawerOpen;
            t[3] = p;
        } else {
            p = t[3];
        }
        let _;
        if (t[4] !== ariaLabel || t[5] !== checked || t[6] !== onClick || t[7] !== theme) {
            const Component = o("WAWebCheckBox.react").CheckBox;
            _ = <Component onChange={onClick} checked={checked} theme={theme} ariaLabel={ariaLabel}/>;
            t[4] = ariaLabel;
            t[5] = checked;
            t[6] = onClick;
            t[7] = theme;
            t[8] = _;
        } else {
            _ = t[8];
        }
        let f;
        if (t[9] !== onClick || t[10] !== ref || t[11] !== p || t[12] !== _) {
            f = <div {...babelHelpers.extends({
                ref,
                onClick
            }, p, {
                children: _
            })}/>;
            t[9] = onClick;
            t[10] = ref;
            t[11] = p;
            t[12] = _;
            t[13] = f;
        } else {
            f = t[13];
        }
        return f;
    }
    l.default = u;
}, 98);