__d("WAWebApiTasksScheduledTime", [
    "WAWebModelStorageUtils",
    "WAWebSchemaTasksScheduledTime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebSchemaTasksScheduledTime").getTasksScheduledTimeTable().get(e).then((e)=>e?.time);
    }
    function s(taskName, time) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "tasks-scheduled-time"
        ], function([r]) {
            const o = {
                taskName,
                time
            };
            return r.createOrReplace(o);
        });
    }
    l.getTaskScheduledTime = e;
    l.updateTaskScheduledTime = s;
}, 98);