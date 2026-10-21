__d("WAWebCoexCanonicalMembership", [], function(t, n, r, o, a, i) {
    const e = [
        "bspOrInbox",
        "ai",
        "automation",
        "authorizedAgent",
        "bbPro"
    ];
    const l = "automation";
    const s = new Map([
        [
            "INBOX",
            "bspOrInbox"
        ],
        [
            "EMBEDDED_SIGNUP",
            "bspOrInbox"
        ],
        [
            "WEAVE_AI",
            "bspOrInbox"
        ],
        [
            "META_AI_BIZ_AGENT",
            "ai"
        ],
        [
            "DETECTED_OUTCOME",
            "automation"
        ],
        [
            "AUTHORIZED_AGENT",
            "authorizedAgent"
        ],
        [
            "BB_PRO",
            "bbPro"
        ]
    ]);
    const u = "-1";
    const c = new Set([
        "INBOX",
        "WEAVE_AI",
        "META_AI_BIZ_AGENT",
        "DETECTED_OUTCOME",
        "BB_PRO"
    ]);
    const d = /^(0|-?[1-9][0-9]*)$/;
    const m = "9223372036854775807";
    const p = "9223372036854775808";
    function _(e) {
        if (e == null) {
            return {
                type: "rejected",
                reason: "snapshot_absent"
            };
        }
        const t = new Set;
        for (const n of e){
            const r = f(n);
            if (r.type === "rejected") {
                return r;
            }
            if (r.surface != null) {
                t.add(r.surface);
            }
        }
        return {
            type: "authoritative",
            surfaces: Array.from(t).sort()
        };
    }
    function f(e) {
        if (e.onboardingStatus !== "COMPLETED") {
            return {
                type: "rejected",
                reason: e.onboardingStatus === "IN_PROGRESS" ? "row_not_settled" : e.onboardingStatus === "REONBOARDING_ELIGIBLE" ? "row_awaiting_reonboarding" : "unrecognized_onboarding_status"
            };
        }
        const { product, providerId } = e;
        if (product == null || !s.has(product)) {
            return {
                type: "rejected",
                reason: "unrecognized_product"
            };
        }
        if (providerId == null || !g(product, providerId)) {
            return {
                type: "rejected",
                reason: "malformed_provider_id"
            };
        }
        return {
            type: "valid",
            surface: s.get(product)
        };
    }
    function g(product, providerId) {
        if (h(providerId)) {
            if (c.has(product)) {
                return providerId === u;
            }
            return !providerId.startsWith("-") && providerId !== "0";
        }
        return false;
    }
    function h(providerId) {
        if (!d.test(providerId)) {
            return false;
        }
        const t = providerId.startsWith("-");
        const n = t ? providerId.slice(1) : providerId;
        const r = t ? p : m;
        return n.length < r.length || n.length === r.length && n <= r;
    }
    i.COEX_PRODUCT_SURFACES = e;
    i.AE_SURFACE = l;
    i.getCoexCanonicalMembership = _;
}, 66);