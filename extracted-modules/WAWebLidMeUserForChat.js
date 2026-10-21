__d("WAWebLidMeUserForChat", [
    "WAWebChatGetters",
    "WAWebMsgKeyUtils",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        let n;
        const r = e.id.isLid();
        const a = e.isCAG();
        const i = o("WAWebChatGetters").getIsGroup(e) && !!((n = e.groupMetadata) != null && n.isLidAddressingMode);
        switch(t){
            case o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon:
                if (r || a || i) {
                    return o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
                }
                return o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
            case o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage:
            case o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message:
                if (a) {
                    if (i) {
                        return o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
                    }
                    return o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
                }
                if (r || i) {
                    return o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
                }
                return o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
        }
    }
    l.getMeUserLidOrJidForChat = e;
}, 98);