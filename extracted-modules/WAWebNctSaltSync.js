__d("WAWebNctSaltSync", [
    "Promise",
    "WABase64",
    "WALogger",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime",
    "countWhere"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularHigh;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return 1;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.NctSaltSync;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                const i = yield (m || (m = n("Promise"))).all(t.map((e)=>a.$NctSaltSync$p_1(e)));
                const l = r("countWhere")(i, function(e) {
                    return e.actionState === o("WAWebSyncdConst").SyncActionState.Success;
                });
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-salt-sync] Processed ",
                    " mutation(s), ",
                    " succeeded"
                ])), t.length, l);
                return i;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.$NctSaltSync$p_1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (e.operation === "remove") {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[nct-salt-sync] Removing stored NCT salt"
                    ])));
                    yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NCT_SALT);
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                }
                if (e.operation !== "set") {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[nct-salt-sync] Unsupported operation: ",
                        ""
                    ])), e.operation);
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                    };
                }
                const n = e.value?.nctSaltSyncAction?.salt;
                if (n == null) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[nct-salt-sync] Missing salt in nctSaltSyncAction"
                    ])));
                    return this.malformedActionIndex();
                }
                const r = o("WABase64").encodeB64(n);
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NCT_SALT, r);
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[nct-salt-sync] Stored NCT salt"
                ])));
                return {
                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                };
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const _ = new p;
    l.default = _;
}, 98);