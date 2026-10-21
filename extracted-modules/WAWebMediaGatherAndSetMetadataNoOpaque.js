__d("WAWebMediaGatherAndSetMetadataNoOpaque", [
    "Promise",
    "WAFilteredCatch",
    "WAWebMediaDataUtils",
    "WAWebMediaLoad",
    "WAWebMediaLoadErrors",
    "WAWebMediaTypes",
    "WAWebStickerUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return o("WAWebMediaLoad").videoWidthHeightDuration(e);
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = yield (e || (e = n("Promise"))).resolve().then(()=>{
                switch(t.type){
                    case o("WAWebMediaTypes").TYPE.VIDEO:
                    case o("WAWebMediaTypes").TYPE.PTV:
                        return s(r).then((e)=>({
                                fullWidth: e.width,
                                fullHeight: e.height,
                                duration: e.duration !== undefined ? `${Math.ceil(e.duration)}` : undefined
                            }));
                    case o("WAWebMediaTypes").TYPE.IMAGE:
                        if (t.contentInfo.fullHeight != null && t.contentInfo.fullWidth != null && t.size === r.size) {
                            return null;
                        }
                        return o("WAWebMediaDataUtils").getImageWidthHeightNoOpaque(r).then((e)=>({
                                fullWidth: e.width,
                                fullHeight: e.height,
                                size: r.size
                            }));
                    case o("WAWebMediaTypes").TYPE.STICKER:
                        return o("WAWebStickerUtils").parseStickerMetadata(r, t);
                    case o("WAWebMediaTypes").TYPE.AUDIO:
                        return {};
                    default:
                        return {};
                }
            }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMediaLoadErrors").MediaUnsupportedError, function(e) {
                t.consolidate({});
                throw e;
            }));
            if (a != null) {
                t.consolidate(babelHelpers.extends({}, a));
            }
        });
        return c.apply(this, arguments);
    }
    l.gatherAndSetMetadataNoOpaque = u;
}, 98);