__d("WAWebPersistedJobTaskScheduler", [
    "NativeSchedulerTickStrategy",
    "TaskScheduler"
], function(t, n, r, o, a, i, l) {
    let e = null;
    const s = {
        run: function(t, n) {
            const e = c().run(t, {
                name: n?.name
            });
            return {
                promise: e.promise
            };
        }
    };
    const u = s;
    function c() {
        if (e == null) {
            e = o("TaskScheduler").taskScheduler("jobs-manager", {
                concurrency: 20,
                timeoutMs: 20000,
                failOnTimeout: false
            }, o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy());
        }
        return e;
    }
    l.default = u;
}, 98);