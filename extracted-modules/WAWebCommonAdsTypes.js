__d("WAWebCommonAdsTypes", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    const e = n("$InternalEnum").Mirrored([
        "WEAK",
        "STRONG"
    ]);
    const l = {
        ACTIVE: "ACTIVE",
        COMPLETED: "COMPLETED",
        CREATING: "CREATING",
        EXTENDABLE: "EXTENDABLE",
        FINISHED: "FINISHED",
        LIMITED_DELIVERY: "LIMITED_DELIVERY",
        NOT_DELIVERING: "NOT_DELIVERING",
        PAUSED: "PAUSED",
        PAUSING: "PAUSING",
        PAYMENT_PENDING: "PAYMENT_PENDING",
        PENDING: "PENDING",
        RECOMMENDATION: "RECOMMENDATION",
        REJECTED: "REJECTED",
        RESUMING: "RESUMING",
        SCHEDULED: "SCHEDULED",
        UNABLE_TO_CREATE: "ERROR",
        UNKNOWN: "UNKNOWN"
    };
    function s({ bp_id: n, token: r, tokenStrength: a = e.STRONG, type: l = "WAA" }) {
        if (l === "FB") {
            return {
                bp_id: n,
                token: r,
                type: l
            };
        }
        return {
            bp_id: n,
            token: r,
            tokenStrength: a,
            type: l
        };
    }
    i.WAAIdentityTokenStrengthEnum = e;
    i.BoostingStatus = l;
    i.asAdAccountToken = s;
}, 66);