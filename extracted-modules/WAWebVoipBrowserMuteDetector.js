__d("WAWebVoipBrowserMuteDetector", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 3;
    const l = 1;
    const s = 5;
    const u = 5;
    const c = 3;
    const d = 2;
    function m(t) {
        return t * e;
    }
    function p(e) {
        return e.baseLatencyMs > 0 && Math.abs(e.outputLatencyMs - m(e.baseLatencyMs)) <= l;
    }
    class _ {
        constructor(){
            this.$1 = 0;
            this.$2 = 0;
            this.$3 = 0;
            this.$4 = false;
            this.$5 = false;
            this.$6 = false;
        }
        isSuspected() {
            return this.$4;
        }
        isMuteExpected() {
            return this.$5;
        }
        getSampleCount() {
            return this.$1;
        }
        getFloorSampleCount() {
            return this.$3;
        }
        getMuteEvidence() {
            if (this.$6) {
                return "not_muted";
            }
            if (this.$1 >= c) {
                return "muted";
            }
            return "inconclusive";
        }
        hasEnoughSamplesToDetect() {
            const e = this.$5 ? d : s + u;
            return this.$1 >= e;
        }
        expectMute() {
            this.$5 = true;
        }
        observe(t) {
            this.$1++;
            if (p(t)) {
                if (this.$5 || this.$1 > s) {
                    this.$2++;
                    this.$3++;
                }
            } else {
                this.$6 = true;
                this.$5 = false;
                this.$2 = 0;
            }
            const e = this.$5 ? d : u;
            const n = this.$2 >= e;
            if (n === this.$4) {
                return null;
            }
            this.$4 = n;
            if (n) {
                return "suspected";
            }
            return "cleared";
        }
        reset() {
            this.$1 = 0;
            this.$2 = 0;
            this.$3 = 0;
            this.$4 = false;
            this.$5 = false;
            this.$6 = false;
        }
    }
    i.BROWSER_MUTE_WARMUP_SAMPLES = s;
    i.BROWSER_MUTE_MIN_CONSECUTIVE_SAMPLES = u;
    i.BROWSER_MUTE_CARRYOVER_MIN_SAMPLES = c;
    i.BROWSER_MUTE_CARRYOVER_CONFIRM_SAMPLES = d;
    i.getBrowserMuteFloorMs = m;
    i.isAtBrowserMuteFloor = p;
    i.WAWebVoipBrowserMuteDetector = _;
}, 66);