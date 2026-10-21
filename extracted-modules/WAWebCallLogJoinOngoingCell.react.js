__d("WAWebCallLogJoinOngoingCell.react", [
    "fbt",
    "WALogger",
    "WAWebCallCollection",
    "WAWebCallLogUtils",
    "WAWebCallsTabCallCell.react",
    "WAWebFacePile.react",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebMsgGetters",
    "WAWebPipController",
    "WAWebVoipCallStateUtils",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipStartCall",
    "WAWebVoipUiManager",
    "WAWebVoipWaCallEnums",
    "WAWebWamEnumLobbyEntryPointType",
    "react",
    "react-compiler-runtime",
    "useWAWebActiveSelection",
    "useWAWebCallSurfaceState",
    "useWAWebEventTargetValue",
    "useWAWebMsgValues",
    "useWAWebVoipCallHandlers"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useMemo = u.useMemo;
    const m = {
        facePileBorderColor: {
            borderTopColor: "xlbpjqr",
            borderInlineEndColor: "xlt81dz",
            borderBottomColor: "x148b211",
            borderInlineStartColor: "xso6r1",
            $$css: true
        }
    };
    function p(t) {
        const a = o("react-compiler-runtime").c(82);
        const { active, callLogMsg, onClick } = t;
        let d;
        if (a[0] !== callLogMsg.id) {
            d = callLogMsg.id.toString();
            a[0] = callLogMsg.id;
            a[1] = d;
        } else {
            d = a[1];
        }
        const p = r("useWAWebActiveSelection")(active, d);
        const y = p[0];
        const C = p[1];
        const b = h;
        let v;
        if (a[2] !== callLogMsg) {
            v = o("WAWebFrontendMsgGetters").getChat(callLogMsg);
            a[2] = callLogMsg;
            a[3] = v;
        } else {
            v = a[3];
        }
        const S = v;
        let R;
        if (a[4] === Symbol.for("react.memo_cache_sentinel")) {
            let L;
            R = [
                (L = o("WAWebMsgGetters")).getId,
                L.getIsVideoCall,
                L.getCallId,
                L.getIsCallLink,
                L.getCallParticipants
            ];
            a[4] = R;
        } else {
            R = a[4];
        }
        const E = o("useWAWebMsgValues").useMsgValues(callLogMsg.id, R);
        const k = E[0];
        const I = E[1];
        const T = E[2];
        const D = E[3];
        const x = E[4];
        let $;
        if (a[5] !== T) {
            $ = function() {
                if (T != null) {
                    return o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(T);
                }
                return null;
            };
            a[5] = T;
            a[6] = $;
        } else {
            $ = a[6];
        }
        r("useWAWebEventTargetValue")(o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection, "all", $);
        let P;
        if (a[7] === Symbol.for("react.memo_cache_sentinel")) {
            P = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL);
            a[7] = P;
        } else {
            P = a[7];
        }
        const N = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), P, g);
        let M;
        if (a[8] === Symbol.for("react.memo_cache_sentinel")) {
            M = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE);
            a[8] = M;
        } else {
            M = a[8];
        }
        let w;
        let A;
        if (a[9] !== N) {
            w = function() {
                return N?.getState();
            };
            A = [
                N
            ];
            a[9] = N;
            a[10] = w;
            a[11] = A;
        } else {
            w = a[10];
            A = a[11];
        }
        const F = r("useWAWebEventTargetValue")(N, M, w, A);
        const O = r("useWAWebCallSurfaceState")(callLogMsg);
        const B = O.isInPopout || O.isInDocPip;
        const W = I === true;
        const q = I !== true;
        let U;
        if (a[12] !== q || a[13] !== W) {
            U = {
                currentBannerJid: null,
                isDocPip: false,
                isMuted: false,
                isVideoCall: W,
                isVideoMuted: q,
                popoutWindowEl: null
            };
            a[12] = q;
            a[13] = W;
            a[14] = U;
        } else {
            U = a[14];
        }
        const V = r("useWAWebVoipCallHandlers")(U);
        const V_handleClickAccept = V.handleClickAccept;
        const G = o("useWAWebMsgValues").useMsgValues(callLogMsg.id, [
            o("WAWebMsgGetters").getSelfOtherDeviceConnected
        ])[0] ?? false;
        let z;
        if (a[15] !== N || a[16] !== F || a[17] !== T) {
            z = function() {
                if (N == null || T == null) {
                    return false;
                }
                return N.id === T && o("WAWebVoipCallStateUtils").isCallConnected(F);
            };
            a[15] = N;
            a[16] = F;
            a[17] = T;
            a[18] = z;
        } else {
            z = a[18];
        }
        const j = z;
        let K;
        if (a[19] !== N || a[20] !== T) {
            K = function() {
                if (N == null || T == null) {
                    return false;
                }
                return N.id !== T;
            };
            a[19] = N;
            a[20] = T;
            a[21] = K;
        } else {
            K = a[21];
        }
        const Q = K;
        let X;
        if (a[22] !== j || a[23] !== G) {
            X = function() {
                if (j()) {
                    return false;
                }
                return G;
            };
            a[22] = j;
            a[23] = G;
            a[24] = X;
        } else {
            X = a[24];
        }
        const Y = X;
        let J;
        if (a[25] !== j || a[26] !== G) {
            J = function() {
                const e = o("WAWebCallLogUtils").getJoinButtonTextType(j(), G, o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled());
                switch(e){
                    case "return":
                        return s._("Return");
                    case "join_here":
                        return s._("Join here");
                    case "join":
                        return s._("Join");
                    default:
                        return (()=>{
                            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                        })();
                }
            };
            a[25] = j;
            a[26] = G;
            a[27] = J;
        } else {
            J = a[27];
        }
        const Z = J;
        let ee;
        e: {
            if (x == null) {
                let te;
                if (a[28] === Symbol.for("react.memo_cache_sentinel")) {
                    te = [];
                    a[28] = te;
                } else {
                    te = a[28];
                }
                ee = te;
                break e;
            }
            let ne;
            if (a[29] !== x) {
                const re = x.filter(f).map(_);
                ne = o("WAWebCallLogUtils").sortParticipantWidsByPriority(re);
                a[29] = x;
                a[30] = ne;
            } else {
                ne = a[30];
            }
            ee = ne;
        }
        const idsOrUrls = ee;
        if (T == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: CallLogJoinOngoingCell: CallId is null"
            ]))).sendLogs("voip-call-log-join-ongoing-cell-call-id-null");
            return null;
        }
        let ae;
        if (a[31] !== I) {
            ae = s._("_j{\"VOICE\":\"Ongoing voice call\",\"VIDEO\":\"Ongoing video call\"}", [
                s._enum(I ? "VIDEO" : "VOICE", {
                    VOICE: "voice",
                    VIDEO: "video"
                })
            ]);
            a[31] = I;
            a[32] = ae;
        } else {
            ae = a[32];
        }
        let ie;
        if (a[33] !== T || a[34] !== S?.id || a[35] !== idsOrUrls) {
            ie = idsOrUrls.length > 0 && c.jsx(r("WAWebFacePile.react"), {
                idsOrUrls,
                chatWid: S?.id,
                faceSize: 20,
                keyName: `call-${T}`,
                borderColor: m.facePileBorderColor,
                maxVisible: 5,
                overflowThreshold: 8
            });
            a[33] = T;
            a[34] = S?.id;
            a[35] = idsOrUrls;
            a[36] = ie;
        } else {
            ie = a[36];
        }
        let le;
        if (a[37] !== ae || a[38] !== ie) {
            const Component = o("WAWebFlex.react").FlexColumn;
            le = <Component rowGap={4}>{ae}{ie}</Component>;
            a[37] = ae;
            a[38] = ie;
            a[39] = le;
        } else {
            le = a[39];
        }
        const se = le;
        let ue;
        if (a[40] !== j) {
            ue = j();
            a[40] = j;
            a[41] = ue;
        } else {
            ue = a[41];
        }
        const ce = ue;
        let de;
        if (a[42] === Symbol.for("react.memo_cache_sentinel")) {
            de = o("WAWebVoipGatingUtils").isWebCallingUiEnabled();
            a[42] = de;
        } else {
            de = a[42];
        }
        const me = de;
        const buttonDisabled = Q() || me && ce && !B;
        let _e;
        if (a[43] !== N?.id || a[44] !== F || a[45] !== T || a[46] !== callLogMsg || a[47] !== S || a[48] !== ce || a[49] !== V_handleClickAccept || a[50] !== D || a[51] !== Y || a[52] !== I) {
            _e = function() {
                if (me && N?.id === T && o("WAWebVoipCallStateUtils").isCallIncoming(F)) {
                    V_handleClickAccept();
                    return;
                }
                if (me && ce) {
                    window.focus();
                    o("WAWebVoipUiManager").closeVoipUiPopoutWindow({
                        callEnded: false
                    });
                } else if (me && N?.id === T && F != null && !o("WAWebVoipCallStateUtils").isCallTerminal(F)) {
                    r("WAWebPipController").openVoipUiPiP(callLogMsg);
                } else {
                    o("WAWebVoipStartCall").joinOngoingWAWebVoipGroupCallPN({
                        callId: T,
                        chat: S,
                        isDeviceSwitch: o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() && Y(),
                        isVideo: I,
                        joinAndAccept: me,
                        lobbyEntryPoint: D != null && D ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LINK_CALL_LOG : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LOG
                    });
                }
            };
            a[43] = N?.id;
            a[44] = F;
            a[45] = T;
            a[46] = callLogMsg;
            a[47] = S;
            a[48] = ce;
            a[49] = V_handleClickAccept;
            a[50] = D;
            a[51] = Y;
            a[52] = I;
            a[53] = _e;
        } else {
            _e = a[53];
        }
        const fe = _e;
        const ge = !O.isAnySurfaceOpen && !buttonDisabled;
        let he;
        if (a[54] !== N?.id || a[55] !== F || a[56] !== fe || a[57] !== T || a[58] !== callLogMsg || a[59] !== onClick) {
            he = function() {
                onClick();
                const e = me && N?.id === T && (o("WAWebVoipCallStateUtils").isCallIncoming(F) || o("WAWebVoipCallStateUtils").isCallConnected(F));
                if (e) {
                    r("WAWebPipController").openVoipUiPiP(callLogMsg);
                } else {
                    fe();
                }
            };
            a[54] = N?.id;
            a[55] = F;
            a[56] = fe;
            a[57] = T;
            a[58] = callLogMsg;
            a[59] = onClick;
            a[60] = he;
        } else {
            he = a[60];
        }
        const ye = he;
        let Ce;
        if (a[61] !== ye || a[62] !== ge) {
            Ce = function({ target }) {
                if (!(target instanceof HTMLElement && target.closest("button") != null)) {
                    if (ge) {
                        ye();
                    }
                }
            };
            a[61] = ye;
            a[62] = ge;
            a[63] = Ce;
        } else {
            Ce = a[63];
        }
        const be = Ce;
        let ve;
        if (a[64] !== be) {
            ve = {
                enter: be,
                space: be
            };
            a[64] = be;
            a[65] = ve;
        } else {
            ve = a[65];
        }
        const Se = I === true;
        let Re;
        if (a[66] !== Z) {
            Re = Z();
            a[66] = Z;
            a[67] = Re;
        } else {
            Re = a[67];
        }
        const Le = ge ? ye : null;
        const Ee = `calls-tab-join-ongoing-cell-${k.id}`;
        let ke;
        if (a[68] !== fe || a[69] !== callLogMsg || a[70] !== C || a[71] !== buttonDisabled || a[72] !== se || a[73] !== Se || a[74] !== Re || a[75] !== Le || a[76] !== Ee) {
            const Component = r("WAWebCallsTabCallCell.react");
            ke = <Component callLogMsg={callLogMsg} isVideoCall={Se} secondary={se} buttonLabel={Re} buttonDisabled={buttonDisabled} onButtonPress={fe} onCardClick={Le} active={C} testid={Ee}/>;
            a[68] = fe;
            a[69] = callLogMsg;
            a[70] = C;
            a[71] = buttonDisabled;
            a[72] = se;
            a[73] = Se;
            a[74] = Re;
            a[75] = Le;
            a[76] = Ee;
            a[77] = ke;
        } else {
            ke = a[77];
        }
        let Ie;
        if (a[78] !== y || a[79] !== ve || a[80] !== ke) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            Ie = <Component handlers={ve} onFocus={b} ref={y}>{ke}</Component>;
            a[78] = y;
            a[79] = ve;
            a[80] = ke;
            a[81] = Ie;
        } else {
            Ie = a[81];
        }
        return Ie;
    }
    function _(e) {
        return e.participant;
    }
    function f(e) {
        return e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
    }
    function g() {
        return r("WAWebCallCollection").activeCall;
    }
    function h(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    l.default = p;
}, 226);