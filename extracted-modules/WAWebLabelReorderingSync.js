__d("WAWebLabelReorderingSync", [
    "WALogger",
    "WAPromiseEach",
    "WAWebBackendApi",
    "WAWebDBLabelsReorder",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebWamLabelSyncTrackingReporter",
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
            return 3;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.LabelReordering;
        };
        r_prototype.applyMutations = function(r) {
            const t = this;
            return o("WAPromiseEach").promiseEach(r, (()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                    try {
                        if (n.operation === "set") {
                            const r = n.value;
                            const a = r?.labelReorderingAction;
                            if (a == null || a.sortedLabelIds == null || Array.isArray(a.sortedLabelIds) === false || a.sortedLabelIds.length === 0) {
                                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "[Label] reordering sync: malformed mutation"
                                ])));
                                const i = yield o("WAWebWamLabelSyncTrackingReporter").generateLabelReorderHash(String(Date.now()));
                                o("WAWebWamLabelSyncTrackingReporter").logLabelSyncEvent(i, o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_TYPE_ENUM.LABEL_REORDER, o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_DIRECTION_TYPE.RECEIVER, o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE.SKIP_EMPTY_LIST, false, Date.now());
                                return o("WAWebSyncdIndexUtils").malformedActionValue(t.collectionName);
                            }
                            yield o("WAWebDBLabelsReorder").updateLabelsSortOrder(a.sortedLabelIds);
                            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[Label] reordering sync: operation successful"
                            ])));
                            const l = yield o("WAWebWamLabelSyncTrackingReporter").generateLabelReorderHash(String(Date.now()));
                            o("WAWebWamLabelSyncTrackingReporter").logLabelSyncEvent(l, o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_TYPE_ENUM.LABEL_REORDER, o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_DIRECTION_TYPE.RECEIVER, o("WAWebWamLabelSyncTrackingReporter").LABEL_SYNC_RESULT_TYPE.SUCCESS, false, Date.now());
                            o("WAWebBackendApi").frontendFireAndForget("reorderLabels", {
                                sortedLabelIds: a.sortedLabelIds
                            });
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        }
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[Label] reordering sync: operation not supported"
                        ])));
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    } catch (e) {
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[Label] reordering sync: operation failed"
                        ]))).verbose();
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Failed
                        };
                    }
                });
                return function(e) {
                    return r.apply(this, arguments);
                };
            })());
        };
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const m = new d;
    l.default = m;
}, 98);