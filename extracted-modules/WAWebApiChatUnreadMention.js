__d("WAWebApiChatUnreadMention", [
    "WALogger",
    "WAWebModelStorageUtils",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(t, r) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "addUnreadMentionChat"
        ])));
        return o("WAWebModelStorageUtils").getStorage().lock([
            "chat"
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const a = Array.from(t.keys());
                if (a.length !== 0) {
                    const i = yield o("WAWebSchemaChat").getChatTable().bulkGet(a);
                    if (!i || i.length === 0) {
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "addUnreadMentionChat: could not find chats"
                        ])));
                        return;
                    }
                    const l = [];
                    i.forEach((e)=>{
                        if (e) {
                            const o = e.id.toString();
                            let a = e.unreadMentionsOfMe ?? [];
                            const i = t.get(o);
                            if (i) {
                                a = a.concat(i);
                            }
                            let s = {
                                id: o,
                                unreadMentionsOfMe: a
                            };
                            if (r) {
                                const c = r.get(o) ?? 0;
                                s = {
                                    id: o,
                                    unreadMentionsOfMe: a,
                                    unreadMentionCount: c
                                };
                            }
                            l.push(s);
                        }
                    });
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "addUnreadMentionChat: bulkCreateOrMerge"
                    ]))).tags("missing-lid");
                    return o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(l);
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function _(e) {
        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "removeUnreadMentionChat"
        ])));
        return o("WAWebModelStorageUtils").getStorage().lock([
            "chat"
        ], (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const r = Array.from(e.keys());
                if (r.length !== 0) {
                    const a = yield o("WAWebSchemaChat").getChatTable().bulkGet(r);
                    if (!a || a.length === 0) {
                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "removeUnreadMentionChat: could not find chats"
                        ])));
                        return;
                    }
                    const i = [];
                    a.forEach((t)=>{
                        if (t) {
                            let r = t.unreadMentionsOfMe ?? [];
                            const o = e.get(t.id.toString());
                            if (o) {
                                r = r.filter((e)=>!o.includes(e.id));
                            }
                            i.push({
                                id: t.id.toString(),
                                unreadMentionsOfMe: r
                            });
                        }
                    });
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "removeUnreadMentionChat: bulkCreateOrMerge"
                    ]))).tags("missing-lid");
                    return o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(i);
                }
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    l.addUnreadMentionChat = p;
    l.removeUnreadMentionChat = _;
}, 98);