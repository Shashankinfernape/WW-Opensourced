__d("WAWebKicNux.react", [
    "fbt",
    "Promise",
    "WAWebChatEphemerality",
    "WAWebChatThreadLogging",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebKeepInChatNuxWamEvent",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebUserPrefsNuxPreferences",
    "WAWebWamEnumKicNuxActionNameType",
    "WAWebWamEnumTriggerType",
    "WDSIconIcCalendarMonth.react",
    "WDSIconIcGroup.react",
    "WDSIconWdsIcBookmarkSlash.react",
    "WDSIconWdsIcDisappearingMessages.react",
    "WDSIllustrationWdsPictoSave.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebNux"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useEffect = u.useEffect;
    const m = {
        badge: {
            backgroundColor: "xfn3atn",
            borderStartStartRadius: "x1fqc64z",
            borderStartEndRadius: "xs83zq4",
            borderEndEndRadius: "xt6ovg4",
            borderEndStartRadius: "x1ru8ea5",
            color: "x17t9dm2",
            fontSize: "x1f6kntn",
            marginTop: "x1aawmmo",
            paddingTop: "x1iorvi4",
            paddingInlineEnd: "x1icxu4v",
            paddingBottom: "xjkvuk6",
            paddingInlineStart: "x25sj25",
            textTransform: "xtvhhri",
            $$css: true
        },
        header: {
            marginTop: "x1anpbxc",
            $$css: true
        },
        icon: {
            marginInlineEnd: "xviac27",
            color: "xhslqc4",
            $$css: true
        },
        body: {
            marginTop: "x1rdy4ex",
            $$css: true
        }
    };
    function p(e) {
        return o("WAWebUserPrefsNuxPreferences").shouldShowNUX(o("WAWebNux").NUX.KEEP_IN_CHAT) && o("WAWebChatEphemerality").isEphemeralSettingOn(e);
    }
    function _(e, t) {
        o("WAWebModalManager").ModalManager.open(<H5Component chat={e} entryPoint={o("WAWebWamEnumKicNuxActionNameType").KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_IMPRESSION} trigger={t}/>);
    }
    function f(t, r) {
        return new (e || (e = n("Promise")))(function(e) {
            o("WAWebModalManager").ModalManager.open(<H5Component chat={t} entryPoint={o("WAWebWamEnumKicNuxActionNameType").KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_IMPRESSION} trigger={r} onClose={e}/>);
        });
    }
    function g(e) {
        const t = o("react-compiler-runtime").c(7);
        let n;
        if (t[0] !== e) {
            n = p(e);
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        let r;
        if (t[2] !== e) {
            r = function(n) {
                return _(e, n);
            };
            t[2] = e;
            t[3] = r;
        } else {
            r = t[3];
        }
        let a;
        if (t[4] !== n || t[5] !== r) {
            a = [
                n,
                r
            ];
            t[4] = n;
            t[5] = r;
            t[6] = a;
        } else {
            a = t[6];
        }
        return a;
    }
    function H5Component({ chat, entryPoint, onClose, trigger }) {
        const u = r("useWAWebNux")(o("WAWebNux").NUX.KEEP_IN_CHAT);
        const p = u[1];
        o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
            p();
            onClose?.();
        });
        const _ = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = new (o("WAWebKeepInChatNuxWamEvent")).KeepInChatNuxWamEvent;
                e.set({
                    chatEphemeralityDuration: chat.ephemeralDuration,
                    kicNuxActionName: o("WAWebWamEnumKicNuxActionNameType").KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_LEARN_MORE_TAP,
                    threadId: yield o("WAWebChatThreadLogging").getChatThreadID(chat.id.toJid()),
                    trigger
                });
                e.commit();
                o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getKICFaqUrl());
                o("WAWebModalManager").ModalManager.close();
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        u_useEffect(function() {
            const e = new (o("WAWebKeepInChatNuxWamEvent")).KeepInChatNuxWamEvent;
            o("WAWebChatThreadLogging").getChatThreadID(chat.id.toJid()).then((threadId)=>{
                if (threadId != null) {
                    e.set({
                        threadId
                    });
                }
            }).finally(()=>{
                e.set({
                    chatEphemeralityDuration: chat.ephemeralDuration,
                    kicNuxActionName: entryPoint,
                    trigger
                });
                e.commit();
            });
        }, []);
        let f;
        let g;
        let h;
        let C;
        const b = r("WDSIconIcGroup.react");
        const v = r("WDSIconWdsIcDisappearingMessages.react");
        if (trigger === o("WAWebWamEnumTriggerType").TRIGGER_TYPE.USER_MESSAGE_KEPT) {
            C = r("WDSIconWdsIcBookmarkSlash.react");
            f = s._("Someone kept your message so they can refer back to it");
            g = s._("You can control if you want your messages kept in the chat by selecting the bookmark icon.");
            h = s._("If you unkeep your message, no one can keep it again.");
        } else {
            C = r("WDSIconIcCalendarMonth.react");
            f = s._("You can now keep messages in the chat from disappearing");
            g = s._("Keep messages you want to refer back to by selecting the bookmark icon.");
            h = s._("Anyone can keep messages in the chat, but you have the final say if your messages are kept or not.");
        }
        const S = s._("Kept messages will not disappear from the chat, and everyone can see them.");
        const Component = r("WAWebFlexItem.react");
        const Component_1 = o("WAWebFlex.react").FlexColumn;
        const Component_2 = r("WAWebFlexItem.react");
        const Component_3 = o("WAWebFlex.react").FlexRow;
        const Component_4 = r("WDSText.react");
        const Component_5 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_5 tsNavigationData={{
            surface: "unknown",
            viewName: "keep-in-chat-nux"
        }} testid="kic_nux_modal" onOK={o("WAWebModalManager").closeModalManager} onCancel={_} cancelText={s._("Learn more")}><Component_1 align="center" justify="center"><Component>{c.jsx(r("WDSIllustrationWdsPictoSave.react"), {
            testid: "wds-picto-save"
        })}</Component></Component_1><Component_3 align="center" justify="center"><Component_2 xstyle={m.badge}>{s._("New")}</Component_2></Component_3><Component_4 type="Headline2" colorName="contentDefault" isPrimaryHeading textAlign="center" xstyle={m.header} testid="kic-nux-heading">{f}</Component_4><Y3Component Icon={C}>{g}</Y3Component><Y3Component Icon={b}>{h}</Y3Component><Y3Component Icon={v}>{S}</Y3Component></Component_5>;
    }
    H5Component.displayName = `${H5Component.name} [from ${i.id}]`;
    function Y3Component(e) {
        const t = o("react-compiler-runtime").c(8);
        const { Icon, children } = e;
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
        if (t[1] !== Icon) {
            l = <Icon aria-hidden displayInline width={24} height={24} xstyle={m.icon}/>;
            t[1] = Icon;
            t[2] = l;
        } else {
            l = t[2];
        }
        let s;
        if (t[3] !== children) {
            const Component = r("WDSText.react");
            s = <Component type="Body2" colorName="contentDeemphasized" xstyle={m.body} testid="kic-nux-row-description">{children}</Component>;
            t[3] = children;
            t[4] = s;
        } else {
            s = t[4];
        }
        let u;
        if (t[5] !== l || t[6] !== s) {
            u = <div {...babelHelpers.extends({
                "data-testid": "kic-nux-row"
            }, i, {
                children: [
                    l,
                    s
                ]
            })}/>;
            t[5] = l;
            t[6] = s;
            t[7] = u;
        } else {
            u = t[7];
        }
        return u;
    }
    l.shouldShowKicNux = p;
    l.openKicNux = _;
    l.openKicNuxAndWaitForClose = f;
    l.useKicNux = g;
}, 226);