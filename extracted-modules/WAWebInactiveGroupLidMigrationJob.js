__d("WAWebInactiveGroupLidMigrationJob", [
    "WAJids",
    "WALogger",
    "WAWebGroupsParticipantsApi",
    "WAWebInactiveGroupLidMigration",
    "WAWebNetworkStatus",
    "WAWebQueryAndUpdateGroupMetadataJob",
    "WAWebSchemaGroupMetadata",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = o("WAWebInactiveGroupLidMigration").isInactiveGroupLidMigrationComplete();
            if (t) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid-inactive-group-migration] already done, skip"
                ])));
                return;
            }
            yield r("WAWebNetworkStatus").waitIfOffline();
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[lid-inactive-group-migration] starting migration"
            ])));
            try {
                const n = yield h();
                if (n.length === 0) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[lid-inactive-group-migration] no PN groups, done"
                    ])));
                    o("WAWebInactiveGroupLidMigration").setInactiveGroupLidMigrationComplete();
                } else {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[lid-inactive-group-migration] found ",
                        " PN groups"
                    ])), n.length);
                    yield o("WAWebQueryAndUpdateGroupMetadataJob").queryAndUpdateAllGroupMetadata({
                        batchQueryArgs: {
                            groupJids: n.map((e)=>o("WAJids").toGroupJid(e.id)),
                            queryContext: "inactive_group_migration"
                        }
                    });
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[lid-inactive-group-migration] groups queried+updated"
                    ])));
                    const a = yield h();
                    if (a.length === 0) {
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[lid-inactive-group-migration] no PN groups left, done"
                        ])));
                        o("WAWebInactiveGroupLidMigration").setInactiveGroupLidMigrationComplete();
                    } else {
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[lid-inactive-group-migration] ",
                            " PN groups left, retry later"
                        ])), a.length).sendLogs("lid-inactive-group-migration-incomplete", {
                            sampling: 0.1
                        });
                    }
                }
            } catch (e) {
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid-inactive-group-migration] migration failed: ",
                    ""
                ])), e instanceof Error ? e.message : String(e)).sendLogs("lid-inactive-group-migration-failed");
                throw e;
            }
        });
        return g.apply(this, arguments);
    }
    function h() {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().all();
            const t = e.filter((e)=>e.isLidAddressingMode !== true);
            const n = yield o("WAWebGroupsParticipantsApi").bulkCheckMyMembership(t.map((e)=>o("WAWebWidFactory").createWid(e.id)));
            const r = [];
            t.forEach((e, t)=>{
                const o = n[t];
                if (o && !e.suspended && !e.terminated) {
                    r.push(e);
                }
            });
            return r;
        });
        return y.apply(this, arguments);
    }
    l.migrateInactiveGroupsToLid = f;
}, 98);