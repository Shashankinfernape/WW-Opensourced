__d("WAWebDBDeleteReactions", [
    "WAWebModelStorageUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = [];
        return o("WAWebModelStorageUtils").getStorage().lock([
            "reactions"
        ], (()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*([r]) {
                const o = yield r.equals([
                    "parentMsgKey"
                ], e);
                o.forEach((e)=>t.push([
                        e.parentMsgKey,
                        e.senderUserJid
                    ]));
                return r.bulkRemove(t);
            });
            return function(e) {
                return r.apply(this, arguments);
            };
        })());
    }
    function s(e) {
        const t = [];
        return o("WAWebModelStorageUtils").getStorage().lock([
            "reactions"
        ], (()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*([r]) {
                const o = yield r.anyOf([
                    "parentMsgKey"
                ], e);
                o.forEach((e)=>t.push([
                        e.parentMsgKey,
                        e.senderUserJid
                    ]));
                yield r.bulkRemove(t);
                return o.map((e)=>e.msgKey);
            });
            return function(e) {
                return r.apply(this, arguments);
            };
        })());
    }
    function u(e) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "reactions"
        ], (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                yield n.bulkRemove(e);
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    l.deleteReactionsByParentMessageKey = e;
    l.deleteReactionsByParentMessageKeys = s;
    l.deleteReactionsByRecords = u;
}, 98);