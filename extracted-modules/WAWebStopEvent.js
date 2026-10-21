__d("WAWebStopEvent", [], function(t, n, r, o, a, i) {
    function e(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    function l(e) {
        if (e) {
            e.stopPropagation();
        }
    }
    function s(e) {
        if (e) {
            e.preventDefault();
        }
    }
    i.stopEvent = e;
    i.stopPropagation = l;
    i.preventDefault = s;
}, 66);