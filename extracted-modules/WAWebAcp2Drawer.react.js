__d("WAWebAcp2Drawer.react", [
    "WAWebAcp2DrawerView.react",
    "WAWebFrontendChatGetters",
    "WAWebLimitSharingAIGroupBlock",
    "WAWebLimitSharingUIUtils",
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(18);
        const { chat, onClose, ref } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebFrontendChatGetters").getAcp2Setting,
                o("WAWebFrontendChatGetters").getGroupMetadata
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const u = o("useWAWebChatValues").useChatValues(chat.id, l);
        const c = u[0];
        const d = u[1];
        let m;
        if (t[1] !== c || t[2] !== chat) {
            m = o("WAWebLimitSharingUIUtils").isAcp2ReceiverEnabledForValue(chat, c);
            t[1] = c;
            t[2] = chat;
            t[3] = m;
        } else {
            m = t[3];
        }
        const p = m;
        let _;
        if (t[4] !== d) {
            _ = d != null && d.participants?.iAmAdmin() !== true;
            t[4] = d;
            t[5] = _;
        } else {
            _ = t[5];
        }
        const onlyAdminsCanChange = _;
        let h;
        if (t[6] !== chat) {
            h = o("WAWebStateUtils").unproxy(chat).groupMetadata?.participants;
            t[6] = chat;
            t[7] = h;
        } else {
            h = t[7];
        }
        let C;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            C = [
                "add",
                "remove",
                "reset"
            ];
            t[8] = C;
        } else {
            C = t[8];
        }
        let b;
        if (t[9] !== chat) {
            b = function() {
                return o("WAWebLimitSharingAIGroupBlock").getLimitSharingAIGroupBlock(chat) === o("WAWebLimitSharingAIGroupBlock").LimitSharingAIGroupBlock.GROUP_AGENT;
            };
            t[9] = chat;
            t[10] = b;
        } else {
            b = t[10];
        }
        const v = r("useWAWebEventTargetValue")(h, C, b);
        let learnMoreUrl;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            learnMoreUrl = o("WAWebLimitSharingUIUtils").getSystemMessageLearnMoreURL();
            t[11] = learnMoreUrl;
        } else {
            learnMoreUrl = t[11];
        }
        let R;
        if (t[12] !== p || t[13] !== v || t[14] !== onClose || t[15] !== onlyAdminsCanChange || t[16] !== ref) {
            const Component = r("WAWebAcp2DrawerView.react");
            R = <Component blockedByGroupAgent={v} enabled={p} learnMoreUrl={learnMoreUrl} onlyAdminsCanChange={onlyAdminsCanChange} onClose={onClose} ref={ref}/>;
            t[12] = p;
            t[13] = v;
            t[14] = onClose;
            t[15] = onlyAdminsCanChange;
            t[16] = ref;
            t[17] = R;
        } else {
            R = t[17];
        }
        return R;
    }
    l.default = u;
}, 98);