__d("WAWebUnquarantineMessageJob", [
    "WALogger",
    "WAWebAddonQueryUtils",
    "WAWebBackendApi",
    "WAWebDBMessageDelete",
    "WAWebDBMessageSerialization",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebDBProcessOrphansForNewMsg",
    "WAWebE2EProtoParser",
    "WAWebFutureproofProtoUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebQuarantineActionUtils",
    "WAWebQuarantineDataStore",
    "WAWebSchemaMessage",
    "WAWebSchemaMessageOrphans",
    "WAWebWamEnumEditType",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "unquarantineMessageJob: Starting unquarantine for message ",
                ""
            ])), t.toString());
            const a = o("WAWebSchemaMessage").getMessageTable();
            const i = yield a.get(t.toString());
            if (i == null) {
                return m(t);
            }
            const l = n ?? (yield o("WAWebQuarantineDataStore").getQuarantineData(t.toString()));
            if (l == null) {
                throw r("err")("unquarantineMessageJob: Quarantine data not found");
            }
            const u = yield _(t, i, l);
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "unquarantineMessageJob: Successfully unquarantined message ",
                ""
            ])), t.toString());
            return u;
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaMessageOrphans").getMessageOrphanTable().get(e.toString());
            if (t == null) {
                throw r("err")("unquarantineMessageJob: Message not found in database");
            }
            if (t.parsedMsgPayload.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL || t.parsedMsgPayload.subtype !== "message_edit") {
                throw r("err")("unquarantineMessageJob: Cannot resume quarantine restore: orphan is not a message edit");
            }
            if (!r("justknobx")._("572")) {
                throw r("err")("unquarantineMessageJob: Quarantined edit restore is disabled");
            }
            if ((yield o("WAWebQuarantineDataStore").getQuarantineData(e.toString())) == null) {
                throw r("err")("unquarantineMessageJob: Quarantined edit data not found");
            }
            return g(o("WAWebDBMessageSerialization").messageFromDbRow(t.parsedMsgPayload));
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, { originalProtobuf }) {
            let i;
            try {
                i = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, new Uint8Array(originalProtobuf));
            } catch (e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "unquarantineMessageJob: Failed to decode protobuf"
                ])));
                throw r("err")("unquarantineMessageJob: Failed to decode original protobuf");
            }
            const l = o("WAWebDBMessageSerialization").messageFromDbRow(t);
            const s = L(l);
            const c = S(i);
            const d = o("WAWebE2EProtoParser").parseMsgProto({
                message: s,
                messageProtobuf: i,
                msgContext: "relay",
                editAttr: c ? o("WAWebWamEnumEditType").EDIT_TYPE.EDITED : undefined
            });
            if (d.type === o("WAWebMsgType").MSG_TYPE.QUARANTINED) {
                throw r("err")("unquarantineMessageJob: Failed to parse original protobuf");
            }
            if (d.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && d.subtype === "message_edit" && c) {
                return g(d);
            }
            const m = babelHelpers.extends({}, d, {
                quarantineExtractedText: null
            });
            const p = o("WAWebDBMessageSerialization").dbRowFromMessage(m);
            p.rowId = t.rowId;
            p.internalId = t.internalId;
            yield o("WAWebSchemaMessage").getMessageTable().createOrReplace(p);
            yield o("WAWebQuarantineDataStore").deleteQuarantineData(e.toString());
            yield o("WAWebBackendApi").frontendSendAndReceive("updateMessageUI", {
                chatId: e.remote,
                msg: m
            });
            yield o("WAWebDBProcessOrphansForNewMsg").processOrphansForNewMsg(m);
            return true;
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield y(e);
            const t = yield b(e);
            const n = e.id.toString();
            yield o("WAWebDBMessageDelete").removeMessagesFromHistory([
                n
            ], {
                deleteAssociatedMsgs: false,
                preserveQuarantineData: !t
            });
            yield o("WAWebBackendApi").frontendSendAndReceive("chatDeleteMessages", {
                chatId: e.id.remote.toString(),
                messageIds: [
                    n
                ]
            });
            return t;
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.id.toString();
            const n = o("WAWebSchemaMessageOrphans").getMessageOrphanTable();
            if ((yield n.get(t)) == null) {
                const a = e.protocolMessageKey;
                if (a != null) {
                    const l = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([
                        a
                    ]);
                    const s = l.get(a.toString());
                    if (s?.latestEditMsgKey?.equals(e.id) === true) {
                        return;
                    }
                }
                const u = yield o("WAWebDBProcessEditProtocolMsgs").processEditProtocolMsgsWithOutcomes([
                    e
                ]);
                const c = u.processedProtocolMsgs;
                if (!(c.length > 0)) {
                    throw r("err")("unquarantineMessageJob: Edit was not applied or stored");
                }
            }
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if ((yield o("WAWebSchemaMessageOrphans").getMessageOrphanTable().get(e.id.toString())) == null) {
                return true;
            }
            const e_protocolMessageKey = e.protocolMessageKey;
            if (e_protocolMessageKey == null) {
                return false;
            }
            const n = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([
                e_protocolMessageKey
            ]);
            const r = n.get(e_protocolMessageKey.toString());
            if (r == null || r.type === o("WAWebMsgType").MSG_TYPE.QUARANTINED || r.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
                return false;
            }
            yield o("WAWebDBProcessOrphansForNewMsg").processOrphansForNewMsg(r);
            return (yield o("WAWebSchemaMessageOrphans").getMessageOrphanTable().get(e.id.toString())) == null;
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return r("justknobx")._("572") && R(e);
    }
    function R(e) {
        let t = e;
        for(let n = 0; n <= o("WAWebQuarantineActionUtils").MESSAGE_MAX_INSPECTION_DEPTH; n++){
            if (t == null) {
                return false;
            }
            if (t.protocolMessage?.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT) {
                return true;
            }
            t = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(t)?.message;
        }
        return false;
    }
    function L(e) {
        return {
            id: e.id,
            from: e.from,
            to: e.to,
            author: e.author,
            broadcastId: e.broadcastId,
            type: e.type,
            viewMode: e.viewMode,
            subtype: e.subtype,
            count: e.count,
            notifyName: e.notifyName,
            ack: e.ack,
            t: e.t,
            clientReceivedTsMillis: e.clientReceivedTsMillis,
            invis: e.invis,
            local: e.local,
            hostedBizEncStateMismatch: e.hostedBizEncStateMismatch,
            placeholderCreatedWhenAccountIsHosted: e.placeholderCreatedWhenAccountIsHosted,
            senderOrRecipientAccountTypeHosted: e.senderOrRecipientAccountTypeHosted,
            limitSharing: e.limitSharing,
            acp2Setting: e.acp2Setting,
            mmSignalSharing: e.mmSignalSharing
        };
    }
    l.unquarantineMessageJob = c;
}, 98);