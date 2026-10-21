__d("WAWebNewsletterNotificationSettingsBanner.react", [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebConversationBanner.react",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebKeyboardTabUtils",
    "WAWebUimUie.react",
    "WDSIconIcNotifications.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    const d = {
        banner: {
            backgroundColor: "x1h3rtpe",
            $$css: true
        },
        icon: {
            color: "xhslqc4",
            marginInlineEnd: "xqf2s3x",
            $$css: true
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(12);
        const { chat, onClose, ref } = e;
        let l;
        if (t[0] !== chat || t[1] !== onClose) {
            l = function() {
                onClose();
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                    descriptorType: "info_flow",
                    chat,
                    initialStep: o("WAWebInfoFlowStep").InfoFlowStep.Notifications
                } : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                    chat,
                    initialStep: o("WAWebInfoFlowStep").InfoFlowStep.Notifications
                }), {
                    transition: "slide-left",
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
            t[0] = chat;
            t[1] = onClose;
            t[2] = l;
        } else {
            l = t[2];
        }
        const c = l;
        let m;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = u.jsx(r("WDSIconIcNotifications.react"), {
                iconXstyle: d.icon
            });
            t[3] = m;
        } else {
            m = t[3];
        }
        let p;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            p = s._("New notification settings available.");
            t[4] = p;
        } else {
            p = t[4];
        }
        let _;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("View settings");
            t[5] = _;
        } else {
            _ = t[5];
        }
        let f;
        if (t[6] !== c) {
            const Component = r("WDSTextualLink.react");
            const Component_1 = r("WDSText.react");
            const Component_2 = o("WAWebFlex.react").FlexRow;
            f = <Component_2 align="center">{m}<Component_1 type="Body2" colorName="contentDefault">{p} <Component onClick={c}>{_}</Component></Component_1></Component_2>;
            t[6] = c;
            t[7] = f;
        } else {
            f = t[7];
        }
        let g;
        if (t[8] !== onClose || t[9] !== ref || t[10] !== f) {
            const Component = r("WAWebConversationBanner.react");
            const Component_1 = o("WAWebUimUie.react").UIE;
            g = <Component_1 displayName="NewsletterNotificationSettingsBanner" escapable><Component ref={ref} xstyle={d.banner} onClose={onClose}>{f}</Component></Component_1>;
            t[8] = onClose;
            t[9] = ref;
            t[10] = f;
            t[11] = g;
        } else {
            g = t[11];
        }
        return g;
    }
    l.default = m;
}, 226);