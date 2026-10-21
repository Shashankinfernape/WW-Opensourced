__d("WAProgressiveJpegGetScanLengths", [
    "WAProgressiveJpegGetScanOffsets"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = o("WAProgressiveJpegGetScanOffsets").getProgressiveJpegScanOffsets(e);
        return u(t);
    }
    function s(e) {
        return e;
    }
    function u(e) {
        const t = [];
        let n = 0;
        for (const r of e){
            t.push(r - n);
            n = r;
        }
        return t;
    }
    l.getProgressiveJpegScanLengths = e;
    l.asProgressiveJpegScanLength = s;
}, 98);