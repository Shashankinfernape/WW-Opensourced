__d("WAWebSuspendedGroupModalV2.react", [
    "fbt",
    "WAWebABPropsSaga",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebContactFormWrapper.react",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebGroupIntegrityUtils",
    "WAWebModalManager",
    "WAWebRoundShape.react",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSuspendedGroupDeleteWamEvent",
    "WAWebSuspendedGroupUtils",
    "WAWebWamEnumDeleteSuspendedGroupBtn",
    "WAWebWamEnumGroupSuspensionAppealUiAction",
    "WAWebWamEnumGroupSuspensionAppealUiSurface",
    "WAWebWamEnumSupportAiEventType",
    "WDSIconIcBlock.react",
    "WDSIconIcGroup.react",
    "WDSIconIcHelpFilled.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function d(e) {
        const t = o("react-compiler-runtime").c(3);
        let n;
        let r;
        if (t[0] !== e) {
            n = function() {
                o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
                    chat: e,
                    uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SUSPENSION_BOTTOM_SHEET_IMPRESSION,
                    uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.GROUP_SUSPENSION_BOTTOM_SHEET
                });
            };
            r = [
                e
            ];
            t[0] = e;
            t[1] = n;
            t[2] = r;
        } else {
            n = t[1];
            r = t[2];
        }
        e_useEffect(n, r);
    }
    const m = {
        mainPic: {
            width: "x1exxlbk",
            height: "xpyat2d",
            backgroundColor: "x7h6blw",
            $$css: true
        },
        icon: {
            color: "xshy2n",
            display: "x78zum5",
            justifyContent: "xl56j7k",
            alignItems: "x6s0dn4",
            minWidth: "x1hxoosp",
            $$css: true
        },
        badge: {
            zIndex: "x12xzxwr",
            bottom: "x1c56n8",
            insetInlineEnd: "xptjn4f",
            left: null,
            right: null,
            position: "x1n2onr6",
            marginInlineEnd: "xhg6vv5",
            color: "x30a034",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            backgroundColor: "x1p8t8ri",
            $$css: true
        }
    };
    function PComponent(e) {
        const a = o("react-compiler-runtime").c(27);
        const e_chat = e.chat;
        d(e_chat);
        let l;
        if (a[0] !== e_chat) {
            l = function() {
                o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
                    chat: e_chat,
                    uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.CONTACT_SUPPORT_CLICK,
                    uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.GROUP_SUSPENSION_BOTTOM_SHEET
                });
                o("WAWebModalManager").ModalManager.close();
                if (o("WAWebABPropsSaga").getIsSagaV1Enabled()) {
                    new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
                        supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.CONTACT_US_CLICKED
                    }).commit();
                }
                o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebContactFormWrapper.react"), {
                    supportTag: o("WAWebSuspendedGroupUtils").SUSPENDED_GROUP_SUPPORT_TAG,
                    entityId: e_chat.id.user
                }), {
                    transition: "modal-flow"
                });
            };
            a[0] = e_chat;
            a[1] = l;
        } else {
            l = a[1];
        }
        const c = l;
        let p;
        if (a[2] !== e_chat) {
            p = function() {
                o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
                    chat: e_chat,
                    uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.SEE_GROUP_CLICK,
                    uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.GROUP_SUSPENSION_BOTTOM_SHEET
                });
                o("WAWebModalManager").ModalManager.close();
            };
            a[2] = e_chat;
            a[3] = p;
        } else {
            p = a[3];
        }
        const f = p;
        let g;
        if (a[4] !== e_chat) {
            g = function() {
                o("WAWebSuspendedGroupUtils").logGroupSuspensionAppealEvent({
                    chat: e_chat,
                    uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction").GROUP_SUSPENSION_APPEAL_UI_ACTION.DELETE_GROUP_CLICK,
                    uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface").GROUP_SUSPENSION_APPEAL_UI_SURFACE.GROUP_SUSPENSION_BOTTOM_SHEET
                });
                new (o("WAWebSuspendedGroupDeleteWamEvent")).SuspendedGroupDeleteWamEvent({
                    deleteBtnSource: o("WAWebWamEnumDeleteSuspendedGroupBtn").DELETE_SUSPENDED_GROUP_BTN.BOTTOM_SHEET_BTN
                }).commit();
                o("WAWebModalManager").ModalManager.close();
                o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(e_chat);
            };
            a[4] = e_chat;
            a[5] = g;
        } else {
            g = a[5];
        }
        const h = g;
        let y;
        if (a[6] === Symbol.for("react.memo_cache_sentinel")) {
            y = s._("See group");
            a[6] = y;
        } else {
            y = a[6];
        }
        const cancelText = y;
        let b;
        if (a[7] === Symbol.for("react.memo_cache_sentinel")) {
            b = s._("Delete group for me");
            a[7] = b;
        } else {
            b = a[7];
        }
        const v = b;
        let S;
        if (a[8] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebRoundShape.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            S = <Component_1 justify="center" align="center"><Component xstyle={m.mainPic}>{u.jsx(r("WDSIconIcGroup.react"), {
                width: 60,
                height: 60
            })}</Component>{u.jsx(r("WDSIconIcBlock.react"), {
                width: 36,
                height: 36,
                xstyle: m.badge,
                testid: "settings-blocked"
            })}</Component_1>;
            a[8] = S;
        } else {
            S = a[8];
        }
        const R = S;
        let L;
        if (a[9] === Symbol.for("react.memo_cache_sentinel")) {
            L = {
                className: "x1nmyh1g xd6izgl xdqhqc9 x6pxu1d"
            };
            a[9] = L;
        } else {
            L = a[9];
        }
        let E;
        if (a[10] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            E = <Component_1 justify="center"><h1 {...babelHelpers.extends({
                "data-testid": "suspended-group-heading-container"
            }, L, {
                children: <Component type="Headline2" colorName="contentDefault" testid="suspended-group-heading">{s._("This group is no longer available")}</Component>
            })}/></Component_1>;
            a[10] = E;
        } else {
            E = a[10];
        }
        const k = E;
        let I;
        if (a[11] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            const Component_1 = r("WDSText.react");
            const Component_2 = o("WAWebFlex.react").FlexRow;
            I = <Component_2 justify="center"><p data-testid="suspended-group-faq-paragraph"><Component_1 type="Body2" colorName="contentDefault" testid="suspended-group-faq">{s._("{=m0}", [
                s._implicitParam("=m0", <Component href={o("WAWebSuspendedGroupUtils").getSuspendedFaqUrl()}>{s._("Why am I seeing this?")}</Component>)
            ])}</Component_1></p></Component_2>;
            a[11] = I;
        } else {
            I = a[11];
        }
        const T = I;
        let D;
        if (a[12] !== e_chat.groupMetadata?.participants || a[13] !== e_chat.groupMetadata?.terminated || a[14] !== c) {
            let x;
            let $;
            D = [];
            if (!((x = e_chat.groupMetadata) != null && x.terminated) && ($ = e_chat.groupMetadata) != null && $.participants.iAmAdmin()) {
                let M;
                if (a[16] === Symbol.for("react.memo_cache_sentinel")) {
                    M = u.jsx(r("WDSIconIcHelpFilled.react"), {
                        xstyle: m.icon
                    });
                    a[16] = M;
                } else {
                    M = a[16];
                }
                let w;
                if (a[17] !== c) {
                    const Component = r("WAWebClickableLink.react");
                    w = {
                        testId: "suspended-group-appeal-row",
                        icon: M,
                        content: s._("Request a review through {=m2}.", [
                            s._implicitParam("=m2", <Component onClick={c}>{s._("WhatsApp Support")}</Component>)
                        ])
                    };
                    a[17] = c;
                    a[18] = w;
                } else {
                    w = a[18];
                }
                D.push(w);
            }
            let A;
            if (a[19] === Symbol.for("react.memo_cache_sentinel")) {
                A = {
                    testId: "suspended-group-operations-restricted-row",
                    icon: u.jsx(r("WDSIconIcBlock.react"), {
                        width: 24,
                        height: 24,
                        xstyle: m.icon,
                        testid: "settings-blocked"
                    }),
                    content: s._("No messaging, adding members, downloading or forwarding media.")
                };
                a[19] = A;
            } else {
                A = a[19];
            }
            D.push(A);
            a[12] = e_chat.groupMetadata?.participants;
            a[13] = e_chat.groupMetadata?.terminated;
            a[14] = c;
            a[15] = D;
        } else {
            D = a[15];
        }
        let F;
        if (a[20] === Symbol.for("react.memo_cache_sentinel")) {
            F = {
                surface: "unknown",
                viewName: "suspended-group-v2"
            };
            a[20] = F;
        } else {
            F = a[20];
        }
        let O;
        if (a[21] !== D) {
            const Component = o("WAWebFlex.react").FlexColumn;
            O = <Component>{D.map(_)}</Component>;
            a[21] = D;
            a[22] = O;
        } else {
            O = a[22];
        }
        let B;
        if (a[23] !== f || a[24] !== h || a[25] !== O) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            B = <Component tsNavigationData={F} onOK={h} okText={v} cancelText={cancelText} onCancel={f}>{R}{k}{T}{O}</Component>;
            a[23] = f;
            a[24] = h;
            a[25] = O;
            a[26] = B;
        } else {
            B = a[26];
        }
        return B;
    }
    function _({ content, icon, testId }) {
        return u.jsx(o("WAWebGroupIntegrityUtils").SuspendedModalBodyParagraph, {
            testId,
            icon,
            content
        }, testId);
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.default = PComponent;
}, 226);