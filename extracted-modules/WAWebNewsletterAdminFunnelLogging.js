__d("WAWebNewsletterAdminFunnelLogging", [
    "WALogger",
    "WAWebChannelAdminWamEvent",
    "WAWebCommonNewsletterEnums",
    "WAWebPhotoPickType",
    "WAWebWamEnumChannelAdminAction"
], function(t, n, r, o, a, i, l) {
    let e;
    class s {
        constructor(e){
            this.sessionId = Math.round(Math.random() * 1000000000);
            this.eventSequence = 0;
            this.flowType = e;
        }
        $1() {
            this.eventSequence += 1;
        }
        logImageSetEvent(n) {
            if (n == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[logImageSetEvent] photoPickType is null"
                ])));
                return;
            }
            switch(n){
                case o("WAWebPhotoPickType").PhotoPickType.Camera:
                    this.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ICON_SET_CAMERA);
                    break;
                case o("WAWebPhotoPickType").PhotoPickType.Emoji:
                case o("WAWebPhotoPickType").PhotoPickType.Sticker:
                    this.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ICON_SET_EMOJI_STICKER);
                    break;
                case o("WAWebPhotoPickType").PhotoPickType.WebSearch:
                    this.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ICON_SET_WEB);
                    break;
                case o("WAWebPhotoPickType").PhotoPickType.Gallery:
                    this.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ICON_SET_GALLERY);
                    break;
                default:
                    break;
            }
        }
        logReactionSetting(t) {
            switch(t){
                case o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic:
                    this.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.REACTIONS_SET_TO_DEFAULT_EMOJI);
                    break;
                case o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.All:
                    this.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.REACTIONS_SET_TO_ANY_EMOJI);
                    break;
                case o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.None:
                    this.logEvent(o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.REACTIONS_SET_TO_NONE_EMOJI);
                    break;
                default:
                    break;
            }
        }
        logEvent(t) {
            this.$2({
                sessionId: this.sessionId,
                eventSequence: this.eventSequence,
                flowType: this.flowType,
                action: t
            });
            this.$1();
        }
        $2({ action, eventSequence, flowType, sessionId }) {
            const i = new (o("WAWebChannelAdminWamEvent")).ChannelAdminWamEvent({
                channelAdminSessionId: sessionId,
                adminFlowActionSequenceNumber: eventSequence,
                adminFlowType: flowType,
                channelAdminAction: action
            });
            i.commit();
        }
    }
    l.NewsletterAdminFunnelLogger = s;
}, 98);