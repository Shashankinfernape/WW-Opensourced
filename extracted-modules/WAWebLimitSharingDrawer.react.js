__d("WAWebLimitSharingDrawer.react", [
    "fbt",
    "WAWebABProps",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFrontendChatGetters",
    "WAWebLimitSharingAIGroupBlock",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingUIUtils",
    "WAWebNoop",
    "WAWebStateUtils",
    "WAWebText.react",
    "WDSIconIcImage.react",
    "WDSIconIcUpload.react",
    "WDSIconWdsIcAiFilled.react",
    "WDSIllustrationWdsPictoChatsLockAndroid.react",
    "WDSSwitch.react",
    "cr:15980",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebEventTargetValue"
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
        const t = o("react-compiler-runtime").c(37);
        const { chat, onClose, ref } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebFrontendChatGetters").getLimitSharing,
                o("WAWebFrontendChatGetters").getGroupMetadata
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const c = o("useWAWebChatValues").useChatValues(chat.id, l);
        const m = c[0];
        const p = c[1];
        let _;
        if (t[1] !== chat) {
            _ = o("WAWebStateUtils").unproxy(chat).groupMetadata?.participants;
            t[1] = chat;
            t[2] = _;
        } else {
            _ = t[2];
        }
        let h;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            h = [
                "add",
                "remove",
                "reset"
            ];
            t[3] = h;
        } else {
            h = t[3];
        }
        let y;
        if (t[4] !== chat) {
            y = function() {
                return o("WAWebLimitSharingAIGroupBlock").getLimitSharingAIGroupBlock(chat);
            };
            t[4] = chat;
            t[5] = y;
        } else {
            y = t[5];
        }
        const C = r("useWAWebEventTargetValue")(_, h, y);
        let b;
        if (t[6] !== m) {
            b = o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabledForValue(m);
            t[6] = m;
            t[7] = b;
        } else {
            b = t[7];
        }
        const v = b;
        let S;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            S = o("WAWebABProps").getABPropConfigValue("limit_sharing_update_enabled_web");
            t[8] = S;
        } else {
            S = t[8];
        }
        const R = S;
        const L = p != null;
        let E;
        if (t[9] !== p?.participants || t[10] !== L) {
            E = L && p?.participants?.iAmAdmin() === true;
            t[9] = p?.participants;
            t[10] = L;
            t[11] = E;
        } else {
            E = t[11];
        }
        const I = E;
        const useAdminOnlyDescription = L;
        const D = useAdminOnlyDescription && !I;
        let x;
        if (t[12] !== C || t[13] !== D || t[14] !== chat) {
            x = !R || C != null || D || o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(chat);
            t[12] = C;
            t[13] = D;
            t[14] = chat;
            t[15] = x;
        } else {
            x = t[15];
        }
        const $ = x;
        let P;
        if (t[16] !== onClose) {
            P = function() {
                onClose?.();
            };
            t[16] = onClose;
            t[17] = P;
        } else {
            P = t[17];
        }
        const N = P;
        let M;
        if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
            M = {
                surface: "unknown",
                viewName: "limit-sharing"
            };
            t[18] = M;
        } else {
            M = t[18];
        }
        let w;
        if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
            w = s._("Advanced chat privacy");
            t[19] = w;
        } else {
            w = t[19];
        }
        let A;
        if (t[20] !== N) {
            const Component = o("WAWebDrawerHeader.react").DrawerHeader;
            A = <Component title={w} onBack={N} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL}/>;
            t[20] = N;
            t[21] = A;
        } else {
            A = t[21];
        }
        let F;
        if (t[22] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexRow;
            F = <Component align="center" justify="center">{u.jsx(r("WDSIllustrationWdsPictoChatsLockAndroid.react"), {
                xstyle: [
                    d.headerIcon,
                    d.block
                ],
                testid: "security-message-lock-illustration"
            })}</Component>;
            t[22] = F;
        } else {
            F = t[22];
        }
        let O;
        if (t[23] !== useAdminOnlyDescription) {
            O = <F15 useAdminOnlyDescription={useAdminOnlyDescription}/>;
            t[23] = useAdminOnlyDescription;
            t[24] = O;
        } else {
            O = t[24];
        }
        let B;
        if (t[25] !== v || t[26] !== D || t[27] !== chat || t[28] !== $) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            const Component_1 = o("WAWebText.react").WAWebTextMuted;
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            const Component_3 = r("WDSSwitch.react");
            const Component_4 = o("WAWebFlex.react").FlexColumn;
            const Component_5 = o("WAWebFlex.react").FlexRow;
            B = !o("WAWebLimitSharingGatingUtils").isOpusEnabled() && <Component_5 xstyle={d.status} justify="all" align={R && !D ? "center" : "start"}><Component_2 testid="limit-sharing-drawer-settings">{s._("Advanced chat privacy")}{!R && <Component xstyle={d.statusDescription} testid="limit-sharing-drawer-settings-description">{s._("Change this setting on your primary phone.")}</Component>}{D && <Component_1 xstyle={d.statusDescription} testid="limit-sharing-drawer-admin-only-subtitle">{s._("Only admins can change this setting")}</Component_1>}</Component_2><Component_4><Component_3 value={v} disabled={$} onChange={function() {
                if ($) {
                    return r("WAWebNoop")();
                }
                o("WAWebLimitSharingUIUtils").toggleLimitSharing(chat);
            }}/></Component_4></Component_5>;
            t[25] = v;
            t[26] = D;
            t[27] = chat;
            t[28] = $;
            t[29] = B;
        } else {
            B = t[29];
        }
        let W;
        if (t[30] !== O || t[31] !== B) {
            const Component = r("WAWebDrawerSection.react");
            const Component_1 = r("WAWebDrawerBody.react");
            W = <Component_1><Component animation={false} theme="padding-no-vertical">{F}{O}{B}</Component></Component_1>;
            t[30] = O;
            t[31] = B;
            t[32] = W;
        } else {
            W = t[32];
        }
        let q;
        if (t[33] !== ref || t[34] !== A || t[35] !== W) {
            const Component = r("WAWebDrawer.react");
            q = <Component theme="gallery" ref={ref} testid="limit-sharing-drawer" tsNavigationData={M}>{A}{W}</Component>;
            t[33] = ref;
            t[34] = A;
            t[35] = W;
            t[36] = q;
        } else {
            q = t[36];
        }
        return q;
    }
    function F15(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_useAdminOnlyDescription = e.useAdminOnlyDescription;
        if (o("WAWebLimitSharingGatingUtils").isOpusEnabled() && n("cr:15980") != null) {
            let a;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                a = u.jsx(n("cr:15980"), {});
                t[0] = a;
            } else {
                a = t[0];
            }
            return a;
        }
        let i;
        if (t[1] !== e_useAdminOnlyDescription) {
            i = <G8Component useAdminOnlyDescription={e_useAdminOnlyDescription}/>;
            t[1] = e_useAdminOnlyDescription;
            t[2] = i;
        } else {
            i = t[2];
        }
        return i;
    }
    function G8Component({ useAdminOnlyDescription }) {
        const n = e_useMemo(function() {
            return [
                {
                    icon: u.jsx(r("WDSIconIcImage.react"), babelHelpers.extends({}, p)),
                    text: s._("Can't save media to their device gallery automatically")
                },
                {
                    icon: u.jsx(r("WDSIconWdsIcAiFilled.react"), babelHelpers.extends({}, p)),
                    text: <div>{s._("Can't use AI features like mentioning")} <label className="xuxw1ft">{s._("\u0040Meta AI")}</label> {s._("or summarising unread messages")}</div>
                },
                {
                    icon: u.jsx(r("WDSIconIcUpload.react"), babelHelpers.extends({}, p, {
                        testid: "media-upload"
                    })),
                    text: s._("Can't export the chat")
                }
            ];
        }, []);
        const Component = o("WAWebExternalLink.react").ExternalLink;
        const Component_1 = o("WAWebText.react").WAWebTextMuted;
        const Component_2 = o("WAWebText.react").WAWebTextMuted;
        return <><div data-testid="limit-sharing-drawer-description" className="x1y1aw1k x1o2sk6j">{s._("Limit how messages and media from this chat can be shared outside of WhatsApp")}</div><Component_1 testid="limit-sharing-drawer-detail" xstyle={d.block}>{useAdminOnlyDescription ? s._("All chats are private by default. This is true whether this setting is on or not.") : s._("Your personal messages are protected with end-to-end encryption even if you don't turn on advanced chat privacy. No one outside of the chat, not even WhatsApp or Meta, can read, listen to, or share them.")}<Component href={o("WAWebLimitSharingUIUtils").getSystemMessageLearnMoreURL()} xstyle={d.spaceBefore}>{r("WAWebFbtCommon")("Learn more")}</Component></Component_1><Component_2 testid="limit-sharing-drawer-detail">{useAdminOnlyDescription ? s._("If this is on, people in this chat:") : s._("If you turn this on, people in this chat:")}</Component_2><ul className="xqui205 x1hq5gj4">{n.map((e, t)=><H7 key={t} icon={e.icon} text={e.text}/>)}</ul></>;
    }
    G8Component.displayName = `${G8Component.name} [from ${i.id}]`;
    function H7(e) {
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