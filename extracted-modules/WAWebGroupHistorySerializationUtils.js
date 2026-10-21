__d("WAWebGroupHistorySerializationUtils", [
    "Promise",
    "WAWebDBGetReactions",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebEventResponseDBSerialization",
    "WAWebEventResponsesSchema",
    "WAWebMessagePluginGenerateWebMessageInfo",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPinInChatSchema",
    "WAWebPollsCreateOptionLocalIdMap",
    "WAWebPollsVotesSchema",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsWeb.pb",
    "WAWebSoundStickerGating",
    "WAWebSoundStickerUtils",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return e.reduce((acc, item)=>{
            const t_parentMsgKey = item.parentMsgKey;
            if (t_parentMsgKey == null) {
                return acc;
            }
            const o = t_parentMsgKey.toString();
            if (!acc.has(o)) {
                acc.set(o, []);
            }
            acc.get(o)?.push(item);
            return acc;
        }, new Map);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = o("WAWebDBGetReactions").getAllReactionsFromParentMsgs(t.filter((e)=>e.hasReaction).map((e)=>e.id.toString()));
            const a = f(t.filter((e)=>e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION).map((e)=>e.id.toString()));
            const i = g(t.map((e)=>e.id.toString()));
            const l = h(t.filter((e)=>e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION).map((e)=>e.id.toString()));
            const u = yield (e || (e = n("Promise"))).allSettled([
                r,
                a,
                i,
                l
            ]);
            const c = u[0];
            const d = u[1];
            const m = u[2];
            const _ = u[3];
            const reactions = c.status === "fulfilled" ? s(c.value) : new Map;
            const pollVotes = d.status === "fulfilled" ? s(d.value) : new Map;
            const pinInChat = m.status === "fulfilled" ? new Map(m.value.map((e)=>[
                    e.parentMsgKey,
                    e
                ])) : new Map;
            const eventResponses = _.status === "fulfilled" ? s(_.value) : new Map;
            const S = t.filter((e)=>e.kicKey != null);
            const keepInChat = S.length > 0 ? new Map(S.map((e)=>[
                    e.id.toString(),
                    p(e)
                ])) : new Map;
            return {
                reactions,
                pollVotes,
                pinInChat,
                eventResponses,
                keepInChat
            };
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return {
            key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(r("WAWebMsgKey").fromString(e.msgKey)),
            text: e.reactionText,
            senderTimestampMs: e.timestamp,
            unread: false
        };
    }
    function m(e) {
        return {
            type: o("WAWebProtobufsWeb.pb").PinInChat$Type.cast(e.pinType),
            key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(r("WAWebMsgKey").fromString(e.parentMsgKey)),
            senderTimestampMs: e.senderTimestampMs,
            serverTimestampMs: e.t != null ? e.t * 1000 : null,
            messageAddOnContextInfo: {
                messageAddOnDurationInSecs: e.pinExpiryDuration
            }
        };
    }
    function p(e) {
        return {
            keepType: o("WAWebEphemeralKeepInChatUtils").kicStateToKeepType(e.kicState),
            key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(r("nullthrows")(e.kicKey, "[group-history] kicKey is null")),
            clientTimestampMs: e.kicTimestampMs,
            serverTimestampMs: e.t != null ? e.t * 1000 : null
        };
    }
    function _(e) {
        return {
            eventResponseMessageKey: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(r("WAWebMsgKey").fromString(e.msgKey)),
            timestampMs: e.senderTimestampMs,
            eventResponseMessage: {
                response: o("WAWebEventResponseDBSerialization").decodeEventResponseFromDBRow(e.eventResponse),
                timestampMs: e.senderTimestampMs
            },
            unread: false
        };
    }
    function f(e) {
        return o("WAWebPollsVotesSchema").getTable().anyOf([
            "parentMsgKey"
        ], e);
    }
    function g(e) {
        return o("WAWebPinInChatSchema").getTable().anyOf([
            "parentMsgKey"
        ], e);
    }
    function h(e) {
        return o("WAWebEventResponsesSchema").getTable().anyOf([
            "parentMsgKey"
        ], e);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!e || !t.pollOptions) {
                return null;
            }
            const n = yield o("WAWebPollsCreateOptionLocalIdMap").createOptionLocalIdMap(t.pollOptions);
            const a = e.map((e)=>{
                const t = Array.from(new Uint8Array(e.selectedOptionLocalIds));
                const a = t.map(n.getHashForLocalId);
                return {
                    pollUpdateMessageKey: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(r("WAWebMsgKey").fromString(e.msgKey)),
                    senderTimestampMs: e.senderTimestampMs,
                    unread: false,
                    vote: {
                        selectedOptions: a.length === 0 ? null : a
                    }
                };
            });
            return a;
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ eventResponses, keepInChat, msgData, pinInChat, pollVotes, reactions }) {
            if (S(msgData)) {
                return null;
            }
            const p = msgData.id.toString();
            const pollUpdates = yield y(pollVotes.get(p), msgData);
            const g = pinInChat.get(p);
            return o("WAWebMessagePluginGenerateWebMessageInfo").generateWebMessageInfo(msgData, {
                reactions: reactions.get(p)?.map(d) ?? [],
                pollUpdates,
                pinInChat: g ? m(g) : undefined,
                eventResponses: eventResponses.get(p)?.map(_),
                keepInChat: keepInChat.get(p)
            });
        });
        return v.apply(this, arguments);
    }
    function S(msgData) {
        const e_stickerAudio = msgData.stickerAudio;
        return e_stickerAudio != null && o("WAWebSoundStickerUtils").isSoundStickerMsg(msgData) && (!o("WAWebSoundStickerUtils").isCompleteStickerAudio(e_stickerAudio) || !o("WAWebSoundStickerGating").isSoundStickerCreationEnabled());
    }
    l.getAddonsDBRowFromParentMsgs = u;
    l.serializeSingleMessage = b;
}, 98);