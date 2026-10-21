__d("WAWebSyncContactsJob", [
    "WALogger",
    "WAShiftTimer",
    "WAWebContactSyncApi",
    "WAWebLidAwareContactsDB",
    "WAWebLocalStorage",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = 86400;
    const m = 20000;
    const p = 1000;
    const _ = 60;
    let f = null;
    let g = [];
    function h(t) {
        g.push(t);
        if (f) {
            f.debounce(p);
        } else {
            f = new (o("WAShiftTimer")).ShiftTimer(function() {
                if (o("WAWebUserPrefsMultiDevice").isRegistered()) {
                    const t = g;
                    g = [];
                    f = null;
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "start new contact sync for ",
                        " contacts"
                    ])), t.length).tags("contact-sync");
                    o("WAWebContactSyncApi").syncContactListInChunks({
                        contactIds: t,
                        shouldDelayBetweenChunks: true,
                        mode: "query"
                    }).catch((e)=>{
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "syncNewContact: contact sync failed, error: ",
                            ""
                        ])), e).verbose().tags("non-sad", "contact-sync").sendLogs("syncNewContact: contact sync failed");
                    });
                }
            });
            f.onOrBefore(m);
        }
    }
    function y() {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("WAWebLidAwareContactsDB").equals([
                "isContactSyncCompleted"
            ], 0);
            const t = e.map((e)=>o("WAWebWidFactory").createWid(e.id));
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "sync dirty contacts, found ",
                " contacts to sync"
            ])), t.length).tags("contact-sync");
            return o("WAWebContactSyncApi").syncContactListInChunks({
                contactIds: t,
                shouldDelayBetweenChunks: true,
                mode: "query"
            });
        });
        return C.apply(this, arguments);
    }
    function b() {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (yield o("WAWebUserPrefsMultiDevice").getShouldCheckContactSyncStatus()) {
                self.setTimeout(function() {
                    y().catch((e)=>{
                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "runSyncDirtyContactsJob: contact sync failed"
                        ]))).catching(r("getErrorSafe")(e)).tags("non-sad", "contact-sync").sendLogs("runSyncDirtyContactsJob: contact sync failed");
                    });
                }, _ * 1000);
            }
            yield o("WAWebUserPrefsAppStateSync").setShouldCheckContactSyncStatus();
        });
        return v.apply(this, arguments);
    }
    function S() {
        const t = r("nullthrows")(r("WAWebLocalStorage")).getItem(o("WAWebUserPrefsKeys").KEYS.CONTACT_SYNC_REFRESH) ?? d;
        return parseInt(t, 10);
    }
    l.syncNewContact = h;
    l.runSyncDirtyContactsJob = b;
    l.getContactSyncRefreshSeconds = S;
}, 98);