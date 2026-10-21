__d("WAWebContactSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebContactCollection",
    "WAWebContactShortName",
    "WAWebContactUtils",
    "WAWebCurrentUser",
    "WAWebDBCreateLidPnMappings",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncContactsJob",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdOrphan",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    const b = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.CriticalUnblockLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return 2;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.Contact;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i = false) {
                const l = this;
                const h = [];
                const y = [];
                const mappings = [];
                const v = new Map;
                let S = 0;
                let R = 0;
                let L = 0;
                const E = yield (C || (C = n("Promise"))).all(t.map((t)=>{
                    try {
                        const n = t.indexParts;
                        const a = n[1];
                        if (r("isStringNullOrEmpty")(a)) {
                            return l.malformedActionIndex();
                        }
                        const i = o("WAWebWidFactory").createUserWidOrThrow(a);
                        if (t.operation === "set") {
                            const u = t.value.contactAction;
                            if (!u) {
                                S++;
                                return o("WAWebSyncdIndexUtils").malformedActionValue(l.collectionName);
                            }
                            if (i.isLid()) {
                                if (o("WAWebCurrentUser").isEmployee()) {
                                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                        "syncd: received lid contact: ",
                                        ""
                                    ])), i.toString());
                                }
                                R++;
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Skipped
                                };
                            }
                            const { firstName, fullName, lidJid, saveOnPrimaryAddressbook, username } = u;
                            const f = {
                                id: a,
                                name: fullName ?? "",
                                shortName: firstName ?? o("WAWebContactShortName").getShortName(fullName) ?? "",
                                type: "in",
                                syncToAddressbook: saveOnPrimaryAddressbook,
                                isAddressBookContact: 1,
                                isContactSyncCompleted: 0,
                                isUsernameContact: false
                            };
                            if (!r("isStringNullOrEmpty")(username)) {
                                f.username = o("WAWebUsernameTypes").asUsername(username);
                            }
                            const g = lidJid != null ? o("WAWebWidFactory").asUserLidOrThrow(o("WAWebWidFactory").createUserWidOrThrow(lidJid, "lid")) : null;
                            v.set(i, g ?? o("WAWebLidMigrationUtils").toLid(i));
                            if (i.isRegularUserPn() && g) {
                                const C = g;
                                mappings.push({
                                    lid: C,
                                    pn: i
                                });
                            }
                            h.push(f);
                            o("WAWebSyncContactsJob").syncNewContact(i);
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        }
                        if (t.operation === "remove") {
                            if (i.isLid() || i.isBot()) {
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Skipped
                                };
                            }
                            v.set(i, o("WAWebLidMigrationUtils").toLid(i));
                            y.push(i);
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        }
                        L++;
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    } catch (e) {
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Failed
                        };
                    }
                }));
                if (S > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "contact sync: ",
                        " malformed mutations"
                    ])), S);
                }
                if (R > 0) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: contact sync: ",
                        " lid contacts are not supported"
                    ])), R).sendLogs("receive-lid-contact");
                }
                if (L > 0) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "contact sync: ",
                        " operations not supported"
                    ])), L);
                }
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: handler after loop"
                ])));
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: before pn job"
                ])));
                yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                    mappings,
                    flushImmediately: true,
                    learningSource: "contact-sync"
                });
                yield o("WAWebApiContact").createOrMergeAddressBookContacts(h);
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: handler after save"
                ])));
                if (i === true) {
                    yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(this.collectionName, "handler after save");
                }
                o("WAWebSyncdOrphan").checkOrphanUserStatusMutes(h.map((e)=>e.id)).catch(()=>{
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] contact: orphan status mutes check failed"
                    ]))).sendLogs("failed-to-check-orphan-user-status-mutes");
                });
                const k = [];
                const I = y.map((e)=>{
                    const t = v.get(e);
                    if (t) {
                        return t.toString();
                    }
                    return e.toJid();
                });
                const T = yield r("WAWebLidAwareContactsDB").bulkGet(I);
                T.forEach((e, t)=>{
                    if (e == null || e.isUsernameContact !== true) {
                        k.push(y[t]);
                    }
                });
                if (k.length > 0) {
                    const D = k.map((e)=>o("WAWebWidToJid").widToUserJid(e));
                    yield o("WAWebApiContact").setNotAddressBookContacts(D);
                    o("WAWebBackendApi").frontendSendAndReceive("clearStatusForRemovedContact", {}).catch(()=>{
                        o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd] contact: clear status for removed failed"
                        ]))).sendLogs("failed-to-clear-status-for-removed-contacts");
                    });
                }
                h.forEach((e)=>{
                    const t = o("WAWebWidFactory").createUserWidOrThrow(e.id);
                    const isUsernameContact = false;
                    o("WAWebContactCollection").ContactCollection.add(babelHelpers.extends({}, e, {
                        id: t,
                        isUsernameContact
                    }), {
                        merge: true
                    });
                    const r = v.get(t);
                    if (r) {
                        o("WAWebContactCollection").ContactCollection.add(babelHelpers.extends({}, e, {
                            id: r,
                            isUsernameContact
                        }), {
                            merge: true
                        });
                    }
                });
                k.forEach((e)=>{
                    const t = o("WAWebContactCollection").ContactCollection.get(e);
                    if (t) {
                        o("WAWebContactUtils").setContactNotMine(t);
                    }
                    const n = v.get(e);
                    const r = n ? o("WAWebContactCollection").ContactCollection.get(n) : null;
                    if (r) {
                        o("WAWebContactUtils").setContactNotMine(r);
                    }
                });
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: handler done"
                ])));
                if (i === true) {
                    yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(this.collectionName, "handler done");
                }
                return E;
            });
            function a(e, n, r) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.getContactSyncMutation = function({ contactId, firstName, fullName, isDelete, lid, syncToAddressbook, username }) {
            if (contactId.isLid()) {
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: sending lid contact: ",
                        ""
                    ])), contactId.toString());
                }
                o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: contact sync: should not send Lid contact"
                ]))).sendLogs("send-lid-contact");
            }
            const c = o("WATimeUtils").unixTimeMs();
            const d = {
                contactAction: {
                    fullName: fullName ?? undefined,
                    firstName: firstName ?? undefined,
                    lidJid: lid ? lid.toString() : undefined,
                    saveOnPrimaryAddressbook: syncToAddressbook ?? undefined,
                    username: o("WAWebUsernameTypes").serializeMaybeUsername(username) ?? undefined
                }
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [
                    contactId.toString({
                        legacy: true
                    })
                ],
                operation: isDelete ? o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE : o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                version: this.getVersion(),
                value: d,
                timestamp: c,
                action: this.getAction()
            });
        };
        return a;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const v = new b;
    l.default = v;
}, 98);