__d("CSSPoller", [
    "CSSLoaderConfig",
    "FBLogger",
    "clearInterval",
    "getErrorSafe",
    "isEmpty",
    "setIntervalAcrossTransitions"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 20;
    const u = new Map;
    var c = {
        expirationTime: null,
        startCSSPoll: function(t, onLoad, onError, link) {
            const e = u.size !== 0;
            c.expirationTime = Date.now() + r("CSSLoaderConfig").timeout;
            u.set(t, {
                link,
                onLoad,
                onError,
                pollAttempts: 0
            });
            if (!e) var i = r("setIntervalAcrossTransitions")(function() {
                if (c.runCSSPolls()) {
                    r("clearInterval")(i);
                }
            }, s);
        },
        runCSSPolls: function() {
            const t = [];
            const c_expirationTime = c.expirationTime;
            if (c_expirationTime != null && Date.now() >= c_expirationTime) {
                for (const o of u.values()){
                    r("FBLogger")("CSSPoller").warn("Failed to poll CSS: %s with CORS setting %s after %d attempts", o.link.href, o.link.crossOrigin, o.pollAttempts);
                    t.push(o.onError);
                }
                u.clear();
            } else {
                for (const [i, l] of u){
                    const s = l.link;
                    try {
                        const d = s.sheet;
                        if (d != null) {
                            const p = d.cssRules ?? d.rules;
                            if (p != null) {
                                t.push(l.onLoad);
                                u.delete(i);
                            }
                        }
                    } catch (error) {
                        l.pollAttempts++;
                        r("FBLogger")("CSSPoller").catching(r("getErrorSafe")(error)).warn("Poll technique was unable to poll CSS: %s with CORS setting %s at attempt %d", s.href, s.crossOrigin, l.pollAttempts);
                    }
                }
            }
            if (!(e || (e = r("isEmpty")))(t)) {
                for(let _ = 0; _ < t.length; _++){
                    t[_]();
                }
                c.expirationTime = Date.now() + r("CSSLoaderConfig").timeout;
            }
            return u.size === 0;
        }
    };
    l.default = c;
}, 98);