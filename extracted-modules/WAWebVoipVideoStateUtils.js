__d("WAWebVoipVideoStateUtils", [
    "WAWebVoipWaCallEnums"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (e == null) {
            return true;
        }
        return e === o("WAWebVoipWaCallEnums").VideoState.Disabled || e === o("WAWebVoipWaCallEnums").VideoState.Error || e === o("WAWebVoipWaCallEnums").VideoState.Stopped || e === o("WAWebVoipWaCallEnums").VideoState.UpgradeCancel || e === o("WAWebVoipWaCallEnums").VideoState.UpgradeCancelByTimeout || e === o("WAWebVoipWaCallEnums").VideoState.UpgradeReject || e === o("WAWebVoipWaCallEnums").VideoState.UpgradeRejectByTimeout;
    }
    function s(e) {
        return e === o("WAWebVoipWaCallEnums").VideoState.Stopped || e === o("WAWebVoipWaCallEnums").VideoState.Disabled || e === o("WAWebVoipWaCallEnums").VideoState.UnknownPeer;
    }
    function u(e) {
        return e === o("WAWebVoipWaCallEnums").VideoState.Paused;
    }
    function c(e) {
        return s(e) || u(e);
    }
    function d(e) {
        return e === o("WAWebVoipWaCallEnums").VideoState.Enabled || e === o("WAWebVoipWaCallEnums").VideoState.UpgradeAccept || e === o("WAWebVoipWaCallEnums").VideoState.Paused;
    }
    function m(e) {
        return e === o("WAWebVoipWaCallEnums").VideoState.Enabled;
    }
    function p(e, t) {
        if (e) {
            if (t) {
                return o("WAWebVoipWaCallEnums").VideoState.Stopped;
            }
            return o("WAWebVoipWaCallEnums").VideoState.Enabled;
        }
        return o("WAWebVoipWaCallEnums").VideoState.Disabled;
    }
    l.isVideoStateInactiveForCallMode = e;
    l.isVideoInactive = s;
    l.isVideoPaused = u;
    l.isVideoMuted = c;
    l.shouldShowVideo = d;
    l.isVideoEnabled = m;
    l.getInitialCallLinkSelfVideoState = p;
}, 98);