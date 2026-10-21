__d("useWAWebWaPlusBenefitJourneyViewOnMount", [
    "WAWebWaPlusBenefitJourneyLogger",
    "react",
    "useWAWebWaPlusBenefitJourneyLogger"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function d(e) {
        const t = r("useWAWebWaPlusBenefitJourneyLogger")(e.benefitType, e.surface, e.source);
        const nRef = useRef(false);
        useEffect(function() {
            if (!nRef.current) {
                if (e.enabled !== false) {
                    nRef.current = true;
                    if (!(e.dedupeKey != null && !o("WAWebWaPlusBenefitJourneyLogger").shouldLogTargetOnceForBenefit(e.benefitType, e.dedupeKey))) {
                        t.current.logView({
                            success: e.success ?? true,
                            actionTarget: e.actionTarget,
                            errorMessage: e.errorMessage,
                            customFields: e.customFields,
                            surfaceOverride: e.surfaceOverride
                        });
                    }
                }
            }
        }, [
            e.enabled
        ]);
        return t;
    }
    l.default = d;
}, 98);