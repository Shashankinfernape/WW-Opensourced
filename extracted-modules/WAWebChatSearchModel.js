__d("WAWebChatSearchModel", [
    "WALogger",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebContactSearchGatingUtils",
    "WAWebFrontendChatGetters",
    "WAWebPhoneNumberSearch",
    "WAWebSearchModel",
    "WAWebSearchUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = "ChatSearch";
            e.type = "chat";
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.queryFn = function(n, r) {
            const t = this;
            const l = o("WAWebSearchUtils").normalizeString(n);
            const s = o("WAWebPhoneNumberSearch").numberSearch(l);
            const u = o("WAWebSearchUtils").filterPaginate(o("WAWebChatCollection").ChatCollection.getModelsArray(), function(e) {
                if (!o("WAWebFrontendChatGetters").getShouldAppearInList(e) || t.type === "group" && !o("WAWebChatGetters").getIsGroup(e) || t.type === "1-1" && o("WAWebChatGetters").getIsGroup(e)) {
                    return false;
                }
                return n === "" || e.contact.searchMatchExact(l, s);
            }, r?.pagination);
            const { pagination, results } = u;
            const m = r?.pagination?.page ?? 0;
            if (results.length > 0 || n === "" || m !== 0 || !o("WAWebContactSearchGatingUtils").canTermsMeetFuzzySearchThreshold(l.split(/\s+/).filter(Boolean))) {
                return {
                    type: this.type,
                    pagination,
                    results: results.map((e)=>({
                            id: e.id.toString(),
                            type: t.type,
                            data: e
                        }))
                };
            }
            const p = o("WAWebContactSearchGatingUtils").getFuzzySearchTimeoutThreshold() * 1000;
            const _ = new (o("WATimeUtils")).MonotonicTimer;
            let f = false;
            const g = o("WAWebSearchUtils").filterPaginate(o("WAWebChatCollection").ChatCollection.getModelsArray(), function(n) {
                const r = _.elapsed();
                if (f || r > p) {
                    if (!f) {
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Chat fuzzy search timeout ",
                            "ms (limit ",
                            "ms)"
                        ])), r, p);
                    }
                    f = true;
                    return false;
                }
                if (!o("WAWebFrontendChatGetters").getShouldAppearInList(n) || t.type === "group" && !o("WAWebChatGetters").getIsGroup(n) || t.type === "1-1" && o("WAWebChatGetters").getIsGroup(n)) {
                    return false;
                }
                return n.contact.searchMatchFuzzy(l) != null;
            }, r?.pagination);
            const { pagination: pagination_1, results: results_1 } = g;
            return {
                type: this.type,
                pagination: pagination_1,
                results: results_1.map((e)=>({
                        id: e.id.toString(),
                        type: t.type,
                        data: e
                    }))
            };
        };
        return n;
    })(o("WAWebSearchModel").Search);
    const u = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = "LockedChatSearch";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.queryFn = function(t, n) {
            const e = o("WAWebSearchUtils").normalizeString(t);
            const r = o("WAWebPhoneNumberSearch").numberSearch(e);
            const a = o("WAWebSearchUtils").filterPaginate(o("WAWebChatCollection").ChatCollection.getModelsArray(), function(n) {
                if (n.isLocked) {
                    return t === "" || n.contact.searchMatchExact(e, r);
                }
                return false;
            }, n?.pagination);
            const { pagination, results } = a;
            return {
                type: "locked-chat",
                pagination,
                results: results.map((e)=>({
                        id: e.id.toString(),
                        type: "locked-chat",
                        data: e
                    }))
            };
        };
        return t;
    })(o("WAWebSearchModel").Search);
    l.ChatSearch = s;
    l.LockedChatSearch = u;
}, 98);