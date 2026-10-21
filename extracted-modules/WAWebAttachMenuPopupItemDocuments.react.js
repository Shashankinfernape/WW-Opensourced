__d("WAWebAttachMenuPopupItemDocuments.react", [
    "Promise",
    "WAWebAttachMenuFilePicker",
    "WAWebAttachMenuStrings",
    "WAWebAttachmentMenuLogger",
    "WAWebBotMultiModalUtils",
    "WAWebChatGetters",
    "WAWebFileUtils",
    "WAWebImagineActionLogger",
    "WAWebPrepareMessageSendingAction",
    "WAWebStateUtils",
    "WDSIconIcDescriptionFilled.react",
    "WDSMenuItem.react",
    "cr:8711",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        refreshedIcon: {
            color: "x1xy43o6",
            $$css: true
        }
    };
    function d({ chat, dismissMenu, multiple, onAlternateSendFlowStart, onDocumentPick }) {
        onAlternateSendFlowStart();
        if (n("cr:8711") != null) {
            n("cr:8711").preloadWebTPThumbnailRendererIfEnabled("documentAttachClick");
        }
        o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(chat);
        o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.DOCUMENT);
        const u = o("WAWebChatGetters").getIsMetaAiBot(o("WAWebStateUtils").unproxy(chat));
        if (u) {
            o("WAWebImagineActionLogger").logMetaAiDocumentClick(chat);
        }
        const acceptOverride = u ? o("WAWebBotMultiModalUtils").getMetaAiFilePickerAcceptOverride() : null;
        o("WAWebAttachMenuFilePicker").createFilePicker({
            accept: o("WAWebAttachMenuFilePicker").FilePickerMimeType.DOCUMENT,
            acceptOverride,
            multiple,
            transformAttachment: function(t) {
                return {
                    file: t,
                    type: o("WAWebFileUtils").FILETYPE.DOCUMENT
                };
            }
        }, function(t) {
            if (u) {
                (e || (e = n("Promise"))).all(t).then((e)=>{
                    const t = o("WAWebBotMultiModalUtils").getSupportedMetaAiAttachments(e);
                    o("WAWebBotMultiModalUtils").maybeShowUnsupportedFileToast(t.length, e.length);
                    if (t.length > 0) {
                        onDocumentPick(t.map((e)=>e));
                    }
                });
                return;
            }
            onDocumentPick(t);
        }, dismissMenu);
    }
    function m({ chat, dismissMenu, multiple, onAlternateSendFlowStart, onDocumentPick }) {
        const s = function() {
            d({
                chat,
                dismissMenu,
                multiple,
                onAlternateSendFlowStart,
                onDocumentPick
            });
        };
        const Component = r("WDSMenuItem.react");
        return <Component testid="mi-attach-document" onPress={s} Icon={r("WDSIconIcDescriptionFilled.react")} iconXstyle={c.refreshedIcon} title={o("WAWebAttachMenuStrings").DocumentText()}/>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = m;
}, 98);