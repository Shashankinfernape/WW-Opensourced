__d("WAWebCallLogIcceBubble.react", [
    "fbt",
    "WALogger",
    "WAWebCallCollection",
    "WAWebCallLogMessageCallFromUi",
    "WAWebCallLogMsgData.flow",
    "WAWebCallUserJourneyGating",
    "WAWebChatGetters",
    "WAWebClock",
    "WAWebGroupCallDropdownWithTrigger.react",
    "WAWebIcceBubbleActivationHandlers",
    "WAWebMessageNotificationCallLog.react",
    "WAWebMsgGetters",
    "WAWebOneOnOneIcceCallBubble.react",
    "WAWebPreCallUserJourneyLogger",
    "WAWebVoipActivityTracker",
    "WAWebVoipGatingUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipStartCall",
    "WAWebVoipWaCallEnums",
    "WAWebWamEnumLobbyEntryPointType",
    "countWhere",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const c_useMemo = c.useMemo;
    function p({ chat, contact, displayAuthor, elRef, forwardClickRef, msg, winHybridJoinableCallsEnabled }) {
        if (!o("WAWebVoipGatingUtils").isCallingEnabled()) {
            const Component = r("WAWebMessageNotificationCallLog.react");
            return <Component ref={forwardClickRef} msg={msg} contact={contact} displayAuthor={displayAuthor}/>;
        }
        const m = o("WAWebMsgGetters").getIsVideoCall(msg);
        const isMissedCall = o("WAWebMsgGetters").getIsMissedCall(msg);
        const callOutcome = o("WAWebMsgGetters").getCallOutcome(msg);
        const g = winHybridJoinableCallsEnabled && o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.get(msg.id) != null;
        if (o("WAWebChatGetters").getIsGroup(chat) && !g) {
            return <_ callOutcome={callOutcome} chat={chat} elRef={elRef} forwardClickRef={forwardClickRef} isVideo={m} isMissedCall={isMissedCall} msg={msg} contact={contact} displayAuthor={displayAuthor}/>;
        }
        if (!g) {
            return d.jsx(r("WAWebOneOnOneIcceCallBubble.react"), {
                callOutcome,
                chat,
                contact,
                displayAuthor,
                elRef,
                forwardClickRef,
                isMissedCall,
                isVideo: m,
                msg,
                ongoingCallId: callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing ? msg.id.id : null
            });
        }
        const h = function() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: joining ongoing group call from ICCE bubble video=",
                ""
            ])), m);
            new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger().clickICCE(o("WAWebIcceBubbleActivationHandlers").getIcceBubbleSubSurface(isMissedCall));
            o("WAWebVoipActivityTracker").startActivityTracking();
            o("WAWebVoipActivityTracker").startUiActivityTracking();
            o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_BUBBLE_CLICK_JOIN_ONGOING);
            o("WAWebVoipStartCall").joinOngoingWAWebVoipGroupCallPN({
                callId: msg.id.id,
                chat,
                isDeviceSwitch: r("WAWebCallCollection").activeCall?.id !== msg.id.id && o("WAWebMsgGetters").getSelfOtherDeviceConnected(msg) === true && o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled(),
                isVideo: m,
                lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LOG_MESSAGE_ONGOING
            });
        };
        const y = o("WAWebIcceBubbleActivationHandlers").getIcceBubbleActivationHandlers(h);
        const { onClick, onKeyDown } = y;
        const Component = r("WAWebMessageNotificationCallLog.react");
        return <div role="button" ref={elRef} tabIndex={0} data-testid="voip_icce_bubble_join_ongoing" onKeyDown={onKeyDown} onClick={onClick}><Component ref={forwardClickRef} msg={msg} contact={contact} displayAuthor={displayAuthor}/></div>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _(e) {
        const t = o("react-compiler-runtime").c(30);
        const { callOutcome, chat, contact, displayAuthor, elRef, forwardClickRef, isMissedCall, isVideo, msg } = e;
        let y;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            y = new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger;
            t[0] = y;
        } else {
            y = t[0];
        }
        const C = y;
        let b;
        let v;
        let S;
        let R;
        if (t[1] !== msg) {
            b = o("WAWebMsgGetters").getCallDuration(msg);
            v = o("WAWebMsgGetters").getCallParticipants(msg);
            S = o("WAWebClock").Clock.callDurationStrSimple(b ?? 0);
            R = v != null ? r("countWhere")(v, g) : 0;
            t[1] = msg;
            t[2] = b;
            t[3] = v;
            t[4] = S;
            t[5] = R;
        } else {
            b = t[2];
            v = t[3];
            S = t[4];
            R = t[5];
        }
        const L = R;
        let E;
        if (t[6] !== v) {
            E = v?.map(f);
            t[6] = v;
            t[7] = E;
        } else {
            E = t[7];
        }
        const preselectedWids = E;
        let T;
        if (t[8] !== b || t[9] !== S || t[10] !== L) {
            T = b != null && b > 0 ? s._("{time} • {joined-count} joined", [
                s._param("time", S),
                s._param("joined-count", L)
            ]) : null;
            t[8] = b;
            t[9] = S;
            t[10] = L;
            t[11] = T;
        } else {
            T = t[11];
        }
        const initialSubtext = T;
        let x;
        if (t[12] !== isMissedCall) {
            x = function() {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] group ICCE bubble clicked, opening dropdown"
                ])));
                o("WAWebVoipActivityTracker").startUiActivityTracking();
                o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.ICCE_BUBBLE_GROUP_DROPDOWN_OPEN);
                const e = o("WAWebIcceBubbleActivationHandlers").getIcceBubbleSubSurface(isMissedCall);
                if (o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
                    C.clickICCE(e);
                } else {
                    C.clickCallDropdown(e);
                }
            };
            t[12] = isMissedCall;
            t[13] = x;
        } else {
            x = t[13];
        }
        const onDropdownOpen = x;
        let callFromUi;
        if (t[14] !== callOutcome) {
            callFromUi = o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() ? o("WAWebCallLogMessageCallFromUi").getCallLogMessageCallFromUi(callOutcome) : null;
            t[14] = callOutcome;
            t[15] = callFromUi;
        } else {
            callFromUi = t[15];
        }
        let trigger;
        if (t[16] !== contact || t[17] !== displayAuthor || t[18] !== elRef || t[19] !== forwardClickRef || t[20] !== msg) {
            trigger = function(t) {
                const Component = r("WAWebMessageNotificationCallLog.react");
                return <div role="button" ref={function(n) {
                    elRef.current = n;
                    t(n);
                }} tabIndex={0}><Component ref={forwardClickRef} msg={msg} contact={contact} displayAuthor={displayAuthor}/></div>;
            };
            t[16] = contact;
            t[17] = displayAuthor;
            t[18] = elRef;
            t[19] = forwardClickRef;
            t[20] = msg;
            t[21] = trigger;
        } else {
            trigger = t[21];
        }
        let M;
        if (t[22] !== chat || t[23] !== onDropdownOpen || t[24] !== initialSubtext || t[25] !== isVideo || t[26] !== preselectedWids || t[27] !== callFromUi || t[28] !== trigger) {
            const Component = r("WAWebGroupCallDropdownWithTrigger.react");
            M = <Component callFromUi={callFromUi} chat={chat} initialSubtext={initialSubtext} isVideo={isVideo} logger={C} onDropdownOpen={onDropdownOpen} preselectedWids={preselectedWids} trigger={trigger}/>;
            t[22] = chat;
            t[23] = onDropdownOpen;
            t[24] = initialSubtext;
            t[25] = isVideo;
            t[26] = preselectedWids;
            t[27] = callFromUi;
            t[28] = trigger;
            t[29] = M;
        } else {
            M = t[29];
        }
        return M;
    }
    function f({ participant }) {
        return participant;
    }
    function g(e) {
        return e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
    }
    l.default = p;
}, 226);