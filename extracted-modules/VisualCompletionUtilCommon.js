__d("VisualCompletionUtilCommon", [
    "currentVCTraces"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return {
            bottom: e.bottom,
            left: e.left,
            right: e.right,
            top: e.top
        };
    }
    function s(e) {
        return (e.right - e.left) * (e.bottom - e.top);
    }
    function u(e, t) {
        return {
            bottom: Math.max(Math.min(e.bottom, t.bottom), t.top),
            left: Math.min(Math.max(e.left, t.left), t.right),
            right: Math.max(Math.min(e.right, t.right), t.left),
            top: Math.min(Math.max(e.top, t.top), t.bottom)
        };
    }
    function c(e) {
        return e.split("#")[0];
    }
    function d(e) {
        const t = [];
        const n = o("currentVCTraces").getCurrentVCTraces();
        n.forEach((n)=>{
            for(let r = e; r != null;){
                if (n.mutationRoots.has(r)) {
                    t.push(n);
                    break;
                }
                r = r.parentElement;
            }
        });
        return t;
    }
    function m(e) {
        const t = [];
        d(e).forEach((n)=>{
            t.push(n.waitLoadingState(e));
        });
        return t;
    }
    function p(e) {
        d(e).forEach((t)=>{
            t.excludeElement(e);
        });
    }
    l.castToRect = e;
    l.getPixels = s;
    l.getRectIntersection = u;
    l.trimHash = c;
    l.findVCTraces = d;
    l.trackLoadingState = m;
    l.ignoreElement = p;
}, 98);