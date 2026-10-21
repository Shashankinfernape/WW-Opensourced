__d("WAWebInAppSignupPromptHeader.react", [
    "WAWebBizAGMSignupHeader.react",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebSignupCTAExperiment",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(8);
        const { info, msgKey } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebChatGetters").getId,
                o("WAWebChatGetters").getT,
                o("WAWebFrontendChatGetters").getContact
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebChatValues").useOptionalChatValues(msgKey.remote, i);
        if (l == null) {
            return null;
        }
        const u = l[0];
        const chatTimestamp = l[1];
        const d = l[2];
        if (d == null) {
            return null;
        }
        let m;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            m = o("WAWebSignupCTAExperiment").getSignupCTAExperiment();
            t[1] = m;
        } else {
            m = t[1];
        }
        let p;
        if (t[2] !== d || t[3] !== u || t[4] !== chatTimestamp || t[5] !== info.privacyPolicyUrl || t[6] !== info.signupId) {
            p = s.jsx(r("WAWebBizAGMSignupHeader.react"), {
                businessWid: u,
                chatTimestamp,
                contact: d,
                experiment: m,
                privacyPolicyUrl: info.privacyPolicyUrl,
                signupId: info.signupId
            });
            t[2] = d;
            t[3] = u;
            t[4] = chatTimestamp;
            t[5] = info.privacyPolicyUrl;
            t[6] = info.signupId;
            t[7] = p;
        } else {
            p = t[7];
        }
        return p;
    }
    l.default = u;
}, 98);