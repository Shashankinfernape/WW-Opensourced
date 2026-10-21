__d("WAWebDOIntroPopup.react", [
    "fbt",
    "WAWebAutomaticEventsUserJourneyWamEvent",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebWamEnumAutomaticEventsTargetComponentEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WDSIconIcBolt.react",
    "WDSIconIcSettings.react",
    "WDSIconIcSwitchAccount.react",
    "WDSIllustrationWdsIllDetectedOutcomesAutomatedLabels.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = [
        "content"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useRef } = d;
    const _ = {
        marginTop10: {
            marginTop: "x1anpbxc",
            $$css: true
        },
        paddingInline10: {
            paddingInlineStart: "xe2zdcy",
            paddingInlineEnd: "x2vl965",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        paddingBlock18: {
            paddingTop: "x109j2v6",
            paddingBottom: "x1hhzuzn",
            $$css: true
        },
        marginInline25: {
            marginInlineStart: "x1ult018",
            marginInlineEnd: "x1wcu8vx",
            marginLeft: null,
            marginRight: null,
            $$css: true
        }
    };
    const f = {
        header: {
            fontSize: "x1603h9y",
            fontWeight: "xk50ysn",
            lineHeight: "x37zpob",
            $$css: true
        },
        buttonGroupStyle: {
            justifyContent: "x1lvf691",
            paddingBottom: "xs9asl8",
            $$css: true
        },
        icon: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function GComponent(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = {
                Icon: r("WDSIconIcSwitchAccount.react"),
                title: s._("Chats are added to a list when a new order or lead occurs"),
                key: "chats-are-added-to-list-new-order-or-lead"
            };
            t[0] = n;
        } else {
            n = t[0];
        }
        let a;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                Icon: r("WDSIconIcBolt.react"),
                title: s._("Organising your chats with auto-created lists saves valuable time"),
                key: "organizing-chats-with-auto-created-lists-saves-time"
            };
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                n,
                a,
                {
                    Icon: r("WDSIconIcSettings.react"),
                    title: s._("You can change your lists settings in the Tools tab"),
                    key: "change-your-lists-settings-in-tools-tab"
                }
            ];
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = i;
        let u;
        if (t[3] !== e) {
            u = <H2Component {...babelHelpers.extends({
                content: l
            }, e)}/>;
            t[3] = e;
            t[4] = u;
        } else {
            u = t[4];
        }
        return u;
    }
    function H2Component(t) {
        let n;
        const t_content = t.content;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const lRef = useRef();
        useEffect(function() {
            lRef.current?.focus();
            new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
                surface: i.surfaceType,
                smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
                automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.NUX_SCREEN
            }).commit();
        }, [
            i.surfaceType
        ]);
        const u = function() {
            new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
                surface: i.surfaceType,
                smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.NUX_SCREEN_OK
            }).commit();
            o("WAWebModalManager").ModalManager.close();
            i.onContinue?.();
        };
        const Component = (n = o("WAWebFlex.react")).FlexRow;
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 okText={r("WAWebFbtCommon")("OK")} onOK={u} ref={lRef} buttonGroupStyle={f.buttonGroupStyle}><Component align="center" justify="center"><n.FlexItem xstyle={[
            _.marginTop10,
            _.paddingInline10
        ]}>{c.jsx(r("WDSIllustrationWdsIllDetectedOutcomesAutomatedLabels.react"), {
            testid: "wds-ill-detected-outcomes-automated-labels"
        })}</n.FlexItem></Component><n.FlexRow align="center" justify="center"><n.FlexItem xstyle={[
            f.header,
            _.paddingBlock18
        ]}>{s._("Some chats automatically added to lists")}</n.FlexItem></n.FlexRow><n.FlexColumn>{t_content.map(({ Icon, description, key, title })=><Y2Component key={key} Icon={Icon} title={title} description={description}/>)}</n.FlexColumn></Component_1>;
    }
    H2Component.displayName = `${H2Component.name} [from ${i.id}]`;
    function Y2Component(e) {
        const t = o("react-compiler-runtime").c(12);
        const { Icon, description, title } = e;
        let i;
        if (t[0] !== Icon) {
            const Component = o("WAWebFlex.react").FlexItem;
            i = <Component shrink={0} xstyle={_.marginInline25}>{<Icon width={24} iconXstyle={f.icon}/>}</Component>;
            t[0] = Icon;
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== title) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            l = <Component xstyle={o("WDSMargins.stylex").wdsMargins.marginEnd24} color="wdsContentDeemphasized">{title}</Component>;
            t[2] = title;
            t[3] = l;
        } else {
            l = t[3];
        }
        let s;
        if (t[4] !== description) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            s = description != null && <Component>{description}</Component>;
            t[4] = description;
            t[5] = s;
        } else {
            s = t[5];
        }
        let u;
        if (t[6] !== l || t[7] !== s) {
            const Component = o("WAWebFlex.react").FlexItem;
            u = <Component>{l}{s}</Component>;
            t[6] = l;
            t[7] = s;
            t[8] = u;
        } else {
            u = t[8];
        }
        let d;
        if (t[9] !== i || t[10] !== u) {
            const Component = o("WAWebFlex.react").FlexRow;
            d = <Component align="center" xstyle={o("WDSMargins.stylex").wdsMargins.marginTop20}>{i}{u}</Component>;
            t[9] = i;
            t[10] = u;
            t[11] = d;
        } else {
            d = t[11];
        }
        return d;
    }
    l.default = GComponent;
}, 226);