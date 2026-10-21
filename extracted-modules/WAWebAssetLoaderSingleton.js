__d("WAWebAssetLoaderSingleton", [
    "WAWebAssetLoader"
], function(t, n, r, o, a, i, l) {
    const e = new (o("WAWebAssetLoader")).AssetLoaderImpl;
    window.addEventListener("dpichange", function() {
        e.loadAssetsForCurrentDpi();
    });
    l.AssetLoader = e;
}, 98);