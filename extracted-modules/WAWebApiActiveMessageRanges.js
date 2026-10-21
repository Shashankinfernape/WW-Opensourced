__d("WAWebApiActiveMessageRanges", [
    "Promise",
    "WALogger",
    "WAWebSchemaActiveMessageRanges",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u = new Map;
    const c = {
        reset: function() {
            u = new Map;
        },
        removeRange: function(t, n) {
            u.get(t)?.delete(n);
            return o("WAWebSchemaActiveMessageRanges").getActiveMessageRangesTable().remove([
                t,
                n
            ]);
        },
        createOrReplaceRange: function(t) {
            let e = u.get(t.chatId);
            if (e == null) {
                e = new Map;
                u.set(t.chatId, e);
            }
            e.set(t.action, t);
            return o("WAWebSchemaActiveMessageRanges").getActiveMessageRangesTable().createOrReplace(t);
        },
        bulkCreateOrReplaceRanges: function(t, r = true) {
            t.forEach((e)=>{
                let t = u.get(e.chatId);
                if (t == null) {
                    t = new Map;
                    u.set(e.chatId, t);
                }
                t.set(e.action, e);
            });
            if (r) {
                return o("WAWebSchemaActiveMessageRanges").getActiveMessageRangesTable().bulkCreateOrReplace(t);
            }
            return (s || (s = n("Promise"))).resolve();
        },
        getRangesForChat: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                let n = u.get(t);
                try {
                    if (n == null) {
                        const r = yield o("WAWebSchemaActiveMessageRanges").getActiveMessageRangesTable().anyOf([
                            "chatId"
                        ], [
                            t
                        ]);
                        n = new Map(r.map((e)=>[
                                e.action,
                                e
                            ]));
                        u.set(t, n);
                    }
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "getRangesForChat failed with error: ",
                        ""
                    ])), t);
                }
                if (n) {
                    return Array.from(n.values());
                }
                return [];
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })()
    };
    function d(e) {
        return c.createOrReplaceRange(e);
    }
    function m(e, t) {
        return c.removeRange(e, t);
    }
    function p(e, t = true) {
        return c.bulkCreateOrReplaceRanges(e, t);
    }
    function _(e) {
        return c.getRangesForChat(e);
    }
    function f(e, t) {
        const n = !!(t != null && t.deleteStarred);
        const a = !!(t != null && t.deleteMedia);
        switch(e){
            case "archive":
                return o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.Archive;
            case "markChatAsRead":
                return o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.MarkChatAsRead;
            case "clearChat":
                if (n && a) {
                    return o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatDeleteStarredDeleteMedia;
                }
                if (n && !a) {
                    return o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatDeleteStarredKeepMedia;
                }
                if (a && !n) {
                    return o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatKeepStarredDeleteMedia;
                }
                return o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatKeepStarredKeepMedia;
            case "deleteChat":
                if (a) {
                    return o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.DeleteChatDeleteMedia;
                }
                return o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.DeleteChatKeepMedia;
            default:
                throw r("err")("unsupported active message range action");
        }
    }
    l._cache = c;
    l.createOrReplaceActiveMessageRange = d;
    l.removeActiveMessageRange = m;
    l.bulkUpdateActiveMessageRanges = p;
    l.getActiveMessageRanges = _;
    l.getActiveRangeAction = f;
}, 98);