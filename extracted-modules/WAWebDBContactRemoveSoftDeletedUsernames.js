__d("WAWebDBContactRemoveSoftDeletedUsernames", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebLidAwareContactsDB",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield r("WAWebLidAwareContactsDB").bulkGet(t.map((e)=>e.toJid()));
            let a = 0;
            const i = n.reduce((e, n, r)=>{
                if (n == null) {
                    a++;
                    return e;
                }
                if (n.username != null && n.usernameSoftDeleted === true) {
                    e.push({
                        lid: t[r],
                        oldUsername: n.username
                    });
                }
                return e;
            }, []);
            if (a > 0) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "removeSoftDeletedUsernames: ",
                    " missing contacts"
                ])), a);
            }
            if (i.length !== 0) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "removeSoftDeletedUsernames: removing usernames for ",
                    " LIDs"
                ])), i.length);
                yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(i.map(({ lid: t })=>({
                        id: t.toJid(),
                        username: void 0,
                        usernameSoftDeleted: void 0
                    })), "DBContactRemoveSoftDeletedUsernames.removeSoftDeletedUsernames");
            }
            return i;
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length !== 0) {
                yield o("WAWebBackendApi").frontendSendAndReceive("bulkUpdateUsernames", {
                    usernameUpdates: e.map(({ lid: t })=>({
                            id: t.toJid(),
                            username: void 0,
                            usernameSoftDeleted: void 0
                        }))
                });
                const t = yield (c || (c = n("Promise"))).allSettled(e.map(({ lid: t, oldUsername: n })=>o("WAWebInsertUsernameChangeSystemMsg").generateUsernameChangeNotificationSystemMsg({
                        wid: t,
                        oldUsername: n,
                        newUsername: void 0
                    })));
                for (const a of t){
                    if (a.status === "rejected") {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "removeSoftDeletedUsernames: failed to insert username delete system msg"
                        ]))).catching(r("getErrorSafe")(a.reason)).sendLogs("username-soft-delete-system-msg-insert-failed");
                    }
                }
            }
        });
        return _.apply(this, arguments);
    }
    l.removeSoftDeletedUsernames = d;
    l.applySoftDeletedUsernameClearsToFrontend = p;
}, 98);