__d("WAWebUserPrefsNuxPreferences", [
    "WAWebChatAssignmentGatingUtils",
    "WAWebEventEmitter",
    "WAWebNux",
    "WAWebNuxSyncKey",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.handleNuxChange = function(t) {
            this.trigger(t);
        };
        t_prototype.handleNuxSyncChange = function(t) {
            this.trigger("nux_sync_change", t);
        };
        t_prototype.close = function(t) {
            this.trigger("close_nux", t);
        };
        return t;
    })(r("WAWebEventEmitter"));
    const s = new e;
    function u(e) {
        const t = o("WAWebNuxSyncKey").getNuxSyncKey(e);
        if (t != null && y(t)) {
            return false;
        }
        const n = c(e);
        if (n) {
            return n.views < b(e);
        }
        return true;
    }
    function c(e) {
        const t = r("WAWebUserPrefsStore").getUser(e);
        if (t == null || typeof t !== "object") {
            return null;
        }
        const t_views = t.views;
        if (typeof t_views === "number") {
            return {
                views: t_views
            };
        }
        return null;
    }
    function d(e, t) {
        r("WAWebUserPrefsStore").setUser(e, t);
        s.handleNuxChange(e);
    }
    function m(e) {
        r("WAWebUserPrefsStore").setUser(e);
        s.handleNuxChange(e);
    }
    function p() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.NUX_LIST);
        if (e instanceof Array) {
            return e.filter((e)=>typeof e === "string");
        }
        return [];
    }
    function _() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.NUX_DATA);
        if (e != null && typeof e === "object" && !Array.isArray(e)) {
            const t = {};
            for(const n in e){
                const a = e[n];
                if (a != null && typeof a === "object" && typeof a.acknowledged === "boolean") {
                    t[n] = {
                        acknowledged: a.acknowledged,
                        timestamp: typeof a.timestamp === "number" ? a.timestamp : undefined
                    };
                }
            }
            return t;
        }
        const i = p();
        const l = {};
        i.forEach((e)=>{
            l[e] = {
                acknowledged: true
            };
        });
        if (i.length > 0) {
            r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.NUX_DATA, l);
        }
        return l;
    }
    function f(e) {
        const t = new Set(p());
        const n = _();
        e.forEach(({ acknowledged, nuxKey, timestamp })=>{
            if (acknowledged) {
                t.add(nuxKey);
                n[nuxKey] = {
                    acknowledged: true,
                    timestamp
                };
            } else {
                t.delete(nuxKey);
                n[nuxKey] = {
                    acknowledged: false,
                    timestamp
                };
            }
        });
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.NUX_LIST, Array.from(t));
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.NUX_DATA, n);
        e.forEach(({ nuxKey })=>{
            const n = C(nuxKey);
            if (n != null) {
                s.handleNuxChange(n);
            }
            s.handleNuxSyncChange(nuxKey);
        });
    }
    function g() {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.NUX_LIST, []);
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.NUX_DATA, {});
    }
    function h(e) {
        m(e);
        const t = p().filter((t)=>t !== e);
        const n = _();
        delete n[e];
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.NUX_LIST, t);
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.NUX_DATA, n);
    }
    function y(e) {
        return p().includes(e);
    }
    function C(nuxKey) {
        switch(nuxKey){
            case "message_label_deprecation_migrated":
                return o("WAWebNux").NUX.MESSAGE_LABEL_DEPRECATION_MIGRATED_PERMANENT;
            case "meta_ai_cta_banner":
                return o("WAWebNux").NUX.META_AI_CTA_BANNER;
            case "newsletter_questions_response_privacy_banner":
                return o("WAWebNux").NUX.NEWSLETTER_QUESTIONS_RESPONSE_PRIVACY_BANNER;
            case "newsletter_questions_privacy_banner":
                return o("WAWebNux").NUX.NEWSLETTER_QUESTIONS_PRIVACY_BANNER;
            default:
                return null;
        }
    }
    function b(e) {
        switch(e){
            case "message_label_deprecation_migrated_permanent":
            case "desktop_upsell":
                return Number.POSITIVE_INFINITY;
            case "chat_assignment":
                return o("WAWebChatAssignmentGatingUtils").chatAssignmentMaxNuxImpressions();
            case "business_ai_message_editing_discovery_tooltip":
            case "status_quick_replies":
                return 3;
            case "web_ui_refresh":
                return 2;
            case "notifications_opt_in":
                return 2;
            default:
                return 1;
        }
    }
    l.NuxPrefsEvent = s;
    l.shouldShowNUX = u;
    l.getNUX = c;
    l.setNUX = d;
    l.removeNUX = m;
    l.getNuxSyncList = p;
    l.updateNuxSyncList = f;
    l.removeAllNuxSync = g;
    l.resetNux = h;
    l.nuxExistsInNuxSync = y;
    l.getNuxMaxViews = b;
}, 98);