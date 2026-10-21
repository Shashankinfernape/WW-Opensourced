__d("WAWebAltDeviceLinkingQpl", [], function(t, n, r, o, a, i) {
    let e = null;
    function l(t) {
        e = t;
    }
    function s() {
        if (e != null) {
            e.end(105);
            e = null;
        }
    }
    function u(t) {
        e?.addPoint(t);
    }
    function c() {
        e?.end(2);
        e = null;
    }
    i.setCurrentMarker = l;
    i.clearCurrentMarker = s;
    i.addPointToCurrentMarker = u;
    i.endCurrentMarkerSuccess = c;
}, 66);