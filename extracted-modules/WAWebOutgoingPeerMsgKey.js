__d("WAWebOutgoingPeerMsgKey", [
    "WAWebMsgKey",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return new (r("WAWebMsgKey"))({
            fromMe: true,
            remote: o("WAWebUserPrefsMeUser").getMaybeMePnUser() ?? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            id: e
        });
    }
    l.buildOutgoingPeerMsgKey = e;
}, 98);