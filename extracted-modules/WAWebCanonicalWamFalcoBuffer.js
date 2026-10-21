__d("WAWebCanonicalWamFalcoBuffer", [
    "WALogger",
    "WATimeUtils",
    "WAWebCanonicalUtils",
    "WAWebCanonicalWamFalcoBufferConstants",
    "WAWebFalcoEventQueue",
    "WAWebLocalStorage",
    "WAWebNetworkStatus",
    "WAWebODS",
    "WAWebWamFalcoABProps",
    "WAWebWamFalcoModes",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        if (e == null || typeof e !== "object" || typeof e.name !== "string" || typeof e.timestamp !== "number" || typeof e.fields !== "object" || e.fields == null) {
            return null;
        }
        return {
            name: e.name,
            fields: e.fields,
            timestamp: e.timestamp,
            critical: e.critical === true
        };
    }
    const m = 7 * o("WATimeUtils").DAY_SECONDS * 1000;
    const p = 50;
    const _ = 30000;
    const f = 600 * 1000;
    const g = 60000;
    function h(e, t) {
        if (o("WAWebWamFalcoABProps").getWamFalcoMode() === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING) {
            r("WAWebODS").incr(`web.falco.shadow.${e.name}.${t}`);
        }
    }
    function y() {
        try {
            const t = r("WAWebLocalStorage") == null ? void 0 : r("WAWebLocalStorage").getItem(o("WAWebCanonicalWamFalcoBufferConstants").CANONICAL_WAM_FALCO_BUFFER_STORAGE_KEY);
            if (t != null) {
                const n = JSON.parse(t);
                if (Array.isArray(n)) {
                    const a = [];
                    for (const i of n){
                        const l = d(i);
                        if (l != null) {
                            a.push(l);
                        }
                    }
                    return a;
                }
            }
        } catch (t) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[falco] corrupted buffer storage, discarding"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("wam_falco_buffer_read_error");
        }
        return [];
    }
    function C(e) {
        if (r("WAWebLocalStorage") != null) {
            r("WAWebLocalStorage").setItem(o("WAWebCanonicalWamFalcoBufferConstants").CANONICAL_WAM_FALCO_BUFFER_STORAGE_KEY, JSON.stringify(e));
        }
    }
    function b() {
        if (r("WAWebLocalStorage") != null) {
            r("WAWebLocalStorage").removeItem(o("WAWebCanonicalWamFalcoBufferConstants").CANONICAL_WAM_FALCO_BUFFER_STORAGE_KEY);
        }
    }
    const v = (()=>{
        function e() {
            const e = this;
            this.$2 = false;
            this.$6 = function() {
                if (r("WAWebNetworkStatus").online && o("WAWebCanonicalUtils").isCanonicalPresent()) {
                    e.drain("canonical");
                }
            };
            this.$7 = function() {
                if (!(!e.$2 || e.$1.length === 0)) {
                    e.$5();
                }
            };
            this.$8 = function() {
                if (e.$1.length !== 0) {
                    const t = Date.now() - e.$1[0].timestamp;
                    if (!(t < f)) {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[falco] draining ",
                            " stale buffered events (oldest: ",
                            "s)"
                        ])), e.$1.length, Math.round(t / 1000));
                        e.drain("stale");
                    }
                }
            };
            this.$5 = function() {
                if (e.$1.length !== 0) {
                    try {
                        const t = o("WAWebWamFalcoABProps").getCanonicalWamFalcoMaxBufferSize();
                        const n = e.$1.length > t ? e.$1.slice(-t) : e.$1;
                        C(n);
                        e.$2 = false;
                    } catch (e) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[falco] failed to persist buffer"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("wam_falco_buffer_persist_error");
                    }
                }
            };
            this.$1 = y();
            self.addEventListener("beforeunload", this.$5);
            self.addEventListener("pagehide", this.$5);
            r("WAWebNetworkStatus").on("change:online", this.$6);
            this.$3 = self.setInterval(this.$7, _);
            this.$4 = self.setInterval(this.$8, g);
        }
        const t = e.prototype;
        t.buffer = function(t) {
            this.$1.push(t);
            this.$2 = true;
            this.$9();
        };
        t.drain = function(t) {
            if (r("WAWebNetworkStatus").online) {
                const e = Date.now();
                const n = this.$1.filter((t)=>e - t.timestamp < m);
                this.$1 = [];
                this.$2 = false;
                b();
                if (n.length !== 0) {
                    const a = t === "stale" ? "buffer_stale_drain" : "buffer_canonical_drain";
                    for (const i of n){
                        h(i, a);
                    }
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[falco] draining ",
                        " buffered events"
                    ])), n.length);
                    o("WAWebFalcoEventQueue").sendFalcoEventsChunked(n);
                }
            }
        };
        t.flushNow = function() {
            const e = Date.now();
            const t = this.$1.filter((t)=>e - t.timestamp < m);
            this.$1 = [];
            this.$2 = false;
            b();
            if (t.length > 0) {
                for (const n of t){
                    h(n, "buffer_logout_flush");
                }
                o("WAWebFalcoEventQueue").sendFalcoEventsNow(t);
            }
        };
        t.$9 = function() {
            const e = o("WAWebWamFalcoABProps").getCanonicalWamFalcoMaxBufferSize();
            const t = this.$1.length - e;
            if (!(t <= 0)) {
                const n = Math.min(t, p);
                const r = this.$1.splice(0, n);
                for (const a of r){
                    h(a, "buffer_overflow");
                    o("WAWebFalcoEventQueue").enqueueFalcoEvent(a);
                }
            }
        };
        return e;
    })();
    let S = null;
    function R() {
        if (S == null) {
            S = new v;
        }
        return S;
    }
    function L(e) {
        h(e, "buffer");
        R().buffer(e);
    }
    function E() {
        if (!(S == null && y().length === 0)) {
            R().drain("canonical");
        }
    }
    function k() {
        if (!(S == null && y().length === 0)) {
            R().flushNow();
        }
    }
    l.bufferCanonicalFalcoEvent = L;
    l.drainCanonicalWamFalcoBuffer = E;
    l.flushCanonicalWamFalcoBuffer = k;
}, 98);