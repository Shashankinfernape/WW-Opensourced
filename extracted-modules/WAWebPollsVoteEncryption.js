__d("WAWebPollsVoteEncryption", [
    "WAWebAddonEncryption",
    "WAWebApiContact",
    "WAWebLidMigrationUtils",
    "WAWebMsgType",
    "WAWebPollsVoteEncryptionInternal",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebPollsVoteEncryptionInternal").decryptVoteInternal(e).catch((t)=>{
            if (e.isOneOnOne) {
                const n = u(e.pollCreationOriginalSender, e.voteSender);
                const { alignedPollCreator, alignedVoteSender } = n;
                if (alignedPollCreator != null && alignedVoteSender != null) {
                    return o("WAWebPollsVoteEncryptionInternal").decryptVoteInternal(babelHelpers.extends({}, e, {
                        pollCreationOriginalSender: alignedPollCreator,
                        voteSender: alignedVoteSender
                    })).catch((t)=>{
                        const pollCreationOriginalSender = o("WAWebApiContact").getAlternateUserWid(alignedPollCreator);
                        const voteSender = o("WAWebApiContact").getAlternateUserWid(alignedVoteSender);
                        if (pollCreationOriginalSender != null && voteSender != null) {
                            return o("WAWebPollsVoteEncryptionInternal").decryptVoteInternal(babelHelpers.extends({}, e, {
                                pollCreationOriginalSender,
                                voteSender
                            }));
                        }
                        throw t;
                    });
                }
            }
            throw t;
        });
    }
    function s(e) {
        const t = {
            type: o("WAWebMsgType").MsgKind.PollVoteDecrypted,
            encode: e.encodedProtobuf
        };
        if (e.isOneOnOne) {
            const n = u(e.pollCreationOriginalSender, e.voteSender);
            const { alignedPollCreator, alignedVoteSender } = n;
            if (alignedPollCreator != null && alignedVoteSender != null) {
                e.pollCreationOriginalSender = alignedPollCreator;
                e.voteSender = alignedVoteSender;
            }
        }
        return o("WAWebAddonEncryption").encryptAddOn(t, {
            messageSecret: e.messageSecret,
            iv: e.iv,
            stanzaId: e.stanzaId,
            originalMessageSender: e.pollCreationOriginalSender,
            addOnSender: e.voteSender
        });
    }
    function u(pollCreationOriginalSender, voteSender) {
        const n = o("WAWebLidMigrationUtils").toCommonAddressingMode(pollCreationOriginalSender, voteSender);
        const r = n[0];
        const a = n[1];
        return {
            alignedVoteSender: a != null ? o("WAWebWidFactory").asUserWidOrThrow(a) : null,
            alignedPollCreator: r != null ? o("WAWebWidFactory").asUserWidOrThrow(r) : null
        };
    }
    l.decryptVote = e;
    l.encryptVote = s;
}, 98);