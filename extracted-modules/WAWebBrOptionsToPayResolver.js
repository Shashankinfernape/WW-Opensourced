__d("WAWebBrOptionsToPayResolver", [
    "WALogger",
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = "client_static";
    const _ = 3;
    function f({ candidates, hasUnusableServerOrdering = false, isSettled, orderedMethods, serverRankSource }) {
        if (candidates.length < _ || isSettled) {
            return null;
        }
        if (hasUnusableServerOrdering) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "options-to-pay: ordered_methods contains no usable entries"
            ])));
            return null;
        }
        const u = orderedMethods != null && orderedMethods.length > 0;
        const c = u ? C(candidates, orderedMethods) : y(candidates);
        if (c == null || !g(c, u ? orderedMethods : null) || o("WAWebABProps").getABPropConfigValue("br_payments_options_to_pay_sheet_enabled") !== true) {
            return null;
        }
        return h(c, u ? serverRankSource : p);
    }
    function g(e, t) {
        if (e.length === 0 || b(e)) {
            return false;
        }
        return t == null || v(e[0].candidate.methodKey, t);
    }
    function h(e, rankSource) {
        const candidate = e[0].candidate;
        return {
            inline: candidate.value,
            sheet: e.slice(1).map(({ candidate })=>candidate.value),
            orderedMethodKeys: e.map(({ candidate })=>candidate.methodKey),
            defaultMethodKey: candidate.methodKey,
            rankSource
        };
    }
    function y(candidates) {
        return candidates.map((candidate, t)=>({
                candidate,
                rank: t,
                serverIndex: t
            }));
    }
    function C(candidates, orderedMethods) {
        const n = new Map;
        for (const [serverIndex, i] of (orderedMethods ?? []).entries()){
            if (n.has(i.methodKey)) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "options-to-pay: ordered_methods contains duplicate method keys"
                ])));
                return null;
            }
            n.set(i.methodKey, {
                rank: i.rank,
                serverIndex
            });
        }
        const l = [];
        for (const candidate of candidates){
            const c = n.get(candidate.methodKey);
            if (c == null) {
                return null;
            }
            l.push(babelHelpers.extends({
                candidate
            }, c));
        }
        return l.sort((e, t)=>{
            if (e.rank !== t.rank) {
                return e.rank - t.rank;
            }
            return e.serverIndex - t.serverIndex;
        });
    }
    function b(e) {
        const t = new Set(e.map(({ candidate })=>candidate.methodKey));
        if (t.size !== e.length) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "options-to-pay: eligible methods map to duplicate method keys"
            ])));
            return true;
        }
        return false;
    }
    function v(methodKey, t) {
        const n = t.filter((e)=>e.isDefault);
        if (n.length === 0) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "options-to-pay: ordered_methods has no default method"
            ])));
            return false;
        }
        if (n.length > 1) {
            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "options-to-pay: ordered_methods has multiple default methods"
            ])));
            return false;
        }
        if (n[0].methodKey !== methodKey) {
            o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "options-to-pay: ordered_methods default is not the first ranked eligible method"
            ])));
            return false;
        }
        return true;
    }
    l.CLIENT_STATIC_RANK_SOURCE = p;
    l.resolveOptionsToPay = f;
}, 98);