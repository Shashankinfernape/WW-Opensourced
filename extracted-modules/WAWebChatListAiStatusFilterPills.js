__d("WAWebChatListAiStatusFilterPills", [
    "fbt",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebChatListAiStatusFilterPills.stylex",
    "WAWebChatSearchFilters",
    "WAWebLabelCollection",
    "WAWebListIcon.react",
    "WAWebListUtils",
    "WAWebMobilePlatforms",
    "WAWebSchemaLabel",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        id: "ai-handoff-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF,
        getLabel: function() {
            return s._("AI handoff");
        },
        testid: "ai-handoff-filter",
        color: "var(--WDS-secondary-negative)",
        count: 0
    };
    const d = {
        id: "ai-responding-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING,
        getLabel: function() {
            return s._("AI responding");
        },
        testid: "ai-responding-filter",
        color: "var(--WDS-secondary-positive)",
        count: 0
    };
    function m() {
        if (!o("WAWebMobilePlatforms").isSMB()) {
            return [];
        }
        if (!o("WAWebBizAiAgentGating").isAiListsWebUIEnabled()) {
            return [];
        }
        if (!o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent()) {
            return [];
        }
        const e = [];
        if (!p(o("WAWebSchemaLabel").ListType.AI_HANDOFF)) {
            e.push(c);
        }
        if (!p(o("WAWebSchemaLabel").ListType.AI_RESPONDING)) {
            e.push(d);
        }
        return e;
    }
    function p(e) {
        return o("WAWebLabelCollection").LabelCollection.toArray().some((t)=>t.type === e && t.isActive === false);
    }
    function _(e) {
        return e === o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF || e === o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING;
    }
    function f(e, t) {
        const r = t === o("WAWebSchemaLabel").ListType.AI_HANDOFF ? o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF : t === o("WAWebSchemaLabel").ListType.AI_RESPONDING ? o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING : null;
        if (r == null) {
            return null;
        }
        return e.find((e)=>e.filter === r) ?? null;
    }
    function g(e, t, n) {
        const r = new Set;
        for (const o of n){
            const a = f(t, o);
            if (a != null) {
                r.add(a);
            }
        }
        if (r.size === 0) {
            return e;
        }
        return e.filter((e)=>!r.has(e));
    }
    function h(filter) {
        if (filter === o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF) {
            return o("WAWebChatListAiStatusFilterPills.stylex").aiStatusFilterDotStyles.ai_handoff;
        }
        if (filter === o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING) {
            return o("WAWebChatListAiStatusFilterPills.stylex").aiStatusFilterDotStyles.ai_responding;
        }
        return null;
    }
    function y(e) {
        if (_(e.filter)) {
            return u.jsx(r("WAWebListIcon.react"), {
                size: 10,
                xstyle: h(e.filter)
            });
        }
        if (o("WAWebListUtils").shouldShowListIcon(e.listType, e.color)) {
            return u.jsx(r("WAWebListIcon.react"), {
                color: e.color,
                size: 10
            });
        }
        return null;
    }
    l.getAiStatusFilterPills = m;
    l.isAiStatusFilter = _;
    l.getAiPillForListType = f;
    l.withoutRelocatedAiPills = g;
    l.renderPillStartIcon = y;
}, 226);