__d("WAWebHistorySyncWorkerCompatibleNotificationUtils", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebChatConstants",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r = false) {
            const a = f(n);
            const i = {
                id: t,
                endOfHistoryTransferType: a
            };
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] update chat ",
                " end of history transfer type to ",
                ""
            ])), t.toLogString(), a);
            if (r) {
                i.t = 0;
            }
            yield o("WAWebSchemaChat").getChatTable().merge(t.toString(), {
                endOfHistoryTransferType: a
            });
            yield o("WAWebBackendApi").frontendSendAndReceive("chatCollectionAdd", {
                things: [
                    i
                ],
                options: {
                    merge: true,
                    add: false
                }
            });
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length !== 0) {
                const t = o("WAWebSchemaChat").getChatTable();
                const r = [];
                const a = yield (c || (c = n("Promise"))).allSettled(e.map(({ chat: n, endOfHistoryTransferTypeFromProto: o, setChatTimeToZero: a })=>{
                    const i = f(o);
                    const l = {
                        id: n,
                        endOfHistoryTransferType: i
                    };
                    if (a === true) {
                        l.t = 0;
                    }
                    if (r.length < 3) {
                        r.push(n.toLogString());
                    }
                    return t.merge(n.toString(), {
                        endOfHistoryTransferType: i
                    }).then(()=>l);
                }));
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] ",
                    " chats transferType => ",
                    ""
                ])), e.length, r);
                const i = [];
                a.forEach((e)=>{
                    if (e.status === "fulfilled") {
                        i.push(e.value);
                    } else {
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] bulkUpdateEndOfHistorySync merge fail: ",
                            ""
                        ])), e.reason);
                    }
                });
                if (i.length !== 0) {
                    yield o("WAWebBackendApi").frontendSendAndReceive("chatCollectionAdd", {
                        things: i,
                        options: {
                            merge: true,
                            add: false
                        }
                    });
                }
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        if (e === o("WAWebProtobufsHistorySync.pb").Conversation$EndOfHistoryTransferType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY) {
            return o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY;
        }
        if (e === o("WAWebProtobufsHistorySync.pb").Conversation$EndOfHistoryTransferType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY) {
            return o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
        }
        if (e === o("WAWebProtobufsHistorySync.pb").Conversation$EndOfHistoryTransferType.COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY) {
            return o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY;
        }
        if (e === o("WAWebProtobufsHistorySync.pb").Conversation$EndOfHistoryTransferType.COMPLETE_ON_DEMAND_SYNC_WITH_MORE_MSG_ON_PRIMARY_BUT_NO_ACCESS) {
            return o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_ON_DEMAND_SYNC_WITH_MORE_MSG_ON_PRIMARY_BUT_NO_ACCESS;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    l.updateEndOfHistorySync = d;
    l.bulkUpdateEndOfHistorySync = p;
}, 98);