__d("WAWebShareOwnPnSync", [
    "WALogger",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebUpdateLidMetadataJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.Regular;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 8;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.ShareOwnPn;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                const r = [];
                let a = 0;
                let i = 0;
                const l = t.map((e)=>{
                    if (e.operation !== "set") {
                        a++;
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    }
                    const t = e.indexParts[1];
                    if (!o("WAWebWidFactory").isWidlike(t)) {
                        i++;
                        return n.malformedActionIndex();
                    }
                    const l = o("WAWebWidFactory").createUserLidOrThrow(t);
                    r.push({
                        lid: l,
                        data: {
                            shareOwnPn: true
                        }
                    });
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                });
                if (a > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "share_own_pn sync: ",
                        " operations not supported"
                    ])), a);
                }
                if (i > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "share_own_pn sync: ",
                        " malformed mutations - invalid key"
                    ])), i);
                }
                yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(r);
                return l;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const c = new u;
    l.default = c;
}, 98);