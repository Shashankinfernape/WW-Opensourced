__d("WAWebBizAGMWebsiteCta.react", [
    "WAWebExternalLink.react",
    "WAWebMessageBubbleActions.react",
    "WDSIconIcOpenInNew.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    function c(e) {
        const t = o("react-compiler-runtime").c(6);
        const { ctaText, link, onClick } = e;
        let l;
        if (t[0] !== link || t[1] !== onClick) {
            l = function() {
                onClick();
                o("WAWebExternalLink.react").openExternalLink(link);
            };
            t[0] = link;
            t[1] = onClick;
            t[2] = l;
        } else {
            l = t[2];
        }
        const u = l;
        if (!link.length) {
            return null;
        }
        let c;
        if (t[3] !== ctaText || t[4] !== u) {
            c = s.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [
                    {
                        label: ctaText,
                        onClick: u,
                        Icon: r("WDSIconIcOpenInNew.react")
                    }
                ]
            });
            t[3] = ctaText;
            t[4] = u;
            t[5] = c;
        } else {
            c = t[5];
        }
        return c;
    }
    l.default = c;
}, 98);