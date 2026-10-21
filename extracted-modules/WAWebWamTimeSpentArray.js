__d("WAWebWamTimeSpentArray", [
    "WALogger",
    "WAShiftTimer",
    "WAWebClock",
    "WAWebUnifiedSession"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 2;
    const u = s * 32;
    const c = (()=>{
        function t(e) {
            const t = this;
            this.sequenceId = 0;
            this.ship = function(e) {
                const r = t.bitmap;
                if (r) {
                    const a = Date.now();
                    if (a > t.lastActiveInMS) {
                        t.bitmapLength = Math.min(u, Math.ceil(a / 1000 - t.startTimeInSec));
                    }
                    const i = {
                        sessionId: t.sessionId,
                        startTime: t.startTimeInSec,
                        bitmap: r,
                        bitmapLen: t.bitmapLength,
                        sessionSeq: t.sequenceId,
                        sessionCum: t.cumulativeBitsSet,
                        relativeStartTimeMs: t.relativeStartTimeMs ?? void 0
                    };
                    const l = t.startTimeInSec * 1000;
                    i.tsTimestampMs = o("WAWebClock").Clock.getServerTimeMs() - (a - l);
                    const s = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
                    if (s != null) {
                        i.unifiedSessionId = s;
                    }
                    const c = e || t.loggingCallback;
                    c(i);
                    t.timer.cancel();
                    t.bitmap = null;
                }
            };
            this.loggingCallback = e.loggingCallback;
            this.timer = new (o("WAShiftTimer")).ShiftTimer(this.ship);
            const { getSessionData: n, postUpdate: r } = e;
            if (n != null) {
                this.fetchAndUpdateSession = function() {
                    const e = n();
                    const { id: r, relativeTimeMs: o } = e;
                    t.sessionId = r;
                    t.relativeStartTimeMs = o;
                    t.cumulativeBitsSet = 0;
                };
            }
            this.postUpdate = r;
            this.$1();
            this.$2(Math.floor(Date.now() / 1000));
        }
        const n = t.prototype;
        n.$1 = function() {
            if (this.fetchAndUpdateSession != null) {
                this.fetchAndUpdateSession();
            } else {
                this.sessionId = d();
                this.cumulativeBitsSet = 0;
                this.sequenceId = -1;
            }
        };
        n.$2 = function(n) {
            if (this.fetchAndUpdateSession != null) {
                this.fetchAndUpdateSession();
            }
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[time-spent] _initArray at time ",
                ""
            ])), n);
            this.startTimeInSec = n;
            this.lastActiveInMS = this.startTimeInSec * 1000;
            this.bitmap = new Int32Array(s);
            this.bitmap[0] = 1;
            this.bitmapLength = 1;
            this.cumulativeBitsSet += 1;
            this.sequenceId += 1;
            this.postUpdate?.();
            const r = u * 1000;
            this.timer.debounceAndCap(r, r);
        };
        n.$3 = function(t) {
            const e = t - this.startTimeInSec;
            if (this.bitmap && (e < 0 || e >= u)) {
                this.ship();
            }
            if (this.bitmap) {
                this.bitmap[e >> 5] |= 1 << (e & 31);
                this.bitmapLength = e + 1;
                this.cumulativeBitsSet += 1;
                this.lastActiveInMS = t * 1000;
            } else {
                this.$2(t);
            }
        };
        n.update = function(t) {
            let e;
            if (!(t >= this.lastActiveInMS && t - this.lastActiveInMS < 1000)) {
                this.$3(Math.floor(t / 1000));
                if ((e = this.postUpdate) != null) {
                    e.call(this);
                }
            }
        };
        return t;
    })();
    function d() {
        return Math.floor(2147483648 * Math.random()).toString(36);
    }
    l.default = c;
}, 98);