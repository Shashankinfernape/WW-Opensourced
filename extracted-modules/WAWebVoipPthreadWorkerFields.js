__d("WAWebVoipPthreadWorkerFields", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        const t = Reflect.get(e, "workerID");
        if (typeof t === "number") {
            return t;
        }
        return null;
    }
    function l(e) {
        return Reflect.get(e, "loaded") === true;
    }
    function s(e) {
        const t = Reflect.get(e, "pthread_ptr");
        return typeof t === "number" && t !== 0;
    }
    i.getPthreadWorkerID = e;
    i.isPthreadWorkerLoaded = l;
    i.isPthreadWorkerBound = s;
}, 66);