__d("WAWebCommonTaskScheduler", [
    "NativeSchedulerTickStrategy",
    "TaskScheduler"
], function(t, n, r, o, a, i, l) {
    const e = o("TaskScheduler").taskScheduler("wa-common", {
        concurrency: 10
    }, o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy());
    l.default = e;
}, 98);