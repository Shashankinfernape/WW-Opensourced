__d("WAWebAndroidUnsupportedActionsSync", [
    "Promise",
    "WALogger",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsAppStateSync"
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
            return 4;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.AndroidUnsupportedActions;
        };
        r_prototype.applyMutations = function(r) {
            const t = this;
            let a = 0;
            let i = 0;
            const l = (c || (c = n("Promise"))).all(r.map((e)=>{
                try {
                    if (e.operation === "set") {
                        const n = e.value;
                        const r = n.androidUnsupportedActions;
                        if (!r) {
                            a++;
                            return o("WAWebSyncdIndexUtils").malformedActionValue(t.collectionName);
                        }
                        const l = r.allowed;
                        if (l === true) {
                            t.updatePrimaryAllowsAllMutationsFlag("allow_unsupported_mutation");
                        }
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
            }));
            if (a > 0) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "android unsupported actions: ",
                    " malformed mutations"
                ])), a);
            }
            if (i > 0) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "locale setting sync: ",
                    " operations not supported"
                ])), i);
            }
            return l;
        };
        r_prototype.updatePrimaryAllowsAllMutationsFlag = function(t) {
            if (!o("WAWebUserPrefsAppStateSync").getPrimaryAllowsAllMutations()) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] primary allows all mutations flag set: ",
                    ""
                ])), t);
                o("WAWebUserPrefsAppStateSync").setPrimaryAllowsAllMutations();
            }
        };
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const m = new d;
    l.default = m;
}, 98);