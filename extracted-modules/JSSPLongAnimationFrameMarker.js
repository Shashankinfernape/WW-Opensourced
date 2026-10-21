__d("JSSPLongAnimationFrameMarker", [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 300;
    const s = ((t)=>{
        function r() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getLoAFDataList = function({ LoAFEntryList }) {
            if (LoAFEntryList == null) {
                return null;
            }
            const n = LoAFEntryList.map((LoAFRecord)=>{
                const { endTime, startTime } = LoAFRecord;
                const r = {
                    LoAFTotalScriptExecutionDuration: LoAFRecord.LoAFTotalScriptExecutionDuration,
                    LoAFTotalRenderToStyleAndLayoutDuration: LoAFRecord.LoAFTotalRenderToStyleAndLayoutDuration,
                    LoAFTotalStyleAndLayoutToPaintDuration: LoAFRecord.LoAFTotalStyleAndLayoutToPaintDuration,
                    duration: endTime - startTime
                };
                return {
                    LoAFRecord,
                    metadata: r
                };
            });
            return n.sort((e, t)=>e.LoAFRecord.startTime - t.LoAFRecord.startTime);
        };
        r_prototype.transform = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
                const a = this;
                const i = this.getLoAFDataList(r);
                if (i == null) {
                    return t;
                }
                t.metadata = babelHelpers.extends({}, t.metadata, {
                    LoAFDurations: [],
                    LoAFTotalScriptExecutionDurations: [],
                    LoAFTotalRenderToStyleAndLayoutDurations: [],
                    LoAFTotalStyleAndLayoutToPaintDurations: []
                });
                for (const l of i){
                    const s = t.metadata;
                    const u = l.metadata;
                    s.LoAFDurations.push(u.duration);
                    s.LoAFTotalScriptExecutionDurations.push(u.LoAFTotalScriptExecutionDuration);
                    s.LoAFTotalRenderToStyleAndLayoutDurations.push(u.LoAFTotalRenderToStyleAndLayoutDuration);
                    s.LoAFTotalStyleAndLayoutToPaintDurations.push(u.LoAFTotalStyleAndLayoutToPaintDuration);
                }
                const c = function*(n) {
                    yield o("JSSelfProfilerUtils").nextEventLoop(function() {
                        return a.batchProcess(t, n, i);
                    });
                };
                for(let d = 0; d < t.samples.length; d += e){
                    yield* c(d);
                }
                return t;
            });
            function r(e, n, r) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.batchProcess = function(n, r, a) {
            for(let t = Math.min(r + e, n.samples.length), i = r; i < t; ++i){
                const l = n.samples[i];
                for(let s = 0; s < a.length; ++s){
                    const u = a[s].LoAFRecord;
                    if (u.startTime <= l.timestamp && u.endTime > l.timestamp) {
                        l.LoAFId = s;
                        o("JSSelfProfilerUtils").addMarkerToSample(l, "long-animation-frame");
                        break;
                    }
                }
            }
        };
        return r;
    })(r("JSSPTraceBaseTransformer"));
    l.default = s;
}, 98);