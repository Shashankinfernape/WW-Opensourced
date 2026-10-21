__d("PHPQuerySerializerNoEncoding", [
    "BaseDeserializePHPQueryData",
    "flattenPHPQueryData"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = [];
        const n = r("flattenPHPQueryData")(e);
        for(const o in n){
            if (Object.prototype.hasOwnProperty.call(n, o)) {
                const a = o;
                if (n[o] === undefined) {
                    t.push(a);
                } else {
                    t.push(`${a}=${String(n[o])}`);
                }
            }
        }
        return t.join("&");
    }
    function encodeComponent(e) {
        return e;
    }
    function u(e) {
        return o("BaseDeserializePHPQueryData").deserialize(e, c);
    }
    function c(e) {
        return e;
    }
    const d = {
        decodeComponent: c,
        deserialize: u,
        encodeComponent,
        serialize: e
    };
    l.default = d;
}, 98);