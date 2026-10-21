__d("mergeRefs", [
    "FBLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(...t_1) {
        return function(e) {
            const n = [];
            t_1.forEach((t)=>{
                if (t != null) {
                    if (typeof t === "function") {
                        const o = t(e);
                        if (typeof o === "function") {
                            n.push(o);
                        } else {
                            n.push(function() {
                                return t(null);
                            });
                        }
                        return;
                    }
                    if (typeof t === "object") {
                        t.current = e;
                        n.push(function() {
                            t.current = null;
                        });
                        return;
                    }
                    r("FBLogger")("comet_ui").mustfix("mergeRefs cannot handle Refs of type boolean, number or string, received ref %s of type %s", String(t), typeof t);
                }
            });
            return function() {
                n.forEach((e)=>e());
            };
        };
    }
    l.default = e;
}, 98);