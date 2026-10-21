__d("WAWebMessagePostProcessBatcher", [
    "Promise",
    "WABatcher",
    "WAWebBackendApi",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebWorkerSafeBackendApi"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        delayMs: 1000
    };
    const u = (()=>{
        function t() {
            const t = this;
            this.$1 = o("WABatcher").createSimpleBatcher(s, function(r) {
                t.$2(r);
                return (e || (e = n("Promise"))).resolve([]);
            });
        }
        const a = t.prototype;
        a.acceptMessage = function(t) {
            return this.$1.accept(t);
        };
        a.runActiveBatches = function() {
            return this.$1.runActiveBatch().then(r("WAWebNoop"));
        };
        a.$2 = function(t) {
            o("WAWebBackendApi").frontendFireAndForget("processOrphanReadReceipts", {
                msgIds: t.map((e)=>e.id)
            });
            const e = t.filter((e)=>e.type === o("WAWebMsgType").MSG_TYPE.PAYMENT && e.subtype === "send");
            if (e.length > 0) {
                o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("processOrphanPaymentNotifications", {
                    msgs: e
                });
            }
        };
        return t;
    })();
    const c = new u;
    l.messagePostProcessBatcher = c;
}, 98);