__d("WAWebChatContact.react", [
    "fbt",
    "$InternalEnum",
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatModel",
    "WAWebChatParticipantUtils.react",
    "WAWebChatStatus",
    "WAWebChatTextStatusWrapper",
    "WAWebClickable.react",
    "WAWebCommonNewsletterStrings",
    "WAWebContactGetters",
    "WAWebContactImage.react",
    "WAWebContactModel",
    "WAWebDomScroll",
    "WAWebEmojiText.react",
    "WAWebFocusTracer",
    "WAWebFrontendContactGetters",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebLidMigrationUtils",
    "WAWebMemberLabelComponents.react",
    "WAWebMemberLabelsFrontendUtils",
    "WAWebMobilePlatforms",
    "WAWebName.react",
    "WAWebOrgMemberLidEligibility",
    "WAWebOrgNameWithIcon.react",
    "WAWebReachoutTimelockUtils",
    "WAWebStateUtils",
    "WAWebTag.react",
    "WAWebTeeLockBadge.react",
    "WAWebText.react",
    "WAWebTextStatusGatingUtils",
    "WAWebUnstyledButton.react",
    "WAWebWid",
    "WAWebWidToJid",
    "WDSFocusStateStyles",
    "WDSIconIcClose.react",
    "WDSText.react",
    "WDSTooltip.react",
    "nullthrows",
    "react",
    "useMergeRefs",
    "useWAWebContactValues",
    "useWAWebForceUpdate",
    "useWAWebGroupMetadataValues",
    "useWAWebListener",
    "useWAWebPrimaryOrgMembershipForContact",
    "useWAWebSearchQuery"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref",
        "truncateName"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useRef, useState } = d;
    const _ = {
        accountRestrictedText: {
            fontStyle: "x1k4tb9n",
            $$css: true
        },
        chatControls: {
            flex: "x1okw0bk",
            color: "xhslqc4",
            ":hover_backgroundColor": "x1ubxc9n",
            ":hover_boxShadow": "xqhg8r4",
            $$css: true
        },
        chatControlsRegular: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            justifyContent: "xl56j7k",
            minHeight: "xjwf9q1",
            minWidth: "xnei2rj",
            $$css: true
        },
        chatControlsSmall: {
            paddingTop: "x4p5aij",
            paddingInlineEnd: "x1ccui7m",
            paddingBottom: "x1j85h84",
            paddingInlineStart: "x18pi947",
            marginTop: "x1gslohp",
            marginInlineEnd: "x2fvf9",
            marginBottom: "x12nagc",
            marginInlineStart: "xdzw4kq",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        }
    };
    function f({ contact, groupMetadata, hideStatus, secondaryProp }) {
        if (secondaryProp != null) {
            return true;
        }
        const s = o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() && !contact.canSendMsgWhileTimelocked;
        if (s) {
            return true;
        }
        const u = groupMetadata?.hasCapi === true && contact.id.toString() === groupMetadata?.owner?.toString();
        if (u) {
            return true;
        }
        if (hideStatus) {
            return false;
        }
        if (!r("WAWebWid").isGroup(contact.id) && o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
            return o("WAWebChatTextStatusWrapper").willTextStatusDisplayContent(contact.id);
        }
        return o("WAWebChatStatus").willStatusDisplayContent(contact.id);
    }
    const g = n("$InternalEnum").Mirrored([
        "SMALL",
        "DEFAULT",
        "REACTION_TRAY"
    ]);
    function h(t) {
        "use no forget";
        let l;
        const { ref, truncateName } = t;
        const h = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const y = o("useWAWebContactValues").useContactValues(h.contact.id, [
            (l = o("WAWebContactGetters")).getId,
            o("WAWebFrontendContactGetters").getPendingAction,
            l.getNotifyName,
            l.getName,
            l.getShowBusinessCheckmarkAsPrimary,
            l.getShowBusinessCheckmarkAsSecondary,
            l.getIsGroup,
            o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone,
            l.getVerifiedName,
            l.getVerifiedLevel
        ]);
        const C = y[0];
        const b = y[1];
        const v = y[2];
        const S = y[3];
        const R = y[4];
        const L = y[5];
        const E = y[6];
        const k = y[7];
        const I = y[8];
        const T = y[9];
        const h_admin = h.admin;
        const x = h_admin === undefined ? false : h_admin;
        const { chatOrigin, checked, contact, contextEnabled, contextMenu, detail, elevatedPushNamesEnabled } = h;
        const elevatedPushNamesEnabled_1 = elevatedPushNamesEnabled === undefined ? false : elevatedPushNamesEnabled;
        const { ephemeralIcon, hideStatus } = h;
        const hideStatus_1 = hideStatus === undefined ? false : hideStatus;
        const h_hideYouSuffix = h.hideYouSuffix;
        const V = h_hideYouSuffix === undefined ? false : h_hideYouSuffix;
        const { idle, isGroupCreationFlow, isPendingParticipant } = h;
        const j = isPendingParticipant === undefined ? false : isPendingParticipant;
        const h_isSearchResult = h.isSearchResult;
        const Q = h_isSearchResult === undefined ? false : h_isSearchResult;
        const h_listenForAdminChange = h.listenForAdminChange;
        const Y = h_listenForAdminChange === undefined ? false : h_listenForAdminChange;
        const h_loadPicture = h.loadPicture;
        const loadPicture = h_loadPicture === undefined ? true : h_loadPicture;
        const { nameOverride, newsletterMembershipType, onDelete, participantCollection, role, searchMatch, searchQuery, secondary, secondaryAvatar, showInactiveFlag } = h;
        const ce = showInactiveFlag === undefined ? false : showInactiveFlag;
        const h_showMessageYourselfName = h.showMessageYourselfName;
        const me = h_showMessageYourselfName === undefined ? false : h_showMessageYourselfName;
        const { showNotifyName, tabIndex, useShortName, waitIdle } = h;
        const he = nameOverride != null || o("WAWebContactGetters").getIsMe(contact) ? null : o("WAWebOrgMemberLidEligibility").getWAWebOrgMemberLid(contact.id);
        const membership = r("useWAWebPrimaryOrgMembershipForContact")(he == null ? null : o("WAWebWidToJid").userLidtoLidUserJid(he));
        const CeRef = useRef(null);
        const beRef = useRef(null);
        const ve = useState(false);
        const Se = ve[0];
        const Re = ve[1];
        const Le = r("useMergeRefs")(ref, beRef);
        const Ee = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const ke = useState(false);
        const Ie = ke[0];
        const Te = ke[1];
        const De = useState(o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() && !contact.canSendMsgWhileTimelocked);
        const xe = De[0];
        const $e = De[1];
        const Pe = o("useWAWebSearchQuery").useSearchText(searchQuery);
        const Ne = searchMatch == null || searchMatch.results.length === 0 ? Pe : searchMatch.results.map((e)=>searchMatch.match.substring(e.startIndex, e.startIndex + e.length)).join(" ");
        let Me = false;
        if (h.active?.value != null) {
            const we = h.active.value;
            if (we instanceof r("WAWebContactModel")) {
                Me = we.id.equals(contact.id);
            } else if (we instanceof o("WAWebChatModel").Chat && o("WAWebChatGetters").getIsUser(we)) {
                Me = we.contact.id.equals(contact.id);
            }
        }
        if (Ie !== Me) {
            Te(Me);
        }
        const Ae = function(t, n) {
            if (t === "focus") {
                const e = beRef.current;
                if (e) {
                    r("WAWebFocusTracer").focus(e);
                    if (n) {
                        o("WAWebDomScroll").scrollIntoViewIfNeeded(e);
                    }
                }
            }
            Te(!!t);
        };
        const Fe = C.toString();
        o("useWAWebListener").useListener(h.active, Fe, Ae);
        o("useWAWebListener").useListener(contact, "change:canSendMsgWhileTimelocked", function() {
            $e(o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() && !contact.canSendMsgWhileTimelocked);
        });
        o("useWAWebListener").useListener(Y && participantCollection ? participantCollection : null, [
            "change:isAdmin",
            "change:isSuperAdmin"
        ], function(e) {
            if (r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(e.id, C))) {
                Ee();
            }
        });
        const Oe = xe ? null : h.onClick;
        let h_theme = h.theme;
        if (xe) {
            h_theme = h.theme === "chat-checkbox-disabled" || h.theme === "chat-checkbox" ? "chat-checkbox-disabled" : "disabled";
        }
        const We = function(t) {
            t.stopPropagation();
            if (onDelete) {
                onDelete(t, o("WAWebStateUtils").unproxy(h.contact));
            }
        };
        const qe = function(t) {
            if (Oe) {
                Oe(t, o("WAWebStateUtils").unproxy(contact), Q, chatOrigin);
            }
        };
        const Ue = function(t) {
            if (t.button === 0) {
                qe(t);
            }
        };
        const Ve = function(t) {
            t.preventDefault();
            t.stopPropagation();
            qe(t);
        };
        const He = function(t) {
            h.onContext?.(t, contact);
        };
        const Ge = function(t) {
            Re(true);
            if (h.allowFocusEventPropagation !== true) {
                t.stopPropagation();
            }
            t.preventDefault();
        };
        const ze = h.type === g.SMALL;
        let je;
        let Ke;
        let Qe;
        if ((S == null || S === "") && (I == null || I === "" || T === 0) && showNotifyName === true && v != null && v !== "") {
            Qe = elevatedPushNamesEnabled_1 ? <span className="x1rg5ohu x158ke7r xdod15v">{c.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: k
            })}</span> : <span className="x1rg5ohu x158ke7r xdod15v xxayilr">{c.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: v
            })}</span>;
        }
        const Xe = !!(x || Y && C.isUser() && participantCollection != null && participantCollection.userIsAdmin(C));
        const Component = o("WAWebTag.react").Tag;
        const Ye = <Component testid="community-admin-marker">{s._("Community admin")}</Component>;
        const Je = participantCollection?.getGroupMetadata();
        const Ze = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(Je?.id, [
            o("WAWebFrontendGroupMetadataGetters").getOwner,
            o("WAWebFrontendGroupMetadataGetters").getHasCapi
        ]);
        const et = Ze?.[0];
        const tt = Ze?.[1];
        const nt = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(participantCollection?.getGroupMetadata()?.id, [
            o("WAWebGroupMetadataGetters").getGroupType
        ]) ?? [];
        const rt = nt[0];
        const ot = rt ?? o("WAWebGroupType").GroupType.DEFAULT;
        switch(ot){
            case o("WAWebGroupType").GroupType.COMMUNITY:
                {
                    const at = !!(Y && C.isUser() && participantCollection != null && participantCollection.userIsSuperAdmin(C));
                    if (at) {
                        const Component = o("WAWebTag.react").Tag;
                        Ke = <Component testid="community-creator-marker">{s._("Community owner")}</Component>;
                    } else if (Xe) {
                        Ke = Ye;
                    }
                    break;
                }
            case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
                {
                    if (Xe) {
                        Ke = Ye;
                    }
                    break;
                }
            default:
                if (Xe) {
                    const Component = o("WAWebTag.react").Tag;
                    Ke = <Component testid="group-admin-marker">{s._("Group admin")}</Component>;
                }
        }
        if (j) {
            const Component = o("WAWebTag.react").Tag;
            Ke = <Component testid="invited-marker">{s._("Invited")}</Component>;
        }
        if (ce && !contact.isActive()) {
            const Component = o("WAWebTag.react").Tag;
            Ke = <Component theme={o("WAWebTag.react").TagTheme.Secondary}>{s._("Inactive")}</Component>;
        }
        if (newsletterMembershipType != null) {
            const it = o("WAWebCommonNewsletterStrings").getNewsletterMembershipRoleTag(newsletterMembershipType);
            if (it != null) {
                const Component = o("WAWebTag.react").Tag;
                Ke = <Component testid={o("WAWebCommonNewsletterStrings").getNewsletterRoleMarker(newsletterMembershipType)} theme={o("WAWebTag.react").TagTheme.Primary}>{it}</Component>;
            }
        }
        if (detail != null) {
            je = detail;
        } else if (onDelete) {
            const lt = h.type === g.SMALL ? c.jsx(r("WDSIconIcClose.react"), {
                "aria-hidden": true
            }) : c.jsx(r("WDSIconIcClose.react"), {
                "aria-hidden": true,
                width: 19,
                height: 19,
                testid: "chat-contact-remove"
            });
            if (isGroupCreationFlow) {
                const Component = r("WAWebUnstyledButton.react");
                je = <Component key="chat-controls" dataTab={2} xstyle={[
                    o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
                    _.chatControls,
                    ze ? _.chatControlsSmall : _.chatControlsRegular
                ]} role="button" onClick={We} aria-label={s._("Remove {contact-name} from add list", [
                    s._param("contact-name", S)
                ])} customDataAttr="selectedContact">{lt}</Component>;
            } else {
                const Component = o("WAWebClickable.react").Clickable;
                const Component_1 = r("WDSTooltip.react");
                je = <Component_1 label={s._("Remove")}><Component dataTestId="chat-controls" className={{
                    0: "x1okw0bk xhslqc4 x1ubxc9n xqhg8r4 x6s0dn4 x78zum5 xl56j7k xjwf9q1 xnei2rj",
                    1: "x1okw0bk xhslqc4 x1ubxc9n xqhg8r4 x4p5aij x1ccui7m x1j85h84 x18pi947 x1gslohp x2fvf9 x12nagc xdzw4kq x1c9tyrk xeusxvb x1pahc9y x1ertn4p"
                }[!!ze << 0]} onClick={We} ariaLabel={s._("Remove member {name}", [
                    s._param("name", S)
                ])}>{lt}</Component></Component_1>;
            }
        }
        let st = secondary;
        let ut = null;
        const ct = h.showMemberLabel === true;
        const h_sourceChat = h.sourceChat;
        const contact_id = contact.id;
        if (ct && h_sourceChat) {
            ut = c.jsx(o("WAWebMemberLabelComponents.react").GroupParticipantContent, {
                chat: h_sourceChat,
                member: contact_id
            });
        }
        const pt = tt === true && contact.id.toString() === et?.toString();
        if (xe) {
            const colorName = h_theme === "chat-checkbox-disabled" ? "contentDefault" : "contentDisabled";
            const Component = r("WDSText.react");
            st = <Component type="Body2" colorName={colorName} testid="reachout-timelock-secondary-cell-text" xstyle={_.accountRestrictedText}>{s._("Your account is restricted")}</Component>;
        } else {
            if (pt) {
                st = c.jsx(o("WAWebEmojiText.react").EmojiText, {
                    direction: "auto",
                    text: s._("Business account")
                });
            } else {
                if (st == null && !hideStatus_1) {
                    if (!E && o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
                        st = c.jsx(o("WAWebChatTextStatusWrapper").TextStatus, {
                            contactId: contact.id,
                            waitIdle
                        });
                    } else {
                        st = c.jsx(o("WAWebChatStatus").StatusWrapper, {
                            id: C,
                            waitIdle
                        });
                    }
                }
            }
        }
        if (ut) {
            st = <div><div>{ut}</div>{st}</div>;
        }
        const ft = ct && h_sourceChat != null && (o("WAWebMemberLabelsFrontendUtils").memberLabelExists({
            from: "chat_and_member",
            chat: h_sourceChat,
            member: contact.id
        }) || o("WAWebMemberLabelsFrontendUtils").shouldShowAddMemberTagCTA(h_sourceChat, contact.id));
        const gt = ft || Qe != null || f({
            contact,
            secondaryProp: secondary,
            groupMetadata: Je,
            hideStatus: hideStatus_1
        });
        if (gt) {
            const Component = o("WAWebText.react").WAWebTextMutedRefreshed;
            st = <Component>{st}</Component>;
        } else {
            st = null;
        }
        let ht = h.type === g.SMALL ? 26 : h.photoSize;
        if (h_theme === "chat-info") {
            ht = 49;
        }
        const yt = (t, n)=>{
            if (t && n === "left" || !t && n === "right") {
                CeRef.current?.focusOnContextMenuButton();
            }
        };
        const Ct = {
            enter: Ve,
            space: Ve,
            right: function() {
                return yt(r("WAWebL10N").isRTL(), "right");
            },
            left: function() {
                return yt(r("WAWebL10N").isRTL(), "left");
            }
        };
        const h_mouseDownAsClick = h.mouseDownAsClick;
        const showBusinessCheckmark = pt ? R || L : R;
        const showLabelIcon = o("WAWebMobilePlatforms").isSMB();
        let Rt;
        if (nameOverride != null) {
            const Component = o("WAWebText.react").WAWebTextTitleRefreshed;
            Rt = <Component>{nameOverride}</Component>;
        } else if (E) {
            const Lt = r("nullthrows")(o("WAWebChatCollection").ChatCollection.get(C.toString()));
            Rt = c.jsx(o("WAWebName.react").Name, {
                chat: Lt,
                useShortName,
                highlightText: Ne,
                showBusinessCheckmark,
                showLabelIcon,
                titlify: true,
                ellipsify: true
            });
            const Component = o("WAWebText.react").WAWebTextTitleRefreshed;
            Rt = <Component>{Rt}</Component>;
        } else {
            Rt = c.jsx(o("WAWebName.react").Name, {
                contact,
                useShortName,
                highlightText: Ne,
                showBusinessCheckmark,
                showLabelIcon,
                showNotifyName: elevatedPushNamesEnabled_1 && showNotifyName,
                useVerifiedName: pt && contact.name ? false : elevatedPushNamesEnabled_1 && T > 0,
                elevatedPushNamesEnabled: elevatedPushNamesEnabled_1,
                titlify: true,
                ellipsify: true,
                you: !V,
                showMessageYourselfName: !V && me,
                truncateName,
                unknownUserLogContext: h.unknownUserLogContext
            });
            const Component = o("WAWebText.react").WAWebTextTitleRefreshed;
            const Component_1 = r("WAWebOrgNameWithIcon.react");
            Rt = <Component_1 membership={membership}><Component>{Rt}</Component></Component_1>;
        }
        const Et = h_theme === "list-names" && !onDelete ? "list-names-no-delete" : h_theme;
        const kt = c.jsx(r("WAWebContactImage.react"), {
            contact,
            size: ht,
            waitIdle,
            ephemeralIcon,
            searchQuery,
            showStatusRingAroundProfilePhoto: h.showStatusRingAroundProfilePhoto,
            loadPicture,
            secondaryAvatar
        });
        const Component_1 = r("WAWebTeeLockBadge.react");
        const It = h.showTeeLockBadge === true ? <Component_1 size="small">{kt}</Component_1> : kt;
        const Tt = function() {
            Re(false);
        };
        const tallerCellWithMemberLabel = o("WAWebChatParticipantUtils.react").shouldUseTallerItemHeight({
            contact,
            chat: h_sourceChat,
            showMemberLabel: ct,
            groupMetadata: Je,
            secondaryProp: secondary,
            hideStatus: hideStatus_1
        });
        const xt = c.jsx(r("WAWebChatCell.react"), babelHelpers.extends({
            ref: CeRef,
            theme: Et,
            active: Ie ?? Se,
            contextEnabled: contextEnabled || o("WAWebBoolFunc").returnFalse,
            contextMenu,
            pendingAction: b,
            detail: je,
            image: It,
            primary: Rt,
            primaryDetail: Ke,
            secondary: st,
            secondaryDetail: Qe,
            onClick: h_mouseDownAsClick ? null : qe,
            onMouseDown: h_mouseDownAsClick ? Ue : null,
            onContext: He,
            tabIndex,
            containerRole: role,
            role,
            tallerCellWithMemberLabel,
            idle,
            truncateName
        }, me && {
            testid: "message-yourself-row",
            extendSecondaryEllipsis: true
        }));
        const $t = babelHelpers.extends({}, Oe && (role === "checkbox" ? {
            role: "checkbox",
            "aria-checked": checked
        } : {
            role: "button"
        }));
        if (isGroupCreationFlow) {
            return <div {...babelHelpers.extends({
                onBlur: Tt,
                ref: Le,
                className: {
                    0: "",
                    1: "xjp7ctv"
                }[!!ze << 0]
            }, $t, {
                children: xt
            })}/>;
        }
        return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, babelHelpers.extends({
            onBlur: Tt,
            ref: Le,
            handlers: Ct,
            onFocus: Ge,
            className: {
                0: "",
                1: "xjp7ctv"
            }[!!ze << 0]
        }, $t, {
            children: xt
        }));
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    function y() {
        return h;
    }
    const C = h;
    l.willShowSecondaryContent = f;
    l.ContactCellType = g;
    l.ContactFactory = y;
    l.Contact = C;
}, 226);