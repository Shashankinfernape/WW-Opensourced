__d("WAWebKeepInChatWarningKeepExpiredModal", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEphemeralKeepInChatWamUtils",
    "WAWebModalManager",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumKicErrorCodeType",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function d({ expiredMessage }) {
        e_useEffect(function() {
            const e = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(expiredMessage, o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL);
            e.set({
                kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE.MESSAGE_EXPIRED
            });
            e.commit();
        }, []);
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component tsNavigationData={{
            surface: "unknown",
            viewName: "kic-keep-expired"
        }} onCancel={o("WAWebModalManager").closeSupportOrModal}>{s._("This message can't be kept because the message timer has expired.")}</Component>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 226);