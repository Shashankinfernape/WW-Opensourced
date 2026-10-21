__d("WAWebBroadcastChatListMenuItems", [
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebChatCellDebugMenuItems.react",
    "WAWebChatContextMenuItemArchive.react",
    "WAWebChatContextMenuItemDelete.react",
    "WAWebChatContextMenuItemEditLabel.react",
    "WAWebChatContextMenuItemEditList.react",
    "WAWebChatContextMenuItemMarkUnread.react",
    "WAWebChatContextMenuItemMute.react",
    "WAWebChatContextMenuItemPin.react",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDropdownItemSeparator.react",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WAWebWidToJid",
    "WDSIconIcInfo.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function C1(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_audienceId = e.audienceId;
        let r;
        let a;
        if (t[0] !== e_audienceId) {
            r = function() {
                o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.chatListContextMenuOpened(e_audienceId);
            };
            a = [
                e_audienceId
            ];
            t[0] = e_audienceId;
            t[1] = r;
            t[2] = a;
        } else {
            r = t[1];
            a = t[2];
        }
        e_useEffect(r, a);
        return null;
    }
    function d({ cellRef, chat, multiSelection, onStartMultiSelect, searchQuery, selectableState }) {
        const audienceId = o("WAWebWidToJid").widToBroadcastJid(chat.id);
        const m = function() {
            o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.audienceInfoButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST, audienceId);
            o("WAWebCmd").Cmd.openChatBottom({
                chat,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist
            }).then(()=>{
                o("WAWebCmd").Cmd.chatInfoDrawer(chat);
            });
        };
        const Component = r("WDSMenuItem.react");
        const p = [
            <C1 key="logger" audienceId={audienceId}/>,
            <Component key="info" testid="mi-broadcast-info" onPress={m} Icon={r("WDSIconIcInfo.react")} title={o("WAWebBizBroadcastsCreationStrings").getBroadcastAudienceInfoLabel()}/>,
            s.jsx(r("WAWebChatContextMenuItemArchive.react"), {
                chat
            }, "Archive"),
            s.jsx(r("WAWebChatContextMenuItemMute.react"), {
                chat
            }, "Mute"),
            s.jsx(r("WAWebChatContextMenuItemPin.react"), {
                chat,
                cellRef
            }, "Pin")
        ];
        const _ = ()=>{
            o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.labelChatClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST, audienceId);
        };
        const f = function() {
            _();
            o("WAWebChatContextMenuItemEditLabel.react").handleLabelMenuItemClick({
                chat,
                multiSelection,
                onStartMultiSelect,
                searchQuery,
                selectableState
            });
        };
        const Component_1 = r("WAWebChatContextMenuItemEditList.react");
        p.push(<Component_1 chat={chat} displayContext="chat-list" onSMBLabelMenuItemClick={f}/>);
        p.push(s.jsx(r("WAWebChatContextMenuItemMarkUnread.react"), {
            chat
        }, "MarkUnread"));
        p.push(s.jsx(r("WAWebDropdownItemSeparator.react"), {}));
        p.push(s.jsx(r("WAWebChatContextMenuItemDelete.react"), {
            chat
        }, "Delete"));
        p.push(...o("WAWebChatCellDebugMenuItems.react").getWAWebChatCellDebugMenuItems(chat));
        return p;
    }
    l.getBroadcastChatListMenuItems = d;
}, 98);