__d("WAWebSafariLimited", [
    "fbt",
    "WAWebExternalLink.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const Component = o("WAWebExternalLink.react").ExternalLink;
        const Component_1 = o("WAWebExternalLink.react").ExternalLink;
        const Component_2 = o("WAWebExternalLink.react").ExternalLink;
        return s._("To use all of WhatsApp's features like photo capturing and Voice Message recording, we recommend using {=m2}, {=m5} or {=m8}.", [
            s._implicitParam("=m2", <Component href="https://www.google.com/chrome">{s._("Google Chrome")}</Component>),
            s._implicitParam("=m5", <Component_1 href="http://www.firefox.com">{s._("Mozilla Firefox")}</Component_1>),
            s._implicitParam("=m8", <Component_2 href="http://www.opera.com">{s._("Opera")}</Component_2>)
        ]);
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.SafariLimitedText = c;
}, 226);