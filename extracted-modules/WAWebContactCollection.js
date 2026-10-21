__d("WAWebContactCollection", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBaseCollection",
    "WAWebContactCollectionUtils",
    "WAWebContactComparator",
    "WAWebContactModel",
    "WAWebContactSearchGatingUtils",
    "WAWebDebounce",
    "WAWebSlicedMatcher",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    const e = [
        "cancelAt"
    ];
    let s;
    let u;
    let c;
    const d = ((t)=>{
        function a() {
            let e;
            e = t.call(this) || this;
            e._sort = r("WAWebDebounce")(function() {
                return t.prototype.sort.call(e);
            }, 1000);
            e._silentSort = r("WAWebDebounce")(function() {
                return t.prototype.sort.call(e, {
                    silent: true
                });
            }, 1000);
            e.findImpl = function(t) {
                const r = e.get(t);
                if (r) {
                    return (c || (c = n("Promise"))).resolve({
                        id: r.id,
                        stale: r.stale
                    });
                }
                return (c || (c = n("Promise"))).resolve({
                    id: t
                });
            };
            e.listenTo(o("WAWebSocketModel").Socket, "change:stream", function() {
                if (o("WAWebSocketModel").Socket.stream === o("WAWebSocketConstants").SOCKET_STREAM.RESUMING) {
                    e.forEach((e)=>{
                        e.unset("verificationString");
                        e.unset("verificationBinary");
                    });
                }
            });
            return e;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.sort = function(t) {
            return this;
        };
        a_prototype.ensureSorted = function() {
            this._sort.flush();
        };
        a_prototype.initializeFromCache = function(t) {
            if (t) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Store:Contact init from cache"
                ])));
                this.add(t, {
                    silent: true,
                    merge: true
                });
            }
        };
        a_prototype.searchContactsExact = function({ query, filter = {} }) {
            const a = [];
            o("WAWebContactCollectionUtils").getFilteredContacts(this, babelHelpers.extends({}, filter, {
                filterFn: function(n) {
                    const t = n.searchMatchPrefix(query.text, query.number, query.label);
                    if (t == null || filter.filterFn != null && !filter.filterFn(n)) {
                        return false;
                    }
                    a.push({
                        contact: n,
                        searchMatch: t
                    });
                    return true;
                }
            }));
            return a;
        };
        a_prototype._buildFuzzyMatcher = function(n, r) {
            if (!o("WAWebContactSearchGatingUtils").canTermsMeetFuzzySearchThreshold(n.text.split(/\s+/).filter(Boolean))) {
                return null;
            }
            const r_cancelAt = r.cancelAt;
            const a = r_cancelAt === undefined ? null : r_cancelAt;
            const i = babelHelpers.objectWithoutPropertiesLoose(r, e);
            const candidates = this.getModelsArray();
            const s = o("WAWebContactSearchGatingUtils").getFuzzySearchTimeoutThreshold() * 1000;
            const c = new (o("WATimeUtils")).MonotonicTimer;
            let d = false;
            return {
                candidates,
                limit: a,
                isTimedOut: function() {
                    if (d) {
                        return true;
                    }
                    const e = c.elapsed();
                    if (e > s) {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Fuzzy search timeout ",
                            "ms (limit ",
                            "ms)"
                        ])), e, s);
                        d = true;
                        return true;
                    }
                    return false;
                },
                matchOne: function(t) {
                    if (!o("WAWebContactCollectionUtils").passesContactFilter(t, i)) {
                        return null;
                    }
                    const e = t.searchMatchFuzzy(n.text);
                    if (e == null) {
                        return null;
                    }
                    return {
                        contact: t,
                        searchMatch: e
                    };
                }
            };
        };
        a_prototype.searchContacts = function({ query, filter = {} }) {
            const a = this.searchContactsExact({
                query,
                filter
            });
            if (a.length > 0) {
                return a;
            }
            const i = this._buildFuzzyMatcher(query, filter);
            if (i == null) {
                return [];
            }
            return o("WAWebSlicedMatcher").drainMatcherSync(i);
        };
        a_prototype.getMeContact = function() {
            return this.get(o("WAWebUserPrefsMeUser").getMeLidUserOrThrow());
        };
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    d.model = r("WAWebContactModel");
    d.comparator = o("WAWebContactComparator").ContactComparator;
    const m = new d;
    l.ContactCollectionImpl = d;
    l.ContactCollection = m;
}, 98);