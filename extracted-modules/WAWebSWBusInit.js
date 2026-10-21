__d("WAWebSWBusInit", [
    "Promise",
    "WALogger",
    "WAWebCmd",
    "WAWebCrashlog",
    "WAWebFeatureDetectionSwSupport",
    "WAWebLoggerImpl",
    "WAWebNoop",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebSwNotificationBannerRegistry",
    "WAWebUserPrefsGeneral",
    "WAWebVoipNotificationActionBus",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = r("requireDeferred")("WAWebPipVideoStreaming").__setRef("WAWebSWBusInit");
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return (yield _.load()).handleVideoStreamingRequest;
        });
        return g.apply(this, arguments);
    }
    if (r("WAWebFeatureDetectionSwSupport").supported) {
        const h = function() {
            try {
                const t = navigator.serviceWorker;
                if (t != null && t.controller) {
                    t.controller.addEventListener("error", function(t) {
                        if (o("WAWebSocketModel").Socket.state !== o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED) {
                            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "ServiceWorker controller error: ",
                                ""
                            ])), t.error);
                        }
                    });
                }
            } catch (e) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    '[sw] add "error" listener failed: ',
                    ""
                ])), e);
            }
        };
        try {
            const y = navigator.serviceWorker;
            if (y) {
                y.addEventListener("controllerchange", function(e) {
                    h();
                });
            }
        } catch (e) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                '[sw] add "controllerchange" listener failed: ',
                ""
            ])), e);
        }
        try {
            const C = navigator.serviceWorker;
            if (C) {
                C.addEventListener("error", function(e) {
                    if (o("WAWebSocketModel").Socket.state !== o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED) {
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "ServiceWorker container error: ",
                            ""
                        ])), e.error);
                    }
                });
            }
        } catch (e) {
            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                '[sw container] add "error" listener failed: ',
                ""
            ])), e);
        }
        h();
        const b = function(t, n) {
            t.buffer.forEach((e)=>{
                const r = e.message[0] ?? "";
                const a = `ServiceWorker (${n}): ${r}`;
                const i = e.level.match(/^(.*?)(?:Verbose)?$/i);
                const l = R(i[1]);
                o("WAWebLoggerImpl").Logger.logImpl(l, a, e.error, e.attachedToSendLogs, e.extraTags);
            });
        };
        const v = new (r("WAWebSWBus"))(function({ action: a, message: i, version: l }) {
            switch(a){
                case r("WAWebSWBusActions").REQUEST_STREAMING_INFO:
                case r("WAWebSWBusActions").EXP_BACKOFF:
                case r("WAWebSWBusActions").REQUEST_RMR:
                case r("WAWebSWBusActions").SEND_STREAMING_CHUNK:
                    return f()?.then(function(e) {
                        return e?.({
                            action: a,
                            message: i
                        });
                    });
                case r("WAWebSWBusActions").LOG:
                    if (o("WAWebSocketModel").Socket.state === o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED) {
                        return void 0;
                    }
                    if (i) {
                        b(i, l);
                    }
                    return {
                        test: true
                    };
                case r("WAWebSWBusActions").UPLOAD_LOGS:
                    if (i) {
                        b(i, l);
                    }
                    return o("WAWebCrashlog").upload({
                        reason: "Requested by Service Worker"
                    }).then(r("WAWebNoop"));
                case r("WAWebSWBusActions").HEARTBEAT:
                    return i;
                case r("WAWebSWBusActions").ACCEPT_CALL_FROM_NOTIFICATION:
                    return {
                        handled: S("accept_call", i)
                    };
                case r("WAWebSWBusActions").DECLINE_CALL_FROM_NOTIFICATION:
                    return {
                        handled: S("decline_call", i)
                    };
                case r("WAWebSWBusActions").NOTIFICATION_BANNER_CLICKED:
                    return {
                        handled: o("WAWebSwNotificationBannerRegistry").handleSwNotificationBannerClick(i?.bannerKey)
                    };
                case r("WAWebSWBusActions").NOTIFICATION_BANNER_CLOSED:
                    return {
                        handled: o("WAWebSwNotificationBannerRegistry").handleSwNotificationBannerClose(i?.bannerKey)
                    };
                default:
                    return (p || (p = n("Promise"))).reject(r("err")(`Invalid Action: ${a}`));
            }
        });
        v.init();
        o("WAWebCmd").Cmd.on("logout_from_bridge", function() {
            const e = navigator.serviceWorker;
            if (e != null && e.controller) {
                r("WAWebSWBus").request(e.controller, r("WAWebSWBusActions").LOGOUT).catch(r("WAWebNoop"));
            }
        });
    }
    function S(e, t) {
        let n = false;
        r("WAWebVoipNotificationActionBus").trigger(e, {
            callId: t?.callId,
            claim: function() {
                if (n) {
                    return false;
                }
                n = true;
                return true;
            }
        });
        if (n) {
            o("WAWebUserPrefsGeneral").addToNotificationEngagement(e === "accept_call" ? {
                totalNotifRtcVoipAccept: 1
            } : {
                totalNotifRtcVoipDecline: 1
            }).catch((t)=>{
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[sw] failed to count call notification action ",
                    ""
                ])), e).catching(r("getErrorSafe")(t)).sendLogs("count-call-notification-action-failed");
            });
        }
        return n;
    }
    function R(e) {
        switch(e){
            case "info":
                return 1;
            case "log":
                return 2;
            case "warn":
                return 3;
            case "error":
                return 4;
        }
        throw r("err")(`Invalid level: ${e}`);
    }
}, 34);