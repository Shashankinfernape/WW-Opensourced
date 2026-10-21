__d("WAWebMessageRangeUtils", [
    "$InternalEnum",
    "WALogger",
    "WALongInt",
    "WAWebApiActiveMessageRanges",
    "WAWebDBMessageRange",
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaActiveMessageRanges",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdDb",
    "WAWebSyncdMetrics",
    "WAWebTimestampConversionUtils",
    "WAWebWamEnumMdSyncdCriticalEventCode",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "countWhere",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = n("$InternalEnum").Mirrored([
        "RangeAEnclosesRangeB",
        "RangeBEnclosesRangeA",
        "RangesAreEqual",
        "RangesNotEnclosing"
    ]);
    function m(e, t) {
        const n = new Set(e.messages.map((e)=>e.key?.id));
        for(let r = 0; r < t.messages.length; r++){
            if (t.messages[r].timestamp == null) {
                if (!n.has(t.messages[r].key?.id)) {
                    return false;
                }
            }
        }
        for(let i = 0; i < t.messages.length; i++){
            if (!n.has(t.messages[i].key?.id) && o("WALongInt").numberOrThrowIfTooLarge(e.lastMessageTimestamp ?? 0) <= o("WALongInt").numberOrThrowIfTooLarge(t.messages[i].timestamp ?? 0)) {
                return false;
            }
        }
        return true;
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n;
            let r = yield (n = o("WAWebDBMessageRange")).getLastMessageTimestamp(e);
            n.logMaybeMillisecondTimestamp(r, "getLastMessageTimestamp");
            const a = yield n.getLastSystemMessageTimestamp(e);
            n.logMaybeMillisecondTimestamp(a, "lastSystemMessageTimestamp");
            const i = yield n.getAdditionalMessages(e, r);
            const { messages, newLastMessageTimestamp } = i;
            if (newLastMessageTimestamp != null) {
                r = newLastMessageTimestamp;
                o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(newLastMessageTimestamp, "newLastMessageTimestamp");
            }
            if (r == null) {
                const c = messages.sort(o("WAWebDBMessageRange").timestampComparison);
                const d = c[messages.length - 1]?.timestamp;
                r = d != null ? o("WALongInt").numberOrThrowIfTooLarge(d) : null;
                o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(r, "sorting");
            }
            const m = {
                messages
            };
            if (r != null) {
                m.lastMessageTimestamp = r;
            }
            if (a != null && (r == null || a > o("WALongInt").numberOrThrowIfTooLarge(r))) {
                m.lastSystemMessageTimestamp = a;
                o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(m.lastSystemMessageTimestamp, "lastSystemMessageTimestamp");
            }
            if (t.forOutgoingMutation && m.lastMessageTimestamp == null) {
                const p = yield o("WAWebDBMessageRange").getFirstSystemMessageTimestamp(e);
                if (p != null) {
                    m.lastMessageTimestamp = p;
                    o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(m.lastMessageTimestamp, "firstSystemMessageTimestamp");
                    if (p === a) {
                        m.lastSystemMessageTimestamp = undefined;
                    }
                }
            }
            if (t.forOutgoingMutation && t.mutationIndexJid != null) {
                for (const _ of m.messages){
                    if (_.key?.remoteJid != null) {
                        _.key.remoteJid = t.mutationIndexJid;
                    }
                }
            }
            return m;
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        const n = m(e, t);
        const r = m(t, e);
        if (n && r) {
            return d.RangesAreEqual;
        }
        if (n) {
            return d.RangeAEnclosesRangeB;
        }
        if (r) {
            return d.RangeBEnclosesRangeA;
        }
        return d.RangesNotEnclosing;
    }
    function g(messages, t, n) {
        const r = new Map;
        const a = messages.concat(t);
        a.forEach((e)=>{
            const l = e.key?.id ?? "";
            if (o("WALongInt").numberOrThrowIfTooLarge(e.timestamp ?? 0) >= n) {
                const s = r.get(l);
                if (s) {
                    r.set(l, o("WALongInt").numberOrThrowIfTooLarge(s.timestamp ?? 0) < o("WALongInt").numberOrThrowIfTooLarge(e.timestamp ?? 0) ? e : s);
                } else {
                    r.set(l, e);
                }
            }
        });
        return Array.from(r.values());
    }
    function h(e, t) {
        const a = o("WALongInt").numberOrThrowIfTooLarge(e.lastMessageTimestamp ?? 0);
        const i = o("WALongInt").numberOrThrowIfTooLarge(t.lastMessageTimestamp ?? 0);
        const l = Math.max(a, i);
        const s = g(e.messages, t.messages, l);
        const u = {
            messages: s
        };
        if (l !== 0) {
            u.lastMessageTimestamp = l;
        }
        if (e.lastSystemMessageTimestamp != null || t.lastSystemMessageTimestamp != null) {
            const m = Math.max(o("WALongInt").numberOrThrowIfTooLarge(e.lastSystemMessageTimestamp ?? 0), o("WALongInt").numberOrThrowIfTooLarge(t.lastSystemMessageTimestamp ?? 0));
            if (l == null || m > l) {
                u.lastSystemMessageTimestamp = m;
            }
        }
        return u;
    }
    const y = [
        [
            (c = o("WAWebWamEnumMdSyncdCriticalEventCode")).MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_LAST_SYSTEM_MESSAGE_TIMESTAMP_SET,
            function({ lastMessageTimestamp, lastSystemMessageTimestamp }) {
                return lastSystemMessageTimestamp != null && lastMessageTimestamp != null && o("WALongInt").numberOrThrowIfTooLarge(lastSystemMessageTimestamp) < o("WALongInt").numberOrThrowIfTooLarge(lastMessageTimestamp);
            }
        ],
        [
            c.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_MESSAGES_CROSS_LIMIT,
            function(e) {
                return r("countWhere")(e.messages, function(e) {
                    return e.timestamp != null;
                }) > 1000;
            }
        ]
    ];
    const C = [
        [
            c.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_MESSAGE_KEY_UNSET,
            function(e) {
                return e.key == null;
            }
        ],
        [
            c.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_MESSAGE_KEY_REMOTE_JID_UNSET,
            function(e) {
                return e.key?.remoteJid == null;
            }
        ],
        [
            c.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_MESSAGE_KEY_FROM_ME_UNSET,
            function(e) {
                return e.key?.fromMe == null;
            }
        ],
        [
            c.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_MESSAGE_KEY_STANZA_ID_UNSET,
            function(e) {
                return e.key?.id == null;
            }
        ],
        [
            c.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_MESSAGE_KEY_REMOTE_JID_INVALID,
            function(e) {
                return !o("WAWebWidFactory").isWidlike(e.key?.remoteJid);
            }
        ],
        [
            c.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_MESSAGE_KEY_PARTICIPANT_UNSET,
            function(e) {
                return r("WAWebWid").isGroup(e.key?.remoteJid) && e.key?.fromMe !== true && e.key?.participant == null;
            }
        ]
    ];
    function b(e, t, n) {
        if (e == null) {
            o("WAWebSyncdMetrics").uploadMdCriticalEventMetric(o("WAWebWamEnumMdSyncdCriticalEventCode").MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_UNSET, t, n);
            return;
        }
        for (const [a, i] of y){
            if (i(e)) {
                o("WAWebSyncdMetrics").uploadMdCriticalEventMetric(a, t, n);
                return;
            }
        }
        if (e.messages == null) {
            return e;
        }
        for (const l of e.messages){
            for (const [u, c] of C){
                if (c(l)) {
                    o("WAWebSyncdMetrics").uploadMdCriticalEventMetric(u, t, n);
                    return;
                }
            }
        }
        return e;
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, mutationIndexJid) {
            let r = yield p(e, {
                forOutgoingMutation: true,
                mutationIndexJid
            });
            const a = yield o("WAWebApiActiveMessageRanges").getActiveMessageRanges(e.toString());
            a.forEach((e)=>{
                const messageRange = e.actionValue.messageRange;
                if (messageRange) {
                    o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(messageRange.lastMessageTimestamp, "activeRanges");
                    o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(messageRange.lastSystemMessageTimestamp, "activeRangesSystem");
                }
                e: {
                    if (e.action === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatDeleteStarredDeleteMedia || e.action === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatDeleteStarredKeepMedia || e.action === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatKeepStarredDeleteMedia || e.action === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.ClearChatKeepStarredKeepMedia || e.action === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.DeleteChatDeleteMedia || e.action === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.DeleteChatKeepMedia) {
                        const n = e.actionValue.messageRange;
                        if (n) {
                            r = h(r, n);
                        }
                        break e;
                    }
                    if (e.action === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.Archive || e.action === o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.MarkChatAsRead) {
                        break e;
                    }
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e.action}`);
                }
            });
            o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(r.lastMessageTimestamp, "intermediaForwardMovingRange");
            const i = yield R(e);
            r.messages = g(r.messages, i, o("WALongInt").numberOrThrowIfTooLarge(r.lastMessageTimestamp ?? 0));
            r = o("WAWebDBMessageRange").fixMessageRange(r);
            o("WAWebDBMessageRange").logMaybeMillisecondTimestamp(r.lastMessageTimestamp, "forwardMovingRange");
            return r;
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = [];
            const r = yield o("WAWebSyncdDb").getSyncActionsRows([
                "action"
            ], [
                o("WAWebSyncdConst").Actions.DeleteMessageForMe
            ]);
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: deleteForMeSyncActions length: ",
                ""
            ])), r.length);
            const a = [];
            let i = 0;
            let l = 0;
            r.forEach((e)=>{
                const r = t.toString({
                    legacy: true
                });
                const s = JSON.parse(e.index);
                if (s.length !== 5) {
                    i++;
                    if (a.length < 3) {
                        a.push(e.index);
                    }
                } else if (r === s[1] && e.actionState === o("WAWebSyncdConst").SyncActionState.Success) {
                    const c = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, e.binarySyncData).value;
                    const d = c?.deleteMessageForMeAction?.messageTimestamp;
                    if (d == null) {
                        l++;
                    } else {
                        const m = {
                            remoteJid: s[1],
                            id: s[2],
                            fromMe: s[3] === "1",
                            participant: s[4] !== "0" ? s[4] : undefined
                        };
                        n.push({
                            key: m,
                            timestamp: o("WAWebTimestampConversionUtils").maybeMillisecondsToSeconds(d)
                        });
                    }
                }
            });
            if (i > 0) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[constructForwardMovingMessageRange] ",
                    " malformed indices => ",
                    ""
                ])), i, a);
            }
            if (l > 0) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[constructForwardMovingMessageRange] ",
                    " malformed actions"
                ])), l);
            }
            return n;
        });
        return L.apply(this, arguments);
    }
    function E(e, t) {
        return babelHelpers.extends({}, t, {
            messages: t.messages.map((t)=>babelHelpers.extends({}, t, {
                    key: babelHelpers.extends({}, t.key, {
                        remoteJid: e.toString()
                    })
                }))
        });
    }
    const k = function(t, n, r) {
        return o("WAWebSyncdCoreApi").lockForSync([].concat(t, [
            "message",
            "active-message-ranges"
        ]), n, r);
    };
    l.MessageRangeEncloseType = d;
    l.constructMessageRange = p;
    l.compareMessageRanges = f;
    l.mergeMessageRanges = h;
    l.validateMessageRange = b;
    l.constructForwardMovingMessageRange = v;
    l.replaceMessageRangeRemoteJid = E;
    l.lockForMessageRangeSync = k;
}, 98);