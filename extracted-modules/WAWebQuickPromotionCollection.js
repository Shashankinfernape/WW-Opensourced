__d("WAWebQuickPromotionCollection", [
    "WALogger",
    "WAWebBaseCollection",
    "WAWebConsumerFetchQuickPromotions",
    "WAWebFetchQuickPromotions",
    "WAWebL10N",
    "WAWebMobilePlatforms",
    "WAWebQuickPromotionEligibilityEvaluator",
    "WAWebQuickPromotionGating",
    "WAWebQuickPromotionModel"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.localeChangeListener = null;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.refreshPromotions = function(n) {
            const t = new Set(this.filter((e)=>e.isDismissedThisSession).map(({ id })=>id));
            this.reset();
            this.initializeFromCache(n.map((e)=>new (o("WAWebQuickPromotionModel")).QuickPromotionModel({
                    id: e.id,
                    promotion: e,
                    isDismissedThisSession: t.has(e.id)
                })));
            if (n.length === 0) {
                this.trigger("emptied_by_refresh");
            }
            if (this.localeChangeListener == null && o("WAWebQuickPromotionGating").qpGraphQLEnabled()) {
                this.localeChangeListener = r("WAWebL10N").on("locale_change", function() {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "QuickPromotionCollectionImpl: locale changed, refetching"
                    ])));
                    if (o("WAWebMobilePlatforms").isSMB()) {
                        o("WAWebFetchQuickPromotions").fetchQuickPromotions();
                    } else {
                        o("WAWebConsumerFetchQuickPromotions").fetchConsumerQuickPromotions();
                    }
                });
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "QuickPromotionCollectionImpl: cache refreshed"
            ])));
        };
        n_prototype.bestPromotionForSurface = function(t) {
            return this.findFirst(function({ promotion }) {
                return o("WAWebQuickPromotionEligibilityEvaluator").checkPromotionEligible(promotion, t);
            });
        };
        n_prototype.allEligiblePromotionsForSurface = function(t) {
            return this.filter(({ promotion })=>o("WAWebQuickPromotionEligibilityEvaluator").checkPromotionEligible(promotion, t));
        };
        n_prototype.getPromotionWithLastImpressionOnSurface = function(t) {
            return this.reduce((acc, item)=>{
                const n_promotion = item.promotion;
                const r_surfaceId = n_promotion.surfaceId;
                if (t !== r_surfaceId) {
                    return acc;
                }
                const lastImpressionTs = n_promotion.tracking.lastImpressionTs;
                if (lastImpressionTs == null) {
                    return acc;
                }
                if (acc == null) {
                    return {
                        promotion: item,
                        lastImpressionTs
                    };
                }
                if (acc.lastImpressionTs >= lastImpressionTs) {
                    return acc;
                }
                return {
                    promotion: item,
                    lastImpressionTs
                };
            }, null);
        };
        n_prototype.promotionDismissed = function(t) {
            const e = this.get(t);
            if (e == null) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "promotionDismissed: promotion not found"
                ])));
                return;
            }
            e.dismiss();
            this.trigger("change", e, this);
        };
        n_prototype.promotionPrimaryActionClicked = function(t) {
            const e = this.get(t);
            if (e == null) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "promotionPrimaryActionClicked: promotion not found"
                ])));
                return;
            }
            e.primaryActionClick();
        };
        n_prototype.promotionShown = function(t) {
            const e = this.get(t);
            if (e == null) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "promotionShown: promotion not found"
                ])));
                return;
            }
            e.impression();
        };
        return n;
    })(o("WAWebBaseCollection").BaseCollection);
    m.model = o("WAWebQuickPromotionModel").QuickPromotionModel;
    const p = new m;
    l.QuickPromotionCollection = p;
}, 98);