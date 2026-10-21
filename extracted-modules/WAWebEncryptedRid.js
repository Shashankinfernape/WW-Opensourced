__d("WAWebEncryptedRid", [
    "WABase64",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMultiDevice"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set("WAWebEncryptedRid", o("WABase64").encodeB64(e));
    }
    function s() {
        if (o("WAWebUserPrefsMultiDevice").isRegistered()) {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WAWebEncryptedRid");
        }
        return null;
    }
    l.setEncryptedRid = e;
    l.getEncryptedRid = s;
}, 98);