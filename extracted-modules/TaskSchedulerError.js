__d("TaskSchedulerError", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, `Run timeout exceeded: ${t}:${n}`) || this;
            r.name = "TaskSchedulerTimeoutError";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    i.TaskSchedulerTimeoutError = e;
}, 66);