__d("WAWebMediaStoreMetaInfo", [
    "WAWebLruMediaStorage",
    "WAWebMediaLruIdbStoreUtils",
    "WAWebSchemaLruMediaMetaInfo",
    "WAWebSizeLruObjectStore"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t, dispose) {
            let a;
            const i = {
                primaryIndex: (a = o("WAWebSchemaLruMediaMetaInfo")).metaInfoPrimaryIndex,
                dateIndex: a.metaInfoDateIndex,
                sizeIndex: a.metaInfoSizeIndex,
                maxSize: t,
                dispose
            };
            const l = new (r("WAWebMediaLruIdbStoreUtils"))(o("WAWebLruMediaStorage").initialize, a.IdbMetaInfoTable);
            return e.call(this, l, i) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("WAWebSizeLruObjectStore"));
    l.default = e;
}, 98);