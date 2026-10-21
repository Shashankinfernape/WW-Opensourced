__d("WAWebLastADVCheckTimeApi", [
    "Promise",
    "WAWebApiTasksScheduledTime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        if (s == null) {
            s = o("WAWebApiTasksScheduledTime").getTaskScheduledTime("advDeviceInfoCheck");
        }
        return s;
    }
    function c(t) {
        s = (e || (e = n("Promise"))).resolve(t);
    }
    l.getLastADVDeviceInfoCheckTime = u;
    l.setLastADVDeviceInfoCheckTime = c;
}, 98);