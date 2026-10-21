__d("WAWebChatlessFavoriteCallButtonsLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebChatlessFavoriteCallButtons.react").__setRef("WAWebChatlessFavoriteCallButtonsLoadable").load();
        return e;
    }), "ChatlessFavoriteCallButtons");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return <></>;
        }
    });
    l.WAWebChatlessFavoriteCallButtonsLoadable = c;
}, 98);