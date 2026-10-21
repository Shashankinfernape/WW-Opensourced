__d("WAWebAssociatedMessagesRevokeUtils", [
    "WAWebDBAssociatedMsgsAttachDetachAPI",
    "WAWebMsgCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield u([
                e
            ]);
            return n.map(t);
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebDBAssociatedMsgsAttachDetachAPI").getAssociatedMsgsByParentMsgKeyFromAssociationTable(e.map((e)=>e.id));
            const n = yield o("WAWebMsgCollection").MsgCollection.hydrateOrGetMessages(t.map((e)=>e.msgKey));
            return n;
        });
        return c.apply(this, arguments);
    }
    l.getAssociatedChildMessageRevokePromises = e;
    l.getHydratedAssociatedChildMessageModelsFromParentMsgs = u;
}, 98);