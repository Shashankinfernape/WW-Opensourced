__d("WAWebCommunityNavigationQuickActions", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebFindChatAction",
    "WAWebModalManager",
    "WAWebNoop",
    "WDSIconIcGroup.react",
    "WDSIconIcInfo.react",
    "WDSIconIcSettings.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = [
        {
            id: "community_info",
            Icon: r("WDSIconIcInfo.react"),
            label: function() {
                return s._("Info");
            },
            onClick: function({ chat }) {
                o("WAWebCmd").Cmd.openCommunityTabbedInfo(chat.id);
            }
        },
        {
            id: "community_members",
            Icon: r("WDSIconIcGroup.react"),
            label: function() {
                return s._("Members");
            },
            isVisible: function({ isAdmin, isSuspended }) {
                return !isSuspended && !isAdmin;
            },
            onClick: function({ chat }) {
                r("JSResourceForInteraction")("WAWebViewCommunityMembersModal.react").__setRef("WAWebCommunityNavigationQuickActions").load().then(({ ViewCommunityMembersModal })=>{
                    o("WAWebModalManager").ModalManager.open(<ViewCommunityMembersModal parentChat={chat} onInviteMembersClick={r("WAWebNoop")}/>);
                });
            }
        },
        {
            id: "community_settings",
            Icon: r("WDSIconIcSettings.react"),
            label: function() {
                return s._("Settings");
            },
            isVisible: function({ isAdmin, isSuspended }) {
                return !isSuspended && isAdmin;
            },
            onClick: function({ chat }) {
                o("WAWebCmd").Cmd.openCommunitySettingsDrawer(chat.id);
            }
        },
        {
            id: "community_new_group",
            Icon: r("WDSIconIcGroup.react"),
            label: function() {
                return s._("New group");
            },
            isVisible: function({ allowNonAdminSubGroupCreation, canAddGroup, isAdmin }) {
                return canAddGroup && (isAdmin || allowNonAdminSubGroupCreation);
            },
            onClick: function({ chat }) {
                o("WAWebCmd").Cmd.communityAddNewGroup(chat.id, function(t) {
                    return d(chat.id, t);
                }, undefined);
            }
        },
        {
            id: "community_add_existing_group",
            Icon: r("WDSIconIcGroup.react"),
            label: function() {
                return s._("Existing group");
            },
            isVisible: function({ allowNonAdminSubGroupCreation, canAddGroup, isAdmin }) {
                return canAddGroup && (isAdmin || allowNonAdminSubGroupCreation);
            },
            onClick: function({ chat }) {
                o("WAWebCmd").Cmd.communityAddExistingGroup(chat.id);
            }
        }
    ];
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n;
            try {
                n = yield t;
            } catch (e) {
                return;
            }
            if (n != null) {
                o("WAWebCmd").Cmd.openCommunityHome(e);
                const r = yield o("WAWebFindChatAction").findOrCreateLatestChat(n, "communityHome");
                const a = r.chat;
                const i = yield o("WAWebCmd").Cmd.openChatBottom({
                    chat: a,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.CommunityNewGroupCreation
                });
                if (i) {
                    o("WAWebComposeBoxActions").ComposeBoxActions.focus(a);
                }
            }
        });
        return m.apply(this, arguments);
    }
    l.default = c;
}, 226);