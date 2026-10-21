__d("WAWebUnifiedSessionSocketManager", [
    "WALogger",
    "WAWebUserPrefsAppStateSync",
    "cr:37437"
], function(t, n, r, o, a, i, l) {
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
    let y;
    const C = {
        DISCONNECTED: "DISCONNECTED",
        CONNECTED: "CONNECTED"
    };
    const b = n("cr:37437") ?? {};
    const v = b.Cmd;
    const S = (()=>{
        function e() {
            this.$1 = false;
            this.$2 = C.DISCONNECTED;
            this.$3 = null;
            this.$4 = false;
        }
        const t = e.prototype;
        t.init = function(t = null) {
            const n = this;
            if (this.$4) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] init() already called"
                ])));
                return;
            }
            this.$4 = true;
            this.$3 = t;
            const r = o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced();
            const a = v?.isMainStreamReadyMd ?? false;
            this.$1 = r;
            this.$2 = r && a ? C.CONNECTED : C.DISCONNECTED;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[unified-session-socket] init synced=",
                " open=",
                " stream=",
                ""
            ])), String(r), String(a), this.$2);
            if (v != null) {
                v.on("main_stream_mode_ready_from_bridge", function() {
                    n.$5();
                });
                v.on("on_critical_sync_done_from_bridge", function() {
                    n.$5();
                });
                v.on("open_socket_stream_from_bridge", function() {
                    n.$6();
                });
                v.on("socket_stream_disconnected_from_bridge", function() {
                    n.$7();
                });
            }
        };
        t.isConnected = function() {
            return this.$2 === C.CONNECTED;
        };
        t.isInitialized = function() {
            return this.$4;
        };
        t.$8 = function(t) {
            this.$2 = t ? C.CONNECTED : C.DISCONNECTED;
            if (!this.$4) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip callback: not init"
                ])));
                return;
            }
            this.$3?.();
        };
        t.$5 = function() {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[unified-session-socket] ready->CONNECTED"
            ])));
            if (this.$1 === true && this.isConnected()) {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip->CONNECTED: already"
                ])));
                return;
            }
            const e = o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced();
            if (!e) {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip->CONNECTED: no sync"
                ])));
                return;
            }
            this.$1 = e;
            this.$8(true);
        };
        t.$6 = function() {
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[unified-session-socket] open->CONNECTED"
            ])));
            if (this.$1 === false) {
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip->CONNECTED: no sync"
                ])));
                return;
            }
            if (this.isConnected()) {
                o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip->CONNECTED: already"
                ])));
                return;
            }
            this.$8(true);
        };
        t.$7 = function() {
            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "[unified-session-socket] disconnect->DISCONNECTED"
            ])));
            if (this.isConnected() === false) {
                o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session-socket] skip->DISCONNECTED: already"
                ])));
                return;
            }
            this.$8(false);
        };
        return e;
    })();
    l.UnifiedSessionSocketManager = S;
}, 98);