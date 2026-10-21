__d("WAWebCallAcceptedElsewhereNotificationDeferral", [
    "WALogger",
    "WAWebNotificationBackend",
    "WAWebVoipOngoingCallCollection",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c() {
        return document.visibilityState !== "hidden" && document.hasFocus();
    }
    function d(t) {
        const t_callId = t.callId;
        let a = false;
        var i = ()=>{
            a = true;
            document.removeEventListener("visibilitychange", d);
            window.removeEventListener("focus", d);
            o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.off("remove", m);
        };
        function l() {
            i();
            if (o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(t_callId) == null) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] accepted-elsewhere notif dropped ",
                    ""
                ])), t_callId);
                return;
            }
            o("WAWebNotificationBackend").showCallAcceptedElsewhereNotification(t).catch((e)=>{
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] accepted-elsewhere notif show failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("voip-call-accepted-elsewhere-notif");
            });
        }
        function d() {
            if (!a) {
                if (c()) {
                    l();
                }
            }
        }
        function m() {
            if (!a) {
                if (o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(t_callId) == null) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] accepted-elsewhere notif cancelled ",
                        ""
                    ])), t_callId);
                    i();
                }
            }
        }
        document.addEventListener("visibilitychange", d);
        window.addEventListener("focus", d);
        o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.on("remove", m);
        if (c()) {
            l();
        }
    }
    l.deferCallAcceptedElsewhereNotificationUntilForeground = d;
}, 98);