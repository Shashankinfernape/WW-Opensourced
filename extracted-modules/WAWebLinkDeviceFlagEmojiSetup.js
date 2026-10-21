__d("WAWebLinkDeviceFlagEmojiSetup", [
    "Promise",
    "WAWebAssetLoaderSingleton",
    "WAWebEmojiConst",
    "WAWebMobilePlatforms",
    "asyncToGeneratorRuntime",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = (s = r("requireDeferred"))("WAWebEmojiJsonWaEmojiCategory").__setRef("WAWebLinkDeviceFlagEmojiSetup");
    const c = s("WAWebEmojiJsonWaEmojiUnicode").__setRef("WAWebLinkDeviceFlagEmojiSetup");
    const d = s("WAWebEmojiSetup").__setRef("WAWebLinkDeviceFlagEmojiSetup");
    const m = s("WAWebFlagEmojiAssetLoader").__setRef("WAWebLinkDeviceFlagEmojiSetup");
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield (e || (e = n("Promise"))).all([
                m.load(),
                d.load(),
                c.load(),
                u.load()
            ]);
            const r = t[0];
            const a = t[1];
            const orderedEmojis = t[2];
            const categorizedEmojis = t[3];
            const r_flagEmojiAssetMapCreator = r.flagEmojiAssetMapCreator;
            const p = {
                orderedEmojis,
                categorizedEmojis,
                selector: "wa"
            };
            o("WAWebAssetLoaderSingleton").AssetLoader.setPlatform(o("WAWebMobilePlatforms").PLATFORMS.ANDROID);
            o("WAWebAssetLoaderSingleton").AssetLoader.initEmojiAsset(r_flagEmojiAssetMapCreator(p));
            a(o("WAWebEmojiConst").EMOJI_TYPE.WHATSAPP);
        });
        return _.apply(this, arguments);
    }
    l.default = p;
}, 98);