__d("JSSPConfigInit", [
    "JSSPBrsidMarker",
    "JSSPDevTraceFilter",
    "JSSPEmptySampleFilter",
    "JSSPEventCountCollector",
    "JSSPEventCountMarker",
    "JSSPFELabsMarker",
    "JSSPIdMarker",
    "JSSPInteractToNextPaintMarker",
    "JSSPInteractionToNextPaintCollector",
    "JSSPInteractionTraceDataMarker",
    "JSSPJestE2EMarker",
    "JSSPLongAnimationFrameCollector",
    "JSSPLongAnimationFrameMarker",
    "JSSPLongTaskLinker",
    "JSSPLongTaskMarker",
    "JSSPMemoryCollector",
    "JSSPMemoryMarker",
    "JSSPPerformanceEntryCollector",
    "JSSPReactFrameDedupFilter",
    "JSSPSampleDurationMarker",
    "JSSPSetting",
    "JSSPSubSpanMarker",
    "JSSPTraceSizeOptimizer",
    "JSSPUAMarkerExtractor",
    "JSSPUrlCollector",
    "JSSPUrlMarker",
    "JSSelfProfiler",
    "JSSelfProfilerConfig.experimental",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        static run() {
            const e = this.getInstance();
            e.registerDataCollectors();
            e.registerTraceTransformers();
        }
        static getInstance() {
            return new this;
        }
        registerDataCollectors() {
            let e;
            (e = r("JSSelfProfiler")).registerDataCollector(new (r("JSSPPerformanceEntryCollector")), "JSSPPerformanceEntryCollector");
            e.registerDataCollector(new (r("JSSPUrlCollector")), "JSSPUrlCollector");
            e.registerDataCollector(new (r("JSSPMemoryCollector")), "JSSPMemoryCollector");
            e.registerDataCollector(new (r("JSSPEventCountCollector")), "JSSPEventCountCollector");
            if (o("JSSPSetting").isCollectingINP) {
                r("JSSelfProfiler").registerDataCollector(new (r("JSSPInteractionToNextPaintCollector")), "JSSPInteractionToNextPaintCollector");
                r("JSSelfProfiler").registerDataCollector(new (r("JSSPLongTaskLinker")), "JSSPLongTaskLinker", true);
            }
            if (o("JSSPSetting").isCollectingLoAF) {
                r("JSSelfProfiler").registerDataCollector(new (r("JSSPLongAnimationFrameCollector")), "JSSPLongAnimationFrameCollector");
            }
        }
        registerTraceTransformers() {
            let e;
            (e = r("JSSelfProfiler")).registerTraceTransformer(new (r("JSSPUAMarkerExtractor")), "JSSPUAMarkerExtractor");
            e.registerTraceTransformer(new (r("JSSPEmptySampleFilter")), "JSSPEmptySampleFilter");
            e.registerTraceTransformer(new (r("JSSPTraceSizeOptimizer")), "JSSPTraceSizeOptimizer");
            e.registerTraceTransformer(new (r("JSSPDevTraceFilter")), "JSSPDevTraceFilter");
            e.registerTraceTransformer(new (r("JSSPJestE2EMarker")), "JSSPJestE2EMarker");
            e.registerTraceTransformer(new (r("JSSPLongTaskMarker")), "JSSPLongTaskMarker");
            e.registerTraceTransformer(new (r("JSSPBrsidMarker")), "JSSPBrsidMarker");
            e.registerTraceTransformer(new (r("JSSPUrlMarker")), "JSSPUrlMarker");
            e.registerTraceTransformer(new (r("JSSPMemoryMarker")), "JSSPMemoryMarker");
            e.registerTraceTransformer(new (r("JSSPFELabsMarker")), "JSSPFELabsMarker");
            e.registerTraceTransformer(new (r("JSSPSubSpanMarker")), "JSSPSubSpanMarker");
            e.registerTraceTransformer(new (r("JSSPSampleDurationMarker")), "JSSPSampleDurationMarker");
            e.registerTraceTransformer(new (r("JSSPInteractionTraceDataMarker")), "JSSPInteractionTraceDataMarker");
            e.registerTraceTransformer(new (r("JSSPEventCountMarker")), "JSSPEventCountMarker");
            e.registerTraceTransformer(new (r("JSSPIdMarker")), "JSSPIdMarker");
            if (o("JSSPSetting").isCollectingINP) {
                r("JSSelfProfiler").registerTraceTransformer(new (r("JSSPInteractToNextPaintMarker")), "JSSPInteractToNextPaintMarker");
            }
            if (o("JSSPSetting").isCollectingLoAF) {
                r("JSSelfProfiler").registerTraceTransformer(new (r("JSSPLongAnimationFrameMarker")), "JSSPLongAnimationFrameMarker");
            }
            if (r("justknobx")._("2285")) {
                r("JSSelfProfiler").registerTraceTransformer(new (r("JSSPReactFrameDedupFilter"))((r("JSSelfProfilerConfig.experimental") == null ? undefined : r("JSSelfProfilerConfig.experimental").REMOVE_STACK_FRAME_IN_SCUBA) ?? []), "JSSPReactFrameDedupFilter");
            }
        }
    }
    l.default = e;
}, 98);