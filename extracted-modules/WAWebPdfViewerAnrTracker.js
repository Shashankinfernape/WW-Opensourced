__d("WAWebPdfViewerAnrTracker", [
    "WALogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c = 0;
    let d = false;
    function m() {
        if (!d) {
            c = 0;
            d = true;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[pdfViewer:anrTracker] started"
            ])));
        }
    }
    function p() {
        if (d) {
            c++;
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[pdfViewer:anrTracker] ANR detected, count=",
                ""
            ])), c);
        }
    }
    function _() {
        return d;
    }
    function f() {
        if (!d) {
            return 0;
        }
        const e = c;
        d = false;
        c = 0;
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[pdfViewer:anrTracker] consumed count=",
            ""
        ])), e);
        return e;
    }
    l.startPdfViewerAnrTracking = m;
    l.incrementPdfViewerAnrCount = p;
    l.isPdfViewerAnrTrackingActive = _;
    l.consumePdfViewerAnrCount = f;
}, 98);