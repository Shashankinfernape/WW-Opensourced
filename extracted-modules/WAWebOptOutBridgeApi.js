__d("WAWebOptOutBridgeApi", [
    "WAWebApiHydrateWidsUtil",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebOptOutListCollection",
    "WAWebSchemaOptOutList",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = {
        restoreOptOutList: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (o("WAWebMarketingMessagesUserFeedbackGatingUtils").isMMOptOutEnabled()) {
                    const e = yield o("WAWebSchemaOptOutList").getOptOutListTable().all();
                    o("WAWebOptOutListCollection").OptOutListCollection.initializeFromCache(o("WAWebApiHydrateWidsUtil").hydrateWids(e));
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateOptOutListCollection: function({ wids }) {
            o("WAWebOptOutListCollection").OptOutListCollection.replaceAllWith(wids);
        },
        updateOptOutListModelInCollection: o("WAWebOptOutListCollection").OptOutListCollection.updateOptOutListInCollectionAndDb
    };
    l.OptOutBridgeApi = e;
}, 98);