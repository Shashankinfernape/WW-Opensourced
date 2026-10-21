__d("WAWebMusicMsgPlayerHostLoadable.react", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebMusicMsgPlayerHost.react").__setRef("WAWebMusicMsgPlayerHostLoadable.react").load();
        return e;
    }), "MusicMsgPlayerHost");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return <></>;
        }
    });
    l.WAWebMusicMsgPlayerHostLoadable = c;
}, 98);