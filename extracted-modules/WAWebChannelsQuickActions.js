__d("WAWebChannelsQuickActions", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebDrawerManager",
    "WAWebNewsletterTabFlowLoadable",
    "WAWebNewsletterTabFlowStep",
    "WAWebWamEnumChannelDirectoryEntryPoint",
    "WDSIconIcAdd.react",
    "WDSIconIcGrid.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = [
        {
            id: "create_channel",
            Icon: r("WDSIconIcAdd.react"),
            label: function() {
                return s._("Create channel");
            },
            onClick: function() {
                r("JSResourceForInteraction")("WAWebOpenNewsletterCreationFlow").__setRef("WAWebChannelsQuickActions").load().then(({ openNewsletterCreationFlow })=>{
                    openNewsletterCreationFlow({
                        tosAcceptCallback: function(adminFunnelLogger) {
                            const Component = o("WAWebNewsletterTabFlowLoadable").NewsletterTabFlowLoadable;
                            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component initialStep={o("WAWebNewsletterTabFlowStep").NewsletterTabFlowStep.CreateNewsletter} adminFunnelLogger={adminFunnelLogger} onBack={onBack}/>, {
                                disableRotateFocus: true,
                                newDrawerContext: {
                                    type: "quick_action",
                                    quickActionId: "create_channel"
                                }
                            });
                        }
                    });
                });
            }
        },
        {
            id: "find_channels",
            Icon: r("WDSIconIcGrid.react"),
            label: function() {
                return s._("Explore channels");
            },
            onClick: function() {
                r("JSResourceForInteraction")("WAWebOpenNewsletterDirectory").__setRef("WAWebChannelsQuickActions").load().then(({ openNewsletterDirectory })=>{
                    openNewsletterDirectory({
                        tosAcceptCallback: function() {
                            const Component = o("WAWebNewsletterTabFlowLoadable").NewsletterTabFlowLoadable;
                            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component initialStep={o("WAWebNewsletterTabFlowStep").NewsletterTabFlowStep.NewsletterDirectoryFlow} directoryEntryPoint={o("WAWebWamEnumChannelDirectoryEntryPoint").CHANNEL_DIRECTORY_ENTRY_POINT.FIND_CHANNELS_BUTTON} onBack={onBack}/>, {
                                disableRotateFocus: true,
                                newDrawerContext: {
                                    type: "quick_action",
                                    quickActionId: "find_channels"
                                }
                            });
                        }
                    });
                });
            }
        }
    ];
    const d = c;
    function onBack() {
        r("JSResourceForInteraction")("WAWebOpenNewsletterTab").__setRef("WAWebChannelsQuickActions").load().then(({ openNewsletterTab })=>{
            openNewsletterTab();
        });
    }
    l.default = d;
}, 226);