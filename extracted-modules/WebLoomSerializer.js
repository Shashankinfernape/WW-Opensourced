__d("WebLoomSerializer", [], function(t, n, r, o, a, i) {
    "use strict";
    function e() {
        return !(!window.Uint8Array || !window.btoa);
    }
    function l(t, n, r, o) {
        const a = r.flushEvents();
        if (!e()) {
            return null;
        }
        const { start_time_us, end_time_us } = n;
        const s = start_time_us / 1000;
        const u = end_time_us / 1000;
        if (o != null) {
            const c = s - o.stats.timeOrigin;
            const d = u - o.stats.timeOrigin;
            o.trace.samples = o.trace.samples.filter((e)=>e.timestamp >= c && e.timestamp <= d);
        }
        let m = `${JSON.stringify(n)}
{}
${JSON.stringify(o || null).replace(/[^\x00-\x7F]/g, "")}
`;
        let p = 0;
        a.forEach((e)=>{
            const t = Math.round(e.timestamp * 1000);
            if (!(t < start_time_us || t > end_time_us)) {
                const n = t - p;
                p = t;
                const r = e.event;
                const o = [
                    n,
                    r.type
                ];
                switch(r.type){
                    case "QPL_ANNOTATION":
                        o.push(r.markerId);
                        o.push(r.instanceKey);
                        o.push(r.annotationKey);
                        o.push(r.annotationValue);
                        break;
                    case "QPL_START":
                        o.push(r.markerId);
                        o.push(r.instanceKey);
                        break;
                    case "QPL_END":
                        o.push(r.markerId);
                        o.push(r.instanceKey);
                        o.push(r.action);
                        break;
                    case "QPL_POINT":
                        o.push(r.markerId);
                        o.push(r.instanceKey);
                        o.push(r.name);
                        if (r.data != null) {
                            o.push(r.data);
                        }
                        break;
                    case "RESOURCE_TIMING_START":
                        o.push(r.resourceType);
                        o.push(r.resourceId);
                        o.push(r.resourceName);
                        o.push(r.encodedSize);
                        o.push(r.decodedSize);
                        o.push(r.transferSize);
                        o.push(r.responseStatus);
                        break;
                    case "RESOURCE_TIMING_END":
                        o.push(r.resourceType);
                        o.push(r.resourceId);
                        break;
                    case "RESOURCE_TIMING_POINT":
                        o.push(r.resourceType);
                        o.push(r.resourceId);
                        o.push(r.pointName);
                        break;
                    case "INTERACTION_TRACE_START":
                        o.push(r.traceId);
                        o.push(r.execUnitName);
                        o.push(r.blockName);
                        o.push(r.blockType);
                        o.push(r.traceType);
                        break;
                    case "INTERACTION_TRACE_END":
                        o.push(r.traceId);
                        o.push(r.execUnitName);
                        o.push(r.blockName);
                        o.push(r.blockType);
                        o.push(r.traceType);
                        o.push(r.blockAnnotations);
                        break;
                    case "INTERACTION_TRACE_POINT":
                        o.push(r.traceId);
                        o.push(r.execUnitName);
                        o.push(r.blockName);
                        o.push(r.pointName);
                        o.push(r.pointAnnotations);
                        break;
                    case "VISUAL_COMPLETION_RECT":
                        o.push(r.elementType);
                        o.push(r.depth);
                        o.push(r.x);
                        o.push(r.y);
                        o.push(r.width);
                        o.push(r.height);
                        o.push(r.mutationType);
                        o.push(r.lateMutationType);
                        break;
                    case "VISUAL_COMPLETION_PROGRESS":
                        o.push(r.progress);
                        break;
                    case "JS_SCHEDULER_QUEUE":
                        o.push(r.priority);
                        o.push(r.queueSize);
                        break;
                }
                m += `${JSON.stringify(o)}
`;
            }
        });
        return t.compressStringToSnappy(m);
    }
    i.isSupported = e;
    i.serialize = l;
}, 66);