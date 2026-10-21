__d("WDSMenuBarItemWithWDSMenu.react", [
    "WDSButton.react",
    "WDSTooltip.react",
    "react",
    "stylex",
    "useMergeRefs",
    "useWDSMenu"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useImperativeHandle, useRef } = d;
    function f(t) {
        const t_ref = t.ref;
        const { buttonSize = "medium", buttonType = "default", buttonVariant = "borderless", disabled = false, icon, imperativeRef, keyboardShortcutAction, label, marginInlineXstyle, menuAlign, menuEnableUim, menuIsContainer, menuPosition, onClick, onMenuClose, onMenuOpen, tabOrder, testid, title, tooltipDisabled = false, tooltipPosition, wdsMenuToRender } = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const FRef = useRef(null);
        const O = r("useMergeRefs")(t_ref, FRef);
        const B = r("useWDSMenu")({
            targetRef: FRef,
            menu: wdsMenuToRender,
            dismissable: true,
            align: menuAlign,
            position: menuPosition,
            enableUIM: menuEnableUim ?? true,
            isContainer: menuIsContainer ?? false,
            onOpen: onMenuOpen,
            onClose: onMenuClose
        });
        const { closeMenu, isMenuOpen, menuPortal, openMenu } = B;
        const H = useCallback(function() {
            if (isMenuOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        }, [
            isMenuOpen,
            closeMenu,
            openMenu
        ]);
        const G = function(t) {
            H();
            if (onClick) {
                onClick(t);
            }
        };
        useImperativeHandle(imperativeRef, function() {
            return {
                open: function() {
                    openMenu();
                }
            };
        });
        if (icon == null) {
            return null;
        }
        const Component = r("WDSButton.react");
        const z = <Component type={buttonType} variant={buttonVariant} size={buttonSize} directional Icon={icon} label={label} aria-label={title} aria-haspopup="menu" aria-expanded={isMenuOpen} onPress={G} ref={O} disabled={disabled} testid={undefined} tabOrder={tabOrder}/>;
        const Component_1 = r("WDSTooltip.react");
        return <div {...babelHelpers.extends({}, (s || (s = r("stylex"))).props(marginInlineXstyle), {
            children: [
                <Component_1 label={title} shortcut={keyboardShortcutAction} disabled={isMenuOpen || tooltipDisabled} position={tooltipPosition}>{z}</Component_1>,
                menuPortal
            ]
        })}/>;
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    l.default = f;
}, 98);