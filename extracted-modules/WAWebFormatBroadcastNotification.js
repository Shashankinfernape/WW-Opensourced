__d("WAWebFormatBroadcastNotification", [
    "fbt",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebFormatParticipantNames"
], function(t, n, r, o, a, i, l, s) {
    function e() {
        return s._("You created an audience.");
    }
    function u() {
        return s._("About this business broadcast");
    }
    function c(e) {
        const e_length = e.length;
        return s._("_j{\"*\":\"{name} were added to the list\",\"_1\":\"{name} added to the list\"}", [
            s._plural(e_length),
            s._param("name", o("WAWebFormatParticipantNames").getFormattedNames(e, false))
        ]);
    }
    function d(e) {
        const e_length = e.length;
        return s._("_j{\"*\":\"{name} were removed from the list\",\"_1\":\"{name} removed from the list\"}", [
            s._plural(e_length),
            s._param("name", o("WAWebFormatParticipantNames").getFormattedNames(e, false))
        ]);
    }
    function m({ recipients, subtype }) {
        if (subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BbProCreate) {
            return u().toString();
        }
        if (subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Create) {
            return e().toString();
        }
        if (subtype === "add") {
            return c(recipients).toString();
        }
        if (subtype === "remove") {
            return d(recipients).toString();
        }
        return "";
    }
    l.getAudienceCreateMessage = e;
    l.getBizBroadcastProChatMessage = u;
    l.getBroadcastAddMessage = c;
    l.getBroadcastRemoveMessage = d;
    l.formatBroadcastNotification = m;
}, 226);