__d("WAWebLongAnimationFrameObserver", [
    "WALogger",
    "WAWebDocumentVisibilityObserver",
    "WAWebPdfViewerLongAnimationFrameTracker"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 500;
    function u(invoker) {
        const t = invoker.match(/.*\.(.*)/);
        if (t) {
            return t[1];
        }
        return invoker;
    }
    class c {
        constructor(){
            this.documentVisibilityObserver = new (o("WAWebDocumentVisibilityObserver")).WAWebDocumentVisibilityObserver;
        }
        isSupported() {
            return typeof window.PerformanceObserver?.supportedEntryTypes?.includes === "function" && window.PerformanceObserver.supportedEntryTypes.includes("long-animation-frame");
        }
        observe(t) {
            t.observe({
                type: "long-animation-frame",
                buffered: true
            });
        }
        handle(n) {
            for (const t of n){
                if (!(t.blockingDuration < s || t.firstUIEventTimestamp < 0)) {
                    const r = this.documentVisibilityObserver.isWindowInFocus();
                    const a = this.documentVisibilityObserver.isDocumentVisible();
                    if (!(!a || !r)) {
                        if (t.scripts.length === 0) {
                            return;
                        }
                        const i = t.scripts.reduce((acc, script)=>{
                            if (acc.duration > script.duration) {
                                return acc;
                            }
                            return script;
                        });
                        if (o("WAWebPdfViewerLongAnimationFrameTracker").isPdfViewerLongAnimationFrameTrackingActive()) {
                            const l = `${u(i.invoker)}:${i.sourceFunctionName}`;
                            o("WAWebPdfViewerLongAnimationFrameTracker").recordPdfViewerLongAnimationFrame(t.blockingDuration, l, i.duration);
                        }
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[long-animation-frame] blockingDuration: ",
                            "ms - ",
                            ":",
                            " ",
                            "ms"
                        ])), t.blockingDuration, u(i.invoker), i.sourceFunctionName, i.duration).sendLogs(`[performance observer] long-animation-frame by ${u(i.invoker)}`, {
                            sampling: 0.001
                        });
                    }
                }
            }
        }
    }
    l.WAWebLongAnimationFrameObserver = c;
}, 98);