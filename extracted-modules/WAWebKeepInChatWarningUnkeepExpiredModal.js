__d("WAWebKeepInChatWarningUnkeepExpiredModal", [
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
    function d({ expiredMessage, onCancel, onConfirm }) {
        const a = function() {
            onConfirm();
            o("WAWebModalManager").ModalManager.closeSupportOrModal();
        };
        const i = function() {
            onCancel();
            o("WAWebModalManager").ModalManager.closeSupportOrModal();
        };
        const l = <div className="x1603h9y x1u7k74 x14ug900">{s._("This message will disappear from the chat")}</div>;
        e_useEffect(function() {
            const e = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(expiredMessage, o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL);
            e.set({
                kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE.MESSAGE_EXPIRED
            });
            e.commit();
        }, []);
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component tsNavigationData={{
            surface: "unknown",
            viewName: "kic-unkeep-expired"
        }} title={l} onOK={a} onCancel={i} okText={s._("Let it disappear")} okButtonType="secondary"><div className="x1jchvi3 x1xet1wb x14ug900">{s._("The timer for this message has expired so it will disappear from the chat.")}</div></Component>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 226);