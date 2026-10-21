__d("WAWebGuestNameFormat", [
    "fbt"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t) {
        if (t) {
            return s._("{name} (Guest)", [
                s._param("name", e.toString())
            ]);
        }
        return e;
    }
    l.maybeGetNameWithGuestLabel = e;
}, 226);