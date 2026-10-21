__d("WABlobToArrayBuffer", [
    "Promise",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t) {
        if ("arrayBuffer" in t) {
            return t.arrayBuffer();
        }
        return new (e || (e = n("Promise")))(function(e, n) {
            const o = new FileReader;
            o.onload = function() {
                const t = o.result;
                if (t instanceof ArrayBuffer) {
                    e(t);
                } else {
                    n(r("err")(`blobToArrayBuffer got error because result is not ArrayBuffer: ${typeof t}`));
                }
            };
            o.onerror = function() {
                n(o.error ?? r("err")("blobToArrayBuffer got unknown error"));
            };
            o.readAsArrayBuffer(t);
        });
    }
    l.blobToArrayBuffer = s;
}, 98);