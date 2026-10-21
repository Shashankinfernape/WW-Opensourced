__d("WAWebPollsExtractVotes", [
    "Promise",
    "WALogger",
    "WAWebAddonEncryptionError",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPollsCreateOptionLocalIdMap",
    "WAWebPollsProtobufConversion",
    "WAWebPollsValidationError",
    "WAWebPollsVoteEncryption",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const a = yield (u || (u = n("Promise"))).allSettled(Array.from(t.entries(), function([t, n]) {
                return m(t, n);
            }));
            return r("compactMap")(a, function(t) {
                switch(t.status){
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        {
                            const n = t.reason;
                            if (n instanceof o("WAWebPollsValidationError").PollVoteValidationError) {
                                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "Poll vote extraction failed: ",
                                    ""
                                ])), n.code).sendLogs(n.code);
                                return;
                            }
                            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "Poll vote extraction failed: ",
                                "\n",
                                ""
                            ], [
                                "Poll vote extraction failed: ",
                                "\\n",
                                ""
                            ])), n.message, n.stack).sendLogs("poll-vote-extraction-unknown-error");
                        }
                }
            });
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n;
            const a = o("WAWebAddonEncryptionError").getValidatedMessageSecret(o("WAWebMsgType").MsgKind.PollVoteEncrypted, t);
            const i = (n = r("nullthrows"))(t.pollSelectableOptionsCount);
            const l = n(t.pollOptions);
            const s = n(e.encPollVote);
            const u = o("WAWebWidFactory").asUserWidOrThrow(n(o("WAWebMsgGetters").getSender(e)));
            const voteProtobuf = yield o("WAWebPollsVoteEncryption").decryptVote({
                encryptedVote: s.encPayload,
                iv: s.encIv,
                messageSecret: a,
                stanzaId: t.id.id,
                pollCreationOriginalSender: n(o("WAWebMsgGetters").getOriginalSender(t)),
                voteSender: u,
                isOneOnOne: o("WAWebMsgGetters").getRemote(t).isUser()
            });
            const length = voteProtobuf.selectedOptions.length;
            if (length > l.length || i !== 0 && length > i) {
                throw new (o("WAWebPollsValidationError")).PollVoteValidationError(o("WAWebPollsValidationError").PollVoteValidationErrorCode.INVALID_OPTIONS_COUNT);
            }
            if (voteProtobuf.selectedOptions.some((e)=>e.byteLength !== 32)) {
                throw new (o("WAWebPollsValidationError")).PollVoteValidationError(o("WAWebPollsValidationError").PollVoteValidationErrorCode.INVALID_OPTION);
            }
            const optionLocalIdMap = yield o("WAWebPollsCreateOptionLocalIdMap").createOptionLocalIdMap(l);
            if (!optionLocalIdMap.includesHashes(voteProtobuf.selectedOptions)) {
                throw new (o("WAWebPollsValidationError")).PollVoteValidationError(o("WAWebPollsValidationError").PollVoteValidationErrorCode.OPTION_NOT_FOUND);
            }
            return o("WAWebPollsProtobufConversion").voteFromProtobuf({
                voteProtobuf,
                pollVoteMsgKey: e.id,
                parentMsgKey: e.pollUpdateParentKey,
                sender: u,
                senderTimestampMs: e.senderTimestampMs,
                t: r("nullthrows")(e.t),
                optionLocalIdMap,
                ack: e.ack,
                read: o("WAWebUserPrefsMeUser").isMeAccount(u)
            });
        });
        return p.apply(this, arguments);
    }
    l.extractVotes = c;
    l.extractVote = m;
}, 98);