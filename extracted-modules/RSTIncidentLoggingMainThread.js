__d("RSTIncidentLoggingMainThread", [
    "Env",
    "InteractionTracingConfigDefault",
    "QPLEvent",
    "RSTConfig",
    "RSTConstants",
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTUtils",
    "RSTUtilsMainThread",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = r("requireDeferred")("LogBrowserCrashReportsLowerRetentionFalcoEvent").__setRef("RSTIncidentLoggingMainThread");
    const c = new Set;
    function d() {
        return c;
    }
    function m(e) {
        const e_unresponsiveEvent = e.unresponsiveEvent;
        const h = e_unresponsiveEvent != null ? Date.now() - e_unresponsiveEvent?.detectTime : 0;
        const y = e_unresponsiveEvent?.lastHeartBeatMetadata;
        const brsid = y?.brsid != null ? String(y.brsid) : null;
        const client_push_phase = y?.cpp ?? null;
        const canonical_route = y?.ccrt ?? null;
        const client_revision = y?.cr ?? null;
        const R = y?.annotations ?? {};
        const L = y?.spans ?? {};
        const reason = e.isRecoverable ? r("RSTConstants").reportReason.recoverable : e_unresponsiveEvent?.incidentType !== r("RSTConstants").incidentType.unexpectedExit ? r("RSTConstants").reportReason.unrecoverable : r("RSTConstants").reportReason.unexpectedExit;
        const k = e_unresponsiveEvent?.traces;
        const I = g(k);
        const { qplMarkerId, tracePolicy } = I;
        const x = f(e_unresponsiveEvent?.lastTrace);
        const rst_annotations = p(R, L, e_unresponsiveEvent);
        return {
            application_name: o("RSTUtilsMainThread").appName,
            reason,
            url: o("RSTUtils").sanitizeURL(y?.url),
            age: String(h),
            brsid,
            qpl_event_marker_id: o("RSTUtils").intToString(qplMarkerId),
            trace_policy: tracePolicy,
            last_qpl_event_marker_id: o("RSTUtils").intToString(x.qplMarkerId),
            last_trace_policy: x.tracePolicy,
            ad_account_id: y?.i2 ?? "0",
            browser_user_agent: navigator.userAgent,
            business_id: y?.i3 ?? "0",
            canonical_route,
            client_push_phase,
            client_revision,
            freeze_time_in_ms: String(e_unresponsiveEvent?.unrecoverLastsForMs ?? 0),
            normalized_component_stack: y?.rcs ?? [],
            session_start_timestamp_in_ms: String(y?.st ?? ""),
            rst_annotations
        };
    }
    function p(e, t, n) {
        const a = [];
        for (const i of Object.keys(e)){
            a.push(`${i}:${e[i]}`);
        }
        const l = n?.detectTime;
        for (const u of Object.keys(t)){
            const d = t[u];
            const m = l != null ? l - d.start : 0;
            a.push(`span:${d.name}:${d.annotation ?? ""}:${m}`);
        }
        a.push(`processingBrsid:${(s || (s = r("Env"))).brsid ?? ""}`);
        _(a, n);
        return a;
    }
    function _(e, t) {
        if (!r("RSTConfig").shouldCollectAdditionalMetadata()) {
            return e;
        }
        const n = t?.lastTrace;
        const o = n?.endTimestamp;
        const a = t?.detectTime;
        if (o != null && a != null) {
            e.push(`msSinceLastInteractionEnds:${a - o}`);
        }
        const i = t ?? {};
        const i_incidentID = i.incidentID;
        if (i_incidentID != null) {
            e.push(`incidentID:${i_incidentID}`);
        }
        if (t?.isFirstUnrecoverable === true) {
            e.push("isFirstUnrecoverable:true");
        }
        if (t?.hasOverlappingResponsiveIndicents === true) {
            e.push("hasOverlappingResponsiveIndicents:true");
        }
        if (t?.hasDecryptionError === true) {
            e.push("hasDecryptionError:true");
        }
        return e;
    }
    function f(t) {
        if (t == null) {
            return {
                qplMarkerId: null,
                tracePolicy: null
            };
        }
        if (t.qplEvent == null) {
            return {
                qplMarkerId: null,
                tracePolicy: null
            };
        }
        const qplMarkerId = (e || (e = o("QPLEvent"))).getMarkerId(t.qplEvent);
        const t_tracePolicy = t.tracePolicy;
        return {
            qplMarkerId,
            tracePolicy: t_tracePolicy
        };
    }
    function g(e) {
        if (e == null) {
            return {
                qplMarkerId: null,
                tracePolicy: null
            };
        }
        let t = 0;
        let n = null;
        e.forEach((e)=>{
            if (!(e?.qplEvent == null || e.tracePolicy === o("InteractionTracingConfigDefault").DEFAULT_TRACING_CONFIG.defaultTracePolicy)) {
                if (e.startTime > t) {
                    t = e.startTime;
                    n = e;
                }
            }
        });
        return f(n);
    }
    function h(unresponsiveEvent, isRecoverable) {
        u.onReady(function({ log }) {
            log(function() {
                return m({
                    unresponsiveEvent,
                    isRecoverable
                });
            });
        });
    }
    function y() {
        if (r("RSTConfig").SHOULD_SAMPLE_RECOVERABLE) {
            o("RSTEventsMessageQueue").subscribe(o("RSTEvents").RSTEvent.RECOVERABLE_UNRESPONSIVENESS, function({ unresponsiveEventRecord }) {
                if (!(unresponsiveEventRecord == null || c.has(unresponsiveEventRecord.incidentID))) {
                    c.add(unresponsiveEventRecord.incidentID);
                    o("RSTUtils").debugLogImportant("logging recoverable unresponsiveness event");
                    h(unresponsiveEventRecord, true);
                }
            });
        }
        o("RSTEventsMessageQueue").subscribe(o("RSTEvents").RSTEvent.CRASH_INCIDENT, function({ unresponsiveEventRecord }) {
            if (unresponsiveEventRecord == null || c.has(unresponsiveEventRecord.incidentID)) {
                o("RSTUtils").debugLogImportant("not logging incident because it was already logged");
                return;
            }
            if (r("RSTConfig").ONE_UNRECOVERABLE_INCIDENT_PER_SESSION && unresponsiveEventRecord.isFirstUnrecoverable !== true) {
                const a = unresponsiveEventRecord.incidentType ?? "";
                o("RSTUtils").debugLogImportant(`not logging unrecoverable ${a} event (because it's not the first incident in the session)`);
                return;
            }
            c.add(unresponsiveEventRecord.incidentID);
            o("RSTUtils").debugLogImportant("logging unrecoverable unresponsiveness event:");
            h(unresponsiveEventRecord, false);
        });
    }
    l.getLoggedIncidentIDs = d;
    l.registerIncidentLogging = y;
}, 98);