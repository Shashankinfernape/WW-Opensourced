__d("JSScheduler", [
    "SchedulerFb-Internals_DO_NOT_USE"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    const priorities = {
        unstable_Idle: (e = n("SchedulerFb-Internals_DO_NOT_USE")).unstable_IdlePriority,
        unstable_Immediate: e.unstable_ImmediatePriority,
        unstable_Low: e.unstable_LowPriority,
        unstable_Normal: e.unstable_NormalPriority,
        unstable_UserBlocking: e.unstable_UserBlockingPriority
    };
    let s = false;
    const { unstable_scheduleCallback, unstable_cancelCallback } = e;
    var d = {
        cancelCallback: function(t) {
            unstable_cancelCallback(t);
        },
        cancelDelayedCallback_DO_NOT_USE: function(t) {
            return unstable_cancelCallback(t);
        },
        defer: function(t) {
            const e = d.getCurrentPriorityLevel();
            return unstable_scheduleCallback(e, t);
        },
        deferUserBlockingRunAtCurrentPri_DO_NOT_USE: function(t) {
            const e = d.getCurrentPriorityLevel();
            return unstable_scheduleCallback(priorities.unstable_UserBlocking, function() {
                n("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(e, t);
            });
        },
        getCallbackScheduler: function() {
            const e = d.getCurrentPriorityLevel();
            return function(t) {
                return unstable_scheduleCallback(e, t);
            };
        },
        getCurrentPriorityLevel: e.unstable_getCurrentPriorityLevel,
        getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE: function() {
            const e = d.getCurrentPriorityLevel();
            return function(t) {
                return unstable_scheduleCallback(priorities.unstable_UserBlocking, function() {
                    n("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(e, t);
                });
            };
        },
        makeSchedulerGlobalEntry: function(r = null, o = false, a = false) {
            if (r != null) {
                n("SchedulerFb-Internals_DO_NOT_USE").unstable_forceFrameRate(r);
            }
            if (o) {
                d.startEventProfiling();
            }
            if (a !== true) {
                t.ScheduleJSWork = function(e) {
                    return function(...n) {
                        if (s) {
                            e(...n);
                        } else {
                            d.deferUserBlockingRunAtCurrentPri_DO_NOT_USE(function() {
                                s = true;
                                try {
                                    e(...n);
                                } finally{
                                    s = false;
                                }
                            });
                        }
                    };
                };
            }
        },
        priorities,
        runWithPriority: e.unstable_runWithPriority,
        runWithPriority_DO_NOT_USE: e.unstable_runWithPriority,
        scheduleDelayedCallback_DO_NOT_USE: function(t, delay, r) {
            const e = unstable_scheduleCallback(t, r, {
                delay
            });
            return e;
        },
        scheduleImmediatePriCallback: function(t) {
            return unstable_scheduleCallback(priorities.unstable_Immediate, t);
        },
        scheduleLoggingPriCallback: function(t) {
            return unstable_scheduleCallback(priorities.unstable_Low, t);
        },
        scheduleNormalPriCallback: function(t) {
            return unstable_scheduleCallback(priorities.unstable_Normal, t);
        },
        scheduleSpeculativeCallback: function(t) {
            return unstable_scheduleCallback(priorities.unstable_Idle, t);
        },
        scheduleUserBlockingPriCallback: function(t) {
            return unstable_scheduleCallback(priorities.unstable_UserBlocking, t);
        },
        shouldYield: e.unstable_shouldYield,
        startEventProfiling: function() {
            const t = n("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling?.startLoggingProfilingEvents;
            if (typeof t === "function") {
                t();
            }
        },
        stopEventProfiling: function() {
            const t = n("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling?.stopLoggingProfilingEvents;
            if (typeof t === "function") {
                return t();
            }
            return null;
        }
    };
    a.exports = d;
}, null);