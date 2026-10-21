__d("WAWebHandleBrigadingUpdateNotification", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const i = n.xwa2_notify_brigading?.state;
            if (i == null) {
                throw r("err")("[mex][notification][handleBrigadingNotification] state is null");
            }
            try {
                switch(i){
                    case "ENFORCED":
                    case "NOT_ENFORCED":
                    case "DETECTED":
                        {
                            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set("WABrigadingState", i);
                            d(i);
                            break;
                        }
                    case "NOT_DETECTED":
                        yield o("WAWebUserPrefsGeneral").clearBrigadingstate();
                        d(null);
                        break;
                    default:
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[mex][brigading] unhandled state: ",
                            ""
                        ])), i);
                }
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "setWABrigadingState: failed to set to indexedDB, state: ",
                    ""
                ])), i).sendLogs("setWABrigadingState-failed");
            }
        });
        return c.apply(this, arguments);
    }
    function d(newState) {
        o("WAWebBackendApi").frontendFireAndForget("triggerBrigadingStateChangeFromBridge", {
            newState
        });
    }
    l.mexHandleBrigadingNotification = u;
}, 98);