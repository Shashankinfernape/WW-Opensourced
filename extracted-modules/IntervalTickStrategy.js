__d("IntervalTickStrategy", [
    "TaskSchedulerPriority",
    "WAPromiseDelays",
    "WAPromiseQueue"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(){
            this.$1 = new (o("WAPromiseQueue")).PromiseQueue;
        }
        tick(t) {
            return this.$1.enqueue(function() {
                let e;
                switch(t){
                    case o("TaskSchedulerPriority").BLOCKING_PRIORITY:
                        return;
                    case o("TaskSchedulerPriority").HIGH_PRIORITY:
                        e = 0;
                        break;
                    case o("TaskSchedulerPriority").BACKGROUND_PRIORITY:
                        e = 100;
                        break;
                    default:
                        e = 0;
                        break;
                }
                return o("WAPromiseDelays").delayMs(e);
            });
        }
    }
    l.default = e;
}, 98);