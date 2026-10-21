__d("WAWebHeader.react", [
    "fbt",
    "WAWebAdaptiveLayoutContext.react",
    "WAWebBotUtils",
    "WAWebBroadcastMenuDropdown.react",
    "WAWebBroadcastSubtitle.react",
    "WAWebCallButtonsSurface",
    "WAWebChatAssignmentNux.react",
    "WAWebChatAssignmentUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatHeaderTextStatusBubble.react",
    "WAWebChatstateGetters",
    "WAWebCmd",
    "WAWebCommerceButton.react",
    "WAWebConnGetters",
    "WAWebContactGetters",
    "WAWebContactMenuDropdown.react",
    "WAWebConversationPanelStyleUtils",
    "WAWebErrorBoundary.react",
    "WAWebFbtCommon",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupChatImage.react",
    "WAWebGroupMenuDropdown.react",
    "WAWebGroupMetadataGetters",
    "WAWebGroupSubtitle.react",
    "WAWebHatchFrontendGating",
    "WAWebHatchThemedHeaderLoadable",
    "WAWebHeaderBusinessState.react",
    "WAWebHeaderInfoPanelActions",
    "WAWebHeaderLabelRendering",
    "WAWebHeaderStatus.react",
    "WAWebHeaderSubtitlePlaceholder",
    "WAWebInitialsFromNameUtils",
    "WAWebMenuBar.react",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingTos",
    "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
    "WAWebMobilePlatforms",
    "WAWebNewBroadcastHeaderButton.react",
    "WAWebNewsletterChatHeaderSubtitle.react",
    "WAWebNewsletterChatMenuDropdown.react",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataGetters",
    "WAWebOrgMemberLidEligibility",
    "WAWebPrivacyBlurWrapper.react",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebShouldShowCallButtons",
    "WAWebStackedCirclesImage.react",
    "WAWebStateUtils",
    "WAWebStatusLoadingRingOverlay.react",
    "WAWebStylesEnv",
    "WAWebSubgroupSwitcherButton.react",
    "WAWebTabOrder",
    "WAWebThemeContext",
    "WAWebTos",
    "WAWebVoipCallButtonsLoadable",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WDSFocusStateStyles",
    "WDSIconIcArrowBack.react",
    "WDSIconIcHistory.react",
    "WDSIconIcMoreVert.react",
    "WDSIconIcSearch.react",
    "WDSIconWdsIcMetaDataChevron.react",
    "WDSMenuBarItem.react",
    "WDSPaddings.stylex",
    "WDSProfilePhoto.react",
    "cr:7940",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebChatValues",
    "useWAWebChatstateValues",
    "useWAWebConnValues",
    "useWAWebContactValues",
    "useWAWebConversationHeaderActions",
    "useWAWebConversationHeaderShortcuts",
    "useWAWebDefaultProfileColors",
    "useWAWebForceUpdate",
    "useWAWebGroupAgentIndicator",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
    "useWAWebNewsletterMetadataValues",
    "useWAWebProfilePicThumbValues",
    "useWAWebStaticButtonA11y",
    "useWAWebUIM",
    "useWAWebVideoAvatarUrl"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useContext, useMemo, useRef, useState } = d;
    const g = {
        paddingBlock10: {
            paddingTop: "x889kno",
            paddingBottom: "x1a8lsjc",
            $$css: true
        }
    };
    const h = {
        buttonMargin: {
            marginInlineStart: "x150mmf0",
            $$css: true
        },
        backButtonMargin: {
            marginInlineEnd: "xqf2s3x",
            $$css: true
        },
        chatHeader: {
            position: "x1n2onr6",
            boxSizing: "x9f619",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            width: "xh8yej3",
            height: "x185czh",
            backgroundColor: "x1h3rtpe",
            "::after_position": "x1j6awrg",
            "::after_bottom": "x1te75w5",
            "::after_insetInlineStart": "x1iygr5g",
            "::after_width": "x4eaejv",
            "::after_height": "xcock1l",
            "::after_content": "x1s928wv",
            "::after_backgroundColor": "xl9llhp",
            "::after_borderBottomWidth": "x1qj619r",
            "::after_borderBottomStyle": "x1r9ni5o",
            "::after_borderBottomColor": "xb1pvdl",
            $$css: true
        },
        chatHeaderDarkOverride: {
            boxShadow: "xu306ak",
            "::after_display": "x1h1zc6f",
            $$css: true
        },
        chatHeaderStylesOverride: {
            backgroundColor: "x1280gxy",
            borderInlineStartStyle: "xstzfhl",
            $$css: true
        },
        chatHeaderMaterial: {
            "::after_content": "x1s928wv",
            "::after_display": "x1h1zc6f",
            $$css: true
        },
        chatBody: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            flexGrow: "x1iyjqo2",
            justifyContent: "xl56j7k",
            minWidth: "xeuugli",
            $$css: true
        },
        chevronInCircleIcon: {
            position: "x10l6tqk",
            insetInlineEnd: "xo2ifbc",
            left: null,
            right: null,
            bottom: "x1o583il",
            backgroundColor: "x1280gxy",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            cursor: "x1ypdohk",
            $$css: true
        }
    };
    const y = {
        shouldDisableStartCall: true,
        shouldShow: false
    };
    function C(e, t) {
        if (e) {
            return "channel";
        }
        if (t) {
            return "group";
        }
        return "person";
    }
    const b = 40;
    const v = 2;
    function SComponent(e) {
        const t = o("react-compiler-runtime").c(24);
        const { badge, chatAvatarType, colorId, initials, name, placeholderIcon, statusId, statusInteraction, statusRing, videoUrl } = e;
        let f;
        if (t[0] !== colorId) {
            f = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(colorId);
            t[0] = colorId;
            t[1] = f;
        } else {
            f = t[1];
        }
        const g = f;
        let h;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            h = [
                o("WAWebProfilePicThumbGetters").getImg
            ];
            t[2] = h;
        } else {
            h = t[2];
        }
        const y = o("useWAWebProfilePicThumbValues").useProfilePicThumbValues(g.id, h);
        const C = y[0];
        const S = initials === "" ? undefined : initials;
        let R;
        if (t[3] !== badge || t[4] !== S || t[5] !== statusInteraction || t[6] !== statusRing) {
            R = {};
            if (S != null) {
                R.initials = S;
            }
            if (badge != null) {
                R.badge = badge;
            }
            if (statusRing != null) {
                R.statusRing = statusRing;
            }
            if (statusInteraction != null) {
                R.interaction = statusInteraction;
            }
            t[3] = badge;
            t[4] = S;
            t[5] = statusInteraction;
            t[6] = statusRing;
            t[7] = R;
        } else {
            R = t[7];
        }
        let L;
        if (t[8] !== colorId) {
            L = o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(colorId);
            t[8] = colorId;
            t[9] = L;
        } else {
            L = t[9];
        }
        let customColor;
        if (t[10] !== colorId) {
            customColor = o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(colorId);
            t[10] = colorId;
            t[11] = customColor;
        } else {
            customColor = t[11];
        }
        let k;
        if (t[12] !== chatAvatarType || t[13] !== name || t[14] !== R || t[15] !== placeholderIcon || t[16] !== C || t[17] !== L || t[18] !== customColor || t[19] !== videoUrl) {
            k = c.jsx(r("WDSProfilePhoto.react"), babelHelpers.extends({
                type: chatAvatarType,
                name,
                src: C,
                videoSrc: videoUrl,
                size: "small",
                color: L,
                customColor,
                placeholderIcon,
                isDecorative: true
            }, R));
            t[12] = chatAvatarType;
            t[13] = name;
            t[14] = R;
            t[15] = placeholderIcon;
            t[16] = C;
            t[17] = L;
            t[18] = customColor;
            t[19] = videoUrl;
            t[20] = k;
        } else {
            k = t[20];
        }
        const I = k;
        if (statusRing == null || statusId == null) {
            return I;
        }
        let T;
        if (t[21] !== I || t[22] !== statusId) {
            const Component = r("WAWebStatusLoadingRingOverlay.react");
            T = <Component id={statusId} size={b} stroke={v}>{I}</Component>;
            t[21] = I;
            t[22] = statusId;
            t[23] = T;
        } else {
            T = t[23];
        }
        return T;
    }
    function R(t) {
        "use no forget";
        let l;
        let u;
        const { chat, onDismissMetaAiNullState, onSelectMessages, selectable, showMetaAiNullState, threadId } = t;
        const I = r("useWAWebUIM")();
        const videoUrl = r("useWAWebVideoAvatarUrl")(chat.id);
        const D = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const x = useContext(r("WAWebAdaptiveLayoutContext.react"));
        const x_isNarrow = x.isNarrow;
        const PRef = useRef(null);
        const NRef = useRef(null);
        const MRef = useRef(null);
        const chat_contact = chat.contact;
        const A = useState(function() {
            return o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted();
        });
        const F = A[0];
        const O = A[1];
        o("useWAWebListener").useListener(o("WAWebTos").TosManager, "change", function() {
            if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
                const e = o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted();
                if (F !== e) {
                    O(e);
                }
            }
        });
        const B = o("useWAWebChatValues").useChatValues(chat.id, [
            (l = o("WAWebChatGetters")).getId,
            (u = o("WAWebFrontendChatGetters")).getFormattedTitle,
            u.getPresence,
            l.getIsUser,
            l.getIsNewsletter,
            l.getIsGroup,
            l.getIsBroadcast,
            u.getGroupMetadata,
            l.getIsPSA,
            u.getContact,
            l.getName,
            u.getAssignedAgent,
            u.getIsAssignedToMe,
            u.getNewsletterMetadata,
            u.getMmSignalSharingExpirationWindow,
            l.getCapiThreadControl,
            u.getAttachMediaContents,
            u.getIsCameraCaptureDrawerOpen
        ]);
        const W = B[0];
        const q = B[1];
        const presence = B[2];
        const V = B[3];
        const H = B[4];
        const G = B[5];
        const z = B[6];
        const j = B[7];
        const K = B[8];
        const Q = B[9];
        const X = B[10];
        const Y = B[11];
        const J = B[12];
        const newsletterMetadata = B[13];
        const ee = B[14];
        const te = B[15];
        const ne = B[16];
        const re = B[17];
        const oe = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(newsletterMetadata?.id, [
            o("WAWebNewsletterMetadataGetters").getMembershipType,
            o("WAWebNewsletterMetadataGetters").getSuspended,
            o("WAWebNewsletterMetadataGetters").getTerminated
        ], {
            isStrong: true
        }) ?? [
            null,
            false,
            null
        ];
        const ae = oe[0];
        const ie = oe[1];
        const le = oe[2];
        const se = H && o("WAWebNewsletterGatingUtils").isNewsletterStatusThreadRingEnabled() && ie !== true;
        const ue = G;
        const ce = r("useWAWebIsKeyboardUser")();
        const ce_isKeyboardUser = ce.isKeyboardUser;
        const me = o("WAWebThemeContext").useIsDarkTheme();
        const pe = o("useWAWebChatstateValues").useChatstateValues(presence.chatstate, [
            o("WAWebChatstateGetters").getType
        ]);
        const _e = pe[0];
        const fe = o("useWAWebContactValues").useOptionalContactValues(chat_contact?.id, [
            o("WAWebContactGetters").getIsMe,
            o("WAWebFrontendContactGetters").getIsContactBlocked,
            o("WAWebContactGetters").getCalculatedStatusMute
        ]) ?? [
            false,
            false,
            false
        ];
        const ge = fe[0];
        const he = fe[1];
        const ye = fe[2];
        const Ce = s._("Profile details");
        const be = r("useWAWebConversationHeaderActions")({
            chat,
            headerRef: PRef,
            threadId,
            uim: I
        });
        const { openChatSearch, openProfileDetails, preventMenuWhileMidDrawerOpen } = be;
        const Le = o("WAWebHeaderStatus.react").useWAWebConversationHeaderStatus(chat, ue, se, ye, openProfileDetails);
        const { activeStatusId, chatStatusRing, handleAvatarClick, shouldUseStatusAvatarInteraction, statusInteraction } = Le;
        const xe = j?.hiddenSubgroup === true;
        const chatAvatarType = C(H, G);
        const Pe = chatAvatarType === "person" && chat_contact != null ? o("WAWebInitialsFromNameUtils").getInitialsFromContact(chat_contact) : {
            firstInitial: undefined,
            secondInitial: undefined
        };
        const { firstInitial, secondInitial } = Pe;
        const initials = chatAvatarType === "person" ? [
            firstInitial,
            secondInitial
        ].filter(Boolean).join("") : undefined;
        const Ae = r("useWAWebGroupAgentIndicator")(j);
        const badge = o("WAWebHeaderBusinessState.react").useWAWebConversationHeaderBadge(chat, Ae, xe);
        const placeholderIcon = o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(W);
        const BeRef = useRef(null);
        const We = useState(true);
        const qe = We[0];
        const Ue = We[1];
        const Ve = r("useWAWebStaticButtonA11y")(openProfileDetails);
        const He = Ve[0];
        const Ge = Ve[1];
        o("useWAWebListener").useListener(chat, "change:ephemeralDuration", D);
        r("useWAWebConversationHeaderShortcuts")(chat, threadId, I);
        const ze = !!ne || re;
        const je = o("useWAWebConnValues").useConnValues([
            o("WAWebConnGetters").getPushname
        ]);
        const Ke = je[0];
        const Qe = Y?.name;
        const assignmentSubtitle = useMemo(function() {
            const e = te !== o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN && o("WAWebChatAssignmentUtils").canAssignChat(chat);
            if (e && Qe != null) {
                return L(J, Qe);
            }
            return null;
        }, [
            te,
            chat,
            Qe,
            J
        ]);
        let wdsMenuToRender;
        let Je;
        if (V) {
            const Component = r("WAWebContactMenuDropdown.react");
            wdsMenuToRender = <Component chat={chat} onSearchChat={openChatSearch} onSelectMessages={onSelectMessages} enableChatThreadLogging threadId={threadId}/>;
            Je = chat_contact != null ? c.jsx(o("WAWebHeaderBusinessState.react").WAWebHeaderUserSubtitle, {
                assignmentSubtitle,
                chatId: W,
                chatstate: presence.chatstate,
                contact: chat_contact,
                location: "title",
                orgMemberLid: o("WAWebOrgMemberLidEligibility").getWAWebOrgMemberLid(W)?.user,
                presence,
                threadId
            }) : null;
        } else if (z) {
            wdsMenuToRender = c.jsx(r("WAWebBroadcastMenuDropdown.react"), {
                chat: o("WAWebStateUtils").unproxy(chat)
            });
            Je = c.jsx(r("WAWebBroadcastSubtitle.react"), {
                chat
            });
        } else if (G) {
            const groupMetadata = r("nullthrows")(j);
            const Component = r("WAWebGroupMenuDropdown.react");
            wdsMenuToRender = <Component chat={o("WAWebStateUtils").unproxy(chat)} onSearchChat={openChatSearch} onSelectMessages={onSelectMessages}/>;
            if (groupMetadata.isSuspendedOrTerminated()) {
                Je = null;
            } else if (!o("WAWebGroupMetadataGetters").getIsUnnamed(groupMetadata) || _e === "typing") {
                const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
                Je = <Component name="group-subtitle">{c.jsx(r("WAWebGroupSubtitle.react"), {
                    chatstate: presence.chatstate,
                    groupMetadata,
                    presence,
                    placeholder: o("WAWebHeaderSubtitlePlaceholder").getSubtitlePlaceholder(chat),
                    location: "title",
                    assignmentSubtitle,
                    chatId: W
                })}</Component>;
            } else {
                Je = null;
            }
        } else {
            if (H) {
                const Component = r("WAWebNewsletterChatMenuDropdown.react");
                wdsMenuToRender = <Component chat={chat} onSelectMessages={onSelectMessages}/>;
                Je = ie === true ? null : c.jsx(r("WAWebNewsletterChatHeaderSubtitle.react"), {
                    newsletterMetadata
                });
            }
        }
        let tt = null;
        const nt = chat_contact != null ? o("WAWebShouldShowCallButtons").getCallButtonsState(chat) : y;
        const { shouldDisableStartCall, shouldShow } = nt;
        if (shouldShow) {
            tt = c.jsx(o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable, {
                callFromUI: G ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_DIRECT : o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CONVERSATION,
                lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED,
                surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.ChatHeader,
                chat,
                isStartCallDisabled: shouldDisableStartCall || re
            });
        }
        const at = j?.parentGroup != null && j.participants.iAmMember();
        const it = at ? c.jsx(r("WAWebSubgroupSwitcherButton.react"), {
            chat
        }) : null;
        const Component = r("WDSMenuBarItem.react");
        const lt = showMetaAiNullState === true && onDismissMetaAiNullState != null ? <Component tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON} testid="meta-ai-null-state-dismiss-button" icon={r("WDSIconIcHistory.react")} title={s._("Chat history")} onClick={onDismissMetaAiNullState} marginInlineXstyle={h.buttonMargin} disabled={ze}/> : null;
        let st;
        if (H === false && o("WAWebChatGroupUtils").isSuspendedGroup(chat) === false) {
            const Component = r("WDSMenuBarItem.react");
            st = <Component tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON} testid="search-button" icon={r("WDSIconIcSearch.react")} title={r("WAWebFbtCommon")("Search")} onClick={openChatSearch} marginInlineXstyle={h.buttonMargin} disabled={ze}/>;
        }
        if (K) {
            Je = chat_contact != null ? c.jsx(o("WAWebHeaderBusinessState.react").WAWebHeaderUserSubtitle, {
                chatId: W,
                chatstate: presence.chatstate,
                contact: chat_contact,
                location: "title",
                presence
            }) : null;
        }
        let ut;
        if (qe) {
            ut = c.jsx(r("WAWebChatAssignmentNux.react"), {
                targetRef: MRef,
                chat
            });
        }
        const Component_1 = r("WDSMenuBarItem.react");
        const ct = <Component_1 ref={MRef} tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON} icon={r("WDSIconIcMoreVert.react")} title={s._("Menu")} onClick={function(t) {
            Ue(false);
            preventMenuWhileMidDrawerOpen(t);
        }} testid="conversation-menu-button" wdsMenuToRender={wdsMenuToRender} menuAlign="end" disabled={ze}/>;
        const dt = (!o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() || !he) && o("WAWebMmSignalSharingUserDisclosedInCollectionWindow").isMmSignalSharingUserDisclosedInCollectionWindow(ee) ? c.jsx(r("WDSIconWdsIcMetaDataChevron.react"), {
            testid: "single-chevron-in-circle",
            height: 20,
            width: 20,
            iconXstyle: h.chevronInCircleIcon
        }) : null;
        const Component_2 = r("WDSMenuBarItem.react");
        const Component_3 = o("WAWebMenuBar.react").MenuBar;
        const Component_4 = r("WAWebPrivacyBlurWrapper.react");
        const Component_5 = o("WAWebMenuBar.react").MenuBar;
        return <header {...babelHelpers.extends({
            ref: PRef
        }, (e || (e = r("stylex"))).props(h.chatHeader, r("WAWebConversationPanelStyleUtils").sharedLayer, g.paddingBlock10, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, me && h.chatHeaderDarkOverride, h.chatHeaderMaterial, h.chatHeaderStylesOverride, r("WAWebConversationPanelStyleUtils").sharedShadow), {
            "data-testid": "conversation-header",
            children: [
                c.jsx(o("WAWebHeaderBusinessState.react").WAWebHeaderBusinessProfileSync, {
                    contact: chat_contact
                }),
                x_isNarrow && <Component_3 key="conversation-header-back"><Component_2 tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON} testid="conversation-back-button" icon={r("WDSIconIcArrowBack.react")} title={s._("Back")} onClick={function() {
                    return o("WAWebCmd").Cmd.closeActiveChat();
                }} marginInlineXstyle={h.backButtonMargin}/></Component_3>,
                <Component_4 containerRef={NRef}><div ref={NRef} className="x78zum5 x6s0dn4 x1iyjqo2 x1r8uery xeuugli x101abm8 x1s73dr8 xbzw7fd"><div className="x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x1n1b19v x78zum5 xdj266r" aria-label={shouldUseStatusAvatarInteraction ? undefined : Ce} onClick={shouldUseStatusAvatarInteraction ? undefined : handleAvatarClick} title={shouldUseStatusAvatarInteraction ? undefined : Ce} role={shouldUseStatusAvatarInteraction || K ? null : "button"}>{c.jsx(r("WAWebGroupChatImage.react"), {
                    chat,
                    theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_HEADER,
                    regularChatImage: <><SComponent badge={badge} chatAvatarType={chatAvatarType} colorId={W} initials={initials} name={chatAvatarType === "person" && chat_contact != null ? o("WAWebFrontendContactGetters").getFormattedName(chat_contact) : q} placeholderIcon={placeholderIcon} statusId={activeStatusId} statusInteraction={statusInteraction} statusRing={chatStatusRing} videoUrl={videoUrl}/>{dt}</>,
                    showCommunityInfo: true
                })}</div><div {...babelHelpers.extends({}, e.props(h.chatBody, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), Ge, {
                    ref: He,
                    "data-testid": "conversation-info-header",
                    "data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                    children: [
                        <div className="x78zum5 x1cy8zhl x1y332i5 xggjnk3 x1yc453h"><div {...babelHelpers.extends({}, {
                            0: {
                                className: "x78zum5 x1q0g3np x1iyjqo2 x6ikm8r x10wlt62 x1jchvi3 x1fcty0u xdod15v x14ug900 x1yc453h xlyipyv xuxw1ft xh8yej3"
                            },
                            2: {
                                className: "x78zum5 x1q0g3np x1iyjqo2 x6ikm8r x10wlt62 x1jchvi3 xdod15v x14ug900 x1yc453h xlyipyv xuxw1ft xh8yej3 x1s688f"
                            },
                            1: {
                                className: "x78zum5 x1q0g3np x6ikm8r x10wlt62 x1jchvi3 x1fcty0u xdod15v x14ug900 x1yc453h xlyipyv xuxw1ft xh8yej3 x1c4vz4f x2lah0s xdl72j9"
                            },
                            3: {
                                className: "x78zum5 x1q0g3np x6ikm8r x10wlt62 x1jchvi3 xdod15v x14ug900 x1yc453h xlyipyv xuxw1ft xh8yej3 x1s688f x1c4vz4f x2lah0s xdl72j9"
                            }
                        }[!!me << 1 | !!o("WAWebStylesEnv").hasEmoji << 0], {
                            children: c.jsx(o("WAWebHeaderBusinessState.react").WAWebHeaderChatTitle, {
                                chat
                            })
                        })}/></div>,
                        Je
                    ]
                })}/></div></Component_4>,
                <div className="x1c4vz4f x2lah0s xdl72j9 xeuugli x101abm8 x1s73dr8 xgog33f xlese2p"><Component_5 key="conversation-header">{it}{!o("WAWebMobilePlatforms").isSMB() && tt}{chat_contact != null && c.jsx(r("WAWebCommerceButton.react"), {
                    chat,
                    disabled: ze
                })}{o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() && c.jsx(n("cr:7940"), {
                    chat
                })}{c.jsx(o("WAWebHeaderLabelRendering").WAWebHeaderLabelButton, {
                    chat
                })}{z && c.jsx(r("WAWebNewBroadcastHeaderButton.react"), {
                    chat
                })}{o("WAWebMobilePlatforms").isSMB() && tt}{lt}{st}{wdsMenuToRender != null && <div className="x1n2onr6 x150mmf0" ref={BeRef}>{ct}</div>}</Component_5></div>,
                ut,
                (V && !ge || o("WAWebBotUtils").isHatchBot(W) && o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) && c.jsx(r("WAWebChatHeaderTextStatusBubble.react"), {
                    chat,
                    contactId: W,
                    selectable
                })
            ]
        })}/>;
    }
    R.displayName = `${R.name} [from ${i.id}]`;
    function L(e, t) {
        if (e) {
            return s._("Assigned to you");
        }
        return s._("Assigned to {agentName}", [
            s._param("agentName", t)
        ]);
    }
    function fallback(e) {
        const t = o("react-compiler-runtime").c(1);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = <div className="xh8yej3 x185czh x2lah0s" data-testid="conversation-header-error-fallback"/>;
            t[0] = n;
        } else {
            n = t[0];
        }
        return n;
    }
    const KContext = c.createContext(null);
    function useI(e) {
        return useContext(KContext);
    }
    function TComponent(e) {
        const t = o("react-compiler-runtime").c(16);
        const { chat, onDismissMetaAiNullState, onSelectMessages, selectable, showMetaAiNullState, threadId } = e;
        let u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = [
                o("WAWebFrontendChatGetters").getContact
            ];
            t[0] = u;
        } else {
            u = t[0];
        }
        const d = o("useWAWebChatValues").useChatValues(chat.id, u);
        const m = d[0];
        let p;
        if (t[1] !== chat || t[2] !== onDismissMetaAiNullState || t[3] !== onSelectMessages || t[4] !== selectable || t[5] !== showMetaAiNullState || t[6] !== threadId) {
            p = <R chat={chat} onDismissMetaAiNullState={onDismissMetaAiNullState} onSelectMessages={onSelectMessages} selectable={selectable} showMetaAiNullState={showMetaAiNullState} threadId={threadId}/>;
            t[1] = chat;
            t[2] = onDismissMetaAiNullState;
            t[3] = onSelectMessages;
            t[4] = selectable;
            t[5] = showMetaAiNullState;
            t[6] = threadId;
            t[7] = p;
        } else {
            p = t[7];
        }
        const _ = p;
        const f = m != null ? "has-contact" : "no-contact";
        let g;
        if (t[8] !== chat || t[9] !== _ || t[10] !== onSelectMessages || t[11] !== threadId) {
            const Component = o("WAWebHatchThemedHeaderLoadable").WAWebHatchThemedHeaderLoadable;
            const Component_1 = o("WAWebErrorBoundary.react").ErrorBoundary;
            g = o("WAWebHatchFrontendGating").isHatchThemeEnabled(chat.id) ? <KContext.Provider value={_}><Component_1 name="hatch-themed-header" fallback={useI}><Component chat={chat} onSelectMessages={onSelectMessages} threadId={threadId}/></Component_1></KContext.Provider> : _;
            t[8] = chat;
            t[9] = _;
            t[10] = onSelectMessages;
            t[11] = threadId;
            t[12] = g;
        } else {
            g = t[12];
        }
        let h;
        if (t[13] !== f || t[14] !== g) {
            const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
            h = <Component key={f} name="conversation-header" fallback={fallback} description="ConversationHeader render error — possibly a transiently-null chat.contact">{g}</Component>;
            t[13] = f;
            t[14] = g;
            t[15] = h;
        } else {
            h = t[15];
        }
        return h;
    }
    l.createLabelsDropdownMenu = o("WAWebHeaderLabelRendering").createLabelsDropdownMenu;
    l.isCommunityRelatedChat = o("WAWebHeaderLabelRendering").isCommunityRelatedChat;
    l.openInfoPanel = o("WAWebHeaderInfoPanelActions").openInfoPanel;
    l.ConversationHeader = R;
    l.ConversationHeaderWithErrorBoundary = TComponent;
}, 226);