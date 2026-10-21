__d("WAWebMessageWrapper.react", [
    "fbt",
    "CometVirtualization.react",
    "ReactDOM",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsSaga",
    "WAWebAccessibility.react",
    "WAWebAddMsgToNoteAction",
    "WAWebAddOnBubbleType",
    "WAWebAddOnBubblesContainer.react",
    "WAWebAppContext.react",
    "WAWebBizAiInlineFeedbackSlotLoadable.react",
    "WAWebBizAiMessageEditActionLog",
    "WAWebBizTemplateButtons.react",
    "WAWebBotFeedbackModal.react",
    "WAWebBotGating",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotTypes",
    "WAWebBroadcastMessageDropdownMenu.react",
    "WAWebBubbleAnimationWrapper.react",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatThemeGatingUtils",
    "WAWebChatThemeModeContext",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebCodeFormatMutator",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCopyStickerToClipboard",
    "WAWebCopyToClipboard",
    "WAWebDeleteRevokeMsgFlow.react",
    "WAWebDisplayType",
    "WAWebDomScroll",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebEmbeddedChatContext",
    "WAWebErrorBoundary.react",
    "WAWebExpandableTextContext",
    "WAWebFavoriteStickerAction",
    "WAWebFileSaver",
    "WAWebFocusTracer",
    "WAWebForwardActionUserJourneyLogger",
    "WAWebForwardUtils",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataContext",
    "WAWebInteractiveMessageCarousel.react",
    "WAWebKeepInChatActions",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardListHotKeys.react",
    "WAWebKeyboardRotateFocusArrows.react",
    "WAWebKeyboardTabUtils",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebMediaDocumentUtils",
    "WAWebMentionMessageContext",
    "WAWebMessageButtons.react",
    "WAWebMessageCheckbox.react",
    "WAWebMessageComponentWrapper.react",
    "WAWebMessageEditFlow.react",
    "WAWebMessageHandlers",
    "WAWebMessageMenu.react",
    "WAWebMessageOneOnOneChatPadding.stylex",
    "WAWebMessagePluginMsgDisplayClass",
    "WAWebMessagePosition",
    "WAWebMessageUiUtils",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgFailIcon.react",
    "WAWebMsgGetters",
    "WAWebMsgLinkContextMenuUtils",
    "WAWebMsgModelUtils",
    "WAWebMsgReply",
    "WAWebMsgType",
    "WAWebMultiSelectBar.react",
    "WAWebNewsletterActionButtonWrapper.react",
    "WAWebNewsletterAddAiContentLabelFlow",
    "WAWebNewsletterMsgLinkUtils",
    "WAWebNoop",
    "WAWebPaidPartnershipLabelModal.react",
    "WAWebPinInChatCollection",
    "WAWebPinMessageModal.react",
    "WAWebPinnedMessagesUserJourneyLogger",
    "WAWebPortalThemeWrapper.react",
    "WAWebPrepareMessageSendingAction",
    "WAWebProtobufsE2E.pb",
    "WAWebPttPrefs",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsUtils",
    "WAWebReplyToMsgChatAction",
    "WAWebReportMsgPopup.react",
    "WAWebReportNewsletterPostPopup.react",
    "WAWebReportToAdminEventsLogger",
    "WAWebReportToAdminPopup.react",
    "WAWebResendMsgAction",
    "WAWebRevokeMetricUtils",
    "WAWebRightClickReactionBarContainer.react",
    "WAWebSendBotFeedbackAction",
    "WAWebSendPinMessageAction",
    "WAWebSendReactionMsgAction",
    "WAWebSendSupportBotFeedbackActions",
    "WAWebSpamConstants",
    "WAWebStateUtils",
    "WAWebStylesEnv",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSupportBotNegativeFeedbackModal",
    "WAWebSupportCarousel",
    "WAWebSystemMessageStyles.stylex",
    "WAWebThemeContext",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUserPrefsMeUser",
    "WAWebVelocityTransitionGroup",
    "WAWebVibrantOutgoingOverrides.stylex",
    "WAWebViewMode.flow",
    "WAWebViewOnceState",
    "WAWebViewRepliesLabel.react",
    "WAWebWamEnumKicEntryPointType",
    "WAWebWamEnumQuotedMessageUserJourneyEntryPoint",
    "WAWebWamEnumReactionUserJourneyEntryPoint",
    "WAWebWamEnumReportToAdminInteraction",
    "WAWebWamEnumSupportAiEventType",
    "WAWebWid",
    "WAWebWrapperConstants",
    "WAWebWrapperDisplayTypeContext",
    "WAWebWrapperEphemeralInfoButton.react",
    "WAWebWrapperGetTailIcon",
    "WAWebWrapperGroupProfilePicture.react",
    "WAWebWrapperHandlers",
    "WAWebWrapperListeners.react",
    "WAWebWrapperMessageActionButtonsRow",
    "WAWebWrapperMessageDropdownMenu.react",
    "WAWebWrapperMessageDropdownMenuReactionsTray.react",
    "WAWebWrapperOrderEphemeralExemption",
    "WAWebWrapperQuickActionButton.react",
    "WAWebWrapperReactionsQuickActionButton.react",
    "WAWebWrapperShouldDisplayAuthor",
    "WAWebWrapperShouldHaveTail",
    "WDSFocusStateStyles",
    "WDSMenu.react",
    "asyncToGeneratorRuntime",
    "cr:13786",
    "cr:219",
    "cr:23046",
    "cr:5997",
    "cr:7237",
    "cr:7565",
    "getErrorSafe",
    "gkx",
    "justknobx",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebAssociatedMessages",
    "useWAWebBizVPVData",
    "useWAWebChatValues",
    "useWAWebDebouncedCallback",
    "useWAWebEventTargetValue",
    "useWAWebForceUpdate",
    "useWAWebIsHoverBarEnabled",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
    "useWAWebMessageAriaDescription",
    "useWAWebMessageAriaLabel",
    "useWAWebMessageHoverBar",
    "useWAWebMessageRenderQpl",
    "useWAWebMsgValues",
    "useWAWebOnUnmount",
    "useWAWebReactionEmojiPickerMenu",
    "useWAWebStableCallback",
    "useWDSMenu"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    const h = [
        "ref"
    ];
    const y = [
        "ref"
    ];
    let C;
    let b;
    const v = b || (b = o("react"));
    const S = b;
    const { useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } = S;
    const D = 10;
    const x = 20;
    function $(e, t) {
        let n = null;
        let r = 0;
        let o = null;
        const a = function() {
            const l = e.current?.getBoundingClientRect().top;
            if (l != null && (l === n || r >= D)) {
                t();
                return;
            }
            if (!(r >= x)) {
                n = l;
                r++;
                o = window.requestAnimationFrame(a);
            }
        };
        o = window.requestAnimationFrame(a);
        return function() {
            if (o != null) {
                window.cancelAnimationFrame(o);
            }
        };
    }
    function P() {
        let e = {
            canAnimateExpand: false,
            isExpanded: false
        };
        const t = new Set;
        return {
            getSnapshot: function() {
                return e;
            },
            updateSnapshot: function(r) {
                e = r;
                t.forEach((e)=>e());
            },
            subscribe: function(n) {
                t.add(n);
                return function() {
                    t.delete(n);
                };
            }
        };
    }
    function N(e, GtRef) {
        const n = function(r) {
            if (!(r.key !== "Tab" || !r.shiftKey)) {
                const n = o("WAWebKeyboardTabUtils").getTabbableElements(e, o("WAWebKeyboardTabUtils").FocusType.TABBABLE);
                if (!(n.length === 0 || e.ownerDocument.activeElement !== n[0])) {
                    const a = GtRef.current;
                    if (a != null) {
                        r.preventDefault();
                        r.stopPropagation();
                        a.focusFirst();
                    }
                }
            }
        };
        e.addEventListener("keydown", n, true);
        return function() {
            e.removeEventListener("keydown", n, true);
        };
    }
    const M = "x4dpwp4-B";
    const w = "x1jn504y-B";
    const A = "xqw5v3c-B";
    const F = {
        teeLockHoverInset: {
            "--xeia6u2": "x1qg1ob xxx6ivz",
            $$css: true
        },
        bubbleContentAboveBridge: {
            position: "x1n2onr6",
            zIndex: "x1vjfegm",
            $$css: true
        },
        messageFocused: {
            outlineOffset: "x1wfwxd8",
            $$css: true
        },
        messageContinuation: {
            paddingBottom: "xa0aww2",
            $$css: true
        },
        groupHistoryMessage: {
            "--WDS-systems-bubble-surface-incoming": "x9lmoot",
            "--WDS-systems-bubble-surface-outgoing": "x1ppz1d2",
            $$css: true
        },
        groupHistoryMessageRow: {
            position: "x1n2onr6",
            "::before_content": "x1cpjm7i",
            "::before_position": "x1hmns74",
            "::before_top": "x1y3wzot",
            "::before_bottom": "xhq5o37",
            "::before_insetInlineStart": "xfbisj7",
            "::before_left": null,
            "::before_right": null,
            "::before_transform": "xnyzbwf",
            "::before_width": "xkeh78v",
            "::before_zIndex": "xy5mcqj",
            $$css: true
        },
        groupHistoryMessageRowLight: {
            "::before_backgroundColor": "xd3jkiw",
            $$css: true
        },
        groupHistoryMessageRowDark: {
            "::before_backgroundColor": "x5cow8b",
            $$css: true
        },
        msg: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            userSelect: "x1hx0egp",
            paddingInlineStart: "x1h3r9g6 x1ld4j5a x1q6425o x1h2wzp9 x13bx8za xgmf7it xcjqink xg7f59e xxfb629",
            paddingInlineEnd: "x141l45o x1n33gsf xa25jmb xg5uraw xt5wqpu x1utqab1 x1ijczrz xqxqsie x10amw33",
            $$css: true
        },
        msgScheduled: {
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            $$css: true
        },
        messageRowScheduled: {
            paddingBottom: "x18d9i69",
            $$css: true
        },
        messageScheduledFullWidth: {
            maxWidth: "x193iq5w",
            $$css: true
        },
        msgThreePanel: {
            paddingInlineStart: "x1h3r9g6 x1ld4j5a xz2rn1k x5oh2r6 x13bx8za xgmf7it xcjqink xg7f59e xxfb629",
            paddingInlineEnd: "x141l45o x1n33gsf xcp7ckg xzfsp05 xt5wqpu x1utqab1 x1ijczrz xqxqsie x10amw33",
            $$css: true
        },
        wrapperChannelAlerts: {
            paddingInlineStart: "x13jy36j",
            paddingInlineEnd: "x64bnmy",
            $$css: true
        },
        wrapperChannelAlertsThreePanel: {
            paddingInlineStart: "x13jy36j xz2rn1k x5oh2r6",
            paddingInlineEnd: "x64bnmy xcp7ckg xzfsp05",
            $$css: true
        },
        rowAlignStart: {
            alignItems: "x1cy8zhl",
            $$css: true
        },
        rowAlignEnd: {
            alignItems: "xuk3077",
            $$css: true
        },
        msgDeletePending: {
            display: "x1s85apg",
            $$css: true
        },
        msgInfo: {
            marginBottom: "xat24cr",
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            $$css: true
        },
        msgInfoThreePanel: {
            paddingInlineStart: "x1c1uobl xz2rn1k x5oh2r6",
            paddingInlineEnd: "xyri2b xcp7ckg xzfsp05",
            $$css: true
        },
        wideDisplayRow: {
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            $$css: true
        },
        msgPSARow: {
            textAlign: "x2b8uid",
            $$css: true
        },
        msgGallery: {
            alignItems: "x1cy8zhl",
            marginBottom: "xat24cr",
            paddingInlineStart: "x1mfogq2",
            paddingInlineEnd: "xpdmqnj",
            $$css: true
        },
        msgWithQuickAction: {
            marginInlineStart: "xnzr9dm",
            $$css: true
        },
        msgBubbleAnimation: {
            animationName: "xe1k3sp",
            animationDuration: "x1c74tu6",
            animationTimingFunction: "x4hg4is",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        noZIndex: {
            zIndex: "x1swf91x",
            $$css: true
        },
        messageBackgroundIncoming: {
            backgroundColor: "x1ew7x2d",
            $$css: true
        },
        messageBackgroundOutgoing: {
            backgroundColor: "x1g5lz36",
            $$css: true
        },
        hoverTintTrigger: {
            "--WAWeb-msg-hover-tint": "x1bgsx7y xr9tke2",
            $$css: true
        },
        hoverTintBubbleIncomingLight: {
            backgroundColor: "x1ew7x2d x1uxn25p",
            $$css: true
        },
        hoverTintBubbleIncomingDark: {
            backgroundColor: "x1ew7x2d x1ge9nub",
            $$css: true
        },
        hoverTintBubbleOutgoingAccent: {
            backgroundColor: "x1g5lz36 x3rrg40",
            $$css: true
        },
        hoverTintBubbleOutgoingWhite: {
            backgroundColor: "x1g5lz36 x1l4hul3",
            $$css: true
        },
        hoverTintTailIncomingLight: {
            color: "x1l1cedg xwpb2yn",
            $$css: true
        },
        hoverTintTailIncomingDark: {
            color: "x1l1cedg xoqaf51",
            $$css: true
        },
        hoverTintTailOutgoingAccent: {
            color: "x1fa4crm x1pxzczp",
            $$css: true
        },
        hoverTintTailOutgoingWhite: {
            color: "x1fa4crm xg4aee8",
            $$css: true
        },
        hoverTintBubbleIncomingLightHeld: {
            backgroundColor: "x1ew7x2d x8z3c44",
            $$css: true
        },
        hoverTintBubbleIncomingDarkHeld: {
            backgroundColor: "x1ew7x2d x5fpms5",
            $$css: true
        },
        hoverTintBubbleOutgoingAccentHeld: {
            backgroundColor: "x1g5lz36 x1vu9pvh",
            $$css: true
        },
        hoverTintBubbleOutgoingWhiteHeld: {
            backgroundColor: "x1g5lz36 xpspfcw",
            $$css: true
        },
        hoverTintTailIncomingLightHeld: {
            color: "x1l1cedg x11ja4au",
            $$css: true
        },
        hoverTintTailIncomingDarkHeld: {
            color: "x1l1cedg xao9qsn",
            $$css: true
        },
        hoverTintTailOutgoingAccentHeld: {
            color: "x1fa4crm xt7pmz6",
            $$css: true
        },
        hoverTintTailOutgoingWhiteHeld: {
            color: "x1fa4crm x1vv2pq3",
            $$css: true
        },
        bgTailFlatTopLeft: {
            borderStartStartRadius: "x1bczwif",
            $$css: true
        },
        bgTailFlatTopRight: {
            borderStartEndRadius: "x17un8ov",
            $$css: true
        },
        bgTailOverrideLeft: {
            borderStartStartRadius: "x1bczwif",
            borderStartEndRadius: "xu342n7",
            $$css: true
        },
        bgTailOverrideRight: {
            borderStartStartRadius: "x1liijdw",
            borderStartEndRadius: "x17un8ov",
            $$css: true
        },
        hasBorderBox: {
            boxShadow: "xgdw1sx",
            $$css: true
        },
        tail: {
            display: "x1lliihq",
            height: "x18gnavp",
            position: "x10l6tqk",
            top: "x13vifvy",
            width: "x1xc55vz",
            zIndex: "xupqr0c",
            $$css: true
        },
        tailColorIncoming: {
            color: "x1l1cedg",
            $$css: true
        },
        tailColorOutgoing: {
            color: "x1fa4crm",
            $$css: true
        },
        tailLeft: {
            insetInlineStart: "x7hj1vm",
            left: null,
            right: null,
            $$css: true
        },
        tailRight: {
            insetInlineEnd: "xgvahye",
            left: null,
            right: null,
            $$css: true
        },
        tailLeftSafari: {
            insetInlineStart: "xnj87uo",
            left: null,
            right: null,
            $$css: true
        },
        tailRightSafari: {
            insetInlineEnd: "x13niomq",
            left: null,
            right: null,
            $$css: true
        },
        tailHidden: {
            display: "x1s85apg",
            $$css: true
        },
        messageHighlightMention: {
            lineHeight: "x19v9tvf",
            $$css: true
        },
        messageTransparent: {
            backgroundColor: "xjbqb8w",
            borderStartStartRadius: "x1bczwif",
            borderStartEndRadius: "x17un8ov",
            borderEndEndRadius: "x1e7945m",
            borderEndStartRadius: "x11o6v7j",
            boxShadow: "x1gnnqk1",
            lineHeight: "x1gwpirc",
            $$css: true
        },
        messageTailOverrideStart: {
            borderStartStartRadius: "x1bczwif",
            borderStartEndRadius: "xu342n7",
            $$css: true
        },
        messageTailOverrideEnd: {
            borderStartStartRadius: "x1liijdw",
            borderStartEndRadius: "x17un8ov",
            $$css: true
        },
        messageChat: {
            maxWidth: "x1gx27l9 x14fraq8 x2nxwck xb3dwbw",
            $$css: true
        },
        messageChatBotPluginParent: {
            minWidth: "x5uz1wy xto7b4v x6rd39g xl37psn",
            $$css: true
        },
        messageCode: {
            maxWidth: "xan34s7",
            $$css: true
        },
        messageVideoLinkPreview: {
            width: "x17sfusw",
            $$css: true
        },
        messageVideoLinkPreviewWide: {
            width: "x1yuel0x",
            $$css: true
        },
        pollMessage: {
            width: "x3orp4s",
            $$css: true
        },
        pollAnnouncement: {
            width: "x1yuel0x",
            $$css: true
        },
        ptvMessage: {
            maxWidth: "x193iq5w",
            $$css: true
        },
        ptvAnnouncement: {
            width: "xh8yej3",
            $$css: true
        },
        groupNotificationContextCardContainer: {
            borderStartStartRadius: "xuqqiot",
            borderStartEndRadius: "x1lkg3h2",
            borderEndEndRadius: "x17mbzc4",
            borderEndStartRadius: "xcouhex",
            paddingTop: "x1p5oq8j",
            paddingInlineEnd: "x64bnmy",
            paddingBottom: "xwxc41k",
            paddingInlineStart: "x13jy36j",
            $$css: true
        },
        businessBroadcastContextCardContainer: {
            borderStartStartRadius: "xuqqiot",
            borderStartEndRadius: "x1lkg3h2",
            borderEndEndRadius: "x17mbzc4",
            borderEndStartRadius: "xcouhex",
            maxWidth: "x193iq5w",
            paddingTop: "x1p57kb1",
            paddingInlineEnd: "xvtqlqk",
            paddingBottom: "xvpt6g3",
            paddingInlineStart: "xdx6fka",
            width: "xht4xr3",
            $$css: true
        },
        messageSystemNoPadding: {
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            paddingInlineEnd: "xyri2b",
            $$css: true
        },
        messageE2ENotification: {
            backgroundColor: "xbqjg82",
            color: "x1syykee",
            $$css: true
        },
        messageBizNotification: {
            backgroundColor: "x1i4qgik",
            color: "x1fyz91i",
            $$css: true
        },
        messageNonE2ENotification: {
            backgroundColor: "xz52mmd",
            color: "xbta0w9",
            $$css: true
        },
        messageDebugNotification: {
            backgroundColor: "x1iyt1tq",
            color: "x1bvqhpb",
            $$css: true
        },
        messagePlaceholder: {
            opacity: "x1ks1olk",
            $$css: true
        },
        galleryMessage: {
            maxWidth: "x193iq5w",
            $$css: true
        },
        galleryChat: {
            width: "x14atkfc",
            $$css: true
        },
        galleryMedia: {
            maxWidth: "x13nahy2",
            width: "xh8yej3",
            $$css: true
        },
        galleryImageGif: {
            maxWidth: "x193iq5w",
            width: "x14atkfc",
            $$css: true
        },
        galleryVideoLocation: {
            width: "x14atkfc",
            $$css: true
        },
        infoMessage: {
            maxWidth: "x193iq5w",
            width: "x14atkfc",
            $$css: true
        },
        infoMedia: {
            maxWidth: "x193iq5w",
            width: "x3orp4s",
            $$css: true
        },
        infoImageGif: {
            maxWidth: "x193iq5w",
            width: "x14atkfc",
            $$css: true
        },
        infoVideoLocation: {
            width: "x14atkfc",
            $$css: true
        },
        announcementChat: {
            maxWidth: "x193iq5w",
            $$css: true
        },
        channelAlertsMessage: {
            maxWidth: "x193iq5w",
            width: "xh8yej3",
            $$css: true
        },
        channelAlertsQuestionReplyMessage: {
            maxWidth: "xmewjk2",
            $$css: true
        },
        psaMessage: {
            display: "x1rg5ohu",
            textAlign: "x14wi4xw",
            $$css: true
        }
    };
    function O(e) {
        switch(e){
            case "messageChat":
                return F.messageChat;
            case "messageChatBotPluginParent":
                return F.messageChatBotPluginParent;
            case "messageTransparent":
                return F.messageTransparent;
            case "messageVideoLinkPreview":
                return F.messageVideoLinkPreview;
            case "messageVideoLinkPreviewWide":
                return F.messageVideoLinkPreviewWide;
            case "pollMessage":
                return F.pollMessage;
            case "pollAnnouncement":
                return F.pollAnnouncement;
            case "ptvMessage":
                return F.ptvMessage;
            case "ptvAnnouncement":
                return F.ptvAnnouncement;
            case "messagePlaceholder":
                return F.messagePlaceholder;
            default:
                return null;
        }
    }
    function B(e) {
        switch(e){
            case "messageE2ENotification":
                return F.messageE2ENotification;
            case "messageBizNotification":
                return F.messageBizNotification;
            case "messageNonE2ENotification":
                return F.messageNonE2ENotification;
            case "messageDebugNotification":
                return F.messageDebugNotification;
            default:
                return null;
        }
    }
    function W(e) {
        switch(e){
            case "messageChat":
                return "chat";
            case "messageAudio":
            case "messageDocument":
            case "messageList":
            case "messageProduct":
            case "messageMultiVcard":
            case "messagePTT":
            case "messageSticker":
            case "messageVcard":
                return "media";
            case "messageImage":
            case "messageGif":
                return "imageGif";
            case "messageVideo":
            case "messageLocation":
            case "messageLiveLocation":
                return "videoLocation";
            default:
                return null;
        }
    }
    function q(e, isMsgGallery, n, r) {
        const base = [];
        const context = [];
        const notifColor = [];
        if (e == null) {
            return {
                base,
                context,
                notifColor
            };
        }
        for (const l of e.split(" ")){
            const s = B(l);
            if (s != null) {
                notifColor.push(s);
                continue;
            }
            const u = O(l);
            if (u != null) {
                base.push(u);
            }
            const c = W(l);
            if (c == null) {
                if (n && l === "messageVideoLinkPreview") {
                    context.push(F.messageVideoLinkPreview);
                } else if (n && l === "messageVideoLinkPreviewWide") {
                    context.push(F.messageVideoLinkPreviewWide);
                }
                continue;
            }
            if (isMsgGallery) {
                context.push({
                    chat: F.galleryChat,
                    media: F.galleryMedia,
                    imageGif: F.galleryImageGif,
                    videoLocation: F.galleryVideoLocation
                }[c]);
            } else {
                if (n) {
                    switch(c){
                        case "media":
                            context.push(F.infoMedia);
                            break;
                        case "imageGif":
                            context.push(F.infoImageGif);
                            break;
                        default:
                            if (c === "videoLocation") {
                                context.push(F.infoVideoLocation);
                            }
                    }
                }
            }
            if (r && c === "chat") {
                context.push(F.announcementChat);
            }
        }
        return {
            base,
            context,
            notifColor
        };
    }
    const U = {
        atLeastOnceKeyboardUser: true
    };
    function V(t) {
        "use no forget";
        const t_ref = t.ref;
        const x = babelHelpers.objectWithoutPropertiesLoose(t, h);
        const { msg, position, displayType } = x;
        const O = displayType === undefined ? o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION : displayType;
        const { selectedMessages, isFocusable, selectable, isMsgVisible, onMessageSelect, onProductClick, onMessageClick, current, showProfilePicture } = x;
        const ee = showProfilePicture === undefined ? true : showProfilePicture;
        const { onMsgFocus, onMsgBlur, isFollowUpReply } = x;
        r("useWAWebMessageRenderQpl")(msg.id);
        const oe = r("useWAWebIsKeyboardUser")();
        const oe_isKeyboardUser = oe.isKeyboardUser;
        const forceUpdate = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const le = o("useWAWebListener").useAddListenerOnce();
        const se = le[0];
        const ueRef = useRef(false);
        const ce = o("WAWebAppContext.react").useAppContext();
        const ce_rightDrawerOpen = ce.rightDrawerOpen;
        const me = o("useWAWebMsgValues").useMsgValues(x.msg.id, [
            o("WAWebFrontendMsgGetters").getAsMms,
            o("WAWebFrontendMsgGetters").getAsPollCreation,
            o("WAWebFrontendMsgGetters").getAsPttLike,
            o("WAWebFrontendMsgGetters").getAsRevoked,
            o("WAWebMsgGetters").getAuthor,
            o("WAWebMsgGetters").getBody,
            o("WAWebFrontendMsgGetters").getDir,
            o("WAWebMsgGetters").getEphemeralDuration,
            o("WAWebMsgGetters").getEphemeralOutOfSync,
            o("WAWebMsgGetters").getFilehash,
            o("WAWebMsgGetters").getId,
            o("WAWebMsgGetters").getIsAvatar,
            o("WAWebMsgGetters").getIsBizNotification,
            o("WAWebMsgGetters").getIsEphemeral,
            o("WAWebMsgGetters").getIsFailed,
            o("WAWebMsgGetters").getHostedBizEncStateMismatch
        ]);
        const pe = me[0];
        const _e = me[1];
        const fe = me[2];
        const ge = me[3];
        const he = me[4];
        const ye = me[5];
        const Ce = me[6];
        const be = me[7];
        const ve = me[8];
        const Se = me[9];
        const Re = me[10];
        const Le = me[11];
        const Ee = me[12];
        const ke = me[13];
        const Ie = me[14];
        const Te = me[15];
        const De = o("useWAWebMsgValues").useMsgValues(x.msg.id, [
            o("WAWebMsgGetters").getIsFrequentlyForwarded,
            o("WAWebMsgGetters").getIsFutureproof,
            o("WAWebMsgGetters").getIsGroupMsg,
            o("WAWebMsgGetters").getIsLive,
            o("WAWebMsgGetters").getIsMedia,
            o("WAWebMsgGetters").getIsMdHistoryMsg,
            o("WAWebMsgGetters").getIsNotification,
            o("WAWebFrontendMsgGetters").getIsRTL,
            o("WAWebMsgGetters").getIsAiHub,
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebMsgGetters").getIsViewOnce,
            o("WAWebMsgGetters").getLinkPreview,
            o("WAWebMsgGetters").getList,
            o("WAWebFrontendMsgGetters").getMediaData,
            o("WAWebMsgGetters").getMatchedText,
            o("WAWebMsgGetters").getQuotedMsg
        ]);
        const xe = De[0];
        const $e = De[1];
        const Pe = De[2];
        const Ne = De[3];
        const Me = De[4];
        const we = De[5];
        const Ae = De[6];
        const Fe = De[7];
        const Oe = De[8];
        const Be = De[9];
        const We = De[10];
        const qe = De[11];
        const Ue = De[12];
        const Ve = De[13];
        const He = De[14];
        const Ge = De[15];
        const ze = o("useWAWebMsgValues").useMsgValues(x.msg.id, [
            o("WAWebMsgGetters").getRichPreviewType,
            o("WAWebMsgGetters").getSender,
            o("WAWebMsgGetters").getStar,
            o("WAWebMsgGetters").getSubtype,
            o("WAWebMsgGetters").getType,
            o("WAWebMsgGetters").getTitle,
            o("WAWebFrontendMsgGetters").getHasTemplateButtons,
            o("WAWebFrontendMsgGetters").getIsQuickReply,
            o("WAWebMsgGetters").getIsFromTemplate,
            o("WAWebMsgGetters").getDoNotPlayInline,
            o("WAWebMsgGetters").getCtwaContext,
            o("WAWebMsgGetters").getBizPrivacyStatus,
            o("WAWebMsgGetters").getVerifiedBizName,
            o("WAWebMsgGetters").getTemplateParams,
            o("WAWebMsgGetters").getDynamicReplyButtons,
            o("WAWebFrontendMsgGetters").getReplyButtons
        ]);
        const je = ze[0];
        const Ke = ze[1];
        const Qe = ze[2];
        const Xe = ze[3];
        const Ye = ze[4];
        const Je = ze[5];
        const Ze = ze[6];
        const et = ze[7];
        const tt = ze[8];
        const nt = ze[9];
        const rt = ze[10];
        const ot = ze[11];
        const at = ze[12];
        const it = ze[13];
        const lt = ze[14];
        const st = o("useWAWebMsgValues").useMsgValues(x.msg.id, [
            o("WAWebMsgGetters").getHasReaction,
            o("WAWebMsgGetters").getBroadcastId,
            o("WAWebMsgGetters").getDeprecatedMms3Url,
            o("WAWebMsgGetters").getIsKept,
            o("WAWebFrontendMsgGetters").getPendingDeleteForMe,
            o("WAWebMsgGetters").getMessageSecret,
            o("WAWebMsgGetters").getOriginalSelfAuthor,
            o("WAWebMsgGetters").getFrom,
            o("WAWebMsgGetters").getTo,
            o("WAWebFrontendMsgGetters").getIsTransparentMsg,
            o("WAWebFrontendMsgGetters").getIsTransparentMsgEmoji,
            o("WAWebMsgGetters").getIsGroupHistoryMessageInOwnChat,
            o("WAWebFrontendMsgGetters").getIsFadingOut
        ]);
        const ut = st[0];
        const ct = st[1];
        const dt = st[2];
        const mt = st[3];
        const pt = st[4];
        const _t = st[5];
        const ft = st[6];
        const gt = st[7];
        const ht = st[8];
        const yt = st[9];
        const Ct = st[10];
        const bt = st[11];
        const vt = st[12];
        const St = o("WAWebFrontendMsgGetters").getChat(msg);
        const Rt = o("WAWebThemeContext").useIsDarkTheme();
        const Lt = useContext(r("WAWebChatThemeModeContext"));
        const { bubbleStyle, isMinimalMode, isVibrant, wallpaperStyle } = Lt;
        const Dt = o("WAWebChatThemeGatingUtils").shouldApplyVibrantOverride({
            isVibrant,
            isSentByMe: Be,
            isNotification: Ae
        });
        const xt = o("WAWebChatGetters").getIsBroadcast(St);
        const $tRef = useRef(null);
        const PtRef = useRef(null);
        const NtRef = useRef(null);
        const MtRef = useRef(null);
        const wtRef = useRef(null);
        const AtRef = useRef(null);
        const FtRef = useRef(null);
        const OtRef = useRef(null);
        const BtRef = useRef(null);
        const WtRef = useRef(null);
        const qtRef = useRef(false);
        const UtRef = useRef(null);
        const VtRef = useRef(null);
        const HtRef = useRef(null);
        const GtRef = useRef(null);
        const zt = useState(null);
        const jt = zt[0];
        const Kt = zt[1];
        const Qt = useState(null);
        const Xt = Qt[0];
        const onReactionPickerOpen = Qt[1];
        const Jt = useState(null);
        const Zt = Jt[0];
        const en = Jt[1];
        const tn = useState(false);
        const hover = tn[0];
        const rn = tn[1];
        const on = useState(false);
        const an = on[0];
        const ln = on[1];
        const sn = useState(function() {
            if (x.selectedMessages) {
                return x.selectedMessages.isSelected(o("WAWebStateUtils").unproxy(x.msg));
            }
            return false;
        });
        const un = sn[0];
        const cn = sn[1];
        const dn = useState(false);
        const isPeeking = dn[0];
        const pn = dn[1];
        const _n = useState(false);
        const fn = _n[0];
        const gn = _n[1];
        const hn = useState(false);
        const yn = hn[0];
        const Cn = hn[1];
        const bn = useState(false);
        const showButton = bn[0];
        const Sn = bn[1];
        const Rn = useState(null);
        const Ln = Rn[0];
        const En = Rn[1];
        const kn = useState({
            atLeastOnceKeyboardUser: false
        });
        const In = kn[0];
        const Tn = kn[1];
        const Dn = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(msg.id, o("WAWebViewMode.flow").ViewModeSurface.CHAT);
        const xn = r("useWAWebMessageHoverBar")();
        const transparentGaps = r("useWAWebIsHoverBarEnabled")() && !Ae;
        const Pn = xn.menuOwnerMsgId != null && xn.menuOwnerMsgId === msg.id.toString();
        const Nn = xn.menuOwnerMsgId != null && !Pn;
        const Mn = (t, n)=>{
            if (Pn) {
                return n;
            }
            return t;
        };
        const wn = o("useWAWebMessageAriaLabel").useMessageAriaLabel(msg, Dn, In);
        const An = ()=>!Ae && !(msg.type === o("WAWebMsgType").MSG_TYPE.CHAT && msg.subtype === o("WAWebBotGenTypingIndicatorMsg").BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE) && O !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY && O !== o("WAWebDisplayType").DISPLAY_TYPE.CONTACT_CARD && O !== o("WAWebDisplayType").DISPLAY_TYPE.EDITING && O !== o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS && O !== o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS;
        const Fn = transparentGaps && An() && selectable !== true;
        let On = wn;
        if (yn && oe_isKeyboardUser && An()) {
            On = wn != null ? s._("{messageContent} For more options, press left or right arrow key to access context menu", [
                s._param("messageContent", wn)
            ]) : s._("For more options, press left or right arrow key to access context menu");
        }
        useEffect(function() {
            if (oe_isKeyboardUser && In.atLeastOnceKeyboardUser === false) {
                Tn(U);
            }
        }, [
            oe_isKeyboardUser
        ]);
        useEffect(function() {
            ln(false);
        }, [
            Ct
        ]);
        useEffect(function() {
            return function() {
                if (ueRef.current) {
                    if (onMsgBlur != null) {
                        onMsgBlur();
                    }
                }
            };
        }, [
            onMsgBlur
        ]);
        const Bn = o("WAWebWrapperHandlers").getHandlers(msg);
        const { handleMsgInfoClick, handleOpenBizEncStateMismatchInfoPopup, handleOpenBizPrivacyInfoPopup, handleOpenContactChat, handleOpenEphemeralExemptionInfoPopup, handleOpenEphemeralInfoPopup, handleOpenMarketingMessagesFeedbackPopup } = Bn;
        const jn = function(t) {
            if (!t.buttons && !hover && An()) {
                rn(true);
            }
        };
        const Kn = function() {
            rn(false);
        };
        const Qn = function() {
            if (An()) {
                Kn();
            }
        };
        const XnRef = useRef(false);
        const Yn = r("useWAWebStableCallback")(function() {
            return {
                onReply: fr,
                onEdit: Qr,
                onMoreOptions,
                menuContent,
                displayType: O,
                returnFocusToMessage: Fr
            };
        });
        const Jn = function() {
            return wtRef.current?.matches(":hover") === true || MtRef.current?.matches(":hover") === true;
        };
        const Zn = ()=>{
            if (!XnRef.current && Fn && qo_menuRef.current == null) {
                gn(true);
                const e = wtRef.current;
                if (e != null) {
                    xn.onHoverStart(e, msg, Be, Yn(), Jn);
                }
            }
        };
        const er = function(t) {
            if (!an) {
                Zn();
            }
        };
        const tr = function() {
            gn(false);
            xn.onHoverEnd();
        };
        const onPointerEnter = function() {
            XnRef.current = true;
            tr();
        };
        const onPointerLeave = function(t) {
            let e;
            XnRef.current = false;
            const t_relatedTarget = t.relatedTarget;
            if (t_relatedTarget instanceof Node && (e = wtRef.current) != null && e.contains(t_relatedTarget)) {
                er();
            }
        };
        const isMsgGallery = o("WAWebDisplayType").isMsgGalleryDisplay(O);
        const multiSelect = o("WAWebDisplayType").isConversationDisplay(O);
        const ir = o("WAWebEmbeddedChatContext").useIsEmbeddedChat();
        const isWideDisplay = o("WAWebDisplayType").isWideDisplay(O);
        const sr = ()=>{
            const n = OtRef.current?.contains(document.activeElement) ?? false;
            return oe_isKeyboardUser && n;
        };
        const ur = function() {
            const e = selectable == null || selectable === false;
            const t = sr();
            Sn(!Oe && multiSelect && e && (fn || Zt != null || Xt != null || t));
        };
        const cr = r("useWAWebDebouncedCallback")(ur, o("WAWebWrapperConstants").DEBOUNCE_DURATION.REACTION_BUTTON);
        const dr = function() {
            gn(true);
            if (!transparentGaps) {
                cr();
            }
        };
        const mr = function() {
            gn(false);
            if (!transparentGaps) {
                cr();
            }
        };
        const pr = ()=>{
            cr();
        };
        const onMessageDeleteClick = function() {
            if (multiSelect) {
                Hr(o("WAWebMultiSelectBar.react").MultiSelectMode.DELETE);
            } else {
                o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
                    chat: St,
                    msgList: [
                        msg
                    ].map(o("WAWebStateUtils").unproxy),
                    isMsgVisible
                }));
            }
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession();
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected();
        };
        var fr = function() {
            o("WAWebMessageHandlers").handleMessageReply(St, msg, o("WAWebWamEnumQuotedMessageUserJourneyEntryPoint").QUOTED_MESSAGE_USER_JOURNEY_ENTRY_POINT.CONTEXT_MENU_REPLY_BUTTON, {
                replyInPlace: ir
            });
        };
        const onAskMetaAiClick = function() {
            o("WAWebMessageHandlers").handleAskMetaAi(msg);
        };
        const onPrivateReplyClick = function() {
            o("WAWebModalManager").closeModalManager();
            const t = o("WAWebStateUtils").unproxy(msg);
            r("WAWebReplyToMsgChatAction")(t).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[private msg reply] failed to privately reply to msg"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("private-msg-reply-failed");
            });
        };
        const onMessageSaveAsClick = function() {
            const e = o("WAWebStateUtils").unproxy(msg);
            if ((n("cr:219") == null ? undefined : n("cr:219").trySaveAs(e)) !== true) {
                o("WAWebFileSaver").FileSaver.initDownload(e);
            }
        };
        const onShareClick = function() {
            if (n("cr:7565")) {
                n("cr:7565").saveMediaFile(o("WAWebStateUtils").unproxy(msg)).then(()=>{
                    if (n("cr:13786")) {
                        return n("cr:13786").shareFile(o("WAWebStateUtils").unproxy(msg));
                    }
                }).catch((e)=>{
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while sharing a message: ",
                        ""
                    ])), e);
                });
            }
        };
        const onMessageDownloadClick = function() {
            if (n("cr:7565")) {
                n("cr:7565").saveMediaFile(o("WAWebStateUtils").unproxy(msg)).catch((e)=>{
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while downloading a message: ",
                        ""
                    ])), e);
                });
            } else {
                o("WAWebFileSaver").FileSaver.initDownload(o("WAWebStateUtils").unproxy(msg));
            }
        };
        const onMessageDocumentCopyClick = function() {
            if (n("cr:7565")) {
                n("cr:7565").copyMediaFile(o("WAWebStateUtils").unproxy(msg)).then((e)=>{
                    o("WAWebToastManager").ToastManager.open(v.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("File copied: {fileName}", [
                            s._param("fileName", e)
                        ])
                    }));
                }).catch((e)=>{
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while copying a message: ",
                        ""
                    ])), e);
                });
            }
        };
        const onBotPositiveFeedbackClick = function() {
            onSubmit(o("WAWebBotTypes").BotFeedbackKind.POSITIVE);
        };
        const RrComponent = function() {
            const Component = r("WAWebBotFeedbackModal.react");
            o("WAWebModalManager").ModalManager.open(<Component msg={msg} onSubmit={onSubmit}/>);
        };
        var onSubmit = function(t) {
            o("WAWebSendBotFeedbackAction").sendBotFeedback(msg, t);
            o("WAWebToastManager").ToastManager.open(v.jsx(o("WAWebToast.react").Toast, {
                msg: s._("Feedback submitted to Meta")
            }));
            o("WAWebModalManager").ModalManager.close();
        };
        const ErComponent = function() {
            new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
                supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.THUMB_DOWN_CLICKED
            }).commit();
            const Component = r("WAWebSupportBotNegativeFeedbackModal");
            o("WAWebModalManager").ModalManager.open(<Component msgKey={msg.id} onSubmit={o("WAWebSendSupportBotFeedbackActions").handleSupportBotFeedbackSubmit}/>);
        };
        const onSupportBotPositiveFeedbackClick = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({
                    supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.THUMB_UP_CLICKED
                }).commit();
                yield o("WAWebSendSupportBotFeedbackActions").handleSupportBotFeedbackSubmit(msg.id, [
                    "positive"
                ]);
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const onPinClick = function() {
            const e = new (o("WAWebPinnedMessagesUserJourneyLogger")).PinnedMessagesUserJourneyLogger(St);
            e.messageMenuClickPin(msg);
            o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebPinMessageModal.react"), {
                msg,
                logger: e
            }));
        };
        const onUnpinClick = function() {
            const e = o("WAWebPinInChatCollection").PinInChatCollection.getByParentMsgKey(msg.id);
            new (o("WAWebPinnedMessagesUserJourneyLogger")).PinnedMessagesUserJourneyLogger(St).messageMenuClickUnpin(msg, e);
            o("WAWebSendPinMessageAction").sendPinInChatMsg(msg, o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNPIN_FOR_ALL).catch((e)=>{
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Error while unpinning a message: ",
                    ""
                ])), e);
            });
        };
        const onStarClick = function() {
            const e = o("WAWebStateUtils").unproxy(msg);
            o("WAWebCmd").Cmd.sendStarMsgs(St, [
                e
            ]);
        };
        const onUnstarClick = function() {
            const e = o("WAWebStateUtils").unproxy(msg);
            o("WAWebCmd").Cmd.sendUnstarMsgs(St, [
                e
            ]);
        };
        const onKeepClick = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    yield o("WAWebKeepInChatActions").runKeepInChatUX(o("WAWebStateUtils").unproxy(msg), o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.CHAT);
                } catch (error) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Keep operation not complete. Reason: ",
                        ""
                    ])), r("getErrorSafe")(error).message ?? "unknown");
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const onUndoKeepClick = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    yield o("WAWebKeepInChatActions").runUndoKeepInChatUX(o("WAWebStateUtils").unproxy(msg), o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.CHAT);
                } catch (error) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "UndoKeep operation not complete. Reason: ",
                        ""
                    ])), r("getErrorSafe")(error).message ?? "unknown");
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const onFavoriteStickerClick = function() {
            o("WAWebFavoriteStickerAction").addStickerMsgsToFavorites([
                o("WAWebStateUtils").unproxy(msg)
            ]);
        };
        const onUnfavoriteStickerClick = function() {
            o("WAWebFavoriteStickerAction").removeStickerMsgFromFavorites(o("WAWebStateUtils").unproxy(msg));
        };
        const onAddToNoteClick = function() {
            r("WAWebAddMsgToNoteAction")(msg);
        };
        const focus = function(t) {
            if (OtRef.current) {
                r("WAWebFocusTracer").focus(OtRef.current, t);
            }
        };
        var Fr = r("useWAWebStableCallback")(function() {
            focus({
                preventScroll: true
            });
        });
        const Or = r("useWAWebStableCallback")(function() {
            if (oe_isKeyboardUser) {
                Fr();
            }
        });
        const Br = r("useWAWebStableCallback")(function(e) {
            Fr();
            Kt(null);
            if (e != null) {
                o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.contextMenuDismissed();
            }
            if (oe_isKeyboardUser) {
                rn(false);
            }
        });
        const Wr = r("useWAWebStableCallback")(function() {
            Fr();
            onReactionPickerOpen(null);
            if (jt != null) {
                Kt(null);
            }
            if (oe_isKeyboardUser) {
                gn(false);
            }
            cr();
            o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayClose();
            qtRef.current = false;
        });
        const qr = r("useWAWebStableCallback")(function() {
            if (UtRef.current != null) {
                UtRef.current.remove();
                UtRef.current = null;
            }
            if (HtRef.current != null) {
                HtRef.current();
                HtRef.current = null;
            }
        });
        const Ur = r("useWAWebStableCallback")(function(e = false) {
            if (!e) {
                Fr();
            }
            en(null);
            _oRef.current = null;
            qr();
            if (qo_menuRef.current == null && Xo_menuRef.current == null) {
                xn.onMessageMenuClose(msg.id.toString());
            }
            if (oe_isKeyboardUser) {
                gn(false);
            }
            cr();
            if (!qtRef.current) {
                o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayClose();
            }
            toRef.current = false;
            noRef.current++;
        });
        const onDetailsPaneClosed = function() {
            Fr();
        };
        var Hr = function(t, n) {
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession();
            if (n) {
                n.stopPropagation();
            }
            if (onMessageSelect) {
                onMessageSelect(o("WAWebStateUtils").unproxy(msg), !un, t, n);
            } else {
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "no onMessageSelect"
                ]))).sendLogs("wrapper-onSelectClick");
            }
        };
        const Gr = function() {
            return OtRef.current;
        };
        const getBubbleElement = function() {
            return wtRef.current;
        };
        const highlight = function(t) {
            if (wtRef.current) {
                ln(true);
                se(PtRef.current, "animationend", function() {
                    ln(false);
                    if (Jn()) {
                        Zn();
                    }
                });
                if (isFocusable && t !== true) {
                    focus({
                        preventScroll: true
                    });
                }
            }
        };
        const onForwardClick = function() {
            o("WAWebMessageHandlers").handleOpenForwardFlow({
                multiSelect,
                msg: o("WAWebStateUtils").unproxy(msg),
                handleSelectClick: Hr
            });
        };
        var Qr = function() {
            if (o("WAWebMsgActionCapability").canEnterEditingFlow(msg)) {
                o("WAWebBizAiMessageEditActionLog").logBizAiMessageEditActionClickIfEligible(msg);
                o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebMessageEditFlow.react"), {
                    msg
                }));
            }
        };
        const onRTAClick = function() {
            o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
                reportToAdminInteraction: o("WAWebWamEnumReportToAdminInteraction").REPORT_TO_ADMIN_INTERACTION.CLICK_SEND_FOR_ADMIN_REVIEW,
                groupId: o("WAWebFrontendMsgGetters").getChat(msg).id.user
            });
            o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebReportToAdminPopup.react"), {
                msg
            }));
        };
        const onAddPaidPartnershipLabelClick = function() {
            o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebPaidPartnershipLabelModal.react"), {
                msg
            }));
        };
        const onAddAiContentLabelClick = function() {
            o("WAWebNewsletterAddAiContentLabelFlow").runAddAiContentLabelFlow(msg);
        };
        const ZrRef = useRef(r("WAWebNoop"));
        const eoRef = useRef(r("WAWebNoop"));
        var toRef = useRef(false);
        var noRef = useRef(0);
        const roRef = useRef(true);
        useEffect(function() {
            roRef.current = true;
            return function() {
                roRef.current = false;
            };
        }, []);
        const ooRef = useRef(null);
        r("useWAWebOnUnmount")(function() {
            ooRef.current?.();
            xn.onMessageMenuClose(msg.id.toString());
        });
        const aoRef = useRef(r("WAWebNoop"));
        const io = r("useWAWebStableCallback")(function(e) {
            o("WAWebSendReactionMsgAction").sendReactionToMsg(msg, e).then(()=>{
                o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionSelect(e);
            }).catch((e)=>{});
            qtRef.current = false;
            ZrRef.current();
            Ur();
        });
        const lo = r("useWAWebStableCallback")(function() {
            qtRef.current = false;
            if (toRef.current) {
                toRef.current = false;
                return;
            }
            Ur();
        });
        const so = r("useWAWebReactionEmojiPickerMenu")({
            targetRef: VtRef,
            msgId: Re.toString(),
            onSelection: io,
            align: "middle",
            onClose: lo,
            themeXstyle: wallpaperStyle
        });
        const { closeMenu, isMenuOpen, menuPortal, openMenu } = so;
        useEffect(function() {
            ZrRef.current = closeMenu;
        }, [
            closeMenu
        ]);
        var _oRef = useRef(null);
        const fo = useState(false);
        const go = fo[0];
        const ho = fo[1];
        const yo = useState(P);
        const pickerAnimationStore = yo[0];
        const bo = r("useWAWebStableCallback")(function({ anchor, dirX, dirY, disableAutoFocus, entryPoint, msgLocal, onCollapseEmojiPicker, onShiftTabToMenu, onTabToMenu, rotateFocusArrowsRef }) {
            const onReaction = function(t) {
                o("WAWebSendReactionMsgAction").sendReactionToMsg(msgLocal, t).then(()=>{
                    o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionSelect(t);
                }).catch((e)=>{});
                cr();
                qtRef.current = false;
                ZrRef.current();
                eoRef.current();
                Ur();
            };
            const Component = r("WAWebRightClickReactionBarContainer.react");
            const Component_1 = r("WAWebPortalThemeWrapper.react");
            return {
                dirY,
                dirX,
                type: o("WAWebDropdown.react").MenuType.ReactionSendTray,
                menu: <Component_1 wallpaperStyle={wallpaperStyle}><Component ref={VtRef} msg={msgLocal} pickerAnimationStore={pickerAnimationStore} onReaction={onReaction} onOpenEmojiPicker={function() {
                    qtRef.current = true;
                    ho(true);
                    openMenu();
                }} onCollapseEmojiPicker={onCollapseEmojiPicker} onMouseEnter={dr} onMouseLeave={mr} onShiftTabToMenu={onShiftTabToMenu} onTabToMenu={onTabToMenu} rotateFocusArrowsRef={rotateFocusArrowsRef} userJourneyEntryPoint={entryPoint} disableAutoFocus={disableAutoFocus}/></Component_1>,
                flipOnRTL: true,
                anchor,
                isMenuContent: true
            };
        });
        const vo = r("useWAWebStableCallback")(function(msgLocal, t, n, dirX = o("WAWebDropdown.react").DirX.CENTER, dirY = o("WAWebDropdown.react").DirY.TOP, disableAutoFocus, onTabToMenu, onShiftTabToMenu, rotateFocusArrowsRef, onCollapseEmojiPicker) {
            const d = {
                msgLocal,
                anchor: t,
                entryPoint: n,
                dirX,
                dirY,
                disableAutoFocus,
                onTabToMenu,
                onShiftTabToMenu,
                rotateFocusArrowsRef,
                onCollapseEmojiPicker
            };
            _oRef.current = d;
            noRef.current++;
            pickerAnimationStore.updateSnapshot({
                canAnimateExpand: go,
                isExpanded: d.onCollapseEmojiPicker != null && isMenuOpen
            });
            en(bo(d));
        });
        useEffect(function() {
            pickerAnimationStore.updateSnapshot({
                canAnimateExpand: go,
                isExpanded: _oRef.current?.onCollapseEmojiPicker != null && isMenuOpen
            });
        }, [
            go,
            isMenuOpen,
            pickerAnimationStore
        ]);
        const So = r("useWAWebStableCallback")(function(e, t, n, a) {
            if (o("WAWebReactionsUtils").canReactToMessage(e)) {
                if (!o("WAWebFrontendChatGetters").getIsCAG(o("WAWebFrontendMsgGetters").getChat(e)) && !o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(e))) {
                    o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(o("WAWebFrontendMsgGetters").getChat(e));
                }
                const l = n.current?.getBoundingClientRect();
                if (l != null) {
                    qr();
                    const s = o("WAWebMessageUiUtils").calculateReactionTrayPosition(l);
                    const { anchorX, anchorY, dirX, dirY } = s;
                    const p = o("WAWebMessageUiUtils").createVirtualAnchor(anchorX, anchorY);
                    if (document.body != null) {
                        document.body.appendChild(p);
                    }
                    UtRef.current = p;
                    const _ = function() {
                        const n_current = n.current;
                        if (n_current != null) {
                            const t = o("WAWebKeyboardTabUtils").getTabbableElements(n_current, o("WAWebKeyboardTabUtils").FocusType.TABBABLE)[0];
                            if (t != null) {
                                r("WAWebFocusTracer").focus(t);
                            }
                        }
                    };
                    const f = function() {
                        const n_current = n.current;
                        if (n_current != null) {
                            const t = o("WAWebKeyboardTabUtils").getTabbableElements(n_current, o("WAWebKeyboardTabUtils").FocusType.TABBABLE);
                            const a = t[t.length - 1];
                            if (a != null) {
                                r("WAWebFocusTracer").focus(a);
                            }
                        }
                    };
                    const g = n.current;
                    if (g != null) {
                        if (o("WAWebABProps").getABPropConfigValue("web_detached_dom_unmount_cleanup")) {
                            HtRef.current = N(g, GtRef);
                        } else {
                            const h = g;
                            const y = function(t) {
                                if (!(t.key !== "Tab" || !t.shiftKey)) {
                                    const e = o("WAWebKeyboardTabUtils").getTabbableElements(h, o("WAWebKeyboardTabUtils").FocusType.TABBABLE);
                                    if (!(e.length === 0 || h.ownerDocument.activeElement !== e[0])) {
                                        const n = GtRef.current;
                                        if (n != null) {
                                            t.preventDefault();
                                            t.stopPropagation();
                                            n.focusFirst();
                                        }
                                    }
                                }
                            };
                            h.addEventListener("keydown", y, true);
                            HtRef.current = function() {
                                h.removeEventListener("keydown", y, true);
                            };
                        }
                    }
                    vo(e, p, t, dirX, dirY, !oe_isKeyboardUser, _, f, GtRef, a != null ? function() {
                        toRef.current = true;
                        ho(true);
                        const noRef_current = noRef.current;
                        closeMenu();
                        o("ReactDOM").flushSync(function() {
                            a();
                        });
                        window.requestAnimationFrame(function() {
                            window.requestAnimationFrame(function() {
                                if (!(!roRef.current || noRef.current !== noRef_current)) {
                                    aoRef.current(e, t, n, a);
                                }
                            });
                        });
                    } : null);
                }
            }
        });
        useEffect(function() {
            aoRef.current = So;
        }, [
            So
        ]);
        const Ro = r("useWAWebStableCallback")(function(e, t, n) {
            if (o("WAWebReactionsUtils").canReactToMessage(e)) {
                if (!o("WAWebFrontendChatGetters").getIsCAG(o("WAWebFrontendMsgGetters").getChat(e)) && !o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(e))) {
                    o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(o("WAWebFrontendMsgGetters").getChat(e));
                }
                const a = BtRef.current?.getBoundingClientRect().left !== 0 ? BtRef.current : NtRef.current;
                self.setTimeout(function() {
                    vo(e, a, n, o("WAWebDropdown.react").DirX.CENTER, o("WAWebDropdown.react").DirY.TOP, false);
                }, 50);
            }
        });
        const getMsgComponentRef = function() {
            return $tRef.current?.getRef();
        };
        const msgComponentRef = r("useWAWebStableCallback")(function(e) {
            $tRef.current = {
                getRef: function() {
                    return e;
                }
            };
        });
        const onToggleReactionTray = function() {
            if (Zt) {
                Ur();
            } else {
                Ro(msg, undefined, o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.MACOS_MESSAGE_REACTION_BUTTON);
            }
        };
        const Io = ()=>{
            if (o("WAWebChatGetters").getIsNewsletter(o("WAWebFrontendMsgGetters").getChat(msg))) {
                o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebReportNewsletterPostPopup.react"), {
                    chat: o("WAWebFrontendMsgGetters").getChat(msg),
                    msg,
                    spamFlow: o("WAWebSpamConstants").SpamFlow.MessageMenu
                }));
                return;
            }
            o("WAWebModalManager").ModalManager.open(v.jsx(r("WAWebReportMsgPopup.react"), {
                msg,
                spamFlow: o("WAWebSpamConstants").SpamFlow.MessageMenu
            }));
        };
        const To = function(t) {
            if (oe_isKeyboardUser && selectable === true) {
                t.preventDefault();
                Hr();
                return;
            }
            const e = getMsgComponentRef();
            if (e?.handleKeyActivation != null) {
                e.handleKeyActivation(t);
            }
        };
        const Do = ()=>{
            const e = sr();
            return An() && selectable !== true && (hover && !an || current === true || !!jt || e);
        };
        const xo = ()=>{
            let e;
            let t;
            if (fe) {
                e = function(t) {
                    t.preventDefault();
                    t.stopPropagation();
                    o("WAWebPttPrefs").PttPrefs.increasePlaybackRateFor(Re);
                };
                t = function(t) {
                    t.preventDefault();
                    t.stopPropagation();
                    o("WAWebPttPrefs").PttPrefs.decreasePlaybackRateFor(Re);
                };
            }
            return {
                enter: To,
                space: To,
                "shift+>": e,
                "shift+<": t
            };
        };
        const isFileInCache = o("WAWebMediaDocumentUtils").useIsFileInCacheState(msg.id) === true;
        const PoRef = useRef("full");
        const NoRef = useRef(null);
        const Mo = useState(null);
        const rightClickedLinkHref = Mo[0];
        const Ao = Mo[1];
        const Component = r("WAWebBroadcastMessageDropdownMenu.react");
        const Component_1 = r("WAWebWrapperMessageDropdownMenu.react");
        const Fo = xt ? <Component msg={msg} onStarClick={onStarClick} onUnstarClick={onUnstarClick}/> : <Component_1 msg={msg} associatedMessages={Dn} isFileInCache={isFileInCache} isEmbeddedChat={ir} onKeepClick={onKeepClick} onUndoKeepClick={onUndoKeepClick} displayType={O} onMsgInfoClick={handleMsgInfoClick} onReplyClick={fr} onPrivateReplyClick={onPrivateReplyClick} onMessageDownloadClick={onMessageDownloadClick} onMessageSaveAsClick={onMessageSaveAsClick} onMessageDocumentCopyClick={onMessageDocumentCopyClick} onBotPositiveFeedbackClick={onBotPositiveFeedbackClick} onMessageSelectClick={Hr} onBotNegativeFeedbackClick={RrComponent} onSupportBotPositiveFeedbackClick={onSupportBotPositiveFeedbackClick} onSupportBotNegativeFeedbackClick={ErComponent} onStarClick={onStarClick} onUnstarClick={onUnstarClick} onFavoriteStickerClick={onFavoriteStickerClick} onUnfavoriteStickerClick={onUnfavoriteStickerClick} onMessageDeleteClick={onMessageDeleteClick} onOpenContactChatClick={handleOpenContactChat} onForwardClick={onForwardClick} onShareClick={onShareClick} onCopyFavoriteStickerClick={onCopyFavoriteStickerClick} onCopyLottieStickerClick={onCopyLottieStickerClick} onOpenStickerPackClick={onOpenStickerPackClick} onReactionClick={function() {
            return Ro(msg, undefined, o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.MACOS_MESSAGE_MENU_ITEM_REACTION);
        }} onReportClick={function() {
            return Io(msg);
        }} onEditClick={Qr} onRTAClick={onRTAClick} onPinClick={onPinClick} onUnpinClick={onUnpinClick} onNewsletterEmbedClick={function() {
            return o("WAWebNewsletterMsgLinkUtils").handleNewsletterMsgEmbedClick(msg);
        }} onNewsletterMessageLinkCopyClick={function() {
            return o("WAWebNewsletterMsgLinkUtils").handleNewsletterMessageLinkCopyClick(msg);
        }} onAddToNoteClick={onAddToNoteClick} onAddAiContentLabelClick={onAddAiContentLabelClick} onAddPaidPartnershipLabelClick={onAddPaidPartnershipLabelClick} onAskMetaAiClick={onAskMetaAiClick} rightClickedLinkHref={rightClickedLinkHref}/>;
        const Component_2 = r("WDSMenu.react");
        const Component_3 = r("WAWebPortalThemeWrapper.react");
        const Oo = <Component_3><Component_2 useMaxWidth={false} maxWidth={300}>{PoRef.current === "full" ? Fo : n("cr:7237") == null ? undefined : n("cr:7237").getWAWebMessageDebugMenuItems(msg)}</Component_2></Component_3>;
        const Component_4 = r("WDSMenu.react");
        var menuContent = <Component_4 useMaxWidth={false} maxWidth={300}>{Fo}</Component_4>;
        function Wo() {
            ooRef.current?.();
            if (!qtRef.current) {
                xn.onMessageMenuClose(msg.id.toString());
            }
            o("WAWebModalManager").ModalManager.exists(function(e) {
                if (!qtRef.current) {
                    Ur(e);
                }
            });
        }
        const qo = r("useWDSMenu")({
            targetRef: WtRef,
            menu: Oo,
            contextMenuArea: true,
            enableUIM: true,
            onClose: Wo
        });
        const { closeMenu: closeMenu_1, isMenuOpen: isMenuOpen_1, menuPortal: menuPortal_1 } = qo;
        var qo_menuRef = qo.menuRef;
        const qo_openMenu = qo.openMenu;
        const joRef = useRef(null);
        const xn_menuOwnerMsgId = xn.menuOwnerMsgId;
        useEffect(function() {
            const joRef_current = joRef.current;
            joRef.current = xn_menuOwnerMsgId;
            if (!(!Fn || joRef_current == null || xn_menuOwnerMsgId != null || XnRef.current || !xn.isBarPointerRaised())) {
                const t = wtRef.current;
                if (!(t == null || !Jn())) {
                    gn(true);
                    xn.onHoverStart(t, msg, Be, Yn(), Jn);
                }
            }
        }, [
            Yn,
            Fn,
            xn,
            Be,
            xn_menuOwnerMsgId,
            msg
        ]);
        function Qo() {
            xn.onMessageMenuClose(msg.id.toString());
            o("WAWebModalManager").ModalManager.exists(function(e) {
                if (!e) {
                    Fr();
                }
                Ur(true);
            });
        }
        const Component_5 = r("WAWebPortalThemeWrapper.react");
        const Xo = r("useWDSMenu")({
            targetRef: NtRef,
            menu: <Component_5>{menuContent}</Component_5>,
            enableUIM: true,
            onClose: Qo
        });
        const { closeMenu: closeMenu_2, isMenuOpen: isMenuOpen_2, menuPortal: menuPortal_2 } = Xo;
        var Xo_menuRef = Xo.menuRef;
        const Xo_openMenu = Xo.openMenu;
        useEffect(function() {
            if (isMenuOpen_2) {
                eoRef.current = closeMenu_2;
            } else if (isMenuOpen_1) {
                eoRef.current = closeMenu_1;
            } else {
                eoRef.current = r("WAWebNoop");
            }
        }, [
            closeMenu_2,
            closeMenu_1,
            isMenuOpen_2,
            isMenuOpen_1
        ]);
        const na = function(t) {
            en(null);
            qr();
            qtRef.current = false;
            ho(false);
            if (isMenuOpen) {
                closeMenu();
            }
            if ((document.getSelection()?.toString() ?? "") === "") {
                t.stopPropagation();
                if (r("gkx")("16539")) {
                    const i = o("WAWebStateUtils").unproxy(msg);
                    window.msg = i;
                    o("WAWebCmd").Cmd.trigger("debug-msg-changed", i);
                    if (window.Debug.msgHandler) {
                        window.Debug.msgHandler();
                    }
                }
                if (o("WAWebMsgLinkContextMenuUtils").shouldShowNativeMenuForLink(t)) {
                    if (isMenuOpen_1) {
                        closeMenu_1();
                    }
                    xn.onHoverEnd();
                    return;
                }
                if (!An()) {
                    if (n("cr:7237") != null) {
                        PoRef.current = "debug";
                        qo_openMenu(t);
                    }
                    return;
                }
                PoRef.current = "full";
                Ao(o("WAWebMsgLinkContextMenuUtils").getLinkHrefFromEvent(t));
                NoRef.current = {
                    clientX: t.clientX,
                    clientY: t.clientY
                };
                const l = isMenuOpen_1;
                o("ReactDOM").flushSync(function() {
                    qo_openMenu(t);
                });
                xn.onHoverEnd();
                xn.onMessageMenuOpen(msg.id.toString());
                const s = function() {
                    So(msg, o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.MESSAGE_MENU_ITEM_REACTION, qo_menuRef, transparentGaps ? function() {
                        const NoRef_current = NoRef.current;
                        xn.onMessageMenuOpen(msg.id.toString());
                        qo_openMenu(NoRef_current != null ? new MouseEvent("contextmenu", {
                            button: 2,
                            clientX: NoRef_current.clientX,
                            clientY: NoRef_current.clientY,
                            bubbles: true,
                            cancelable: true
                        }) : undefined);
                    } : undefined);
                };
                if (transparentGaps) {
                    if (ooRef.current != null) {
                        ooRef.current();
                    }
                    ooRef.current = $(qo_menuRef, ()=>{
                        if (roRef.current) {
                            s();
                        }
                    });
                } else if (l) {
                    window.requestAnimationFrame(function() {
                        window.requestAnimationFrame(s);
                    });
                } else {
                    s();
                }
            }
        };
        const onToggle = function() {
            Ao(null);
            xn.onMessageMenuOpen(msg.id.toString());
            ho(false);
            Xo_openMenu();
            self.setTimeout(function() {
                So(msg, o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.MESSAGE_MENU_ITEM_REACTION, Xo_menuRef, transparentGaps ? Xo_openMenu : undefined);
            }, 150);
        };
        var onMoreOptions = function() {
            Ao(null);
            xn.onMessageMenuOpen(msg.id.toString());
            Xo_openMenu();
        };
        const AaComponent = (t, n, event)=>{
            if (n && jt) {
                Kt(null);
                onReactionPickerOpen(null);
                en(null);
                return;
            }
            const e = n ? NtRef.current : t;
            const Component = r("WAWebWrapperMessageDropdownMenuReactionsTray.react");
            const Component_1 = r("WAWebBroadcastMessageDropdownMenu.react");
            const Component_2 = r("WAWebWrapperMessageDropdownMenu.react");
            const i = <>{!transparentGaps && r("WAWebWrapperMessageDropdownMenuReactionsTray.react") ? <Component anchor={e} msg={msg} onMouseEnter={dr} onMouseOver={dr} onMouseLeave={mr} onReactionSent={function() {
                cr();
                Kt(null);
                o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.trayClose();
            }} isSentByMe={Be} isWideDisplay={isWideDisplay} onReactionPickerOpen={onReactionPickerOpen}/> : null}{xt ? <Component_1 msg={msg} onStarClick={onStarClick} onUnstarClick={onUnstarClick}/> : <Component_2 msg={msg} associatedMessages={Dn} isFileInCache={isFileInCache} isEmbeddedChat={ir} onKeepClick={onKeepClick} onUndoKeepClick={onUndoKeepClick} displayType={O} onMsgInfoClick={handleMsgInfoClick} onReplyClick={fr} onPrivateReplyClick={onPrivateReplyClick} onMessageDownloadClick={onMessageDownloadClick} onMessageSaveAsClick={onMessageSaveAsClick} onMessageDocumentCopyClick={onMessageDocumentCopyClick} onBotPositiveFeedbackClick={onBotPositiveFeedbackClick} onMessageSelectClick={Hr} onBotNegativeFeedbackClick={RrComponent} onSupportBotPositiveFeedbackClick={onSupportBotPositiveFeedbackClick} onSupportBotNegativeFeedbackClick={ErComponent} onStarClick={onStarClick} onUnstarClick={onUnstarClick} onFavoriteStickerClick={onFavoriteStickerClick} onUnfavoriteStickerClick={onUnfavoriteStickerClick} onMessageDeleteClick={onMessageDeleteClick} onOpenContactChatClick={handleOpenContactChat} onForwardClick={onForwardClick} onShareClick={onShareClick} onCopyFavoriteStickerClick={function(t) {
                o("WAWebCopyToClipboard").copyImageToClipboard(t);
            }} onCopyLottieStickerClick={function(t) {
                o("WAWebCopyStickerToClipboard").copyLottieStickerToClipboard(t);
            }} onOpenStickerPackClick={function(t) {
                return o("WAWebCmd").Cmd.openStickerPack(t);
            }} onReactionClick={function() {
                return Ro(msg, undefined, o("WAWebWamEnumReactionUserJourneyEntryPoint").REACTION_USER_JOURNEY_ENTRY_POINT.MACOS_MESSAGE_MENU_ITEM_REACTION);
            }} onReportClick={function() {
                return Io(msg);
            }} onEditClick={Qr} onRTAClick={onRTAClick} onPinClick={onPinClick} onUnpinClick={onUnpinClick} onNewsletterEmbedClick={function() {
                return o("WAWebNewsletterMsgLinkUtils").handleNewsletterMsgEmbedClick(msg);
            }} onNewsletterMessageLinkCopyClick={function() {
                return o("WAWebNewsletterMsgLinkUtils").handleNewsletterMessageLinkCopyClick(msg);
            }} onAddToNoteClick={onAddToNoteClick} onAddAiContentLabelClick={onAddAiContentLabelClick} onAddPaidPartnershipLabelClick={onAddPaidPartnershipLabelClick} onAskMetaAiClick={onAskMetaAiClick} rightClickedLinkHref={event != null ? o("WAWebMsgLinkContextMenuUtils").getLinkHrefFromEvent(event) : null}/>}</>;
            if (event != null) {
                Kt({
                    menu: i,
                    event
                });
            } else {
                Kt({
                    menu: i,
                    anchor: e,
                    theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Compact,
                    autoFocus: oe_isKeyboardUser
                });
            }
        };
        const ia = function(t) {
            const e = o("WAWebStateUtils").unproxy(msg);
            if (!(!o("WAWebMsgReply").canReplyMsg(e) || selectable === true || !multiSelect || jt || Zt)) {
                const n = (t, target)=>{
                    for(let e = target; e;){
                        if (e === t) {
                            return true;
                        }
                        e = e.parentNode;
                    }
                    return false;
                };
                if (t.target instanceof HTMLElement && (n(wtRef.current, t.target) || n(BtRef.current, t.target))) {
                    if (r("gkx")("16539") && e.isViewOnce && !isPeeking && (Be || o("WAWebViewOnceState").isViewed(e.safe()))) {
                        pn(true);
                    }
                    return;
                }
                o("WAWebMessageHandlers").handleMessageReply(St, msg, o("WAWebWamEnumQuotedMessageUserJourneyEntryPoint").QUOTED_MESSAGE_USER_JOURNEY_ENTRY_POINT.MESSAGE_DOUBLE_TAP, {
                    replyInPlace: ir
                });
                highlight();
            }
        };
        const la = ()=>{
            if (An()) {
                rn(true);
                AaComponent(undefined, true);
            }
        };
        const onSelectChange = function(t) {
            if (un !== t) {
                cn(t);
            }
        };
        const ua = function(t, n) {
            if (OtRef.current) {
                o("WAWebDomScroll").scrollAt(OtRef.current, undefined, n).then(t);
            }
        };
        const resend = function() {
            o("WAWebResendMsgAction").resendMsg(msg).catch((e)=>{
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "wrapper:resend failure: ",
                    ""
                ])), e);
            });
        };
        const highlightMention = function() {};
        useImperativeHandle(t_ref, function() {
            return {
                focus,
                openContextMenu: qo_openMenu,
                getBubbleElement,
                getContainerElement: Gr,
                getMsgComponentRef,
                resend
            };
        });
        const ma = r("useWAWebEventTargetValue")(msg, "change", function() {
            return o("WAWebMsgActionCapability").canQuickForwardMsg(msg);
        });
        const pa = r("useWAWebEventTargetValue")(msg, "change", function() {
            return o("WAWebMsgGetters").getIsMarketingTemplateTag(msg);
        });
        o("useWAWebListener").useListener(msg, "revoked", function() {
            if (jt) {
                Br(o("WAWebUim").DismissReason.LIFECYCLE);
            }
            if (Zt) {
                Ur();
            }
            if (Xt) {
                Wr();
            }
        });
        o("useWAWebListener").useListener(document, "selectionchange", function() {
            if ((document.getSelection()?.toString() ?? "") !== "") {
                Kn();
            }
        });
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "media_viewer_modal", Kn);
        const _a = o("WAWebWrapperShouldDisplayAuthor").shouldDisplayAuthor({
            msg,
            position,
            displayType: O
        });
        let fa;
        const ga = multiSelect ? 0 : -1;
        if (Do() && !transparentGaps) {
            const ha = msg.id.fromMe ? null : msg.senderObj;
            const ya = ha != null ? s._("Context menu for message from {senderName}", [
                s._param("senderName", o("WAWebFrontendContactGetters").getDisplayName(ha))
            ]) : s._("Open message options");
            const Component = r("WAWebMessageMenu.react");
            fa = <Component key="icon-context" msg={msg} hasAuthor={_a} displayType={O} onToggle={onToggle} role="button" ariaLabel={ya} tabIndex={ga} isMenuOpen={!!jt}/>;
        }
        const Ca = <div className="x10l6tqk xyc4j8s xceh6e4" ref={NtRef}/>;
        let ba = null;
        const va = o("useWAWebMessageAriaDescription").useMessageAriaDescription(msg, Dn, In) || On;
        const Sa = s._("Checkbox, {checkbox-state} , {msg-contents}", [
            s._param("checkbox-state", un ? "selected" : "unselected"),
            s._param("msg-contents", va)
        ]);
        if (!Ae && x.selectable === true && !(msg.type === o("WAWebMsgType").MSG_TYPE.CHAT && msg.subtype === o("WAWebBotGenTypingIndicatorMsg").BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE)) {
            const msgTheme = O === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY || O === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY_LINKS ? "gallery" : null;
            const Component = r("WAWebMessageCheckbox.react");
            ba = <Component checked={!!un} onClick={function(t) {
                Hr(undefined, t);
                o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.messageForwardSelect(!!un);
            }} msgTheme={msgTheme} ariaLabel={Sa}/>;
        }
        let La = null;
        if (Ye === o("WAWebMsgType").MSG_TYPE.STICKER && x.selectable === true) {
            La = <span><div className="x10l6tqk x11uqc5h xh8yej3 x5yr21d x1ypdohk" onMouseEnter={AtRef.current?.startAnimation} onClick={function(t) {
                return Hr(undefined, t);
            }}/></span>;
        }
        let ka = false;
        if (Ye === o("WAWebMsgType").MSG_TYPE.CHAT) {
            const Ia = o("WAWebCodeFormatMutator").Code.match(ye);
            ka = Ia.length === 1 && Ia[0][4][0].length === ye.length;
        }
        const Ta = o("useWAWebChatValues").useOptionalChatValues(St.id, [
            o("WAWebChatGetters").getIsPSA
        ]) ?? [];
        const Da = Ta[0];
        const xa = o("WAWebWrapperShouldHaveTail").shouldHaveTail({
            chat: St,
            isDisplayedAsNotification: Ae,
            displayType: O,
            tailOverride: x.tailOverride,
            position
        });
        const $a = yt && (!_a || Be || !Pe && !Ge) && (multiSelect && (position === o("WAWebMessagePosition").MsgPosition.FRONT || position === o("WAWebMessagePosition").MsgPosition.SINGLE) || !multiSelect);
        const Pa = x.selectable !== true && (multiSelect || O === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO || O === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS || O === o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG);
        const Na = ve === true && !Ae && !$e;
        const showHostedBizEncStateMismatchInfoAction = Te === true && !Pe && o("WAWebFrontendMsgGetters").getChat(msg)?.contact?.isOrHasBeenHosted === true;
        const showQuickForwardAction = Pa && ma;
        const showQuickMarketingMessagesFeedbackAction = Ye !== o("WAWebMsgType").MSG_TYPE.UNKNOWN && Pa && pa && !o("WAWebMarketingMessagesUserFeedbackGatingUtils").isMMUserControlsExceptionNumberPrefixMatch(o("WAWebFrontendMsgGetters").getChat(msg)?.contact?.id);
        const showQuickBizPrivacyInfoAction = ot != null && !Oe && !St.id.isBot() && !St.id.isCAPISupportAccount() && msg.invokedBotWid == null;
        let Oa;
        const isOutgoingMsg = Be && !isWideDisplay;
        const isRead = !St.isUnreadMsg(msg);
        const qa = useMemo(function() {
            return {
                isOutgoing: Be,
                isRead
            };
        }, []);
        if (!yt && msg && multiSelect && o("WAWebReactionsUtils").shouldShowReactionBubble(msg, o("WAWebAddOnBubbleType").AddOnBubbleType.DEFAULT)) {
            const Component = r("WAWebAddOnBubblesContainer.react");
            Oa = <Component displayType={O} isOutgoingMsg={isOutgoingMsg} bubbleType={Ye === o("WAWebMsgType").MSG_TYPE.IMAGE ? o("WAWebAddOnBubbleType").AddOnBubbleType.IMAGE_MSG : o("WAWebAddOnBubbleType").AddOnBubbleType.DEFAULT} parentIds={[
                msg.id.toString()
            ].concat(Dn.map((e)=>e.id.toString()))} onDetailsPaneClosed={onDetailsPaneClosed} hasReaction={ut || Dn.some((e)=>o("WAWebMsgGetters").getHasReaction(e))} canHaveComments={o("WAWebFrontendChatGetters").getIsCAG(St)} insightsChipMsg={msg}/>;
        }
        const showQuickEphemeralExemptionInfoAction = o("WAWebWrapperOrderEphemeralExemption").isMessageExemptedFromDisappearing(St, msg);
        const Va = showQuickBizPrivacyInfoAction || Na || showHostedBizEncStateMismatchInfoAction || showQuickForwardAction || showQuickMarketingMessagesFeedbackAction || showQuickEphemeralExemptionInfoAction;
        const Ha = "x1n2onr6";
        const Ga = !Ae && O !== o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT && O !== o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS;
        const za = !Ae && Be || O === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO;
        const ja = !Ae && !Be;
        const Ka = O === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO;
        const Qa = O === o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS;
        const Xa = Qa && msg.questionReplyQuotedMessage != null;
        const Ya = O !== o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS && O !== o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG && Da;
        const Ja = isWideDisplay || Ae;
        const Za = Ja || Xa;
        const ei = Za && Ye !== o("WAWebMsgType").MSG_TYPE.ALBUM || Ae;
        const ti = o("WAWebClassnames").classnamesConvertMeToStylexPlease((C || (C = r("stylex")))(F.msg, ce_rightDrawerOpen && !Ja && F.msgThreePanel, !o("WAWebChatGetters").getIsGroup(St) && o("WAWebMessageOneOnOneChatPadding.stylex").styles.base, !o("WAWebChatGetters").getIsGroup(St) && ce_rightDrawerOpen && o("WAWebMessageOneOnOneChatPadding.stylex").styles.threePanel, Qa && F.wrapperChannelAlerts, Qa && ce_rightDrawerOpen && F.wrapperChannelAlertsThreePanel, za && F.rowAlignEnd, ja && F.rowAlignStart, Xa && F.rowAlignStart, pt && F.msgDeletePending, Ae && o("WAWebSystemMessageStyles.stylex").systemMessageStyles.msgSystem, Ka && F.msgInfo, Ka && ce_rightDrawerOpen && F.msgInfoThreePanel, Ja && o("WAWebSystemMessageStyles.stylex").systemMessageStyles.msgAnnouncement, isWideDisplay && F.wideDisplayRow, Ya && F.msgPSARow, ei && (ce_rightDrawerOpen ? o("WAWebSystemMessageStyles.stylex").systemMessageStyles.msgAnnouncementProportionalThree : o("WAWebSystemMessageStyles.stylex").systemMessageStyles.msgAnnouncementProportionalTwo), ce_rightDrawerOpen && Ja && o("WAWebSystemMessageStyles.stylex").systemMessageStyles.msgAnnouncementThree, isMsgGallery && F.msgGallery, Ka && Va && F.msgWithQuickAction, O === o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS && F.msgScheduled), {
            [o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME]: isFocusable
        }, {
            0: "",
            4: "x1klvx2g xahtqtb",
            2: "xl9ihdk x1hq3j7i x1dr3g3m",
            6: "x1klvx2g xahtqtb xl9ihdk x1hq3j7i x1dr3g3m",
            1: "xxp0q0x x1q3qbx4 xa3vuyk x10e4vud x47corl",
            5: "x1klvx2g xahtqtb xxp0q0x x1q3qbx4 xa3vuyk x10e4vud x47corl",
            3: "xxp0q0x x1q3qbx4 xa3vuyk x10e4vud x47corl",
            7: "x1klvx2g xahtqtb xxp0q0x x1q3qbx4 xa3vuyk x10e4vud x47corl"
        }[!!Ga << 2 | (an === true) << 1 | !!vt << 0]);
        const ni = o("WAWebWrapperConstants").NO_PADDING_SUBTYPES.includes(msg.subtype);
        const ri = H(msg, O, St);
        const oi = ri === "groupNotificationContextCardContainer";
        const ai = msg.type === o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION && msg.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BbProCreate;
        const ii = q(ri, isMsgGallery, Ka, Ja);
        const { base, context, notifColor } = ii;
        const ci = !yt;
        const di = !bt && (za || Ae || ja && !isMinimalMode);
        const mi = C(o("WAWebSystemMessageStyles.stylex").systemMessageStyles.message, F.teeLockHoverInset, Fn && !Nn && F.hoverTintTrigger, o("WAWebABProps").getABPropConfigValue("wa_web_highlight_me_mention") && F.messageHighlightMention, yn && oe_isKeyboardUser && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent, yn && oe_isKeyboardUser && F.messageFocused, xa && x.tailOverride === "left" && F.messageTailOverrideStart, xa && x.tailOverride === "right" && F.messageTailOverrideEnd, base, ka && F.messageCode, isMsgGallery && F.galleryMessage, Ka && F.infoMessage, Qa && F.channelAlertsMessage, Xa && F.channelAlertsQuestionReplyMessage, context, Ae && o("WAWebSystemMessageStyles.stylex").systemMessageStyles.messageSystem, ni && F.messageSystemNoPadding, Ya && F.psaMessage, oi && F.groupNotificationContextCardContainer, ai && F.businessBroadcastContextCardContainer, notifColor, bt && F.groupHistoryMessage, di && bubbleStyle, Dt && o("WAWebVibrantOutgoingOverrides.stylex").vibrantOutgoingLiteralStyles.root, O === o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS && F.messageScheduledFullWidth);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "animate_message_bubble", function(e, t) {
            if (e.toString() === Re.toString()) {
                En(t);
            }
        });
        const shouldAnimation = o("WAWebBotGating").shouldAnimateAsBotStream(msg);
        const componentClass = o("WAWebClassnames").classnamesConvertMeToStylexPlease(C(ci && o("WAWebSystemMessageStyles.stylex").systemMessageStyles.messageBackground, ci && r("gkx")("9189") && F.noZIndex, ci && ja && F.messageBackgroundIncoming, ci && za && F.messageBackgroundOutgoing, ci && transparentGaps && ja && (Rt ? Mn(F.hoverTintBubbleIncomingDark, F.hoverTintBubbleIncomingDarkHeld) : Mn(F.hoverTintBubbleIncomingLight, F.hoverTintBubbleIncomingLightHeld)), ci && transparentGaps && za && (Dt || Rt ? Mn(F.hoverTintBubbleOutgoingWhite, F.hoverTintBubbleOutgoingWhiteHeld) : Mn(F.hoverTintBubbleOutgoingAccent, F.hoverTintBubbleOutgoingAccentHeld)), ci && xa && ja && F.bgTailFlatTopLeft, ci && xa && za && F.bgTailFlatTopRight, ci && xa && x.tailOverride === "left" && F.bgTailOverrideLeft, ci && xa && x.tailOverride === "right" && F.bgTailOverrideRight, !Ae && !yt && F.hasBorderBox, shouldAnimation && F.msgBubbleAnimation), bt && !yt && "x9lmoot x1ppz1d2", Ln != null && (C || (C = r("stylex")))(Ln));
        let transitionName;
        if (jt) {
            transitionName = "none";
        } else if (Fe) {
            transitionName = "pop-fast-reverse";
        } else {
            transitionName = "pop-fast";
        }
        let gi;
        if (Xt) {
            const Component = o("WAWebUimUie.react").UIE;
            gi = <Component displayName="MsgReactionPicker" escapable popable dismissOnWindowResize requestDismiss={Wr}>{v.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: Xt
            })}</Component>;
        } else if (Zt) {
            const Component = o("WAWebUimUie.react").UIE;
            gi = <Component displayName="MsgReactionTray" escapable popable dismissOnWindowResize requestDismiss={function() {
                return Ur();
            }}>{v.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: Zt
            })}</Component>;
        }
        let hi;
        if (x.isFocusedMsg === true) {
            hi = v.jsx(o("WAWebWrapperListeners.react").WhileFocusedListener, {
                parent: {
                    scrollMsg: ua,
                    highlight,
                    highlightMention
                }
            });
        }
        let yi;
        if (selectedMessages) {
            yi = v.jsx(o("WAWebWrapperListeners.react").SelectionListener, {
                parent: {
                    onSelectChange
                },
                msgId: Re.toString(),
                selectedMessages
            });
        }
        const Ci = [];
        const bi = showQuickBizPrivacyInfoAction || showHostedBizEncStateMismatchInfoAction || showQuickForwardAction || showQuickMarketingMessagesFeedbackAction || showQuickEphemeralExemptionInfoAction;
        let vi = null;
        if (bi) {
            const Si = {
                onOpenBizEncStateMissmatchInfoPopup: handleOpenBizEncStateMismatchInfoPopup,
                showHostedBizEncStateMismatchInfoAction,
                showQuickBizPrivacyInfoAction,
                onOpenBizPrivacyInfoPopup: handleOpenBizPrivacyInfoPopup,
                showQuickForwardAction,
                onOpenForwardFlow: function(multiSelect) {
                    o("WAWebMessageHandlers").handleOpenForwardFlow({
                        msg,
                        handleSelectClick: Hr,
                        multiSelect,
                        onForward: function(t) {
                            o("WAWebForwardUtils").showForwardedToast(t.length);
                        }
                    });
                    o("WAWebForwardActionUserJourneyLogger").ForwardActionUserJourneyLogger.fastForwardButtonTapped(St.id, msg);
                },
                showQuickMarketingMessagesFeedbackAction,
                onOpenMarketingMessagesFeedback: handleOpenMarketingMessagesFeedbackPopup,
                showQuickEphemeralExemptionInfoAction,
                onOpenEphemeralExemptionInfoPopup: handleOpenEphemeralExemptionInfoPopup
            };
            vi = v.jsx(r("WAWebWrapperQuickActionButton.react"), babelHelpers.extends({}, Si));
        }
        const atBubbleCorner = vi != null && Na;
        const Component_6 = r("WAWebWrapperEphemeralInfoButton.react");
        const Li = Na ? <Component_6 onClick={handleOpenEphemeralInfoPopup} atBubbleCorner={atBubbleCorner}/> : null;
        const Ei = atBubbleCorner ? null : Li;
        const Component_7 = r("WAWebWrapperReactionsQuickActionButton.react");
        const ki = o("WAWebReactionsUtils").canReactToMessage(msg) ? <Component_7 ref={BtRef} msg={msg} showButton={showButton} onToggleReactionTray={onToggleReactionTray}/> : null;
        let Ii = vi ?? Ei;
        if (transparentGaps && Ii != null) {
            Ii = <span className="x78zum5" onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave}>{Ii}</span>;
        }
        const Ti = Ei != null && ki != null && showButton;
        if (Ti) {
            if (ki != null && !transparentGaps) {
                Ci.push(ki);
            }
            if (Ii != null) {
                Ci.push(Ii);
            }
        } else {
            if (Ii != null) {
                Ci.push(Ii);
            }
            if (ki != null && !transparentGaps) {
                Ci.push(ki);
            }
        }
        let Di;
        if (Ve) {
            Di = v.jsx(o("WAWebWrapperListeners.react").MediaListener, {
                forceUpdate,
                mediaData: Ve
            });
        }
        let xi = "msg-container";
        if (Ae) {
            xi = "msg-notification-container";
        }
        let $i;
        if (xa) {
            let Pi;
            if (x.tailOverride === "left") {
                Pi = o("WAWebWrapperGetTailIcon").getTailIcon(o("WAWebWrapperConstants").MSG_DIRECTION.IN);
            } else if (x.tailOverride === "right") {
                Pi = o("WAWebWrapperGetTailIcon").getTailIcon(o("WAWebWrapperConstants").MSG_DIRECTION.OUT);
            } else {
                Pi = o("WAWebWrapperGetTailIcon").getTailIcon(Be);
            }
            const Ni = ja || x.tailOverride === "left";
            const Mi = za || x.tailOverride === "right";
            const wi = [
                F.tail,
                Ni && F.tailLeft,
                Mi && F.tailRight,
                o("WAWebStylesEnv").hasSafariFix && Ni && F.tailLeftSafari,
                o("WAWebStylesEnv").hasSafariFix && Mi && F.tailRightSafari,
                $a && F.tailHidden
            ];
            $i = <Pi xstyle={[].concat(wi, [
                ja && F.tailColorIncoming,
                za && F.tailColorOutgoing,
                transparentGaps && ja && (Rt ? Mn(F.hoverTintTailIncomingDark, F.hoverTintTailIncomingDarkHeld) : Mn(F.hoverTintTailIncomingLight, F.hoverTintTailIncomingLightHeld)),
                transparentGaps && za && (Dt || Rt ? Mn(F.hoverTintTailOutgoingWhite, F.hoverTintTailOutgoingWhiteHeld) : Mn(F.hoverTintTailOutgoingAccent, F.hoverTintTailOutgoingAccentHeld))
            ])} containerRef={MtRef} aria-hidden/>;
        }
        const Ai = msg.safe();
        const bizVPVData = r("useWAWebBizVPVData")(msg.unsafe());
        const Oi = Ai.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && Ai.carouselCards != null ? v.jsx(r("WAWebInteractiveMessageCarousel.react"), {
            displayType: x.displayType,
            msgKey: Ai.id,
            mainMsgWrapperRef: PtRef,
            isMsgVisible: x.isMsgVisible,
            msgComponentRef,
            bizVPVData
        }) : null;
        const Bi = r("WAWebWid").isCAPISupportAccount(msg?.from) && msg.isSupportAIMessage === true && o("WAWebABPropsSaga").getIsSagaV1CarouselEnabled() && msg.supportCitations != null && msg.supportCitations.length > 0 ? v.jsx(r("WAWebSupportCarousel"), {
            items: msg.supportCitations?.map(function(e) {
                return {
                    title: e.title,
                    subtitle: e.subtitle,
                    cmsId: e.cmsId,
                    imageUrl: e.imageUrl
                };
            }) ?? []
        }) : null;
        let Wi;
        let qi;
        if (tt && Ze) {
            Wi = v.jsx(r("WAWebBizTemplateButtons.react"), {
                msgKey: msg.id,
                chat: St
            });
        } else if (lt != null && lt.length > 0 && O !== o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS && O !== o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG) {
            qi = v.jsx(r("WAWebMessageButtons.react"), {
                msgKey: msg.id
            });
        }
        let Ui;
        if (Ae || position === o("WAWebMessagePosition").MsgPosition.MID) {
            Ui = null;
        } else if (Be && ge == null && Ye !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION && Ye !== o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT) {
            const Component = o("WAWebAccessibility.react").InvisibleLabel;
            Ui = <Component>{s._("You:")}</Component>;
        } else if (!Pe) {
            const Component = o("WAWebAccessibility.react").InvisibleLabel;
            Ui = <Component>{s._("{author}:", [
                s._param("author", o("WAWebMsgModelUtils").getMsgDisplayName(msg))
            ])}</Component>;
        }
        let Vi = null;
        if (ke) {
            const Component = o("WAWebAccessibility.react").InvisibleLabel;
            Vi = <Component>{s._("This is a disappearing message")}</Component>;
        }
        const Hi = o("WAWebMsgGetters").getIsInitialE2ENotification(msg);
        const Gi = v.jsx(r("WAWebWrapperMessageActionButtonsRow"), {
            isOutgoingMsg: !isWideDisplay && Be,
            isMsgGallery,
            messageActionButtons: Ci,
            positionLeft: za && !isWideDisplay || ja && isMsgGallery,
            positionRight: ja || za && isWideDisplay,
            transparentGaps
        }, `msg-action-button-row-${Re.toString()}`);
        const Component_8 = r("WAWebMessageComponentWrapper.react");
        const Component_9 = r("WAWebMentionMessageContext").Provider;
        const Component_10 = r("WAWebGroupMetadataContext").Provider;
        const Component_11 = o("WAWebErrorBoundary.react").ErrorBoundary;
        const Component_12 = r("WAWebVelocityTransitionGroup");
        const Component_13 = r("WAWebBubbleAnimationWrapper.react");
        const zi = <Component_13 shouldAnimation={shouldAnimation} bubbleRef={wtRef} msg={msg} componentClass={componentClass}>{transparentGaps && fn && xn.isBridgeActiveForMsg(msg.id.toString()) && <div className="x10l6tqk x1v4kod4 x1ey2m1c x1m55yg7 x75ztot x67bb7w" data-testid="reactions_hover_bar_bridge_zone" onPointerEnter={xn.cancelDismiss}/>}<div {...babelHelpers.extends({}, C.props(Dt && o("WAWebVibrantOutgoingOverrides.stylex").vibrantOutgoingContentStyles.root, transparentGaps && fn && xn.isBridgeActiveForMsg(msg.id.toString()) && F.bubbleContentAboveBridge, Dt && o("WAWebVibrantOutgoingOverrides.stylex").vibrantOutgoingTheme), {
            children: [
                Ui,
                <Component_11 name="msg"><Component_10 value={St.groupMetadata}><Component_9 value={qa}><Component_8 msgComponentRef={$tRef} chat={St} displayAuthor={_a} displayType={O} hover={hover} isMsgVisible={isMsgVisible} msg={msg} associatedMessages={Dn} position={position} onProductClick={onProductClick} onMessageClick={onMessageClick} forwardStickerRef={AtRef} stickerLikeBubbleContainerRef={FtRef} isFollowUpReply={isFollowUpReply}/>{v.jsx(r("WAWebViewRepliesLabel.react"), {
                    msg: msg.safe()
                })}{v.jsx(r("WAWebNewsletterActionButtonWrapper.react"), {
                    msgKey: msg.id
                })}</Component_9></Component_10></Component_11>,
                <Component_12 transitionName={transitionName}>{fa}</Component_12>,
                Ca
            ]
        })}/>{Wi}{transparentGaps && Ci.length > 0 && Gi}</Component_13>;
        const ji = atBubbleCorner ? <div className="x1n2onr6 x78zum5">{zi}<div {...babelHelpers.extends({}, {
            0: {
                className: "x10l6tqk x1ey2m1c x2hswfz x150mmf0"
            },
            1: {
                className: "x10l6tqk x1ey2m1c x1eu7cjg xqf2s3x"
            }
        }[!!(!isWideDisplay && Be) << 0], {
            children: Li
        })}/></div> : zi;
        const Component_14 = r("WAWebVelocityTransitionGroup");
        const Component_15 = o("WAWebErrorBoundary.react").ErrorBoundary;
        const Component_16 = n("cr:5997");
        const Ki = <div aria-label={On} className={ti} role={Hi ? "button" : undefined} ref={PtRef}><Component_14 transitionName="delay-leave">{ba}</Component_14><div ref={WtRef} data-testid={xi} className={mi} onContextMenu={na} onMouseOver={transparentGaps ? undefined : jn} onMouseEnter={transparentGaps ? er : jn} onMouseLeave={transparentGaps ? tr : Qn}>{$i}{ee && <Component_15 name="msg-row-group-profile-picture-wrapper">{v.jsx(r("WAWebWrapperGroupProfilePicture.react"), {
            position,
            tailOverride: x.tailOverride,
            msg,
            selectable: x.selectable
        })}</Component_15>}{We && n("cr:5997") && <Component_16 isPeeking={isPeeking} onAnimationEnd={function() {
            return pn(false);
        }}/>}{v.jsx(r("WAWebMsgFailIcon.react"), {
            displayType: O,
            msg,
            associatedMessages: Dn
        })}{La}{ji}{!transparentGaps && Gi}{qi}{Vi}{Bi}</div>{v.jsx(r("WAWebBizAiInlineFeedbackSlotLoadable.react"), {
            displayType: O,
            msg,
            selectable
        })}{Oa}{gi}{menuPortal_1}{menuPortal_2}{menuPortal}{hi}{yi}{Di}</div>;
        const topBottomMargin = r("gkx")("22770") ? 750 : 4000;
        function Xi(e) {
            let t;
            if (e.getModifierState("Control") && e.target instanceof Node && !((t = wtRef.current) != null && t.contains(e.target))) {
                Hr(undefined, e);
            }
        }
        const Component_17 = r("CometVirtualization.react");
        const Component_18 = o("WAWebKeyboardHotKeys.react").HotKeys;
        const Yi = <Component_18 className={Ha} xstyle={[
            o("WAWebSystemMessageStyles.stylex").systemMessageStyles.messageRow,
            (position === o("WAWebMessagePosition").MsgPosition.FRONT || position === o("WAWebMessagePosition").MsgPosition.MID) && !(tt && et) && !isWideDisplay && F.messageContinuation,
            bt && F.groupHistoryMessageRow,
            bt && (Rt ? F.groupHistoryMessageRowDark : F.groupHistoryMessageRowLight),
            O === o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS && F.messageRowScheduled
        ]} data-id={Re.id} data-testid={`conv-msg-${Re.id}`} handlers={xo()} onClick={n("cr:23046") != null && n("cr:23046").isWindowsHybridEnabled() ? Xi : null} onDoubleClick={ia} ref={OtRef} tabIndex={-1} onFocus={function() {
            onMsgFocus?.();
            ueRef.current = true;
            Cn(true);
            pr();
            if (Fn && oe_isKeyboardUser && qo_menuRef.current == null) {
                const e = wtRef.current;
                if (e != null) {
                    xn.onFocusStart(e, msg, Be, Yn());
                }
            }
        }} onBlur={function() {
            onMsgBlur?.();
            ueRef.current = false;
            Cn(false);
            pr();
            if (transparentGaps) {
                xn.onFocusEnd(msg.id.toString());
            }
        }} onMouseOver={transparentGaps ? undefined : dr} onMouseEnter={transparentGaps ? undefined : dr} onMouseLeave={transparentGaps ? undefined : mr}><Component_17 fasterSizeMeasurement={r("justknobx")._("1789")} unmountHiddenChildren={x.isFocusedMsg !== true} hiddenMode="none" pinChildrenOnInteraction={false} topBottomMargin={topBottomMargin} initialRenderConfig={{
            isVisible: true,
            nodeHeight: null,
            hasScrollAnchoring: true
        }}>{Ki}</Component_17>{Oi}</Component_18>;
        const Component_19 = r("WAWebKeyboardRotateFocusArrows.react");
        const Component_20 = r("WAWebWrapperDisplayTypeContext").Provider;
        const Component_21 = r("WAWebExpandableTextContext").Provider;
        return <Component_21 value={Or}><Component_20 value={O}><Component_19 role="row">{Yi}</Component_19></Component_20></Component_21>;
    }
    V.displayName = `${V.name} [from ${i.id}]`;
    function H(msg, displayType, n) {
        if (msg.isViewOnce) {
            return "messageChat";
        }
        const a = o("WAWebMessagePluginMsgDisplayClass").msgDisplayClass({
            msg,
            displayType
        });
        if (a != null) {
            return a;
        }
        switch(msg.type){
            case o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE:
                return "messageChat";
            case o("WAWebMsgType").MSG_TYPE.GP2:
                if ((msg.subtype === "create" && o("WAWebUserPrefsMeUser").isMeAccount(n.groupMetadata?.owner) || (msg.subtype === "add" || msg.subtype === "invite") && o("WAWebUserPrefsMeUser").isMeAccount(msg.recipients[0])) && !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n)) {
                    return "groupNotificationContextCardContainer";
                }
                return undefined;
            case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE:
                if (o("WAWebWrapperConstants").NON_E2E_NOTIFICATION_SUBTYPES.includes(msg.subtype)) {
                    return "messageNonE2ENotification";
                }
                if (o("WAWebMsgGetters").getIsBizNotification(msg)) {
                    return "messageBizNotification";
                }
                return undefined;
            case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
                if (msg.subtype === "encrypt" && o("WAWebMsgGetters").getIsCAPISupport(msg) || msg.subtype === "chat_psa") {
                    return "messageNonE2ENotification";
                }
                return "messageE2ENotification";
            case o("WAWebMsgType").MSG_TYPE.CIPHERTEXT:
            case o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER:
                return "messageChat messagePlaceholder";
            case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
                return "messageChat messagePlaceholder";
            case o("WAWebMsgType").MSG_TYPE.DEBUG:
                return;
            default:
                return;
        }
    }
    Wrapper.displayName = "Wrapper";
    function Wrapper(e) {
        const n = o("react-compiler-runtime").c(12);
        let r;
        let a;
        if (n[0] !== e) {
            a = e.ref;
            r = babelHelpers.objectWithoutPropertiesLoose(e, y);
            n[0] = e;
            n[1] = r;
            n[2] = a;
        } else {
            r = n[1];
            a = n[2];
        }
        const i = `${r.errorBoundaryName}-message-wrapper`;
        let l;
        if (n[3] !== r.msg.id) {
            l = r.msg?.id?.toString() ?? "";
            n[3] = r.msg.id;
            n[4] = l;
        } else {
            l = n[4];
        }
        const c = `msgId: ${l} msgType: ${r.msg.type}, msgSubtype: ${r.msg.subtype ?? "unknown"}`;
        let d;
        if (n[5] !== r || n[6] !== a) {
            d = <V {...babelHelpers.extends({
                ref: a
            }, r)}/>;
            n[5] = r;
            n[6] = a;
            n[7] = d;
        } else {
            d = n[7];
        }
        let m;
        if (n[8] !== i || n[9] !== c || n[10] !== d) {
            const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
            m = <Component name={i} description={c} sendLogs>{d}</Component>;
            n[8] = i;
            n[9] = c;
            n[10] = d;
            n[11] = m;
        } else {
            m = n[11];
        }
        return m;
    }
    function onCopyFavoriteStickerClick(e) {
        o("WAWebCopyToClipboard").copyImageToClipboard(e);
    }
    function onCopyLottieStickerClick(e) {
        o("WAWebCopyStickerToClipboard").copyLottieStickerToClipboard(e);
    }
    function onOpenStickerPackClick(e) {
        o("WAWebCmd").Cmd.openStickerPack(e);
    }
    l.default = Wrapper;
}, 226);