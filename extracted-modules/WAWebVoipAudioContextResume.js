__d("WAWebVoipAudioContextResume", [
    "WALogger",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = 3000;
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const r = Date.now();
            const a = self.setTimeout(function() {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:",
                    "] AudioContext.resume() still pending after ",
                    "ms, state=",
                    ""
                ])), n, u, t.state);
            }, u);
            try {
                yield t.resume();
            } finally{
                self.clearTimeout(a);
                const i = Date.now() - r;
                if (i >= u) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:",
                        "] AudioContext.resume() settled after ",
                        "ms, state=",
                        ""
                    ])), n, i, t.state);
                }
            }
        });
        return d.apply(this, arguments);
    }
    l.resumeAudioContextLoggingDelays = c;
}, 98);