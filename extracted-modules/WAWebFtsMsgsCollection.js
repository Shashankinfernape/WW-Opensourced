__d("WAWebFtsMsgsCollection", [
    "WAWebAppTracker",
    "WAWebChatMessageSearch",
    "WAWebFtsMsgsCollectionBase",
    "WAWebMsgCollection",
    "WAWebThreadMsgUtils",
    "WAWebUiActionWamEvent",
    "WAWebWamEnumUiActionType",
    "WAWebWamPrivateStatsUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(t, n) {
            let r;
            const a = t ? t.msgs : o("WAWebMsgCollection").MsgCollection;
            r = e.call(this, a) || this;
            r.threadId = n;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.searchImpl = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, count, direction, filter, page = 1, searchTerm }) {
                if (chat) {
                    const u = yield o("WAWebChatMessageSearch").fts({
                        chat,
                        count,
                        page,
                        searchTerm
                    });
                    if (this.threadId != null) {
                        const c = this.threadId;
                        u.messages = u.messages.filter((e)=>o("WAWebThreadMsgUtils").isMsgInThread(e, c));
                    }
                    return u;
                }
                return o("WAWebMsgCollection").MsgCollection.search(searchTerm, page, count, undefined, filter);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.onSeachPromiseComplete = function(uiActionPreloaded) {
            const e = new (o("WAWebUiActionWamEvent")).UiActionWamEvent({
                uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.FIRST_FTS_RESULT,
                uiActionPreloaded
            });
            e.markUiActionT();
            o("WAWebAppTracker").attachWAMAppContext(e, e.uiActionT);
            e.commit();
            o("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents();
        };
        return t;
    })(r("WAWebFtsMsgsCollectionBase"));
    l.default = e;
}, 98);