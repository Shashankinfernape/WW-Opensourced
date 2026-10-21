__d("WAWebJobLoadQuickPromotions", [
    "WATaskScheduler",
    "WAWebBackendApi",
    "WAWebCTWAConstants",
    "WAWebConsumerFetchQuickPromotions",
    "WAWebFetchQuickPromotions",
    "WAWebMobilePlatforms",
    "WAWebQuickPromotionGating",
    "WAWebSchemaQuickPromotions",
    "WAWebTasksTaskType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebBackendApi").frontendSendAndReceive("getUserLocale").then((t)=>o("WAWebSchemaQuickPromotions").getQuickPromotionsTable().all().then((()=>{
                    const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                        n.sort((e, t)=>e.data.qpConfigPriority - t.data.qpConfigPriority);
                        if (o("WAWebQuickPromotionGating").qpGraphQLEnabled()) {
                            const r = o("WAWebQuickPromotionGating").qpSurfaceIdsUsingGraphQL();
                            const a = n.filter((e)=>{
                                if (e == null) {
                                    return false;
                                }
                                const n = o("WAWebCTWAConstants").KNOWN_QP_SURFACES.get(e.surfaceId);
                                if (n == null) {
                                    return false;
                                }
                                const a = r.has(n);
                                return a && e.locale !== t;
                            });
                            if (a.length > 0) {
                                if (e === "app-launch") {
                                    const i = o("WAWebMobilePlatforms").isSMB() ? o("WAWebFetchQuickPromotions").fetchQuickPromotions : o("WAWebConsumerFetchQuickPromotions").fetchConsumerQuickPromotions;
                                    i().then(()=>{
                                        o("WATaskScheduler").rescheduleNow(o("WAWebTasksTaskType").TaskType.FETCH_QUICK_PROMOTIONS);
                                    });
                                    return;
                                }
                                if (e === "fetch-success") {
                                    return;
                                }
                            }
                        }
                        o("WAWebBackendApi").frontendFireAndForget("loadedQuickPromotions", {
                            promotions: n
                        });
                    });
                    return function(e) {
                        return r.apply(this, arguments);
                    };
                })()));
        });
        return s.apply(this, arguments);
    }
    l.loadQuickPromotions = e;
}, 98);