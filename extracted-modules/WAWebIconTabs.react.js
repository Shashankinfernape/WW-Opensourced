__d("WAWebIconTabs.react", [
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebUnstyledButton.react",
    "nullthrows",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useRef = e.useRef;
    const c = "xehbzi3-B";
    const d = {
        selected: {
            backgroundColor: "x1od0jb8",
            $$css: true
        },
        tab: {
            display: "x78zum5",
            justifyContent: "xl56j7k",
            alignItems: "x6s0dn4",
            width: "x13oubkp",
            height: "xc9qbxq",
            boxSizing: "x9f619",
            borderTopColor: "xnj1f2r",
            borderInlineEndColor: "x2uibgs",
            borderBottomColor: "xkveyfu",
            borderInlineStartColor: "x12llq9",
            borderInlineStartWidth: "x14e42zd",
            borderInlineEndWidth: "x1lun4ml",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x178xt8z",
            borderBottomWidth: "xso031l",
            $$css: true
        },
        firstTab: {
            borderStartStartRadius: "x1xn7y0n",
            borderEndStartRadius: "x16xm01d",
            borderInlineStartWidth: "xpilrb4",
            ":focus_borderStartStartRadius": "x15mwqqv",
            ":focus_borderEndStartRadius": "xg0ato0",
            $$css: true
        },
        lastTab: {
            borderStartEndRadius: "x1uxb8k9",
            borderEndEndRadius: "x1vmbcc8",
            borderInlineEndWidth: "x1lun4ml",
            ":focus_borderStartEndRadius": "x1eql6gh",
            ":focus_borderEndEndRadius": "x1wkbi5u",
            $$css: true
        },
        icon: {
            color: "xhslqc4",
            width: "x17z2i9w",
            height: "x17rw0jw",
            $$css: true
        },
        firstIconContainer: {
            marginInlineStart: "x1wbi8v6",
            $$css: true
        },
        lastIconContainer: {
            marginInlineEnd: "x7g7pl8",
            $$css: true
        },
        popupAnim: {
            animationName: "x122cvgu",
            $$css: true
        },
        expressionPanelsTab: {
            height: "x10w6t97",
            width: "xo5x3gg",
            borderTopColor: "xnj1f2r",
            borderInlineEndColor: "x2uibgs",
            borderBottomColor: "xkveyfu",
            borderInlineStartColor: "x12llq9",
            $$css: true
        },
        expressionsPanelSelectedTab: {
            backgroundColor: "x1od0jb8",
            $$css: true
        },
        expressionsPanelSelectedTabIcon: {
            color: "x14ug900",
            $$css: true
        }
    };
    function m({ onSelect, popupAtLaunch, refs, selectedIndex, tabConfigs, theme }) {
        const m = e_useRef(null);
        const p = e_useRef([]);
        if (refs) {
            tabConfigs.forEach((e, t)=>r("nullthrows")(refs)[t] = {
                    current: r("nullthrows")(document.body)
                });
        }
        const _ = {
            right: function() {
                const n = m.current ?? tabConfigs.length - 1;
                const r = n === tabConfigs.length - 1 ? 0 : n + 1;
                p.current[r]?.focus();
            },
            left: function() {
                const n = m.current ?? 0;
                const r = n === 0 ? tabConfigs.length - 1 : n - 1;
                p.current[r]?.focus();
            }
        };
        const Component = o("WAWebFlex.react").FlexRow;
        const Component_1 = o("WAWebKeyboardHotKeys.react").HotKeys;
        return <Component_1 role="tablist" handlers={_}><Component>{tabConfigs.map(({ Icon, ariaLabel, iconStyle, testid }, o)=>{
            const h = selectedIndex === o;
            const y = o === 0;
            const C = o === tabConfigs.length - 1;
            const Component = r("WAWebUnstyledButton.react");
            const Component_1 = r("WAWebFlexItem.react");
            return <Component_1 key={o} align="stretch"><Component aria-label={ariaLabel} role="tab" ref={function(t) {
                p.current[o] = t;
            }} tabIndex={selectedIndex == null && y || h ? 0 : -1} testid={testid} aria-selected={h} xstyle={[
                h && d.selected,
                theme === "expression-panels" && h && d.expressionsPanelSelectedTab,
                d.tab,
                theme === "expression-panels" && d.expressionPanelsTab,
                y && d.firstTab,
                C && d.lastTab
            ]} onClick={function() {
                return onSelect(o);
            }} onFocus={function() {
                m.current = o;
            }}><Icon containerRef={refs ? refs[o] : undefined} iconXstyle={[
                d.icon,
                iconStyle,
                h && theme === "expression-panels" ? d.expressionsPanelSelectedTabIcon : undefined
            ]} xstyle={[
                y && d.firstIconContainer,
                C && d.lastIconContainer,
                popupAtLaunch === true && d.popupAnim
            ]}/></Component></Component_1>;
        })}</Component></Component_1>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = m;
}, 98);