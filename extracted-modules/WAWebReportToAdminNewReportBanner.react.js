__d("WAWebReportToAdminNewReportBanner.react", [
    "fbt",
    "WATimeUtils",
    "WAWebConversationBanner.react",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendChatGetters",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebKeyboardTabUtils",
    "WAWebRevokeMsgConstants",
    "WAWebSendForAdminReviewUtils",
    "WAWebSentForAdminReviewFlowLoadable",
    "WAWebStateUtils",
    "WAWebUimUie.react",
    "WDSIconIcMessageReport.react",
    "WDSPaddings.stylex",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebGroupMetadataValues",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = {
        marginTop6: {
            marginTop: "x1k70j0n",
            $$css: true
        },
        marginBottom6: {
            marginBottom: "xzueoph",
            $$css: true
        }
    };
    const m = {
        banner: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        iconRefreshed: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(14);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = a;
        const { chat, onClose } = l;
        const _ = r("useWAWebUIM")();
        let f;
        if (n[3] !== chat || n[4] !== onClose || n[5] !== i || n[6] !== _) {
            f = function() {
                const Component = o("WAWebSentForAdminReviewFlowLoadable").SentForAdminReviewFlowLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component key={`rta-${chat.id.toString()}`} chat={o("WAWebStateUtils").unproxy(chat)} ref={i} onClose={o("WAWebDrawerManager").closeDrawerRight}/>, {
                    transition: "slide-left",
                    uim: _,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
                onClose();
            };
            n[3] = chat;
            n[4] = onClose;
            n[5] = i;
            n[6] = _;
            n[7] = f;
        } else {
            f = n[7];
        }
        const g = f;
        let h;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebFlexItem.react");
            h = <Component xstyle={o("WDSPaddings.stylex").wdsPaddings.paddingEnd20}>{c.jsx(r("WDSIconIcMessageReport.react"), {
                iconXstyle: m.iconRefreshed,
                testid: "message-report-refreshed"
            })}</Component>;
            n[8] = h;
        } else {
            h = n[8];
        }
        let y;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = r("WDSText.react");
            const Component_2 = r("WAWebFlexItem.react");
            const Component_3 = o("WAWebFlex.react").FlexRow;
            y = <Component_3 xstyle={d.marginTop6} align="center">{h}<Component_2 xstyle={d.marginBottom6}><Component_1 type="Body2" colorName="contentDeemphasized" testid="report-to-admin-new-report-text">{s._("{=m0} sent for admin review", [
                s._implicitParam("=m0", <Component type="Body2Emphasized" colorName="accent" testid="report-to-admin-new-messages-text">{s._("New Messages")}</Component>)
            ])}</Component_1></Component_2></Component_3>;
            n[9] = y;
        } else {
            y = n[9];
        }
        let C;
        if (n[10] !== g || n[11] !== onClose || n[12] !== i) {
            const Component = r("WAWebConversationBanner.react");
            const Component_1 = o("WAWebUimUie.react").UIE;
            C = <Component_1 displayName="ReportToAdminNewReportBanner" escapable><Component ref={i} xstyle={m.banner} onClick={g} onClose={onClose}>{y}</Component></Component_1>;
            n[10] = g;
            n[11] = onClose;
            n[12] = i;
            n[13] = C;
        } else {
            C = n[13];
        }
        return C;
    }
    function _(e) {
        const n = o("react-compiler-runtime").c(1);
        let r;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebFrontendChatGetters").getGroupMetadata
            ];
            n[0] = r;
        } else {
            r = n[0];
        }
        const a = o("useWAWebChatValues").useChatValues(e.id, r);
        const i = a[0];
        const l = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(i?.id, [
            o("WAWebFrontendGroupMetadataGetters").getLastReportToAdminTimestamp
        ]) ?? [];
        const s = l[0];
        if (s == null) {
            return false;
        }
        const u = o("WAWebRevokeMsgConstants").REVOKE_WINDOW + o("WAWebRevokeMsgConstants").REVOKE_WINDOW_RECEIVER_MARGIN;
        const c = o("WATimeUtils").unixTime() - s <= u;
        return c;
    }
    function f(e) {
        const n = o("react-compiler-runtime").c(1);
        let r;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebFrontendChatGetters").getGroupMetadata
            ];
            n[0] = r;
        } else {
            r = n[0];
        }
        const a = o("useWAWebChatValues").useChatValues(e.id, r);
        const i = a[0];
        const l = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(i?.id, [
            o("WAWebFrontendGroupMetadataGetters").getReportToAdminMode
        ]) ?? [];
        const s = l[0];
        return s === true;
    }
    function g(e) {
        const t = o("react-compiler-runtime").c(5);
        const n = _(e);
        const r = f(e) && n;
        let a;
        if (t[0] !== e) {
            a = function() {
                o("WAWebSendForAdminReviewUtils").clearLastReportTimestamp(e);
            };
            t[0] = e;
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] !== r || t[3] !== a) {
            i = [
                r,
                a
            ];
            t[2] = r;
            t[3] = a;
            t[4] = i;
        } else {
            i = t[4];
        }
        return i;
    }
    l.ReportToAdminNewReportBanner = p;
    l.useReportToAdminNewReportBanner = g;
}, 226);