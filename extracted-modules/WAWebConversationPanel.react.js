__d("WAWebConversationPanel.react", [
    "WAFilteredCatch",
    "WAPromiseRaceAbort",
    "WAWebAnimationGroupItem.react",
    "WAWebAppContext.react",
    "WAWebAttachmentMenuLogger",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiLargeScreensGateModel",
    "WAWebBizAiSmartComposerGating",
    "WAWebBizAiThreadControlFab.react",
    "WAWebBotUtils",
    "WAWebCappingWarningBannerLoadable",
    "WAWebCaptureMediaDrawerLoadable",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebComposeBox.react",
    "WAWebConversationBackground.react",
    "WAWebConversationDeprecatedLidChatBanner.react",
    "WAWebConversationDeprecatedLidChatUtils",
    "WAWebConversationMsgs.react",
    "WAWebConversationMsgsRefContext",
    "WAWebConversationPanelBanner.react",
    "WAWebConversationSpam.react",
    "WAWebConversationSpamUtils",
    "WAWebDrawerManager",
    "WAWebForwardActionUserJourneyLogger",
    "WAWebFrontendChatGetters",
    "WAWebGetUserMediaErrors",
    "WAWebGroupHistoryBundleInfoContextProvider.react",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebGuidePopup.react",
    "WAWebHatchThemedHeaderLoadable",
    "WAWebHeader.react",
    "WAWebHeroInteraction.react",
    "WAWebInteractionTracePolicy",
    "WAWebKeyboardTabUtils",
    "WAWebMediaCapture",
    "WAWebMediaCaptureStreamType",
    "WAWebMetaAiChatNullStateLoadable",
    "WAWebModalManager",
    "WAWebMultiSelectBar.react",
    "WAWebNewsletterSuspendedConversationPanelBody.react",
    "WAWebPrepareMessageSendingAction",
    "WAWebSideNavButtonsActivityModel",
    "WAWebSignupGating",
    "WAWebSignupLoadingSpinner.react",
    "WAWebStateUtils",
    "WAWebTeeChatNotAvailableOnWebBanner.react",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebUimUie.react",
    "WAWebUseMaybeInsertBizBotDisclosure",
    "WAWebUseMaybeRequestWelcomeMessage",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumProductArea",
    "react",
    "react-compiler-runtime",
    "useWAWebAiChatOpenMetrics",
    "useWAWebBotChatOpenMetrics",
    "useWAWebBroadcastThreadOpenMetrics",
    "useWAWebCappingSubscriptionToast.react",
    "useWAWebCappingWarningBanner.react",
    "useWAWebChatOpenMetrics",
    "useWAWebChatThreadCallJourneySession",
    "useWAWebChatThreadWallpaperMetrics",
    "useWAWebChatValues",
    "useWAWebCommunityNux",
    "useWAWebConversationPanelActionListeners",
    "useWAWebConversationPanelCanCompose",
    "useWAWebConversationPanelChatActionListeners",
    "useWAWebConversationPanelDragHandlers",
    "useWAWebConversationPanelEphemeralNux",
    "useWAWebConversationPanelFiller.react",
    "useWAWebConversationPanelMessageSelection",
    "useWAWebConversationPanelMetrics",
    "useWAWebConversationPanelOpenChat",
    "useWAWebDynamicModesCacheWarmup",
    "useWAWebEventTargetValue",
    "useWAWebHatchStickyDateMarkerTop",
    "useWAWebListener",
    "useWAWebMetaAiWaffleTokenWarmup",
    "useWAWebNewsletterOpenMetrics",
    "useWAWebNewsletterPrivacyBanner",
    "useWAWebShouldShowMetaAiNullState",
    "useWAWebShowCommunitySubjectSyncIssue",
    "useWAWebTeeChatNotAvailableOnWebBanner.react",
    "useWAWebUIM",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useEffect, useMemo, useRef, useState } = u;
    function f(e) {
        const a = o("react-compiler-runtime").c(176);
        const { chat, chatEntryPoint, focusCtx, groupMetadata, msgCollection, threadId } = e;
        const CRef = useRef(null);
        let b;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            b = o("WAWebConversationMsgsRefContext").createWAWebVisibleMessageAnchorSourceProxy();
            a[0] = b;
        } else {
            b = a[0];
        }
        const v = b;
        let S;
        if (a[1] === Symbol.for("react.memo_cache_sentinel")) {
            S = function(t) {
                CRef.current = t;
                v.updateSource(t);
            };
            a[1] = S;
        } else {
            S = a[1];
        }
        const R = S;
        const L = useState(false);
        const canShowSpamPanel = L[0];
        const k = L[1];
        let I;
        if (a[2] !== canShowSpamPanel) {
            I = function(t) {
                if (t !== canShowSpamPanel) {
                    k(t);
                }
            };
            a[2] = canShowSpamPanel;
            a[3] = I;
        } else {
            I = a[3];
        }
        const updateCanShowSpamPanel = I;
        let D;
        if (a[4] !== chat) {
            D = o("WAWebConversationDeprecatedLidChatUtils").getLidDeprecatedInfo(chat);
            a[4] = chat;
            a[5] = D;
        } else {
            D = a[5];
        }
        const x = D;
        r("useWAWebShowCommunitySubjectSyncIssue")(chat);
        r("useWAWebConversationPanelOpenChat")(chat);
        r("useWAWebCommunityNux")(chat);
        r("useWAWebConversationPanelEphemeralNux")(chat);
        const $ = o("WAWebChatGetters").getIsNewsletter(chat) ? "channel-thread" : "chat";
        const groupSize = o("WAWebChatGetters").getIsNewsletter(chat) ? chat.newsletterMetadata?.size : chat.groupMetadata?.participants.length;
        const channelWid = o("WAWebChatGetters").getIsNewsletter(chat) ? chat.id : undefined;
        let typeOfGroup;
        if (a[6] !== chat.groupMetadata) {
            typeOfGroup = chat.groupMetadata == null ? undefined : o("WAWebGroupType").groupTypeToWamEnum(o("WAWebGroupMetadataGetters").getGroupType(chat.groupMetadata));
            a[6] = chat.groupMetadata;
            a[7] = typeOfGroup;
        } else {
            typeOfGroup = a[7];
        }
        const navigationDestinationProductArea = o("WAWebBotUtils").isHatchBot(chat.id) ? o("WAWebWamEnumProductArea").PRODUCT_AREA.AI_HATCH : undefined;
        let extras;
        if (a[8] !== groupSize || a[9] !== channelWid || a[10] !== typeOfGroup || a[11] !== navigationDestinationProductArea) {
            extras = {
                groupSize,
                channelWid,
                typeOfGroup,
                navigationDestinationProductArea
            };
            a[8] = groupSize;
            a[9] = channelWid;
            a[10] = typeOfGroup;
            a[11] = navigationDestinationProductArea;
            a[12] = extras;
        } else {
            extras = a[12];
        }
        let F;
        if (a[13] !== $ || a[14] !== extras) {
            F = {
                surface: $,
                extras
            };
            a[13] = $;
            a[14] = extras;
            a[15] = F;
        } else {
            F = a[15];
        }
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation(F);
        let O;
        if (a[16] === Symbol.for("react.memo_cache_sentinel")) {
            O = function() {
                return CRef.current?.getRenderedMessageCount();
            };
            a[16] = O;
        } else {
            O = a[16];
        }
        r("useWAWebConversationPanelMetrics")(chat, O);
        let B;
        if (a[17] !== chat || a[18] !== chatEntryPoint) {
            B = {
                chat,
                chatEntryPoint
            };
            a[17] = chat;
            a[18] = chatEntryPoint;
            a[19] = B;
        } else {
            B = a[19];
        }
        o("useWAWebNewsletterOpenMetrics").useNewsletterOpenMetrics(B);
        let W;
        if (a[20] !== chat || a[21] !== chatEntryPoint) {
            W = {
                chat,
                chatEntryPoint
            };
            a[20] = chat;
            a[21] = chatEntryPoint;
            a[22] = W;
        } else {
            W = a[22];
        }
        o("useWAWebBotChatOpenMetrics").useBotChatOpenMetrics(W);
        let q;
        if (a[23] !== chat || a[24] !== chatEntryPoint) {
            q = {
                chat,
                chatEntryPoint
            };
            a[23] = chat;
            a[24] = chatEntryPoint;
            a[25] = q;
        } else {
            q = a[25];
        }
        o("useWAWebAiChatOpenMetrics").useWAWebAiChatOpenMetrics(q);
        o("useWAWebDynamicModesCacheWarmup").useWAWebDynamicModesCacheWarmup(chat);
        o("useWAWebMetaAiWaffleTokenWarmup").useWAWebMetaAiWaffleTokenWarmup(chat);
        o("useWAWebChatOpenMetrics").useChatOpenMetrics(chat);
        r("useWAWebChatThreadCallJourneySession")(chat);
        o("useWAWebChatThreadWallpaperMetrics").useChatThreadWallpaperMetrics(chat);
        o("useWAWebBroadcastThreadOpenMetrics").useBroadcastThreadOpenMetrics(chat);
        r("useWAWebConversationPanelChatActionListeners")();
        let U;
        if (a[26] === Symbol.for("react.memo_cache_sentinel")) {
            U = [
                o("WAWebChatGetters").getIsReadOnly,
                o("WAWebFrontendChatGetters").getIsAnnounceGrpRestrict,
                o("WAWebFrontendChatGetters").getNewsletterMetadata
            ];
            a[26] = U;
        } else {
            U = a[26];
        }
        o("useWAWebChatValues").useChatValues(chat.id, U);
        const V = r("useWAWebNewsletterPrivacyBanner")(chat);
        const H = o("WAWebBizAiSmartComposerGating").useIsSmartComposerWebUIEnabled();
        const G = r("useWAWebConversationPanelCanCompose")(chat);
        const z = G[0];
        const j = G[1];
        const K = G[2];
        const Q = z || K;
        o("WAWebUseMaybeInsertBizBotDisclosure").useMaybeInsertBizBotDisclosure(chat);
        let X;
        if (a[27] !== z || a[28] !== chat) {
            X = function() {
                return !z && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(chat) && o("WAWebConversationSpamUtils").shouldShowSpamPanel(chat);
            };
            a[27] = z;
            a[28] = chat;
            a[29] = X;
        } else {
            X = a[29];
        }
        const Y = useState(X);
        const J = Y[0];
        const Z = Y[1];
        const ee = r("useWAWebConversationPanelMessageSelection")(chat.msgs);
        const { handleCancelSelection, handleMessageSelect, handleSelectMessages, selectable, selectedMessages, selectionMode } = ee;
        let le;
        if (a[30] !== z || a[31] !== handleCancelSelection || a[32] !== threadId) {
            le = {
                canCompose: z,
                onDragEnter: handleCancelSelection,
                threadId
            };
            a[30] = z;
            a[31] = handleCancelSelection;
            a[32] = threadId;
            a[33] = le;
        } else {
            le = a[33];
        }
        const se = r("useWAWebConversationPanelDragHandlers")(chat, le);
        const ue = se[0];
        const ce = se[1];
        let setScrollBottom;
        let getScrollBottom;
        let onComposeHeightChange;
        if (a[34] === Symbol.for("react.memo_cache_sentinel")) {
            setScrollBottom = function(t) {
                return CRef.current?.setScrollBottom(t);
            };
            getScrollBottom = function() {
                return CRef.current?.getScrollBottom();
            };
            onComposeHeightChange = function(t) {
                return CRef.current?.onComposeHeightChange(t);
            };
            a[34] = setScrollBottom;
            a[35] = getScrollBottom;
            a[36] = onComposeHeightChange;
        } else {
            setScrollBottom = a[34];
            getScrollBottom = a[35];
            onComposeHeightChange = a[36];
        }
        let _e;
        if (a[37] !== Q || a[38] !== selectable) {
            _e = {
                canCompose: Q,
                selectable,
                setScrollBottom,
                getScrollBottom,
                onComposeHeightChange
            };
            a[37] = Q;
            a[38] = selectable;
            a[39] = _e;
        } else {
            _e = a[39];
        }
        const fe = r("useWAWebConversationPanelFiller.react")(_e);
        const { filler, handleComposeHeightChange, msgPanelRef } = fe;
        let Ce;
        if (a[40] === Symbol.for("react.memo_cache_sentinel")) {
            Ce = function() {
                CRef.current?.focus();
            };
            a[40] = Ce;
        } else {
            Ce = a[40];
        }
        const be = Ce;
        const veRef = useRef(null);
        const Se = o("WAWebAppContext.react").useAppContext();
        const Se_rightDrawerOpen = Se.rightDrawerOpen;
        const Le = r("useWAWebUIM")();
        const Ee = r("useWAWebUnmountSignal")();
        let ke;
        let Ie;
        if (a[41] === Symbol.for("react.memo_cache_sentinel")) {
            ke = function() {
                return function() {
                    veRef.current?.();
                    if (o("WAWebSideNavButtonsActivityModel").getLastActiveButton() == null) {
                        o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
                    }
                };
            };
            Ie = [];
            a[41] = ke;
            a[42] = Ie;
        } else {
            ke = a[41];
            Ie = a[42];
        }
        useEffect(ke, Ie);
        let Te;
        if (a[43] === Symbol.for("react.memo_cache_sentinel")) {
            Te = {
                onFocus: be
            };
            a[43] = Te;
        } else {
            Te = a[43];
        }
        r("useWAWebConversationPanelActionListeners")(Te);
        o("WAWebUseMaybeRequestWelcomeMessage").useMaybeRequestWelcomeMessage(chat);
        const stickyDateMarkerTop = r("useWAWebHatchStickyDateMarkerTop")(chat.id);
        const xe = r("useWAWebShouldShowMetaAiNullState")(chat, threadId);
        const showMetaAiNullState = xe[0];
        const Pe = xe[1];
        const Ne = r("useWAWebCappingWarningBanner.react")(chat);
        const Me = Ne[0];
        const we = Ne[1];
        r("useWAWebCappingSubscriptionToast.react")(chat);
        const Ae = r("useWAWebTeeChatNotAvailableOnWebBanner.react")(chat);
        const Fe = Ae[0];
        const Oe = Ae[1];
        let Be;
        if (a[44] === Symbol.for("react.memo_cache_sentinel")) {
            Be = [
                "change:suspended"
            ];
            a[44] = Be;
        } else {
            Be = a[44];
        }
        let We;
        if (a[45] !== chat) {
            We = function() {
                return o("WAWebChatGetters").getIsNewsletter(chat) && chat.newsletterMetadata?.suspended === true;
            };
            a[45] = chat;
            a[46] = We;
        } else {
            We = a[46];
        }
        const qe = r("useWAWebEventTargetValue")(chat.newsletterMetadata, Be, We);
        let Ue;
        if (a[47] === Symbol.for("react.memo_cache_sentinel")) {
            Ue = [
                "change:geosuspended"
            ];
            a[47] = Ue;
        } else {
            Ue = a[47];
        }
        let Ve;
        if (a[48] !== chat) {
            Ve = function() {
                return o("WAWebChatGetters").getIsNewsletter(chat) && chat.newsletterMetadata?.geosuspended === true;
            };
            a[48] = chat;
            a[49] = Ve;
        } else {
            Ve = a[49];
        }
        const isGeosuspended = r("useWAWebEventTargetValue")(chat.newsletterMetadata, Ue, Ve);
        let Ge;
        if (a[50] === Symbol.for("react.memo_cache_sentinel")) {
            Ge = function(t) {
                CRef.current?.onPageUpDown(t);
            };
            a[50] = Ge;
        } else {
            Ge = a[50];
        }
        const onPageUpDown = Ge;
        let je;
        let Ke;
        if (selectable) {
            const selectedMessages_1 = selectedMessages;
            let Xe;
            if (a[51] !== chat || a[52] !== handleCancelSelection || a[53] !== selectionMode || a[54] !== selectedMessages_1) {
                const Component = o("WAWebMultiSelectBar.react").MultiSelectBar;
                Xe = <Component chat={chat} selectedMessages={selectedMessages_1} noSortOnForward={false} onCancel={handleCancelSelection} entryPoint={o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.CONVERSATION_PANEL} mode={selectionMode}/>;
                a[51] = chat;
                a[52] = handleCancelSelection;
                a[53] = selectionMode;
                a[54] = selectedMessages_1;
                a[55] = Xe;
            } else {
                Xe = a[55];
            }
            let Ye;
            if (a[56] !== handleCancelSelection || a[57] !== Xe) {
                const Component = o("WAWebUimUie.react").UIE;
                Ye = <Component displayName="MultiSelect" escapable requestDismiss={handleCancelSelection}>{Xe}</Component>;
                a[56] = handleCancelSelection;
                a[57] = Xe;
                a[58] = Ye;
            } else {
                Ye = a[58];
            }
            Ke = Ye;
            let Je;
            if (a[59] !== Se_rightDrawerOpen) {
                Je = ({
                    0: {
                        className: "x1n2onr6 x1vjfegm x9f619 x1okw0bk xo1ph6p x122xwht"
                    },
                    1: {
                        className: "x1n2onr6 x1vjfegm x9f619 x1okw0bk xo1ph6p x122xwht x1lun4ml x18b5jzi xbogo7e"
                    }
                })[!!Se_rightDrawerOpen << 0];
                a[59] = Se_rightDrawerOpen;
                a[60] = Je;
            } else {
                Je = a[60];
            }
            let Ze;
            if (a[61] !== Je) {
                Ze = <footer {...babelHelpers.extends({}, Je)}/>;
                a[61] = Je;
                a[62] = Ze;
            } else {
                Ze = a[62];
            }
            je = Ze;
        } else if (Q) {
            let et;
            if (a[63] !== canShowSpamPanel || a[64] !== chat || a[65] !== ue || a[66] !== handleComposeHeightChange || a[67] !== threadId) {
                const Component = o("WAWebComposeBox.react").ComposeBox;
                et = <Component chat={chat} threadId={threadId} ref={ue} canShowSpamPanel={canShowSpamPanel} onComposeHeightChange={handleComposeHeightChange} onPageUpDown={onPageUpDown}/>;
                a[63] = canShowSpamPanel;
                a[64] = chat;
                a[65] = ue;
                a[66] = handleComposeHeightChange;
                a[67] = threadId;
                a[68] = et;
            } else {
                et = a[68];
            }
            je = et;
        } else {
            const tt = j ?? V;
            let nt = null;
            if (canShowSpamPanel && J && o("WAWebFrontendChatGetters").getShouldAppearInList(chat) && chat.msgs.length > 0) {
                let onClickNotSpam;
                if (a[69] !== chat) {
                    onClickNotSpam = function() {
                        Z(false);
                        o("WAWebConversationSpamUtils").acknowledgeGroupAsNotSpam(chat);
                    };
                    a[69] = chat;
                    a[70] = onClickNotSpam;
                } else {
                    onClickNotSpam = a[70];
                }
                let onClickDismissSpam;
                if (a[71] === Symbol.for("react.memo_cache_sentinel")) {
                    onClickDismissSpam = function() {
                        return Z(false);
                    };
                    a[71] = onClickDismissSpam;
                } else {
                    onClickDismissSpam = a[71];
                }
                let at;
                if (a[72] !== chat || a[73] !== onClickNotSpam) {
                    const Component = r("WAWebConversationSpam.react");
                    const Component_1 = r("WAWebAnimationGroupItem.react");
                    at = <Component_1><Component chat={chat} onClickNotSpam={onClickNotSpam} onClickDismissSpam={onClickDismissSpam}/></Component_1>;
                    a[72] = chat;
                    a[73] = onClickNotSpam;
                    a[74] = at;
                } else {
                    at = a[74];
                }
                nt = at;
            }
            let it;
            if (a[75] !== tt || a[76] !== Se_rightDrawerOpen || a[77] !== nt) {
                it = tt != null && <footer {...babelHelpers.extends({
                    "data-testid": "compose-box"
                }, {
                    0: {
                        className: "x1n2onr6 x1vjfegm x9f619 x1okw0bk xo1ph6p x122xwht"
                    },
                    1: {
                        className: "x1n2onr6 x1vjfegm x9f619 x1okw0bk xo1ph6p x122xwht x1lun4ml x18b5jzi xbogo7e"
                    }
                }[!!Se_rightDrawerOpen << 0], {
                    children: [
                        nt,
                        <div data-testid="block-message" className="x9f619 x78zum5 x6s0dn4 xl56j7k x122xwht x1f6kntn x1fc57z9 xhslqc4 x2b8uid x1h3rtpe xyinxu5 x1g2khh7 xwn43p0 x1x5flf6">{tt}</div>
                    ]
                })}/>;
                a[75] = tt;
                a[76] = Se_rightDrawerOpen;
                a[77] = nt;
                a[78] = it;
            } else {
                it = a[78];
            }
            je = it;
        }
        let lt;
        if (!Q) {
            let handleFocus;
            if (a[79] === Symbol.for("react.memo_cache_sentinel")) {
                handleFocus = function() {
                    CRef?.current?.focus();
                };
                a[79] = handleFocus;
            } else {
                handleFocus = a[79];
            }
            let ut;
            if (a[80] !== chat) {
                ut = s.jsx(o("WAWebComposeBox.react").PlaceholderComposeBox, {
                    chat,
                    handleFocus
                });
                a[80] = chat;
                a[81] = ut;
            } else {
                ut = a[81];
            }
            lt = ut;
        }
        let ct;
        if (a[82] !== chat || a[83] !== threadId || a[84] !== Le || a[85] !== Ee) {
            ct = function({ onMenuComplete, questionReplyQuotedMessage, questionType, threadId: threadId_1 }) {
                const u = o("WAWebMediaCapture").start({
                    type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA,
                    featureSurface: o("WAWebGuidePopup.react").FeatureSurface.PHOTO_CAPTURE
                });
                const { asyncStream, disposeStream } = u;
                veRef.current = disposeStream;
                r("WAPromiseRaceAbort")(asyncStream, Ee).then((stream)=>{
                    if (stream) {
                        o("WAWebCmd").Cmd.closeContextMenu();
                        o("WAWebCmd").Cmd.closeTooltip();
                        o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
                        o("WAWebModalManager").ModalManager.close();
                        const Component = o("WAWebCaptureMediaDrawerLoadable").CaptureMediaDrawerLoadable;
                        o("WAWebDrawerManager").DrawerManager.openDrawerMid(<Component chat={o("WAWebStateUtils").unproxy(chat)} stream={stream} disposeStream={veRef.current} onCaptureSent={function() {
                            onMenuComplete(true);
                            o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CAMERA);
                        }} onCancel={function() {
                            o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CAMERA);
                        }} onClose={y} questionType={questionType} questionReplyQuotedMessage={questionReplyQuotedMessage} threadId={threadId_1 ?? threadId}/>, {
                            transition: "slide-up",
                            uim: Le,
                            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                        });
                    }
                }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").NotAllowedError, h)).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").GetUserMediaError, g)).finally(()=>{
                    o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(chat);
                });
            };
            a[82] = chat;
            a[83] = threadId;
            a[84] = Le;
            a[85] = Ee;
            a[86] = ct;
        } else {
            ct = a[86];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_capture_media", ct);
        let mt;
        if (a[87] !== x.isLidDeprecated || a[88] !== x.latestLid) {
            mt = x.isLidDeprecated ? s.jsx(r("WAWebConversationDeprecatedLidChatBanner.react"), {
                latestLid: x.latestLid
            }, "deprecated-lid") : null;
            a[87] = x.isLidDeprecated;
            a[88] = x.latestLid;
            a[89] = mt;
        } else {
            mt = a[89];
        }
        const pt = mt;
        let _t;
        if (a[90] !== handleSelectMessages) {
            _t = function() {
                o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.selectTappedInContextMenu();
                handleSelectMessages();
            };
            a[90] = handleSelectMessages;
            a[91] = _t;
        } else {
            _t = a[91];
        }
        const ft = _t;
        let gt;
        if (a[92] !== handleSelectMessages) {
            gt = function() {
                o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.selectTappedInMoreMenu();
                handleSelectMessages();
            };
            a[92] = handleSelectMessages;
            a[93] = gt;
        } else {
            gt = a[93];
        }
        const ht = gt;
        let yt;
        if (a[94] !== chat) {
            yt = o("WAWebSignupGating").isSignupAGMEnabled() ? s.jsx(r("WAWebSignupLoadingSpinner.react"), {
                chat
            }, "signup-loading") : null;
            a[94] = chat;
            a[95] = yt;
        } else {
            yt = a[95];
        }
        let Ct;
        if (a[96] !== pt || a[97] !== yt) {
            Ct = [
                pt,
                yt
            ];
            a[96] = pt;
            a[97] = yt;
            a[98] = Ct;
        } else {
            Ct = a[98];
        }
        const bottomBanners = Ct;
        const { notifyChatRendered, updateOpenedChatInfo } = e;
        let topInset;
        if (a[99] !== chat.id) {
            topInset = o("WAWebHatchThemedHeaderLoadable").getHatchThemedHeaderInset(chat.id);
            a[99] = chat.id;
            a[100] = topInset;
        } else {
            topInset = a[100];
        }
        let Lt;
        if (a[101] !== chat || a[102] !== bottomBanners || a[103] !== focusCtx || a[104] !== updateCanShowSpamPanel || a[105] !== handleCancelSelection || a[106] !== handleMessageSelect || a[107] !== ft || a[108] !== msgCollection || a[109] !== e.notifyChatRendered || a[110] !== e.updateOpenedChatInfo || a[111] !== selectable || a[112] !== selectedMessages || a[113] !== stickyDateMarkerTop || a[114] !== topInset || a[115] !== threadId) {
            Lt = {
                ref: R,
                chat,
                selectable,
                onMessageSelect: handleMessageSelect,
                onCancelSelectMessages: handleCancelSelection,
                msgCollection,
                onSelectMessages: ft,
                focusCtx,
                threadId,
                selectedMessages,
                notifyChatRendered,
                updateOpenedChatInfo,
                updateCanShowSpamPanel,
                bottomBanners,
                topInset,
                stickyDateMarkerTop
            };
            a[101] = chat;
            a[102] = bottomBanners;
            a[103] = focusCtx;
            a[104] = updateCanShowSpamPanel;
            a[105] = handleCancelSelection;
            a[106] = handleMessageSelect;
            a[107] = ft;
            a[108] = msgCollection;
            a[109] = e.notifyChatRendered;
            a[110] = e.updateOpenedChatInfo;
            a[111] = selectable;
            a[112] = selectedMessages;
            a[113] = stickyDateMarkerTop;
            a[114] = topInset;
            a[115] = threadId;
            a[116] = Lt;
        } else {
            Lt = a[116];
        }
        const Et = Lt;
        let kt;
        if (a[117] !== Et) {
            const Component = r("WAWebHeroInteraction.react");
            kt = <Component description="ConversationMsgs" enableHoldTrigger policy={r("WAWebInteractionTracePolicy").LOAD_MESSAGES}>{function(t, interaction) {
                return <div ref={t} className="x5yr21d">{s.jsx(r("WAWebConversationMsgs.react"), babelHelpers.extends({}, Et, {
                    interaction
                }))}</div>;
            }}</Component>;
            a[117] = Et;
            a[118] = kt;
        } else {
            kt = a[118];
        }
        const It = kt;
        let Tt;
        if (a[119] !== chat.newsletterMetadata || a[120] !== It || a[121] !== isGeosuspended || a[122] !== qe) {
            Tt = qe ? s.jsx(r("WAWebNewsletterSuspendedConversationPanelBody.react"), {
                isGeosuspended,
                isAdminOrOwner: (chat.newsletterMetadata?.iAmOwner() ?? false) || (chat.newsletterMetadata?.iAmAdmin() ?? false)
            }) : It;
            a[119] = chat.newsletterMetadata;
            a[120] = It;
            a[121] = isGeosuspended;
            a[122] = qe;
            a[123] = Tt;
        } else {
            Tt = a[123];
        }
        const Nt = Tt;
        let Mt;
        if (a[124] !== z || a[125] !== chat || a[126] !== H) {
            Mt = z && o("WAWebBizAiAgentStatusUtils").canChangeAiReplyStatus(chat) && !o("WAWebBizAiAgentStatusUtils").shouldShowAiAgentBlockBar(chat) && o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled() && !H;
            a[124] = z;
            a[125] = chat;
            a[126] = H;
            a[127] = Mt;
        } else {
            Mt = a[127];
        }
        const wt = Mt;
        const v_source = v.source;
        let Ft;
        if (a[128] !== e.showDoodle || a[129] !== e.wallpaper) {
            Ft = s.jsx(r("WAWebConversationBackground.react"), {
                wallpaper: e.wallpaper,
                showDoodle: e.showDoodle
            });
            a[128] = e.showDoodle;
            a[129] = e.wallpaper;
            a[130] = Ft;
        } else {
            Ft = a[130];
        }
        let Ot;
        if (a[131] !== chat || a[132] !== Pe || a[133] !== ht || a[134] !== selectable || a[135] !== showMetaAiNullState || a[136] !== threadId) {
            const Component = o("WAWebHeader.react").ConversationHeaderWithErrorBoundary;
            Ot = <Component chat={chat} onDismissMetaAiNullState={Pe} onSelectMessages={ht} selectable={selectable} showMetaAiNullState={showMetaAiNullState} threadId={threadId}/>;
            a[131] = chat;
            a[132] = Pe;
            a[133] = ht;
            a[134] = selectable;
            a[135] = showMetaAiNullState;
            a[136] = threadId;
            a[137] = Ot;
        } else {
            Ot = a[137];
        }
        let Bt;
        if (a[138] !== chat || a[139] !== groupMetadata) {
            Bt = s.jsx(r("WAWebConversationPanelBanner.react"), {
                chat,
                groupMetadata
            });
            a[138] = chat;
            a[139] = groupMetadata;
            a[140] = Bt;
        } else {
            Bt = a[140];
        }
        let Wt;
        if (a[141] === Symbol.for("react.memo_cache_sentinel")) {
            Wt = "x1n2onr6 x1vjfegm x1cqoux5 x14yy4lh";
            a[141] = Wt;
        } else {
            Wt = a[141];
        }
        let qt;
        if (a[142] !== chat || a[143] !== Nt || a[144] !== Pe || a[145] !== showMetaAiNullState || a[146] !== threadId) {
            const Component = o("WAWebMetaAiChatNullStateLoadable").WAWebMetaAiChatNullStateLoadable;
            qt = showMetaAiNullState ? <Component chat={chat} onDismiss={Pe} threadId={threadId}/> : Nt;
            a[142] = chat;
            a[143] = Nt;
            a[144] = Pe;
            a[145] = showMetaAiNullState;
            a[146] = threadId;
            a[147] = qt;
        } else {
            qt = a[147];
        }
        let Ut;
        if (a[148] !== ce || a[149] !== msgPanelRef || a[150] !== qt) {
            Ut = <div {...babelHelpers.extends({
                className: Wt,
                ref: msgPanelRef
            }, ce, {
                "data-testid": "conversation-panel-body",
                children: qt
            })}/>;
            a[148] = ce;
            a[149] = msgPanelRef;
            a[150] = qt;
            a[151] = Ut;
        } else {
            Ut = a[151];
        }
        let Vt;
        if (a[152] !== chat || a[153] !== wt) {
            Vt = wt && s.jsx(o("WAWebBizAiThreadControlFab.react").WAWebBizAiThreadControlFab, {
                chat
            });
            a[152] = chat;
            a[153] = wt;
            a[154] = Vt;
        } else {
            Vt = a[154];
        }
        let Ht;
        if (a[155] !== we || a[156] !== Me) {
            const Component = o("WAWebCappingWarningBannerLoadable").CappingWarningBannerLoadable;
            Ht = Me && <div className="xo1ph6p x2lah0s"><Component onClose={we}/></div>;
            a[155] = we;
            a[156] = Me;
            a[157] = Ht;
        } else {
            Ht = a[157];
        }
        let Gt;
        if (a[158] !== Oe || a[159] !== Fe) {
            const Component = r("WAWebTeeChatNotAvailableOnWebBanner.react");
            Gt = Fe && <div className="xo1ph6p x2lah0s"><Component onDismiss={Oe}/></div>;
            a[158] = Oe;
            a[159] = Fe;
            a[160] = Gt;
        } else {
            Gt = a[160];
        }
        let zt;
        if (a[161] !== Ke) {
            const Component = r("WAWebVelocityTransitionGroup");
            zt = <Component transitionName="slide-up">{Ke}</Component>;
            a[161] = Ke;
            a[162] = zt;
        } else {
            zt = a[162];
        }
        let jt;
        if (a[163] !== je || a[164] !== filler || a[165] !== lt || a[166] !== e.overlay || a[167] !== Ft || a[168] !== Ot || a[169] !== Bt || a[170] !== Ut || a[171] !== Vt || a[172] !== Ht || a[173] !== Gt || a[174] !== zt) {
            const Component = r("WAWebGroupHistoryBundleInfoContextProvider.react");
            const Component_1 = o("WAWebConversationMsgsRefContext").WAWebConversationMsgsRefContext.Provider;
            jt = <Component_1 value={v_source}><Component>{Ft}{Ot}{Bt}{Ut}{filler}{Vt}{Ht}{Gt}{je}{lt}{zt}{e.overlay}</Component></Component_1>;
            a[163] = je;
            a[164] = filler;
            a[165] = lt;
            a[166] = e.overlay;
            a[167] = Ft;
            a[168] = Ot;
            a[169] = Bt;
            a[170] = Ut;
            a[171] = Vt;
            a[172] = Ht;
            a[173] = Gt;
            a[174] = zt;
            a[175] = jt;
        } else {
            jt = a[175];
        }
        return jt;
    }
    function g() {
        let e;
        o("WAWebModalManager").ModalManager.open(s.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
            messaging: e.Messaging.CAMERA_MISSING,
            type: e.GuidePopupType.GUIDE_NONE,
            featureSurface: e.FeatureSurface.PHOTO_CAPTURE
        }));
    }
    function h() {
        let e;
        o("WAWebModalManager").ModalManager.open(s.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
            messaging: e.Messaging.CAMERA_FAIL,
            type: e.GuidePopupType.GUIDE_UNBLOCK,
            featureSurface: e.FeatureSurface.PHOTO_CAPTURE
        }));
    }
    function y() {
        return o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
    }
    l.default = f;
}, 98);