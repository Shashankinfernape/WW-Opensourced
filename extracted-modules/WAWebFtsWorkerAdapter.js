__d("WAWebFtsWorkerAdapter", [
    "WAWebBrokerMainConnect",
    "WAWebFtsWorkerResource",
    "WorkerBundleResource",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e = null;
    class s {
        constructor(){
            this.worker = null;
        }
        initialize(t, n) {
            this.worker = o("WorkerBundleResource").createDedicatedWebWorker(r("WAWebFtsWorkerResource"));
            r("nullthrows")(this.worker).onmessage = function(e) {
                t(e.data.message);
            };
            r("nullthrows")(this.worker).onerror = n;
            r("WAWebBrokerMainConnect")(this);
        }
        postMessage(t, n) {
            const e = {
                type: "message",
                message: t
            };
            r("nullthrows")(this.worker).postMessage(e, n);
        }
        terminate() {
            r("nullthrows")(this.worker).terminate();
        }
    }
    function u(t, n) {
        if (!e) {
            e = new s;
            e.initialize(t, n);
        }
        return e;
    }
    l.getFtsWorker = u;
}, 98);