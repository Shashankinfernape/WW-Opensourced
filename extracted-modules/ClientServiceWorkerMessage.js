__d("ClientServiceWorkerMessage", [], function(t, n, r, o, a, i) {
    class e {
        constructor(e, t, n){
            this.$1 = e;
            this.$2 = t;
            this.$3 = n;
        }
        sendViaController() {
            const navigator_serviceWorker = navigator.serviceWorker;
            if (navigator_serviceWorker) {
                const t = navigator_serviceWorker.controller;
                if (t) {
                    const n = new self.MessageChannel;
                    if (this.$3) {
                        n.port1.onmessage = this.$3;
                    }
                    t.postMessage({
                        command: this.$1,
                        data: this.$2
                    }, [
                        n.port2
                    ]);
                }
            }
        }
    }
    i.default = e;
}, 66);