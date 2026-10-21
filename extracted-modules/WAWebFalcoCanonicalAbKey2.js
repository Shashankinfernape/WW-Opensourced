__d("WAWebFalcoCanonicalAbKey2", [
    "WAWebABPropsLocalStorage",
    "WAWebWam",
    "WAWebWamGlobals"
], function(t, n, r, o, a, i, l) {
    function e() {
        let r;
        return o("WAWebWam").getSerializedAbKey2() ?? (o("WAWebWamGlobals").Global == null || (r = o("WAWebWamGlobals").Global.all) == null ? void 0 : r.abKey2) ?? o("WAWebABPropsLocalStorage").getABKey() ?? "";
    }
    l.default = e;
}, 98);