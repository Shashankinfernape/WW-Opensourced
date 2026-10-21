__d("WAWebOneOnOneIcceCallBubble.react", [
    "fbt",
    "WALogger",
    "WAWebCallCollection",
    "WAWebCallLogMessageCallFromUi",
    "WAWebCallUserJourneyGating",
    "WAWebConfirmPopup.react",
    "WAWebFrontendChatGetters",
    "WAWebIcceBubbleActivationHandlers",
    "WAWebLidMigrationUtils",
    "WAWebMessageNotificationCallLog.react",
    "WAWebPipController",
    "WAWebPreCallUserJourneyLogger",
    "WAWebStateUtils",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipCallStateUtils",
    "WAWebVoipEventConstants",
    "WAWebVoipMoveCallHere",
    "WAWebVoipStartCall",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WDSIconIcCallFilled.react",
    "WDSIconIcVideocamFilled.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = _ || (_ = o("react"));
    function g({ callOutcome, chat, contact, displayAuthor, elRef, forwardClickRef, isMissedCall, isVideo, msg, ongoingCallId }) {
        const S = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL), function() {
            return r("WAWebCallCollection").activeCall;
        });
        const R = ()=>{
            let t;
            (t = o("WAWebVoipActivityTracker")).startActivityTracking();
            t.startUiActivityTracking();
            t.trackUiActivity(t.VoipUiActivity.ICCE_BUBBLE_CLICK_1ON1);
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: starting 1:1 call from ICCE confirm dialog video=",
                ""
            ])), isVideo);
            o("WAWebVoipStartCall").startWAWebVoipCall(chat.contact.id, isVideo, o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() ? o("WAWebCallLogMessageCallFromUi").getCallLogMessageCallFromUi(callOutcome) : o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_LOG_MESSAGE_ENDED, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED, ongoingCallId, {
                entryTrust: "user_gesture"
            });
        };
        const L = (t)=>{
            const e = o("WAWebVoipCallStateUtils").isCallIncoming(S?.getState());
            if (!e && (o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow() || o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen())) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: returning to 1:1 call from ICCE, reclaiming external surface"
                ])));
                o("WAWebVoipMoveCallHere").moveCallHere();
                return true;
            }
            if (t == null) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: 1:1 ICCE same peer but no call log to reopen"
                ])));
                return false;
            }
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: opening 1:1 call miniplayer from ICCE"
            ])));
            r("WAWebPipController").openVoipUiPiP(t);
            return true;
        };
        const E = ()=>{
            if (S == null || S.isGroup) {
                return false;
            }
            const t = o("WAWebLidMigrationUtils").toCommonAddressingMode(S.peerJid, chat.id);
            const n = t[0];
            const r = t[1];
            return n?.equals(r) ?? false;
        };
        const k = function() {
            new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger().clickICCE(o("WAWebIcceBubbleActivationHandlers").getIcceBubbleSubSurface(isMissedCall));
            const e = S != null && S.id === msg.id.id && !S.isGroup;
            if (!((e || E()) && L(e ? o("WAWebStateUtils").unproxy(msg.unsafe()) : S?.msg))) {
                if (S != null) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: 1:1 ICCE call blocked — already in an active call"
                    ])));
                    o("WAWebVoipCallBlockedModals").showEndCurrentCallToast();
                    return;
                }
                n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
                        title: s._("Call {name}", [
                            s._param("name", o("WAWebFrontendChatGetters").getFormattedTitle(chat))
                        ]),
                        okText: isVideo ? s._("Video call") : s._("Voice call"),
                        okIcon: r(isVideo ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react")
                    });
                    if (e) {
                        R();
                    }
                })().catch((e)=>{
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: 1:1 ICCE call confirm dialog failed"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("icce-1on1-confirm");
                });
            }
        };
        const I = o("WAWebIcceBubbleActivationHandlers").getIcceBubbleActivationHandlers(k);
        const { onClick, onKeyDown } = I;
        const Component = r("WAWebMessageNotificationCallLog.react");
        return <div role="button" ref={elRef} tabIndex={0} data-testid="voip_icce_bubble_1on1_call" onKeyDown={onKeyDown} onClick={onClick}><Component ref={forwardClickRef} msg={msg} contact={contact} displayAuthor={displayAuthor}/></div>;
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    l.default = g;
}, 226);