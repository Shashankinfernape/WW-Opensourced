__d("ServerJSDefine", [
    "BitMap",
    "replaceTransportMarkers"
], function(t, n, r, o, a, i, l) {
    const e = 2;
    const s = 8;
    const u = new (r("BitMap"));
    var c = {
        getLoadedModuleHash: function() {
            return u.toCompressedString();
        },
        getModuleNameAndHash: function(t) {
            const e = t.split("@");
            return {
                hash: e[1],
                name: e[0]
            };
        },
        handleDefine: function(n, o, a, i, relativeTo) {
            if (i >= 0) {
                u.set(i);
            }
            define(n, o, function(t, o, s, u, c) {
                const e = {
                    data: a
                };
                r("replaceTransportMarkers")({
                    relativeTo
                }, e);
                if (i === -42) {
                    const d = a != null && typeof a === "object" && a.__throw8367__;
                    const m = new Error(`${n}: ${typeof d === "string" ? d : ""}`);
                    m.stack;
                    throw m;
                }
                c.exports = e.data;
            }, e | s);
        },
        handleDefines: function(t, n) {
            t.forEach((e)=>{
                let t;
                if (n != null) {
                    t = [].concat(e, [
                        n
                    ]);
                } else {
                    t = [].concat(e, [
                        null
                    ]);
                }
                c.handleDefine.apply(null, t);
            });
        }
    };
    l.default = c;
}, 98);