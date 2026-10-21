__d("WAWebContactSearchMatcher", [
    "fbt",
    "WAMemoizeOne",
    "WAPhoneFindCC",
    "WAWebApiContact",
    "WAWebContactGetters",
    "WAWebContactSearchGatingUtils",
    "WAWebExactSearchMatchResult",
    "WAWebFrontendContactGetters",
    "WAWebFuzzyMatcher",
    "WAWebFuzzySearchMatchResult",
    "WAWebL10NAccentFold",
    "WAWebPrefixSearchMatchResult",
    "WAWebSearchMatchStrategies",
    "WAWebTrunkPrefixUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "err",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l, s) {
    const e = r("WAMemoizeOne")(function({ numeric }) {
        const n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        if (n == null) {
            return null;
        }
        const r = o("WAPhoneFindCC").findCC(n.user);
        return r + o("WAWebTrunkPrefixUtils").trimTrunkPrefix(r, numeric);
    });
    function u(t, n) {
        if (n.includes(t)) {
            return true;
        }
        const r = e({
            numeric: t
        });
        if (r == null) {
            return false;
        }
        return n.includes(r);
    }
    function c(e) {
        const t = o("WAWebUsernameTypes").serializeMaybeUsername(o("WAWebFrontendContactGetters").getUsername(e));
        if (r("isStringNullOrEmpty")(t)) {
            return false;
        }
        const n = o("WAWebFrontendContactGetters").getSearchName(e);
        if (!r("isStringNullOrEmpty")(n)) {
            return false;
        }
        const a = o("WAWebFrontendContactGetters").getSearchVerifiedName(e);
        return r("isStringNullOrEmpty")(a);
    }
    function d(e) {
        return e.slice(1).replace(/#.*/, "");
    }
    function m(contact, numeric) {
        if (r("isStringNullOrEmpty")(numeric) || c(contact)) {
            return null;
        }
        const n = o("WAWebContactGetters").getUserid(contact);
        if (contact.id.isLid()) {
            if (n != null) {
                const a = o("WAWebWidFactory").asUserLidOrThrow(o("WAWebWidFactory").createUserWidOrThrow(n, "lid"));
                const i = o("WAWebApiContact").getPhoneNumber(a);
                if (i != null) {
                    const l = i.toString();
                    if (u(numeric, l)) {
                        return l;
                    }
                    return null;
                }
            }
        } else {
            if (n != null && u(numeric, n)) {
                return n;
            }
            return null;
        }
        return null;
    }
    function p({ contact, label, numeric, term }) {
        const i = f(contact, term, numeric, label, o("WAWebSearchMatchStrategies").substringMatch);
        if (i == null) {
            return null;
        }
        return {
            match: i.match,
            results: i.results.map((e)=>new (o("WAWebExactSearchMatchResult")).WAWebExactSearchMatchResult(e.startIndex, e.length))
        };
    }
    function _({ contact, label, numeric, term }) {
        const i = f(contact, term, numeric, label, o("WAWebSearchMatchStrategies").wordBoundaryMatch);
        if (i == null) {
            return null;
        }
        return {
            match: i.match,
            results: i.results.map((e)=>new (o("WAWebPrefixSearchMatchResult")).WAWebPrefixSearchMatchResult(e.startIndex, e.length))
        };
    }
    function f(contact, term, numeric, label, i) {
        const l = o("WAWebFrontendContactGetters").getSearchName(contact);
        if (!r("isStringNullOrEmpty")(label)) {
            let u;
            const d = o("WAWebUsernameTypes").serializeMaybeUsername(o("WAWebFrontendContactGetters").getUsername(contact));
            if (term && !r("isStringNullOrEmpty")(l) && i(l, term) == null && !r("isStringNullOrEmpty")(d) && i(d, term) == null) {
                return null;
            }
            if ((u = contact.labels) != null && u.includes(label)) {
                return {
                    match: label,
                    results: term ? [
                        {
                            startIndex: 0,
                            length: label.length
                        }
                    ] : []
                };
            }
            return null;
        }
        if (!term) {
            return null;
        }
        if (!r("isStringNullOrEmpty")(l)) {
            const p = i(l, term);
            if (p != null) {
                return {
                    match: l,
                    results: p
                };
            }
        }
        const _ = o("WAWebContactGetters").getUserid(contact);
        if (!r("isStringNullOrEmpty")(_) && _.includes(term) && !c(contact)) {
            const f = _.indexOf(term);
            return {
                match: _,
                results: [
                    {
                        startIndex: f,
                        length: term.length
                    }
                ]
            };
        }
        const g = m(contact, numeric);
        if (g != null && numeric != null) {
            const h = g.indexOf(numeric);
            return {
                match: g,
                results: [
                    {
                        startIndex: h,
                        length: numeric.length
                    }
                ]
            };
        }
        const y = o("WAWebFrontendContactGetters").getSearchVerifiedName(contact);
        if (!r("isStringNullOrEmpty")(y)) {
            const C = i(y, term);
            if (C != null) {
                return {
                    match: y,
                    results: C
                };
            }
        }
        if (contact.pushname) {
            const b = i(o("WAWebL10NAccentFold").accentFold(contact.pushname), term);
            if (b != null) {
                return {
                    match: contact.pushname,
                    results: b
                };
            }
        }
        const e_username = contact.username;
        if (e_username != null) {
            const S = o("WAWebUsernameTypes").serializeUsername(e_username);
            const R = o("WAWebL10NAccentFold").accentFold(S);
            const L = i(R, term);
            if (L != null && o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                return {
                    match: S,
                    results: L
                };
            }
        }
        if (o("WAWebContactGetters").getIsMe(contact)) {
            const E = o("WAWebL10NAccentFold").accentFold(s._("Me").toString());
            const k = i(E, term);
            if (k != null) {
                return {
                    match: E,
                    results: k
                };
            }
        }
        return null;
    }
    function g({ input, query, similarityThreshold }) {
        if (similarityThreshold < 0 || similarityThreshold > 1) {
            throw r("err")(`similarityThreshold must be between 0.0 and 1.0, got: ${similarityThreshold}`);
        }
        if (query.length === 0) {
            return null;
        }
        const i = o("WAWebFuzzyMatcher").fuzzyMatch({
            costTolerance: o("WAWebFuzzySearchMatchResult").MAX_ALLOWED_COST,
            input,
            query
        });
        if (i.isMatch() && i.getSimilarityRating() >= similarityThreshold) {
            return i;
        }
        return null;
    }
    function h(e, t) {
        const n = t.split(/\s+/).filter(Boolean);
        if (n.length === 0) {
            return null;
        }
        const r = [
            o("WAWebFrontendContactGetters").getSearchName(e),
            o("WAWebFrontendContactGetters").getSearchVerifiedName(e),
            o("WAWebL10NAccentFold").accentFold(e.pushname)
        ].concat(o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && e.username != null ? [
            o("WAWebL10NAccentFold").accentFold(o("WAWebUsernameTypes").serializeUsername(e.username))
        ] : []).filter(Boolean);
        const similarityThreshold = 1 - o("WAWebContactSearchGatingUtils").getFuzzySearchDistanceThreshold();
        for (const i of r){
            const l = [];
            for (const s of n){
                const u = g({
                    input: i,
                    query: s,
                    similarityThreshold
                });
                if (u == null) {
                    break;
                }
                l.push(u);
            }
            if (l.length === n.length) {
                return {
                    match: i,
                    results: l
                };
            }
        }
        return null;
    }
    function y(e, t, n, r) {
        if (t.startsWith("@") && o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            const i = d(t);
            return _({
                contact: e,
                label: r,
                numeric: n,
                term: i
            }) ?? _({
                contact: e,
                label: r,
                numeric: n,
                term: t
            });
        }
        return _({
            contact: e,
            label: r,
            numeric: n,
            term: t
        });
    }
    function C(e, t, n, r) {
        if (t.startsWith("@") && o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            const i = d(t);
            return p({
                contact: e,
                label: r,
                numeric: n,
                term: i
            }) ?? p({
                contact: e,
                label: r,
                numeric: n,
                term: t
            });
        }
        return p({
            contact: e,
            label: r,
            numeric: n,
            term: t
        });
    }
    function b(e, t) {
        if (t.startsWith("@") && o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            const r = d(t);
            return h(e, r) ?? h(e, t);
        }
        return h(e, t);
    }
    l.searchMatchPrefix = y;
    l.searchMatchExact = C;
    l.searchMatchFuzzy = b;
}, 226);