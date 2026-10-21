__d("WAWebDBProcessRevokeMsgs", [
    "Promise",
    "WALogger",
    "WAWebAddonProcessRevoke",
    "WAWebApiChatUnreadMention",
    "WAWebApiOrphanRevoke",
    "WAWebBackendApi",
    "WAWebDBAssociatedMsgsAttachDetachAPI",
    "WAWebDBReportingTokenUtils",
    "WAWebDBStoreRevokeMsgs",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebRevoke",
    "WAWebSchemaMessage",
    "WAWebViewModeUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:375",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
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
    const b = n("cr:375") ?? {};
    const b_ftsLightClient = b.ftsLightClient;
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Set;
            const a = [];
            const i = [];
            const l = new Map;
            const b = new Map;
            const S = [];
            const R = [];
            const L = [];
            const E = [];
            const k = [];
            const I = e.filter((e)=>{
                const { newMsgKey, revokeMsgKey, subtype } = e;
                let i = true;
                if (subtype === "admin_revoke") {
                    if (!r("WAWebWid").isGroup(revokeMsgKey.remote) && !r("WAWebWid").isNewsletter(revokeMsgKey.remote)) {
                        i = false;
                        if (L.length < 3) {
                            L.push(String(revokeMsgKey));
                        }
                    } else if (!r("WAWebWid").equals(revokeMsgKey.remote, newMsgKey.remote)) {
                        i = false;
                        if (E.length < 3) {
                            E.push(String(revokeMsgKey));
                        }
                    }
                } else {
                    i = r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(revokeMsgKey.remote, newMsgKey.remote)) && r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(revokeMsgKey.participant, newMsgKey.participant)) && revokeMsgKey.fromMe === newMsgKey.fromMe;
                    if (!i) {
                        if (k.length < 3) {
                            k.push({
                                revokeMsgKey: String(revokeMsgKey),
                                newMsgKey: String(newMsgKey)
                            });
                        }
                        b.set(e.revokeMsgKey.id, e);
                    }
                }
                return i;
            });
            if (L.length > 0) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "processRevokeMsgs: ",
                    " revokeMsgKeys have not been revoked => ",
                    ""
                ])), L.length, L);
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "processRevokeMsgs: admin revoke needs group/newsletter chat"
                ]))).sendLogs("process-admin-revoke-message");
            }
            if (E.length > 0) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "processRevokeMsgs: ",
                    " revokes skipped (diff group) => ",
                    ""
                ])), E.length, E);
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "processRevokeMsgs: admin revoke group != orig msg group"
                ]))).sendLogs("process-admin-revoke-message");
            }
            if (k.length > 0) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "processRevokeMsgs: ",
                    " invalid revoke requests => ",
                    ""
                ])), k.length, k.map((e)=>e.revokeMsgKey));
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "processRevokeMsgs: retry invalid revokes as bot invoker"
                ])));
            }
            if (b.size > 0) {
                try {
                    const T = Array.from(b.entries());
                    const D = T.map((e)=>e[1].revokeMsgKey.toString());
                    const x = T.map((e)=>o("WAWebLidMigrationUtils").getAlternateMsgKey(e[1].revokeMsgKey)?.toString());
                    const $ = yield o("WAWebSchemaMessage").getMessageTable().bulkGet([].concat(D, x), false);
                    $.forEach((e)=>{
                        let t = false;
                        if (e != null) {
                            const n = r("WAWebMsgKey").from(e.id);
                            const a = b.get(n.id);
                            if (a != null) {
                                const { newMsgKey, sender, subtype } = a;
                                if (subtype !== "admin_revoke") {
                                    const u = n.remote;
                                    const c = e.botTargetSenderJid ? o("WAWebWidFactory").createWidFromWidLike(e.botTargetSenderJid) : null;
                                    if (!(c == null || u == null)) {
                                        const d = e.botPluginSearchUrl != null && e.botResponseTargetId != null;
                                        const m = !d && e.botPluginMaybeParent === true;
                                        if (u.isGroup()) {
                                            if (r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(c, newMsgKey.participant))) {
                                                t = true;
                                            }
                                        } else if (!u.isBot()) {
                                            if (r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(c, sender))) {
                                                t = true;
                                            }
                                        }
                                        if (t) {
                                            S.push(a);
                                            const { botResponseTargetId, internalId } = e;
                                            if ((d || m) && internalId != null && botResponseTargetId != null) {
                                                R.push({
                                                    internalId,
                                                    targetId: botResponseTargetId
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    });
                    I.push(...S);
                } catch (error) {
                    const P = r("getErrorSafe")(error);
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "Store Revoked Msg: re-validate bot revoke failed"
                    ]))).catching(P).sendLogs("Re-validate revoke failed");
                }
            }
            if (R.length > 0) {
                try {
                    yield o("WAWebDBStoreRevokeMsgs").findAndDeleteAssociatedPluginMsg(R);
                } catch (error) {
                    const N = r("getErrorSafe")(error);
                    o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "Store Revoked Msg: delete associated carousel revoke failed"
                    ]))).catching(N).sendLogs("Plugin carousel delete revoke failed");
                }
            }
            const M = [];
            const w = yield (C || (C = n("Promise"))).all([
                o("WAWebModelStorageUtils").getStorage().lock([
                    "message",
                    "message-association"
                ], (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([s, u]) {
                        const c = [].concat(I.map((e)=>e.revokeMsgKey), I.map((e)=>o("WAWebLidMigrationUtils").getAlternateMsgKey(e.revokeMsgKey)), I.map((e)=>e.newMsgKey));
                        const d = yield o("WAWebDBAssociatedMsgsAttachDetachAPI").getAssociatedMsgsByParentMsgKeyFromAssociationTable(c.filter(Boolean));
                        const m = o("WAWebDBAssociatedMsgsAttachDetachAPI").getValidAssociatedMsgs(d, o("WAWebDBAssociatedMsgsAttachDetachAPI").ViewModeUpdateType.Detach);
                        const p = m.map((e)=>e.msgKey);
                        const _ = [].concat(c.map((e)=>{
                            if (e) {
                                return e.toString();
                            }
                            return "";
                        }), p);
                        const f = yield s.bulkGet(_, false);
                        const b = [];
                        const I_length = I.length;
                        const S = f.slice(0, I_length);
                        const R = f.slice(I_length, I_length * 2);
                        const L = f.slice(I_length * 2, I_length * 3);
                        const E = f.slice(I_length * 3).filter(Boolean);
                        const k = [];
                        const T = [];
                        const D = [];
                        I.forEach((e, n)=>{
                            const c = S[n] ?? R[n];
                            const d = L[n];
                            if (c == null) {
                                if (T.length < 3) {
                                    T.push(String(e.revokeMsgKey));
                                }
                                b.push(e);
                                return;
                            }
                            if (e.skipRevokeWindow !== true && !o("WAWebRevoke").isWithinRevokeWindow({
                                revokedMsgKey: r("WAWebMsgKey").fromString(c.id),
                                revokedMsgTimestamp: c.t,
                                revokeTimestamp: e.revokeTimestamp
                            })) {
                                if (D.length < 3) {
                                    D.push(String(e.revokeMsgKey));
                                }
                                return;
                            }
                            t.add(c.id);
                            i.push(String(c.rowId));
                            if (c.associationType != null) {
                                M.push([
                                    c.id,
                                    c.associationType
                                ]);
                            }
                            const m = o("WAWebRevoke").getMsgKeyAfterRevoke({
                                originalKey: r("WAWebMsgKey").from(c.id),
                                revokeKey: e.newMsgKey
                            });
                            const p = {
                                id: m.toString(),
                                ack: c.ack,
                                to: c.to,
                                author: c.author,
                                type: o("WAWebMsgType").MSG_TYPE.REVOKED,
                                subtype: e.subtype === "admin_revoke" ? "admin" : "sender",
                                revokeSender: e.sender,
                                protocolMessageKey: c.id,
                                protocolMessageRowId: d?.rowId,
                                from: c.from,
                                t: c.t,
                                rowId: c.rowId,
                                internalId: c.internalId,
                                messageRangeIndex: c.messageRangeIndex,
                                revokeTimestamp: e.revokeTimestamp,
                                disappearingModeInitiator: c.disappearingModeInitiator,
                                ephemeralDuration: c.ephemeralDuration,
                                ephemeralSettingTimestamp: c.ephemeralSettingTimestamp,
                                viewMode: o("WAWebViewModeUtils").getRevokedViewMode(c.viewMode, c.associationType, e.viewMode ?? c.viewMode)
                            };
                            a.push(p);
                            if (o("WAWebMsgGetters").getIsImportantMessage(c)) {
                                const _ = r("WAWebMsgKey").fromString(c.id);
                                const f = _.remote.toString();
                                if (l.has(f)) {
                                    const h = l.get(f) ?? [];
                                    l.set(f, [].concat(h, [
                                        c.id
                                    ]));
                                } else {
                                    l.set(f, [
                                        c.id
                                    ]);
                                }
                            }
                        });
                        if (T.length > 0) {
                            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                "processRevokeMsg: ",
                                " revokes are orphan or addon => ",
                                ""
                            ])), b.length, T);
                        }
                        if (D.length > 0) {
                            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                                "processRevokeMsgs: ",
                                " revokes outside window => ",
                                ""
                            ])), D.length, D);
                        }
                        if (E != null && E.length) {
                            const x = o("WAWebDBAssociatedMsgsAttachDetachAPI").getDetachedForeverAssociatedMsgs(E).filter(Boolean);
                            x.forEach((e)=>{
                                if (e != null && !t.has(e.id)) {
                                    k.push(e);
                                }
                            });
                            E.forEach((e)=>{
                                M.push([
                                    e.id,
                                    e.associationType
                                ]);
                            });
                            o("WAWebBackendApi").frontendFireAndForget("detachAssociatedMsgsForever", {
                                msgIds: x.map((e)=>e.id)
                            });
                        }
                        const $ = [];
                        const P = [];
                        if (t.size > 0) {
                            $.push(s.bulkRemove(Array.from(t)).catch((e)=>{
                                const n = r("getErrorSafe")(e);
                                o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                                    "Store Revoked Msg: failed to remove ",
                                    " revoked messages"
                                ])), t.size).catching(n).sendLogs("store-revoked-msg-failed-to-remove-revoked-messages");
                                throw e;
                            }));
                        }
                        if (M.length > 0) {
                            $.push(u.bulkRemove(M));
                        }
                        yield (C || (C = n("Promise"))).all($);
                        if (a.length > 0 || k.length > 0) {
                            P.push(s.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY([].concat(a, k)));
                        }
                        yield C.all(P);
                        return b;
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()),
                o("WAWebAddonProcessRevoke").processRevokeMsgs(I)
            ]);
            const A = w[0];
            const F = w[1];
            if (A.length > 0) {
                const O = A.filter((e)=>F.has(e.revokeMsgKey)).map((e)=>({
                        msgKey: e.revokeMsgKey.toString(),
                        sender: e.sender,
                        timestamp: e.timestamp,
                        subtype: e.subtype ?? "sender_revoke"
                    }));
                if (O.length > 0) {
                    yield o("WAWebApiOrphanRevoke").addOrphanRevokes(O);
                }
            }
            if (b_ftsLightClient != null) {
                b_ftsLightClient.purge(i).catch(r("WAWebNoop"));
            }
            o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(t ? Array.from(t) : [], {
                removeWholeRow: false
            });
            if (l.size > 0) {
                o("WAWebApiChatUnreadMention").removeUnreadMentionChat(l);
            }
        });
        return R.apply(this, arguments);
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield S(e);
            return new Set(e.map((e)=>e.revokeMsgKey.toString()));
        });
        return E.apply(this, arguments);
    }
    l.processRevokeMsgs = S;
    l.processRevokeMsgsAndGetCleanupEligibleKeys = L;
}, 98);