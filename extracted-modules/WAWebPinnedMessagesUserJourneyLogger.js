__d("WAWebPinnedMessagesUserJourneyLogger", [
    "WAWebMessagingUserJourneyLogger",
    "WAWebPinInChatMetricUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumActionType",
    "WAWebWamEnumTsSurface",
    "WAWebWamMsgUtils"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.messageMenuClickPin = function(t) {
            this.commitEvent({
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.MESSAGE_MENU,
                messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE.CLICK_PIN,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(t)
            });
        };
        t_prototype.pinMessageReplacementDialogDisplay = function() {
            this.commitEvent({
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.PIN_MESSAGE_REPLACEMENT_DIALOG,
                messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE.DISPLAY
            });
        };
        t_prototype.pinMessageReplacementDialogContinue = function() {
            this.commitEvent({
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.PIN_MESSAGE_REPLACEMENT_DIALOG,
                messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE.CONTINUE
            });
        };
        t_prototype.pinMessageExpirationDialogDisplay = function(t) {
            this.commitEvent({
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.PIN_MESSAGE_EXPIRATION_DIALOG,
                messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE.DISPLAY,
                pinInChatExpirySecs: t
            });
        };
        t_prototype.pinMessageExpirationDialogSelectOption = function(t) {
            this.commitEvent({
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.PIN_MESSAGE_EXPIRATION_DIALOG,
                messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE.SELECT_OPTION,
                pinInChatExpirySecs: t
            });
        };
        t_prototype.pinMessageExpirationDialogClickPin = function(t) {
            this.commitEvent({
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.PIN_MESSAGE_EXPIRATION_DIALOG,
                messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE.CLICK_PIN,
                pinInChatExpirySecs: t
            });
        };
        t_prototype.messageMenuClickUnpin = function(t, n) {
            this.commitEvent({
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.MESSAGE_MENU,
                messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE.CLICK_UNPIN,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(t),
                pinInChatExpirySecs: o("WAWebPinInChatMetricUtils").getFiniteTimeRemainingSecs(n),
                isSelfPin: o("WAWebUserPrefsMeUser").isMeAccount(n?.sender)
            });
        };
        t_prototype.pinBannerClickUnpin = function(t, n) {
            this.commitEvent({
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.PIN_BANNER,
                messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE.CLICK_UNPIN,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(t),
                pinInChatExpirySecs: o("WAWebPinInChatMetricUtils").getFiniteTimeRemainingSecs(n),
                isSelfPin: o("WAWebUserPrefsMeUser").isMeAccount(n?.sender)
            });
        };
        t_prototype.pinMessageExpirationDialogUnpin = function(t, n) {
            this.commitEvent({
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.PIN_BANNER,
                messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE.CLICK_UNPIN,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(t),
                pinInChatExpirySecs: o("WAWebPinInChatMetricUtils").getFiniteTimeRemainingSecs(n),
                isSelfPin: o("WAWebUserPrefsMeUser").isMeAccount(n?.sender)
            });
        };
        return t;
    })(o("WAWebMessagingUserJourneyLogger").MessagingUserJourneyLogger);
    l.PinnedMessagesUserJourneyLogger = e;
}, 98);