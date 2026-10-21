__d("WAWebKeepInChatWarningKicExitedModal", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEphemeralKeepInChatWamUtils",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebModalManager",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumKicErrorCodeType",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function D1Component(e) {
        const t = o("react-compiler-runtime").c(10);
        const { content, onClose } = e;
        let a;
        if (t[0] !== onClose) {
            a = function() {
                o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getEphemeralFaqUrl());
                if (onClose != null) {
                    onClose();
                }
                o("WAWebModalManager").ModalManager.closeSupportOrModal();
            };
            t[0] = onClose;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        if (t[2] !== onClose) {
            l = function() {
                if (onClose != null) {
                    onClose();
                }
                o("WAWebModalManager").ModalManager.closeSupportOrModal();
            };
            t[2] = onClose;
            t[3] = l;
        } else {
            l = t[3];
        }
        const c = l;
        let d;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                surface: "unknown",
                viewName: "kic-exited-warning"
            };
            t[4] = d;
        } else {
            d = t[4];
        }
        let m;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("Learn more");
            t[5] = m;
        } else {
            m = t[5];
        }
        let p;
        if (t[6] !== content || t[7] !== i || t[8] !== c) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            p = <Component tsNavigationData={d} onOK={c} cancelText={m} onCancel={i}>{content}</Component>;
            t[6] = content;
            t[7] = i;
            t[8] = c;
            t[9] = p;
        } else {
            p = t[9];
        }
        return p;
    }
    function m({ action, message, onClose }) {
        e_useEffect(function() {
            const e = action === "keep" ? o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL : o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL;
            const r = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(message, e);
            r.set({
                kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE.MESSAGE_FROM_EX_MEMBER
            });
            r.commit();
        }, []);
        let a = null;
        if (action === "keep") {
            a = s._("This message can't be kept because the message author left the chat.");
        } else {
            a = s._("This message can't be unkept because the message author left the chat.");
        }
        return <D1Component content={a} onClose={onClose}/>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.WarningKICSenderExitedModal = m;
}, 226);