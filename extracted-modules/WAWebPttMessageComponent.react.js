__d("WAWebPttMessageComponent.react", [
    "WAWebDetailImage.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessageAuthor.react",
    "WAWebMsgGetters",
    "WAWebNewsletterAdminProfilePicture.react",
    "WAWebPttAudioBubble.react",
    "WAWebPttAudioMediaState.react",
    "WAWebPttAudioPlayedStatus",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgDownloadMedia",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(24);
        const { enableKbSeekSpeedChange, msgKey } = e;
        const enableKbSeekSpeedChange_1 = enableKbSeekSpeedChange === undefined ? false : enableKbSeekSpeedChange;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebFrontendMsgGetters").getSenderObj,
                o("WAWebFrontendMsgGetters").getMsgSenderId,
                o("WAWebMsgGetters").getNewsletterAdminProfile
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const u = o("useWAWebMsgValues").useMsgValues(msgKey, l);
        const c = u[0];
        const d = u[1];
        const newsletterAdminProfile = u[2];
        o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(msgKey);
        let p;
        if (t[1] !== msgKey || t[2] !== e.displayAuthor || t[3] !== e.displayType || t[4] !== c) {
            p = e.displayAuthor ? s.jsx(r("WAWebMessageAuthor.react"), {
                msgKey,
                contact: c,
                displayType: e.displayType
            }) : null;
            t[1] = msgKey;
            t[2] = e.displayAuthor;
            t[3] = e.displayType;
            t[4] = c;
            t[5] = p;
        } else {
            p = t[5];
        }
        const _ = p;
        let f;
        if (t[6] !== newsletterAdminProfile || t[7] !== d) {
            f = newsletterAdminProfile ? s.jsx(o("WAWebNewsletterAdminProfilePicture.react").WAWebNewsletterAdminProfilePicture, {
                newsletterAdminProfile,
                theme: o("WAWebNewsletterAdminProfilePicture.react").NewsletterAdminProfilePictureTheme.PTT_AVATAR
            }) : s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: d,
                size: 55
            });
            t[6] = newsletterAdminProfile;
            t[7] = d;
            t[8] = f;
        } else {
            f = t[8];
        }
        const g = f;
        let h;
        if (t[9] !== msgKey) {
            h = s.jsx(r("WAWebPttAudioPlayedStatus"), {
                msgKey
            });
            t[9] = msgKey;
            t[10] = h;
        } else {
            h = t[10];
        }
        let y;
        if (t[11] !== enableKbSeekSpeedChange_1 || t[12] !== msgKey || t[13] !== e.displayType || t[14] !== e.mediaData) {
            y = s.jsx(r("WAWebPttAudioMediaState.react"), {
                msgKey,
                mediaData: e.mediaData,
                displayType: e.displayType,
                enableKbSeekSpeedChange: enableKbSeekSpeedChange_1
            });
            t[11] = enableKbSeekSpeedChange_1;
            t[12] = msgKey;
            t[13] = e.displayType;
            t[14] = e.mediaData;
            t[15] = y;
        } else {
            y = t[15];
        }
        let C;
        if (t[16] !== _ || t[17] !== g || t[18] !== msgKey || t[19] !== e.displayType || t[20] !== e.quotedMsg || t[21] !== h || t[22] !== y) {
            C = s.jsx(r("WAWebPttAudioBubble.react"), {
                msgKey,
                quotedMsg: e.quotedMsg,
                author: _,
                status: h,
                player: y,
                avatar: g,
                displayType: e.displayType
            });
            t[16] = _;
            t[17] = g;
            t[18] = msgKey;
            t[19] = e.displayType;
            t[20] = e.quotedMsg;
            t[21] = h;
            t[22] = y;
            t[23] = C;
        } else {
            C = t[23];
        }
        return C;
    }
    l.Ptt = u;
}, 98);