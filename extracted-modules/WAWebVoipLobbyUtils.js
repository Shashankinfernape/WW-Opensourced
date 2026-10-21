__d("WAWebVoipLobbyUtils", [
    "fbt",
    "WAWebFbtIntlList",
    "WAWebUserPrefsMeUser",
    "WAWebVoipCallStateUtils",
    "WAWebVoipConnectingStatus.react",
    "WAWebVoipWaCallEnums",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e, t) {
        if (e) {
            if (t === o("WAWebVoipWaCallEnums").CallState.Rejoining || t === o("WAWebVoipWaCallEnums").CallState.ReceivedCall || t === o("WAWebVoipWaCallEnums").CallState.AcceptSent || t === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer) {
                return true;
            }
            return t === o("WAWebVoipWaCallEnums").CallState.Link;
        }
        return false;
    }
    function d({ callState, isCallLinkLobbyConnecting, showSurveyUI }) {
        const o = callState != null || isCallLinkLobbyConnecting;
        return o && !showSurveyUI;
    }
    function m(e) {
        if (e.length !== 2) {
            return null;
        }
        const t = p(e);
        if (t.length === 1) {
            return t[0];
        }
        return null;
    }
    function p(e) {
        return e.filter((e)=>!o("WAWebUserPrefsMeUser").isMeAccount(e));
    }
    function _(e, t) {
        return e.filter((e)=>{
            if (o("WAWebUserPrefsMeUser").isMeAccount(e)) {
                return false;
            }
            const n = t.get(e.toString());
            return n === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
        });
    }
    function f(e, t) {
        const n = _(e, t);
        return n.length >= 1;
    }
    function g(e = false, t) {
        const n = o("WAWebVoipCallStateUtils").isCallConnecting(t);
        return {
            positiveButton: {
                labelKey: "join",
                shouldShow: !e && !n
            },
            negativeButton: e || n ? {
                labelKey: "end",
                shouldShow: true,
                showLabel: false,
                styleType: "filled"
            } : {
                labelKey: "ignore",
                shouldShow: true,
                styleType: "borderless"
            }
        };
    }
    function h({ callState, isCallOutgoing, onEnd, onReject }) {
        const i = o("WAWebVoipCallStateUtils").isCallConnecting(callState);
        if (isCallOutgoing || i) {
            return onEnd;
        }
        return onReject;
    }
    function y({ callCreatorName, callLogMsg, callState, isCallOutgoing = false }) {
        if (o("WAWebVoipCallStateUtils").isCallConnecting(callState)) {
            return u.jsx(r("WAWebVoipConnectingStatus.react"), {});
        }
        if (callLogMsg != null) {
            const c = callLogMsg.isVideoCall;
            const d = c ? s._("Video call") : s._("Voice call");
            if (!isCallOutgoing && callCreatorName != null) {
                const m = s._("From {call_creator_name}", [
                    s._param("call_creator_name", callCreatorName)
                ]);
                return r("WAWebFbtIntlList")([
                    d,
                    m
                ], r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.BULLET);
            }
            return d;
        }
        return s._("Group call");
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    l.isLobbyApplicableForCallState = c;
    l.shouldShowCallControls = d;
    l.getSolePeerInGroupCall = m;
    l.getParticipantsWithoutSelf = p;
    l.getConnectedParticipantsWithoutSelf = _;
    l.getArePeersActiveInCall = f;
    l.getLobbyButtonDisplayProps = g;
    l.getLobbyNegativeButtonHandler = h;
    l.getLobbyParticipantInfoText = y;
}, 226);