__d("useWAWebHatchChatOpen", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBotUtils",
    "WAWebHatchAgentStatusManager",
    "WAWebHatchChannelBootstrap",
    "WAWebHatchFrontendGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchTextStatusBridge",
    "WAWebNoop",
    "WAWebThreadJourneyLogger",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const useEffect = (s || (s = o("react"))).useEffect;
    const c = r("JSResourceForInteraction")("WAWebRequestHatchConnectors").__setRef("useWAWebHatchChatOpen");
    const d = r("JSResourceForInteraction")("WAWebRegisterHatchClientCapabilities").__setRef("useWAWebHatchChatOpen");
    function m(e) {
        const t = o("react-compiler-runtime").c(3);
        let n;
        let a;
        if (t[0] !== e) {
            n = function() {
                if (!(e == null || !o("WAWebBotUtils").isHatchBot(e.id) || !o("WAWebHatchFrontendGating").isHatchIntegrationEnabled())) {
                    const t = e.id;
                    o("WAWebThreadJourneyLogger").ThreadJourneyLogger.maybeGenAiSessionId();
                    r("WAWebHatchLinkedStatusManager").fetchAndUpdateStatus();
                    const n = p();
                    const a = _();
                    const i = r("WAWebHatchAgentStatusManager").subscribeToStatusText(function(e) {
                        if (e != null) {
                            o("WAWebHatchTextStatusBridge").setHatchTextStatus(t, e);
                        } else {
                            o("WAWebHatchTextStatusBridge").clearHatchTextStatus(t);
                        }
                    });
                    const l = o("WAWebHatchChannelBootstrap").bootstrapHatchWhenLinked();
                    return function() {
                        i();
                        l();
                        n();
                        a();
                        o("WAWebHatchTextStatusBridge").clearHatchTextStatus(t);
                        o("WAWebThreadJourneyLogger").ThreadJourneyLogger.clearAiThreadLoggingContext();
                    };
                }
            };
            a = [
                e
            ];
            t[0] = e;
            t[1] = n;
            t[2] = a;
        } else {
            n = t[1];
            a = t[2];
        }
        useEffect(n, a);
    }
    function p() {
        if (o("WAWebHatchFrontendGating").isHatchConnectorsEnabled()) {
            return f(()=>{
                h().catch(r("WAWebNoop"));
            });
        }
        return r("WAWebNoop");
    }
    function _() {
        if (o("WAWebHatchFrontendGating").isHatchVmCapabilitySyncEnabled()) {
            return f(()=>{
                if (r("WAWebHatchLinkedStatusManager").isLinked()) {
                    C();
                }
            }, g);
        }
        return r("WAWebNoop");
    }
    function f(e, t = function() {
        return true;
    }) {
        if (g()) {
            e();
            return r("WAWebNoop");
        }
        let n = r("WAWebNoop");
        n = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(function() {
            if (t()) {
                n();
                e();
            }
        });
        return function() {
            n();
        };
    }
    function g() {
        return r("WAWebHatchLinkedStatusManager").getLastConfirmedLinkedStatusState() != null;
    }
    function h() {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (r("WAWebHatchLinkedStatusManager").getLastConfirmedLinkedStatusState() !== "unlinked") {
                const e = yield c.load();
                const t = e.requestHatchConnectors;
                yield t();
            }
        });
        return y.apply(this, arguments);
    }
    function C() {
        d.load().then((e)=>e.registerHatchClientCapabilities()).catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-capabilities: module failed to load"
            ]))).sendLogs("hatch-capabilities-load-failed");
        });
    }
    l.default = m;
}, 98);