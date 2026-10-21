__d("WAWebSendMsgCommonApi", [
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebAck",
    "WAWebAddonRetryRequestUtils",
    "WAWebDeviceListPk",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebReactionsBEUtils",
    "WAWebSchemaMessage",
    "WAWebSendMsgTypes",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 5;
    function d() {
        return (o("WAWebABProps").getABPropConfigValue("web_e2e_backfill_expire_time") || c) * 60;
    }
    function m(e) {
        const t = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, e);
        o("WAWebSignalCommonUtils").writeRandomPadMax16(t);
        return t.readByteArrayView();
    }
    function p(e) {
        return e.protocolMessage != null && e.protocolMessage.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE;
    }
    function _(e) {
        const s = e.protocolMessage?.type ?? e.editedMessage?.message?.protocolMessage?.type;
        return s === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT || e.secretEncryptedMessage?.secretEncType === o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.EVENT_EDIT || e.secretEncryptedMessage?.secretEncType === o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT || e.secretEncryptedMessage?.secretEncType === o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.POLL_EDIT;
    }
    function f(e) {
        return e.keepInChatMessage != null && e.keepInChatMessage.key != null && e.keepInChatMessage.key.fromMe === true && e.keepInChatMessage.keepType === o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL;
    }
    function g(e, t) {
        const r = o("WAWebVerifyProtobufMsgObjectKeys").getProtobufMessageTypesSet(e);
        const a = o("WAWebVerifyProtobufMsgObjectKeys").getUnwrappedProtobufMessage(e) ?? e;
        if (r.has(o("WAWebMsgType").MSG_TYPE.PROTOCOL)) {
            const l = a.protocolMessage?.type;
            if (l === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE) {
                if (t === "admin_revoke") {
                    return o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE;
                }
                return o("WAWebAck").EDIT_ATTR.SENDER_REVOKE;
            }
            if (l === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT) {
                return o("WAWebAck").EDIT_ATTR.MESSAGE_EDIT;
            }
            if (l === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_UNSCHEDULE) {
                return o("WAWebAck").EDIT_ATTR.SENDER_REVOKE;
            }
        } else {
            if (r.has(o("WAWebMsgType").MSG_TYPE.EVENT_EDIT_ENCRYPTED) || r.has(o("WAWebMsgType").MSG_TYPE.MESSAGE_EDIT_ENCRYPTED) || r.has(o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED)) {
                return o("WAWebAck").EDIT_ATTR.MESSAGE_EDIT;
            }
            if (r.has(o("WAWebMsgType").MSG_TYPE.REACTION)) {
                if (a.reactionMessage?.text === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
                    return o("WAWebAck").EDIT_ATTR.SENDER_REVOKE;
                }
            } else if (r.has(o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT)) {
                if (f(a)) {
                    return o("WAWebAck").EDIT_ATTR.SENDER_REVOKE;
                }
            } else if (r.has(o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE)) {
                return o("WAWebAck").EDIT_ATTR.PIN_IN_CHAT;
            }
        }
        return null;
    }
    function h(e, t) {
        const n = g(e, t);
        if (n != null) {
            return o("WAWap").CUSTOM_STRING(String(n));
        }
        return o("WAWap").DROP_ATTR;
    }
    const y = new (r("WADeprecatedWapParser"))("sendMsgAckSyncParser", function(e) {
        e.assertTag("ack");
        return {
            t: e.attrTime("t"),
            sync: e.maybeAttrString("sync"),
            phash: e.maybeAttrString("phash"),
            refreshLid: e.hasAttr("refresh_lid") ? e.attrString("refresh_lid") === "true" : false,
            addressingMode: e.maybeAttrString("addressing_mode"),
            count: e.maybeAttrInt("count"),
            error: e.maybeAttrInt("error")
        };
    });
    function C(e) {
        return e.device == null || e.device === o("WAJids").DEFAULT_DEVICE_ID;
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.data.id;
            if (e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Addon) {
                const r = yield o("WAWebAddonRetryRequestUtils").hasSentAddonMsg(n);
                if (r != null) {
                    return o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().updateIdentityRangeAfterEncryption("sentAddonRowId", r.rowId, t.map((e)=>o("WAWebSignalCommonUtils").createSignalAddress(e).toString()));
                }
            } else if (e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message) {
                const a = yield o("WAWebSchemaMessage").getMessageTable().get(String(n), false);
                const i = a?.rowId;
                if (i != null) {
                    return o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().updateIdentityRangeAfterEncryption("rowId", i, t.map((e)=>o("WAWebSignalCommonUtils").createSignalAddress(e).toString()));
                }
            }
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = t.data.id;
            if (t.type === o("WAWebSendMsgTypes").SendMessageRecordType.Addon) {
                const r = yield o("WAWebAddonRetryRequestUtils").hasSentAddonMsg(n);
                if (!r) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "filterDeviceWithChangedIdentity: addon not found: ",
                        ""
                    ])), n);
                }
                return r?.rowId;
            } else if (t.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message) {
                const a = yield o("WAWebSchemaMessage").getMessageTable().get(String(n), false);
                if (!a) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "filterDeviceWithChangedIdentity: message not found: ",
                        ""
                    ])), n);
                }
                return a?.rowId;
            }
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield S(e);
            if (n == null) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[filterDeviceWithChangedIdentity] no rowId msg=",
                    " type=",
                    ""
                ])), e.data.id, e.data.type);
                throw r("err")("filterDeviceWithChangedIdentity: cannot determine message rowId");
            }
            const a = new Map;
            t.forEach((e)=>{
                a.set(o("WAWebDeviceListPk").createDeviceListPK(e), e);
            });
            const i = Array.from(a.values(), function(e) {
                return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(e.user, e.server, o("WAJids").DEFAULT_DEVICE_ID);
            });
            const l = yield o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().bulkGetIdentityWithRowId(i.map((e)=>o("WAWebSignalCommonUtils").createSignalAddress(e)));
            const s = new Set;
            l.forEach((t, r)=>{
                const a = e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Addon ? t?.sentAddonRowId : t?.rowId;
                const l = i[r];
                if (a == null || a > n) {
                    s.add(o("WAWebDeviceListPk").createDeviceListPK(l));
                }
            });
            return t.filter((e)=>!s.has(o("WAWebDeviceListPk").createDeviceListPK(e)));
        });
        return E.apply(this, arguments);
    }
    l.getResendTimeoutInSeconds = d;
    l.encodeAndPad = m;
    l.isRevokeMsg = p;
    l.isEditMsg = _;
    l.getEditAttrValue = g;
    l.editAttribute = h;
    l.sendMsgAckSyncParser = y;
    l.isPrimaryDevice = C;
    l.updateIdentityRange = b;
    l.filterDeviceWithChangedIdentity = L;
}, 98);