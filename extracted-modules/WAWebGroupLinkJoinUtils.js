__d("WAWebGroupLinkJoinUtils", [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupSystemMsg",
    "WAWebGroupType",
    "WAWebSchemaGroupMemberChanges",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = o("WAWebSchemaGroupMemberChanges").getGroupMemberChangesTable();
            const a = t.map((t)=>({
                    groupJid: e,
                    participantJid: t.id.toString(),
                    changeTimestamp: n,
                    changeAction: o("WAWebSchemaGroupMemberChanges").GroupMemberChangeAction.JOINED_VIA_LINK
                }));
            yield r.bulkCreateOrReplace(a);
        });
        return c.apply(this, arguments);
    }
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = o("WAWebSchemaGroupMemberChanges").getGroupMemberChangesTable();
            const a = e.toString();
            const i = yield r.equals([
                "groupJid"
            ], a);
            const l = i.filter((e)=>!(e.changeAction !== o("WAWebSchemaGroupMemberChanges").GroupMemberChangeAction.JOINED_VIA_LINK || t != null && e.changeTimestamp < t || n != null && e.changeTimestamp > n));
            const s = new Set(l.map((e)=>e.participantJid));
            return Array.from(s);
        });
        return m.apply(this, arguments);
    }
    function p(e, t, n) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
            const i = o("WATimeUtils").unixTime();
            const l = n?.lastJoinFloodNotificationTimestampSec;
            if (l != null && i - l < o("WATimeUtils").HOUR_SECONDS) {
                return null;
            }
            const s = t.ts ?? i;
            yield u(t.chatId.toString(), r, o("WATimeUtils").castToUnixTime(s));
            const c = i - o("WATimeUtils").FIVE_MINUTES;
            const m = yield d(t.chatId.toString(), o("WATimeUtils").castToUnixTime(c));
            if (m.length >= o("WAWebABProps").getABPropConfigValue("wa_web_anyone_can_link_m2_flood_limit")) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sysmsg] join flood notif - ",
                    " joins in 5min"
                ])), m.length);
                yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(t.chatId, {
                    lastJoinFloodNotificationTimestampSec: i
                });
                return o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                    meta: t,
                    action: {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.JOIN_FLOOD_NOTIFICATION
                    },
                    dbIsStale: false
                });
            }
            return null;
        });
        return _.apply(this, arguments);
    }
    function f(e, t, n) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = [];
            try {
                const a = yield p(e, t, n);
                if (a != null) {
                    r.push(a);
                }
            } catch (e) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[system message] join flood notification failed: ",
                    ""
                ])), e);
            }
            return r;
        });
        return g.apply(this, arguments);
    }
    l.JOIN_FLOOD_WINDOW_SECS = o("WATimeUtils").FIVE_MINUTES;
    l.JOIN_FLOOD_COOLDOWN_SECS = o("WATimeUtils").HOUR_SECONDS;
    l.storeJoinViaLinkRecords = u;
    l.getParticipantsJoinedViaLink = d;
    l.maybeGenerateLinkJoinNotifications = f;
}, 98);