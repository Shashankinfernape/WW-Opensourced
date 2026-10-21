__d("WAWebInteractiveActionMenuDialog.react", [
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WDSBaseRadio.react",
    "WDSButtonGroup.react",
    "WDSDialog.react",
    "WDSDialogBridge",
    "WDSText.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    const c = {
        label: {
            flexGrow: "x1iyjqo2",
            $$css: true
        }
    };
    function d({ menu }) {
        const a = e_useState(menu.items[0]?.key);
        const i = a[0];
        const onChange = a[1];
        function d() {
            const e = menu.items.find((e)=>e.key === i);
            o("WDSDialogBridge").closeWDSDialog();
            e?.onSelect();
        }
        const Component = o("WAWebFlex.react").FlexColumn;
        const Component_1 = r("WDSDialog.react");
        return <Component_1 closeButton={false} footer={s.jsx(r("WDSButtonGroup.react"), {
            orientation: "horizontal",
            width: "hug",
            primaryButtonProps: {
                label: r("WAWebFbtCommon")("OK"),
                onPress: d,
                testid: "interactive-action-menu-ok"
            },
            tertiaryButtonProps: {
                label: r("WAWebFbtCommon")("Cancel"),
                onPress: o("WDSDialogBridge").closeWDSDialog,
                testid: "interactive-action-menu-cancel",
                variant: "borderless"
            }
        })} headerAlignment="start" headerType="expressive" layoutType="functional" onDismiss={o("WDSDialogBridge").closeWDSDialog} open size="sm" testid="interactive-action-menu" title={menu.title}><Component align="stretch" aria-label={menu.title} role="radiogroup" testid="interactive-action-menu-options">{menu.items.map((e)=>{
            const t = e.key === i;
            const Component = r("WDSBaseRadio.react");
            const Component_1 = r("WDSText.react");
            return <label key={e.key} className="x6s0dn4 x40hh3e x1ypdohk x78zum5 xz9dl7a xsag5q8"><Component checked={t} name="interactive-action-menu" onChange={onChange} tabIndex={t ? 0 : -1} testid={e.testid} value={e.key}/><Component_1 colorName="contentDefault" type="Body1" xstyle={c.label}>{e.label}</Component_1></label>;
        })}</Component></Component_1>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 98);