__d("WAWebChatEphemerality", [
    "WALogger",
    "WAWebAfterReadUtils",
    "WAWebChatGetters",
    "WAWebEphemeralityFrontendUtils",
    "WAWebEphemeralityTypes",
    "WAWebStateUtils",
    "WAWebUserPrefsMultiDevice"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t) {
        const r = o("WAWebStateUtils").unproxy(t);
        const a = o("WAWebChatGetters").getIsGroup(r) ? r.groupMetadata?.ephemeralDuration : r.ephemeralDuration;
        if (a == null || a === 0) {
            return null;
        }
        if (a < 0) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[ephemeral] invalid duration of ",
                " for chat ",
                ""
            ])), a, r.id.toLogString());
            return null;
        }
        return a;
    }
    function c(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        let n;
        const r = b(t);
        if (r == null) {
            n = o("WAWebChatGetters").getIsGroup(t) ? t.groupMetadata?.ephemeralDuration : t.ephemeralDuration;
        } else {
            n = r;
        }
        if (n == null || n === 0) {
            return null;
        }
        if (n < 0) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[ephemeral] invalid duration of ",
                " for chat ",
                ""
            ])), n, t.id.toLogString());
            return null;
        }
        return n;
    }
    function d(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        if (o("WAWebChatGetters").getIsGroup(t) || t.ephemeralSettingTimestamp === 0) {
            return null;
        }
        return t.ephemeralSettingTimestamp;
    }
    function m(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        const n = u(t);
        return n != null && n !== 0;
    }
    function p(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        if (o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage() && !o("WAWebChatGetters").getIsGroup(t) || o("WAWebChatGetters").getIsPSA(t) || t.id.isBot() || t.id.isAiHub()) {
            return false;
        }
        if (o("WAWebChatGetters").getIsGroup(t)) {
            let r;
            const a = t.groupMetadata?.participants.getSuperAdmin();
            if (a != null && a.contact.isEnterprise || !((r = t.groupMetadata) != null && r.canSetEphemeralSetting()) && !m(t)) {
                return false;
            }
        }
        return !(o("WAWebChatGetters").getIsBroadcast(t) || t.contact.isEnterprise || o("WAWebEphemeralityFrontendUtils").isEphemeralityDisabledInUIForContact(t.contact));
    }
    function _(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        return t.disappearingModeInitiator ?? (m(t) ? o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat : null);
    }
    function f(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        if (o("WAWebChatGetters").getIsGroup(t)) {
            return h(t);
        }
        return t.disappearingModeTrigger ?? (m(t) ? o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings : null);
    }
    function g(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        if (o("WAWebChatGetters").getIsGroup(t)) {
            return y(t);
        }
        return t.disappearingModeInitiatedByMe ?? null;
    }
    function h(e) {
        const n = o("WAWebStateUtils").unproxy(e);
        const r = n.groupMetadata?.disappearingModeTrigger;
        return r ?? null;
    }
    function y(e) {
        const n = o("WAWebStateUtils").unproxy(e);
        const r = n.groupMetadata?.disappearingModeInitiatedByMe;
        return r ?? null;
    }
    function C(e) {
        const n = o("WAWebStateUtils").unproxy(e);
        if (n.ephemeralDuration == null && n.ephemeralSettingTimestamp == null && n.disappearingModeInitiator == null) {
            return null;
        }
        return {
            duration: n.ephemeralDuration ?? 0,
            settingTimestamp: n.ephemeralSettingTimestamp,
            initiator: n.disappearingModeInitiator,
            disappearingModeTrigger: n.disappearingModeTrigger,
            initiatedByMe: n.disappearingModeInitiatedByMe,
            afterReadDuration: n.afterReadDuration
        };
    }
    function b(e) {
        if (!o("WAWebAfterReadUtils").isAfterReadEnabled()) {
            return null;
        }
        const t = o("WAWebStateUtils").unproxy(e);
        let n;
        if (o("WAWebChatGetters").getIsGroup(t)) {
            n = t.groupMetadata?.afterReadDuration;
        } else {
            n = t.afterReadDuration;
        }
        if (n == null || n <= 0) {
            return null;
        }
        return n;
    }
    function v(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        const afterReadDuration = S(t);
        return {
            ephemeralDuration: afterReadDuration != null ? o("WAWebAfterReadUtils").getAfterReadFallbackDuration() : u(t),
            afterReadDuration
        };
    }
    function S(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        const n = b(t);
        if (n != null) {
            return n;
        }
        const r = u(t);
        if (r == null) {
            return null;
        }
        if (o("WAWebAfterReadUtils").isAfterReadDuration(r) && o("WAWebAfterReadUtils").isAfterReadEnabled()) {
            return r;
        }
        return null;
    }
    l.getEphemeralSetting = u;
    l.calculateEphemeralDurationForChat = c;
    l.getEphemeralSettingTimestamp = d;
    l.isEphemeralSettingOn = m;
    l.shouldShowEphemeralSetting = p;
    l.getDisappearingModeInitiator = _;
    l.getDisappearingModeTrigger = f;
    l.getDisappearingModeInitiatedByMe = g;
    l.getDisappearingModeTriggerGroups = h;
    l.getDisappearingModeInitiatedByMeGroups = y;
    l.getChatEphemeralityFields = C;
    l.getAfterReadDurationForChat = b;
    l.getAfterReadEnvelopeForChat = v;
    l.getInferredAfterReadDurationForChat = S;
}, 98);