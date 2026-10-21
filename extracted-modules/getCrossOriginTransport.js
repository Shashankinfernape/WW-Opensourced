__d("getCrossOriginTransport", [
    "invariant",
    "ExecutionEnvironment",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        if (!(e || (e = n("ExecutionEnvironment"))).isInBrowser) {
            throw n("err")("getCrossOriginTransport: %s", "Cross origin transport unavailable in the server environment.");
        }
        try {
            let t = new XMLHttpRequest;
            if (!("withCredentials" in t) && typeof XDomainRequest !== "undefined") {
                t = new XDomainRequest;
            }
            return t;
        } catch (error) {
            throw n("err")("getCrossOriginTransport: %s", error instanceof Error ? error.message : String(error));
        }
    }
    s.withCredentials = function() {
        const e = s();
        if (!("withCredentials" in e)) {
            l(0, 5150);
        }
        const e_open = e.open;
        e.open = function() {
            e_open.apply(this, arguments);
            this.withCredentials = true;
        };
        return e;
    };
    a.exports = s;
}, null);