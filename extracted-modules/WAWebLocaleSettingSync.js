__d("WAWebLocaleSettingSync", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebEnvironment",
    "WAWebL10NConstants",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime"
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
            e.collectionName = o("WAWebSyncdConst").CollectionName.CriticalBlock;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return 3;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.LocaleSetting;
        };
        a_prototype.applyMutations = function(a) {
            const t = this;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "locale setting sync: start"
            ])));
            let i = 0;
            let l = 0;
            let p = 0;
            const _ = [];
            const f = (m || (m = n("Promise"))).all(a.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    try {
                        if (r("WAWebEnvironment").isWindows) {
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Skipped
                            };
                        }
                        if (e.operation === "set") {
                            const n = e.value;
                            const a = n.localeSetting;
                            if (!a) {
                                i++;
                                return o("WAWebSyncdIndexUtils").malformedActionValue(t.collectionName);
                            }
                            const locale = a.locale;
                            if (locale == null) {
                                l++;
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Skipped
                                };
                            }
                            yield o("WAWebBackendApi").frontendSendAndReceive("setLocale", {
                                locale,
                                priority: o("WAWebL10NConstants").L10N_PRIORITY.PHONE,
                                reload: false
                            });
                            if (_.length < 3) {
                                _.push(locale);
                            }
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        }
                        p++;
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
            return f.then((e)=>{
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "locale setting sync: handled ",
                    " mutations"
                ])), a.length);
                if (i > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "locale setting sync: ",
                        " malformed mutations"
                    ])), i);
                }
                if (l > 0) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "locale setting sync: ",
                        " null locale mutations"
                    ])), l);
                }
                if (p > 0) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "locale setting sync: ",
                        " unsupported operations"
                    ])), p);
                }
                return e;
            });
        };
        return a;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const _ = new p;
    l.default = _;
}, 98);