__d("WAWebBizNativeAdsDrawer.react", [
    "WAWebBizNativeAdsDrawerConfig",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(23);
        const { children, onBack, rightActionElement, step } = e;
        let u;
        let c;
        let d;
        let m;
        let rightActionElement_1;
        let _;
        let f;
        if (t[0] !== onBack || t[1] !== rightActionElement || t[2] !== step) {
            d = o("WAWebBizNativeAdsDrawerConfig").getDrawerConfig(step);
            c = r("WAWebDrawer.react");
            f = d.drawerTheme;
            u = o("WAWebDrawerHeader.react").DrawerHeader;
            m = onBack;
            rightActionElement_1 = rightActionElement;
            _ = d.title();
            t[0] = onBack;
            t[1] = rightActionElement;
            t[2] = step;
            t[3] = u;
            t[4] = c;
            t[5] = d;
            t[6] = m;
            t[7] = rightActionElement_1;
            t[8] = _;
            t[9] = f;
        } else {
            u = t[3];
            c = t[4];
            d = t[5];
            m = t[6];
            rightActionElement_1 = t[7];
            _ = t[8];
            f = t[9];
        }
        let g;
        if (t[10] !== u || t[11] !== d.headerType || t[12] !== m || t[13] !== rightActionElement_1 || t[14] !== _) {
            g = s.jsx(u, {
                onBack: m,
                rightActionElement: rightActionElement_1,
                title: _,
                type: d.headerType
            });
            t[10] = u;
            t[11] = d.headerType;
            t[12] = m;
            t[13] = rightActionElement_1;
            t[14] = _;
            t[15] = g;
        } else {
            g = t[15];
        }
        let h;
        if (t[16] !== children) {
            const Component = r("WAWebDrawerBody.react");
            h = <Component>{children}</Component>;
            t[16] = children;
            t[17] = h;
        } else {
            h = t[17];
        }
        let y;
        if (t[18] !== c || t[19] !== f || t[20] !== g || t[21] !== h) {
            y = s.jsxs(c, {
                theme: f,
                children: [
                    g,
                    h
                ]
            });
            t[18] = c;
            t[19] = f;
            t[20] = g;
            t[21] = h;
            t[22] = y;
        } else {
            y = t[22];
        }
        return y;
    }
    l.default = u;
}, 98);