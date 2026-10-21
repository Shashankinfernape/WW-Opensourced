__d("WAWebKeepInChatWarningCannotKeepSenderSuperpower", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEphemeralKeepInChatWamUtils",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumKicErrorCodeType",
    "WDSIllustrationWdsPictoGenericWarning.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    const d = {
        header: {
            backgroundColor: "xjkh2o",
            textAlign: "x2b8uid",
            $$css: true
        },
        icon: {
            textAlign: "x2b8uid",
            marginTop: "x98l61r",
            marginInlineEnd: "xviac27",
            marginBottom: "x1ua1l7f",
            marginInlineStart: "xlese2p",
            $$css: true
        }
    };
    const m = function() {
        o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getEphemeralFaqUrl());
        o("WAWebModalManager").ModalManager.closeSupportOrModal();
    };
    const p = function() {
        o("WAWebModalManager").ModalManager.closeSupportOrModal();
    };
    function Component({ message }) {
        e_useEffect(function() {
            const e = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(message, o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL);
            e.set({
                kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE.SENDER_DISABLED
            });
            e.commit();
        }, []);
        const Component = o("WAWebFlex.react").FlexRow;
        const n = <Component align="center" justify="center" xstyle={d.header}>{u.jsx(r("WDSIllustrationWdsPictoGenericWarning.react"), {
            testid: "keep-warning",
            xstyle: d.icon
        })}</Component>;
        const a = <div className="xk50ysn x1603h9y x1u7k74 xcytdqz">{s._("Message cannot be kept")}</div>;
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 tsNavigationData={{
            surface: "unknown",
            viewName: "kic-cannot-keep-sender"
        }} onOK={p} onCancel={m} cancelText={s._("Learn more")} type={o("WAWebModal.react").ModalTheme.Flex}><div className="x9f619 x1l2rt3b">{n}<div className="x1sgpng xpwdb9g x10tge7n xefazk8">{a}{s._("The author of this message has unkept it, so no one else can keep it again in the chat.")}</div></div></Component_1>;
    }
    Component.displayName = `${Component.name} [from ${i.id}]`;
    l.default = Component;
}, 226);