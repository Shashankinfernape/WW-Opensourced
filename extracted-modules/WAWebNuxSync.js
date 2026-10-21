__d("WAWebNuxSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WATypeUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebUserPrefsNuxPreferences",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = ((t)=>{
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
            return o("WAWebSyncdConst").Actions.Nux;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                const r = [];
                const a = [];
                let i = 0;
                const l = [];
                let c = 0;
                const d = t.map((e)=>{
                    if (e.operation !== "set") {
                        i++;
                        if (a.length < 3) {
                            a.push(e);
                        }
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    }
                    const s = e.indexParts[1];
                    if (o("WATypeUtils").isString(s)) {
                        r.push({
                            nuxKey: s,
                            acknowledged: e.value.nuxAction?.acknowledged === true,
                            timestamp: e.value.timestamp != null ? Number(e.value.timestamp) : undefined
                        });
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Success
                        };
                    }
                    c++;
                    if (l.length < 3) {
                        l.push(e);
                    }
                    return n.malformedActionIndex();
                });
                if (i > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "NuxSync: ",
                        " operations not supported => ",
                        ""
                    ])), i, a);
                }
                if (c > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "NuxSync: ",
                        " malformed mutations"
                    ])), c);
                }
                if (r.length !== 0) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "NuxSync: update nux to local store"
                    ])));
                    o("WAWebUserPrefsNuxPreferences").updateNuxSyncList(r);
                }
                return d;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.$NuxSync$p_1 = function(t, n, acknowledged) {
            const e = {
                nuxAction: {
                    acknowledged
                }
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [
                    t
                ],
                value: e,
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp: n,
                action: this.getAction()
            });
        };
        r_prototype.acknowledgeNux = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                return this.$NuxSync$p_2(e, true);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.unAcknowledgeNux = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                return this.$NuxSync$p_2(e, false);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.$NuxSync$p_2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, acknowledged) {
                const r = o("WATimeUtils").unixTimeMs();
                o("WAWebUserPrefsNuxPreferences").updateNuxSyncList([
                    {
                        nuxKey: e,
                        acknowledged,
                        timestamp: r
                    }
                ]);
                const a = this.$NuxSync$p_1(e, r, acknowledged);
                yield o("WAWebSyncdCoreApi").lockForSync([], [
                    a
                ], function() {
                    return (c || (c = n("Promise"))).resolve();
                });
                return r;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const m = new d;
    l.default = m;
}, 98);