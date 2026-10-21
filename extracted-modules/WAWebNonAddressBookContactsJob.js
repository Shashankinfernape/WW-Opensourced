__d("WAWebNonAddressBookContactsJob", [
    "WALogger",
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebLidAwareContactsDB",
    "WAWebModelStorageUtils",
    "WAWebSchemaChat",
    "WAWebSchemaParticipant",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(t = 500) {
        const n = [];
        const r = [];
        const a = new Set;
        let i = new Set;
        for (const l of o("WAWebChatCollection").ChatCollection.toArray()){
            if (i.size === t) {
                n.push(i);
                i = new Set;
            }
            if (o("WAWebChatGetters").getIsEligibleForContactSync(l)) {
                if (o("WAWebChatGetters").getIsGroup(l)) {
                    r.push(l.id);
                } else if (!a.has(l.id)) {
                    i.add(l.id);
                    a.add(l.id);
                }
            }
        }
        for (const s of r){
            const d = o("WAWebChatCollection").ChatCollection.get(s) || {};
            const m = d.groupMetadata?.participants.toArray() ?? [];
            for (const p of m){
                if (i.size === t) {
                    n.push(i);
                    i = new Set;
                }
                if (!a.has(p.id)) {
                    i.add(p.id);
                    a.add(p.id);
                }
            }
        }
        if (i.size !== 0) {
            n.push(i);
        }
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "get ",
            " chunks of contacts from chat collection, chunk size: ",
            ""
        ])), n.length, t).tags("contact-sync");
        return n;
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = new Set;
            yield o("WAWebSchemaParticipant").getParticipantTable().forEach((t)=>{
                t.participants.forEach((t)=>{
                    const n = h(t);
                    if (n != null) {
                        e.add(n);
                    }
                });
            });
            yield o("WAWebSchemaChat").getChatTable().forEach((t)=>{
                if (r("WAWebWid").isEligibleForUSync(t.id)) {
                    const n = h(t.id);
                    if (n != null) {
                        e.add(n);
                    }
                }
            });
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "found ",
                " contacts from chat and group participant tables"
            ])), e.size).tags("contact-sync");
            return Array.from(e);
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        try {
            return o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").createWid(e));
        } catch (error) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                'toUserJid: "',
                '" is not a valid UserJid'
            ])), e).catching(r("getErrorSafe")(error)).sendLogs("contact-id-not-user-jid");
            return null;
        }
    }
    function y() {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("WAWebLidAwareContactsDB").anyOf([
                "isAddressBookContact"
            ], [
                1,
                0
            ]);
            const t = new Map(e.map((e)=>[
                    e.id,
                    e.contactHash
                ]));
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "found ",
                " contacts with isAddressBookContact set"
            ])), t.size).tags("contact-sync");
            return t;
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.size !== 0) {
                const n = (n, r)=>{
                    const e = {
                        id: n,
                        contactHash: o("WAWebApiContact").getContactHash(n)
                    };
                    if (r.isLid()) {
                        const a = o("WAWebApiContact").getPhoneNumber(r);
                        if (a != null) {
                            const l = a.toJid();
                            e.pnContactHash = t.get(l) ?? o("WAWebApiContact").getContactHash(l);
                        }
                    }
                    return e;
                };
                const a = Array.from(e).reduce((acc, item)=>{
                    let a;
                    try {
                        a = o("WAWebWidFactory").createUserWidOrThrow(item);
                    } catch (t) {
                        return acc;
                    }
                    const i = n(item, a);
                    acc.push(i);
                    if (a.isLid()) {
                        const l = o("WAWebApiContact").getPhoneNumber(a);
                        if (l != null) {
                            const s = l.toJid();
                            if (t.get(s) == null) {
                                const u = n(s, l);
                                acc.push(u);
                            }
                        }
                    } else {
                        const c = o("WAWebApiContact").getCurrentLid(a);
                        if (c != null) {
                            const d = c.toJid();
                            if (t.get(d) == null) {
                                const m = n(d, c);
                                acc.push(m);
                            }
                        }
                    }
                    return acc;
                }, []);
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "add missing contactHashes to ",
                    " contacts"
                ])), a.length).tags("contact-sync");
                return r("WAWebLidAwareContactsDB").bulkCreateOrMerge(a, "NonAddressBookContactsJob.addMissingContactHashesToContacts");
            }
        });
        return v.apply(this, arguments);
    }
    function S() {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield f();
            return o("WAWebModelStorageUtils").getStorage().lock([
                "contact"
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = yield y();
                const n = new Set;
                const a = Array.from(e, function(e) {
                    const r = {
                        id: e,
                        isContactSyncCompleted: 0
                    };
                    if (!t.has(e)) {
                        r.isAddressBookContact = 0;
                    }
                    if (t.get(e) == null) {
                        n.add(e);
                    }
                    return r;
                });
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "mark ",
                    " contacts dirty during the regular sync"
                ])), a.length).tags("contact-sync");
                yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(a, "NonAddressBookContactsJob.getNonAddressBookContactsAndMarkAllContactsDirty");
                t.forEach((e, t)=>{
                    if (e == null) {
                        n.add(t);
                    }
                });
                yield b(n, t);
            }));
        });
        return R.apply(this, arguments);
    }
    function L() {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield f();
            return o("WAWebModelStorageUtils").getStorage().lock([
                "contact"
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = yield y();
                const n = e.filter((e)=>!t.has(e));
                const a = n.map((e)=>({
                        id: e,
                        isAddressBookContact: 0,
                        isContactSyncCompleted: 0
                    }));
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "get ",
                    " non-AB contacts, mark dirty (initial sync)"
                ])), a.length).tags("contact-sync");
                yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(a, "NonAddressBookContactsJob.getAndUpdateNonAddressBookContacts");
                const i = new Set(e.filter((e)=>t.get(e) == null));
                t.forEach((e, t)=>{
                    if (e == null) {
                        i.add(t);
                    }
                });
                yield b(i, t);
            }));
        });
        return E.apply(this, arguments);
    }
    l.getAllContactsFromChatCollectionIntoChunks = _;
    l.getNonAddressBookContactsAndMarkAllContactsDirty = S;
    l.getAndUpdateNonAddressBookContacts = L;
}, 98);