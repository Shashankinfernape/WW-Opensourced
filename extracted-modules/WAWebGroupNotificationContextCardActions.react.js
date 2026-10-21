__d("WAWebGroupNotificationContextCardActions.react", [
    "fbt",
    "WAWebButton.react",
    "WAWebEmailInviteGating",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupMemberTagUpdateLogger",
    "WAWebGroupNotificationContextCardActionsUtils",
    "WAWebMemberLabelCreateUpdateModalLoadable.react",
    "WAWebMemberLabelHooks",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebWamEnumTsSurface",
    "WDSButtonGroup.react",
    "WDSIconIcAddCircle.react",
    "WDSIconIcEdit.react",
    "WDSIconIcInfo.react",
    "WDSIconIcLink.react",
    "WDSIconIcMail.react",
    "WDSIconIcPersonAdd.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEmailInviteParentRestriction",
    "useWAWebIAmGroupAdmin",
    "useWAWebIAmGroupMember"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    const d = {
        buttonGroupContainer: {
            minWidth: "x5w4yej",
            columnGap: "xfex06f",
            rowGap: "x3pnbk8",
            $$css: true
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(25);
        const { canAddParticipants, chat, groupMetadata, isUnnamed, onAddGroupMembersClick, onAddNameClick, onGroupInfoClick, onInviteViaEmailClick, onInviteViaLinkClick } = e;
        let h;
        if (t[0] !== chat) {
            h = function() {
                o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebMemberLabelCreateUpdateModalLoadable.react").MemberLabelCreateUpdateModalLoadable, {
                    chat,
                    entryPoint: o("WAWebGroupMemberTagUpdateLogger").GroupMemberTagUpdateLogger.ENTRY_POINT.NEW_MEMBER_PROMPT,
                    uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD
                }));
            };
            t[0] = chat;
            t[1] = h;
        } else {
            h = t[1];
        }
        const y = h;
        const iAmMember = r("useWAWebIAmGroupMember")(groupMetadata);
        const b = r("useWAWebIAmGroupAdmin")(groupMetadata);
        const v = o("WAWebMemberLabelHooks").useHasSelfMemberLabelForChat(chat);
        const isInviteLinkRestricted = r("useWAWebEmailInviteParentRestriction")(groupMetadata);
        let R;
        let L;
        let E;
        if (t[2] !== canAddParticipants || t[3] !== groupMetadata || t[4] !== y || t[5] !== v || t[6] !== b || t[7] !== iAmMember || t[8] !== isInviteLinkRestricted || t[9] !== isUnnamed || t[10] !== onAddGroupMembersClick || t[11] !== onAddNameClick || t[12] !== onGroupInfoClick || t[13] !== onInviteViaEmailClick || t[14] !== onInviteViaLinkClick) {
            L = p({
                groupMetadata,
                iAmAdmin: b,
                iAmMember,
                isInviteLinkRestricted,
                isUnnamed,
                onPress: onInviteViaEmailClick
            });
            const k = groupMetadata.memberLinkMode === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK;
            let available;
            if (t[18] !== groupMetadata || t[19] !== isUnnamed) {
                available = groupMetadata.canSetSubject() && isUnnamed;
                t[18] = groupMetadata;
                t[19] = isUnnamed;
                t[20] = available;
            } else {
                available = t[20];
            }
            const T = {
                name: {
                    available,
                    onPress: onAddNameClick,
                    icon: r("WDSIconIcEdit.react"),
                    testid: "group-notification-context-card-add-name-button",
                    label: s._("Name this group"),
                    shadowOnHover: false
                },
                addMembers: {
                    available: canAddParticipants && !groupMetadata.support,
                    onPress: onAddGroupMembersClick,
                    icon: r("WDSIconIcPersonAdd.react"),
                    testid: "group-notification-context-card-add-members-button",
                    label: s._("Add members")
                },
                memberTag: {
                    available: iAmMember && !v,
                    onPress: y,
                    icon: r("WDSIconIcAddCircle.react"),
                    testid: "group-notification-context-card-add-member-tag-button",
                    label: s._("Add your member tag"),
                    useVerticalLayout: true
                },
                groupInfo: {
                    available: true,
                    onPress: onGroupInfoClick,
                    icon: r("WDSIconIcInfo.react"),
                    testid: "group-notification-context-card-group-info-button",
                    label: s._("Group info")
                },
                inviteViaLink: {
                    available: onInviteViaLinkClick != null && iAmMember && k && !isInviteLinkRestricted,
                    onPress: onInviteViaLinkClick ?? r("WAWebNoop"),
                    icon: r("WDSIconIcLink.react"),
                    testid: "group-notification-context-card-invite-via-link-button",
                    label: s._("Invite to group via link"),
                    useVerticalLayout: true
                }
            };
            R = _;
            E = o("WAWebGroupNotificationContextCardActionsUtils").getGroupNotificationButtonConfig(T, L);
            t[2] = canAddParticipants;
            t[3] = groupMetadata;
            t[4] = y;
            t[5] = v;
            t[6] = b;
            t[7] = iAmMember;
            t[8] = isInviteLinkRestricted;
            t[9] = isUnnamed;
            t[10] = onAddGroupMembersClick;
            t[11] = onAddNameClick;
            t[12] = onGroupInfoClick;
            t[13] = onInviteViaEmailClick;
            t[14] = onInviteViaLinkClick;
            t[15] = R;
            t[16] = L;
            t[17] = E;
        } else {
            R = t[15];
            L = t[16];
            E = t[17];
        }
        let D;
        if (t[21] !== R || t[22] !== L.available || t[23] !== E) {
            D = <R {...babelHelpers.extends({}, E, {
                hasEmailActions: L.available
            })}/>;
            t[21] = R;
            t[22] = L.available;
            t[23] = E;
            t[24] = D;
        } else {
            D = t[24];
        }
        return D;
    }
    function p({ groupMetadata, iAmAdmin, iAmMember, isInviteLinkRestricted, isUnnamed, onPress }) {
        return {
            available: onPress != null && !isUnnamed && o("WAWebEmailInviteGating").isInviteByEmailEnabled({
                iAmAdmin,
                iAmMember,
                isInviteLinkRestricted,
                isSupportGroup: groupMetadata.support,
                memberLinkMode: groupMetadata.memberLinkMode
            }),
            onPress: onPress ?? r("WAWebNoop"),
            icon: r("WDSIconIcMail.react"),
            testid: "group-notification-context-card-invite-via-email-button",
            label: s._("Invite via email"),
            useVerticalLayout: true
        };
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(32);
        const { firstConfig, hasEmailActions, secondConfig, thirdConfig, useVerticalLayout } = e;
        if (secondConfig == null) {
            const c = useVerticalLayout ? "vertical" : "horizontal";
            let m;
            if (t[0] !== firstConfig) {
                m = g(firstConfig);
                t[0] = firstConfig;
                t[1] = m;
            } else {
                m = t[1];
            }
            let p;
            if (t[2] !== c || t[3] !== m) {
                const Component = o("WAWebButton.react").ButtonGroup;
                p = <Component direction={c} align="stretch" justify="center" wrap="wrap" paddingTop={16} xstyle={d.buttonGroupContainer}>{m}</Component>;
                t[2] = c;
                t[3] = m;
                t[4] = p;
            } else {
                p = t[4];
            }
            return p;
        }
        const _ = firstConfig ?? secondConfig;
        let h;
        let y;
        let orientation;
        let primaryButtonProps;
        let secondaryButtonProps;
        let S;
        let R;
        if (t[5] !== hasEmailActions || t[6] !== _ || t[7] !== secondConfig || t[8] !== useVerticalLayout) {
            const L = useVerticalLayout ? [
                _,
                secondConfig
            ] : [
                secondConfig,
                _
            ];
            const E = L[0];
            const k = L[1];
            if (t[16] !== hasEmailActions || t[17] !== useVerticalLayout) {
                S = ({
                    0: {
                        className: "x78zum5 x1q0g3np x1qjc9v5 xl56j7k x1a02dak xyamay9 x5w4yej xfex06f x3pnbk8"
                    },
                    2: {
                        className: "x78zum5 xdt5ytf x6s0dn4 xl56j7k xyamay9 x5w4yej x3pnbk8 xh8yej3"
                    },
                    1: {
                        className: "x78zum5 x1q0g3np x1qjc9v5 xl56j7k x1a02dak xyamay9 x5w4yej xfex06f x3pnbk8 x1tkr9og"
                    },
                    3: {
                        className: "x78zum5 xdt5ytf x6s0dn4 xl56j7k xyamay9 x5w4yej x3pnbk8 xh8yej3 x1tkr9og"
                    }
                })[!!useVerticalLayout << 1 | !!hasEmailActions << 0];
                t[16] = hasEmailActions;
                t[17] = useVerticalLayout;
                t[18] = S;
            } else {
                S = t[18];
            }
            R = "group-notification-context-card-actions";
            h = r("WDSButtonGroup.react");
            y = useVerticalLayout ? "fill" : "hug";
            orientation = useVerticalLayout ? "stacked" : "horizontal";
            primaryButtonProps = f(E);
            secondaryButtonProps = f(k);
            t[5] = hasEmailActions;
            t[6] = _;
            t[7] = secondConfig;
            t[8] = useVerticalLayout;
            t[9] = h;
            t[10] = y;
            t[11] = orientation;
            t[12] = primaryButtonProps;
            t[13] = secondaryButtonProps;
            t[14] = S;
            t[15] = R;
        } else {
            h = t[9];
            y = t[10];
            orientation = t[11];
            primaryButtonProps = t[12];
            secondaryButtonProps = t[13];
            S = t[14];
            R = t[15];
        }
        let tertiaryButtonProps;
        if (t[19] !== thirdConfig) {
            tertiaryButtonProps = thirdConfig == null ? undefined : f(thirdConfig);
            t[19] = thirdConfig;
            t[20] = tertiaryButtonProps;
        } else {
            tertiaryButtonProps = t[20];
        }
        let T;
        if (t[21] !== h || t[22] !== y || t[23] !== orientation || t[24] !== primaryButtonProps || t[25] !== secondaryButtonProps || t[26] !== tertiaryButtonProps) {
            T = u.jsx(h, {
                width: y,
                orientation,
                primaryButtonProps,
                secondaryButtonProps,
                tertiaryButtonProps
            });
            t[21] = h;
            t[22] = y;
            t[23] = orientation;
            t[24] = primaryButtonProps;
            t[25] = secondaryButtonProps;
            t[26] = tertiaryButtonProps;
            t[27] = T;
        } else {
            T = t[27];
        }
        let D;
        if (t[28] !== S || t[29] !== R || t[30] !== T) {
            D = <div {...babelHelpers.extends({}, S, {
                "data-testid": R,
                children: T
            })}/>;
            t[28] = S;
            t[29] = R;
            t[30] = T;
            t[31] = D;
        } else {
            D = t[31];
        }
        return D;
    }
    function f(e) {
        return {
            variant: "outline",
            type: "default",
            onPress: e.onPress,
            Icon: e.icon,
            testid: e.testid,
            label: e.label
        };
    }
    function g(e) {
        if (e == null) {
            return null;
        }
        const Component = o("WAWebButton.react").WAWebButtonSecondary;
        return <Component onClick={e.onPress} icon={e.icon} shadowOnHover={e.shadowOnHover} testid={e.testid}>{e.label}</Component>;
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    l.GroupNotificationContextCardActions = m;
}, 226);