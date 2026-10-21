__d("JSSPInteractToNextPaintMarker", [
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
        r_prototype.getINPDataList = function({ INPEntryList }) {
            if (INPEntryList == null) {
                return null;
            }
            const n = INPEntryList.map((INPRecord)=>{
                const { endTime, processingEnd, processingStart, startTime } = INPRecord;
                const inputDelay = processingStart - startTime;
                const processingTime = processingEnd - processingStart;
                const presentationDelay = endTime - processingEnd;
                const e_eventType = INPRecord.eventType;
                const eventTargetComponent = INPRecord.componentName ?? "";
                const d = {
                    inputDelay,
                    processingTime,
                    presentationDelay,
                    duration: endTime - startTime,
                    eventType: e_eventType,
                    eventTargetComponent
                };
                return {
                    INPRecord,
                    metadata: d
                };
            });
            return n.sort((e, t)=>e.INPRecord.startTime - t.INPRecord.startTime);
        };
        r_prototype.transform = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
                const a = this;
                const i = this.getINPDataList(r);
                if (i == null) {
                    return t;
                }
                t.metadata = babelHelpers.extends({}, t.metadata, {
                    INPInputDelays: [],
                    INPProcessingTimes: [],
                    INPPresentationDelays: [],
                    INPDurations: [],
                    INPEventTypes: [],
                    INPEventTargetComponentNames: []
                });
                for (const l of i){
                    const s = t.metadata;
                    const u = l.metadata;
                    s.INPInputDelays.push(u.inputDelay);
                    s.INPProcessingTimes.push(u.processingTime);
                    s.INPPresentationDelays.push(u.presentationDelay);
                    s.INPDurations.push(u.duration);
                    s.INPEventTypes.push(l.metadata.eventType);
                    s.INPEventTargetComponentNames.push(l.metadata.eventTargetComponent);
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
                    const u = a[s].INPRecord;
                    if (u.startTime <= l.timestamp && u.endTime > l.timestamp) {
                        l.INPId = s;
                        o("JSSelfProfilerUtils").addMarkerToSample(l, "interaction-to-next-paint");
                        break;
                    }
                }
            }
        };
        return r;
    })(r("JSSPTraceBaseTransformer"));
    l.default = s;
}, 98);