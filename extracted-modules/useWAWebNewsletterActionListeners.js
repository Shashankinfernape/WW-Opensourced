__d("useWAWebNewsletterActionListeners", [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebInfoFlowLoadable",
    "WAWebKeyboardTabUtils",
    "WAWebNewsletterCollection",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterTabFlowLoadable",
    "WAWebNewsletterUpdateUserSettingsAction",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u() {
        const e = o("react-compiler-runtime").c(2);
        const t = r("useWAWebUIM")();
        let n;
        if (e[0] !== t) {
            n = function(n) {
                const e = r("WAWebNewsletterCollection").get(n);
                if (e != null) {
                    o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                        descriptorType: "newsletter_tab"
                    } : s.jsx(o("WAWebNewsletterTabFlowLoadable").NewsletterTabFlowLoadable, {}), {
                        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                        transition: "slide-left",
                        uim: t,
                        disableRotateFocus: true
                    });
                    o("WAWebCmd").Cmd.openChatBottom({
                        chat: e,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterCreationFlow
                    });
                }
            };
            e[0] = t;
            e[1] = n;
        } else {
            n = e[1];
        }
        const a = n;
        const i = d;
        const l = c;
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_created_newsletter", a);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_newsletter_profile", i);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "newsletter:mute_toggle", l);
    }
    function c(e, t, n) {
        o("WAWebNewsletterUpdateUserSettingsAction").updateNewsletterUserSettingsAction(e, t ? o("WAWebNewsletterModelUtils").MUTED_STATE : o("WAWebNewsletterModelUtils").UNMUTED_STATE, [
            o("WAWebNewsletterUpdateUserSettingsAction").NewsletterUserSetting.AdminActivity
        ], n);
    }
    function d(e, initialStep) {
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "info_flow",
            chat: e,
            initialStep
        } : s.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
            chat: e,
            initialStep
        }), {
            transition: "slide-left",
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            noFocus: true
        });
    }
    l.default = u;
}, 98);