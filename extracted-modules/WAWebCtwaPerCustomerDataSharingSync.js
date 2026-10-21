__d("WAWebCtwaPerCustomerDataSharingSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebPerCustomerDataSharingControlLogging",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaDataSharing3pdLidV2",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdIndexUtils",
    "WAWebWamEnumSmbPerCustomerDataSharingControlAction",
    "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e) {
        o("WAWebPerCustomerDataSharingControlLogging").logPerCustomerDataSharingControlEvent({
            action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION.CONSENT_SCREEN_CONFIRM,
            actionOptInStatus: e.actionOptInStatus,
            currentOptInStatus: e.currentOptInStatus,
            entryPoint: e.entryPoint,
            globalDataSharingEntryPoint: e.globalDataSharingEntryPoint
        });
    }
    const p = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularHigh;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 1;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.AdsCtwaPerCustomerDataSharing;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = this;
                const a = o("WAWebSchemaDataSharing3pdLidV2").getDataSharing3pdLidTable();
                let i = 0;
                let l = 0;
                let m = 0;
                const p = [];
                const _ = yield (d || (d = n("Promise"))).all(t.map((()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                        const { indexParts, value } = t;
                        const u = indexParts[1];
                        try {
                            if (t.operation === "set") {
                                if (!u) {
                                    i++;
                                    return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                                }
                                if (value) {
                                    const c = value.ctwaPerCustomerDataSharingAction;
                                    if (c?.isCtwaPerCustomerDataSharingEnabled == null) {
                                        l++;
                                        return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                                    }
                                    const perCustomerDataSharingState = c.isCtwaPerCustomerDataSharingEnabled;
                                    yield r.$CtwaPerCustomerDataSharingSync$p_1(a, u, perCustomerDataSharingState);
                                    o("WAWebBackendApi").frontendFireAndForget("maybeGeneratePerCustomerDataSharingSystemMessage", {
                                        accountLid: u,
                                        perCustomerDataSharingState,
                                        entryPoint: o("WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.SYNCD_MUTATION
                                    });
                                }
                            } else if (t.operation === "remove") {
                                yield r.$CtwaPerCustomerDataSharingSync$p_2(a, u);
                            } else {
                                m++;
                                if (p.length < 3) {
                                    p.push(t.operation);
                                }
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                                };
                            }
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        } catch (t) {
                            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[syncd][per-customer-data-sharing]: mutation failed"
                            ])));
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            };
                        }
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })()));
                if (i > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][per-customer-data-sharing] missing accountLid x",
                        ""
                    ])), i);
                }
                if (l > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "per-customer data-sharing status sync: ",
                        " malformed mutations"
                    ])), l);
                }
                if (m > 0) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][per-customer-data-sharing] ",
                        " unsupported ops -> ",
                        ""
                    ])), m, p);
                }
                return _;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.$CtwaPerCustomerDataSharingSync$p_1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, lidRawString, dataSharing3pdEnabled) {
                yield e.createOrReplace({
                    lidRawString,
                    dataSharing3pdEnabled
                });
                o("WAWebBackendApi").frontendFireAndForget("updateDataSharing3pdLidInCollection", {
                    lidRawString,
                    dataSharing3pdEnabled
                });
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.$CtwaPerCustomerDataSharingSync$p_2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, lidRawString) {
                yield e.remove(lidRawString);
                o("WAWebBackendApi").frontendFireAndForget("removeDataSharing3pdLidFromCollection", {
                    lidRawString
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.getCtwaPerCustomerDataSharingMutation = function({ accountLid, isEnabled }) {
            const r = o("WATimeUtils").unixTimeMs();
            const a = {
                ctwaPerCustomerDataSharingAction: {
                    isCtwaPerCustomerDataSharingEnabled: isEnabled
                }
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [
                    accountLid.toString()
                ],
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                version: this.getVersion(),
                value: a,
                timestamp: r,
                action: this.getAction()
            });
        };
        r_prototype.sendPerCustomerDataSharingUpdate = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const { accountLid, entryPoint, globalDataSharingEntryPoint, isEnabled } = e;
                const c = this.getCtwaPerCustomerDataSharingMutation({
                    accountLid,
                    isEnabled
                });
                const d = o("WAWebSchemaDataSharing3pdLidV2").getDataSharing3pdLidTable();
                const p = accountLid.toString();
                let _;
                yield o("WAWebSyncdCoreApi").lockForSync([
                    "data-sharing-3pd-lid-v2"
                ], [
                    c
                ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    _ = yield d.get(p);
                    yield t.$CtwaPerCustomerDataSharingSync$p_1(d, p, isEnabled);
                }));
                const currentOptInStatus = _?.dataSharing3pdEnabled ?? true;
                m({
                    actionOptInStatus: isEnabled,
                    currentOptInStatus,
                    entryPoint,
                    globalDataSharingEntryPoint
                });
                o("WAWebBackendApi").frontendFireAndForget("maybeGeneratePerCustomerDataSharingSystemMessage", {
                    accountLid: p,
                    perCustomerDataSharingState: isEnabled,
                    entryPoint,
                    globalDataSharingEntryPoint
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const _ = new p;
    l.default = _;
}, 98);