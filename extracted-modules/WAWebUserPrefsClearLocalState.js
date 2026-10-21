__d("WAWebUserPrefsClearLocalState", [
    "Promise",
    "WAWebLoggerImpl",
    "WAWebPermanentStorage",
    "WAWebTemporaryStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.PRESERVED_USER_KEYS, {
            storage: r("WAWebPermanentStorage")
        });
        const t = e instanceof Array ? [].concat(o("WAWebUserPrefsTypes").LS_PRESERVE_KEYS, e.filter((e)=>typeof e === "string")) : o("WAWebUserPrefsTypes").LS_PRESERVE_KEYS;
        return r("WAWebUserPrefsStore").getKeys(r("WAWebPermanentStorage"), t, true);
    }
    function u() {
        return r("WAWebUserPrefsStore").getKeys(r("WAWebTemporaryStorage"), o("WAWebUserPrefsTypes").TS_PRESERVE_KEYS, true);
    }
    function c() {
        r("WAWebTemporaryStorage").clear(u());
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = s();
            const a = [
                r("WAWebTemporaryStorage").clear(u()),
                r("WAWebPermanentStorage").clear(t)
            ];
            if (r("gkx")("26258")) {
                a.push(o("WAWebLoggerImpl").Logger.clearLogs());
            }
            yield (e || (e = n("Promise"))).all(a);
        });
        return m.apply(this, arguments);
    }
    l.clearAllTemporaryStorageData = c;
    l.clearAllLocalState = d;
}, 98);