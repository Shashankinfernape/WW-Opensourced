__d("WAWebFormatCallLog", [
    "fbt",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgGetters"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg }) {
        if (o("WAWebMsgGetters").getIsCallSilenced(msg)) {
            return s._("Silenced unknown caller");
        }
        let n = u(msg.subtype);
        if (n != null) {
            return n;
        }
        const r = o("WAWebMsgGetters").getCallOutcome(msg);
        const isAdHocGroupCall = o("WAWebMsgGetters").getIsAdHocGroupCall(msg);
        const i = o("WAWebMsgGetters").getIsMissedCall(msg);
        const isVideoCall = o("WAWebMsgGetters").getIsVideoCall(msg);
        const d = o("WAWebMsgGetters").getIsSentByMe(msg);
        const m = o("WAWebMsgGetters").getCallParticipants(msg);
        const p = o("WAWebMsgGetters").getFinalCallOutcome(msg);
        const _ = o("WAWebCallLogUtils").getIsSelfConnected(m);
        const isMissedCall = o("WAWebCallLogUtils").getIsMissedCallOrNotConnected(i, _, d, r, p);
        const isOngoing = r === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing && p !== o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
        if (r) {
            n = c({
                isAdHocGroupCall,
                isMissedCall,
                isOngoing,
                isVideoCall
            });
        }
        return n ?? "";
    }
    function u(subtype) {
        switch(subtype){
            case "miss":
                return s._("Missed voice call");
            case "miss_video":
                return s._("Missed video call");
            case "miss_group":
            case "miss_group_video":
                return s._("Missed group call");
        }
    }
    function c({ isAdHocGroupCall, isMissedCall, isOngoing, isVideoCall }) {
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
    l.default = e;
}, 226);