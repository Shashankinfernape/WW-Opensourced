__d("WAWebVoipInCallMessageSendLogger", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebCallCollection",
    "WAWebCallUserJourneyGating",
    "WAWebLidMigrationUtils",
    "WAWebVoipCallStateUtils",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return o("WAWebVoipCallStateUtils").isCallConnected(e) || o("WAWebVoipCallStateUtils").isCallOutgoing(e) || e === o("WAWebVoipWaCallEnums").CallState.AcceptReceived;
    }
    function u(e) {
        try {
            const t = r("WAWebCallCollection").activeCall;
            if (t == null || !s(t.getState())) {
                return;
            }
            const n = t.isGroup ? t.groupJid : t.peerJid;
            const a = o("WAWebLidMigrationUtils").toCommonAddressingMode(n, e.id);
            const i = a[0];
            const l = a[1];
            if (i == null || !i.equals(l) || !o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
                return;
            }
            c(t);
        } catch (error) {
            m(error);
        }
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = yield r("JSResourceForInteraction")("WAWebVoipInCallMessageSendJourneyLog").__setRef("WAWebVoipInCallMessageSendLogger").load();
                const n = t.logMessageSendInLinkedChat;
                if (r("WAWebCallCollection").activeCall !== e) {
                    return;
                }
                n();
            } catch (error) {
                m(error);
            }
        });
        return d.apply(this, arguments);
    }
    function m(error) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: in-call message send logging failed"
        ]))).catching(r("getErrorSafe")(error));
    }
    l.logInCallMessageSendIfNeeded = u;
}, 98);