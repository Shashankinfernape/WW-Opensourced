__d("WAWebAiThreadCollection", [
    "WAWebAiThreadComparator",
    "WAWebAiThreadModel",
    "WAWebChatCollection",
    "WAWebCollection",
    "WAWebMsgKey",
    "WAWebThreadMetadataJob",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.isInitialized = false;
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initializeAiThreads = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (!this.isInitialized) {
                    const t = yield o("WAWebThreadMetadataJob").getAllAiThreadsFromChatId(o("WAWebWidToJid").widToChatJid(e));
                    if (t != null) {
                        for (const n of t){
                            const i = new (r("WAWebAiThreadModel"))({
                                id: n.threadId,
                                title: n.aiThreadInfo.title,
                                aiThreadType: n.aiThreadInfo.aiThreadType,
                                creationTimestamp: n.creationTimestamp,
                                lastMessageTimestamp: n.lastMessageTimestamp,
                                unreadCount: n.unreadCount ?? 0,
                                botModeSelection: n.botModeSelection,
                                botModeOverride: n.botModeOverride,
                                lastReceivedKey: n.lastReceivedKey != null ? r("WAWebMsgKey").fromString(n.lastReceivedKey) : null,
                                unreadEditTimestampMs: n.unreadEditTimestampMs,
                                pinThreadTimestamp: n.pinThreadTimestamp
                            });
                            this.add(i);
                        }
                    }
                    const l = o("WAWebChatCollection").ChatCollection.get(e);
                    if (l) {
                        this.forEach((e)=>{
                            e.seedFromChat(l);
                        });
                    }
                    this.isInitialized = true;
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getFirstActivated = function() {
            return this.findFirst(function(e) {
                return e.isPending !== true;
            });
        };
        t_prototype.removeThreads = function(t) {
            for (const e of t){
                const n = this.get(e);
                if (n) {
                    this.remove(n);
                    n.delete();
                }
            }
        };
        t_prototype.clear = function() {
            const e = this.map((e)=>e.id);
            this.removeThreads(e);
        };
        return t;
    })(r("WAWebCollection"));
    e.model = r("WAWebAiThreadModel");
    e.comparator = r("WAWebAiThreadComparator");
    l.AiThreadCollection = e;
}, 98);