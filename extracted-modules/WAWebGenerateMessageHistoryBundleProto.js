__d("WAWebGenerateMessageHistoryBundleProto", [
    "WAWebE2EProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ json, mediaMetadata }) {
        return {
            messageHistoryBundle: {
                directPath: mediaMetadata?.directPath,
                fileSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata?.filehash),
                fileEncSha256: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata?.encFilehash),
                mediaKey: o("WAWebE2EProtoUtils").encodeBytes(mediaMetadata?.mediaKey),
                mediaKeyTimestamp: mediaMetadata?.mediaKeyTimestamp,
                messageHistoryMetadata: {
                    messageCount: json.groupHistoryBundleMetadata?.messageCount,
                    oldestMessageTimestampInWindow: json.groupHistoryBundleMetadata?.oldestMessageTimestampInWindow,
                    oldestMessageTimestampInBundle: json.groupHistoryBundleMetadata?.oldestMessageTimestampInBundle,
                    historyReceivers: json.groupHistoryBundleMetadata?.historyReceivers.map(function(e) {
                        return e.toJid();
                    })
                },
                mimetype: json.mimetype || mediaMetadata?.mimetype
            }
        };
    }
    l.default = e;
}, 98);