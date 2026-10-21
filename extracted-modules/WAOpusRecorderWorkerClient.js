__d("WAOpusRecorderWorkerClient", [
    "WAWebOpusRecorderWorkerResource",
    "WorkerBundleResource"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        function e(e) {
            this.$1 = o("WorkerBundleResource").createDedicatedWebWorker(r("WAWebOpusRecorderWorkerResource"));
            this.$1.onmessage = e ?? null;
        }
        const t = e.prototype;
        t.getWorker = function() {
            return this.$1;
        };
        t.postMessage = function(t, n) {
            const e = {
                type: "message",
                message: t
            };
            this.$1.postMessage(e, n);
        };
        t.addEventListener = function(t, n) {
            this.$1.addEventListener(t, n);
        };
        t.removeEventListener = function(t, n) {
            this.$1.removeEventListener(t, n);
        };
        return e;
    })();
    function s() {
        return new e;
    }
    function u(t) {
        return new e(t);
    }
    l.WAOpusRecorderWorkerClient = e;
    l.getOpusEncoderWorker = s;
    l.getOpusDecoderWorker = u;
}, 98);