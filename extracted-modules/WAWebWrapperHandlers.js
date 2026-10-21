__d("WAWebWrapperHandlers", [
    "fbt",
    "WAWebAfterReadUtils",
    "WAWebBizCoexStringUtils",
    "WAWebBizPrivacyUtils",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebEphemeralFbtKic",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFrontendMsgGetters",
    "WAWebGroupAgentOneToOneContact",
    "WAWebMarketingMessagesUserControlsPopupLoadable",
    "WAWebModalManager",
    "WAWebOpenChatWithContactAction",
    "WAWebStateUtils",
    "WAWebWamEnumMmUserControlsEntryPoint",
    "WAWebWebSearchPopup.react",
    "WAWebWrapperOrderEphemeralExemption",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const handleMsgInfoClick = function() {
            o("WAWebCmd").Cmd.msgInfoDrawer(o("WAWebStateUtils").unproxy(e));
        };
        const handleOpenContactChat = function(n) {
            const e_author = e.author;
            const targetId = o("WAWebGroupAgentOneToOneContact").getGroupAgentAwareOneToOneContact(e_author, o("WAWebFrontendMsgGetters").getChat(e), "handle_open_contact_chat");
            if (targetId != null) {
                o("WAWebOpenChatWithContactAction").openChatWithContact({
                    chatEntryPoint: n,
                    findChatOrigin: "msgHandlerOpenContact",
                    targetId
                });
            }
        };
        const handleOpenWebSearchFlow = function() {
            o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebWebSearchPopup.react"), {
                message: e
            }), {
                transition: "modal-flow"
            });
        };
        const handleOpenEphemeralInfoPopup = function() {
            const r = e.afterReadDuration ?? 0;
            const a = e.ephemeralDuration ?? 0;
            let i;
            let l;
            if (o("WAWebAfterReadUtils").isAfterReadEnabled() && r > 0) {
                i = o("WAWebEphemeralFbtKic").getDisappearingMessageOutOfSyncDifferentTitle();
                l = o("WAWebEphemeralFbtKic").getDisappearingMessageOutOfSyncDifferentBody(r);
            } else if (a > 0) {
                i = o("WAWebEphemeralFbtKic").getDisappearingMessageOutOfSyncDifferentTitle();
                l = o("WAWebEphemeralFbtKic").getDisappearingMessageOutOfSyncDifferentBody(a);
            } else {
                i = s._("This message won't disappear");
                l = s._("The sender may be using an older version of WhatsApp.");
            }
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
                surface: "unknown",
                viewName: "ephemeral-msg-info"
            }} title={i} onOK={o("WAWebModalManager").closeModalManager}>{l}</Component>, {
                transition: "modal-flow"
            });
        };
        const handleOpenBizPrivacyInfoPopup = function() {
            const e_bizPrivacyStatus = e.bizPrivacyStatus;
            if (e_bizPrivacyStatus != null) {
                const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
                    surface: "unknown",
                    viewName: "biz-privacy-info"
                }} onOK={o("WAWebModalManager").closeModalManager}>{o("WAWebBizPrivacyUtils").getBizPrivacyInfoString(e_bizPrivacyStatus)}</Component>, {
                    transition: "modal-flow"
                });
            }
        };
        const handleOpenBizEncStateMismatchInfoPopup = function() {
            const r = o("WAWebFrontendMsgGetters").getChat(e)?.contact?.isOrHasBeenHosted === true;
            if (!(!r || !e?.id?.remote?.isUser())) {
                const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
                    surface: "unknown",
                    viewName: "biz-enc-state-mismatch"
                }} onOK={o("WAWebModalManager").closeModalManager}>{o("WAWebBizCoexStringUtils").bizEncStateMismatchString()}</Component>, {
                    transition: "modal-flow"
                });
            }
        };
        const handleOpenEphemeralExemptionInfoPopup = function() {
            const e = o("WAWebWrapperOrderEphemeralExemption").getOrderEphemeralExemptionInfoString();
            const t = o("WAWebWrapperOrderEphemeralExemption").getLearnMorerderEphemeralExemptionButtonString();
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
                surface: "unknown",
                viewName: "order-ephemeral-exemption"
            }} cancelText={t} onCancel={function() {
                o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getEphemeralFaqUrl());
            }} onOK={o("WAWebModalManager").closeModalManager}>{e}</Component>, {
                transition: "modal-flow"
            });
        };
        const handleOpenMarketingMessagesFeedbackPopup = function() {
            o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebMarketingMessagesUserControlsPopupLoadable").WAWebMarketingMessagesUserControlsPopupLoadable, {
                logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.MESSAGE_BUBBLE,
                msg: e
            }), {
                transition: "modal-flow"
            });
        };
        return {
            handleMsgInfoClick,
            handleOpenContactChat,
            handleOpenWebSearchFlow,
            handleOpenEphemeralInfoPopup,
            handleOpenBizPrivacyInfoPopup,
            handleOpenEphemeralExemptionInfoPopup,
            handleOpenBizEncStateMismatchInfoPopup,
            handleOpenMarketingMessagesFeedbackPopup
        };
    }
    l.getHandlers = c;
}, 226);