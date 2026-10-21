__d("WAWebTimeFormatSync", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((t)=>{
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
            return o("WAWebSyncdConst").Actions.TimeFormat;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                let r = 0;
                const a = t.map((e)=>{
                    if (e.operation !== "set") {
                        r++;
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    }
                    const is24Hour = e.value.timeFormatAction?.isTwentyFourHourFormatEnabled;
                    if (is24Hour == null) {
                        return n.malformedActionIndex();
                    }
                    o("WAWebBackendApi").frontendFireAndForget("setIs24Hour", {
                        is24Hour
                    });
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                });
                if (r > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "time format sync: ",
                        " operations not supported"
                    ])), r);
                }
                return a;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const u = new s;
    l.default = u;
}, 98);