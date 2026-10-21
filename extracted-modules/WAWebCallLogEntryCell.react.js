__d("WAWebCallLogEntryCell.react", [
    "fbt",
    "WAWebBoolFunc",
    "WAWebCallInfoLoggingUtils",
    "WAWebCallLogEntryChatImage.react",
    "WAWebCallLogIcon.react",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogTitle.react",
    "WAWebCallLogUtils",
    "WAWebCallUserJourneyGating",
    "WAWebChatCell.react",
    "WAWebChatSendMessages",
    "WAWebChatTimestamp.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebPreCallUserJourneyLogger",
    "WAWebVoipActionRequestOpenChat",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipCoexCallingPermissionDisabledModal.react",
    "WAWebVoipGatingUtils",
    "WAWebVoipNewGroupCallContactPicker.react",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWamEnumSubSurface",
    "WDSIconIcCall.react",
    "WDSIconIcDelete.react",
    "WDSIconIcPersonCheck.react",
    "WDSIconIcVideocam.react",
    "WDSIconWdsIcChat.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebActiveSelection",
    "useWAWebMsgValues",
    "useWAWebVoipCanStartCall",
    "useWDSMenu"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = [
        "msg",
        "testid"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useEffect, useId, useMemo, useRef } = d;
    const h = {
        miss: {
            color: "x30a034",
            $$css: true
        }
    };
    function Y3(e) {
        const t = o("react-compiler-runtime").c(13);
        const { count, isCallLink, isCallSilenced, isFromMe, isMissedCall } = e;
        let d;
        if (isCallLink === true) {
            let m;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                m = s._("Call link");
                t[0] = m;
            } else {
                m = t[0];
            }
            d = m;
        } else if (isFromMe) {
            let p;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                p = s._("Outgoing");
                t[1] = p;
            } else {
                p = t[1];
            }
            d = p;
        } else if (isMissedCall) {
            if (isCallSilenced) {
                let _;
                if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                    _ = s._("Missed (silenced)");
                    t[2] = _;
                } else {
                    _ = t[2];
                }
                d = _;
            } else {
                let f;
                if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                    f = s._("Missed");
                    t[3] = f;
                } else {
                    f = t[3];
                }
                d = f;
            }
        } else {
            let g;
            if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                g = s._("Incoming");
                t[4] = g;
            } else {
                g = t[4];
            }
            d = g;
        }
        if (count > 1) {
            let y;
            if (t[5] !== d || t[6] !== count) {
                let C;
                if (t[8] !== count) {
                    C = r("WAWebL10N").n(count);
                    t[8] = count;
                    t[9] = C;
                } else {
                    C = t[9];
                }
                y = s._("{call-log-entry-text} ({call-logs-merged-count})", [
                    s._param("call-log-entry-text", d),
                    s._param("call-logs-merged-count", C)
                ]);
                t[5] = d;
                t[6] = count;
                t[7] = y;
            } else {
                y = t[7];
            }
            d = y;
        }
        const b = isMissedCall && !isFromMe && h.miss;
        let v;
        if (t[10] !== d || t[11] !== b) {
            v = c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: d,
                direction: "auto",
                ellipsify: true,
                xstyle: b
            });
            t[10] = d;
            t[11] = b;
            t[12] = v;
        } else {
            v = t[12];
        }
        return v;
    }
    function C(e, t) {
        if (e && t === o("WAWebCallLogMsgData.flow").CallOutcome.Failed) {
            return o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_LOG_FAILED_ROW;
        }
        if (!e && t === o("WAWebCallLogMsgData.flow").CallOutcome.Missed) {
            return o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_LOG_MISSED_ROW;
        }
        if (e) {
            return o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_LOG_OUTGOING_ROW;
        }
        return o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_LOG_INCOMING_ROW;
    }
    function b({ isAdHocGroupCall, isCallLink, isGroup, isMissedCall, isSearchResult, isSentByMe }) {
        if (o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
            if (isSearchResult) {
                return o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_LOG_SEARCH;
            }
            if (isSentByMe) {
                return o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALLS_TAB_OUTGOING;
            }
            if (isMissedCall) {
                return o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALLS_TAB_MISSED;
            }
            return o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALLS_TAB_INCOMING;
        }
        return o("WAWebCallInfoLoggingUtils").getCallInfoHeaderCallFromUI({
            isAdHocGroupCall,
            isCallLink,
            isGroup
        });
    }
    function VComponent({ callFromUi, chat, isAdHocGroupCall, isCallLink, isCapiCallingPermissionAllowed, logger, mergedMsgs, onOpenParticipantSelector, participantWids, rowContext, rowSubSurface }) {
        const g = o("WAWebVoipGatingUtils").isCallInfoOptimizationsContextMenuEnabledForCallType({
            isAdHocGroupCall,
            isCallLink,
            isGroup: chat.id.isGroup()
        });
        const h = g && isCallLink !== true;
        const y = g && !isAdHocGroupCall && !isCallLink;
        const C = (i)=>{
            if (i) {
                logger.clickVideoCallFromCallsTab(rowSubSurface, rowContext);
            } else {
                logger.clickAudioCallFromCallsTab(rowSubSurface, rowContext);
            }
            if (!isCapiCallingPermissionAllowed) {
                o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebVoipCoexCallingPermissionDisabledModal.react"), {}));
                return;
            }
            if (isAdHocGroupCall && participantWids.length > 1) {
                o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids(participantWids, i, callFromUi, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED, {
                    entryTrust: "user_gesture"
                });
            } else if (chat.groupType === undefined) {
                o("WAWebVoipStartCall").startWAWebVoipCall(chat.contact.id, i, callFromUi, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED, null, {
                    entryTrust: "user_gesture"
                });
            } else {
                o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(chat, i, callFromUi, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED);
            }
        };
        const Component = r("WDSMenuItem.react");
        const Component_1 = r("WDSMenuItem.react");
        const Component_2 = r("WDSMenuItem.react");
        const Component_3 = r("WDSMenuItem.react");
        const Component_4 = r("WDSMenuItem.react");
        const Component_5 = r("WDSMenu.react");
        return <Component_5>{y && <Component key="message" onPress={function() {
            logger.sendMessage(o("WAWebWamEnumSubSurface").SUB_SURFACE.LONG_PRESS_UI_MENU, rowContext);
            o("WAWebVoipActionRequestOpenChat").requestOpenChat(chat.id);
        }} Icon={r("WDSIconWdsIcChat.react")} title={s._("Message")}/>}{h && <Component_1 key="video-call" onPress={function() {
            return C(true);
        }} Icon={r("WDSIconIcVideocam.react")} title={s._("Video call")}/>}{h && <Component_2 key="voice-call" onPress={function() {
            return C(false);
        }} Icon={r("WDSIconIcCall.react")} title={s._("Voice call")}/>}{h && onOpenParticipantSelector != null && <Component_3 key="select-people" testid="mi-select-people" onPress={function() {
            logger.selectParticipantFromCallsTab(o("WAWebWamEnumSubSurface").SUB_SURFACE.LONG_PRESS_UI_MENU, rowContext);
            onOpenParticipantSelector?.();
        }} Icon={r("WDSIconIcPersonCheck.react")} title={s._("Select people")}/>}{h && c.jsx(r("WDSMenuItem.react"), {
            type: "separator"
        })}<Component_4 key="delete-call-log" onPress={function() {
            logger.deleteCallLog(o("WAWebWamEnumSubSurface").SUB_SURFACE.LONG_PRESS_UI_MENU, rowContext);
            S(mergedMsgs);
        }} testid="mi-delete-call-log" destructive Icon={r("WDSIconIcDelete.react")} title={s._("Delete")}/></Component_5>;
    }
    VComponent.displayName = `${VComponent.name} [from ${i.id}]`;
    function S(mergedMsgs) {
        if (mergedMsgs.length !== 0) {
            const chat_ = o("WAWebFrontendMsgGetters").getChat(mergedMsgs[0]);
            o("WAWebChatSendMessages").sendDeleteMsgs({
                chat_,
                clearMedia: false,
                record: {
                    type: "message",
                    list: mergedMsgs
                }
            }).then(()=>{
                r("WAWebVoipCallsTabPanelManager").trigger("closeCallLogInfoPanel");
                r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage", null);
            }).catch(()=>{
                r("WAWebVoipCallsTabPanelManager").trigger("onWriteCallLogMessage", null);
            });
        }
    }
    function RComponent(t) {
        const a = o("react-compiler-runtime").c(106);
        let i;
        let l;
        let s;
        if (a[0] !== t) {
            i = t.msg;
            s = t.testid;
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            a[0] = t;
            a[1] = i;
            a[2] = l;
            a[3] = s;
        } else {
            i = a[1];
            l = a[2];
            s = a[3];
        }
        const u = l;
        const { filterPreset, mergedMsgs, noContext, theme } = u;
        const mergedMsgs_length = mergedMsgs.length;
        let S;
        if (a[4] === Symbol.for("react.memo_cache_sentinel")) {
            let R;
            S = [
                (R = o("WAWebMsgGetters")).getIsSentByMe,
                R.getIsVideoCall,
                R.getIsMissedCall,
                R.getIsCallSilenced,
                R.getIsCallLink,
                R.getIsAdHocGroupCall,
                R.getCallOutcome,
                R.getCallParticipants,
                R.getFinalCallOutcome
            ];
            a[4] = S;
        } else {
            S = a[4];
        }
        const I = o("useWAWebMsgValues").useMsgValues(i.id, S);
        const T = I[0];
        const D = I[1];
        const x = I[2];
        const isCallSilenced = I[3];
        const P = I[4];
        const isAdHocGroupCall = I[5];
        const M = I[6];
        const w = I[7];
        const A = I[8];
        const F = o("WAWebCallLogUtils").getIsSelfConnected(w);
        const O = mergedMsgs[mergedMsgs.length - 1] ?? i;
        const l_active = l.active;
        let W;
        if (a[5] !== O.id) {
            W = O.id.toString();
            a[5] = O.id;
            a[6] = W;
        } else {
            W = a[6];
        }
        const q = r("useWAWebActiveSelection")(l_active, W);
        const U = q[0];
        const V = q[1];
        let H;
        if (a[7] !== i) {
            H = o("WAWebFrontendMsgGetters").getChat(i);
            a[7] = i;
            a[8] = H;
        } else {
            H = a[8];
        }
        const G = H;
        let z;
        if (a[9] !== w) {
            z = w != null ? w.map(k) : [];
            a[9] = w;
            a[10] = z;
        } else {
            z = a[10];
        }
        const j = z;
        const isCapiCallingPermissionAllowed = o("useWAWebVoipCanStartCall").useWAWebVoipIsCapiCallingPermissionAllowed(G);
        const isMissedCall = o("WAWebCallLogUtils").getIsMissedCallOrNotConnected(x, F, T, M, A);
        let X;
        if (a[11] === Symbol.for("react.memo_cache_sentinel")) {
            X = new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger;
            a[11] = X;
        } else {
            X = a[11];
        }
        const logger = X;
        let J;
        if (a[12] !== M || a[13] !== T) {
            J = C(T, M);
            a[12] = M;
            a[13] = T;
            a[14] = J;
        } else {
            J = a[14];
        }
        const rowSubSurface = J;
        let ee;
        if (a[15] !== G.id || a[16] !== isAdHocGroupCall || a[17] !== P) {
            ee = o("WAWebCallInfoLoggingUtils").getCallSizeTypeForCallInfo({
                isAdHocGroupCall,
                isCallLink: P,
                isGroup: G.id.isGroup()
            });
            a[15] = G.id;
            a[16] = isAdHocGroupCall;
            a[17] = P;
            a[18] = ee;
        } else {
            ee = a[18];
        }
        const callSizeType = ee;
        const l_itemPosition = l.itemPosition;
        let oe;
        if (a[19] !== callSizeType || a[20] !== l_itemPosition) {
            oe = {
                callSizeType,
                itemPosition: l_itemPosition
            };
            a[19] = callSizeType;
            a[20] = l_itemPosition;
            a[21] = oe;
        } else {
            oe = a[21];
        }
        const rowContext = oe;
        const callFromUi = b({
            isAdHocGroupCall,
            isCallLink: P,
            isGroup: G.id.isGroup(),
            isMissedCall,
            isSearchResult: l_itemPosition == null,
            isSentByMe: T
        });
        let le;
        if (a[22] !== isAdHocGroupCall || a[23] !== i || a[24] !== j) {
            le = isAdHocGroupCall ? o("WAWebCallLogUtils").sortCallParticipantWids([].concat(j), i, {
                excludeSelf: true,
                excludeGuests: true
            }) : j;
            a[22] = isAdHocGroupCall;
            a[23] = i;
            a[24] = j;
            a[25] = le;
        } else {
            le = a[25];
        }
        const se = le;
        const ue = o("WAWebVoipGatingUtils").isCallInfoOptimizationsEnabledForCallType({
            isAdHocGroupCall,
            isCallLink: P,
            isGroup: G.id.isGroup()
        }) && (isAdHocGroupCall || G.id.isGroup() || P === true);
        let ce;
        if (a[26] !== G || a[27] !== isAdHocGroupCall || a[28] !== se) {
            ce = function() {
                o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
                    chat: G,
                    showCallTypeButtons: true,
                    isGroupMemberSelection: true,
                    participantWids: isAdHocGroupCall ? se : undefined
                }));
            };
            a[26] = G;
            a[27] = isAdHocGroupCall;
            a[28] = se;
            a[29] = ce;
        } else {
            ce = a[29];
        }
        const onOpenParticipantSelector = ue ? ce : undefined;
        let pe;
        if (a[30] !== callFromUi || a[31] !== G || a[32] !== isAdHocGroupCall || a[33] !== P || a[34] !== isCapiCallingPermissionAllowed || a[35] !== logger || a[36] !== mergedMsgs || a[37] !== j || a[38] !== rowContext || a[39] !== rowSubSurface || a[40] !== onOpenParticipantSelector) {
            pe = VComponent({
                callFromUi,
                chat: G,
                isAdHocGroupCall,
                isCallLink: P,
                isCapiCallingPermissionAllowed,
                logger,
                mergedMsgs,
                onOpenParticipantSelector,
                participantWids: j,
                rowContext,
                rowSubSurface
            });
            a[30] = callFromUi;
            a[31] = G;
            a[32] = isAdHocGroupCall;
            a[33] = P;
            a[34] = isCapiCallingPermissionAllowed;
            a[35] = logger;
            a[36] = mergedMsgs;
            a[37] = j;
            a[38] = rowContext;
            a[39] = rowSubSurface;
            a[40] = onOpenParticipantSelector;
            a[41] = pe;
        } else {
            pe = a[41];
        }
        const _e = pe;
        const feRef = useRef(null);
        let ge;
        if (a[42] !== _e) {
            ge = {
                targetRef: feRef,
                menu: _e
            };
            a[42] = _e;
            a[43] = ge;
        } else {
            ge = a[43];
        }
        const he = r("useWDSMenu")(ge);
        const { closeMenu, isMenuOpen, menuPortal, openMenu } = he;
        let Se;
        if (a[44] !== mergedMsgs) {
            Se = mergedMsgs.map(E).join("|");
            a[44] = mergedMsgs;
            a[45] = Se;
        } else {
            Se = a[45];
        }
        const Re = Se;
        let Le;
        let Ee;
        if (a[46] !== V || a[47] !== mergedMsgs || a[48] !== Re) {
            Le = function() {
                if (!(!V || Re === "")) {
                    r("WAWebVoipCallsTabPanelManager").trigger("updateActveCallLogInfo", mergedMsgs.slice());
                }
            };
            Ee = [
                mergedMsgs,
                Re,
                V
            ];
            a[46] = V;
            a[47] = mergedMsgs;
            a[48] = Re;
            a[49] = Le;
            a[50] = Ee;
        } else {
            Le = a[49];
            Ee = a[50];
        }
        useEffect(Le, Ee);
        const ke = L;
        let Ie;
        if (a[51] !== closeMenu || a[52] !== isMenuOpen || a[53] !== logger || a[54] !== openMenu || a[55] !== rowContext || a[56] !== rowSubSurface) {
            Ie = function(t) {
                if (isMenuOpen) {
                    closeMenu();
                    return;
                }
                if (t.anchor instanceof HTMLElement) {
                    feRef.current = t.anchor;
                    openMenu();
                } else if (t.event != null) {
                    openMenu(t.event);
                } else {
                    return;
                }
                logger.longPress(rowSubSurface, rowContext);
            };
            a[51] = closeMenu;
            a[52] = isMenuOpen;
            a[53] = logger;
            a[54] = openMenu;
            a[55] = rowContext;
            a[56] = rowSubSurface;
            a[57] = Ie;
        } else {
            Ie = a[57];
        }
        const onContext = Ie;
        let De;
        if (a[58] !== i) {
            De = c.jsx(r("WAWebChatTimestamp.react"), {
                msg: i
            });
            a[58] = i;
            a[59] = De;
        } else {
            De = a[59];
        }
        const xe = De;
        const $e = P ?? false;
        let Pe;
        if (a[60] !== isMissedCall || a[61] !== T || a[62] !== D || a[63] !== $e) {
            Pe = c.jsx(o("WAWebCallLogIcon.react").CallLogIcon, {
                iconHeight: 16,
                isMissedCall,
                isVideoCall: D,
                isFromMe: T,
                isCallLink: $e
            });
            a[60] = isMissedCall;
            a[61] = T;
            a[62] = D;
            a[63] = $e;
            a[64] = Pe;
        } else {
            Pe = a[64];
        }
        const Ne = P ?? false;
        let Me;
        if (a[65] !== mergedMsgs_length || a[66] !== isCallSilenced || a[67] !== isMissedCall || a[68] !== T || a[69] !== Ne) {
            Me = <Y3 isCallSilenced={isCallSilenced} isFromMe={T} isMissedCall={isMissedCall} count={mergedMsgs_length} isCallLink={Ne}/>;
            a[65] = mergedMsgs_length;
            a[66] = isCallSilenced;
            a[67] = isMissedCall;
            a[68] = T;
            a[69] = Ne;
            a[70] = Me;
        } else {
            Me = a[70];
        }
        let we;
        if (a[71] !== Pe || a[72] !== Me) {
            const Component = o("WAWebFlex.react").FlexRow;
            we = <Component align="center">{Pe} {Me}</Component>;
            a[71] = Pe;
            a[72] = Me;
            a[73] = we;
        } else {
            we = a[73];
        }
        const Ae = we;
        let Fe;
        if (a[74] !== logger || a[75] !== mergedMsgs || a[76] !== l || a[77] !== rowContext || a[78] !== rowSubSurface) {
            Fe = function() {
                logger.clickCallInfo(rowSubSurface, rowContext);
                l.onClick();
                r("WAWebVoipCallsTabPanelManager").trigger("openCallLogInfoPanel", mergedMsgs);
            };
            a[74] = logger;
            a[75] = mergedMsgs;
            a[76] = l;
            a[77] = rowContext;
            a[78] = rowSubSurface;
            a[79] = Fe;
        } else {
            Fe = a[79];
        }
        const Oe = Fe;
        let Be;
        if (a[80] !== Oe) {
            Be = {
                enter: Oe,
                space: Oe
            };
            a[80] = Oe;
            a[81] = Be;
        } else {
            Be = a[81];
        }
        const contextEnabled = noContext === true ? o("WAWebBoolFunc").returnFalse : o("WAWebBoolFunc").returnTrue;
        let qe;
        if (a[82] !== i) {
            qe = c.jsx(r("WAWebCallLogEntryChatImage.react"), {
                msg: i
            });
            a[82] = i;
            a[83] = qe;
        } else {
            qe = a[83];
        }
        let Ue;
        if (a[84] !== filterPreset || a[85] !== i) {
            Ue = c.jsx(r("WAWebCallLogTitle.react"), {
                callLogMsg: i,
                filterPreset
            });
            a[84] = filterPreset;
            a[85] = i;
            a[86] = Ue;
        } else {
            Ue = a[86];
        }
        let Ve;
        if (a[87] !== V || a[88] !== Oe || a[89] !== onContext || a[90] !== isMenuOpen || a[91] !== xe || a[92] !== Ae || a[93] !== contextEnabled || a[94] !== qe || a[95] !== Ue || a[96] !== s || a[97] !== theme) {
            const Component = r("WAWebChatCell.react");
            Ve = <Component theme={theme} contextEnabled={contextEnabled} contextMenu={isMenuOpen} onContext={onContext} active={V} image={qe} primary={Ue} primaryDetail={xe} secondary={Ae} onClick={Oe} testid={s}/>;
            a[87] = V;
            a[88] = Oe;
            a[89] = onContext;
            a[90] = isMenuOpen;
            a[91] = xe;
            a[92] = Ae;
            a[93] = contextEnabled;
            a[94] = qe;
            a[95] = Ue;
            a[96] = s;
            a[97] = theme;
            a[98] = Ve;
        } else {
            Ve = a[98];
        }
        let He;
        if (a[99] !== U || a[100] !== Be || a[101] !== Ve) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            He = <Component handlers={Be} onFocus={ke} ref={U}>{Ve}</Component>;
            a[99] = U;
            a[100] = Be;
            a[101] = Ve;
            a[102] = He;
        } else {
            He = a[102];
        }
        let Ge;
        if (a[103] !== menuPortal || a[104] !== He) {
            Ge = <>{He}{menuPortal}</>;
            a[103] = menuPortal;
            a[104] = He;
            a[105] = Ge;
        } else {
            Ge = a[105];
        }
        return Ge;
    }
    function L(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    function E(e) {
        return e.id.toString();
    }
    function k(e) {
        return e.participant;
    }
    function IComponent(e) {
        const t = o("react-compiler-runtime").c(4);
        const { itemPosition, mergedMsgs, testidPrefix } = e;
        const i = useId();
        if (mergedMsgs.length === 0) {
            return null;
        }
        const l = mergedMsgs[0];
        const s = testidPrefix == null ? undefined : `${testidPrefix}-${itemPosition ?? i}`;
        let u;
        if (t[0] !== l || t[1] !== e || t[2] !== s) {
            u = <RComponent {...babelHelpers.extends({}, e, {
                msg: l,
                testid: s
            })}/>;
            t[0] = l;
            t[1] = e;
            t[2] = s;
            t[3] = u;
        } else {
            u = t[3];
        }
        return u;
    }
    l.CallLogEntryCell = IComponent;
}, 226);