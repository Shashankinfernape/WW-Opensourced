__d("WAWebMusicChatsConsumptionRefresherLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebMusicChatsConsumptionRefresher").__setRef("WAWebMusicChatsConsumptionRefresherLoadable").load();
        return e.refreshMusicChatsConsumption;
    }), "MusicChatsConsumptionRefresher");
    const s = (()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield e();
            return t(...arguments);
        });
        return function() {
            return t.apply(this, arguments);
        };
    })();
    l.refreshMusicChatsConsumptionLoadable = s;
}, 98);