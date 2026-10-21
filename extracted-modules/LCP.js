__d("LCP", [], function(t, n, r, o, a, i) {
    "use strict";
    const l = typeof window.PerformanceObserver?.supportedEntryTypes?.includes === "function" && window.PerformanceObserver.supportedEntryTypes.includes("largest-contentful-paint");
    function s() {
        if (document == null) {
            return [];
        }
        return Array.from(document.querySelectorAll('link[rel="preload"][as="image"]')).map((e)=>e.attributes.getNamedItem("href")?.value);
    }
    let u = null;
    let c = null;
    function d() {
        if (!(u != null || !l)) {
            u = new window.PerformanceObserver(function(e) {
                for (const t of e.getEntries()){
                    c = t;
                }
            });
            u.observe({
                buffered: true,
                type: "largest-contentful-paint"
            });
        }
    }
    function m() {
        if (l) {
            d();
            return function() {
                if (c == null) {
                    return null;
                }
                return {
                    className: c.element?.className,
                    element: c.element?.tagName,
                    elementRef: c.element,
                    size: c.size,
                    timestamp: c.startTime,
                    url: c.url,
                    preloaded: s().includes(c?.url)
                };
            };
        }
        return null;
    }
    i.canUseLCP = l;
    i.getLCPCallback = m;
}, 66);