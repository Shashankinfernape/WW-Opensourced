__d("WAWebPollsCreatePollUpdateVoteMsg", [
    "Promise",
    "WAWebAck",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebPollVoteTCMetadata",
    "WAWebPollsProtobufConversion",
    "WAWebPollsVoteEncryption",
    "WAWebReferentialMsgKey",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const l = self.crypto.getRandomValues(new Uint8Array(12));
            const s = yield (e || (e = n("Promise"))).all([
                o("WAWebPollsVoteEncryption").encryptVote({
                    encodedProtobuf: yield o("WAWebPollsProtobufConversion").protobufFromVote(t, a.pollOptions),
                    isOneOnOne: o("WAWebMsgGetters").getRemote(a.unsafe()).isUser(),
                    iv: l,
                    messageSecret: r("nullthrows")(a.messageSecret, "Poll creation missing message secret"),
                    pollCreationOriginalSender: r("nullthrows")(o("WAWebMsgGetters").getOriginalSender(a.unsafe()), "Poll creation missing original sender"),
                    stanzaId: a.id.id,
                    voteSender: t.sender
                }),
                o("WAWebPollVoteTCMetadata").buildOutgoingPollVoteTCMetadata(a.unsafe())
            ]);
            const encPayload = s[0].encPayload;
            const c = s[1];
            const d = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(t.msgKey, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon);
            const { author, to } = d;
            return {
                id: t.msgKey,
                type: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
                kind: o("WAWebMsgType").MsgKind.PollVoteEncrypted,
                subtype: "poll_vote",
                addonEncrypted: true,
                t: Math.floor(t.senderTimestampMs / 1000),
                from: t.sender,
                to,
                author,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                isNewMsg: true,
                local: true,
                ack: t.ack ?? o("WAWebAck").ACK.CLOCK,
                pollUpdateParentKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(a),
                encPollVote: {
                    encPayload,
                    encIv: l.buffer
                },
                senderTimestampMs: t.senderTimestampMs,
                pollUpdateMessageMetadata: c ?? undefined
            };
        });
        return u.apply(this, arguments);
    }
    l.createPollUpdateVoteMsg = s;
}, 98);