__d("NativeSchedulerTickStrategy", [
    "IntervalTickStrategy",
    "Promise",
    "TaskSchedulerPriority",
    "WAPromiseDelays",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    class s {
        tick(r) {
            switch(r){
                case o("TaskSchedulerPriority").BLOCKING_PRIORITY:
                    return globalThis.scheduler.postTask(function() {}, {
                        priority: "user-blocking"
                    });
                case o("TaskSchedulerPriority").HIGH_PRIORITY:
                    return globalThis.scheduler.postTask(function() {}, {
                        priority: "user-visible"
                    });
                case o("TaskSchedulerPriority").BACKGROUND_PRIORITY:
                    return new (e || (e = n("Promise")))(function(e) {
                        globalThis.scheduler.postTask(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            yield o("WAPromiseDelays").delayMs(100);
                            e();
                        }), {
                            priority: "background"
                        });
                    });
                default:
                    return globalThis.scheduler.postTask(function() {}, {
                        priority: "background"
                    });
            }
        }
    }
    let u = null;
    function c() {
        return u ?? (typeof globalThis.scheduler?.postTask !== "function" ? (u = new (r("IntervalTickStrategy")), u) : (u = new s, u));
    }
    l.NativeSchedulerTickStrategy = s;
    l.makeNativeSchedulerTickStrategy = c;
}, 98);