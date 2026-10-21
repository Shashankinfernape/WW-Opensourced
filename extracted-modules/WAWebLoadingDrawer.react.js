__d("WAWebLoadingDrawer.react", [
    "CometHeroHoldTrigger.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebLazyLoadLoading.react",
    "react",
    "react-compiler-runtime",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l) {
    const e = [
        "title",
        "headerType",
        "description",
        "cancellable",
        "testid"
    ];
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const n = o("react-compiler-runtime").c(22);
        let a;
        let i;
        let l;
        let s;
        let c;
        let d;
        if (n[0] !== t) {
            d = t.title;
            l = t.headerType;
            a = t.description;
            s = t.cancellable;
            c = t.testid;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
            n[4] = s;
            n[5] = c;
            n[6] = d;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
            s = n[4];
            c = n[5];
            d = n[6];
        }
        const m = l === void 0 ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL : l;
        const p = s === void 0 ? true : s;
        const _ = r("useWAWebUIM")();
        let f;
        if (n[7] !== _) {
            f = function() {
                _?.requestDismiss();
            };
            n[7] = _;
            n[8] = f;
        } else {
            f = n[8];
        }
        const g = f;
        const h = a ?? "WAWebLoadingDrawer";
        let y;
        if (n[9] !== h) {
            y = u.jsx(r("CometHeroHoldTrigger.react"), {
                description: h,
                hold: true
            });
            n[9] = h;
            n[10] = y;
        } else {
            y = n[10];
        }
        const C = p ? g : void 0;
        let b;
        if (n[11] !== m || n[12] !== C || n[13] !== d) {
            const Component = o("WAWebDrawerHeader.react").DrawerHeader;
            b = <Component title={d} type={m} onCancel={C}/>;
            n[11] = m;
            n[12] = C;
            n[13] = d;
            n[14] = b;
        } else {
            b = n[14];
        }
        let v;
        if (n[15] !== i) {
            const Component = r("WAWebDrawerBody.react");
            v = <Component>{u.jsx(r("WAWebLazyLoadLoading.react"), babelHelpers.extends({}, i))}</Component>;
            n[15] = i;
            n[16] = v;
        } else {
            v = n[16];
        }
        let S;
        if (n[17] !== y || n[18] !== b || n[19] !== v || n[20] !== c) {
            const Component = r("WAWebDrawer.react");
            S = <Component disableNavigationLogging testid={c}>{y}{b}{v}</Component>;
            n[17] = y;
            n[18] = b;
            n[19] = v;
            n[20] = c;
            n[21] = S;
        } else {
            S = n[21];
        }
        return S;
    }
    l.default = c;
}, 98);