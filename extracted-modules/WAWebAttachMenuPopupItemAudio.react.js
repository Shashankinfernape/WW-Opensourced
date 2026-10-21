__d("WAWebAttachMenuPopupItemAudio.react", [
    "fbt",
    "WAWebAttachMenuFilePicker",
    "WAWebAttachmentMenuLogger",
    "WAWebPrepareMessageSendingAction",
    "WDSIconIcHeadphonesFilled.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        icon: {
            color: "xtko6g8",
            $$css: true
        }
    };
    function d({ chat, dismissMenu, multiple, onAlternateSendFlowStart, onAudioPick }) {
        onAlternateSendFlowStart();
        o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(chat);
        o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.AUDIO);
        o("WAWebAttachMenuFilePicker").createFilePicker({
            accept: o("WAWebAttachMenuFilePicker").FilePickerMimeType.AUDIO,
            multiple,
            transformAttachment: function(t) {
                return {
                    file: t
                };
            }
        }, onAudioPick, dismissMenu);
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(9);
        const { chat, dismissMenu, multiple, onAlternateSendFlowStart, onMediaPick } = e;
        let p;
        if (t[0] !== chat || t[1] !== dismissMenu || t[2] !== multiple || t[3] !== onAlternateSendFlowStart || t[4] !== onMediaPick) {
            p = function() {
                d({
                    chat,
                    dismissMenu,
                    multiple,
                    onAlternateSendFlowStart,
                    onAudioPick: onMediaPick
                });
            };
            t[0] = chat;
            t[1] = dismissMenu;
            t[2] = multiple;
            t[3] = onAlternateSendFlowStart;
            t[4] = onMediaPick;
            t[5] = p;
        } else {
            p = t[5];
        }
        const _ = p;
        let f;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            f = s._("Audio");
            t[6] = f;
        } else {
            f = t[6];
        }
        let g;
        if (t[7] !== _) {
            const Component = r("WDSMenuItem.react");
            g = <Component testid="mi-attach-media" onPress={_} Icon={r("WDSIconIcHeadphonesFilled.react")} iconXstyle={c.icon} title={f}/>;
            t[7] = _;
            t[8] = g;
        } else {
            g = t[8];
        }
        return g;
    }
    l.default = m;
}, 226);