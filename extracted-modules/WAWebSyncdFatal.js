__d("WAWebSyncdFatal", [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebCoreActionsODS",
    "WAWebLogoutReasonConstants",
    "WAWebSocketLogoutJob",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdFatalExceptionNotificationApi",
    "WAWebSyncdLogs",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = 5000;
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: starting fatal flow for ",
                ""
            ])), t);
            if (t) {
                yield C(t, "handleFatalError for collection");
            } else {
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog("", "handleFatalError without collection");
            }
            let n = [];
            if (t != null) {
                n = t.map((e)=>String(e));
            }
            const r = o("WATimeUtils").castMilliSecondsToUnixTime(o("WATimeUtils").unixTimeMs());
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: fatal flow: before sleep"
            ])));
            yield o("WAPromiseDelays").delayMs(g);
            yield C(t, "handleFatalError before notify primary");
            const a = o("WATimeUtils").castMilliSecondsToUnixTime(o("WATimeUtils").unixTimeMs());
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: start notifying primary on fatal error"
            ])));
            try {
                yield o("WAWebSyncdFatalExceptionNotificationApi").sendAppStateFatalExceptionNotification(n);
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: error when sending fatal message to primary: ",
                    ""
                ])), error).sendLogs("syncd: could not send fatal to primary");
            }
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: end notifying primary on fatal error"
            ])));
            yield C(t, "handleFatalError after notify primary");
            const i = o("WATimeUtils").castMilliSecondsToUnixTime(o("WATimeUtils").unixTimeMs());
            const l = o("WATimeUtils").toHttpHeaderDate(r);
            const f = o("WATimeUtils").toHttpHeaderDate(a);
            const h = o("WATimeUtils").toHttpHeaderDate(i);
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] fatal notify done sleepT=",
                " sendT=",
                " currT=",
                ""
            ])), l, f, h);
            yield o("WAWebSyncdLogs").printSyncdLogs();
            o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: Received fatal error and logged out"
            ]))).verbose().tags("syncd", "logout").sendLogs("syncd: fatal error and logged out");
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: fatal flow: before logout sleep"
            ])));
            yield o("WAPromiseDelays").delayMs(g);
            o("WAWebCoreActionsODS").logSessionForcedLogout();
            yield o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.SyncdFailure);
        });
        return y.apply(this, arguments);
    }
    function C(e, t) {
        return (f || (f = n("Promise"))).all((e ?? [
            ""
        ]).map((e)=>o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, t)));
    }
    l.handleFatalError = h;
}, 98);