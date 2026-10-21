__d("WAWebCallUserJourneyLogger", [
    "WARandomHex",
    "WAWebCallUserJourneyAppSessionId",
    "WAWebCallUserJourneyGating",
    "WAWebCallUserJourneyWamEvent",
    "WAWebUserJourneyEventMs",
    "WAWebWamEnumCallActionType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = Object.freeze({
        TAP_DIALER_ENTRY: (e = o("WAWebWamEnumCallActionType")).CALL_ACTION_TYPE.TAP_DIALER_ENTRY,
        TAP_DIALER_CALL_BUTTON: e.CALL_ACTION_TYPE.TAP_DIALER_CALL_BUTTON,
        TAP_DIALER_CANCEL: e.CALL_ACTION_TYPE.TAP_DIALER_CANCEL,
        TAP_DIALER_MESSAGE_BUTTON: e.CALL_ACTION_TYPE.TAP_DIALER_MESSAGE_BUTTON,
        TAP_DIALER_ADD_CONTACT: e.CALL_ACTION_TYPE.TAP_DIALER_ADD_CONTACT,
        TAP_FAVORITES_ADD: e.CALL_ACTION_TYPE.TAP_FAVORITES_ADD,
        TAP_FAVORITES_SEE_ALL: e.CALL_ACTION_TYPE.TAP_FAVORITES_SEE_ALL,
        TAP_FAVORITES_EDIT_BUTTON: e.CALL_ACTION_TYPE.TAP_FAVORITES_EDIT_BUTTON,
        TAP_FAVORITES_DONE_BUTTON: e.CALL_ACTION_TYPE.TAP_FAVORITES_DONE_BUTTON,
        TAP_FAVORITES_CANCEL_BUTTON: e.CALL_ACTION_TYPE.TAP_FAVORITES_CANCEL_BUTTON,
        TAP_FAVORITES_DELETE_BUTTON: e.CALL_ACTION_TYPE.TAP_FAVORITES_DELETE_BUTTON,
        REORDER_FAVORITES: e.CALL_ACTION_TYPE.REORDER_FAVORITES
    });
    const u = Object.freeze(babelHelpers.extends({}, s, {
        TAP_MUTE: e.CALL_ACTION_TYPE.TAP_MUTE,
        TAP_UNMUTE: e.CALL_ACTION_TYPE.TAP_UNMUTE,
        TURN_ON_CAMERA: e.CALL_ACTION_TYPE.TURN_ON_CAMERA,
        TURN_OFF_CAMERA: e.CALL_ACTION_TYPE.TURN_OFF_CAMERA,
        TYPE_CHARACTER: e.CALL_ACTION_TYPE.TYPE_CHARACTER,
        OPEN_AUDIO_DEVICE_OPTIONS: e.CALL_ACTION_TYPE.OPEN_AUDIO_DEVICE_OPTIONS,
        OPEN_VIDEO_DEVICE_OPTIONS: e.CALL_ACTION_TYPE.OPEN_VIDEO_DEVICE_OPTIONS,
        TAP_ADD_PARTICIPANT: e.CALL_ACTION_TYPE.TAP_ADD_PARTICIPANT,
        OPEN_PARTICIPANT_LIST: e.CALL_ACTION_TYPE.OPEN_PARTICIPANT_LIST,
        OPEN_SEARCH_BAR: e.CALL_ACTION_TYPE.OPEN_SEARCH_BAR,
        CANCEL: e.CALL_ACTION_TYPE.CANCEL,
        CLICK_VIEW_UNKNOWN_PEER_VIDEO: e.CALL_ACTION_TYPE.CLICK_VIEW_UNKNOWN_PEER_VIDEO,
        MESSAGE_OTHER_FOCUS_VIEW: e.CALL_ACTION_TYPE.MESSAGE_OTHER_FOCUS_VIEW,
        MUTE_OTHER: e.CALL_ACTION_TYPE.MUTE_OTHER,
        REMOVE_USER: e.CALL_ACTION_TYPE.REMOVE_USER,
        RING_PARTICIPANT: e.CALL_ACTION_TYPE.RING_PARTICIPANT,
        TAP_WAVE_ONE: e.CALL_ACTION_TYPE.TAP_WAVE_ONE,
        PAGINATE: e.CALL_ACTION_TYPE.PAGINATE,
        PIN: e.CALL_ACTION_TYPE.PIN,
        UNPIN: e.CALL_ACTION_TYPE.UNPIN,
        SWITCH_TO_GALLERY_VIEW: e.CALL_ACTION_TYPE.SWITCH_TO_GALLERY_VIEW,
        SWITCH_TO_SPEAKER_VIEW: e.CALL_ACTION_TYPE.SWITCH_TO_SPEAKER_VIEW,
        SCREEN_SHARE_VIDEO_CALL_ACCEPT: e.CALL_ACTION_TYPE.SCREEN_SHARE_VIDEO_CALL_ACCEPT,
        SCREEN_SHARE_VIDEO_CALL_DECLINE: e.CALL_ACTION_TYPE.SCREEN_SHARE_VIDEO_CALL_DECLINE,
        START_SCREEN_SHARE: e.CALL_ACTION_TYPE.START_SCREEN_SHARE,
        TAP_SCREEN_SHARE: e.CALL_ACTION_TYPE.TAP_SCREEN_SHARE,
        TAP_MORE: e.CALL_ACTION_TYPE.TAP_MORE,
        TAP_REACTION: e.CALL_ACTION_TYPE.TAP_REACTION,
        TAP_RAISE_HAND: e.CALL_ACTION_TYPE.TAP_RAISE_HAND,
        TAP_CONFIRM_ADD_PARTICIPANT: e.CALL_ACTION_TYPE.TAP_CONFIRM_ADD_PARTICIPANT,
        TAP_CONFIRM_ADD_PARTICIPANT_FROM_CHAT: e.CALL_ACTION_TYPE.TAP_CONFIRM_ADD_PARTICIPANT_FROM_CHAT,
        TAP_DISMISS_BUTTON: e.CALL_ACTION_TYPE.TAP_DISMISS_BUTTON,
        TAP_E2EE: e.CALL_ACTION_TYPE.TAP_E2EE,
        TAP_LOWER_HAND: e.CALL_ACTION_TYPE.TAP_LOWER_HAND,
        END_CALL: e.CALL_ACTION_TYPE.END_CALL,
        OPEN_CHAT: e.CALL_ACTION_TYPE.OPEN_CHAT,
        MESSAGE_BUTTON_CALL_HEADER: e.CALL_ACTION_TYPE.MESSAGE_BUTTON_CALL_HEADER,
        TAP_CHAT_HEADER_AUDIO_BUTTON: e.CALL_ACTION_TYPE.TAP_CHAT_HEADER_AUDIO_BUTTON,
        TAP_CHAT_HEADER_VIDEO_BUTTON: e.CALL_ACTION_TYPE.TAP_CHAT_HEADER_VIDEO_BUTTON,
        CLICK_CALL_LINK_SHARE: e.CALL_ACTION_TYPE.CLICK_CALL_LINK_SHARE,
        MESSAGE_SEND_IN_LINKED_CHAT: e.CALL_ACTION_TYPE.MESSAGE_SEND_IN_LINKED_CHAT
    }));
    const c = (()=>{
        function e() {
            this.$1 = null;
            this.$2 = false;
            this.$3 = false;
            this.$4 = false;
            this.$5 = null;
        }
        const e_prototype = e.prototype;
        e_prototype.startCall = function(t) {
            this.$1 = t;
            this.$2 = false;
            this.$3 = false;
            this.$4 = false;
            this.$5 = null;
        };
        e_prototype.setCallConnected = function(t) {
            this.$2 = t;
        };
        e_prototype.setGroupCall = function(t) {
            this.$3 = this.$3 || t;
        };
        e_prototype.setVideoCall = function(t) {
            this.$4 = t;
        };
        e_prototype.setConnectedParticipants = function(t) {
            this.$5 = t;
        };
        e_prototype.logAction = function(n) {
            const t = this.$1;
            if (!(t == null || !o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled())) {
                const r = {
                    appSessionId: o("WAWebCallUserJourneyAppSessionId").callUserJourneyAppSessionId(e.appSessionId),
                    callActionType: n.callActionType,
                    callRandomId: t,
                    isCallConnected: this.$2,
                    uiSurface: n.uiSurface
                };
                if (o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled()) {
                    r.isGroupCall = this.$3;
                    r.isVideoCall = this.$4;
                    const a = this.$5;
                    if (a != null) {
                        r.numConnectedParticipants = a;
                    }
                }
                if (n.subSurface != null) {
                    r.subSurface = n.subSurface;
                }
                const i = o("WAWebUserJourneyEventMs").userJourneyEventMs();
                if (i != null) {
                    r.userJourneyEventMs = i;
                }
                new (o("WAWebCallUserJourneyWamEvent")).CallUserJourneyWamEvent(r).commit();
            }
        };
        e_prototype.logOutOfCallAction = function(n) {
            if (o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
                const t = this.$1;
                const r = {
                    appSessionId: o("WAWebCallUserJourneyAppSessionId").callUserJourneyAppSessionId(e.appSessionId),
                    callActionType: n.callActionType,
                    isCallConnected: t != null && this.$2,
                    uiSurface: n.uiSurface
                };
                if (t != null) {
                    r.callRandomId = t;
                }
                if (n.subSurface != null) {
                    r.subSurface = n.subSurface;
                }
                const a = o("WAWebUserJourneyEventMs").userJourneyEventMs();
                if (a != null) {
                    r.userJourneyEventMs = a;
                }
                new (o("WAWebCallUserJourneyWamEvent")).CallUserJourneyWamEvent(r).commit();
            }
        };
        e_prototype.clearCall = function() {
            this.$1 = null;
            this.$2 = false;
            this.$3 = false;
            this.$4 = false;
            this.$5 = null;
        };
        return e;
    })();
    c.appSessionId = o("WARandomHex").randomHex(16);
    const d = new c;
    l.OUT_OF_CALL_ACTION_TYPE = s;
    l.PARITY_CALL_ACTION_TYPE = u;
    l.WAWebCallUserJourneyLogger = c;
    l.CallUserJourneyLogger = d;
}, 98);