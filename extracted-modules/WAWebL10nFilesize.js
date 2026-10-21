__d("WAWebL10nFilesize", [
    "WAWebL10N",
    "fbs"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        B: (e = r("fbs"))._("B").toString(),
        KiB: e._("kB").toString(),
        MiB: e._("MB").toString(),
        GiB: e._("GB").toString()
    };
    function u(e) {
        return r("WAWebL10N").filesizeWithParams(e, s);
    }
    l.getL10nFilesize = u;
}, 226);