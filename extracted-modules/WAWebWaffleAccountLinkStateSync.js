__d("WAWebWaffleAccountLinkStateSync", [
    "WALogger",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingGatingUtils",
    "WAWebAccountLinkingNonceFetchAPI",
    "WAWebAccountLinkingUtils",
    "WAWebSubscriptionAgeGating",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebWaffleLifecycleWamLogger",
    "WAWebWamEnumWaffleLifecycleLinkStateType",
    "WAWebWamEnumWaffleLifecycleTraceActionType",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps("account_linking");
    const c = ((t)=>{
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
            return o("WAWebSyncdConst").Actions.WaffleAccountLinkState;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                if (o("WAWebAccountLinkingGatingUtils").isGuestMode()) {
                    return t.map(()=>({
                            actionState: o("WAWebSyncdConst").SyncActionState.Success
                        }));
                }
                let a;
                let i = 0;
                let l = 0;
                const c = t.map((e)=>{
                    if (e.operation !== "set") {
                        i++;
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    }
                    if (e.value.waffleAccountLinkStateAction?.linkState == null) {
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
                        "waffleaccountlinkstate sync: ",
                        " operations not supported"
                    ])), i);
                }
                if (l > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "waffleaccountlinkstate sync: ",
                        " malformed mutations"
                    ])), l);
                }
                if (a != null) {
                    const p = o("WAWebAccountLinkingUtils").mapToAccountLinkState(r("nullthrows")(a.value.waffleAccountLinkStateAction?.linkState));
                    const _ = Number(r("nullthrows")(a?.value.timestamp));
                    if (p === o("WAWebAccountLinkingConstants").AccountLinkState.Active) {
                        const f = yield u.getAccountLinkingData();
                        if (f == null) {
                            o("WAWebWaffleLifecycleWamLogger").logSyncdReceived({
                                hasAccessToken: false,
                                hasExistingRow: false,
                                linkState: o("WAWebWamEnumWaffleLifecycleLinkStateType").WAFFLE_LIFECYCLE_LINK_STATE_TYPE.NOT_APPLICABLE,
                                traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.SYNCD_RECEIVED_NO_EXISTING_ROW
                            });
                            yield this.storeLinkState(p, _);
                            yield o("WAWebAccountLinkingNonceFetchAPI").requestNonceFromPrimary();
                        } else if (f.linkState !== o("WAWebAccountLinkingConstants").AccountLinkState.Active) {
                            o("WAWebWaffleLifecycleWamLogger").logSyncdReceived({
                                hasAccessToken: f.accesstoken != null,
                                hasExistingRow: true,
                                linkState: o("WAWebWaffleLifecycleWamLogger").mapLinkStateToWam(f.linkState),
                                traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.SYNCD_RECEIVED_STATE_TRANSITION
                            });
                            yield this.storeLinkState(p, _);
                            yield o("WAWebAccountLinkingNonceFetchAPI").requestNonceFromPrimary();
                        } else {
                            o("WAWebWaffleLifecycleWamLogger").logSyncdReceived({
                                hasAccessToken: f.accesstoken != null,
                                hasExistingRow: true,
                                linkState: o("WAWebWamEnumWaffleLifecycleLinkStateType").WAFFLE_LIFECYCLE_LINK_STATE_TYPE.ACTIVE,
                                traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.SYNCD_RECEIVED_ALREADY_ACTIVE
                            });
                        }
                    }
                }
                return c;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.storeLinkState = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(linkState, linkTimestamp) {
                yield u.createOrUpdateAccountLinkingState({
                    accountLinkKey: o("WAWebAccountLinkingConstants").AccountLinkKey,
                    linkState,
                    linkTimestamp
                });
                yield o("WAWebSubscriptionAgeGating").invalidateSubscriptionAgeVerdict();
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const d = new c;
    l.default = d;
}, 98);