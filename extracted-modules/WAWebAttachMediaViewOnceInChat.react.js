__d("WAWebAttachMediaViewOnceInChat.react", [
    "WAWebAttachMediaViewOnce.react",
    "WAWebBizCoexUtils",
    "WAWebChatGetters",
    "WAWebEphemeralityFrontendUtils",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const n = o("react-compiler-runtime").c(10);
        const { chat, containerXstyle, dataTab, disabled, isOn, mediaType, onChange, shouldShowNux, shouldSkipNuxAndToast } = e;
        let f;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                o("WAWebFrontendContactGetters").getIsEphemeralityDisabled
            ];
            n[0] = f;
        } else {
            f = n[0];
        }
        const g = o("useWAWebContactValues").useOptionalContactValues(chat.contact?.id, f);
        if (o("WAWebChatGetters").getIsNewsletter(chat) || o("WAWebFrontendChatGetters").getIsCapiHostedGroup(chat) || o("WAWebBizCoexUtils").isMeOrCurrentContactHosted(chat.contact) || o("WAWebChatGetters").getIsBot(chat) || g != null && o("WAWebEphemeralityFrontendUtils").isEphemeralityDisabledInUIForContact(chat.contact)) {
            return null;
        }
        let h;
        if (n[1] !== containerXstyle || n[2] !== dataTab || n[3] !== disabled || n[4] !== isOn || n[5] !== mediaType || n[6] !== onChange || n[7] !== shouldShowNux || n[8] !== shouldSkipNuxAndToast) {
            const Component = r("WAWebAttachMediaViewOnce.react");
            h = <Component containerXstyle={containerXstyle} dataTab={dataTab} disabled={disabled} isOn={isOn} mediaType={mediaType} onChange={onChange} shouldShowNux={shouldShowNux} shouldSkipNuxAndToast={shouldSkipNuxAndToast}/>;
            n[1] = containerXstyle;
            n[2] = dataTab;
            n[3] = disabled;
            n[4] = isOn;
            n[5] = mediaType;
            n[6] = onChange;
            n[7] = shouldShowNux;
            n[8] = shouldSkipNuxAndToast;
            n[9] = h;
        } else {
            h = n[9];
        }
        return h;
    }
    l.default = u;
}, 98);