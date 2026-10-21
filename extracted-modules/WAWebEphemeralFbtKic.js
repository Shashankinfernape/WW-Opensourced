__d("WAWebEphemeralFbtKic", [
    "fbt",
    "WALogger",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebEphemeralCTAFbt",
    "WAWebEphemeralFbtKicHoursDaysHelpers",
    "WAWebEphemeralFbtKicTypes",
    "WAWebFrontendContactGetters",
    "WAWebMiscGatingUtils"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    function m(e) {
        return h(o("WAWebEphemeralFbtKicTypes").EphemeralStringType.OutOfSyncInfo, e);
    }
    function p() {
        return s._("Sent with a different timer");
    }
    function _(e = 0) {
        return h(o("WAWebEphemeralFbtKicTypes").EphemeralStringType.Explanation, e);
    }
    function f(e = 0, t) {
        return h(o("WAWebEphemeralFbtKicTypes").EphemeralStringType.ModeChangeByOthers, e, t);
    }
    function g(e = 0) {
        return h(o("WAWebEphemeralFbtKicTypes").EphemeralStringType.ModeChangeByYou, e);
    }
    function h(t, n = 0, r) {
        if (n < 0) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getEphemeralString ",
                " is given invalid duration ",
                ""
            ])), t, n).sendLogs("invalid-duration");
            return "";
        }
        if (n === 0) {
            return y(t, r);
        }
        if (n <= 60) {
            return C(t, n, r);
        }
        if (n < 3600) {
            const a = Math.floor(n / 60);
            return b(t, a, r);
        } else if (n <= 1440 * 60) {
            const i = Math.floor(n / 60 / 60);
            return o("WAWebEphemeralFbtKicHoursDaysHelpers").getEphemeralOnHoursString(t, i, r);
        }
        const l = Math.floor(n / 24 / 60 / 60);
        return o("WAWebEphemeralFbtKicHoursDaysHelpers").getEphemeralOnDaysString(t, l, r);
    }
    function y(e, t) {
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByOthers && t != null) {
            return s._("{person-name} turned off disappearing messages.", [
                s._param("person-name", t)
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByYou) {
            return s._("You turned off disappearing messages.");
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByUnknown) {
            return s._("Disappearing messages were turned off.");
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByOthersAsAdmin && t != null) {
            return s._("{person-name} turned off disappearing messages. {dm-action}", [
                s._param("person-name", t),
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt())
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByYouAsAdmin) {
            return s._("You turned off disappearing messages. {dm-action}", [
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt())
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByUnknownAsAdmin) {
            return s._("Disappearing messages were turned off. {dm-action}", [
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt())
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.Duration) {
            return s._("Off");
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.OutOfSyncInfo) {
            return s._("This message will not disappear from the chat. The sender may be on an old version of WhatsApp.");
        }
        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "getEphemeralOffString is given invalid type ",
            ""
        ])), e).sendLogs("invalid-ephemeral-string-type");
        return "";
    }
    function C(e, t, n) {
        const r = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled();
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByOthers && n != null) {
            return s._("_j{\"*\":\"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept.\",\"_1\":\"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 second after they're sent, except when kept.\"}", [
                s._plural(t, "number_of_seconds"),
                s._param("person-name", n)
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByYou) {
            return s._("_j{\"*\":\"You turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept.\",\"_1\":\"You turned on disappearing messages. New messages will disappear from this chat 1 second after they're sent, except when kept.\"}", [
                s._plural(t, "number_of_seconds")
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByUnknown) {
            return s._("_j{\"*\":\"Disappearing messages were turned on. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept.\",\"_1\":\"Disappearing messages were turned on. New messages will disappear from this chat 1 second after they're sent, except when kept.\"}", [
                s._plural(t, "number_of_seconds")
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByOthersAsAdmin && n != null) {
            return s._("_j{\"*\":\"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept. {dm-action}\",\"_1\":\"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 second after they're sent, except when kept. {dm-action}\"}", [
                s._plural(t, "number_of_seconds"),
                s._param("person-name", n),
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt())
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByYouAsAdmin) {
            return s._("_j{\"*\":\"You turned on disappearing messages. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept. {dm-action}\",\"_1\":\"You turned on disappearing messages. New messages will disappear from this chat 1 second after they're sent, except when kept. {dm-action}\"}", [
                s._plural(t, "number_of_seconds"),
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt())
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByUnknownAsAdmin) {
            return s._("_j{\"*\":\"Disappearing messages were turned on. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept. {dm-action}\",\"_1\":\"Disappearing messages were turned on. New messages will disappear from this chat 1 second after they're sent, except when kept. {dm-action}\"}", [
                s._plural(t, "number_of_seconds"),
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt())
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.Duration) {
            return s._("_j{\"*\":\"{number_of_seconds} seconds\",\"_1\":\"1 second\"}", [
                s._plural(t, "number_of_seconds")
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.OutOfSyncInfo) {
            return s._("_j{\"*\":\"There was a disappearing message timer conflict. This message will disappear after {number_of_seconds} seconds.\",\"_1\":\"There was a disappearing message timer conflict. This message will disappear after 1 second.\"}", [
                s._plural(t, "number_of_seconds")
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.Explanation) {
            return s._("_j{\"*\":\"New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept.\",\"_1\":\"New messages will disappear from this chat 1 second after they're sent, except when kept.\"}", [
                s._plural(t, "number_of_seconds")
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.ModeChangeByOthers) {
            if (r) {
                return s._("_j{\"*\":\"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept. {dm-action}\",\"_1\":\"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 second after they're sent, except when kept. {dm-action}\"}", [
                    s._plural(t, "number_of_seconds"),
                    s._param("person-name", n),
                    s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionSetOwnTimerFbt())
                ]);
            }
            return s._("_j{\"*\":\"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept. Click to learn more.\",\"_1\":\"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 second after they're sent, except when kept. Click to learn more.\"}", [
                s._plural(t, "number_of_seconds"),
                s._param("person-name", n)
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.ModeChangeByYou && r) {
            return s._("_j{\"*\":\"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_seconds} seconds after they're sent, except when kept. {dm-action}\",\"_1\":\"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 second after they're sent, except when kept. {dm-action}\"}", [
                s._plural(t, "number_of_seconds"),
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeDefaultTimerFbt())
            ]);
        }
        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "getEphemeralOnSecondsString is given type ",
            " and name ",
            ""
        ])), e, n).sendLogs("invalid-ephemeral-string-type");
        return "";
    }
    function b(e, t, n) {
        const r = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled();
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByOthers && n != null) {
            return s._("_j{\"*\":\"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept.\",\"_1\":\"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 minute after they're sent, except when kept.\"}", [
                s._plural(t, "number_of_minutes"),
                s._param("person-name", n)
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByYou) {
            return s._("_j{\"*\":\"You turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept.\",\"_1\":\"You turned on disappearing messages. New messages will disappear from this chat 1 minute after they're sent, except when kept.\"}", [
                s._plural(t, "number_of_minutes")
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByUnknown) {
            return s._("_j{\"*\":\"Disappearing messages were turned on. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept.\",\"_1\":\"Disappearing messages were turned on. New messages will disappear from this chat 1 minute after they're sent, except when kept.\"}", [
                s._plural(t, "number_of_minutes")
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByOthersAsAdmin && n != null) {
            return s._("_j{\"*\":\"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept. {dm-action}\",\"_1\":\"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 minute after they're sent, except when kept. {dm-action}\"}", [
                s._plural(t, "number_of_minutes"),
                s._param("person-name", n),
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt())
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByYouAsAdmin) {
            return s._("_j{\"*\":\"You turned on disappearing messages. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept. {dm-action}\",\"_1\":\"You turned on disappearing messages. New messages will disappear from this chat 1 minute after they're sent, except when kept. {dm-action}\"}", [
                s._plural(t, "number_of_minutes"),
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt())
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByUnknownAsAdmin) {
            return s._("_j{\"*\":\"Disappearing messages were turned on. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept. {dm-action}\",\"_1\":\"Disappearing messages were turned on. New messages will disappear from this chat 1 minute after they're sent, except when kept. {dm-action}\"}", [
                s._plural(t, "number_of_minutes"),
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt())
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.Duration) {
            return s._("_j{\"*\":\"{number_of_minutes} minutes\",\"_1\":\"1 minute\"}", [
                s._plural(t, "number_of_minutes")
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.OutOfSyncInfo) {
            return s._("_j{\"*\":\"There was a disappearing message timer conflict. This message will disappear after {number_of_minutes} minutes.\",\"_1\":\"There was a disappearing message timer conflict. This message will disappear after 1 minute.\"}", [
                s._plural(t, "number_of_minutes")
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.Explanation) {
            return s._("_j{\"*\":\"New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept.\",\"_1\":\"New messages will disappear from this chat 1 minute after they're sent, except when kept.\"}", [
                s._plural(t, "number_of_minutes")
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.ModeChangeByOthers) {
            if (r) {
                return s._("_j{\"*\":\"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept. {dm-action}\",\"_1\":\"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 minute after they're sent, except when kept. {dm-action}\"}", [
                    s._plural(t, "number_of_minutes"),
                    s._param("person-name", n),
                    s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionSetOwnTimerFbt())
                ]);
            }
            return s._("_j{\"*\":\"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept. Click to learn more.\",\"_1\":\"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 minute after they're sent, except when kept. Click to learn more.\"}", [
                s._plural(t, "number_of_minutes"),
                s._param("person-name", n)
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.ModeChangeByYou && r) {
            return s._("_j{\"*\":\"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_minutes} minutes after they're sent, except when kept. {dm-action}\",\"_1\":\"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 minute after they're sent, except when kept. {dm-action}\"}", [
                s._plural(t, "number_of_minutes"),
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeDefaultTimerFbt())
            ]);
        }
        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "getEphemeralOnMinutesString is given type ",
            " and name ",
            ""
        ])), e, n).sendLogs("invalid-ephemeral-string-type");
        return "";
    }
    function v(e) {
        const t = o("WAWebContactCollection").ContactCollection.assertGet(e);
        if (o("WAWebContactGetters").getIsMe(t)) {
            return s._("Kept by you");
        }
        const n = o("WAWebFrontendContactGetters").getFormattedName(t);
        return s._("Kept by {person-name}", [
            s._param("person-name", n)
        ]);
    }
    l.getDisappearingMessageOutOfSyncDifferentBody = m;
    l.getDisappearingMessageOutOfSyncDifferentTitle = p;
    l.getDisappearingMessageExplanationStringKic = _;
    l.getDisappearingModeOtherStringKic = f;
    l.getDisappearingModeYouStringKic = g;
    l.getKeptByString = v;
}, 226);