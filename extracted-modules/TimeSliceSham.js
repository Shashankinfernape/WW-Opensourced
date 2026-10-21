__d("TimeSliceSham", [
    "Env",
    "ErrorGuard",
    "IntervalTrackingBoundedBuffer"
], function(t, n, r, o, a, i) {
    let e;
    let l;
    let timesliceBufferSize = (e || (e = n("Env"))).timesliceBufferSize;
    if (timesliceBufferSize == null) {
        timesliceBufferSize = 5000;
    }
    const u = new (n("IntervalTrackingBoundedBuffer"))(timesliceBufferSize);
    var c = {
        PropagationType: {
            CONTINUATION: 0,
            EXECUTION: 1,
            ORPHAN: 2
        },
        guard: function(t, r) {
            return (l || (l = n("ErrorGuard"))).guard(t, {
                name: `TimeSlice${r ? `: ${r}` : ""}`
            });
        },
        copyGuardForWrapper: function(t, n) {
            return t;
        },
        checkCoverage: function() {},
        setLogging: function(t, n) {},
        getContext: function() {
            return null;
        },
        getGuardedContinuation: function(t) {
            function e(e, ...n) {
                return e.apply(this, n);
            }
            return e;
        },
        getReusableContinuation: function(t) {
            return c.getPlaceholderReusableContinuation();
        },
        getPlaceholderReusableContinuation: function() {
            function e(e) {
                e();
            }
            e.last = e;
            return e;
        },
        getGuardNameStack: function() {
            return [];
        },
        registerExecutionContextObserver: function(t) {},
        catchUpOnDemandExecutionContextObservers: function(t) {},
        getBuffer: function() {
            return u;
        }
    };
    t.TimeSlice = c;
    a.exports = c;
}, 6);