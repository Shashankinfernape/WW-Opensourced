__d("WAWebWorkerQplProxy", [
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    function s(t) {
        e = t;
    }
    function u(t) {
        const n = r("nullthrows")(e, "WAWebWorkerQplProxy: bridge not initialized");
        const { instanceKey: o, markerId: a } = t;
        let i = false;
        return {
            addAnnotations: function(t) {
                if (!i) {
                    n.fireAndForget("qpl", "dispatch", {
                        type: "addAnnotations",
                        markerId: a,
                        instanceKey: o,
                        annotations: t
                    });
                }
            },
            addPoint: function(t, r) {
                if (!i) {
                    n.fireAndForget("qpl", "dispatch", {
                        type: "addPoint",
                        markerId: a,
                        instanceKey: o,
                        pointName: t,
                        annotations: r ?? null,
                        timestamp: self.performance.now()
                    });
                }
            },
            endSuccess: function(t) {
                if (!i) {
                    i = true;
                    n.fireAndForget("qpl", "dispatch", {
                        type: "endSuccess",
                        markerId: a,
                        instanceKey: o,
                        annotations: t ?? null,
                        timestamp: self.performance.now()
                    });
                }
            },
            endFail: function(t, r) {
                if (!i) {
                    i = true;
                    n.fireAndForget("qpl", "dispatch", {
                        type: "endFail",
                        markerId: a,
                        instanceKey: o,
                        errorName: t,
                        annotations: r ?? null,
                        timestamp: self.performance.now()
                    });
                }
            },
            endFailWithError: function(t, r, l) {
                if (!i) {
                    i = true;
                    n.fireAndForget("qpl", "dispatch", {
                        type: "endFailWithError",
                        markerId: a,
                        instanceKey: o,
                        errorName: t,
                        failReason: r ?? null,
                        annotations: l ?? null,
                        timestamp: self.performance.now()
                    });
                }
            },
            endCancel: function(t, r) {
                if (!i) {
                    i = true;
                    n.fireAndForget("qpl", "dispatch", {
                        type: "endCancel",
                        markerId: a,
                        instanceKey: o,
                        cancelReason: t ?? null,
                        annotations: r ?? null,
                        timestamp: self.performance.now()
                    });
                }
            },
            start: function(t) {},
            isActive: function() {
                return true;
            },
            getQPLAttrs: function() {
                return {
                    instanceKey: o,
                    markerId: a
                };
            }
        };
    }
    l.initWorkerQplProxy = s;
    l.createWorkerQplProxy = u;
}, 98);