__d("WAWebMusicMsgInfoPopupLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebMusicMsgInfoPopup.react").__setRef("WAWebMusicMsgInfoPopupLoadable").load();
        return e.showMusicMsgInfoPopup;
    }), "MusicMsgInfoPopup");
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const r = yield e();
            r(t, n);
        });
        return u.apply(this, arguments);
    }
    l.showMusicMsgInfoPopupLoadable = s;
}, 98);