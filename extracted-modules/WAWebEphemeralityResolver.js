__d("WAWebEphemeralityResolver", [
    "WALogger",
    "WATimeUtils",
    "WAWebAfterReadUtils",
    "WAWebEphemeralityTypes"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(t) {
        if (!t) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getDisappearingModeSettingForUser: empty contact"
            ])));
            return null;
        }
        const { disappearingModeDuration: n, disappearingModeSettingTimestamp: r } = t;
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "getDisappearingModeSettingForUser ",
            " dur=",
            " ts=",
            ""
        ])), t.id.toString(), n, r).tags("DM", "DDM");
        if (n == null || n === 0) {
            return null;
        }
        return {
            duration: n,
            settingTimestamp: r ?? 0
        };
    }
    function m(e) {
        const t = d(e);
        if (t != null) {
            return t.duration;
        }
        return null;
    }
    function p(e) {
        return e ?? 0;
    }
    function _(e) {
        return e ?? o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat;
    }
    function f(e) {
        return e ?? o("WATimeUtils").unixTime();
    }
    function g(e) {
        return e ?? o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings;
    }
    function h(e, t) {
        const n = t === o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe;
        return e ?? n;
    }
    function y(e) {
        if (e == null || e.duration == null && e.settingTimestamp == null && e.initiator == null) {
            return null;
        }
        return {
            duration: p(e.duration),
            settingTimestamp: f(e.settingTimestamp),
            initiator: _(e.initiator),
            disappearingModeTrigger: g(e.disappearingModeTrigger),
            initiatedByMe: h(e.initiatedByMe, e.initiator),
            afterReadDuration: e.afterReadDuration
        };
    }
    function C(e, t) {
        return e?.duration === t?.duration && e?.settingTimestamp === t?.settingTimestamp && e?.initiator === t?.initiator;
    }
    function b(e) {
        if (o("WAWebAfterReadUtils").isAfterReadDuration(e.duration) && o("WAWebAfterReadUtils").isAfterReadEnabled()) {
            return babelHelpers.extends({}, e, {
                duration: o("WAWebAfterReadUtils").getAfterReadFallbackDuration(),
                afterReadDuration: e.duration
            });
        }
        return e;
    }
    function v(e, t) {
        const n = m(e);
        const r = m(t);
        if (n == null && r == null) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[DMResolve] DM setting for chat is null"
            ]))).tags("DM", "DDM");
            return null;
        }
        let a;
        if (n != null) {
            a = {
                duration: n,
                settingTimestamp: o("WATimeUtils").unixTime(),
                initiator: o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe,
                disappearingModeTrigger: o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings,
                initiatedByMe: true
            };
        }
        let i;
        if (r != null) {
            i = {
                duration: r,
                settingTimestamp: o("WATimeUtils").unixTime(),
                initiator: o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByOther,
                disappearingModeTrigger: o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings,
                initiatedByMe: false
            };
        }
        let l;
        if (a != null && i != null) {
            if (i.duration < a.duration) {
                l = i;
            } else {
                l = a;
            }
        } else {
            l = a ?? i;
        }
        if (l == null) {
            return null;
        }
        return b(l);
    }
    function S(e, t) {
        const n = y(e);
        if (n == null && t == null) {
            return null;
        }
        if (n != null && t == null) {
            return {
                duration: n.duration,
                settingTimestamp: n.settingTimestamp,
                initiator: n.initiator === o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe ? o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat : n.initiator,
                disappearingModeTrigger: o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings,
                initiatedByMe: n.initiator === o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe,
                afterReadDuration: n.afterReadDuration
            };
        }
        if (n == null && t != null) {
            return {
                duration: t.duration,
                settingTimestamp: f(t.settingTimestamp),
                initiator: _(t.initiator),
                disappearingModeTrigger: g(t.disappearingModeTrigger),
                initiatedByMe: t.initiatedByMe,
                afterReadDuration: t.afterReadDuration
            };
        }
        if (n != null && t != null) {
            if (n.settingTimestamp > (t.settingTimestamp ?? 0)) {
                return babelHelpers.extends({}, n);
            }
            if (n.settingTimestamp < (t.settingTimestamp ?? 0)) {
                return {
                    duration: t.duration,
                    settingTimestamp: f(t.settingTimestamp),
                    initiator: _(t.initiator),
                    disappearingModeTrigger: g(t.disappearingModeTrigger),
                    initiatedByMe: t.initiatedByMe,
                    afterReadDuration: t.afterReadDuration
                };
            }
            return babelHelpers.extends({}, n, {
                initiator: t.initiator === o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat ? o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat : n.initiator
            });
        }
    }
    function R(e, t) {
        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "[DMResolve] resolving new incoming chat DM settings"
        ])));
        const n = y(e);
        const r = p(t);
        if (n == null && r === 0) {
            return null;
        }
        if (n != null && r === 0) {
            return {
                duration: n.duration,
                settingTimestamp: n.settingTimestamp,
                initiator: n.initiator === o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe ? o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat : n.initiator,
                disappearingModeTrigger: n.disappearingModeTrigger,
                initiatedByMe: n.initiatedByMe,
                afterReadDuration: n.afterReadDuration
            };
        }
        if (n == null && r > 0) {
            return b({
                duration: r,
                settingTimestamp: o("WATimeUtils").unixTime(),
                initiator: o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe,
                disappearingModeTrigger: o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings,
                initiatedByMe: true
            });
        }
        if (n != null && r > 0) {
            if (n.initiator === o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat || n.duration > 0 && n.duration < r) {
                let a = n.initiator;
                let i = n.initiatedByMe;
                if (a === o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe) {
                    a = o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat;
                    i = true;
                }
                return {
                    initiator: a,
                    settingTimestamp: n.settingTimestamp,
                    duration: n.duration,
                    disappearingModeTrigger: n.disappearingModeTrigger,
                    initiatedByMe: i,
                    afterReadDuration: n.afterReadDuration
                };
            }
            if (r < n.duration) {
                return b({
                    duration: r,
                    settingTimestamp: o("WATimeUtils").unixTime(),
                    initiator: o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe,
                    disappearingModeTrigger: o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings,
                    initiatedByMe: true
                });
            }
            return babelHelpers.extends({}, n);
        }
    }
    l.getDisappearingModeSettingForUser = d;
    l.getEphemeralDurationForUser = m;
    l.resolveEphermalityDuration = p;
    l.resolveDisappearingModeInitiator = _;
    l.resolveSettingTimestamp = f;
    l.resolveDisappearingModeTrigger = g;
    l.resolveDisappearingModeInitiatedByMe = h;
    l.compareEphemeralityFields = C;
    l.resolveNewChatDMSettings = v;
    l.resolveExistingChatDMSettings = S;
    l.resolveNewIncomingChatDMSettings = R;
}, 98);