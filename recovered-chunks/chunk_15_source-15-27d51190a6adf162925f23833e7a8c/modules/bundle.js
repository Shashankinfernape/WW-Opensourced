;
__d("IntlVariations", [], function(t, n, r, o, a, i) {
    a.exports = {
        BITMASK_GENDER: 3,
        BITMASK_NUMBER: 28,
        GENDER_FEMALE: 2,
        GENDER_MALE: 1,
        GENDER_UNKNOWN: 3,
        NUMBER_FEW: 20,
        NUMBER_MANY: 12,
        NUMBER_ONE: 4,
        NUMBER_OTHER: 24,
        NUMBER_TWO: 8,
        NUMBER_ZERO: 16
    };
}, null);
__d("QPLAddCometRequestHeaders", [
    "QuickPerformanceLogger",
    "cr:6895"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        n("cr:6895").registerHeaderProvider(function() {
            const t = {};
            const n = (e || (e = r("QuickPerformanceLogger"))).getActiveMarkerIds({
                type: 2
            });
            if (n.length > 0) {
                t["X-FB-QPL-Active-Flows"] = n.sort().join(",");
            }
            const o = e.getActiveE2ETraceIdsAsArray();
            if (o.length > 0) {
                t["X-FB-QPL-Active-E2E-Trace-IDs"] = o.sort().join(",");
            }
            return t;
        });
    }
    l.default = s;
}, 98);
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
__d("escapeRegex", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        return e.replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1");
    }
    a.exports = e;
}, null);
__d("cometAsyncRequestHeaders", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = [];
    function l() {
        return e.reduce((acc, item)=>{
            const n = item();
            return babelHelpers.extends({}, n, acc);
        }, {});
    }
    function s(t) {
        e.push(t);
    }
    i.getHeaders = l;
    i.registerHeaderProvider = s;
}, 66);
__d("WAWebCallLinkODS", [
    "WAWebODS"
], function(t, n, r, o, a, i, l) {
    function e() {
        r("WAWebODS").incr("web.call.call_link.auto_join.recorded");
    }
    function s() {
        r("WAWebODS").incr("web.call.call_link.auto_join.record_duplicate_press");
    }
    function u() {
        r("WAWebODS").incr("web.call.call_link.auto_join.record_failed");
    }
    function c() {
        r("WAWebODS").incr("web.call.call_link.auto_join.pending_at_startup");
    }
    function d() {
        r("WAWebODS").incr("web.call.call_link.auto_join.granted");
    }
    function m() {
        r("WAWebODS").incr("web.call.call_link.auto_join.join_attempted");
    }
    function p(e) {
        e: {
            if (e === "no-consent") {
                r("WAWebODS").incr("web.call.call_link.auto_join.rejected.no_consent");
                break e;
            }
            if (e === "storage-read-failed") {
                r("WAWebODS").incr("web.call.call_link.auto_join.rejected.storage_read_failed");
                break e;
            }
            if (e === "token-mismatch") {
                r("WAWebODS").incr("web.call.call_link.auto_join.rejected.token_mismatch");
                break e;
            }
            if (e === "expired") {
                r("WAWebODS").incr("web.call.call_link.auto_join.rejected.expired");
                break e;
            }
            if (e === "malformed") {
                r("WAWebODS").incr("web.call.call_link.auto_join.rejected.malformed");
                break e;
            }
            if (e === "links-disabled") {
                r("WAWebODS").incr("web.call.call_link.auto_join.rejected.links_disabled");
                break e;
            }
            if (e === "existing-call") {
                r("WAWebODS").incr("web.call.call_link.auto_join.rejected.existing_call");
                break e;
            }
            if (e === "not-call-link-launch") {
                r("WAWebODS").incr("web.call.call_link.auto_join.rejected.not_call_link_launch");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    l.logCallLinkAutoJoinRecordedODS = e;
    l.logCallLinkAutoJoinRecordDuplicatePressODS = s;
    l.logCallLinkAutoJoinRecordFailedODS = u;
    l.logCallLinkAutoJoinPendingAtStartupODS = c;
    l.logCallLinkAutoJoinGrantedODS = d;
    l.logCallLinkAutoJoinJoinAttemptedODS = m;
    l.logCallLinkAutoJoinRejectedODS = p;
}, 98);
__d("WAWebCallLinkAutoJoinConsent", [
    "WALogger",
    "WATimeUtils",
    "WAWebCallLinkODS",
    "WAWebSessionStorage"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = "wa_web_call_link_auto_join_consent";
    const p = 2 * o("WATimeUtils").MINUTE_SECONDS * 1000;
    const _ = ":";
    function f(e) {
        const t = r("WAWebSessionStorage");
        if (t == null) {
            o("WAWebCallLinkODS").logCallLinkAutoJoinRecordFailedODS();
            return;
        }
        const n = T();
        try {
            t.setItem(m, `${Date.now()}${_}${e}`);
        } catch (e) {
            o("WAWebCallLinkODS").logCallLinkAutoJoinRecordFailedODS();
            return;
        }
        if (n) {
            o("WAWebCallLinkODS").logCallLinkAutoJoinRecordDuplicatePressODS();
        }
        o("WAWebCallLinkODS").logCallLinkAutoJoinRecordedODS();
    }
    function g(e, t) {
        if (e === true) {
            o("WAWebCallLinkODS").logCallLinkAutoJoinRejectedODS("links-disabled");
            y(t);
        }
    }
    function h(e, t) {
        if (e === true) {
            o("WAWebCallLinkODS").logCallLinkAutoJoinRejectedODS("existing-call");
            y(t);
        }
    }
    function y(e) {
        if (D(E(), e) !== "token-mismatch") {
            L();
        }
    }
    function C() {
        o("WAWebCallLinkODS").logCallLinkAutoJoinJoinAttemptedODS();
    }
    function b() {
        if (T()) {
            o("WAWebCallLinkODS").logCallLinkAutoJoinPendingAtStartupODS();
        }
    }
    function v() {
        if (T()) {
            o("WAWebCallLinkODS").logCallLinkAutoJoinRejectedODS("not-call-link-launch");
        }
        L();
    }
    function S(e, t) {
        if (e !== true) {
            return false;
        }
        const n = D(E(), t);
        if (n !== "token-mismatch") {
            L();
        }
        if (n != null) {
            R(n);
            o("WAWebCallLinkODS").logCallLinkAutoJoinRejectedODS(n);
            return false;
        }
        o("WAWebCallLinkODS").logCallLinkAutoJoinGrantedODS();
        return true;
    }
    function R(t) {
        e: {
            if (t === "no-consent") {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: auto_join rejected — no Join press recorded in this tab"
                ]))).sendLogs("call-link-auto-join-no-consent");
                break e;
            }
            if (t === "storage-read-failed") {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: auto_join rejected — session storage could not be read"
                ]))).sendLogs("call-link-auto-join-storage-read-failed");
                break e;
            }
            if (t === "token-mismatch") {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: auto_join rejected — recorded Join was for another call link"
                ]))).sendLogs("call-link-auto-join-token-mismatch");
                break e;
            }
            if (t === "expired") {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: auto_join rejected — recorded Join expired"
                ]))).sendLogs("call-link-auto-join-expired");
                break e;
            }
            if (t === "malformed") {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: auto_join rejected — stored Join record unreadable"
                ]))).sendLogs("call-link-auto-join-malformed");
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
        }
    }
    function L() {
        try {
            if (r("WAWebSessionStorage") != null) {
                r("WAWebSessionStorage").removeItem(m);
            }
        } catch (e) {}
    }
    function E() {
        const e = r("WAWebSessionStorage");
        if (e == null) {
            return {
                available: false,
                raw: null
            };
        }
        try {
            return {
                available: true,
                raw: e.getItem(m)
            };
        } catch (e) {
            return {
                available: false,
                raw: null
            };
        }
    }
    function k(e) {
        const t = e.indexOf(_);
        if (t < 0) {
            return null;
        }
        const recordedAt = parseInt(e.slice(0, t), 10);
        if (Number.isNaN(recordedAt)) {
            return null;
        }
        return {
            recordedAt,
            token: e.slice(t + 1)
        };
    }
    function I(recordedAt) {
        const t = Date.now() - recordedAt;
        return t >= 0 && t < p;
    }
    function T() {
        const e = E();
        if (e.raw == null) {
            return false;
        }
        const t = k(e.raw);
        return t != null && I(t.recordedAt);
    }
    function D(e, t) {
        if (!e.available) {
            return "storage-read-failed";
        }
        const e_raw = e.raw;
        if (e_raw == null) {
            return "no-consent";
        }
        const r = k(e_raw);
        if (r == null) {
            return "malformed";
        }
        if (r.token !== t) {
            return "token-mismatch";
        }
        if (I(r.recordedAt)) {
            return null;
        }
        return "expired";
    }
    l.AUTO_JOIN_CONSENT_TTL_MS = p;
    l.recordAutoJoinConsent = f;
    l.dropAutoJoinConsentRefusedByGate = g;
    l.dropAutoJoinConsentRefusedByExistingCall = h;
    l.reportAutoJoinAttempted = C;
    l.reportAutoJoinPendingAtStartup = b;
    l.dropAutoJoinConsentAtLaunch = v;
    l.consumeAutoJoinConsent = S;
    l.clearAutoJoinConsent = L;
}, 98);
__d("WAWebKeyboardRotateFocusModal.react", [
    "WAWebKeyboardConstants",
    "WAWebKeyboardTabUtils",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useRef = s.useRef;
    const d = {
        container: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineEnd: "xtijo5x",
            bottom: "x1ey2m1c",
            insetInlineStart: "x1o0tod",
            $$css: true
        }
    };
    function MComponent(t) {
        const n = o("react-compiler-runtime").c(10);
        const { children, focusType, onBlur, ref, xstyle } = t;
        const p = s_useRef(null);
        const ref_1 = r("useMergeRefs")(ref, p);
        let f;
        if (n[0] !== focusType) {
            const g = (t)=>{
                const p_current = p.current;
                if (p_current) {
                    const n = t.shiftKey ? o("WAWebKeyboardTabUtils").TabDirection.BACKWARD : o("WAWebKeyboardTabUtils").TabDirection.FORWARD;
                    const r = focusType ?? {
                        type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                    };
                    const { customSelector, type } = r;
                    const s = o("WAWebKeyboardTabUtils").getNextTabbableElement(p_current, n, type, undefined, customSelector);
                    if (s != null) {
                        t.preventDefault();
                        s.focus();
                    }
                }
            };
            f = function(t) {
                if (!(t.metaKey || t.ctrlKey) && t.key === o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.TAB) {
                    return g(t);
                }
            };
            n[0] = focusType;
            n[1] = f;
        } else {
            f = n[1];
        }
        const onKeyDown = f;
        let y;
        if (n[2] !== xstyle) {
            y = (e || (e = r("stylex"))).props(d.container, xstyle);
            n[2] = xstyle;
            n[3] = y;
        } else {
            y = n[3];
        }
        let C;
        if (n[4] !== children || n[5] !== onKeyDown || n[6] !== ref_1 || n[7] !== onBlur || n[8] !== y) {
            C = <div {...babelHelpers.extends({
                ref: ref_1
            }, y, {
                onKeyDown,
                tabIndex: -1,
                onBlur,
                children
            })}/>;
            n[4] = children;
            n[5] = onKeyDown;
            n[6] = ref_1;
            n[7] = onBlur;
            n[8] = y;
            n[9] = C;
        } else {
            C = n[9];
        }
        return C;
    }
    l.default = MComponent;
}, 98);
__d("WAWebWorkerSafeBackendApi", [
    "WAWebBackendApi"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        o("WAWebBackendApi").fireAndForgetInternalDoNotUse("workerSafeEvent", e, t);
    }
    function s(e, t) {
        return o("WAWebBackendApi").sendAndReceiveInternalDoNotUse("workerSafeEvent", e, t);
    }
    l.workerSafeFireAndForget = e;
    l.workerSafeSendAndReceive = s;
}, 98);
__d("strPretty", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const t = [];
        for(let n = e.valueOf().trim(), r = true, o = 0; o < n.length; o++){
            const a = n.charAt(o);
            const i = o <= n.length - 2 ? n.charAt(o + 1) : null;
            if (/^[a-zA-Z]$/.test(a)) {
                if (r) {
                    t.push(a.toUpperCase());
                    r = false;
                } else {
                    t.push(a.toLowerCase());
                }
                if (i != null && !/^[_\s]$/.test(i)) {
                    const l = a.toUpperCase() === a;
                    const s = i.toUpperCase() === i && /^[a-zA-Z]$/.test(i);
                    if (!l && s) {
                        r = true;
                        t.push(" ");
                    }
                }
            } else if (/^[0-9]$/.test(a)) {
                t.push(a);
            } else if (/^[!.?]$/.test(a)) {
                t.push(a);
                r = true;
            } else {
                if (i != null) {
                    const u = i.toUpperCase() === i;
                    if (u || /^[_]$/.test(a)) {
                        r = true;
                    }
                }
                t.push(" ");
            }
        }
        return t.join("");
    }
    i.default = e;
}, 66);
__d("snakeCase", [
    "strPretty"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return r("strPretty")(e).replace(/\s/g, "_").toLowerCase();
    }
    l.default = e;
}, 98);
__d("WAWebPrimaryFeatures", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "snakeCase"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d = null;
    function m(t) {
        if (d == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "primaryFeatureEnabled: features not initialized"
            ])));
            return false;
        }
        return d.has(t);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").KEYS.PRIMARY_FEATURES, e);
            const t = d;
            const n = new Set(h(e));
            d = n;
            o("WAWebBackendApi").frontendFireAndForget("setPrimaryFeatures", {
                primaryFeatures: Array.from(d)
            });
            try {
                o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus().triggerPrimaryFeaturesSynced(f(t, n));
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[primary features] primary_features_synced listener failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("primary-features-synced-listener-failed");
            }
            const a = t?.has("favorite_sticker") === true;
            const i = n.has("favorite_sticker");
            if (!a && i) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[primary features] favorite_sticker enabled, check orphans"
                ])));
                yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("checkOrphanFavoriteStickers");
            }
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        const n = e ?? new Set;
        const r = new Set;
        for (const o of t){
            if (!n.has(o)) {
                r.add(o);
            }
        }
        for (const a of n){
            if (!t.has(a)) {
                r.add(a);
            }
        }
        return r;
    }
    function g() {
        let primaryFeatures = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").KEYS.PRIMARY_FEATURES) ?? [];
        primaryFeatures = h(primaryFeatures);
        d = new Set(primaryFeatures);
        o("WAWebBackendApi").frontendFireAndForget("setPrimaryFeatures", {
            primaryFeatures
        });
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "primary features loaded"
        ])));
    }
    function h(e) {
        let a = e;
        if (r("gkx")("26258")) {
            return a;
        }
        const i = new URLSearchParams(window.location.search ?? "");
        const l = (i.get("primary_features_enabled") ?? "").split(",").map((e)=>r("snakeCase")(e));
        a = Array.from(new Set([].concat(a, l)));
        const s = new Set((i.get("primary_features_disabled") ?? "").split(",").map((e)=>r("snakeCase")(e)));
        a = a.filter((e)=>!s.has(e));
        return a;
    }
    l.primaryFeatureEnabled = m;
    l.setPrimaryFeatures = p;
    l.loadPrimaryFeatures = g;
}, 98);
__d("WAWebUserPrefsVoip", [
    "WATimeUtils",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    const e = "calls_tab_last_seen";
    const s = "selected_audio_input_device";
    const u = "selected_audio_output_device";
    const c = "selected_video_input_device";
    const d = "last_call_rating_time";
    const m = "sctp_prewarm_slow";
    const p = -1;
    function _() {
        const t = r("WAWebUserPrefsStore").get(e);
        if (typeof t === "number") {
            return t;
        }
        return 0;
    }
    function f() {
        const t = o("WATimeUtils").unixTime();
        r("WAWebUserPrefsStore").set(e, t);
    }
    function g() {
        const e = r("WAWebUserPrefsStore").get(s);
        if (typeof e === "string") {
            return e;
        }
        return null;
    }
    function h(e) {
        r("WAWebUserPrefsStore").set(s, e);
    }
    function y() {
        const e = r("WAWebUserPrefsStore").get(u);
        if (typeof e === "string") {
            return e;
        }
        return null;
    }
    function C(e) {
        r("WAWebUserPrefsStore").set(u, e);
    }
    function b() {
        const e = r("WAWebUserPrefsStore").get(c);
        if (typeof e === "string") {
            return e;
        }
        return null;
    }
    function v(e) {
        r("WAWebUserPrefsStore").set(c, e);
    }
    let S = null;
    function R() {
        return S;
    }
    function L(e) {
        S = e;
    }
    function E() {
        S = null;
    }
    let k = null;
    function I() {
        return k;
    }
    function T(e) {
        k = e;
    }
    function D() {
        k = null;
    }
    function x() {
        const e = r("WAWebUserPrefsStore").get(d);
        if (typeof e === "number") {
            return e;
        }
        return null;
    }
    function $(e) {
        r("WAWebUserPrefsStore").set(d, e);
    }
    function P() {
        const e = r("WAWebUserPrefsStore").get(m);
        if (e == null || typeof e !== "object" || typeof e.ms !== "number" || typeof e.at !== "number") {
            return null;
        }
        return {
            ms: e.ms,
            at: e.at
        };
    }
    function N(e) {
        const t = {
            ms: Math.round(e),
            at: o("WATimeUtils").unixTime()
        };
        r("WAWebUserPrefsStore").set(m, t);
    }
    l.SCTP_PREWARM_FAILED_MS = p;
    l.getCallsTabLastSeenTimestamp = _;
    l.setCallsTabLastSeenTimestamp = f;
    l.getSelectedAudioInputDevice = g;
    l.setSelectedAudioInputDevice = h;
    l.getSelectedAudioOutputDevice = y;
    l.setSelectedAudioOutputDevice = C;
    l.getSelectedVideoInputDevice = b;
    l.setSelectedVideoInputDevice = v;
    l.getLandingPageVideoDeviceId = R;
    l.setLandingPageVideoDeviceId = L;
    l.clearLandingPageVideoDeviceId = E;
    l.getLandingPageColorIndex = I;
    l.saveLandingPageColorIndex = T;
    l.clearLandingPageColorIndex = D;
    l.getLastCallRatingTime = x;
    l.setLastCallRatingTime = $;
    l.getSctpPrewarmSlowRecord = P;
    l.markSctpPrewarmSlow = N;
}, 98);
__d("WAWebVoipGroupCallAccentColors", [
    "WAWebUserPrefsVoip"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "",
        "#06CF9C",
        "#53BDEB",
        "#E26AB6",
        "#A5B337",
        "#FC9775",
        "#53A6FD",
        "#FFB938",
        "#25D366",
        "#A791FF",
        "#FB5061",
        "#7F66FF",
        "#42C7B8",
        "#FF72A1",
        "#D88DEB",
        "#FA6533",
        "#02A698",
        "#FFD279"
    ];
    function s() {
        const t = o("WAWebUserPrefsVoip").getLandingPageColorIndex();
        if (t != null && t >= 1 && t < e.length) {
            return e[t];
        }
        return null;
    }
    l.GROUP_CALL_DARK_COLORS = e;
    l.getLandingPageAccentColor = s;
}, 98);
__d("WAWebLinkDeviceScreenPrimaryButton.react", [
    "WAWebFlex.react",
    "WAWebUnstyledButton.react",
    "WDSButton.react",
    "WDSPaddings.stylex",
    "WDSThemes",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        paddingBlock10: {
            paddingTop: "x889kno",
            paddingBottom: "x1a8lsjc",
            $$css: true
        },
        paddingInlineStart14: {
            paddingInlineStart: "x1onr9mi",
            $$css: true
        }
    };
    const d = {
        button: {
            color: "xowvryd",
            fontWeight: "xk50ysn",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x1ipd3cv",
            borderInlineEndColor: "xdx94on",
            borderBottomColor: "xqutoja",
            borderInlineStartColor: "xsiszko",
            borderStartStartRadius: "x17m9png",
            borderStartEndRadius: "x91sizk",
            borderEndEndRadius: "x1vva9xg",
            borderEndStartRadius: "x1jfkl46",
            fontSize: "x1jchvi3",
            lineHeight: "x1d3mw78",
            height: "xdd8jsf",
            minWidth: "x1wfn8jh",
            whiteSpace: "x126k92a",
            backgroundColor: "xq4q3us",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            position: "x1n2onr6",
            zIndex: "x1vjfegm",
            $$css: true
        },
        buttonDisabled: {
            backgroundColor: "x12hhv0b",
            cursor: "x1h6gzvc",
            color: "x1ur0v9m",
            borderTopStyle: "x1ejq31n",
            borderInlineEndStyle: "x18oe1m7",
            borderBottomStyle: "x1sy0etr",
            borderInlineStartStyle: "xstzfhl",
            $$css: true
        },
        buttonAnimations: {
            transition: "xeh1a47",
            color: "xowvryd xmp5vt6",
            backgroundColor: "xq4q3us x19qpkoy",
            transitionDelay: "xine9no",
            outline: "xdfradd",
            outlineOffset: "x12ijfkc",
            $$css: true
        },
        sweepBase: {
            position: "x10l6tqk",
            zIndex: "x8knxv4",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            transformOrigin: "x1g0ag68",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            transition: "x1f4dtem",
            $$css: true
        },
        sweepFixedSize: {
            minHeight: "x1u74lcz",
            minWidth: "xajigtk",
            transform: "xyz1g3t x1y3a7h5",
            $$css: true
        },
        sweepFullWidth: {
            width: "xh8yej3",
            aspectRatio: "x1y5e3q9",
            transform: "x1ww78zk xet2qw0",
            $$css: true
        },
        sweepLight: {
            backgroundColor: "x37n5ga",
            $$css: true
        },
        sweepDark: {
            backgroundColor: "xb1i3fl",
            $$css: true
        },
        buttonAnimationsDarkSurface: {
            transition: "xeh1a47",
            color: "xowvryd x1i44hl6",
            backgroundColor: "xq4q3us xl29h7w",
            transitionDelay: "xine9no",
            outline: "xdfradd",
            outlineOffset: "x12ijfkc",
            $$css: true
        },
        iconSpacing: {
            marginTop: "x1kgmq87",
            letterSpacing: "x72az59",
            $$css: true
        },
        horizontalSpace: {
            width: "x1tdqgrh",
            $$css: true
        }
    };
    function m(e, t) {
        return [
            d.sweepBase,
            t ? d.sweepFullWidth : d.sweepFixedSize,
            e ? d.sweepDark : d.sweepLight
        ];
    }
    function PComponent(t) {
        const n = o("react-compiler-runtime").c(33);
        const { animate, disabled, hostSurface, icon, onClick, testId, text, theme, useFullWidthSweep, xstyle } = t;
        const C = animate === undefined ? true : animate;
        const disabled_1 = disabled === undefined ? false : disabled;
        const v = hostSurface === undefined ? "default" : hostSurface;
        const S = theme === undefined ? "default" : theme;
        const R = useFullWidthSweep === undefined ? false : useFullWidthSweep;
        if (S === "wds") {
            const L = disabled_1 && v === "elevated" && o("WDSThemes").WDSLightTheme;
            let E;
            if (n[0] !== L) {
                E = [
                    d.horizontalSpace,
                    L
                ];
                n[0] = L;
                n[1] = E;
            } else {
                E = n[1];
            }
            const k = E;
            let onPress;
            if (n[2] !== onClick) {
                onPress = function() {
                    onClick();
                };
                n[2] = onClick;
                n[3] = onPress;
            } else {
                onPress = n[3];
            }
            let T;
            if (n[4] !== disabled_1 || n[5] !== onPress || n[6] !== testId || n[7] !== text || n[8] !== k) {
                const Component = r("WDSButton.react");
                T = <Component label={text} variant="filled" disabled={disabled_1} testid={testId} onPress={onPress} widthMode="fit" xstyle={k}/>;
                n[4] = disabled_1;
                n[5] = onPress;
                n[6] = testId;
                n[7] = text;
                n[8] = k;
                n[9] = T;
            } else {
                T = n[9];
            }
            return T;
        }
        const D = S === "dark-surface";
        const x = D ? d.buttonAnimationsDarkSurface : d.buttonAnimations;
        let $;
        if (n[10] !== C || n[11] !== x || n[12] !== disabled_1 || n[13] !== icon || n[14] !== D || n[15] !== onClick || n[16] !== testId || n[17] !== text || n[18] !== R || n[19] !== xstyle) {
            const P = m(D, R);
            let N;
            if (n[21] === Symbol.for("react.memo_cache_sentinel")) {
                N = {
                    "x-default-marker": "x-default-marker",
                    $$css: true
                };
                n[21] = N;
            } else {
                N = n[21];
            }
            const M = !disabled_1 && C && x;
            const w = disabled_1 && d.buttonDisabled;
            let A;
            if (n[22] !== M || n[23] !== w || n[24] !== xstyle) {
                A = [
                    N,
                    d.button,
                    M,
                    w,
                    c.paddingBlock10,
                    o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
                    xstyle
                ];
                n[22] = M;
                n[23] = w;
                n[24] = xstyle;
                n[25] = A;
            } else {
                A = n[25];
            }
            let F;
            if (n[26] !== text) {
                const Component = o("WAWebFlex.react").FlexItem;
                F = <Component>{text}</Component>;
                n[26] = text;
                n[27] = F;
            } else {
                F = n[27];
            }
            let O;
            if (n[28] !== icon) {
                const Component = o("WAWebFlex.react").FlexItem;
                O = icon != null && <Component xstyle={[
                    c.paddingInlineStart14,
                    d.iconSpacing
                ]}>{icon}</Component>;
                n[28] = icon;
                n[29] = O;
            } else {
                O = n[29];
            }
            let B;
            if (n[30] !== F || n[31] !== O) {
                const Component = o("WAWebFlex.react").FlexRow;
                B = <Component align="center" justify="center">{F}{O}</Component>;
                n[30] = F;
                n[31] = O;
                n[32] = B;
            } else {
                B = n[32];
            }
            const Component = r("WAWebUnstyledButton.react");
            $ = <Component testid={testId} xstyle={A} onClick={onClick} disabled={disabled_1}>{B}{C && !disabled_1 && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props.apply(e || (e = r("stylex")), P))}/>}</Component>;
            n[10] = C;
            n[11] = x;
            n[12] = disabled_1;
            n[13] = icon;
            n[14] = D;
            n[15] = onClick;
            n[16] = testId;
            n[17] = text;
            n[18] = R;
            n[19] = xstyle;
            n[20] = $;
        } else {
            $ = n[20];
        }
        return $;
    }
    l.default = PComponent;
}, 98);
__d("InlineFbtResultImplComet", [
    "FBLogger",
    "FbtHooks",
    "FbtReactUtil",
    "FbtResultBase",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    function CComponent({ content, hash, inlineMode, translation }) {
        if (hash == null) {
            r("FBLogger")("internationalization").mustfix('Fbt string hash should not be null for translated string "%s" [inlineMode=%s]', translation, inlineMode);
        }
        return <span data-intl-hash={hash} data-intl-translation={translation} data-intl-trid="">{content}</span>;
    }
    CComponent.displayName = `${CComponent.name} [from ${i.id}]`;
    const d = ((t)=>{
        function n(content, inlineMode, translation, hash) {
            let s;
            s = t.call(this, content, (e || (e = r("FbtHooks"))).getErrorListener({
                hash,
                translation
            })) || this;
            s.$$typeof = o("FbtReactUtil").REACT_ELEMENT_TYPE;
            s.key = null;
            s.ref = null;
            s.type = CComponent;
            s.props = {
                content,
                hash,
                inlineMode,
                translation
            };
            return s;
        }
        babelHelpers.inheritsLoose(n, t);
        return n;
    })(r("FbtResultBase"));
    l.default = d;
}, 98);
__d("WAWebWaWordmarkIcon.react", [
    "WAWebSvgIconHelpers"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebSvgIconHelpers").createWAWebIcon("wa-wordmark", 28, 104, "0 0 104 28", {
        fill: "none"
    }, "m69.56 15.13 2.05-6.26 2.07 6.26zm28.8 3.94c-1.49 0-2.33-1.04-2.33-3.16v-.54c0-1.92.89-3.09 2.42-3.09 1.25 0 2.27.89 2.27 3.35s-.93 3.44-2.36 3.44m-5.55 6.43h3.2v-5.36a3.8 3.8 0 0 0 3.15 1.52c2.98 0 4.84-2.34 4.84-6.12 0-3.77-1.6-5.85-4.62-5.85-1.5 0-2.61.54-3.46 1.67v-1.32h-3.1zm-7.04-6.43c-1.49 0-2.33-1.04-2.33-3.16v-.54c0-1.92.89-3.09 2.42-3.09 1.25 0 2.27.89 2.27 3.35s-.93 3.44-2.36 3.44m-5.55 6.43h3.2v-5.36a3.8 3.8 0 0 0 3.15 1.52c2.98 0 4.84-2.34 4.84-6.12 0-3.77-1.6-5.85-4.62-5.85-1.5 0-2.61.54-3.46 1.67v-1.32h-3.1zm-16.06-4.19h3.41l1.14-3.41h5.81l1.15 3.41h3.52L73.69 5.9h-4zm-5.42.35c3.26 0 4.92-1.34 4.92-3.54S62.62 15 59.64 14.5l-1.4-.24c-1.2-.2-1.58-.58-1.58-1.2 0-.63.48-1.13 1.84-1.13 1.27 0 1.8.47 2 1.68h2.99c-.17-2.57-1.82-3.93-4.99-3.93-2.96 0-4.86 1.28-4.86 3.46s1.27 3.02 4.13 3.5l1.3.21c1.18.2 1.46.63 1.46 1.28 0 .75-.5 1.23-1.86 1.23s-2.14-.52-2.26-1.7h-3.05c.1 2.8 2.16 3.99 5.38 3.99m-8.86-.09c1 0 2.01-.28 2.62-.7v-2.41q-.92.52-1.73.52c-.93 0-1.43-.39-1.43-1.58v-4.86h3.16v-2.5h-3.16v-3.1H46.5v1.73c0 .97-.23 1.38-1.2 1.38h-.85v2.5h1.7v4.97c0 2.61 1 4.06 3.74 4.06m-11.96-2.16c-1.04 0-1.62-.45-1.62-1.25 0-.9.67-1.34 2.22-1.6a5 5 0 0 0 2.06-.7v1.11c0 1.49-1.06 2.44-2.66 2.44m-.82 2.25c1.66 0 2.83-.7 3.74-1.7q.16.8.56 1.35h3.02q-.8-1.27-.78-3.76v-3.6c0-2.68-1.42-4.26-4.8-4.26-2.97 0-4.72 1.23-5.07 3.93h2.92c.17-1.03.8-1.64 2.05-1.64 1.17 0 1.84.48 1.84 1.3s-.5 1.1-2.7 1.42c-2.4.35-4.6 1.21-4.6 3.63 0 2.16 1.53 3.33 3.82 3.33m-15.61-.35h3.2v-6.6c0-.79.19-1.15.66-1.63a2.5 2.5 0 0 1 1.77-.73c1.06 0 1.62.58 1.62 2v6.96h3.2v-7.56c0-2.61-1.3-4.06-3.74-4.06-1.25 0-2.42.4-3.52 1.69V5.89h-3.2zm-17.34 0h3.52l2.55-11.12 2.59 11.12h3.56L20.45 5.9h-3.54l-2.42 11.38-2.59-11.3H8.7L6.07 17.33 3.65 5.89H0z");
    l.WaWordmarkIcon = e;
}, 98);
__d("WAWebMainThreadLogger", [
    "WAWebCrashlog",
    "WAWebLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        o("WAWebLogger").initializeWAWebLogger(o("WAWebCrashlog").sendLogs, o("WAWebLogger").logToFBLoggerLocal);
    }
    l.initializeWAWebMainThreadLogger = e;
}, 98);
__d("WAWebSignUpViaWebRequestEntryPoint", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("$InternalEnum")({
        WEB: 1,
        WWW: 2,
        WINDOWS: 3,
        WEB_MO: 4,
        WWW_MO: 5,
        WINDOWS_START: 6,
        MOBILE_LANDING: 7,
        GUEST_CALLING: 13
    });
    i.WhatsappGrowthInvites_SignUpViaWebRequestEntryPoint = e;
}, 66);
__d("WAXWhatsAppWebRegistrationControllerRouteBuilder", [
    "jsRouteBuilder"
], function(t, n, r, o, a, i, l) {
    const e = r("jsRouteBuilder")("/webreg/sms/", Object.freeze({
        region_hint: [],
        expand_folders: [],
        dl_redirect: false
    }), undefined);
    l.default = e;
}, 98);
__d("WDSToastContainerID", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = "wds-toast-container";
    i.default = e;
}, 66);
__d("WABase64UrlSafe", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        return e.replace(/\//g, "_").replace(/\+/g, "-");
    }
    function l(e) {
        return e.replace(/-/g, "+").replace(/_/g, "/");
    }
    function s(e) {
        const t = atob(e);
        for(var n = t.length, r = new Uint8Array(new ArrayBuffer(n)), o = 0; o < n; o++){
            r[o] = t.charCodeAt(o);
        }
        return r;
    }
    i.urlSafeBase64 = e;
    i.urlSafeBase64ToStandard = l;
    i.getBytesFromBase64 = s;
}, 66);
__d("WAWebCertificateUtils", [
    "JSResourceForInteraction",
    "WAHex",
    "WALogger",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c() {
        return r("JSResourceForInteraction")("pkijs").__setRef("WAWebCertificateUtils").load();
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("JSResourceForInteraction")("asn1js-2.1.1").__setRef("WAWebCertificateUtils").load();
            return e().fromBER;
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const n = f(t);
                const a = yield d();
                const i = a(n.buffer);
                const { offset, result } = i;
                if (offset === -1 || result.error != null && result.error !== "") {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[certificate-utils] Failed to parse CRL DER"
                    ]))).sendLogs("certificate-utils-crl-der-parse-error");
                    return null;
                }
                const p = yield c();
                const _ = p.CertificateRevocationList;
                const g = new _({
                    schema: result
                });
                const h = g.revokedCertificates;
                if (h == null || h.length === 0) {
                    return [];
                }
                const y = [];
                for (const C of h){
                    const v = C.userCertificate?.valueBlock?.valueHex;
                    if (v == null) {
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[certificate-utils] malformed CRL entry, unparseable"
                        ]))).sendLogs("certificate-utils-crl-malformed-entry");
                        return null;
                    }
                    y.push(o("WAHex").toLowerCaseHex(new Uint8Array(v)));
                }
                return y;
            } catch (error) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[certificate-utils] Failed to parse CRL binary"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("certificate-utils-crl-parse-error");
                return null;
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        let t = e;
        if (!e.startsWith("-----BEGIN")) {
            t = atob(e);
        }
        if (t.startsWith("-----BEGIN")) {
            const n = t.replace(/-----BEGIN[^-]*-----/g, "").replace(/-----END[^-]*-----/g, "").replace(/\s/g, "");
            for(var r = atob(n), o = new Uint8Array(r.length), a = 0; a < r.length; a++){
                o[a] = r.charCodeAt(a);
            }
            return o;
        }
        const i = new Uint8Array(t.length);
        for(let l = 0; l < t.length; l++){
            i[l] = t.charCodeAt(l);
        }
        return i;
    }
    l.getPkiJs = c;
    l.getAsn1FromBER = d;
    l.parseCrlSerialNumbers = p;
    l.decodePemOrBase64ToDer = f;
}, 98);
__d("filterNulls", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const t = [];
        for (const n of e){
            if (n != null) {
                t.push(n);
            }
        }
        return t;
    }
    i.default = e;
}, 66);
__d("WAWebIsOfficialClient", [
    "WALogger",
    "WAWebUA",
    "WAWebWamGlobals",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = ()=>{
        const e = typeof self !== "undefined" ? self.navigator : null;
        return !!(e != null && e.webdriver);
    };
    const p = ()=>!(m() || o("WAWebUA").UA.isChrome && /HeadlessChrome/.test(window.navigator.userAgent));
    const _ = ()=>{
        try {
            const t = new Error;
            const n = t.stack;
            const a = n.split("\n").filter((e)=>!!e.trim()).pop();
            if (a == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "A caller is not found ",
                    ""
                ])), n).tags("uc");
                return true;
            }
            if (!a.includes(".whatsapp.com")) {
                if (r("gkx")("26258")) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Caller ",
                        ""
                    ])), a).tags("uc");
                } else {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Caller ",
                        ""
                    ])), a).tags("uc").sendLogs("Unexpectedly detected UC");
                }
                return false;
            }
        } catch (error) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "Cannot analyze UC ",
                ""
            ])), r("getErrorSafe")(error).stack).tags("uc");
        }
        return true;
    };
    const f = "webpackChunkwhatsapp_web_client";
    if (!(f in window)) {
        window[f] = [];
    }
    const g = window[f];
    const h = p();
    let y = h;
    function C() {
        return y;
    }
    if (g != null) {
        Object.defineProperty(window, f, {
            get: function() {
                if (!_()) {
                    y = false;
                    try {
                        o("WAWebWamGlobals").Global.set({
                            ocVersion: 0
                        });
                    } catch (error) {
                        o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "Cannot set ocVersion ",
                            ""
                        ])), r("getErrorSafe")(error).stack).tags("uc");
                    }
                }
                return g;
            }
        });
    }
    function b(e) {
        return !!e.startsWith("BA");
    }
    l.isOfficialClient = h;
    l.getIsOfficialClient = C;
    l.isUnofficialStanzaId = b;
}, 98);
__d("WAWebLogger", [
    "ErrorNormalizeUtils",
    "WATagsLogger",
    "WAWebABProps",
    "WAWebFBLogger",
    "WAWebLogLineSanitizer",
    "WAWebLoggerImpl",
    "WAWebNoop",
    "cr:1106",
    "cr:35483",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("cr:1106") != null ? n("cr:1106") : n("cr:35483");
    function s() {
        return !r("gkx")("26258") || r("gkx")("26259");
    }
    let u;
    let c;
    function d() {
        const e = o("WAWebABProps").getABPropConfigValue("wa_web_console_log_level");
        if (e < 1 || e > 4) {
            return 1000;
        }
        return e;
    }
    function m(e) {
        if (e === "ERROR" || e === "CATCHING") {
            return {
                level: 4,
                consoleFunction: d() <= 4 ? console.error : r("WAWebNoop")
            };
        }
        if (e === "WARN") {
            return {
                level: 3,
                consoleFunction: d() <= 3 ? console.warn : r("WAWebNoop")
            };
        }
        if (e === "COUNT") {
            return {
                level: 2,
                consoleFunction: d() <= 2 ? console.count : r("WAWebNoop")
            };
        }
        if (e === "LOG") {
            return {
                level: 2,
                consoleFunction: d() <= 2 ? console.log : r("WAWebNoop")
            };
        }
        if (e === "DEV_XMPP" || e === "DEV") {
            return {
                level: 1,
                consoleFunction: d() <= 1 ? console.info : r("WAWebNoop")
            };
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function p(t, n, ...a) {
        const r = m(t);
        if (e == null) {
            r.consoleFunction(...[
                n
            ].concat(a));
            return;
        }
        const l = e.getLogFilterPattern();
        if (l == null) {
            r.consoleFunction(...[
                n
            ].concat(a));
            return;
        }
        const s = e.processLogWithContext(t, n, a, r.consoleFunction);
        if (s === "matched") {
            const u = e.formatLogWithHighlight(l, n);
            if (u != null) {
                r.consoleFunction(...[
                    u.format
                ].concat(u.styles, a));
            } else {
                r.consoleFunction(...[
                    n
                ].concat(a));
            }
        } else if (s === "context_after") {
            const c = e.getContextStyle();
            r.consoleFunction(...[
                `%c${n}`,
                c
            ].concat(a));
        } else {
            e.recordFilteredLog(t, n);
        }
    }
    function _(e) {
        if (!r("gkx")("5943")) {
            const t = m(e.level);
            const n = o("WAWebLoggerImpl").Logger.log(t.level)(...[
                e.template
            ].concat(e.expressions));
            if (s()) {
                p(e.level, n);
            }
        }
    }
    function f(e, reason, fileId) {
        const a = e.expressions.find((e)=>e instanceof Error);
        const tags = [];
        if (e.tags != null) {
            tags.push(...e.tags.map((e)=>String(e)));
        }
        if (e.sendLogs?.sampling != null) {
            tags.push("sampling");
        }
        const formatString = e.template.join("%s");
        const sanitizedExpressions = e.expressions.map((e)=>{
            if (e instanceof Error) {
                return "";
            }
            return o("WAWebLogLineSanitizer").sanitizeLine(String(e));
        });
        c({
            reason,
            fileId,
            formatString,
            sanitizedExpressions,
            tags,
            error: a instanceof Error ? a : null
        });
    }
    function g(e) {
        let n = o("WAWebFBLogger").WAWebFBLogger().tags(e.tags);
        if (e.error != null) {
            n = n.catching(e.error);
        } else {
            n = n.blameToPreviousFrame().blameToPreviousFrame();
        }
        if (e.fileId != null) {
            n = n.addMetadata("WA_WEB", "FILE_ID", e.fileId);
        }
        n.mustfix(...[
            `${e.formatString} (${e.reason})`
        ].concat(e.sanitizedExpressions));
    }
    const h = {
        info: function(t, n, r) {
            _(r);
        },
        count: function(t, n, r) {
            _(r);
        },
        debug: function(t, n, r) {
            if (s()) {
                _(r);
            }
        },
        logRestricted: function(t, n, r) {
            if (s()) {
                _(r);
            }
        },
        error: function(t, n, r, o) {
            _(o);
        },
        warn: function(t, n, r) {
            _(r);
        },
        devConsole: function(t, n, o, ...args) {
            if (!r("gkx")("5943") && s()) {
                for(var e = arguments.length, a = new Array(e > 3 ? e - 3 : 0), i = 3; i < e; i++){
                    a[i - 3] = arguments[i];
                }
                p(...[
                    t,
                    `${n} devConsole:`
                ].concat(a));
            }
        },
        sendLogs: function(t) {
            if (!((t.level === "DEV" || t.level === "DEV_XMPP") && r("gkx")("26258"))) {
                const d = m(t.level);
                const _ = t.expressions.find((e)=>e instanceof Error);
                const g = r("ErrorNormalizeUtils").normalizeError(_ ?? r("err")("created for stack trace"));
                const h = _ ? [] : [
                    o("WAWebLoggerImpl").STACK_TRACE_TAG
                ];
                const y = o("WAWebLoggerImpl").Logger.log(d.level, t.verbose, g, false, h)(...[
                    t.template
                ].concat(t.expressions));
                if (s() && !r("gkx")("5943")) {
                    p(t.level, y);
                }
                const C = o("WAWebLoggerImpl").Logger.log(d.level, t.verbose, undefined, true, t.tags)(...[
                    t.template
                ].concat(t.expressions));
                if (s() && !r("gkx")("5943")) {
                    p(t.level, C);
                }
                const b = t.sendLogs?.reason ?? "www_sendlogs_undefined";
                const v = u(b, {
                    sampling: t.sendLogs?.sampling,
                    tags: t.tags,
                    sendLogsType: t.sendLogs?.sendLogsType,
                    separateEmployeeLog: t.sendLogs?.separateEmployeeLog,
                    employeeSampling: t.sendLogs?.employeeSampling
                });
                v.catch((e)=>{});
                if (r("gkx")("16915")) {
                    v.then((e)=>{
                        f(t, b, e);
                    }).catch(()=>{
                        f(t, b, null);
                    });
                }
            }
        }
    };
    function y(e, t) {
        u = e;
        c = t;
        o("WATagsLogger").initializeWaLogger(h);
    }
    l.logToFBLoggerLocal = g;
    l.initializeWAWebLogger = y;
}, 98);
__d("CometErrorCodeExtraHandlers", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = [];
    function l(t) {
        e.push(t);
    }
    function s(t) {
        try {
            e.forEach((e)=>e(t));
        } catch (e) {}
    }
    i.addHandler = l;
    i.executeHandlers = s;
}, 66);
__d("CometErrorOverlay", [
    "ExecutionEnvironment",
    "ReactDOM",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    function c() {
        if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
            const t = document.body;
            if (t == null) {
                return null;
            }
            const n = document.createElement("div");
            t.appendChild(n);
            return n;
        }
        return null;
    }
    function d(t) {
        const n = c();
        if (n != null) {
            const a = function() {
                if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
                    window.setTimeout(function() {
                        i.unmount();
                        n.remove();
                    }, 0);
                }
            };
            var i = o("ReactDOM").createRoot(n, {
                unstable_strictMode: true
            });
            const l = t(a);
            i.render(l);
            return a;
        }
    }
    l.injectComponent = d;
}, 98);
__d("CometExceptionDialog.react", [
    "cr:17519",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "testid"
    ];
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const r = o("react-compiler-runtime").c(6);
        let a;
        let i;
        if (r[0] !== t) {
            i = t.testid;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            r[0] = t;
            r[1] = a;
            r[2] = i;
        } else {
            a = r[1];
            i = r[2];
        }
        const l = i === undefined ? "comet-exception-dialog" : i;
        let s;
        if (r[3] !== a || r[4] !== l) {
            s = u.jsx(n("cr:17519"), babelHelpers.extends({}, a, {
                testid: undefined
            }));
            r[3] = a;
            r[4] = l;
            r[5] = s;
        } else {
            s = r[5];
        }
        return s;
    }
    l.default = c;
}, 98);
__d("CometNoopExceptionDialog.react", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        return null;
    }
    i.default = e;
}, 66);
__d("ServerHTML.react", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "blob"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.elementRef = u.createRef();
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.render = function() {
            const props = this.props;
            const t_blob = props.blob;
            const r = babelHelpers.objectWithoutPropertiesLoose(props, e);
            if (typeof t_blob === "string") {
                return <div {...babelHelpers.extends({}, r, {
                    ref: this.elementRef,
                    children: t_blob
                })}/>;
            }
            return <div {...babelHelpers.extends({}, r, {
                dangerouslySetInnerHTML: t_blob,
                ref: this.elementRef
            })}/>;
        };
        return n;
    })(u.Component);
    l.default = c;
}, 98);
__d("UserMismatchExpected", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = false;
    function l(t) {
        e = t;
    }
    function s() {
        return e;
    }
    i.setIsUserMismatchExpected = l;
    i.getIsUserMismatchExpected = s;
}, 66);
__d("handleCABRedirect", [
    "ConstUriUtils",
    "goForceFullPageRedirectTo"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const n = o("ConstUriUtils").getUri(e)?.addQueryParam("next", location.href);
        r("goForceFullPageRedirectTo")(n ?? "/");
    }
    l.default = e;
}, 98);
__d("handleCheckpointRedirect", [
    "ConstUriUtils",
    "goForceFullPageRedirectTo"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const n = o("ConstUriUtils").getUri(e)?.addQueryParam("next", location.toString());
        r("goForceFullPageRedirectTo")(n ?? "/");
    }
    l.default = e;
}, 98);
__d("handleErrorCodeBasicSideEffects", [
    "errorCode",
    "UserMismatchExpected"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
        if (e === 1357032 && o("UserMismatchExpected").getIsUserMismatchExpected() === true) {
            return true;
        }
        if (e === 1357001 || e === 1357032) {
            window.location.reload(true);
            return true;
        }
        return false;
    }
    l.default = e;
}, 98);
__d("handleCometErrorCodeSideEffects", [
    "errorCode",
    "fbt",
    "CometErrorCodeExtraHandlers",
    "CometErrorOverlay",
    "CometExceptionDialog.react",
    "ServerHTML.react",
    "cr:9610",
    "handleCABRedirect",
    "handleCheckpointRedirect",
    "handleErrorCodeBasicSideEffects",
    "react"
], function(t, n, r, o, a, i, l, s, u) {
    "use strict";
    let e;
    const c = e || (e = o("react"));
    const d = new Set;
    function m(errorSummary) {
        return typeof errorSummary === "object" && errorSummary != null && Object.prototype.hasOwnProperty.call(errorSummary, "__html");
    }
    function p(errorCode, t, n, debugInfo = null) {
        let i = n;
        let errorSummary = t;
        i = c.jsx(r("ServerHTML.react"), {
            blob: i
        });
        if (m(errorSummary)) {
            errorSummary = u._("Something went wrong.");
        }
        o("CometErrorOverlay").injectComponent(function(t) {
            const Component = r("CometExceptionDialog.react");
            return <Component debugInfo={debugInfo} errorCode={errorCode} errorDescription={i} errorSummary={errorSummary} onClose={function() {
                d.delete(errorCode);
                t();
            }} testid={undefined}/>;
        });
    }
    function _(e, t, a, i = null, l = true, s = null) {
        if (!(n("cr:9610") != null && n("cr:9610")(e))) {
            if (!r("handleErrorCodeBasicSideEffects")(e)) {
                if (e === 1357053 && i != null) {
                    r("handleCheckpointRedirect")(i);
                } else if (e === 1357057 && i != null) {
                    r("handleCABRedirect")(i);
                } else if (!d.has(e)) {
                    o("CometErrorCodeExtraHandlers").executeHandlers(e);
                    d.add(e);
                    if (l) {
                        p(e, t, a, s);
                    }
                }
            }
        }
    }
    l.default = _;
}, 226);
__d("WAWebModalManagerImplWrapper.react", [
    "WALogger",
    "WAUpperFirst",
    "WAWebDrawerManagerContext",
    "WAWebFocusTracer",
    "WAWebKeyboardRotateFocusModal.react",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebPopover.react",
    "WAWebUimContext",
    "WAWebUimUie.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "uniqueID",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
    "useWAWebWeakElementRef"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { cloneElement, useRef, useState } = d;
    const f = {
        DEFAULT: "modal",
        NONE: "none"
    };
    const g = "modal";
    const h = "media";
    const y = "alert";
    const C = "support";
    function BComponent(t) {
        let n;
        let a;
        const { contextMenuRef, type } = t;
        const uRef = useRef(null);
        const dRef = useRef(false);
        const h = r("useWAWebWeakElementRef")();
        const y = useState();
        const C = y[0];
        const b = y[1];
        const v = r("useWAWebIsKeyboardUser")();
        const v_isKeyboardUser = v.isKeyboardUser;
        const R = useState(undefined);
        const L = R[0];
        const E = R[1];
        const k = useState(null);
        const I = k[0];
        const T = k[1];
        const D = useState({
            type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        });
        const focusType = D[0];
        const $ = D[1];
        const P = useState(f.DEFAULT);
        const transitionName = P[0];
        const M = P[1];
        const w = useState(undefined);
        const A = w[0];
        const F = w[1];
        const O = useState(false);
        const B = O[0];
        const W = O[1];
        const q = (t)=>{
            const e = t.querySelector('[role="dialog"]');
            if (e instanceof HTMLElement) {
                return e;
            }
            return t;
        };
        const requestFocus_1 = function() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[ModalManager][requestFocus] focus on ",
                " called"
            ])), type);
            if (uRef.current) {
                const t = uRef.current.getElement();
                if (!(!t || t.contains(document.activeElement))) {
                    r("WAWebFocusTracer").focus(q(t));
                }
            }
        };
        const requestFocus = function() {
            if (uRef.current) {
                const e = uRef.current.getElement();
                if (e) {
                    r("WAWebFocusTracer").focus(q(e));
                }
            }
        };
        const H = (t)=>document.getElementById(o("WAWebPopover.react").ANCHOR_PORTAL_ID)?.contains(t) || t.closest('[role="menu"]') != null;
        const G = ()=>{
            if (type !== g) {
                return false;
            }
            let e = false;
            o("WAWebModalManager").ModalManager.existsSupportModal(function(t) {
                e = t;
            });
            return e;
        };
        const z = (t)=>{
            const t_relatedTarget = t.relatedTarget;
            const n = contextMenuRef?.current;
            const r = n ? n.isOpen() : false;
            return C ?? (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[ModalManager][requestFocus]: forceShouldRequestFocus = null"
            ]))), t_relatedTarget instanceof HTMLElement && !t.currentTarget.contains(t_relatedTarget) && !H(t_relatedTarget) && !r && !G() && dRef.current === false);
        };
        const onBlur = function(t) {
            if (z(t)) {
                requestFocus_1();
            }
        };
        const K = function(t, n = {}) {
            h.current = v_isKeyboardUser ? document.activeElement || document.body : null;
            let a = n.transition || f.DEFAULT;
            const i = n.focusType ?? {
                type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
            };
            const s = n;
            const { blockClose, uim } = s;
            if (L) {
                a = f.NONE;
            }
            const p = r("uniqueID")(`ModalManager${type}`);
            let _ = t;
            if (type === g) {
                _ = cloneElement(t, {
                    requestFocus
                });
            }
            dRef.current = false;
            $(i);
            E(_);
            T(p);
            M(a);
            F(uim);
            W(blockClose ?? false);
        };
        const Q = function(t) {
            t(dRef.current === true ? false : !!L);
        };
        const X = function(t) {
            if (L) {
                E(undefined);
                T(null);
                if (t) {
                    M(t);
                }
                dRef.current = true;
                const e = h.current;
                r("WAWebFocusTracer").focus(e instanceof HTMLElement || e instanceof SVGElement ? e : null);
            }
        };
        const Y = (t)=>{
            if (t === I) {
                X();
                o("WAWebModalManager").ModalManager.trigger(o("WAWebModalManager").getCloseEventForType(type));
            }
        };
        const J = function(t) {
            t(uRef.current?.getElement());
        };
        (n = o("useWAWebListener")).useListener((a = o("WAWebModalManager")).ModalManager, `open_${type}`, K);
        n.useListener(a.ModalManager, `exists_${type}`, Q);
        n.useListener(a.ModalManager, `close_${type}`, X);
        n.useListener(a.ModalManager, "get_ref", J);
        n.useListener(a.ModalManager, `set_force_should_request_focus_${type}`, b);
        let Z;
        if (L) {
            const Component = r("WAWebKeyboardRotateFocusModal.react");
            const Component_1 = o("WAWebUimUie.react").UIE;
            Z = <Component_1 key={I} displayName={`Modal${r("WAUpperFirst")(t.type)}`} escapable={!B} ref={uRef} requestFocus={requestFocus_1} requestDismiss={function() {
                return Y(I);
            }}><Component focusType={focusType} onBlur={onBlur}>{L}</Component></Component_1>;
        }
        const Component = r("WAWebUimContext").Consumer;
        const Component_1 = o("WAWebDrawerManagerContext").DrawerManagerGlobalBridgeProvider;
        return <Component_1><Component>{function(t) {
            const Component = r("WAWebVelocityTransitionGroup");
            const Component_1 = r("WAWebUimContext").Provider;
            return <Component_1 value={A || t}><Component transitionName={transitionName}>{Z}</Component></Component_1>;
        }}</Component></Component_1>;
    }
    BComponent.displayName = `${BComponent.name} [from ${i.id}]`;
    l.ModalType = g;
    l.MediaType = h;
    l.AlertType = y;
    l.SupportType = C;
    l.ModalManagerImplWrapper = BComponent;
}, 98);
__d("WDSButtonColorConfig.stylex", [], function(t, n, r, o, a, i, l) {
    const e = {
        pressable: {
            backgroundColor: "x1p8t8ri",
            color: "x1lljey2",
            ":hover::after_backgroundColor": "x1vwxpen",
            $$css: true
        },
        pressableDisabled: {
            opacity: "x1lxidc1",
            $$css: true
        },
        pressableHovered: {
            $$css: true
        },
        pressablePressed: {
            $$css: true
        }
    };
    const s = {
        pressable: {
            backgroundColor: "x1rk1j4g",
            color: "x17t9dm2",
            ":hover::after_backgroundColor": "xw1yv47",
            $$css: true
        },
        pressableDisabled: {
            opacity: "x1lxidc1",
            $$css: true
        },
        pressableHovered: {
            $$css: true
        },
        pressablePressed: {
            $$css: true
        }
    };
    const u = {
        pressable: {
            backgroundColor: "xjbqb8w",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "xnj1f2r",
            borderInlineEndColor: "x2uibgs",
            borderBottomColor: "xkveyfu",
            borderInlineStartColor: "x12llq9",
            color: "xo1mcw5",
            ":hover::after_backgroundColor": "x1wjp2x",
            $$css: true
        },
        pressableDisabled: {
            opacity: "x1lxidc1",
            filter: "x4dje6k",
            $$css: true
        },
        pressableHovered: {
            $$css: true
        },
        pressablePressed: {
            $$css: true
        }
    };
    const c = {
        pressable: {
            backgroundColor: "xjbqb8w",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "xnj1f2r",
            borderInlineEndColor: "x2uibgs",
            borderBottomColor: "xkveyfu",
            borderInlineStartColor: "x12llq9",
            color: "xqnyt8g",
            ":hover::after_backgroundColor": "x4ju2vy",
            $$css: true
        },
        pressableDisabled: {
            opacity: "x1lxidc1",
            filter: "x4dje6k",
            $$css: true
        },
        pressableHovered: {
            $$css: true
        },
        pressablePressed: {
            $$css: true
        }
    };
    const d = {
        pressable: {
            backgroundColor: "xjbqb8w",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x1zfx7y",
            borderInlineEndColor: "x1gj3efs",
            borderBottomColor: "x151wx5t",
            borderInlineStartColor: "xea0m3l",
            color: "x17t9dm2",
            filter: "x15ri80r",
            ":hover::after_backgroundColor": "xw1yv47",
            $$css: true
        },
        pressableDisabled: {
            opacity: "x1lxidc1",
            $$css: true
        },
        pressableHovered: {
            $$css: true
        },
        pressablePressed: {
            $$css: true
        }
    };
    l.WDSButtonFilledMediaColorStyles = e;
    l.WDSButtonTonalMediaColorStyles = s;
    l.WDSButtonOutlineDefaultColorStyles = u;
    l.WDSButtonOutlineDestructiveColorStyles = c;
    l.WDSButtonOutlineMediaColorStyles = d;
}, 98);
__d("WDSButtonFontColorConfig", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
        let r = "contentDefault";
        switch(e){
            case "filled":
                {
                    switch(t){
                        case "default":
                            {
                                r = n ? "contentDisabled" : "contentOnAccent";
                                break;
                            }
                        case "destructive":
                            {
                                r = n ? "contentDisabled" : "contentOnAccent";
                                break;
                            }
                        case "media":
                            {
                                r = "persistentAlwaysBlack";
                                break;
                            }
                    }
                    break;
                }
            case "tonal":
                {
                    switch(t){
                        case "default":
                            {
                                r = "accentEmphasized";
                                break;
                            }
                        case "destructive":
                            {
                                r = "secondaryNegativeEmphasized";
                                break;
                            }
                        case "media":
                            {
                                r = "persistentAlwaysWhite";
                                break;
                            }
                    }
                    break;
                }
            case "outline":
                {
                    switch(t){
                        case "default":
                            {
                                r = "contentActionEmphasized";
                                break;
                            }
                        case "destructive":
                            {
                                r = "secondaryNegativeEmphasized";
                                break;
                            }
                        case "media":
                            {
                                r = "persistentAlwaysWhite";
                                break;
                            }
                    }
                    break;
                }
            case "borderless":
                {
                    switch(t){
                        case "default":
                            {
                                r = "contentActionEmphasized";
                                break;
                            }
                        case "destructive":
                            {
                                r = "secondaryNegativeEmphasized";
                                break;
                            }
                        case "media":
                            {
                                r = "persistentAlwaysWhite";
                                break;
                            }
                    }
                    break;
                }
        }
        return r;
    }
    i.getButtonFontColorStyles = e;
}, 66);
__d("WDSLargeButtonConfig.stylex", [], function(t, n, r, o, a, i, l) {
    const e = {
        content: {
            height: "xnnlda6",
            paddingInlineStart: "x1phvje8",
            paddingInlineEnd: "xcldk2z",
            $$css: true
        },
        item: {
            paddingInlineEnd: "x1nzty39",
            $$css: true
        },
        pressed: {
            $$css: true
        },
        addOnEnd: {
            paddingInlineEnd: "xde1mab",
            $$css: true
        },
        addOnStart: {
            $$css: true
        },
        horizontalContainer: {
            justifyContent: "xl56j7k",
            $$css: true
        },
        children: {
            flexGrow: "x1c4vz4f",
            $$css: true
        }
    };
    const s = e;
    const u = e;
    const c = {
        content: {
            height: "xnnlda6",
            paddingInlineStart: "xdx6fka",
            paddingInlineEnd: "xde1mab",
            $$css: true
        },
        item: {
            paddingInlineEnd: "x1nzty39",
            $$css: true
        },
        pressed: {
            $$css: true
        },
        addOnEnd: {
            paddingInlineEnd: "x1nzty39",
            $$css: true
        },
        addOnStart: {
            $$css: true
        },
        horizontalContainer: {
            justifyContent: "xl56j7k",
            $$css: true
        },
        children: {
            flexGrow: "x1c4vz4f",
            $$css: true
        }
    };
    const d = {
        content: {
            height: "xnnlda6",
            paddingInlineStart: "xdylf7x",
            paddingInlineEnd: "x5s3kwk",
            $$css: true
        },
        item: {
            $$css: true
        },
        pressed: {
            $$css: true
        },
        addOnEnd: {
            $$css: true
        },
        addOnStart: {
            $$css: true
        },
        horizontalContainer: {
            columnGap: "x1s70e7g",
            justifyContent: "xl56j7k",
            $$css: true
        },
        children: {
            flexGrow: "x1c4vz4f",
            textAlign: "x2b8uid",
            $$css: true
        }
    };
    const m = d;
    const p = d;
    const _ = {
        content: {
            height: "xnnlda6",
            paddingInlineEnd: "xvtqlqk",
            paddingInlineStart: "xdx6fka",
            $$css: true
        },
        item: {
            $$css: true
        },
        pressed: {
            $$css: true
        },
        addOnEnd: {
            $$css: true
        },
        addOnStart: {
            $$css: true
        },
        horizontalContainer: {
            columnGap: "x1s70e7g",
            justifyContent: "xl56j7k",
            $$css: true
        },
        children: {
            flexGrow: "x1c4vz4f",
            textAlign: "x2b8uid",
            $$css: true
        }
    };
    const f = {
        content: {
            height: "xnnlda6",
            width: "x15yg21f",
            $$css: true
        },
        item: {
            $$css: true
        },
        pressed: {
            $$css: true
        },
        addOnEnd: {
            $$css: true
        },
        addOnStart: {
            $$css: true
        },
        horizontalContainer: {
            justifyContent: "xl56j7k",
            $$css: true
        },
        children: {
            flexGrow: "x1c4vz4f",
            $$css: true
        }
    };
    const g = f;
    const h = f;
    const y = f;
    const C = {
        content: {
            height: "xnnlda6",
            paddingInlineStart: "x1iw51ew",
            paddingInlineEnd: "xde1mab",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        item: {
            $$css: true
        },
        pressed: {
            $$css: true
        },
        addOnEnd: {
            $$css: true
        },
        addOnStart: {
            $$css: true
        },
        horizontalContainer: {
            justifyContent: "xl56j7k",
            $$css: true
        },
        children: {
            flexGrow: "x1c4vz4f",
            $$css: true
        }
    };
    const b = C;
    const v = C;
    const S = C;
    l.WDSButtonLargeIconAndLabelFilledStyles = e;
    l.WDSButtonLargeIconAndLabelTonalStyles = s;
    l.WDSButtonLargeIconAndLabelOutlineStyles = u;
    l.WDSButtonLargeIconAndLabelBorderlessStyles = c;
    l.WDSButtonLargeLabelOnlyFilledStyles = d;
    l.WDSButtonLargeLabelOnlyTonalStyles = m;
    l.WDSButtonLargeLabelOnlyOutlineStyles = p;
    l.WDSButtonLargeLabelOnlyBorderlessStyles = _;
    l.WDSButtonLargeIconOnlyFilledStyles = f;
    l.WDSButtonLargeIconOnlyTonalStyles = g;
    l.WDSButtonLargeIconOnlyOutlineStyles = h;
    l.WDSButtonLargeIconOnlyBorderlessStyles = y;
    l.WDSButtonLargeIconAndDropdownOnlyFilledStyles = C;
    l.WDSButtonLargeIconAndDropdownOnlyTonalStyles = b;
    l.WDSButtonLargeIconAndDropdownOnlyOutlineStyles = v;
    l.WDSButtonLargeIconAndDropdownOnlyBorderlessStyles = S;
}, 98);
__d("WDSMediumButtonConfig.stylex", [], function(t, n, r, o, a, i, l) {
    const e = {
        content: {
            height: "x1vqgdyp",
            paddingInlineStart: "xdx6fka",
            paddingInlineEnd: "xvtqlqk",
            $$css: true
        },
        item: {
            paddingInlineEnd: "x1nzty39",
            $$css: true
        },
        pressed: {
            $$css: true
        },
        addOnEnd: {
            paddingInlineEnd: "x1nzty39",
            $$css: true
        },
        addOnStart: {
            $$css: true
        },
        horizontalContainer: {
            justifyContent: "xl56j7k",
            $$css: true
        },
        children: {
            flexGrow: "x1c4vz4f",
            $$css: true
        }
    };
    const s = e;
    const u = e;
    const c = {
        content: {
            height: "x1vqgdyp",
            paddingInlineStart: "x1iw51ew",
            paddingInlineEnd: "x1nzty39",
            $$css: true
        },
        item: {
            paddingInlineEnd: "x1nzty39",
            $$css: true
        },
        pressed: {
            $$css: true
        },
        addOnEnd: {
            paddingInlineEnd: "x1uc92m",
            $$css: true
        },
        addOnStart: {
            $$css: true
        },
        horizontalContainer: {
            justifyContent: "xl56j7k",
            $$css: true
        },
        children: {
            flexGrow: "x1c4vz4f",
            $$css: true
        }
    };
    const d = {
        content: {
            height: "x1vqgdyp",
            paddingInlineEnd: "xyo0t3i",
            paddingInlineStart: "xb0esv5",
            $$css: true
        },
        item: {
            $$css: true
        },
        pressed: {
            $$css: true
        },
        addOnEnd: {
            $$css: true
        },
        addOnStart: {
            $$css: true
        },
        horizontalContainer: {
            columnGap: "x1s70e7g",
            justifyContent: "xl56j7k",
            $$css: true
        },
        children: {
            flexGrow: "x1c4vz4f",
            textAlign: "x2b8uid",
            $$css: true
        }
    };
    const m = d;
    const p = d;
    const _ = {
        content: {
            height: "x1vqgdyp",
            paddingInlineEnd: "xvtqlqk",
            paddingInlineStart: "xdx6fka",
            $$css: true
        },
        item: {
            $$css: true
        },
        pressed: {
            $$css: true
        },
        addOnEnd: {
            $$css: true
        },
        addOnStart: {
            $$css: true
        },
        horizontalContainer: {
            columnGap: "x1s70e7g",
            justifyContent: "xl56j7k",
            $$css: true
        },
        children: {
            flexGrow: "x1c4vz4f",
            textAlign: "x2b8uid",
            $$css: true
        }
    };
    const f = {
        content: {
            height: "x1vqgdyp",
            width: "x100vrsf",
            $$css: true
        },
        item: {
            $$css: true
        },
        pressed: {
            $$css: true
        },
        addOnEnd: {
            $$css: true
        },
        addOnStart: {
            $$css: true
        },
        horizontalContainer: {
            justifyContent: "xl56j7k",
            $$css: true
        },
        children: {
            flexGrow: "x1c4vz4f",
            $$css: true
        }
    };
    const g = f;
    const h = f;
    const y = f;
    const C = {
        content: {
            height: "x1vqgdyp",
            paddingInlineStart: "x1iw51ew",
            paddingInlineEnd: "xde1mab",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        item: {
            $$css: true
        },
        pressed: {
            $$css: true
        },
        addOnEnd: {
            $$css: true
        },
        addOnStart: {
            $$css: true
        },
        horizontalContainer: {
            justifyContent: "xl56j7k",
            $$css: true
        },
        children: {
            flexGrow: "x1c4vz4f",
            $$css: true
        }
    };
    const b = C;
    const v = C;
    const S = C;
    l.WDSButtonMediumIconAndLabelFilledStyles = e;
    l.WDSButtonMediumIconAndLabelTonalStyles = s;
    l.WDSButtonMediumIconAndLabelOutlineStyles = u;
    l.WDSButtonMediumIconAndLabelBorderlessStyles = c;
    l.WDSButtonMediumLabelOnlyFilledStyles = d;
    l.WDSButtonMediumLabelOnlyTonalStyles = m;
    l.WDSButtonMediumLabelOnlyOutlineStyles = p;
    l.WDSButtonMediumLabelOnlyBorderlessStyles = _;
    l.WDSButtonMediumIconOnlyFilledStyles = f;
    l.WDSButtonMediumIconOnlyTonalStyles = g;
    l.WDSButtonMediumIconOnlyOutlineStyles = h;
    l.WDSButtonMediumIconOnlyBorderlessStyles = y;
    l.WDSButtonMediumIconAndDropdownOnlyFilledStyles = C;
    l.WDSButtonMediumIconAndDropdownOnlyTonalStyles = b;
    l.WDSButtonMediumIconAndDropdownOnlyOutlineStyles = v;
    l.WDSButtonMediumIconAndDropdownOnlyBorderlessStyles = S;
}, 98);
__d("WDSSmallButtonConfig.stylex", [], function(t, n, r, o, a, i, l) {
    const e = {
        content: {
            height: "x10w6t97",
            paddingInlineStart: "x1iw51ew",
            paddingInlineEnd: "x1nzty39",
            $$css: true
        },
        item: {
            paddingInlineEnd: "x1nzty39",
            $$css: true
        },
        pressed: {
            $$css: true
        },
        addOnEnd: {
            paddingInlineEnd: "x1icxu4v",
            $$css: true
        },
        addOnStart: {
            $$css: true
        },
        horizontalContainer: {
            justifyContent: "xl56j7k",
            $$css: true
        },
        children: {
            flexGrow: "x1c4vz4f",
            $$css: true
        }
    };
    const s = e;
    const u = e;
    const c = e;
    const d = {
        content: {
            height: "x10w6t97",
            paddingInlineStart: "xdx6fka",
            paddingInlineEnd: "xvtqlqk",
            $$css: true
        },
        item: {
            $$css: true
        },
        pressed: {
            $$css: true
        },
        addOnEnd: {
            $$css: true
        },
        addOnStart: {
            $$css: true
        },
        horizontalContainer: {
            justifyContent: "xl56j7k",
            columnGap: "x1s70e7g",
            $$css: true
        },
        children: {
            flexGrow: "x1c4vz4f",
            textAlign: "x2b8uid",
            $$css: true
        }
    };
    const m = d;
    const p = d;
    const _ = {
        content: {
            height: "x10w6t97",
            width: "x1td3qas",
            paddingInlineStart: "xdx6fka",
            paddingInlineEnd: "xvtqlqk",
            $$css: true
        },
        item: {
            $$css: true
        },
        pressed: {
            $$css: true
        },
        addOnEnd: {
            $$css: true
        },
        addOnStart: {
            $$css: true
        },
        horizontalContainer: {
            justifyContent: "xl56j7k",
            columnGap: "x1s70e7g",
            $$css: true
        },
        children: {
            flexGrow: "x1c4vz4f",
            textAlign: "x2b8uid",
            $$css: true
        }
    };
    const f = {
        content: {
            height: "x10w6t97",
            width: "x1td3qas",
            $$css: true
        },
        item: {
            $$css: true
        },
        pressed: {
            $$css: true
        },
        addOnEnd: {
            $$css: true
        },
        addOnStart: {
            $$css: true
        },
        horizontalContainer: {
            justifyContent: "xl56j7k",
            $$css: true
        },
        children: {
            flexGrow: "x1c4vz4f",
            $$css: true
        }
    };
    const g = f;
    const h = f;
    const y = f;
    const C = {
        content: {
            height: "x1vqgdyp",
            paddingInlineStart: "x1iw51ew",
            paddingInlineEnd: "xde1mab",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        item: {
            $$css: true
        },
        pressed: {
            $$css: true
        },
        addOnEnd: {
            $$css: true
        },
        addOnStart: {
            $$css: true
        },
        horizontalContainer: {
            justifyContent: "xl56j7k",
            $$css: true
        },
        children: {
            flexGrow: "x1c4vz4f",
            $$css: true
        }
    };
    const b = C;
    const v = C;
    const S = C;
    l.WDSButtonSmallIconAndLabelFilledStyles = e;
    l.WDSButtonSmallIconAndLabelTonalStyles = s;
    l.WDSButtonSmallIconAndLabelOutlineStyles = u;
    l.WDSButtonSmallIconAndLabelBorderlessStyles = c;
    l.WDSButtonSmallLabelOnlyFilledStyles = d;
    l.WDSButtonSmallLabelOnlyTonalStyles = m;
    l.WDSButtonSmallLabelOnlyOutlineStyles = p;
    l.WDSButtonSmallLabelOnlyBorderlessStyles = _;
    l.WDSButtonSmallIconOnlyFilledStyles = f;
    l.WDSButtonSmallIconOnlyTonalStyles = g;
    l.WDSButtonSmallIconOnlyOutlineStyles = h;
    l.WDSButtonSmallIconOnlyBorderlessStyles = y;
    l.WDSButtonSmallIconAndDropdownOnlyFilledStyles = C;
    l.WDSButtonSmallIconAndDropdownOnlyTonalStyles = b;
    l.WDSButtonSmallIconAndDropdownOnlyOutlineStyles = v;
    l.WDSButtonSmallIconAndDropdownOnlyBorderlessStyles = S;
}, 98);
__d("WAWebBaseJSHaltDetector", [
    "WALogger",
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = "js_halt";
    const d = "clock_change_backwards";
    const m = ((t)=>{
        function n(e, n) {
            let r;
            r = t.call(this) || this;
            r.$BaseJsHaltDetector$p_1 = e;
            r.$BaseJsHaltDetector$p_2 = n;
            return r;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.startDetection = function() {
            const t = this;
            if (this.$BaseJsHaltDetector$p_3 == null) {
                let n = Date.now();
                this.$BaseJsHaltDetector$p_3 = self.setInterval(function() {
                    const e = Date.now();
                    const r = e - n - t.$BaseJsHaltDetector$p_1;
                    if (r > t.$BaseJsHaltDetector$p_2) {
                        t.trigger(c, r);
                    } else if (r < -t.$BaseJsHaltDetector$p_2) {
                        t.trigger(d, r);
                    }
                    n = e;
                }, this.$BaseJsHaltDetector$p_1);
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "JsHaltDetector:detection started"
                ])));
            }
        };
        n_prototype.stopDetection = function() {
            if (this.$BaseJsHaltDetector$p_3 != null) {
                self.clearInterval(this.$BaseJsHaltDetector$p_3);
                this.$BaseJsHaltDetector$p_3 = null;
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "JsHaltDetector:detection stopped"
                ])));
            }
        };
        n_prototype.restartDetection = function() {
            this.stopDetection();
            this.startDetection();
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "JsHaltDetector:detection restarted"
            ])));
        };
        return n;
    })(r("WAWebEventEmitter"));
    l.JS_HALT_EVENT = c;
    l.CLOCK_CHANGE_BACKWARDS_EVENT = d;
    l.BaseJsHaltDetector = m;
}, 98);
__d("WAWebCallUserJourneyGating", [
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebVoipGatingUtils",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return !r("WAWebEnvironment").isWindows && !o("WAWebVoipGatingUtils").isGuestViewer() && r("justknobx")._("4567") && o("WAWebABProps").getABPropConfigValue("enable_web_calling") && o("WAWebABProps").getABPropConfigValue("wa_web_calling_call_user_journey_logging_enabled");
    }
    function s() {
        return e() && o("WAWebABProps").getABPropConfigValue("wa_web_calling_call_user_journey_logging_m2_enabled");
    }
    l.isCallUserJourneyLoggingEnabled = e;
    l.isCallUserJourneyM2Enabled = s;
}, 98);
__d("WAWebJSHaltDetector", [
    "WAWebBaseJSHaltDetector"
], function(t, n, r, o, a, i, l) {
    const e = 3000;
    const s = 10000;
    const u = new (o("WAWebBaseJSHaltDetector")).BaseJsHaltDetector(s, e);
    u.startDetection();
    l.DEFAULT_THRESHOLD = e;
    l.jsHaltDetector = u;
}, 98);
__d("WAWebPageVisibilityRecency", [], function(t, n, r, o, a, i) {
    "use strict";
    const globalThis_document = globalThis.document;
    let l = false;
    let s = -1;
    let u = -1;
    let c = -1;
    function d() {
        const self_performance = self.performance;
        if (!(l || globalThis_document == null || self_performance == null)) {
            l = true;
            if (globalThis_document.visibilityState === "visible") {
                s = self_performance.now();
            } else {
                u = self_performance.now();
            }
            globalThis_document.addEventListener("visibilitychange", g);
        }
    }
    function m() {
        try {
            const atMs = self.performance.now();
            return {
                atMs,
                hiddenForMs: y(atMs),
                msSinceVisible: h(atMs),
                visibility: C()
            };
        } catch (e) {
            return {
                atMs: -1,
                hiddenForMs: -1,
                msSinceVisible: -1,
                visibility: "hidden"
            };
        }
    }
    function p() {
        return h(self.performance.now());
    }
    function _() {
        return c;
    }
    function f(e) {
        if (s < 0 || c < 0) {
            return false;
        }
        return self.performance.now() - s <= e;
    }
    function g() {
        if (globalThis_document != null) {
            const t = self.performance.now();
            if (globalThis_document.visibilityState === "visible") {
                if (u >= 0) {
                    c = t - u;
                }
                s = t;
            } else {
                u = t;
            }
        }
    }
    function h(e) {
        if (s < 0) {
            return -1;
        }
        return e - s;
    }
    function y(atMs) {
        if (globalThis_document?.visibilityState === "visible") {
            return 0;
        }
        if (l) {
            if (u > s) {
                return atMs - u;
            }
            return 0;
        }
        return -1;
    }
    function C() {
        if (globalThis_document?.visibilityState !== "visible") {
            return "hidden";
        }
        if (globalThis_document.hasFocus()) {
            return "visible_focused";
        }
        return "visible_unfocused";
    }
    i.startPageVisibilityRecencyTracking = d;
    i.snapshotPageVisibility = m;
    i.getMsSinceDocumentVisible = p;
    i.getLastHiddenDurationMs = _;
    i.wasDocumentHiddenWithinMs = f;
}, 66);
__d("WDSLoadRobotoVariableFont", [], function(t, n, r, o, a, i) {}, null);
__d("useWAWebStableCallback", [
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useRef } = s;
    function useD(e) {
        const tRef = useRef(e);
        tRef.current = e;
        const n = useCallback(function(...n) {
            return tRef.current?.(...n);
        }, []);
        return n;
    }
    l.default = useD;
}, 98);
__d("ErrorSetup", [
    "fb-error"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = r("fb-error").ErrorSetup;
}, 98);
__d("JavascriptWebErrorFalcoEvent", [
    "FalcoLoggerInternal",
    "getFalcoLogPolicy_DO_NOT_USE"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("getFalcoLogPolicy_DO_NOT_USE")("1828905");
    const s = o("FalcoLoggerInternal").create("javascript_web_error", e);
    l.default = s;
}, 98);
__d("ErrorTransport", [
    "JavascriptWebErrorFalcoEvent"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        r("JavascriptWebErrorFalcoEvent").log(function() {
            return e;
        });
    }
    l.log = e;
}, 98);
__d("FalcoLoggerTransportsDeferred", [
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("requireDeferred")("FalcoLoggerTransports").__setRef("FalcoLoggerTransportsDeferred");
    l.default = e;
}, 98);
__d("WAWebFBLoggerSetup", [
    "Env",
    "ErrorGuard",
    "ErrorSetup",
    "ErrorTransport",
    "JSErrorLoggingConfig",
    "SiteData"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u() {
        r("ErrorSetup").preSetup();
        (e || (e = r("ErrorGuard"))).skipGuardGlobal((s || (s = r("Env"))).nocatch);
        r("ErrorSetup").setup({
            appId: r("JSErrorLoggingConfig").appId,
            client_revision: r("SiteData").client_revision,
            extra: r("JSErrorLoggingConfig").extra,
            loggingFramework: "wa_web",
            projectBlocklist: r("JSErrorLoggingConfig").projectBlocklist,
            report_source: r("JSErrorLoggingConfig").report_source,
            report_source_ref: r("JSErrorLoggingConfig").report_source_ref,
            sample_weight: r("JSErrorLoggingConfig").sampleWeight != null ? r("JSErrorLoggingConfig").sampleWeight : 1
        }, o("ErrorTransport").log);
    }
    l.init = u;
}, 98);
__d("WAWebRobotoVariableFontLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WDSLoadRobotoVariableFont").__setRef("WAWebRobotoVariableFontLoadable").load();
        return e;
    }), "WDSLoadRobotoVariableFont");
    function c() {
        u();
    }
    function useD() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [];
            e[0] = t;
        } else {
            t = e[0];
        }
        useEffect(m, t);
    }
    function m() {
        c();
    }
    l.requireRobotoVariableFont = u;
    l.applyRobotoFont = c;
    l.useApplyRobotoFont = useD;
}, 98);
__d("initWAWebPlatformWebPage", [
    "AnalyticsCoreData",
    "FalcoLoggerInternal",
    "VultureJSGating",
    "WALogger",
    "WAWebABPropsCache",
    "WAWebABPropsWamGlobals",
    "WAWebFBLoggerSetup",
    "WhatsAppWebBanzaiConfig",
    "cr:7426",
    "cr:7507",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c() {
        d();
    }
    function d() {
        if (r("WhatsAppWebBanzaiConfig").disabled) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[app] disabling Banzai"
            ])));
            m();
            o("VultureJSGating").__DO_NOT_USE_DISABLE_VULTURE_JS_LOGGING();
            return;
        }
        if (!r("gkx")("2664")) {
            o("VultureJSGating").__DO_NOT_USE_DISABLE_VULTURE_JS_LOGGING();
        }
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[app] enabling FalcoLoggerTransports"
        ])));
        if (n("cr:7426")) {
            n("cr:7426").adapter.config.known_routes = r("WhatsAppWebBanzaiConfig").known_routes;
        }
        o("WAWebABPropsCache").waitForABPropConfigsReady().then(()=>{
            (u || (u = r("AnalyticsCoreData"))).consent_state = o("WAWebABPropsWamGlobals").getServiceImprovementConsentStateBits();
        });
        if (n("cr:7507") != null) {
            n("cr:7507").onReady(function(e) {
                return e.attach();
            });
        }
        if (r("gkx")("16915")) {
            o("WAWebFBLoggerSetup").init();
        }
    }
    function m() {
        if (n("cr:7426")) {
            n("cr:7426").adapter.config.disabled = true;
        }
    }
    l.default = c;
}, 98);
__d("getReactComponentDisplayName", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const e_displayName = e.displayName;
        return e_displayName ?? e.name ?? "ReactComponent";
    }
    i.default = e;
}, 66);
__d("getReactElementDisplayName", [
    "getReactComponentDisplayName",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        if (e == null) {
            return "#empty";
        }
        if (typeof e === "string" || typeof e === "number" || typeof e === "boolean") {
            return "#text";
        }
        if (typeof e !== "object" || !("type" in e)) {
            return "ReactComponent";
        }
        const e_type = e.type;
        if (e_type == null) {
            return "ReactComponent";
        }
        if (typeof e_type === "string") {
            return e_type;
        }
        return r("getReactComponentDisplayName")(e_type);
    }
    l.default = u;
}, 98);
__d("ErrorBoundary.react", [
    "ErrorPubSub",
    "ErrorSerializer",
    "cr:1645510",
    "getErrorSafe",
    "getReactElementDisplayName",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = ((t)=>{
        function o(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.state = {
                error: null,
                moduleName: d(e.props.children)
            };
            e.suppressReactDefaultErrorLoggingIUnderstandThisWillMakeBugsHarderToFindAndFix = true;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(o, t);
        o.getDerivedStateFromError = function(t) {
            return {
                error: r("getErrorSafe")(t)
            };
        };
        const o_prototype = o.prototype;
        o_prototype.componentDidUpdate = function(t) {
            if (this.state.error && this.props.forceResetErrorCount != null && this.props.forceResetErrorCount !== t.forceResetErrorCount) {
                this.setState({
                    error: null
                });
                return;
            }
        };
        o_prototype.componentDidCatch = function(n, { componentStack }) {
            const { augmentError, context = {}, description = "base", onError, tags } = this.props;
            if (context.messageFormat == null) {
                context.messageFormat = "caught error in module %s (%s)";
                context.messageParams = [
                    this.state.moduleName,
                    description
                ];
            }
            const state = this.state;
            const { error, moduleName } = state;
            if (error != null) {
                r("ErrorSerializer").aggregateError(error, {
                    componentStack,
                    loggingSource: "ERROR_BOUNDARY"
                });
                r("ErrorSerializer").aggregateError(error, context);
                if (typeof augmentError === "function") {
                    augmentError(error);
                }
                error.tags = Array.from(tags ?? []);
                (e || (e = r("ErrorPubSub"))).reportError(error);
                if (typeof onError === "function") {
                    onError(error, moduleName);
                }
            }
        };
        o_prototype.render = function() {
            const state = this.state;
            const { error, moduleName } = state;
            if (error) {
                const a = this.props.fallback;
                if (a != null) {
                    return a(error, moduleName);
                }
                return null;
            }
            if (n("cr:1645510") != null) {
                const i = <>{u.jsx(n("cr:1645510"), {})}{this.props.children}</>;
                return i;
            }
            return this.props.children ?? null;
        };
        return o;
    })(u.PureComponent);
    c.defaultProps = {
        forceResetErrorCount: 0
    };
    function d(children) {
        const t = u.Children.count(children) > 1 ? u.Children.toArray(children)[0] : children;
        return r("getReactElementDisplayName")(t);
    }
    l.default = c;
}, 98);
__d("WAWebSideNavButtonsActivityModel", [
    "$InternalEnum",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatEntryPoint",
    "WAWebChatGetters",
    "WAWebGroupType",
    "WAWebNavBarTypes"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "Chats",
        "Community",
        "Newsletters"
    ]);
    let s = null;
    let u = null;
    const c = new Map([
        [
            e.Chats,
            null
        ],
        [
            e.Newsletters,
            null
        ],
        [
            e.Community,
            null
        ]
    ]);
    function d() {
        return s;
    }
    function m(e) {
        s = e;
    }
    function p() {
        return c.get(e.Chats) ?? null;
    }
    function _(t) {
        c.set(e.Chats, t);
    }
    function f() {
        return c.get(e.Newsletters) ?? null;
    }
    function g(t) {
        c.set(e.Newsletters, t);
    }
    function h(e) {
        u = e;
    }
    function y() {
        return u || o("WAWebChatEntryPoint").ChatEntryPoint.NewslettersTab;
    }
    function C() {
        return c.get(e.Community) ?? null;
    }
    function b(t) {
        c.set(e.Community, t);
    }
    function v(e) {
        if (!(o("WAWebBotUtils").isMetaAiBot(e.id) && o("WAWebBotGating").isAiChatThreadsEnabled())) {
            const t = e.id.toString();
            const n = d();
            if (n == null) {
                _(t);
                return;
            }
            switch(n){
                case o("WAWebNavBarTypes").NavBarItems.Chats:
                    _(t);
                    break;
                case o("WAWebNavBarTypes").NavBarItems.Newsletters:
                    if (o("WAWebChatGetters").getIsNewsletter(e)) {
                        g(t);
                    }
                    break;
                case o("WAWebNavBarTypes").NavBarItems.Communities:
                    if (e.groupType != null) {
                        switch(e.groupType){
                            case o("WAWebGroupType").GroupType.COMMUNITY:
                            case o("WAWebGroupType").GroupType.LINKED_SUBGROUP:
                            case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
                            case o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP:
                                b(t);
                                break;
                            case o("WAWebGroupType").GroupType.DEFAULT:
                                _(t);
                                break;
                        }
                    }
                    break;
                case o("WAWebNavBarTypes").NavBarItems.Archived:
                case o("WAWebNavBarTypes").NavBarItems.Beta:
                case o("WAWebNavBarTypes").NavBarItems.BizTools:
                case o("WAWebNavBarTypes").NavBarItems.AdCreation:
                case o("WAWebNavBarTypes").NavBarItems.Calls:
                case o("WAWebNavBarTypes").NavBarItems.Contacts:
                case o("WAWebNavBarTypes").NavBarItems.Orders:
                case o("WAWebNavBarTypes").NavBarItems.Labels:
                case o("WAWebNavBarTypes").NavBarItems.LockedChats:
                case o("WAWebNavBarTypes").NavBarItems.Starred:
                case o("WAWebNavBarTypes").NavBarItems.Settings:
                case o("WAWebNavBarTypes").NavBarItems.Profile:
                case o("WAWebNavBarTypes").NavBarItems.Status:
                case o("WAWebNavBarTypes").NavBarItems.MediaHub:
                case o("WAWebNavBarTypes").NavBarItems.MetaAI:
                case o("WAWebNavBarTypes").NavBarItems.MeTab:
                case o("WAWebNavBarTypes").NavBarItems.CustomerManager:
                case o("WAWebNavBarTypes").NavBarItems.OrgAdmin:
                case o("WAWebNavBarTypes").NavBarItems.GroupAdmin:
                case o("WAWebNavBarTypes").NavBarItems.ContactsAndGroups:
                    break;
            }
        }
    }
    l.getLastActiveButton = d;
    l.setLastActiveButton = m;
    l.getLastActiveChat = p;
    l.setLastActiveChat = _;
    l.getLastActiveNewsletter = f;
    l.setLastActiveNewsletter = g;
    l.setLastActiveNewsletterEntryPoint = h;
    l.getLastActiveNewsletterEntryPoint = y;
    l.getLastActiveCommunity = C;
    l.setLastActiveCommunity = b;
    l.setLastSideBarActivityBasedOnChat = v;
}, 98);
__d("WAWebVoipDeviceAccessRecoveryGating", [
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebUA"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return !r("WAWebEnvironment").isWindows && o("WAWebABProps").getABPropConfigValue("web_voip_device_access_recovery_enabled") === true;
    }
    function s() {
        return (o("WAWebUA").UA.isBlink || o("WAWebUA").UA.isGecko) && !r("WAWebEnvironment").isWindows && e();
    }
    function u() {
        return o("WAWebUA").UA.isWebkit && e();
    }
    l.isDeviceAccessRecoveryEnabled = e;
    l.canAllowBlockedDeviceDuringCall = s;
    l.isRefusalKeptUntilReload = u;
}, 98);
__d("CometInteractionTracingConfig", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        defaultTracePolicy: "comet.app",
        getMetadata: function() {
            return {};
        },
        navigationCancelsInteractions: true
    };
    i.tracingConfig = e;
}, 66);
__d("CometOfflineTracing", [
    "NetworkStatus"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "sessionOfflineStatusCount";
    let s = 0;
    let u = false;
    function c() {
        if (!u) {
            u = true;
            r("NetworkStatus").onChange(function({ online }) {
                if (!online) {
                    s++;
                }
            });
        }
    }
    function d() {
        return s;
    }
    l.OFFLINE_NETWORK_STATUS_ANNOTATION = e;
    l.initialize = c;
    l.getOfflineCount = d;
}, 98);
__d("CometPassiveRouterRouteTracePolicyContext", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const UContext = s.createContext(function() {});
    l.default = UContext;
}, 98);
__d("useGetCometRouteTracePolicy", [
    "CometPassiveRouterRouteTracePolicyContext",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useContext = (e || (e = o("react"))).useContext;
    function useU() {
        return useContext(r("CometPassiveRouterRouteTracePolicyContext"));
    }
    l.default = useU;
}, 98);
__d("useCometInteractionTracing", [
    "CometAddInlineTiming",
    "CometInteractionTracingConfig",
    "CometOfflineTracing",
    "InteractionTracing",
    "forEachObject",
    "gkx",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useGetCometRouteTracePolicy",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useRef } = s;
    let d = 0;
    function m() {
        return d++;
    }
    function useP(e, t, n, a, i) {
        const l = o("react-compiler-runtime").c(8);
        const s = r("useGetCometRouteTracePolicy")();
        let u;
        if (l[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = m();
            l[0] = u;
        } else {
            u = l[0];
        }
        const dRef = useRef(`${u}`);
        let p;
        if (l[1] !== i || l[2] !== s || l[3] !== t || l[4] !== e || l[5] !== a || l[6] !== n) {
            p = function(u, c, m, p, f, g) {
                const y = g ?? o("CometInteractionTracingConfig").tracingConfig;
                const C = r("uuidv4")();
                const b = p ?? a ?? s() ?? "comet.app";
                let v = `${b}_${dRef.current}${f != null ? `_${f}` : ""}`;
                v = `${b}${f ?? dRef.current}`;
                let S = null;
                r("InteractionTracing").trace(e, function(e) {
                    S = e;
                    const t = r("InteractionTracing").checkAndMarkRevisit(b);
                    const n = r("InteractionTracing").checkAndMarkRevisit(v);
                    e.addMetadata("revisit", t ? 1 : 0);
                    e.addMetadata("is_mobile", r("gkx")("22968"));
                    e.addMetadata("instance_revisit", n ? 1 : 0);
                    if (i != null) {
                        r("forEachObject")(i, function(t, n) {
                            if (n != null && t != null) {
                                e.addMetadata(n, t);
                            }
                        });
                    }
                    e.addAnnotationInt(o("CometOfflineTracing").OFFLINE_NETWORK_STATUS_ANNOTATION, o("CometOfflineTracing").getOfflineCount());
                    e.onComplete(_);
                    u(e);
                }, t, n, b, C, c, m, y);
                return r("nullthrows")(S);
            };
            l[1] = i;
            l[2] = s;
            l[3] = t;
            l[4] = e;
            l[5] = a;
            l[6] = n;
            l[7] = p;
        } else {
            p = l[7];
        }
        return p;
    }
    function _(e) {
        o("CometAddInlineTiming").addServerTags(e.traceId);
    }
    l.default = useP;
}, 98);
__d("WAWebWebTPSharedSessionUtils", [
    "WALogger",
    "WATimeUtils",
    "WAWebSchemaWebTPSharedSession",
    "asyncToGeneratorRuntime",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(sessionId, fileName, fileBuffer) {
            try {
                if (fileBuffer != null) {
                    yield S();
                    const a = yield g();
                    yield y(a);
                }
                const i = o("WATimeUtils").unixTime();
                const l = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable();
                yield l.createOrReplace({
                    sessionId,
                    fileName,
                    expiresAt: o("WATimeUtils").castToUnixTime(i + o("WATimeUtils").DAY_SECONDS),
                    fileBuffer
                });
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[PDF3PBridge] Failed to store shared session: ",
                    ""
                ])), error);
                throw error;
            }
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable();
                const n = yield t.get(e);
                if (!n) {
                    return null;
                }
                const r = o("WATimeUtils").unixTime();
                if (n.expiresAt <= r) {
                    yield t.remove(e);
                    return null;
                }
                return n;
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[PDF3PBridge] Failed to get shared session: ",
                    ""
                ])), error);
                throw error;
            }
        });
        return f.apply(this, arguments);
    }
    function g() {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable();
            const t = o("WATimeUtils").unixTime();
            const n = yield e.betweenCount([
                "expiresAt"
            ], t, Infinity);
            return n;
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = r("justknobx")._("2196");
                const limit = e - t + 1;
                if (limit <= 0) {
                    return;
                }
                const a = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable();
                const i = o("WATimeUtils").unixTime();
                const l = yield a.bulkDeleteRange([
                    "expiresAt"
                ], i, Infinity, {
                    limit
                });
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[PDF3PBridge] Failed to evict sessions: ",
                    ""
                ])), error);
                throw error;
            }
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable();
                yield t.merge(e, {
                    fileBuffer: undefined
                });
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[PDF3PBridge] Failed to clear file buffer: ",
                    ""
                ])), error);
                throw error;
            }
        });
        return v.apply(this, arguments);
    }
    function S() {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const e = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable();
                const t = o("WATimeUtils").unixTime();
                const n = yield e.bulkDeleteRange([
                    "expiresAt"
                ], 0, t);
            } catch (error) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[PDF3PBridge] Failed to remove expired sessions: ",
                    ""
                ])), error);
                throw error;
            }
        });
        return R.apply(this, arguments);
    }
    l.storeWebTPSharedSession = m;
    l.getWebTPSharedSession = _;
    l.clearWebTPSharedSessionFileBuffer = b;
    l.removeExpiredWebTPSharedSessions = S;
}, 98);
__d("WAWebBizBroadcastProDownloadPreparingFileLabel", [
    "fbt"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
        return s._("_j{\"*\":\"Preparing your file \\u2022 {percentage}\\u0025\"}", [
            s._param("percentage", e, [
                0
            ])
        ]);
    }
    l.default = e;
}, 226);
__d("WAWebBizBroadcastProSubscriberDownloadRegistry", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "subscriber_downloads_changed";
    const s = 100;
    const u = new (r("WAWebEventEmitter"));
    const c = new Map;
    function d() {
        return Array.from(c.values());
    }
    function m(e) {
        return c.get(e);
    }
    function p() {
        for (const e of c.values()){
            if (e.status === "preparing") {
                return true;
            }
        }
        return false;
    }
    function _() {
        let t = false;
        for (const n of Array.from(c.values())){
            if (n.status !== "preparing") {
                t = y(n.key) || t;
            }
        }
        if (t) {
            u.trigger(e);
        }
    }
    function f(t) {
        c.set(t.key, t);
        u.trigger(e);
    }
    function g(t, n) {
        const r = c.get(t);
        if (r != null) {
            const o = babelHelpers.extends({}, r, n);
            c.set(t, o);
            if (!C(r, o)) {
                u.trigger(e);
            }
        }
    }
    function h(t) {
        if (y(t)) {
            u.trigger(e);
        }
    }
    function y(e) {
        return c.delete(e);
    }
    function C(e, t) {
        return e.cdnUrl === t.cdnUrl && e.completionPercentage === t.completionPercentage && e.exportId === t.exportId && e.filename === t.filename && e.key === t.key && e.poolName === t.poolName && e.status === t.status;
    }
    function b(e) {
        return Math.floor(Math.min(Math.max(e, 0), s - 1));
    }
    function v(e, t) {
        const o = c.get(e)?.completionPercentage ?? 0;
        return Math.min(Math.max(o, t), s);
    }
    l.SUBSCRIBER_DOWNLOADS_CHANGED = e;
    l.COMPLETE_PERCENTAGE = s;
    l.SubscriberDownloadEmitter = u;
    l.getSubscriberDownloads = d;
    l.getSubscriberDownload = m;
    l.hasPreparingDownload = p;
    l.removeSettledDownloads = _;
    l.putSubscriberDownload = f;
    l.patchSubscriberDownload = g;
    l.removeSubscriberDownload = h;
    l.getPreparingPercentage = b;
    l.clampProgress = v;
}, 98);
__d("WAWebWhatsAppAppIcon.react", [
    "WAWebWaLogoIcon.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = 0.65;
    const d = {
        container: {
            alignItems: "x6s0dn4",
            backgroundColor: "xyp3urf",
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            display: "x78zum5",
            flexShrink: "x2lah0s",
            justifyContent: "xl56j7k",
            $$css: true
        },
        glyph: {
            color: "x17t9dm2",
            $$css: true
        },
        size: function(t) {
            return [
                {
                    height: t != null ? "x16ye13r" : t,
                    width: t != null ? "x5lhr3w" : t,
                    $$css: true
                },
                {
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t),
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        }
    };
    function MComponent(t) {
        const n = o("react-compiler-runtime").c(10);
        const { size, xstyle } = t;
        let l;
        if (n[0] !== size) {
            l = Math.round(size * c);
            n[0] = size;
            n[1] = l;
        } else {
            l = n[1];
        }
        const s = l;
        let m;
        if (n[2] !== size || n[3] !== xstyle) {
            m = (e || (e = r("stylex"))).props(d.container, d.size(size), xstyle);
            n[2] = size;
            n[3] = xstyle;
            n[4] = m;
        } else {
            m = n[4];
        }
        let children;
        if (n[5] !== s) {
            children = u.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
                width: s,
                height: s,
                xstyle: d.glyph
            });
            n[5] = s;
            n[6] = children;
        } else {
            children = n[6];
        }
        let _;
        if (n[7] !== m || n[8] !== children) {
            _ = <span {...babelHelpers.extends({
                "data-testid": "wa-square-icon"
            }, m, {
                children
            })}/>;
            n[7] = m;
            n[8] = children;
            n[9] = _;
        } else {
            _ = n[9];
        }
        return _;
    }
    l.default = MComponent;
}, 98);
__d("WAWebBizBroadcastProDownloadPreparingToast.react", [
    "WAWebBizBroadcastProDownloadPreparingFileLabel",
    "WAWebFlex.react",
    "WDSSpinner.react",
    "WDSText.react",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const size = 20;
    const c = {
        spinner: {
            color: "xowaa7l",
            $$css: true
        }
    };
    function DComponent({ completionPercentage }) {
        const Component = o("WAWebFlex.react").FlexItem;
        const Component_1 = r("WDSText.react");
        const Component_2 = o("WAWebFlex.react").FlexRow;
        return <div aria-busy data-testid="bb_pro_download_progress_card" className="xpip370 x1g83kfv x3qq2k7 x2x8art x1qor8vf xvktan5 x9f619 x193iq5w x16ec9ob x1xrf6ya xscbp6u xdx6fka xyo0t3i xeq5yr9"><Component_2 align="center" gap={8}><Component shrink={0}>{s.jsx(r("WDSSpinner.react"), {
            size,
            xstyle: c.spinner
        })}</Component><Component_1 colorName="contentInverse" testid="bb_pro_download_progress_title" type="Body2Emphasized">{r("WAWebBizBroadcastProDownloadPreparingFileLabel")(completionPercentage)}</Component_1></Component_2></div>;
    }
    DComponent.displayName = `${DComponent.name} [from ${i.id}]`;
    l.default = DComponent;
}, 98);
__d("WAWebBizBroadcastProDownloadProgressCardLayout.stylex", [], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        width: "var(--x1gn2vog)",
        __varGroupHash__: "xt156f9"
    };
    l.downloadProgressCardVariables = e;
}, 98);
__d("WAWebWaLogoIcon.react", [
    "WAWebSvgIconHelpers"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebSvgIconHelpers").createWAWebIcon("wa-logo", 30, 31, "0 0 31 30", {
        fill: "none"
    }, [
        [
            "path",
            {
                fill: "currentColor",
                d: "M30.31 14.32A14.87 14.87 0 0 0 15.54 0h-.07A14.87 14.87 0 0 0 2.41 22L1.1 29.87a.11.11 0 0 0 .11.13h.02l7.79-1.73c2 .96 4.2 1.47 6.44 1.46h.42a14.86 14.86 0 0 0 14.43-15.4Zm-14.5 12.83h-.35a12.3 12.3 0 0 1-5.67-1.38l-.4-.2-5.27 1.24.97-5.34-.22-.38a12.3 12.3 0 0 1 10.25-18.5h.36a12.29 12.29 0 0 1 .34 24.56h-.01Z"
            }
        ],
        [
            "path",
            {
                fill: "currentColor",
                d: "M10.29 7.69a1.37 1.37 0 0 0-.98.44c-.35.36-1.34 1.23-1.4 3.07-.06 1.84 1.23 3.65 1.4 3.9.18.26 2.46 4.23 6.2 5.84 2.2.95 3.17 1.11 3.8 1.11.25 0 .45-.03.65-.04.69-.04 2.24-.83 2.57-1.7.34-.86.36-1.61.28-1.76-.1-.15-.34-.26-.7-.46-.37-.19-2.18-1.15-2.52-1.29a.91.91 0 0 0-.4-.1.55.55 0 0 0-.44.26c-.3.38-1 1.2-1.23 1.43a.55.55 0 0 1-.4.19.97.97 0 0 1-.41-.11 9.52 9.52 0 0 1-2.94-1.96c-.8-.78-1.47-1.68-2-2.66-.2-.38 0-.57.19-.75.19-.18.39-.42.58-.64.16-.18.29-.38.4-.6a.69.69 0 0 0-.02-.66c-.09-.19-.75-2.05-1.07-2.8-.25-.64-.55-.66-.81-.68a8.15 8.15 0 0 0-.72-.03h-.03"
            }
        ]
    ]);
    l.WaLogoIcon = e;
}, 98);
__d("BaseFocusRing.react", [
    "FocusWithinHandler.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        focused: {
            boxShadow: "x18bame2",
            outline: "x1a2a7pz xvetz19",
            $$css: true
        },
        focusedInset: {
            boxShadow: "xpud6h4",
            $$css: true
        },
        unfocused: {
            outline: "x1a2a7pz",
            $$css: true
        }
    };
    function CComponent(e) {
        const t = o("react-compiler-runtime").c(11);
        const { children, focusRingPosition, focusVisibleXStyle, mode, onFocusVisibleChange, suppressFocusRing, testOnly, xstyle } = e;
        const _ = focusRingPosition === undefined ? "default" : focusRingPosition;
        const f = mode === undefined ? "focus-visible" : mode;
        const g = suppressFocusRing === undefined ? false : suppressFocusRing;
        let h;
        if (t[0] !== children || t[1] !== _ || t[2] !== focusVisibleXStyle || t[3] !== f || t[4] !== onFocusVisibleChange || t[5] !== g || t[6] !== xstyle) {
            h = function(t, r) {
                const e = !g && t && (r || f === "focus");
                onFocusVisibleChange?.(r);
                const o = [];
                if (e) {
                    o.push(_ === "inset" ? u.focusedInset : u.focused);
                } else {
                    o.push(u.unfocused);
                }
                return children([].concat(o, [
                    xstyle,
                    e ? focusVisibleXStyle : undefined
                ]));
            };
            t[0] = children;
            t[1] = _;
            t[2] = focusVisibleXStyle;
            t[3] = f;
            t[4] = onFocusVisibleChange;
            t[5] = g;
            t[6] = xstyle;
            t[7] = h;
        } else {
            h = t[7];
        }
        let y;
        if (t[8] !== h || t[9] !== testOnly) {
            const Component = r("FocusWithinHandler.react");
            y = <Component testOnly={testOnly}>{h}</Component>;
            t[8] = h;
            t[9] = testOnly;
            t[10] = y;
        } else {
            y = t[10];
        }
        return y;
    }
    l.default = CComponent;
}, 98);
__d("MetaconfigWebExposureFalcoEvent", [
    "FalcoLoggerInternal",
    "getFalcoLogPolicy_DO_NOT_USE"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("getFalcoLogPolicy_DO_NOT_USE")("7235");
    const s = o("FalcoLoggerInternal").create("metaconfig_web_exposure", e);
    l.default = s;
}, 98);
__d("MetaConfig", [
    "invariant",
    "ExecutionEnvironment",
    "MetaConfigMap",
    "MetaconfigWebExposureFalcoEvent",
    "ODS"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = {};
    const d = {
        _: function(identifier, a) {
            const t = r("MetaConfigMap").get(identifier);
            if (t == null) {
                s(0, 57910, identifier);
            }
            const { log_id, value } = t;
            if (a !== true && log_id != null && c[identifier] !== true) {
                if ((u || (u = r("ExecutionEnvironment"))).isInBrowser) {
                    (e || (e = o("ODS"))).bumpEntityKey(530, "metaconfig.web.exposure", "falco_logger");
                    r("MetaconfigWebExposureFalcoEvent").logImmediately(function() {
                        return {
                            identifier,
                            log_id
                        };
                    });
                }
                c[identifier] = true;
            }
            return value;
        }
    };
    l.default = d;
}, 98);
__d("WDSIconIcChevronRight.react", [
    "WDSSvgIconHelpers"
], function(t, n, r, o, a, i, l) {
    const e = o("WDSSvgIconHelpers").createWDSIcon("ic-chevron-right", 24, 24, "0 0 24 24", {
        fill: "currentColor"
    }, "M12.6 12 8.7 8.1a.95.95 0 0 1-.27-.7c0-.28.09-.52.27-.7a.95.95 0 0 1 .7-.27c.28 0 .52.09.7.27l4.6 4.6c.1.1.17.2.21.32a1.2 1.2 0 0 1 0 .76.88.88 0 0 1-.21.32l-4.6 4.6a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27.95.95 0 0 1-.27-.7c0-.28.09-.52.27-.7l3.9-3.9Z");
    l.default = e;
}, 98);
__d("useWAWebCallbackOnce", [
    "once",
    "react",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const useMemo = (e || (e = o("react"))).useMemo;
    function useU(e, t = []) {
        const n = r("useWAWebStableCallback")(e);
        const o = useMemo(function() {
            return r("once")(n);
        }, [
            n
        ].concat(t));
        return o;
    }
    l.default = useU;
}, 98);
__d("WAWebABPropsWamGlobals", [
    "AnalyticsCoreData",
    "WAWebABProps",
    "WAWebWamGlobals"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 256;
    const u = 512;
    function c() {
        const e = o("WAWebABProps").getABPropConfigValue("service_improvement_opt_out_flag");
        if (e) {
            return s;
        }
        return s + u;
    }
    function d() {
        o("WAWebWamGlobals").Global.set({
            serviceImprovementOptOut: o("WAWebABProps").getABPropConfigValue("service_improvement_opt_out_flag")
        });
        try {
            const t = e || (e = n("AnalyticsCoreData"));
            t.consent_state = c();
        } catch (e) {}
    }
    l.getServiceImprovementConsentStateBits = c;
    l.setAbPropDependingGlobalWamAttributes = d;
}, 98);
__d("useWAWebWeakElementRef", [
    "gkx",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u() {
        const e = useState(c);
        const t = e[0];
        return t;
    }
    function c() {
        return d();
    }
    function d() {
        const e = {
            current: null
        };
        if (!r("gkx")("21924")) {
            return e;
        }
        let t = null;
        Object.defineProperty(e, "current", {
            get: function() {
                const n = t?.deref();
                if (n?.isConnected === true) {
                    return n;
                }
                return null;
            },
            set: function(n) {
                t = n == null ? null : new WeakRef(n);
            }
        });
        return e;
    }
    l.default = u;
}, 98);
__d("shallowEqual", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);
    function l(e, t) {
        if (e === t) {
            return e !== 0 || t !== 0 || 1 / e === 1 / t;
        }
        return e !== e && t !== t;
    }
    function s(t, n) {
        if (l(t, n)) {
            return true;
        }
        if (typeof t !== "object" || t === null || typeof n !== "object" || n === null) {
            return false;
        }
        const r = Object.keys(t);
        const o = Object.keys(n);
        if (r.length !== o.length) {
            return false;
        }
        for(let a = 0; a < r.length; a++){
            if (!e(n, r[a]) || !l(t[r[a]], n[r[a]])) {
                return false;
            }
        }
        return true;
    }
    i.default = s;
}, 66);
__d("WAWebAeaRollout", [
    "gkx"
], function(t, n, r, o, a, i, l) {
    function e() {
        return r("gkx")("27511");
    }
    function s() {
        return e() && r("gkx")("2786");
    }
    function u() {
        return e() && r("gkx")("3203");
    }
    l.isAeaMonitoringEnabled = e;
    l.isAeaBackfillEnabled = s;
    l.isAeaEnforcementEnabled = u;
}, 98);
__d("forEachObject", [], function(t, n, r, o, a, i) {
    "use strict";
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    function l(t, n, r) {
        for(const o in t){
            const a = o;
            if (hasOwnProperty.call(t, a)) {
                n.call(r, t[a], a, t);
            }
        }
    }
    i.default = l;
}, 66);
__d("isStringNullOrEmpty", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        return e == null || e === "";
    }
    i.default = e;
}, 66);
__d("useEmptyFunction", [], function(t, n, r, o, a, i) {
    "use strict";
    function e() {}
    i.default = e;
}, 66);
