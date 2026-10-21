__d("WAWebUserPrefsStorageUtils", [
    "WALogger",
    "WAMd5",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        const n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        if (!n) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "hashUserPrefKey: Me has not loaded yet."
            ])));
            return;
        }
        const r = o("WAMd5").md5(`${n.toString()}:${t}`);
        return r;
    }
    l.hashUserPrefKey = s;
}, 98);