__d("WAWebQplFlow", [
    "QPLEvent",
    "WAWebEnvironment",
    "WAWebNoop",
    "WAWebQplFlowWrapper"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = 0;
    function u(t, n) {
        const i = n?.instanceKey ?? s++;
        let l = true;
        const u = o("WAWebQplFlowWrapper").QPL.markerStart(t, {
            annotations: n?.annotations,
            cancelOnUnload: true,
            instanceKey: i,
            timeoutInMs: n?.timeoutInMs
        });
        u.annotate({
            string: {
                subplatform: r("WAWebEnvironment").isWindows ? "hybrid" : "web",
                environment: r("WAWebEnvironment").getEnvironment()
            }
        });
        return {
            addAnnotations: function(t) {
                u.annotate(t);
            },
            addPoint: function(t, n) {
                u.addPoint(t, {
                    data: n
                });
            },
            endCancel: function(t, n) {
                l = false;
                if (n != null) {
                    u.annotate(n);
                }
                u.end(4);
            },
            endFail: function(t, n) {
                l = false;
                u.addPoint(t, {
                    data: n
                });
                u.end(3);
            },
            endFailWithError: function(t, n, r) {
                l = false;
                u.addPoint(t, {
                    data: r
                });
                u.annotate({
                    string: {
                        failReason: n
                    }
                });
                u.end(3);
            },
            endSuccess: function(t) {
                l = false;
                if (t != null) {
                    u.annotate(t);
                }
                u.end(2);
            },
            getQPLAttrs: function() {
                return {
                    instanceKey: i,
                    markerId: (e || (e = o("QPLEvent"))).getMarkerId(t)
                };
            },
            isActive: function() {
                return l;
            },
            start: r("WAWebNoop")
        };
    }
    l.startQplFlow = u;
}, 98);