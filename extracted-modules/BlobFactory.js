__d("BlobFactory", [
    "emptyFunction"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        try {
            new t.Blob;
            e = true;
        } catch (t) {
            e = false;
        }
    }
    const u = t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder || t.MSBlobBuilder;
    const c = t.Blob ? {
        getBlob: function(r, o) {
            r = r || [];
            o = o || {};
            if (e === void 0) {
                s();
            }
            if (e) {
                return new t.Blob(r, o);
            }
            const n = new u;
            for(let a = 0; a < r.length; a++){
                n.append(r[a]);
            }
            return n.getBlob(o.type);
        },
        isSupported: r("emptyFunction").thatReturnsTrue
    } : {
        getBlob: function(t, n) {},
        isSupported: r("emptyFunction").thatReturnsFalse
    };
    l.default = c;
}, 98);