__d("WAWebVoipHiddenPrewarmIdleWork", [
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebPonyfillsIdleCallback",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipInitEventEmitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 1000;
    const u = new Set;
    let c = false;
    function d(e, t) {
        if (p()) {
            g(e, t);
            return true;
        }
        if (_()) {
            h(e, t)();
            return true;
        }
        return false;
    }
    function m() {
        if (document.hidden) {
            c = true;
            document.addEventListener("visibilitychange", f);
        }
    }
    function p() {
        return o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInitAttemptInFlight() && o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getVoipInitTrigger() === "hidden_prewarm" && !o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getWasVoipInitedByHiddenPrewarm();
    }
    function _() {
        return c && document.hidden && o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getWasVoipInitedByHiddenPrewarm();
    }
    function f() {
        if (!document.hidden) {
            c = false;
            document.removeEventListener("visibilitychange", f);
            u.forEach((e)=>self.clearTimeout(e));
            u.clear();
        }
    }
    function g(e, t) {
        const n = h(e, t);
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.once("voipInitSuccess", function() {
            if (_()) {
                n();
            }
        });
    }
    function h(t, n) {
        let r = false;
        const a = function() {
            if (!r) {
                r = true;
                n();
            }
        };
        const i = o("WAWebPonyfillsIdleCallback").requestIdleCallback(a);
        return function() {
            var n = self.setTimeout(function() {
                u.delete(n);
                if (!(r || !document.hidden)) {
                    o("WAWebPonyfillsIdleCallback").cancelIdleCallback(i);
                    o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                        o("WAWebCoreActionsODS").logCallVoipBootHiddenPrewarmPostInitRanHidden(t);
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [deferred-boot] hidden_prewarm post_init ran_hidden work=",
                            ""
                        ])), t);
                    });
                    a();
                }
            }, s);
            u.add(n);
        };
    }
    l.HIDDEN_TAB_IDLE_FALLBACK_MS = s;
    l.requestHiddenPrewarmIdleWork = d;
    l.watchTabFromHiddenPrewarmSuccess = m;
}, 98);