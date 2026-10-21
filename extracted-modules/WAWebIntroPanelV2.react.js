__d("WAWebIntroPanelV2.react", [
    "fbt",
    "WALogger",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBotBaseGating",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebContactLogging",
    "WAWebContactUtils",
    "WAWebDesktopUpsellAnimationDataV2",
    "WAWebDesktopUpsellCommonStrings",
    "WAWebDesktopUpsellPlatformAwareHooks",
    "WAWebDesktopUpsellStoreOpener",
    "WAWebDrawerManager",
    "WAWebEmailInviteGating",
    "WAWebEmailInviteLoggingUtils",
    "WAWebEmptyStateModule.react",
    "WAWebGroupInviteViaEmailModalLoadable.react",
    "WAWebIntroPanelStartCallEmptyState.react",
    "WAWebLottieAnimationLoadable",
    "WAWebMimeTypes",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNativeContactsNuxPopup.react",
    "WAWebNavBarTypes",
    "WAWebNewChatFlowLoadable",
    "WAWebNewChatFlowTypes",
    "WAWebProductFeature",
    "WAWebSelectModal.react",
    "WAWebSendFilesToChats",
    "WAWebServerPropConstants",
    "WAWebVoipCallsTabNavigateTo",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WDSFlex.stylex",
    "WDSIconIcDescription.react",
    "WDSIconIcLock.react",
    "WDSIconIcMail.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconWdsIcLogoMetaAiColor.react",
    "WDSSpinner.react",
    "WDSText.react",
    "gkx",
    "react",
    "stylex",
    "useWAWebExternalBetaOptIn"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = p || (p = o("react"));
    const PSuspense = p.Suspense;
    const G10 = _.lazy(function() {
        return o("WAWebLottieAnimationLoadable").requireBundle().then((e)=>({
                default: e
            }));
    });
    const h = r("WAWebDesktopUpsellAnimationDataV2")();
    const y = {
        boxSizing: "x9f619",
        display: "x78zum5",
        alignItems: "x6s0dn4",
        justifyContent: "xl56j7k",
        flexShrink: "x2lah0s",
        $$css: true
    };
    const C = {
        heroMediaBox: function(t, n) {
            return [
                y,
                {
                    width: t != null ? "x5lhr3w" : t,
                    height: n != null ? "x16ye13r" : n,
                    $$css: true
                },
                {
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t),
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(n)
                }
            ];
        },
        encryptionFooter: {
            color: "xhslqc4",
            $$css: true
        }
    };
    const b = r("gkx")("24693") ? <PSuspense fallback={_.jsx(r("WDSSpinner.react"), {
        size: 50,
        stroke: 4
    })}><G10 loop={false} autoplay data={h}/></PSuspense> : _.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
        loop: false,
        autoplay: true,
        data: h
    });
    const animation = r("gkx")("15714") ? <div {...babelHelpers.extends({
        "data-testid": "intro_panel_hero_media_box"
    }, (m || (m = r("stylex"))).props(C.heroMediaBox(h.w, h.h)), {
        children: b
    })}/> : b;
    function SComponent() {
        const t = !o("WAWebProductFeature").isInternalProduct() && !o("WAWebMobilePlatforms").isSMB() && o("WAWebBotBaseGating").isBotEnabled();
        const isBetaUpsell = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb();
        const a = o("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformCheck();
        const i = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn();
        const isBetaUser = i[0];
        const p = o("WAWebVoipGatingUtils").isWebIntroPanelCallingChangeEnabled();
        function f() {
            o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl({
                ctaSource: o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.INTRO_PANEL,
                isBetaUpsell,
                isBetaUser
            });
        }
        function GComponent(e) {
            e.stopPropagation();
            const n = Array.from(e.target.files ?? []);
            if (n.length) {
                const Component = o("WAWebSelectModal.react").SelectModal;
                o("WAWebModalManager").ModalManager.open(<Component title={s._("Select chats")} listType={o("WAWebSelectModal.react").ListType.ChatSelectModal} excludeAcp2RestrictedChats onConfirm={function({ selectedItems }) {
                    return r("WAWebSendFilesToChats")(selectedItems, n);
                }} maxItems={o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL} tsNavigationData={{
                    surface: "unknown",
                    viewName: "select-chats-intro"
                }}/>);
            }
        }
        function h() {
            if (o("WAWebContactUtils").shouldShowNativeContactsNux()) {
                o("WAWebModalManager").ModalManager.open(_.jsx(r("WAWebNativeContactsNuxPopup.react"), {
                    source: o("WAWebContactLogging").ContactSourceType.NewChat
                }));
                return;
            }
            const Component = o("WAWebNewChatFlowLoadable").NewChatFlowLoadable;
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                descriptorType: "new_chat",
                initialStep: o("WAWebNewChatFlowTypes").NewChatFlowStep.NewContactFlow
            } : <Component initialStep={o("WAWebNewChatFlowTypes").NewChatFlowStep.NewContactFlow} onEnd={o("WAWebDrawerManager").closeDrawerLeft}/>);
        }
        function y() {
            o("WAWebEmailInviteLoggingUtils").logEmailInviteEntryPointClick({
                origin: "intro_panel_email"
            });
            const Component = o("WAWebGroupInviteViaEmailModalLoadable.react").WAWebGroupInviteViaEmailModalLoadable;
            o("WAWebModalManager").ModalManager.open(<Component onClose={o("WAWebModalManager").closeModalManager} origin="intro_panel_email"/>, {
                transition: "modal-flow"
            });
        }
        function b() {
            const MetaAIIntroPanel = o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIIntroPanel;
            const n = o("WAWebBotGating").isAiChatThreadsEnabled();
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebIntroPanelV2] handleAskMetaAIBtnClick threads=",
                ""
            ])), String(n));
            if (n) {
                o("WAWebBotFrontendUtils").getMetaAiChat().then((e)=>{
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebIntroPanelV2] getMetaAiChat+ runMetaAiThreadsFlow"
                    ])));
                    o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(e, {
                        type: "MetaAiIntroPanel"
                    });
                }).catch((e)=>{
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebIntroPanelV2] getMetaAiChat failed"
                    ])));
                });
            } else {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebIntroPanelV2] using legacy openMetaBotChat flow"
                ])));
                o("WAWebBotFrontendUtils").openMetaBotChat(MetaAIIntroPanel);
            }
        }
        function S() {
            o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Calls);
            o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({});
        }
        const R = {
            animation,
            title: s._("Voice and video calling is now available"),
            description: s._("Now you can make and join calls on WhatsApp Web."),
            actionButtonLabel: s._("Go to Calls"),
            actionButtonClickHandler: S,
            actionButtonActionId: "go_to_calls"
        };
        const L = {
            animation,
            title: o("WAWebDesktopUpsellCommonStrings").getDesktopUpsellDownloadWhatsAppTitle(isBetaUpsell),
            description: o("WAWebDesktopUpsellCommonStrings").getDesktopUpsellIntroPanelText(isBetaUpsell),
            actionButtonLabel: o("WAWebDesktopUpsellCommonStrings").getDesktopAppDownloadFromStoreBtnLabel(isBetaUpsell),
            actionButtonClickHandler: f
        };
        let titleCard;
        if (p) {
            titleCard = R;
        } else if (a === true) {
            titleCard = L;
        }
        const baseActions = [
            {
                title: s._("Send document"),
                Icon: r("WDSIconIcDescription.react"),
                filePicker: {
                    mimes: o("WAWebMimeTypes").DOC_MIMES,
                    onChange: GComponent,
                    multiple: true
                },
                testid: "send-document-tile",
                actionId: "send_document"
            },
            {
                title: s._("Add contact"),
                Icon: r("WDSIconIcPersonAdd.react"),
                clickHandler: h,
                testid: "add-contact-tile",
                actionId: "add_contact"
            }
        ].concat(o("WAWebEmailInviteGating").isEmailInviteEntryPointEnabled() ? [
            {
                title: s._("Invite a friend"),
                Icon: r("WDSIconIcMail.react"),
                clickHandler: y,
                testid: "invite-friend-tile"
            }
        ] : []);
        const metaAiTile = t ? {
            title: s._("Ask Meta AI"),
            Icon: r("WDSIconWdsIcLogoMetaAiColor.react"),
            clickHandler: b,
            testid: "meta-ai-tile",
            actionId: "ask_meta_ai"
        } : null;
        const Component = r("WDSText.react");
        const footer = o("WAWebMobilePlatforms").isSMB() ? <div {...babelHelpers.extends({}, (m || (m = r("stylex"))).props(C.encryptionFooter, o("WDSFlex.stylex").wdsFlex.flexCenter, o("WDSFlex.stylex").wdsFlex.gapSingle), {
            "data-testid": "intro-panel-encryption-footer",
            role: "note",
            children: [
                _.jsx(r("WDSIconIcLock.react"), {
                    height: 16,
                    width: 16,
                    testid: "lock-outline"
                }),
                <Component type="Body2" colorName="contentDeemphasized">{s._("Your personal messages are end-to-end encrypted")}</Component>
            ]
        })}/> : null;
        if (p) {
            return _.jsx(r("WAWebIntroPanelStartCallEmptyState.react"), {
                baseActions,
                footer,
                metaAiTile,
                titleCard
            });
        }
        return _.jsx(r("WAWebEmptyStateModule.react"), {
            footer,
            surface: "chats",
            titleCard,
            wdsActions: metaAiTile != null ? [].concat(baseActions, [
                metaAiTile
            ]) : baseActions
        });
    }
    SComponent.displayName = `${SComponent.name} [from ${i.id}]`;
    l.default = SComponent;
}, 226);