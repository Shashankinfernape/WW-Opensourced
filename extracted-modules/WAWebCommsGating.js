__d("WAWebCommsGating", [
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        if (e == null) {
            e = o("WAWebABProps").getABPropConfigValue("waweb_comms_in_backend_worker");
        }
        return e ?? false;
    }
    l.isCommsInWorker = s;
}, 98);