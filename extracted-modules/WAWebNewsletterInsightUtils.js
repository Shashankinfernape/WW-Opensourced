__d("WAWebNewsletterInsightUtils", [
    "$InternalEnum",
    "WALogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = n("$InternalEnum").Mirrored([
        "Available",
        "Missing"
    ]);
    function u(t) {
        switch(t){
            case "OK":
                return s.Available;
            case "MISSING":
                return s.Missing;
            default:
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Encountered unexpected status"
                ]))).tags("newsletter-admin-insights");
                return s.Missing;
        }
    }
    l.NewsletterInsightDataStatus = s;
    l.getNewsletterInsightsDataStatus = u;
}, 98);