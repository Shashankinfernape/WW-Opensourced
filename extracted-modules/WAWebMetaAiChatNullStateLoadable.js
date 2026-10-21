__d("WAWebMetaAiChatNullStateLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebMetaAiChatNullState.react").__setRef("WAWebMetaAiChatNullStateLoadable").load();
        return e;
    }), "MetaAiChatNullState");
    const c = r("WAWebLoadable")({
        loader: u,
        loading: function() {
            return <></>;
        }
    });
    l.WAWebMetaAiChatNullStateLoadable = c;
}, 98);