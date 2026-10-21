__d("WAWebWamLibContext", [
    "WABase64",
    "WABinary",
    "WALogger",
    "WAWebEventSampling",
    "WAWebWamBeaconing",
    "WAWebWamCodegenUtils",
    "WAWebWamConstants",
    "WAWebWamLibProtocol",
    "WAWebWamPrivateStats"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 47;
    const u = 3433;
    const c = 6005;
    const d = 0;
    const m = 1;
    const p = 2;
    const _ = 2147483647;
    const f = (()=>{
        function t(e, t, n) {
            this.bufferKey = e;
            this.buffer = new (o("WABinary")).Binary(void 0, true);
            this.buffer.writeString("WAM");
            this.buffer.writeUint8(o("WAWebWamConstants").WAM_PROTOCOL_VERSION);
            this.buffer.writeUint8(1);
            this.buffer.writeUint16(t);
            if (this.bufferKey === "regular") {
                this.buffer.writeUint8(d);
            } else if (this.bufferKey === "realtime") {
                this.buffer.writeUint8(m);
            } else {
                this.buffer.writeUint8(p);
            }
            this.eventsWritten = 0;
            this.prevGlobals = {};
            this.dirtyGlobals = {};
            this.unsavedPortion = null;
            this.saveKey = String(Math.random() * 1000000000 | 0);
            this.$1(n);
        }
        const n = t.prototype;
        n.size = function() {
            return this.buffer.size();
        };
        n.set = function(t, n) {
            this.dirtyGlobals[String(t)] = n;
            if (this.unsavedPortion) {
                this.unsavedPortion.set(t, n);
            }
        };
        n.write = function(n) {
            const r = this.buffer;
            this.set(s, n.commitTime);
            const a = o("WAWebWamBeaconing").maybeGetEventSequenceNumber(this.bufferKey);
            if (a != null) {
                this.set(u, a);
            }
            if (n.wamChannel === "private") {
                this.set(c, o("WAWebWamPrivateStats").getLatestPrivateStatsIdValueFromKey(this.bufferKey).toString());
            }
            this.$2();
            const i = n.all;
            for(var l = Object.keys(i), d = -1, m = false, p = 0; p < l.length; p++){
                const f = i[l[p]];
                if (f != null) {
                    d = p;
                    m = true;
                }
            }
            const g = o("WAWebEventSampling").getClientEventSamplingWeight(n.id) ?? n.weight;
            o("WAWebWamLibProtocol").writeEvent({
                buffer: r,
                hasFieldsToWrite: m,
                id: n.id,
                value: -g
            });
            for(let h = 0; h <= d; h++){
                const y = l[h];
                const C = o("WAWebWamCodegenUtils").metrics.getEvent(n.$className, y);
                const { id: b, type: v } = C;
                let S = i[y];
                if (S != null) {
                    if (typeof S === "boolean") {
                        S = S ? 1 : 0;
                    }
                    m = h < d;
                    if (v === "timer" && S > _) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[wam] invalid value for timer field ",
                            ".",
                            ""
                        ])), n.$className, y).sendLogs("wam-event-validation-error");
                        continue;
                    }
                    o("WAWebWamLibProtocol").writeField(r, b, S, m);
                }
            }
            this.eventsWritten++;
            if (this.unsavedPortion) {
                this.unsavedPortion.write(n);
            }
        };
        n.stringBuffer = function() {
            if (this.eventsWritten > 0) {
                return o("WABase64").encodeB64(this.buffer.peek(function(e) {
                    return e.readByteArrayView();
                }));
            }
            return "";
        };
        n.getBuffer = function() {
            return this.buffer;
        };
        n.$1 = function(t) {
            const e = ((e)=>{
                if (e === "regular" || e === "realtime") {
                    return "regular";
                }
                return "private";
            })(this.bufferKey);
            for(const n in t){
                const r = t[n];
                const a = o("WAWebWamCodegenUtils").metrics.getGlobal(n);
                const i = a.channels.includes(e);
                if (r !== void 0 && i) {
                    this.set(o("WAWebWamCodegenUtils").metrics.getGlobal(n).id, r);
                }
            }
        };
        n.$2 = function() {
            const e = this.dirtyGlobals;
            const t = this.prevGlobals;
            for(const n in e){
                let r = e[n];
                if (typeof r === "boolean") {
                    r = r ? 1 : 0;
                } else if (r === void 0) {
                    r = null;
                } else if (Number.isNaN(r)) {
                    continue;
                }
                if (r !== t[n] || n === String(s) || n === String(c)) {
                    t[n] = r;
                    const a = parseInt(n, 10);
                    o("WAWebWamLibProtocol").writeGlobalAttribute(this.buffer, a, r);
                }
            }
            this.dirtyGlobals = {};
        };
        return t;
    })();
    l.WamContext = f;
}, 98);