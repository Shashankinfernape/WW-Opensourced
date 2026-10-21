__d("WAWebDBMessageSerialization", [
    "invariant",
    "WAJids",
    "WAWebApiHydrateWidsUtil",
    "WAWebDBMessageUtils",
    "WAWebDBMsgOpaqueDataKeys",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebMusicGatingUtils",
    "WAWebPollCreationUtils",
    "WAWebPollsDbUtils",
    "WAWebProtobufsMdStorageMsgRowOpaqueData.pb",
    "WAWebStatusGatingUtils",
    "WAWebViewMode.flow",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "decodeProtobuf",
    "encodeProtobuf",
    "gkx",
    "isArrayNullOrEmpty"
], function(t, n, r, o, a, i, l, s) {
    const e = 1000000000;
    const u = new Set(Object.values(o("WAWebMsgType").MSG_TYPE));
    const c = [
        "id",
        "parentMsgId",
        "protocolMessageKey",
        "paymentRequestMessageKey",
        "keptMessageKey",
        "pollUpdateParentKey",
        "kicKey",
        "latestEditMsgKey",
        "targetMessageKey",
        "pinParentKey",
        "reactionParentKey",
        "parentMsgKey",
        "groupHistoryBundleMessageKey"
    ];
    function d(t, n) {
        let a;
        let l;
        const g = babelHelpers.extends({}, t);
        if (t.quotedMsg) {
            g.quotedMsg = babelHelpers.extends({}, t.quotedMsg);
        }
        if ((a = t.quotedMsg) != null && a.paymentNoteMsg) {
            g.quotedMsg.paymentNoteMsg = babelHelpers.extends({}, t.quotedMsg.paymentNoteMsg);
        }
        if (t.paymentNoteMsg) {
            g.paymentNoteMsg = babelHelpers.extends({}, t.paymentNoteMsg);
        }
        if (t.groupMentions) {
            g.groupMentions = t.groupMentions.map((e)=>({
                    groupSubject: e.groupSubject,
                    groupJid: o("WAWebWidFactory").createWidFromWidLike(e.groupJid)
                }));
        }
        g.star = g.isStarred !== undefined;
        g.isMdHistoryMsg = g.rowId < e;
        if (g.internalId != null && (g.to?.server === "newsletter" || (l = g.from) != null && l.endsWith("@newsletter"))) {
            g.serverId = o("WAWebDBMessageUtils").getInChatMsgId(g.internalId);
        }
        if (!r("isArrayNullOrEmpty")(g.internalThreadIDs)) {
            g.threadIds = g.internalThreadIDs.map((e)=>o("WAWebDBMessageUtils").getThreadIdFromInternalThreadId(e));
        }
        delete g.internalId;
        delete g.isStarred;
        delete g.count;
        delete g.hasLink;
        delete g.isMediaMsg;
        delete g.isDocMsg;
        delete g.isCallLogMsg;
        delete g.isCarouselMsg;
        delete g.isEventMsg;
        delete g.typeFlag;
        delete g.pendingReadReceipt;
        f(g);
        if (r("gkx")("22769")) {
            delete g.msgRowOpaqueData;
        }
        o("WAWebApiHydrateWidsUtil").hydrateWids(g);
        c.forEach((e)=>{
            if (g[e] != null) {
                g[e] = r("WAWebMsgKey").from(g[e]);
            }
        });
        if (g.quotedMsg?.id != null) {
            g.quotedMsg.id = r("WAWebMsgKey").from(g.quotedMsg.id);
        }
        if (g.groupHistoryIndividualMessageInfo?.bundleMessageKey != null) {
            g.groupHistoryIndividualMessageInfo.bundleMessageKey = r("WAWebMsgKey").from(g.groupHistoryIndividualMessageInfo.bundleMessageKey);
        }
        if (g.groupHistoryBundleMetadata != null && g.groupHistoryBundleMetadata.oldestMessageTimestampInWindow == null && g.groupHistoryBundleMetadata.oldestMessageTimestamp != null) {
            g.groupHistoryBundleMetadata = babelHelpers.extends({}, g.groupHistoryBundleMetadata, {
                oldestMessageTimestampInWindow: g.groupHistoryBundleMetadata.oldestMessageTimestamp
            });
            delete g.groupHistoryBundleMetadata.oldestMessageTimestamp;
        }
        if (g.messageSecret != null) {
            g.messageSecret = new Uint8Array(g.messageSecret);
        }
        if (g.botMessageSecret != null) {
            g.botMessageSecret = new Uint8Array(g.botMessageSecret);
        }
        const h = m(g);
        const y = h[0];
        const C = h[1];
        const b = h[2];
        g.futureproofType = y;
        g.futureproofSubtype = C;
        g.subtype = b ?? undefined;
        const v = p(g.type, g.subtype);
        if (v != null) {
            g.type = v.type;
            g.kind = v.kind;
            g.subtype = v.subtype;
            g.futureproofType = v.futureproofType;
            g.futureproofSubtype = v.futureproofSubtype;
        }
        _(g);
        if (g.quotedMsg != null) {
            _(g.quotedMsg);
        }
        g.viewMode = g.viewMode ?? o("WAWebViewMode.flow").ViewModeType.VISIBLE;
        if (g.carouselCardsParsed != null) {
            g.carouselCardsParsed = g.carouselCardsParsed.map((e)=>babelHelpers.extends({}, e, {
                    id: e.id instanceof r("WAWebMsgKey") ? e.id : new (r("WAWebMsgKey"))(e.id),
                    parentMsgId: e.parentMsgId instanceof r("WAWebMsgKey") ? e.parentMsgId : new (r("WAWebMsgKey"))(e.parentMsgId)
                }));
        }
        n?.(g);
        return g;
    }
    function m(e) {
        let e_futureproofSubtype = e.futureproofSubtype;
        let e_futureproofType = e.futureproofType;
        let e_subtype = e.subtype;
        if (e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && e.futureproofType == null && e.subtype != null) {
            switch(e.subtype){
                case "poll_update":
                    {
                        e_futureproofType = o("WAWebMsgType").MSG_TYPE.POLL_UPDATE;
                        e_futureproofSubtype = "poll_vote";
                        break;
                    }
                case "message_edit":
                    {
                        e_futureproofType = o("WAWebMsgType").MSG_TYPE.PROTOCOL;
                        e_futureproofSubtype = "message_edit";
                        break;
                    }
                case "phone":
                case "phone_only_feature":
                    break;
                default:
                    if (!u.has(e.subtype)) {
                        s(0, 67194);
                    }
                    e_futureproofType = e.subtype;
            }
            if (e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && e_futureproofType != null) {
                e_subtype = undefined;
            }
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE && e_subtype == null) {
            e_subtype = "poll_vote";
        }
        return [
            e_futureproofType,
            e_futureproofSubtype,
            e_subtype
        ];
    }
    function p(e, futureproofSubtype) {
        if (e === o("WAWebMsgType").MSG_TYPE.PROTOCOL && (futureproofSubtype === "status_mention_message" || futureproofSubtype === "status_group_mention_message") && !o("WAWebStatusGatingUtils").isStatusMentionMessageEnabled()) {
            return {
                futureproofSubtype,
                futureproofType: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                subtype: undefined,
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN
            };
        }
        return null;
    }
    function _(e) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.MUSIC && !o("WAWebMusicGatingUtils").isMusicOnChatsReceiverEnabled()) {
            e.type = o("WAWebMsgType").MSG_TYPE.UNKNOWN;
            e.kind = o("WAWebMsgType").MsgKind.Unknown;
            e.futureproofType = o("WAWebMsgType").MSG_TYPE.MUSIC;
        }
    }
    function f(e) {
        const t = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb").MsgRowOpaqueDataSpec, e.msgRowOpaqueData);
        const { currentMsg, quotedMsg } = t;
        if (currentMsg) {
            if (currentMsg.paymentNoteMsgBody != null && e.paymentNoteMsg) {
                e.paymentNoteMsg.body = currentMsg.paymentNoteMsgBody;
            }
            o("WAWebDBMsgOpaqueDataKeys").MSG_OPAQUE_DATA_KEYS.forEach((t)=>{
                e[t] = currentMsg[o("WAWebDBMsgOpaqueDataKeys").getKey(e.type, t)];
            });
            e.pollOptions = o("WAWebPollsDbUtils").expandPollOptions(currentMsg.pollOptions);
            e.pollVotesSnapshot = o("WAWebPollsDbUtils").expandPollVotesSnapshot(currentMsg.pollVotesSnapshot);
            if (currentMsg.correctOptionIndex != null) {
                e.correctOptionIndex = currentMsg.correctOptionIndex;
            }
            if (e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION || e.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT) {
                e.pollContentType = o("WAWebPollCreationUtils").getPollContentTypeFromDBValue(currentMsg.pollContentType);
                e.pollType = o("WAWebPollCreationUtils").getPollTypeFromDBValue(currentMsg.pollType);
            }
            const i = currentMsg.originalSelfAuthor;
            if (i != null && r("WAWebWid").isWid(i)) {
                e.originalSelfAuthor = o("WAWebWidFactory").createWid(i);
            }
            if (currentMsg.plainProtobufBytes != null) {
                e.plainProtobufBytes = new Uint8Array(currentMsg.plainProtobufBytes);
            }
        }
        if (e.quotedMsg && quotedMsg) {
            if (quotedMsg.paymentNoteMsgBody != null) {
                e.quotedMsg.paymentNoteMsg.body = quotedMsg.paymentNoteMsgBody;
            }
            o("WAWebDBMsgOpaqueDataKeys").MSG_OPAQUE_DATA_KEYS.forEach((t)=>{
                e.quotedMsg[t] = quotedMsg[o("WAWebDBMsgOpaqueDataKeys").getKey(e.type, t)];
            });
            e.quotedMsg.pollOptions = o("WAWebPollsDbUtils").expandPollOptions(quotedMsg.pollOptions);
        }
    }
    function g(e, t) {
        let n;
        const o = babelHelpers.extends({}, e);
        if (e.quotedMsg) {
            o.quotedMsg = babelHelpers.extends({}, e.quotedMsg);
        }
        if ((n = e.quotedMsg) != null && n.paymentNoteMsg) {
            o.quotedMsg.paymentNoteMsg = babelHelpers.extends({}, e.quotedMsg.paymentNoteMsg);
        }
        if (e.paymentNoteMsg) {
            o.paymentNoteMsg = babelHelpers.extends({}, e.paymentNoteMsg);
        }
        if (e.from) {
            o.from = e.from.toString();
        }
        if (t?.storeReportingInfo === true) {
            o.preMatChat = e.preMatChat;
            o.senderWithDevice = e.senderWithDevice;
        }
        c.forEach((e)=>{
            if (o[e] != null) {
                o[e] = o[e].toString();
            }
        });
        if (o.groupHistoryIndividualMessageInfo?.bundleMessageKey != null) {
            o.groupHistoryIndividualMessageInfo.bundleMessageKey = o.groupHistoryIndividualMessageInfo.bundleMessageKey.toString();
        }
        delete o.notifyName;
        delete o.isNewMsg;
        delete o.clearMedia;
        delete o.multicast;
        delete o.urlNumber;
        delete o.urlText;
        delete o.linkPreview;
        delete o.star;
        delete o.forwardedFromWeb;
        h(o, t);
        return o;
    }
    function h(e, t) {
        let n;
        const a = {
            currentMsg: {},
            quotedMsg: {}
        };
        if ((n = e.paymentNoteMsg) != null && n.body) {
            let i;
            a.currentMsg.paymentNoteMsgBody = e.paymentNoteMsg.body;
            if ((i = e.paymentNoteMsg) != null) {
                delete i.body;
            }
        }
        if (e.quotedMsg?.paymentNoteMsg?.body) {
            a.quotedMsg.paymentNoteMsgBody = e.quotedMsg.paymentNoteMsg.body;
            delete e.quotedMsg.paymentNoteMsg.body;
        }
        if (e.correctOptionIndex != null) {
            a.currentMsg.correctOptionIndex = e.correctOptionIndex;
            delete e.correctOptionIndex;
        }
        o("WAWebDBMsgOpaqueDataKeys").MSG_OPAQUE_DATA_KEYS.forEach((t)=>{
            a.currentMsg[o("WAWebDBMsgOpaqueDataKeys").getKey(e.type, t)] = e[t];
            delete e[t];
        });
        if (e.originalSelfAuthor) {
            a.currentMsg.originalSelfAuthor = o("WAJids").extractUserJid(o("WAWebWidToJid").widToDeviceJid(e.originalSelfAuthor));
            delete e.originalSelfAuthor;
        }
        a.currentMsg.pollContentType = o("WAWebPollCreationUtils").getPollContentTypeAsDBValue(e.pollContentType);
        delete e.pollContentType;
        a.currentMsg.pollType = o("WAWebPollCreationUtils").getPollTypeAsDBValue(e.pollType);
        delete e.pollType;
        a.currentMsg.pollOptions = o("WAWebPollsDbUtils").compressPollOptions(e.pollOptions);
        delete e.pollOptions;
        a.currentMsg.pollVotesSnapshot = o("WAWebPollsDbUtils").compressPollVotesSnapshot(e.pollVotesSnapshot);
        delete e.pollVotesSnapshot;
        if (e.quotedMsg) {
            o("WAWebDBMsgOpaqueDataKeys").MSG_OPAQUE_DATA_KEYS.forEach((t)=>{
                a.quotedMsg[t] = e.quotedMsg[t];
                delete e.quotedMsg[t];
            });
            a.quotedMsg.pollOptions = o("WAWebPollsDbUtils").compressPollOptions(e.quotedMsg.pollOptions);
            delete e.quotedMsg.pollOptions;
        }
        if (t?.storeReportingInfo === true && e.plainProtobufBytes != null) {
            a.currentMsg.plainProtobufBytes = e.plainProtobufBytes;
        }
        delete e.plainProtobufBytes;
        const l = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb").MsgRowOpaqueDataSpec, a);
        e.msgRowOpaqueData = l.readBuffer();
    }
    l.messageFromDbRow = d;
    l.getGatedOffStatusMentionFutureproof = p;
    l.movFieldFromOpaqueDataBackToMsg = f;
    l.dbRowFromMessage = g;
    l.movEncFieldToOpaqueData = h;
}, 98);