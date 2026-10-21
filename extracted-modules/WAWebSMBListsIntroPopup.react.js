__d("WAWebSMBListsIntroPopup.react", [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebDrawerManager",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebLabelFlowLoadable",
    "WAWebModalManager",
    "WAWebWamEnumUpdateEntryPoint",
    "WDSIconIcCheckCircle.react",
    "WDSIconIcSettings.react",
    "WDSIconIcSwitchAccount.react",
    "WDSIllustrationWdsIllContactFilters.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "content"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useRef } = d;
    const _ = {
        iconRow: {
            marginTop: "x9u28bd",
            $$css: true
        },
        header: {
            fontSize: "x1603h9y",
            fontWeight: "xk50ysn",
            lineHeight: "x37zpob",
            marginTop: "x9u28bd",
            textAlign: "x2b8uid",
            $$css: true
        },
        content: {
            color: "xhslqc4",
            $$css: true
        },
        contentItemRow: {
            marginTop: "x1nmyh1g",
            $$css: true
        },
        iconContainer: {
            paddingInlineStart: "x1iw51ew",
            paddingInlineEnd: "xyo0t3i",
            $$css: true
        },
        icon: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function FComponent(e) {
        const t = o("react-compiler-runtime").c(6);
        const n = g;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebClickableLink.react");
            a = <Component onClick={n}>{s._("Settings")}</Component>;
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                Icon: r("WDSIconIcSwitchAccount.react"),
                title: s._("Lists make it even easier to organise your chats."),
                key: "lists-easier-organize"
            };
            t[1] = l;
        } else {
            l = t[1];
        }
        let u;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            u = {
                Icon: r("WDSIconIcCheckCircle.react"),
                title: s._("Your current labels will stay the same under Lists."),
                key: "labels-stay-same"
            };
            t[2] = u;
        } else {
            u = t[2];
        }
        let d;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            d = [
                l,
                u,
                {
                    Icon: r("WDSIconIcSettings.react"),
                    title: s._("Edit your lists anytime in {settingsLink}.", [
                        s._param("settingsLink", i)
                    ]),
                    key: "edit-your-lists"
                }
            ];
            t[3] = d;
        } else {
            d = t[3];
        }
        const content = d;
        let p;
        if (t[4] !== e) {
            p = <H1Component {...babelHelpers.extends({
                content
            }, e)}/>;
            t[4] = e;
            t[5] = p;
        } else {
            p = t[5];
        }
        return p;
    }
    function g() {
        o("WAWebModalManager").ModalManager.close();
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
            isInitialStep: true,
            entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_NUX
        }));
    }
    function H1Component(t) {
        const t_content = t.content;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const iRef = useRef();
        useEffect(function() {
            iRef.current?.focus();
        }, []);
        const l = function() {
            o("WAWebModalManager").ModalManager.close();
            a.onContinue?.();
        };
        const Component = r("WAWebFlexItem.react");
        const Component_1 = o("WAWebFlex.react").FlexRow;
        const Component_2 = r("WAWebFlexItem.react");
        const Component_3 = o("WAWebFlex.react").FlexRow;
        const Component_4 = o("WAWebFlex.react").FlexColumn;
        const Component_5 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_5 okText={r("WAWebFbtCommon")("Continue")} onOK={l} ref={iRef}><Component_1 align="center" justify="center" xstyle={_.iconRow}><Component>{c.jsx(r("WDSIllustrationWdsIllContactFilters.react"), {
            testid: "wds-ill-contact-filters"
        })}</Component></Component_1><Component_3 align="center" justify="center"><Component_2 xstyle={_.header}>{s._("Labels are now Lists")}</Component_2></Component_3><Component_4 xstyle={_.content}>{t_content.map(({ Icon, description, key, title })=><Y1Component key={key} Icon={Icon} title={title} description={description}/>)}</Component_4></Component_5>;
    }
    H1Component.displayName = `${H1Component.name} [from ${i.id}]`;
    function Y1Component(e) {
        const t = o("react-compiler-runtime").c(12);
        const { Icon, description, title } = e;
        let l;
        if (t[0] !== Icon) {
            const Component = r("WAWebFlexItem.react");
            l = <Component shrink={0} xstyle={_.iconContainer}>{<Icon width={24} iconXstyle={_.icon}/>}</Component>;
            t[0] = Icon;
            t[1] = l;
        } else {
            l = t[1];
        }
        let s;
        if (t[2] !== title) {
            const Component = r("WDSText.react");
            s = <Component type="Body1" colorName="contentDefault">{title}</Component>;
            t[2] = title;
            t[3] = s;
        } else {
            s = t[3];
        }
        let u;
        if (t[4] !== description) {
            const Component = r("WDSText.react");
            u = description != null && <Component type="Body2" colorName="contentDeemphasized">{description}</Component>;
            t[4] = description;
            t[5] = u;
        } else {
            u = t[5];
        }
        let d;
        if (t[6] !== s || t[7] !== u) {
            const Component = r("WAWebFlexItem.react");
            d = <Component>{s}{u}</Component>;
            t[6] = s;
            t[7] = u;
            t[8] = d;
        } else {
            d = t[8];
        }
        let m;
        if (t[9] !== l || t[10] !== d) {
            const Component = o("WAWebFlex.react").FlexRow;
            m = <Component align="center" xstyle={_.contentItemRow}>{l}{d}</Component>;
            t[9] = l;
            t[10] = d;
            t[11] = m;
        } else {
            m = t[11];
        }
        return m;
    }
    l.SMBListsIntroPopup = FComponent;
}, 226);