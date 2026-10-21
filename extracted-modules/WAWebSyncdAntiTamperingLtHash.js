__d("WAWebSyncdAntiTamperingLtHash", [
    "Promise",
    "WACryptoLtHash",
    "WACryptoUtils",
    "WAJids",
    "WALogger",
    "WAWebCurrentUser",
    "WAWebLid1X1MigrationGating",
    "WAWebRunInTransaction",
    "WAWebSyncdConst",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDb",
    "WAWebSyncdDbCallbacksApi",
    "WAWebUserPrefsTypes",
    "WAWebWamEnumIsPureSyncdSessionEnum",
    "WAWebWamEnumLidMigrationStageEnum",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    function d(mutations) {
        const t = new Map(mutations.map((e)=>[
                o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(e.indexMac),
                e.valueMac
            ]));
        return o("WACryptoLtHash").LT_HASH_ANTI_TAMPERING.add(o("WACryptoLtHash").EMPTY_LT_HASH, Array.from(t.values()));
    }
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a) {
            const i = o("WAWebCurrentUser").isEmployee() ? 900 : a;
            const l = yield o("WAWebRunInTransaction").runInTransaction({
                SyncActionStore: true,
                CollectionVersionStore: true
            }, (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ CollectionVersionStore, SyncActionStore }) {
                    const a = r == null ? yield CollectionVersionStore.getAll() : [
                        (yield CollectionVersionStore.get(r))
                    ];
                    return (c || (c = n("Promise"))).all(a.filter(Boolean).map((()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ collection, ltHash }) {
                            const r = yield SyncActionStore.getByCollections([
                                collection
                            ]);
                            return {
                                collection,
                                ltHash,
                                mutations: r
                            };
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })()));
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            let s = 0;
            l.map(({ collection, ltHash, mutations })=>{
                s += mutations.length;
            });
            if (i !== undefined && s > i) {
                return {
                    isLtHashConsistent: undefined,
                    scratchLtHash: undefined,
                    cachedLtHash: undefined
                };
            }
            let scratchLtHash = null;
            let cachedLtHash = null;
            let isLtHashConsistent = true;
            const _ = [];
            yield (c || (c = n("Promise"))).all(l.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ collection, ltHash, mutations }) {
                    const a = yield d(mutations);
                    if (scratchLtHash == null) {
                        scratchLtHash = a;
                    }
                    if (cachedLtHash == null) {
                        cachedLtHash = ltHash;
                    }
                    if (!o("WACryptoUtils").arrayBuffersEqual(ltHash, a)) {
                        if (s > 0) {
                            isLtHashConsistent = false;
                            _.push(collection);
                        }
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            if (_.length > 0) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: failed LtHash check for ",
                    " collections => ",
                    ""
                ])), t, _.length, _.slice(0, 3)).verbose();
            }
            return {
                isLtHashConsistent,
                scratchLtHash,
                cachedLtHash
            };
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n, r) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r = 400) {
            const a = yield m(n, e, r);
            const { cachedLtHash, isLtHashConsistent, scratchLtHash } = a;
            const d = scratchLtHash == null ? "" : o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(scratchLtHash).slice(-16);
            const p = cachedLtHash == null ? "" : o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(cachedLtHash).slice(-16);
            if (isLtHashConsistent === false) {
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `[${n}] lthash first time inconsistent. scratchLtHash: ${d}, cachedLtHash: ${p}, context: ${t}`);
                yield o("WAWebSyncdDbCallbacksApi").printSyncdLog(e);
                const _ = "syncd: lthash inconsistent";
                if (e === o("WAWebSyncdConst").CollectionName.CriticalBlock || o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " first time for ",
                        ""
                    ])), _, e).verbose().sendLogs(_);
                } else {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " first time for ",
                        ""
                    ])), _, e).verbose().sendLogs(_, {
                        sampling: 0.01
                    });
                }
                return true;
            } else if (isLtHashConsistent === true) {
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `lthash consistent. scratchLtHash: ${d}, cachedLtHash: ${p}, context: ${t}`);
                return false;
            }
            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, `lthash unknown if consistent. scratchLtHash: ${d}, cachedLtHash: ${p}, context: ${t}`);
        });
        return f.apply(this, arguments);
    }
    function g() {
        if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
            if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.lidMigrationSource() === o("WAWebUserPrefsTypes").LidMigrationSource.PEER) {
                return o("WAWebWamEnumLidMigrationStageEnum").LID_MIGRATION_STAGE_ENUM.PEER_MIGRATED;
            }
            return o("WAWebWamEnumLidMigrationStageEnum").LID_MIGRATION_STAGE_ENUM.HISTORY_MIGRATED;
        }
        return o("WAWebWamEnumLidMigrationStageEnum").LID_MIGRATION_STAGE_ENUM.NOT_MIGRATED;
    }
    function h() {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isPureLidSyncDSession();
            if (e != null) {
                if (e) {
                    return o("WAWebWamEnumIsPureSyncdSessionEnum").IS_PURE_SYNCD_SESSION_ENUM.YES;
                }
                return o("WAWebWamEnumIsPureSyncdSessionEnum").IS_PURE_SYNCD_SESSION_ENUM.NO;
            }
            const t = yield o("WAWebSyncdDb").getSyncActionsRows([
                "action"
            ], [
                o("WAWebSyncdConst").Actions.Archive,
                o("WAWebSyncdConst").Actions.ClearChat,
                o("WAWebSyncdConst").Actions.DeleteChat,
                o("WAWebSyncdConst").Actions.DeleteMessageForMe,
                o("WAWebSyncdConst").Actions.MarkChatAsRead,
                o("WAWebSyncdConst").Actions.Mute,
                o("WAWebSyncdConst").Actions.Pin,
                o("WAWebSyncdConst").Actions.Star
            ]);
            const n = t.find((e)=>e.index.includes(o("WAJids").WA_USER_DOMAIN));
            if (n) {
                return o("WAWebWamEnumIsPureSyncdSessionEnum").IS_PURE_SYNCD_SESSION_ENUM.PROBABLY_NO;
            }
            const r = t.find((e)=>e.index.includes(o("WAJids").LID_DOMAIN));
            if (r) {
                return o("WAWebWamEnumIsPureSyncdSessionEnum").IS_PURE_SYNCD_SESSION_ENUM.PROBABLY_YES;
            }
            return o("WAWebWamEnumIsPureSyncdSessionEnum").IS_PURE_SYNCD_SESSION_ENUM.UNKNOWN;
        });
        return y.apply(this, arguments);
    }
    l.checkLtHash = m;
    l.reportCollectionInconsistency = _;
    l.getLidMigrationStage = g;
    l.getPureSyncDSessionDetails = h;
}, 98);