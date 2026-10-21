__d("WAWebStickerPackModelMd", [
    "WAWebBaseModel",
    "WAWebStickerPackStickerCollection"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.index = o("WAWebBaseModel").prop();
            t.id = o("WAWebBaseModel").prop();
            t.name = o("WAWebBaseModel").prop();
            t.publisher = o("WAWebBaseModel").prop();
            t.description = o("WAWebBaseModel").prop();
            t.fileSize = o("WAWebBaseModel").prop();
            t.imageDataHash = o("WAWebBaseModel").prop();
            t.animated = o("WAWebBaseModel").prop();
            t.isLottie = o("WAWebBaseModel").prop();
            t.premium = o("WAWebBaseModel").prop();
            t.previewImageIds = o("WAWebBaseModel").prop();
            t.trayImageId = o("WAWebBaseModel").prop();
            t.trayImagePreview = o("WAWebBaseModel").prop();
            t.stickers = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            e.prototype.initialize.call(this);
            const t = true;
            this.stickers = new (r("WAWebStickerPackStickerCollection"))(this.id, t);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "stickerPackMd";
    const s = o("WAWebBaseModel").defineModel(e);
    l.StickerPack = e;
    l.StickerPackModel = s;
}, 98);