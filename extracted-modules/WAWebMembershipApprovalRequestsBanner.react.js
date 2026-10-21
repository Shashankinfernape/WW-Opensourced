__d("WAWebMembershipApprovalRequestsBanner.react", [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebConversationBanner.react",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendChatGetters",
    "WAWebGroupGatingUtils",
    "WAWebGroupMembershipApprovalRequestsFlowLoadable",
    "WAWebKeyboardTabUtils",
    "WAWebNux",
    "WAWebUimUie.react",
    "WDSIconWdsIcPersonPending.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebEventTargetValue",
    "useWAWebIAmGroupAdmin",
    "useWAWebNux",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = {
        banner: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        icon: {
            color: "x1anpt5t",
            $$css: true
        },
        paddingEnd20: {
            paddingInlineEnd: "xcldk2z",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(15);
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
        const uim = r("useWAWebUIM")();
        let f;
        if (n[3] !== chat || n[4] !== onClose || n[5] !== uim) {
            f = function() {
                const Component = o("WAWebGroupMembershipApprovalRequestsFlowLoadable").GroupMembershipApprovalRequestsFlowLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                    descriptorType: "group_membership_approval_requests",
                    chat
                } : <Component chat={chat} onBack={o("WAWebDrawerManager").closeDrawerRight}/>, {
                    transition: "slide-left",
                    uim,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
                if (!o("WAWebGroupGatingUtils").isPersistentPendingJoinRequestsBannerEnabled()) {
                    onClose();
                }
            };
            n[3] = chat;
            n[4] = onClose;
            n[5] = uim;
            n[6] = f;
        } else {
            f = n[6];
        }
        const g = f;
        const h = p(chat);
        let y;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebFlexItem.react");
            y = <Component xstyle={d.paddingEnd20}>{c.jsx(r("WDSIconWdsIcPersonPending.react"), {
                xstyle: d.icon,
                width: 20,
                height: 20,
                testid: "pending-participants"
            })}</Component>;
            n[7] = y;
        } else {
            y = n[7];
        }
        let C;
        if (n[8] !== h) {
            let b;
            const Component = r("WDSText.react");
            const Component_1 = r("WDSText.react");
            const Component_2 = r("WAWebFlexItem.react");
            const Component_3 = o("WAWebFlex.react").FlexRow;
            C = <Component_3 align="center">{y}<Component_2><Component_1 type="Body2" colorName="contentDeemphasized" testid="pending-requests-banner-text">{(b = s._plural(h, "pendingRequests"), s._("_j{\"*\":\"{=m0} {pendingRequests} requests to join\",\"_1\":\"{=m0} 1 request to join\"}", [
                b,
                s._implicitParam("=m0", <Component type="Body2Emphasized" colorName="accent" testid="pending-requests-banner-review">{s._("_j{\"*\":\"Review\"}", [
                    b
                ])}</Component>)
            ]))}</Component_1></Component_2></Component_3>;
            n[8] = h;
            n[9] = C;
        } else {
            C = n[9];
        }
        let v;
        if (n[10] !== g || n[11] !== onClose || n[12] !== i || n[13] !== C) {
            const Component = r("WAWebConversationBanner.react");
            const Component_1 = o("WAWebUimUie.react").UIE;
            v = <Component_1 displayName="MembershipApprovalRequestsBanner" escapable><Component ref={i} xstyle={d.banner} onClick={g} onClose={onClose}>{C}</Component></Component_1>;
            n[10] = g;
            n[11] = onClose;
            n[12] = i;
            n[13] = C;
            n[14] = v;
        } else {
            v = n[14];
        }
        return v;
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebFrontendChatGetters").getGroupMetadata
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const a = o("useWAWebChatValues").useChatValues(e.id, n);
        const i = a[0];
        const l = i?.membershipApprovalRequests;
        let s;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            s = [
                "add",
                "remove",
                "reset"
            ];
            t[1] = s;
        } else {
            s = t[1];
        }
        let u;
        if (t[2] !== l?.length) {
            u = function() {
                return l?.length ?? 0;
            };
            t[2] = l?.length;
            t[3] = u;
        } else {
            u = t[3];
        }
        const c = r("useWAWebEventTargetValue")(l, s, u);
        return c;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(6);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebFrontendChatGetters").getGroupMetadata
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const a = o("useWAWebChatValues").useChatValues(e.id, n);
        const i = a[0];
        const l = r("useWAWebIAmGroupAdmin")(i);
        const s = p(e);
        let u;
        if (t[1] !== e.id) {
            u = o("WAWebNux").getMembershipApprovalRequestsBannerNuxKey(e.id.toString());
            t[1] = e.id;
            t[2] = u;
        } else {
            u = t[2];
        }
        const d = r("useWAWebNux")(u);
        const m = d[0];
        const _ = d[1];
        const f = l && s > 0 && m;
        let g;
        if (t[3] !== f || t[4] !== _) {
            g = [
                f,
                _
            ];
            t[3] = f;
            t[4] = _;
            t[5] = g;
        } else {
            g = t[5];
        }
        return g;
    }
    l.MembershipApprovalRequestsBanner = m;
    l.useMembershipApprovalRequestsBanner = _;
}, 226);