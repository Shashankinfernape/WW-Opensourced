__d("WAWebNewsletterChatsMigrationForwarder", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebNewsletterChatsMigrationCapability",
    "WAWebNewsletterDBUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c = (u || (u = n("Promise"))).resolve();
    function d(t) {
        const migration = o("WAWebNewsletterChatsMigrationCapability").getNewsletterChatsMigrationFromCapabilities(t);
        c = c.then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const hasFollowedChannels = yield m(migration);
            o("WAWebBackendApi").frontendFireAndForget("updatePrimaryNewsletterChatsMigration", {
                hasFollowedChannels,
                migration
            });
        })).catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[forwardPrimaryNewsletterChatsMigration] forward failed"
            ]))).catching(r("getErrorSafe")(t));
        });
        return c;
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.effectiveMigrated !== true) {
                return false;
            }
            try {
                return yield o("WAWebNewsletterDBUtils").hasSubscribedNewsletterInStorage();
            } catch (error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[forwardPrimaryNewsletterChatsMigration] channel read failed, assuming followed"
                ]))).catching(r("getErrorSafe")(error));
                return true;
            }
        });
        return p.apply(this, arguments);
    }
    l.forwardPrimaryNewsletterChatsMigration = d;
}, 98);