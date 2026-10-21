__d("WAWebDeleteChatDialogV2.react", [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebBlocklistUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebDeleteChatAction",
    "WAWebExitGroupAction",
    "WAWebFbtCommon",
    "WAWebFrontendChatGetters",
    "WAWebGroupExitModalLoggingUtils",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebLeaveCommunityAnnouncementGroupPopup.react",
    "WAWebName.react",
    "WAWebNoop",
    "WAWebOpenScheduledMsgsDeleteReview",
    "WAWebScheduledMsgsReviewText.react",
    "WAWebUpdateDbForCommunityAction",
    "WAWebUpdateModelsForCommunityAction",
    "WDSButtonGroup.react",
    "WDSDialog.react",
    "WDSDialogBridge",
    "nullthrows",
    "react",
    "useWAWebChatValues",
    "useWAWebScheduledMsgsReview"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = {
        inlineName: {
            display: "xt0psk2",
            $$css: true
        }
    };
    function _({ chat, onCancel, onDeleteOrExit }) {
        let a;
        const d = o("useWAWebChatValues").useChatValues(chat.id, [
            (a = o("WAWebChatGetters")).getId,
            a.getIsPSA,
            a.getIsReadOnly,
            a.getIsGroup,
            a.getIsUser,
            a.getIsBroadcast,
            o("WAWebFrontendChatGetters").getContact,
            o("WAWebFrontendChatGetters").getGroupMetadata,
            a.getArchive
        ]);
        const p = d[0];
        const g = d[1];
        const b = d[2];
        const v = d[3];
        const S = d[4];
        const R = d[5];
        const L = d[6];
        const E = d[7];
        const k = d[8];
        const I = r("useWAWebScheduledMsgsReview")(chat);
        const T = function() {
            o("WDSDialogBridge").closeWDSDialog();
            onCancel?.();
        };
        const D = function() {
            o("WDSDialogBridge").closeWDSDialog();
            o("WAWebOpenScheduledMsgsDeleteReview").openScheduledMsgsDeleteReview(chat, function() {
                o("WDSDialogBridge").openWDSDialog(<_ chat={chat} onCancel={onCancel} onDeleteOrExit={onDeleteOrExit}/>);
            });
        };
        const onArchive = function() {
            if (g) {
                o("WAWebCmd").Cmd.archiveChatFromEntryPoint({
                    archive: true,
                    chat,
                    entryPoint: 7
                });
            } else {
                o("WAWebCmd").Cmd.archiveChat(chat, true);
            }
            o("WDSDialogBridge").closeWDSDialog();
        };
        const $ = function() {
            o("WAWebGroupExitModalLoggingUtils").logGroupArchiveFromLegacyExitPopup({
                groupJid: chat.id.toJid()
            });
            onArchive();
        };
        const P = function() {
            let t;
            if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(E) === o("WAWebGroupType").GroupType.COMMUNITY) {
                const a = r("nullthrows")(E);
                const l = a.joinedSubgroups.map((e)=>{
                    const t = o("WAWebChatCollection").ChatCollection.get(e);
                    return {
                        id: e,
                        subject: r("nullthrows")(t).formattedTitle
                    };
                });
                t = o("WAWebUpdateDbForCommunityAction").databaseUpdatesForSubgroupUnlink(p, l).then((e)=>(c || (c = n("Promise"))).all(e)).then(()=>{
                    o("WAWebUpdateModelsForCommunityAction").updateModelsForSubgroupUnlink(p, l);
                    return o("WAWebDeleteChatAction").sendDelete(chat);
                });
            } else {
                if (v) {
                    if (b) {
                        t = o("WAWebDeleteChatAction").sendDelete(chat);
                        o("WAWebGroupExitModalLoggingUtils").logGroupDeleteFromDeletePopup({
                            groupJid: chat.id.toJid()
                        });
                    } else {
                        o("WAWebGroupExitModalLoggingUtils").logGroupExitFromLegacyExitPopup({
                            groupJid: chat.id.toJid()
                        });
                        t = o("WAWebExitGroupAction").sendExitGroup(chat).then(r("WAWebNoop"));
                    }
                } else if (S || R) {
                    t = o("WAWebDeleteChatAction").sendDelete(chat);
                } else {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebDeleteChatDialogV2:onDelete Unsupported chat type"
                    ]))).sendLogs("delete-chat-dialog-unsupported-type");
                }
            }
            if (t) {
                onDeleteOrExit(t);
            }
            o("WDSDialogBridge").closeWDSDialog();
        };
        if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(E) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !o("WAWebChatGroupUtils").isIntegrityDeactivatedCommunityAnnouncementGroup(chat) && !o("WAWebChatGroupUtils").isTerminatedGroup(chat) && E != null && E.participants.iAmMember()) {
            const N = !!(E != null && E.participants.iAmAdmin());
            if (N) {
                const Component = o("WAWebLeaveCommunityAnnouncementGroupPopup.react").LeaveCommunityAnnouncementGroupAdminPopup;
                return <Component isCommunityCreator={!!(E != null && E.participants.iAmSuperAdmin())} isArchived={k} onArchive={onArchive} onClose={o("WDSDialogBridge").closeWDSDialog}/>;
            }
            const Component = o("WAWebLeaveCommunityAnnouncementGroupPopup.react").LeaveCommunityAnnouncementGroupMemberPopup;
            return <Component isArchived={k} onArchive={onArchive} onClose={o("WDSDialogBridge").closeWDSDialog}/>;
        }
        const M = h(chat);
        const w = y(chat);
        const A = C(chat);
        if (M == null || w == null || A == null) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebDeleteChatDialogV2: Unsupported chat type"
            ]))).sendLogs("delete-chat-dialog-unsupported-title");
            return null;
        }
        const F = S && L != null && L.isContactBlocked && !k;
        const O = v && b && !k && o("WAWebBlocklistUtils").isRBIForGroupsEnabled();
        let B;
        let onSecondary;
        if (v && !b && !k) {
            B = r("WAWebFbtCommon")("Archive instead");
            onSecondary = $;
        } else if (F || O) {
            B = r("WAWebFbtCommon")("Archive");
            onSecondary = onArchive;
        }
        const Component = r("WAWebScheduledMsgsReviewText.react");
        const Component_1 = r("WDSDialog.react");
        return <Component_1 closeButton={false} description={w} footer={f({
            confirmLabel: A,
            onConfirm: P,
            onDismiss: T,
            onSecondary,
            secondaryLabel: B
        })} headerType="expressive" layoutType="expressive" onDismiss={T} open size="sm" testid="confirm-popup" title={M}>{I.shouldShow ? <Component count={I.count} onReview={D}/> : null}</Component_1>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function f({ confirmLabel, onConfirm, onDismiss, onSecondary, secondaryLabel }) {
        return m.jsx(r("WDSButtonGroup.react"), {
            orientation: "stacked",
            width: "fill",
            primaryButtonProps: {
                label: confirmLabel,
                onPress: onConfirm,
                testid: "popup-controls-ok",
                type: "destructive",
                variant: "outline"
            },
            secondaryButtonProps: secondaryLabel != null && onSecondary != null ? {
                label: secondaryLabel,
                onPress: onSecondary,
                testid: "popup-controls-extra",
                type: "default",
                variant: "outline"
            } : undefined,
            tertiaryButtonProps: {
                label: s._("Cancel"),
                onPress: onDismiss,
                testid: "popup-controls-cancel",
                variant: "borderless"
            }
        });
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g(chat) {
        const r = chat.groupMetadata?.getParentGroupChat();
        return r?.groupMetadata?.joinedSubgroups.length === 1;
    }
    function h(chat) {
        if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat.groupMetadata) === o("WAWebGroupType").GroupType.COMMUNITY) {
            return s._("Delete this community?");
        }
        if (o("WAWebChatGetters").getIsGroup(chat)) {
            if (g(chat) && !o("WAWebChatGetters").getIsReadOnly(chat)) {
                return s._("Exit group and community?");
            }
            if (o("WAWebChatGetters").getIsReadOnly(chat)) {
                return s._("Delete this group?");
            }
            return s._("Exit \"{group_name}\" group?", [
                s._param("group_name", m.jsx(o("WAWebName.react").Name, {
                    chat,
                    titlify: true,
                    xstyle: p.inlineName
                }))
            ]);
        }
        if (o("WAWebChatGetters").getIsUser(chat)) {
            if (chat.formattedTitle) {
                return s._("Delete chat with {contact_name}?", [
                    s._param("contact_name", chat.formattedTitle)
                ]);
            }
            return s._("Delete this chat?");
        }
        if (o("WAWebChatGetters").getIsBroadcast(chat)) {
            if (chat.formattedTitle) {
                return s._("Delete {contact_name}?", [
                    s._param("contact_name", chat.formattedTitle)
                ]);
            }
            return s._("Delete audience?");
        }
    }
    function y(chat) {
        if (b(chat)) {
            return s._("Messages will be removed from all devices.");
        }
        if (o("WAWebChatGetters").getIsBroadcast(chat)) {
            return s._("This audience and its thread will be discarded and can’t be restored.");
        }
        if (g(chat)) {
            const n = chat.groupMetadata?.getParentGroupChat();
            if (n?.formattedTitle != null) {
                if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                    return s._("By exiting this group you will also exit and lose access to the community \"{community_name}.\"", [
                        s._param("community_name", m.jsx(o("WAWebName.react").Name, {
                            chat: n,
                            titlify: true,
                            xstyle: p.inlineName
                        }))
                    ]);
                }
                return s._("By exiting the group \"{group_name}\" you will also exit and lose access to the community \"{community_name}.\"", [
                    s._param("group_name", m.jsx(o("WAWebName.react").Name, {
                        chat,
                        titlify: true,
                        xstyle: p.inlineName
                    })),
                    s._param("community_name", m.jsx(o("WAWebName.react").Name, {
                        chat: n,
                        titlify: true,
                        xstyle: p.inlineName
                    }))
                ]);
            }
            if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                return s._("By exiting this group you will also exit and lose access to the community.");
            }
            return s._("By exiting the group \"{group_name}\" you will also exit and lose access to the community.", [
                s._param("group_name", m.jsx(o("WAWebName.react").Name, {
                    chat,
                    titlify: true,
                    xstyle: p.inlineName
                }))
            ]);
        }
        return s._("Only group admins will be notified that you left the group.");
    }
    function C(chat) {
        if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat.groupMetadata) === o("WAWebGroupType").GroupType.COMMUNITY) {
            return s._("Delete community");
        }
        if (o("WAWebChatGetters").getIsGroup(chat)) {
            if (o("WAWebChatGetters").getIsReadOnly(chat)) {
                return s._("Delete group");
            }
            return s._("Exit group");
        }
        if (o("WAWebChatGetters").getIsUser(chat) || o("WAWebChatGetters").getIsBroadcast(chat)) {
            return s._("Delete");
        }
    }
    function b(chat) {
        return o("WAWebChatGetters").getIsGroup(chat) && o("WAWebChatGetters").getIsReadOnly(chat) || o("WAWebChatGetters").getIsUser(chat);
    }
    l.default = _;
}, 226);