__d("WAWam", [
    "Promise",
    "WALogger",
    "WAPromiseEach",
    "WAShiftTimer",
    "WAWamBuffer"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    const y = 65536;
    const C = 300 * 1000;
    const b = 3000;
    const v = 1;
    const S = 2;
    const R = 6005;
    const L = 113760892;
    const E = 0;
    const k = "none";
    const I = {
        putBuffer: function(t, r, o) {
            return (h || (h = n("Promise"))).resolve();
        }
    };
    const T = (()=>{
        function t(t) {
            const n = this;
            this.$2 = [];
            this.$3 = new Map;
            this.$4 = false;
            this.$5 = new Map;
            this.$8 = -1;
            this.$9 = I;
            this.$10 = null;
            this.deinitialize = function() {
                n.$4 = false;
                n.$2 = [];
                n.$3.clear();
                n.$5 = new Map;
                n.$8 = -1;
                n.$9 = I;
                n.serializePending.cancel();
                n.finalizeBuffers.cancel();
            };
            this.enqueueEvent = function(e, t, r, o, a, i) {
                const l = v;
                n.$2.push({
                    type: l,
                    id: e,
                    commitTime: t,
                    psIdIntValue: r,
                    weight: a,
                    fields: o,
                    resolve: i
                });
                if (n.$4) {
                    n.serializePending.onOrBefore(b);
                }
            };
            this.enqueueAttributesUpdate = function(t) {
                const r = {
                    type: S,
                    delta: []
                };
                t.forEach((e, t)=>{
                    if (e !== void 0) {
                        r.delta.push([
                            t,
                            e
                        ]);
                    }
                });
                if (r.delta.length > 0) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "WAM: Enqueued ",
                        " attribute keys for update"
                    ])), r.delta.length);
                    n.$2.push(r);
                }
            };
            this.finalizeBuffers = new (o("WAShiftTimer")).ShiftTimer(function() {
                n.finalizeBuffers__INTERNAL();
            });
            this.serializePending = new (o("WAShiftTimer")).ShiftTimer(function() {
                n.serializePending__INTERNAL();
            });
            this.forceSerializePending = function() {
                if (n.$4 && n.$11()) {
                    n.serializePending.forceRunNow();
                }
            };
            this.$1 = t;
        }
        const n = t.prototype;
        n.initialize = function(t, n, r, a) {
            if (this.$4) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WAM: Failed to initialize already initialized WAM"
                ]))).sendLogs("wam-initialize");
                return;
            }
            this.$7 = a;
            this.$8 = t;
            this.$9 = r;
            this.$10 = n;
            if (this.$11()) {
                this.serializePending.forceRunNow();
            }
            this.$4 = true;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "WAM: Initialized with stream id ",
                ""
            ])), this.$8);
        };
        n.finalizeBuffers__INTERNAL = function() {
            this.$5.forEach((e)=>{
                e.finalize();
            });
            if (this.$5.size > 0) {
                this.serializePending.onOrBefore(b);
            }
        };
        n.$12 = function(t) {
            let e;
            if ((e = this.$7) != null && e.multipleSequences) {
                if (t === E) {
                    return "null-psid";
                }
                return t;
            }
            return "regular";
        };
        n.$13 = function(t) {
            let e = this.$5.get(t);
            if (e) {
                return e;
            }
            const n = this.$12(t);
            if (this.$10 == null) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "WAM: Sequence number generator not initialised for channel ",
                    ""
                ])), this.$1).sendLogs("wam-serializePending");
                return;
            }
            const r = this.$10(n);
            e = new (o("WAWamBuffer")).WamBuffer(this.$1, this.$8, r, this.$3);
            this.$5.set(t, e);
            if (t !== "regular") {
                if (this.$6 == null) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "WAM: Tried to create a private buffer without setting private stats ids"
                    ]))).sendLogs("wam-serializePending");
                } else {
                    const a = t === E ? k : this.$6.get(t);
                    if (a == null) {
                        o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "WAM: Tried to create a private buffer without setting private stats id"
                        ]))).sendLogs("wam-serializePending");
                    } else {
                        e.writeGlobal(R, a);
                    }
                }
            }
            return e;
        };
        n.serializePending__INTERNAL = function() {
            const e = this;
            const t = [];
            this.finalizeBuffers.onOrBefore(C);
            const n = new Map;
            let r = -1;
            this.$2.forEach((a, i)=>{
                if (a.type === v) {
                    let l = true;
                    n.forEach((e)=>{
                        if (!o("WAWamBuffer").canWriteGlobal(e)) {
                            l = false;
                        }
                    });
                    const s = o("WAWamBuffer").canWriteEvent(a.fields);
                    if (s && l) {
                        let u;
                        switch(e.$1){
                            case "regular":
                            case "realtime":
                                {
                                    u = e.$13("regular");
                                    break;
                                }
                            default:
                                e.$1;
                                if (a.psIdIntValue == null) {
                                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                        "A WAM event in channel private was dropped before serialization. Reason: missing psIdIntValue in the event payload"
                                    ]))).sendLogs("wam-serializePending");
                                } else {
                                    u = e.$13(a.psIdIntValue);
                                }
                        }
                        if (u != null) {
                            n.forEach((t, n)=>{
                                const r = e.$3.get(n);
                                if (r === void 0 || r !== t) {
                                    e.$5.forEach((e)=>e.writeGlobal(n, t));
                                    e.$3.set(n, t);
                                }
                            });
                            n.clear();
                            u.writeEvent(a.commitTime, a.id, a.fields, a.weight);
                        }
                    } else {
                        o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "A WAM event in channel ",
                            " was dropped before serialization. Event correct: ",
                            ", pending attributes correct: ",
                            ""
                        ])), e.$1, s, l);
                    }
                    if (a.resolve != null) {
                        t.push(a.resolve);
                    }
                    r = i;
                } else {
                    a.type;
                    for(let c = 0; c < a.delta.length; ++c){
                        const d = a.delta[c];
                        const m = d[0];
                        const f = d[1];
                        n.set(m, f);
                    }
                }
            });
            let a = false;
            this.$5.forEach((e)=>{
                if (e.isFinalized() || e.getSize() > y) {
                    a = true;
                }
            });
            const i = [];
            this.$5.forEach((t, n)=>{
                if (t.hasEvents()) {
                    i.push([
                        t.getKey(),
                        t.peek(),
                        e.$12(n)
                    ]);
                } else {
                    o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "Skipping putting buffer to sink, as it does not contain any events"
                    ])));
                }
            });
            const l = o("WAPromiseEach").promiseEach(i, function([n, r, o]) {
                return e.$9.putBuffer(n, r, a, o);
            }).then(()=>{
                t.forEach((e)=>void e());
            });
            this.$2 = this.$2.slice(r + 1);
            if (a) {
                this.$5 = new Map;
                this.finalizeBuffers.cancel();
            }
            return l;
        };
        n.$11 = function() {
            return this.$2.length > 0 && this.$2.some((e)=>e.type === v);
        };
        n.isInitialized = function() {
            return this.$4;
        };
        n.getStreamId = function() {
            return this.$8;
        };
        n.getPendingActions = function() {
            return this.$2;
        };
        n.getBuffers__INTERNAL = function() {
            return this.$5;
        };
        n.getGlobals__INTERNAL = function() {
            return this.$3;
        };
        n.setGlobals__INTERNAL = function(t) {
            this.$3 = t;
        };
        n.getSink__INTERNAL = function() {
            return this.$9;
        };
        n.updatePrivateStatsIds = function(t) {
            if (this.$1 !== "private") {
                o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "WAM: Tried to set private stats ids on a non-private channel"
                ]))).sendLogs("wam-updatePrivateStatsIds");
                return;
            }
            this.$6 = t;
        };
        return t;
    })();
    l.PRIVATE_STATS_DEFAULT_PS_ID_KEY_HASH_INT = L;
    l.Wam = T;
}, 98);