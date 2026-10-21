__d("WAWebSupportAINux.react", [
    "fbt",
    "WAWebCellV2.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebSupportAiSessionWamEvent",
    "WAWebText.react",
    "WAWebWamEnumSupportAiEventType",
    "WDSIconIcShieldVerified.react",
    "WDSIconIcThumbsUpDown.react",
    "WDSIconWdsIcAi.react",
    "WDSIllustrationWdsPictoAiChatsAndroid.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebNux"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        iconColor: {
            color: "xhslqc4",
            $$css: true
        },
        paddingBottom4: {
            paddingBottom: "x1nbhmlj",
            $$css: true
        },
        paddingAll8: {
            paddingTop: "x16ovd2e",
            paddingInlineEnd: "x1nzty39",
            paddingBottom: "x12xbjc7",
            paddingInlineStart: "x12w63v0",
            $$css: true
        },
        paddingStart8: {
            paddingInlineStart: "x12w63v0",
            $$css: true
        }
    };
    function DComponent(e) {
        const t = o("react-compiler-runtime").c(20);
        const { canCancel, isSending, okText, onOK } = e;
        const p = r("useWAWebNux")(o("WAWebNux").NUX.SUPPORT_AI);
        const _ = p[1];
        let f;
        if (t[0] !== onOK || t[1] !== _) {
            f = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    _();
                    yield onOK();
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[0] = onOK;
            t[1] = _;
            t[2] = f;
        } else {
            f = t[2];
        }
        const onCancel = canCancel === true ? o("WAWebModalManager").closeModalManager : null;
        let tsNavigationData;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            tsNavigationData = {
                surface: "unknown",
                viewName: "support-ai-nux"
            };
            t[3] = tsNavigationData;
        } else {
            tsNavigationData = t[3];
        }
        let y;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexItem;
            y = <Component align="center" marginTop={20}>{u.jsx(r("WDSIllustrationWdsPictoAiChatsAndroid.react"), {
                testid: "wds-picto-ai-chats-android"
            })}</Component>;
            t[4] = y;
        } else {
            y = t[4];
        }
        let C;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexItem;
            C = <Component marginTop={20} marginBottom={20} marginStart={24} marginEnd={24} align="center"><div className="xngnso2 x1s688f x2b8uid">{s._("Get help from official WhatsApp Support")}</div></Component>;
            t[5] = C;
        } else {
            C = t[5];
        }
        let b;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            b = u.jsx(r("WDSIconIcShieldVerified.react"), {
                iconXstyle: c.iconColor,
                height: 20,
                width: 20
            });
            t[6] = b;
        } else {
            b = t[6];
        }
        let v;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            v = <Component_1 grow={1}>{u.jsx(r("WAWebCellV2.react"), {
                containerXStyle: c.paddingBottom4,
                detailLeftXStyle: c.paddingAll8,
                primaryXStyle: c.paddingStart8,
                interactive: false,
                colorScheme: "lightest",
                detailLeft: b,
                primary: <Component>{s._("Secure chat with WhatsApp")}</Component>
            })}</Component_1>;
            t[7] = v;
        } else {
            v = t[7];
        }
        let S;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            S = u.jsx(r("WDSIconWdsIcAi.react"), {
                iconXstyle: c.iconColor,
                height: 20,
                width: 20
            });
            t[8] = S;
        } else {
            S = t[8];
        }
        let R;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            R = <Component_1 grow={1}>{u.jsx(r("WAWebCellV2.react"), {
                containerXStyle: c.paddingBottom4,
                detailLeftXStyle: c.paddingAll8,
                primaryXStyle: c.paddingStart8,
                interactive: false,
                colorScheme: "lightest",
                size: "none",
                detailLeft: S,
                primary: <Component>{s._("Answers may be AI generated")}</Component>
            })}</Component_1>;
            t[9] = R;
        } else {
            R = t[9];
        }
        let L;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            L = u.jsx(r("WDSIconIcThumbsUpDown.react"), {
                iconXstyle: c.iconColor,
                height: 20,
                width: 20
            });
            t[10] = L;
        } else {
            L = t[10];
        }
        let E;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            E = <Component_2 align="stretch" marginStart={24} marginEnd={24}>{v}{R}<Component_1 grow={1}>{u.jsx(r("WAWebCellV2.react"), {
                detailLeftXStyle: c.paddingAll8,
                containerXStyle: c.paddingBottom4,
                primaryXStyle: c.paddingStart8,
                interactive: false,
                colorScheme: "lightest",
                detailLeft: L,
                primary: <Component>{s._("Help us improve with feedback")}</Component>
            })}</Component_1></Component_2>;
            t[11] = E;
        } else {
            E = t[11];
        }
        let k;
        if (t[12] === Symbol.for("react.memo_cache_sentinel")) {
            k = o("WAWebMobilePlatforms").isSMB() ? s._("Some answers are generated by AI using a secure technology from Meta. WhatsApp uses your messages with WhatsApp Support to provide you with relevant answers.") : s._("Some answers are generated by AI using a secure technology from Meta. WhatsApp uses your messages with WhatsApp Support to provide you with relevant answers. Your personal messages and calls remain end-to-end encrypted.");
            t[12] = k;
        } else {
            k = t[12];
        }
        let href;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            href = o("WAWebFaqUrl").getSupportChatSafetyFaqUrl();
            t[13] = href;
        } else {
            href = t[13];
        }
        let T;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            const Component_1 = o("WAWebText.react").WAWebTextMuted;
            const Component_2 = o("WAWebFlex.react").FlexItem;
            const Component_3 = o("WAWebFlex.react").FlexRow;
            const Component_4 = o("WAWebFlex.react").FlexColumn;
            T = <Component_4>{y}{C}{E}<Component_3 marginTop={16} marginStart={24} marginEnd={24}><Component_2 grow={1}><label htmlFor="contact-us-include-device"><Component_1>{k} <Component href={href} onClick={onClick}>{s._("Learn more")}</Component></Component_1></label></Component_2></Component_3></Component_4>;
            t[14] = T;
        } else {
            T = t[14];
        }
        let D;
        if (t[15] !== isSending || t[16] !== okText || t[17] !== f || t[18] !== onCancel) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            D = <Component okSpinner={isSending} okText={okText} onOK={f} okDisabled={isSending} cancelDisabled={isSending} onCancel={onCancel} testid="system-message-modal" tsNavigationData={tsNavigationData}>{T}</Component>;
            t[15] = isSending;
            t[16] = okText;
            t[17] = f;
            t[18] = onCancel;
            t[19] = D;
        } else {
            D = t[19];
        }
        return D;
    }
    function onClick() {
        new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
            supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.REVIEW_INFORMATION_LEARN_MORE_CLICKED
        }).commit();
    }
    l.default = DComponent;
}, 226);