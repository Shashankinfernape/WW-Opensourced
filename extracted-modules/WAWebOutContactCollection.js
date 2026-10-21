__d("WAWebOutContactCollection", [
    "WALogger",
    "WATimeUtils",
    "WAWebBaseCollection",
    "WAWebContactComparator",
    "WAWebContactSearchGatingUtils",
    "WAWebL10NAccentFold",
    "WAWebOutContactInviteGating",
    "WAWebOutContactInviteGatingUtils",
    "WAWebOutContactModel",
    "WAWebPhoneNumberSearch",
    "WAWebSlicedMatcher"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getContacts = function() {
            if (o("WAWebOutContactInviteGating").isOutContactInviteEnabled()) {
                return [].concat(this.getModelsArray());
            }
            return [];
        };
        t_prototype.getFilteredContacts = function(t) {
            if (!o("WAWebOutContactInviteGatingUtils").canShow1to1OutContactsInSession()) {
                return [];
            }
            const e = c(this.getModelsArray());
            if (t == null || t === "") {
                return [].concat(e).sort(o("WAWebContactComparator").ContactComparator);
            }
            const n = o("WAWebL10NAccentFold").accentFold(t).toLowerCase();
            const r = o("WAWebPhoneNumberSearch").numberSearch(n);
            return e.filter((e)=>p(e, n, r)).sort(o("WAWebContactComparator").ContactComparator);
        };
        t_prototype.searchOutContactsExact = function({ query }) {
            if (!o("WAWebOutContactInviteGatingUtils").canShow1to1OutContactsInSession() || !query.text) {
                return [];
            }
            const n = c(this.getModelsArray());
            return u(n, query);
        };
        t_prototype.searchOutContacts = function({ query, skipFuzzySearch = false }) {
            if (!o("WAWebOutContactInviteGatingUtils").canShow1to1OutContactsInSession() || !query.text) {
                return [];
            }
            const a = c(this.getModelsArray());
            const i = u(a, query);
            if (i.length > 0 || skipFuzzySearch) {
                return i;
            }
            const l = d(query, a);
            if (l == null) {
                return [];
            }
            return o("WAWebSlicedMatcher").drainMatcherSync(l);
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    s.model = r("WAWebOutContactModel");
    function u(e, query) {
        const n = [];
        for (const r of e){
            const o = r.searchMatchPrefix(query.text, query.number);
            if (o != null) {
                n.push({
                    outContact: r,
                    searchMatch: o
                });
            }
        }
        return sortResults(n);
    }
    function c(e) {
        if (o("WAWebOutContactInviteGating").isOutContactInviteEnabled()) {
            return e;
        }
        return e.filter(o("WAWebOutContactInviteGatingUtils").canShowOutContactFor1to1Invite);
    }
    function d(query, candidates) {
        if (!o("WAWebOutContactInviteGatingUtils").canShow1to1OutContactsInSession() || !query.text || !o("WAWebContactSearchGatingUtils").canTermsMeetFuzzySearchThreshold(query.text.split(/\s+/).filter(Boolean))) {
            return null;
        }
        const r = o("WAWebContactSearchGatingUtils").getFuzzySearchTimeoutThreshold() * 1000;
        const a = new (o("WATimeUtils")).MonotonicTimer;
        let i = false;
        return {
            candidates,
            sortResults,
            isTimedOut: function() {
                if (i) {
                    return true;
                }
                const t = a.elapsed();
                if (t > r) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "OutContact fuzzy search timeout ",
                        "ms (limit ",
                        "ms)"
                    ])), t, r);
                    i = true;
                    return true;
                }
                return false;
            },
            matchOne: function(n) {
                const e = n.searchMatchFuzzy(query.text);
                if (e == null) {
                    return null;
                }
                return {
                    outContact: n,
                    searchMatch: e
                };
            }
        };
    }
    function sortResults(e) {
        return e.sort((e, t)=>o("WAWebContactComparator").ContactComparator(e.outContact, t.outContact));
    }
    function p(e, t, n) {
        const r = o("WAWebL10NAccentFold").accentFold(e.getName()).toLowerCase();
        if (r.includes(t)) {
            return true;
        }
        const a = n ?? t;
        return !!e.phoneNumber.includes(a);
    }
    const _ = new s;
    l.OutContactCollection = _;
}, 98);