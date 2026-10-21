__d("WAWebOpusMigration", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebOpusUtils",
    "WAWebReleaseToEventLoop",
    "WAWebSchemaChat",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = 10;
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OPUS_MIGRATION_COMPLETE) === true) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[opus] migration skipped: completion flag already set"
                ])));
                return;
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[opus] starting bulk migration"
            ])));
            const t = [];
            yield o("WAWebSchemaChat").getChatTable().forEach((e)=>{
                if (e.limitSharing?.sharingLimited === true) {
                    t.push(e.id);
                }
            });
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[opus] found ",
                " chats to process"
            ])), t.length);
            const n = yield g(t);
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OPUS_MIGRATION_COMPLETE, true);
            if (n > 0) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[opus] migration finished with ",
                    " failures out of ",
                    " chats"
                ])), n, t.length).sendLogs("opus-migration-failures");
            }
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[opus] bulk migration complete (",
                " failures out of ",
                " chats)"
            ])), n, t.length);
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return y({
                chatIds: e,
                offset: 0,
                failureCount: 0
            });
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatIds: t, failureCount: r, offset: a }) {
            if (a >= t.length) {
                return r;
            }
            const i = t.slice(a, a + p);
            const l = yield (m || (m = n("Promise"))).allSettled(i.map((e)=>o("WAWebOpusUtils").opusProcessChat(e, {
                    skipSharingLimitedCheck: true,
                    beforeTimestamp: o("WAWebABProps").getABPropConfigValue("opus_t")
                })));
            let s = 0;
            for (const u of l){
                if (u.status === "rejected") {
                    s++;
                }
            }
            const c = a + p;
            if (c < t.length) {
                yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
            }
            return y({
                chatIds: t,
                offset: c,
                failureCount: r + s
            });
        });
        return C.apply(this, arguments);
    }
    l.runOpusMigration = _;
}, 98);