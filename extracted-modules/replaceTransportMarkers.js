__d("replaceTransportMarkers", [
    "BanzaiLazyQueue",
    "ge",
    "memoize"
], function(t, n, r, o, a, i, l) {
    const e = new Set;
    function s(t, a, i) {
        const l = i !== undefined ? a[i] : a;
        let u;
        if (Array.isArray(l)) {
            for(u = 0; u < l.length; u++){
                s(t, l, u);
            }
        } else if (l && typeof l === "object") {
            if (l.__m) {
                if (l.__lazy) {
                    a[i] = r("memoize")(n.bind(null, l.__m));
                } else {
                    a[i] = n.call(null, l.__m);
                }
            } else if (l.__jsr) {
                a[i] = new (n.call(null, "JSResourceReferenceImpl"))(l.__jsr).__setRef("replaceTransportMarkers");
            } else if (l.__dr) {
                a[i] = new (n.call(null, "RequireDeferredReference"))(l.__dr).__setRef("replaceTransportMarkers");
            } else if (l.__rc) {
                if (l.__rc[0] === null) {
                    a[i] = null;
                } else {
                    a[i] = n.call(null, l.__rc[0]);
                }
                if (l.__rc[1]) {
                    if (!e.has(l.__rc[1])) {
                        e.add(l.__rc[1]);
                        o("BanzaiLazyQueue").queuePost("require_cond_exposure_logging", {
                            identifier: l.__rc[1]
                        });
                    }
                }
            } else if (l.__e) {
                a[i] = r("ge")(l.__e);
            } else if (l.__rel) {
                a[i] = t.relativeTo;
            } else if (l.__bigPipeContext) {
                a[i] = t.bigPipeContext;
            } else if (l.__bbox) {
                a[i] = l.__bbox;
            } else {
                for(const c in l){
                    s(t, l, c);
                }
                if (l.__map) {
                    a[i] = new Map(l.__map);
                } else if (l.__set) {
                    a[i] = new Set(l.__set);
                } else if (l.__imm) {
                    const d = l.__imm;
                    const { method, value } = d;
                    a[i] = n.call(null, "immutable")[method](value);
                }
            }
        }
    }
    l.default = s;
}, 98);