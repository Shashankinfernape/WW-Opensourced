__d("WAWebChatContextMenu", [
    "fbt",
    "WAWebChatAssignmentUtils",
    "WAWebChatCellDebugMenuItems.react",
    "WAWebChatContextMenuItemAddContact.react",
    "WAWebChatContextMenuItemArchive.react",
    "WAWebChatContextMenuItemBlock.react",
    "WAWebChatContextMenuItemDelete.react",
    "WAWebChatContextMenuItemEditLabel.react",
    "WAWebChatContextMenuItemEditList.react",
    "WAWebChatContextMenuItemLock.react",
    "WAWebChatContextMenuItemMarkUnread.react",
    "WAWebChatContextMenuItemMute.react",
    "WAWebChatContextMenuItemPin.react",
    "WAWebCmd",
    "WAWebDropdownItemSeparator.react",
    "WAWebInboxFiltersGatingUtils",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebMetaAiChatActionLogger",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "WDSIconIcCancel.react",
    "WDSIconIcDoNotDisturbOn.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcUnfavourite.react",
    "WDSIconWdsIcTransferOwnership.react",
    "WDSMenuItem.react",
    "cr:23046",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
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
    function d({ assignChat, cellRef, chat, chatListIndex, multiSelection, onStartMultiSelect, searchQuery, selectableState }) {
        const metaAiChatListRow = o("WAWebMetaAiChatActionLogger").getMetaAiChatListRow(searchQuery, chatListIndex);
        const g = [
            u.jsx(r("WAWebChatContextMenuItemAddContact.react"), {
                chat
            }, "AddContact"),
            u.jsx(r("WAWebChatContextMenuItemArchive.react"), {
                chat,
                metaAiChatListRow
            }, "Archive"),
            u.jsx(r("WAWebChatContextMenuItemLock.react"), {
                chat
            }, "Lock"),
            u.jsx(r("WAWebChatContextMenuItemMute.react"), {
                chat
            }, "Mute"),
            u.jsx(r("WAWebChatContextMenuItemPin.react"), {
                chat,
                cellRef,
                metaAiChatListRow
            }, "Pin")
        ];
        if (o("WAWebChatAssignmentUtils").canAssignChats()) {
            const Component = r("WDSMenuItem.react");
            g.push(<Component Icon={r("WDSIconWdsIcTransferOwnership.react")} title={s._("Assign chat")} onPress={assignChat} testid="mi-assign-chat"/>);
        }
        g.push(u.jsx(r("WAWebChatContextMenuItemMarkUnread.react"), {
            chat
        }));
        if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
            let h;
            let y;
            if (chat.isFavorite) {
                y = o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._("Remove from favourites") : s._("Remove from Favourites");
                h = c;
            } else {
                y = o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._("Add to favourites") : s._("Add to favourites");
                h = r("WDSIconIcFavorite.react");
            }
            const Component = r("WDSMenuItem.react");
            g.push(<Component key="favorite" Icon={h} title={y} onPress={function() {
                return o("WAWebCmd").Cmd.favoriteChat(chat, !chat.isFavorite, o("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT.CHAT_HEADER_CONTEXT_MENU);
            }} testid="mi-favorite"/>);
        }
        if (chat.active && (n("cr:23046") == null ? undefined : n("cr:23046").isWindowsHybridEnabled()) === true) {
            const Component = r("WDSMenuItem.react");
            g.push(<Component key="close-chat" title={s._("Close chat")} onPress={function() {
                return o("WAWebCmd").Cmd.closeChat(chat);
            }} testid="mi-close-chat" Icon={r("WDSIconIcCancel.react")}/>);
        }
        const C = function() {
            o("WAWebChatContextMenuItemEditLabel.react").handleLabelMenuItemClick({
                chat,
                multiSelection,
                onStartMultiSelect,
                searchQuery,
                selectableState
            });
        };
        const Component = r("WAWebChatContextMenuItemEditList.react");
        g.push(<Component chat={chat} displayContext="chat-list" onSMBLabelMenuItemClick={C}/>);
        g.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {}));
        if (!chat.id.isBot()) {
            g.push(u.jsx(r("WAWebChatContextMenuItemBlock.react"), {
                chat
            }));
        }
        const b = s._("Clear chat");
        const Component_1 = r("WDSMenuItem.react");
        g.push(<Component_1 key="clear" Icon={r("WDSIconIcDoNotDisturbOn.react")} title={b} onPress={function() {
            return o("WAWebCmd").Cmd.clearChat(chat, undefined, metaAiChatListRow);
        }} testid="mi-clear" destructive/>);
        g.push(u.jsx(r("WAWebChatContextMenuItemDelete.react"), {
            chat,
            metaAiChatListRow
        }, "Delete"));
        g.push(...o("WAWebChatCellDebugMenuItems.react").getWAWebChatCellDebugMenuItems(chat));
        return g;
    }
    l.getChatContextMenuItems = d;
}, 226);