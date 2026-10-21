__d("WAWebVoipStaleOfferMissedCallFieldstats", [
    "WALogger",
    "WARandomHex",
    "WAWebBackendApi",
    "WAWebCallWamEvent",
    "WAWebPonyfillsIdleCallback",
    "WAWebWamEnumCallResultType",
    "WAWebWamEnumCallSide",
    "WAWebWamEnumCallTermReason",
    "WAWebWamEnumCallWakeupSource",
    "WAWebWamEnumFieldStatsRowType",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 16;
    const d = 1000;
    const m = 27;
    const p = 127;
    const _ = new Set([
        "android",
        "capi",
        "ios_tablet",
        "ipad",
        "iphone",
        "kaios",
        "mac_os_electron",
        "macos",
        "portal",
        "smba",
        "smbi",
        "unknown",
        "wearm",
        "web",
        "windows",
        "windows_electron",
        "wp"
    ]);
    const f = new Map([
        [
            "accepted_elsewhere",
            (u = o("WAWebWamEnumCallTermReason")).CALL_TERM_REASON.ACCEPTED_ELSEWHERE
        ],
        [
            "call_is_full",
            u.CALL_TERM_REASON.CALL_IS_FULL
        ],
        [
            "device_switch",
            u.CALL_TERM_REASON.DEVICE_SWITCH
        ],
        [
            "group_call_ended",
            u.CALL_TERM_REASON.GROUP_CALL_ENDED
        ],
        [
            "heartbeat",
            u.CALL_TERM_REASON.HEARTBEAT_TERMINATE
        ],
        [
            "media_rx_timeout",
            u.CALL_TERM_REASON.MEDIA_TX_RX_TIMEOUT
        ],
        [
            "media_tx_timeout",
            u.CALL_TERM_REASON.MEDIA_TX_RX_TIMEOUT
        ],
        [
            "rejected_elsewhere",
            u.CALL_TERM_REASON.REJECTED_ELSEWHERE
        ],
        [
            "relay_bind_failed",
            u.CALL_TERM_REASON.RELAY_BIND_FAILED
        ],
        [
            "screened_elsewhere",
            u.CALL_TERM_REASON.ACCEPTED_ELSEWHERE
        ],
        [
            "setup_failed",
            u.CALL_TERM_REASON.SETUP_FAILED
        ],
        [
            "timeout",
            u.CALL_TERM_REASON.RINGING_TIMEOUT
        ],
        [
            "user_invisible",
            u.CALL_TERM_REASON.USER_INVISIBLE
        ],
        [
            "user_removed",
            u.CALL_TERM_REASON.USER_REMOVED
        ]
    ]);
    function g(t, n, a) {
        if (n.hasChild("uploadfieldstat")) {
            let i = false;
            const l = function() {
                if (!i) {
                    i = true;
                    y(t, n, a).catch((t)=>{
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [deferred-boot] stale offer fieldstats failed"
                        ]))).catching(r("getErrorSafe")(t)).tags("non-sad").sendLogs("voip-deferred-boot-stale-offer-fieldstats-failed", {
                            sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                            sampling: 0.01
                        });
                    });
                }
            };
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(l);
            self.setTimeout(l, d);
        }
    }
    function h(e, t, n, r) {
        switch(t){
            case "terminate":
                return k(e, n, r);
            case "accept":
                return I(e, o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.ACCEPTED_ELSEWHERE);
            case "reject":
                return I(e, o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.REJECTED_ELSEWHERE);
            default:
                return e;
        }
    }
    function y(e, t, n) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = yield o("WAWebBackendApi").frontendSendAndReceive("getUnifiedSessionId");
            const callTermReason = b(e, n());
            new (o("WAWebCallWamEvent")).CallWamEvent(babelHelpers.extends({
                callOfferElapsedT: e.e,
                callPeerAppVersion: e.peer_app_version.slice(0, m),
                callPeerPlatform: _.has(e.peer_platform) ? e.peer_platform : "unknown",
                callRandomId: o("WARandomHex").randomHex(c).toLowerCase(),
                callReplayerId: "",
                callResult: S(callTermReason),
                callSide: o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE,
                callTermReason,
                callTestBucket: R(t),
                callWakeupSource: o("WAWebWamEnumCallWakeupSource").CALL_WAKEUP_SOURCE.NONE,
                fieldStatsRowType: o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH,
                isLidCall: e.call_creator.isLid() ? true : null,
                videoEnabled: e.isVideoCall === true
            }, r == null ? null : {
                unifiedSessionId: r
            })).commit();
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] stale offer missed call WAM event committed"
            ])));
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        const r = t?.terminated;
        return r ?? (e.is_call_ended === true ? v(e.terminate_reason) : t?.answered ?? o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.RINGING_TIMEOUT);
    }
    function v(terminate_reason) {
        return f.get(terminate_reason ?? "") ?? o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.ENDED_BY_PEER;
    }
    function S(callTermReason) {
        if (callTermReason === o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.ACCEPTED_ELSEWHERE || callTermReason === o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.DEVICE_SWITCH) {
            return o("WAWebWamEnumCallResultType").CALL_RESULT_TYPE.ACCEPTED_ELSEWHERE;
        }
        if (callTermReason === o("WAWebWamEnumCallTermReason").CALL_TERM_REASON.REJECTED_ELSEWHERE) {
            return o("WAWebWamEnumCallResultType").CALL_RESULT_TYPE.REJECTED_ELSEWHERE;
        }
        return o("WAWebWamEnumCallResultType").CALL_RESULT_TYPE.MISSED_NO_RECEIPT;
    }
    function R(e) {
        try {
            const t = e.maybeChild("voip_settings");
            if (t == null) {
                return "";
            }
            const n = E(JSON.parse(L(t)));
            if (n == null) {
                return "";
            }
            return n.slice(0, p);
        } catch (e) {
            return "";
        }
    }
    function L(e) {
        const t = e.contentBytes();
        if (t instanceof Uint8Array) {
            return new TextDecoder().decode(t);
        }
        return String(t);
    }
    function E(e) {
        if (e == null || typeof e !== "object") {
            return null;
        }
        const e_test = e.test;
        if (e_test == null || typeof e_test !== "object") {
            return null;
        }
        const t_name = e_test.name;
        if (typeof t_name === "string") {
            return t_name;
        }
        return null;
    }
    function k(e, t, n) {
        if (e.terminated != null || n.maybeAttrString("joinable") === "1") {
            return e;
        }
        return babelHelpers.extends({}, e, {
            terminated: v(t.terminate_reason)
        });
    }
    function I(e, answered) {
        if (e.answered == null) {
            return babelHelpers.extends({}, e, {
                answered
            });
        }
        return e;
    }
    l.logStaleOfferMissedCallFieldstats = g;
    l.applyFollowUpStanza = h;
    l.getStaleOfferCallTermReason = b;
}, 98);