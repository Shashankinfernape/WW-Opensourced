__d("WAWebBizBroadcastsCreationStrings", [
    "fbt",
    "WAWebBizBroadcastsRecipientUtils"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
        return s._("New broadcast");
    }
    function u() {
        return s._("New broadcast");
    }
    function c() {
        return s._("Create broadcast");
    }
    function d() {
        return s._("Duplicate broadcast");
    }
    function m(e) {
        if (e) {
            return p();
        }
        return s._("Send now");
    }
    function p() {
        return s._("Sending...");
    }
    function _() {
        return s._("Audience");
    }
    function f() {
        return s._("Choose audience");
    }
    function g() {
        return s._("Add audience");
    }
    function h() {
        return s._("Create audience");
    }
    function y() {
        return s._("Import audience");
    }
    function C() {
        return s._("Existing audiences");
    }
    function b() {
        return s._("Select who you want to reach with your broadcast.");
    }
    function v() {
        return s._("Selected audiences");
    }
    function S(e) {
        return s._("_j{\"*\":\"{number} recipients\",\"_1\":\"1 recipient\"}", [
            s._plural(e, "number")
        ]);
    }
    function R(e) {
        return s._("{count} people are in multiple audiences, so they'll get this broadcast more than once.", [
            s._param("count", e)
        ]);
    }
    function L() {
        return s._("Imported");
    }
    function E() {
        return s._("Audience imported");
    }
    function k() {
        return s._("Audience created");
    }
    function I() {
        return s._("Audience updated");
    }
    function T() {
        return s._("Message");
    }
    function D() {
        return s._("Attachment");
    }
    function x() {
        return s._("Include an attachment to help your message stand out.");
    }
    function $() {
        return s._("Optional");
    }
    function P() {
        return s._("Edit media");
    }
    function N() {
        return s._("Remove media");
    }
    function M() {
        return s._("Catalog");
    }
    function w() {
        return s._("Preview");
    }
    function A() {
        return s._("Your message will display here.");
    }
    function F(e) {
        return s._("_j{\"*\":\"{number} pages\",\"_1\":\"1 page\"}", [
            s._plural(e, "number")
        ]);
    }
    function O() {
        return s._("Details");
    }
    function B() {
        return s._("Summary");
    }
    function W() {
        return s._("Total recipients");
    }
    function q() {
        return s._("Estimated cost");
    }
    function U() {
        return s._("Estimated tax");
    }
    function V() {
        return s._("Estimated total");
    }
    function H() {
        return s._("Credits used");
    }
    function G() {
        return s._("Available credits");
    }
    function z() {
        return s._("Existing audiences");
    }
    function j(e) {
        return s._("{count} recipients", [
            s._param("count", e)
        ]);
    }
    function K() {
        return s._("Save");
    }
    function Q() {
        return s._("Audience info");
    }
    function X() {
        return s._("Continue without saving?");
    }
    function Y() {
        return s._("Your progress will be lost.");
    }
    function J() {
        return s._("Continue");
    }
    function Z() {
        return s._("Payment pending");
    }
    function ee() {
        return s._("Choose audience");
    }
    function te() {
        return s._("Message can't be empty");
    }
    function ne({ broadcastJidIsNull, checkoutFailed, contactsCount, hasPendingBillingAction, hasRequiredBusinessInfo, isCreatingCampaign, isLoadingBusinessInfo, isMessageEmpty }) {
        const d = o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit();
        if (isCreatingCampaign) {
            return null;
        }
        if (broadcastJidIsNull) {
            return ee();
        }
        if (isLoadingBusinessInfo) {
            return s._("Loading...");
        }
        if (hasRequiredBusinessInfo) {
            if (contactsCount < 2) {
                return s._("You need to add at least two recipients to send a message.");
            }
            if (contactsCount > d) {
                return s._("Broadcast to a maximum of {recipientLimit} people at a time.", [
                    s._param("recipientLimit", d)
                ]);
            }
            if (hasPendingBillingAction) {
                return Z();
            }
            if (isMessageEmpty) {
                return te();
            }
            if (checkoutFailed) {
                return s._("Something went wrong. Please try again later.");
            }
            return null;
        }
        return s._("Account data missing. Check your payment details and try again.");
    }
    l.getNewBroadcastButtonLabel = e;
    l.getNewBroadcastDrawerTitle = u;
    l.getCreateBroadcastDrawerTitle = c;
    l.getDuplicateBroadcastDrawerTitle = d;
    l.getSendNowButtonLabel = m;
    l.getSendingBroadcastButtonLabel = p;
    l.getAudienceSectionTitle = _;
    l.getChooseAudienceLabel = f;
    l.getAddAudienceLabel = g;
    l.getCreateAudienceLabel = h;
    l.getImportAudienceLabel = y;
    l.getExistingAudiencesLabel = C;
    l.getAudienceSectionSubtitle = b;
    l.getSelectedAudiencesAriaLabel = v;
    l.getAudienceRecipientCountLabel = S;
    l.getOverlappingRecipientsWarning = R;
    l.getImportedLabel = L;
    l.getAudienceImportedToastLabel = E;
    l.getAudienceCreatedToastLabel = k;
    l.getAudienceUpdatedToastLabel = I;
    l.getMessageSectionTitle = T;
    l.getAttachmentSectionTitle = D;
    l.getAttachmentSectionSubtitle = x;
    l.getOptionalLabel = $;
    l.getEditMediaAriaLabel = P;
    l.getRemoveMediaAriaLabel = N;
    l.getDefaultCatalogLabel = M;
    l.getPreviewSectionTitle = w;
    l.getPreviewMessagePlaceholder = A;
    l.getDocumentPreviewPagesCount = F;
    l.getDetailsSectionTitle = O;
    l.getBillingSummarySectionTitle = B;
    l.getTotalRecipientsLabel = W;
    l.getEstimatedCostLabel = q;
    l.getEstimatedTaxLabel = U;
    l.getEstimatedTotalLabel = V;
    l.getCreditsUsedLabel = H;
    l.getAvailableCreditsLabel = G;
    l.getExistingAudiencesDialogTitle = z;
    l.getExistingAudienceRecipientsLabel = j;
    l.getExistingAudiencesSaveButtonLabel = K;
    l.getBroadcastAudienceInfoLabel = Q;
    l.getExitConfirmationTitle = X;
    l.getExitConfirmationBody = Y;
    l.getExitConfirmationContinueButton = J;
    l.getPaymentPendingDisabledReason = Z;
    l.getChooseAudienceDisabledReason = ee;
    l.getMessageEmptyDisabledReason = te;
    l.getSendNowButtonDisabledReason = ne;
}, 226);