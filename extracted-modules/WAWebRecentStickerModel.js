__d("WAWebRecentStickerModel", [
    "WAWebBaseModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.sticker = o("WAWebBaseModel").prop();
            t.timestamp = o("WAWebBaseModel").prop();
            t.msgId = o("WAWebBaseModel").prop();
            t.weight = o("WAWebBaseModel").prop();
            t.isNewSticker = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "recentSticker";
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);