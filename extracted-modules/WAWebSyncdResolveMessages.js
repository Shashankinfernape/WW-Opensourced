__d("WAWebSyncdResolveMessages", [
    "Promise",
    "WAWebSchemaMessage",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        const n = [];
        for(let r = 0; r < e.length; r += t){
            n.push(e.slice(r, r + t));
        }
        return n;
    }
    const u = 50;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = s(t, u);
            const a = yield (e || (e = n("Promise"))).all(r.map((e)=>o("WAWebSchemaMessage").getMessageTable().startsWithAnyOf([
                    "id"
                ], e)));
            const i = new Set;
            for (const l of a){
                for (const c of l){
                    if (c && !i.has(c.id)) {
                        i.add(c.id);
                    }
                }
            }
            return Array.from(i);
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const incomingRemoteToLocalChatId = new Map;
            const msgKeys = (yield (e || (e = n("Promise"))).all(t.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ indexParts }) {
                    const n = indexParts[1];
                    const i = indexParts[2];
                    const l = indexParts[3];
                    const s = indexParts[4];
                    if (!n || !i || !l || !s || !r("WAWebWid").isWid(n)) {
                        return null;
                    }
                    const u = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(o("WAWebWidFactory").createWid(n));
                    if (u.success) {
                        const c = u.chat.id;
                        incomingRemoteToLocalChatId.set(n, c);
                        const d = o("WAWebSyncdIndexUtils").syncKeyToMsgKey(c, i, l, s);
                        if (d != null) {
                            return o("WAWebSyncdIndexUtils").msgKeyToDbIdWithoutFromMeParticipant(d);
                        }
                        return null;
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()))).filter(Boolean);
            return {
                incomingRemoteToLocalChatId,
                msgKeys
            };
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield m(e);
            const { incomingRemoteToLocalChatId, msgKeys } = t;
            const messagesInDB = yield c(msgKeys);
            return {
                messagesInDB,
                incomingRemoteToLocalChatId
            };
        });
        return f.apply(this, arguments);
    }
    l.resolveMessagesForMutations = _;
}, 98);