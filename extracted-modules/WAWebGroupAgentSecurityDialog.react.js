__d("WAWebGroupAgentSecurityDialog.react", [
    "fbt",
    "MetaBrandHatchSymbolFilled24Icon.react",
    "WAWebBox.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebGroupAgentSecurityVariant",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebOpenBotGroupOpenAddedModal.react",
    "WDSIconWdsIc3PAiBotFilled.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebFocusOnMount"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        itemIcon: {
            color: "x14ug900",
            $$css: true
        },
        headerText: {
            textAlign: "x2b8uid",
            $$css: true
        },
        sectionTitle: {
            width: "xdzyupr",
            $$css: true
        }
    };
    function d(e) {
        e: {
            if (e === o("WAWebGroupAgentSecurityVariant").GroupAgentSecurityVariant.META_AI) {
                o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebOpenBotGroupOpenAddedModal.react"), {}));
                break e;
            }
            if (e === o("WAWebGroupAgentSecurityVariant").GroupAgentSecurityVariant.MUSE || e === o("WAWebGroupAgentSecurityVariant").GroupAgentSecurityVariant.GENERIC) {
                o("WAWebModalManager").ModalManager.open(<M6Component variant={e}/>);
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function M6Component(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_variant = e.variant;
        const a = _(e_variant);
        const i = function() {
            o("WAWebExternalLink.react").openExternalLink(a.learnMoreUrl);
            o("WAWebModalManager").ModalManager.close();
        };
        const l = r("useWAWebFocusOnMount")();
        let d;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            d = s._("Learn more");
            t[0] = d;
        } else {
            d = t[0];
        }
        let m;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("Close");
            t[1] = m;
        } else {
            m = t[1];
        }
        let f;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                o("WDSMargins.stylex").wdsMargins.marginVerAuto,
                o("WDSPaddings.stylex").wdsPaddings.paddingBottom16
            ];
            t[2] = f;
        } else {
            f = t[2];
        }
        let g;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            g = [
                c.headerText,
                o("WDSMargins.stylex").wdsMargins.marginHor8,
                o("WDSMargins.stylex").wdsMargins.marginTop16,
                o("WDSMargins.stylex").wdsMargins.marginBottom8
            ];
            t[3] = g;
        } else {
            g = t[3];
        }
        const Component = r("WDSText.react");
        const Component_1 = r("WAWebBox.react");
        const Component_2 = o("WAWebFlex.react").FlexColumn;
        const Component_3 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_3 okText={d} onOK={i} cancelText={m} onCancel={o("WAWebModalManager").closeModalManager} type={o("WAWebModal.react").ModalTheme.Promote} ref={l}><Component_2 align="center" xstyle={f}><Component_1 xstyle={g}><Component colorName="contentDefault" textAlign="center" type="Headline2">{a.title}</Component></Component_1>{a.items.map(p)}</Component_2></Component_3>;
    }
    M6Component.displayName = `${M6Component.name} [from ${i.id}]`;
    function p(e, t) {
        const Component = o("WAWebFlex.react").FlexItem;
        const Component_1 = r("WDSText.react");
        const Component_2 = r("WAWebBox.react");
        const Component_3 = r("WDSText.react");
        const Component_4 = r("WAWebBox.react");
        const Component_5 = o("WAWebFlex.react").FlexItem;
        const Component_6 = o("WAWebFlex.react").FlexRow;
        return <Component_6 key={t} xstyle={[
            o("WDSMargins.stylex").wdsMargins.marginHor8,
            o("WDSMargins.stylex").wdsMargins.marginVer16
        ]}>{e.icon != null && <Component xstyle={o("WDSPaddings.stylex").wdsPaddings.paddingHor8}>{e.icon}</Component>}<Component_5 xstyle={[
            o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
            c.sectionTitle
        ]}><Component_2><Component_1 colorName="contentDefault" type="Body1">{e.heading}</Component_1></Component_2><Component_4><Component_3 colorName="contentDeemphasized" type="Body2">{e.text}</Component_3></Component_4></Component_5></Component_6>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _(e) {
        if (e === o("WAWebGroupAgentSecurityVariant").GroupAgentSecurityVariant.MUSE) {
            return f();
        }
        return g();
    }
    function f() {
        const Component = r("MetaBrandHatchSymbolFilled24Icon.react");
        return {
            items: [
                {
                    heading: s._("Muse becomes a member"),
                    icon: <Component aria-hidden className="x14ug900" data-testid="group_agent_security_hatch_icon" height={24} width={24}/>,
                    text: s._("Muse is an AI agent by Meta. It can read and respond to messages in a chat it's added to, and Meta can access these messages.")
                },
                {
                    heading: s._("Muse owner and admins are in control"),
                    text: s._("The member who added Muse and admins can remove them anytime.")
                }
            ],
            learnMoreUrl: o("WAWebFaqUrl").getMuseGroupSecurityLearnMoreUrl(),
            title: s._("When members add their Muse to a chat")
        };
    }
    function g() {
        return {
            items: [
                {
                    heading: s._("AI agents become members"),
                    icon: u.jsx(r("WDSIconWdsIc3PAiBotFilled.react"), {
                        iconXstyle: c.itemIcon,
                        testid: "group_agent_security_ai_agents_icon"
                    }),
                    text: s._("AI agents can read and respond to messages in a chat they're added to through a secure Meta service, and Meta can access these messages.")
                },
                {
                    heading: s._("Admins are in control"),
                    text: s._("Admins and the members who added AI agents can remove them anytime.")
                }
            ],
            learnMoreUrl: o("WAWebFaqUrl").getGenericGroupAgentSecurityLearnMoreUrl(),
            title: s._("When members add AI agents to a chat")
        };
    }
    l.openGroupAgentSecurityDialog = d;
    l.WAWebGroupAgentSecurityDialog = M6Component;
}, 226);