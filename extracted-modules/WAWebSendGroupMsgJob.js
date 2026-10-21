__d("WAWebSendGroupMsgJob", [
    "WALogger",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebApiParticipantStore",
    "WAWebDBDeviceListFanout",
    "WAWebGroupHistorySendGroupMsgJobUtils",
    "WAWebGroupMsgSendUtils",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebSchemaMessageInfo",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = Object.freeze({
        SKMSG: "skmsg",
        DIRECT: "direct"
    });
    function d(e) {
        return e.isLid();
    }
    function m(e) {
        return !e.isLid();
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ editedMsgKey, groupId, isAdmin, isLidAddressingMode, keptMessageKey, msgRecord, participantRecord, revokeMsgKey }) {
            const p = yield o("WAWebApiParticipantStore").getGroupSenderKeyListFromParticipantRecord(groupId, participantRecord);
            const { skDistribList, skList } = p;
            const h = isLidAddressingMode || f(msgRecord, isAdmin);
            const C = h ? d : m;
            const v = {
                type: c.SKMSG,
                senderKeyList: {
                    skList: skList.filter(C),
                    skDistribList: skDistribList.filter(C),
                    rotateKey: false
                }
            };
            if (o("WAWebMsgGetters").getSubtype(msgRecord.data) === "sender_revoke") {
                const forceDirectMessage = !isAdmin && o("WAWebABProps").getABPropConfigValue("send_cag_member_revokes_as_GDM");
                const L = revokeMsgKey == null ? null : yield y(revokeMsgKey, v.senderKeyList, {
                    forceDirectMessage,
                    normalizeAddressingModeFn: function(t) {
                        return t;
                    }
                });
                return L ?? v;
            }
            if (o("WAWebMsgGetters").getType(msgRecord.data) === "keep_in_chat") {
                const E = !isAdmin;
                const k = keptMessageKey == null ? null : yield b(keptMessageKey, v.senderKeyList, E);
                return k ?? v;
            }
            if (editedMsgKey) {
                return S(editedMsgKey, v.senderKeyList, {
                    normalizeAddressingModeFn: function(t) {
                        return t;
                    }
                });
            }
            return v;
        });
        return _.apply(this, arguments);
    }
    function f(msgRecord, isAdmin) {
        const e_data = msgRecord.data;
        const { keepType, subtype, type } = e_data;
        if (keepType === o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL) {
            return false;
        }
        switch(type){
            case "reaction_enc":
            case "comment":
            case "event_response":
                return true;
            case "poll_update":
                if (subtype === "poll_vote") {
                    return true;
                }
                break;
            case "protocol":
                {
                    if (msgRecord.type === "addon" && msgRecord.data.kind === o("WAWebMsgType").MsgKind.ProtocolAddonRevoke) {
                        return true;
                    }
                    if (subtype === "sender_revoke") {
                        return false;
                    }
                    break;
                }
            case "notification":
            case "status_notification":
            case "notification_template":
            case "gp2":
            case "broadcast_notification":
            case "e2e_notification":
            case "call_log":
            case "chat":
            case "location":
            case "payment":
            case "vcard":
            case "ciphertext":
            case "debug_placeholder":
            case "multi_vcard":
            case "revoked":
            case "oversized":
            case "groups_v4_invite":
            case "hsm":
            case "template_button_reply":
            case "debug":
            case "image":
            case "loading_media":
            case "video":
            case "ptv":
            case "audio":
            case "ptt":
            case "sticker":
            case "status":
            case "document":
            case "product":
            case "order":
            case "list":
            case "interactive":
            case "interactive_response":
            case "list_response":
            case "buttons_response":
            case "reaction":
            case "poll_creation":
            case "poll_result_snapshot":
            case "request_phone_number":
            case "native_flow":
            case "biz-cover-photo":
            case "keep_in_chat":
            case "pin_message":
            case "pinned_message":
            case "unknown":
            case "newsletter_notification":
            case "history_bundle":
            case "newsletter_admin_invite":
            case "event_creation":
            case "sharable_event_invite":
            case "event_edit_encrypted":
            case "poll_edit_encrypted":
            case "poll_add_option_encrypted":
            case "biz_content_placeholder":
            case "album":
            case "sticker-pack":
            case "rich_response":
            case "automated_greeting_message":
            case "newsletter_question_response":
            case "guest_upsell_system_msg":
            case "newsletter_follower_invite":
            case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
            case "message_history_notice":
            case "quarantined":
            case "message_edit_encrypted":
            case "poll_add_option_decrypted":
            case "music":
                break;
            default:
                throw r("err")(`CAG - Invalid type: ${type}`);
        }
        if (isAdmin) {
            return false;
        }
        throw r("err")("CAG - non-admin trying to send a regular message");
    }
    function g(e, t, n, r, o, a) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, isLidAddressingMode, i) {
            const senderKeyList = yield o("WAWebApiParticipantStore").getGroupSenderKeyListFromParticipantRecord(e, t);
            const s = {
                senderKeyList,
                type: c.SKMSG
            };
            const u = function(t) {
                return t.map(o("WAWebLidMigrationUtils").toAddressingModeFactory(isLidAddressingMode));
            };
            if (n) {
                const d = yield y(n, senderKeyList, {
                    forceDirectMessage: false,
                    normalizeAddressingModeFn: u
                });
                return d ?? s;
            }
            if (r) {
                return S(r, senderKeyList, {
                    normalizeAddressingModeFn: u
                });
            }
            if (i != null && i.length > 0) {
                return o("WAWebGroupHistorySendGroupMsgJobUtils").getGroupSendListForGroupHistoryBundle(i.map(o("WAWebWidFactory").createWid), senderKeyList, {
                    normalizeAddressingModeFn: u,
                    isLidAddressingMode
                });
            }
            return s;
        });
        return h.apply(this, arguments);
    }
    function y(e, t, n) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = yield o("WAWebSchemaMessageInfo").getMessageInfoTable().equals([
                "msgKey"
            ], String(e));
            const a = Array.from(new Map(r.map((e)=>o("WAWebWidFactory").createWid(e.receiverUserJid)).map((e)=>[
                    String(e),
                    e
                ])).values());
            if (a.length === 0) {
                return null;
            }
            const { skDistribList, skList } = t;
            const s = new Set([].concat(skDistribList, skList).map(o("WAWebWidFactory").asUserWidOrThrow).map(String));
            const u = a.filter((e)=>{
                const t = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(e));
                return !s.has(String(e)) && !(t != null && s.has(String(t)));
            });
            const d = n.normalizeAddressingModeFn(u.filter((e)=>!e.isFbidBot())).filter(Boolean);
            if (n.forceDirectMessage === false && d.length === 0) {
                return null;
            }
            const m = yield o("WAWebDBDeviceListFanout").getFanOutList({
                wids: d
            });
            return {
                type: c.DIRECT,
                deviceList: [].concat(m, skList, skDistribList)
            };
        });
        return C.apply(this, arguments);
    }
    function b(e, t, n) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = yield o("WAWebSchemaMessageInfo").getMessageInfoTable().equals([
                "msgKey"
            ], String(e));
            if (r.length === 0) {
                return null;
            }
            const { skDistribList, skList } = t;
            const l = new Set(skDistribList.concat(skList).map((e)=>String(o("WAWebWidFactory").asUserWidOrThrow(e))));
            const s = r.filter((e)=>!l.has(e.receiverUserJid)).map((e)=>o("WAWebWidFactory").createWid(e.receiverUserJid));
            if (s.length === 0 && n !== true) {
                return null;
            }
            const u = yield o("WAWebDBDeviceListFanout").getFanOutList({
                wids: s
            });
            const deviceList = [].concat(u, skList, skDistribList);
            return {
                type: c.DIRECT,
                deviceList
            };
        });
        return v.apply(this, arguments);
    }
    function S(e, t, n) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, senderKeyList, n) {
            return {
                type: c.SKMSG,
                senderKeyList
            };
        });
        return R.apply(this, arguments);
    }
    function L(t, n) {
        const r = n.isLidAddressingMode === true ? d : m;
        e: {
            const a = t;
            if ((typeof a === "object" && a !== null || typeof a === "function") && a.type === "direct" && "deviceList" in a) {
                const i = a.deviceList;
                const l = i.filter(r);
                if (l.length < i.length) {
                    const c = o("WAWebGroupMsgSendUtils").formatWidTypeCountsForLog(i);
                    const p = o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(n);
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " found in ",
                        " group groupSendingList.deviceList"
                    ])), c, p).sendLogs("GroupLidInfra/outgoing_message");
                }
                return {
                    type: "direct",
                    deviceList: l
                };
            }
            if ((typeof a === "object" && a !== null || typeof a === "function") && a.type === "skmsg" && "senderKeyList" in a) {
                const _ = a.senderKeyList;
                const { skDistribList, skList } = _;
                const skDistribList_1 = skDistribList.filter(r);
                if (skDistribList_1.length < skDistribList.length) {
                    const y = o("WAWebGroupMsgSendUtils").formatWidTypeCountsForLog(skDistribList);
                    const C = o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(n);
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " in ",
                        " group skDistribList"
                    ])), y, C).sendLogs("GroupLidInfra/outgoing_message");
                }
                const skList_1 = skList.filter(r);
                if (skList_1.length < skList.length) {
                    const v = o("WAWebGroupMsgSendUtils").formatWidTypeCountsForLog(skList);
                    const S = o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(n);
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " found in ",
                        " group groupSendingList.senderKeyList.skList"
                    ])), v, S).sendLogs("GroupLidInfra/outgoing_message");
                }
                return {
                    type: "skmsg",
                    senderKeyList: babelHelpers.extends({}, _, {
                        skDistribList: skDistribList_1,
                        skList: skList_1
                    })
                };
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${a}`);
        }
    }
    l.GROUP_MSG_TYPE = c;
    l.getCagMessageSendList = p;
    l.getMessageSendList = g;
    l.getGroupSendListForRevoke = y;
    l.filterIncorrectlyAddressedDevices = L;
}, 98);