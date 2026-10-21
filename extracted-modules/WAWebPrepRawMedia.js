__d("WAWebPrepRawMedia", [
    "Promise",
    "WALogger",
    "WAWebMediaPrep",
    "WAWebMediaTypes",
    "WAWebProcessRawMedia"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t, a) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "Prepping raw media"
        ])));
        let i;
        if (a.isPtt === true) {
            i = o("WAWebMediaTypes").OUTWARD_TYPES.PTT;
        } else if (a.asDocument === true) {
            i = o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT;
        } else if (a.asGif === true) {
            i = o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO;
        } else if (a.isAudio === true) {
            i = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO;
        } else if (a.asSticker === true) {
            i = o("WAWebMediaTypes").OUTWARD_TYPES.STICKER;
        } else if (a.asStickerPack === true) {
            i = o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK;
        } else {
            i = o("WAWebMediaTypes").OUTWARD_TYPES.UNKNOWN;
        }
        var l = (s || (s = n("Promise"))).resolve(t).then((e)=>{
            e.autoreleaseWhenPromiseCompletes(l);
            return o("WAWebProcessRawMedia").processRawMedia(e, a);
        });
        return new (r("WAWebMediaPrep"))(i, l);
    }
    l.prepRawMedia = u;
}, 98);