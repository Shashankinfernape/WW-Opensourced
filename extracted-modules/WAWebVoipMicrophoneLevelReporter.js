__d("WAWebVoipMicrophoneLevelReporter", [
    "WALogger",
    "WAWebVoipMicrophoneLevelAccumulator",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    class s {
        constructor(e, t){
            this.$1 = new (o("WAWebVoipMicrophoneLevelAccumulator")).WAWebVoipMicrophoneLevelAccumulator;
            this.$2 = false;
            this.$4 = e;
            this.$3 = t;
        }
        report(t, n) {
            if (!this.$2) {
                try {
                    const e = window.performance.now();
                    this.$1.add(t, n, e);
                    const r = this.$1.flushIfDue(e);
                    if (r != null) {
                        this.$4(r);
                    }
                } catch (error) {
                    this.$5(error);
                }
            }
        }
        forward(t) {
            if (!this.$2) {
                try {
                    this.$4(t);
                } catch (error) {
                    this.$5(error);
                }
            }
        }
        $5(n) {
            this.$2 = true;
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:",
                "] input level reporting disabled after a failure"
            ])), this.$3).catching(r("getErrorSafe")(n)).sendLogs("voip-mic-level-report-failed");
        }
    }
    l.WAWebVoipMicrophoneLevelReporter = s;
}, 98);