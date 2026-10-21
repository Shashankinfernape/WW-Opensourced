__d("WAWebChannelsChatlistHeaderDropdownItems.react", [
    "WAWebABProps",
    "WAWebCommonNewsletterStrings",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNewsletterDirectoryFlowLoadable",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterTabFlowLoadable",
    "WAWebNewsletterTabFlowStep",
    "WAWebOpenNewsletterCreationFlow",
    "WAWebOpenNewsletterDirectory",
    "WAWebWamEnumChannelDirectoryEntryPoint",
    "WDSIconIcSearch.react",
    "WDSIconWdsIcNewChannel.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebIsChannelsInChatListEnabled"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent() {
        const e = o("react-compiler-runtime").c(1);
        const t = d(o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled);
        if (!t) {
            return null;
        }
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSMenuItem.react");
            n = <Component Icon={r("WDSIconWdsIcNewChannel.react")} title={o("WAWebCommonNewsletterStrings").getCreateChannelText()} onPress={p} testid="mi-create-channel menu-item"/>;
            e[0] = n;
        } else {
            n = e[0];
        }
        return n;
    }
    function c() {
        const e = o("react-compiler-runtime").c(1);
        const t = d(o("WAWebNewsletterGatingUtils").isNewsletterDirectoryEnabled);
        if (!t || !o("WAWebABProps").getABPropConfigValue("updates_tab_channels_show_unfollowed_search_results_enabled")) {
            return null;
        }
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSMenuItem.react");
            n = <Component Icon={r("WDSIconIcSearch.react")} title={o("WAWebCommonNewsletterStrings").getFindNewslettersText()} onPress={m} testid="mi-find-channels menu-item"/>;
            e[0] = n;
        } else {
            n = e[0];
        }
        return n;
    }
    function d(e) {
        const t = o("react-compiler-runtime").c(3);
        const n = r("useWAWebIsChannelsInChatListEnabled")();
        let a;
        if (t[0] !== n || t[1] !== e) {
            a = n && e();
            t[0] = n;
            t[1] = e;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    function m() {
        o("WAWebOpenNewsletterDirectory").openNewsletterDirectory({
            tosAcceptCallback: function() {
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(s.jsx(o("WAWebNewsletterDirectoryFlowLoadable").NewsletterDirectoryFlowLoadable, {
                    directoryEntryPoint: o("WAWebWamEnumChannelDirectoryEntryPoint").CHANNEL_DIRECTORY_ENTRY_POINT.FIND_CHANNELS_MENU,
                    searchOnly: true
                }), {
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            }
        });
    }
    function p() {
        o("WAWebOpenNewsletterCreationFlow").openNewsletterCreationFlow({
            tosAcceptCallback: function(adminFunnelLogger) {
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(s.jsx(o("WAWebNewsletterTabFlowLoadable").NewsletterTabFlowLoadable, {
                    initialStep: o("WAWebNewsletterTabFlowStep").NewsletterTabFlowStep.CreateNewsletter,
                    adminFunnelLogger
                }), {
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    disableRotateFocus: true
                });
            }
        });
    }
    l.WAWebCreateChannelChatlistHeaderDropdownItem = UComponent;
    l.WAWebFindChannelsChatlistHeaderDropdownItem = c;
}, 98);