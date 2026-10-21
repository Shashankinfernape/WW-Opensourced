__d("WAWebPrivacyNarrativeE2EMessage.react", [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebDailyAggregatedStats",
    "WAWebE2EInfoModalV2.react",
    "WAWebModalManager",
    "WAWebPrinaUtils",
    "WAWebPrivacyHighlightDailyUtils",
    "WAWebTabOrder",
    "WAWebWamEnumPrivacyHighlightSurfaceEnum",
    "WDSIconIcLock.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useEffect = u.useEffect;
    const m = {
        container: {
            boxSizing: "x9f619",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            marginTop: "xcxhlts",
            marginInlineEnd: "x1ys307a",
            marginBottom: "x1fqp7bg",
            marginInlineStart: "xyqm7xq",
            paddingTop: "x889kno",
            $$css: true
        },
        chatListContainer: {
            borderTopWidth: "x178xt8z",
            borderTopStyle: "x13fuv20",
            borderTopColor: "xx42vgk",
            color: "x14ug900",
            $$css: true
        },
        chatListIcon: {
            fill: "x1h227xn",
            $$css: true
        },
        statusListContainer: {
            color: "x88nbbm",
            $$css: true
        },
        statusListIcon: {
            fill: "xn91bti",
            $$css: true
        },
        secondaryColors: {
            color: "xhslqc4",
            fill: "xvt3oi1",
            $$css: true
        },
        icon: {
            marginTop: "xvijh9v",
            marginInlineEnd: "x1p8j9ns",
            display: "x1rg5ohu",
            $$css: true
        }
    };
    function p(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_tabOrder = e.tabOrder;
        const a = _;
        let i;
        if (t[0] !== e_tabOrder) {
            const Component = r("WAWebClickableLink.react");
            const l = s._("Your personal messages are {=m2}", [
                s._implicitParam("=m2", <Component testid="chatlist-e2e-message-link" onClick={a} tabIndex={0} data-tab={e_tabOrder ?? o("WAWebTabOrder").TAB_ORDER.E2E_MESSAGE_BTN}>{s._("end-to-end encrypted")}</Component>)
            ]);
            i = <C testid="chatlist-e2e-message" iconXstyle={m.chatListIcon} text={l} xstyle={m.chatListContainer} highlightSurface={o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.CHATS_LIST}/>;
            t[0] = e_tabOrder;
            t[1] = i;
        } else {
            i = t[1];
        }
        return i;
    }
    function _() {
        o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebE2EInfoModalV2.react").E2eInfoModalV2, {
            highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.CHATS_LIST,
            url: o("WAWebPrinaUtils").securityUrl()
        }));
    }
    function f() {
        const e = o("react-compiler-runtime").c(3);
        const t = g;
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebClickableLink.react");
            n = s._("Your statuses are {=m2}", [
                s._implicitParam("=m2", <Component tabIndex={0} testid="status-e2e-message-link" onClick={t} data-tab={o("WAWebTabOrder").TAB_ORDER.E2E_MESSAGE_BTN}>{s._("end-to-end encrypted")}</Component>)
            ]);
            e[0] = n;
        } else {
            n = e[0];
        }
        const a = n;
        let i;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                m.statusListIcon,
                m.secondaryColors
            ];
            e[1] = i;
        } else {
            i = e[1];
        }
        let l;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = <C testid="status-e2e-message" iconXstyle={i} text={a} xstyle={[
                m.statusListContainer,
                m.secondaryColors
            ]} highlightSurface={o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.STATUS_LIST}/>;
            e[2] = l;
        } else {
            l = e[2];
        }
        return l;
    }
    function g() {
        o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebE2EInfoModalV2.react").E2eInfoModalStatus, {
            highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.STATUS_LIST,
            url: o("WAWebPrinaUtils").securityUrl()
        }));
    }
    function h() {
        const e = o("react-compiler-runtime").c(3);
        const t = y;
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebClickableLink.react");
            n = s._("Your personal calls are {=m2}", [
                s._implicitParam("=m2", <Component tabIndex={0} testid="calls-e2e-message-link" onClick={t} data-tab={o("WAWebTabOrder").TAB_ORDER.E2E_MESSAGE_BTN}>{s._("end-to-end encrypted")}</Component>)
            ]);
            e[0] = n;
        } else {
            n = e[0];
        }
        const a = n;
        let i;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                m.chatListIcon,
                m.secondaryColors
            ];
            e[1] = i;
        } else {
            i = e[1];
        }
        let l;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = <C testid="calls-e2e-message" iconXstyle={i} text={a} xstyle={[
                m.chatListContainer,
                m.secondaryColors
            ]} highlightSurface={o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.CALLS_LIST}/>;
            e[2] = l;
        } else {
            l = e[2];
        }
        return l;
    }
    function y() {
        o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebE2EInfoModalV2.react").E2eInfoModalV2, {
            highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.CALLS_LIST,
            url: o("WAWebPrinaUtils").securityUrl()
        }));
    }
    function C({ highlightSurface, iconXstyle, testid, text, xstyle }) {
        u_useEffect(function() {
            o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(highlightSurface, o("WAWebDailyAggregatedStats").PrinaDailyActionType.NARRATIVE_APPEAR);
        }, []);
        const u = {
            xstyle: [
                m.icon,
                iconXstyle
            ],
            height: 12,
            width: 13
        };
        return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.container, xstyle), {
            "data-testid": testid,
            children: <div className="x2b8uid xl56j7k x78zum5"><div className="x1pg5gke x1fcty0u xvq8zen x1mzt3pk xeaf4i8">{c.jsx(r("WDSIconIcLock.react"), babelHelpers.extends({}, u, {
                testid: "lock-outline"
            }))}{text}</div></div>
        })}/>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    l.E2eMessageChatList = p;
    l.E2eMessageStatusList = f;
    l.E2eMessageCallsList = h;
    l.E2eMessage = C;
}, 226);