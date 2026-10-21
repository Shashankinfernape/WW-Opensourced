__d("WAWebPrimaryVersionSync", [
    "WALogger",
    "WAWebPrimaryVersion",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = {
        CURRENT: "current",
        SESSION_START: "session_start"
    };
    const c = ((t)=>{
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
            return o("WAWebSyncdConst").Actions.PrimaryVersion;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                let r = 0;
                let a = 0;
                let i = null;
                const l = t.map((e)=>{
                    if (e.operation !== "set") {
                        r++;
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    }
                    const { indexParts, value } = e;
                    const c = indexParts[1];
                    if (!c || c !== u.CURRENT && c !== u.SESSION_START) {
                        return n.malformedActionIndex();
                    }
                    const d = value.primaryVersionAction?.version;
                    if (d == null) {
                        a++;
                        return o("WAWebSyncdIndexUtils").malformedActionValue(n.collectionName);
                    }
                    if (c === u.CURRENT) {
                        i = d;
                    }
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                });
                if (r > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: primary version sync, ",
                        " operations not supported"
                    ])), r);
                }
                if (a > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: primary version sync, ",
                        " malformed mutations"
                    ])), a);
                }
                if (i != null) {
                    yield o("WAWebPrimaryVersion").storePrimaryCurrentVersion(i);
                }
                return l;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const d = new c;
    l.default = d;
}, 98);