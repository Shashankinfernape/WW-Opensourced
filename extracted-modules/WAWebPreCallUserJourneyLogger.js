__d("WAWebPreCallUserJourneyLogger", [
    "WARandomHex",
    "WAWebCallRandomIdStore",
    "WAWebCallUserJourneyAppSessionId",
    "WAWebCallUserJourneyGating",
    "WAWebPreCallUserJourneyCallsTabWamEvent",
    "WAWebPreCallUserJourneyChatThreadWamEvent",
    "WAWebUserJourneyEventMs",
    "WAWebWamEnumPreCallActionType",
    "WAWebWamEnumSubSurface"
], function(t, n, r, o, a, i, l) {
    function e() {
        if (!o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
            return {};
        }
        const userJourneyEventMs = o("WAWebUserJourneyEventMs").userJourneyEventMs();
        if (userJourneyEventMs == null) {
            return {};
        }
        return {
            userJourneyEventMs
        };
    }
    function s(isVideoCall) {
        if (o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
            return {
                isVideoCall
            };
        }
        return {};
    }
    function u(e) {
        if (!o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
            return {};
        }
        const t = o("WAWebCallRandomIdStore").getOrCreateCallRandomId(e);
        if (t == null) {
            return {};
        }
        return {
            callRandomId: t
        };
    }
    let surfaceSessionId = null;
    let d = null;
    function m() {
        if (!o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() || surfaceSessionId == null) {
            return {};
        }
        return {
            surfaceSessionId
        };
    }
    function p() {
        const e = d;
        if (!o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() || e == null) {
            return {};
        }
        const t = {
            surfaceSessionId: e.surfaceSessionId
        };
        if (e.groupSize != null) {
            t.groupSize = e.groupSize;
        }
        if (e.isCommunityGroup != null) {
            t.isCommunityGroup = e.isCommunityGroup;
        }
        return t;
    }
    function _(e) {
        const t = {};
        if (e?.callSizeType != null) {
            t.callSizeType = e.callSizeType;
        }
        if (e?.itemPosition != null) {
            t.itemPosition = e.itemPosition;
        }
        return t;
    }
    function f(e) {
        if (e == null) {
            return {};
        }
        return {
            subSurface: e
        };
    }
    function g() {
        return o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled();
    }
    const h = (()=>{
        function t() {
            this.$1 = o("WARandomHex").randomHex(16);
        }
        t.startCallsTabSession = function() {
            surfaceSessionId = o("WARandomHex").randomHex(16);
        };
        t.endCallsTabSession = function() {
            surfaceSessionId = null;
        };
        t.startChatThreadSession = function(t) {
            d = {
                surfaceSessionId: o("WARandomHex").randomHex(16),
                groupSize: t.groupSize,
                isCommunityGroup: t.isCommunityGroup
            };
        };
        t.endChatThreadSession = function() {
            d = null;
        };
        const t_prototype = t.prototype;
        t_prototype.clickCreateVideoCallLink = function(t) {
            this.commitEvent({
                preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_CREATE_VIDEO_CALL_LINK,
                subSurface: t
            });
        };
        t_prototype.clickVideoCallLinkShare = function(t) {
            this.commitEvent({
                preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_VIDEO_CALL_LINK_SHARE,
                subSurface: t
            });
        };
        t_prototype.clickVoiceCallLinkShare = function(t) {
            this.commitEvent({
                preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_VOICE_CALL_LINK_SHARE,
                subSurface: t
            });
        };
        t_prototype.dismiss = function(t) {
            this.commitEvent({
                preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.DISMISS,
                subSurface: t
            });
        };
        t_prototype.clickCreateEvent = function(t) {
            this.commitEvent({
                preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_CREATE_EVENT,
                subSurface: t
            });
        };
        t_prototype.clickEventMore = function(t) {
            this.commitEvent({
                preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_EVENT_MORE,
                subSurface: t
            });
        };
        t_prototype.clickEventMoreDetail = function(t) {
            this.commitEvent({
                preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_EVENT_MORE_DETAIL,
                subSurface: t
            });
        };
        t_prototype.clickEventDetail = function(t) {
            this.commitEvent({
                preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_EVENT_DETAIL,
                subSurface: t
            });
        };
        t_prototype.openCallsTab = function(t) {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.OPEN_CALLS_TAB, {
                subSurface: t
            });
        };
        t_prototype.clickCallInfo = function(t, n) {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_CALL_INFO, babelHelpers.extends({
                subSurface: t
            }, _(n)));
        };
        t_prototype.longPress = function(t, n) {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.LONG_PRESS, babelHelpers.extends({
                subSurface: t
            }, _(n)));
        };
        t_prototype.deleteCallLog = function(t, n) {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.DELETE_CALL_LOG, babelHelpers.extends({
                subSurface: t
            }, _(n)));
        };
        t_prototype.sendMessage = function(t, n) {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.SEND_MESSAGE, babelHelpers.extends({
                subSurface: t
            }, _(n)));
        };
        t_prototype.selectParticipantFromCallsTab = function(t, n) {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.SELECT_PARTICIPANT, babelHelpers.extends({
                subSurface: t
            }, _(n)));
        };
        t_prototype.clickAudioCallFromCallsTab = function(t, n) {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_AUDIO_CALL, babelHelpers.extends({}, f(t), _(n)));
        };
        t_prototype.clickVideoCallFromCallsTab = function(t, n) {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_VIDEO_CALL, babelHelpers.extends({}, f(t), _(n)));
        };
        t_prototype.clickPlusButton = function(t) {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_PLUS_BUTTON, babelHelpers.extends({}, f(t)));
        };
        t_prototype.clickDialPadButton = function(t) {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_DIAL_PAD_BUTTON, babelHelpers.extends({}, f(t)));
        };
        t_prototype.dialerInputStarted = function() {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.DIALER_INPUT_STARTED, {
                subSurface: o("WAWebWamEnumSubSurface").SUB_SURFACE.DIALER
            });
        };
        t_prototype.dialerInputPasted = function() {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.DIALER_INPUT_PASTED, {
                subSurface: o("WAWebWamEnumSubSurface").SUB_SURFACE.DIALER
            });
        };
        t_prototype.dialerInputCursorEngaged = function() {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.DIALER_INPUT_CURSOR_ENGAGED, {
                subSurface: o("WAWebWamEnumSubSurface").SUB_SURFACE.DIALER
            });
        };
        t_prototype.dialerInputCopied = function() {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.DIALER_INPUT_COPIED, {
                subSurface: o("WAWebWamEnumSubSurface").SUB_SURFACE.DIALER
            });
        };
        t_prototype.dialerInputCut = function() {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.DIALER_INPUT_CUT, {
                subSurface: o("WAWebWamEnumSubSurface").SUB_SURFACE.DIALER
            });
        };
        t_prototype.tapFavoritesAdd = function(t) {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.TAP_FAVORITES_ADD, babelHelpers.extends({}, f(t)));
        };
        t_prototype.tapFavoritesSeeAll = function(t) {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.TAP_FAVORITES_SEE_ALL, babelHelpers.extends({}, f(t)));
        };
        t_prototype.clickCallLink = function(t) {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_CALL_LINK, babelHelpers.extends({}, f(t)));
        };
        t_prototype.clickCreateAudioCallLink = function(t) {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_CREATE_AUDIO_CALL_LINK, babelHelpers.extends({}, f(t)));
        };
        t_prototype.clickAudioCallLinkShare = function(t) {
            this.$2(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_AUDIO_CALL_LINK_SHARE, babelHelpers.extends({}, f(t)));
        };
        t_prototype.$2 = function(t, n) {
            if (g()) {
                this.commitEvent(babelHelpers.extends({}, n, {
                    preCallActionType: t
                }));
            }
        };
        t_prototype.commitEvent = function(r) {
            new (o("WAWebPreCallUserJourneyCallsTabWamEvent")).PreCallUserJourneyCallsTabWamEvent(babelHelpers.extends({
                appSessionId: o("WAWebCallUserJourneyAppSessionId").callUserJourneyAppSessionId(t.appSessionId),
                userJourneyFunnelId: this.$1
            }, e(), m(), r)).commit();
        };
        t_prototype.clickCallDropdown = function(t) {
            this.commitChatThreadEvent({
                preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_CALL_DROPDOWN,
                subSurface: t
            });
        };
        t_prototype.clickAddContact = function(t) {
            this.commitChatThreadEvent({
                preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_ADD_CONTACT,
                subSurface: t
            });
        };
        t_prototype.selectParticipant = function(t) {
            this.commitChatThreadEvent({
                preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.SELECT_PARTICIPANT,
                subSurface: t
            });
        };
        t_prototype.deselectParticipant = function(t) {
            this.commitChatThreadEvent({
                preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.DESELECT_PARTICIPANT,
                subSurface: t
            });
        };
        t_prototype.clickAudioCall = function(t, n) {
            this.commitChatThreadEvent(babelHelpers.extends({
                preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_AUDIO_CALL,
                subSurface: t
            }, s(false), u(n)));
        };
        t_prototype.clickVideoCall = function(t, n) {
            this.commitChatThreadEvent(babelHelpers.extends({
                preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_VIDEO_CALL,
                subSurface: t
            }, s(true), u(n)));
        };
        t_prototype.clickCreateEventChatThread = function(t) {
            this.commitChatThreadEvent({
                preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_CREATE_EVENT,
                subSurface: t
            });
        };
        t_prototype.clickCreateVideoCallLinkChatThread = function(t) {
            this.commitChatThreadEvent({
                preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_CREATE_VIDEO_CALL_LINK,
                subSurface: t
            });
        };
        t_prototype.dismissChatThread = function(t) {
            this.commitChatThreadEvent({
                preCallActionType: o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.DISMISS,
                subSurface: t
            });
        };
        t_prototype.openAttachmentTray = function(t) {
            this.$3(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.OPEN_ATTACHMENT_TRAY, babelHelpers.extends({}, f(t)));
        };
        t_prototype.clickICCE = function(t) {
            this.$3(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_ICCE, {
                subSurface: t
            });
        };
        t_prototype.clickCallConfirmButton = function(t, n, r) {
            this.$3(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_CALL_CONFIRM_BUTTON, babelHelpers.extends({
                subSurface: t
            }, s(n), u(r)));
        };
        t_prototype.clickRejoin = function(t) {
            this.$3(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_REJOIN, {
                subSurface: t
            });
        };
        t_prototype.clickCallLinkFromChat = function(t) {
            this.$3(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_CALL_LINK, babelHelpers.extends({}, f(t)));
        };
        t_prototype.clickVideoCallLinkShareFromChat = function(t) {
            this.$3(o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_VIDEO_CALL_LINK_SHARE, babelHelpers.extends({}, f(t)));
        };
        t_prototype.$3 = function(t, n) {
            if (g()) {
                this.commitChatThreadEvent(babelHelpers.extends({}, n, {
                    preCallActionType: t
                }));
            }
        };
        t_prototype.commitChatThreadEvent = function(r) {
            new (o("WAWebPreCallUserJourneyChatThreadWamEvent")).PreCallUserJourneyChatThreadWamEvent(babelHelpers.extends({
                appSessionId: o("WAWebCallUserJourneyAppSessionId").callUserJourneyAppSessionId(t.appSessionId),
                userJourneyFunnelId: this.$1
            }, e(), p(), r)).commit();
        };
        return t;
    })();
    h.appSessionId = o("WARandomHex").randomHex(16);
    l.PreCallUserJourneyLogger = h;
}, 98);