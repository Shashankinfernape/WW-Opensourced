__d("WAWebNonContactPushNameSearchModel", [
    "fbt",
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebContactSearchGatingUtils",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebResolveBotProfile",
    "WAWebSearchModel",
    "WAWebSearchUtils"
], function(t, n, r, o, a, i, l, s) {
    const e = 750;
    const u = 3;
    const c = 3;
    const d = Object.freeze([]);
    function m() {
        return s._("In a group with you");
    }
    function p(e) {
        return (o("WAWebLidMigrationUtils").toPn(e) ?? e).toString();
    }
    function _(e, ...n) {
        if (e.length === 0) {
            return d;
        }
        const o = new Set(n.flat().map((e)=>p(e.id)));
        const a = [];
        for (const i of e){
            if (a.length >= u) {
                break;
            }
            const l = p(i.id);
            if (!o.has(l)) {
                o.add(l);
                a.push(i);
            }
        }
        if (a.length === 0) {
            return d;
        }
        return a;
    }
    const f = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = "WAWebNonContactPushNameSearchModel";
            t.$WAWebNonContactPushNameSearchModel$p_1 = [];
            t.$WAWebNonContactPushNameSearchModel$p_2 = new Date(0);
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.$WAWebNonContactPushNameSearchModel$p_3 = function() {
            const e = this;
            if (this.$WAWebNonContactPushNameSearchModel$p_4()) {
                this.$WAWebNonContactPushNameSearchModel$p_1 = Array.from(o("WAWebChatCollection").ChatCollection.filter((t)=>e.$WAWebNonContactPushNameSearchModel$p_5(t)).flatMap((e)=>e.groupMetadata?.participants?.getModelsArray() ?? []).reduce((acc, item)=>{
                    const n = item.id.toString();
                    if (!acc.has(n)) {
                        const r = item.contact;
                        if (r != null && !o("WAWebContactGetters").getIsMe(r) && !o("WAWebFrontendContactGetters").getIsMyContact(r) && r.pushname != null && r.pushname.trim() !== "") {
                            acc.set(n, r);
                        }
                    }
                    return acc;
                }, new Map).values());
                this.$WAWebNonContactPushNameSearchModel$p_2 = new Date;
                return this.$WAWebNonContactPushNameSearchModel$p_1;
            }
            return this.$WAWebNonContactPushNameSearchModel$p_1;
        };
        t_prototype.$WAWebNonContactPushNameSearchModel$p_5 = function(t) {
            if (!o("WAWebChatGetters").getIsGroup(t)) {
                return false;
            }
            const n = t.groupMetadata?.participants;
            return n != null && n.iAmMember();
        };
        t_prototype.$WAWebNonContactPushNameSearchModel$p_4 = function() {
            return Date.now() - this.$WAWebNonContactPushNameSearchModel$p_2.getTime() >= t.CACHE_TTL_MS;
        };
        t_prototype.$WAWebNonContactPushNameSearchModel$p_6 = function({ pushname }, n) {
            if (pushname == null) {
                return false;
            }
            return o("WAWebSearchUtils").normalizeString(pushname).includes(n);
        };
        t_prototype.queryFn = function(t, n) {
            const e = this;
            const r = o("WAWebSearchUtils").normalizeString(t);
            if (r.replace(/\s/g, "").length < c) {
                return {
                    type: "non-contact-pushname",
                    results: [],
                    pagination: {
                        page: 0,
                        pageLength: 0,
                        hasMoreResults: false
                    }
                };
            }
            const a = o("WAWebSearchUtils").filterPaginate(this.$WAWebNonContactPushNameSearchModel$p_3(), function(t) {
                return !o("WAWebBotUtils").isHiddenBotWid(t.id) && !o("WAWebResolveBotProfile").shouldHideMuseBotFromCachedProfile(t.id) && e.$WAWebNonContactPushNameSearchModel$p_6(t, r);
            }, n?.pagination);
            const { pagination, results } = a;
            return {
                type: "non-contact-pushname",
                results: results.map((e)=>({
                        id: e.id.toString(),
                        type: "non-contact-pushname",
                        data: e
                    })),
                pagination
            };
        };
        t_prototype.invalidateCache = function() {
            this.$WAWebNonContactPushNameSearchModel$p_1 = [];
            this.$WAWebNonContactPushNameSearchModel$p_2 = new Date(0);
        };
        return t;
    })(o("WAWebSearchModel").Search);
    f.CACHE_TTL_MS = o("WATimeUtils").MINUTE_MILLISECONDS;
    let g;
    function h() {
        if (g == null) {
            g = new f;
        }
        return g;
    }
    function y(e) {
        if (!e || !o("WAWebContactSearchGatingUtils").isNonContactPushNameSearchEnabled()) {
            return d;
        }
        try {
            const t = h().queryFn(e).results.map((e)=>e.data);
            if (t.length === 0) {
                return d;
            }
            return t;
        } catch (e) {
            return d;
        }
    }
    l.NON_CONTACT_PUSHNAME_SEARCH_DEBOUNCE_MS = e;
    l.EMPTY_NON_CONTACT_PUSHNAMES = d;
    l.getNonContactPushNameHeader = m;
    l.canonicalDedupeId = p;
    l.dedupeNonContactPushnames = _;
    l.WAWebNonContactPushNameSearchModel = f;
    l.getNonContactPushNameSearch = h;
    l.searchNonContactPushnames = y;
}, 226);