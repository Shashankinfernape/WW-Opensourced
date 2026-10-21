__d("WAWebMediaHost", [
    "WAWebMmsMediaTypes"
], function(t, n, r, o, a, i, l) {
    const e = new Set(o("WAWebMmsMediaTypes").MEDIA_TYPE_VALUES);
    const s = Object.freeze({
        PRIMARY: "primary",
        FALLBACK: "fallback"
    });
    const u = (()=>{
        function e(t) {
            this.hostname = t.hostname;
            this.ips = t.ips || [];
            this.type = t.type;
            this.class = t.class;
            const n = c(t.rules);
            const { downloadBuckets: r, supportedDownloadTypes: o, supportedUploadTypes: a } = n;
            this.downloadBuckets = r;
            this.$1 = o;
            this.$2 = a;
            this.fallback = t.fallback != null ? new e(babelHelpers.extends({}, t, t.fallback, {
                type: "fallback",
                fallback: void 0
            })) : null;
        }
        const t = e.prototype;
        t.equals = function(t) {
            return this.hostname === t?.hostname;
        };
        t.isFallback = function() {
            return this.type === s.FALLBACK;
        };
        t.supportsDownloadMediaType = function(t) {
            return this.$1.has(d(t));
        };
        t.supportsUploadMediaType = function(t) {
            return this.$2.has(m(t));
        };
        t.setSelectedBucket = function(t) {
            this.selectedBucket = t;
        };
        return e;
    })();
    function c(t) {
        const n = t || [];
        let r;
        let o;
        let a;
        for (const i of n){
            if (i.download) {
                r = r ?? new Set;
                for (const l of i.download){
                    r.add(l);
                }
            }
            if (i.upload) {
                o = o ?? new Set;
                for (const s of i.upload){
                    o.add(s);
                }
            }
            if (i.downloadBuckets) {
                a = i.downloadBuckets.map((e)=>parseInt(e, 10));
            }
        }
        return {
            supportedDownloadTypes: r ?? e,
            supportedUploadTypes: o ?? e,
            downloadBuckets: a
        };
    }
    function d(e) {
        if (e === "ptv" || e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTV) {
            return o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO;
        }
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT) {
            return o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE;
        }
        if (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER_PACK) {
            return o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER_PACK;
        }
        return e;
    }
    function m(e) {
        switch(e){
            case "ptv":
                return o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO;
            case "product-catalog-image":
                return o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT;
            default:
                return e;
        }
    }
    l.HOST_TYPE = s;
    l.MediaHost = u;
}, 98);