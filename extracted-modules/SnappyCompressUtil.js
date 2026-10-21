__d("SnappyCompressUtil", [
    "SnappyCompress"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const { Uint8Array, btoa, TextEncoder } = t;
    function compressUint8ArrayToSnappy(e) {
        if (e == null || btoa == null) {
            return null;
        }
        let t = null;
        try {
            t = r("SnappyCompress").compress(e);
        } catch (e) {
            return null;
        }
        const n = Array.from(t, function(e) {
            return String.fromCharCode(e);
        }).join("");
        return btoa(n);
    }
    var d = {
        compressUint8ArrayToSnappy,
        compressStringToSnappy: function(r) {
            if (Uint8Array == null || btoa == null) {
                return null;
            }
            const n = new t.Uint8Array(r.length);
            for(let o = 0; o < r.length; o++){
                const a = r.charCodeAt(o);
                if (a > 127) {
                    return null;
                }
                n[o] = a;
            }
            return d.compressUint8ArrayToSnappy(n);
        },
        compressStringToSnappyBinary: function(n) {
            if (Uint8Array == null) {
                return null;
            }
            let t = null;
            if (TextEncoder != null) {
                t = new TextEncoder().encode(n);
            } else {
                t = new Uint8Array(n.length);
                for(let o = 0; o < n.length; o++){
                    const a = n.charCodeAt(o);
                    if (a > 127) {
                        return null;
                    }
                    t[o] = a;
                }
            }
            let i = null;
            try {
                i = r("SnappyCompress").compress(t);
            } catch (e) {
                return null;
            }
            return i;
        }
    };
    i.exports = d;
}, 34);