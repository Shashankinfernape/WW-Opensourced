__d("WAWebMiscBrowserUtils", [
    "WABase64",
    "WALogger",
    "WATimeUtils",
    "WAWebDebounce",
    "WAWebUserPrefsGeneral"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = false;
    const u = r("WAWebDebounce")(function() {
        return s = false;
    }, 500);
    const c = 2160 * 60 * 60;
    function d() {
        const e = new Uint8Array(16);
        self.crypto.getRandomValues(e);
        return o("WABase64").encodeB64(e);
    }
    var m = {
        id: function() {
            const e = o("WAWebUserPrefsGeneral").getBrowserId();
            if (e != null) {
                return e;
            }
            const t = d();
            o("WAWebUserPrefsGeneral").setBrowserId(t);
            return t;
        },
        persistentExpiringId: function() {
            const e = o("WAWebUserPrefsGeneral").getPersistentExpiringId();
            if (e != null) {
                const t = o("WATimeUtils").unixTime() - e.ts >= c;
                if (!t) {
                    return e.value;
                }
            }
            const n = {
                ts: o("WATimeUtils").unixTime(),
                value: d()
            };
            o("WAWebUserPrefsGeneral").setPersistentExpiringId(n);
            return n.value;
        },
        hardRefresh: function() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[reload] hardRefresh"
            ])));
            m.promptUnloadGuards++;
            location.reload();
        },
        startDownloading: function() {
            s = true;
            u();
        },
        clearDownloading: function() {
            s = false;
        },
        isDownloading: function() {
            return s;
        },
        promptUnloadGuards: 0
    };
    l.default = m;
}, 98);