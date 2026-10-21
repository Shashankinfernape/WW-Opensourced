__d("WAWebGroupNotificationContextCard.react", [
    "fbt",
    "WAUnicodeUtils",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebButton.react",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebCommunitySubgroupInviteLinkRestriction",
    "WAWebContactCollection",
    "WAWebConversationSpamUtils",
    "WAWebDetailImage.react",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebExistingGroupPermissionsDrawerLoadable",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendChatGetters",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupInfoPhoto.react",
    "WAWebGroupInviteLinkDrawerLoadable",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupMetadataGetters",
    "WAWebGroupNotificationContextCardActions.react",
    "WAWebGroupProfilePictureWamEvent",
    "WAWebGroupSafetyToolsModal.react",
    "WAWebGroupType",
    "WAWebKeyboardTabUtils",
    "WAWebL10N",
    "WAWebLinkify",
    "WAWebModalManager",
    "WAWebOpenAddParticipantModalFlow",
    "WAWebOpenGroupEmailInvites.react",
    "WAWebOpenLeaveAndReportGroupModalLoadable",
    "WAWebPhotoViewerModal.react",
    "WAWebProfilePicThumbGetters",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebSpamConstants",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebTrustSignalsUtils",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumAddMembersEntrypointType",
    "WAWebWamEnumGroupProfileActionType",
    "WAWebWamNumberToPreciseSizeBucket",
    "WDSButtonGroup.react",
    "WDSIconIcLogout.react",
    "WDSIconIcPhotoCamera.react",
    "WDSIconIcPrivacyTip.react",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebEventTargetValue",
    "useWAWebFocusOnMount",
    "useWAWebForceUpdate",
    "useWAWebGroupMetadataValues",
    "useWAWebGroupParticipantStatus",
    "useWAWebIAmGroupAdmin",
    "useWAWebIAmGroupMember",
    "useWAWebListener",
    "useWAWebProfilePicThumbValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useEffect } = c;
    const p = {
        buttonGroup: {
            minWidth: "x5w4yej",
            $$css: true
        },
        container: {
            textAlign: "x2b8uid",
            maxWidth: "x1rjt51p",
            width: "xh8yej3",
            $$css: true
        },
        descriptionText: {
            whiteSpace: "xeaf4i8",
            $$css: true
        },
        editLink: {
            color: "x1v5yvga",
            fontWeight: "x1s688f",
            $$css: true
        },
        breakText: {
            boxSizing: "x9f619",
            wordBreak: "x1yn0g08",
            $$css: true
        },
        paddingTop12: {
            paddingTop: "x1xrf6ya",
            $$css: true
        },
        paddingTop4: {
            paddingTop: "x1tiyuxx",
            $$css: true
        }
    };
    const textLimit = 70;
    function f(e) {
        const t = o("react-compiler-runtime").c(26);
        const { chat, msg } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebFrontendChatGetters").getTrusted
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebChatValues").useChatValues(chat.id, i);
        const s = l[0];
        const c = r("useWAWebFocusOnMount")();
        let d;
        let _;
        if (t[1] !== msg.id) {
            d = function() {
                o("WAWebCmd").Cmd.groupNotificationContextCardRendered(msg.id);
            };
            _ = [
                msg.id
            ];
            t[1] = msg.id;
            t[2] = d;
            t[3] = _;
        } else {
            d = t[2];
            _ = t[3];
        }
        useEffect(d, _);
        let f;
        if (t[4] !== chat) {
            f = <H4Component chat={chat}/>;
            t[4] = chat;
            t[5] = f;
        } else {
            f = t[5];
        }
        let g;
        let R;
        if (t[6] !== chat || t[7] !== msg) {
            g = <Y2Component chat={chat} msg={msg}/>;
            R = <C chat={chat} msg={msg}/>;
            t[6] = chat;
            t[7] = msg;
            t[8] = g;
            t[9] = R;
        } else {
            g = t[8];
            R = t[9];
        }
        let L;
        if (t[10] !== chat) {
            L = <B1Component chat={chat}/>;
            t[10] = chat;
            t[11] = L;
        } else {
            L = t[11];
        }
        let addMembersEntryPoint;
        if (t[12] !== msg) {
            addMembersEntryPoint = S(msg);
            t[12] = msg;
            t[13] = addMembersEntryPoint;
        } else {
            addMembersEntryPoint = t[13];
        }
        let k;
        if (t[14] !== chat || t[15] !== addMembersEntryPoint) {
            k = <V2Component addMembersEntryPoint={addMembersEntryPoint} chat={chat}/>;
            t[14] = chat;
            t[15] = addMembersEntryPoint;
            t[16] = k;
        } else {
            k = t[16];
        }
        let I;
        if (t[17] !== f || t[18] !== g || t[19] !== R || t[20] !== L || t[21] !== k) {
            const Component = o("WAWebFlex.react").FlexColumn;
            I = <Component xstyle={p.container} align="center" testid="group-notification-context-card">{f}{g}{R}{L}{k}</Component>;
            t[17] = f;
            t[18] = g;
            t[19] = R;
            t[20] = L;
            t[21] = k;
            t[22] = I;
        } else {
            I = t[22];
        }
        const T = I;
        if (!s) {
            let D;
            if (t[23] !== T || t[24] !== c) {
                D = <div ref={c} role="alert" tabIndex={-1} data-testid="group-notification-context-card-suspicious-alert">{T}</div>;
                t[23] = T;
                t[24] = c;
                t[25] = D;
            } else {
                D = t[25];
            }
            return D;
        }
        return T;
    }
    const g = (t)=>{
        const a = t?.participants;
        const i = a?.length ?? 0;
        const l = t?.size ?? 0;
        const s = a != null && a.iAmAdmin() ? i : l;
        const u = o("WAWebWamNumberToPreciseSizeBucket").numberToPreciseSizeBucket(s);
        const c = t?.creation;
        const d = new Date((c ?? 0) * 1000);
        const m = new Intl.DateTimeFormat("en", {
            year: "numeric"
        }).format(d);
        const p = new Intl.DateTimeFormat("en", {
            month: "2-digit"
        }).format(d);
        const _ = new Intl.DateTimeFormat("en", {
            day: "2-digit"
        }).format(d);
        const f = c != null ? `${m}-${p}-${_}` : "";
        const g = a?.iAmAdmin() ?? false;
        new (o("WAWebGroupProfilePictureWamEvent")).GroupProfilePictureWamEvent({
            groupCreationDs: f,
            groupProfileAction: o("WAWebWamEnumGroupProfileActionType").GROUP_PROFILE_ACTION_TYPE.TAP_ACTION_ITEM_VIEW_PHOTO,
            preciseGroupSizeBucket: u,
            isAdmin: g,
            hasProfilePicture: true
        }).commit();
    };
    function H4Component(e) {
        "use no forget";
        const e_chat = e.chat;
        const a = o("useWAWebChatValues").useChatValues(e_chat.id, [
            o("WAWebFrontendChatGetters").getGroupMetadata,
            o("WAWebFrontendChatGetters").getContact,
            o("WAWebFrontendChatGetters").getTrusted
        ]);
        const i = a[0];
        const l = a[1];
        const s = a[2];
        const c = r("nullthrows")(i, "Chat groupMetadata is null in ContextCardPhoto");
        const d = o("useWAWebGroupMetadataValues").useGroupMetadataValues(c.id, [
            o("WAWebFrontendGroupMetadataGetters").getSize,
            o("WAWebFrontendGroupMetadataGetters").getCreation
        ]);
        const m = d[0];
        const p = d[1];
        const c_participants = c.participants;
        const f = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        o("useWAWebListener").useListener(c_participants, [
            "bulk_add",
            "bulk_remove",
            "reset",
            "sort",
            "change:isAdmin",
            "change:isSuperAdmin"
        ], f);
        const h = r("useWAWebIAmGroupMember")(c);
        const y = u.createRef();
        const C = function() {
            g(c);
            const y_current = y.current;
            if (y_current) {
                const getZoomNode = function(n) {
                    n(y_current);
                };
                const a = o("WAWebContactCollection").ContactCollection.assertGet(e_chat.id);
                o("WAWebModalManager").ModalManager.openMedia(u.jsx(r("WAWebPhotoViewerModal.react"), {
                    contact: a,
                    profilePicThumb: a.getProfilePicThumb(),
                    animateBorderRadius: true,
                    getZoomNode
                }), {
                    transition: "profile-viewer"
                });
            }
        };
        const b = o("useWAWebProfilePicThumbValues").useOptionalProfilePicThumbValues(e_chat.id, [
            o("WAWebProfilePicThumbGetters").getImg
        ]) ?? [
            null
        ];
        const v = b[0];
        const S = v != null;
        if (S) {
            const Component = o("WAWebDetailImage.react").DetailImage;
            return <div ref={y}><Component id={e_chat.id} onClick={C} shape={o("WAWebDetailImage.react").DetailImageShape.Circle} quality={o("WAWebDetailImage.react").DetailImageQuality.High} size={88} showOutline tabIndex={0} testId="group-notification-context-card-photo"/></div>;
        }
        return u.jsx(r("WAWebGroupInfoPhoto.react"), {
            chat: e_chat,
            forceClickable: true,
            HoverIcon: r("WDSIconIcPhotoCamera.react"),
            showAddIconOverlay: false,
            size: 88,
            testid: "group-notification-context-card-photo-picker",
            readOnly: !s || !h
        });
    }
    H4Component.displayName = `${H4Component.name} [from ${i.id}]`;
    function Y2Component(e) {
        const t = o("react-compiler-runtime").c(8);
        const { chat, msg } = e;
        let a;
        e: switch(msg.subtype){
            case "create":
                {
                    let i;
                    if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                        i = s._("You created this group");
                        t[0] = i;
                    } else {
                        i = t[0];
                    }
                    a = i;
                    break e;
                }
            case "add":
                {
                    let l;
                    if (t[1] !== chat || t[2] !== msg.author) {
                        l = msg.author ? u.jsx(o("WAWebTrustSignalsUtils").AddGroupCardTitle, {
                            chat,
                            contactId: msg.author
                        }) : null;
                        t[1] = chat;
                        t[2] = msg.author;
                        t[3] = l;
                    } else {
                        l = t[3];
                    }
                    a = l;
                    break e;
                }
            case "invite":
                {
                    let c;
                    if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                        c = s._("You joined with an invite link");
                        t[4] = c;
                    } else {
                        c = t[4];
                    }
                    a = c;
                }
        }
        let d;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            d = [
                p.breakText,
                p.paddingTop12
            ];
            t[5] = d;
        } else {
            d = t[5];
        }
        let m;
        if (t[6] !== a) {
            const Component = o("WAWebText.react").WAWebTextLarge;
            m = <Component xstyle={d} weight="medium" testid="group-notification-context-card-title">{a}</Component>;
            t[6] = a;
            t[7] = m;
        } else {
            m = t[7];
        }
        return m;
    }
    function C(e) {
        "use no forget";
        const { chat, msg } = e;
        const a = o("useWAWebChatValues").useChatValues(chat.id, [
            o("WAWebFrontendChatGetters").getGroupMetadata,
            o("WAWebFrontendChatGetters").getTrusted,
            o("WAWebChatGetters").getIsGroup
        ]);
        const i = a[0];
        const l = a[1];
        const c = a[2];
        const d = r("nullthrows")(chat.groupMetadata, "Chat groupMetadata is null in ContextCardSubtitle");
        const m = o("useWAWebGroupMetadataValues").useGroupMetadataValues(d.id, [
            o("WAWebFrontendGroupMetadataGetters").getOwner,
            o("WAWebFrontendGroupMetadataGetters").getCreation,
            o("WAWebFrontendGroupMetadataGetters").getSize
        ]);
        const _ = m[0];
        const f = m[1];
        const g = m[2];
        const d_participants = d.participants;
        const y = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        o("useWAWebListener").useListener(d_participants, [
            "bulk_add",
            "bulk_remove",
            "reset",
            "sort",
            "change:isAdmin",
            "change:isSuperAdmin"
        ], y);
        const C = o("useWAWebGroupMetadataValues").useGroupMetadataValues(d.id, [
            o("WAWebGroupMetadataGetters").getGroupType
        ]);
        const b = C[0];
        let v = s._("Group");
        if (b === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
            v = s._("Announcements");
        }
        const S = o("WAWebTrustSignalsUtils").numberOfMembers(d);
        const R = o("WAWebTrustSignalsUtils").useCreatedAt(chat, msg.author);
        let L;
        if (msg.subtype === "create") {
            if (!d.isSuspendedOrTerminated()) {
                L = S;
            }
        } else {
            L = R;
        }
        let E = <>{!l && <>{s._("Added by non-contact")}{r("WAWebL10N").isRTL() ? " -\xA0" : " ·\xA0"}</>}{v}{L != null && <>{r("WAWebL10N").isRTL() ? " -\xA0" : " ·\xA0"}{L}</>}</>;
        E = <>{S != null && <>{S} · </>}{o("WAWebTrustSignalsUtils").numberOfContacts(d_participants)}{R != null && <> · {R}</>}</>;
        const Component = o("WAWebText.react").WAWebTextSmall;
        return <Component color="secondaryLighter" testid="group-notification-context-card-subtitle" xstyle={[
            p.breakText,
            p.paddingTop4
        ]}>{E}</Component>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function B1Component({ chat }) {
        const n = o("useWAWebChatValues").useChatValues(chat.id, [
            o("WAWebFrontendChatGetters").getGroupMetadata,
            o("WAWebFrontendChatGetters").getTrusted
        ]);
        const a = n[0];
        const i = n[1];
        const l = r("nullthrows")(a, "Chat groupMetadata is null in ContextCardDescription");
        const c = o("useWAWebGroupMetadataValues").useGroupMetadataValues(l.id, [
            o("WAWebFrontendGroupMetadataGetters").getDisplayedDesc,
            o("WAWebFrontendGroupMetadataGetters").getMemberLinkMode,
            o("WAWebFrontendGroupMetadataGetters").getParentGroup
        ]);
        const m = c[0];
        const f = c[1];
        const g = c[2];
        const h = r("useWAWebIAmGroupAdmin")(l);
        const y = r("useWAWebEventTargetValue")(l, [
            "change:desc"
        ], function() {
            return l.displayedDesc;
        });
        const C = useCallback(function() {
            o("WAWebCmd").Cmd.editGroupDescription();
            o("WAWebCmd").Cmd.chatInfoDrawer(chat, {
                focusGroupDescriptionOnMount: true
            });
        }, [
            chat
        ]);
        const b = useCallback(function() {
            o("WAWebCmd").Cmd.chatInfoDrawer(chat);
        }, [
            chat
        ]);
        const v = useCallback(function() {
            const Component = o("WAWebExistingGroupPermissionsDrawerLoadable").ExistingGroupPermissionsDrawerLoadable;
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                descriptorType: "existing_group_permissions",
                chat,
                groupMetadata: r("nullthrows")(chat.groupMetadata)
            } : <Component chat={chat} groupMetadata={r("nullthrows")(chat.groupMetadata)} onClose={o("WAWebDrawerManager").closeDrawerRight}/>, {
                transition: "slide-left",
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
            });
        }, [
            chat
        ]);
        const S = f === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK;
        const R = o("WAWebCommunitySubgroupInviteLinkRestriction").isSubgroupInviteLinkRestrictedByParentCommunity(l);
        const L = S && !R;
        if (!y && l.canSetDescription()) {
            if (i) {
                if (L && h) {
                    const Component = r("WAWebUnstyledButton.react");
                    const Component_1 = o("WAWebText.react").WAWebTextSmall;
                    return <div className="x1nxh6w3 xcgms0a x9f619 x1yn0g08 x1xrf6ya"><Component_1 testid="group-notification-context-card-anyone-can-link-description">{s._("Members can add people or invite them using a link. {edit_link}", [
                        s._param("edit_link", <Component onClick={v} xstyle={p.editLink}>{s._("Edit")}</Component>)
                    ])}</Component_1></div>;
                }
                const Component = o("WAWebButton.react").WAWebButtonSimplified;
                return <div className="x1nxh6w3 xcgms0a x9f619 x1yn0g08 x1xrf6ya"><Component onClick={C} testid="group-notification-context-card-add-description-button"><span className="xdx6fka xvtqlqk">{s._("Add description...")}</span></Component></div>;
            }
            return null;
        }
        const E = o("WAUnicodeUtils").numCodepoints(y) > textLimit;
        const Component = r("WAWebUnstyledButton.react");
        return <div className="x1nxh6w3 xcgms0a x9f619 x1yn0g08 x1xrf6ya">{u.jsx(o("WAWebEmojiText.react").EmojiText, {
            xstyle: p.descriptionText,
            testid: "group-notification-context-card-description",
            text: y,
            textLimit,
            ellipsify: true,
            direction: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
            inferLinesDirection: true,
            selectable: true,
            emojiSize: o("WAWebEmojiText.react").EMOJI_SIZE.SMALL,
            formatters: i ? o("WAWebFormatConfiguration").TrustedGroupDesc({
                links: o("WAWebLinkify").findLinks(y),
                bulletPointsEnabled: false
            }) : o("WAWebFormatConfiguration").UntrustedGroupDesc({
                bulletPointsEnabled: false
            })
        })}{E && <> <Component onClick={b}><span className="x1xtgsr3 x1s688f">{s._("More")}</span></Component></>}</div>;
    }
    B1Component.displayName = `${B1Component.name} [from ${i.id}]`;
    function V2Component({ addMembersEntryPoint, chat }) {
        const a = o("useWAWebChatValues").useChatValues(chat.id, [
            o("WAWebFrontendChatGetters").getGroupMetadata,
            o("WAWebFrontendChatGetters").getTrusted
        ]);
        const i = a[0];
        const l = a[1];
        const c = r("nullthrows")(i, "Chat groupMetadata is null in ContextCardActions");
        const m = o("useWAWebGroupMetadataValues").useGroupMetadataValues(c.id, [
            o("WAWebFrontendGroupMetadataGetters").getSupport,
            o("WAWebFrontendGroupMetadataGetters").getMemberLinkMode
        ]);
        const _ = m[0];
        const f = m[1];
        const g = o("useWAWebGroupMetadataValues").useGroupMetadataValues(c.id, [
            o("WAWebGroupMetadataGetters").getIsUnnamed,
            o("WAWebGroupMetadataGetters").getGroupType
        ]);
        const isUnnamed = g[0];
        const y = g[1];
        const C = r("useWAWebGroupParticipantStatus")(c);
        const canAddParticipants = C[0];
        const v = r("useWAWebIAmGroupMember")(c);
        const onAddNameClick = useCallback(function() {
            o("WAWebCmd").Cmd.editGroupSubject();
            o("WAWebCmd").Cmd.chatInfoDrawer(chat, {
                focusGroupSubjectOnMount: true
            });
        }, [
            chat
        ]);
        const onGroupInfoClick = useCallback(function() {
            o("WAWebCmd").Cmd.chatInfoDrawer(chat);
        }, [
            chat
        ]);
        const onInviteViaEmailClick = useCallback(function() {
            o("WAWebOpenGroupEmailInvites.react").openGroupEmailInvites(chat, c);
        }, [
            chat,
            c
        ]);
        const onInviteViaLinkClick = useCallback(function() {
            const Component = o("WAWebGroupInviteLinkDrawerLoadable").GroupInviteLinkDrawerLoadable;
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component chat={chat} groupMetadata={c} onBack={o("WAWebDrawerManager").closeDrawerRight} onInviteViaEmail={function() {
                return o("WAWebOpenGroupEmailInvites.react").openGroupEmailInvites(chat, c, "invite_link");
            }} onGroupSettings={function() {
                const Component = o("WAWebExistingGroupPermissionsDrawerLoadable").ExistingGroupPermissionsDrawerLoadable;
                return o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                    descriptorType: "existing_group_permissions",
                    chat,
                    groupMetadata: c
                } : <Component chat={chat} groupMetadata={c} onClose={o("WAWebDrawerManager").closeDrawerRight}/>);
            }}/>);
        }, [
            chat,
            c
        ]);
        const k = function() {
            if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
                o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
                return;
            }
            const communityName = c.getParentGroupChat()?.formattedTitle;
            o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
                groupMetadata: c,
                chat,
                communityName,
                entryPoint: addMembersEntryPoint,
                reopenAddGroupFlowCallback: k
            });
        };
        if (!v || chat.isTrusted()) {
            const Component = o("WAWebGroupNotificationContextCardActions.react").GroupNotificationContextCardActions;
            return <Component chat={chat} groupMetadata={c} isUnnamed={isUnnamed} canAddParticipants={canAddParticipants} onAddNameClick={onAddNameClick} onAddGroupMembersClick={k} onGroupInfoClick={onGroupInfoClick} onInviteViaLinkClick={onInviteViaLinkClick} onInviteViaEmailClick={onInviteViaEmailClick}/>;
        }
        const I = function() {
            o("WAWebGroupSafetyToolsModal.react").displayGroupSafetyToolsModal();
        };
        const T = function() {
            o("WAWebOpenLeaveAndReportGroupModalLoadable").openLeaveAndReportGroupModal(chat, o("WAWebSpamConstants").SpamFlow.GroupFmxCardLeave);
        };
        const D = function() {
            o("WAWebConversationSpamUtils").acknowledgeGroupAsNotSpam(chat);
        };
        const Component = o("WAWebButton.react").WAWebButtonSecondaryDestructive;
        const x = <Component onClick={T} nowrap={false} tabOrder={o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD} testid="group-notification-context-card-leave-group-button">{u.jsx(r("WDSIconIcLogout.react"), {
            directional: true
        })}{r("WAWebFbtCommon")("Exit Group")}</Component>;
        const $ = !l;
        const P = $ ? u.jsx(r("WDSButtonGroup.react"), {
            orientation: "horizontal",
            primaryButtonProps: {
                variant: "outline",
                type: "default",
                onPress: D,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
                testid: "group-notification-context-card-stay-group-button",
                label: s._("Stay")
            },
            secondaryButtonProps: {
                variant: "outline",
                type: "destructive",
                onPress: T,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
                testid: "group-notification-context-card-leave-group-button",
                Icon: r("WDSIconIcLogout.react"),
                directional: true,
                label: r("WAWebFbtCommon")("Exit Group")
            }
        }) : x;
        const Component_1 = o("WAWebButton.react").WAWebButtonSimplified;
        const Component_2 = o("WAWebButton.react").ButtonGroup;
        return <Component_2 direction="vertical" align="center" paddingTop={12} xstyle={p.buttonGroup}><Component_1 onClick={I} icon={r("WDSIconIcPrivacyTip.react")} tabOrder={o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD} testid="group-notification-context-card-safety-tools-button">{s._("Safety tools")}</Component_1>{P}</Component_2>;
    }
    V2Component.displayName = `${V2Component.name} [from ${i.id}]`;
    function S(msg) {
        if (msg.subtype === "create") {
            return o("WAWebWamEnumAddMembersEntrypointType").ADD_MEMBERS_ENTRYPOINT_TYPE.GROUP_CREATED_CONTEXT_CARD;
        }
        if (msg.subtype === "add") {
            return o("WAWebWamEnumAddMembersEntrypointType").ADD_MEMBERS_ENTRYPOINT_TYPE.GROUP_ADDED_CONTEXT_CARD;
        }
        if (msg.subtype === "invite") {
            return o("WAWebWamEnumAddMembersEntrypointType").ADD_MEMBERS_ENTRYPOINT_TYPE.GROUP_USER_JOINED_BY_LINK_CONTEXT_CARD;
        }
        return o("WAWebWamEnumAddMembersEntrypointType").ADD_MEMBERS_ENTRYPOINT_TYPE.GROUP_ADD_MEMBER_ENTRY_POINT_OTHER;
    }
    l.default = f;
}, 226);