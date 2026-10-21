__d("VirtualMessageChannel", [
    "invariant",
    "Promise",
    "SimpleHook",
    "nullthrows",
    "promiseDone"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    class u {
        constructor(e = false){
            this.$2 = new (o("SimpleHook")).SimpleHook;
            this.onmessage = null;
            this.onmessageerror = null;
            this.$3 = e;
        }
        setRemotePort(t) {
            this.$1 = t;
        }
        addEventListener(t, n, r) {
            if (!((t === "message" || t === "error") && r == null)) {
                s(0, 55320, t);
            }
            if (t === "message") {
                if (typeof n === "function") {
                    this.$2.add(n);
                } else {
                    const e = n.handleEvent.bind(n);
                    this.$2.add(e);
                    n.__handler = e;
                }
            }
        }
        removeEventListener(t, n, r) {
            if (typeof n === "function") {
                this.$2.remove(n);
            } else {
                const e = n.__handler;
                this.$2.remove(e);
            }
        }
        postMessage(o, ports) {
            const t = this;
            const i = function() {
                const e = r("nullthrows")(t.$1, "By now remote port must have value!");
                e.$2.call({
                    data: o,
                    ports
                });
            };
            if (this.$3) {
                i();
            } else {
                r("promiseDone")((e || (e = n("Promise"))).resolve(), i);
            }
        }
        start() {}
        close() {}
    }
    const c = function(t, n) {
        this.port1 = new u(t);
        this.port2 = new u(n);
        this.port1.setRemotePort(this.port2);
        this.port2.setRemotePort(this.port1);
    };
    l.VirtualMessagePort = u;
    l.VirtualMessageChannel = c;
}, 98);