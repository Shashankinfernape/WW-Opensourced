__d("WAWebAttachMenuPopupItemStickers.react", [
    "fbt",
    "WAWebAttachMenuFilePicker",
    "WAWebAttachmentMenuLogger",
    "WAWebPrepareMessageSendingAction",
    "WAWebWamEnumWebcStickerMakerEventNameType",
    "WAWebWebcStickerMakerEventsWamEvent",
    "WDSIconWdsIcStickerPlusCreateFilled.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        refreshedIcon: {
            color: "x1rlzvk7",
            $$css: true
        }
    };
    function d({ chat, dismissMenu, onAlternateSendFlowStart, onStickerPick }) {
        onAlternateSendFlowStart();
        new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({
            stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.STICKER_MAKER_BUTTON_TAP
        }).commit();
        o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(chat);
        o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.STICKER_MAKER);
        o("WAWebAttachMenuFilePicker").createFilePicker({
            accept: o("WAWebAttachMenuFilePicker").FilePickerMimeType.IMAGE,
            multiple: false,
            transformAttachment: function(t) {
                return {
                    file: t,
                    stickerMaker: true
                };
            }
        }, function(e) {
            new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({
                stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_UPLOADED
            }).commit();
            onStickerPick(e);
        }, dismissMenu);
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(8);
        const { chat, dismissMenu, onAlternateSendFlowStart, onMediaPick } = e;
        let m;
        if (t[0] !== chat || t[1] !== dismissMenu || t[2] !== onAlternateSendFlowStart || t[3] !== onMediaPick) {
            m = function() {
                d({
                    chat,
                    dismissMenu,
                    onAlternateSendFlowStart,
                    onStickerPick: onMediaPick
                });
            };
            t[0] = chat;
            t[1] = dismissMenu;
            t[2] = onAlternateSendFlowStart;
            t[3] = onMediaPick;
            t[4] = m;
        } else {
            m = t[4];
        }
        const p = m;
        let _;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("New sticker");
            t[5] = _;
        } else {
            _ = t[5];
        }
        let f;
        if (t[6] !== p) {
            const Component = r("WDSMenuItem.react");
            f = <Component testid="mi-attach-sticker" onPress={p} Icon={r("WDSIconWdsIcStickerPlusCreateFilled.react")} iconXstyle={c.refreshedIcon} title={_}/>;
            t[6] = p;
            t[7] = f;
        } else {
            f = t[7];
        }
        return f;
    }
    l.default = m;
}, 226);