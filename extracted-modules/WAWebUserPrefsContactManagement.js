__d("WAWebUserPrefsContactManagement", [
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    const e = 1;
    function s() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").UserPrefs.SyncContactToAddressbookCounts);
        const t = typeof e === "object" ? e : null;
        const enabledCount = typeof t?.enabledCount === "number" ? t.enabledCount : 0;
        const disabledCount = typeof t?.disabledCount === "number" ? t.disabledCount : 0;
        return {
            enabledCount,
            disabledCount
        };
    }
    function u(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").UserPrefs.SyncContactToAddressbookCounts, e);
    }
    function c(t) {
        const n = s();
        const r = d();
        if (r !== t) {
            if (t) {
                n.enabledCount++;
                if (n.enabledCount >= e) {
                    n.disabledCount = 0;
                }
            } else {
                n.disabledCount++;
                if (n.disabledCount >= e) {
                    n.enabledCount = 0;
                }
            }
        } else if (!t && n.enabledCount < e) {
            n.enabledCount = 0;
        } else if (t && n.disabledCount < e) {
            n.disabledCount = 0;
        }
        u(n);
    }
    function d() {
        const t = s();
        return t.enabledCount >= e;
    }
    l.setSyncToAddressbookLastSetting = c;
    l.getSyncToAddressbookDefaultSetting = d;
}, 98);