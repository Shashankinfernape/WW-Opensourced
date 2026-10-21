__d("WAWebQuickPromotionEligibilityEvaluator", [
    "WAWebQuickPromotionActionLimitRuleValidator",
    "WAWebQuickPromotionClientSideDryRunRuleValidator",
    "WAWebQuickPromotionClientTtlRuleValidator",
    "WAWebQuickPromotionContentRuleValidator",
    "WAWebQuickPromotionDebugLogger",
    "WAWebQuickPromotionEnabledTimeRuleValidator",
    "WAWebQuickPromotionFiltersRuleValidator",
    "WAWebQuickPromotionForcePassRuleValidator",
    "WAWebQuickPromotionHoldoutRuleValidator",
    "WAWebQuickPromotionSurfaceDelayRuleValidator",
    "WAWebQuickPromotionSurfaceRuleValidator",
    "WAWebWhatsappQuickPromotionClientEligibilityWaterfallWamEvent"
], function(t, n, r, o, a, i, l) {
    const e = [
        {
            step: "client_definition_validator_content",
            validator: o("WAWebQuickPromotionContentRuleValidator").contentRuleValidator
        },
        {
            step: "post_client_definition_validator_content",
            validator: o("WAWebQuickPromotionSurfaceRuleValidator").surfaceRuleValidator
        },
        {
            step: "client_force_pass",
            validator: o("WAWebQuickPromotionForcePassRuleValidator").forcePassRuleValidator
        },
        {
            step: "client_enabled_time",
            validator: o("WAWebQuickPromotionEnabledTimeRuleValidator").enabledTimeRuleValidator
        },
        {
            step: "client_ttl",
            validator: o("WAWebQuickPromotionClientTtlRuleValidator").clientTtlRuleValidator
        },
        {
            step: "client_surface_delay",
            validator: o("WAWebQuickPromotionSurfaceDelayRuleValidator").surfaceDelayRuleValidator
        },
        {
            step: "client_action_limit",
            validator: o("WAWebQuickPromotionActionLimitRuleValidator").actionLimitRuleValidator
        },
        {
            step: "client_filters",
            validator: o("WAWebQuickPromotionFiltersRuleValidator").filtersRuleValidator
        },
        {
            step: "client_side_dry_run",
            validator: o("WAWebQuickPromotionClientSideDryRunRuleValidator").clientSideDryRunRuleValidator
        },
        {
            step: "client_exposure_log",
            validator: o("WAWebQuickPromotionHoldoutRuleValidator").holdoutRuleValidator
        }
    ];
    function s(t, n) {
        const { data, id: promotionId } = t;
        const data_qpConfigLogEligibilityWaterfall = data.qpConfigLogEligibilityWaterfall;
        const l = data_qpConfigLogEligibilityWaterfall === "true";
        for (const u of e){
            const { step, validator } = u;
            const m = validator(t, n);
            const p = m.result;
            if (l && m.skipWaterfallLogging !== true) {
                new (o("WAWebWhatsappQuickPromotionClientEligibilityWaterfallWamEvent")).WhatsappQuickPromotionClientEligibilityWaterfallWamEvent({
                    step,
                    promotionId,
                    eligibilityStatus: p === true,
                    qpFailureReason: m.result == null ? m.reason : undefined
                }).commit();
            }
            if (m.forcePass === true) {
                o("WAWebQuickPromotionDebugLogger").qpLog("eligibility.forcePass", {
                    promotionId,
                    step
                });
                o("WAWebQuickPromotionDebugLogger").qpLog("eligibility.summary", {
                    promotionId,
                    passed: true,
                    forcePassed: true
                });
                return true;
            }
            if (p == null) {
                o("WAWebQuickPromotionDebugLogger").qpLog("eligibility.fail", {
                    promotionId,
                    step,
                    reason: m.reason
                });
                o("WAWebQuickPromotionDebugLogger").qpLog("eligibility.summary", {
                    promotionId,
                    passed: false,
                    failedAt: step
                });
                return false;
            }
            o("WAWebQuickPromotionDebugLogger").qpLog("eligibility.pass", {
                promotionId,
                step
            });
        }
        o("WAWebQuickPromotionDebugLogger").qpLog("eligibility.summary", {
            promotionId,
            passed: true
        });
        return true;
    }
    l.checkPromotionEligible = s;
}, 98);