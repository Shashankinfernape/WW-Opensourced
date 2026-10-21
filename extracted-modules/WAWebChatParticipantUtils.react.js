__d("WAWebChatParticipantUtils.react", [
    "WAWebChatContact.react",
    "WAWebFlatList.react",
    "WAWebMemberLabelsFrontendUtils",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = 91;
    function c({ chat, contact, groupMetadata, hideStatus = false, secondaryProp = null, showMemberLabel }) {
        const c = o("WAWebMemberLabelsFrontendUtils").memberLabelExists({
            from: "chat_and_member",
            chat,
            member: contact.id
        }) || o("WAWebMemberLabelsFrontendUtils").shouldShowAddMemberTagCTA(chat, contact.id);
        return showMemberLabel && chat != null && c && o("WAWebChatContact.react").willShowSecondaryContent({
            contact,
            secondaryProp,
            groupMetadata,
            hideStatus
        });
    }
    function d(e) {
        if (c(e)) {
            return u;
        }
        return o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT;
    }
    l.shouldUseTallerItemHeight = c;
    l.getParticipantItemHeight = d;
}, 98);