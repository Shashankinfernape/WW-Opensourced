__d("WAWebEphemeralKicNux.react", [
    "fbt",
    "WAWebAfterReadUtils",
    "WAWebChatThreadLogging",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebKeepInChatNuxWamEvent",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebWamEnumKicNuxActionNameType",
    "WAWebWamEnumTriggerType",
    "WDSIconIcBackHand.react",
    "WDSIconIcBookmarkFilled.react",
    "WDSIconIcDuration.react",
    "WDSIconWdsIcDisappearingMessages.react",
    "WDSIllustrationWdsPictoDisappearingMessages.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebNux"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    const d = {
        header: {
            marginTop: "x9u28bd",
            $$css: true
        },
        subtitle: {
            marginTop: "x98l61r",
            marginBottom: "xvl6max",
            $$css: true
        },
        body: {
            marginTop: "x1rdy4ex",
            $$css: true
        }
    };
    function m({ chat, fromMe, onOk }) {
        const l = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL);
        const m = l[1];
        const f = r("useWAWebNux")(o("WAWebNux").NUX.KEEP_IN_CHAT);
        const g = f[1];
        const h = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ);
        const y = h[1];
        const C = fromMe && o("WAWebAfterReadUtils").isAfterReadOptionAvailable();
        const b = function() {
            m();
            g();
            if (C) {
                y();
            }
            o("WAWebModalManager").ModalManager.closeSupportOrModal();
            if (onOk) {
                onOk();
            }
        };
        const v = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                m();
                g();
                if (C) {
                    y();
                }
                const e = new (o("WAWebKeepInChatNuxWamEvent")).KeepInChatNuxWamEvent({
                    kicNuxActionName: o("WAWebWamEnumKicNuxActionNameType").KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_LEARN_MORE_TAP,
                    trigger: o("WAWebWamEnumTriggerType").TRIGGER_TYPE.CHAT_ENTRY
                });
                if (chat) {
                    e.set({
                        chatEphemeralityDuration: chat.ephemeralDuration,
                        threadId: yield o("WAWebChatThreadLogging").getChatThreadID(chat.id.toJid())
                    });
                }
                e.commit();
                o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getEphemeralFaqUrl());
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        e_useEffect(function() {
            const e = new (o("WAWebKeepInChatNuxWamEvent")).KeepInChatNuxWamEvent({
                kicNuxActionName: o("WAWebWamEnumKicNuxActionNameType").KIC_NUX_ACTION_NAME_TYPE.FIRST_DM_NUX_IMPRESSION,
                trigger: o("WAWebWamEnumTriggerType").TRIGGER_TYPE.CHAT_ENTRY
            });
            if (chat == null) {
                e.commit();
                return;
            }
            o("WAWebChatThreadLogging").getChatThreadID(chat.id.toJid()).then((n)=>{
                e.set({
                    chatEphemeralityDuration: chat.ephemeralDuration,
                    threadId: n
                });
            }).finally(()=>{
                e.commit();
            });
        }, []);
        const S = fromMe ? s._("Get started with disappearing messages") : s._("Disappearing messages are on in this chat");
        const Component = r("WAWebFlexItem.react");
        const Component_1 = o("WAWebFlex.react").FlexColumn;
        const Component_2 = r("WDSText.react");
        const Component_3 = r("WDSText.react");
        const Component_4 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_4 tsNavigationData={{
            surface: "unknown",
            viewName: "ephemeral-kic-nux"
        }} testid="ephemeral-kic-nux-modal" onOK={b} onCancel={v} cancelText={s._("Learn more")}><Component_1 align="center" justify="center"><Component>{u.jsx(r("WDSIllustrationWdsPictoDisappearingMessages.react"), {
            testid: "wds-picto-disappearing-messages"
        })}</Component></Component_1><Component_2 type="Headline2" colorName="contentDefault" textAlign="center" isPrimaryHeading xstyle={d.header} testid="ephemeral-kic-nux-heading">{S}</Component_2><Component_3 type="Body2" colorName="contentDefault" textAlign="center" xstyle={d.subtitle} testid="ephemeral-kic-nux-description">{s._("This increases your privacy and can improve storage on your device.")}</Component_3>{C ? <P9Component/> : <_/>}</Component_4>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    function P9Component() {
        const e = o("react-compiler-runtime").c(3);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <F9Component icon={u.jsx(r("WDSIconWdsIcDisappearingMessages.react"), {
                width: 24,
                height: 24
            })}>{s._("New messages disappear after the selected duration, except when kept.")}</F9Component>;
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            n = <F9Component icon={u.jsx(r("WDSIconIcDuration.react"), {
                width: 24,
                height: 24
            })}>{s._("With the after reading timer, messages disappear after they're read. Unread messages disappear after 24 hours.")}</F9Component>;
            e[1] = n;
        } else {
            n = e[1];
        }
        let a;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            a = <>{t}{n}<F9Component icon={u.jsx(r("WDSIconIcBackHand.react"), {
                width: 24,
                height: 24
            })}>{s._("People may find other ways to save messages.")}</F9Component></>;
            e[2] = a;
        } else {
            a = e[2];
        }
        return a;
    }
    function _() {
        const e = o("react-compiler-runtime").c(3);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <F9Component icon={u.jsx(r("WDSIconWdsIcDisappearingMessages.react"), {
                displayInline: true,
                width: 24,
                height: 24
            })}>{s._("New messages disappear for everyone after the selected duration.")}</F9Component>;
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            n = <F9Component icon={u.jsx(r("WDSIconIcBookmarkFilled.react"), {
                displayInline: true,
                width: 24,
                height: 24,
                testid: "keep-in-chat"
            })}>{s._("Anyone can keep or unkeep messages in the chat. Group admins can limit this.")}</F9Component>;
            e[1] = n;
        } else {
            n = e[1];
        }
        let a;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            a = <>{t}{n}<F9Component icon={u.jsx(r("WDSIconIcBackHand.react"), {
                displayInline: true,
                width: 24,
                height: 24
            })}>{s._("People may find other ways to save messages.")}</F9Component></>;
            e[2] = a;
        } else {
            a = e[2];
        }
        return a;
    }
    function F9Component(e) {
        const t = o("react-compiler-runtime").c(9);
        const { children, icon } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "x1n2onr6 x78zum5 x6s0dn4 x1nmyh1g"
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                className: "xviac27 xhslqc4"
            };
            t[1] = l;
        } else {
            l = t[1];
        }
        let s;
        if (t[2] !== icon) {
            s = <span {...babelHelpers.extends({}, l, {
                "aria-hidden": true,
                "data-testid": "ephemeral-kic-nux-detail-icon",
                children: icon
            })}/>;
            t[2] = icon;
            t[3] = s;
        } else {
            s = t[3];
        }
        let c;
        if (t[4] !== children) {
            const Component = r("WDSText.react");
            c = <Component type="Body2" colorName="contentDeemphasized" xstyle={d.body} testid="ephemeral-kic-nux-detail-text">{children}</Component>;
            t[4] = children;
            t[5] = c;
        } else {
            c = t[5];
        }
        let m;
        if (t[6] !== s || t[7] !== c) {
            m = <div {...babelHelpers.extends({}, i, {
                "data-testid": "ephemeral-kic-nux-detail-row",
                children: [
                    s,
                    c
                ]
            })}/>;
            t[6] = s;
            t[7] = c;
            t[8] = m;
        } else {
            m = t[8];
        }
        return m;
    }
    l.default = m;
}, 226);