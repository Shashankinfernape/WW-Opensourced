__d("WAWamManager", [
    "WALogger",
    "WAWam"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = 65535;
    const d = (()=>{
        function t(e) {
            this.$1 = new Map;
            this.$2 = e;
        }
        const n = t.prototype;
        n.$3 = function(t, n) {
            if (n == null || n === 0) {
                this.$1.set(t, "uninitialized");
            } else if (n < 0) {
                this.$1.set(t, "uninitialized");
            } else {
                this.$1.set(t, n);
            }
        };
        n.getSequenceNumber__INTERNAL = function() {
            return this.$1;
        };
        n.initializeForChannel = function(n, r) {
            const t = this;
            r.forEach((r, a)=>{
                let i;
                if (n === "regular" && a === "regular") {
                    t.$3(a, r);
                } else if (n === "realtime" && a === "realtime") {
                    t.$3(a, r);
                } else if (n === "private" && a !== "regular" && a !== "realtime") {
                    t.$3(a, r);
                } else if (n === "private" && !((i = t.$2) != null && i.multipleSequences)) {
                    t.$3(a, r);
                } else {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "SequenceNumberGenerator::initializeForChannel: Incorrect combination of parameters: ",
                        " ",
                        " ",
                        ""
                    ])), n, a, t.$2?.multipleSequences);
                }
            });
        };
        n.next = function(t) {
            const e = this.$1.get(t);
            let n;
            if (e == null || e === "uninitialized") {
                n = 1;
            } else {
                n = e + 1;
                if (n > c) {
                    n = 1;
                }
            }
            this.$1.set(t, n);
            return n;
        };
        return t;
    })();
    const m = (()=>{
        function e() {
            this.$1 = new Map;
            this.$2 = null;
        }
        const t = e.prototype;
        t.getWamInstance = function(t) {
            let e = this.$1.get(t);
            if (!e) {
                e = new (o("WAWam")).Wam(t);
                this.$1.set(t, e);
            }
            return e;
        };
        t.initialize = function(t, n, r, a, i) {
            const e = this.getWamInstance(t);
            if (e.isInitialized()) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WAM instance for channel ",
                    " has already been initialized"
                ])), t);
                return;
            }
            if (this.$2 == null) {
                this.$2 = new d(i);
            }
            const l = this.$2;
            this.$2.initializeForChannel(t, r);
            e.initialize(n, function(e) {
                return l.next(e);
            }, a, i);
        };
        t.deinitialize = function() {
            this.$1.forEach((e, t)=>{
                if (e.isInitialized()) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "WamManager: Deinitializing WAM Channel ",
                        ""
                    ])), t);
                    e.deinitialize();
                }
            });
            this.$2 = null;
        };
        t.enqueueEvent = function(t, n, r, o, a, i, l) {
            const e = this.getWamInstance(t);
            e.enqueueEvent(n, r, o, a, i, l);
        };
        t.enqueueAttributesUpdate = function(t, n) {
            const e = this.getWamInstance(t);
            e.enqueueAttributesUpdate(n);
        };
        t.updatePrivateStatsIds = function(t) {
            const e = this.getWamInstance("private");
            e.updatePrivateStatsIds(t);
        };
        t.forceFlushBuffers = function() {
            this.$1.forEach((e)=>{
                e.forceSerializePending();
            });
        };
        t.rotateBuffers = function() {
            this.$1.forEach((e)=>{
                e.finalizeBuffers.forceRunNow();
            });
        };
        t.getSequenceNumberGenerator__INTERNAL = function() {
            return this.$2;
        };
        return e;
    })();
    l.WamManager = m;
}, 98);