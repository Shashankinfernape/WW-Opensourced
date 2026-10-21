__d("WAWebKeepInChatWarningUnkeepLimitExpiredModal", [
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
    function d({ expiredMessage, onConfirm, onDeleteForMe }) {
        e_useEffect(function() {
            const e = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(expiredMessage, o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL);
            e.set({
                kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE.KEPT_BEYOND_EXPIRY
            });
            e.commit();
        }, []);
        const a = function() {
            onConfirm?.();
            o("WAWebModalManager").ModalManager.closeSupportOrModal();
        };
        const i = function() {
            onDeleteForMe();
            o("WAWebModalManager").ModalManager.closeSupportOrModal();
        };
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component tsNavigationData={{
            surface: "unknown",
            viewName: "kic-unkeep-limit-expired"
        }} onOK={a} onCancel={i} cancelText={s._("Delete for me")}>{s._("This message can't be removed from this chat because the timer has expired.")}</Component>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 226);