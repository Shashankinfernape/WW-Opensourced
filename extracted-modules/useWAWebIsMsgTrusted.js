__d("useWAWebIsMsgTrusted", [
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebUserPrefsMeUser",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const a = o("react-compiler-runtime").c(12);
        let i;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            let l;
            i = [
                (l = o("WAWebMsgGetters")).getSender,
                o("WAWebFrontendMsgGetters").getSenderObj,
                l.getIsPSA,
                l.getIsCAPISupport,
                l.getIsFromTemplate,
                l.getIsNewsletterMsg
            ];
            a[0] = i;
        } else {
            i = a[0];
        }
        const s = o("useWAWebMsgValues").useMsgValues(e, i);
        const u = s[0];
        const c = s[1];
        const isPSA = s[2];
        const isCAPISupport = s[3];
        const isFromTemplate = s[4];
        const isChatNewsletter = s[5];
        const f = o("useWAWebChatValues").useOptionalChatValues(isChatNewsletter ? null : e.remote, [
            o("WAWebChatGetters").getIsGroup,
            o("WAWebFrontendChatGetters").getTrusted,
            o("WAWebFrontendChatGetters").getNotSpam,
            o("WAWebFrontendChatGetters").getContact
        ]) ?? [
            false,
            false,
            false,
            null
        ];
        const isChatGroup = f[0];
        const chatTrusted = f[1];
        const chatNotSpam = f[2];
        const C = f[3];
        const b = o("useWAWebContactValues").useOptionalContactValues(c?.id, [
            o("WAWebFrontendContactGetters").getIsMyContact
        ]) ?? [
            false
        ];
        const isSenderMyContact = b[0];
        const S = o("useWAWebContactValues").useOptionalContactValues(C?.id, [
            o("WAWebContactGetters").getVerifiedLevel
        ]) ?? [
            null
        ];
        const chatContactVerifiedLevel = S[0];
        let L;
        if (a[1] !== chatContactVerifiedLevel || a[2] !== chatNotSpam || a[3] !== chatTrusted || a[4] !== isCAPISupport || a[5] !== isChatGroup || a[6] !== isFromTemplate || a[7] !== isChatNewsletter || a[8] !== isPSA || a[9] !== isSenderMyContact || a[10] !== u) {
            L = o("WAWebMsgModelPropUtils").isTrustedFor({
                chatContactVerifiedLevel,
                chatNotSpam,
                chatTrusted,
                isCAPISupport,
                isChatGroup,
                isChatNewsletter,
                isFromTemplate,
                isPSA,
                isSenderMe: u != null && o("WAWebUserPrefsMeUser").isMeAccount(u),
                isSenderMyContact
            });
            a[1] = chatContactVerifiedLevel;
            a[2] = chatNotSpam;
            a[3] = chatTrusted;
            a[4] = isCAPISupport;
            a[5] = isChatGroup;
            a[6] = isFromTemplate;
            a[7] = isChatNewsletter;
            a[8] = isPSA;
            a[9] = isSenderMyContact;
            a[10] = u;
            a[11] = L;
        } else {
            L = a[11];
        }
        return L;
    }
    l.default = e;
}, 98);