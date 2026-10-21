__d("WAWebBusinessPairEligibilityProvider", [
    "WAWebContactCollection",
    "WAWebCountryCodeUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebPairAdopterRegistry",
    "WAWebPairEligibilityConfig",
    "WAWebPairEligibilityEvaluator",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WAWebPairEligibilityEvaluator").evaluatePairEligibility({
            adopter: o("WAWebPairAdopterRegistry").findPairAdopter(t),
            isOneToOne: s(e),
            subjectKind: "thread",
            candidateTemplateId: null,
            readFacts: function() {
                return u(o("WAWebWidFactory").asUserWidOrThrow(e));
            }
        }, {
            isConsumerUnderEpd: o("WAWebPairEligibilityConfig").isPairConsumerUnderEpd,
            isMasterEnabled: o("WAWebPairEligibilityConfig").isPairMasterGateEnabled,
            isAdopterEnabled: o("WAWebPairEligibilityConfig").isPairAdopterGateEnabled
        });
        if (n.result !== "ELIGIBLE") {
            return n;
        }
        return {
            result: "ELIGIBLE",
            businessWid: o("WAWebWidFactory").asUserWidOrThrow(e),
            channel: n.channel
        };
    }
    function s(e) {
        return e.isRegularUser() && !e.isHosted() && !o("WAWebUserPrefsMeUser").isMeAccount(e);
    }
    function u(e) {
        if (o("WAWebUserPrefsMeUser").getMaybeMeLidUser() == null) {
            return null;
        }
        const r = o("WAWebContactCollection").ContactCollection.get(e);
        return {
            hosted: r?.isHosted === true,
            cloudApiHostStorage: r?.privacyMode?.hostStorage === o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook,
            businessIso: o("WAWebCountryCodeUtils").getCountryCodeFromPn(e) ?? r?.usernameCountryCode
        };
    }
    l.resolveBusinessPairEligibility = e;
}, 98);