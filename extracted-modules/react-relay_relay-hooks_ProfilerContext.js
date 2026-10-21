__d("react-relay/relay-hooks/ProfilerContext", [
    "react"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    const l = e || (e = n("react"));
    const SContext = l.createContext({
        wrapPrepareQueryResource: function(t) {
            return t();
        }
    });
    a.exports = SContext;
}, null);