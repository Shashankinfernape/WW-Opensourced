__d("WAWebListFilterButton.react", [
    "WAWebFlex.react",
    "WAWebListChatListFilterRightClickMenu.react",
    "WAWebNoop",
    "WAWebThemeContext",
    "WAWebUnstyledButton.react",
    "WDSChip.react",
    "WDSFocusStateStyles",
    "WDSPaddings.stylex",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWDSMenu"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const s_useRef = s.useRef;
    const d = {
        paddingBlock6: {
            paddingTop: "x1yrsyyn",
            paddingBottom: "x10b6aqq",
            $$css: true
        }
    };
    const m = {
        filterRefreshed: {
            borderStartStartRadius: "xtf1z3e",
            borderStartEndRadius: "x18i4vdl",
            borderEndEndRadius: "x17ka9pb",
            borderEndStartRadius: "xaozknv",
            fontSize: "x6prxxf",
            fontWeight: "xo1l8bm",
            lineHeight: "x1btupbp",
            color: "xhslqc4",
            backgroundColor: "x1280gxy",
            boxShadow: "x1hdfv4t",
            $$css: true
        },
        filterHoverRefreshed: {
            ":hover_backgroundColor": "x1ubxc9n",
            $$css: true
        },
        selectedRefreshed: {
            color: "xk4n5i7",
            backgroundColor: "x1abdmlv",
            $$css: true
        },
        drawerHeader: {
            backgroundColor: "x1p8t8ri",
            color: "xk4n5i7",
            borderTopColor: "xx42vgk",
            borderBottomColor: "x120ee7l",
            borderInlineEndColor: "xbogo7e",
            borderInlineStartColor: "x1vb5itz",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            ":disabled_color": "x1f47i5p",
            ":disabled_backgroundColor": "x1oqui1x",
            ":disabled_cursor": "x1s07b3s",
            $$css: true
        },
        drawerHeaderDark: {
            backgroundColor: "xjbqb8w",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(21);
        const t_ref = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { count, disabled, endIcon, id, label, listId, listType, onBeforeContextMenu, onClick, onFocus, restrictSize, selected, startIcon, tabOrder, testIdSuffix, theme, truncateLabel } = i;
        const T = theme === undefined ? "list-filter" : theme;
        const truncateText = truncateLabel === undefined ? true : truncateLabel;
        const x = o("WAWebThemeContext").useIsDarkTheme();
        const $ = s_useRef(null);
        const P = r("useMergeRefs")(t_ref, $);
        const N = o("WAWebListChatListFilterRightClickMenu.react").allowToDisplayListFilterPillContextMenu(listType);
        const M = N ? o("WAWebListChatListFilterRightClickMenu.react").buildFilterPillContextMenu(listType, listId) : null;
        const w = r("useWDSMenu")({
            targetRef: $,
            menu: M,
            enableUIM: false
        });
        const { menuPortal, openMenu } = w;
        const O = function(t) {
            if (!(!N || M == null)) {
                t.preventDefault();
                if (onBeforeContextMenu != null) {
                    onBeforeContextMenu();
                }
                openMenu();
            }
        };
        const endNumber = count ?? 0;
        let W;
        if (n[0] !== endNumber) {
            W = endNumber > 0 ? {
                endNumber
            } : {};
            n[0] = endNumber;
            n[1] = W;
        } else {
            W = n[1];
        }
        if (endIcon == null && !!startIcon == !!i.startWDSIcon) {
            return <><div ref={$} data-testid="filter-button" role="none" onContextMenu={N ? O : undefined}>{u.jsx(r("WDSChip.react"), babelHelpers.extends({
                tabOrder: Number(i.tabIndex) >= 0 ? tabOrder : undefined,
                truncateText,
                ref: t_ref,
                id,
                isDisabled: disabled,
                label
            }, W, {
                isSelected: selected,
                onPress: function(t) {
                    onClick?.(t);
                },
                onFocus: onFocus ?? r("WAWebNoop"),
                role: i.role,
                "aria-selected": i["aria-selected"],
                "aria-controls": i["aria-controls"],
                Icon: i.startWDSIcon,
                showEndDropdownIcon: i.showEndDropdownIcon,
                testid: `chat_list_filter_button_pill${testIdSuffix == null ? "" : `_${testIdSuffix}`}`
            }))}</div>{menuPortal}</>;
        }
        const U = [
            d.paddingBlock6,
            o("WDSPaddings.stylex").wdsPaddings.paddingHor12
        ];
        U.push(m.filterRefreshed, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus);
        if (selected) {
            U.push(m.selectedRefreshed);
        } else {
            U.push(m.filterHoverRefreshed);
        }
        if (T === "drawer-header") {
            let V;
            if (n[2] !== x) {
                V = x ? [
                    m.drawerHeader,
                    m.drawerHeaderDark
                ] : m.drawerHeader;
                n[2] = x;
                n[3] = V;
            } else {
                V = n[3];
            }
            U.push(V);
        }
        const { id: id_1, role, "aria-selected": aria_selected, "aria-controls": aria_controls, tabIndex } = i;
        const FlexRow = o("WAWebFlex.react").FlexRow;
        const columnGap = 8;
        const align = "center";
        const J = "list-filter-button-text";
        const Z = {
            0: {},
            1: {
                className: "x6ikm8r x10wlt62 xuxw1ft xlyipyv x1qh4rir xeuugli"
            }
        }[!!(restrictSize === true && truncateText) << 0];
        let ee;
        if (n[4] !== label || n[5] !== selected || n[6] !== T) {
            const Component = r("WDSText.react");
            ee = T === "list-filter" ? <Component colorName={selected ? "accentEmphasized" : "contentDeemphasized"} maxLines={1} preserveNewLines={false} selectable={false} type="Body2Emphasized">{label}</Component> : label;
            n[4] = label;
            n[5] = selected;
            n[6] = T;
            n[7] = ee;
        } else {
            ee = n[7];
        }
        let te;
        if (n[8] !== Z || n[9] !== ee) {
            te = <div {...babelHelpers.extends({
                "data-testid": J
            }, Z, {
                children: ee
            })}/>;
            n[8] = Z;
            n[9] = ee;
            n[10] = te;
        } else {
            te = n[10];
        }
        let ne;
        if (n[11] !== count || n[12] !== selected || n[13] !== T) {
            const Component = r("WDSText.react");
            ne = count != null && count > 0 && <div data-testid="list-filter-button-count" className="x2lah0s">{T === "list-filter" ? <Component colorName={selected ? "accentEmphasized" : "contentDeemphasized"} selectable={false} type="Body3Emphasized">{count}</Component> : count}</div>;
            n[11] = count;
            n[12] = selected;
            n[13] = T;
            n[14] = ne;
        } else {
            ne = n[14];
        }
        let re;
        if (n[15] !== FlexRow || n[16] !== endIcon || n[17] !== startIcon || n[18] !== te || n[19] !== ne) {
            re = <FlexRow columnGap={columnGap} align={align}>{startIcon}{te}{ne}{endIcon}</FlexRow>;
            n[15] = FlexRow;
            n[16] = endIcon;
            n[17] = startIcon;
            n[18] = te;
            n[19] = ne;
            n[20] = re;
        } else {
            re = n[20];
        }
        const Component = r("WAWebUnstyledButton.react");
        return <><Component ref={P} testid={`chat_list_filter_button_pill${testIdSuffix == null ? "" : `_${testIdSuffix}`}`} dataTab={tabOrder} onClick={onClick} onFocus={onFocus} onContextMenu={N ? O : null} aria-pressed={selected} disabled={disabled} xstyle={U} id={id_1} role={role} aria-selected={aria_selected} aria-controls={aria_controls} tabIndex={tabIndex}>{re}</Component>{menuPortal}</>;
    }
    l.default = p;
}, 98);