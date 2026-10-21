__d("WAWebBizBroadcastProPendingActionSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WATypeUtils",
    "WAWebBizBroadcastProPendingActions",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 7;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.BBProPendingCustomerBaseAction;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                const r = [];
                const a = [];
                let i = 0;
                const l = t.map((e)=>{
                    if (e.operation !== "set") {
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    }
                    const l = e.indexParts[1];
                    if (o("WATypeUtils").isString(l)) {
                        r.push({
                            action: l,
                            pending: e.value.bbProPendingCustomerBaseAction?.pending === true
                        });
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Success
                        };
                    }
                    i++;
                    if (a.length < 3) {
                        a.push(e);
                    }
                    return n.malformedActionIndex();
                });
                if (i > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "BizBroadcastProPendingActionSync: ",
                        " malformed mutations"
                    ])), i);
                }
                o("WAWebBizBroadcastProPendingActions").updatePendingCustomerBaseActions(r);
                return l;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.clearPendingAction = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = o("WATimeUtils").unixTimeMs();
                o("WAWebBizBroadcastProPendingActions").updatePendingCustomerBaseActions([
                    {
                        action: e,
                        pending: false
                    }
                ]);
                const r = {
                    bbProPendingCustomerBaseAction: {
                        pending: false
                    }
                };
                const a = o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: [
                        e
                    ],
                    value: r,
                    version: this.getVersion(),
                    operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                    timestamp: t,
                    action: this.getAction()
                });
                yield o("WAWebSyncdCoreApi").lockForSync([], [
                    a
                ], function() {
                    return (s || (s = n("Promise"))).resolve();
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const c = new u;
    l.default = c;
}, 98);