__d("WAWebAcp2DrawerView.react", [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebLimitSharingAIGroupBlock",
    "WAWebText.react",
    "WDSIconIcDevices.react",
    "WDSIconIcImage.react",
    "WDSIconIcShare.react",
    "WDSIconWdsIcAiFilled.react",
    "WDSIllustrationWdsPictoChatsLockAndroid.react",
    "WDSSwitch.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    const d = {
        headerIcon: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            height: "x1wkxgih",
            $$css: true
        },
        defaultLineHeight: {
            lineHeight: "x1o2sk6j",
            $$css: true
        },
        block: {
            marginTop: "xqui205",
            marginBottom: "x1hq5gj4",
            $$css: true
        },
        feature: {
            paddingTop: "xyinxu5",
            paddingBottom: "x1g2khh7",
            ":first-child_paddingTop": "x10zg81t",
            ":last-child_paddingBottom": "xup0pd7",
            $$css: true
        },
        featureImg: {
            paddingInlineEnd: "x64bnmy",
            color: "xhslqc4",
            $$css: true
        },
        status: {
            borderTopColor: "xx42vgk",
            borderTopStyle: "x13fuv20",
            borderTopWidth: "x178xt8z",
            paddingTop: "x1xy6bms",
            paddingBottom: "x1t4gjm",
            $$css: true
        },
        statusDescription: {
            paddingTop: "x1iorvi4",
            paddingBottom: "xjkvuk6",
            $$css: true
        },
        spaceBefore: {
            "::before_content": "xjuopq5",
            "::before_whiteSpace": "xulcptl",
            $$css: true
        }
    };
    const m = {
        as: "li",
        align: "center",
        xstyle: [
            d.feature,
            d.defaultLineHeight
        ]
    };
    const p = {
        width: 24,
        height: 24,
        xstyle: d.featureImg
    };
    function _(e) {
        const t = o("react-compiler-runtime").c(25);
        const { blockedByGroupAgent, enabled, learnMoreUrl, onClose, onlyAdminsCanChange, ref } = e;
        const p = blockedByGroupAgent === undefined ? false : blockedByGroupAgent;
        let _;
        if (t[0] !== onClose) {
            _ = function() {
                onClose?.();
            };
            t[0] = onClose;
            t[1] = _;
        } else {
            _ = t[1];
        }
        const h = _;
        let y;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            y = {
                surface: "unknown",
                viewName: "acp2"
            };
            t[2] = y;
        } else {
            y = t[2];
        }
        let C;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            C = s._("Restricted chat");
            t[3] = C;
        } else {
            C = t[3];
        }
        let b;
        if (t[4] !== h) {
            const Component = o("WAWebDrawerHeader.react").DrawerHeader;
            b = <Component title={C} onBack={h} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL}/>;
            t[4] = h;
            t[5] = b;
        } else {
            b = t[5];
        }
        let v;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            v = <Component align="center" justify="center">{u.jsx(r("WDSIllustrationWdsPictoChatsLockAndroid.react"), {
                xstyle: [
                    d.headerIcon,
                    d.block
                ],
                testid: "security-message-lock-illustration"
            })}</Component>;
            t[6] = v;
        } else {
            v = t[6];
        }
        let S;
        if (t[7] !== learnMoreUrl) {
            S = <G7Component learnMoreUrl={learnMoreUrl}/>;
            t[7] = learnMoreUrl;
            t[8] = S;
        } else {
            S = t[8];
        }
        let R;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("Restricted chat");
            t[9] = R;
        } else {
            R = t[9];
        }
        let L;
        if (t[10] !== p || t[11] !== onlyAdminsCanChange) {
            const Component = o("WAWebFlex.react").FlexColumn;
            L = <Component testid="acp2-drawer-settings">{R}<F8Component blockedByGroupAgent={p} onlyAdminsCanChange={onlyAdminsCanChange}/></Component>;
            t[10] = p;
            t[11] = onlyAdminsCanChange;
            t[12] = L;
        } else {
            L = t[12];
        }
        let E;
        if (t[13] !== enabled) {
            const Component = o("WAWebFlex.react").FlexColumn;
            E = <Component>{u.jsx(r("WDSSwitch.react"), {
                value: enabled,
                disabled: true
            })}</Component>;
            t[13] = enabled;
            t[14] = E;
        } else {
            E = t[14];
        }
        let k;
        if (t[15] !== E || t[16] !== L) {
            const Component = o("WAWebFlex.react").FlexRow;
            k = <Component xstyle={d.status} justify="all" align="start">{L}{E}</Component>;
            t[15] = E;
            t[16] = L;
            t[17] = k;
        } else {
            k = t[17];
        }
        let I;
        if (t[18] !== k || t[19] !== S) {
            const Component = r("WAWebDrawerSection.react");
            const Component_1 = r("WAWebDrawerBody.react");
            I = <Component_1><Component animation={false} theme="padding-no-vertical">{v}{S}{k}</Component></Component_1>;
            t[18] = k;
            t[19] = S;
            t[20] = I;
        } else {
            I = t[20];
        }
        let T;
        if (t[21] !== ref || t[22] !== I || t[23] !== b) {
            const Component = r("WAWebDrawer.react");
            T = <Component theme="gallery" ref={ref} testid="acp2-drawer" tsNavigationData={y}>{b}{I}</Component>;
            t[21] = ref;
            t[22] = I;
            t[23] = b;
            t[24] = T;
        } else {
            T = t[24];
        }
        return T;
    }
    function F8Component(e) {
        const t = o("react-compiler-runtime").c(3);
        const { blockedByGroupAgent, onlyAdminsCanChange } = e;
        if (blockedByGroupAgent) {
            let a;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                const Component = o("WAWebText.react").WAWebTextMuted;
                a = <Component xstyle={d.statusDescription} testid="acp2-drawer-group-agent-subtitle">{o("WAWebLimitSharingAIGroupBlock").getLimitSharingBlockedByGroupAgentText()}</Component>;
                t[0] = a;
            } else {
                a = t[0];
            }
            return a;
        }
        if (onlyAdminsCanChange) {
            let i;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                const Component = o("WAWebText.react").WAWebTextMuted;
                i = <Component xstyle={d.statusDescription} testid="acp2-drawer-admin-only-subtitle">{s._("Only admins can change this setting")}</Component>;
                t[1] = i;
            } else {
                i = t[1];
            }
            return i;
        }
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            l = <Component xstyle={d.statusDescription} testid="acp2-drawer-settings-description">{s._("Change this setting on your primary phone.")}</Component>;
            t[2] = l;
        } else {
            l = t[2];
        }
        return l;
    }
    function G7Component(e) {
        let t;
        const e_learnMoreUrl = e.learnMoreUrl;
        const a = e_useMemo(function() {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            return [
                {
                    icon: u.jsx(r("WDSIconIcImage.react"), babelHelpers.extends({}, p)),
                    text: s._("Can’t save media from this chat to their device gallery automatically")
                },
                {
                    icon: u.jsx(r("WDSIconIcShare.react"), babelHelpers.extends({}, p)),
                    text: s._("Can’t export the chat")
                },
                {
                    icon: u.jsx(r("WDSIconWdsIcAiFilled.react"), babelHelpers.extends({}, p)),
                    text: s._("Can’t use Meta AI features in this chat")
                },
                {
                    icon: u.jsx(r("WDSIconIcDevices.react"), babelHelpers.extends({}, p)),
                    text: <span>{s._("Can’t use linked devices for this chat. This helps to prevent people in the chat from using unofficial clients or AI agents to access it.")}<Component href={e_learnMoreUrl} xstyle={d.spaceBefore}>{r("WAWebFbtCommon")("Learn more")}</Component></span>
                }
            ];
        }, [
            e_learnMoreUrl
        ]);
        const Component = o("WAWebExternalLink.react").ExternalLink;
        const Component_1 = (t = o("WAWebText.react")).WAWebTextMuted;
        const Component_2 = o("WAWebExternalLink.react").ExternalLink;
        return <><div data-testid="acp2-drawer-description" className="x1y1aw1k x1o2sk6j">{s._("Limit what people in this chat can do with the messages")}</div><Component_1 testid="acp2-drawer-detail" xstyle={d.block}>{s._("For your most sensitive chats, you can turn off some standard WhatsApp features.")}<Component href={e_learnMoreUrl} xstyle={d.spaceBefore}>{r("WAWebFbtCommon")("Learn more")}</Component></Component_1><t.WAWebTextMuted testid="acp2-drawer-detail">{s._("If this is on, people:")}</t.WAWebTextMuted><ul className="xqui205 x1hq5gj4">{a.map((e, t)=><H6 key={t} icon={e.icon} text={e.text}/>)}</ul><t.WAWebTextMuted testid="acp2-drawer-detail" xstyle={d.block}>{s._("Our privacy promise")}</t.WAWebTextMuted><t.WAWebTextMuted testid="acp2-drawer-detail">{s._("Whether or not you turn on these restrictions, the messages and calls in this chat are protected with end-to-end encryption. The people in this chat are the only ones who can read, listen to, or choose to share the messages.")}<Component_2 href={e_learnMoreUrl} xstyle={d.spaceBefore}>{r("WAWebFbtCommon")("Learn more")}</Component_2></t.WAWebTextMuted></>;
    }
    G7Component.displayName = `${G7Component.name} [from ${i.id}]`;
    function H6(e) {
        const t = o("react-compiler-runtime").c(3);
        const { icon, text } = e;
        let a;
        if (t[0] !== icon || t[1] !== text) {
            a = u.jsxs(o("WAWebFlex.react").FlexRow, babelHelpers.extends({}, m, {
                children: [
                    icon,
                    text
                ]
            }));
            t[0] = icon;
            t[1] = text;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    l.default = _;
}, 226);