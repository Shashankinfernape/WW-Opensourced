__d("WAWebFavoriteStickerModel", [
    "WAWebBaseModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.sticker = o("WAWebBaseModel").prop();
            t.timestamp = o("WAWebBaseModel").prop();
            t.stickerHashWithoutMeta = o("WAWebBaseModel").prop();
            t.isFavorite = o("WAWebBaseModel").prop();
            t.deviceId = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "favoriteSticker";
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);