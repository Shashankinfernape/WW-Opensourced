__d("WAWebVoipBridgeNotificationHandlers", [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCallAcceptedElsewhereNotificationDeferral",
    "WAWebCallBusyTone",
    "WAWebCallCollection",
    "WAWebCallLogUtils",
    "WAWebGroupMetadataCollection",
    "WAWebNotificationBackend",
    "WAWebNotificationsCallNotification",
    "WAWebNotificationsMissedCallTracker",
    "WAWebParticipantListUtils",
    "WAWebVoipCallSurveyState",
    "WAWebVoipGatingUtils",
    "WAWebVoipHandleNativeCallEvent",
    "WAWebVoipLinkPreviewCallLink",
    "WAWebVoipNackHandlers",
    "WAWebVoipStartCall",
    "WAWebVoipWaCallEnums",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWidFactory",
    "getErrorSafe"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    function g(groupJid, n) {
        const a = s._("Group call").toString();
        try {
            if (groupJid != null) {
                const i = r("WAWebGroupMetadataCollection").get(groupJid);
                if (i?.subject != null && i.subject !== "") {
                    return i.subject;
                }
            }
            if (n.length === 0) {
                return a;
            }
            const l = o("WAWebCallLogUtils").sortParticipantWidsByPriority(n);
            return o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(l, true);
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: computeGroupCallTitle failed, using fallback title"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-compute-group-call-title-failed");
            return a;
        }
    }
    function h(lastActiveCall, callLogResult) {
        if (callLogResult === o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere && lastActiveCall.isGroup && o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() && o("WAWebABProps").getABPropConfigValue("enable_call_transfer_notification")) {
            const n = lastActiveCall.id;
            if (n != null) {
                const a = lastActiveCall.groupCallParticipants ?? [];
                const i = g(lastActiveCall.groupJid, a);
                const l = {
                    callId: n,
                    groupJid: lastActiveCall.groupJid,
                    isVideo: lastActiveCall.isVideo,
                    onJoinCall: function() {
                        o("WAWebVoipStartCall").joinOngoingCallByCallId(n);
                    },
                    participantWids: a,
                    title: i
                };
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: routing call-accepted-elsewhere notification for group call ",
                    " through foreground deferral"
                ])), n);
                o("WAWebCallAcceptedElsewhereNotificationDeferral").deferCallAcceptedElsewhereNotificationUntilForeground(l);
            }
        }
    }
    const y = {
        cancelCallNotification: function({ wid }) {
            o("WAWebNotificationsCallNotification").cancelCallNotification(wid);
        },
        handleCallEndingForSurvey: function({ callLogResult, connectTime, userRatingInterval }) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleCallEndingForSurvey - connectTime: ",
                ", userRatingInterval: ",
                ", callLogResult: ",
                ""
            ])), connectTime, userRatingInterval, callLogResult);
            const lastActiveCall = r("WAWebCallCollection").lastActiveCall;
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleCallEndingForSurvey - lastActiveCall exists: ",
                ", callLogResult value: ",
                ""
            ])), lastActiveCall != null, callLogResult);
            if (lastActiveCall != null && callLogResult != null) {
                lastActiveCall.callLogResult = callLogResult;
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallEndingForSurvey - stored callLogResult: ",
                    " on lastActiveCall"
                ])), callLogResult);
                h(lastActiveCall, callLogResult);
            }
            if (callLogResult === o("WAWebVoipWaCallEnums").CallLogResult.Missed && document.hidden) {
                o("WAWebNotificationsMissedCallTracker").markCallMissedWhileHidden(o("WATimeUtils").unixTime());
            }
            if (o("WAWebVoipCallSurveyState").shouldShowSurveyBasedOnInterval(userRatingInterval)) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Showing post-call survey based on call ending event (fallback)"
                ])));
                r("WAWebCallCollection").setShouldShowPostCallSurveyOnLastActiveCall(true);
            } else if (userRatingInterval >= 0) {
                o("WAWebVoipHandleNativeCallEvent").requestStoredFieldstatsSend();
            }
        },
        handleGroupCallReminder: function(t) {
            const t_linkToken = t.linkToken;
            if (t_linkToken != null) {
                if (t.reminderType === o("WAWebVoipWaCallEnums").ServerReminderType.CallLinkJoinedCreator || t.reminderType === o("WAWebVoipWaCallEnums").ServerReminderType.CallLinkCreatorCallConnected) {
                    const participantWids = t.participants.map((e)=>o("WAWebWidFactory").createUserWidOrThrow(e.jid.user, e.jid.server));
                    o("WAWebNotificationBackend").showCallLinkJoinedNotification({
                        callId: t.callId,
                        linkToken: t_linkToken,
                        participantWids,
                        onJoinCall: function() {
                            const n = t.reminderType === o("WAWebVoipWaCallEnums").ServerReminderType.CallLinkCreatorCallConnected ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.LINK_CREATOR_CALL_CONNECTED_PUSH_NOTIFICATION : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LINK_CREATOR_PUSH_NOTIFICATION;
                            o("WAWebVoipLinkPreviewCallLink").handleClickCallLink({
                                resultType: "CALL_LINK",
                                data: {
                                    token: t_linkToken,
                                    callType: t.isVideoCall ? "video" : "audio"
                                }
                            }, n);
                        }
                    });
                    return;
                }
                if (t.reminderType === o("WAWebVoipWaCallEnums").ServerReminderType.WaitingRoomJoined || t.reminderType === o("WAWebVoipWaCallEnums").ServerReminderType.WaitingRoomMultipleJoined) {
                    o("WAWebNotificationBackend").showWaitingRoomNotification({
                        callId: t.callId,
                        linkToken: t_linkToken,
                        waitingRoomUserWids: t.waitingRoomUsers,
                        onOpenWaitingRoom: function() {
                            const n = t.reminderType === o("WAWebVoipWaCallEnums").ServerReminderType.WaitingRoomMultipleJoined ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.WAITING_ROOM_MULTIPLE_JOINED_PUSH_NOTIFICATION : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.WAITING_ROOM_JOINED_PUSH_NOTIFICATION;
                            o("WAWebVoipLinkPreviewCallLink").handleClickCallLink({
                                resultType: "CALL_LINK",
                                data: {
                                    token: t_linkToken,
                                    callType: t.isVideoCall ? "video" : "audio"
                                }
                            }, n);
                        }
                    });
                    return;
                }
            }
        },
        showVoiceChatWaveNotification: function(t) {
            o("WAWebNotificationBackend").showVoiceChatWaveNotification(babelHelpers.extends({}, t, {
                onJoinCall: function() {
                    o("WAWebVoipStartCall").joinOngoingCallByCallId(t.callId).catch((e)=>{
                        o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: failed to join ongoing call from wave notification"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("voip-wave-join-call-failed");
                    });
                }
            })).catch((e)=>{
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: failed to show voice chat wave notification"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("voip-wave-notification-failed");
            });
        },
        showUserRemovedDialog: function({ removerJid }) {
            o("WAWebVoipNackHandlers").showUserRemovedDialog(removerJid);
        },
        showParticipantRemovedToast: function({ removeeJid }) {
            o("WAWebVoipNackHandlers").showParticipantRemovedToast(removeeJid);
        },
        playBusyTone: function() {
            o("WAWebCallBusyTone").playBusyTone();
        },
        stopBusyTone: function() {
            o("WAWebCallBusyTone").stopBusyTone();
        },
        setPeerBusy: function() {
            r("WAWebCallCollection").activeCall?.markPeerBusy();
        }
    };
    l.VoipBridgeNotificationHandlers = y;
}, 226);