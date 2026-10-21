__d("WAWebThreadsMetadataProtoUtils", [
    "WALogger",
    "WAWebAiThreadCreationUtils",
    "WAWebAiThreadTypeUtils",
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebThreadMsgUtils",
    "WAWebThreadUtils",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e, t) {
        if (e.threadKey == null || !o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled()) {
            return null;
        }
        const n = {
            id: e.threadKey.id,
            remoteJid: t.remote.toString(),
            fromMe: true
        };
        const r = o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(n);
        return o("WAWebThreadUtils").getThreadIDfromType(r, o("WAWebThreadUtils").ThreadType.AiThread);
    }
    function m(e, t) {
        const e_serverInfo = e.serverInfo;
        const r = e_serverInfo?.title;
        const t_remote = t.remote;
        if (o("WAWebBotUtils").isMetaAiBot(t_remote)) {
            return {
                title: r,
                aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default
            };
        }
        const i = e?.clientInfo;
        if (i == null || i.type == null) {
            return null;
        }
        const l = o("WAWebAiThreadTypeUtils").getAiThreadTypeFromProto(i.type);
        return o("WAWebAiThreadTypeUtils").getAiThreadInfoFromType(r, l);
    }
    function p(t, n) {
        if (n?.threadId != null) {
            const a = [];
            const i = new Set;
            for (const l of n.threadId){
                const u = l.threadType;
                if (u != null) {
                    if (i.has(u)) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[parseThreadsMetadataProto] duplicate threadType=",
                            ""
                        ])), u).sendLogs("parse-threads-metadata-duplicate-thread-type");
                        throw r("err")("Duplicate ThreadType");
                    }
                    let c = null;
                    e: {
                        if (u === o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.VIEW_REPLIES) {
                            continue;
                        }
                        if (u === o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.AI_THREAD) {
                            c = d(l, t.id);
                            break e;
                        }
                        if (u === o("WAWebProtobufsE2E.pb").ThreadID$ThreadType.UNKNOWN) {
                            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[parseThreadsMetadataProto] unknown threadType=",
                                ""
                            ])), u);
                            continue;
                        }
                        throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${u}`);
                    }
                    if (c != null) {
                        a.push(c);
                        i.add(u);
                    }
                }
            }
            if (a.length > 0) {
                t.threadIds = a;
            }
        }
    }
    function _(e, t) {
        const a = e.threadIds ?? [];
        if (o("WAWebThreadMsgUtils").threadsContainAiThread(a)) {
            const i = t?.botMetadata ?? {};
            const l = i.botThreadInfo;
            const s = m(l ?? {}, e.id);
            if (s != null) {
                e.aiThreadInfo = s;
            } else {
                const d = e.id.toString();
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[maybeParseAiThreadInfoFromProto] no aiThreadInfo, id=",
                    ""
                ])), d).sendLogs("ai-thread-missing-ai-thread-info");
                const p = JSON.stringify(e);
                const _ = JSON.stringify(t);
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[maybeParseAiThreadInfoFromProto] msg=",
                    ", ctxInfo=",
                    ""
                ])), p, _);
            }
        }
    }
    function f(e, t) {
        if (t === "history" && o("WAWebBotUtils").isMetaAiBot(e.id.remote) && o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled()) {
            const r = e.threadIds ?? [];
            if (!o("WAWebThreadMsgUtils").threadsContainAiThread(r)) {
                e.threadIds = [].concat(r, [
                    o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId()
                ]);
            }
            if (e.aiThreadInfo == null) {
                e.aiThreadInfo = {
                    aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default,
                    title: undefined
                };
            }
        }
    }
    l.parseAiThreadInfo = m;
    l.parseThreadsMetadataProto = p;
    l.maybeParseAiThreadInfoFromProto = _;
    l.maybeAddHistoricalAiThreadForMetaAi = f;
}, 98);