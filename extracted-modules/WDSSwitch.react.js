__d("WDSSwitch.react", [
    "BaseSwitch.react",
    "BaseView.react",
    "Locale",
    "WDSDisabledStateStyles",
    "WDSFocusStateStyles",
    "WDSHoverStateStyles",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useState } = u;
    const m = o("Locale").isRTL();
    const p = {
        switch: {
            backgroundColor: "x1h3rtpe",
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "x1qhh985",
            borderInlineStartWidth: "x14e42zd",
            boxSizing: "x9f619",
            display: "x1rg5ohu",
            minHeight: "xjwf9q1",
            minWidth: "x1fns5xo",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            position: "x1n2onr6",
            zIndex: "xzkaem6",
            $$css: true
        },
        switchActive: {
            backgroundColor: "xfn3atn",
            $$css: true
        },
        background: {
            backgroundColor: "xgcd1z6",
            bottom: "x1ey2m1c",
            boxSizing: "x9f619",
            insetInlineEnd: "xtijo5x",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            position: "x10l6tqk",
            top: "x13vifvy",
            borderTopColor: "x1pyc6se",
            borderInlineEndColor: "x1mlb2bo",
            borderBottomColor: "x16pkwpw",
            borderInlineStartColor: "xqe4bef",
            borderTopWidth: "xamhcws",
            borderInlineEndWidth: "x1alpsbp",
            borderBottomWidth: "xlxy82",
            borderInlineStartWidth: "xyumdvf",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            $$css: true
        },
        backgroundActive: {
            borderTopStyle: "x1ejq31n",
            borderInlineEndStyle: "x18oe1m7",
            borderBottomStyle: "x1sy0etr",
            borderInlineStartStyle: "xstzfhl",
            $$css: true
        },
        slider: {
            backgroundColor: "xs7vtfe",
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            height: "x1kpxq89",
            width: "xsmyaan",
            insetInlineStart: "xrr41r3",
            insetInlineEnd: "xnro73h",
            left: null,
            right: null,
            top: "x1atx4j1",
            position: "x10l6tqk",
            transition: "xx9udhw",
            transitionBehavior: "xd00j3c",
            $$css: true
        },
        sliderActive: {
            top: "xndqk7f",
            height: "xlup9mm",
            width: "x1kky2od",
            backgroundColor: "xep993w",
            insetInlineStart: "x1igoeyj",
            insetInlineEnd: "x1i4sgur",
            left: null,
            right: null,
            $$css: true
        },
        sliderActiveTransform: {
            transform: "x15481yp",
            $$css: true
        },
        sliderActiveTransformRtl: {
            transform: "x123sfga",
            $$css: true
        },
        sliderHovered: {
            width: "x6jxa94",
            $$css: true
        },
        sliderHoveredActive: {
            width: "xw4jnvo",
            $$css: true
        }
    };
    function _(e) {
        const { "aria-describedby": aria_describedby, "aria-hidden": aria_hidden, "aria-label": aria_label, disabled } = e;
        const l = disabled === undefined ? false : disabled;
        const e_enterKeyToggle = e.enterKeyToggle;
        const _ = e_enterKeyToggle === undefined ? true : e_enterKeyToggle;
        const { id, onChange, onClick, tabIndex } = e;
        const tabIndex_1 = tabIndex === undefined ? 0 : tabIndex;
        const e_testid = e.testid;
        const v = e_testid === undefined ? "WDSSwitch" : e_testid;
        const e_value = e.value;
        const R = e_value === undefined ? false : e_value;
        const L = useState(false);
        const E = L[0];
        const k = L[1];
        const I = useState(false);
        const T = I[0];
        const D = I[1];
        const x = useCallback(function(e) {
            if (_ && e.key === "Enter") {
                e.preventDefault();
                e.currentTarget.click();
            }
        }, [
            _
        ]);
        const $ = [
            p.switch,
            o("WDSFocusStateStyles").WDSComponentFocusStateStyles.WDSSwitch
        ];
        const P = [
            $,
            R && p.switchActive,
            l && o("WDSDisabledStateStyles").WDSComponentDisabledStateStyles.WDSSwitch
        ];
        const Component = r("BaseSwitch.react");
        return <Component suppressFocusRing onValueChange={onChange} onClick={onClick} onKeyDown={x} onMouseEnter={function() {
            return k(true);
        }} onMouseLeave={function() {
            return k(false);
        }} onFocusVisibleChange={function(t) {
            return D(t);
        }} disabled={l} aria-describedby={aria_describedby} aria-hidden={aria_hidden} aria-label={aria_label} testid={undefined} tabIndex={tabIndex_1} id={id} checked={R} xstyle={P}>{s.jsx(r("BaseView.react"), {
            xstyle: [
                p.background,
                R && p.backgroundActive,
                E && o("WDSHoverStateStyles").WDSComponentHoverStateStyles.WDSSwitchBase,
                E && (R ? o("WDSHoverStateStyles").WDSComponentHoverStateStyles.WDSSwitchSelected : o("WDSHoverStateStyles").WDSComponentHoverStateStyles.WDSSwitchUnselected)
            ]
        })}{s.jsx(r("BaseView.react"), {
            xstyle: [
                p.slider,
                R && p.sliderActive,
                R && (m ? p.sliderActiveTransformRtl : p.sliderActiveTransform),
                (E || T) && p.sliderHovered,
                (E || T) && R && p.sliderHoveredActive
            ]
        })}</Component>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.default = _;
}, 98);