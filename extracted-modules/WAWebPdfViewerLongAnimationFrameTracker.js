__d("WAWebPdfViewerLongAnimationFrameTracker", [
    "WALogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let entries = [];
    let d = false;
    function m() {
        if (!d) {
            entries = [];
            d = true;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[pdfViewer:longAnimationFrameTracker] started"
            ])));
        }
    }
    function p(blockingDuration, longestScriptInvoker, longestScriptDuration) {
        if (d) {
            entries.push({
                blockingDuration,
                longestScriptInvoker,
                longestScriptDuration
            });
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[pdfViewer:LAF] detected cnt=",
                " blockDur=",
                "ms script=",
                " ",
                "ms"
            ])), entries.length, blockingDuration, longestScriptInvoker, longestScriptDuration);
        }
    }
    function _() {
        return d;
    }
    function f() {
        if (!d) {
            return {
                count: 0,
                entries: []
            };
        }
        const e = {
            count: entries.length,
            entries
        };
        d = false;
        entries = [];
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[pdfViewer:longAnimationFrameTracker] consumed count=",
            ""
        ])), e.count);
        return e;
    }
    l.startPdfViewerLongAnimationFrameTracking = m;
    l.recordPdfViewerLongAnimationFrame = p;
    l.isPdfViewerLongAnimationFrameTrackingActive = _;
    l.consumePdfViewerLongAnimationFrameData = f;
}, 98);