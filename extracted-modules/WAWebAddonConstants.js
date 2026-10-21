__d("WAWebAddonConstants", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    const e = n("$InternalEnum").Mirrored([
        "Unified",
        "Pin",
        "Comment",
        "PollVote",
        "Reaction",
        "EventResponse",
        "None"
    ]);
    const l = n("$InternalEnum").Mirrored([
        "OnlineReceive",
        "HistorySync",
        "Send",
        "SendRevoke",
        "SendRetry",
        "Revoke",
        "DeleteForMe",
        "DeleteWithParent",
        "Hydration",
        "MarkAsRead",
        "SetAck",
        "ProcessGroupHistoryBundle"
    ]);
    const s = Object.freeze({
        Regular: "Regular",
        WithRevokes: "WithRevokes",
        DualEncrypted: "DualEncrypted",
        DualEncryptedWithMessageTraits: "DualEncryptedWithMessageTraits"
    });
    const u = Object.freeze({
        PinInChat: 1
    });
    i.AddonTableMode = e;
    i.AddonProcessMode = l;
    i.AddonProcessorType = s;
    i.AddonMinimizedType = u;
}, 66);