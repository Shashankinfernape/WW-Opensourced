__d("WAWebVoipActionWebHandleIncomingSignalingMessage", [
    "WALogger",
    "WAWebCallCollection",
    "WAWebCallLogMsgData.flow",
    "WAWebVoipActionWriteCallLogOfferNotice",
    "WAWebVoipCameraPrewarm",
    "WAWebVoipSignalingEnums",
    "WAWebVoipWaCallEnums"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(t, n) {
        const a = o("WAWebVoipSignalingEnums").TYPE_NAME[t.type];
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            'voip:handleIncomingSignalingMsg: type: "',
            '" msg: '
        ])), a);
        const i = r("WAWebCallCollection").processIncomingCall(t.call_id, t.peer_jid, {
            isVideo: t.isVideoCall,
            offerTime: t.t,
            isSilenced: !!t.silence_reason,
            offerReceivedWhileOffline: t.is_offline,
            groupWid: t.group_jid
        });
        if (!i) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip:disabled: sig type ",
                ", call not found"
            ])), t.type);
            return;
        }
        switch(t.type){
            case o("WAWebVoipSignalingEnums").TYPE.OFFER:
                if (t.t != null) {
                    i.offerTime = t.t;
                }
                i.isVideo = !!t.isVideoCall;
                i.setState(o("WAWebVoipWaCallEnums").CallState.ReceivedCall);
                i.isVoiceChat = t.silence_reason === "vc_init" || t.silence_reason === "vc_wave_all";
                i.silenceReason = t.silence_reason;
                if (t.silence_reason === "vc_wave_all") {
                    const l = i.isGroup ? {
                        isGroup: true,
                        groupJid: i.groupJid
                    } : {
                        isGroup: false
                    };
                    o("WAWebVoipActionWriteCallLogOfferNotice").generateCallLogOfferNotice(babelHelpers.extends({
                        callCreatorWid: t.peer_jid,
                        offerTime: i.offerTime,
                        isVideo: i.isVideo,
                        silenceReason: t.silence_reason,
                        callId: t.call_id,
                        isOffline: t.is_offline,
                        callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Missed
                    }, l));
                }
                break;
            case o("WAWebVoipSignalingEnums").TYPE.TERMINATE:
                {
                    o("WAWebVoipCameraPrewarm").cleanupPrewarmedCamera();
                    if (i.isVoiceChat) {
                        t.silence_reason = i.silenceReason ?? "";
                    }
                    i.setState(o("WAWebVoipWaCallEnums").CallState.CallStateEnding);
                    const c = n.maybeAttrString("reason");
                    const d = c === "group_call_ended";
                    const m = d ? {
                        isGroup: true,
                        groupJid: i.groupJid
                    } : {
                        isGroup: false
                    };
                    let callOutcome;
                    switch(c){
                        case "group_call_ended":
                        case "timeout":
                        case undefined:
                        case null:
                            callOutcome = o("WAWebCallLogMsgData.flow").CallOutcome.Missed;
                            break;
                        case "accepted_elsewhere":
                            callOutcome = o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere;
                            break;
                        case "rejected_elsewhere":
                            callOutcome = o("WAWebCallLogMsgData.flow").CallOutcome.Rejected;
                            break;
                    }
                    if (callOutcome) {
                        o("WAWebVoipActionWriteCallLogOfferNotice").generateCallLogOfferNotice(babelHelpers.extends({
                            callCreatorWid: t.call_creator,
                            offerTime: i.offerTime,
                            isVideo: i.isVideo,
                            silenceReason: t.silence_reason,
                            callId: t.call_id,
                            isOffline: t.is_offline,
                            callOutcome
                        }, m));
                    }
                    break;
                }
        }
    }
    l.handleVoipWebIncomingSignalingMessageAction = u;
}, 98);