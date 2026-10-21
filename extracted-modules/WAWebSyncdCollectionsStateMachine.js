__d("WAWebSyncdCollectionsStateMachine", [
    "WALogger",
    "WATimeUtils",
    "WAWebGetCollectionVersion",
    "WAWebSyncdConst",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    class u {
        static loadStatesFromDb = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                const t = yield o("WAWebGetCollectionVersion").getAllCollectionVersionsInTransaction();
                t.forEach((t)=>e.collectionStates.set(t.collection, {
                        collection: t.collection,
                        state: t.state,
                        finiteFailureStartTime: t.finiteFailureStartTime
                    }));
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        static persistToDb() {
            const t = [];
            this.collectionStates.forEach((e)=>t.push(babelHelpers.extends({}, e)));
            const n = t.map((e)=>{
                const t = e.finiteFailureStartTime == null ? "" : `(failure start: ${e.finiteFailureStartTime})`;
                return `${String(e.collection)}: ${String(e.state)} ${t}`;
            });
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: state machine persistToDb. states: ",
                ""
            ])), n);
            return o("WAWebGetCollectionVersion").bulkUpdateCollectionVersionInTransaction(t);
        }
        static clean() {
            this.collectionStates = new Map;
        }
        static getCollectionState(t) {
            const e = this.collectionStates.get(t);
            if (e) {
                return e.state;
            }
            this.moveCollectionsToUpToDate([
                t
            ]);
            return o("WAWebSyncdConst").CollectionSyncState.UpToDate;
        }
        static getCollectionsInStateDirty() {
            const e = [];
            this.collectionStates.forEach((t)=>{
                if (t.state === o("WAWebSyncdConst").CollectionSyncState.Dirty) {
                    e.push(t.collection);
                }
            });
            return e;
        }
        static getCollectionsInStateRetry() {
            const e = [];
            this.collectionStates.forEach((t)=>{
                if (t.state === o("WAWebSyncdConst").CollectionSyncState.FailingFiniteRetry) {
                    e.push(t.collection);
                }
            });
            return e;
        }
        static getCollectionsInStateFatal() {
            const e = [];
            this.collectionStates.forEach((t)=>{
                if (t.state === o("WAWebSyncdConst").CollectionSyncState.Fatal) {
                    e.push(t.collection);
                }
            });
            return e;
        }
        static getCollectionsInStateBlocked() {
            const e = [];
            this.collectionStates.forEach((t)=>{
                if (t.state === o("WAWebSyncdConst").CollectionSyncState.Blocked) {
                    e.push(t.collection);
                }
            });
            return e;
        }
        static moveCollectionsToUpToDate(t) {
            const e = this;
            t.forEach((t)=>e.collectionStates.set(t, {
                    collection: t,
                    state: o("WAWebSyncdConst").CollectionSyncState.UpToDate,
                    finiteFailureStartTime: undefined
                }));
        }
        static moveCollectionsToDirty(t) {
            const e = this;
            t.forEach((t)=>e.collectionStates.set(t, {
                    collection: t,
                    state: o("WAWebSyncdConst").CollectionSyncState.Dirty,
                    finiteFailureStartTime: e.collectionStates.get(t)?.finiteFailureStartTime
                }));
        }
        static moveCollectionsToFiniteRetry(t) {
            const e = this;
            t.forEach((t)=>e.collectionStates.set(t, {
                    collection: t,
                    state: o("WAWebSyncdConst").CollectionSyncState.FailingFiniteRetry,
                    finiteFailureStartTime: e.collectionStates.get(t)?.finiteFailureStartTime ?? o("WATimeUtils").unixTimeMs()
                }));
        }
        static moveCollectionsToFatal(t) {
            const e = this;
            t.forEach((t)=>e.collectionStates.set(t, {
                    collection: t,
                    state: o("WAWebSyncdConst").CollectionSyncState.Fatal
                }));
        }
        static moveCollectionsToBlocked(t) {
            const e = this;
            t.forEach((t)=>e.collectionStates.set(t, {
                    collection: t,
                    state: o("WAWebSyncdConst").CollectionSyncState.Blocked,
                    finiteFailureStartTime: e.collectionStates.get(t)?.finiteFailureStartTime
                }));
        }
        static getExpiredCollections() {
            const e = [];
            const t = [];
            let n = 0;
            this.collectionStates.forEach((r)=>{
                if (r.state === o("WAWebSyncdConst").CollectionSyncState.FailingFiniteRetry) {
                    let a;
                    if (r.finiteFailureStartTime == null) {
                        a = Infinity;
                        n++;
                        if (t.length < 3) {
                            t.push(r.collection);
                        }
                    } else {
                        a = r.finiteFailureStartTime;
                    }
                    const i = a + o("WAWebSyncdConst").FINITE_FAILURE_EXPIRY_DURATION;
                    if (i < o("WATimeUtils").unixTimeMs()) {
                        e.push(r.collection);
                    }
                }
            });
            if (n > 0) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] ",
                    " finite retry w/o failureStartTime => ",
                    ""
                ])), n, t);
            }
            return e;
        }
        static getCollectionMinFailureTime() {
            const e = Array.from(this.collectionStates.values()).filter((e)=>e.state === o("WAWebSyncdConst").CollectionSyncState.FailingFiniteRetry);
            const t = r("compactMap")(e, function(e) {
                return e.finiteFailureStartTime;
            });
            if (t.length === 0) {
                return null;
            }
            return Math.min(...t);
        }
    }
    u.collectionStates = new Map;
    l.default = u;
}, 98);