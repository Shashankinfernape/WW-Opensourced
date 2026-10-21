__d("WAWebVoipRevalidateOngoingCallsOnResume", [
    "WALogger",
    "WAWebCmd",
    "WAWebVoipCheckOngoingCalls",
    "WAWebVoipInitEventEmitter",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = false;
    let u = false;
    let c = false;
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!(u || c) && o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited() && o("WAWebCmd").Cmd.isOfflineDeliveryEnd) {
                u = true;
                c = true;
                try {
                    yield o("WAWebVoipCheckOngoingCalls").checkOngoingCalls();
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[RevalidateOngoingCallsOnResume] run failed: ",
                        ""
                    ])), t).tags("nexus-voip").sendLogs("revalidate-on-resume-run-failed");
                } finally{
                    c = false;
                }
                d();
            }
        });
        return m.apply(this, arguments);
    }
    function p() {
        if (!s) {
            s = true;
            o("WAWebCmd").Cmd.on("offline_delivery_state_reset_from_bridge", function() {
                u = false;
            });
            o("WAWebCmd").Cmd.on("offline_delivery_end_from_bridge", function() {
                d();
            });
            o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.on("voipInitSuccess", function() {
                d();
            });
            d();
        }
    }
    l.initRevalidateOngoingCallsOnResume = p;
}, 98);