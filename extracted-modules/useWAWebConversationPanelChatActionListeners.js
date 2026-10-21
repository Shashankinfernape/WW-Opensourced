__d("useWAWebConversationPanelChatActionListeners", [
    "fbt",
    "WALogger",
    "WAWebAcp2Drawer.react",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAttachMediaCollection",
    "WAWebAttachMediaFlowLoadable",
    "WAWebBizCtwaPreviewFlowLoadable",
    "WAWebBotBaseGating",
    "WAWebChatFlowTypes",
    "WAWebChatGetters",
    "WAWebChatSearchDrawerLoadable",
    "WAWebChatThemeDrawerLoadable",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactMsgInfoFlowLoadable",
    "WAWebDefaultEphemeralityDrawerLoadable",
    "WAWebDrawerManager",
    "WAWebDrawerManagerContext",
    "WAWebEphemeralDrawerLoadable",
    "WAWebErrorBoundary.react",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGalaxyFlowQPLLoggerUtils",
    "WAWebGalaxyFlowsLoadable.react",
    "WAWebGroupMsgInfoFlowLoadable",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebKeyboardTabUtils",
    "WAWebLimitSharingDrawer.react",
    "WAWebMediaMissingModal.react",
    "WAWebMediaViewerFlowLoadable",
    "WAWebMerchantDetailsDrawerLoadable",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebRichTextInputConst",
    "WAWebSendStickerToActiveChatStickersAction",
    "WAWebStickerStoreFlowLoadable",
    "WAWebStreamGetters",
    "WAWebStreamModel",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVerificationDrawerLoadable",
    "WAWebWamEnumDisappearingModeEntryPointType",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWamEnumProfileEntryPoint",
    "WAWebWidFactory",
    "getErrorSafe",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    function p() {
        const t = o("react-compiler-runtime").c(35);
        const n = r("useWAWebUIM")();
        const a = o("WAWebDrawerManagerContext").useDrawerManagerContext("right");
        const i = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid");
        let l;
        if (t[0] !== n) {
            l = function(t, showFullGroupDescription, scrollToParticipantList, sourceGroupChatOrNewsletter, focusNewsletterDescriptionOnMount, focusGroupSubjectOnMount, focusGroupDescriptionOnMount, c) {
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                    descriptorType: "info_flow",
                    chat: t,
                    showFullGroupDescription,
                    scrollToParticipantList,
                    profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CHAT_MENU,
                    sourceGroupChatOrNewsletter,
                    focusNewsletterDescriptionOnMount,
                    focusGroupSubjectOnMount,
                    focusGroupDescriptionOnMount,
                    threadId: c
                } : m.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                    chat: t,
                    showFullGroupDescription,
                    scrollToParticipantList,
                    profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CHAT_MENU,
                    sourceGroupChatOrNewsletter,
                    focusNewsletterDescriptionOnMount,
                    focusGroupSubjectOnMount,
                    focusGroupDescriptionOnMount,
                    threadId: c
                }, `info-${t.id.toString()}`), {
                    transition: "slide-left",
                    uim: n,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    noFocus: true
                });
            };
            t[0] = n;
            t[1] = l;
        } else {
            l = t[1];
        }
        const u = l;
        let c;
        if (t[2] !== n) {
            c = function(t) {
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                    descriptorType: "info_flow",
                    chat: t,
                    initialStep: o("WAWebInfoFlowStep").InfoFlowStep.DeleteNewsletter
                } : m.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                    chat: t,
                    initialStep: o("WAWebInfoFlowStep").InfoFlowStep.DeleteNewsletter
                }, `delete-newsletter-${t.id.toString()}`), {
                    transition: "slide-left",
                    uim: n,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    noFocus: true
                });
            };
            t[2] = n;
            t[3] = c;
        } else {
            c = t[3];
        }
        const d = c;
        let p;
        if (t[4] !== n) {
            p = function({ lid, wid }) {
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                    descriptorType: "verification",
                    lid,
                    contact: o("WAWebContactCollection").ContactCollection.assertGet(wid),
                    isFirstLevel: true
                } : m.jsx(r("WAWebVerificationDrawerLoadable").VerificationDrawerLoadable, {
                    lid,
                    contact: o("WAWebContactCollection").ContactCollection.assertGet(wid),
                    isFirstLevel: true
                }), {
                    transition: "slide-left",
                    uim: n,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
            t[4] = n;
            t[5] = p;
        } else {
            p = t[5];
        }
        const S = p;
        let R;
        if (t[6] !== n) {
            R = function(t) {
                if (o("WAWebStreamGetters").getDisplayInfo(o("WAWebStreamModel").Stream) === o("WAWebStreamModel").StreamInfo.NORMAL) {
                    let e;
                    if (o("WAWebBotBaseGating").isBotEnabled() && (e = t.invokedBotWid) != null && e.isBot()) {
                        o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                            descriptorType: "group_msg_info",
                            msg: t
                        } : m.jsx(o("WAWebGroupMsgInfoFlowLoadable").GroupMsgInfoFlowLoadable, {
                            msg: t
                        }), {
                            transition: "slide-left",
                            uim: n
                        });
                    } else if (o("WAWebFrontendChatGetters").getKind(o("WAWebFrontendMsgGetters").getChat(t)) === o("WAWebChatFlowTypes").ChatKindType.Chat) {
                        o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                            descriptorType: "contact_msg_info",
                            msg: t
                        } : m.jsx(o("WAWebContactMsgInfoFlowLoadable").ContactMsgInfoFlowLoadable, {
                            msg: t
                        }), {
                            transition: "slide-left",
                            uim: n
                        });
                    } else {
                        o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                            descriptorType: "group_msg_info",
                            msg: t
                        } : m.jsx(o("WAWebGroupMsgInfoFlowLoadable").GroupMsgInfoFlowLoadable, {
                            msg: t
                        }), {
                            transition: "slide-left",
                            uim: n
                        });
                    }
                } else {
                    o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("Couldn't display message info. Try again later."),
                        id: o("WAWebToast.react").genId("msg_info_failed")
                    }));
                }
            };
            t[6] = n;
            t[7] = R;
        } else {
            R = t[7];
        }
        const L = R;
        let E;
        if (t[8] !== n) {
            E = function(t, r, onEnterAnimationComplete) {
                const Component = o("WAWebBizCtwaPreviewFlowLoadable").CtWAAdPreviewFlowLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component msg={t} onClose={r}/>, {
                    transition: "slide-left",
                    uim: n,
                    onEnterAnimationComplete
                });
            };
            t[8] = n;
            t[9] = E;
        } else {
            E = t[9];
        }
        const k = E;
        let I;
        if (t[10] !== a || t[11] !== n) {
            I = function(t, messageData, i, l) {
                const hasClearedActiveQPLMarker = a.existsDrawer() ?? false;
                if (hasClearedActiveQPLMarker) {
                    o("WAWebGalaxyFlowQPLLoggerUtils").clearAllActiveWaeQPLMarkerInstances();
                }
                const Component = o("WAWebGalaxyFlowsLoadable.react").WAWebGalaxyFlowsLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component chat={t} messageData={messageData} msg={i} hasClearedActiveQPLMarker={hasClearedActiveQPLMarker} onCancel={function() {
                    l();
                    o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
                }}/>, {
                    transition: "flow-transition-drawer-push",
                    uim: n
                });
            };
            t[10] = a;
            t[11] = n;
            t[12] = I;
        } else {
            I = t[12];
        }
        const T = I;
        let D;
        if (t[13] !== i || t[14] !== n) {
            D = function({ animationName, attachments, chat, fileOrigin, initCaption, isQuestion, onCancel, onComplete, onSend, openTrigger, questionReplyQuotedMessage, sendAsSticker, threadId }) {
                const onRender = function() {
                    const chat_attachMediaContents = chat.attachMediaContents;
                    if (chat_attachMediaContents && attachments) {
                        if (fileOrigin) {
                            chat_attachMediaContents.processAttachmentsForChat(attachments, fileOrigin, chat).catch(v);
                        } else {
                            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "ChatActionListener:onAttachMediaDrawer fileOrigin is not specified, fallback to default"
                            ])));
                            chat_attachMediaContents.processAttachmentsForChat(attachments, o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.CHAT_PHOTO_LIBRARY, chat).catch(b);
                        }
                    }
                };
                const k = chat.getComposeContents()?.text;
                if (k != null && o("WAWebBotBaseGating").isBotEnabled()) {
                    const I = new RegExp(o("WAWebRichTextInputConst").userJidRegexStr, "g");
                    for(let T = I.exec(k); T != null;){
                        const D = o("WAWebWidFactory").createWid(T[1]);
                        if (D.isBot()) {
                            return;
                        }
                        T = I.exec(k);
                    }
                }
                const x = i.existsDrawer() ?? false;
                if (!x) {
                    if (!chat.attachMediaContents) {
                        chat.setAttachMediaContents(new (r("WAWebAttachMediaCollection"))({
                            chatParticipantCount: chat.getParticipantCount()
                        }));
                    }
                    const mediaCollection = r("nullthrows")(chat.attachMediaContents);
                    const Component = o("WAWebAttachMediaFlowLoadable").AttachMediaFlowLoadable;
                    o("WAWebDrawerManager").DrawerManager.openDrawerMid(<Component chat={chat} onComplete={onComplete} onSend={onSend} onCancel={onCancel} onDismiss={C} onRender={onRender} initCaption={initCaption} mediaCollection={mediaCollection} sendAsSticker={sendAsSticker} openTrigger={openTrigger} isQuestion={isQuestion} questionReplyQuotedMessage={questionReplyQuotedMessage} threadId={threadId}/>, {
                        transition: animationName || "slide-up",
                        uim: n,
                        noFocus: true,
                        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                    });
                }
            };
            t[13] = i;
            t[14] = n;
            t[15] = D;
        } else {
            D = t[15];
        }
        const x = D;
        let $;
        if (t[16] !== n) {
            $ = function(t) {
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                    descriptorType: "chat_search",
                    chat: t
                } : m.jsx(o("WAWebChatSearchDrawerLoadable").ChatSearchDrawerLoadable, {
                    chat: t
                }), {
                    transition: "slide-left",
                    uim: n
                });
            };
            t[16] = n;
            t[17] = $;
        } else {
            $ = t[17];
        }
        const P = $;
        let N;
        if (t[18] !== n) {
            N = function({ currentTime, getZoomNode, highlightedMsgIds, msg, shouldShowAllMedia, shouldShowNumberText }) {
                if (o("WAWebMsgCollection").MsgCollection.get(msg.id)) {
                    const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
                    o("WAWebModalManager").ModalManager.openMedia(<Component name="media-viewer-flow">{m.jsx(o("WAWebMediaViewerFlowLoadable").MediaViewerFlowLoadable, {
                        msg,
                        startTime: currentTime,
                        getZoomNode,
                        highlightedMsgIds,
                        shouldShowNumberText,
                        shouldShowAllMedia
                    })}</Component>, {
                        transition: "media-viewer",
                        uim: r("nullthrows")(n)
                    });
                } else {
                    o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebMediaMissingModal.react"), {
                        msg
                    }));
                }
            };
            t[18] = n;
            t[19] = N;
        } else {
            N = t[19];
        }
        const M = N;
        let w;
        if (t[20] !== n) {
            w = function(t) {
                const Component = o("WAWebDefaultEphemeralityDrawerLoadable").DefaultEphemeralityDrawerLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component onClose={y} entryPoint={t}/>, {
                    transition: "slide-left",
                    uim: n,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
            t[20] = n;
            t[21] = w;
        } else {
            w = t[21];
        }
        const A = w;
        let F;
        if (t[22] !== A || t[23] !== n) {
            F = function(t, showNux, a) {
                const e = o("WAWebChatGetters").getIsGroup(t) ? o("WAWebWamEnumDisappearingModeEntryPointType").DISAPPEARING_MODE_ENTRY_POINT_TYPE.GROUP_CHAT_DISAPPEARING_MESSAGES_SETTING : o("WAWebWamEnumDisappearingModeEntryPointType").DISAPPEARING_MODE_ENTRY_POINT_TYPE.INDIVIDUAL_CHAT_DISAPPEARING_MESSAGES_SETTING;
                const Component = o("WAWebEphemeralDrawerLoadable").EphemeralDrawerLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component chat={t} showNux={showNux} entryPoint={a} onDDMSettingsClick={function() {
                    return A(e);
                }}/>, {
                    transition: "slide-left",
                    uim: n,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
            t[22] = A;
            t[23] = n;
            t[24] = F;
        } else {
            F = t[24];
        }
        const O = F;
        let B;
        if (t[25] !== n) {
            B = function(t) {
                const Component = o("WAWebChatThemeDrawerLoadable").ChatThemeDrawerLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component chat={t} onClose={h}/>, {
                    transition: "slide-left",
                    uim: n,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
            t[25] = n;
            t[26] = B;
        } else {
            B = t[26];
        }
        const W = B;
        let q;
        if (t[27] !== n) {
            q = function(contactId) {
                const Component = o("WAWebMerchantDetailsDrawerLoadable").MerchantDetailsDrawerLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component key="legal-entity-details" contactId={contactId} onClose={g}/>, {
                    transition: "slide-left",
                    uim: n,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
            t[27] = n;
            t[28] = q;
        } else {
            q = t[28];
        }
        const U = q;
        let V;
        if (t[29] !== n) {
            V = function(stickerPackId) {
                const Component = r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component stickerPackId={stickerPackId} onSticker={r("WAWebSendStickerToActiveChatStickersAction")}/>, {
                    transition: "slide-left",
                    uim: n,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
            t[29] = n;
            t[30] = V;
        } else {
            V = t[30];
        }
        const H = V;
        let G;
        if (t[31] !== n) {
            G = function(t) {
                const Component = r("WAWebLimitSharingDrawer.react");
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component chat={t} onClose={f}/>, {
                    transition: "slide-left",
                    uim: n,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
            t[31] = n;
            t[32] = G;
        } else {
            G = t[32];
        }
        const z = G;
        let j;
        if (t[33] !== n) {
            j = function(t) {
                const Component = r("WAWebAcp2Drawer.react");
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component chat={t} onClose={_}/>, {
                    transition: "slide-left",
                    uim: n,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
            t[33] = n;
            t[34] = j;
        } else {
            j = t[34];
        }
        const K = j;
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "chat_info_drawer", u);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "delete_newsletter_drawer", d);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "msg_info_drawer", L);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "chat_search", P);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "attach_media_drawer", x);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "verification_drawer", S);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "media_viewer_modal", M);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "ephemeral_drawer", O);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "chat_theme_drawer", W);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "merchant_details_drawer", U);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_sticker_pack", H);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "ctwa_ad_preview_drawer", k);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "limit_sharing_drawer", z);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "acp2_drawer", K);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "galaxy_flows_drawer", T);
    }
    function _() {
        return o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
    }
    function f() {
        return o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
    }
    function g() {
        return o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
    }
    function h() {
        return o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
    }
    function y() {
        return o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
    }
    function C() {
        return o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
    }
    function b(e) {
        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "ChatActionListener:onAttachMediaDrawer processAttachmentsForChat failed"
        ]))).catching(r("getErrorSafe")(e)).sendLogs("process-attachments-for-chat-failed");
    }
    function v(e) {
        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "ChatActionListener:onAttachMediaDrawer processAttachmentsForChat failed"
        ]))).catching(r("getErrorSafe")(e)).sendLogs("process-attachments-for-chat-failed");
    }
    l.default = p;
}, 226);