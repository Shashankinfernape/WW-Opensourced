__d("WDSChipConfig", [
    "WDSChipColorConfig.stylex",
    "WDSChipDefaultConfig.stylex",
    "WDSChipDefaultIOSConfig.stylex",
    "WDSChipLargeConfig.stylex",
    "WDSChipLargeIOSConfig.stylex",
    "WDSFocusStateStyles"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        let n;
        if (t) {
            n = o("WDSChipColorConfig.stylex").WDSChipNeutralColorStyles;
        } else if (e) {
            n = o("WDSChipColorConfig.stylex").WDSChipSelectedColorStyles;
        } else {
            n = o("WDSChipColorConfig.stylex").WDSChipUnselectedColorStyles;
        }
        return {
            xstyleConfig: {
                pressable: [
                    o("WDSChipColorConfig.stylex").WDSChipSharedColorStyles.pressable,
                    n.pressable,
                    o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
                ],
                pressableDisabled: [
                    o("WDSChipColorConfig.stylex").WDSChipSharedColorStyles.pressableDisabled,
                    n.pressableDisabled
                ],
                pressableHovered: [
                    o("WDSChipColorConfig.stylex").WDSChipSharedColorStyles.pressableHovered,
                    n.pressableHovered
                ],
                pressablePressed: [
                    o("WDSChipColorConfig.stylex").WDSChipSharedColorStyles.pressablePressed,
                    n.pressablePressed
                ]
            }
        };
    }
    const s = {
        content: {
            minWidth: "xgqtt45",
            boxSizing: "x9f619",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            $$css: true
        },
        item: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            justifyContent: "xl56j7k",
            zIndex: "x1vjfegm",
            $$css: true
        },
        addOnEnd: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            flexShrink: "x2lah0s",
            $$css: true
        },
        addOnStart: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            $$css: true
        }
    };
    function u(e, t, n, r, a) {
        let i = {};
        if (e === "default") {
            if (a) {
                i = o("WDSChipDefaultConfig.stylex").WDSChipDefaultWithIconOnlyStyles;
            } else if (r) {
                if (t) {
                    i = o("WDSChipDefaultConfig.stylex").WDSChipDefaultWithStartIconAndEndNumberAddOnsStyles;
                } else {
                    i = o("WDSChipDefaultConfig.stylex").WDSChipDefaultWithEndNumberAddOnOnlyStyles;
                }
            } else if (t && n) {
                i = o("WDSChipDefaultConfig.stylex").WDSChipDefaultWithStartIconAndEndIconAddOnsStyles;
            } else if (t) {
                i = o("WDSChipDefaultConfig.stylex").WDSChipDefaultWithStartIconAddOnOnlyStyles;
            } else if (n) {
                i = o("WDSChipDefaultConfig.stylex").WDSChipDefaultWithEndIconAddOnOnlyStyles;
            } else {
                i = o("WDSChipDefaultConfig.stylex").WDSChipDefaultWithNoAddOnStyles;
            }
        } else if (a) {
            i = o("WDSChipLargeConfig.stylex").WDSChipLargeWithIconOnlyStyles;
        } else if (r) {
            if (t) {
                i = o("WDSChipLargeConfig.stylex").WDSChipLargeWithStartIconAndEndNumberAddOnsStyles;
            } else {
                i = o("WDSChipLargeConfig.stylex").WDSChipLargeWithEndNumberAddOnOnlyStyles;
            }
        } else if (t && n) {
            i = o("WDSChipLargeConfig.stylex").WDSChipLargeWithStartIconAndEndIconAddOnsStyles;
        } else if (t) {
            i = o("WDSChipLargeConfig.stylex").WDSChipLargeWithStartIconAddOnOnlyStyles;
        } else if (n) {
            i = o("WDSChipLargeConfig.stylex").WDSChipLargeWithEndIconAddOnOnlyStyles;
        } else {
            i = o("WDSChipLargeConfig.stylex").WDSChipLargeWithNoAddOnStyles;
        }
        return {
            content: [
                s.content,
                i.content
            ],
            item: [
                s.item,
                i.item
            ],
            pressed: [],
            addOnEnd: [
                s.addOnEnd,
                i.addOnEnd
            ],
            addOnStart: [
                s.addOnStart,
                i.addOnStart
            ]
        };
    }
    function c(e, t, n, r, a) {
        let i = {};
        if (e === "default") {
            if (a) {
                i = o("WDSChipDefaultIOSConfig.stylex").WDSChipDefaultIOSWithIconOnlyStyles;
            } else if (r) {
                if (t) {
                    i = o("WDSChipDefaultIOSConfig.stylex").WDSChipDefaultIOSWithStartIconAndEndAddOnsStyles;
                } else {
                    i = o("WDSChipDefaultIOSConfig.stylex").WDSChipDefaultIOSWithEndNumberAddOnOnlyStyles;
                }
            } else if (t && n) {
                i = o("WDSChipDefaultIOSConfig.stylex").WDSChipDefaultIOSWithStartIconAndEndAddOnsStyles;
            } else if (t) {
                i = o("WDSChipDefaultIOSConfig.stylex").WDSChipDefaultIOSWithStartIconAddOnOnlyStyles;
            } else if (n) {
                i = o("WDSChipDefaultIOSConfig.stylex").WDSChipDefaultIOSWithEndIconAddOnOnlyStyles;
            } else {
                i = o("WDSChipDefaultIOSConfig.stylex").WDSChipDefaultIOSWithNoAddOnStyles;
            }
        } else if (a) {
            i = o("WDSChipLargeIOSConfig.stylex").WDSChipLargeIOSWithIconOnlyStyles;
        } else if (r) {
            if (t) {
                i = o("WDSChipLargeIOSConfig.stylex").WDSChipLargeIOSWithStartIconAndEndAddOnsStyles;
            } else {
                i = o("WDSChipLargeIOSConfig.stylex").WDSChipLargeIOSWithEndNumberAddOnOnlyStyles;
            }
        } else if (t && n) {
            i = o("WDSChipLargeIOSConfig.stylex").WDSChipLargeIOSWithStartIconAndEndAddOnsStyles;
        } else if (t) {
            i = o("WDSChipLargeIOSConfig.stylex").WDSChipLargeIOSWithStartIconAddOnOnlyStyles;
        } else if (n) {
            i = o("WDSChipLargeIOSConfig.stylex").WDSChipLargeIOSWithEndIconAddOnOnlyStyles;
        } else {
            i = o("WDSChipLargeIOSConfig.stylex").WDSChipLargeIOSWithNoAddOnStyles;
        }
        return {
            content: [
                s.content,
                i.content
            ],
            item: [
                s.item,
                i.item
            ],
            pressed: [],
            addOnEnd: [
                s.addOnEnd,
                i.addOnEnd
            ],
            addOnStart: [
                s.addOnStart,
                i.addOnStart
            ]
        };
    }
    function d(e, t, n, r, o, a = "macWeb") {
        if (a === "iOS") {
            return c(e, t, n, r, o);
        }
        return u(e, t, n, r, o);
    }
    const m = {
        icon20: {
            height: "x1qx5ct2",
            width: "xw4jnvo",
            $$css: true
        },
        icon18: {
            height: "xmix8c7",
            width: "x1xp8n7a",
            $$css: true
        }
    };
    function p(e = "macWeb") {
        const t = e === "iOS";
        if (t) {
            return [
                18,
                m.icon18
            ];
        }
        return [
            20,
            m.icon20
        ];
    }
    function _(e, t, n) {
        if (n) {
            return "contentDeemphasized";
        }
        if (t) {
            return "contentDefault";
        }
        if (e) {
            return "accentEmphasized";
        }
        return "contentDeemphasized";
    }
    l.getButtonColorStyles = e;
    l.getButtonSizeStyles = d;
    l.getChipIconSizeAndStyle = p;
    l.getButtonFontColor = _;
}, 98);