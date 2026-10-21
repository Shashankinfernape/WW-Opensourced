__d("WAWebEmojiAssetLoaderCompletionTracker", [
    "WALogger",
    "WAWebAssetLoaderSingleton",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = (s || (s = o("react"))).createContext;
    const c = 1000;
    const d = 5000;
    const m = function() {
        const t = this;
        this.$1 = 0;
        this.$2 = false;
        this.$3 = false;
        this.beginPreload = function(e = false) {
            if (!t.$2) {
                t.$2 = true;
                self.setTimeout(function() {
                    o("WAWebAssetLoaderSingleton").AssetLoader.loadEmojis();
                }, e ? c : 0);
            }
        };
        this.beginPreloadFallback = function() {
            self.setTimeout(function() {
                t.beginPreload(false);
            }, d);
        };
        this.incrementLoadingEmojisCount = function() {
            if (!t.$2) {
                if (!t.$3) {
                    t.$3 = true;
                    t.$4 = self.performance.now();
                }
                t.$1 += 1;
            }
        };
        this.decrementLoadingEmojisCount = function() {
            if (!t.$2) {
                t.$1 -= 1;
                if (t.$1 === 0 && t.$3) {
                    t.beginPreload(true);
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "EmojiCompletionTracker:firstScreenEmojis complete in ",
                        " ms"
                    ])), Math.ceil(self.performance.now() - t.$4));
                }
            }
        };
        this.resetPreloadState = function() {
            t.$2 = false;
            t.$3 = false;
            t.$1 = 0;
        };
    };
    const p = new m;
    const _ = u(p);
    l.EmojiCompletionTracker = m;
    l.emojiCompletionTracker = p;
    l.InitialEmojisCompletionContext = _;
}, 98);