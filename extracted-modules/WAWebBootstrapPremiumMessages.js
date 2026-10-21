__d("WAWebBootstrapPremiumMessages", [
    "Promise",
    "WAWebDebounce",
    "WAWebMiscGatingUtils",
    "WAWebMsgCollection",
    "WAWebPremiumMessageCollection",
    "WAWebPremiumMessageSchema",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 250;
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!o("WAWebMiscGatingUtils").isRambutanEnabled()) {
                return (e || (e = n("Promise"))).resolve();
            }
            const t = yield o("WAWebPremiumMessageSchema").getPremiumMessageTable().all();
            o("WAWebPremiumMessageCollection").PremiumMessageCollection.initializeFromCache(t);
        });
        return c.apply(this, arguments);
    }
    function d() {
        if (o("WAWebMiscGatingUtils").isRambutanEnabled()) {
            o("WAWebMsgCollection").MsgCollection.listenTo(o("WAWebMsgCollection").MsgCollection, "add", r("WAWebDebounce")(m, s, {
                leading: true
            }));
            o("WAWebPremiumMessageCollection").PremiumMessageCollection.listenTo(o("WAWebPremiumMessageCollection").PremiumMessageCollection, "add", function(e) {
                return e.hydrateMessages();
            });
        }
    }
    function m() {
        o("WAWebPremiumMessageCollection").PremiumMessageCollection.getModelsArray().forEach((e)=>{
            e.hydrateMessages();
        });
    }
    l.restorePremiumMessages = u;
    l.bindPremiumMessageListeners = d;
}, 98);