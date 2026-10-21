__d("WAProgressiveJpegGetScanOffsets", [
    "WAProgressiveJpegMarkers",
    "WATagsLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = o("WATagsLogger").TAGS([
        "media",
        "progressiveJpegUtils"
    ]);
    function p(t) {
        m.DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "starting"
        ])));
        if (!_(t)) {
            m.DEV(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Not a JPEG image"
            ])));
            return [];
        }
        const n = [];
        let r = 2;
        let a = "READ_MARKER_FIRST_BYTE_OR_ENTROPY_DATA";
        let i = null;
        let l = 0;
        let p = false;
        let y = false;
        let C = false;
        function b() {
            C = false;
            m.DEV(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Scan found at offset ",
                ""
            ])), r - 1);
            n.push(r - 1);
        }
        while(r < t.byteLength){
            i = t[r];
            if (p) {
                m.ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Ending marker found before end of image"
                ])));
                return [];
            }
            switch(a){
                case "READ_MARKER_FIRST_BYTE_OR_ENTROPY_DATA":
                    if (i === o("WAProgressiveJpegMarkers").MARKER_PREFIX) {
                        a = "READ_MARKER_SECOND_BYTE";
                    }
                    break;
                case "READ_MARKER_SECOND_BYTE":
                    if (i === o("WAProgressiveJpegMarkers").MARKER_PREFIX) {
                        a = "READ_MARKER_SECOND_BYTE";
                    } else if (i === o("WAProgressiveJpegMarkers").MARKER_ESCAPE_BYTE) {
                        a = "READ_MARKER_FIRST_BYTE_OR_ENTROPY_DATA";
                    } else if (i === o("WAProgressiveJpegMarkers").MARKERS.EOI) {
                        p = true;
                        if (C) {
                            b();
                        }
                    } else {
                        if (!y && g(i)) {
                            m.LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "Non-progressive JPEG marker found"
                            ])));
                            return [];
                        }
                        if (f(i)) {
                            y = true;
                            a = "READ_MARKER_FIRST_BYTE_OR_ENTROPY_DATA";
                        } else {
                            if (C) {
                                b();
                            }
                            if (i === o("WAProgressiveJpegMarkers").MARKERS.SOS) {
                                C = true;
                            }
                            if (h(i)) {
                                a = "READ_SIZE_FIRST_BYTE";
                            } else {
                                a = "READ_MARKER_FIRST_BYTE_OR_ENTROPY_DATA";
                            }
                        }
                    }
                    break;
                case "READ_SIZE_FIRST_BYTE":
                    a = "READ_SIZE_SECOND_BYTE";
                    break;
                case "READ_SIZE_SECOND_BYTE":
                    r += l * 256;
                    r += i;
                    r -= 2;
                    a = "READ_MARKER_FIRST_BYTE_OR_ENTROPY_DATA";
                    break;
            }
            r += 1;
            l = i;
        }
        return n;
    }
    function _(e) {
        return !(e.byteLength <= 2 || e[0] !== o("WAProgressiveJpegMarkers").MARKER_PREFIX || e[1] !== o("WAProgressiveJpegMarkers").MARKERS.SOF2 && e[1] !== o("WAProgressiveJpegMarkers").MARKERS.SOI);
    }
    function f(e) {
        return e === o("WAProgressiveJpegMarkers").MARKERS.SOF2 || e === o("WAProgressiveJpegMarkers").MARKERS.SOF6 || e === o("WAProgressiveJpegMarkers").MARKERS.SOF10 || e === o("WAProgressiveJpegMarkers").MARKERS.SOF14;
    }
    function g(e) {
        return e === o("WAProgressiveJpegMarkers").MARKERS.SOF0 || e === o("WAProgressiveJpegMarkers").MARKERS.SOF1 || e === o("WAProgressiveJpegMarkers").MARKERS.SOF3 || e === o("WAProgressiveJpegMarkers").MARKERS.SOF5 || e === o("WAProgressiveJpegMarkers").MARKERS.SOF7 || e === o("WAProgressiveJpegMarkers").MARKERS.JPG || e === o("WAProgressiveJpegMarkers").MARKERS.SOF9 || e === o("WAProgressiveJpegMarkers").MARKERS.SOF11 || e === o("WAProgressiveJpegMarkers").MARKERS.SOF13 || e === o("WAProgressiveJpegMarkers").MARKERS.SOF15;
    }
    function h(e) {
        if (e === o("WAProgressiveJpegMarkers").MARKERS.TEM || e >= o("WAProgressiveJpegMarkers").MARKERS.RST0 && e <= o("WAProgressiveJpegMarkers").MARKERS.RST7) {
            return false;
        }
        return e !== o("WAProgressiveJpegMarkers").MARKERS.EOI && e !== o("WAProgressiveJpegMarkers").MARKERS.SOI;
    }
    l.getProgressiveJpegScanOffsets = p;
}, 98);