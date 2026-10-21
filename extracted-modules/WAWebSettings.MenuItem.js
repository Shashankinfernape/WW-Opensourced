__d("WAWebSettings.MenuItem", [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDevOnlyBadge.react",
    "WAWebDrawerManager",
    "WAWebMenuItems.react",
    "WAWebSettingsFlowLoadable",
    "WAWebSettingsStepIcon.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const Component = o("WAWebSettingsFlowLoadable").SettingsFlowLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "settings",
            initialStep: e
        } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft} initialStep={e}/>);
    }
    function C5Component(e) {
        const a = o("react-compiler-runtime").c(24);
        const { border, isRefresh, onSelect, setting, showIcon } = e;
        let m;
        if (a[0] !== setting.parent?.step || a[1] !== setting.step || a[2] !== showIcon) {
            m = showIcon ? s.jsx(r("WAWebSettingsStepIcon.react"), {
                setting: setting.parent?.step ?? setting.step
            }) : " ";
            a[0] = setting.parent?.step;
            a[1] = setting.step;
            a[2] = showIcon;
            a[3] = m;
        } else {
            m = a[3];
        }
        const g = m;
        let h;
        if (isRefresh === true) {
            let y;
            if (a[4] !== setting) {
                y = setting?.secondaryTitle != null && setting?.secondaryTitle();
                a[4] = setting;
                a[5] = y;
            } else {
                y = a[5];
            }
            h = y;
        } else {
            let C;
            if (a[6] !== setting.parent) {
                C = setting.parent?.title();
                a[6] = setting.parent;
                a[7] = C;
            } else {
                C = a[7];
            }
            h = C;
        }
        let v;
        if (a[8] !== setting) {
            const Component = o("WAWebText.react").WAWebTextColor;
            v = setting.color != null ? <Component color={setting.color}>{setting.title()}</Component> : setting.title();
            a[8] = setting;
            a[9] = v;
        } else {
            v = a[9];
        }
        const S = v;
        const colorScheme = setting.color === "critical" ? "negative" : undefined;
        let L;
        if (a[10] !== setting.isDevOnly) {
            L = setting.isDevOnly === true && s.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {});
            a[10] = setting.isDevOnly;
            a[11] = L;
        } else {
            L = a[11];
        }
        const E = setting.testid ?? `settings-search-${setting.id}`;
        const applyWrapperFocusStyles = colorScheme === "negative";
        let I;
        if (a[12] !== border || a[13] !== colorScheme || a[14] !== g || a[15] !== isRefresh || a[16] !== onSelect || a[17] !== S || a[18] !== h || a[19] !== setting.id || a[20] !== L || a[21] !== E || a[22] !== applyWrapperFocusStyles) {
            const Component = o("WAWebMenuItems.react").ActionMenuItem;
            I = <Component optionId={setting.id} onSelect={onSelect} detailLeft={g} primary={S} secondary={h} detailRight={L} testid={E} border={border} isRefresh={isRefresh} textWrap="wrap" colorScheme={colorScheme} applyWrapperFocusStyles={applyWrapperFocusStyles}/>;
            a[12] = border;
            a[13] = colorScheme;
            a[14] = g;
            a[15] = isRefresh;
            a[16] = onSelect;
            a[17] = S;
            a[18] = h;
            a[19] = setting.id;
            a[20] = L;
            a[21] = E;
            a[22] = applyWrapperFocusStyles;
            a[23] = I;
        } else {
            I = a[23];
        }
        return I;
    }
    function d(e) {
        const t = o("react-compiler-runtime").c(3);
        const { onSelect, settings } = e;
        let a;
        if (t[0] !== onSelect || t[1] !== settings) {
            const i = new Set;
            a = settings.map((setting)=>{
                let showIcon = false;
                if (setting.parent == null || !i.has(setting.parent.step)) {
                    showIcon = true;
                    i.add(setting.parent?.step ?? setting.step);
                }
                return <C5Component key={setting.id} setting={setting} showIcon={showIcon} onSelect={function() {
                    return onSelect(setting);
                }}/>;
            });
            t[0] = onSelect;
            t[1] = settings;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    l.openSettingDrawer = u;
    l.SettingsMenuItem = C5Component;
    l.SettingsMenu = d;
}, 98);