__d("WAWebSendMsgMetricReporter", [
    "WAWebCoreActionsODS",
    "WAWebCoreActionsODSMsgGetters",
    "WAWebCoreActionsODSSyncd",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMsgType",
    "WAWebWamMsgUtils"
], function(t, n, r, o, a, i, l) {
    const odsDeps = {
        createPostODSCountersFn: o("WAWebCoreActionsODSMsgGetters").createPostODSCountersFn,
        createPostODSErrorCountersFn: o("WAWebCoreActionsODSMsgGetters").createPostODSErrorCountersFn,
        logMCMigrationControl: o("WAWebCoreActionsODS").logMCMigrationControl,
        logMCMigrationRegression: o("WAWebCoreActionsODSSyncd").logMCMigrationRegression,
        logMCMigrationTest: o("WAWebCoreActionsODS").logMCMigrationTest
    };
    function s(t, frontendDeps, r) {
        return new (o("WAWebMessageSendReporter")).MessageSendReporter(t, babelHelpers.extends({}, r, {
            frontendDeps,
            odsDeps
        }));
    }
    function u(e, t) {
        const n = {
            createSendReporter: function(r) {
                return s(e, t, r);
            },
            sendReporter: null,
            sendPerfReporter: null
        };
        Object.defineProperty(n, "sendReporter", {
            get: function() {
                return e.wamMessageSendReporter;
            },
            set: function(n) {
                e.wamMessageSendReporter = n;
            },
            enumerable: true
        });
        Object.defineProperty(n, "sendPerfReporter", {
            get: function() {
                return e.wamMessageSendPerfReporter ?? null;
            },
            set: function(n) {
                e.wamMessageSendPerfReporter = n;
            },
            enumerable: true
        });
        return n;
    }
    function c(e, t) {
        let n = s(e, t);
        let r = new (o("WAWebMessageSendPerfReporter")).MessageSendPerfReporter({
            chatWid: e.to,
            mediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
            messageType: o("WAWebWamMsgUtils").getWamMessageType(e)
        });
        if (e.kind === o("WAWebMsgType").MsgKind.ProtocolAddonRevoke) {
            r?.setIsRevokeMessage(true);
        }
        const i = {
            createSendReporter: function(r) {
                return s(e, t, r);
            },
            sendReporter: null,
            sendPerfReporter: null
        };
        Object.defineProperty(i, "sendReporter", {
            get: function() {
                return n;
            },
            set: function(t) {
                n = t;
            },
            enumerable: true
        });
        Object.defineProperty(i, "sendPerfReporter", {
            get: function() {
                return r;
            },
            set: function(t) {
                r = t;
            },
            enumerable: true
        });
        return i;
    }
    l.createMsgModelMetricReporter = u;
    l.createAddonMetricReporter = c;
}, 98);