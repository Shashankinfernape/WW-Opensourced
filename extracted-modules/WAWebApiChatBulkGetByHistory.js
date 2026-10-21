__d("WAWebApiChatBulkGetByHistory", [
    "Promise",
    "WAWebHistorySyncLidChatGating",
    "WAWebSchemaChat",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const a = new Array(t.length).fill(null);
            if (!o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()) {
                const i = t.map((e)=>{
                    if (r("WAWebWid").isWid(e)) {
                        return o("WAWebWidFactory").createWid(e).toString();
                    }
                    return e;
                });
                return o("WAWebSchemaChat").getChatTable().bulkGet(i, false);
            }
            const l = [];
            const s = [];
            const u = new Map;
            for(let c = 0; c < t.length; c++){
                if (r("WAWebWid").isWid(t[c])) {
                    const d = o("WAWebWidFactory").createWid(t[c]);
                    if (d.isRegularUserPn()) {
                        l.push(c);
                        u.set(c, d.toString());
                    } else {
                        s.push(c);
                    }
                }
            }
            const m = yield (e || (e = n("Promise"))).all([
                l.length > 0 ? o("WAWebSchemaChat").getChatTable().anyOf([
                    "historyChatId"
                ], l.map((e)=>u.get(e) ?? t[e]), {
                    shouldDecrypt: false
                }) : (e || (e = n("Promise"))).resolve([]),
                s.length > 0 ? o("WAWebSchemaChat").getChatTable().bulkGet(s.map((e)=>t[e]), false) : (e || (e = n("Promise"))).resolve([])
            ]);
            const p = m[0];
            const _ = m[1];
            const f = new Map;
            for (const g of p){
                if (g.historyChatId != null) {
                    f.set(g.historyChatId, g);
                }
            }
            for (const h of l){
                a[h] = f.get(u.get(h) ?? t[h]) ?? null;
            }
            for(let b = 0; b < s.length; b++){
                a[s[b]] = _[b];
            }
            return a;
        });
        return u.apply(this, arguments);
    }
    l.bulkGetChatsMaybeByHistory = s;
}, 98);