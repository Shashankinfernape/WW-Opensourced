__d("WAWebContactEditSync", [
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebContactSync",
    "WAWebDeleteStatusAction",
    "WAWebLidContactSync",
    "WAWebSyncdCoreApi",
    "WAWebUsernameTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ contactId, fullName, lid, shortName, syncToAddressbook, username }) {
        const c = o("WAWebUsernameTypes").asMaybeUsername(username);
        const d = r("WAWebContactSync").getContactSyncMutation({
            contactId,
            fullName,
            firstName: shortName,
            syncToAddressbook,
            lid,
            username: c
        });
        const m = babelHelpers.extends({
            id: contactId.toString({
                legacy: true
            }),
            name: fullName,
            shortName,
            type: "in",
            syncToAddressbook,
            isAddressBookContact: 1,
            isContactSyncCompleted: 0,
            isUsernameContact: false
        }, c != null ? {
            username: c
        } : {});
        return o("WAWebSyncdCoreApi").lockForSync([
            "contact"
        ], [
            d
        ], function() {
            return o("WAWebApiContact").createOrMergeAddressBookContacts([
                babelHelpers.extends({}, m)
            ]);
        }).then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebBackendApi").frontendFireAndForget("bulkAddContactToCollection", {
                contacts: [
                    babelHelpers.extends({}, m, {
                        id: contactId.toString(),
                        username: o("WAWebUsernameTypes").serializeMaybeUsername(c)
                    })
                ]
            });
        }));
    }
    function u(e) {
        const t = r("WAWebContactSync").getContactSyncMutation({
            contactId: e,
            isDelete: true
        });
        return o("WAWebSyncdCoreApi").lockForSync([
            "contact"
        ], [
            t
        ], function() {
            return o("WAWebApiContact").setNotAddressBookContacts([
                e.toString({
                    legacy: true
                })
            ]);
        }).then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebDeleteStatusAction").clearStatusForRemovedContact();
            f(e);
        }));
    }
    function c(e) {
        const t = [];
        const a = [];
        const i = [];
        for (const l of e){
            t.push(r("WAWebContactSync").getContactSyncMutation({
                contactId: l,
                isDelete: true
            }));
            a.push(l.toString());
            i.push(l.toString({
                legacy: true
            }));
        }
        return o("WAWebSyncdCoreApi").lockForSync([
            "contact"
        ], t, function() {
            return o("WAWebApiContact").setNotAddressBookContacts(i);
        }).then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebDeleteStatusAction").clearStatusForRemovedContact();
            const t = e.map((e)=>({
                    id: e.toString(),
                    type: "out",
                    name: undefined,
                    shortName: undefined,
                    isAddressBookContact: 0,
                    isContactSyncCompleted: 0,
                    syncToAddressbook: false,
                    isUsernameContact: false
                }));
            o("WAWebBackendApi").frontendFireAndForget("bulkAddContactToCollection", {
                contacts: t
            });
        }));
    }
    function d(e, t, n, username) {
        return m([
            {
                lid: e,
                fullName: t,
                firstName: n,
                username
            }
        ]);
    }
    function m(e) {
        const t = e.map((e)=>r("WAWebLidContactSync").getLidContactSyncMutation({
                contactId: e.lid,
                fullName: e.fullName,
                firstName: e.firstName,
                username: o("WAWebUsernameTypes").serializeUsername(e.username)
            }));
        const a = e.map((e)=>({
                id: e.lid.toString(),
                name: e.fullName,
                shortName: e.firstName,
                type: "in",
                syncToAddressbook: false,
                isAddressBookContact: 0,
                isContactSyncCompleted: 0,
                username: e.username,
                isUsernameContact: true
            }));
        return o("WAWebSyncdCoreApi").lockForSync([
            "contact"
        ], t, function() {
            return o("WAWebApiContact").createOrMergeAddressBookContacts(a.map((e)=>babelHelpers.extends({}, e)));
        }).then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebBackendApi").frontendFireAndForget("bulkAddContactToCollection", {
                contacts: a.map((e)=>babelHelpers.extends({}, e, {
                        username: o("WAWebUsernameTypes").serializeUsername(e.username)
                    }))
            });
        }));
    }
    function p(e, t) {
        const a = r("WAWebLidContactSync").getLidContactSyncMutation({
            contactId: e,
            isDelete: true
        });
        const i = [
            e.toString()
        ];
        return o("WAWebSyncdCoreApi").lockForSync([
            "contact"
        ], [
            a
        ], function() {
            const e = [
                t
            ];
            return o("WAWebApiContact").setNotAddressBookContacts(i, e);
        }).then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebDeleteStatusAction").clearStatusForRemovedContact();
            f(e, t);
        }));
    }
    function _(t) {
        const a = [];
        const i = [];
        for (const l of t){
            a.push(r("WAWebContactSync").getContactSyncMutation({
                contactId: l.contactId,
                fullName: l.fullName,
                firstName: l.shortName,
                syncToAddressbook: l.syncToAddressbook,
                lid: l.lid
            }));
            i.push({
                id: l.contactId.toString({
                    legacy: true
                }),
                name: l.fullName,
                shortName: l.shortName,
                type: "in",
                syncToAddressbook: l.syncToAddressbook,
                isAddressBookContact: 1,
                isContactSyncCompleted: 0
            });
        }
        return o("WAWebSyncdCoreApi").lockForSync([
            "contact"
        ], a, function() {
            return o("WAWebApiContact").createOrMergeAddressBookContacts(i.map((e)=>babelHelpers.extends({}, e)));
        }).then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const n = [];
            t.forEach((t, r)=>{
                try {
                    const a = i[r];
                    n.push(babelHelpers.extends({}, a, {
                        id: t.contactId.toString(),
                        isUsernameContact: false
                    }));
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[sendContactUpdateBatch] Failed to add contact to collection"
                    ])));
                }
            });
            o("WAWebBackendApi").frontendFireAndForget("bulkAddContactToCollection", {
                contacts: n
            });
        }));
    }
    function f(e, t) {
        o("WAWebBackendApi").frontendFireAndForget("bulkAddContactToCollection", {
            contacts: [
                {
                    id: e.toString(),
                    type: "out",
                    name: undefined,
                    shortName: undefined,
                    username: o("WAWebUsernameTypes").serializeMaybeUsername(t),
                    isAddressBookContact: 0,
                    isContactSyncCompleted: 0,
                    syncToAddressbook: false,
                    isUsernameContact: false
                }
            ]
        });
    }
    l.sendContactUpdate = s;
    l.sendContactDelete = u;
    l.sendContactDeleteBatch = c;
    l.sendUsernameContactUpdate = d;
    l.sendUsernameContactUpdateBatch = m;
    l.sendUsernameContactDelete = p;
    l.sendContactUpdateBatch = _;
}, 98);