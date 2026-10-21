__d("WAWebPhoneNumberContactAction", [
    "fbt",
    "WAWebComposeBoxActions",
    "WAWebCopyToClipboard",
    "WAWebModalManager",
    "WAWebOpenChatFlow.react",
    "WAWebPsPhoneNumberHyperlinkWamEvent",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumPhoneNumHyperlinkActionType",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e, t, n) {
        const Component = o("WAWebOpenChatFlow.react").OpenChatFlow;
        o("WAWebModalManager").ModalManager.open(<Component target={{
            wid: t
        }} onSuccess={function({ chat }) {
            _(chat, n);
        }} msgText={null}/>, {
            transition: "modal-flow"
        });
        new (o("WAWebPsPhoneNumberHyperlinkWamEvent")).PsPhoneNumberHyperlinkWamEvent({
            phoneNumHyperlinkAction: o("WAWebWamEnumPhoneNumHyperlinkActionType").PHONE_NUM_HYPERLINK_ACTION_TYPE.CLICK_MESSAGE_ON_WHATSAPP,
            isPhoneNumHyperlinkOwner: o("WAWebUserPrefsMeUser").isMeAccount(t),
            phoneNumberStatusOnWa: true
        }).commit();
    }
    function d(e, t, n) {
        o("WAWebCopyToClipboard").copyTextToClipboard(e);
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            msg: s._("Copied to clipboard.")
        }));
        new (o("WAWebPsPhoneNumberHyperlinkWamEvent")).PsPhoneNumberHyperlinkWamEvent({
            phoneNumHyperlinkAction: o("WAWebWamEnumPhoneNumHyperlinkActionType").PHONE_NUM_HYPERLINK_ACTION_TYPE.CLICK_COPY_PHONE_NUMBER,
            isPhoneNumHyperlinkOwner: n,
            phoneNumberStatusOnWa: !!t
        }).commit();
    }
    function m(e, t) {
        new (o("WAWebPsPhoneNumberHyperlinkWamEvent")).PsPhoneNumberHyperlinkWamEvent({
            phoneNumHyperlinkAction: o("WAWebWamEnumPhoneNumHyperlinkActionType").PHONE_NUM_HYPERLINK_ACTION_TYPE.CLICK_PHONE_NUM_HYPERLINK,
            isPhoneNumHyperlinkOwner: t,
            phoneNumberStatusOnWa: !!e
        }).commit();
    }
    function p(e, t) {
        new (o("WAWebPsPhoneNumberHyperlinkWamEvent")).PsPhoneNumberHyperlinkWamEvent({
            phoneNumHyperlinkAction: o("WAWebWamEnumPhoneNumHyperlinkActionType").PHONE_NUM_HYPERLINK_ACTION_TYPE.CLOSE_DIALOG_BOX,
            isPhoneNumHyperlinkOwner: t,
            phoneNumberStatusOnWa: !!e
        }).commit();
    }
    function _(chat, t) {
        if (chat) {
            o("WAWebComposeBoxActions").ComposeBoxActions.addMsgSendingLogAttributes(chat, {
                handleOnce: function() {
                    new (o("WAWebPsPhoneNumberHyperlinkWamEvent")).PsPhoneNumberHyperlinkWamEvent({
                        phoneNumHyperlinkAction: o("WAWebWamEnumPhoneNumHyperlinkActionType").PHONE_NUM_HYPERLINK_ACTION_TYPE.MESSAGE_SENT,
                        isPhoneNumHyperlinkOwner: t,
                        phoneNumberStatusOnWa: true
                    }).commit();
                }
            });
        }
    }
    l.handleOpenChat = c;
    l.handleCopyPhoneNumber = d;
    l.logClickOnPhoneNumber = m;
    l.logCloseDialog = p;
}, 226);