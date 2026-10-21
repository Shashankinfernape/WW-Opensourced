__d("WAWebOfflineDeviceCache", [
    "WAComms",
    "WADeprecatedSendIq",
    "WALogger",
    "WAShiftTimer",
    "WAWebApiPendingDeviceSync",
    "WAWebPromiseQueue",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 3000;
    class d {
        constructor(){
            var e = this;
            this.pendingDeviceCache = new Set;
            this.pendingAcks = [];
            this.snapshotTimer = new (o("WAShiftTimer")).ShiftTimer(function() {
                e.createSnapshot();
            });
            this.checkpointQueue = new (o("WAWebPromiseQueue")).PromiseQueue;
        }
        addOfflinePendingDevice(n, r) {
            this.pendingDeviceCache.add(n);
            if (r) {
                this.pendingAcks.push(r);
            }
            if (!this.snapshotTimer.isScheduled()) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume][device-cache]: creating snapshot: schedule in ",
                    " ms"
                ])), c);
                this.snapshotTimer.onOrAfter(c);
            }
        }
        createSnapshot() {
            if (this.snapshotTimer.isScheduled()) {
                this.snapshotTimer.cancel();
            }
            const e = Array.from(this.pendingDeviceCache);
            const pendingAcks = this.pendingAcks;
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume][device-cache]: creating snapshot for pending devices ",
                ""
            ])), e.join(","));
            this.checkpointQueue.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebApiPendingDeviceSync").addUserToPendingDeviceSync(e);
                pendingAcks.forEach((e)=>o("WADeprecatedSendIq").deprecatedCastStanza(e));
                o("WAComms").cancelDeadSocketTimer();
            })).catch((e)=>{
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume][device-cache]: creating snapshot failed: ",
                    ""
                ])), e);
            });
            this.pendingDeviceCache = new Set;
            this.pendingAcks = [];
        }
    }
    const m = new d;
    l.OfflinePendingDeviceCache = m;
}, 98);