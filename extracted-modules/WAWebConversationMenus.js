__d("WAWebConversationMenus", [
    "fbt",
    "WAWebBroadcastConversationMenuItems",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatAssignmentUtils",
    "WAWebChatContextMenuItemEditLabel.react",
    "WAWebChatContextMenuItemEditList.react",
    "WAWebChatContextMenuItemLock.react",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatThemeGatingUtils",
    "WAWebCmd",
    "WAWebCommonMsgUtils",
    "WAWebCopyUtils",
    "WAWebDeleteMenuItem.react",
    "WAWebEnvironment",
    "WAWebExportChatMenuItem.react",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebHeader.react",
    "WAWebInboxFiltersGatingUtils",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebLeaveCommunityModalUtilsLoadable",
    "WAWebManageLabelFlowLoadable",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebMuteGetters",
    "WAWebMuteMenuItem.react",
    "WAWebMuteUtils",
    "WAWebOpenAddParticipantModalFlow",
    "WAWebOpenLeaveAndReportGroupModalLoadable",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebSpamConstants",
    "WAWebStateUtils",
    "WAWebWamEnumAddMembersEntrypointType",
    "WAWebWamEnumEphemeralSettingEntryPointType",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "WAWebWamEnumMuteEntryPoint",
    "WAWebWamEnumUpdateEntryPoint",
    "WAWebWidToJid",
    "WDSIconIcCancel.react",
    "WDSIconIcCheckBox.react",
    "WDSIconIcContentCopy.react",
    "WDSIconIcDoNotDisturbOn.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcInfo.react",
    "WDSIconIcLabel.react",
    "WDSIconIcPalette.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconIcSearch.react",
    "WDSIconIcUnfavourite.react",
    "WDSIconWdsIcDisappearingMessages.react",
    "WDSIconWdsIcTransferOwnership.react",
    "WDSMenuItem.react",
    "cr:23149",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebGroupParticipantStatus",
    "useWAWebMuteValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const n = o("react-compiler-runtime").c(3);
        const a = e.testid ?? "remove_favorite_icon";
        let i;
        if (n[0] !== e || n[1] !== a) {
            i = u.jsx(r("WDSIconIcUnfavourite.react"), babelHelpers.extends({}, e, {
                testid: a
            }));
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            i = n[2];
        }
        return i;
    }
    function d(chat, t) {
        return t && chat.groupMetadata != null && !chat.groupMetadata.support;
    }
    function m(e) {
        if (o("WAWebChatGroupUtils").shouldShowLeaveAndReportGroupModalForChat(e)) {
            o("WAWebOpenLeaveAndReportGroupModalLoadable").openLeaveAndReportGroupModal(e, o("WAWebSpamConstants").SpamFlow.GroupOverflowMenuLeaveReportUpsell);
        } else {
            const n = e.groupMetadata?.getParentGroupChat();
            if (n != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e)) {
                o("WAWebLeaveCommunityModalUtilsLoadable").openLeaveCommunityModal({
                    chat: n
                });
            } else {
                o("WAWebCmd").Cmd.deleteOrExitChat(e);
            }
        }
    }
    function p(e) {
        let t;
        const a = o("react-compiler-runtime").c(78);
        const { chat, container, onSearchChat, onSelect } = e;
        let g;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            g = [
                o("WAWebMuteGetters").getIsMuted
            ];
            a[0] = g;
        } else {
            g = a[0];
        }
        const h = o("useWAWebMuteValues").useMuteValues(chat.id, g);
        const y = h[0];
        const C = r("useWAWebGroupParticipantStatus")(chat.groupMetadata);
        const b = C[0];
        const v = [];
        let S;
        if (a[1] !== chat) {
            S = function() {
                o("WAWebCmd").Cmd.ephemeralDrawer(o("WAWebStateUtils").unproxy(chat), false, o("WAWebWamEnumEphemeralSettingEntryPointType").EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_OVERFLOW);
            };
            a[1] = chat;
            a[2] = S;
        } else {
            S = a[2];
        }
        const R = S;
        let L;
        if (a[3] !== chat) {
            L = function() {
                if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
                    o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
                    return;
                }
                const chat_groupMetadata = chat.groupMetadata;
                if (chat_groupMetadata != null) {
                    const communityName = chat_groupMetadata.getParentGroupChat()?.formattedTitle;
                    o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
                        groupMetadata: chat_groupMetadata,
                        chat: o("WAWebStateUtils").unproxy(chat),
                        communityName,
                        entryPoint: o("WAWebWamEnumAddMembersEntrypointType").ADD_MEMBERS_ENTRYPOINT_TYPE.GROUP_CONVERSATION_OVERFLOW_MENU
                    });
                }
            };
            a[3] = chat;
            a[4] = L;
        } else {
            L = a[4];
        }
        const E = L;
        let k;
        if (a[5] === Symbol.for("react.memo_cache_sentinel")) {
            k = s._("Add member");
            a[5] = k;
        } else {
            k = a[5];
        }
        if (d(chat, b)) {
            let T;
            if (a[6] !== E) {
                const Component = r("WDSMenuItem.react");
                T = <Component key="addMember" Icon={r("WDSIconIcPersonAdd.react")} title={k} onPress={E} testid="mi-add-member"/>;
                a[6] = E;
                a[7] = T;
            } else {
                T = a[7];
            }
            v.push(T);
        }
        let D;
        if (a[8] === Symbol.for("react.memo_cache_sentinel")) {
            D = s._("Assign chat");
            a[8] = D;
        } else {
            D = a[8];
        }
        if (o("WAWebChatAssignmentUtils").canAssignChats()) {
            let $;
            if (a[9] !== chat) {
                const Component = r("WDSMenuItem.react");
                $ = <Component key="assignChat" Icon={r("WDSIconWdsIcTransferOwnership.react")} title={D} onPress={function() {
                    o("WAWebCmd").Cmd.assignChat(chat, o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.CONVERSATION_MENU);
                }} testid="mi-assign-chat"/>;
                a[9] = chat;
                a[10] = $;
            } else {
                $ = a[10];
            }
            v.push($);
        }
        let P;
        if (a[11] !== chat.groupMetadata) {
            P = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? s._("Announcements info") : s._("Group info");
            a[11] = chat.groupMetadata;
            a[12] = P;
        } else {
            P = a[12];
        }
        const N = P;
        let M;
        if (a[13] !== chat) {
            M = function() {
                return o("WAWebCmd").Cmd.chatInfoDrawer(chat);
            };
            a[13] = chat;
            a[14] = M;
        } else {
            M = a[14];
        }
        let w;
        if (a[15] !== N || a[16] !== M) {
            const Component = r("WDSMenuItem.react");
            w = <Component key="info" Icon={r("WDSIconIcInfo.react")} title={N} onPress={M} testid="menu-item-chat-info"/>;
            a[15] = N;
            a[16] = M;
            a[17] = w;
        } else {
            w = a[17];
        }
        v.push(w);
        let A;
        if (a[18] === Symbol.for("react.memo_cache_sentinel")) {
            A = s._("Search");
            a[18] = A;
        } else {
            A = a[18];
        }
        const F = A;
        let O;
        if (a[19] !== onSearchChat) {
            const Component = r("WDSMenuItem.react");
            O = <Component key="search" Icon={r("WDSIconIcSearch.react")} title={F} onPress={onSearchChat} testid="mi-search-chat"/>;
            a[19] = onSearchChat;
            a[20] = O;
        } else {
            O = a[20];
        }
        v.push(O);
        let B;
        if (a[21] === Symbol.for("react.memo_cache_sentinel")) {
            B = s._("Select messages");
            a[21] = B;
        } else {
            B = a[21];
        }
        const W = B;
        let q;
        if (a[22] !== onSelect) {
            const Component = r("WDSMenuItem.react");
            q = <Component key="select" Icon={r("WDSIconIcCheckBox.react")} title={W} onPress={onSelect} testid="mi-select-messages"/>;
            a[22] = onSelect;
            a[23] = q;
        } else {
            q = a[23];
        }
        v.push(q);
        if (o("WAWebMobilePlatforms").isSMB() && r("WAWebEnvironment").isWindows && !r("WAWebEnvironment").isGuest && o("WAWebHeader.react").isCommunityRelatedChat(chat) && chat.canSend) {
            let U;
            if (a[24] === Symbol.for("react.memo_cache_sentinel")) {
                U = s._("Add to list");
                a[24] = U;
            } else {
                U = a[24];
            }
            let V;
            if (a[25] !== chat) {
                const Component = r("WDSMenuItem.react");
                V = <Component key="label-chat" Icon={r("WDSIconIcLabel.react")} title={U} onPress={function() {
                    const Component = o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable;
                    o("WAWebModalManager").ModalManager.open(<Component modelsToUpdate={[
                        o("WAWebStateUtils").unproxy(chat)
                    ]} onClose={o("WAWebModalManager").closeModalManager} entryPoint={o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_MORE_OPTIONS}/>);
                }} testid="mi-label-chat"/>;
                a[25] = chat;
                a[26] = V;
            } else {
                V = a[26];
            }
            v.push(V);
        }
        if (o("WAWebMuteUtils").canMute(chat.mute)) {
            let H;
            let onMuteWithDuration;
            if (a[27] !== chat) {
                H = function(t) {
                    return o("WAWebCmd").Cmd.muteChatFromEntryPoint(chat, t, o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONVERSATION_SCREEN);
                };
                onMuteWithDuration = function(t) {
                    o("WAWebCmd").Cmd.muteChatWithDuration(chat, t, o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONVERSATION_SCREEN);
                };
                a[27] = chat;
                a[28] = H;
                a[29] = onMuteWithDuration;
            } else {
                H = a[28];
                onMuteWithDuration = a[29];
            }
            let z;
            if (a[30] !== chat || a[31] !== y || a[32] !== H || a[33] !== onMuteWithDuration) {
                const Component = r("WAWebMuteMenuItem.react");
                z = <Component key="mute" onMute={H} onMuteWithDuration={onMuteWithDuration} chat={chat} isMuted={y}/>;
                a[30] = chat;
                a[31] = y;
                a[32] = H;
                a[33] = onMuteWithDuration;
                a[34] = z;
            } else {
                z = a[34];
            }
            v.push(z);
        }
        let j;
        if (a[35] === Symbol.for("react.memo_cache_sentinel")) {
            j = s._("Disappearing messages");
            a[35] = j;
        } else {
            j = a[35];
        }
        if (o("WAWebChatEphemerality").shouldShowEphemeralSetting(chat) && (t = chat.groupMetadata) != null && t.canSetEphemeralSetting()) {
            let Q;
            if (a[36] !== R) {
                const Component = r("WDSMenuItem.react");
                Q = <Component key="disappearingMessages" Icon={r("WDSIconWdsIcDisappearingMessages.react")} title={j} onPress={R} testid="mi-disappearing-messages"/>;
                a[36] = R;
                a[37] = Q;
            } else {
                Q = a[37];
            }
            v.push(Q);
        }
        let X;
        if (a[38] !== chat) {
            X = u.jsx(r("WAWebChatContextMenuItemLock.react"), {
                chat
            }, "Lock");
            a[38] = chat;
            a[39] = X;
        } else {
            X = a[39];
        }
        v.push(X);
        if (o("WAWebChatThemeGatingUtils").isChatThemesEnabled()) {
            let Y;
            if (a[40] === Symbol.for("react.memo_cache_sentinel")) {
                Y = s._("Chat theme");
                a[40] = Y;
            } else {
                Y = a[40];
            }
            const J = Y;
            let Z;
            if (a[41] !== chat) {
                const Component = r("WDSMenuItem.react");
                Z = <Component key="chatTheme" Icon={r("WDSIconIcPalette.react")} title={J} onPress={function() {
                    return o("WAWebCmd").Cmd.chatThemeDrawer(chat);
                }} testid="mi-chat-theme"/>;
                a[41] = chat;
                a[42] = Z;
            } else {
                Z = a[42];
            }
            v.push(Z);
        }
        if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
            let ee;
            let te;
            if (chat.isFavorite) {
                let ne;
                if (a[43] === Symbol.for("react.memo_cache_sentinel")) {
                    ne = o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._("Remove from favourites") : s._("Remove from Favourites");
                    a[43] = ne;
                } else {
                    ne = a[43];
                }
                te = ne;
                ee = c;
            } else {
                let re;
                if (a[44] === Symbol.for("react.memo_cache_sentinel")) {
                    re = o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._("Add to favourites") : s._("Add to favourites");
                    a[44] = re;
                } else {
                    re = a[44];
                }
                te = re;
                ee = r("WDSIconIcFavorite.react");
            }
            let oe;
            if (a[45] !== chat) {
                oe = function() {
                    return o("WAWebCmd").Cmd.favoriteChat(chat, !chat.isFavorite, o("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT.CHAT_HEADER_CONTEXT_MENU);
                };
                a[45] = chat;
                a[46] = oe;
            } else {
                oe = a[46];
            }
            let ae;
            if (a[47] !== te || a[48] !== oe || a[49] !== ee) {
                const Component = r("WDSMenuItem.react");
                ae = <Component key="favorite" Icon={ee} title={te} onPress={oe} testid="mi-favorite"/>;
                a[47] = te;
                a[48] = oe;
                a[49] = ee;
                a[50] = ae;
            } else {
                ae = a[50];
            }
            v.push(ae);
        }
        let ie;
        if (a[51] !== chat) {
            ie = function() {
                o("WAWebChatContextMenuItemEditLabel.react").checkDataSharingOrHandleLabelAction(chat);
            };
            a[51] = chat;
            a[52] = ie;
        } else {
            ie = a[52];
        }
        const onSMBLabelMenuItemClick = ie;
        let se;
        if (a[53] !== chat || a[54] !== onSMBLabelMenuItemClick) {
            const Component = r("WAWebChatContextMenuItemEditList.react");
            se = <Component chat={chat} displayContext="chat-header" onSMBLabelMenuItemClick={onSMBLabelMenuItemClick}/>;
            a[53] = chat;
            a[54] = onSMBLabelMenuItemClick;
            a[55] = se;
        } else {
            se = a[55];
        }
        v.push(se);
        let ue;
        if (a[56] === Symbol.for("react.memo_cache_sentinel")) {
            ue = s._("Copy selection");
            a[56] = ue;
        } else {
            ue = a[56];
        }
        if (o("WAWebCopyUtils").canCopySelection() && container != null) {
            let de;
            if (a[57] !== container) {
                const Component = r("WDSMenuItem.react");
                de = <Component Icon={r("WDSIconIcContentCopy.react")} title={ue} onPress={function() {
                    o("WAWebCopyUtils").copySelection(container);
                }}/>;
                a[57] = container;
                a[58] = de;
            } else {
                de = a[58];
            }
            v.push(de);
        }
        let me;
        if (a[59] !== chat) {
            me = u.jsx(r("WAWebExportChatMenuItem.react"), {
                chat
            }, "export");
            a[59] = chat;
            a[60] = me;
        } else {
            me = a[60];
        }
        v.push(me);
        let pe;
        if (a[61] === Symbol.for("react.memo_cache_sentinel")) {
            pe = s._("Close chat");
            a[61] = pe;
        } else {
            pe = a[61];
        }
        let _e;
        if (a[62] !== chat) {
            const Component = r("WDSMenuItem.react");
            _e = <Component key="close" Icon={r("WDSIconIcCancel.react")} title={pe} onPress={function() {
                return o("WAWebCmd").Cmd.closeChat(chat);
            }} testid="mi-close-chat"/>;
            a[62] = chat;
            a[63] = _e;
        } else {
            _e = a[63];
        }
        v.push(_e);
        let fe;
        if (a[64] === Symbol.for("react.memo_cache_sentinel")) {
            fe = u.jsx(r("WDSMenuItem.react"), {
                type: "separator"
            });
            a[64] = fe;
        } else {
            fe = a[64];
        }
        v.push(fe);
        let ge;
        if (a[65] === Symbol.for("react.memo_cache_sentinel")) {
            ge = s._("Clear chat");
            a[65] = ge;
        } else {
            ge = a[65];
        }
        const he = ge;
        const ye = o("useWAWebABPropConfigValue").useABPropConfigValue("ai_learning_clear_chat_disable_empty_chats");
        let Ce;
        if (a[66] !== chat.msgs) {
            Ce = chat.msgs.getModelsArray().some(_);
            a[66] = chat.msgs;
            a[67] = Ce;
        } else {
            Ce = a[67];
        }
        const be = Ce;
        let ve;
        if (a[68] !== chat) {
            ve = function() {
                return o("WAWebCmd").Cmd.clearChat(chat);
            };
            a[68] = chat;
            a[69] = ve;
        } else {
            ve = a[69];
        }
        const Se = ye && !be;
        let Re;
        if (a[70] !== ve || a[71] !== Se) {
            const Component = r("WDSMenuItem.react");
            Re = <Component Icon={r("WDSIconIcDoNotDisturbOn.react")} title={he} onPress={ve} testid="mi-clear" destructive disabled={Se}/>;
            a[70] = ve;
            a[71] = Se;
            a[72] = Re;
        } else {
            Re = a[72];
        }
        v.push(Re);
        let Le;
        if (a[73] !== chat) {
            Le = function() {
                m(chat);
            };
            a[73] = chat;
            a[74] = Le;
        } else {
            Le = a[74];
        }
        const onDeleteOrExit = Le;
        let ke;
        if (a[75] !== chat || a[76] !== onDeleteOrExit) {
            const Component = r("WAWebDeleteMenuItem.react");
            ke = <Component key="delete" onDeleteOrExit={onDeleteOrExit} chat={chat}/>;
            a[75] = chat;
            a[76] = onDeleteOrExit;
            a[77] = ke;
        } else {
            ke = a[77];
        }
        v.push(ke);
        if (n("cr:23149") != null) {
            n("cr:23149").addDevItemsToMenu(v, chat);
        }
        return v;
    }
    function _(e) {
        return !o("WAWebCommonMsgUtils").isNotificationType(e.type, e.subtype);
    }
    function f(e) {
        o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.conversationHeaderMenuOpened(o("WAWebWidToJid").widToBroadcastJid(e.id));
        const t = [];
        t.push(o("WAWebBroadcastConversationMenuItems").getBroadcastAudienceInfoMenuItem(e));
        if (o("WAWebMuteUtils").canMute(e.mute)) {
            t.push(o("WAWebBroadcastConversationMenuItems").getBroadcastMuteMenuItem(e));
        }
        if (!r("gkx")("26258")) {
            t.push(o("WAWebBroadcastConversationMenuItems").getBroadcastCloseChatMenuItem(e));
        }
        t.push(u.jsx(r("WDSMenuItem.react"), {
            type: "separator"
        }));
        t.push(o("WAWebBroadcastConversationMenuItems").getBroadcastDeleteMenuItem(e));
        return t;
    }
    function GComponent({ chat, onCancelSelect, onSelect, selectable = false }) {
        const d = [];
        const Component = r("WDSMenuItem.react");
        const Component_1 = r("WDSMenuItem.react");
        if (!o("WAWebChatGetters").getIsBroadcast(chat)) {
            if (selectable) {
                d.push(<Component key="cancel-selection" Icon={r("WDSIconIcDoNotDisturbOn.react")} title={s._("Cancel selection")} onPress={onCancelSelect} testid="mi-cancel-selection"/>);
            } else {
                d.push(<Component_1 key="select" Icon={r("WDSIconIcCheckBox.react")} title={s._("Select messages")} onPress={onSelect} testid="mi-select-messages"/>);
            }
        }
        const Component_2 = r("WDSMenuItem.react");
        d.push(<Component_2 key="close" Icon={r("WDSIconIcCancel.react")} title={s._("Close chat")} onPress={function() {
            return o("WAWebCmd").Cmd.closeChat(chat);
        }} testid="mi-close-chat"/>);
        if (n("cr:23149") != null) {
            n("cr:23149").addDevItemsToMenu(d, chat);
        }
        return d;
    }
    l.handleDeleteOrExitChat = m;
    l.GroupMenu = p;
    l.broadcastMenu = f;
    l.hybridMenu = GComponent;
}, 226);