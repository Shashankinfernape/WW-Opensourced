__d("SchedulerFb-Internals_DO_NOT_USE", [
    "Scheduler-dev.classic",
    "Scheduler-profiling.classic",
    "ifRequireable",
    "requestAnimationFramePolyfill"
], function(t, n, r, o, a, i) {
    "use strict";
    if (t.requestAnimationFrame === undefined) {
        t.requestAnimationFrame = n("requestAnimationFramePolyfill");
    }
    let e;
    e = n("Scheduler-profiling.classic");
    a.exports = {
        unstable_ImmediatePriority: e.unstable_ImmediatePriority,
        unstable_UserBlockingPriority: e.unstable_UserBlockingPriority,
        unstable_NormalPriority: e.unstable_NormalPriority,
        unstable_LowPriority: e.unstable_LowPriority,
        unstable_IdlePriority: e.unstable_IdlePriority,
        unstable_getCurrentPriorityLevel: e.unstable_getCurrentPriorityLevel,
        unstable_runWithPriority: e.unstable_runWithPriority,
        unstable_now: e.unstable_now,
        unstable_scheduleCallback: function(r, o, a) {
            const t = n("ifRequireable")("TimeSlice", function(e) {
                return e.guard(o, "unstable_scheduleCallback", {
                    propagationType: e.PropagationType.CONTINUATION,
                    registerCallStack: true
                });
            }, function() {
                return o;
            });
            return e.unstable_scheduleCallback(r, t, a);
        },
        unstable_cancelCallback: function(n) {
            return e.unstable_cancelCallback(n);
        },
        unstable_wrapCallback: function(r) {
            const t = n("ifRequireable")("TimeSlice", function(e) {
                return e.guard(r, "unstable_wrapCallback", {
                    propagationType: e.PropagationType.CONTINUATION,
                    registerCallStack: true
                });
            }, function() {
                return r;
            });
            return e.unstable_wrapCallback(t);
        },
        unstable_pauseExecution: function() {
            return e.unstable_pauseExecution();
        },
        unstable_continueExecution: function() {
            return e.unstable_continueExecution();
        },
        unstable_shouldYield: e.unstable_shouldYield,
        unstable_requestPaint: e.unstable_requestPaint,
        unstable_forceFrameRate: e.unstable_forceFrameRate,
        unstable_Profiling: e.unstable_Profiling
    };
}, null);