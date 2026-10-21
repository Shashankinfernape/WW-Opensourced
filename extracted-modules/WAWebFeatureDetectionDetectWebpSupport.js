__d("WAWebFeatureDetectionDetectWebpSupport", [
    "WAPromiseTimeout",
    "WAWebBoolFunc",
    "WAWebMediaLoad"
], function(t, n, r, o, a, i, l) {
    const e = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    const s = 30000;
    let u = null;
    let c = null;
    function d() {
        if (u == null) {
            u = o("WAPromiseTimeout").promiseTimeout(o("WAWebMediaLoad").loadImage(e).then((e)=>e.height === 2), s).catch(o("WAWebBoolFunc").returnFalse).then((e)=>{
                c = e;
                return e;
            });
        }
        return u;
    }
    function m() {
        return c;
    }
    l.detectWebpSupport = d;
    l.getCachedWebpSupport = m;
}, 98);