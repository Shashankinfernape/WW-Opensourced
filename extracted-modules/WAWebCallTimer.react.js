__d("WAWebCallTimer.react", [
    "fbt",
    "WALogger",
    "WAWebCallCollection",
    "WAWebClock",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallStateUtils",
    "WAWebVoipEventConstants",
    "WAWebVoipJsonParsersWeb",
    "WAWebVoipStackInterface",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useState } = m;
    let f = null;
    function g() {
        if (!f) {
            f = {
                startTime: null,
                intervalId: null,
                subscribers: new Set
            };
        }
        return f;
    }
    function h(e) {
        if (f != null) {
            f.startTime = e;
            f.subscribers.forEach((e)=>e());
        }
    }
    function y(e) {
        if (e.intervalId != null) {
            window.clearInterval(e.intervalId);
            e.intervalId = null;
        }
    }
    function C() {
        if (f != null) {
            y(f);
        }
        f = null;
    }
    function b(e) {
        y(e);
        queueMicrotask(()=>{
            if (f === e && e.subscribers.size === 0) {
                C();
            }
        });
    }
    const v = {
        timerContainer: {
            minWidth: "x2c5eco",
            fontSize: "x1f6kntn",
            fontWeight: "xo1l8bm",
            $$css: true
        }
    };
    function SComponent({ callState, xstyle }) {
        const l = useState(function() {
            if (!o("WAWebVoipCallStateUtils").isCallActive(callState)) {
                return null;
            }
            const e = f;
            if (e?.startTime != null) {
                const t = e.startTime;
                return Math.floor((Date.now() - t) / 1000);
            }
            return null;
        });
        const c = l[0];
        const m = l[1];
        useEffect(function() {
            if (!o("WAWebVoipCallStateUtils").isCallActive(callState)) {
                C();
                return;
            }
            let t = true;
            const i = g();
            if (i.startTime == null) {
                n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    try {
                        const n = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                        if (!t) {
                            return;
                        }
                        if (n?.type === "web") {
                            o("WAWebVoipActivityTracker").trackActivity(o("WAWebVoipActivityTracker").VoipActivity.GET_CALL_INFO, "call_timer");
                            const a = yield n.getCallInfo();
                            if (!t) {
                                return;
                            }
                            if (a) {
                                const l = r("WAWebVoipJsonParsersWeb").parseCallInfo(a);
                                const s = Math.floor(l.callActiveDuration / 1000);
                                const u = Date.now() - s * 1000;
                                h(u);
                                if (t) {
                                    m(s);
                                }
                            }
                        }
                    } catch (t) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "WAWebCallTimer: Failed to get initial call duration"
                        ])));
                        if (i.startTime == null) {
                            h(Date.now());
                        }
                    }
                })();
            }
            const l = function() {
                const i_startTime = i.startTime;
                if (i_startTime != null) {
                    const t = Math.floor((Date.now() - i_startTime) / 1000);
                    m(t);
                }
            };
            i.subscribers.add(l);
            if (i.intervalId == null) {
                i.intervalId = window.setInterval(function() {
                    i.subscribers.forEach((e)=>e());
                }, 1000);
            }
            return function() {
                t = false;
                i.subscribers.delete(l);
                if (i.subscribers.size === 0) {
                    b(i);
                }
            };
        }, [
            callState
        ]);
        const y = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_RECONNECTING), function() {
            const activeCall = r("WAWebCallCollection").activeCall;
            if (activeCall?.peerJid == null) {
                return null;
            }
            return activeCall.getPeerReconnectingState(activeCall.peerJid);
        });
        if (!o("WAWebVoipCallStateUtils").isCallActive(callState) || c == null) {
            return null;
        }
        const S = y?.isReconnecting === true && y?.option === o("WAWebVoipWaCallEnums").ReconnectingOption.Text;
        return <div {...babelHelpers.extends({}, (u || (u = r("stylex"))).props(v.timerContainer, xstyle), {
            "data-testid": "voip-call-timer",
            role: "timer",
            children: S ? s._("Reconnecting...") : o("WAWebClock").Clock.durationStr(c)
        })}/>;
    }
    SComponent.displayName = `${SComponent.name} [from ${i.id}]`;
    l.default = SComponent;
}, 226);