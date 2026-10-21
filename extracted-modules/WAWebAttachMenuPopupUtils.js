__d("WAWebAttachMenuPopupUtils", [
    "WAWebAttachMenuPopupItemPhotos.react",
    "WAWebBotGating",
    "WAWebBotPrimaryFeaturesFrontend",
    "WAWebBotSupportGating",
    "WAWebBotUtils",
    "WAWebHatchGating",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return !o("WAWebBotSupportGating").isSupportedThirdPartyBot(e, o("WAWebBotPrimaryFeaturesFrontend").getBotPrimaryFeatures());
    }
    function s(e) {
        return !o("WAWebBotUtils").isBotChannelFBID(e) && !o("WAWebBotUtils").isBusinessAssistantBot(e);
    }
    function u(e, t) {
        if (o("WAWebBotUtils").isBotChannelFBID(e)) {
            if (o("WAWebBotUtils").isHatchBot(e) && !o("WAWebHatchGating").isHatchVideoUploadEnabled()) {
                return o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.PHOTOS;
            }
            return o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.PHOTOS_AND_VIDEOS;
        }
        if (o("WAWebBotUtils").isBusinessAssistantBot(e)) {
            if (o("WAWebBotGating").isBusinessAssistantImageInputEnabled()) {
                return o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.PHOTOS;
            }
            return null;
        }
        if (o("WAWebBotUtils").isMetaAiBot(e)) {
            if (o("WAWebBotGating").isAnyMetaAiMediaInputEnabled()) {
                if (o("WAWebBotGating").isMetaAiVideoInputEnabled()) {
                    return o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.PHOTOS_AND_VIDEOS;
                }
                return o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.PHOTOS;
            }
            return null;
        }
        return c(t);
    }
    function c(e) {
        const t = e.has(o("WAWebMsgType").MSG_TYPE.IMAGE);
        const n = e.has(o("WAWebMsgType").MSG_TYPE.VIDEO);
        if (t && n) {
            return o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.PHOTOS_AND_VIDEOS;
        }
        if (t) {
            return o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.PHOTOS;
        }
        if (n) {
            return o("WAWebAttachMenuPopupItemPhotos.react").MediaSelectionType.VIDEOS;
        }
        return null;
    }
    l.canOfferTrayCreations = e;
    l.canOfferSmbBusinessTools = s;
    l.getMediaSelectionType = u;
    l.getMediaSelectionTypeForSupportedTypes = c;
}, 98);