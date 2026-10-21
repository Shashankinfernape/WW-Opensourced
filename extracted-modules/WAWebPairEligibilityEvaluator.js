__d("WAWebPairEligibilityEvaluator", [
    "WAWebPairEligibilityEpdCountries"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const e_adopter = e.adopter;
        if (e_adopter == null) {
            return s("EVENT_NOT_REGISTERED");
        }
        if (!e.isOneToOne) {
            return s("NOT_ONE_TO_ONE");
        }
        const r = e.readFacts();
        if (r == null) {
            return {
                result: "UNKNOWN",
                reason: "FACTS_UNAVAILABLE"
            };
        }
        const o = u(r);
        if (o == null) {
            return s("NOT_CLOUD_API_BUSINESS");
        }
        if (t.isConsumerUnderEpd()) {
            return s("CONSUMER_EPD");
        }
        const a = c(r.businessIso);
        return a ?? (!t.isMasterEnabled() || !t.isAdopterEnabled(e_adopter) ? s("DISABLED") : {
            result: "ELIGIBLE",
            channel: o,
            templateId: d(e, e_adopter)
        });
    }
    function s(reason) {
        return {
            result: "INELIGIBLE",
            reason
        };
    }
    function u(e) {
        if (e.hosted) {
            return "COEX";
        }
        if (e.cloudApiHostStorage) {
            return "CLOUD_API";
        }
        return null;
    }
    function c(businessIso) {
        const n = (businessIso == null ? undefined : businessIso.trim().toUpperCase()) ?? "";
        if (n === "") {
            return {
                result: "UNKNOWN",
                reason: "BUSINESS_COUNTRY_UNKNOWN"
            };
        }
        if (o("WAWebPairEligibilityEpdCountries").PAIR_ELIGIBILITY_EPD_ISO_CODES.has(n)) {
            return s("BUSINESS_EPD");
        }
        return null;
    }
    function d(e, t) {
        if (e.subjectKind === "message" && t.templateApproved) {
            return e.candidateTemplateId;
        }
        return null;
    }
    l.evaluatePairEligibility = e;
}, 98);