__d("WAWebUserPrefsGeneral", [
    "WALogger",
    "WAWebComposeBoxPanelTypes",
    "WAWebDbUsageApiConst",
    "WAWebEnvironment",
    "WAWebEventEmitter",
    "WAWebMediaAutoDownloadQuality.flow",
    "WAWebMobilePlatformPersistence",
    "WAWebNonEmptyString",
    "WAWebPrivacySettings",
    "WAWebUserPrefsDebugKeys",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = "light";
    const p = new (r("WAWebEventEmitter"));
    function _(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.LAST_PUSHNAME, e);
    }
    function f() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.LAST_PUSHNAME);
        if (typeof e === "string") {
            return e;
        }
        return null;
    }
    function g() {
        let e;
        const t = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.BROWSER_ID);
        if (typeof t === "string" && (e = o("WAWebNonEmptyString").asMaybeNonEmptyString(t)) != null) {
            return e;
        }
        return null;
    }
    function h(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.BROWSER_ID, e);
    }
    function y(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.LAST_CHAT_MUTE_DURATION, e === Number.POSITIVE_INFINITY ? "Infinity" : e);
    }
    function C() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.LAST_CHAT_MUTE_DURATION);
        if (e === "Infinity") {
            return Number.POSITIVE_INFINITY;
        }
        if (typeof e === "number") {
            return e;
        }
        return null;
    }
    function b(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.THEME, e);
    }
    function v() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.THEME);
        if (e === "light" || e === "dark") {
            return e;
        }
        return m;
    }
    function S(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.SYSTEM_THEME_MODE, e);
    }
    function R() {
        return r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.SYSTEM_THEME_MODE) !== false;
    }
    function L(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.LAST_MEDIA_EDITOR_PAINT_COLOR, e);
    }
    function E() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.LAST_MEDIA_EDITOR_PAINT_COLOR);
        if (typeof e === "string") {
            return e;
        }
        return null;
    }
    function k(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.LAST_SELECTED_COMPOSE_BOX_PANEL, e);
    }
    function I() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.LAST_SELECTED_COMPOSE_BOX_PANEL);
        if (typeof e !== "string") {
            return null;
        }
        return o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.cast(e);
    }
    function T(e) {
        r("WAWebUserPrefsStore").setUser(e.toString(), true);
    }
    function D(e) {
        return r("WAWebUserPrefsStore").getUser(e.toString()) === true;
    }
    function x(e, t, n) {
        if (e != null) {
            const r = e[0];
            const o = e[1];
            if (typeof n === "string") {
                const a = o[n];
                if (a != null && a === n) {
                    t[r] = a;
                }
            }
        }
    }
    function $() {
        const e = {};
        const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS);
        if (!(t == null || typeof t !== "object")) {
            x([
                "readReceipts",
                o("WAWebPrivacySettings").ALL_NONE
            ], e, t.readReceipts);
            x([
                "groupAdd",
                o("WAWebPrivacySettings").VISIBILITY
            ], e, t.groupAdd);
            x([
                "profilePicture",
                o("WAWebPrivacySettings").VISIBILITY
            ], e, t.profilePicture);
            x([
                "about",
                o("WAWebPrivacySettings").VISIBILITY
            ], e, t.about);
            x([
                "lastSeen",
                o("WAWebPrivacySettings").VISIBILITY
            ], e, t.lastSeen);
            x([
                "online",
                o("WAWebPrivacySettings").ONLINE_VISIBILITY
            ], e, t.online);
            x([
                "callAdd",
                o("WAWebPrivacySettings").CALL_ADD
            ], e, t.callAdd);
            x([
                "messages",
                o("WAWebPrivacySettings").ALL_CONTACTS
            ], e, t.messages);
            x([
                "defenseMode",
                o("WAWebPrivacySettings").DEFENSE_MODE_STATE
            ], e, t.defenseMode);
            x([
                "pix",
                o("WAWebPrivacySettings").VISIBILITY
            ], e, t.pix);
            if (e.defenseMode != null && e.defenseMode !== "off") {
                e.disableLinkPreviews = true;
            } else if (t.disableLinkPreviews != null) {
                e.disableLinkPreviews = t.disableLinkPreviews === true;
            }
            if (t.disallowAllP2p != null) {
                e.disallowAllP2p = t.disallowAllP2p === true;
            }
        }
        return e;
    }
    function P(t) {
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS, t).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "setUserPrivacySettings: failed to set to indexedDB"
            ])));
        });
        p.trigger("all", t);
    }
    function N() {
        return r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_PHOTOS) !== false;
    }
    function M(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_PHOTOS, e);
    }
    function w() {
        return r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_AUDIO) !== false;
    }
    function A(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_AUDIO, e);
    }
    function F() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_VIDEOS);
        if (r("WAWebEnvironment").isWindows) {
            return e !== false;
        }
        return e === true;
    }
    function O(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_VIDEOS, e);
    }
    function B() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_DOCUMENTS);
        if (r("WAWebEnvironment").isWindows) {
            return e !== false;
        }
        return e === true;
    }
    function W(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_DOCUMENTS, e);
    }
    function q() {
        const t = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_MEDIA_QUALITY);
        if (typeof t !== "number") {
            return null;
        }
        return o("WAWebMediaAutoDownloadQuality.flow").MediaAutoDownloadQuality.cast(t) ?? null;
    }
    function U() {
        return q() ?? o("WAWebMediaAutoDownloadQuality.flow").MediaAutoDownloadQuality.STANDARD;
    }
    function V(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.AUTO_DOWNLOAD_MEDIA_QUALITY, Number(e));
    }
    function H(e) {
        const t = r("WAWebUserPrefsStore").getUser(`${o("WAWebUserPrefsKeys").KEYS.GROUP_ASSIGNED_COLOR}-${e.toString()}`);
        const n = {};
        if (!(t == null || typeof t !== "object")) {
            Object.entries(t).forEach(([t, r])=>{
                if (typeof r === "number") {
                    n[t] = r;
                }
            });
        }
        return n;
    }
    function G(e, t) {
        r("WAWebUserPrefsStore").setUser(`${o("WAWebUserPrefsKeys").KEYS.GROUP_ASSIGNED_COLOR}-${e.toString()}`, t);
    }
    function z(e, t) {
        j(e);
        K(t);
    }
    function j(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.MEDIA_VOLUME, e);
    }
    function K(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.MEDIA_MUTE, e);
    }
    function Q() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.MEDIA_VOLUME);
        return {
            volume: typeof e === "number" ? e : null,
            muted: r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.MEDIA_MUTE) === true
        };
    }
    const X = 1;
    function Y() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.PTT_PLAYBACK_RATE);
        if (typeof e !== "number") {
            return X;
        }
        if (e === 1 || e === 2) {
            return e;
        }
        if (Math.abs(e - 1.5) < Number.EPSILON) {
            return 1.5;
        }
        return X;
    }
    function J(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.PTT_PLAYBACK_RATE, e);
    }
    function Z() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.LAST_STATUS_USAGE);
        if (typeof e === "number") {
            return e;
        }
        return null;
    }
    function ee() {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.LAST_STATUS_USAGE, Date.now());
    }
    function te() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.LAST_NEWSLETTER_STATUS_BACKFILL_TS);
        if (typeof e === "number") {
            return e;
        }
        return null;
    }
    function ne() {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.LAST_NEWSLETTER_STATUS_BACKFILL_TS, Date.now());
    }
    function re(e) {
        return (e.toString() || "").replace("@", "_");
    }
    function oe(e) {
        if (e.some((e)=>e.endsWith("_"))) {
            const t = e.map((e)=>e.replace(/_$/, "").replace("@", "_"));
            r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO, t);
            return t;
        }
        return e;
    }
    function ae(e) {
        const t = re(e);
        let n = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO) || [];
        if (!Array.isArray(n)) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "markUserSentMessageToChat: store value not array"
            ])));
            r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO, [
                t
            ]);
            return false;
        }
        n = oe(n);
        const a = !n.includes(t);
        if (a) {
            n.push(t);
            r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO, n);
        }
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "UserPrefs:markUserSentMessageToChat"
        ])));
        return a;
    }
    function ie(e) {
        let t = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO) || [];
        if (!Array.isArray(t)) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "removeUserSentMessageToChat: store value not array"
            ])));
            r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO, []);
            return;
        }
        t = oe(t);
        const n = re(e);
        if (t.includes(n)) {
            r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.CHATS_USER_SENT_MESSAGE_TO, t.filter((e)=>e !== n));
        }
        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "UserPrefs:removeUserSentMessageToChat"
        ])));
    }
    function le() {
        se();
    }
    function se() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.DAILY_STATS_START_TIME);
        if (typeof e === "number") {
            return e;
        }
        const t = Date.now();
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.DAILY_STATS_START_TIME, t);
        return t;
    }
    function ue() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.PS_KILLSWITCH_TOKEN);
        if (typeof e === "string") {
            return e;
        }
        return null;
    }
    function ce(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.PS_KILLSWITCH_TOKEN, e);
    }
    function de() {
        if (!r("gkx")("26258")) {
            const e = {
                lowQuotaDismissed: false,
                highQuotaDismissed: false
            };
            const t = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.STORAGE_DISMISS_STATE);
            if (typeof t !== "string") {
                return e;
            }
            let n;
            try {
                n = JSON.parse(t);
            } catch (t) {
                return e;
            }
            if (n == null || typeof n !== "object") {
                return e;
            }
            return {
                lowQuotaDismissed: n.lowQuotaDismissed === true,
                highQuotaDismissed: n.highQuotaDismissed === true
            };
        }
        return {
            lowQuotaDismissed: true,
            highQuotaDismissed: true
        };
    }
    function me(e) {
        if (!r("gkx")("26258")) {
            r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.STORAGE_DISMISS_STATE, JSON.stringify(e));
        }
    }
    function pe() {
        if (!r("gkx")("26258")) {
            const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.STORAGE_ALERT_FLAG);
            if (typeof e === "string") {
                return o("WAWebDbUsageApiConst").StorageAlertType.cast(e) ?? o("WAWebDbUsageApiConst").StorageAlertType.NO_ALERT;
            }
        }
        return o("WAWebDbUsageApiConst").StorageAlertType.NO_ALERT;
    }
    function _e(e) {
        if (!r("gkx")("26258")) {
            r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.STORAGE_ALERT_FLAG, e);
        }
    }
    function fe() {
        const e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.PERSISTENT_EXPIRING_ID);
        if (e == null || typeof e !== "object") {
            return null;
        }
        const { ts: t, value: n } = e;
        if (typeof t !== "number" || typeof n !== "string") {
            return null;
        }
        return {
            ts: t,
            value: n
        };
    }
    function ge(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.PERSISTENT_EXPIRING_ID, e);
    }
    function he() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_IDB);
        return !!e;
    }
    function ye(e) {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_IDB, e);
    }
    function Ce() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_DIRTY_BIT_IDB);
        return !!e;
    }
    function be(e) {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").KEYS.WHATSAPP_WEB_EXTERNAL_BETA_DIRTY_BIT_IDB, e);
    }
    function ve() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.APP_VERSION_BASE);
    }
    function Se(e) {
        return Re.apply(this, arguments);
    }
    function Re() {
        Re = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e != null) {
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.APP_VERSION_BASE, e);
            }
        });
        return Re.apply(this, arguments);
    }
    function Le() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGIN_COUNTER) ?? 0;
    }
    function Ee() {
        return ke.apply(this, arguments);
    }
    function ke() {
        ke = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = Le();
            const t = Math.pow(2, 31) - 1;
            const n = e >= t ? 0 : e + 1;
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGIN_COUNTER, n);
        });
        return ke.apply(this, arguments);
    }
    function Ie() {
        return Te.apply(this, arguments);
    }
    function Te() {
        Te = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGIN_COUNTER, 0);
        });
        return Te.apply(this, arguments);
    }
    function De() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_COUNT);
    }
    function xe(e) {
        return $e.apply(this, arguments);
    }
    function $e() {
        $e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_COUNT, e);
        });
        return $e.apply(this, arguments);
    }
    function Pe() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LAST_PUSH_COMPLETE_TIMESTAMP);
    }
    function Ne(e) {
        return Me.apply(this, arguments);
    }
    function Me() {
        Me = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LAST_PUSH_COMPLETE_TIMESTAMP, e);
        });
        return Me.apply(this, arguments);
    }
    function we() {
        return Ae.apply(this, arguments);
    }
    function Ae() {
        Ae = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LAST_PUSH_COMPLETE_TIMESTAMP);
        });
        return Ae.apply(this, arguments);
    }
    function Fe() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_DISABLED);
    }
    function Oe(e) {
        return Be.apply(this, arguments);
    }
    function Be() {
        Be = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_PUSH_DISABLED, e);
        });
        return Be.apply(this, arguments);
    }
    function We() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_NOTIFICATION_L10N_CONTENT);
    }
    function qe(e) {
        return Ue.apply(this, arguments);
    }
    function Ue() {
        Ue = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_NOTIFICATION_L10N_CONTENT, e);
        });
        return Ue.apply(this, arguments);
    }
    function Ve() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_NOTIFICATION_ENGAGEMENT);
    }
    function He(e) {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_NOTIFICATION_ENGAGEMENT, e);
    }
    function Ge() {
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OFFLINE_NOTIFICATION_ENGAGEMENT);
    }
    function ze() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NOTIFICATION_ENGAGEMENT);
    }
    function je(e) {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NOTIFICATION_ENGAGEMENT, e);
    }
    function Ke(e) {
        return Qe.apply(this, arguments);
    }
    function Qe() {
        Qe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const u = yield ze();
            yield je({
                totalNotifRtcVoipAccept: (u?.totalNotifRtcVoipAccept ?? 0) + (e.totalNotifRtcVoipAccept ?? 0),
                totalNotifRtcVoipDecline: (u?.totalNotifRtcVoipDecline ?? 0) + (e.totalNotifRtcVoipDecline ?? 0),
                totalNotifShown: (u?.totalNotifShown ?? 0) + (e.totalNotifShown ?? 0),
                totalNotifTapToOpen: (u?.totalNotifTapToOpen ?? 0) + (e.totalNotifTapToOpen ?? 0)
            });
        });
        return Qe.apply(this, arguments);
    }
    function Xe() {
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.NOTIFICATION_ENGAGEMENT);
    }
    function Ye() {
        return Je.apply(this, arguments);
    }
    function Je() {
        Je = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove("WABrigadingState");
        });
        return Je.apply(this, arguments);
    }
    function Ze() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGOUT_REASON);
    }
    function et(e) {
        return tt.apply(this, arguments);
    }
    function tt() {
        tt = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LOGOUT_REASON, e);
        });
        return tt.apply(this, arguments);
    }
    function nt() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.LAST_PROFILE_PIC_THUMB_UPDATE_TS);
        if (typeof e === "number") {
            return e;
        }
        return null;
    }
    function rt(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.LAST_PROFILE_PIC_THUMB_UPDATE_TS, e);
    }
    function ot() {
        const e = [];
        const t = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.WA_WEB_WAM_BEACONING_SETTINGS);
        if (typeof t !== "string") {
            return e;
        }
        try {
            return JSON.parse(t) ?? e;
        } catch (t) {
            return e;
        }
    }
    function at(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.WA_WEB_WAM_BEACONING_SETTINGS, JSON.stringify(e));
    }
    function it() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_COOL_OFF);
        if (typeof e === "number") {
            return e;
        }
        return null;
    }
    function lt() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_DISCLOSURE_SHOWN_COUNT);
        if (typeof e === "number") {
            return e;
        }
        return 0;
    }
    function st(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_DISCLOSURE_SHOWN_COUNT, e);
    }
    function ut() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_OPT_OUT_DISCLOSURE_SHOWN_COUNT);
        if (typeof e === "number") {
            return e;
        }
        return 0;
    }
    function ct(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_OPT_OUT_DISCLOSURE_SHOWN_COUNT, e);
    }
    function dt() {
        return r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_V2_DISCLOSURE_SEEN) === true;
    }
    function mt() {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_V2_DISCLOSURE_SEEN, true);
    }
    function pt() {
        return !!r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.CTWA_MESSAGE_RECEIVED);
    }
    function _t(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.CTWA_MESSAGE_RECEIVED, e);
    }
    function ft(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").UserPrefs.GPCCompleted, e);
    }
    function gt() {
        return r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").UserPrefs.GPCCompleted) === true;
    }
    function ht(e) {
        r("WAWebUserPrefsStore").set(r("WAWebUserPrefsDebugKeys").DEBUG_FACEBOOK_GRAPHQL_ENDPOINT_OVERRIDE, e);
    }
    function yt() {
        const e = r("WAWebUserPrefsStore").get(r("WAWebUserPrefsDebugKeys").DEBUG_FACEBOOK_GRAPHQL_ENDPOINT_OVERRIDE);
        if (typeof e === "number") {
            return String(e);
        }
        if (typeof e === "string") {
            return e;
        }
        return null;
    }
    function Ct() {
        return r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").UserPrefs.DetectedOutcomeOnboardingStatus) === true;
    }
    function bt(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").UserPrefs.DetectedOutcomeOnboardingStatus, e);
    }
    function vt() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.CTWA_PREFERRED_AD_ACCOUNT_TYPE);
        if (typeof e === "string") {
            return e;
        }
        return null;
    }
    function St(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.CTWA_PREFERRED_AD_ACCOUNT_TYPE, e);
    }
    l.privacySettingsEventEmitter = p;
    l.setPushname = _;
    l.getPushname = f;
    l.getBrowserId = g;
    l.setBrowserId = h;
    l.getLastMobilePlatform = o("WAWebMobilePlatformPersistence").getLastMobilePlatform;
    l.setLastMobilePlatform = o("WAWebMobilePlatformPersistence").setLastMobilePlatform;
    l.setLastChatMuteDuration = y;
    l.getLastChatMuteDuration = C;
    l.setTheme = b;
    l.getTheme = v;
    l.setSystemThemeMode = S;
    l.getSystemThemeMode = R;
    l.setLastMediaEditorPaintColor = L;
    l.getLastMediaEditorPaintColor = E;
    l.setLastComposeBoxExpressionPanel = k;
    l.getLastComposeBoxExpressionPanel = I;
    l.setSeenGroupDesc = T;
    l.getSeenGroupDesc = D;
    l.applyPrivacySetting = x;
    l.getUserPrivacySettings = $;
    l.setUserPrivacySettings = P;
    l.getAutoDownloadPhotos = N;
    l.setAutoDownloadPhotos = M;
    l.getAutoDownloadAudio = w;
    l.setAutoDownloadAudio = A;
    l.getAutoDownloadVideos = F;
    l.setAutoDownloadVideos = O;
    l.getAutoDownloadDocuments = B;
    l.setAutoDownloadDocuments = W;
    l.getAutoDownloadMediaQuality = q;
    l.resolveAutoDownloadMediaQuality = U;
    l.setAutoDownloadMediaQuality = V;
    l.getGroupParticipantAssignedColor = H;
    l.setGroupParticipantAssignedColor = G;
    l.setMediaVolumeSettings = z;
    l.setMediaVolumeSetting = j;
    l.setMediaMutedSetting = K;
    l.getMediaVolumeSettings = Q;
    l.DEFAULT_PTT_PLAYBACK_RATE = X;
    l.getPttPlaybackRate = Y;
    l.setPttPlaybackRate = J;
    l.getLastStatusUsage = Z;
    l.setLastStatusUsage = ee;
    l.getLastNewsletterStatusBackfillTimestamp = te;
    l.setLastNewsletterStatusBackfillTimestamp = ne;
    l.markUserSentMessageToChat = ae;
    l.removeUserSentMessageToChat = ie;
    l.initDailyStatsStartTime = le;
    l.getDailyStatsStartTime = se;
    l.getPsKillSwitchToken = ue;
    l.setPsKillSwitchToken = ce;
    l.getStorageDismissState = de;
    l.setStorageDismissState = me;
    l.getStorageAlert = pe;
    l.setStorageAlert = _e;
    l.getPersistentExpiringId = fe;
    l.setPersistentExpiringId = ge;
    l.getWhatsAppWebExternalBetaJoinedIdb = he;
    l.setWhatsAppWebExternalBetaJoinedIdb = ye;
    l.getWhatsAppWebExternalBetaDirtyBitIdb = Ce;
    l.setWhatsAppWebExternalBetaDirtyBitIdb = be;
    l.getAppVersionBase = ve;
    l.setAppVersionBase = Se;
    l.getLoginCounter = Le;
    l.incrementLoginCounter = Ee;
    l.resetLoginCounter = Ie;
    l.getOfflinePushCount = De;
    l.setOfflinePushCount = xe;
    l.getLastPushCompleteTimestamp = Pe;
    l.setLastPushCompleteTimestamp = Ne;
    l.clearLastPushCompleteTimestamp = we;
    l.getOfflinePushDisabled = Fe;
    l.setOfflinePushDisabled = Oe;
    l.getOfflineNotificationContent = We;
    l.setOfflineNotificationContent = qe;
    l.getOfflineNotificationEngagement = Ve;
    l.setOfflineNotificationContentEngagement = He;
    l.clearOfflineNotificationContentEngagement = Ge;
    l.getNotificationEngagement = ze;
    l.setNotificationContentEngagement = je;
    l.addToNotificationEngagement = Ke;
    l.clearNotificationContentEngagement = Xe;
    l.clearBrigadingstate = Ye;
    l.getLogoutReason = Ze;
    l.setLogoutReason = et;
    l.getLastProfilePicThumbUpdate = nt;
    l.setLastProfilePicThumbUpdate = rt;
    l.getWamBeaconingSettings = ot;
    l.setWamBeaconingSettings = at;
    l.getCTWADataSharingCoolOffTimestamp = it;
    l.getCTWADataSharingDisclosureShownCount = lt;
    l.setCTWADataSharingDisclosureShownCount = st;
    l.getCTWADataSharingOptOutDisclosureShownCount = ut;
    l.setCTWADataSharingOptOutDisclosureShownCount = ct;
    l.getCTWADataSharingV2DisclosureSeen = dt;
    l.setCTWADataSharingV2DisclosureSeen = mt;
    l.getCTWAMessageReceived = pt;
    l.setCTWAMessageReceived = _t;
    l.setGPCcompleted = ft;
    l.getGPCCompleted = gt;
    l.setDebugFacebookGraphQLEndpointOverride = ht;
    l.getDebugFacebookGraphQLEndpointOverride = yt;
    l.getDetectedOutcomeOnboardingStatus = Ct;
    l.setDetectedOutcomeOnboardingStatus = bt;
    l.getLastUsedAdAccountType = vt;
    l.setLastUsedAdAccountType = St;
}, 98);