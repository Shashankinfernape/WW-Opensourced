__d("VisualCompletionLoomProvider", [
    "vc-tracker"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(e, t, n){
            var o = this;
            this.$3 = function(e) {
                const t = o.$1;
                if (t != null && e != null && e.startTime + o.$2.appStart >= t.startTime) {
                    const n = new Map;
                    e.elements.forEach((e)=>{
                        n.set(e.timestamp, (n.get(e.timestamp) ?? 0) + e.pixels);
                    });
                    Array.from(n.entries()).sort((e, t)=>e[0] - t[0]).reduce((acc, [a, i])=>{
                        const l = acc + i;
                        t.buffer.addEvent({
                            progress: l / e.paintedPixels,
                            type: "VISUAL_COMPLETION_PROGRESS"
                        }, a + o.$2.appStart);
                        return l;
                    }, 0);
                    o.$4(t, e, e.elements.filter((e)=>e.parent == null), 0);
                }
            };
            this.$1 = e;
            r("vc-tracker").VisualCompletionTraceObserver.subscribe(this.$3);
            this.$2 = n;
        }
        static isSupported() {
            return true;
        }
        $4(t, n, r, depth, a = null) {
            const e = this;
            r.slice().sort((e, t)=>e.timestamp - t.timestamp).forEach((r)=>{
                const r_rectangle = r.rectangle;
                const l = r.type === "component" || a == null ? r.timestamp : Math.max(r.timestamp, a.timestamp);
                t.buffer.addEvent({
                    depth,
                    elementType: r.type,
                    height: Math.floor(r_rectangle.bottom - r_rectangle.top),
                    mutationType: r.mutationType,
                    lateMutationType: r.hadLateMutationUnexpected ? "unexpected" : r.hadLateMutationExpected ? "expected" : undefined,
                    type: "VISUAL_COMPLETION_RECT",
                    width: Math.floor(r_rectangle.right - r_rectangle.left),
                    x: Math.floor(r_rectangle.left),
                    y: Math.floor(r_rectangle.top)
                }, l + e.$2.appStart);
                if (r.children.length) {
                    e.$4(t, n, r.children, depth + 1, r);
                }
            });
        }
        loomTraceWillEnd() {
            r("vc-tracker").VisualCompletionTraceObserver.unsubscribe(this.$3);
            this.$1 = null;
        }
    }
    const s = {
        getInstance: function(n, r, o) {
            return new e(n, r, o);
        },
        isSupported: function() {
            return e.isSupported();
        },
        loomProviderId: "VisualCompletion"
    };
    l.default = s;
}, 98);