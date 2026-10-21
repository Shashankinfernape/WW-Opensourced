__d("WAWebGenerateMessageHistoryNoticeProto", [
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ json }) {
        const json_groupHistoryBundleMetadata = json.groupHistoryBundleMetadata;
        if (json_groupHistoryBundleMetadata == null) {
            throw r("err")("[group-history] groupHistoryBundleMetadata is null while sending notice");
        }
        return {
            messageHistoryNotice: {
                messageHistoryMetadata: {
                    messageCount: json.groupHistoryBundleMetadata?.messageCount,
                    oldestMessageTimestampInWindow: json.groupHistoryBundleMetadata?.oldestMessageTimestampInWindow,
                    historyReceivers: json.groupHistoryBundleMetadata?.historyReceivers.map(function(e) {
                        return e.toJid();
                    })
                }
            }
        };
    }
    l.default = e;
}, 98);