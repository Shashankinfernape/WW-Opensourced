__d("WAWebWidToFormattedNameOrNumber", [
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebWidFormat"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebContactCollection").ContactCollection.get(e);
        if (t) {
            return o("WAWebFrontendContactGetters").getFormattedName(t);
        }
        return o("WAWebWidFormat").widToFormattedUser(e);
    }
    l.default = e;
}, 98);