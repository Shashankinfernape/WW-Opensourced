__d("WAWebChatContextMenuItemDelete.react", [
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebDeleteMenuItem.react",
    "WAWebLeaveCommunityModalUtilsLoadable",
    "WAWebOpenLeaveAndReportGroupModalLoadable",
    "WAWebSpamConstants",
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        const t = o("react-compiler-runtime").c(8);
        const { chat, metaAiChatListRow } = e;
        let i;
        if (t[0] !== chat || t[1] !== metaAiChatListRow) {
            i = function() {
                if (o("WAWebChatGroupUtils").shouldShowLeaveAndReportGroupModalForChat(chat)) {
                    o("WAWebOpenLeaveAndReportGroupModalLoadable").openLeaveAndReportGroupModal(chat, o("WAWebSpamConstants").SpamFlow.GroupChatlistLeaveReportUpsell);
                } else {
                    const t = chat.groupMetadata?.getParentGroupChat();
                    if (t != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(chat)) {
                        o("WAWebLeaveCommunityModalUtilsLoadable").openLeaveCommunityModal({
                            chat: t
                        });
                    } else {
                        o("WAWebCmd").Cmd.deleteOrExitChatFromEntryPoint(o("WAWebStateUtils").unproxy(chat), 11, undefined, metaAiChatListRow);
                    }
                }
            };
            t[0] = chat;
            t[1] = metaAiChatListRow;
            t[2] = i;
        } else {
            i = t[2];
        }
        const onDeleteOrExit = i;
        let u;
        if (t[3] !== chat) {
            u = o("WAWebStateUtils").unproxy(chat);
            t[3] = chat;
            t[4] = u;
        } else {
            u = t[4];
        }
        let c;
        if (t[5] !== onDeleteOrExit || t[6] !== u) {
            const Component = r("WAWebDeleteMenuItem.react");
            c = <Component key="delete" onDeleteOrExit={onDeleteOrExit} chat={u}/>;
            t[5] = onDeleteOrExit;
            t[6] = u;
            t[7] = c;
        } else {
            c = t[7];
        }
        return c;
    }
    l.default = UComponent;
}, 98);