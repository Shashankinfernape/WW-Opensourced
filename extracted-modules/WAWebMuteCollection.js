__d("WAWebMuteCollection", [
    "WALogger",
    "WAWebABProps",
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebConnModel",
    "WAWebMuteModel",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsNotifications",
    "WAWebUserPrefsStore",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        throw new TypeError(`"${e}" is read-only`);
    }
    let c = true;
    let d = true;
    let m = true;
    let p = false;
    let _ = false;
    let f = false;
    let g = false;
    let h = false;
    let y = false;
    let C = false;
    let b = false;
    let v = true;
    let S = false;
    let R = false;
    let L = true;
    let E = false;
    let k = false;
    let I = true;
    const T = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.isGranularNotificationsEnabled = false;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.initializeFromCache = function(t) {
            const e = this;
            this.isGranularNotificationsEnabled = o("WAWebABProps").getABPropConfigValue("wa_web_enable_granular_notifications");
            if (Array.isArray(t)) {
                t.forEach((t)=>{
                    if (o("WAWebMuteModel").GLOBAL_REACTIONS_MUTE === t.id) {
                        e.add(t, {
                            remove: false
                        });
                    }
                });
            }
            this.setGlobalCallNotifications(o("WAWebUserPrefsNotifications").getGlobalCallNotifications());
            this.setGlobalNotifications(o("WAWebUserPrefsNotifications").getGlobalNotifications());
            this.setGlobalOfflineNotifications(o("WAWebUserPrefsNotifications").getGlobalOfflineNotifications());
            this.setGlobalSounds(o("WAWebUserPrefsNotifications").getGlobalSounds());
            this.setGlobalCallRingtone(o("WAWebUserPrefsNotifications").getGlobalCallRingtone());
            this.setGlobalPreviews(o("WAWebUserPrefsNotifications").getGlobalPreviews());
            this.setCollapseMuted(o("WAWebUserPrefsNotifications").getCollapseMuted());
            this.setOutgoingMessageSound(o("WAWebUserPrefsNotifications").getOutgoingMessageSound());
            this.setIgnoreNondirectGroupMsg(o("WAWebUserPrefsNotifications").getIgnoreNondirectGroupMsg());
            this.setGlobalNotificationsEnabled(o("WAWebUserPrefsNotifications").getGlobalNotificationsEnabled());
            this.setGlobalNotificationReactionsEnabled(o("WAWebUserPrefsNotifications").getGlobalNotificationReactionsEnabled(!this.globalReactionsMute()));
            this.setGlobalSoundsEnabled(o("WAWebUserPrefsNotifications").getGlobalSoundsEnabled());
            this.setGlobalGroupNotificationsEnabled(o("WAWebUserPrefsNotifications").getGlobalGroupNotificationsEnabled());
            this.setGlobalGroupNotificationReactionsEnabled(o("WAWebUserPrefsNotifications").getGlobalGroupNotificationReactionsEnabled());
            this.setGlobalGroupSoundsEnabled(o("WAWebUserPrefsNotifications").getGlobalGroupSoundsEnabled());
            this.setGlobalStatusNotificationsEnabled(o("WAWebUserPrefsNotifications").getGlobalStatusNotificationsEnabled());
            this.setGlobalStatusNotificationReactionsEnabled(o("WAWebUserPrefsNotifications").getGlobalStatusNotificationReactionsEnabled());
            this.setGlobalStatusSoundsEnabled(o("WAWebUserPrefsNotifications").getGlobalStatusSoundsEnabled());
        };
        n_prototype.saveToCache = function() {
            if (o("WAWebConnModel").Conn.shouldSaveToCache()) {
                const t = this.constructor.cachePolicy.id;
                const n = [];
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:mute:cache-save: ",
                    ""
                ])), String(t));
                const a = this.get(o("WAWebMuteModel").GLOBAL_REACTIONS_MUTE);
                if (a) {
                    n.push(a.toJSON());
                }
                if (n.length) {
                    r("WAWebUserPrefsStore").setCollection(t, n);
                } else {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "models:mute:cache-save: globalMuteModel or globalReactionsMuteModel does not exist"
                    ])));
                }
            }
        };
        n_prototype.globalReactionsMute = function() {
            const e = this.get(o("WAWebMuteModel").GLOBAL_REACTIONS_MUTE);
            if (e) {
                return e;
            }
            const t = new (o("WAWebMuteModel")).Mute({
                id: o("WAWebMuteModel").GLOBAL_REACTIONS_MUTE
            });
            this.add(t);
            return t;
        };
        n_prototype.getGlobalSounds = function() {
            return c;
        };
        n_prototype.setGlobalSounds = function(t) {
            c = t;
            o("WAWebUserPrefsNotifications").setGlobalSounds(t);
            if (!this.isGranularNotificationsEnabled) {
                this.setGlobalSoundsEnabled(t);
                this.setGlobalGroupSoundsEnabled(t);
                this.setGlobalStatusSoundsEnabled(t);
            }
        };
        n_prototype.getGlobalCallRingtone = function() {
            return m;
        };
        n_prototype.setGlobalCallRingtone = function(t) {
            m = t;
            o("WAWebUserPrefsNotifications").setGlobalCallRingtone(t);
        };
        n_prototype.getGlobalNotifications = function() {
            return p;
        };
        n_prototype.setGlobalNotifications = function(t) {
            p = t;
            o("WAWebUserPrefsNotifications").setGlobalNotifications(t);
            if (!this.isGranularNotificationsEnabled) {
                this.setGlobalNotificationsEnabled(t);
                this.setGlobalGroupNotificationsEnabled(t);
                this.setGlobalStatusNotificationsEnabled(t);
            }
        };
        n_prototype.getGlobalCallNotifications = function() {
            return d;
        };
        n_prototype.setGlobalCallNotifications = function(t) {
            d = t;
            o("WAWebUserPrefsNotifications").setGlobalCallNotifications(t);
            this.trigger("change:notificationsEnabled");
        };
        n_prototype.getGlobalOfflineNotifications = function() {
            return _;
        };
        n_prototype.setGlobalOfflineNotifications = function(t) {
            _ = t;
            o("WAWebUserPrefsNotifications").setGlobalOfflineNotifications(t);
        };
        n_prototype.getGlobalPreviews = function() {
            return f;
        };
        n_prototype.setGlobalPreviews = function(t) {
            f = t;
            o("WAWebUserPrefsNotifications").setGlobalPreviews(t);
        };
        n_prototype.getCollapseMuted = function() {
            return g;
        };
        n_prototype.setCollapseMuted = function(t) {
            g = t;
            o("WAWebUserPrefsNotifications").setCollapseMuted(t);
            this.trigger("change:collapseMuted", g);
        };
        n_prototype.getOutgoingMessageSound = function() {
            return h;
        };
        n_prototype.setOutgoingMessageSound = function(t) {
            h = t;
            o("WAWebUserPrefsNotifications").setOutgoingMessageSound(t);
        };
        n_prototype.getIgnoreNondirectGroupMsg = function() {
            if (r("gkx")("26258")) {
                return false;
            }
            return y;
        };
        n_prototype.setIgnoreNondirectGroupMsg = function(t) {
            if (!r("gkx")("26258")) {
                y = t;
                o("WAWebUserPrefsNotifications").setIgnoreNondirectGroupMsg(t);
            }
        };
        n_prototype.getGlobalNotificationsEnabled = function() {
            return C;
        };
        n_prototype.setGlobalNotificationsEnabled = function(t) {
            C = t;
            o("WAWebUserPrefsNotifications").setGlobalNotificationsEnabled(t);
            this.trigger("change:notificationsEnabled");
            if (this.isGranularNotificationsEnabled) {
                this.setGlobalNotifications(t);
            }
        };
        n_prototype.getGlobalNotificationReactionsEnabled = function() {
            return b;
        };
        n_prototype.setGlobalNotificationReactionsEnabled = function(t) {
            b = t;
            o("WAWebUserPrefsNotifications").setGlobalNotificationReactionsEnabled(t);
            if (this.isGranularNotificationsEnabled) {
                if (t) {
                    this.globalReactionsMute().unmute();
                } else {
                    this.globalReactionsMute().mute({
                        expiration: -1
                    });
                }
            }
        };
        n_prototype.getGlobalSoundsEnabled = function() {
            return v;
        };
        n_prototype.setGlobalSoundsEnabled = function(t) {
            v = t;
            o("WAWebUserPrefsNotifications").setGlobalSoundsEnabled(t);
            if (this.isGranularNotificationsEnabled) {
                this.setGlobalSounds(t);
            }
        };
        n_prototype.getGlobalGroupNotificationsEnabled = function() {
            return S;
        };
        n_prototype.setGlobalGroupNotificationsEnabled = function(t) {
            S = t;
            o("WAWebUserPrefsNotifications").setGlobalGroupNotificationsEnabled(t);
            this.trigger("change:notificationsEnabled");
        };
        n_prototype.getGlobalGroupNotificationReactionsEnabled = function() {
            return R;
        };
        n_prototype.setGlobalGroupNotificationReactionsEnabled = function(t) {
            R = t;
            o("WAWebUserPrefsNotifications").setGlobalGroupNotificationReactionsEnabled(t);
        };
        n_prototype.getGlobalGroupSoundsEnabled = function() {
            return L;
        };
        n_prototype.setGlobalGroupSoundsEnabled = function(t) {
            L = t;
            o("WAWebUserPrefsNotifications").setGlobalGroupSoundsEnabled(t);
        };
        n_prototype.getGlobalStatusNotificationsEnabled = function() {
            return E;
        };
        n_prototype.setGlobalStatusNotificationsEnabled = function(t) {
            E = t;
            o("WAWebUserPrefsNotifications").setGlobalStatusNotificationsEnabled(t);
            this.trigger("change:notificationsEnabled");
        };
        n_prototype.getGlobalStatusNotificationReactionsEnabled = function() {
            return k;
        };
        n_prototype.setGlobalStatusNotificationReactionsEnabled = function(t) {
            k = t;
            o("WAWebUserPrefsNotifications").setGlobalStatusNotificationReactionsEnabled(t);
        };
        n_prototype.getGlobalStatusSoundsEnabled = function() {
            return I;
        };
        n_prototype.setGlobalStatusSoundsEnabled = function(t) {
            I = t;
            o("WAWebUserPrefsNotifications").setGlobalStatusSoundsEnabled(t);
        };
        n_prototype.setAllNotificationsAndReactions = function(t) {
            this.setGlobalNotificationReactionsEnabled(t);
            this.setGlobalGroupNotificationReactionsEnabled(t);
            this.setGlobalStatusNotificationReactionsEnabled(t);
            if (this.isGranularNotificationsEnabled) {
                this.setGlobalNotificationsEnabled(t);
                this.setGlobalGroupNotificationsEnabled(t);
                this.setGlobalStatusNotificationsEnabled(t);
            } else {
                this.setGlobalNotifications(t);
                if (t) {
                    this.globalReactionsMute().unmute();
                } else {
                    this.globalReactionsMute().mute({
                        expiration: -1
                    });
                }
            }
        };
        return n;
    })(o("WAWebBaseCollection").BaseCollection);
    T.model = o("WAWebMuteModel").Mute;
    T.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.MUTE_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 1000
    };
    const D = new T;
    l.MuteCollection = D;
}, 98);