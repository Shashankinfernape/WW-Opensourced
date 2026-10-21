__d("BanzaiCompressionUtils", [
    "FBLogger",
    "Promise",
    "SnappyCompressUtil",
    "once",
    "performanceNow"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    let l;
    const s = n("once")(function() {
        if (t.CompressionStream == null || t.Response == null) {
            return false;
        }
        try {
            const e = new t.CompressionStream("deflate");
        } catch (e) {
            return false;
        }
        return true;
    });
    var u = {
        compressWad: function(r, o) {
            if (r.needs_compression !== true) {
                delete r.needs_compression;
                return;
            }
            if (o === "deflate") {
                u.compressWad(r, "snappy");
                return;
            }
            const t = (e || (e = n("performanceNow")))();
            const a = JSON.stringify(r.posts);
            let i;
            switch(o){
                case "snappy":
                    i = n("SnappyCompressUtil").compressStringToSnappyBinary(a);
                    break;
                case "snappy_base64":
                    i = n("SnappyCompressUtil").compressStringToSnappy(a);
                    break;
                default:
                    break;
            }
            if (i != null && i.length < a.length) {
                r.posts = i;
                r.compression = o;
                r.snappy_ms = Math.ceil((e || (e = n("performanceNow")))() - t);
                if (r.snappy_ms < 0) {
                    n("FBLogger")("BanzaiCompressionUtils").warn("Expected positive snappy_ms but got %s", r.snappy_ms);
                }
            } else {
                r.compression = "";
            }
            delete r.needs_compression;
        },
        compressWadAsync: function(o, a) {
            if (a !== "deflate") {
                u.compressWad(o, "snappy");
                return (l || (l = n("Promise"))).resolve();
            }
            if (!s()) {
                return u.compressWadAsync(o, "snappy");
            }
            const r = (e || (e = n("performanceNow")))();
            const i = JSON.stringify(o.posts);
            const body = new Response(i).body;
            if (!body) {
                o.compression = "";
                delete o.needs_compression;
                return (l || (l = n("Promise"))).resolve();
            }
            const d = body.pipeThrough(new t.CompressionStream("deflate"));
            return new Response(d).arrayBuffer().then((t)=>{
                if (t.byteLength < i.length) {
                    o.posts = new Uint8Array(t);
                    o.compression = a;
                    o.snappy_ms = Math.ceil((e || (e = n("performanceNow")))() - r);
                    if (o.snappy_ms < 0) {
                        n("FBLogger")("BanzaiCompressionUtils").warn("Expected positive snappy_ms but got %s", o.snappy_ms);
                    }
                } else {
                    o.compression = "";
                }
                delete o.needs_compression;
            }).catch(()=>{
                o.compression = "";
                delete o.needs_compression;
            });
        },
        outOfBandsPosts: function(t) {
            let e = 0;
            const n = {};
            for (const r of t){
                const o = r.compression === "snappy" || r.compression === "deflate";
                if (o) {
                    const a = new Blob([
                        r.posts
                    ], {
                        type: "application/octet-stream"
                    });
                    r.posts = String(e);
                    n[`post_${String(e)}`] = a;
                    e++;
                }
            }
            return n;
        }
    };
    a.exports = u;
}, null);