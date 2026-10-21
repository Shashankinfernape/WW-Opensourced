__d("WAWebNewsletterChatsMigrationBanners", [
    "$InternalEnum",
    "WATimeUtils",
    "WAWebAlarm",
    "WAWebEventEmitter",
    "WAWebNewsletterChatListUtils",
    "WAWebNewsletterChatsMigrationCapability",
    "WAWebNewsletterCollection",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "NewsletterChatsMigrationCountdownBannerDismissed",
        "NewsletterChatsMigrationDay0Banner",
        "NewsletterChatsMigrationRollbackBanner"
    ]);
    const s = 3;
    const u = s * o("WATimeUtils").DAY_MILLISECONDS;
    const e_NewsletterChatsMigrationCountdownBannerDismissed = e.NewsletterChatsMigrationCountdownBannerDismissed;
    const d = {
        day0: e.NewsletterChatsMigrationDay0Banner,
        rollback: e.NewsletterChatsMigrationRollbackBanner
    };
    const m = "add remove reset";
    const p = "add remove reset change:membershipType";
    const _ = {
        dismissed: false,
        firstImpressionAtMs: null
    };
    const f = new (r("WAWebEventEmitter"));
    function g(e, t) {
        const n = o("WAWebNewsletterChatsMigrationCapability").savePrimaryNewsletterChatsMigration(e);
        T(n, e);
        D(n, e, t);
        if (n.rolledBack === false && e.rolledBack === true && e.effectiveMigrated !== true) {
            $("rollback", _);
        } else if (e.rolledBack === false || e.effectiveMigrated === true) {
            x("rollback");
        }
    }
    function h(nowMs = o("WATimeUtils").unixTimeMs()) {
        if (!o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
            return {
                channelsTabCountdownDays: null,
                chatList: null,
                nextChangeAtMs: null
            };
        }
        const countdownRemainingMs = v(nowMs);
        const day0 = E("day0", nowMs);
        const rollback = E("rollback", nowMs);
        return {
            channelsTabCountdownDays: countdownRemainingMs != null && countdownRemainingMs > o("WATimeUtils").DAY_MILLISECONDS ? Math.ceil(countdownRemainingMs / o("WATimeUtils").DAY_MILLISECONDS) : null,
            chatList: S({
                countdownRemainingMs,
                day0,
                rollback
            }),
            nextChangeAtMs: L({
                countdownRemainingMs,
                day0,
                nowMs,
                rollback
            })
        };
    }
    function y(e, firstImpressionAtMs = o("WATimeUtils").unixTimeMs()) {
        if (e !== "countdown_last_day") {
            const n = I(e);
            if (!(n == null || n.firstImpressionAtMs != null)) {
                $(e, babelHelpers.extends({}, n, {
                    firstImpressionAtMs
                }));
            }
        }
    }
    function C(e) {
        if (e === "day0" || e === "rollback") {
            const t = I(e);
            if (t != null) {
                $(e, babelHelpers.extends({}, t, {
                    dismissed: true
                }));
            }
            return;
        }
        r("WAWebUserPrefsStore").setUser(e_NewsletterChatsMigrationCountdownBannerDismissed, true, {
            shouldWriteToIdb: true
        });
        f.trigger("change");
    }
    function b(e) {
        let t = null;
        const n = ()=>{
            r("WAWebAlarm").clearTimeout(t);
            t = null;
            const e = h();
            const e_nextChangeAtMs = e.nextChangeAtMs;
            if (e_nextChangeAtMs != null) {
                t = r("WAWebAlarm").setGlobalTimeout(a, e_nextChangeAtMs);
            }
        };
        var a = function() {
            n();
            e();
        };
        o("WAWebNewsletterChatsMigrationCapability").newsletterChatsMigrationEmitter.on("change", a);
        f.on("change", a);
        r("WAWebNewsletterCollection").on(m, e);
        r("WAWebNewsletterMetadataCollection").on(p, e);
        n();
        return function() {
            o("WAWebNewsletterChatsMigrationCapability").newsletterChatsMigrationEmitter.off("change", a);
            f.off("change", a);
            r("WAWebNewsletterCollection").off(m, e);
            r("WAWebNewsletterMetadataCollection").off(p, e);
            r("WAWebAlarm").clearTimeout(t);
        };
    }
    function v(nowMs) {
        const t = o("WAWebNewsletterChatsMigrationCapability").getPrimaryNewsletterChatsMigration();
        const { countdownEndsAt, effectiveMigrated } = t;
        if (countdownEndsAt == null || effectiveMigrated === true || r("WAWebUserPrefsStore").getUser(e_NewsletterChatsMigrationCountdownBannerDismissed) === true) {
            return null;
        }
        const i = o("WATimeUtils").castUnixTimeToMillisTime(o("WATimeUtils").castToUnixTime(countdownEndsAt)) - nowMs;
        if (i > 0) {
            return i;
        }
        return null;
    }
    function S({ countdownRemainingMs, day0, rollback }) {
        const a = R(day0, rollback);
        return a ?? (countdownRemainingMs != null && countdownRemainingMs <= o("WATimeUtils").DAY_MILLISECONDS ? "countdown_last_day" : null);
    }
    function R(e, rollback) {
        if (rollback == null && e == null || !r("WAWebNewsletterCollection").some(o("WAWebNewsletterChatListUtils").isUnlockedSubscribedOrOwnedChannel)) {
            return null;
        }
        if (rollback != null) {
            return "rollback";
        }
        if (o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()) {
            return "day0";
        }
        return null;
    }
    function L({ countdownRemainingMs, day0, nowMs, rollback }) {
        const i = [];
        for (const l of [
            day0,
            rollback
        ]){
            const s = k(l);
            if (s != null) {
                i.push(s);
            }
        }
        if (countdownRemainingMs != null) {
            const u = Math.ceil(countdownRemainingMs / o("WATimeUtils").DAY_MILLISECONDS) - 1;
            i.push(nowMs + countdownRemainingMs - u * o("WATimeUtils").DAY_MILLISECONDS);
        }
        if (i.length > 0) {
            return Math.min(...i);
        }
        return null;
    }
    function E(e, nowMs) {
        const n = I(e);
        if (n == null || n.dismissed) {
            return null;
        }
        const r = k(n);
        if (r == null || nowMs < r) {
            return n;
        }
        return null;
    }
    function k(e) {
        const t = e?.firstImpressionAtMs;
        if (t != null) {
            return t + u;
        }
        return null;
    }
    function I(e) {
        const t = r("WAWebUserPrefsStore").getUser(d[e]);
        if (t == null || typeof t !== "object") {
            return null;
        }
        const { dismissed, firstImpressionAtMs } = t;
        return {
            dismissed: dismissed === true,
            firstImpressionAtMs: typeof firstImpressionAtMs === "number" ? firstImpressionAtMs : null
        };
    }
    function T(e, t) {
        if (!(t.countdownEndsAt == null || t.countdownEndsAt === e.countdownEndsAt || r("WAWebUserPrefsStore").getUser(e_NewsletterChatsMigrationCountdownBannerDismissed) !== true)) {
            r("WAWebUserPrefsStore").setUser(e_NewsletterChatsMigrationCountdownBannerDismissed, null, {
                shouldWriteToIdb: true
            });
            f.trigger("change");
        }
    }
    function D(e, t, n) {
        if (e.effectiveMigrated === false && t.effectiveMigrated === true && n) {
            $("day0", _);
        } else if (t.effectiveMigrated === false) {
            x("day0");
        }
    }
    function x(e) {
        if (I(e) != null) {
            $(e, null);
        }
    }
    function $(e, t) {
        r("WAWebUserPrefsStore").setUser(d[e], t, {
            shouldWriteToIdb: true
        });
        f.trigger("change");
    }
    l.NewsletterChatsMigrationBannerUserPrefs = e;
    l.PENDING_BANNER_LIFETIME_MS = u;
    l.applyPrimaryNewsletterChatsMigration = g;
    l.getNewsletterChatsMigrationBanners = h;
    l.recordNewsletterChatsMigrationBannerImpression = y;
    l.dismissNewsletterChatsMigrationBanner = C;
    l.subscribeToNewsletterChatsMigrationBanners = b;
}, 98);