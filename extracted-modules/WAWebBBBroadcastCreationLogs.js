__d("WAWebBBBroadcastCreationLogs", [
    "WAWebBBLoggerTypes"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.PAGE
        });
    }
    function s(e, t, n, validation_error_type) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VALIDATION,
            entryPoint: t,
            extraAttributes: {
                validation_error_type,
                validation_succeeded: n
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.MAX_BID_INPUT
        });
    }
    function u(e, t, n) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VALIDATION,
            entryPoint: t,
            extraAttributes: {
                validation_succeeded: n
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CAMPAIGN_BUDGET_INPUT
        });
    }
    function c(e, t, n) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            entryPoint: n,
            extraAttributes: {
                has_invalid_audience: t.hasInvalidAudience,
                has_no_bid: t.hasNoBid,
                has_no_budget: t.hasNoBudget,
                has_no_content: t.hasNoContent,
                has_required_action: t.hasRequiredAction,
                has_unsupported_attachment: t.hasUnsupportedAttachment,
                is_creating_campaign: t.isCreatingCampaign,
                is_disabled: t.isDisabled,
                is_max_bid_valid: t.isMaxBidValid,
                scheduled_send_enabled: t.scheduledSendEnabled
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.SEND_BROADCAST_BUTTON
        });
    }
    function d(e, t, n, r, a) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            extraAttributes: {
                attachment_type: a ?? undefined,
                recipient_count: n ?? undefined,
                scheduled: r
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: r ? o("WAWebBBLoggerTypes").UserActionTarget.SCHEDULE_BROADCAST_BUTTON : o("WAWebBBLoggerTypes").UserActionTarget.SEND_BROADCAST_BUTTON
        });
    }
    function m(e, t, n, r, a, i, l) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
            entryPoint: t,
            extraAttributes: {
                attachment_type: i ?? undefined,
                error_type: l,
                recipient_count: n ?? undefined,
                save_result: a,
                scheduled: r
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: r ? o("WAWebBBLoggerTypes").UserActionTarget.SCHEDULE_BROADCAST_BUTTON : o("WAWebBBLoggerTypes").UserActionTarget.SEND_BROADCAST_BUTTON
        });
    }
    function p(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENTS_IMAGE_VIDEOS_DROPDOWN
        });
    }
    function _(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENTS_CAMERA_DROPDOWN
        });
    }
    function f(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENTS_CATALOG_DROPDOWN
        });
    }
    function g(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENTS_DOCUMENT_DROPDOWN
        });
    }
    function h(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.ADD_ATTACHMENT_BUTTON
        });
    }
    function y(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENT_SELECTION_PREVIEW
        });
    }
    function C(e, t, n) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: n
        });
    }
    function b({ entryPoint, fileExt, fileSize, log }) {
        const i = {};
        if (fileExt != null) {
            i.attachmentExt = fileExt;
        }
        if (fileSize != null) {
            i.attachmentFileSize = fileSize;
        }
        log({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint,
            extraAttributes: i,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENT_PREVIEW_SAVE_BUTTON
        });
    }
    function v({ entryPoint, fileExt, fileSize, log, userActionTarget }) {
        const l = {};
        if (fileExt != null) {
            l.attachmentExt = fileExt;
        }
        if (fileSize != null) {
            l.attachmentFileSize = fileSize;
        }
        log({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint,
            extraAttributes: l,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget
        });
    }
    function S(e, t, n, r, a) {
        const i = {};
        if (r != null) {
            i.attachmentExt = r;
        }
        if (a != null) {
            i.attachmentFileSize = a;
        }
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            extraAttributes: i,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: n
        });
    }
    function R(e, t, n) {
        const r = {};
        if (n != null) {
            r.errorType = n;
        }
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
            entryPoint: t,
            extraAttributes: r,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.ADD_ATTACHMENT_BUTTON
        });
    }
    function L(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENT_SECTION_ERROR_RENDER
        });
    }
    function E(e) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.DOCUMENT_PREVIEW_MESSAGE_BUBBLE_ERROR_RENDER
        });
    }
    function k(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.ADD_AUDIENCE_BUTTON
        });
    }
    function I(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.ADD_CTA_BUTTON
        });
    }
    function T(e, t, n, r, a, i, l, s, u, c, d, m, p) {
        const _ = {
            contact_count: t,
            save_result: n
        };
        if (s != null) {
            _.audience_count = s;
            _.is_multi_audience = s > 1;
        }
        if (a != null) {
            _.errorType = a;
        }
        if (i != null) {
            _.campaign_sent_error_type = i;
        }
        if (r != null) {
            _.attachmentExt = r;
        }
        if (l != null) {
            _.attachment_type = l;
        }
        if (c === true) {
            _.is_duplicate_bb = true;
        }
        if (d != null) {
            _.created_from_client_campaign_id = d;
        }
        if (m != null) {
            _.ai_assisted_text = m;
        }
        if (p != null) {
            _.ai_assisted_text_edited = p;
        }
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
            entryPoint: u,
            extraAttributes: _,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.SEND_BROADCAST_BUTTON
        });
    }
    function D(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
            extraAttributes: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_REVIEW,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.SEND_CAMPAIGN_ACK
        });
    }
    function x(e, t, n) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: n,
            extraAttributes: t != null ? {
                suggested_audience_card_id: t
            } : undefined,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CHOOSE_AUDIENCE_BUTTON
        });
    }
    function $(e, has_existing_audiences, n) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            entryPoint: n,
            extraAttributes: {
                has_existing_audiences
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.MENU
        });
    }
    function P(e, t, n) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: n,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CREATE_AUDIENCE_BUTTON
        });
    }
    function N(e, t, n) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: n,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.IMPORT_AUDIENCE_BUTTON
        });
    }
    function M(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.EXISTING_AUDIENCES_BUTTON
        });
    }
    function w(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.BACK_BUTTON
        });
    }
    function A(e, t, recipient_count, r, a, i, l, s, u, c) {
        const t_length = t.length;
        const m = {
            audience_count: t_length,
            audience_id: t.join(","),
            is_multi_audience: t_length > 1,
            recipient_count
        };
        if (i != null && i > 0) {
            m.overlapping_recipient_count = i;
        }
        if (a != null) {
            m.attachment_type = a;
        }
        if (l === true) {
            m.is_duplicate_bb = true;
        }
        if (s != null) {
            m.created_from_client_campaign_id = s;
        }
        if (u != null) {
            m.ai_assisted_text = u;
        }
        if (c != null) {
            m.ai_assisted_text_edited = c;
        }
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: r,
            extraAttributes: m,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.SEND_BROADCAST_BUTTON
        });
    }
    function F(e, t, n) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            entryPoint: n,
            extraAttributes: {
                ai_assisted_text: t.aiAssistedText,
                ai_assisted_text_edited: t.aiAssistedTextEdited,
                checkout_failed: t.checkoutFailed,
                is_creating_campaign: t.isCreatingCampaign,
                is_disabled: t.isDisabled,
                is_loading_business_info: t.isLoadingBusinessInfo,
                is_message_empty: t.isMessageEmpty,
                missing_business_info: t.missingBusinessInfo,
                no_broadcast_jid: t.noBroadcastJid,
                pending_billing_action: t.pendingBillingAction,
                recipient_count: t.recipientCount,
                selected_chat_count: t.selectedChatCount,
                too_few_recipients: t.tooFewRecipients,
                too_many_recipients: t.tooManyRecipients
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.SEND_BROADCAST_BUTTON
        });
    }
    function O(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.EXIT_CONFIRMATION_DISMISS_BUTTON
        });
    }
    function B(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.EXIT_CONFIRMATION_CONTINUE_BUTTON
        });
    }
    function W(e, t) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
            entryPoint: t,
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.EXISTING_AUDIENCES_MODAL
        });
    }
    function q(e, total_selected_count, n) {
        e({
            action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
            entryPoint: n,
            extraAttributes: {
                total_selected_count
            },
            surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
            userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.EXISTING_AUDIENCES_MODAL
        });
    }
    l.createBroadcastViewed = e;
    l.proMaxBidValidated = s;
    l.proCampaignBudgetValidated = u;
    l.proSendButtonViewed = c;
    l.proSendClicked = d;
    l.proSendResult = m;
    l.attachmentsImageVideoDropdownClicked = p;
    l.attachmentsCameraDropdownClicked = _;
    l.attachmentsCatalogDropdownClicked = f;
    l.attachmentsDocumentDropdownClicked = g;
    l.addAttachmentButtonClicked = h;
    l.attachmentFileSelected = y;
    l.catalogAttachmentSelected = C;
    l.attachmentPreviewSaveButtonClicked = b;
    l.attachmentPreviewButtonClicked = v;
    l.attachmentRemoveButtonClicked = S;
    l.attachmentUpload = R;
    l.attachmentSectionErrorRender = L;
    l.documentPreviewMessageBubbleErrorRender = E;
    l.addAudienceButtonClicked = k;
    l.addCTAButtonClicked = I;
    l.sendBroadcastResult = T;
    l.sendCampaignAck = D;
    l.createBroadcastChooseAudienceClicked = x;
    l.createBroadcastAudienceMenuViewed = $;
    l.createAudienceButtonClicked = P;
    l.importAudienceButtonClicked = N;
    l.createBroadcastAudienceMenuExistingAudiencesClicked = M;
    l.createBroadcastBackClicked = w;
    l.createBroadcastSendClicked = A;
    l.sendBroadcastButtonViewed = F;
    l.createBroadcastExitConfirmationDismissed = O;
    l.createBroadcastExitConfirmationConfirmed = B;
    l.existingAudiencesModalViewed = W;
    l.existingAudiencesModalSaved = q;
}, 98);