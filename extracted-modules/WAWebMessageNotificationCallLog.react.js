__d("WAWebMessageNotificationCallLog.react", [
    "fbt",
    "WAWebCallCollection",
    "WAWebCallLogIcon.react",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebChatThemeGatingUtils",
    "WAWebChatThemeModeContext",
    "WAWebClock",
    "WAWebDesktopUpsellCallingMissedCall.react",
    "WAWebDesktopUpsellCallingUnavailablePopover.react",
    "WAWebDesktopUpsellPlatformAwareHooks",
    "WAWebDesktopUpsellUtils",
    "WAWebDisplayType",
    "WAWebDropdownV2.react",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessageAuthor.react",
    "WAWebMessageMeta.react",
    "WAWebMsgGetters",
    "WAWebPopover.react",
    "WAWebUnstyledButton.react",
    "WAWebUserPrefsMeUser",
    "WAWebVoipGatingUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipWaCallEnums",
    "WDSPaddings.stylex",
    "WDSText.react",
    "countWhere",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useContext, useImperativeHandle, useRef } = d;
    function f({ isAdHocGroupCall, isMissedCall, isOngoing, isSilenced, isVideoCall }) {
        if (isSilenced) {
            return s._("Silenced unknown caller");
        }
        if (isMissedCall && !isOngoing) {
            if (isAdHocGroupCall) {
                return s._("Missed group call");
            }
            if (isVideoCall) {
                return s._("Missed video call");
            }
            return s._("Missed voice call");
        }
        if (isAdHocGroupCall) {
            return s._("Group call");
        }
        if (isVideoCall) {
            return s._("Video call");
        }
        return s._("Voice call");
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g({ callId, callOutcome, callParticipants, duration, finalCallOutcome, isAdHocGroupCall, isGroupCall, isOngoingCall, isSentByMe, selfOtherDeviceConnected, shouldShowDesktopUpsell, userDesktopOs }) {
        const g = ()=>{
            if (!o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() || selfOtherDeviceConnected !== true) {
                return false;
            }
            const activeCall = r("WAWebCallCollection").activeCall;
            return !(activeCall != null && activeCall.id === callId);
        };
        if (o("WAWebVoipGatingUtils").isCallingEnabled() && !shouldShowDesktopUpsell) {
            const y = o("WAWebClock").Clock.callDurationStrSimple(duration ?? 0);
            const C = callParticipants != null ? r("countWhere")(callParticipants, function(e) {
                return e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
            }) : 0;
            const b = callParticipants?.some(function(e) {
                return e.participant.isLid();
            }) ?? false;
            const v = b ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            const S = callParticipants != null ? r("countWhere")(callParticipants, function(e) {
                let t;
                return !((t = e.participant) != null && t.equals(v));
            }) : 0;
            if (isOngoingCall && callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere || callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing) {
                if (isGroupCall) {
                    if (isAdHocGroupCall) {
                        if (g()) {
                            return s._("_j{\"*\":\"{invited-count} invited \\u2022 Click to join here\",\"_1\":\"1 invited \\u2022 Click to join here\"}", [
                                s._plural(S, "invited-count")
                            ]);
                        }
                        return s._("_j{\"*\":\"{invited-count} invited \\u2022 Click to return\",\"_1\":\"1 invited \\u2022 Click to return\"}", [
                            s._plural(S, "invited-count")
                        ]);
                    }
                    if (g()) {
                        return s._("{joined-count} joined • Click to join here", [
                            s._param("joined-count", C)
                        ]);
                    }
                    return s._("{joined-count} joined • Click to return", [
                        s._param("joined-count", C)
                    ]);
                }
                if (finalCallOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Completed) {
                    return s._("Call ended");
                }
                if (C > 1) {
                    if (g()) {
                        return s._("In call • Click to join here");
                    }
                    return s._("In call • Click to return");
                }
                return s._("Ringing");
            }
            if ((callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Missed || callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Rejected || callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Canceled) && isSentByMe && !isGroupCall) {
                return s._("No answer");
            }
            if (callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere) {
                return s._("Accepted on another device");
            }
            if (callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Failed) {
                return s._("Call failed");
            }
            if (isAdHocGroupCall) {
                return s._("_j{\"*\":\"{invited-count} invited\",\"_1\":\"1 invited\"}", [
                    s._plural(S, "invited-count")
                ]);
            }
            if (callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Missed && isGroupCall) {
                return s._("{time} • {joined-count} joined", [
                    s._param("time", y),
                    s._param("joined-count", C)
                ]);
            }
            if (callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Completed) {
                if (isGroupCall) {
                    return s._("{time} • {joined-count} joined", [
                        s._param("time", y),
                        s._param("joined-count", C)
                    ]);
                }
                return s._("{time}", [
                    s._param("time", y)
                ]);
            }
            return s._("Click to call back");
        } else if (shouldShowDesktopUpsell === true && userDesktopOs) {
            switch(userDesktopOs){
                case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
                    if (isSentByMe) {
                        if (isGroupCall) {
                            return s._("Make group calls with the Mac app");
                        }
                        return s._("Make calls with the Mac app");
                    }
                    if (isGroupCall) {
                        return s._("Return group calls with the Mac app");
                    }
                    return s._("Return calls with the Mac app");
                case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
                    if (isSentByMe) {
                        if (isGroupCall) {
                            return s._("Make group calls with the Windows app");
                        }
                        return s._("Make calls with the Windows app");
                    }
                    if (isGroupCall) {
                        return s._("Return group calls with the Windows app");
                    }
                    return s._("Return calls with the Windows app");
            }
        }
        return s._("Return calls on your phone");
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    const h = {
        innerBubble: {
            height: "xr931m4",
            borderStartStartRadius: "x1liijdw",
            borderStartEndRadius: "xu342n7",
            borderEndEndRadius: "xelbjmh",
            borderEndStartRadius: "x16pgt24",
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        roundIconContainer: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            width: "x14qfxbe",
            height: "xc9qbxq",
            backgroundColor: "x1ew7x2d",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        roundIconContainerOnVibrantBubble: {
            backgroundColor: "xvcodip",
            $$css: true
        },
        titleText: {
            fontSize: "x1jchvi3",
            $$css: true
        }
    };
    function y(t) {
        const n = o("react-compiler-runtime").c(42);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const a_msg = a.msg;
        let d;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            let y;
            d = [
                (y = o("WAWebMsgGetters")).getIsVideoCall,
                y.getIsMissedCall,
                y.getIsSentByMe,
                y.getCallOutcome,
                y.getIsCallLink,
                y.getIsGroupCall,
                y.getIsAdHocGroupCall,
                y.getCallParticipants,
                y.getFinalCallOutcome,
                o("WAWebFrontendMsgGetters").getSenderObj,
                y.getCallDuration,
                y.getIsCallSilenced,
                y.getCallId,
                y.getSelfOtherDeviceConnected
            ];
            n[3] = d;
        } else {
            d = n[3];
        }
        const C = o("useWAWebMsgValues").useMsgValues(a.msg.id, d);
        const isVideoCall = C[0];
        const v = C[1];
        const S = C[2];
        const callOutcome = C[3];
        const L = C[4];
        const E = C[5];
        const isAdHocGroupCall = C[6];
        const callParticipants = C[7];
        const finalCallOutcome = C[8];
        const D = C[9];
        const duration = C[10];
        const isSilenced = C[11];
        const callId = C[12];
        const selfOtherDeviceConnected = C[13];
        const M = useContext(r("WAWebChatThemeModeContext"));
        const M_isVibrant = M.isVibrant;
        let A;
        if (n[4] !== S || n[5] !== M_isVibrant) {
            A = o("WAWebChatThemeGatingUtils").shouldApplyVibrantOverride({
                isVibrant: M_isVibrant,
                isSentByMe: S,
                isNotification: false
            });
            n[4] = S;
            n[5] = M_isVibrant;
            n[6] = A;
        } else {
            A = n[6];
        }
        const F = A;
        const ORef = useRef(null);
        let B;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            B = function() {
                ORef.current?.click();
            };
            n[7] = B;
        } else {
            B = n[7];
        }
        const handleKeyActivation = B;
        let q;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            q = function() {
                return {
                    handleKeyActivation
                };
            };
            n[8] = q;
        } else {
            q = n[8];
        }
        useImperativeHandle(i, q);
        const userDesktopOs = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
        const V = o("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformCheck();
        const H = o("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformAwareOsVersionCheck();
        let G;
        if (n[9] !== V || n[10] !== H || n[11] !== E) {
            G = !o("WAWebVoipGatingUtils").isCallingEnabled() && (V || H && E);
            n[9] = V;
            n[10] = H;
            n[11] = E;
            n[12] = G;
        } else {
            G = n[12];
        }
        const shouldShowDesktopUpsell = G;
        const j = o("WAWebCallLogUtils").getIsSelfConnected(callParticipants);
        const K = o("WAWebCallLogUtils").getIsMissedCallOrNotConnected(v, j, S, callOutcome, finalCallOutcome);
        let Q;
        if (n[13] !== callId) {
            Q = function() {
                if (callId != null) {
                    return o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(callId);
                }
                return null;
            };
            n[13] = callId;
            n[14] = Q;
        } else {
            Q = n[14];
        }
        const X = r("useWAWebEventTargetValue")(o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection, "all", Q);
        const Y = X != null || callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing && finalCallOutcome !== o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
        const J = f({
            isAdHocGroupCall,
            isMissedCall: K,
            isOngoing: Y,
            isSilenced,
            isVideoCall
        });
        let Z = J;
        if (shouldShowDesktopUpsell) {
            if (isAdHocGroupCall) {
                let ee;
                if (n[15] === Symbol.for("react.memo_cache_sentinel")) {
                    ee = s._("Group call");
                    n[15] = ee;
                } else {
                    ee = n[15];
                }
                Z = ee;
            } else if (isVideoCall) {
                let te;
                if (n[16] === Symbol.for("react.memo_cache_sentinel")) {
                    te = s._("Video call");
                    n[16] = te;
                } else {
                    te = n[16];
                }
                Z = te;
            } else {
                let ne;
                if (n[17] === Symbol.for("react.memo_cache_sentinel")) {
                    ne = s._("Voice call");
                    n[17] = ne;
                } else {
                    ne = n[17];
                }
                Z = ne;
            }
        }
        let re;
        if (n[18] === Symbol.for("react.memo_cache_sentinel")) {
            re = ({
                0: {
                    className: "x10l6tqk x1n327nk x12zx8bi x1inkcgm"
                },
                1: {
                    className: "x10l6tqk x1n327nk x12zx8bi x1inkcgm xtrg13t"
                }
            })[!!r("WAWebL10N").isRTL() << 0];
            n[18] = re;
        } else {
            re = n[18];
        }
        let oe;
        if (n[19] !== a_msg.id) {
            oe = <div {...babelHelpers.extends({}, re, {
                children: c.jsx(o("WAWebMessageMeta.react").Meta, {
                    msgKey: a_msg.id
                })
            })}/>;
            n[19] = a_msg.id;
            n[20] = oe;
        } else {
            oe = n[20];
        }
        const ae = oe;
        const ie = g({
            callId,
            callOutcome,
            callParticipants,
            duration,
            finalCallOutcome,
            isAdHocGroupCall,
            isGroupCall: E,
            isOngoingCall: Y,
            isSentByMe: S,
            selfOtherDeviceConnected,
            shouldShowDesktopUpsell,
            userDesktopOs
        });
        let le;
        if (n[21] !== a_msg.id || n[22] !== a.displayAuthor || n[23] !== D) {
            le = a.displayAuthor === true && D != null ? <div className="x1sbwfh8 x1yc453h">{c.jsx(r("WAWebMessageAuthor.react"), {
                msgKey: a_msg.id,
                contact: D,
                displayType: o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
                stopClickPropagation: true
            })}</div> : null;
            n[21] = a_msg.id;
            n[22] = a.displayAuthor;
            n[23] = D;
            n[24] = le;
        } else {
            le = n[24];
        }
        const se = le;
        let ue;
        if (n[25] === Symbol.for("react.memo_cache_sentinel")) {
            ue = {
                className: "x9f619 x87ps6o x3orp4s xfssnsy x123j3cw xaso8d8 x1gabggj"
            };
            n[25] = ue;
        } else {
            ue = n[25];
        }
        let ce;
        if (n[26] === Symbol.for("react.memo_cache_sentinel")) {
            ce = [
                h.innerBubble,
                o("WDSPaddings.stylex").wdsPaddings.paddingHor12
            ];
            n[26] = ce;
        } else {
            ce = n[26];
        }
        const de = F && h.roundIconContainerOnVibrantBubble;
        let me;
        if (n[27] !== de) {
            me = [
                h.roundIconContainer,
                de
            ];
            n[27] = de;
            n[28] = me;
        } else {
            me = n[28];
        }
        const isCallLink = L ?? false;
        let _e;
        if (n[29] !== K || n[30] !== Y || n[31] !== S || n[32] !== isVideoCall || n[33] !== isCallLink) {
            _e = c.jsx(o("WAWebCallLogIcon.react").CallLogIcon, {
                iconHeight: 22,
                isMissedCall: K,
                isVideoCall,
                isFromMe: S,
                isCallLink,
                isOngoingCall: Y
            });
            n[29] = K;
            n[30] = Y;
            n[31] = S;
            n[32] = isVideoCall;
            n[33] = isCallLink;
            n[34] = _e;
        } else {
            _e = n[34];
        }
        let fe;
        if (n[35] !== me || n[36] !== _e) {
            const Component = o("WAWebFlex.react").FlexItem;
            fe = <Component xstyle={me} padding={2} testid="call-log-icon-chip">{_e}</Component>;
            n[35] = me;
            n[36] = _e;
            n[37] = fe;
        } else {
            fe = n[37];
        }
        let ge;
        if (n[38] !== Z) {
            const Component = o("WAWebFlex.react").FlexItem;
            ge = <Component xstyle={h.titleText}>{Z}</Component>;
            n[38] = Z;
            n[39] = ge;
        } else {
            ge = n[39];
        }
        const Component = r("WDSText.react");
        const Component_1 = o("WAWebFlex.react").FlexColumn;
        const Component_2 = o("WAWebFlex.react").FlexRow;
        const he = <div {...babelHelpers.extends({
            "data-testid": "call-log-system-message"
        }, ue, {
            children: [
                se,
                <Component_2 xstyle={ce} align="center">{fe}<Component_1 xstyle={o("WDSPaddings.stylex").wdsPaddings.paddingStart12} justify="evenly" rowGap={4}>{ge}<Component type="Body2" colorName="contentDeemphasized">{ie}</Component></Component_1></Component_2>,
                ae
            ]
        })}/>;
        if (shouldShowDesktopUpsell === true) {
            const ye = S ? c.jsx(r("WAWebDesktopUpsellCallingUnavailablePopover.react"), {
                userDesktopOs: r("nullthrows")(userDesktopOs),
                isGroupCall: E
            }) : c.jsx(r("WAWebDesktopUpsellCallingMissedCall.react"), {
                userDesktopOs: r("nullthrows")(userDesktopOs),
                isGroupCall: E,
                isMissedCall: v
            });
            let Ce;
            if (n[40] !== ye) {
                const Component = o("WAWebDropdownV2.react").DropdownV2;
                Ce = <Component target={ORef} alignment={o("WAWebPopover.react").PopoverAlignment.Center} position={o("WAWebPopover.react").PopoverPosition.Top} buffer={12}>{ye}</Component>;
                n[40] = ye;
                n[41] = Ce;
            } else {
                Ce = n[41];
            }
            const Component = r("WAWebUnstyledButton.react");
            return <Component ref={ORef}>{Ce}{he}</Component>;
        }
        return he;
    }
    l.default = y;
}, 226);