__d("WAWebChatContextMenuItemArchive.react", [
    "WAWebArchiveMenuItem.react",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebMetaAiChatActionLogger",
    "WAWebStateUtils",
    "WAWebWamEnumChatActionType",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        const t = o("react-compiler-runtime").c(11);
        const { chat, metaAiChatListRow } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebChatGetters").getIsPSA
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebChatValues").useChatValues(chat.id, i);
        const u = l[0];
        let c;
        if (t[1] !== chat) {
            c = function(archive) {
                if (archive) {
                    o("WAWebCmd").Cmd.archiveChatFromEntryPoint({
                        archive,
                        chat: o("WAWebStateUtils").unproxy(chat),
                        entryPoint: 6
                    });
                } else {
                    o("WAWebCmd").Cmd.archiveChatFromEntryPoint({
                        archive,
                        chat: o("WAWebStateUtils").unproxy(chat),
                        entryPoint: 8
                    });
                }
            };
            t[1] = chat;
            t[2] = c;
        } else {
            c = t[2];
        }
        const d = c;
        let m;
        if (t[3] !== chat || t[4] !== metaAiChatListRow) {
            m = function(t) {
                o("WAWebMetaAiChatActionLogger").startMetaAiChatListAction(chat.id, t ? o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.ARCHIVE : o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.UNARCHIVE, metaAiChatListRow)?.commit();
                o("WAWebCmd").Cmd.archiveChat(o("WAWebStateUtils").unproxy(chat), t);
            };
            t[3] = chat;
            t[4] = metaAiChatListRow;
            t[5] = m;
        } else {
            m = t[5];
        }
        const onArchive = u ? d : m;
        let f;
        if (t[6] !== chat) {
            f = o("WAWebStateUtils").unproxy(chat);
            t[6] = chat;
            t[7] = f;
        } else {
            f = t[7];
        }
        let g;
        if (t[8] !== onArchive || t[9] !== f) {
            const Component = r("WAWebArchiveMenuItem.react");
            g = <Component key="archive" onArchive={onArchive} chat={f}/>;
            t[8] = onArchive;
            t[9] = f;
            t[10] = g;
        } else {
            g = t[10];
        }
        return g;
    }
    l.default = UComponent;
}, 98);