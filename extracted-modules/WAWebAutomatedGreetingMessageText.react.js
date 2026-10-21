__d("WAWebAutomatedGreetingMessageText.react", [
    "WAWebAGMCtwaMessage.react",
    "WAWebAGMSignupMessage.react",
    "WAWebBizCtwaAGMUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebStateUtils",
    "WAWebUnsupportedMessage",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(14);
        const { chat, displayAuthor, displayType, msg } = e;
        const u = o("WAWebStateUtils").unproxy(msg);
        if (!o("WAWebBizCtwaAGMUtils").isAGMSupported(u)) {
            let c;
            if (t[0] !== displayAuthor || t[1] !== msg) {
                c = s.jsx(r("WAWebUnsupportedMessage"), {
                    msg,
                    displayAuthor,
                    hideUpdateButton: true
                });
                t[0] = displayAuthor;
                t[1] = msg;
                t[2] = c;
            } else {
                c = t[2];
            }
            return c;
        }
        if (msg.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup) {
            const privacyPolicyUrl = msg.signupContext?.privacyPolicyUrl;
            let p;
            if (t[3] !== chat || t[4] !== displayAuthor || t[5] !== displayType || t[6] !== msg || t[7] !== privacyPolicyUrl) {
                p = s.jsx(r("WAWebAGMSignupMessage.react"), {
                    chat,
                    displayAuthor,
                    displayType,
                    msg,
                    privacyPolicyUrl
                });
                t[3] = chat;
                t[4] = displayAuthor;
                t[5] = displayType;
                t[6] = msg;
                t[7] = privacyPolicyUrl;
                t[8] = p;
            } else {
                p = t[8];
            }
            return p;
        }
        let _;
        if (t[9] !== chat || t[10] !== displayAuthor || t[11] !== displayType || t[12] !== msg) {
            _ = s.jsx(r("WAWebAGMCtwaMessage.react"), {
                chat,
                displayAuthor,
                displayType,
                msg
            });
            t[9] = chat;
            t[10] = displayAuthor;
            t[11] = displayType;
            t[12] = msg;
            t[13] = _;
        } else {
            _ = t[13];
        }
        return _;
    }
    l.default = u;
}, 98);