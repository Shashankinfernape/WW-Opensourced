__d("WAWebLongTaskObserver", [
    "WAWebDocumentVisibilityObserver",
    "WAWebMainThreadStallReporter"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor(){
            this.documentVisibilityObserver = new (o("WAWebDocumentVisibilityObserver")).WAWebDocumentVisibilityObserver;
        }
        isSupported() {
            return typeof window.PerformanceObserver?.supportedEntryTypes?.includes === "function" && window.PerformanceObserver.supportedEntryTypes.includes("longtask");
        }
        observe(t) {
            t.observe({
                type: "longtask",
                buffered: false
            });
            this.documentVisibilityObserver.observe();
        }
        handle(t) {
            for (const e of t){
                const endTime = e.startTime + e.duration;
                o("WAWebMainThreadStallReporter").reportMainThreadStall({
                    durationMs: e.duration,
                    endTime,
                    source: "longtask",
                    visibility: this.documentVisibilityObserver
                });
            }
        }
    }
    l.WAWebLongTaskObserver = e;
}, 98);