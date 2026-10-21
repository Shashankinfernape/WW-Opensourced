__d("QPLLoomProvider", [
    "QPLEvent"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    class s {
        constructor(t, n){
            var r = this;
            this.$2 = {};
            this.$1 = n.QuickPerformanceLogger.addListener({
                onMarkerStart: function(a, i, l) {
                    const n = (e || (e = o("QPLEvent"))).getMarkerId(a);
                    if (l >= t.startTime) {
                        t.buffer.addEvent({
                            type: "QPL_START",
                            markerId: n,
                            instanceKey: i
                        }, l);
                    }
                    if (!r.$2[n]) {
                        r.$2[n] = {};
                    }
                    r.$2[n][i] = l;
                },
                onMarkerEnd: function(action, a, i, l) {
                    const n = (e || (e = o("QPLEvent"))).getMarkerId(a);
                    if (l >= t.startTime) {
                        t.buffer.addEvent({
                            type: "QPL_END",
                            action,
                            markerId: n,
                            instanceKey: i
                        }, l);
                    }
                },
                onMarkerPoint: function(r, a, i, l, s) {
                    const n = (e || (e = o("QPLEvent"))).getMarkerId(r);
                    if (s >= t.startTime) {
                        t.buffer.addEvent({
                            type: "QPL_POINT",
                            markerId: n,
                            instanceKey: a,
                            name: i,
                            data: l?.string?.__key
                        }, s);
                    }
                },
                onAnnotation: function(a, i, annotationKey, annotationValue) {
                    const n = (e || (e = o("QPLEvent"))).getMarkerId(a);
                    const u = r.$2[n];
                    const c = u?.[i];
                    if (c != null && c >= t.startTime) {
                        t.buffer.addEvent({
                            type: "QPL_ANNOTATION",
                            markerId: n,
                            instanceKey: i,
                            annotationKey,
                            annotationValue
                        }, c);
                    }
                }
            });
        }
        loomTraceWillEnd() {
            this.$1.dispose();
        }
    }
    const u = {
        loomProviderId: "QPL",
        isSupported: function() {
            return true;
        },
        getInstance: function(t, n) {
            return new s(t, n);
        }
    };
    l.default = u;
}, 98);