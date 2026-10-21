__d("WAWebFormatEphemeralSetting", [
    "fbt",
    "WALogger",
    "WAWebAfterReadUtils",
    "WAWebChatEphemerality",
    "WAWebContactCollection",
    "WAWebEphemeralConstants",
    "WAWebEphemeralFbtKic",
    "WAWebEphemeralityTypes",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    function c(e) {
        let t;
        const n = b(e);
        const { initiatingUser, newDuration } = n;
        const l = o("WAWebUserPrefsMeUser").isMeAccount(r("nullthrows")(initiatingUser));
        if (o("WAWebAfterReadUtils").isAfterReadDuration(newDuration) && o("WAWebAfterReadUtils").isAfterReadEnabled()) {
            let s = null;
            if (!l) {
                const u = o("WAWebContactCollection").ContactCollection.gadd(r("nullthrows")(initiatingUser));
                s = o("WAWebFrontendContactGetters").getFormattedName(u);
            }
            return d({
                initiatorIsMe: l,
                initiatorUsername: s,
                newDuration
            });
        }
        if (l) {
            t = o("WAWebEphemeralFbtKic").getDisappearingModeYouStringKic(newDuration);
        } else {
            const c = o("WAWebContactCollection").ContactCollection.gadd(r("nullthrows")(initiatingUser));
            t = o("WAWebEphemeralFbtKic").getDisappearingModeOtherStringKic(newDuration, o("WAWebFrontendContactGetters").getFormattedName(c));
        }
        return t;
    }
    function d({ initiatorIsMe, initiatorUsername, newDuration }) {
        const o = m({
            initiatorIsMe,
            initiatorUsername,
            newDuration
        });
        const { ctaText, text } = o;
        if (ctaText == null) {
            return text;
        }
        return s._("{ddm-body} {ddm-action}", [
            s._param("ddm-body", text),
            s._param("ddm-action", ctaText)
        ]);
    }
    function m({ initiatorIsMe, initiatorUsername, newDuration }) {
        const o = p({
            initiatorIsMe,
            initiatorUsername
        });
        const a = L(newDuration);
        const i = _({
            initiatorIsMe
        });
        return {
            text: s._("{ddm-event} {ddm-explanation}", [
                s._param("ddm-event", o),
                s._param("ddm-explanation", a)
            ]),
            ctaText: i
        };
    }
    function p({ initiatorIsMe, initiatorUsername }) {
        if (initiatorIsMe) {
            return s._("You use a default timer for disappearing messages in new chats.");
        }
        if (initiatorUsername != null) {
            return s._("{name} uses a default timer for disappearing messages in new chats.", [
                s._param("name", initiatorUsername)
            ]);
        }
        return s._("A default timer for disappearing messages is used in new chats.");
    }
    function _({ initiatorIsMe }) {
        if (o("WAWebAfterReadUtils").isAfterReadEnabled()) {
            if (initiatorIsMe) {
                return s._("Change timer.");
            }
            return s._("Set your own default timer.");
        }
        if (initiatorIsMe) {
            return s._("Click to change your default timer.");
        }
        return s._("Click to set your own default timer.");
    }
    function f(e) {
        return k(o("WAWebStateUtils").unproxy(e.unsafe()));
    }
    function g(e) {
        const t = b(e);
        const { initiatingUser, newDuration } = t;
        const i = o("WAWebUserPrefsMeUser").isMeAccount(r("nullthrows")(initiatingUser));
        let l = null;
        if (!i) {
            const u = o("WAWebContactCollection").ContactCollection.gadd(r("nullthrows")(initiatingUser));
            l = o("WAWebFrontendContactGetters").getFormattedName(u);
        }
        if (o("WAWebAfterReadUtils").isAfterReadDuration(newDuration) && o("WAWebAfterReadUtils").isAfterReadEnabled()) {
            return m({
                initiatorIsMe: i,
                initiatorUsername: l,
                newDuration
            });
        }
        const c = p({
            initiatorIsMe: i,
            initiatorUsername: l
        });
        const d = o("WAWebEphemeralFbtKic").getDisappearingMessageExplanationStringKic(newDuration);
        const f = _({
            initiatorIsMe: i
        });
        return {
            text: s._("{ddm-event} {ddm-explanation}", [
                s._param("ddm-event", c),
                s._param("ddm-explanation", d)
            ]),
            ctaText: f
        };
    }
    function h(e) {
        return I(o("WAWebStateUtils").unproxy(e.unsafe()));
    }
    function y(e) {
        if (o("WAWebFrontendMsgGetters").getChat(e) != null) {
            const t = o("WAWebFrontendMsgGetters").getChat(e).msgs;
            const n = t.indexOf(e);
            for(let r = n - 1; r >= 0; r--){
                const a = t.at(r);
                if (a != null && a.type !== "debug" && (a.type !== "gp2" || a.subtype === "ephemeral")) {
                    return a;
                }
            }
        }
    }
    function C(e) {
        const t = y(e);
        return t != null && (t.ephemeralDuration != null && t.ephemeralDuration > 0 || (t.subtype === "ephemeral" || t.subtype === "disappearing_mode") && t.templateParams[0] != null && t.templateParams[0] !== "0");
    }
    function b(e) {
        let t;
        let n;
        if (e.templateParams.length) {
            n = parseInt(e.templateParams[0], 10);
            if (e.templateParams[1] instanceof r("WAWebWid")) {
                t = e.templateParams[1];
            }
        } else {
            t = e.ephemeralSettingUser;
            n = e.ephemeralDuration;
        }
        if (e.afterReadDuration != null && e.afterReadDuration > 0) {
            n = e.afterReadDuration;
        }
        if (n == null) {
            throw r("err")("Duration cannot be null for DM notification");
        }
        return {
            newDuration: n ?? 0,
            disappearingModeTrigger: null,
            initiatingUser: t
        };
    }
    function v(e) {
        let t;
        if (e.ephemeralSettingUser !== undefined) {
            t = e.ephemeralSettingUser;
        } else {
            t = e.from;
        }
        let e_ephemeralDuration = e.ephemeralDuration;
        if (e.afterReadDuration != null && e.afterReadDuration > 0) {
            e_ephemeralDuration = e.afterReadDuration;
        }
        return {
            newDuration: e_ephemeralDuration ?? 0,
            disappearingModeTrigger: e.disappearingModeTrigger,
            initiatingUser: t
        };
    }
    function S({ initiatorIsMe, initiatorUsername, state }) {
        if (initiatorIsMe) {
            switch(state){
                case "update":
                    return s._("You updated the message timer.");
                case "on":
                    return s._("You turned on disappearing messages.");
                default:
                    return s._("You turned off disappearing messages.");
            }
        }
        if (initiatorUsername != null) {
            switch(state){
                case "update":
                    return s._("{name} updated the message timer.", [
                        s._param("name", initiatorUsername)
                    ]);
                case "on":
                    return s._("{name} turned on disappearing messages.", [
                        s._param("name", initiatorUsername)
                    ]);
                default:
                    return s._("{name} turned off disappearing messages.", [
                        s._param("name", initiatorUsername)
                    ]);
            }
        }
        if (state === "update") {
            return s._("The message timer was updated.");
        }
        if (state === "on") {
            return s._("Disappearing messages were turned on.");
        }
        return s._("Disappearing messages were turned off.");
    }
    function R(t) {
        const n = o("WAWebEphemeralConstants").getDurationForString(t);
        const { duration, unit } = n;
        switch(unit){
            case o("WAWebEphemeralConstants").DurationUnit.Seconds:
                return s._("_j{\"*\":\"{duration} seconds\",\"_1\":\"1 second\"}", [
                    s._plural(duration, "duration")
                ]);
            case o("WAWebEphemeralConstants").DurationUnit.Minutes:
                return s._("_j{\"*\":\"{duration} minutes\",\"_1\":\"1 minute\"}", [
                    s._plural(duration, "duration")
                ]);
            case o("WAWebEphemeralConstants").DurationUnit.Hours:
                return s._("_j{\"*\":\"{duration} hours\",\"_1\":\"1 hour\"}", [
                    s._plural(duration, "duration")
                ]);
            case o("WAWebEphemeralConstants").DurationUnit.Days:
                return s._("_j{\"*\":\"{duration} days\",\"_1\":\"1 day\"}", [
                    s._plural(duration, "duration")
                ]);
            case o("WAWebEphemeralConstants").DurationUnit.Weeks:
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[getDisappearingMessageDurationString] weeks unsupported"
                ])));
                return s._("_j{\"*\":\"{duration} weeks\",\"_1\":\"1 week\"}", [
                    s._plural(duration, "duration")
                ]);
        }
    }
    function L(newDuration) {
        const t = R(newDuration);
        return s._("New messages will disappear from this chat {dm-duration} after they're read, except when kept.", [
            s._param("dm-duration", t)
        ]);
    }
    function E(newDuration) {
        const t = R(newDuration);
        if (o("WAWebAfterReadUtils").isAfterReadDuration(newDuration) && o("WAWebAfterReadUtils").isAfterReadEnabled()) {
            return s._("New messages in this chat will disappear {dm-duration} after they're read, except when kept.", [
                s._param("dm-duration", t)
            ]);
        }
        return s._("New messages will disappear from this chat {dm-duration} after they're sent, except when kept.", [
            s._param("dm-duration", t)
        ]);
    }
    function k(e) {
        const t = I(e);
        const { ctaText, text } = t;
        if (ctaText == null) {
            return text;
        }
        return s._("{dm-sm-body} {dm-sm-action}", [
            s._param("dm-sm-body", text),
            s._param("dm-sm-action", ctaText)
        ]);
    }
    function I(e) {
        let n = null;
        switch(e.type){
            case "gp2":
            case "notification_template":
                n = b(e);
                break;
            case "protocol":
                n = v(e);
                break;
            default:
                break;
        }
        if (n == null) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Cannot parse msg to build DM system message"
            ]))).tags("DM", "DDM");
            throw r("err")("Cannot parse msg to build DM system message");
        }
        let a = null;
        const i = o("WAWebUserPrefsMeUser").isMePrimary(n.initiatingUser);
        if (n.disappearingModeTrigger === o("WAWebEphemeralityTypes").DisappearingModeTrigger.BizSupportFbHosting) {
            return {
                text: T(i),
                ctaText: null
            };
        }
        let l = null;
        if (n.newDuration) {
            if (C(e)) {
                l = "update";
            } else {
                l = "on";
            }
        } else {
            l = "off";
        }
        if (n.initiatingUser != null && !i) {
            const s = o("WAWebContactCollection").ContactCollection.gadd(n.initiatingUser);
            a = o("WAWebFrontendContactGetters").getIsMyContact(s) ? o("WAWebFrontendContactGetters").getFormattedName(s) : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(s);
        }
        const c = o("WAWebFrontendMsgGetters").getMaybeChat(e);
        const d = c && o("WAWebChatEphemerality").shouldShowEphemeralSetting(c) && (r("WAWebWid").isUser(c.id) || c.groupMetadata?.canSetEphemeralSetting());
        return D({
            newDuration: n.newDuration,
            state: l,
            initiatorUsername: a,
            initiatorIsMe: i,
            userCanChange: d === true
        });
    }
    function T(e) {
        const t = s._("Disappearing messages are no longer supported with this business.");
        const n = s._("Disappearing messages are no longer supported with your business.");
        if (e) {
            return n;
        }
        return t;
    }
    function D({ initiatorIsMe, initiatorUsername, newDuration, state, userCanChange }) {
        const l = S({
            initiatorUsername,
            initiatorIsMe,
            state
        });
        const u = o("WAWebAfterReadUtils").isAfterReadEnabled() ? s._("Change timer.") : s._("Click to change.");
        if (!newDuration) {
            if (userCanChange !== true) {
                return {
                    text: l,
                    ctaText: null
                };
            }
            return {
                text: l,
                ctaText: u
            };
        }
        const c = E(newDuration);
        if (userCanChange !== true) {
            return {
                text: s._("{dm-sm-event} {dm-sm-explanation}", [
                    s._param("dm-sm-event", l),
                    s._param("dm-sm-explanation", c)
                ]),
                ctaText: null
            };
        }
        return {
            text: s._("{dm-sm-event} {dm-sm-explanation}", [
                s._param("dm-sm-event", l),
                s._param("dm-sm-explanation", c)
            ]),
            ctaText: u
        };
    }
    function x(e) {
        const t = D(e);
        const { ctaText, text } = t;
        if (ctaText == null) {
            return text;
        }
        return s._("{dm-sm-body} {dm-sm-action}", [
            s._param("dm-sm-body", text),
            s._param("dm-sm-action", ctaText)
        ]);
    }
    function $() {
        return s._("Disappearing messages are not supported in this chat. Your messages will not disappear.");
    }
    l.getDefaultDisappearingModeSystemMessageText = c;
    l.buildDefaultDisappearingModeARSystemMessage = d;
    l.getDisappearingModeUpdateSystemMessageText = f;
    l.getDefaultDisappearingModeParts = g;
    l.getDisappearingModeUpdateParts = h;
    l.getDisappearingMessageDurationString = R;
    l.formatEphemeralSetting = k;
    l.buildEphemeralSystemMessage = x;
    l.getDMUnsupportedSystemMessageText = $;
}, 226);