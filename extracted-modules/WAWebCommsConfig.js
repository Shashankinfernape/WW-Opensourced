__d("WAWebCommsConfig", [
    "WAWebCommsConfigBase",
    "WAWebUserPrefsMultiDevice"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebCommsConfigBase").createGetCommsConfig({
        isRegistered: o("WAWebUserPrefsMultiDevice").isRegistered
    });
    l.getCommsConfig = e;
}, 98);