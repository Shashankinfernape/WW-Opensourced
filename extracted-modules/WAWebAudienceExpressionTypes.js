__d("WAWebAudienceExpressionTypes", [], function(t, n, r, o, a, i) {
    const e = "EXPLICIT";
    const l = "PREDICATE";
    const s = "LABEL";
    const u = "CHATTED_RECENTLY";
    const c = "NOT_MESSAGED_RECENTLY";
    const d = "ALL_CONTACTS";
    function m(t) {
        return {
            type: e,
            userJids: t
        };
    }
    function p(e) {
        return {
            params: {
                labelIds: e
            },
            predicateType: s,
            type: l
        };
    }
    function _(e) {
        if (e.type === l && e.predicateType === s) {
            return e.params?.labelIds ?? [];
        }
        return [];
    }
    function f(e, t) {
        return e.type === l && e.predicateType === s && (e.params?.labelIds?.includes(t) ?? false);
    }
    function g(e) {
        const n = e.broadcastMetadata?.audienceExpression;
        if (n != null && n.type === l) {
            return n;
        }
        return null;
    }
    function h(e) {
        return g(e) != null;
    }
    function y(e) {
        return JSON.stringify(e);
    }
    function C(t) {
        try {
            const n = JSON.parse(t);
            if (n?.type === e && Array.isArray(n.userJids)) {
                return m(n.userJids);
            }
            if (n?.type === l && n.predicateType != null) {
                return {
                    params: n.params,
                    predicateType: n.predicateType,
                    type: l
                };
            }
            return null;
        } catch (e) {
            return null;
        }
    }
    const b = m([]);
    i.EXPRESSION_TYPE_EXPLICIT = e;
    i.EXPRESSION_TYPE_PREDICATE = l;
    i.PREDICATE_TYPE_LABEL = s;
    i.PREDICATE_TYPE_CHATTED_RECENTLY = u;
    i.PREDICATE_TYPE_NOT_MESSAGED_RECENTLY = c;
    i.PREDICATE_TYPE_ALL_CONTACTS = d;
    i.createExplicitExpression = m;
    i.createLabelPredicateExpression = p;
    i.getLabelIdsFromExpression = _;
    i.expressionUsesLabel = f;
    i.getPredicateExpressionFromChat = g;
    i.isPredicateAudience = h;
    i.serializeAudienceExpression = y;
    i.parseAudienceExpressionJson = C;
    i.DEFAULT_AUDIENCE_EXPRESSION = b;
}, 66);