__d("WAWebLidContactSync", [
    "Promise",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebContactShortName",
    "WAWebLidAwareContactsDB",
    "WAWebProtobufsServerSync.pb",
    "WAWebSetUsernameJob",
    "WAWebSyncContactsJob",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdOrphan",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
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
    const f = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.CriticalUnblockLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return 1;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.LidContact;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i = false) {
                const l = this;
                const f = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
                const g = [];
                const h = [];
                const y = [];
                let C = 0;
                let b = 0;
                let v = 0;
                let S = 0;
                const R = yield (_ || (_ = n("Promise"))).all(t.map((e)=>{
                    try {
                        const t = e.indexParts;
                        const n = t[1];
                        if (r("isStringNullOrEmpty")(n)) {
                            return l.malformedActionIndex();
                        }
                        const a = o("WAWebWidFactory").createUserWidOrThrow(n);
                        if (!a.isLid()) {
                            C++;
                            return l.malformedActionIndex();
                        }
                        if (e.operation === "set") {
                            const s = e.value.lidContactAction;
                            if (!s) {
                                b++;
                                return o("WAWebSyncdIndexUtils").malformedActionValue(l.collectionName);
                            }
                            const { firstName, fullName, username } = s;
                            const m = o("WAWebUsernameTypes").asMaybeUsername(username);
                            const p = {
                                id: n,
                                name: fullName ?? "",
                                shortName: firstName ?? o("WAWebContactShortName").getShortName(firstName) ?? "",
                                username: m ?? undefined,
                                type: "in",
                                isAddressBookContact: 1,
                                isContactSyncCompleted: 0,
                                isUsernameContact: m != null
                            };
                            if (f && m != null) {
                                y.push({
                                    userId: a,
                                    username: m
                                });
                            }
                            g.push(p);
                            o("WAWebSyncContactsJob").syncNewContact(a);
                            v++;
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        }
                        if (e.operation === "remove") {
                            h.push(a);
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        }
                        S++;
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    } catch (e) {
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Failed
                        };
                    }
                }));
                if (C > 0) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] lid contact sync received ",
                        " non-lid jids"
                    ])), C).sendLogs("lid-contact-sync-received-non-lid-jid", {
                        sampling: 0.1
                    });
                }
                if (b > 0) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] lid contact sync: ",
                        " mutations w/o action value"
                    ])), b).sendLogs("lid-contact-sync-mutation-has-no-syncd-action-value", {
                        sampling: 0.1
                    });
                }
                if (v > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] lid contact sync - ",
                        " set operations processed"
                    ])), v);
                }
                if (S > 0) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "contact sync: ",
                        " operations not supported"
                    ])), S);
                }
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] lid sync mutations processed"
                ])));
                yield o("WAWebApiContact").createOrMergeAddressBookContacts(g);
                o("WAWebSyncdOrphan").checkOrphanUserStatusMutes(g.map((e)=>e.id)).catch(()=>{
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][contact sync] failed to check orphan status mutes"
                    ]))).sendLogs("failed-to-check-orphan-user-status-mutes", {
                        sampling: 0.1
                    });
                });
                const L = [];
                const E = yield r("WAWebLidAwareContactsDB").bulkGet(h.map((e)=>e.toJid()));
                E.forEach((e, t)=>{
                    if (e && e.isUsernameContact === true) {
                        L.push(h[t]);
                    }
                });
                if (L.length > 0) {
                    const k = L.map((e)=>o("WAJids").toLidUserJid(e.user));
                    yield o("WAWebApiContact").setNotAddressBookContacts(k);
                    o("WAWebBackendApi").frontendSendAndReceive("clearStatusForRemovedContact", {}).catch(()=>{
                        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd] lid contact sync: clear removed contacts status -"
                        ]))).sendLogs("failed-to-clear-status-for-removed-lid-contacts");
                    });
                }
                if (f && y.length > 0) {
                    yield o("WAWebSetUsernameJob").setUsernamesJob(y);
                }
                const I = g.map((e)=>({
                        id: e.id,
                        name: e.name,
                        shortName: e.shortName,
                        type: "in",
                        syncToAddressbook: e.syncToAddressbook === true,
                        isAddressBookContact: 1,
                        isContactSyncCompleted: 0,
                        username: o("WAWebUsernameTypes").serializeMaybeUsername(e.username),
                        isUsernameContact: true
                    }));
                if (I.length > 0) {
                    o("WAWebBackendApi").frontendFireAndForget("bulkAddContactToCollection", {
                        contacts: I
                    });
                }
                if (L.length > 0) {
                    o("WAWebBackendApi").frontendFireAndForget("setContactsNotMyUsernameContacts", {
                        usernameContactIdsToRemove: L.map((e)=>e.toString())
                    });
                }
                return R;
            });
            function a(e, n, r) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.getLidContactSyncMutation = function({ contactId, firstName, fullName, isDelete, username }) {
            const l = o("WATimeUtils").unixTimeMs();
            const s = {
                lidContactAction: {
                    fullName,
                    firstName,
                    username
                }
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [
                    contactId.toString()
                ],
                operation: isDelete ? o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE : o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                version: this.getVersion(),
                value: s,
                timestamp: l,
                action: this.getAction()
            });
        };
        return a;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const g = new f;
    l.default = g;
}, 98);