__d("WAWebFetchAndUpdateBlocklistJob", [
    "WAArrayUtils",
    "WALogger",
    "WAPromiseDelays",
    "WAWebApiBlocklist",
    "WAWebBackendApi",
    "WAWebBlocklistMigration",
    "WAWebCriticalEventWamEvent",
    "WAWebDBCreateLidPnMappings",
    "WAWebGetBlocklistJob",
    "WAWebLid1X1MigrationGating",
    "WAWebLidAwareContactsDB",
    "WAWebLogoutReasonConstants",
    "WAWebSetUsernameJob",
    "WAWebSocketLogoutJob",
    "WAWebUpdateLidMetadataJob",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMultiDevice",
    "WAWebUsernameTypes",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "compactMap",
    "partitionArray"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[blocklist] fetch blocklist reason: ",
                ""
            ])), t);
            if (t === "post-migration") {
                yield o("WAWebUserPrefsMultiDevice").setBlocklistHash(null);
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove("WAReceivedBlocklistMigrationBefore1x1Migration");
            }
            const n = yield o("WAWebGetBlocklistJob").getBlocklist();
            if (n.errorCode != null) {
                return n;
            }
            if (n.type === "mismatch") {
                if (n.dirty) {
                    yield L("LidBlocklistForceMigratedDirty");
                }
                const a = o("WAWebBlocklistMigration").isBlocklistMigrated();
                const i = n.list;
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[blocklist] updating blocklist with ",
                    " contact(s)"
                ])), i.items.length);
                yield o("WAWebUserPrefsMultiDevice").setBlocklistHash(n.dhash);
                const l = o("WAWebGetBlocklistJob").extractWids(i);
                yield o("WAWebApiBlocklist").updateBlocklist(l);
                o("WAWebBackendApi").frontendFireAndForget("replaceBlocklist", {
                    wids: l
                });
                if (i.addressingMode === "pn") {
                    if (a) {
                        yield L("LidBlocklistUnexpectedPnBlocklist");
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[blocklist] received a pn-based blocklist on a migrated device, unmigrating it"
                        ])));
                        o("WAWebBlocklistMigration").setBlocklistUnmigrated();
                    }
                    const m = r("compactMap")(i.items, function({ displayName, wid }) {
                        if (displayName == null || !wid.isLid()) {
                            return null;
                        }
                        const r = {};
                        if (displayName != null) {
                            r.displayNameLID = displayName;
                        }
                        return {
                            lid: wid,
                            data: r
                        };
                    });
                    yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(m);
                } else {
                    i.addressingMode;
                    if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                        if (!a) {
                            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[blocklist] received a lid-based blocklist, marking the device as migrated"
                            ])));
                            o("WAWebBlocklistMigration").setBlocklistMigrated();
                        }
                    } else {
                        yield E();
                    }
                    yield h(i.items);
                }
            } else {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[blocklist] no change in blocklist, skip update"
                ])));
            }
            return n;
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = [];
            const n = [];
            for (const r of e){
                if (r.pn != null) {
                    t.push(r);
                }
                if (r.username != null || r.displayName != null) {
                    n.push(r);
                }
            }
            yield C(t);
            yield v(n);
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAArrayUtils").groupBy(e, function(e) {
                return e.pn.toString();
            });
            const n = [];
            const a = [];
            let i = 0;
            for (const l of t.values()){
                const s = r("partitionArray")(l, function(e) {
                    return e.active;
                });
                const u = s[0];
                const c = s[1];
                const d = c.sort((e, t)=>r("WAWebWid").compare(e.lid, t.lid)).reverse();
                n.push(...R(d));
                if (u.length > 1) {
                    i++;
                }
                a.push(...R(u));
            }
            if (i > 0) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[blocklist] ",
                    " PNs have multiple active LIDs"
                ])), i).sendLogs("blocklist-multiple-active-lids");
            }
            yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: n,
                flushImmediately: false,
                identityChangeHandlingEnabled: false,
                learningSource: "blocklist-inactive"
            });
            yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: a,
                flushImmediately: false,
                identityChangeHandlingEnabled: false,
                learningSource: "blocklist-active"
            });
            yield o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb();
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = [];
            const n = [];
            const a = yield r("WAWebLidAwareContactsDB").bulkGet(e.map((e)=>e.lid.toString()));
            for(let i = 0; i < e.length; i++){
                const l = e[i];
                const s = a[i];
                if (l.username != null) {
                    const username = o("WAWebUsernameTypes").asMaybeUsername(l.username);
                    if (username != null && (s == null || s.username == null && s.phoneNumber == null)) {
                        t.push({
                            userId: l.lid,
                            username
                        });
                    }
                } else {
                    l.displayName;
                    if (s == null || s.displayNameLID == null) {
                        n.push({
                            lid: l.lid,
                            data: {
                                displayNameLID: l.displayName
                            }
                        });
                    }
                }
            }
            yield o("WAWebSetUsernameJob").setUsernamesJob(t);
            yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(n);
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return e.map((e)=>({
                lid: e.lid,
                pn: e.pn
            }));
    }
    function L(e) {
        const t = new (o("WAWebCriticalEventWamEvent")).CriticalEventWamEvent({
            name: e,
            debug: "{fetch}"
        });
        return t.commitAndWaitForFlush();
    }
    function E() {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.hasStateDiscrepancy()) {
                return yield o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.LidMigrationStateDiscrepancy);
            }
            o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[blocklist] received a lid-based blocklist on an unmigrated device, will send critical event and log out"
            ]))).sendLogs("LidBlocklistUnmigratedChatDb");
            yield L("LidBlocklistUnmigratedChatDb");
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[blocklist] critical event committed"
            ])));
            yield o("WAPromiseDelays").delayMs(5000);
            yield o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.LidBlocklistChatDbUnmigrated);
        });
        return k.apply(this, arguments);
    }
    l.fetchAndUpdateBlocklist = f;
    l.learnIdentifiers = h;
}, 98);