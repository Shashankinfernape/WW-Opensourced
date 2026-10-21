__d("WAWebMsgActionCanDownloadMsg", [
    "WAWebFrontendMsgGetters",
    "WAWebMediaTypes",
    "WAWebMiscGatingUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMusicEligibleCountriesProvider",
    "WAWebMusicGatingUtils",
    "WAWebMusicParsingUtils",
    "WAWebMusicPlaybackUtils",
    "WAWebStateUtils",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WAWebStateUtils").unproxy(e);
        const r = o("WAWebFrontendMsgGetters").getChat(n);
        if (r.isSuspendedOrTerminated() && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()) {
            return false;
        }
        if (o("WAWebMsgGetters").getIsNewsletterMsg(n) && n.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
            const i = o("WAWebMsgGetters").getFirstMusicAnnotation(n)?.embeddedContent?.embeddedMusic;
            if (i != null) {
                if (Number(i.overlapDurationInMs) > o("WAWebMusicGatingUtils").MAX_MUSIC_DOWNLOAD_EMBED_DURATION_MS) {
                    return false;
                }
                const l = o("WAWebMusicEligibleCountriesProvider").provideMusicEligibleCountries();
                const u = o("WAWebMusicParsingUtils").toMusicMetadata(i);
                if (u && !o("WAWebMusicPlaybackUtils").canPlaybackMusic(u.countryBlocklist, l) || !o("WAWebMusicGatingUtils").isStatusMusicSaveToDiskEnabled()) {
                    return false;
                }
            }
        }
        if (n.type === o("WAWebMsgType").MSG_TYPE.STICKER || n.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK || o("WAWebFrontendMsgGetters").getAsRevoked(n) || n.isViewOnce === true || o("WAWebMsgGetters").getIsViewOncePlaceholder(n)) {
            return false;
        }
        if (n.type === o("WAWebMsgType").MSG_TYPE.VCARD || n.type === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD) {
            return true;
        }
        return !(n.mediaData == null || t !== true && !s(n) || n.type === o("WAWebMsgType").MSG_TYPE.PTV && !o("WAWebMsgGetters").getIsSentByMe(n) || !o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(n, r));
    }
    function s(e) {
        if (e.mediaData.isDownloadable()) {
            return true;
        }
        if (r("justknobx")._("5943")) {
            return e.mediaObject?.downloadStage !== o("WAWebMediaTypes").DownloadStage.ERROR_MISSING && o("WAWebMsgActionCapability").hasRetrievableMedia(e);
        }
        return false;
    }
    l.canDownloadMsg = e;
}, 98);