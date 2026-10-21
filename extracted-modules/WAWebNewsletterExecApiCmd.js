__d("WAWebNewsletterExecApiCmd", [
    "Promise",
    "WALogger",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterDirectoryFlowLoadable",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterNotAvailableModal.react",
    "WAWebNewsletterTabFlowLoadable",
    "WAWebNewsletterTabFlowStep",
    "WAWebOpenNewsletterCreationFlow",
    "WAWebOpenNewsletterDirectory",
    "WAWebOpenNewsletterPreviewChat",
    "WAWebWamEnumChannelDirectoryEntryPoint",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    function d(t) {
        const r = o("WAWebNewsletterExtendedGatingUtils").getNewsletterDeeplinkGating();
        switch(r){
            case o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating.Enabled:
                switch(t.type){
                    case "view":
                        o("WAWebOpenNewsletterPreviewChat").openNewsletterPreviewChat({
                            identifier: t.identifier,
                            chatEntryPoint: t.chatEntryPoint,
                            serverMessageId: t.serverId,
                            discoverySurface: t.discoverySurface
                        });
                        return (s || (s = n("Promise"))).resolve();
                    case "create":
                        o("WAWebOpenNewsletterCreationFlow").openNewsletterCreationFlow({
                            tosAcceptCallback: function(adminFunnelLogger) {
                                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(o("WAWebNewsletterTabFlowLoadable").NewsletterTabFlowLoadable, {
                                    initialStep: o("WAWebNewsletterTabFlowStep").NewsletterTabFlowStep.CreateNewsletter,
                                    adminFunnelLogger
                                }), {
                                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                                    disableRotateFocus: true
                                });
                            }
                        });
                        return (s || (s = n("Promise"))).resolve();
                    case "directory":
                        o("WAWebOpenNewsletterDirectory").openNewsletterDirectory({
                            tosAcceptCallback: function() {
                                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(o("WAWebNewsletterDirectoryFlowLoadable").NewsletterDirectoryFlowLoadable, {
                                    directoryEntryPoint: o("WAWebWamEnumChannelDirectoryEntryPoint").CHANNEL_DIRECTORY_ENTRY_POINT.DEEP_LINK
                                }), {
                                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                                });
                            }
                        });
                        return (s || (s = n("Promise"))).resolve();
                    default:
                        t.type;
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[execNewsletterApiCmd] Unsupported type ",
                            ""
                        ])), t.type);
                        return (s || (s = n("Promise"))).resolve();
                }
            default:
                m(r);
                return (s || (s = n("Promise"))).resolve();
        }
    }
    function m(gating) {
        o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebNewsletterNotAvailableModal.react"), {
            gating
        }));
    }
    l.execNewsletterApiCmd = d;
}, 98);