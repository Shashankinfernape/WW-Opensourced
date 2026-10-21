__d("WAWebMusicSoundAnimationLoadable.react", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebMusicMsgSoundAnimation.react").__setRef("WAWebMusicSoundAnimationLoadable.react").load();
        return e;
    }), "MusicSoundAnimation");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return <></>;
        }
    });
    l.WAWebMusicSoundAnimationLoadable = c;
}, 98);