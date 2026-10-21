__d("ResourceTimingLoomProvider", [
    "clamp",
    "performanceNow",
    "sanitizeURIStringForLoom"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(initiatorType, resourceName) {
        const n = resourceName.substring(resourceName.lastIndexOf(".") + 1);
        if (n == "js" || n == "css") {
            return n;
        }
        if (initiatorType == "img" || n == "png" || n == "jpg" || n == "ico") {
            return "img";
        }
        return initiatorType;
    }
    class u {
        constructor(e, t, n){
            this.$1 = e;
            this.$2 = t;
            this.$3 = n;
        }
        static isSupported() {
            return window.performance && window.performance.getEntriesByType && window.performance.timing && window.performance.timing.navigationStart;
        }
        $4(t) {
            const e = this;
            const { endTime, entry, resourceId, resourceName, resourceType, startTime } = t;
            const u = this.$1;
            if (u != null) {
                const c = entry;
                u.buffer.addEvent({
                    type: "RESOURCE_TIMING_START",
                    resourceType,
                    resourceId,
                    resourceName,
                    encodedSize: c != null && typeof c.encodedBodySize === "number" ? c.encodedBodySize : 0,
                    decodedSize: c != null && typeof c.decodedBodySize === "number" ? c.decodedBodySize : 0,
                    transferSize: c != null && typeof c.transferSize === "number" ? c.transferSize : 0,
                    responseStatus: c != null && typeof c.responseStatus === "number" ? c.responseStatus : -1
                }, startTime);
                const d = (pointName, i)=>{
                    const t = i + e.$3.appStart;
                    u.buffer.addEvent({
                        type: "RESOURCE_TIMING_POINT",
                        resourceType,
                        resourceId,
                        pointName
                    }, r("clamp")(t, startTime, endTime));
                };
                d("requestStart", entry.requestStart);
                d("responseStart", entry.responseStart);
                u.buffer.addEvent({
                    type: "RESOURCE_TIMING_END",
                    resourceType,
                    resourceId
                }, endTime);
            }
        }
        $5(t) {
            if (this.$3.sanitizeURIs) {
                return r("sanitizeURIStringForLoom")(t, this.$2);
            }
            const e = t.indexOf("?");
            if (e == -1) {
                return t;
            }
            return t.substring(0, e);
        }
        loomTraceWillEnd() {
            const t = this;
            const n = this.$1;
            if (n != null) {
                const o = n.startTime;
                const a = (e || (e = r("performanceNow")))() + this.$3.appStart;
                window.performance.getEntriesByType("resource").filter((e)=>e.startTime < e.responseEnd && e.startTime + t.$3.appStart >= o && e.responseEnd + t.$3.appStart <= a).forEach((e, n)=>{
                    const r = e.startTime + t.$3.appStart;
                    const o = e.responseEnd + t.$3.appStart;
                    const resourceName = t.$5(e.name);
                    const i = s(e.initiatorType, resourceName);
                    t.$4({
                        entry: e,
                        resourceName,
                        resourceId: n,
                        resourceType: i,
                        startTime: r,
                        endTime: o
                    });
                });
                const i = window.performance.getEntriesByType("navigation")[0];
                const l = typeof PerformanceNavigationTiming !== "undefined" && i instanceof PerformanceNavigationTiming ? i : null;
                if (l != null && (l.responseEnd === 0 || l.responseEnd + this.$3.appStart >= o)) {
                    const u = "document";
                    const c = -1;
                    const d = o > this.$3.appStart ? o : this.$3.appStart;
                    const m = l.responseEnd === 0 ? a : l.responseEnd + this.$3.appStart;
                    this.$4({
                        entry: l,
                        resourceName: this.$5(location.href),
                        resourceId: c,
                        resourceType: u,
                        startTime: d,
                        endTime: m
                    });
                }
            }
            this.$1 = null;
        }
    }
    const c = {
        loomProviderId: "ResourceTiming",
        isSupported: function() {
            return u.isSupported();
        },
        getInstance: function(t, n, r) {
            return new u(t, n, r);
        }
    };
    l.default = c;
}, 98);