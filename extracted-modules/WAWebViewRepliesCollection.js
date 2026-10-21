__d("WAWebViewRepliesCollection", [
    "WAWebCollection",
    "WAWebThreadId",
    "WAWebThreadMetadataJob",
    "WAWebThreadUtils",
    "WAWebViewRepliesModel",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const n = e.lastMessageTimestamp || 0;
        const r = t.lastMessageTimestamp || 0;
        if (n !== r) {
            if (n > r) {
                return -1;
            }
            return 1;
        }
        return 0;
    }
    const s = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this) || this;
            n.$ViewRepliesCollection$p_2 = null;
            n.$ViewRepliesCollection$p_1 = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initializeViewRepliesThreads = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return this.$ViewRepliesCollection$p_2 ?? (this.$ViewRepliesCollection$p_2 = this.$ViewRepliesCollection$p_3(), this.$ViewRepliesCollection$p_2);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$ViewRepliesCollection$p_3 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    const e = yield o("WAWebThreadMetadataJob").getAllViewRepliesThreadsFromChatId(o("WAWebWidToJid").widToChatJid(this.$ViewRepliesCollection$p_1));
                    if (e != null) {
                        for (const t of e){
                            const n = new (r("WAWebViewRepliesModel"))({
                                id: t.threadId,
                                creationTimestamp: t.creationTimestamp,
                                lastMessageTimestamp: t.lastMessageTimestamp
                            });
                            this.add(n);
                        }
                    }
                } catch (error) {
                    this.$ViewRepliesCollection$p_2 = null;
                    throw error;
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.hasThreadForMsgKey = function(t) {
            const e = r("WAWebThreadId").fromMessage(t, o("WAWebThreadUtils").ThreadType.ViewAllReplies);
            const n = this.get(e);
            if (n != null) {
                return e;
            }
            return null;
        };
        return t;
    })(r("WAWebCollection"));
    s.model = r("WAWebViewRepliesModel");
    s.comparator = e;
    l.ViewRepliesCollection = s;
}, 98);