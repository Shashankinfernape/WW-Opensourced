__d("WAWebQplFlowWrapper", [
    "QPLUserFlow"
], function(t, n, r, o, a, i, l) {
    const e = {
        markerStart: function(t, n) {
            const o = n?.instanceKey ?? 0;
            r("QPLUserFlow").start(t, {
                annotations: n?.annotations,
                cancelExisting: n?.cancelExisting,
                cancelOnUnload: n?.cancelOnUnload,
                instanceKey: o,
                timeoutInMs: n?.timeoutInMs,
                timestamp: n?.timestamp,
                trackedForLoss: n?.trackedForLoss
            });
            return {
                instanceKey: o,
                annotate: function(n) {
                    r("QPLUserFlow").addAnnotations(t, n, {
                        instanceKey: o
                    });
                },
                addPoint: function(n, a) {
                    r("QPLUserFlow").addPoint(t, n, {
                        instanceKey: o,
                        timestamp: a?.timestamp
                    });
                    if (a?.data != null) {
                        r("QPLUserFlow").addAnnotations(t, a.data, {
                            instanceKey: o
                        });
                    }
                },
                end: function(n, r) {
                    s(t, n, {
                        instanceKey: o,
                        timestamp: r?.timestamp
                    });
                },
                drop: function() {
                    r("QPLUserFlow").endCancel(t, {
                        cancelReason: 4,
                        instanceKey: o
                    });
                }
            };
        },
        markerAnnotate: function(t, n, o) {
            r("QPLUserFlow").addAnnotations(t, n, {
                instanceKey: o?.instanceKey
            });
        },
        markerPoint: function(t, n, o) {
            r("QPLUserFlow").addPoint(t, n, {
                instanceKey: o?.instanceKey,
                timestamp: o?.timestamp
            });
            if (o?.data != null) {
                r("QPLUserFlow").addAnnotations(t, o.data, {
                    instanceKey: o?.instanceKey
                });
            }
        },
        markerEnd: function(t, n, r) {
            s(t, n, r);
        },
        markerDrop: function(t, n) {
            r("QPLUserFlow").endCancel(t, {
                cancelReason: 4,
                instanceKey: n?.instanceKey
            });
        }
    };
    function s(e, t, n) {
        const o = n?.instanceKey;
        const a = n?.timestamp;
        e: {
            if (t === 2) {
                r("QPLUserFlow").endSuccess(e, {
                    instanceKey: o,
                    timestamp: a
                });
                break e;
            }
            if (t === 3) {
                r("QPLUserFlow").endFailure(e, "fail", {
                    instanceKey: o,
                    timestamp: a
                });
                break e;
            }
            if (t === 113) {
                r("QPLUserFlow").endTimeout(e, {
                    instanceKey: o,
                    timestamp: a
                });
                break e;
            }
            if (t === 4) {
                r("QPLUserFlow").endCancel(e, {
                    cancelReason: 4,
                    instanceKey: o,
                    timestamp: a
                });
                break e;
            }
            if (t === 105) {
                r("QPLUserFlow").endCancel(e, {
                    cancelReason: 4,
                    instanceKey: o,
                    timestamp: a
                });
                break e;
            }
            if (t === 706) {
                r("QPLUserFlow").endCancel(e, {
                    cancelReason: 706,
                    instanceKey: o,
                    timestamp: a
                });
                break e;
            }
            if (t === 216) {
                r("QPLUserFlow").endCancel(e, {
                    cancelReason: 4,
                    instanceKey: o,
                    timestamp: a
                });
                break e;
            }
            {
                r("QPLUserFlow").endCancel(e, {
                    cancelReason: 4,
                    instanceKey: o,
                    timestamp: a
                });
                break e;
            }
        }
    }
    l.QPL = e;
}, 98);