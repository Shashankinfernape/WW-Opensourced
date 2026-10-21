__d("WAWebBizCreateBizStateChangeNotificationMsgsAction", [
    "Promise",
    "WALogger",
    "WAWebChatCollection",
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebPrivacyModeSystemMsg",
    "WAWebUserPrefsNotifications"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c({ currentState, previousState, shouldRunMATonWid = true, wid }) {
        const _ = p(previousState);
        const f = p(currentState);
        const g = o("WAWebLidMigrationUtils").toLid(wid);
        let h;
        if (shouldRunMATonWid && o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && g != null) {
            h = o("WAWebChatCollection").ChatCollection.getChatByAccountLid(g);
            if (h == null) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[createBizStateChangeNotificationMsgs] no chat for lid"
                ])));
                return (u || (u = n("Promise"))).resolve();
            }
        } else {
            h = o("WAWebChatCollection").ChatCollection.get(wid);
            if (h == null) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[createBizStateChangeNotificationMsgs] Cannot find chat"
                ])));
                return (u || (u = n("Promise"))).resolve();
            }
        }
        const y = h.id;
        const C = [
            m(y, _, f),
            d(y, _, f)
        ].filter(Boolean);
        C.map((newMsg)=>{
            if (newMsg != null) {
                return o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                    chatId: y,
                    newMsg,
                    handleSingleMsgOrigin: "bizStateChangeNotification"
                });
            }
        });
        return (u || (u = n("Promise"))).resolve();
    }
    function d(e, t, n) {
        if (o("WAWebUserPrefsNotifications").getGlobalSecurityNotifications() === true && t === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE && n !== o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE) {
            return o("WAWebContactSystemMsg").genEncryptNotificationMsg(e, "e2e_identity_unavailable");
        }
    }
    function m(e, t, n) {
        if (!e.isBot() && t !== n) {
            switch(n){
                case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE:
                    return o("WAWebContactSystemMsg").genEncryptNotificationMsg(e, "encrypt_now");
                case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP:
                    return o("WAWebContactSystemMsg").genNonE2ENotificationMsg(e, "biz_privacy_mode_to_bsp");
                case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB:
                    return o("WAWebContactSystemMsg").genNonE2ENotificationMsg(e, "biz_privacy_mode_to_fb");
                case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.HOSTED_GROUP:
                    return o("WAWebContactSystemMsg").genNonE2ENotificationMsg(e, "is_capi_hosted_group");
            }
        }
    }
    function p(e) {
        return o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(e.isBusiness ? e.privacyMode : null);
    }
    l.createBizStateChangeNotificationMsgs = c;
}, 98);