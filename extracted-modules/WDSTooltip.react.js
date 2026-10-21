__d("WDSTooltip.react", [
    "BaseTooltip.react",
    "CometPlaceholder.react",
    "WDSShortcut.react",
    "WDSText.react",
    "WDSTooltipShortcutResolver",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "delayTooltipMs",
        "label",
        "ownerAnchorRef",
        "shortcut"
    ];
    let s;
    const u = s || (s = o("react"));
    const C4 = r("deferredLoadComponent")(r("requireDeferredForDisplay")("WDSTooltipConfig.react").__setRef("WDSTooltip.react"));
    const d = {
        textLineCap: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            display: "x104kibb",
            WebkitBoxOrient: "x1ua5tub",
            WebkitLineClamp: "xnajbk2",
            $$css: true
        }
    };
    function m(e) {
        const Component = r("CometPlaceholder.react");
        return <Component name="WDSTooltip" fallback={null}><C4 {...babelHelpers.extends({}, e)}/></Component>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    function p(t) {
        const n = t.delayTooltipMs;
        const a = n === void 0 ? 400 : n;
        const { label: i, ownerAnchorRef: l, shortcut: s } = t;
        const c = babelHelpers.objectWithoutPropertiesLoose(t, e);
        let p;
        let _;
        if (s != null) {
            if (typeof s === "object") {
                _ = s;
            } else {
                _ = o("WDSTooltipShortcutResolver").getWDSTooltipShortcut(s);
            }
        }
        if (_ != null) {
            const Component = r("WDSText.react");
            p = <div className="xowaa7l xmzvs34 xf159sx x1iorvi4 xjkvuk6 x78zum5 xfex06f x6s0dn4"><Component type="Body3" colorName="contentInverse" xstyle={d.textLineCap}>{i}</Component>{u.jsx(r("WDSShortcut.react"), babelHelpers.extends({}, _, {
                inverse: true
            }))}</div>;
        } else {
            const Component = r("WDSText.react");
            p = <div className="xowaa7l xmzvs34 xf159sx x1iorvi4 xjkvuk6 x78zum5 xfex06f x6s0dn4"><Component type="Body3" colorName="contentInverse">{i}</Component></div>;
        }
        return u.jsx(r("BaseTooltip.react"), babelHelpers.extends({}, c, {
            anchorRef: l,
            tooltip: p,
            tooltipImpl: m,
            delayTooltipMs: a,
            hideDelayMs: 0
        }));
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.default = p;
}, 98);