__d("WAWebFloatingVoipRenderer.react", [
    "WAWebCallCollection",
    "WAWebContactCollection",
    "WAWebElevatedPushNamesFlag",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebModalFitViewportContext",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebPipFloatingVideoPlayer.react",
    "WAWebThemeContext",
    "WAWebVelocityAnimate",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallStateUtils",
    "WAWebVoipEventConstants",
    "WAWebVoipFullScreenContext",
    "WAWebVoipGatingUtils",
    "WAWebVoipGridLayoutCalculator",
    "WAWebVoipGridPageSizeContext",
    "WAWebVoipLobbyHeightUtils",
    "WAWebVoipLobbyUtils",
    "WAWebVoipMobileCallLayoutContext",
    "WAWebVoipPopoutModalManagerWrapper.react",
    "WAWebVoipUiLoadable",
    "WAWebVoipUiPopoutWindowContext",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebVoipVideoStateUtils",
    "WAWebVoipWaCallEnums",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebEventTargetValue",
    "useWAWebListener",
    "useWAWebVoipMobileCallLayout",
    "useWAWebVoipViewportMobileLayout"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useEffect, useMemo, useRef, useState } = u;
    const f = {
        moveResizeContainer: {
            pointerEvents: "x47corl",
            $$css: true
        },
        voipBorderRadius: {
            borderStartStartRadius: "x1g83kfv",
            borderStartEndRadius: "x3qq2k7",
            borderEndEndRadius: "x2x8art",
            borderEndStartRadius: "x1qor8vf",
            $$css: true
        },
        voipBorder: {
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "xnj1f2r",
            borderInlineEndColor: "x2uibgs",
            borderBottomColor: "xkveyfu",
            borderInlineStartColor: "x12llq9",
            $$css: true
        }
    };
    const g = {
        isContextInPopoutWindow: true,
        popoverPortalEl: null,
        documentEl: document,
        windowEl: window,
        isDocPip: false
    };
    const h = 640;
    const y = h / (h * (3 / 4) + 60);
    const C = 48;
    const b = 16;
    const v = 4 / 3;
    const S = {
        MIN_VOICE_CALL_WIDTH: 400,
        MIN_VOICE_CALL_HEIGHT: 120,
        MIN_VIDEO_CALL_WIDTH: 400,
        MIN_VIDEO_CALL_HEIGHT: 400,
        MIN_SURVEY_HEIGHT: 320,
        MIN_MOVE_CALL_HERE_HEIGHT: 120,
        PUSH_NAME_LINE_EXTRA_HEIGHT: 20,
        MIN_CALL_LINK_VIDEO_PREVIEW_HEIGHT: 400,
        MIN_CALL_LINK_AUDIO_PREVIEW_HEIGHT: 120,
        INITIAL_VOICE_CALL_WIDTH: 500,
        INITIAL_VIDEO_CALL_WIDTH: 500,
        SHARE_PANEL_WIDTH: 280,
        LOBBY_SELF_PREVIEW_WIDTH: 500,
        MIN_VIDEO_CALL_LOBBY_HEIGHT: 452,
        MIN_VOICE_CALL_LOBBY_HEIGHT: 174,
        MIN_GROUP_AUDIO_CALL_HEIGHT: 180
    };
    const R = 250;
    const L = 0.8;
    function EComponent(e) {
        const n = o("react-compiler-runtime").c(149);
        const { ref, animationStartStyle, isMobileLayoutAllowed, msg } = e;
        const c = isMobileLayoutAllowed === undefined ? false : isMobileLayoutAllowed;
        const m = msg?.isVideoCall ?? false;
        const b = B(c);
        const E = o("WAWebThemeContext").useIsDarkTheme();
        const qRef = useRef(null);
        const U = r("useMergeRefs")(ref, qRef);
        const VRef = useRef(null);
        const HRef = useRef(null);
        const GRef = useRef(null);
        const zRef = useRef(null);
        let j;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            j = function(t) {
                if (zRef.current == null) {
                    zRef.current = t;
                }
            };
            n[0] = j;
        } else {
            j = n[0];
        }
        const onInitialWidthCalculated = j;
        const QRef = useRef(false);
        const XRef = useRef(false);
        const Y = useState(null);
        const externalResize = Y[0];
        const Z = Y[1];
        const ee = useState(null);
        const te = ee[0];
        const ne = ee[1];
        let re;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            re = function(t) {
                ne(t);
            };
            n[1] = re;
        } else {
            re = n[1];
        }
        const oe = re;
        const ae = useState(false);
        const isFullScreen = ae[0];
        const le = ae[1];
        let se;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            se = function() {
                le(true);
            };
            n[2] = se;
        } else {
            se = n[2];
        }
        const enterFullScreen = se;
        let ce;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            ce = function() {
                le(false);
            };
            n[3] = ce;
        } else {
            ce = n[3];
        }
        const exitFullScreen = ce;
        const me = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:isVideo", O);
        const pe = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:state", F);
        let _e;
        if (n[4] !== pe) {
            _e = o("WAWebVoipCallStateUtils").isCallIncoming(pe);
            n[4] = pe;
            n[5] = _e;
        } else {
            _e = n[5];
        }
        const fe = _e;
        let ge;
        if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
            ge = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.SHOULD_SHOW_POST_CALL_SURVEY);
            n[6] = ge;
        } else {
            ge = n[6];
        }
        const he = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), ge, A);
        let ye;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            ye = function() {
                VRef.current?.cancelDefaultHeightEnforcement();
                VRef.current?.markExternalResizeInProgress(true);
                return o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow();
            };
            n[7] = ye;
        } else {
            ye = n[7];
        }
        const Ce = r("useWAWebEventTargetValue")(o("WAWebVoipUiPopoutWindowPortalContainer.react").WAWebVoipUiPopoutWindowEventEmitter, "setPopoutWindowProps", ye);
        const be = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:videoState", w);
        const ve = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "participantVideoStateChange change:videoState change:selfVideoState", M);
        let Se;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            Se = [
                "change:callLinkState",
                "change:state"
            ];
            n[8] = Se;
        } else {
            Se = n[8];
        }
        const Re = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, Se, N);
        const Le = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), "change:pendingCallLink", P);
        let Ee;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            Ee = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.PENDING_OUTGOING_CALL);
            n[9] = Ee;
        } else {
            Ee = n[9];
        }
        const ke = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), Ee, $);
        let Ie;
        let Te;
        if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
            Ie = [
                "change:state",
                "change:callLinkState",
                "change:waitingRoomState",
                "change:isInWaitingRoom"
            ];
            Te = function() {
                const activeCall = r("WAWebCallCollection").activeCall;
                const t = activeCall != null && activeCall.isCallLink && (activeCall.getState() === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely || o("WAWebVoipGatingUtils").isSmoothCallLinkLobbyEnabled() && !r("WAWebEnvironment").isGuest && activeCall.isConnectingToCallLinkLobbyOutsideWaitingRoom());
                if (t) {
                    VRef.current?.cancelDefaultHeightEnforcement();
                    VRef.current?.markExternalResizeInProgress(true);
                }
                return t;
            };
            n[10] = Ie;
            n[11] = Te;
        } else {
            Ie = n[10];
            Te = n[11];
        }
        const De = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, Ie, Te);
        let xe;
        if (n[12] !== pe) {
            xe = o("WAWebVoipCallStateUtils").isCallActive(pe);
            n[12] = pe;
            n[13] = xe;
        } else {
            xe = n[13];
        }
        const $e = xe;
        const Pe = De && !$e && !Ce;
        let Ne;
        if (n[14] !== Ce || n[15] !== De) {
            Ne = o("WAWebVoipGatingUtils").isSmoothCallLinkLobbyEnabled() && De && !Ce;
            n[14] = Ce;
            n[15] = De;
            n[16] = Ne;
        } else {
            Ne = n[16];
        }
        const Me = Ne;
        const we = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, "change:isGroup", x);
        let Ae;
        if (n[17] === Symbol.for("react.memo_cache_sentinel")) {
            Ae = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES);
            n[17] = Ae;
        } else {
            Ae = n[17];
        }
        const Fe = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, Ae, D);
        let Oe;
        if (n[18] === Symbol.for("react.memo_cache_sentinel")) {
            Oe = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_JID);
            n[18] = Oe;
        } else {
            Oe = n[18];
        }
        const Be = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, Oe, T);
        const We = Be ? S.PUSH_NAME_LINE_EXTRA_HEIGHT : 0;
        let qe;
        if (n[19] !== pe || n[20] !== we) {
            qe = o("WAWebVoipLobbyUtils").isLobbyApplicableForCallState(we, pe);
            n[19] = pe;
            n[20] = we;
            n[21] = qe;
        } else {
            qe = n[21];
        }
        const Ue = qe;
        const Ve = me || m || ve;
        const He = Ve && we && Fe > 2 && !Ce && !Ue && !Re && !he;
        const Ge = be && !Ce && !Ue && !De && !He;
        let ze;
        if (n[22] !== Ge) {
            ze = Ge ? W(v, h) : y;
            n[22] = Ge;
            n[23] = ze;
        } else {
            ze = n[23];
        }
        const je = ze;
        let minHeightOverride;
        if (n[24] !== Fe || n[25] !== Ce || n[26] !== Re || n[27] !== Ue || n[28] !== Le || n[29] !== ke || n[30] !== We || n[31] !== he || n[32] !== Pe || n[33] !== Ve || n[34] !== He || n[35] !== Me) {
            if (he) {
                minHeightOverride = S.MIN_SURVEY_HEIGHT;
            } else if (Ce) {
                minHeightOverride = S.MIN_MOVE_CALL_HERE_HEIGHT + We;
            } else if (Me) {
                minHeightOverride = S.MIN_VIDEO_CALL_HEIGHT;
            } else if (Re) {
                minHeightOverride = Ve ? S.MIN_CALL_LINK_VIDEO_PREVIEW_HEIGHT : S.MIN_CALL_LINK_AUDIO_PREVIEW_HEIGHT;
            } else if (Le != null) {
                minHeightOverride = Le.isVideo ? S.MIN_CALL_LINK_VIDEO_PREVIEW_HEIGHT : S.MIN_CALL_LINK_AUDIO_PREVIEW_HEIGHT;
            } else if (ke != null) {
                minHeightOverride = ke.isVideo ? S.MIN_VIDEO_CALL_HEIGHT : S.MIN_VOICE_CALL_HEIGHT;
            } else if (Ue) {
                minHeightOverride = Ve ? S.MIN_VIDEO_CALL_LOBBY_HEIGHT : S.MIN_VOICE_CALL_LOBBY_HEIGHT;
            } else if (Pe) {
                minHeightOverride = S.MIN_VIDEO_CALL_HEIGHT;
            } else if (He) {
                minHeightOverride = S.MIN_GROUP_AUDIO_CALL_HEIGHT;
            } else if (Ve) {
                minHeightOverride = S.MIN_VIDEO_CALL_HEIGHT;
            } else if (Fe > 2) {
                minHeightOverride = S.MIN_GROUP_AUDIO_CALL_HEIGHT;
            } else {
                minHeightOverride = S.MIN_VOICE_CALL_HEIGHT + We;
            }
            n[24] = Fe;
            n[25] = Ce;
            n[26] = Re;
            n[27] = Ue;
            n[28] = Le;
            n[29] = ke;
            n[30] = We;
            n[31] = he;
            n[32] = Pe;
            n[33] = Ve;
            n[34] = He;
            n[35] = Me;
            n[36] = minHeightOverride;
        } else {
            minHeightOverride = n[36];
        }
        let minWidthOverride;
        if (n[37] !== Ue || n[38] !== Pe || n[39] !== Ve || n[40] !== Me) {
            if (Me) {
                minWidthOverride = S.LOBBY_SELF_PREVIEW_WIDTH + S.SHARE_PANEL_WIDTH;
            } else if (Ue) {
                minWidthOverride = S.MIN_VIDEO_CALL_WIDTH;
            } else if (Pe) {
                minWidthOverride = S.LOBBY_SELF_PREVIEW_WIDTH + S.SHARE_PANEL_WIDTH;
            } else if (Ve) {
                minWidthOverride = S.MIN_VIDEO_CALL_WIDTH;
            } else {
                minWidthOverride = S.MIN_VOICE_CALL_WIDTH;
            }
            n[37] = Ue;
            n[38] = Pe;
            n[39] = Ve;
            n[40] = Me;
            n[41] = minWidthOverride;
        } else {
            minWidthOverride = n[41];
        }
        let Xe;
        if (Me || Pe) {
            Xe = S.LOBBY_SELF_PREVIEW_WIDTH + S.SHARE_PANEL_WIDTH;
        } else if (Ve) {
            Xe = S.INITIAL_VIDEO_CALL_WIDTH;
        } else {
            Xe = S.INITIAL_VOICE_CALL_WIDTH;
        }
        let Ye;
        if (n[42] !== Xe) {
            Ye = {
                width: Xe
            };
            n[42] = Xe;
            n[43] = Ye;
        } else {
            Ye = n[43];
        }
        const initialPiPStyle = Ye;
        let Ze;
        if (n[44] === Symbol.for("react.memo_cache_sentinel")) {
            Ze = function(width, n, r) {
                const qRef_current = qRef.current;
                if (qRef_current) {
                    const o = qRef_current.offsetHeight;
                    GRef.current = {
                        width,
                        height: o
                    };
                }
            };
            n[44] = Ze;
        } else {
            Ze = n[44];
        }
        const et = Ze;
        const tt = I;
        const onMoveEnd = k;
        let rt;
        if (n[45] !== Ce || n[46] !== $e || n[47] !== De || n[48] !== minHeightOverride || n[49] !== minWidthOverride || n[50] !== We) {
            rt = function() {
                const QRef_current = QRef.current;
                QRef.current = Ce;
                if (Ce && !QRef_current) {
                    if (qRef.current) {
                        HRef.current = {
                            width: qRef.current.offsetWidth,
                            height: qRef.current.offsetHeight
                        };
                    }
                    const n = {
                        width: Math.max(zRef.current ?? minWidthOverride, minWidthOverride),
                        height: S.MIN_MOVE_CALL_HERE_HEIGHT + We
                    };
                    Z(n);
                } else if (!Ce && QRef_current) {
                    const r = HRef.current || GRef.current;
                    if (r) {
                        const o = De && !$e;
                        const a = o ? Math.max(minHeightOverride, S.MIN_VIDEO_CALL_HEIGHT) : minHeightOverride;
                        const i = {
                            width: Math.max(r.width, minWidthOverride),
                            height: Math.max(r.height, a)
                        };
                        Z(i);
                        HRef.current = null;
                    }
                }
            };
            n[45] = Ce;
            n[46] = $e;
            n[47] = De;
            n[48] = minHeightOverride;
            n[49] = minWidthOverride;
            n[50] = We;
            n[51] = rt;
        } else {
            rt = n[51];
        }
        let ot;
        if (n[52] !== Ce || n[53] !== $e || n[54] !== De || n[55] !== minHeightOverride || n[56] !== minWidthOverride || n[57] !== We) {
            ot = [
                Ce,
                minWidthOverride,
                minHeightOverride,
                We,
                De,
                $e
            ];
            n[52] = Ce;
            n[53] = $e;
            n[54] = De;
            n[55] = minHeightOverride;
            n[56] = minWidthOverride;
            n[57] = We;
            n[58] = ot;
        } else {
            ot = n[58];
        }
        useEffect(rt, ot);
        let at;
        let it;
        if (n[59] !== pe || n[60] !== Ce || n[61] !== Re || n[62] !== fe || n[63] !== Ue || n[64] !== Ve) {
            at = function() {
                if (Ue && !Re) {
                    const e = qRef.current;
                    if (e) {
                        const { offsetWidth, offsetHeight } = e;
                        const r = fe || pe === o("WAWebVoipWaCallEnums").CallState.Rejoining;
                        if (r) {
                            if (Ve) {
                                const l = Math.max(offsetWidth, S.MIN_VIDEO_CALL_WIDTH);
                                const s = o("WAWebVoipLobbyHeightUtils").calculateIncomingGroupVideoLobbyHeight(0, false, true, l);
                                VRef.current?.cancelDefaultHeightEnforcement();
                                VRef.current?.markExternalResizeInProgress(true);
                                Z({
                                    width: l,
                                    height: s
                                });
                            } else {
                                if (offsetWidth < S.MIN_VIDEO_CALL_WIDTH) {
                                    Z({
                                        width: S.MIN_VIDEO_CALL_WIDTH,
                                        height: offsetHeight
                                    });
                                }
                            }
                            return;
                        }
                        const u = Ve ? S.MIN_VIDEO_CALL_LOBBY_HEIGHT : S.MIN_VOICE_CALL_LOBBY_HEIGHT;
                        const c = {
                            width: Math.max(offsetWidth, S.MIN_VIDEO_CALL_WIDTH),
                            height: Math.max(offsetHeight, u)
                        };
                        Z(c);
                    }
                } else {
                    const d = XRef.current;
                    XRef.current = Ve;
                    if (Ve && !d && !Ce) {
                        const m = qRef.current;
                        if (m) {
                            const { offsetWidth, offsetHeight } = m;
                            const f = offsetWidth < S.MIN_VIDEO_CALL_WIDTH || offsetHeight < S.MIN_VIDEO_CALL_HEIGHT;
                            if (f) {
                                VRef.current?.cancelDefaultHeightEnforcement();
                                VRef.current?.markExternalResizeInProgress(true);
                            }
                            const y = {
                                width: Math.max(offsetWidth, S.MIN_VIDEO_CALL_WIDTH),
                                height: Math.max(offsetHeight, S.MIN_VIDEO_CALL_HEIGHT)
                            };
                            Z(y);
                        }
                    }
                }
            };
            it = [
                Ve,
                Ce,
                Ue,
                fe,
                pe,
                Re
            ];
            n[59] = pe;
            n[60] = Ce;
            n[61] = Re;
            n[62] = fe;
            n[63] = Ue;
            n[64] = Ve;
            n[65] = at;
            n[66] = it;
        } else {
            at = n[65];
            it = n[66];
        }
        useEffect(at, it);
        let lt;
        if (n[67] !== Pe) {
            lt = o("WAWebVoipGatingUtils").isSmoothCallLinkLobbyEnabled() ? false : Pe;
            n[67] = Pe;
            n[68] = lt;
        } else {
            lt = n[68];
        }
        const stRef = useRef(lt);
        const utRef = useRef(0);
        const ctRef = useRef(0);
        let dt;
        if (n[69] !== Ce || n[70] !== Re || n[71] !== Ue) {
            dt = function({ connectedParticipantCount, hasNoParticipants, isExpanded, isVideoCall }) {
                if (!(!Ue || Ce || Re)) {
                    const s = qRef.current;
                    if (s) {
                        const u = s.offsetWidth;
                        const c = isVideoCall ? o("WAWebVoipLobbyHeightUtils").calculateIncomingGroupVideoLobbyHeight(connectedParticipantCount, isExpanded, hasNoParticipants, u) : o("WAWebVoipLobbyHeightUtils").calculateIncomingGroupAudioLobbyHeight({
                            connectedParticipantCount,
                            hasNoParticipants,
                            isParticipantPanelExpanded: isExpanded
                        });
                        VRef.current?.cancelDefaultHeightEnforcement();
                        VRef.current?.markExternalResizeInProgress(true);
                        Z({
                            width: u,
                            height: c
                        });
                    }
                }
            };
            n[69] = Ce;
            n[70] = Re;
            n[71] = Ue;
            n[72] = dt;
        } else {
            dt = n[72];
        }
        o("useWAWebListener").useListener(o("WAWebVoipLobbyHeightUtils").WAWebVoipLobbyPanelStateEmitter, "panelStateChanged", dt);
        let mt;
        let pt;
        if (n[73] !== Ce || n[74] !== We || n[75] !== Pe || n[76] !== Ve) {
            mt = function() {
                const stRef_current = stRef.current;
                stRef.current = Pe;
                if (!Ce) {
                    const t = qRef.current;
                    if (t) {
                        const { offsetWidth, offsetHeight } = t;
                        const i = S.SHARE_PANEL_WIDTH;
                        const l = parseFloat(t.style.left) || 0;
                        if (Pe && !stRef_current) {
                            VRef.current?.cancelDefaultHeightEnforcement();
                            VRef.current?.markExternalResizeInProgress(true);
                            const c = Math.max(offsetWidth, S.LOBBY_SELF_PREVIEW_WIDTH + i);
                            const d = c - offsetWidth;
                            utRef.current = d;
                            const m = Math.max(offsetHeight, S.MIN_VIDEO_CALL_HEIGHT);
                            const p = m - offsetHeight;
                            ctRef.current = p;
                            if (d === 0 && p === 0) {
                                return;
                            }
                            const _ = {
                                width: c,
                                height: m
                            };
                            if (r("WAWebL10N").isRTL()) {
                                _.left = Math.max(o("WAWebPipFloatingVideoPlayer.react").CALLING_MARGIN_X, l - d);
                            }
                            Z(_);
                        } else if (!Pe && stRef_current) {
                            const h = utRef.current;
                            utRef.current = 0;
                            const y = ctRef.current;
                            ctRef.current = 0;
                            if (h === 0 && y === 0) {
                                return;
                            }
                            VRef.current?.cancelDefaultHeightEnforcement();
                            VRef.current?.markExternalResizeInProgress(true);
                            const C = Ve ? S.MIN_VIDEO_CALL_WIDTH : S.MIN_VOICE_CALL_WIDTH;
                            const b = Math.max(offsetWidth - h, C);
                            const v = offsetWidth - b;
                            const R = Ve ? S.MIN_VIDEO_CALL_HEIGHT : S.MIN_VOICE_CALL_HEIGHT + We;
                            const L = Math.max(offsetHeight - y, R);
                            const E = {
                                width: b,
                                height: L
                            };
                            if (r("WAWebL10N").isRTL()) {
                                E.left = l + v;
                            }
                            Z(E);
                        }
                    }
                }
            };
            pt = [
                Pe,
                Ce,
                Ve,
                We
            ];
            n[73] = Ce;
            n[74] = We;
            n[75] = Pe;
            n[76] = Ve;
            n[77] = mt;
            n[78] = pt;
        } else {
            mt = n[77];
            pt = n[78];
        }
        useEffect(mt, pt);
        let _t;
        let ft;
        if (n[79] !== he) {
            _t = function() {
                let e;
                if (he) {
                    const t = qRef.current;
                    if (!(!t || t.offsetHeight >= S.MIN_SURVEY_HEIGHT)) {
                        if ((e = VRef.current) != null) {
                            e.markExternalResizeInProgress(true);
                        }
                        Z({
                            width: t.offsetWidth,
                            height: S.MIN_SURVEY_HEIGHT
                        });
                    }
                }
            };
            ft = [
                he
            ];
            n[79] = he;
            n[80] = _t;
            n[81] = ft;
        } else {
            _t = n[80];
            ft = n[81];
        }
        useEffect(_t, ft);
        const gtRef = useRef(false);
        const ht = Fe > 2 && !Ve && !Ue && !Ce;
        let yt;
        let Ct;
        if (n[82] !== We || n[83] !== he || n[84] !== Pe || n[85] !== Ve || n[86] !== ht) {
            yt = function() {
                const gtRef_current = gtRef.current;
                gtRef.current = ht;
                if (ht !== gtRef_current) {
                    const t = qRef.current;
                    if (t) {
                        const { offsetWidth, offsetHeight } = t;
                        if (ht) {
                            const o = S.MIN_GROUP_AUDIO_CALL_HEIGHT;
                            if (offsetHeight !== o) {
                                VRef.current?.cancelDefaultHeightEnforcement();
                                VRef.current?.markExternalResizeInProgress(true);
                                Z({
                                    width: offsetWidth,
                                    height: o
                                });
                            }
                        } else if (!Ve && !Pe && !he) {
                            const l = S.MIN_VOICE_CALL_HEIGHT + We;
                            if (offsetHeight > l) {
                                VRef.current?.cancelDefaultHeightEnforcement();
                                VRef.current?.markExternalResizeInProgress(true);
                                Z({
                                    width: offsetWidth,
                                    height: l
                                });
                            }
                        }
                    }
                }
            };
            Ct = [
                ht,
                Ve,
                We,
                Pe,
                he
            ];
            n[82] = We;
            n[83] = he;
            n[84] = Pe;
            n[85] = Ve;
            n[86] = ht;
            n[87] = yt;
            n[88] = Ct;
        } else {
            yt = n[87];
            Ct = n[88];
        }
        useEffect(yt, Ct);
        const btRef = useRef(null);
        let vt;
        let St;
        if (n[89] !== te || n[90] !== Ce || n[91] !== He) {
            vt = function() {
                let e;
                let t;
                if (!He || Ce || te == null) {
                    btRef.current = null;
                    return;
                }
                const qRef_current = qRef.current;
                if (qRef_current) {
                    const r = qRef_current.offsetWidth;
                    const a = btRef.current;
                    btRef.current = te;
                    if (!(a != null && !o("WAWebVoipGridLayoutCalculator").hasCanonicalGridShapeChanged(a, te))) {
                        const i = Math.max(S.MIN_GROUP_AUDIO_CALL_HEIGHT, o("WAWebVoipGridLayoutCalculator").calculateGroupVideoGridContentHeight(r, te) + C);
                        const l = qRef_current.offsetHeight;
                        if (!(Math.abs(l - i) < 1)) {
                            if ((e = VRef.current) != null) {
                                e.cancelDefaultHeightEnforcement();
                            }
                            if ((t = VRef.current) != null) {
                                t.markExternalResizeInProgress(true);
                            }
                            Z({
                                width: r,
                                height: i
                            });
                        }
                    }
                }
            };
            St = [
                He,
                te,
                Ce
            ];
            n[89] = te;
            n[90] = Ce;
            n[91] = He;
            n[92] = vt;
            n[93] = St;
        } else {
            vt = n[92];
            St = n[93];
        }
        useEffect(vt, St);
        const RtRef = useRef(Ue);
        let Lt;
        let Et;
        if (n[94] !== Fe || n[95] !== Ce || n[96] !== Ue || n[97] !== We || n[98] !== Ve) {
            Lt = function() {
                const RtRef_current = RtRef.current;
                RtRef.current = Ue;
                if (RtRef_current && !Ue) {
                    if (Ve || Fe > 2 || Ce) {
                        return;
                    }
                    const t = qRef.current;
                    if (!t) {
                        return;
                    }
                    const { offsetWidth, offsetHeight } = t;
                    const o = S.MIN_VOICE_CALL_HEIGHT + We;
                    if (offsetHeight > o) {
                        VRef.current?.cancelDefaultHeightEnforcement();
                        VRef.current?.markExternalResizeInProgress(true);
                        Z({
                            width: offsetWidth,
                            height: o
                        });
                    }
                }
            };
            Et = [
                Ue,
                Ve,
                Fe,
                Ce,
                We
            ];
            n[94] = Fe;
            n[95] = Ce;
            n[96] = Ue;
            n[97] = We;
            n[98] = Ve;
            n[99] = Lt;
            n[100] = Et;
        } else {
            Lt = n[99];
            Et = n[100];
        }
        useEffect(Lt, Et);
        const ktRef = useRef(je);
        let It;
        let Tt;
        if (n[101] !== Ge || n[102] !== je) {
            It = function() {
                const ktRef_current = ktRef.current;
                ktRef.current = je;
                if (!(!Ge || ktRef_current === je)) {
                    const r = qRef.current;
                    if (r) {
                        const o = r.offsetWidth;
                        const a = o / je;
                        VRef.current?.cancelDefaultHeightEnforcement();
                        VRef.current?.markExternalResizeInProgress(true);
                        Z({
                            width: o,
                            height: a
                        });
                    }
                }
            };
            Tt = [
                je,
                Ge
            ];
            n[101] = Ge;
            n[102] = je;
            n[103] = It;
            n[104] = Tt;
        } else {
            It = n[103];
            Tt = n[104];
        }
        useEffect(It, Tt);
        const Dt = r("WAWebEnvironment").isGuest || isFullScreen;
        let xt;
        let $t;
        if (n[105] !== Dt) {
            xt = function() {
                if (!Dt && qRef.current != null) {
                    const e = qRef.current;
                    e.style.transform = `scale(${L})`;
                    e.style.opacity = "0";
                    window.requestAnimationFrame(function() {
                        r("WAWebVelocityAnimate")(e, {
                            scale: [
                                1,
                                L
                            ],
                            opacity: [
                                1,
                                0
                            ]
                        }, {
                            duration: R,
                            easing: "easeOutElastic"
                        }).finally(()=>{
                            e.style.transform = "";
                            e.style.opacity = "";
                        });
                    });
                }
            };
            $t = [
                Dt
            ];
            n[105] = Dt;
            n[106] = xt;
            n[107] = $t;
        } else {
            xt = n[106];
            $t = n[107];
        }
        useEffect(xt, $t);
        const Pt = fe || Ce || Ue || Re || ht;
        let Nt;
        if (n[108] !== isFullScreen) {
            Nt = {
                isFullScreen,
                enterFullScreen,
                exitFullScreen
            };
            n[108] = isFullScreen;
            n[109] = Nt;
        } else {
            Nt = n[109];
        }
        const Mt = Nt;
        const wt = msg != null ? o("WAWebFrontendMsgGetters").getChat(msg) : null;
        const At = wt != null ? o("WAWebMuteCollection").MuteCollection.get(wt.id) : null;
        const Ft = At != null && o("WAWebMuteGetters").getIsCallMuted(At);
        const activeCall = r("WAWebCallCollection").activeCall;
        if (we && Ft && (fe || o("WAWebVoipCallStateUtils").isCallTerminal(pe) && activeCall?.wasEverConnected !== true && activeCall?.outgoing !== true)) {
            return null;
        }
        if (Dt) {
            let Bt;
            if (n[110] === Symbol.for("react.memo_cache_sentinel")) {
                Bt = s.jsx(o("WAWebVoipPopoutModalManagerWrapper.react").VoipPopoutModalManagerWrapper, {
                    type: o("WAWebVoipPopoutModalManagerWrapper.react").ModalType
                });
                n[110] = Bt;
            } else {
                Bt = n[110];
            }
            let Wt;
            if (n[111] !== b) {
                const Component = r("WAWebModalFitViewportContext").Provider;
                Wt = <Component value={b}>{Bt}</Component>;
                n[111] = b;
                n[112] = Wt;
            } else {
                Wt = n[112];
            }
            let qt;
            if (n[113] === Symbol.for("react.memo_cache_sentinel")) {
                qt = {
                    className: "xixxii4 x13vifvy x1ey2m1c x1o0tod xtijo5x x67bb7w"
                };
                n[113] = qt;
            } else {
                qt = n[113];
            }
            let Ut;
            if (n[114] !== msg) {
                Ut = msg != null ? s.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
                    callLogMsg: msg
                }) : s.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
                    callLogMsg: null
                });
                n[114] = msg;
                n[115] = Ut;
            } else {
                Ut = n[115];
            }
            let Vt;
            if (n[116] !== U || n[117] !== Ut) {
                Vt = <div {...babelHelpers.extends({
                    ref: U
                }, qt, {
                    children: Ut
                })}/>;
                n[116] = U;
                n[117] = Ut;
                n[118] = Vt;
            } else {
                Vt = n[118];
            }
            let Ht;
            if (n[119] !== Wt || n[120] !== Vt) {
                const Component = r("WAWebVoipUiPopoutWindowContext").Provider;
                Ht = <Component value={g}>{Wt}{Vt}</Component>;
                n[119] = Wt;
                n[120] = Vt;
                n[121] = Ht;
            } else {
                Ht = n[121];
            }
            let Gt;
            if (n[122] !== b || n[123] !== Ht) {
                const Component = r("WAWebVoipMobileCallLayoutContext").Provider;
                Gt = <Component value={b}>{Ht}</Component>;
                n[122] = b;
                n[123] = Ht;
                n[124] = Gt;
            } else {
                Gt = n[124];
            }
            let zt;
            if (n[125] !== Mt || n[126] !== Gt) {
                const Component = r("WAWebVoipFullScreenContext").Provider;
                zt = <Component value={Mt}>{Gt}</Component>;
                n[125] = Mt;
                n[126] = Gt;
                n[127] = zt;
            } else {
                zt = n[127];
            }
            return zt;
        }
        const disableResize = Pt ? true : undefined;
        const Kt = E && f.voipBorder;
        let moveResizeContainerXstyle;
        if (n[128] !== Kt) {
            moveResizeContainerXstyle = [
                f.moveResizeContainer,
                f.voipBorderRadius,
                Kt,
                o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
            ];
            n[128] = Kt;
            n[129] = moveResizeContainerXstyle;
        } else {
            moveResizeContainerXstyle = n[129];
        }
        let Xt;
        if (n[130] !== msg) {
            const Component = r("WAWebVoipGridPageSizeContext").Provider;
            Xt = <Component value={oe}>{msg != null ? s.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
                callLogMsg: msg
            }) : s.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
                callLogMsg: null
            })}</Component>;
            n[130] = msg;
            n[131] = Xt;
        } else {
            Xt = n[131];
        }
        let Yt;
        if (n[132] !== b || n[133] !== Xt) {
            const Component = r("WAWebVoipMobileCallLayoutContext").Provider;
            Yt = <Component value={b}>{Xt}</Component>;
            n[132] = b;
            n[133] = Xt;
            n[134] = Yt;
        } else {
            Yt = n[134];
        }
        let Jt;
        if (n[135] !== animationStartStyle || n[136] !== externalResize || n[137] !== initialPiPStyle || n[138] !== U || n[139] !== minHeightOverride || n[140] !== minWidthOverride || n[141] !== disableResize || n[142] !== moveResizeContainerXstyle || n[143] !== Yt || n[144] !== je) {
            const Component = o("WAWebPipFloatingVideoPlayer.react").FloatingVideoPlayer;
            Jt = <Component ref={U} aspectRatio={je} initialPiPStyle={initialPiPStyle} animationStartStyle={animationStartStyle} enableDragBar={false} dragCursor="grab" minWidthOverride={minWidthOverride} minHeightOverride={minHeightOverride} moveResizeRef={VRef} independentResize useChatListPanelPositioning disableResize={disableResize} onResize={et} onResizeEnd={tt} onMoveEnd={onMoveEnd} onInitialWidthCalculated={onInitialWidthCalculated} externalResize={externalResize} moveResizeContainerXstyle={moveResizeContainerXstyle}>{Yt}</Component>;
            n[135] = animationStartStyle;
            n[136] = externalResize;
            n[137] = initialPiPStyle;
            n[138] = U;
            n[139] = minHeightOverride;
            n[140] = minWidthOverride;
            n[141] = disableResize;
            n[142] = moveResizeContainerXstyle;
            n[143] = Yt;
            n[144] = je;
            n[145] = Jt;
        } else {
            Jt = n[145];
        }
        let Zt;
        if (n[146] !== Mt || n[147] !== Jt) {
            const Component = r("WAWebVoipFullScreenContext").Provider;
            Zt = <Component value={Mt}>{Jt}</Component>;
            n[146] = Mt;
            n[147] = Jt;
            n[148] = Zt;
        } else {
            Zt = n[148];
        }
        return Zt;
    }
    function k() {
        o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_DRAG);
    }
    function I() {
        o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_RESIZE);
    }
    function T() {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (activeCall == null || activeCall.isGroup) {
            return false;
        }
        const t = activeCall.peerJid != null ? o("WAWebContactCollection").ContactCollection.get(activeCall.peerJid) : null;
        return o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(t);
    }
    function D() {
        return r("WAWebCallCollection").activeCall?.groupCallParticipantsConnected?.length ?? 0;
    }
    function x() {
        return r("WAWebCallCollection").activeCall?.isGroup ?? false;
    }
    function $() {
        return r("WAWebCallCollection").pendingOutgoingCall;
    }
    function P() {
        return r("WAWebCallCollection").pendingCallLink;
    }
    function N() {
        return r("WAWebCallCollection").activeCall?.isInCallLinkPreview() ?? false;
    }
    function M() {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (activeCall == null || !activeCall.isGroup) {
            return false;
        }
        if (o("WAWebVoipVideoStateUtils").isVideoEnabled(activeCall.selfVideoState)) {
            return true;
        }
        for (const t of activeCall.groupCallParticipantsConnected ?? []){
            if (o("WAWebVoipVideoStateUtils").isVideoEnabled(activeCall.getParticipantVideoState(t))) {
                return true;
            }
        }
        return false;
    }
    function w() {
        return r("WAWebCallCollection").activeCall?.shouldShowPeerVideo() ?? false;
    }
    function A() {
        return r("WAWebCallCollection").lastActiveCall?.shouldShowPostCallSurvey === true;
    }
    function F() {
        return r("WAWebCallCollection").activeCall?.getState();
    }
    function O() {
        return r("WAWebCallCollection").activeCall?.isVideo ?? false;
    }
    function B(e) {
        const t = r("useWAWebVoipMobileCallLayout")();
        const n = r("useWAWebVoipViewportMobileLayout")(e);
        return t || n;
    }
    function W(e, t) {
        const n = t / e;
        const r = n + C + b;
        return t / r;
    }
    l.default = EComponent;
}, 98);