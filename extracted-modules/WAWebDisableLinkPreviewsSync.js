__d("WAWebDisableLinkPreviewsSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebDisableLinkPreviewsAction",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdIndexUtils",
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
            e.collectionName = o("WAWebSyncdConst").CollectionName.Regular;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 8;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.DisableLinkPreviews;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                let r;
                const a = [];
                let i = 0;
                let l = 0;
                const c = t.map((e)=>{
                    if (e.operation !== "set") {
                        i++;
                        if (a.length < 3) {
                            a.push(e.operation);
                        }
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    }
                    const s = e.value.privacySettingDisableLinkPreviewsAction?.isPreviewsDisabled;
                    if (s == null) {
                        l++;
                        return o("WAWebSyncdIndexUtils").malformedActionValue(n.collectionName);
                    }
                    r = s;
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                });
                if (i > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "DisableLinkPreviewsSync: ",
                        " operations not supported => ",
                        ""
                    ])), i, a);
                }
                if (l > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "DisableLinkPreviewsSync: ",
                        " mutation values are null"
                    ])), l);
                }
                if (r != null) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "DisableLinkPreviewsSync: set disabled=",
                        ""
                    ])), r);
                    o("WAWebDisableLinkPreviewsAction").setDisableLinkPreviewsToUserPrefs(r);
                }
                return c;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.getMutation = function(t, isPreviewsDisabled) {
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [],
                value: {
                    privacySettingDisableLinkPreviewsAction: {
                        isPreviewsDisabled
                    }
                },
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp: t,
                action: this.getAction()
            });
        };
        r_prototype.sendMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield o("WAWebSyncdCoreApi").lockForSync([], [
                    this.getMutation(o("WATimeUtils").unixTimeMs(), e)
                ], function() {
                    return (c || (c = n("Promise"))).resolve();
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const m = new d;
    l.default = m;
}, 98);