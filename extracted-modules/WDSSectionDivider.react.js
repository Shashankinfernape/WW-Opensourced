__d("WDSSectionDivider.react", [
    "WDSSectionDividerConfig.stylex",
    "WDSText.react",
    "err",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u({ divider = false, footer, header, testid }) {
        if (header == null && footer == null && !divider) {
            throw r("err")("WDSSectionDivider requires at least one of: header, footer, or divider");
        }
        const c = header != null ? o("WDSSectionDividerConfig.stylex").HEADER_VARIANT_CONFIG[header.type ?? "default"] : null;
        const Component = r("WDSText.react");
        const Component_1 = r("WDSText.react");
        const Component_2 = r("WDSText.react");
        return <div className="x78zum5 xdt5ytf xh8yej3" data-testid={undefined}>{footer != null && <div className="x12xbjc7 x1phvje8 xcldk2z"><Component type="Body2" colorName="contentDeemphasized">{footer.children}</Component></div>}{divider && <div className="x16ovd2e x12xbjc7"><div className="x3x0x6p xjm9jq1" role="separator"/></div>}{header != null && c != null && <div className="x6s0dn4 x78zum5 xs2akgl x1qughib x12xbjc7 x1p57kb1 x1phvje8 xcldk2z"><div className="x78zum5 xdt5ytf x1iyjqo2 xeuugli"><Component_1 type={c.textType} colorName={c.colorName} isSemanticHeading>{header.title}</Component_1>{header.subtitle != null && <Component_2 type="Body2" colorName="contentDeemphasized">{header.subtitle}</Component_2>}</div>{header.action}</div>}</div>;
    }
    u.displayName = `${u.name} [from ${i.id}]`;
    l.default = u;
}, 98);