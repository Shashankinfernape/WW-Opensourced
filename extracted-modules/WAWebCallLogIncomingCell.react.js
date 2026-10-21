__d("WAWebCallLogIncomingCell.react", [
    "fbt",
    "WAWebCallsTabCallCell.react",
    "WAWebPipController",
    "WAWebVoipEventConstants",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebVoipCallHandlers"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(27);
        const e_call = e.call;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.MSG);
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] !== e_call.msg) {
            i = function() {
                return e_call.msg;
            };
            t[1] = e_call.msg;
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] !== e_call) {
            l = [
                e_call
            ];
            t[3] = e_call;
            t[4] = l;
        } else {
            l = t[4];
        }
        const callLogMsg = r("useWAWebEventTargetValue")(e_call, a, i, l);
        let d;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            d = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.IS_VIDEO);
            t[5] = d;
        } else {
            d = t[5];
        }
        let m;
        if (t[6] !== e_call.isVideo) {
            m = function() {
                return e_call.isVideo;
            };
            t[6] = e_call.isVideo;
            t[7] = m;
        } else {
            m = t[7];
        }
        let p;
        if (t[8] !== e_call) {
            p = [
                e_call
            ];
            t[8] = e_call;
            t[9] = p;
        } else {
            p = t[9];
        }
        const _ = r("useWAWebEventTargetValue")(e_call, d, m, p);
        const f = !_;
        let g;
        if (t[10] !== _ || t[11] !== f) {
            g = {
                currentBannerJid: null,
                isDocPip: false,
                isMuted: false,
                isVideoCall: _,
                isVideoMuted: f,
                popoutWindowEl: null
            };
            t[10] = _;
            t[11] = f;
            t[12] = g;
        } else {
            g = t[12];
        }
        const h = r("useWAWebVoipCallHandlers")(g);
        const { handleClickAccept, isAccepting } = h;
        if (callLogMsg == null) {
            return null;
        }
        let b;
        if (t[13] !== _) {
            b = s._("_j{\"VOICE\":\"Incoming voice call\",\"VIDEO\":\"Incoming video call\"}", [
                s._enum(_ ? "VIDEO" : "VOICE", {
                    VOICE: "voice",
                    VIDEO: "video"
                })
            ]);
            t[13] = _;
            t[14] = b;
        } else {
            b = t[14];
        }
        const v = b;
        let S;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            S = s._("Join");
            t[15] = S;
        } else {
            S = t[15];
        }
        let R;
        if (t[16] !== handleClickAccept) {
            R = function() {
                handleClickAccept();
            };
            t[16] = handleClickAccept;
            t[17] = R;
        } else {
            R = t[17];
        }
        let L;
        if (t[18] !== callLogMsg) {
            L = function() {
                r("WAWebPipController").openVoipUiPiP(callLogMsg);
            };
            t[18] = callLogMsg;
            t[19] = L;
        } else {
            L = t[19];
        }
        let E;
        if (t[20] !== isAccepting || t[21] !== _ || t[22] !== callLogMsg || t[23] !== v || t[24] !== R || t[25] !== L) {
            const Component = r("WAWebCallsTabCallCell.react");
            E = <Component callLogMsg={callLogMsg} isVideoCall={_} secondary={v} buttonLabel={S} buttonDisabled={isAccepting} buttonVariant="filled" onButtonPress={R} onCardClick={L} handleKeyboardClick bottomSpacing testid="calls-tab-incoming-call-cell"/>;
            t[20] = isAccepting;
            t[21] = _;
            t[22] = callLogMsg;
            t[23] = v;
            t[24] = R;
            t[25] = L;
            t[26] = E;
        } else {
            E = t[26];
        }
        return E;
    }
    l.default = c;
}, 226);