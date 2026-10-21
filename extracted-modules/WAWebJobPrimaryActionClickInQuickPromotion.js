__d("WAWebJobPrimaryActionClickInQuickPromotion", [
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
                        "primaryActionClickInQuickPromotion: promotion not found"
                    ])));
                    return;
                }
                const s = babelHelpers.extends({}, l.tracking, {
                    primaryClicks: l.tracking.primaryClicks + 1
                });
                const u = s.lastPrimaryClickTs;
                if (u == null || a > u) {
                    s.lastPrimaryClickTs = a;
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
                    "primaryActionClickInQuickPromotion: surfaceId not found"
                ])));
            } else {
                let d;
                try {
                    d = o("WAWebMobilePlatforms").isSMB() ? yield o("WAWebQuickPromotionActionMutation").executeQuickPromotionActionMutation({
                        event: "ACTION",
                        action: "PRIMARY",
                        promotion_id: n,
                        surface_nux_id: i,
                        promotion_logging_data: a,
                        client_time: r
                    }) : yield o("WAWebConsumerQuickPromotionActionMutation").executeConsumerQuickPromotionActionMutation({
                        event: "ACTION",
                        action: "PRIMARY",
                        promotion_id: n,
                        surface_nux_id: i,
                        promotion_logging_data: "",
                        client_time: r
                    });
                } catch (e) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "primaryActionClickInQuickPromotion: GraphQL log failed"
                    ])));
                }
                if (d?.type !== "not-enabled") {
                    return;
                }
                d.type;
            }
            const m = yield o("WASmaxInAppCommsEventRPC").sendEventRPC({
                eventType: "primary_click",
                eventPromotionId: n,
                eventTimestampSec: r,
                eventLogdata: a
            });
            if (m.name !== "EventResponseSuccess") {
                m.name;
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "primaryActionClickInQuickPromotion: unable to log"
                ])));
            }
        });
        return p.apply(this, arguments);
    }
    const _ = o("WAWebDefinePersistedJob").defineWebPersistedJob().step("saveToDb", d).finalStep("reportToComms", m).end();
    l.primaryActionClickInQuickPromotion = _;
}, 98);