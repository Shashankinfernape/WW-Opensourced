__d("WAWebDBPendingReadReceiptQueries", [
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ MessageTable, chatId, pendingReadReceiptType, threadId }) {
            const i = yield MessageTable.equals([
                "from",
                "pendingReadReceipt"
            ], [
                chatId,
                pendingReadReceiptType
            ], {
                shouldDecrypt: false
            });
            return i.filter((e)=>{
                if (pendingReadReceiptType === o("WAWebDBMsgUtils").PendingReadReceiptType.Message && e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN) {
                    return false;
                }
                if (threadId == null) {
                    return true;
                }
                return o("WAWebDBMessageUtils").messageHasThreadId(e, threadId);
            });
        });
        return s.apply(this, arguments);
    }
    function u(t, n, r) {
        return e({
            MessageTable: t,
            chatId: n,
            pendingReadReceiptType: o("WAWebDBMsgUtils").PendingReadReceiptType.Message,
            threadId: r
        });
    }
    function c(e, t) {
        return u(o("WAWebSchemaMessage").getMessageTable(), e, t);
    }
    function d(t, n, r) {
        return e({
            MessageTable: t,
            chatId: n,
            pendingReadReceiptType: o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit,
            threadId: r
        });
    }
    function m(e, t) {
        return d(o("WAWebSchemaMessage").getMessageTable(), e, t);
    }
    function p(e, t, n) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const n_size = n.size;
            if (n_size === 0) {
                return null;
            }
            const l = yield e.get(t);
            if (l == null) {
                return null;
            }
            const l_unreadCount = l.unreadCount;
            const u = Math.max(l_unreadCount - n_size, 0);
            const c = l.unreadDividerOffset ?? 0;
            const unreadDividerOffset = c + n_size;
            const m = l.unreadMentionsOfMe ?? [];
            const p = m.filter((e)=>!n.has(e.id));
            const _ = m.length - p.length;
            const f = l.unreadMentionCount ?? 0;
            const g = Math.max(f - _, 0);
            yield e.merge(t, {
                id: t,
                unreadCount: u,
                unreadDividerOffset,
                unreadMentionsOfMe: p,
                unreadMentionCount: g
            });
            return {
                unreadCount: u,
                unreadDividerOffset,
                unreadMentionCount: g,
                markedAsReadCount: n_size
            };
        });
        return _.apply(this, arguments);
    }
    l.queryPendingReadReceiptMsgRowsWithTable = u;
    l.queryPendingReadReceiptMsgRows = c;
    l.queryUnreadEditedMsgRowsWithTable = d;
    l.queryUnreadEditedMsgRows = m;
    l.updateChatUnreadCountForReadMessages = p;
}, 98);