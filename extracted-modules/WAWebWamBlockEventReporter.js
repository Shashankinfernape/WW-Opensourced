__d("WAWebWamBlockEventReporter", [
    "WAWebBlockEventsFsWamEvent",
    "WAWebChatCollection",
    "WAWebFrontendContactGetters",
    "WAWebWamEnumBlockEventActionType"
], function(t, n, r, o, a, i, l) {
    function e({ blockEntryPoint, contact, isBlock }) {
        const i = o("WAWebFrontendContactGetters").getIsMyContact(contact) || o("WAWebChatCollection").ChatCollection.get(contact.id)?.isTrusted();
        new (o("WAWebBlockEventsFsWamEvent")).BlockEventsFsWamEvent({
            blockEntryPoint,
            blockEventIsSuspicious: !i,
            blockEventIsUnsub: !o("WAWebFrontendContactGetters").getIsMyContact(contact),
            blockEventActionType: isBlock ? o("WAWebWamEnumBlockEventActionType").BLOCK_EVENT_ACTION_TYPE.BLOCK : o("WAWebWamEnumBlockEventActionType").BLOCK_EVENT_ACTION_TYPE.UNBLOCK
        }).commit();
    }
    l.logBlockEvent = e;
}, 98);