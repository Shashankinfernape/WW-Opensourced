__d("WDSBaseCheckbox.react", [
    "BaseCheckbox.react",
    "BaseView.react",
    "WDSFocusStateStyles",
    "WDSHoverStateStyles",
    "WDSIconIcCheck.react",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "appearsOnMedia",
        "children",
        "disabled",
        "id",
        "onChange",
        "onKeyDown",
        "platform",
        "shape",
        "tabIndex",
        "testid",
        "value"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    const m = "xuza879-B";
    const p = {
        root: {
            height: "xxk0z11",
            width: "xvy4d1p",
            display: "x3nfvp2",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            boxSizing: "x9f619",
            paddingTop: "xyqdw3p",
            paddingInlineEnd: "x1im30kd",
            paddingBottom: "xg8j3zb",
            paddingInlineStart: "x1djpfga",
            position: "x1n2onr6",
            $$css: true
        },
        checkboxBorder: {
            boxSizing: "x9f619",
            flexShrink: "x2lah0s",
            borderTopWidth: "xamhcws",
            borderInlineEndWidth: "x1alpsbp",
            borderBottomWidth: "xlxy82",
            borderInlineStartWidth: "xyumdvf",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            display: "x3nfvp2",
            $$css: true
        },
        checkboxBorderUnselected: {
            borderTopColor: "x1pyc6se",
            borderInlineEndColor: "x1mlb2bo",
            borderBottomColor: "x16pkwpw",
            borderInlineStartColor: "xqe4bef",
            $$css: true
        },
        checkboxBorderSelected: {
            borderTopColor: "xlze6vy",
            borderInlineEndColor: "x47fsot",
            borderBottomColor: "x1rrvw3c",
            borderInlineStartColor: "x18djku1",
            backgroundColor: "xfn3atn",
            $$css: true
        },
        checkboxBorderCircle: {
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            $$css: true
        },
        disabledCheckbox: {
            opacity: "x1lxidc1",
            filter: "x4dje6k",
            $$css: true
        },
        mediaCheckboxUnselected: {
            borderTopColor: "x1zfx7y",
            borderInlineEndColor: "x1gj3efs",
            borderBottomColor: "x151wx5t",
            borderInlineStartColor: "xea0m3l",
            $$css: true
        },
        mediaCheckboxSelected: {
            borderTopColor: "x1zfx7y",
            borderInlineEndColor: "x1gj3efs",
            borderBottomColor: "x151wx5t",
            borderInlineStartColor: "xea0m3l",
            backgroundColor: "x1p8t8ri",
            $$css: true
        },
        checkmarkWrapper: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            $$css: true
        },
        checkedCheckmark: {
            opacity: "x1hc1fzr",
            animationName: "x1oyg3g3",
            animationTimingFunction: "xa3vuyk",
            animationFillMode: "x10e4vud",
            animationDuration: "x1shwlz2",
            $$css: true
        },
        uncheckedCheckmark: {
            opacity: "xg01cxk",
            $$css: true
        }
    };
    const _ = {
        checkboxBorder: {
            height: "xmix8c7",
            width: "x1xp8n7a",
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            $$css: true
        }
    };
    const f = {
        checkboxBorder: {
            height: "x17rw0jw",
            width: "x17z2i9w",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            $$css: true
        }
    };
    function GComponent(t) {
        const t_appearsOnMedia = t.appearsOnMedia;
        const a = t_appearsOnMedia === undefined ? false : t_appearsOnMedia;
        const { children, disabled } = t;
        const u = disabled === undefined ? false : disabled;
        const { id, onChange, onKeyDown, platform, shape } = t;
        const b = shape === undefined ? "square" : shape;
        const { tabIndex, testid, value } = t;
        const L = value === undefined ? false : value;
        const E = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const k = platform === "iOS";
        const I = u_useState(false);
        const T = I[0];
        const D = I[1];
        function x(e) {
            const t = e.key === "Enter" || e.key === " ";
            if (t) {
                e.preventDefault();
                if (onChange != null) {
                    onChange(null);
                }
            }
            onKeyDown?.(e);
        }
        const checked = L === true || L === "indeterminate";
        const indeterminate = L === "indeterminate";
        const N = checked || indeterminate === true;
        const M = [];
        const w = [
            N ? p.mediaCheckboxSelected : p.mediaCheckboxUnselected
        ];
        const A = [
            p.checkboxBorderCircle
        ];
        if (T) {
            A.push(o("WDSHoverStateStyles").WDSComponentHoverStateStyles.WDSCheckboxCircle);
            if (N) {
                M.push(o("WDSHoverStateStyles").WDSComponentHoverStateStyles.WDSCheckboxSelected);
                w.push(o("WDSHoverStateStyles").WDSComponentHoverStateStyles.WDSCheckboxMediaSelected);
            } else {
                M.push(o("WDSHoverStateStyles").WDSComponentHoverStateStyles.WDSCheckboxUnselected);
                w.push(o("WDSHoverStateStyles").WDSComponentHoverStateStyles.WDSCheckboxMediaUnselected);
            }
        }
        const Component = r("BaseView.react");
        return <div {...babelHelpers.extends({}, (s || (s = r("stylex"))).props(o("WDSFocusStateStyles").WDSComponentFocusStateStyles.WDSCheckbox), {
            children: c.jsx(r("BaseCheckbox.react"), babelHelpers.extends({}, E, {
                checked,
                disabled: u,
                id,
                indeterminate,
                onClick: onChange,
                onKeyDown: x,
                onMouseEnter: function() {
                    return D(true);
                },
                onMouseLeave: function() {
                    return D(false);
                },
                suppressFocusRing: true,
                testid: undefined,
                xstyle: p.root,
                tabIndex,
                children: <Component aria-hidden tabIndex={-1} testid={undefined} xstyle={[
                    p.checkboxBorder,
                    k ? f.checkboxBorder : _.checkboxBorder,
                    N ? p.checkboxBorderSelected : p.checkboxBorderUnselected,
                    u && p.disabledCheckbox,
                    T && o("WDSHoverStateStyles").WDSComponentHoverStateStyles.WDSCheckboxBase
                ].concat(a ? w : M, b === "circle" || k ? A : [])}>{indeterminate === true ? <div {...babelHelpers.extends({}, {
                    0: {
                        className: "x36qwtl x1fsd2vl xt8t1vi x1xc408v x129tdwq x15urzxu xep993w x1hc1fzr x1oyg3g3 xa3vuyk x10e4vud x1shwlz2"
                    },
                    1: {
                        className: "x36qwtl x1fsd2vl xt8t1vi x1xc408v x129tdwq x15urzxu x1hc1fzr x1oyg3g3 xa3vuyk x10e4vud x1shwlz2 x1e6sl3u"
                    }
                }[!!a << 0])}/> : c.jsx(r("WDSIconIcCheck.react"), {
                    width: 18,
                    height: 18,
                    xstyle: p.checkmarkWrapper,
                    colorName: a ? "persistentAlwaysBlack" : "contentOnAccent",
                    iconXstyle: [
                        checked ? p.checkedCheckmark : p.uncheckedCheckmark
                    ]
                })}{children}</Component>
            }))
        })}/>;
    }
    GComponent.displayName = `${GComponent.name} [from ${i.id}]`;
    l.default = GComponent;
}, 98);