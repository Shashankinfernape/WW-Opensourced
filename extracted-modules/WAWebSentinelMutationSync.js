__d("WAWebSentinelMutationSync", [
    "Promise",
    "WALogger",
    "WATagsLogger",
    "WATimeUtils",
    "WAWebGetSyncKey",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdKeyManagement",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = o("WATagsLogger").TAGS([
        "syncd",
        "SentinelMutationSync"
    ]);
    const _ = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 3;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.Sentinel;
        };
        r_prototype.applyMutations = function(r) {
            const t = this;
            p.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "applying mutations..."
            ])));
            let a = 0;
            let i = 0;
            const l = (m || (m = n("Promise"))).all(r.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    try {
                        if (e.operation === "set") {
                            const r = e.value.keyExpiration?.expiredKeyEpoch;
                            if (r == null) {
                                a++;
                                return o("WAWebSyncdIndexUtils").malformedActionValue(t.collectionName);
                            }
                            yield o("WAWebGetSyncKey").expireSyncKeyInTransaction(r);
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        }
                        i++;
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    } catch (e) {
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Failed
                        };
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            return l.then((e)=>{
                if (a > 0) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "sentinel mutation sync: ",
                        " malformed mutations"
                    ])), a);
                }
                if (i > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "sentinel mutation sync: ",
                        " operations not supported"
                    ])), i);
                }
                return e;
            });
        };
        r_prototype.getSentinelMutations = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                p.LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "preparing mutations..."
                ])));
                const t = o("WATimeUtils").unixTimeMs();
                const n = Array.from(o("WAWebSyncdConst").CollectionName.members());
                const r = yield o("WAWebSyncdKeyManagement").getNewestKeyPair();
                if (r == null) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "sentinel mutation sync: no key pairs"
                    ])));
                    return [];
                }
                const r_keyEpoch = r.keyEpoch;
                const i = {
                    keyExpiration: {
                        expiredKeyEpoch: r_keyEpoch
                    }
                };
                return n.map((n)=>o("WAWebSyncdActionUtils").buildPendingMutation({
                        collection: n,
                        indexArgs: [
                            n
                        ],
                        operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                        version: e.getVersion(),
                        value: i,
                        timestamp: t,
                        action: e.getAction()
                    }));
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const f = new _;
    Object.freeze(f);
    l.default = f;
}, 98);