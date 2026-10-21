__d("WAWebMsgQueryUtils", [
    "WAPromiseProps",
    "WATypeUtils",
    "WAWebCollectionConstants",
    "WAWebDBGetGroupMemberUpdateMessages",
    "WAWebDBGroupAgentRichResponseLinkBackfill",
    "WAWebDBMessageFindLocal",
    "WAWebMsgCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = typeof t === "number" && !isNaN(t) ? t : o("WAWebCollectionConstants").PAGE_SIZE;
            const a = {
                add: "search"
            };
            const i = yield o("WAWebDBMessageFindLocal").msgFindStarred({
                count: r,
                chat: e ?? undefined,
                anchor: n
            });
            return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(undefined, i, a, "msgCollectionGetStarred");
        });
        return s.apply(this, arguments);
    }
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = typeof t === "number" && !Number.isNaN(t) ? t : o("WAWebCollectionConstants").PAGE_SIZE;
            const a = {
                add: "search"
            };
            const i = yield o("WAWebDBMessageFindLocal").msgFindEvents({
                count: r,
                chat: e,
                anchor: n
            });
            return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(undefined, i, a, "msgCollectionGetEvents");
        });
        return c.apply(this, arguments);
    }
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = typeof t === "number" && !Number.isNaN(t) ? t : o("WAWebCollectionConstants").PAGE_SIZE;
            const a = {
                add: "search"
            };
            const i = yield o("WAWebDBGetGroupMemberUpdateMessages").getGroupMemberUpdateMessagesForChat(e, r, n);
            return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(undefined, i, a, "msgCollectionGetGroupMemberUpdates");
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = typeof e === "number" && !isNaN(e) ? e : o("WAWebCollectionConstants").PAGE_SIZE;
            const r = yield o("WAWebDBMessageFindLocal").msgFindCallLog({
                count: n,
                anchor: t
            });
            return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(undefined, r, {
                add: "search"
            }, "msgCollectionGetVoipCallLogs");
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ count, direction, msgKey }) {
            const a = count ?? o("WAWebMsgCollection").MEDIA_QUERY_LIMIT;
            const i = direction === "after" ? "after" : "before";
            const l = yield o("WAWebDBMessageFindLocal").getAllDocsMessages({
                chat: msgKey?.remote,
                count: a,
                direction: i,
                msgKey
            });
            return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(undefined, l, {
                add: "search"
            }, "msgCollectionGetAllMedia");
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebDBGroupAgentRichResponseLinkBackfill").backfillGroupAgentRichResponseLinkIndex(e);
            if (t.length === 0) {
                return [];
            }
            return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(undefined, t, {
                add: "search"
            }, "msgCollectionQueryMedia");
        });
        return y.apply(this, arguments);
    }
    function C(e, t, n, r, o) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, mediaType) {
            const i = o("WATypeUtils").isNumber(t) && t !== 0 ? t : o("WAWebCollectionConstants").PAGE_SIZE;
            const l = n || "before";
            const s = {
                add: "search"
            };
            const u = yield o("WAWebDBMessageFindLocal").msgFindMedia({
                count: i,
                mediaType,
                direction: l,
                chat: e,
                anchor: r
            });
            if (Array.isArray(u)) {
                return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(undefined, u, {
                    add: "search"
                }, "msgCollectionQueryMedia");
            }
            return o("WAPromiseProps").promiseProps({
                docCount: u.docCount,
                linkCount: u.linkCount,
                mediaCount: u.mediaCount,
                messages: o("WAWebMsgCollection").MsgCollection.processMultipleMessages(undefined, u.messages, s, "msgCollectionQueryMedia")
            });
        });
        return b.apply(this, arguments);
    }
    l.getStarred = e;
    l.getEventMsgs = u;
    l.getGroupMemberUpdateMsgs = d;
    l.getVoipCallLogMsgs = p;
    l.getAllDocsMsgs = f;
    l.backfillGroupAgentRichResponseLinks = h;
    l.queryMedia = C;
}, 98);