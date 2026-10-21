__d("WAWebEphemeralFbtKicHoursDaysHelpers", [
    "fbt",
    "WALogger",
    "WAWebEphemeralCTAFbt",
    "WAWebEphemeralFbtKicTypes",
    "WAWebMiscGatingUtils"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    function c(t, n, r) {
        const a = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled();
        if (t === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByOthers && r != null) {
            return s._("_j{\"*\":\"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept.\",\"_1\":\"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 hour after they're sent, except when kept.\"}", [
                s._plural(n, "number_of_hours"),
                s._param("person-name", r)
            ]);
        }
        if (t === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByYou) {
            return s._("_j{\"*\":\"You turned on disappearing messages. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept.\",\"_1\":\"You turned on disappearing messages. New messages will disappear from this chat 1 hour after they're sent, except when kept.\"}", [
                s._plural(n, "number_of_hours")
            ]);
        }
        if (t === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByUnknown) {
            return s._("_j{\"*\":\"Disappearing messages were turned on. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept.\",\"_1\":\"Disappearing messages were turned on. New messages will disappear from this chat 1 hour after they're sent, except when kept.\"}", [
                s._plural(n, "number_of_hours")
            ]);
        }
        if (t === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByOthersAsAdmin && r != null) {
            return s._("_j{\"*\":\"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept. {dm-action}\",\"_1\":\"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 hour after they're sent, except when kept. {dm-action}\"}", [
                s._plural(n, "number_of_hours"),
                s._param("person-name", r),
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt())
            ]);
        }
        if (t === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByYouAsAdmin) {
            return s._("_j{\"*\":\"You turned on disappearing messages. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept. {dm-action}\",\"_1\":\"You turned on disappearing messages. New messages will disappear from this chat 1 hour after they're sent, except when kept. {dm-action}\"}", [
                s._plural(n, "number_of_hours"),
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt())
            ]);
        }
        if (t === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByUnknownAsAdmin) {
            return s._("_j{\"*\":\"Disappearing messages were turned on. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept. {dm-action}\",\"_1\":\"Disappearing messages were turned on. New messages will disappear from this chat 1 hour after they're sent, except when kept. {dm-action}\"}", [
                s._plural(n, "number_of_hours"),
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt())
            ]);
        }
        if (t === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.Duration) {
            return s._("_j{\"*\":\"{number_of_hours} hours\",\"_1\":\"1 hour\"}", [
                s._plural(n, "number_of_hours")
            ]);
        }
        if (t === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.OutOfSyncInfo) {
            return s._("_j{\"*\":\"There was a disappearing message timer conflict. This message will disappear after {number_of_hours} hours.\",\"_1\":\"There was a disappearing message timer conflict. This message will disappear after 1 hour.\"}", [
                s._plural(n, "number_of_hours")
            ]);
        }
        if (t === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.Explanation) {
            return s._("_j{\"*\":\"New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept.\",\"_1\":\"New messages will disappear from this chat 1 hour after they're sent, except when kept.\"}", [
                s._plural(n, "number_of_hours")
            ]);
        }
        if (t === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.ModeChangeByOthers) {
            if (a) {
                return s._("_j{\"*\":\"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept. {dm-action}\",\"_1\":\"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 hour after they're sent, except when kept. {dm-action}\"}", [
                    s._plural(n, "number_of_hours"),
                    s._param("person-name", r),
                    s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionSetOwnTimerFbt())
                ]);
            }
            return s._("_j{\"*\":\"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept. Click to learn more.\",\"_1\":\"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 hour after they're sent, except when kept. Click to learn more.\"}", [
                s._plural(n, "number_of_hours"),
                s._param("person-name", r)
            ]);
        }
        if (t === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.ModeChangeByYou && a) {
            return s._("_j{\"*\":\"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_hours} hours after they're sent, except when kept. {dm-action}\",\"_1\":\"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 hour after they're sent, except when kept. {dm-action}\"}", [
                s._plural(n, "number_of_hours"),
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeDefaultTimerFbt())
            ]);
        }
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "getEphemeralOnHoursString is given type ",
            " and name ",
            ""
        ])), t, r).sendLogs("invalid-ephemeral-string-type");
        return "";
    }
    function d(e, t, n) {
        const r = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled();
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByOthers && n != null) {
            return s._("_j{\"*\":\"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept.\",\"_1\":\"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 day after they're sent, except when kept.\"}", [
                s._plural(t, "number_of_days"),
                s._param("person-name", n)
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByYou) {
            return s._("_j{\"*\":\"You turned on disappearing messages. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept.\",\"_1\":\"You turned on disappearing messages. New messages will disappear from this chat 1 day after they're sent, except when kept.\"}", [
                s._plural(t, "number_of_days")
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByUnknown) {
            return s._("_j{\"*\":\"Disappearing messages were turned on. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept.\",\"_1\":\"Disappearing messages were turned on. New messages will disappear from this chat 1 day after they're sent, except when kept.\"}", [
                s._plural(t, "number_of_days")
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByOthersAsAdmin && n != null) {
            return s._("_j{\"*\":\"{person-name} turned on disappearing messages. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept. {dm-action}\",\"_1\":\"{person-name} turned on disappearing messages. New messages will disappear from this chat 1 day after they're sent, except when kept. {dm-action}\"}", [
                s._plural(t, "number_of_days"),
                s._param("person-name", n),
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt())
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByYouAsAdmin) {
            return s._("_j{\"*\":\"You turned on disappearing messages. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept. {dm-action}\",\"_1\":\"You turned on disappearing messages. New messages will disappear from this chat 1 day after they're sent, except when kept. {dm-action}\"}", [
                s._plural(t, "number_of_days"),
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt())
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.SettingChangeByUnknownAsAdmin) {
            return s._("_j{\"*\":\"Disappearing messages were turned on. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept. {dm-action}\",\"_1\":\"Disappearing messages were turned on. New messages will disappear from this chat 1 day after they're sent, except when kept. {dm-action}\"}", [
                s._plural(t, "number_of_days"),
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeSettingFbt())
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.Duration) {
            return s._("_j{\"*\":\"{number_of_days} days\",\"_1\":\"1 day\"}", [
                s._plural(t, "number_of_days")
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.OutOfSyncInfo) {
            return s._("_j{\"*\":\"There was a disappearing message timer conflict. This message will disappear after {number_of_days} days.\",\"_1\":\"There was a disappearing message timer conflict. This message will disappear after 1 day.\"}", [
                s._plural(t, "number_of_days")
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.Explanation) {
            return s._("_j{\"*\":\"New messages will disappear from this chat {number_of_days} days after they're sent, except when kept.\",\"_1\":\"New messages will disappear from this chat 1 day after they're sent, except when kept.\"}", [
                s._plural(t, "number_of_days")
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.ModeChangeByOthers) {
            if (r) {
                return s._("_j{\"*\":\"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept. {dm-action}\",\"_1\":\"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 day after they're sent, except when kept. {dm-action}\"}", [
                    s._plural(t, "number_of_days"),
                    s._param("person-name", n),
                    s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionSetOwnTimerFbt())
                ]);
            }
            return s._("_j{\"*\":\"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept. Click to learn more.\",\"_1\":\"{person-name} uses a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 day after they're sent, except when kept. Click to learn more.\"}", [
                s._plural(t, "number_of_days"),
                s._param("person-name", n)
            ]);
        }
        if (e === o("WAWebEphemeralFbtKicTypes").EphemeralStringType.ModeChangeByYou && r) {
            return s._("_j{\"*\":\"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat {number_of_days} days after they're sent, except when kept. {dm-action}\",\"_1\":\"You use a default timer for disappearing messages in new chats. New messages will disappear from this chat 1 day after they're sent, except when kept. {dm-action}\"}", [
                s._plural(t, "number_of_days"),
                s._param("dm-action", o("WAWebEphemeralCTAFbt").getDmActionChangeDefaultTimerFbt())
            ]);
        }
        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "getEphemeralOnDaysString is given type ",
            " and name ",
            ""
        ])), e, n).sendLogs("invalid-ephemeral-string-type");
        return "";
    }
    l.getEphemeralOnHoursString = c;
    l.getEphemeralOnDaysString = d;
}, 226);