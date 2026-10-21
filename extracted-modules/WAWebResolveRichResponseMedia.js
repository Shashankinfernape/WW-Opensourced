__d("WAWebResolveRichResponseMedia", [
    "Promise",
    "WAWebUnifiedResponseUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = new Map;
            if (t == null || r == null || r.length === 0) {
                return a;
            }
            const i = new Map;
            for (const l of r){
                i.set(l.id, l);
            }
            const s = yield (e || (e = n("Promise"))).all(o("WAWebUnifiedResponseUtils").getImaginePrimitives(t).map((e)=>c(e, i)));
            for (const u of s){
                if (u != null) {
                    a.set(u.mediaUrl, u.download);
                }
            }
            return a;
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const url = e.media.url;
            if (url == null || url === "" || o("WAWebUnifiedResponseUtils").isAnimateImagineType(e.imagine_type)) {
                return null;
            }
            const i = yield o("WAWebUnifiedResponseUtils").computeRichResponseMediaId(url);
            const l = t.get(i)?.previewMedia;
            if (l == null) {
                return null;
            }
            return {
                mediaUrl: url,
                download: {
                    directPath: l.directPath,
                    mediaKey: l.mediaKey,
                    encFilehash: l.fileEncSha256,
                    filehash: l.fileSha256,
                    mimetype: l.mimetype ?? e.media.mime_type,
                    mediaKeyTimestamp: l.mediaKeyTimestamp
                }
            };
        });
        return d.apply(this, arguments);
    }
    l.resolveRichResponseMediaDescriptors = s;
}, 98);