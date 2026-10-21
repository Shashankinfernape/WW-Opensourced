__d("WDSBaseRadio.react", [
    "BaseRadio.react",
    "BaseView.react",
    "WDSFocusStateStyles",
    "WDSIconIcCheck.react",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "checked",
        "children",
        "disabled",
        "id",
        "name",
        "onChange",
        "platform",
        "tabIndex",
        "testid",
        "value"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useState } = d;
    const _ = {
        root: {
            height: "xxk0z11",
            width: "xvy4d1p",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            $$css: true
        },
        radioBorder: {
            boxSizing: "x9f619",
            minHeight: "xisnujt",
            minWidth: "xt4ypqs",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            borderTopWidth: "xamhcws",
            borderInlineEndWidth: "x1alpsbp",
            borderBottomWidth: "xlxy82",
            borderInlineStartWidth: "xyumdvf",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            $$css: true
        },
        radioBorderUnselected: {
            borderTopColor: "x1pyc6se",
            borderInlineEndColor: "x1mlb2bo",
            borderBottomColor: "x16pkwpw",
            borderInlineStartColor: "xqe4bef",
            $$css: true
        },
        radioBorderSelected: {
            borderTopColor: "xlze6vy",
            borderInlineEndColor: "x47fsot",
            borderBottomColor: "x1rrvw3c",
            borderInlineStartColor: "x18djku1",
            $$css: true
        },
        hovered: {
            backgroundColor: "xg6fylz",
            $$css: true
        },
        checkedCircle: {
            minHeight: "x1c87fqo",
            minWidth: "x1q6aqyx",
            backgroundColor: "xfn3atn",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            $$css: true
        },
        checkmarkWrapper: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            $$css: true
        },
        disabled: {
            opacity: "x1lxidc1",
            filter: "x4dje6k",
            $$css: true
        }
    };
    function f(t) {
        const { checked, children, disabled, id, name, onChange, platform, tabIndex, testid, value } = t;
        const C = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const b = platform === "iOS";
        const v = useState(false);
        const S = v[0];
        const R = v[1];
        const L = useCallback(function() {
            onChange(String(value));
        }, [
            onChange,
            value
        ]);
        const Component = r("BaseView.react");
        return <div {...babelHelpers.extends({}, (s || (s = r("stylex"))).props(o("WDSFocusStateStyles").WDSComponentFocusStateStyles.WDSRadio), {
            children: c.jsxs(r("BaseRadio.react"), babelHelpers.extends({}, C, {
                onMouseEnter: function() {
                    return R(true);
                },
                onMouseLeave: function() {
                    return R(false);
                },
                checked,
                disabled,
                name,
                id,
                onValueChange: L,
                value: String(value),
                suppressFocusRing: true,
                tabIndex,
                testid: undefined,
                xstyle: _.root,
                children: [
                    <Component xstyle={!b && [
                        _.radioBorder,
                        checked && _.radioBorderSelected,
                        !checked && _.radioBorderUnselected,
                        !checked && S && _.hovered,
                        disabled === true && _.disabled
                    ]}>{checked && (b ? c.jsx(r("WDSIconIcCheck.react"), {
                        width: 22,
                        height: 22,
                        colorName: "accent",
                        xstyle: _.checkmarkWrapper,
                        iconXstyle: [
                            disabled === true && _.disabled
                        ]
                    }) : c.jsx(r("BaseView.react"), {
                        xstyle: _.checkedCircle
                    }))}</Component>,
                    children
                ]
            }))
        })}/>;
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    l.default = f;
}, 98);