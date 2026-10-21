__d("WAWebDeleteChatPopup.react", [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebBlocklistUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebDeleteChatAction",
    "WAWebExitGroupAction",
    "WAWebFbtCommon",
    "WAWebFrontendChatGetters",
    "WAWebGroupExitModalLoggingUtils",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebLeaveCommunityAnnouncementGroupPopup.react",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNoop",
    "WAWebOpenScheduledMsgsDeleteReview",
    "WAWebScheduledMsgsReviewText.react",
    "WAWebStateUtils",
    "WAWebText.react",
    "WAWebUpdateDbForCommunityAction",
    "WAWebUpdateModelsForCommunityAction",
    "nullthrows",
    "react",
    "useWAWebChatValues",
    "useWAWebScheduledMsgsReview"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    function M22({ chat, onCancel, onDeleteOrExit }) {
        let a;
        const c = o("useWAWebChatValues").useChatValues(chat.id, [
            (a = o("WAWebChatGetters")).getId,
            a.getIsPSA,
            a.getIsReadOnly,
            a.getIsGroup,
            a.getIsUser,
            a.getIsBroadcast,
            o("WAWebFrontendChatGetters").getContact,
            o("WAWebFrontendChatGetters").getGroupMetadata,
            a.getArchive,
            a.getIsNewsletter,
            o("WAWebFrontendChatGetters").getFormattedTitle
        ]);
        const p = c[0];
        const h = c[1];
        const y = c[2];
        const C = c[3];
        const b = c[4];
        const v = c[5];
        const S = c[6];
        const R = c[7];
        const L = c[8];
        const E = c[9];
        const k = c[10];
        const I = r("useWAWebScheduledMsgsReview")(chat);
        const T = function() {
            o("WAWebModalManager").ModalManager.close();
            onCancel?.();
        };
        const D = function() {
            o("WAWebModalManager").ModalManager.close();
            o("WAWebOpenScheduledMsgsDeleteReview").openScheduledMsgsDeleteReview(chat, function() {
                o("WAWebModalManager").ModalManager.open(<M22 chat={chat} onCancel={onCancel} onDeleteOrExit={onDeleteOrExit}/>);
            });
        };
        const x = function() {
            let t;
            if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(R) === o("WAWebGroupType").GroupType.COMMUNITY) {
                const a = r("nullthrows")(R);
                const l = a.joinedSubgroups.map((e)=>{
                    const t = o("WAWebChatCollection").ChatCollection.get(e);
                    return {
                        id: e,
                        subject: r("nullthrows")(t).formattedTitle
                    };
                });
                t = o("WAWebUpdateDbForCommunityAction").databaseUpdatesForSubgroupUnlink(p, l).then((e)=>(u || (u = n("Promise"))).all(e)).then(()=>{
                    o("WAWebUpdateModelsForCommunityAction").updateModelsForSubgroupUnlink(p, l);
                    return o("WAWebDeleteChatAction").sendDelete(chat);
                });
            } else {
                if (C) {
                    if (y) {
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
                } else if (b || v) {
                    t = o("WAWebDeleteChatAction").sendDelete(chat);
                } else {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "deleteChatPopup:onDelete Unsupported chat type"
                    ])));
                }
            }
            if (t) {
                onDeleteOrExit(t);
            }
            o("WAWebModalManager").ModalManager.close();
        };
        const $ = function() {
            if (h) {
                o("WAWebCmd").Cmd.archiveChatFromEntryPoint({
                    archive: true,
                    chat: o("WAWebStateUtils").unproxy(chat),
                    entryPoint: 7
                });
            } else {
                o("WAWebCmd").Cmd.archiveChat(chat, true);
            }
            o("WAWebModalManager").ModalManager.close();
        };
        const P = function() {
            o("WAWebGroupExitModalLoggingUtils").logGroupArchiveFromLegacyExitPopup({
                groupJid: chat.id.toJid()
            });
            $();
        };
        let N;
        let buttonsDirection;
        const w = b && S != null && S.isContactBlocked && !L;
        const A = C && y && !L && o("WAWebBlocklistUtils").isRBIForGroupsEnabled();
        if (C && !y && !L) {
            N = {
                text: r("WAWebFbtCommon")("Archive instead"),
                onClick: P
            };
        } else if (w || A) {
            N = {
                text: r("WAWebFbtCommon")("Archive"),
                onClick: $
            };
            buttonsDirection = "horizontal";
        }
        if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(R) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !o("WAWebChatGroupUtils").isIntegrityDeactivatedCommunityAnnouncementGroup(chat) && !o("WAWebChatGroupUtils").isTerminatedGroup(chat) && R != null && R.participants.iAmMember()) {
            const F = !!(R != null && R.participants.iAmAdmin());
            if (F) {
                const Component = o("WAWebLeaveCommunityAnnouncementGroupPopup.react").LeaveCommunityAnnouncementGroupAdminPopup;
                return <Component isCommunityCreator={!!(R != null && R.participants.iAmSuperAdmin())} isArchived={L} onArchive={$}/>;
            }
            const Component = o("WAWebLeaveCommunityAnnouncementGroupPopup.react").LeaveCommunityAnnouncementGroupMemberPopup;
            return <Component isArchived={L} onArchive={$}/>;
        }
        const Component = o("WAWebText.react").WAWebTextMuted;
        const Component_1 = r("WAWebScheduledMsgsReviewText.react");
        return d.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, babelHelpers.extends({
            tsNavigationData: {
                surface: "delete-chat",
                viewName: "delete-chat"
            },
            title: _(chat),
            onOK: x,
            okText: g(chat),
            onCancel: T,
            extraButtonProps: N,
            okButtonType: "solid-warning"
        }, buttonsDirection != null ? {
            buttonsDirection
        } : null, {
            children: [
                <Component>{f(chat)}</Component>,
                I.shouldShow ? <Component_1 count={I.count} onReview={D}/> : null
            ]
        }));
    }
    M22.displayName = `${M22.name} [from ${i.id}]`;
    function p(chat) {
        const r = chat.groupMetadata?.getParentGroupChat();
        return r?.groupMetadata?.joinedSubgroups.length === 1;
    }
    function _(chat) {
        if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat.groupMetadata) === o("WAWebGroupType").GroupType.COMMUNITY) {
            return s._("Delete this community?");
        }
        if (o("WAWebChatGetters").getIsGroup(chat)) {
            if (p(chat) && !o("WAWebChatGetters").getIsReadOnly(chat)) {
                return s._("Exit group and community?");
            }
            if (o("WAWebChatGetters").getIsReadOnly(chat)) {
                return s._("Delete this group?");
            }
            return s._("Exit \"{group_name}\" group?", [
                s._param("group_name", d.jsx(o("WAWebName.react").Name, {
                    chat,
                    titlify: true
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
    function f(chat) {
        if (h(chat)) {
            return s._("Messages will be removed from all devices.");
        }
        if (o("WAWebChatGetters").getIsBroadcast(chat)) {
            return s._("This audience and its thread will be discarded and can’t be restored.");
        }
        if (p(chat)) {
            const n = chat.groupMetadata?.getParentGroupChat();
            if (n?.formattedTitle != null) {
                if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                    return s._("By exiting this group you will also exit and lose access to the community \"{community_name}.\"", [
                        s._param("community_name", d.jsx(o("WAWebName.react").Name, {
                            chat: n,
                            titlify: true
                        }))
                    ]);
                }
                return s._("By exiting the group \"{group_name}\" you will also exit and lose access to the community \"{community_name}.\"", [
                    s._param("group_name", d.jsx(o("WAWebName.react").Name, {
                        chat,
                        titlify: true
                    })),
                    s._param("community_name", d.jsx(o("WAWebName.react").Name, {
                        chat: n,
                        titlify: true
                    }))
                ]);
            }
            if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                return s._("By exiting this group you will also exit and lose access to the community.");
            }
            return s._("By exiting the group \"{group_name}\" you will also exit and lose access to the community.", [
                s._param("group_name", d.jsx(o("WAWebName.react").Name, {
                    chat,
                    titlify: true
                }))
            ]);
        }
        return s._("Only group admins will be notified that you left the group.");
    }
    function g(chat) {
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
    function h(chat) {
        return o("WAWebChatGetters").getIsGroup(chat) && o("WAWebChatGetters").getIsReadOnly(chat) || o("WAWebChatGetters").getIsUser(chat);
    }
    l.default = M22;
}, 226);