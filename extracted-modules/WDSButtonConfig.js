__d("WDSButtonConfig", [
    "WDSButtonColorCommonConfig.stylex",
    "WDSHoverStateStyles",
    "cr:3448",
    "cr:3453",
    "cr:3488",
    "cr:3492",
    "cr:3674"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        content: {
            display: "x1lliihq",
            minWidth: "xk8lq53",
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
            zIndex: "x1vjfegm",
            $$css: true
        }
    };
    const s = {
        content: {
            borderTopStyle: "x1ejq31n",
            borderInlineEndStyle: "x18oe1m7",
            borderBottomStyle: "x1sy0etr",
            borderInlineStartStyle: "xstzfhl",
            willChange: "x1so62im",
            transition: "x1syfmzz",
            zIndex: "x1ja2u2z",
            cursor: "x1ypdohk",
            $$css: true
        },
        hovered: {
            "::after_borderStartStartRadius": "xfijbtm",
            "::after_borderStartEndRadius": "xfenqrj",
            "::after_borderEndEndRadius": "xgy0gl7",
            "::after_borderEndStartRadius": "x19igvu",
            $$css: true
        }
    };
    function u(t, r, o, a, i, l) {
        let s = {};
        switch(t){
            case "large":
                {
                    switch(i){
                        case "filled":
                            {
                                if (r && a) {
                                    s = n("cr:3488").WDSButtonLargeIconAndLabelFilledStyles;
                                } else if (a) {
                                    s = n("cr:3488").WDSButtonLargeLabelOnlyFilledStyles;
                                } else if (r && o) {
                                    s = n("cr:3488").WDSButtonLargeIconAndDropdownOnlyFilledStyles;
                                } else if (r) {
                                    s = n("cr:3488").WDSButtonLargeIconOnlyFilledStyles;
                                }
                                break;
                            }
                        case "tonal":
                            {
                                if (r && a) {
                                    s = n("cr:3488").WDSButtonLargeIconAndLabelTonalStyles;
                                } else if (a) {
                                    s = n("cr:3488").WDSButtonLargeLabelOnlyTonalStyles;
                                } else if (r && o) {
                                    s = n("cr:3488").WDSButtonLargeIconAndDropdownOnlyTonalStyles;
                                } else if (r) {
                                    s = n("cr:3488").WDSButtonLargeIconOnlyTonalStyles;
                                }
                                break;
                            }
                        case "outline":
                            {
                                if (r && a) {
                                    s = n("cr:3488").WDSButtonLargeIconAndLabelOutlineStyles;
                                } else if (a) {
                                    s = n("cr:3488").WDSButtonLargeLabelOnlyOutlineStyles;
                                } else if (r && o) {
                                    s = n("cr:3488").WDSButtonLargeIconAndDropdownOnlyOutlineStyles;
                                } else if (r) {
                                    s = n("cr:3488").WDSButtonLargeIconOnlyOutlineStyles;
                                }
                                break;
                            }
                        case "borderless":
                            {
                                if (r && a) {
                                    s = n("cr:3488").WDSButtonLargeIconAndLabelBorderlessStyles;
                                } else if (a) {
                                    s = n("cr:3488").WDSButtonLargeLabelOnlyBorderlessStyles;
                                } else if (r && o) {
                                    s = n("cr:3488").WDSButtonLargeIconAndDropdownOnlyBorderlessStyles;
                                } else if (r) {
                                    s = n("cr:3488").WDSButtonLargeIconOnlyBorderlessStyles;
                                }
                                break;
                            }
                    }
                    break;
                }
            case "medium":
                {
                    switch(i){
                        case "filled":
                            {
                                if (r && a) {
                                    s = n("cr:3492").WDSButtonMediumIconAndLabelFilledStyles;
                                } else if (a) {
                                    s = n("cr:3492").WDSButtonMediumLabelOnlyFilledStyles;
                                } else if (r && o) {
                                    s = n("cr:3492").WDSButtonMediumIconAndDropdownOnlyFilledStyles;
                                } else if (r) {
                                    s = n("cr:3492").WDSButtonMediumIconOnlyFilledStyles;
                                }
                                break;
                            }
                        case "tonal":
                            {
                                if (r && a) {
                                    s = n("cr:3492").WDSButtonMediumIconAndLabelTonalStyles;
                                } else if (a) {
                                    s = n("cr:3492").WDSButtonMediumLabelOnlyTonalStyles;
                                } else if (r && o) {
                                    s = n("cr:3492").WDSButtonMediumIconAndDropdownOnlyTonalStyles;
                                } else if (r) {
                                    s = n("cr:3492").WDSButtonMediumIconOnlyTonalStyles;
                                }
                                break;
                            }
                        case "outline":
                            {
                                if (r && a) {
                                    s = n("cr:3492").WDSButtonMediumIconAndLabelOutlineStyles;
                                } else if (a) {
                                    s = n("cr:3492").WDSButtonMediumLabelOnlyOutlineStyles;
                                } else if (r && o) {
                                    s = n("cr:3492").WDSButtonMediumIconAndDropdownOnlyOutlineStyles;
                                } else if (r) {
                                    s = n("cr:3492").WDSButtonMediumIconOnlyOutlineStyles;
                                }
                                break;
                            }
                        case "borderless":
                            {
                                if (r && a) {
                                    s = n("cr:3492").WDSButtonMediumIconAndLabelBorderlessStyles;
                                } else if (a) {
                                    s = n("cr:3492").WDSButtonMediumLabelOnlyBorderlessStyles;
                                } else if (r && o) {
                                    s = n("cr:3492").WDSButtonMediumIconAndDropdownOnlyBorderlessStyles;
                                } else if (r) {
                                    s = n("cr:3492").WDSButtonMediumIconOnlyBorderlessStyles;
                                }
                                break;
                            }
                    }
                    break;
                }
            case "small":
                {
                    switch(i){
                        case "filled":
                            {
                                if (r && a) {
                                    s = n("cr:3674").WDSButtonSmallIconAndLabelFilledStyles;
                                } else if (a) {
                                    s = n("cr:3674").WDSButtonSmallLabelOnlyFilledStyles;
                                } else if (r && o) {
                                    s = n("cr:3674").WDSButtonSmallIconAndDropdownOnlyFilledStyles;
                                } else if (r) {
                                    s = n("cr:3674").WDSButtonSmallIconOnlyFilledStyles;
                                }
                                break;
                            }
                        case "tonal":
                            {
                                if (r && a) {
                                    s = n("cr:3674").WDSButtonSmallIconAndLabelTonalStyles;
                                } else if (a) {
                                    s = n("cr:3674").WDSButtonSmallLabelOnlyTonalStyles;
                                } else if (r && o) {
                                    s = n("cr:3674").WDSButtonSmallIconAndDropdownOnlyTonalStyles;
                                } else if (r) {
                                    s = n("cr:3674").WDSButtonSmallIconOnlyTonalStyles;
                                }
                                break;
                            }
                        case "outline":
                            {
                                if (r && a) {
                                    s = n("cr:3674").WDSButtonSmallIconAndLabelOutlineStyles;
                                } else if (a) {
                                    s = n("cr:3674").WDSButtonSmallLabelOnlyOutlineStyles;
                                } else if (r && o) {
                                    s = n("cr:3674").WDSButtonSmallIconAndDropdownOnlyOutlineStyles;
                                } else if (r) {
                                    s = n("cr:3674").WDSButtonSmallIconOnlyOutlineStyles;
                                }
                                break;
                            }
                        case "borderless":
                            {
                                if (r && a) {
                                    s = n("cr:3674").WDSButtonSmallIconAndLabelBorderlessStyles;
                                } else if (a) {
                                    s = n("cr:3674").WDSButtonSmallLabelOnlyBorderlessStyles;
                                } else if (r && o) {
                                    s = n("cr:3674").WDSButtonSmallIconAndDropdownOnlyBorderlessStyles;
                                } else if (r) {
                                    s = n("cr:3674").WDSButtonSmallIconOnlyBorderlessStyles;
                                }
                                break;
                            }
                    }
                    break;
                }
        }
        return {
            content: [
                e.content,
                s.content
            ],
            item: [
                e.item,
                s.item
            ],
            pressed: [
                s.pressed
            ],
            addOnEnd: [
                s.addOnEnd
            ],
            addOnStart: [
                s.addOnStart
            ],
            horizontalContainer: s.horizontalContainer,
            children: s.children
        };
    }
    function c(e, t, r, a, i, l, u) {
        let c = {};
        switch(e){
            case "filled":
                {
                    switch(t){
                        case "default":
                            {
                                c = o("WDSButtonColorCommonConfig.stylex").WDSButtonFilledDefaultColorStyles;
                                break;
                            }
                        case "destructive":
                            {
                                c = o("WDSButtonColorCommonConfig.stylex").WDSButtonFilledDestructiveColorStyles;
                                break;
                            }
                        case "media":
                            {
                                c = n("cr:3448").WDSButtonFilledMediaColorStyles;
                                break;
                            }
                    }
                    break;
                }
            case "tonal":
                {
                    switch(t){
                        case "default":
                            {
                                c = o("WDSButtonColorCommonConfig.stylex").WDSButtonTonalDefaultColorStyles;
                                break;
                            }
                        case "destructive":
                            {
                                c = o("WDSButtonColorCommonConfig.stylex").WDSButtonTonalDestructiveColorStyles;
                                break;
                            }
                        case "media":
                            {
                                c = n("cr:3448").WDSButtonTonalMediaColorStyles;
                                break;
                            }
                    }
                    break;
                }
            case "outline":
                {
                    switch(t){
                        case "default":
                            {
                                c = n("cr:3448").WDSButtonOutlineDefaultColorStyles;
                                break;
                            }
                        case "destructive":
                            {
                                c = n("cr:3448").WDSButtonOutlineDestructiveColorStyles;
                                break;
                            }
                        case "media":
                            {
                                c = n("cr:3448").WDSButtonOutlineMediaColorStyles;
                                break;
                            }
                    }
                    break;
                }
            case "borderless":
                {
                    switch(t){
                        case "default":
                            {
                                if (r === true && a === false) {
                                    c = o("WDSButtonColorCommonConfig.stylex").WDSButtonBorderlessDefaultIconOnlyColorStyles;
                                } else {
                                    c = o("WDSButtonColorCommonConfig.stylex").WDSButtonBorderlessDefaultColorStyles;
                                }
                                break;
                            }
                        case "destructive":
                            {
                                c = o("WDSButtonColorCommonConfig.stylex").WDSButtonBorderlessDestructiveColorStyles;
                                break;
                            }
                        case "media":
                            {
                                c = o("WDSButtonColorCommonConfig.stylex").WDSButtonBorderlessMediaColorStyles;
                                break;
                            }
                    }
                    break;
                }
        }
        const d = !i && !l;
        return {
            xstyleConfig: {
                pressable: [
                    s.content,
                    d && o("WDSHoverStateStyles").WDSComponentHoverStateStyles.WDSButton,
                    c.pressable,
                    c.pressableOverlay
                ],
                pressableDisabled: [
                    c.pressableDisabled
                ],
                pressableHovered: [
                    s.hovered,
                    c.pressableHovered
                ],
                pressablePressed: [
                    c.pressablePressed,
                    s.hovered,
                    c.pressableHovered
                ]
            }
        };
    }
    function d(e, t, r, o) {
        return n("cr:3453").getButtonFontColorStyles(e, t, r);
    }
    const m = {
        icon24: {
            height: "xxk0z11",
            width: "xvy4d1p",
            $$css: true
        },
        icon20: {
            height: "x1qx5ct2",
            width: "xw4jnvo",
            $$css: true
        }
    };
    function p(e, t) {
        switch(e){
            case "large":
                if (t) {
                    return [
                        24,
                        m.icon24
                    ];
                }
                return [
                    20,
                    m.icon20
                ];
            case "medium":
                if (t) {
                    return [
                        24,
                        m.icon24
                    ];
                }
                return [
                    20,
                    m.icon20
                ];
            case "small":
                return [
                    20,
                    m.icon20
                ];
        }
    }
    l.getButtonSizeStyles = u;
    l.getButtonColorStyles = c;
    l.getButtonFontColor = d;
    l.getButtonIconSizeAndStyle = p;
}, 98);