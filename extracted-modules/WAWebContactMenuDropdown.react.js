__d("WAWebContactMenuDropdown.react", [
    "fbt",
    "WATimeUtils",
    "WAWebAddContactLabel",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiSmartComposerGating",
    "WAWebBizCatalogGatingUtils",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatContextMenuItemEditLabel.react",
    "WAWebChatContextMenuItemEditList.react",
    "WAWebChatContextMenuItemLock.react",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatThemeGatingUtils",
    "WAWebChatThreadLogging",
    "WAWebCmd",
    "WAWebCommonMsgUtils",
    "WAWebContactCollection",
    "WAWebContactEditUtils",
    "WAWebContactGetters",
    "WAWebContactLogging",
    "WAWebContactManagementGating",
    "WAWebContactUtils",
    "WAWebCopyUtils",
    "WAWebDeleteMenuItem.react",
    "WAWebExportChatMenuItem.react",
    "WAWebFeatureFlagName",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGenAiAgentLogEvents",
    "WAWebInboxFiltersGatingUtils",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebMMUserControlsLogger",
    "WAWebMarketingMessagesFeedbackResumeConfirmationLoadable",
    "WAWebMarketingMessagesFeedbackStopConfirmationLoadable",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebMessageLogQplEvents",
    "WAWebModalManager",
    "WAWebMuteGetters",
    "WAWebMuteMenuItem.react",
    "WAWebMuteUtils",
    "WAWebPreCallUserJourneyLogger",
    "WAWebProtobufsE2E.pb",
    "WAWebReportContactDialogUtils",
    "WAWebSchedulingCallsNotSupportedModal.react",
    "WAWebSendNonMessageDataRequest",
    "WAWebSharableEventGatingUtils",
    "WAWebShowDeleteAiThreadConfirmation",
    "WAWebSpamConstants",
    "WAWebStateUtils",
    "WAWebStreamModel",
    "WAWebSyncGatingUtils",
    "WAWebVoipCallsTabScheduleCallModal.react",
    "WAWebVoipCreateCallLinksPopupLoadable.react",
    "WAWebVoipGatingUtils",
    "WAWebVoipNewGroupCallContactPicker.react",
    "WAWebWamEnumEphemeralSettingEntryPointType",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "WAWebWamEnumMmUserControlsAction",
    "WAWebWamEnumMmUserControlsEntryPoint",
    "WAWebWamEnumMuteEntryPoint",
    "WAWebWamEnumPsaMessageRemoveEntryPoint",
    "WAWebWamEnumSubSurface",
    "WDSIconIcBackHand.react",
    "WDSIconIcBlock.react",
    "WDSIconIcCalendarMonth.react",
    "WDSIconIcCancel.react",
    "WDSIconIcCheckBox.react",
    "WDSIconIcContentCopy.react",
    "WDSIconIcDelete.react",
    "WDSIconIcDoNotDisturbOn.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcInfo.react",
    "WDSIconIcLink.react",
    "WDSIconIcPalette.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconIcSearch.react",
    "WDSIconIcThumbDown.react",
    "WDSIconIcUnfavourite.react",
    "WDSIconWdsIcAiFilled.react",
    "WDSIconWdsIcDisappearingMessages.react",
    "WDSIconWdsIcTransferOwnership.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "cr:17505",
    "cr:17506",
    "cr:23046",
    "gkx",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebForceUpdate",
    "useWAWebGetFeatureFlag",
    "useWAWebListener",
    "useWAWebMuteValues"
], function(t, n, r, o, a, i, l, s) {
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useMemo } = d;
    const _ = n("cr:23046") ?? {};
    const __isWindowsHybridEnabled = _.isWindowsHybridEnabled;
    function g(e) {
        const n = o("react-compiler-runtime").c(3);
        const a = e.testid ?? "remove_favorite_icon";
        let i;
        if (n[0] !== e || n[1] !== a) {
            i = c.jsx(r("WDSIconIcUnfavourite.react"), babelHelpers.extends({}, e, {
                testid: a
            }));
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            i = n[2];
        }
        return i;
    }
    function h(chat, t, n) {
        const chat_id = chat.id;
        return t && n === 1 && !chat_id.isBot() && !chat_id.isAiHub() && !chat_id.isSupportAccount() && !chat_id.isCAPISupportAccount() && chat.canSend && !chat.isSuspendedOrTerminated() && o("WAWebVoipGatingUtils").isCallingEnabled();
    }
    function YComponent(e) {
        "use no forget";
        let t;
        let a;
        let i;
        const { chat, enableChatThreadLogging, onSearchChat, onSelectMessages, threadId } = e;
        const C = o("WAWebBizAiSmartComposerGating").useIsSmartComposerWebUIEnabled();
        const b = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const preCallLogger = useMemo(function() {
            return new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger;
        }, []);
        const S = o("useWAWebChatValues").useChatValues(e.chat.id, [
            (t = o("WAWebChatGetters")).getIsPSA,
            (a = o("WAWebFrontendChatGetters")).getMute,
            t.getId,
            a.getContact,
            a.getPromises,
            t.getIsNewsletter,
            a.getIsParentGroup,
            t.getIsUser,
            t.getTcToken,
            t.getTcTokenTimestamp,
            a.getMsgs,
            a.getIsFavorite,
            t.getChangeNumberNewJid
        ]);
        const R = S[0];
        const L = S[1];
        const E = S[2];
        const k = S[3];
        const I = S[4];
        const T = S[5];
        const D = S[6];
        const x = S[7];
        const $ = S[8];
        const P = S[9];
        const N = S[10];
        const M = S[11];
        const w = S[12];
        const A = o("useWAWebContactValues").useContactValues(chat.contact.id, [
            (i = o("WAWebContactGetters")).getId,
            i.getIsBusiness,
            i.getName,
            o("WAWebFrontendContactGetters").getIsContactBlocked,
            i.getIsMe,
            o("WAWebFrontendContactGetters").getIsMyContact
        ]);
        const F = A[0];
        const O = A[1];
        const B = A[2];
        const W = A[3];
        const q = A[4];
        const U = A[5];
        const V = o("useWAWebMuteValues").useMuteValues(chat.id, [
            o("WAWebMuteGetters").getIsMuted
        ]);
        const isMuted = V[0];
        const G = o("useWAWebContactValues").useContactValues(chat.contact.id, [
            i.getId,
            i.getIsContactOptedOut,
            i.getIsEverOptedOutOfMarketingMessages,
            i.getIsMarketingMessageThread
        ]);
        const z = G[0];
        const j = G[1];
        const isEverOptedOutOfMarketingMessages = G[2];
        const isMarketingMessageThread = G[3];
        const X = o("WAWebMarketingMessagesUserFeedbackGatingUtils").shouldShowUnifiedMMControls({
            id: z,
            isEverOptedOutOfMarketingMessages,
            isMarketingMessageThread
        });
        const Y = o("WAWebMarketingMessagesUserFeedbackGatingUtils").isMMUserControlsEligible({
            id: z,
            isEverOptedOutOfMarketingMessages,
            isMarketingMessageThread
        });
        const J = j;
        const Z = o("useWAWebABPropConfigValue").useABPropConfigValue("ai_learning_clear_chat_disable_empty_chats");
        const ee = o("useWAWebABPropConfigValue").useABPropConfigValue("enable_unified_call_buttons_in_chat");
        const te = o("useWAWebABPropConfigValue").useABPropConfigValue("unified_calling_entry_point_desktop_type");
        o("useWAWebListener").useListener(o("WAWebStreamModel").Stream, [
            "change:info",
            "change:obscurity",
            "change:hasSynced"
        ], b);
        useEffect(function() {
            if (enableChatThreadLogging === true) {
                o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
                    {
                        activityType: "chatOverflowClicks",
                        ts: o("WATimeUtils").unixTime(),
                        chatId: E
                    }
                ]);
            }
        }, [
            enableChatThreadLogging,
            E
        ]);
        const enabled = r("useWAWebGetFeatureFlag")(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT).enabled;
        const re = function() {
            if (Y && o("WAWebMarketingMessagesUserFeedbackGatingUtils").isMMUserControlsLoggingSymmetryEnabled()) {
                o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
                    action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.REPORT,
                    entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
                    isSuccess: true
                });
            }
            o("WAWebReportContactDialogUtils").openReportContactPopup(chat, o("WAWebSpamConstants").SpamFlow.OverflowMenuReport);
        };
        const oe = function() {
            if (Y && o("WAWebMarketingMessagesUserFeedbackGatingUtils").isMMUserControlsLoggingSymmetryEnabled()) {
                o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
                    action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION.BLOCK,
                    entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
                    isSuccess: true
                });
            }
            o("WAWebBlockContactUtils").handleBlock(chat, o("WAWebBlockContants").BlockEntryPoint.OverflowMenuBlock);
        };
        const ae = function() {
            o("WAWebModalManager").ModalManager.open(J ? c.jsx(o("WAWebMarketingMessagesFeedbackResumeConfirmationLoadable").WAWebMarketingMessagesFeedbackResumeConfirmationLoadable, {
                chat: o("WAWebStateUtils").unproxy(chat),
                logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET
            }) : c.jsx(o("WAWebMarketingMessagesFeedbackStopConfirmationLoadable").WAWebMarketingMessagesFeedbackStopConfirmationLoadable, {
                chat: o("WAWebStateUtils").unproxy(chat),
                logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET
            }), {
                transition: "default"
            });
        };
        const ie = function() {
            o("WAWebCmd").Cmd.ephemeralDrawer(o("WAWebStateUtils").unproxy(e.chat), false, o("WAWebWamEnumEphemeralSettingEntryPointType").EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_OVERFLOW);
        };
        const LeComponent = ()=>{
            const t = [];
            if (x && !U && o("WAWebContactUtils").canSaveAsMyContact(chat.contact.id) && o("WAWebContactManagementGating").addContactChatHeaderEnabled()) {
                let a;
                const i = w != null && (a = o("WAWebContactCollection").ContactCollection.get(w)) != null ? a : chat.contact;
                const Component = r("WDSMenuItem.react");
                t.push(<Component key="addContact" Icon={r("WDSIconIcPersonAdd.react")} title={o("WAWebAddContactLabel").getAddToContactsLabel()} onPress={function() {
                    return o("WAWebContactEditUtils").openContactEditDrawer(o("WAWebContactUtils").getContactDataFromContactModel(i), o("WAWebContactLogging").ContactSourceType.ChatHeaderMenu);
                }} testid="mi-add-contact"/>);
                t.push(c.jsx(r("WDSMenuItem.react"), {
                    type: "separator"
                }, "addContactSeparator"));
            }
            const u = s._("AI replies");
            const m = o("WAWebBizAiAgentStatusUtils").canChangeAiReplyStatus(chat) && (!chat.canSend || !C);
            if (m) {
                const Component = r("WDSMenuItem.react");
                t.push(<Component key="aiReplies" Icon={r("WDSIconWdsIcAiFilled.react")} title={u} onPress={function() {
                    o("WAWebGenAiAgentLogEvents").logClickGenAiAgentAiReplies();
                    o("WAWebCmd").Cmd.changeAiReplyStatus(chat, true);
                }} testid="mi-ai-replies"/>);
            }
            const p = s._("Assign chat");
            if (enabled) {
                const Component = r("WDSMenuItem.react");
                t.push(<Component key="assignChat" Icon={r("WDSIconWdsIcTransferOwnership.react")} title={p} onPress={function() {
                    o("WAWebCmd").Cmd.assignChat(chat, o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.CONVERSATION_MENU);
                }} testid="mi-assign-chat"/>);
            }
            const b = m || enabled;
            if (b) {
                t.push(c.jsx(r("WDSMenuItem.react"), {
                    type: "separator"
                }));
            }
            const S = s._("Contact info");
            if (!R) {
                const Component = r("WDSMenuItem.react");
                t.push(<Component key="info" Icon={r("WDSIconIcInfo.react")} title={S} onPress={function() {
                    if (O) {
                        o("WAWebMessageLogQplEvents").qplStartProfileView("ToolsMenu");
                    }
                    o("WAWebCmd").Cmd.chatInfoDrawer(chat);
                }} testid="menu-item-chat-info"/>);
            }
            const k = s._("Business details");
            if (O && o("WAWebBizCatalogGatingUtils").canSeeECommerceComplianceIndiaSoftEnforcement(F)) {
                const Component = r("WDSMenuItem.react");
                t.push(<Component key="merchantDetails" Icon={r("WDSIconIcInfo.react")} title={k} onPress={function() {
                    return o("WAWebCmd").Cmd.merchantDetailsDrawer(F);
                }} testid="merchant-details"/>);
            }
            const I = s._("Search");
            const Component = r("WDSMenuItem.react");
            t.push(<Component key="search" Icon={r("WDSIconIcSearch.react")} title={I} onPress={onSearchChat} testid="mi-search-chat"/>);
            const T = s._("Select messages");
            const Component_1 = r("WDSMenuItem.react");
            t.push(<Component_1 key="select" Icon={r("WDSIconIcCheckBox.react")} title={T} onPress={onSelectMessages} testid="mi-select-messages"/>);
            if (o("WAWebMuteUtils").canMute(L)) {
                const Component = r("WAWebMuteMenuItem.react");
                t.push(<Component key="mute" isMuted={isMuted} onMute={function(t) {
                    o("WAWebCmd").Cmd.muteChatFromEntryPoint(chat, t, o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONVERSATION_SCREEN);
                }} onMuteWithDuration={function(t) {
                    o("WAWebCmd").Cmd.muteChatWithDuration(chat, t, o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONVERSATION_SCREEN);
                }} chat={chat}/>);
            }
            const D = s._("Disappearing messages");
            if (o("WAWebChatEphemerality").shouldShowEphemeralSetting(e.chat)) {
                const Component = r("WDSMenuItem.react");
                t.push(<Component key="disappearingMessages" Icon={r("WDSIconWdsIcDisappearingMessages.react")} title={D} onPress={ie} testid="mi-disappearing-messages"/>);
            }
            if (!E.isBot() && !E.isAiHub()) {
                t.push(c.jsx(r("WAWebChatContextMenuItemLock.react"), {
                    chat
                }, "Lock"));
            }
            if (o("WAWebChatThemeGatingUtils").isChatThemesEnabled()) {
                const $ = s._("Chat theme");
                const Component = r("WDSMenuItem.react");
                t.push(<Component key="chatTheme" Icon={r("WDSIconIcPalette.react")} title={$} onPress={function() {
                    return o("WAWebCmd").Cmd.chatThemeDrawer(chat);
                }} testid="mi-chat-theme"/>);
            }
            if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
                let P;
                let N;
                if (M) {
                    N = o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._("Remove from favourites") : s._("Remove from Favourites");
                    P = g;
                } else {
                    N = o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._("Add to favourites") : s._("Add to favourites");
                    P = r("WDSIconIcFavorite.react");
                }
                const Component = r("WDSMenuItem.react");
                t.push(<Component key="favorite" Icon={P} title={N} onPress={function() {
                    return o("WAWebCmd").Cmd.favoriteChat(chat, !M, o("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT.CHAT_HEADER_CONTEXT_MENU);
                }} testid="mi-favorite"/>);
            }
            if (!E.isBot() && !E.isAiHub()) {
                const onSMBLabelMenuItemClick = function() {
                    o("WAWebChatContextMenuItemEditLabel.react").checkDataSharingOrHandleLabelAction(chat);
                };
                const Component = r("WAWebChatContextMenuItemEditList.react");
                t.push(<Component chat={chat} displayContext="chat-header" onSMBLabelMenuItemClick={onSMBLabelMenuItemClick}/>);
            }
            const B = s._("Copy selection");
            const e_container = e.container;
            if (o("WAWebCopyUtils").canCopySelection() && e_container != null) {
                const Component = r("WDSMenuItem.react");
                t.push(<Component Icon={r("WDSIconIcContentCopy.react")} title={B} onPress={function() {
                    o("WAWebCopyUtils").copySelection(e_container);
                }} testid="mi-copy-selection"/>);
            }
            t.push(c.jsx(r("WAWebExportChatMenuItem.react"), {
                chat
            }, "export"));
            const G = s._("Close chat");
            const Component_2 = r("WDSMenuItem.react");
            t.push(<Component_2 key="close" Icon={r("WDSIconIcCancel.react")} title={G} onPress={function() {
                return o("WAWebCmd").Cmd.closeChat(chat);
            }} testid="mi-close-chat"/>);
            if (h(chat, ee, te)) {
                t.push(c.jsx(r("WDSMenuItem.react"), {
                    type: "separator"
                }));
                const z = s._("Send call link");
                const Component = r("WDSMenuItem.react");
                t.push(<Component key="send-call-link" Icon={r("WDSIconIcLink.react")} title={z} onPress={function() {
                    preCallLogger.clickCreateVideoCallLinkChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU);
                    o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebVoipCreateCallLinksPopupLoadable.react").WAWebVoipCreateCallLinksPopupLoadable, {
                        preCallLogger,
                        targetChat: chat
                    }));
                }} testid="mi-send-call-link"/>);
                if (__isWindowsHybridEnabled?.() === true) {
                    const j = s._("Schedule call");
                    const Component = r("WDSMenuItem.react");
                    t.push(<Component key="schedule-call" Icon={r("WDSIconIcCalendarMonth.react")} title={j} onPress={function() {
                        if (o("WAWebSharableEventGatingUtils").isSharableScheduledCallCreationEnabled(o("WAWebSharableEventGatingUtils").SharableScheduledCallCreationEntryPoint.IndividualChat) && !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled()) {
                            o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebSchedulingCallsNotSupportedModal.react").SchedulingCallsNotSupportedModal, {}));
                        } else {
                            preCallLogger.clickCreateEventChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU);
                            o("WAWebVoipCallsTabScheduleCallModal.react").handleScheduleCallForChat(chat);
                        }
                    }} testid="mi-schedule-call"/>);
                }
                const K = s._("New group call");
                const Component_1 = r("WDSMenuItem.react");
                t.push(<Component_1 key="new-group-call" Icon={r("WDSIconIcPersonAdd.react")} title={K} onPress={function() {
                    preCallLogger.clickAddContact(o("WAWebWamEnumSubSurface").SUB_SURFACE.CALL_DROPDOWN_MENU);
                    o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
                        chat,
                        showCallTypeButtons: true
                    }));
                }} testid="mi-new-group-call"/>);
            }
            t.push(c.jsx(r("WDSMenuItem.react"), {
                type: "separator"
            }));
            const Q = s._("Report");
            if (!q) {
                const Y = X && W;
                if (!R && !E.isBot() && !E.isAiHub() && !Y) {
                    const Component = r("WDSMenuItem.react");
                    t.push(<Component key="report" Icon={r("WDSIconIcThumbDown.react")} title={Q} onPress={re} testid="mi-report" destructive={!X}/>);
                }
                if (X && !W && !E.isBot() && !E.isAiHub()) {
                    const le = s._("Stop offers");
                    const se = s._("Resume offers");
                    const Component = r("WDSMenuItem.react");
                    t.push(<Component key="stop-marketing" Icon={r("WDSIconIcBackHand.react")} title={J ? se : le} onPress={ae} testid="mi-stop-marketing" destructive={false}/>);
                }
                const ue = s._("Unblock");
                const ce = s._("Block");
                if (!E.isBot() && !E.isAiHub()) {
                    const Component = r("WDSMenuItem.react");
                    t.push(<Component key="block" Icon={r("WDSIconIcBlock.react")} title={W ? ue : ce} onPress={W ? function() {
                        return o("WAWebBlockContactUtils").handleUnblock(chat.contact, o("WAWebBlockContants").BlockEntryPoint.OverflowMenuBlock);
                    } : oe} testid={W ? "mi-unblock" : "mi-block"} destructive={!X}/>);
                }
            }
            const de = s._("Clear chat");
            const me = chat.msgs.getModelsArray().some((e)=>!o("WAWebCommonMsgUtils").isNotificationType(e.type, e.subtype));
            if (threadId == null) {
                const Component = r("WDSMenuItem.react");
                t.push(<Component key="clear" Icon={r("WDSIconIcDoNotDisturbOn.react")} title={de} onPress={function() {
                    return o("WAWebCmd").Cmd.clearChat(chat);
                }} testid="mi-clear" destructive disabled={Z && !me}/>);
            }
            if (threadId != null && E.isBot()) {
                const Component = r("WDSMenuItem.react");
                t.push(<Component key="delete" testid="mi-delete-thread" onPress={function() {
                    return o("WAWebShowDeleteAiThreadConfirmation").showDeleteAiThreadConfirmation(E, threadId, true);
                }} Icon={r("WDSIconIcDelete.react")} title={s._("Delete chat")} destructive/>);
            } else {
                const Component = r("WAWebDeleteMenuItem.react");
                t.push(<Component key="delete" onDeleteOrExit={function() {
                    return o("WAWebCmd").Cmd.deleteOrExitChatFromEntryPoint(chat, o("WAWebWamEnumPsaMessageRemoveEntryPoint").PSA_MESSAGE_REMOVE_ENTRY_POINT.DELETE_ALL_FROM_CONVERSATION);
                }} chat={chat}/>);
            }
            if (!r("gkx")("26258")) {
                const Pe = r("nullthrows")(n("cr:17505"));
                const _e = r("nullthrows")(n("cr:17506"));
                const fe = _e.getDEVChatMenuOptions;
                const ge = o("WAWebFrontendChatGetters").getKind(chat);
                t.push(...fe(E, ge));
                if (E.isRegularUserPn()) {
                    t.push(<Pe key="convertToLid" chat={chat}/>);
                }
            }
            return t;
        };
        const Component = r("WDSMenu.react");
        return <Component>{LeComponent()}</Component>;
    }
    YComponent.displayName = `${YComponent.name} [from ${i.id}]`;
    l.default = YComponent;
}, 226);