__d("WAWebNoteSync", [
    "Promise",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAWebBackendApi",
    "WAWebDBNoteDatabaseApi",
    "WAWebNotesIdUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaNote",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
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
    const g = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 7;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.NoteEdit;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = this;
                let a = 0;
                let i = 0;
                let l = 0;
                let g = 0;
                let h = 0;
                let y = 0;
                let C = 0;
                let b = 0;
                const noteIds = [];
                const noteRecords = [];
                const R = yield (f || (f = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        if (e.operation !== "set") {
                            a++;
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                            };
                        }
                        try {
                            const { indexParts, value } = e;
                            const s = indexParts[1];
                            if (!s) {
                                return r.malformedActionIndex();
                            }
                            const u = value.noteEditAction;
                            if (!u) {
                                i++;
                                return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                            }
                            if (u.deleted === true) {
                                yield o("WAWebSchemaNote").getNoteTable().remove(s);
                                noteIds.push(s);
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                                };
                            }
                            const { chatJid, createdAt, type, unstructuredContent } = u;
                            if (type == null) {
                                l++;
                                return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                            }
                            if (chatJid == null) {
                                g++;
                                return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                            }
                            const _ = o("WAJids").validateChatJid(chatJid);
                            if (_ == null) {
                                h++;
                                return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                            }
                            if (createdAt == null) {
                                y++;
                            }
                            const f = o("WALongInt").maybeNumber(createdAt);
                            if (createdAt != null && f == null) {
                                C++;
                            }
                            if (unstructuredContent == null) {
                                b++;
                            }
                            const R = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(o("WAWebWidFactory").createWid(chatJid));
                            if (!R.success) {
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                    orphanModel: R.orphanModel
                                };
                            }
                            const L = o("WAWebWidToJid").widToChatJid(o("WAWebWidFactory").createWid(R.chat.id));
                            const E = yield r.resolveNoteId(_, L, s);
                            const k = {
                                id: E,
                                type: type === o("WAWebProtobufSyncAction.pb").SyncActionValue$NoteEditAction$NoteType.UNSTRUCTURED ? "unstructured" : "structured",
                                chatJid: L,
                                content: unstructuredContent ?? "",
                                modifiedAt: Math.floor(e.timestamp / 1000),
                                createdAt: Math.floor((f ?? 0) / 1000)
                            };
                            yield o("WAWebDBNoteDatabaseApi").addOrEditNote(k);
                            noteRecords.push(k);
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        } catch (e) {
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            };
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                if (noteIds.length > 0) {
                    o("WAWebBackendApi").frontendFireAndForget("removeNotes", {
                        noteIds
                    });
                }
                if (noteRecords.length > 0) {
                    o("WAWebBackendApi").frontendFireAndForget("upsertNotesFromSyncd", {
                        noteRecords
                    });
                }
                if (a > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "note sync: ",
                        " operations not supported"
                    ])), a);
                }
                if (i > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "note sync: ",
                        " malformed mutations"
                    ])), i);
                }
                if (l > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "noteEditAction.type is empty for ",
                        " mutations"
                    ])), l);
                }
                if (g > 0) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "noteEditAction.chatJid is empty for ",
                        " mutations"
                    ])), g);
                }
                if (h > 0) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "noteEditAction.chatJid invalid for ",
                        " mutations"
                    ])), h);
                }
                if (y > 0) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "noteEditAction.createdAt is empty for ",
                        " mutations"
                    ])), y);
                }
                if (C > 0) {
                    o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "noteEditAction.createdAt non-safe int for ",
                        " mutations"
                    ])), C);
                }
                if (b > 0) {
                    o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "noteEditAction.unstructuredContent is empty for ",
                        " mutations"
                    ])), b);
                }
                return R;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.resolveNoteId = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                if (t === e) {
                    return n;
                }
                return o("WAWebNotesIdUtils").generateNoteId(t);
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.getNoteMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(o("WAWebWidFactory").createWid(e.chatJid), o("WAWebSyncdConst").Actions.NoteEdit);
                const n = o("WAWebWidToJid").widToChatJid(o("WAWebWidFactory").createWid(t));
                const r = yield this.resolveNoteId(e.chatJid, n, String(e.id));
                const a = {
                    noteEditAction: {
                        type: e.type === "unstructured" ? o("WAWebProtobufSyncAction.pb").SyncActionValue$NoteEditAction$NoteType.UNSTRUCTURED : o("WAWebProtobufSyncAction.pb").SyncActionValue$NoteEditAction$NoteType.STRUCTURED,
                        chatJid: n,
                        unstructuredContent: e.content,
                        createdAt: e.createdAt * 1000
                    }
                };
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: [
                        r
                    ],
                    value: a,
                    version: this.getVersion(),
                    operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                    timestamp: e.modifiedAt * 1000,
                    action: this.getAction()
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const h = new g;
    l.default = h;
}, 98);