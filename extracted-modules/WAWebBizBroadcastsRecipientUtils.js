__d("WAWebBizBroadcastsRecipientUtils", [
    "WAJids",
    "WAWebApiContact",
    "WAWebAudienceResolver",
    "WAWebBizBroadcastRecipientLimitCommon",
    "WAWebContactCollection",
    "WAWebContactComparator",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = _(e);
        if (t == null) {
            return null;
        }
        return g(t);
    }
    function s(t) {
        return e(t) ?? o("WAWebFrontendContactGetters").getDisplayName(t);
    }
    function u(e) {
        const t = new Map(e.map((e)=>[
                e,
                _(e) ?? e
            ]));
        return [].concat(e).sort((e, n)=>o("WAWebContactComparator").ContactComparator(t.get(e) ?? e, t.get(n) ?? n));
    }
    function c(e, t, n = false) {
        const r = t.trim();
        if (r === "") {
            return e;
        }
        const o = r.toLowerCase();
        const a = r.replace(/\D/g, "");
        return e.filter((e)=>!n && s(e).toLowerCase().includes(o) || a !== "" && (f(e)?.user ?? "").includes(a));
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebAudienceResolver").resolveAudienceExpression(e);
            const t_length = t.length;
            return t_length >= o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS && t_length <= o("WAWebBizBroadcastRecipientLimitCommon").getRecipientLimit();
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        try {
            const n = o("WAWebWidFactory").createUserWidOrThrow(o("WAJids").toLidUserJid(e));
            const r = o("WAWebContactCollection").ContactCollection.get(n);
            if (r != null) {
                return r;
            }
            const a = o("WAWebWidFactory").createUserWidOrThrow(o("WAJids").toPhoneUserJid(e));
            return o("WAWebContactCollection").ContactCollection.get(a) ?? null;
        } catch (e) {
            return null;
        }
    }
    function _(e) {
        if (g(e) != null) {
            return e;
        }
        if (!e.id.isLid()) {
            return null;
        }
        const t = f(e);
        const n = t == null ? null : o("WAWebContactCollection").ContactCollection.get(t);
        if (n != null && g(n) != null) {
            return n;
        }
        return null;
    }
    function f(e) {
        if (e.id.isLid()) {
            return e.phoneNumber ?? o("WAWebApiContact").getAlternateUserWid(e.id);
        }
        return e.id;
    }
    function g(e) {
        const t = o("WAWebContactGetters").getName(e);
        const n = t?.trim();
        if (n == null || n === "") {
            return null;
        }
        return n;
    }
    l.MIN_RECIPIENTS = o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS;
    l.getRecipientLimit = o("WAWebBizBroadcastRecipientLimitCommon").getRecipientLimit;
    l.getSavedRecipientName = e;
    l.getRecipientPickerDisplayName = s;
    l.sortByRecipientPickerName = u;
    l.filterByRecipientPickerQuery = c;
    l.isPredicateEligibleForSuggestedCard = d;
    l.getContactByUserId = p;
}, 98);