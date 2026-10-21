__d("WAWebCopyStickerToClipboard", [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebCopyToClipboard",
    "WAWebStickerUtils",
    "WAWebStructuredClone",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("JSResourceForInteraction")("WAWeb-lottie-light-canvas").__setRef("WAWebCopyStickerToClipboard").load();
            return e;
        });
        return d.apply(this, arguments);
    }
    function m(t) {
        if (!o("WAWebCopyToClipboard").supportsCopyImageToClipboard()) {
            throw r("err")("Clipboard API not supported");
        }
        const a = p(t).then((e)=>{
            if (e == null) {
                return (u || (u = n("Promise"))).reject(r("err")("Failed to create canvas from lottie sticker"));
            }
            return new (u || (u = n("Promise")))(function(t, n) {
                return e.toBlob(function(e) {
                    if (e == null) {
                        n(r("err")("Failed to convert canvas to PNG blob"));
                    } else {
                        t(e);
                    }
                }, "image/png", 1);
            });
        });
        const i = new window.ClipboardItem({
            "image/png": a
        });
        navigator.clipboard.write([
            i
        ]).catch((t)=>o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Write image to clipboard failed"
            ]))).sendLogs(String(t)));
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield c();
            const a = document.createElement("canvas");
            a.width = o("WAWebStickerUtils").LOTTIE_STICKER_FULL_WIDTH;
            a.height = o("WAWebStickerUtils").LOTTIE_STICKER_FULL_HEIGHT;
            try {
                const context = r("nullthrows")(a.getContext("2d"));
                const l = t.loadAnimation({
                    renderer: "canvas",
                    animationData: r("WAWebStructuredClone")(e),
                    loop: false,
                    autoplay: false,
                    rendererSettings: {
                        context
                    }
                });
                return new (u || (u = n("Promise")))(function(e) {
                    l.addEventListener("DOMLoaded", function() {
                        return e(a);
                    });
                });
            } catch (error) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "LottieSticker: Copy image to clipboard failed"
                ]))).sendLogs(String(error));
                return null;
            }
        });
        return _.apply(this, arguments);
    }
    l.copyLottieStickerToClipboard = m;
    l.createCanvasFromLottieSticker = p;
}, 98);