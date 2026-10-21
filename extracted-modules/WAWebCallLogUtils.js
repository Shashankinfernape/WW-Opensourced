__d("WAWebCallLogUtils", [
    "fbt",
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebCallCollection",
    "WAWebCallLogMsgData.flow",
    "WAWebCallTimer.react",
    "WAWebContactCollection",
    "WAWebContactExternalUserState",
    "WAWebContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebUserPrefsMeUser",
    "WAWebVoipBackendCallLogTargetResolver",
    "WAWebVoipConnectingStatus.react",
    "WAWebVoipWaCallEnums",
    "nullthrows",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        if (e == null || e.length === 0) {
            return false;
        }
        const n = e.some((e)=>e.participant.isLid());
        const r = n ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        return e.find((e)=>e.participant?.equals(r))?.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
    }
    function d(e, t, n, r, a) {
        return (e || !t) && !n && r !== o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere && (a == null || a === o("WAWebCallLogMsgData.flow").CallOutcome.Missed || a === o("WAWebCallLogMsgData.flow").CallOutcome.Rejected || a === o("WAWebCallLogMsgData.flow").CallOutcome.Canceled);
    }
    function m(callState, t) {
        if (callState === o("WAWebVoipWaCallEnums").CallState.Calling) {
            return s._("Calling...");
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived) {
            return s._("Ringing...");
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.ReceivedCall || callState === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer) {
            if (t != null && t.isVideoCall) {
                return s._("Video call");
            }
            return s._("Voice call");
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.AcceptSent || callState === o("WAWebVoipWaCallEnums").CallState.AcceptReceived) {
            return u.jsx(r("WAWebVoipConnectingStatus.react"), {});
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.CallActive) {
            return u.jsx(r("WAWebCallTimer.react"), {
                callState
            });
        }
        if (callState === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely || callState === o("WAWebVoipWaCallEnums").CallState.Rejoining) {
            return s._("Waiting for others...");
        }
        if (callState == null) {
            return s._("Call ended");
        }
        if (callState != null) {
            return o("WAWebVoipWaCallEnums").CallState.getName(callState);
        }
        return "unknown";
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    function p(e) {
        switch(e){
            case 0:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
            case 1:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Rejected;
            case 2:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Canceled;
            case 3:
                return o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere;
            case 4:
            case 6:
            case 9:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Missed;
            case 5:
            case 7:
            case 8:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Failed;
            case 10:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing;
            default:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Unknown;
        }
    }
    function _(e) {
        switch(e){
            case 0:
                return o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
            case 1:
                return o("WAWebVoipWaCallEnums").CallParticipantState.Rejected;
            case 2:
                return o("WAWebVoipWaCallEnums").CallParticipantState.Terminated;
            case 4:
            case 6:
            case 9:
                return o("WAWebVoipWaCallEnums").CallParticipantState.Terminated;
            case 10:
                return o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
            case 3:
            case 5:
            case 7:
            case 8:
                return o("WAWebVoipWaCallEnums").CallParticipantState.Invalid;
            default:
                return o("WAWebVoipWaCallEnums").CallParticipantState.Invalid;
        }
    }
    function f(e, t) {
        switch(e){
            case o("WAWebVoipWaCallEnums").CallLogResult.Connected:
            case o("WAWebVoipWaCallEnums").CallLogResult.ConnectedLonely:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
            case o("WAWebVoipWaCallEnums").CallLogResult.Missed:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Missed;
            case o("WAWebVoipWaCallEnums").CallLogResult.Rejected:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Rejected;
            case o("WAWebVoipWaCallEnums").CallLogResult.Canceled:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Canceled;
            case o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere:
            case o("WAWebVoipWaCallEnums").CallLogResult.ScreenedElsewhere:
                return o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere;
            case o("WAWebVoipWaCallEnums").CallLogResult.Unavailable:
                if (t != null && t > 0) {
                    return o("WAWebCallLogMsgData.flow").CallOutcome.Failed;
                }
                return o("WAWebCallLogMsgData.flow").CallOutcome.Missed;
            case o("WAWebVoipWaCallEnums").CallLogResult.Failed:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Failed;
            case o("WAWebVoipWaCallEnums").CallLogResult.Invalid:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Unknown;
        }
    }
    function g(e) {
        switch(e){
            case o("WAWebVoipWaCallEnums").CallState.None:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
            case o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere:
                return o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere;
            case o("WAWebVoipWaCallEnums").CallState.Calling:
            case o("WAWebVoipWaCallEnums").CallState.PreacceptReceived:
            case o("WAWebVoipWaCallEnums").CallState.ReceivedCall:
            case o("WAWebVoipWaCallEnums").CallState.AcceptSent:
            case o("WAWebVoipWaCallEnums").CallState.AcceptReceived:
            case o("WAWebVoipWaCallEnums").CallState.CallActive:
            case o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer:
            case o("WAWebVoipWaCallEnums").CallState.Rejoining:
            case o("WAWebVoipWaCallEnums").CallState.Link:
            case o("WAWebVoipWaCallEnums").CallState.ConnectedLonely:
            case o("WAWebVoipWaCallEnums").CallState.PreCalling:
            case o("WAWebVoipWaCallEnums").CallState.CallStateEnding:
            case o("WAWebVoipWaCallEnums").CallState.CallBCallStarting:
                return o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing;
        }
    }
    function h(e) {
        switch(e){
            case 1:
                return "scheduled";
            case 2:
                return "privacy";
            case 3:
                return "lightweight";
            case 4:
                return "screensharing";
            case 5:
                return "group_setting";
            case 6:
                return "vc_init";
            case 7:
                return "vc_wave";
            case 8:
                return "vc_wave_all";
            case 9:
                return "added_as_link_creator";
            case 10:
                return "added_for_device_switching";
            case 11:
                return "group_chat_add";
            default:
                return;
        }
    }
    function y(e, t) {
        return e != null && t != null && e.isSameAccountAndAddressingMode(t);
    }
    function C(participantWids, t) {
        if (participantWids.length !== t.length) {
            return false;
        }
        return participantWids.every((e)=>t.some((t)=>y(e, t)));
    }
    function b(e) {
        const r = e.unsafe();
        return {
            isCallLink: o("WAWebMsgGetters").getIsCallLink(r) ?? false,
            sender: o("WAWebMsgGetters").getSender(r),
            to: o("WAWebMsgGetters").getTo(r),
            isVideoCall: o("WAWebMsgGetters").getIsVideoCall(r),
            isSentByMe: o("WAWebMsgGetters").getIsSentByMe(r),
            isGroupCall: o("WAWebMsgGetters").getIsGroupCall(r),
            isMissedCall: o("WAWebMsgGetters").getIsMissedCall(r),
            isCallSilenced: o("WAWebMsgGetters").getIsCallSilenced(r),
            t: o("WAWebMsgGetters").getT(r),
            participantWids: e.callParticipants?.map(function(e) {
                return e.participant;
            })
        };
    }
    function v(e, t) {
        if (e.isCallLink || t.isCallLink || !y(e.sender, t.sender) || !y(e.to, t.to)) {
            return false;
        }
        const n = e.isVideoCall === t.isVideoCall && e.isSentByMe === t.isSentByMe && e.isGroupCall === t.isGroupCall;
        if (!n || e.isMissedCall !== t.isMissedCall) {
            return false;
        }
        const r = (e.isCallSilenced && !e.isSentByMe) === (t.isCallSilenced && !t.isSentByMe);
        if (!r || !o("WATimeUtils").sameDay(o("WATimeUtils").castToUnixTime(e.t), o("WATimeUtils").castToUnixTime(t.t))) {
            return false;
        }
        const a = e.participantWids != null && t.participantWids != null && C(e.participantWids, t.participantWids);
        return a;
    }
    function S(e, t) {
        return v(b(e), b(t));
    }
    function R(e) {
        if (e.length === 0) {
            return [];
        }
        const t = e.filter((e)=>e.callOutcome !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing);
        if (t.length === 0) {
            return [];
        }
        for(var n = t.map((e)=>r("nullthrows")(o("WAWebFrontendMsgGetters").getAsCallLog(e), "[mergeCallRecords] record is not a call log record")), a = n.map(b), i = [], l = 0, mergedMsgs = [
            n[0].unsafe()
        ], u = 1; u < n.length; u++){
            if (v(a[l], a[u])) {
                mergedMsgs.push(n[u].unsafe());
            } else {
                i.push({
                    mergedMsgs
                });
                l = u;
                mergedMsgs = [
                    n[u].unsafe()
                ];
            }
        }
        i.push({
            mergedMsgs
        });
        return i;
    }
    const L = 100000;
    const E = 10000;
    const k = 1000;
    const I = 100;
    const T = 10;
    const D = 1;
    function x(e, t) {
        let n = 0;
        if (t.isCaller) {
            n += L;
        }
        if (t.isBot) {
            n += E;
        }
        if (t.isConnected) {
            n += k;
        }
        const r = o("WAWebContactCollection").ContactCollection.get(e);
        const a = r?.name != null && r.name !== "";
        if (a) {
            n += I;
        } else if (r != null && o("WAWebContactGetters").getNotifyName(r) != null) {
            n += T;
        }
        const i = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(e);
        const l = o("WAWebProfilePicThumbGetters").getMaybeImg(i);
        const s = l != null && l !== "";
        if (s) {
            n += D;
        }
        return n;
    }
    function $(e, t, n) {
        const a = n?.has(e.toString()) ?? false;
        const i = n?.has(t.toString()) ?? false;
        const l = x(e, {
            isCaller: false,
            isConnected: a,
            isBot: false
        });
        const s = x(t, {
            isCaller: false,
            isConnected: i,
            isBot: false
        });
        return s - l;
    }
    function P(e, t, n) {
        const a = n?.excludeSelf ?? false;
        const i = e.some((e)=>e.participant.isLid());
        const l = i ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        const s = o("WAWebMsgGetters").getIsSentByMe(t);
        const u = s ? null : o("WAWebMsgGetters").getSender(t);
        return e.filter((e)=>{
            if (a) {
                return !e.participant.equals(l);
            }
            return true;
        }).sort(({ participant }, n)=>{
            const n_participant = n.participant;
            if (u != null) {
                const i = participant.equals(u);
                const s = n_participant.equals(u);
                if (i && !s) {
                    return -1;
                }
                if (!i && s) {
                    return 1;
                }
            }
            const c = participant.equals(l);
            const d = n_participant.equals(l);
            if (c && !d) {
                return -1;
            }
            if (!c && d) {
                return 1;
            }
            const m = o("WAWebBotUtils").isMetaAiBot(participant);
            const p = o("WAWebBotUtils").isMetaAiBot(n_participant);
            if (m && !p) {
                return -1;
            }
            if (!m && p) {
                return 1;
            }
            return $(participant, n_participant, new Set(e.filter((e)=>e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected).map((e)=>e.participant.toString())));
        });
    }
    function N(e) {
        const lastActiveCall = r("WAWebCallCollection").lastActiveCall;
        if (lastActiveCall?.userEndedCall === true) {
            return false;
        }
        const a = lastActiveCall?.isGroup ?? false;
        const i = e != null ? o("WAWebMsgGetters").getCallOutcome(e) : null;
        const l = a && i === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing;
        const s = lastActiveCall?.callFailedReason != null;
        if (s) {
            return true;
        }
        return !l;
    }
    function M(e, t = false) {
        if (e === o("WAWebVoipWaCallEnums").CallLogResult.Connected) {
            return s._("Call ended");
        }
        if (e === o("WAWebVoipWaCallEnums").CallLogResult.Canceled || e === o("WAWebVoipWaCallEnums").CallLogResult.Missed || e === o("WAWebVoipWaCallEnums").CallLogResult.Rejected) {
            if (t) {
                return s._("No answer");
            }
            return s._("Call ended");
        }
        if (e === o("WAWebVoipWaCallEnums").CallLogResult.AcceptedElsewhere || e === o("WAWebVoipWaCallEnums").CallLogResult.ScreenedElsewhere) {
            return s._("Answered elsewhere");
        }
        if (e === o("WAWebVoipWaCallEnums").CallLogResult.Failed) {
            return s._("Call failed");
        }
        if (e === o("WAWebVoipWaCallEnums").CallLogResult.ConnectedLonely || e === o("WAWebVoipWaCallEnums").CallLogResult.Unavailable || e === o("WAWebVoipWaCallEnums").CallLogResult.Invalid || e === null || e === undefined) {
            return s._("Call ended");
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    M.displayName = `${M.name} [from ${i.id}]`;
    function w(e, t, n = true, r) {
        if (e) {
            return "return";
        }
        if (n && (t || r === true)) {
            return "join_here";
        }
        return "join";
    }
    function A(e, t) {
        return [].concat(e).sort((e, n)=>{
            const r = o("WAWebBotUtils").isMetaAiBot(e);
            const a = o("WAWebBotUtils").isMetaAiBot(n);
            if (r && !a) {
                return -1;
            }
            if (!r && a) {
                return 1;
            }
            return $(e, n, t);
        });
    }
    function F(e) {
        const connectedSet = new Set(e.map((e)=>e.toString()));
        const sortedParticipants = A(e, connectedSet);
        return {
            sortedParticipants,
            connectedSet
        };
    }
    function O(e, t, n) {
        const i = n?.excludeSelf ?? false;
        const l = n?.excludeGuests ?? false;
        const s = e.some((e)=>e.isLid());
        const u = s ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        const c = o("WAWebMsgGetters").getIsSentByMe(t);
        const d = c ? null : o("WAWebMsgGetters").getSender(t);
        return e.filter((e)=>{
            if (i && e.equals(u)) {
                return false;
            }
            if (l) {
                const t = o("WAWebContactCollection").ContactCollection.get(e);
                if (t != null && B(t)) {
                    return false;
                }
            }
            return true;
        }).sort((e, t)=>{
            if (d != null) {
                const n = e.equals(d);
                const r = t.equals(d);
                if (n && !r) {
                    return -1;
                }
                if (!n && r) {
                    return 1;
                }
            }
            const a = e.equals(u);
            const i = t.equals(u);
            if (a && !i) {
                return -1;
            }
            if (!a && i) {
                return 1;
            }
            const l = o("WAWebBotUtils").isMetaAiBot(e);
            const s = o("WAWebBotUtils").isMetaAiBot(t);
            if (l && !s) {
                return -1;
            }
            if (!l && s) {
                return 1;
            }
            return $(e, t, null);
        });
    }
    function B(e) {
        return e.externalUserState === o("WAWebContactExternalUserState").ExternalUserState.GuestUser;
    }
    l.get1x1CallLidOrPnDestination = o("WAWebVoipBackendCallLogTargetResolver").get1x1CallLidOrPnDestination;
    l.getCallLogTargetDetails = o("WAWebVoipBackendCallLogTargetResolver").getCallLogTargetDetails;
    l.getIsSelfConnected = c;
    l.getIsMissedCallOrNotConnected = d;
    l.getCallStateText = m;
    l.getCallOutcomeFromCallResultSyncProto = p;
    l.getCallParticipantStateFromCallResultSyncProto = _;
    l.getCallOutcomeFromCallLogResult = f;
    l.getCallOutcomeFromCallState = g;
    l.getCallSilenceReason = h;
    l.shouldMergeCallLogRecords = S;
    l.mergeCallRecords = R;
    l.getParticipantSortScore = x;
    l.sortCallParticipants = P;
    l.shouldShowCallEndedScreen = N;
    l.getCallResultText = M;
    l.getJoinButtonTextType = w;
    l.sortParticipantWidsByPriority = A;
    l.sortConnectedParticipants = F;
    l.sortCallParticipantWids = O;
}, 226);