__d("QueryString", [], function(t, n, r, o, a, i) {
    function encode(e) {
        const t = [];
        Object.keys(e).sort().forEach((n)=>{
            const r = e[n];
            if (r !== undefined) {
                if (r === null) {
                    t.push(n);
                    return;
                }
                t.push(`${encodeURIComponent(n)}=${encodeURIComponent(String(r))}`);
            }
        });
        return t.join("&");
    }
    function decode(e, t = false) {
        const n = {};
        if (e === "") {
            return {};
        }
        for(let r = e.split("&"), o = 0; o < r.length; o++){
            const a = r[o].split("=", 2);
            const i = decodeURIComponent(a[0]);
            if (t && Object.prototype.hasOwnProperty.call(n, i)) {
                const l = new URIError(`Duplicate key: ${i}`);
                l.stack;
                throw l;
            }
            n[i] = a.length === 2 ? decodeURIComponent(a[1]) : null;
        }
        return n;
    }
    function appendToUrl(t, n) {
        return t + (t.indexOf("?") !== -1 ? "&" : "?") + (typeof n === "string" ? n : encode(n));
    }
    const u = {
        encode,
        decode,
        appendToUrl
    };
    i.default = u;
}, 66);