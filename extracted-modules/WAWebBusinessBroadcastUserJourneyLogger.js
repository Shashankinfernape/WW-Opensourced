__d("WAWebBusinessBroadcastUserJourneyLogger", [
    "WAWebBBAudienceLogs",
    "WAWebBBBroadcastCreationLogs",
    "WAWebBBContactImportLogs",
    "WAWebBBEntryPointLogs",
    "WAWebBBGenAILogs",
    "WAWebBBHomeLogs",
    "WAWebBBInfoDrawerLogs",
    "WAWebBBNuxLogs",
    "WAWebBBPaymentLogs",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(){
            this.$1 = function(e) {
                const n = o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() && !o("WAWebBizBroadcastProOnboardingStatus").isBizBroadcastProNuxOnboardingStatusResolved();
                const r = e.bbTier ?? (n ? null : o("WAWebBizBroadcastProOnboardingStatus").getBizBroadcastProductTier());
                o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
                    bbTier: r,
                    entryPoint: e.entryPoint,
                    entryPointDetails: e.entryPointDetails,
                    extraAttributes: e.extraAttributes,
                    featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.BUSINESS_BROADCAST,
                    stickyEntryPoint: e.stickyEntryPoint,
                    surface: e.surface,
                    userActionTarget: e.userActionTarget,
                    userActionType: e.action
                });
            };
        }
        setDeeplinkAttribution(t, n) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.setEntryPoint(t, o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.BUSINESS_BROADCAST);
            if (n != null && n !== "") {
                o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.setEntryPointDetails(n, o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.BUSINESS_BROADCAST);
            }
        }
        getEntryPoint() {
            return o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.getEntryPoint(o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.BUSINESS_BROADCAST);
        }
        qpBannerViewed(t, n, r) {
            o("WAWebBBEntryPointLogs").qpBannerViewed(this.$1, t, n, r);
        }
        qpBannerDismissed(t, n, r) {
            o("WAWebBBEntryPointLogs").qpBannerDismissed(this.$1, t, n, r);
        }
        chatOverflowMenuEntryPointViewed() {
            o("WAWebBBEntryPointLogs").chatOverflowMenuEntryPointViewed(this.$1);
        }
        chatOverflowMenuEntryPointClicked() {
            o("WAWebBBEntryPointLogs").chatOverflowMenuEntryPointClicked(this.$1);
        }
        toolsEntryPointViewed() {
            o("WAWebBBEntryPointLogs").toolsEntryPointViewed(this.$1);
        }
        toolsEntryPointClicked() {
            o("WAWebBBEntryPointLogs").toolsEntryPointClicked(this.$1);
        }
        newChatEntryPointViewed() {
            o("WAWebBBEntryPointLogs").newChatEntryPointViewed(this.$1);
        }
        newChatEntryPointClicked() {
            o("WAWebBBEntryPointLogs").newChatEntryPointClicked(this.$1);
        }
        sendMsgMultiModalViewed(t) {
            o("WAWebBBEntryPointLogs").sendMsgMultiModalViewed(this.$1, t);
        }
        sendMsgMultiModalConfirmed(t) {
            o("WAWebBBEntryPointLogs").sendMsgMultiModalConfirmed(this.$1, t);
        }
        bbThreadSystemMessageCtaClicked() {
            o("WAWebBBEntryPointLogs").bbThreadSystemMessageCtaClicked(this.$1);
        }
        bbHomePageViewed(t) {
            o("WAWebBBHomeLogs").bbHomePageViewed(this.$1, t);
        }
        createAudienceButtonClicked(t, n) {
            o("WAWebBBBroadcastCreationLogs").createAudienceButtonClicked(this.$1, t, n);
        }
        importAudienceButtonClicked(t, n) {
            o("WAWebBBBroadcastCreationLogs").importAudienceButtonClicked(this.$1, t, n);
        }
        newBusinessBroadcastAudienceListItemClicked(t, n) {
            o("WAWebBBHomeLogs").newBusinessBroadcastAudienceListItemClicked(this.$1, t, n);
        }
        newChatFlowAudienceListItemClicked(t) {
            o("WAWebBBHomeLogs").newChatFlowAudienceListItemClicked(this.$1, t);
        }
        homeLearnMoreClicked(t) {
            o("WAWebBBHomeLogs").homeLearnMoreClicked(this.$1, t);
        }
        homeNewAudienceDropdownClicked(t) {
            o("WAWebBBHomeLogs").homeNewAudienceDropdownClicked(this.$1, t);
        }
        homeOverflowMenuClicked(t) {
            o("WAWebBBHomeLogs").homeOverflowMenuClicked(this.$1, t);
        }
        downloadSubscribedRecipientsClicked(t) {
            o("WAWebBBHomeLogs").downloadSubscribedRecipientsClicked(this.$1, t);
        }
        removeRecipientsFromDataSharingClicked(t) {
            o("WAWebBBHomeLogs").removeRecipientsFromDataSharingClicked(this.$1, t);
        }
        dataSharingClicked(t) {
            o("WAWebBBHomeLogs").dataSharingClicked(this.$1, t);
        }
        connectBannerViewed(t, n) {
            o("WAWebBBHomeLogs").connectBannerViewed(this.$1, t, n);
        }
        advancedToolsToggleClicked(t, n, r, a) {
            o("WAWebBBHomeLogs").advancedToolsToggleClicked(this.$1, t, n, r, a);
        }
        homeAudiencesTabClicked(t) {
            o("WAWebBBHomeLogs").homeAudiencesTabClicked(this.$1, t);
        }
        homeBroadcastsTabClicked(t) {
            o("WAWebBBHomeLogs").homeBroadcastsTabClicked(this.$1, t);
        }
        eligibilityCheckResult(t, n, r) {
            o("WAWebBBHomeLogs").eligibilityCheckResult(this.$1, t, n, r);
        }
        suggestedAudienceCardsViewed(t, n, r) {
            o("WAWebBBHomeLogs").suggestedAudienceCardsViewed(this.$1, t, n, r);
        }
        chatListContextMenuOpened(t) {
            o("WAWebBBHomeLogs").chatListContextMenuOpened(this.$1, t);
        }
        messageContextMenuOpened() {
            o("WAWebBBHomeLogs").messageContextMenuOpened(this.$1);
        }
        conversationHeaderMenuOpened(t) {
            o("WAWebBBHomeLogs").conversationHeaderMenuOpened(this.$1, t);
        }
        broadcastChatListItemViewed(isBroadcastInChatList, broadcastChatCount, hasBroadcastWithZeroRecipients, hasBroadcastWithNonZeroRecipients, primarySupportsBusinessBroadcast) {
            o("WAWebBBHomeLogs").broadcastChatListItemViewed({
                broadcastChatCount,
                hasBroadcastWithNonZeroRecipients,
                hasBroadcastWithZeroRecipients,
                isBroadcastInChatList,
                log: this.$1,
                primarySupportsBusinessBroadcast
            });
        }
        broadcastThreadViewed(t) {
            o("WAWebBBHomeLogs").broadcastThreadViewed(this.$1, t);
        }
        tosReviewBannerViewed() {
            o("WAWebBBHomeLogs").tosReviewBannerViewed(this.$1);
        }
        tosReviewBannerClicked() {
            o("WAWebBBHomeLogs").tosReviewBannerClicked(this.$1);
        }
        broadcastItemOverflowClicked(t) {
            o("WAWebBBHomeLogs").broadcastItemOverflowClicked(this.$1, t);
        }
        suggestedAudienceCardClicked(t, n, r, a) {
            o("WAWebBBHomeLogs").suggestedAudienceCardClicked(this.$1, t, n, r, a);
        }
        suggestedAudienceCardError(t, n, r, a) {
            o("WAWebBBHomeLogs").suggestedAudienceCardError(this.$1, t, n, r, a);
        }
        createAudienceViewed(t, n) {
            o("WAWebBBAudienceLogs").createAudienceViewed(this.$1, t, n);
        }
        createAudienceContactCheckboxClicked(totalSelectedCount, n) {
            o("WAWebBBAudienceLogs").createAudienceContactCheckboxClicked({
                entryPoint: n,
                log: this.$1,
                totalSelectedCount
            });
        }
        createAudienceBackClicked(t) {
            o("WAWebBBAudienceLogs").createAudienceBackClicked(this.$1, t);
        }
        createAudienceSaveClicked(t, n, r, a, i) {
            o("WAWebBBAudienceLogs").createAudienceSaveClicked(this.$1, t, n, r, a, i);
        }
        proAudienceFloorChecked(t, validationSucceeded, r, a) {
            o("WAWebBBAudienceLogs").proAudienceFloorChecked({
                entryPoint: t,
                floorMinimum: a,
                log: this.$1,
                recipientCount: r,
                validationSucceeded
            });
        }
        proAudienceBelowFloorBannerViewed(t, n, r) {
            o("WAWebBBAudienceLogs").proAudienceBelowFloorBannerViewed({
                entryPoint: t,
                floorMinimum: r,
                log: this.$1,
                recipientCount: n
            });
        }
        createAudienceSaveResult(t, n, r, a, i, l) {
            o("WAWebBBAudienceLogs").createAudienceSaveResult(this.$1, t, n, r, a, i, l);
        }
        importAudienceSaveResult(t, n, r, a, i) {
            o("WAWebBBAudienceLogs").importAudienceSaveResult(this.$1, t, n, r, a, i);
        }
        attachmentsImageVideoDropdownClicked(t) {
            o("WAWebBBBroadcastCreationLogs").attachmentsImageVideoDropdownClicked(this.$1, t);
        }
        attachmentsCameraDropdownClicked(t) {
            o("WAWebBBBroadcastCreationLogs").attachmentsCameraDropdownClicked(this.$1, t);
        }
        attachmentsCatalogDropdownClicked(t) {
            o("WAWebBBBroadcastCreationLogs").attachmentsCatalogDropdownClicked(this.$1, t);
        }
        attachmentsDocumentDropdownClicked(t) {
            o("WAWebBBBroadcastCreationLogs").attachmentsDocumentDropdownClicked(this.$1, t);
        }
        addAttachmentButtonClicked(t) {
            o("WAWebBBBroadcastCreationLogs").addAttachmentButtonClicked(this.$1, t);
        }
        attachmentFileSelected(t) {
            o("WAWebBBBroadcastCreationLogs").attachmentFileSelected(this.$1, t);
        }
        catalogAttachmentSelected(t, n) {
            o("WAWebBBBroadcastCreationLogs").catalogAttachmentSelected(this.$1, t, n);
        }
        attachmentPreviewSaveButtonClicked({ entryPoint, fileExt, fileSize }) {
            o("WAWebBBBroadcastCreationLogs").attachmentPreviewSaveButtonClicked({
                entryPoint,
                fileExt,
                fileSize,
                log: this.$1
            });
        }
        attachmentPreviewButtonClicked({ entryPoint, fileExt, fileSize, userActionTarget }) {
            o("WAWebBBBroadcastCreationLogs").attachmentPreviewButtonClicked({
                entryPoint,
                fileExt,
                fileSize,
                log: this.$1,
                userActionTarget
            });
        }
        attachmentRemoveButtonClicked(t, n, r, a) {
            o("WAWebBBBroadcastCreationLogs").attachmentRemoveButtonClicked(this.$1, t, n, r, a);
        }
        attachmentUpload(t, n) {
            o("WAWebBBBroadcastCreationLogs").attachmentUpload(this.$1, t, n);
        }
        attachmentSectionErrorRender(t) {
            o("WAWebBBBroadcastCreationLogs").attachmentSectionErrorRender(this.$1, t);
        }
        documentPreviewMessageBubbleErrorRender() {
            o("WAWebBBBroadcastCreationLogs").documentPreviewMessageBubbleErrorRender(this.$1);
        }
        addAudienceButtonClicked(t) {
            o("WAWebBBBroadcastCreationLogs").addAudienceButtonClicked(this.$1, t);
        }
        addCTAButtonClicked(t) {
            o("WAWebBBBroadcastCreationLogs").addCTAButtonClicked(this.$1, t);
        }
        createBroadcastViewed(t) {
            o("WAWebBBBroadcastCreationLogs").createBroadcastViewed(this.$1, t);
        }
        proMaxBidValidated(t, n, r) {
            o("WAWebBBBroadcastCreationLogs").proMaxBidValidated(this.$1, t, n, r);
        }
        proCampaignBudgetValidated(t, n) {
            o("WAWebBBBroadcastCreationLogs").proCampaignBudgetValidated(this.$1, t, n);
        }
        proSendButtonViewed(t, n) {
            o("WAWebBBBroadcastCreationLogs").proSendButtonViewed(this.$1, t, n);
        }
        proSendClicked(t, n, r, a) {
            o("WAWebBBBroadcastCreationLogs").proSendClicked(this.$1, t, n, r, a);
        }
        proSendResult(t, n, r, a, i, l) {
            o("WAWebBBBroadcastCreationLogs").proSendResult(this.$1, t, n, r, a, i, l);
        }
        sendBroadcastResult(t, n, r, a, i, l, s, u, c, d, m, p) {
            o("WAWebBBBroadcastCreationLogs").sendBroadcastResult(this.$1, t, n, r, a, i, l, s, u, c, d, m, p);
        }
        sendCampaignAck(t) {
            o("WAWebBBBroadcastCreationLogs").sendCampaignAck(this.$1, t);
        }
        createBroadcastChooseAudienceClicked(t, n) {
            o("WAWebBBBroadcastCreationLogs").createBroadcastChooseAudienceClicked(this.$1, t, n);
        }
        createBroadcastAudienceMenuViewed(t, n) {
            o("WAWebBBBroadcastCreationLogs").createBroadcastAudienceMenuViewed(this.$1, t, n);
        }
        createBroadcastAudienceMenuExistingAudiencesClicked(t) {
            o("WAWebBBBroadcastCreationLogs").createBroadcastAudienceMenuExistingAudiencesClicked(this.$1, t);
        }
        createBroadcastBackClicked(t) {
            o("WAWebBBBroadcastCreationLogs").createBroadcastBackClicked(this.$1, t);
        }
        createBroadcastExitConfirmationDismissed(t) {
            o("WAWebBBBroadcastCreationLogs").createBroadcastExitConfirmationDismissed(this.$1, t);
        }
        createBroadcastExitConfirmationConfirmed(t) {
            o("WAWebBBBroadcastCreationLogs").createBroadcastExitConfirmationConfirmed(this.$1, t);
        }
        existingAudiencesModalViewed(t) {
            o("WAWebBBBroadcastCreationLogs").existingAudiencesModalViewed(this.$1, t);
        }
        existingAudiencesModalSaved(t, n) {
            o("WAWebBBBroadcastCreationLogs").existingAudiencesModalSaved(this.$1, t, n);
        }
        createBroadcastSendClicked(t, n, r, a, i, l, s, u, c) {
            o("WAWebBBBroadcastCreationLogs").createBroadcastSendClicked(this.$1, t, n, r, a, i, l, s, u, c);
        }
        sendBroadcastButtonViewed(t, n) {
            o("WAWebBBBroadcastCreationLogs").sendBroadcastButtonViewed(this.$1, t, n);
        }
        importAudienceViewed(t) {
            o("WAWebBBContactImportLogs").importAudienceViewed(this.$1, t);
        }
        importAudienceClicked(t) {
            o("WAWebBBContactImportLogs").importAudienceClicked(this.$1, t);
        }
        contactImportPromptViewed(t, n) {
            o("WAWebBBContactImportLogs").contactImportPromptViewed({
                entryPoint: n,
                extraAttributes: t,
                log: this.$1
            });
        }
        templateSaveClicked(t) {
            o("WAWebBBContactImportLogs").templateSaveClicked(this.$1, t);
        }
        contactImportCancelClicked(t, n) {
            o("WAWebBBContactImportLogs").contactImportCancelClicked({
                entryPoint: t,
                extraAttributes: n,
                log: this.$1
            });
        }
        fileUploadClicked(t) {
            o("WAWebBBContactImportLogs").fileUploadClicked(this.$1, t);
        }
        fileOpenClicked(t) {
            o("WAWebBBContactImportLogs").fileOpenClicked(this.$1, t);
        }
        importAudienceProcessingStarted(t, n) {
            o("WAWebBBContactImportLogs").importAudienceProcessingStarted(this.$1, t, n);
        }
        importAudienceProcessingResult(t, n) {
            o("WAWebBBContactImportLogs").importAudienceProcessingResult(this.$1, t, n);
        }
        importedContactWizardViewed(t, n) {
            o("WAWebBBContactImportLogs").importedContactWizardViewed(this.$1, t, n);
        }
        contactDeleteClicked(t) {
            o("WAWebBBContactImportLogs").contactDeleteClicked(this.$1, t);
        }
        errorContactDeleteClicked(t) {
            o("WAWebBBContactImportLogs").errorContactDeleteClicked(this.$1, t);
        }
        allErrorContactsDeleteClicked(t) {
            o("WAWebBBContactImportLogs").allErrorContactsDeleteClicked(this.$1, t);
        }
        errorContactEditClicked(t) {
            o("WAWebBBContactImportLogs").errorContactEditClicked(this.$1, t);
        }
        importedContactListNameEntered(t) {
            o("WAWebBBContactImportLogs").importedContactListNameEntered(this.$1, t);
        }
        importedContactsSaveClicked(t, n) {
            o("WAWebBBContactImportLogs").importedContactsSaveClicked(this.$1, t, n);
        }
        importedContactWizardCancelClicked(t, n) {
            o("WAWebBBContactImportLogs").importedContactWizardCancelClicked(this.$1, t, n);
        }
        editContactViewed(t) {
            o("WAWebBBContactImportLogs").editContactViewed(this.$1, t);
        }
        contactNameEntered(t) {
            o("WAWebBBContactImportLogs").contactNameEntered(this.$1, t);
        }
        phoneNumberEntered(t) {
            o("WAWebBBContactImportLogs").phoneNumberEntered(this.$1, t);
        }
        editContactConfirmClicked(t) {
            o("WAWebBBContactImportLogs").editContactConfirmClicked(this.$1, t);
        }
        editContactCancelClicked(t) {
            o("WAWebBBContactImportLogs").editContactCancelClicked(this.$1, t);
        }
        contactImportSuccessViewed(t, n) {
            o("WAWebBBContactImportLogs").contactImportSuccessViewed(this.$1, t, n);
        }
        contactImportSuccessCancelClicked(t) {
            o("WAWebBBContactImportLogs").contactImportSuccessCancelClicked(this.$1, t);
        }
        confirmDeleteAllErrorContactViewed(t) {
            o("WAWebBBContactImportLogs").confirmDeleteAllErrorContactViewed(this.$1, t);
        }
        deleteAllErrorContactsConfirmClicked(t) {
            o("WAWebBBContactImportLogs").deleteAllErrorContactsConfirmClicked(this.$1, t);
        }
        deleteAllErrorContactsCancelClicked(t) {
            o("WAWebBBContactImportLogs").deleteAllErrorContactsCancelClicked(this.$1, t);
        }
        reviewFileErrorsPromptViewed(t, n) {
            o("WAWebBBContactImportLogs").reviewFileErrorsPromptViewed(this.$1, t, n);
        }
        reviewFileErrorsPromptTemplateSaveClicked(t, n) {
            o("WAWebBBContactImportLogs").reviewFileErrorsPromptTemplateSaveClicked(this.$1, t, n);
        }
        reviewFileErrorsPromptCancelClicked(t, n) {
            o("WAWebBBContactImportLogs").reviewFileErrorsPromptCancelClicked(this.$1, t, n);
        }
        reviewFileErrorsPromptContinueClicked(t, n) {
            o("WAWebBBContactImportLogs").reviewFileErrorsPromptContinueClicked(this.$1, t, n);
        }
        saveImportedContactViewed(t, n) {
            o("WAWebBBContactImportLogs").saveImportedContactViewed(this.$1, t, n);
        }
        saveImportedContactClosed(t, n) {
            o("WAWebBBContactImportLogs").saveImportedContactClosed(this.$1, t, n);
        }
        importAudienceSuccess(t, n, r, a) {
            o("WAWebBBContactImportLogs").importAudienceSuccess(this.$1, t, n, r, a);
        }
        importAudienceError(t, n) {
            o("WAWebBBContactImportLogs").importAudienceError(this.$1, t, n);
        }
        audienceInfoButtonClicked(t, n, audienceId) {
            o("WAWebBBInfoDrawerLogs").audienceInfoButtonClicked({
                audienceId,
                entryPoint: t,
                log: this.$1,
                surface: n
            });
        }
        starMessageButtonClicked(t, n, r, a) {
            o("WAWebBBInfoDrawerLogs").starMessageButtonClicked(this.$1, t, n, r, a);
        }
        broadcastInfoDrawerOpened(t, n, r) {
            o("WAWebBBInfoDrawerLogs").broadcastInfoDrawerOpened(this.$1, t, n, r);
        }
        broadcastInfoDrawerViewed(t, n) {
            o("WAWebBBInfoDrawerLogs").broadcastInfoDrawerViewed(this.$1, t, n);
        }
        performanceExplainedClicked(t) {
            o("WAWebBBInfoDrawerLogs").performanceExplainedClicked(this.$1, t);
        }
        inThreadInsightMetricsChipClicked(t, n, r) {
            o("WAWebBBInfoDrawerLogs").inThreadInsightMetricsChipClicked(this.$1, t, n, r);
        }
        refreshInsightsClicked(t) {
            o("WAWebBBInfoDrawerLogs").refreshInsightsClicked(this.$1, t);
        }
        detailsPanelCloseClicked(t) {
            o("WAWebBBInfoDrawerLogs").detailsPanelCloseClicked(this.$1, t);
        }
        createBroadcastButtonClicked(t, n, r) {
            o("WAWebBBInfoDrawerLogs").createBroadcastButtonClicked(this.$1, t, n, r);
        }
        createBroadcastButtonClickFailed(t, n, r, a) {
            o("WAWebBBInfoDrawerLogs").createBroadcastButtonClickFailed(this.$1, t, n, r, a);
        }
        newBroadcastButtonClicked(t, n, r) {
            o("WAWebBBInfoDrawerLogs").newBroadcastButtonClicked(this.$1, t, n, r);
        }
        newBroadcastTileClicked(t, n, r) {
            o("WAWebBBInfoDrawerLogs").newBroadcastTileClicked(this.$1, t, n, r);
        }
        openBroadcastThreadClicked(t, n) {
            o("WAWebBBInfoDrawerLogs").openBroadcastThreadClicked(this.$1, t, n);
        }
        audienceInfoDrawerViewed(t, n) {
            o("WAWebBBInfoDrawerLogs").audienceInfoDrawerViewed(this.$1, t, n);
        }
        audienceInfoDrawerCloseClicked(t, n) {
            o("WAWebBBInfoDrawerLogs").audienceInfoDrawerCloseClicked(this.$1, t, n);
        }
        audienceInfoDrawerEditRecipientsClicked(t, n) {
            o("WAWebBBInfoDrawerLogs").audienceInfoDrawerEditRecipientsClicked(this.$1, t, n);
        }
        audienceInfoDrawerDeleteClicked(t, n) {
            o("WAWebBBInfoDrawerLogs").audienceInfoDrawerDeleteClicked(this.$1, t, n);
        }
        labelChatClicked(t, n, r) {
            o("WAWebBBInfoDrawerLogs").labelChatClicked(this.$1, t, n, r);
        }
        labelChatSaved(t, n, r) {
            o("WAWebBBInfoDrawerLogs").labelChatSaved(this.$1, t, n, r);
        }
        deleteAudienceClicked(t, n, r) {
            o("WAWebBBInfoDrawerLogs").deleteAudienceClicked(this.$1, t, n, r);
        }
        broadcastDeleteConfirmed(t, n) {
            o("WAWebBBInfoDrawerLogs").broadcastDeleteConfirmed(this.$1, t, n);
        }
        deleteAudienceDialogViewed(t, n) {
            o("WAWebBBInfoDrawerLogs").deleteAudienceDialogViewed(this.$1, t, n);
        }
        audienceDeleteConfirmed(t, n) {
            o("WAWebBBInfoDrawerLogs").audienceDeleteConfirmed(this.$1, t, n);
        }
        deleteAudienceCancelClicked(t, n) {
            o("WAWebBBInfoDrawerLogs").deleteAudienceCancelClicked(this.$1, t, n);
        }
        audienceDeleteResult(t, n, r, a, i) {
            o("WAWebBBInfoDrawerLogs").audienceDeleteResult(this.$1, t, n, r, a, i);
        }
        deleteBroadcastDialogViewed(t, n) {
            o("WAWebBBInfoDrawerLogs").deleteBroadcastDialogViewed(this.$1, t, n);
        }
        deleteBroadcastCancelClicked(t, n) {
            o("WAWebBBInfoDrawerLogs").deleteBroadcastCancelClicked(this.$1, t, n);
        }
        broadcastDeleteResult(t, n, r, a, i, l) {
            o("WAWebBBInfoDrawerLogs").broadcastDeleteResult(this.$1, t, n, r, a, i, l);
        }
        stopBroadcastDialogViewed(t, n) {
            o("WAWebBBInfoDrawerLogs").stopBroadcastDialogViewed(this.$1, t, n);
        }
        broadcastStopConfirmed(t, n) {
            o("WAWebBBInfoDrawerLogs").broadcastStopConfirmed(this.$1, t, n);
        }
        stopBroadcastCancelClicked(t, n) {
            o("WAWebBBInfoDrawerLogs").stopBroadcastCancelClicked(this.$1, t, n);
        }
        broadcastStopResult(t, n, r, a, i, l) {
            o("WAWebBBInfoDrawerLogs").broadcastStopResult(this.$1, t, n, r, a, i, l);
        }
        renameBroadcastClicked(t) {
            o("WAWebBBInfoDrawerLogs").renameBroadcastClicked(this.$1, t);
        }
        renameBroadcastResult(t, n, r) {
            o("WAWebBBInfoDrawerLogs").renameBroadcastResult(this.$1, t, n, r);
        }
        renameAudienceClicked(t, n, r) {
            o("WAWebBBInfoDrawerLogs").renameAudienceClicked(this.$1, t, n, r);
        }
        renameAudienceResult(t, n, r, a, i) {
            o("WAWebBBInfoDrawerLogs").renameAudienceResult(this.$1, t, n, r, a, i);
        }
        undoRenameBroadcastClicked(t) {
            o("WAWebBBInfoDrawerLogs").undoRenameBroadcastClicked(this.$1, t);
        }
        undoRenameAudienceClicked(t, n, r) {
            o("WAWebBBInfoDrawerLogs").undoRenameAudienceClicked(this.$1, t, n, r);
        }
        broadcastPreviewClicked(t, n) {
            o("WAWebBBInfoDrawerLogs").broadcastPreviewClicked(this.$1, t, n);
        }
        duplicateBroadcastClicked(t, n) {
            o("WAWebBBInfoDrawerLogs").duplicateBroadcastClicked(this.$1, t, n);
        }
        duplicateBroadcastTileViewed(t, n) {
            o("WAWebBBInfoDrawerLogs").duplicateBroadcastTileViewed(this.$1, t, n);
        }
        deliveredToDrawerViewed(t, n) {
            o("WAWebBBInfoDrawerLogs").deliveredToDrawerViewed(this.$1, t, n);
        }
        deliveredToDrawerFetchFailed(t, n, r) {
            o("WAWebBBInfoDrawerLogs").deliveredToDrawerFetchFailed(this.$1, t, n, r);
        }
        genAISuggestionsShown(t, n, r) {
            o("WAWebBBGenAILogs").genAISuggestionsShown(this.$1, t, n, r);
        }
        genAICardTapped(t) {
            o("WAWebBBGenAILogs").genAICardTapped(this.$1, t);
        }
        genAIRefreshTapped(t) {
            o("WAWebBBGenAILogs").genAIRefreshTapped(this.$1, t);
        }
        genAIErrorShown(t) {
            o("WAWebBBGenAILogs").genAIErrorShown(this.$1, t);
        }
        genAIErrorRetryTapped(t) {
            o("WAWebBBGenAILogs").genAIErrorRetryTapped(this.$1, t);
        }
        genAIDailyLimitHit(t) {
            o("WAWebBBGenAILogs").genAIDailyLimitHit(this.$1, t);
        }
        genAIModalClosed(t, n, r) {
            o("WAWebBBGenAILogs").genAIModalClosed(this.$1, t, n, r);
        }
        genAIAiTextUsed(t) {
            o("WAWebBBGenAILogs").genAIAiTextUsed(this.$1, t);
        }
        genAIAiTextCleared() {
            o("WAWebBBGenAILogs").genAIAiTextCleared(this.$1);
        }
        genAIChipTapped(t) {
            o("WAWebBBGenAILogs").genAIChipTapped(this.$1, t);
        }
        genAIInsufficientWordCountShown() {
            o("WAWebBBGenAILogs").genAIInsufficientWordCountShown(this.$1);
        }
        genAICreateModalDismissed() {
            o("WAWebBBGenAILogs").genAICreateModalDismissed(this.$1);
        }
        genAICreateModalSubmitted(t) {
            o("WAWebBBGenAILogs").genAICreateModalSubmitted(this.$1, t);
        }
        genAICreateModalViewed() {
            o("WAWebBBGenAILogs").genAICreateModalViewed(this.$1);
        }
        genAICustomizeBack(t) {
            o("WAWebBBGenAILogs").genAICustomizeBack(this.$1, t);
        }
        genAICustomizeOpened(t) {
            o("WAWebBBGenAILogs").genAICustomizeOpened(this.$1, t);
        }
        genAICustomizeUseMessage(refinementCount, cardIndex, isOriginal) {
            o("WAWebBBGenAILogs").genAICustomizeUseMessage({
                cardIndex,
                isOriginal,
                log: this.$1,
                refinementCount
            });
        }
        genAIRefinementLoading() {
            o("WAWebBBGenAILogs").genAIRefinementLoading(this.$1);
        }
        genAIRefinementCompleted(t) {
            o("WAWebBBGenAILogs").genAIRefinementCompleted(this.$1, t);
        }
        genAIRefinementFailed(t) {
            o("WAWebBBGenAILogs").genAIRefinementFailed(this.$1, t);
        }
        genAIRefinementSubmitted(t, n, r) {
            o("WAWebBBGenAILogs").genAIRefinementSubmitted(this.$1, t, n, r);
        }
        genAIEntryPointViewed() {
            o("WAWebBBGenAILogs").genAIEntryPointViewed(this.$1);
        }
        genAIEntryPointClicked(t, n) {
            o("WAWebBBGenAILogs").genAIEntryPointClicked(this.$1, t, n);
        }
        genAITooltipImpression() {
            o("WAWebBBGenAILogs").genAITooltipImpression(this.$1);
        }
        genAINuxModalViewed() {
            o("WAWebBBGenAILogs").genAINuxModalViewed(this.$1);
        }
        genAINuxAcceptClicked() {
            o("WAWebBBGenAILogs").genAINuxAcceptClicked(this.$1);
        }
        genAINuxDismissClicked() {
            o("WAWebBBGenAILogs").genAINuxDismissClicked(this.$1);
        }
        genAINuxLinkClicked(t) {
            o("WAWebBBGenAILogs").genAINuxLinkClicked(this.$1, t);
        }
        tosNuxViewed(t, n, r) {
            o("WAWebBBNuxLogs").tosNuxViewed(this.$1, t, n != null ? {
                is_soft_opt_in_accepted: n.isSoftOptInAccepted,
                persisted_state: n.persistedState ?? "null",
                sync_result: n.syncResult,
                tos_manager_state: n.tosManagerState ?? "null"
            } : undefined, r);
        }
        tosNuxQrViewed(t, n, r) {
            o("WAWebBBNuxLogs").tosNuxQrViewed(this.$1, t, n, r);
        }
        tosNuxAcceptClicked(t, n) {
            o("WAWebBBNuxLogs").tosNuxAcceptClicked({
                bbTier: n,
                entryPoint: t,
                log: this.$1
            });
        }
        tosNuxAcceptSuccess(t, n, r) {
            o("WAWebBBNuxLogs").tosNuxAcceptSuccess(this.$1, t, n != null ? {
                is_soft_opt_in_accepted: n.isSoftOptInAccepted,
                persisted_state: n.persistedState ?? "null",
                sync_result: n.syncResult,
                tos_manager_state: n.tosManagerState ?? "null"
            } : undefined, r);
        }
        tosNuxAcceptFailed(t, n, r, a, i) {
            o("WAWebBBNuxLogs").tosNuxAcceptFailed(this.$1, t, n, r != null ? {
                is_soft_opt_in_accepted: r.isSoftOptInAccepted,
                persisted_state: r.persistedState ?? "null",
                sync_result: r.syncResult,
                tos_manager_state: r.tosManagerState ?? "null"
            } : undefined, a, i);
        }
        tosNuxDismissClicked(t, n) {
            o("WAWebBBNuxLogs").tosNuxDismissClicked(this.$1, t, n);
        }
        tosNuxLinkClicked(t, n, r) {
            o("WAWebBBNuxLogs").tosNuxLinkClicked(this.$1, t, n, r);
        }
        paymentMethodChangeClicked(t) {
            o("WAWebBBPaymentLogs").paymentMethodChangeClicked(this.$1, t);
        }
        paymentRequiredActionClicked(t) {
            o("WAWebBBPaymentLogs").paymentRequiredActionClicked(this.$1, t);
        }
        billingWizardOpened(t, n) {
            o("WAWebBBPaymentLogs").billingWizardOpened(this.$1, t, n);
        }
        billingWizardCompleted(t, n) {
            o("WAWebBBPaymentLogs").billingWizardCompleted(this.$1, t, n);
        }
        addFundsWizardOpened(t) {
            o("WAWebBBPaymentLogs").addFundsWizardOpened(this.$1, t);
        }
        billingInfoFetchFailed(t) {
            o("WAWebBBPaymentLogs").billingInfoFetchFailed(this.$1, t);
        }
        businessInfoFetchFailed(t) {
            o("WAWebBBPaymentLogs").businessInfoFetchFailed(this.$1, t);
        }
        emailOnboardingCheckFailed(t) {
            o("WAWebBBPaymentLogs").emailOnboardingCheckFailed(this.$1, t);
        }
        checkoutFetchFailed(t, n) {
            o("WAWebBBPaymentLogs").checkoutFetchFailed(this.$1, t, n);
        }
        quotaFetchFailed(t) {
            o("WAWebBBPaymentLogs").quotaFetchFailed(this.$1, t);
        }
        billingSummaryFaqLinkClicked(t) {
            o("WAWebBBPaymentLogs").billingSummaryFaqLinkClicked(this.$1, t);
        }
        billingSummaryTosLinkClicked(t) {
            o("WAWebBBPaymentLogs").billingSummaryTosLinkClicked(this.$1, t);
        }
        billingSummaryPrivacyPolicyLinkClicked(t) {
            o("WAWebBBPaymentLogs").billingSummaryPrivacyPolicyLinkClicked(this.$1, t);
        }
        paymentMethodSectionViewed(t, n) {
            o("WAWebBBPaymentLogs").paymentMethodSectionViewed(this.$1, t, n);
        }
        billingWizardFailed(t, n) {
            o("WAWebBBPaymentLogs").billingWizardFailed(this.$1, t, n);
        }
    }
    const s = new e;
    l.BusinessBroadcastUserJourneyLogger = s;
}, 98);