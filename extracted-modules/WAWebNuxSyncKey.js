__d("WAWebNuxSyncKey", [
    "WAWebNux"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e === o("WAWebNux").NUX.EPHEMERAL) {
            return o("WAWebNux").NuxSyncKey.EPHEMERAL;
        }
        if (e === o("WAWebNux").NUX.EPHEMERAL_VIEW_ONCE) {
            return o("WAWebNux").NuxSyncKey.EPHEMERAL_VIEW_ONCE;
        }
        if (e === o("WAWebNux").NUX.EPHEMERAL_VIEW_ONCE_RECEIVER) {
            return o("WAWebNux").NuxSyncKey.EPHEMERAL_VIEW_ONCE_RECEIVER;
        }
        if (e === o("WAWebNux").NUX.STATUS_QUICK_REPLIES) {
            return o("WAWebNux").NuxSyncKey.STATUS_QUICK_REPLIES;
        }
        if (e === o("WAWebNux").NUX.COMMUNITY) {
            return o("WAWebNux").NuxSyncKey.COMMUNITY;
        }
        if (e === o("WAWebNux").NUX.COMMUNITY_HOME) {
            return o("WAWebNux").NuxSyncKey.COMMUNITY_HOME;
        }
        if (e === o("WAWebNux").NUX.KEEP_IN_CHAT) {
            return o("WAWebNux").NuxSyncKey.KEEP_IN_CHAT;
        }
        if (e === o("WAWebNux").NUX.FORWARD_MEDIA_WITH_CAPTION) {
            return o("WAWebNux").NuxSyncKey.FORWARD_MEDIA_WITH_CAPTION;
        }
        if (e === o("WAWebNux").NUX.NEWSLETTER_MULTI_ADMIN) {
            return o("WAWebNux").NuxSyncKey.NEWSLETTER_MULTI_ADMIN;
        }
        if (e === o("WAWebNux").NUX.SUPPORT_AI) {
            return o("WAWebNux").NuxSyncKey.SUPPORT_AI;
        }
        if (e === o("WAWebNux").NUX.TOOLTIP_STATUS_ENTRY_POINT) {
            return o("WAWebNux").NuxSyncKey.TOOLTIP_STATUS_ENTRY_POINT;
        }
        if (e === o("WAWebNux").NUX.STATUS_PRIVATE_MENTIONS) {
            return o("WAWebNux").NuxSyncKey.STATUS_PRIVATE_MENTIONS;
        }
        if (e === o("WAWebNux").NUX.MESSAGE_LABEL_DEPRECATION_MIGRATED_PERMANENT) {
            return o("WAWebNux").NuxSyncKey.MESSAGE_LABEL_DEPRECATION_MIGRATED;
        }
        if (e === o("WAWebNux").NUX.ADD_TO_LISTS) {
            return o("WAWebNux").NuxSyncKey.ADD_TO_LISTS;
        }
        if (e === o("WAWebNux").NUX.WEB_UI_REFRESH) {
            return o("WAWebNux").NuxSyncKey.WEB_UI_REFRESH;
        }
        if (e === o("WAWebNux").NUX.DO_AUTOMATIC_LABEL) {
            return o("WAWebNux").NuxSyncKey.DO_AUTOMATIC_LABEL;
        }
        if (e === o("WAWebNux").NUX.META_AI_CTA_BANNER) {
            return o("WAWebNux").NuxSyncKey.META_AI_CTA_BANNER;
        }
        if (e === o("WAWebNux").NUX.FEEDBACK_INTRO) {
            return o("WAWebNux").NuxSyncKey.FEEDBACK_INTRO;
        }
        if (e === o("WAWebNux").NUX.NEWSLETTER_QUESTIONS_RESPONSE_PRIVACY_BANNER) {
            return o("WAWebNux").NuxSyncKey.NEWSLETTER_QUESTIONS_RESPONSE_PRIVACY_BANNER;
        }
        if (e === o("WAWebNux").NUX.NEWSLETTER_QUESTIONS_PRIVACY_BANNER) {
            return o("WAWebNux").NuxSyncKey.NEWSLETTER_QUESTIONS_PRIVACY_BANNER;
        }
        if (e === o("WAWebNux").NUX.NOTIFICATION_GRANULARITY_AWARENESS_BANNER) {
            return o("WAWebNux").NuxSyncKey.NOTIFICATION_GRANULARITY_AWARENESS_BANNER;
        }
        if (e === o("WAWebNux").NUX.EPHEMERAL_AFTER_READ) {
            return o("WAWebNux").NuxSyncKey.EPHEMERAL_AFTER_READ;
        }
        if (e === o("WAWebNux").NUX.BUSINESS_AI_TOOLS_NUX) {
            return o("WAWebNux").NuxSyncKey.BUSINESS_AI_TOOLS_NUX;
        }
        if (e === o("WAWebNux").NUX.TEE_CHAT_NOT_AVAILABLE_ON_WEB) {
            return o("WAWebNux").NuxSyncKey.TEE_CHAT_NOT_AVAILABLE_ON_WEB;
        }
        if (o("WAWebNux").isCommunityAdminPromotionNuxKey(e) || o("WAWebNux").isChatAutoMutedNuxKey(e)) {
            return e;
        }
        return null;
    }
    l.getNuxSyncKey = e;
}, 98);