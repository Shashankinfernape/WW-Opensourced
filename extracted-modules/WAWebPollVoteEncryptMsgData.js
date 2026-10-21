__d("WAWebPollVoteEncryptMsgData", [
    "Promise",
    "WALogger",
    "WAWebAck",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebPollVoteTCMetadata",
    "WAWebPollsProtobufConversion",
    "WAWebPollsVoteEncryption",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const l = o("WAWebMsgGetters").getPollEndTime(a);
            if (l != null && l <= Date.now()) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "blocked-encrypting-poll-vote/poll-ended"
                ])));
                throw r("err")("Poll has ended");
            }
            const u = r("nullthrows")(o("WAWebMsgGetters").getPollOptions(a));
            const c = r("nullthrows")(o("WAWebMsgGetters").getMessageSecret(a), "Poll creation missing message secret");
            const d = r("nullthrows")(o("WAWebMsgGetters").getOriginalSender(a));
            const m = self.crypto.getRandomValues(new Uint8Array(12));
            const p = yield (s || (s = n("Promise"))).all([
                o("WAWebPollsVoteEncryption").encryptVote({
                    encodedProtobuf: yield o("WAWebPollsProtobufConversion").protobufFromVote(t, u),
                    iv: m,
                    messageSecret: c,
                    pollCreationOriginalSender: d,
                    stanzaId: a.id.id,
                    voteSender: o("WAWebWidFactory").asUserWidOrThrow(r("nullthrows")(o("WAWebMsgGetters").getSender(t))),
                    isOneOnOne: o("WAWebMsgGetters").getRemote(a).isUser()
                }),
                o("WAWebPollVoteTCMetadata").buildOutgoingPollVoteTCMetadata(a)
            ]);
            const _ = p[0].encPayload;
            const f = p[1];
            return babelHelpers.extends({
                id: t.id,
                type: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
                kind: o("WAWebMsgType").MsgKind.PollVoteEncrypted,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                subtype: "poll_vote",
                addonEncrypted: true,
                t: Math.floor(t.senderTimestampMs / 1000)
            }, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(t.id, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon), {
                isNewMsg: true,
                local: true,
                ack: t.ack ?? o("WAWebAck").ACK.CLOCK,
                pollUpdateParentKey: a.id,
                encPollVote: {
                    encPayload: _,
                    encIv: m.buffer
                },
                senderTimestampMs: t.senderTimestampMs,
                pollUpdateMessageMetadata: f ?? void 0
            });
        });
        return c.apply(this, arguments);
    }
    l.encryptPollVoteMsgData = u;
}, 98);