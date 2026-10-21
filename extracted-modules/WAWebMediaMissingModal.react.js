__d("WAWebMediaMissingModal.react", [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebMmsMediaTypes",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "react",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = (msg)=>{
        try {
            return o("WAWebMmsMediaTypes").getMsgMediaType(msg);
        } catch (e) {
            return null;
        }
    };
    function m({ msg }) {
        const a = o("useWAWebMsgValues").useMsgValues(msg.id, [
            o("WAWebMsgGetters").getType,
            o("WAWebMsgGetters").getIsVcardOverMmsDocument
        ]);
        const i = a[0];
        const l = a[1];
        const u = d(msg);
        let m;
        let p;
        switch(u){
            case o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO:
                m = s._("Video unavailable");
                p = s._("Can't play this video because it's no longer on your phone.");
                break;
            case o("WAWebMmsMediaTypes").MEDIA_TYPES.GIF:
                m = s._("GIF unavailable");
                p = s._("Can't view this GIF because it's no longer on your phone.");
                break;
            case o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO:
                m = s._("Voice message unavailable");
                p = s._("Can't play this voice message because it's no longer on your phone.");
                break;
            case o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE:
                m = s._("Photo unavailable");
                p = s._("Can't view this photo because it's no longer on your phone.");
                break;
            case o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT:
                if (l) {
                    m = s._("Contact unavailable");
                    p = s._("Can't view this contact because it's no longer on your phone.");
                    break;
                }
                m = s._("Document unavailable");
                p = s._("Can't download this document because it's no longer on your phone.");
                break;
            case o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER:
                m = s._("Sticker unavailable");
                p = s._("Can't download this sticker because it's no longer on your phone.");
                break;
            default:
                m = s._("Media message unavailable");
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "type: ",
                    ""
                ])), u).sendLogs("MediaMissingModal: unexpected message type");
        }
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component tsNavigationData={{
            surface: "unknown",
            viewName: "media-missing"
        }} title={m} onOK={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("OK")}>{p}</Component>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = m;
}, 226);