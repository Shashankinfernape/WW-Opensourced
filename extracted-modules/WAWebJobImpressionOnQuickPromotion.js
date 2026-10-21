__d("WAWebJobImpressionOnQuickPromotion", [
    "WALogger",
    "WASmaxInAppCommsEventRPC",
    "WAWebConsumerQuickPromotionActionMutation",
    "WAWebDefinePersistedJob",
    "WAWebMobilePlatforms",
    "WAWebModelStorageUtils",
    "WAWebQuickPromotionActionMutation",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d({ id: r, ts: a }) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "quick-promotions"
        ], (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([i]) {
                const l = yield i.get(r);
                if (l == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "impressionOnQuickPromotion: promotion not found"
                    ])));
                    return;
                }
                const s = babelHelpers.extends({}, l.tracking, {
                    impressions: l.tracking.impressions + 1
                });
                const u = s.lastImpressionTs;
                if (u == null || a > u) {
                    s.lastImpressionTs = a;
                }
                yield i.merge(r, {
                    tracking: s
                });
                return {
                    surfaceId: l.surfaceId,
                    instanceLogData: l.data.qpConfigInstanceLogData?.elementValue
                };
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })()).then((e)=>o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("loadQuickPromotions", {
                trigger: "user-action"
            }).then(()=>e));
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { id: n, ts: r }) {
            const a = e?.instanceLogData != null ? String.fromCharCode.apply(null, e.instanceLogData) : "";
            const i = e?.surfaceId;
            if (i == null) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "impressionOnQuickPromotion: surfaceId for GraphQL not found"
                ])));
            } else {
                let d;
                try {
                    d = o("WAWebMobilePlatforms").isSMB() ? yield o("WAWebQuickPromotionActionMutation").executeQuickPromotionActionMutation({
                        event: "VIEW",
                        promotion_id: n,
                        surface_nux_id: i,
                        promotion_logging_data: a,
                        client_time: r
                    }) : yield o("WAWebConsumerQuickPromotionActionMutation").executeConsumerQuickPromotionActionMutation({
                        event: "VIEW",
                        promotion_id: n,
                        surface_nux_id: i,
                        promotion_logging_data: "",
                        client_time: r
                    });
                } catch (e) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "impressionOnQuickPromotion: unable to log through GraphQL"
                    ])));
                }
                if (d?.type !== "not-enabled") {
                    return;
                }
                d.type;
            }
            const m = yield o("WASmaxInAppCommsEventRPC").sendEventRPC({
                eventType: "impression",
                eventPromotionId: n,
                eventTimestampSec: r,
                eventLogdata: a
            });
            if (m.name !== "EventResponseSuccess") {
                m.name;
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "impressionOnQuickPromotion: unable to log"
                ])));
            }
        });
        return p.apply(this, arguments);
    }
    const _ = o("WAWebDefinePersistedJob").defineWebPersistedJob().step("saveToDb", d).finalStep("reportToComms", m).end();
    l.impressionOnQuickPromotion = _;
}, 98);