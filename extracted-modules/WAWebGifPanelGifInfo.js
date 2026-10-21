__d("WAWebGifPanelGifInfo", [
    "WAWebGifPanelConstants"
], function(t, n, r, o, a, i, l) {
    let e = 0;
    const s = function({ accessibilityLabel, nonVideoUrl, previewUrl, rank, trending, url, width }) {
        this.rank = rank;
        this.gifId = ++e;
        this.url = url;
        this.previewUrl = previewUrl != null && previewUrl !== "" ? previewUrl : url;
        this.nonVideoUrl = nonVideoUrl;
        this.width = width;
        this.widthStr = `${width}px`;
        this.ratioStr = `${Math.ceil(100 * o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT / width)}%`;
        this.trending = trending;
        this.accessibilityLabel = accessibilityLabel;
    };
    const u = [
        "en",
        "es",
        "pt",
        "id",
        "fr",
        "ar",
        "tr",
        "th",
        "vi",
        "de",
        "it",
        "ja",
        "zh-CN",
        "zh-TW",
        "ru",
        "ko",
        "pl",
        "nl",
        "ro",
        "hu",
        "sv",
        "cs",
        "hi",
        "bn",
        "da",
        "fa",
        "tl",
        "fi",
        "iw",
        "ms",
        "no",
        "uk"
    ];
    l.GifInfo = s;
    l.GIPHY_LOCALES = u;
}, 98);