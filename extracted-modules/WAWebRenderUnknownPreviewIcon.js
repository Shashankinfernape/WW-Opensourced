__d("WAWebRenderUnknownPreviewIcon", [
    "WAWebMsgType",
    "WDSIconIcImage.react",
    "WDSIconMusicNoteSlash.react",
    "WDSIconWdsIcUnsupportedMessage.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_msg = e.msg;
        let a;
        if (t[0] !== e_msg.futureproofType) {
            a = e_msg.futureproofType === o("WAWebMsgType").MSG_TYPE.ALBUM ? s.jsx(r("WDSIconIcImage.react"), {
                width: 18,
                height: 20,
                testid: "album_futureproof_preview_icon"
            }) : e_msg.futureproofType === o("WAWebMsgType").MSG_TYPE.MUSIC ? s.jsx(r("WDSIconMusicNoteSlash.react"), {
                width: 20,
                height: 20,
                testid: "music_futureproof_preview_icon"
            }) : s.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
                width: 20,
                height: 20,
                testid: "message-fail"
            });
            t[0] = e_msg.futureproofType;
            t[1] = a;
        } else {
            a = t[1];
        }
        return a;
    }
    l.default = u;
}, 98);