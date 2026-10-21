__d("WAWebStatusPosterActionsLogger", [
    "WAWebABProps",
    "WAWebLogStatusPosterActions",
    "WAWebStatusLoggingUtils",
    "WAWebStatusPosterActionsWamEvent",
    "WAWebWamEnumStatusCategory",
    "WAWebWamEnumStatusContentSource",
    "WAWebWamEnumStatusCreationEntryPoint",
    "WAWebWamEnumStatusEventType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return d(e) || o("WAWebABProps").getABPropConfigValue("status_poster_side_gating_enabled");
    }
    class s {
        constructor(e, t, n){
            this.sessionId = e ?? o("WAWebLogStatusPosterActions").createStatusPostingSessionId();
            this.newsletterWid = t;
            this.entryPoint = n;
        }
        setNewsletterWid(t) {
            this.newsletterWid = t;
        }
        logEvent(n) {
            const r = n.statusCreationEntryPoint ?? this.entryPoint;
            if (e(r)) {
                const { canSaveAsDraft, editable, externalInteractables, externalPackageName, hasDraftAvailable, retryCount, shareType, statusAudienceSize, statusContentSource, statusContentType, statusEventType, statusId, statusPostFailureReason } = n;
                const y = this.newsletterWid;
                const C = new (o("WAWebStatusPosterActionsWamEvent")).StatusPosterActionsWamEvent({
                    statusEventType,
                    statusCreationEntryPoint: r,
                    statusContentType,
                    statusContentSource,
                    statusId,
                    statusPostFailureReason,
                    retryCount,
                    hasDraftAvailable,
                    canSaveAsDraft,
                    statusAudienceSize,
                    externalPackageName,
                    shareType,
                    editable,
                    externalInteractables,
                    statusPostingSessionId: this.sessionId,
                    cid: o("WAWebStatusLoggingUtils").channelStatusCid(y),
                    statusCategory: y != null ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.CHANNEL_STATUS : undefined
                });
                C.commit();
            }
        }
        logStatusTextScreenImp() {
            this.logEvent({
                statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE.STATUS_TEXT_SCREEN_IMP
            });
        }
        logBackgroundColorTap() {
            this.logEvent({
                statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE.BACKGROUND_COLOR_TAP
            });
        }
        logTextToolFontChanged() {
            this.logEvent({
                statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE.TEXT_TOOL_FONT_CHANGED
            });
        }
        logMediaPickerImp(t) {
            this.logEvent({
                statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE.MEDIA_PICKER_IMP,
                statusCreationEntryPoint: t
            });
        }
        logMediaPickerMediaSelected(statusContentSource) {
            this.logEvent({
                statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE.MEDIA_PICKER_MEDIA_SELECTED,
                statusContentSource
            });
        }
        logStatusReadyScreenImp(t, n) {
            this.logEvent({
                statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE.STATUS_READY_SCREEN_IMP,
                statusContentType: t,
                statusCreationEntryPoint: n,
                statusContentSource: c(n)
            });
        }
        logPostSendTap(t, n) {
            this.logEvent({
                statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE.POST_SEND_TAP,
                statusContentType: t,
                statusCreationEntryPoint: n
            });
        }
        logComposerXoutTapped() {
            this.logEvent({
                statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE.COMPOSER_XOUT_TAPPED
            });
        }
        logStatusPrivacyUpdated(statusAudienceSize) {
            this.logEvent({
                statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE.STATUS_PRIVACY_UPDATED,
                statusAudienceSize
            });
        }
        logPostStatusRequest(t, retryCount, r) {
            this.logEvent({
                statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE.POST_STATUS_REQUEST,
                statusContentType: t,
                statusCreationEntryPoint: r,
                retryCount
            });
        }
        logPostStatusSuccess(t, statusId, r) {
            this.logEvent({
                statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE.POST_STATUS_SUCCESS,
                statusContentType: t,
                statusCreationEntryPoint: r,
                statusId
            });
        }
        logPostStatusFailure({ contentType, entryPoint, failureReason, retryCount }) {
            this.logEvent({
                statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE.POST_STATUS_FAILURE,
                statusContentType: contentType,
                statusCreationEntryPoint: entryPoint,
                statusPostFailureReason: failureReason,
                retryCount
            });
        }
        logDeleteStatusRequest() {
            this.logEvent({
                statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE.DELETE_STATUS_REQUEST
            });
        }
        logDeleteStatusSuccess() {
            this.logEvent({
                statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE.DELETE_STATUS_SUCCESS
            });
        }
        logDeleteStatusFailure(statusPostFailureReason) {
            this.logEvent({
                statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE.DELETE_STATUS_FAILURE,
                statusPostFailureReason
            });
        }
        logForwardPreviewEdit() {
            this.logEvent({
                statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE.FORWARD_PREVIEW_EDIT,
                statusContentSource: o("WAWebWamEnumStatusContentSource").STATUS_CONTENT_SOURCE.FORWARD
            });
        }
    }
    function u(t, statusPostingSessionId, r) {
        if (e(t)) {
            new (o("WAWebStatusPosterActionsWamEvent")).StatusPosterActionsWamEvent({
                statusEventType: o("WAWebWamEnumStatusEventType").STATUS_EVENT_TYPE.STATUS_ENTRYPOINT_TAP,
                statusCreationEntryPoint: t,
                statusPostingSessionId,
                cid: o("WAWebStatusLoggingUtils").channelStatusCid(r),
                statusCategory: r != null ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.CHANNEL_STATUS : undefined
            }).commit();
        }
    }
    function c(e) {
        if (d(e)) {
            return o("WAWebWamEnumStatusContentSource").STATUS_CONTENT_SOURCE.RESHARE;
        }
    }
    function d(e) {
        return e === o("WAWebWamEnumStatusCreationEntryPoint").STATUS_CREATION_ENTRY_POINT.STATUS_POST_RESHARE;
    }
    l.StatusPosterActionsLogger = s;
    l.logStatusEntrypointTap = u;
}, 98);