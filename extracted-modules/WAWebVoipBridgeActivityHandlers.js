__d("WAWebVoipBridgeActivityHandlers", [
    "WAWebVoipActivityTracker",
    "WAWebVoipAnrTracker",
    "WAWebVoipCrashContext",
    "WAWebVoipIncomingOfferToLayoutStore",
    "WAWebVoipOutgoingSetupLatencyStore"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        startAnrTracking: function() {
            o("WAWebVoipCrashContext").ensureVoipCrashContextRegistered();
            o("WAWebVoipAnrTracker").startAnrTracking();
        },
        consumeAnrCount: function() {
            return o("WAWebVoipAnrTracker").consumeAnrCount();
        },
        startActivityTracking: function() {
            o("WAWebVoipActivityTracker").startActivityTracking();
        },
        trackVoipActivity: function({ activity, details }) {
            o("WAWebVoipActivityTracker").trackActivity(activity, details);
        },
        trackVoipCallStateChange: function({ stateName }) {
            o("WAWebVoipActivityTracker").trackCallStateChange(stateName);
        },
        consumeActivityData: function() {
            return o("WAWebVoipActivityTracker").consumeActivityData();
        },
        clearActivityTracking: function() {
            o("WAWebVoipActivityTracker").clearActivityTracking();
        },
        startUiActivityTracking: function() {
            o("WAWebVoipActivityTracker").startUiActivityTracking();
        },
        consumeUiActivityData: function() {
            return o("WAWebVoipActivityTracker").consumeUiActivityData();
        },
        clearUiActivityTracking: function() {
            o("WAWebVoipActivityTracker").clearUiActivityTracking();
        },
        clearAllActivityTracking: function() {
            o("WAWebVoipActivityTracker").clearAllActivityTracking();
        },
        consumeOutgoingCallSetupActiveMs: function({ callId }) {
            return o("WAWebVoipOutgoingSetupLatencyStore").consumeOutgoingCallSetupActiveMsForCall(callId);
        },
        consumeIncomingCallWindowShownMs: function() {
            return o("WAWebVoipIncomingOfferToLayoutStore").consumeIncomingCallWindowShownMs();
        }
    };
    l.VoipBridgeActivityHandlers = e;
}, 98);