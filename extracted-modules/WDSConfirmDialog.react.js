__d("WDSConfirmDialog.react", [
    "fbt",
    "WDSButtonGroup.react",
    "WDSDialog.react",
    "WDSSwitch.react",
    "WDSText.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const e_useId = e.useId;
    const d = -8;
    function m({ cancelLabel = s._("Cancel"), conditional, confirmLabel, description, destructive = false, onConfirm, onDismiss, onSecondary, open, secondaryLabel, testid = "confirm-popup", title }) {
        const footer = u.jsx(r("WDSButtonGroup.react"), {
            orientation: "stacked",
            width: "fill",
            primaryButtonProps: {
                label: confirmLabel,
                onPress: onConfirm,
                testid: "popup-controls-ok",
                type: destructive ? "destructive" : "default",
                variant: destructive ? "outline" : "filled"
            },
            secondaryButtonProps: secondaryLabel != null && onSecondary != null ? {
                label: secondaryLabel,
                onPress: onSecondary,
                testid: "popup-controls-extra",
                type: "default",
                variant: destructive ? "outline" : "borderless"
            } : undefined,
            tertiaryButtonProps: {
                label: cancelLabel,
                onPress: onDismiss,
                testid: "popup-controls-cancel",
                variant: "borderless"
            }
        });
        const v = e_useId();
        const Component = r("WDSText.react");
        const Component_1 = r("WDSText.react");
        const Component_2 = r("WDSSwitch.react");
        const S = conditional != null ? <div className="x6s0dn4 x1h3rtpe x6nvzda x4i4b9w xhl9efl xj65ea0 x78zum5 x1f0uite xs2akgl x1qughib x1qfufaz x1w5wx5t x1xrf6ya xscbp6u xdx6fka xvtqlqk" data-testid={undefined}><div className="x78zum5 xdt5ytf x1b73lln x46w9ns" data-testid={undefined}><Component type="Body2" colorName="contentDefault">{conditional.title}</Component>{conditional.description != null && <Component_1 id={v} type="Body3" colorName="contentDeemphasized">{conditional.description}</Component_1>}</div><Component_2 aria-label={conditional.title} aria-describedby={conditional.description != null ? v : undefined} testid={undefined} value={conditional.checked} onChange={function(t) {
            return conditional.onChange(t);
        }}/></div> : null;
        const Component_3 = r("WDSDialog.react");
        return <Component_3 closeButton={false} description={description} footer={footer} headerType="expressive" layoutType="expressive" onDismiss={onDismiss} open={open} size="sm" testid={undefined} title={title}>{S}</Component_3>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = m;
}, 226);