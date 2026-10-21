__d("WDSMenuItemConfig", [
    "WDSMenuItemColorConfig.stylex",
    "WDSMenuItemLayoutConfig.stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        itemDefault: {
            borderStartStartRadius: "xlr9sxt",
            borderStartEndRadius: "xvvg52n",
            borderEndEndRadius: "xwd4zgb",
            borderEndStartRadius: "xq8v1ta",
            $$css: true
        },
        itemDestructive: {
            borderStartStartRadius: "xlr9sxt",
            borderStartEndRadius: "xvvg52n",
            borderEndEndRadius: "xwd4zgb",
            borderEndStartRadius: "xq8v1ta",
            $$css: true
        }
    };
    const s = 18;
    function u(e) {
        const { hasEndSection = false, hasIcon = false, hasIndent = false, hasProfilePhoto = false, hasSubtitle = false, isToggleable = false } = e ?? {};
        return {
            listItemBase: o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemBaseLayoutStyles.listItemBase,
            listItemDefault: !hasIcon && !isToggleable && !hasIndent && !hasProfilePhoto ? o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemBaseLayoutStyles.listItemDefault : undefined,
            listItemWithSubtitle: hasSubtitle ? o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemBaseLayoutStyles.listItemWithSubtitle : undefined,
            listItemEndPadding: hasEndSection ? undefined : o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemBaseLayoutStyles.listItemEndPadding,
            startEndContainer: o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemContainerLayoutStyles.startEndContainer,
            endSectionContainer: o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemContainerLayoutStyles.endSectionContainer,
            indentContainer: o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemContainerLayoutStyles.indentContainer,
            shortcutContainer: o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemContainerLayoutStyles.shortcutContainer,
            profilePhotoContainer: o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemContainerLayoutStyles.profilePhotoContainer,
            toggledContainer: o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemContainerLayoutStyles.toggledContainer,
            iconContainer: o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemContainerLayoutStyles.iconContainer,
            textContainer: o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemContainerLayoutStyles.textContainer,
            submenuContainer: o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemContainerLayoutStyles.submenuContainer,
            separator: o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemSeparatorLayoutStyles.separator,
            groupHeader: o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemGroupHeaderLayoutStyles.groupHeader,
            numberContainer: o("WDSMenuItemLayoutConfig.stylex").WDSMenuItemContainerLayoutStyles.numberContainer
        };
    }
    function c(e, t, n, r, o) {
        if (e) {
            return "contentDisabled";
        }
        if (t && (r || o)) {
            return "secondaryNegativeEmphasized";
        }
        if (n) {
            return "contentDeemphasized";
        }
        return "contentDefault";
    }
    function d(t, n) {
        const r = t ? e.itemDestructive : e.itemDefault;
        let a;
        if (n) {
            a = o("WDSMenuItemColorConfig.stylex").WDSMenuItemDisabledColorStyles;
        } else if (t) {
            a = o("WDSMenuItemColorConfig.stylex").WDSMenuItemDestructiveColorStyles;
        } else {
            a = o("WDSMenuItemColorConfig.stylex").WDSMenuItemDefaultColorStyles;
        }
        return {
            xstyleConfig: {
                item: [
                    r,
                    a.content,
                    a.contentFocusVisible
                ]
            }
        };
    }
    l.WDSMenuItemIconSize = s;
    l.getMenuItemLayoutStyles = u;
    l.getMenuItemTextColorStyles = c;
    l.getMenuItemColorStyles = d;
}, 98);