__d("WAWebPrepareEventResponsesToUpsert", [
    "WAWebAddonDBTable",
    "WAWebLidMigrationUtils",
    "WAWebMaxPerGroup",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebWidFactory").createWidFromWidLike(r("nullthrows")(o("WAWebMsgGetters").getSender(e)));
        return `${String(e.parentMsgKey)}|${String(o("WAWebLidMigrationUtils").toLid(t))}|${String(o("WAWebLidMigrationUtils").toPn(t))}`;
    }
    function s(t) {
        return o("WAWebMaxPerGroup").maxPerGroup(t, function(e) {
            return e.senderTimestampMs;
        }, e);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = t.map((e)=>[
                    e.parentMsgKey,
                    r("nullthrows")(o("WAWebMsgGetters").getSender(e))
                ]);
            const a = s(t);
            const i = yield o("WAWebAddonDBTable").addonDBTable.bulkGetByParentAndSender(o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE, n);
            const l = new Map;
            i.forEach((t)=>{
                if (t.kind === o("WAWebMsgType").MsgKind.EventResponseDecrypted) {
                    l.set(e(t), t);
                }
            });
            const u = [];
            a.forEach((t)=>{
                const r = l.get(e(t));
                if (!(r != null && r.senderTimestampMs > t.senderTimestampMs)) {
                    const o = r != null && r.eventResponse === t.eventResponse;
                    const a = r?.read ?? false;
                    const i = o && a && t.read !== a ? babelHelpers.extends({}, t, {
                        read: true
                    }) : t;
                    u.push(i);
                }
            });
            return u;
        });
        return c.apply(this, arguments);
    }
    l.getNewestEventResponses = s;
    l.prepareEventResponsesToUpsert = u;
}, 98);