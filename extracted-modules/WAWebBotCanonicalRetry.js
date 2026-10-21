__d("WAWebBotCanonicalRetry", [
    "WALogger",
    "WATimeUtils",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = o("WATimeUtils").HOUR_MILLISECONDS * 4;
    let u = false;
    function c(t) {
        if (!(u || o("WAWebCanonicalUtils").isCanonicalPresent() || !o("WAWebCanonicalGating").isCanonicalEnabled())) {
            u = true;
            const n = self.setTimeout(function() {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] bot profiles still waiting for canonical credentials"
                ]))).sendLogs("bot-canonical-retry-slow", {
                    sampling: 0.01
                });
            }, s);
            o("WAWebCanonicalUtils").waitForCanonicalPresent().then(()=>{
                self.clearTimeout(n);
                u = false;
                t();
            });
        }
    }
    l.armCanonicalRetry = c;
}, 98);