__d("WAWebUnifiedSession", [
    "$InternalEnum",
    "WALogger",
    "WASmaxUnifiedSessionShareRPC",
    "WATimeUtils",
    "WAWebUnifiedSessionSocketManager",
    "asyncToGeneratorRuntime",
    "cr:9137"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = 7 * o("WATimeUtils").DAY_MILLISECONDS;
    const c = 3 * o("WATimeUtils").DAY_MILLISECONDS;
    const d = n("$InternalEnum")({
        InitialRender: "initial-render",
        Foreground: "foreground",
        IdleTimeout: "idle-timeout"
    });
    const m = (()=>{
        function t(e) {
            this.$1 = null;
            this.$2 = 0;
            this.$3 = false;
            this.$4 = e;
        }
        const r = t.prototype;
        r.getSocketStreamChangeHandler = function() {
            const e = this;
            return function() {
                return e.$5();
            };
        };
        r.getSessionId = function() {
            return this.$1;
        };
        r.getSequence = function() {
            return ++this.$2;
        };
        r.clearSessionId = function() {
            this.$1 = null;
        };
        r.generateSessionId = function(r) {
            try {
                const t = (p() + c) % u;
                const a = this.$1;
                this.$1 = String(t);
                this.$3 = false;
                this.$2 = 0;
                if (n("cr:9137") != null) {
                    n("cr:9137").syncUnifiedSessionIdToNative(this.$1);
                }
                this.$6();
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[unified-session] Error generating session id: ",
                    ""
                ])), t).sendLogs("unified-session-generate-error");
            }
        };
        r.$6 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (this.$4.isConnected() !== false) {
                    const e = this.$1;
                    if (e != null && !this.$3) {
                        try {
                            yield o("WASmaxUnifiedSessionShareRPC").sendShareRPC({
                                unifiedSessionId: e
                            });
                            this.$3 = true;
                        } catch (e) {
                            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[unified-session] failed to send session id: ",
                                ""
                            ])), e).sendLogs("send-unified-session-id-failed");
                        }
                    }
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r.$5 = function() {
            if (this.$4.isInitialized() && this.$4.isConnected()) {
                this.$6();
            }
        };
        return t;
    })();
    function p() {
        return Date.now() + o("WATimeUtils").getClockSkew();
    }
    const _ = (()=>{
        const e = new (o("WAWebUnifiedSessionSocketManager")).UnifiedSessionSocketManager;
        const t = new m(e);
        e.init(t.getSocketStreamChangeHandler());
        t.generateSessionId(d.InitialRender);
        return t;
    })();
    l.UnifiedSessionGenReason = d;
    l.UnifiedSessionManager = _;
}, 98);