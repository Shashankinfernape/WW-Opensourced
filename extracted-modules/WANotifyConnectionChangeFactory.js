__d("WANotifyConnectionChangeFactory", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 15000;
    function l(t, n, r = e) {
        const o = {
            timeoutID: null,
            connectionStatus: "disconnected",
            optimismLevel: "optimist"
        };
        const a = function() {
            const { connectionStatus: e, optimismLevel: t } = o;
            if (t === "optimist") {
                o.timeoutID = setTimeout(()=>{
                    o.optimismLevel = "realist";
                    n(e);
                }, r);
            } else {
                n(e);
            }
        };
        return function(e) {
            o.connectionStatus = e;
            if (e === "disconnected" || e === "in_handshake") {
                a();
            } else {
                if (o.timeoutID != null) {
                    clearTimeout(o.timeoutID);
                    o.timeoutID = null;
                }
                n(e);
            }
            t(e);
        };
    }
    i.notifyConnectionChangeFactory = l;
}, 66);