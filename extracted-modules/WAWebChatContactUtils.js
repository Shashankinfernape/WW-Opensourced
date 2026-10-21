__d("WAWebChatContactUtils", [
    "fbt"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t = true) {
        if (e == null || e === "") {
            return "";
        }
        return `~${t ? "\u202F" : ""}${e}`;
    }
    function u(e) {
        if (e == null || e === "") {
            return "";
        }
        return s._("Maybe {notifyName}", [
            s._param("notifyName", e)
        ]);
    }
    l.getFormattedNotifyName = e;
    l.getAccessibleNotifyName = u;
}, 226);