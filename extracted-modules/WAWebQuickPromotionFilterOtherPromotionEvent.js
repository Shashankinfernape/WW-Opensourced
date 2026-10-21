__d("WAWebQuickPromotionFilterOtherPromotionEvent", [
    "WALogger",
    "WATimeUtils",
    "WAWebCommonQPSurfacesTypes",
    "WAWebQuickPromotionCollection",
    "WAWebQuickPromotionValidatorUtils",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(t, n) {
        const a = o("WAWebQuickPromotionValidatorUtils").convertFilterParametersIntoMap(n);
        const i = a.get("event");
        if (i == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                'otherPromotionEventFilter: missing "event"'
            ]))).sendLogs("quick-promotion-filter-missing-parameter");
            throw r("err")('otherPromotionEventFilter: missing "event"');
        }
        const l = f(i);
        if (l == null) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "otherPromotionEventFilter: unknown event"
            ]))).sendLogs("quick-promotion-filter-parameter-incorrect");
            throw r("err")("otherPromotionEventFilter: unknown event");
        }
        const _ = a.get("promo_id");
        if (_ == null) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                'otherPromotionEventFilter: missing "promo_id"'
            ]))).sendLogs("quick-promotion-filter-missing-parameter");
            throw r("err")('otherPromotionEventFilter: missing "promo_id"');
        }
        const C = a.get("metric");
        if (C == null) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                'otherPromotionEventFilter: missing "metric"'
            ]))).sendLogs("quick-promotion-filter-missing-parameter");
            throw r("err")('otherPromotionEventFilter: missing "metric"');
        }
        const b = a.get("nux_id");
        if (b == null) {
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                'otherPromotionEventFilter: missing "nux_id"'
            ]))).sendLogs("quick-promotion-filter-missing-parameter");
            throw r("err")('otherPromotionEventFilter: missing "nux_id"');
        }
        const v = parseInt(a.get("event_count"), 10);
        if (Number.isNaN(v)) {
            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                'otherPromotionEventFilter: missing "event_count"'
            ]))).sendLogs("quick-promotion-filter-missing-parameter");
            throw r("err")('otherPromotionEventFilter: missing "event_count"');
        }
        if (t.id === _ && l === "impression") {
            const R = t.tracking.lastImpressionTs ?? t.ts;
            const L = o("WAWebQuickPromotionValidatorUtils").checkIsWithinEligibilityWindow(R, t.data.qpConfigEligibilityDurationMs);
            if (L) {
                return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
            }
        }
        const E = g(C);
        if (E == null) {
            o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "otherPromotionEventFilter: unknown metric"
            ]))).sendLogs("quick-promotion-filter-parameter-incorrect");
            throw r("err")("otherPromotionEventFilter: unknown metric");
        }
        const k = o("WAWebQuickPromotionCollection").QuickPromotionCollection.get(_);
        const I = k != null ? h(l, k.promotion.tracking) : {
            count: 0,
            lastOccurrenceTs: null
        };
        const { count, lastOccurrenceTs } = I;
        if (E === "count_at_most" || E === "count_at_least") {
            return y(E === "count_at_most" ? count <= v : count >= v);
        }
        if (E === "seconds_since_greater_than") {
            if (lastOccurrenceTs == null) {
                return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
            }
            const x = o("WATimeUtils").futureUnixTime(v, lastOccurrenceTs);
            return y(!o("WATimeUtils").isInFuture(x));
        }
        if (lastOccurrenceTs == null) {
            return o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_FILTERS_OTHER_PROMOTION_EVENT;
        }
        const $ = o("WATimeUtils").futureUnixTime(v, lastOccurrenceTs);
        return y($ === o("WATimeUtils").unixTime() || o("WATimeUtils").isInFuture($));
    }
    function f(e) {
        switch(e){
            case "impression":
            case "primary_action":
            case "dismiss_action":
                return e;
            default:
                return null;
        }
    }
    function g(e) {
        switch(e){
            case "count_at_most":
            case "count_at_least":
            case "seconds_since_greater_than":
            case "seconds_since_less_than":
                return e;
            default:
                return null;
        }
    }
    function h(e, tracking) {
        switch(e){
            case "impression":
                return {
                    count: tracking.impressions,
                    lastOccurrenceTs: tracking.lastImpressionTs
                };
            case "primary_action":
                return {
                    count: tracking.primaryClicks,
                    lastOccurrenceTs: tracking.lastPrimaryClickTs
                };
            default:
                return {
                    count: tracking.dismisses,
                    lastOccurrenceTs: tracking.lastDismissTs
                };
        }
    }
    function y(e) {
        if (e) {
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        }
        return o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_FILTERS_OTHER_PROMOTION_EVENT;
    }
    const C = {
        name: "other_promotion_event",
        filter: _
    };
    l.otherPromotionEventFilter = C;
}, 98);