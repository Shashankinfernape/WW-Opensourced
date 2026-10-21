__d("WAWebSyncd", [
    "Promise",
    "WALogger",
    "WAWebGetCollectionVersion",
    "WAWebGetMissingKey",
    "WAWebGetPendingMutation",
    "WAWebGetSyncAction",
    "WAWebGetSyncKey",
    "WAWebSyncdAntiTampering",
    "WAWebSyncdCollectionsStateMachine",
    "WAWebSyncdConst",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdDisabled",
    "WAWebSyncdMetricFatalError",
    "WAWebSyncdOrphan",
    "WAWebSyncdServerSync",
    "WAWebSyncdWamAppState",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    let $;
    let P;
    const N = 1000;
    const M = 1000 * 60 * 60;
    const w = 2;
    let A = new Set;
    let F = new Set;
    let O;
    let B = false;
    let W = 0;
    let q = 0;
    function U(e, t) {
        return V.apply(this, arguments);
    }
    function V() {
        V = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = t != null ? yield H(e, t) : e;
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: marking for sync: ",
                ""
            ])), n);
            n.forEach((e)=>{
                const t = r("WAWebSyncdCollectionsStateMachine").getCollectionState(e);
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: ",
                    " state before sync: ",
                    ""
                ])), e, t);
                if (t === o("WAWebSyncdConst").CollectionSyncState.UpToDate) {
                    r("WAWebSyncdCollectionsStateMachine").moveCollectionsToDirty([
                        e
                    ]);
                } else if (t === o("WAWebSyncdConst").CollectionSyncState.Dirty) {
                    F = new Set([].concat(Array.from(F), [
                        e
                    ]));
                }
            });
            yield r("WAWebSyncdCollectionsStateMachine").persistToDb();
            return Z();
        });
        return V.apply(this, arguments);
    }
    function H(e, t) {
        return G.apply(this, arguments);
    }
    function G() {
        G = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: start filter collections: ",
                ""
            ])), e);
            const n = yield o("WAWebGetCollectionVersion").bulkGetCollectionVersionsInTransaction(e);
            const r = new Map(e.map((e, t)=>[
                    e,
                    n[t]?.version
                ]));
            return e.filter((e)=>{
                const n = r.get(e);
                if (n == null) {
                    o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: local version for ",
                        " missing; will mark for sync."
                    ])), e);
                    return true;
                }
                const a = t.get(e);
                if (a == null) {
                    o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: server version for ",
                        " missing; will mark for sync."
                    ])), e);
                    return true;
                }
                if (n < a) {
                    o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: localV=",
                        " < serverV=",
                        " for ",
                        "; sync"
                    ])), n, a, e);
                    return true;
                }
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: localV=",
                    " >= serverV=",
                    " for ",
                    "; skip"
                ])), n, a, e);
                return false;
            });
        });
        return G.apply(this, arguments);
    }
    function z() {
        return j.apply(this, arguments);
    }
    function j() {
        j = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let e;
            const t = yield o("WAWebGetSyncAction").countSyncActionsInTransaction();
            (e = o("WAWebSyncdWamAppState")).setStoredMutationCount(t);
            const n = yield o("WAWebGetSyncAction").getSyncActionsByActionStatesInTransaction([
                o("WAWebSyncdConst").SyncActionState.Malformed
            ]);
            e.setInvalidActionCount(n.length);
            const r = yield o("WAWebGetSyncAction").getSyncActionsByActionStatesInTransaction([
                o("WAWebSyncdConst").SyncActionState.Unsupported
            ]);
            e.setUnsupportedActionCount(r.length);
            const a = yield o("WAWebGetMissingKey").getMissingKeyCountTransaction();
            e.setMissingKeyCount(a);
        });
        return j.apply(this, arguments);
    }
    function K() {
        return Q.apply(this, arguments);
    }
    function Q() {
        Q = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {});
        return Q.apply(this, arguments);
    }
    function X() {
        return Y.apply(this, arguments);
    }
    function Y() {
        Y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {});
        return Y.apply(this, arguments);
    }
    function J() {
        const t = r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateBlocked();
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: sync blocked collections: ",
            ""
        ])), t);
        r("WAWebSyncdCollectionsStateMachine").moveCollectionsToDirty(t);
        F = new Set([].concat(Array.from(F), Array.from(A)));
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: syncBlockedCollections blocked=",
            " inflight=",
            ""
        ])), t, Array.from(A));
        return Z();
    }
    function Z() {
        return ee.apply(this, arguments);
    }
    function ee() {
        ee = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebSyncdDisabled").isSyncdDisabled()) {
                return (P || (P = n("Promise"))).resolve();
            }
            const e = r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateDirty();
            o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: dirty collections: ",
                ""
            ])), e);
            const t = new Set(e.filter((e)=>!A.has(e)));
            if (t.size === 0) {
                o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: no collections to sync"
                ])));
                return (P || (P = n("Promise"))).resolve();
            }
            let a = [];
            try {
                A = new Set([].concat(Array.from(A), Array.from(t)));
                o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: initiate server sync"
                ])));
                a = yield o("WAWebSyncdServerSync").serverSync(Array.from(t));
                o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: server sync successful"
                ])));
                const i = a.filter((e)=>e.state === o("WAWebSyncdConst").CollectionState.ErrorRetry);
                if (i.length > 0) {
                    q = i[0].serverBackoff || 0;
                    W = 0;
                }
                ie(a);
            } catch (error) {
                o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: exception during sync(): ",
                    ""
                ])), error);
                r("WAWebSyncdCollectionsStateMachine").moveCollectionsToFiniteRetry(Array.from(t));
            } finally{
                o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: cleanup after sync()"
                ])));
                r("WAWebSyncdCollectionsStateMachine").persistToDb();
                A = new Set(Array.from(A).filter((e)=>!t.has(e)));
                ae();
                yield o("WAWebSyncdDbCallbacksApi").handleSyncCompleted(a);
            }
        });
        return ee.apply(this, arguments);
    }
    function te() {
        if (!o("WAWebSyncdDisabled").isSyncdDisabled()) {
            const e = new Set(r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateRetry());
            if (e.size !== 0) {
                O = setTimeout(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    try {
                        B = true;
                        W += 1;
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: initiate server sync retry"
                        ])));
                        const t = yield o("WAWebSyncdServerSync").serverSync(Array.from(e));
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: server sync retry successful"
                        ])));
                        ie(t);
                    } catch (error) {
                        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: exception during handleRetry(): ",
                            ""
                        ])), error);
                        r("WAWebSyncdCollectionsStateMachine").moveCollectionsToFiniteRetry(Array.from(e));
                    } finally{
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: cleanup after handleRetry()"
                        ])));
                        yield re();
                        r("WAWebSyncdCollectionsStateMachine").persistToDb();
                        B = false;
                        ae();
                    }
                }), ne(W, q));
            }
        }
    }
    function ne(e, t) {
        const n = w ** e * N;
        return Math.min(Math.max(n, t), M);
    }
    function re() {
        return oe.apply(this, arguments);
    }
    function oe() {
        oe = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = r("WAWebSyncdCollectionsStateMachine").getExpiredCollections();
            if (e.length > 0) {
                r("WAWebSyncdCollectionsStateMachine").moveCollectionsToFatal(e);
                yield o("WAWebSyncdDbCallbacksApi").printSyncdLog();
                o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: fatal error: expired collections"
                ]))).sendLogs("syncd: fatal error: expired collections");
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.TOO_MANY_INTERNAL_SERVER_ERRORS_IN_7D, {
                    collection: e[0],
                    lidMigrationStage: o("WAWebSyncdAntiTampering").getLidMigrationStage()
                });
            }
        });
        return oe.apply(this, arguments);
    }
    function ae() {
        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: state machine tick"
        ])));
        if (r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateDirty().length > 0) {
            F = new Set(Array.from(F).filter((e)=>A.has(e)));
            Z();
        }
        const e = r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateRetry();
        if (e.length > 0) {
            if (B) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: retry is in flight"
                ])));
                return;
            }
            if (O != null) {
                clearTimeout(O);
            }
            F = new Set(Array.from(F).filter((t)=>!e.includes(t)));
            te();
        }
        if (r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateFatal().length > 0) {
            o("WAWebSyncdDbCallbacksApi").handleSyncdFatal({
                collections: r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateFatal()
            });
        }
    }
    function ie(e) {
        return e.forEach((e)=>{
            if (e.state === o("WAWebSyncdConst").CollectionState.Success && !F.has(e.name)) {
                return r("WAWebSyncdCollectionsStateMachine").moveCollectionsToUpToDate([
                    e.name
                ]);
            }
            if (e.state === o("WAWebSyncdConst").CollectionState.ErrorRetry) {
                o("WAWebSyncdCriticalBootstrapProcessingApi").logCriticalBootstrapStageIfNecessary(o("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.ENTERED_RETRY_MODE);
                return r("WAWebSyncdCollectionsStateMachine").moveCollectionsToFiniteRetry([
                    e.name
                ]);
            }
            if (e.state === o("WAWebSyncdConst").CollectionState.ErrorFatal) {
                return r("WAWebSyncdCollectionsStateMachine").moveCollectionsToFatal([
                    e.name
                ]);
            }
            if (e.state === o("WAWebSyncdConst").CollectionState.Blocked && !F.has(e.name)) {
                return r("WAWebSyncdCollectionsStateMachine").moveCollectionsToBlocked([
                    e.name
                ]);
            }
        });
    }
    function le() {
        return se.apply(this, arguments);
    }
    function se() {
        se = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: syncPendingMutationsAndBlockedCollections"
            ])));
            const e = yield o("WAWebGetPendingMutation").getAllSyncPendingMutationsInTransaction();
            const t = r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateBlocked();
            r("WAWebSyncdCollectionsStateMachine").moveCollectionsToDirty(t);
            const n = e.map((e)=>e.collection).concat(t);
            if (n.length > 0) {
                o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: syncPendingMutationsAndBlockedCollections: [",
                    "]"
                ])), n);
                U(n);
            }
        });
        return se.apply(this, arguments);
    }
    function ue() {
        return r("WAWebSyncdCollectionsStateMachine").loadStatesFromDb().then(()=>ae());
    }
    function ce() {
        return de.apply(this, arguments);
    }
    function de() {
        de = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebSyncdOrphan").applyAllOrphansAndUnsupported();
            o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: sync pending mutations + blocked on app resume"
            ])));
            yield le();
        });
        return de.apply(this, arguments);
    }
    function me() {
        return A;
    }
    function pe() {
        return F;
    }
    l.markCollectionsForSync = U;
    l.reportWam = z;
    l.logKeysInfoInIntern = X;
    l.syncBlockedCollections = J;
    l.initializeStateMachine = ue;
    l.processOnAppResume = ce;
    l.getInFlightCollections = me;
    l.getPendingCollections = pe;
}, 98);