__d("PHPStrictQuerySerializer", [
    "PHPQuerySerializer",
    "flattenPHPQueryData"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        const t = [];
        const n = r("flattenPHPQueryData")(e);
        for(const o in n){
            if (Object.prototype.hasOwnProperty.call(n, o)) {
                const a = u(o);
                if (n[o] === undefined) {
                    t.push(a);
                } else {
                    t.push(`${a}=${u(String(n[o]))}`);
                }
            }
        }
        return t.join("&");
    }
    function u(e) {
        return encodeURIComponent(e);
    }
    l.serialize = s;
    l.encodeComponent = u;
    l.deserialize = (e || (e = o("PHPQuerySerializer"))).deserialize;
    l.decodeComponent = e.decodeComponent;
}, 98);