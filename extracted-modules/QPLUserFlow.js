__d("QPLUserFlow", [
    "ErrorMetadata",
    "ErrorPubSub",
    "QuickPerformanceLogger",
    "cr:1752405",
    "performance"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c(data, t) {
        if (t === null) {
            return data ?? null;
        }
        const n = data ?? {};
        if (!n.string) {
            n.string = {};
        }
        n.string.uf_debug_info = t;
        return n;
    }
    const d = 1024;
    function m(e) {
        const t = String(e);
        if (t.length > d) {
            return `${t.substring(0, d - 3)}...`;
        }
        return t;
    }
    class p {
        constructor(){
            var t = this;
            n("cr:1752405")();
            (e || (e = r("ErrorPubSub"))).unshiftListener(function(e) {
                if (e.type === "fatal") {
                    const n = t.getActiveFlowIDs();
                    if (n.length !== 0) {
                        const o = new (r("ErrorMetadata"));
                        o.clearEntries();
                        n.forEach((n)=>{
                            (s || (s = r("QuickPerformanceLogger"))).forEachMarkerInstance(n, function(instanceKey, r) {
                                t.addPoint(r, "JAVASCRIPT_ERROR_THROWN", {
                                    data: {
                                        string: {
                                            logging_source: e.loggingSource,
                                            message_format: m(e.messageFormat),
                                            type: e.type
                                        },
                                        string_array: {
                                            message_params: e.messageParams.map(m)
                                        }
                                    },
                                    instanceKey
                                });
                            });
                        });
                        n.forEach((e)=>{
                            o.addEntry("QPL", "ACTIVE_FLOW_ID", e.toString());
                        });
                        const a = o.format();
                        if (e.metadata) {
                            e.metadata = [].concat(e.metadata, a);
                        } else {
                            e.metadata = a;
                        }
                    }
                }
            });
        }
        start(t, { annotations, cancelExisting = false, cancelOnUnload = true, enableE2ETracing = false, instanceKey = 0, joinOptions, onFlowTimeout__doNOTUSE, qplInternalDoNotUseAbsoluteTimeOrigin, timeoutInMs, timestamp, trackedForLoss = true } = {}) {
            if (joinOptions != null) {
                (s || (s = r("QuickPerformanceLogger"))).markerStartForJoin(t, joinOptions.joinId, {
                    instanceKey,
                    cancelExisting,
                    cancelOnUnload,
                    trackedForLoss,
                    type: 2,
                    qplInternalDoNotUseAbsoluteTimeOrigin,
                    monotonicTimestamp: timestamp,
                    absoluteTimeOriginMs: joinOptions.absoluteTimeOriginMs,
                    sourceIsPrimary: joinOptions.sourceIsPrimary,
                    closeSession: joinOptions.closeSession,
                    unreliableSourceClockProcessId: joinOptions.unreliableSourceClockProcessId,
                    timeoutMS: timeoutInMs,
                    onMarkerTimeout__DoNotUse: onFlowTimeout__doNOTUSE,
                    crashResilient: true
                });
            } else {
                (s || (s = r("QuickPerformanceLogger"))).markerStart(t, instanceKey, timestamp, {
                    cancelExisting,
                    cancelOnUnload,
                    trackedForLoss,
                    type: 2,
                    qplInternalDoNotUseAbsoluteTimeOrigin,
                    timeoutMS: timeoutInMs,
                    onMarkerTimeout__DoNotUse: onFlowTimeout__doNOTUSE,
                    enableE2ETracing,
                    crashResilient: true
                });
            }
            if (annotations) {
                (s || (s = r("QuickPerformanceLogger"))).markerAnnotate(t, annotations, {
                    instanceKey
                });
            }
        }
        addAlignmentPointForJoin(t, n, o = {}) {
            const e = o;
            const { instanceKey, requestId, timestamp } = e;
            (s || (s = r("QuickPerformanceLogger"))).addAlignmentPointForJoin(t, n, {
                instanceKey,
                requestId,
                timestamp
            });
        }
        startFromNavStart(t, { annotations, cancelExisting = false, cancelOnUnload = true, instanceKey = 0, joinOptions, onFlowTimeout__doNOTUSE, qplInternalDoNotUseConvertToTimeOnServer, timeoutInMs, trackedForLoss = true } = {}) {
            if (joinOptions != null) {
                (s || (s = r("QuickPerformanceLogger"))).markerStartForJoinFromNavStart(t, joinOptions.joinId, {
                    instanceKey,
                    cancelExisting,
                    cancelOnUnload,
                    trackedForLoss,
                    type: 2,
                    qplInternalDoNotUseConvertToTimeOnServer,
                    absoluteTimeOriginMs: joinOptions.absoluteTimeOriginMs,
                    sourceIsPrimary: joinOptions.sourceIsPrimary,
                    closeSession: joinOptions.closeSession,
                    unreliableSourceClockProcessId: joinOptions.unreliableSourceClockProcessId,
                    timeoutMS: timeoutInMs,
                    onMarkerTimeout__DoNotUse: onFlowTimeout__doNOTUSE,
                    crashResilient: true
                });
            } else {
                (s || (s = r("QuickPerformanceLogger"))).markerStartFromNavStart(t, instanceKey, {
                    cancelExisting,
                    cancelOnUnload,
                    trackedForLoss,
                    type: 2,
                    qplInternalDoNotUseConvertToTimeOnServer,
                    timeoutMS: timeoutInMs,
                    onMarkerTimeout__DoNotUse: onFlowTimeout__doNOTUSE,
                    crashResilient: true
                });
            }
            if (annotations) {
                (s || (s = r("QuickPerformanceLogger"))).markerAnnotate(t, annotations, {
                    instanceKey
                });
            }
            if (joinOptions?.addAlignmentPoints === true) {
                const requestId = joinOptions?.requestId ?? "default_id";
                const v = (u || (u = r("performance"))) == null ? undefined : (u || (u = r("performance"))).timing.requestStart;
                if (v != null) {
                    this.addAlignmentPointForJoin(t, 0, {
                        instanceKey,
                        requestId,
                        timestamp: v
                    });
                }
                const S = (u || (u = r("performance"))) == null ? undefined : (u || (u = r("performance"))).timing.responseEnd;
                if (S != null) {
                    this.addAlignmentPointForJoin(t, 3, {
                        instanceKey,
                        requestId,
                        timestamp: S
                    });
                }
            }
        }
        endSuccess(t, { annotations, instanceKey = 0, partialCompleteForFurtherJoin = false, timestamp } = {}) {
            this.$1(t, partialCompleteForFurtherJoin === true ? 12524 : 2, instanceKey, annotations, timestamp);
        }
        endFailure(t, n, { annotations, debugInfo, error, instanceKey = 0, timestamp } = {}) {
            this.markError(t, n, {
                debugInfo,
                instanceKey,
                error
            });
            this.$1(t, 3, instanceKey, annotations, timestamp);
        }
        endValidationFailure_DO_NOT_USE(t, { annotations, debugInfo, instanceKey = 0, timestamp } = {}) {
            this.markError(t, "validation_failed", {
                debugInfo,
                instanceKey
            });
            this.$1(t, 7952, instanceKey, annotations, timestamp);
        }
        endTimeout(t, { instanceKey = 0, annotations, timestamp = (s || (s = r("QuickPerformanceLogger"))).currentTimestamp() } = {}) {
            this.$1(t, 113, instanceKey, annotations, timestamp);
        }
        endCancel(t, { instanceKey = 0, cancelReason = 4, annotations, timestamp } = {}) {
            this.$1(t, cancelReason, instanceKey, annotations, timestamp);
        }
        $1(t, n, instanceKey, a, i = (s || (s = r("QuickPerformanceLogger"))).currentTimestamp()) {
            if (a) {
                (s || (s = r("QuickPerformanceLogger"))).markerAnnotate(t, a, {
                    instanceKey
                });
            }
            (s || (s = r("QuickPerformanceLogger"))).markerEnd(t, n, instanceKey, i);
        }
        addAnnotations(t, n, { instanceKey: o_instanceKey } = {}) {
            (s || (s = r("QuickPerformanceLogger"))).markerAnnotate(t, n, {
                instanceKey: o_instanceKey
            });
        }
        addPoint(t, n, o = {}) {
            const e = o;
            const { data, debugInfo, instanceKey, timestamp } = e;
            const data_1 = c(data, debugInfo ?? null);
            (s || (s = r("QuickPerformanceLogger"))).markerPoint(t, n, {
                data: data_1,
                instanceKey,
                timestamp
            });
        }
        markError(t, n, o = {}) {
            const a = o;
            const { debugInfo, error, instanceKey } = a;
            (s || (s = r("QuickPerformanceLogger"))).markerAnnotate(t, babelHelpers.extends({}, this.$2(error), {
                bool: {
                    uf_has_error: true
                }
            }), {
                instanceKey
            });
            this.addPoint(t, n, {
                debugInfo,
                instanceKey
            });
        }
        storeBeforeNavigation(t, { instanceKey = 0 } = {}) {
            (s || (s = r("QuickPerformanceLogger"))).markerStoreBeforeNavigation(t, {
                instanceKey
            });
        }
        getActiveFlowIDs() {
            return (s || (s = r("QuickPerformanceLogger"))).getActiveMarkerIds({
                type: 2
            });
        }
        $2(t) {
            if (t == null) {
                return {};
            }
            const r = {
                int: {},
                string: {}
            };
            r.string.uf_error_name = t.name;
            const o = t;
            if (o?.source?.code != null) {
                r.int.uf_graphql_error_code = o?.source.code;
            }
            if (o?.source?.exception?.class != null) {
                r.string.uf_graphql_exception_class = o?.source?.exception?.class;
            }
            return r;
        }
    }
    const _ = new p;
    l.default = _;
}, 98);