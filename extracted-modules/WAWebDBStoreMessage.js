__d("WAWebDBStoreMessage", [
    "Promise",
    "WAJids",
    "WALogger",
    "WAPromiseMap",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebAck",
    "WAWebAfterReadUtils",
    "WAWebBackendApi",
    "WAWebBizBroadcastProHiddenChatClassifier",
    "WAWebBizBroadcastProHiddenChatStorage",
    "WAWebChatViewMode.flow",
    "WAWebCommonMsgUtils",
    "WAWebDBExperienceIdStore",
    "WAWebDBGroupHistoryPreProcessor",
    "WAWebDBMessageRangeIndex",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebDBStoreMessageAssociations",
    "WAWebGroupAgentRichResponseLinkIndex",
    "WAWebLinkify",
    "WAWebModelStorageUtils",
    "WAWebMsgDataUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterDBUtils",
    "WAWebQuarantineDataStore",
    "WAWebSchemaFtsIndexingQueue",
    "WAWebSyncGatingUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = [
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        o("WAWebMsgType").MSG_TYPE.VIDEO,
        o("WAWebMsgType").MSG_TYPE.AUDIO
    ];
    const p = 1000000000;
    function _(e) {
        return e.some((e)=>e.type !== o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE);
    }
    function f(t, a, i = false) {
        const l = a ?? t[0].id.remote;
        const s = o("WAWebDBMessageUtils").beginningOfChat(l);
        const u = o("WAWebDBMessageUtils").endOfChat(l);
        const c = S(`storeMessageInTransaction: ${t.length} message(s), chat ${l?.toString() || "-"}`);
        const m = o("WAWebQuarantineDataStore").extractQuarantineDataFromMessages(t);
        const f = [
            "chat",
            "message",
            "message-association"
        ];
        const y = m.length > 0 ? [].concat(f, [
            "quarantine-data"
        ]) : f;
        if (o("WAWebDBExperienceIdStore").shouldLockExperienceIdTable(t)) {
            y.push("experience-id");
        }
        return o("WAWebModelStorageUtils").getStorage().lock(y, (()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*([a, f, y, C]) {
                c.addStage("got table lock");
                const b = yield a.get(l.toString());
                c.addStage("got chat");
                let chatViewMode;
                if (!l.isStatus() && (b != null || _(t))) {
                    const R = g(b, t, l, i);
                    chatViewMode = R.chatViewMode;
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "storeMessageInTransaction: createOrMerge ",
                        ". chat exists: ",
                        ""
                    ])), l.toLogString(), b != null);
                    yield a.createOrMerge(l.toString(), R);
                }
                c.addStage("got messages meta");
                const L = f.all({
                    reverse: !i,
                    limit: 1,
                    index: [
                        "rowId"
                    ],
                    returnKeyType: "keys"
                }).then((e)=>{
                    c.addStage("got boundary row id");
                    if (e.length === 0) {
                        return p;
                    }
                    return e[0];
                });
                const E = f.between([
                    "internalId"
                ], s, u, {
                    limit: 1,
                    reverse: !i,
                    returnKeyType: "keys"
                }).then((e)=>{
                    c.addStage("got chat msg boundary id");
                    if (e.length === 0) {
                        return p;
                    }
                    return o("WAWebDBMessageUtils").getInChatMsgId(e[0]);
                });
                const k = yield (d || (d = n("Promise"))).all([
                    L,
                    E
                ]);
                const I = k[0];
                const T = k[1];
                c.addStage("got boundaries");
                const D = i ? I - t.length : I + 1;
                const x = i ? T - t.length : T + 1;
                const $ = yield o("WAPromiseMap").promiseMap(t, (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                        const r = o("WAWebDBMessageSerialization").dbRowFromMessage(e);
                        const a = !i && h(e.id, e);
                        return v({
                            msg: r,
                            chatId: l.toString(),
                            hasLink: o("WAWebLinkify").hasHttpLink(e),
                            rowId: D + t,
                            inChatMsgId: o("WAWebMsgGetters").getIsNewsletterMsg(e) ? e.serverId ?? (yield o("WAWebNewsletterDBUtils").getTemporaryServerId(l, o("WAWebDBMessageUtils").getPrefixForInternalId({
                                isGroupStatus: e.isGroupStatus,
                                isNewsletterStatus: e.isNewsletterStatus
                            }))) : x + t + o("WAWebDBGroupHistoryPreProcessor").getBumpIdCountForGroupJoin(e),
                            pendingReadReceipt: a
                        });
                    });
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                })());
                c.addStage("messages ready for storing in db");
                yield f.bulkCreate($);
                yield o("WAWebDBStoreMessageAssociations").bulkStoreMessageAssociations($);
                yield o("WAWebQuarantineDataStore").bulkCreateOrReplaceQuarantineData(m, C);
                yield o("WAWebDBExperienceIdStore").recordReceivedExperienceIds($);
                return {
                    chatViewMode,
                    msgs: $
                };
            });
            return function(e) {
                return r.apply(this, arguments);
            };
        })()).then(({ chatViewMode, msgs })=>{
            c.done();
            if (chatViewMode != null) {
                o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
                    updates: [
                        {
                            id: l,
                            chatViewMode
                        }
                    ]
                });
            }
            r("WAWeb-dexie").ignoreTransaction(function() {
                return o("WAWebSchemaFtsIndexingQueue").getFtsIndexingQueueTable().bulkCreateOrReplace(msgs.map((e)=>({
                        id: String(e.rowId)
                    })));
            });
        });
    }
    function g(e, t, n, r) {
        const a = new Set;
        const i = y(e, t, n, a);
        if (r || !o("WAWebBizBroadcastProHiddenChatClassifier").isBizBroadcastProHiddenChatsEnabled()) {
            if (e?.chatViewMode === o("WAWebChatViewMode.flow").ChatViewModeType.ONLY_MARKETING_FROM_SELF) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[BBProHiddenChat] getChatUpdate: skipped hidden state for ",
                    ", isHistorySync: ",
                    ""
                ])), n.toLogString(), String(r));
            }
            return i;
        }
        return o("WAWebBizBroadcastProHiddenChatStorage").applyBizBroadcastProHiddenChatState(e, i, t, n, a);
    }
    function h(e, t) {
        if (e.fromMe || e.remote.isStatus()) {
            return false;
        }
        const n = o("WAWebMsgDataUtils").eventTypeFromMsgType(t);
        return n === o("WAWebCommonMsgUtils").EventType.AMBIENT || n === o("WAWebCommonMsgUtils").EventType.DEFAULT;
    }
    function y(e, t, n, r) {
        let l;
        let s = Math.max(0, e?.unreadCount ?? 0);
        const u = e?.unreadMentionsOfMe ?? [];
        t.forEach((e)=>{
            const t = o("WAWebMsgDataUtils").eventTypeFromMsgType(e);
            if (t !== o("WAWebCommonMsgUtils").EventType.IGNORE) {
                const n = e.t;
                if (n != null) {
                    r.add(e.id.toString());
                    if (l == null || n > l) {
                        l = n;
                    }
                }
                if ((t === o("WAWebCommonMsgUtils").EventType.AMBIENT || t === o("WAWebCommonMsgUtils").EventType.DEFAULT) && !e.id.fromMe && e.read !== true) {
                    s += 1;
                }
                const a = h(e.id, e);
                if (a && o("WAWebMsgGetters").getIsImportantMessage(e)) {
                    const i = {
                        id: e.id.toString(),
                        timestamp: e.t
                    };
                    u.push(i);
                }
            }
        });
        if (e && e.t != null && (l == null || e.t > l)) {
            l = e.t;
        }
        return {
            id: n.toString(),
            unreadCount: s,
            t: l,
            unreadMentionsOfMe: u
        };
    }
    function C(e, t) {
        let n = 0;
        switch(e){
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                {
                    n |= o("WAWebMsgType").MESSAGE_TYPE_FLAGS.DOC_MSG;
                    break;
                }
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
                {
                    n |= o("WAWebMsgType").MESSAGE_TYPE_FLAGS.MEDIA_MSG;
                    break;
                }
            default:
                break;
        }
        if (t) {
            n |= o("WAWebMsgType").MESSAGE_TYPE_FLAGS.HAS_LINK;
        }
        if (n === 0) {
            return undefined;
        }
        return n;
    }
    function b(msg) {
        const e_afterReadDuration = msg.afterReadDuration;
        if (e_afterReadDuration == null || e_afterReadDuration <= 0 || msg.expiredTimestamp != null || !o("WAWebAfterReadUtils").isAfterReadEnabled()) {
            return o("WAWebMsgGetters").getEphemeralExpirationTimestamp(msg) ?? undefined;
        }
        const l = msg.t ?? o("WATimeUtils").unixTime();
        const s = r("WAWebMsgKey").fromString(msg.id);
        const u = msg.scheduledTimestampS != null;
        const c = msg.ack != null && msg.ack >= o("WAWebAck").ACK.READ;
        if (s.fromMe || c) {
            return (u ? o("WATimeUtils").unixTime() : l) + e_afterReadDuration;
        }
        return o("WAWebMsgGetters").getEphemeralExpirationTimestamp(msg) ?? undefined;
    }
    function v({ chatId, hasLink, inChatMsgId, msg, pendingReadReceipt, rowId }) {
        const c = m.includes(msg.type);
        const d = o("WAWebSyncGatingUtils").shouldPopulateStarMessageWithTimestamp() ? msg.t : rowId;
        const p = msg.type === "chat" && hasLink;
        const _ = p || o("WAWebGroupAgentRichResponseLinkIndex").shouldIndexGroupAgentRichResponseLink(msg, chatId);
        const f = babelHelpers.extends({}, msg, {
            vcardWAids: msg.vcardWAids || o("WAWebDBMessageUtils").getVcardWids(msg),
            id: msg.id.toString(),
            isStarred: msg.star ? d : undefined,
            hasLink: _ ? rowId : undefined,
            isMediaMsg: c ? rowId : undefined,
            isDocMsg: msg.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ? rowId : undefined,
            isCallLogMsg: msg.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? msg.t : undefined,
            isCarouselMsg: msg.carouselCardsParsed != null ? rowId : undefined,
            isEventMsg: msg.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION ? rowId : undefined,
            expiredTimestamp: b(msg)
        });
        const g = chatId != null && !r("WAWebWid").isStatus(chatId) && !r("WAWebWid").isNewsletter(chatId) && msg.isGroupStatus !== true;
        if (g) {
            const h = C(msg.type, p);
            if (h != null) {
                f.typeFlag = h;
            }
        }
        if (rowId != null) {
            f.rowId = rowId;
        }
        if (inChatMsgId != null) {
            const y = o("WAWebDBMessageUtils").getPrefixForInternalId(msg);
            f.internalId = o("WAWebDBMessageUtils").craftInternalId({
                chatId,
                inChatMsgId,
                internalIdPrefix: y
            });
        }
        if (inChatMsgId != null && msg.threadIds != null) {
            f.internalThreadIDs = msg.threadIds.map((e)=>o("WAWebDBMessageUtils").craftInternalThreadId(inChatMsgId, e));
        }
        if (pendingReadReceipt && chatId !== o("WAJids").STATUS_JID) {
            f.pendingReadReceipt = o("WAWebDBMsgUtils").PendingReadReceiptType.Message;
        }
        let msg_c2sTimestamp = msg.c2sTimestamp;
        if (msg.id.fromMe) {
            msg_c2sTimestamp = msg.c2sTimestamp ?? msg.t;
        } else {
            msg_c2sTimestamp = msg.t;
        }
        try {
            if (msg.type !== o("WAWebMsgType").MSG_TYPE.REACTION) {
                f.messageRangeIndex = o("WAWebDBMessageRangeIndex").craftMessageRangeIndex(chatId, !r("WAWebMsgKey").fromString(msg.id).fromMe, o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(msg.type), msg_c2sTimestamp);
            }
        } catch (error) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[process-msg] craftMessageRangeIndex failed with error ",
                ""
            ])), error);
        }
        return f;
    }
    function S(e) {
        const t = 5000;
        const n = Date.now();
        const r = [];
        return {
            addStage: function(t) {
                r.push([
                    t,
                    Date.now() - n
                ]);
            },
            done: function() {
                if (Date.now() - n > t) {
                    for (const a of r)var i = a[0], l = a[1];
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": completed in ",
                        "ms"
                    ])), e, Date.now() - n);
                }
            }
        };
    }
    l.storeMessageInTransaction = f;
    l.isPendingUnreadReceipt = h;
    l.getMsgFlagType = C;
    l.addMsgMetadataToMsgRow = v;
}, 98);