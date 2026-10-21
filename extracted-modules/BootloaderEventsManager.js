__d("BootloaderEventsManager", [
    "CallbackDependencyManager",
    "performanceAbsoluteNow"
], function(t, n, r, o, a, i, l) {
    let e;
    class s {
        constructor(){
            this.$1 = new (r("CallbackDependencyManager"));
            this.$2 = new Map;
        }
        rsrcDone(t) {
            return t;
        }
        bootload(t) {
            return `bl:${t.join(",")}`;
        }
        tierOne(t) {
            return `t1:${t}`;
        }
        tierTwoStart(t) {
            return `t2s:${t}`;
        }
        tierTwo(t) {
            return `t2:${t}`;
        }
        tierThreeStart(t) {
            return `t3s:${t}`;
        }
        tierThree(t) {
            return `t3:${t}`;
        }
        tierOneLog(t) {
            return `t1l:${t}`;
        }
        tierTwoLog(t) {
            return `t2l:${t}`;
        }
        tierThreeLog(t) {
            return `t3l:${t}`;
        }
        beDone(t) {
            return `beDone:${t}`;
        }
        notify(n) {
            this.$2.set(n, (e || (e = r("performanceAbsoluteNow")))());
            this.$1.satisfyPersistentDependency(n);
        }
        getEventTime(t) {
            return this.$2.get(t);
        }
        registerCallback(t, n) {
            this.$1.registerCallback(t, n);
        }
    }
    l.default = s;
}, 98);