__d("WAWebCommsConfigBase", [
    "WALogger",
    "WAWapJid",
    "WAWebABProps",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebCommsProcessAck",
    "WAWebCommsSendPing",
    "WAWebEnvironment",
    "WAWebNoop",
    "WAWebOfflineResumePreAckHandler",
    "WAWebOpenChatSocket",
    "WAWebSocketConstants",
    "WAWebStanzaValidation",
    "cr:7907",
    "gkx",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 900000;
    function u() {
        return {
            jitter: 0.1,
            max: s,
            algo: {
                type: "fibonacci",
                first: 1000,
                second: 1000
            },
            relativeDelay: false
        };
    }
    function c(t) {
        return function(a) {
            const l = a || {
                passive: false,
                pull: false
            };
            return {
                maxRetries: Number.MAX_SAFE_INTEGER,
                openChatSocket: function(n, a) {
                    if (o("WAWebABProps").getABPropConfigValue("web_comms_socket_reconnect_enabled")) {
                        l.signal = r("nullthrows")(a);
                    } else {
                        l.signal = new AbortController().signal;
                    }
                    return o("WAWebOpenChatSocket").openChatSocket(l, t.isRegistered()).then((e)=>{
                        n();
                        l.passive = false;
                        return e;
                    });
                },
                healthCheckInterval: 15,
                deadSocketTime: 20000,
                maxSocketLoopWaitTime: s,
                shouldCloseStaleSocket: true,
                socketReconnectBackoffAlgo: u(),
                shouldBlockReceivingUntilSuccess: true,
                handlers: {
                    onConnect: function() {
                        if (t.isRegistered()) {
                            o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus().triggerSetSocketState(o("WAWebSocketConstants").SOCKET_STATE.CONNECTED);
                            o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus().triggerOpenSocketStream();
                        }
                    },
                    onDisconnect: function() {
                        o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus().triggerSocketStreamDisconnected();
                    },
                    onSocketOpen: function() {
                        o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus().triggerSetSocketState(o("WAWebSocketConstants").SOCKET_STATE.PAIRING);
                    },
                    onSocketLoopIteration: function(t) {
                        o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus().triggerSetSocketState(o("WAWebSocketConstants").SOCKET_STATE.OPENING);
                    },
                    onConnectionChange: r("WAWebNoop"),
                    onOptimisticConnectionChange: r("WAWebNoop"),
                    onBeforeCastStanzaForE2E: function(t, n) {
                        if (t.tag === "ack" && !(n != null && n.preAck) && !o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus().isOfflineDeliveryEnd) {
                            o("WAWebOfflineResumePreAckHandler").parseAndSerializeOfflinePreAck(t);
                        }
                    },
                    onCastStanza: function(a) {
                        if (r("gkx")("26259") && a.tag === "ack" && !(a.attrs.to instanceof o("WAWapJid").WapJid)) {
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "ack.to is a ",
                                " not a WapJid: ",
                                ""
                            ])), typeof a.attrs.to, a).sendLogs("send-string-jid");
                        }
                        if (!(r("gkx")("26258") || n("cr:7907") == null)) {
                            n("cr:7907").sendNewStanzaToDevTool(a, true);
                        }
                        o("WAWebStanzaValidation").validateSentStanza(a);
                    },
                    onHandleAck: function(t) {
                        r("WAWebCommsProcessAck")(t);
                    },
                    onHandleStanza: function(t) {
                        if (!(r("gkx")("26258") || n("cr:7907") == null)) {
                            n("cr:7907").sendNewStanzaToDevTool(t, false);
                        }
                    },
                    onSendIq: o("WAWebStanzaValidation").validateSentStanza,
                    onClockSkewUpdate: t.onClockSkewUpdate ?? o("WAWebCommsSendPing").updateClockSkew
                },
                isPauseEnabled: r("WAWebEnvironment").isWindows
            };
        };
    }
    l.createGetCommsConfig = c;
}, 98);