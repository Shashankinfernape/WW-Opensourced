__d("WAWebMessageHistoryNoticeMessage.react", [
    "fbt",
    "WAWebFormatMessageHistoryNoticeBody",
    "WAWebGroupHistoryLearnMoreModalLoadable",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebSystemMessageWithSingleCTA.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    function d(e) {
        const t = o("react-compiler-runtime").c(8);
        const { msgKey, ref } = e;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMsgGetters").getAuthor,
                o("WAWebMsgGetters").getGroupHistoryBundleMetadata
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMsgValues").useMsgValues(msgKey, a);
        const l = i[0];
        const c = i[1];
        const d = m;
        let p;
        if (t[1] !== l || t[2] !== c) {
            p = o("WAWebFormatMessageHistoryNoticeBody").formatMessageHistoryNoticeBodyFor({
                author: l,
                metadata: c
            });
            t[1] = l;
            t[2] = c;
            t[3] = p;
        } else {
            p = t[3];
        }
        let _;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("Learn more");
            t[4] = _;
        } else {
            _ = t[4];
        }
        let f;
        if (t[5] !== ref || t[6] !== p) {
            const Component = o("WAWebSystemMessageWithSingleCTA.react").SystemMessageWithSingleCTA;
            f = <Component bodyText={p} ctaText={_} icon={null} onClick={d} onclickRef={ref} role="link" testid="message-history-notice-message"/>;
            t[5] = ref;
            t[6] = p;
            t[7] = f;
        } else {
            f = t[7];
        }
        return f;
    }
    function m() {
        o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebGroupHistoryLearnMoreModalLoadable").GroupHistoryLearnMoreModalLoadable, {}));
    }
    l.default = d;
}, 226);