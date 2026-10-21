__d("WAWebAiThreadModel", [
    "WAWebAiThreadGetters",
    "WAWebBaseModel",
    "WAWebThreadId",
    "WAWebThreadModel"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.title = o("WAWebBaseModel").prop();
            t.aiThreadType = o("WAWebBaseModel").prop();
            t.unreadCount = o("WAWebBaseModel").prop();
            t.botModeSelection = o("WAWebBaseModel").prop();
            t.botModeOverride = o("WAWebBaseModel").prop();
            t.lastReceivedKey = o("WAWebBaseModel").prop();
            t.lastMsgKey = o("WAWebBaseModel").prop();
            t.unreadEditTimestampMs = o("WAWebBaseModel").prop();
            t.isPending = o("WAWebBaseModel").prop();
            t.pinThreadTimestamp = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebAiThreadGetters").clearAiThreadGetterCacheFor(this);
        };
        return t;
    })(r("WAWebThreadModel"));
    e.Proxy = "aiThread";
    e.idClass = r("WAWebThreadId");
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);