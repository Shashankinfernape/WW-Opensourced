__d("WDSTextLayout.react", [
    "WDSBulletList.react",
    "WDSButtonGroup.react",
    "WDSText.react",
    "WDSTextLayoutConfig",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    function c({ actionsWidth = "fill", body, bullets, footnote, headline, illustration, isPrimaryHeading = false, primaryAction, secondaryAction, tertiaryAction, testid }) {
        const y = headline != null || body != null;
        const C = bullets != null && bullets.length > 0;
        const b = primaryAction != null ? u.jsx(r("WDSButtonGroup.react"), {
            footnote,
            orientation: actionsWidth === "hug" ? "horizontal" : "stacked",
            primaryButtonProps: primaryAction,
            secondaryButtonProps: secondaryAction,
            tertiaryButtonProps: tertiaryAction,
            width: actionsWidth
        }) : null;
        const Component = r("WDSText.react");
        const Component_1 = r("WDSText.react");
        return <div {...babelHelpers.extends({
            "data-testid": undefined
        }, (e || (e = r("stylex"))).props(o("WDSTextLayoutConfig").textLayoutStyles.root), {
            children: [
                illustration != null && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSTextLayoutConfig").textLayoutStyles.illustration), {
                    children: illustration
                })}/>,
                (y || C) && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSTextLayoutConfig").textLayoutStyles.contentStack), {
                    children: [
                        y && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSTextLayoutConfig").textLayoutStyles.contentGroup), {
                            children: [
                                headline != null && <Component type="Headline2" colorName="contentDefault" textAlign="center" isPrimaryHeading={isPrimaryHeading} isSemanticHeading={isPrimaryHeading !== true}>{headline}</Component>,
                                body != null && <Component_1 type="Body2" colorName="contentDeemphasized" textAlign="center">{body}</Component_1>
                            ]
                        })}/>,
                        C && bullets != null && u.jsx(r("WDSBulletList.react"), {
                            bullets
                        })
                    ]
                })}/>,
                b != null && (actionsWidth === "hug" ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSTextLayoutConfig").textLayoutStyles.actionsHug), {
                    children: b
                })}/> : b)
            ]
        })}/>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 98);