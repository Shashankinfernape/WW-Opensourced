__d("WAWebPrimaryFeatureSync", [
    "WALogger",
    "WAWebPrimaryFeatures",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.Regular;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return 7;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.PrimaryFeature;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                let a;
                let i = 0;
                let l = 0;
                const u = t.map((e)=>{
                    if (e.operation !== "set") {
                        i++;
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    }
                    const r = e.value.primaryFeature?.flags;
                    if (r == null) {
                        l++;
                        return o("WAWebSyncdIndexUtils").malformedActionValue(n.collectionName);
                    }
                    if (a == null || e.timestamp > a.timestamp) {
                        a = e;
                    }
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                });
                if (i > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "primary feature sync: ",
                        " operations not supported"
                    ])), i);
                }
                if (l > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "primary feature sync: ",
                        " malformed mutations"
                    ])), l);
                }
                if (a != null) {
                    const d = r("nullthrows")(a.value.primaryFeature?.flags);
                    yield o("WAWebPrimaryFeatures").setPrimaryFeatures(d);
                }
                return u;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        return a;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const c = new u;
    l.default = c;
}, 98);