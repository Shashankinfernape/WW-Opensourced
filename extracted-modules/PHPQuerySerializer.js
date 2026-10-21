__d("PHPQuerySerializer", [
    "BaseDeserializePHPQueryData",
    "flattenPHPQueryData"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = [];
        const n = r("flattenPHPQueryData")(e);
        for(const o in n){
            if (Object.prototype.hasOwnProperty.call(n, o)) {
                const a = encodeComponent(o);
                if (n[o] === undefined) {
                    t.push(a);
                } else {
                    t.push(`${a}=${encodeComponent(String(n[o]))}`);
                }
            }
        }
        return t.join("&");
    }
    function encodeComponent(e) {
        return encodeURIComponent(e).replace(/%5D/g, "]").replace(/%5B/g, "[");
    }
    function u(e) {
        return o("BaseDeserializePHPQueryData").deserialize(e, c);
    }
    function c(e) {
        try {
            return decodeURIComponent(e.replace(/\+/g, " "));
        } catch (t) {
            return e;
        }
    }
    const d = {
        decodeComponent: c,
        deserialize: u,
        encodeComponent,
        serialize: e
    };
    i.exports = d;
}, 34);