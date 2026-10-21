__d("WAWebBizAiMuteUnmuteErrorDrawer.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebGenAiAgentLogEvents",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(9);
        const { isSmartComposer, isTurnOn } = e;
        const a = isSmartComposer === undefined ? false : isSmartComposer;
        o("WAWebGenAiAgentLogEvents").useLogViewGenAiAgentAutoReplyErrorDialog(isTurnOn);
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                surface: "unknown",
                viewName: "biz-ai-mute-error"
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] !== a) {
            l = a ? s._("AI agent can't respond") : s._("AI responses are not available for this chat.");
            t[1] = a;
            t[2] = l;
        } else {
            l = t[2];
        }
        let c;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            c = s._("OK");
            t[3] = c;
        } else {
            c = t[3];
        }
        let d;
        if (t[4] !== a) {
            d = a ? s._("There's a temporary issue. Try again later.") : null;
            t[4] = a;
            t[5] = d;
        } else {
            d = t[5];
        }
        let m;
        if (t[6] !== l || t[7] !== d) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            m = <Component tsNavigationData={i} title={l} okText={c} onOK={o("WAWebModalManager").closeModalManager}>{d}</Component>;
            t[6] = l;
            t[7] = d;
            t[8] = m;
        } else {
            m = t[8];
        }
        return m;
    }
    l.default = c;
}, 226);