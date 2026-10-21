__d("WAWebConversation.react", [
    "JSResourceForInteraction",
    "WAPromiseDelays",
    "WAWebAppContext.react",
    "WAWebBizAiLargeScreensGateModel",
    "WAWebBizAiMessageEditDiscoveryTooltipHostLoadable.react",
    "WAWebBizAiMessageEditPostEditHintProvider.react",
    "WAWebBotBaseGating",
    "WAWebBusinessProfileCollection",
    "WAWebCAPIGroupAboutModal.react",
    "WAWebChatGetters",
    "WAWebChatLockWAMUtils",
    "WAWebChatPreferenceCollection",
    "WAWebChatThemeEvents",
    "WAWebCmd",
    "WAWebConversationPanelWrapper.react",
    "WAWebDataSharing3pdLidCollection",
    "WAWebDesktopUpsellEvents",
    "WAWebDrawerManagerContext",
    "WAWebGetChatLockEntryPoint",
    "WAWebIntroPanelV2.react",
    "WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction",
    "WAWebMetaAILandingLoadable",
    "WAWebMidDrawerEmptyState.react",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNavBarTypes",
    "WAWebNux",
    "WAWebQueryGroupActionMaybeQueryGroupDevice",
    "WAWebStreamModel",
    "WAWebWamEnumLandingSurface",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
    "asyncToGeneratorRuntime",
    "cr:11804",
    "cr:12474",
    "react",
    "useWAWebChatLockRestriction",
    "useWAWebCmdChatEvents",
    "useWAWebEventTargetValue",
    "useWAWebListener",
    "useWAWebNux"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { memo, useCallback, useEffect, useImperativeHandle, useRef, useState } = u;
    const g = r("JSResourceForInteraction")("WAWebSmbDataSharingOptInModalDialog").__setRef("WAWebConversation.react");
    function h({ ref }) {
        const iRef = useRef();
        const l = o("useWAWebCmdChatEvents").useCmdChatEvents();
        const { chat, chatEntryPointRef, focusContext, msgCollection, notifyChatRenderedRef, threadId, updateOpenedChatInfoRef } = l;
        const S = o("WAWebAppContext.react").useAppContext();
        const S_activeNavBarItem = S.activeNavBarItem;
        const L = r("useWAWebEventTargetValue")([
            o("WAWebBizAiLargeScreensGateModel").BizAiLargeScreensGateEventBus,
            o("WAWebCmd").Cmd
        ], [
            "updated",
            "on_ab_props_update_from_bridge"
        ], o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled);
        const E = o("WAWebDrawerManagerContext").useMiddleDrawerManagerContext()?.drawer != null;
        const notifyChatRendered = useCallback(function(e) {
            return notifyChatRenderedRef.current(e);
        }, [
            notifyChatRenderedRef
        ]);
        const updateOpenedChatInfo = useCallback(function(e) {
            return updateOpenedChatInfoRef.current(e);
        }, [
            updateOpenedChatInfoRef
        ]);
        const T = useState(null);
        const showPreview = T[0];
        const x = T[1];
        o("useWAWebChatLockRestriction").useChatLockRestriction({
            id: chat != null ? `locked-thread-${chat.id.toString()}` : "chat-homescreen",
            condition: chat ?? "bypass",
            entryPoint: o("WAWebGetChatLockEntryPoint").getChatLockEntryPoint(chatEntryPointRef.current),
            landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.THREAD,
            unlockEntryPoint: o("WAWebChatLockWAMUtils").actionEntryPointToUnlockEntryPoint(o("WAWebGetChatLockEntryPoint").getChatLockEntryPoint(chatEntryPointRef.current))
        });
        useImperativeHandle(ref, function() {
            return {
                containsDOMNode: function(t) {
                    if (iRef.current) {
                        return iRef.current.containsDOMNode(t);
                    }
                    return false;
                }
            };
        });
        const $ = function() {
            o("WAWebStreamModel").Stream.markUnavailable(15 * 1000);
        };
        const P = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAPromiseDelays").delayMs(500);
                if (!(window.document && !document.hasFocus())) {
                    o("WAWebStreamModel").Stream.markAvailable();
                    if (chat != null && (o("WAWebChatGetters").getIsUser(chat) || o("WAWebChatGetters").getIsGroup(chat))) {
                        chat.presence.subscribe();
                    }
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        o("useWAWebListener").useListener(window, "focus", P);
        o("useWAWebListener").useListener(window, "blur", $);
        o("useWAWebListener").useListener(r("WAWebChatPreferenceCollection"), "wallpaper_drawer_open", function() {
            x("wallpaper");
        });
        o("useWAWebListener").useListener(r("WAWebChatPreferenceCollection"), "wallpaper_drawer_close", function() {
            x(null);
        });
        o("WAWebChatThemeEvents").useChatThemeDrawerOpenListener(function(e) {
            if (e.isGlobal) {
                x("theme");
            }
        });
        o("WAWebChatThemeEvents").useChatThemeDrawerCloseListener(function(e) {
            if (e.isGlobal) {
                x(null);
            }
        });
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_chat", function({ chat }) {
            if (n("cr:11804") != null) {
                n("cr:11804").maybePreloadWebTPIframeForPDFs(chat, {
                    source: "chatOpen"
                });
            }
            if (o("WAWebMobilePlatforms").isSMB()) {
                g.load().then((e)=>{
                    e.maybeShowChatEntryDataSharingDialog(chat, function() {
                        if (chat.accountLid != null) {
                            const accountLid = chat.accountLid.toString();
                            o("WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction").maybeGeneratePerCustomerDataSharingSystemMessage({
                                accountLid,
                                perCustomerDataSharingState: o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(accountLid),
                                entryPoint: o("WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.THREAD_ENTRY,
                                globalDataSharingEntryPoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.CTWA_CHAT
                            });
                        }
                    }, o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.CTWA_CHAT);
                });
            }
        });
        const N = r("useWAWebNux")(o("WAWebNux").NUX.CAPI_GROUP_ABOUT_MODAL);
        const M = N[0];
        const w = N[1];
        useEffect(function() {
            if (chat) {
                if (chat.contact.isBusiness && !chat.id.isBot()) {
                    o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(chat.id);
                }
                if (chat.groupMetadata) {
                    o("WAWebQueryGroupActionMaybeQueryGroupDevice").maybeQueryGroupDevice(chat.groupMetadata);
                }
            }
        }, [
            chat
        ]);
        useEffect(function() {
            if (chat?.groupMetadata?.hasCapi === true && M) {
                o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebCAPIGroupAboutModal.react").CAPIGroupAboutModal, {}));
                w();
            }
        }, [
            chat,
            M,
            w
        ]);
        const A = chat && msgCollection || showPreview != null;
        useEffect(function() {
            o("WAWebDesktopUpsellEvents").WAWebDesktopUpsellEvents.trigger("conversation_panel_ui_change", {
                conversationPanelVisible: !!A
            });
        }, [
            A
        ]);
        useEffect(function() {
            if (n("cr:12474") != null) {
                n("cr:12474").restoreRefreshState();
            }
        }, []);
        const F = o("WAWebBotBaseGating").isMetaAIHomeDefaultLandingEnabled() ? s.jsx(o("WAWebMetaAILandingLoadable").WAWebMetaAILandingLoadable, {}) : s.jsx(r("WAWebIntroPanelV2.react"), {});
        const O = E ? null : s.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
            type: S_activeNavBarItem
        });
        const B = S_activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.Chats ? F : O;
        const W = {
            chat,
            chatEntryPoint: chatEntryPointRef.current,
            chatPreference: r("WAWebChatPreferenceCollection").assertGet("defaultPreference"),
            focusCtx: focusContext,
            msgCollection,
            threadId,
            notifyChatRendered,
            updateOpenedChatInfo,
            showPreview,
            overlay: chat != null && msgCollection != null && L ? s.jsx(r("WAWebBizAiMessageEditDiscoveryTooltipHostLoadable.react"), {
                chat,
                isSuppressed: showPreview != null
            }, chat.id.toString()) : null
        };
        const q = chat == null ? undefined : chat.id.toString();
        const Component = r("WAWebBizAiMessageEditPostEditHintProvider.react");
        const U = <Component isEnabled={L}>{s.createElement(r("WAWebConversationPanelWrapper.react"), babelHelpers.extends({}, W, {
            key: q,
            ref: iRef
        }))}</Component>;
        if (A) {
            return U;
        }
        return B;
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    const y = memo(h);
    l.WAWebConversation = y;
}, 98);