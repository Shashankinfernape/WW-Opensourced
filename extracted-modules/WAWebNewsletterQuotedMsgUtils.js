__d("WAWebNewsletterQuotedMsgUtils", [
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebMsgCollection").MsgCollection.get(e);
            if (t != null) {
                return true;
            }
            const n = yield o("WAWebSchemaMessage").getMessageTable().get(e.toString(), false);
            return n != null;
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!o("WAWebMsgGetters").getIsNewsletterMsg(t.unsafe())) {
                return {
                    quotedMsgKey: t.id,
                    msgInStore: o("WAWebMsgCollection").MsgCollection.get(t.id)
                };
            }
            const n = t.id;
            const { id, remote } = n;
            const l = new (r("WAWebMsgKey"))({
                id,
                remote,
                fromMe: true
            });
            const s = yield e(l);
            if (s) {
                return {
                    quotedMsgKey: l,
                    msgInStore: o("WAWebMsgCollection").MsgCollection.get(l)
                };
            }
            const u = new (r("WAWebMsgKey"))({
                id,
                remote,
                fromMe: false
            });
            return {
                quotedMsgKey: u,
                msgInStore: o("WAWebMsgCollection").MsgCollection.get(u)
            };
        });
        return c.apply(this, arguments);
    }
    l.getMsgDetailsForSearch = u;
}, 98);