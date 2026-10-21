__d("WAWebContactManagerMetadataSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebCustomerManagerGating",
    "WAWebDBContactManagerMetadataDatabaseApi",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaContactManagerMetadata",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        const n = e?.contactManagerMetadataAction?.isHidden;
        if (typeof n === "boolean") {
            return n;
        }
        return null;
    }
    const d = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return o("WAWebSyncdConst").CONTACT_MANAGER_METADATA_SYNC_VERSION;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.ContactManagerMetadata;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                if (!this.$ContactManagerMetadataSync$p_1()) {
                    return t.map(()=>({
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        }));
                }
                let a = 0;
                const i = t.map((e)=>{
                    const t = n.$ContactManagerMetadataSync$p_2(e.indexParts);
                    if (t == null) {
                        a++;
                        return {
                            operation: null,
                            result: n.malformedActionIndex()
                        };
                    }
                    if (e.operation === "remove") {
                        return {
                            operation: {
                                kind: "remove",
                                metadataJid: t
                            },
                            result: {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            }
                        };
                    }
                    const isHidden = c(e.value);
                    if (isHidden == null) {
                        a++;
                        return {
                            operation: null,
                            result: o("WAWebSyncdIndexUtils").malformedActionValue(n.collectionName)
                        };
                    }
                    return {
                        operation: {
                            kind: "set",
                            row: {
                                id: t,
                                isHidden
                            },
                            timestamp: e.timestamp
                        },
                        result: {
                            actionState: o("WAWebSyncdConst").SyncActionState.Success
                        }
                    };
                });
                if (a > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][contact-manager-metadata]: ",
                        " malformed mutations"
                    ])), a);
                }
                const l = new Map;
                const u = new Set;
                for (const d of i){
                    const m = d.operation;
                    if (m != null) {
                        if (m.kind === "remove") {
                            u.add(m.metadataJid);
                            l.delete(m.metadataJid);
                            continue;
                        }
                        if (!u.has(m.row.id)) {
                            const p = l.get(m.row.id);
                            if (p == null || m.timestamp >= p.timestamp) {
                                l.set(m.row.id, {
                                    row: m.row,
                                    timestamp: m.timestamp
                                });
                            }
                        }
                    }
                }
                const _ = Array.from(l.values(), function({ row }) {
                    return row;
                });
                const f = Array.from(u);
                const metadataJids = [].concat(_.map((e)=>e.id), f);
                if (metadataJids.length > 0) {
                    try {
                        if (_.length > 0) {
                            yield o("WAWebDBContactManagerMetadataDatabaseApi").bulkAddOrEditContactManagerMetadata(_);
                        }
                        if (f.length > 0) {
                            yield o("WAWebDBContactManagerMetadataDatabaseApi").bulkRemoveContactManagerMetadata(f);
                        }
                    } catch (error) {
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd][contact-manager-metadata]: batch persistence failed"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("contact-manager-metadata-persistence-failed");
                        return i.map(({ operation, result })=>{
                            if (operation == null) {
                                return result;
                            }
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            };
                        });
                    }
                    o("WAWebBackendApi").frontendFireAndForget("contactManagerMetadataChanged", {
                        metadataJids
                    });
                }
                return i.map(({ result })=>result);
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.resolveConflicts = function(t, r) {
            const e = c(o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, r.binarySyncData).value);
            if (e == null || t.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE || t.timestamp > r.timestamp) {
                return (u || (u = n("Promise"))).resolve(o("WAWebSyncdConst").ConflictResolutionState.SkipRemote);
            }
            return (u || (u = n("Promise"))).resolve(o("WAWebSyncdConst").ConflictResolutionState.ApplyRemoteAndDropLocal);
        };
        a_prototype.shouldDropPendingMutationForRemoteRemove = function(t, n) {
            return true;
        };
        a_prototype.getContactManagerMetadataMutation = function(t) {
            const e = this.$ContactManagerMetadataSync$p_3(t.id);
            if (e == null) {
                throw r("err")("Invalid contact manager metadata JID");
            }
            const n = {
                contactManagerMetadataAction: {
                    isHidden: t.isHidden
                }
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [
                    e
                ],
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                version: this.getVersion(),
                value: n,
                timestamp: o("WATimeUtils").unixTimeMs(),
                action: this.getAction()
            });
        };
        a_prototype.sendContactManagerMetadataUpdate = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (!this.$ContactManagerMetadataSync$p_1()) {
                    throw r("err")("Contact manager metadata is unavailable");
                }
                const t = this.getContactManagerMetadataMutation(e);
                yield o("WAWebSyncdCoreApi").lockForSync([
                    "contact_manager_metadata"
                ], [
                    t
                ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield o("WAWebDBContactManagerMetadataDatabaseApi").addOrEditContactManagerMetadata(e);
                }));
                o("WAWebBackendApi").frontendFireAndForget("contactManagerMetadataChanged", {
                    metadataJids: [
                        e.id
                    ]
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$ContactManagerMetadataSync$p_1 = function() {
            return o("WAWebCustomerManagerGating").customerManagerEnabled() && o("WAWebSchemaContactManagerMetadata").canUseContactManagerMetadataTable();
        };
        a_prototype.$ContactManagerMetadataSync$p_2 = function(t) {
            if (t.length !== 2) {
                return null;
            }
            return this.$ContactManagerMetadataSync$p_3(t[1]);
        };
        a_prototype.$ContactManagerMetadataSync$p_3 = function(t) {
            try {
                return o("WAWebDBContactManagerMetadataDatabaseApi").parseContactManagerMetadataJid(t);
            } catch (e) {
                return null;
            }
        };
        return a;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const m = new d;
    l.default = m;
}, 98);