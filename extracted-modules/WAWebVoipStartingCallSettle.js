__d("WAWebVoipStartingCallSettle", [
    "Promise",
    "WAWebCallCollection",
    "WAWebVoipEventConstants"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 30000;
    function u(t) {
        if (r("WAWebCallCollection").activeCall != null) {
            return (e || (e = n("Promise"))).resolve();
        }
        const a = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL);
        return new (e || (e = n("Promise")))(function(e) {
            let n = false;
            let o = null;
            var i = function() {
                if (!n) {
                    n = true;
                    r("WAWebCallCollection").off(a, l);
                    if (o != null) {
                        window.clearTimeout(o);
                    }
                    e();
                }
            };
            function l() {
                if (r("WAWebCallCollection").activeCall != null) {
                    i();
                }
            }
            r("WAWebCallCollection").on(a, l);
            o = window.setTimeout(i, s);
            t.then((e)=>{
                if (e !== true) {
                    i();
                }
            }, ()=>{
                i();
            });
        });
    }
    l.STARTING_CALL_TIMEOUT_MS = s;
    l.waitForStartingCallToSettle = u;
}, 98);