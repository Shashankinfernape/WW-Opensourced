__d("WAWebMusicAttributionModalLoadable.react", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebMusicStatusAttribution.react").__setRef("WAWebMusicAttributionModalLoadable.react").load();
        return e.showMusicStatusAttributionModal;
    }), "MusicStatusAttributionModal");
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ closeModal, isFullscreen, msg, musicMetadata, renderModal, statusMediaController }) {
            const l = yield u();
            return l({
                closeModal,
                isFullscreen,
                msg,
                musicMetadata,
                renderModal,
                statusMediaController
            });
        });
        return d.apply(this, arguments);
    }
    l.showMusicStatusAttributionModalLoadable = c;
}, 98);