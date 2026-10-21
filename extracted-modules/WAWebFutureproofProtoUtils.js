__d("WAWebFutureproofProtoUtils", [
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebMessageAssociationGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebSoundStickerGating",
    "WAWebSpoilerGating"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ associatedChildMessage, audioStickerMessage, botForwardedMessage, botGroupParticipantMessage, botInvokeMessage, documentWithCaptionMessage, editedMessage, ephemeralMessage, groupMentionedMessage, newsletterAdminProfileMessage, newsletterScheduledMessage, pollCreationMessageV4, pollCreationOptionImageMessage, questionMessage, questionReplyMessage, spoilerMessage, viewOnceMessage, viewOnceMessageV2, viewOnceMessageV2Extension }) {
        if (botGroupParticipantMessage && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
            return botGroupParticipantMessage;
        }
        return groupMentionedMessage || documentWithCaptionMessage || viewOnceMessage || viewOnceMessageV2 || viewOnceMessageV2Extension || ephemeralMessage || editedMessage || botInvokeMessage || pollCreationMessageV4 || pollCreationOptionImageMessage || (associatedChildMessage && o("WAWebMessageAssociationGatingUtils").isFutureproofAssociatedChildEnabled() ? associatedChildMessage : questionMessage || questionReplyMessage || (spoilerMessage != null && spoilerMessage.message?.spoilerMessage == null && o("WAWebSpoilerGating").isSpoilerReceiverEnabled() ? spoilerMessage : botForwardedMessage && o("WAWebBotBaseGating").isRichResponseForwardReceivingEnabled() ? botForwardedMessage : newsletterAdminProfileMessage || (newsletterScheduledMessage && o("WAWebNewsletterGatingUtils").isSchedulingUpdatesReceiverEnabled() ? newsletterScheduledMessage : audioStickerMessage && o("WAWebSoundStickerGating").isSoundStickerConsumptionEnabled() ? audioStickerMessage : null)));
    }
    function s({ associatedChildMessage, audioStickerMessage, botForwardedMessage, botGroupParticipantMessage, spoilerMessage }) {
        return botGroupParticipantMessage != null && !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() || associatedChildMessage != null && !o("WAWebMessageAssociationGatingUtils").isFutureproofAssociatedChildEnabled() || spoilerMessage != null && (!o("WAWebSpoilerGating").isSpoilerReceiverEnabled() || spoilerMessage.message?.spoilerMessage != null) || audioStickerMessage != null && !o("WAWebSoundStickerGating").isSoundStickerConsumptionEnabled() || botForwardedMessage != null && !o("WAWebBotBaseGating").isRichResponseForwardReceivingEnabled();
    }
    l.maybeGetFutureproofMessage = e;
    l.hasGatedOffFutureproofWrapper = s;
}, 98);