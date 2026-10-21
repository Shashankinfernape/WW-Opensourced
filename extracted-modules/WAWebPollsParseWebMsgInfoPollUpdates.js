__d("WAWebPollsParseWebMsgInfoPollUpdates", [
    "WALogger",
    "WALongInt",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebMsgType",
    "WAWebPollVoteTCMetadata",
    "WAWebPollsCreateOptionLocalIdMap",
    "WAWebPollsProtobufConversion",
    "WAWebProtobufsWeb.pb",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        if (e.length === 0) {
            return null;
        }
        return e.filter((e)=>e.messageAddOnType === o("WAWebProtobufsWeb.pb").MessageAddOn$MessageAddOnType.POLL_UPDATE).map((e)=>({
                senderTimestampMs: e.senderTimestampMs,
                serverTimestampMs: e.serverTimestampMs,
                pollUpdateMessageKey: e.messageAddOnKey,
                vote: e.legacyMessage?.pollVote,
                metadata: e.messageAddOn?.pollUpdateMessage?.metadata
            }));
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ parsedWebMsgInfo: n, webMsgInfo: a }) {
            try {
                if (a == null || a.pollUpdates == null) {
                    return [];
                }
                if (n == null || n.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
                    return [];
                }
                const l = n;
                const c = yield o("WAWebPollsCreateOptionLocalIdMap").createOptionLocalIdMap(l.pollOptions);
                const d = u(a.messageAddOns) ?? a.pollUpdates;
                return r("compactMap")(d, function(t) {
                    try {
                        let n;
                        const a = (n = r("nullthrows"))(t.pollUpdateMessageKey);
                        const i = n(t.vote);
                        const s = n(o("WAWebAddOnParseWebMsgInfo").buildAddonMsgKey({
                            key: a
                        }));
                        const { msgKey: u, sender: d } = s;
                        const m = o("WAWebPollsProtobufConversion").voteFromProtobuf({
                            voteProtobuf: i,
                            pollVoteMsgKey: u,
                            parentMsgKey: l.id,
                            sender: d,
                            senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(n(t.senderTimestampMs)),
                            t: o("WAWebAddOnParseWebMsgInfo").getAddonServerTimestamp(t.serverTimestampMs),
                            optionLocalIdMap: c,
                            ack: null,
                            read: t.unread !== true
                        });
                        return {
                            voteData: m,
                            pollUpdateMessageMetadata: o("WAWebPollVoteTCMetadata").pollVoteTCMetadataFromProto(t.metadata)
                        };
                    } catch (t) {
                        const p = r("getErrorSafe")(t);
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] Failed to parse pollUpdate with error ",
                            ""
                        ])), p).sendLogs("parseWebMsgInfoPollUpdates-vote-parse-error");
                        return null;
                    }
                });
            } catch (e) {
                const m = r("getErrorSafe")(e);
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] parseWebMsgInfoPollUpdates failed: ",
                    " ",
                    ""
                ])), m?.name, m?.stack).sendLogs("parseWebMsgInfoPollUpdates-error");
                return [];
            }
        });
        return d.apply(this, arguments);
    }
    l.parseWebMsgInfoPollUpdates = c;
}, 98);