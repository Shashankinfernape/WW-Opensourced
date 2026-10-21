__d("WAWebApiOrphanRevoke", [
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebProcessBaseMsgInfo",
    "WAWebSchemaOrphanRevoke",
    "WAWebViewMode.flow",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e = new Map;
    let s = false;
    const u = {
        reset: function() {
            e = new Map;
            s = false;
        },
        bulkRemoveOrphans: function(n) {
            n.forEach((t)=>{
                e.delete(t.msgKey);
            });
            return o("WAWebSchemaOrphanRevoke").getOrphanRevokeTable().bulkRemove(n.map((e)=>e.msgKey));
        },
        bulkCreateOrReplaceOrphanRevokes: function(n) {
            n.forEach((t)=>{
                if (e.has(t.msgKey)) {
                    e.delete(t.msgKey);
                }
                e.set(t.msgKey, t);
            });
            return o("WAWebSchemaOrphanRevoke").getOrphanRevokeTable().bulkCreateOrReplace(n);
        },
        getAllOrphanRevokes: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!s) {
                    const t = yield o("WAWebSchemaOrphanRevoke").getOrphanRevokeTable().all();
                    e = new Map(t.map((e)=>[
                            e.msgKey,
                            e
                        ]));
                    s = true;
                }
                return e;
            });
            function r() {
                return t.apply(this, arguments);
            }
            return r;
        })()
    };
    function c(e) {
        return u.bulkCreateOrReplaceOrphanRevokes(e);
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return u.getAllOrphanRevokes();
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return u.bulkRemoveOrphans(e);
    }
    function _(e, t) {
        return {
            id: e.id,
            to: e.to,
            author: e.author,
            revokeSender: o("WAWebWidFactory").createWidFromWidLike(t.sender ?? o("WAWebMsgGetters").getSender(e)),
            type: o("WAWebMsgType").MSG_TYPE.REVOKED,
            kind: o("WAWebMsgType").MsgKind.RevokedMessage,
            viewMode: r("WAWebWid").isNewsletter(e.id.remote) ? o("WAWebViewMode.flow").ViewModeType.NEWSLETTER_TOMBSTONE : o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            subtype: t.subtype === "admin_revoke" ? "admin" : "sender",
            protocolMessageKey: e.id,
            from: e.from,
            t: e.t,
            broadcast: e.broadcast
        };
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield u.getAllOrphanRevokes();
            const n = [];
            const a = [];
            e.forEach((e)=>{
                const i = e.id.toString();
                if (t.has(i)) {
                    const l = r("nullthrows")(t.get(i));
                    a.push(babelHelpers.extends({}, o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(e), {
                        id: r("WAWebMsgKey").fromString(l.msgKey),
                        type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                        kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
                        subtype: l.subtype === "admin_revoke" ? "admin_revoke" : "sender_revoke",
                        protocolMessageKey: e.id,
                        t: l.timestamp
                    }));
                    n.push(l);
                }
            });
            yield u.bulkRemoveOrphans(n);
            return a;
        });
        return g.apply(this, arguments);
    }
    l.addOrphanRevokes = c;
    l.getOrphansRevokesCache = d;
    l.bulkRemoveOrphansUsingOrphansCache = p;
    l.createRevokeMsgFromOrphanRevoke = _;
    l.applyAddonRevokes = f;
}, 98);