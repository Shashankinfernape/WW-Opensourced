__d("InteractionTracingLogger", [
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "reactStack"
    ];
    let s;
    const u = new RegExp(/^late_mutation\/(un)?expected_([0-9]+)$/);
    const c = 4;
    function d(e, t, commitSet, r) {
        e.QuickPerformanceLogger.markerAnnotate(t, {
            int: {
                numReactCommit: commitSet.size
            }
        }, {
            instanceKey: r
        });
    }
    function m(e, t, n, r, o) {
        e.QuickPerformanceLogger.markerAnnotate(t, {
            string_array: {
                [n]: r
            }
        }, {
            instanceKey: o
        });
    }
    function p(e, t, n, __key, o, a) {
        e.QuickPerformanceLogger.markerPoint(t, n, {
            data: __key != null ? {
                string: {
                    __key
                }
            } : null,
            instanceKey: o,
            timestamp: a
        });
    }
    function _(e, t, n, r) {
        e.QuickPerformanceLogger.markerAnnotate(t, n.annotations, {
            instanceKey: r
        });
        for(const o in n.tagSet){
            const a = Array.from(n.tagSet[o]).sort();
            m(e, t, o, a, r);
        }
    }
    function f(t, n, r, markerPoints, a) {
        for(const i in markerPoints){
            let l;
            const s = markerPoints[i];
            const { data, timestamp, type } = s;
            if (!(!t.allowedQPLPointTypes.has(type) || (l = t.qplPointFilterRegex) != null && l.exec(i))) {
                let _ = data;
                if (u.test(i) && i !== "late_mutation/unexpected_1" && data?.reactStack != null) {
                    const f = data.reactStack;
                    const g = babelHelpers.objectWithoutPropertiesLoose(data, e);
                    _ = g;
                }
                p(n, r, i, _ && Object.keys(_).length ? JSON.stringify(_) : undefined, a, timestamp + t.qplBaseTimestamp);
            }
        }
    }
    function g(e, t, n, subSpans, o) {
        for(const a in subSpans){
            let i;
            if (!((i = e.qplPointFilterRegex) != null && i.exec(a))) {
                for(let l = 0; l < subSpans[a].length; l++){
                    const s = subSpans[a][l];
                    const { data, end, start, type } = s;
                    if (e.allowedQPLPointTypes.has(type)) {
                        const f = subSpans[a].length === 1 ? a : `${a}_${l >= c ? "MAX" : l + 1}`;
                        p(t, n, `${f}_start`, undefined, o, start + e.qplBaseTimestamp);
                        p(t, n, `${f}_end`, Object.keys(data).length ? JSON.stringify(data) : undefined, o, end + e.qplBaseTimestamp);
                    }
                }
            }
        }
    }
    function h(e, t, n, r, o) {
        const a = {
            crashResilient: e.crashResilient,
            type: e.qplMarkerType,
            enableE2ETracing: e.qplEnableE2ETracing
        };
        t.QuickPerformanceLogger.markerStart(n, o, r + e.qplBaseTimestamp, a);
    }
    function y(e, t, n, o, a, i) {
        d(t, n, a.commitSet, i);
        _(t, n, a, i);
        f(e, t, n, a.markerPoints, i);
        g(e, t, n, a.subSpans, i);
        const l = e.qplActionMap[o];
        const u = e.qplEndMarkerPointName != null && a.markerPoints[e.qplEndMarkerPointName] != null ? a.markerPoints[e.qplEndMarkerPointName].timestamp : (s || (s = r("performanceNow")))();
        if (o === "DROPPED") {
            t.QuickPerformanceLogger.markerDrop(n, i);
        } else {
            t.QuickPerformanceLogger.markerEnd(n, l, i, u + e.qplBaseTimestamp);
        }
        return l;
    }
    function C(e, t) {
        if (e.annotations.int?.isError === 1) {
            return "FAIL";
        }
        if (e.wasOffline) {
            return "OFFLINE";
        }
        if (e.annotations.string?.cancelType === "dropped") {
            return "DROPPED";
        }
        if (e.annotations.string?.cancelType === "timeout") {
            return "TIMEOUT";
        }
        if (t === true && e.wasCanceled && e.annotations.string?.cancelType === "navigation") {
            return "CANCEL_NAVIGATION";
        }
        if (t === true && e.wasCanceled && e.annotations.string?.cancelType === "background") {
            return "CANCEL_BACKGROUND";
        }
        if (e.wasCanceled || e.annotations.int?.aborted === 1) {
            return "CANCEL";
        }
        return "SUCCESS";
    }
    l.initQPL = h;
    l.logQPL = y;
    l.getTraceStatus = C;
}, 98);