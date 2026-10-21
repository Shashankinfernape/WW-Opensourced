__d("WAWebMessageQueueTimeout", [
    "TaskSchedulerError",
    "WALogger",
    "WAWebOfflineResumeCounters"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, n) {
        if (!(t instanceof o("TaskSchedulerError").TaskSchedulerTimeoutError)) {
            throw t;
        }
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "onMessageQueue timed out: caller=",
            ""
        ])), n).tags("messaging");
        o("WAWebOfflineResumeCounters").logOneQueueTimeout();
        return null;
    }
    l.handleMessageQueueTimeout = s;
}, 98);