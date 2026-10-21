__d("WAWebAcp2ComposerNotice.react", [
    "WAWebAcp2ComposerStrings",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent() {
        const Component = o("WAWebExternalLink.react").ExternalLink;
        return <span data-testid="acp2-composer-notice">{o("WAWebAcp2ComposerStrings").getAcp2ComposerNoticeText()} <Component href={o("WAWebAcp2ComposerStrings").getAcp2ComposerNoticeFaqUrl()} testid="acp2-composer-notice-learn-more">{r("WAWebFbtCommon")("Learn more")}</Component></span>;
    }
    UComponent.displayName = `${UComponent.name} [from ${i.id}]`;
    l.default = UComponent;
}, 98);