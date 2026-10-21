__d("WAWebPostMdDeviceSyncAckMetric", [
    "WAWebGetMessageChatTypeFromWid",
    "WAWebMdDeviceSyncAckWamEvent",
    "WAWebSendMsgCommonApi",
    "WAWebWamAddressingModeUtils"
], function(t, n, r, o, a, i, l) {
    function e({ chatWid, groupData, msgProtobuf, msgRecord, serverAddressingMode }) {
        const l = new (o("WAWebMdDeviceSyncAckWamEvent")).MdDeviceSyncAckWamEvent({
            revoke: o("WAWebSendMsgCommonApi").isRevokeMsg(msgProtobuf)
        });
        l.chatType = o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(chatWid);
        if (chatWid.isGroup()) {
            l.isLid = msgRecord.data.from.isLid();
        } else {
            l.isLid = chatWid.isLid();
        }
        if (groupData != null) {
            const s = o("WAWebWamAddressingModeUtils").getAddressingModeMetricsFromGroupMetadata(groupData);
            if (s != null) {
                l.localAddressingMode = s;
            }
        }
        if (chatWid.isGroup() && serverAddressingMode != null) {
            l.serverAddressingMode = o("WAWebWamAddressingModeUtils").getWamAddressingModeFromString(serverAddressingMode);
        }
        l.commit();
    }
    l.postMdDeviceSyncAckMetric = e;
}, 98);