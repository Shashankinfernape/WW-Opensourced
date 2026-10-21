__d("WAWebPollsProtobufConversion", [
    "WALongInt",
    "WAWebPollsCreateOptionLocalIdMap",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebPollsCreateOptionLocalIdMap").createOptionLocalIdMap(t);
            const r = e.selectedOptionLocalIds.map(n.getHashForLocalId);
            return {
                selectedOptions: r.length === 0 ? null : r
            };
        });
        return s.apply(this, arguments);
    }
    function u({ ack, allowUnresolvedOptions = false, optionLocalIdMap, parentMsgKey, pollVoteMsgKey, read, sender, senderTimestampMs, t: t_1, voteProtobuf }) {
        return babelHelpers.extends({
            msgKey: pollVoteMsgKey,
            parentMsgKey: r("nullthrows")(parentMsgKey)
        }, c(voteProtobuf.selectedOptions, optionLocalIdMap, allowUnresolvedOptions), {
            senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(senderTimestampMs),
            t: o("WALongInt").maybeNumberOrThrowIfTooLarge(t_1),
            sender,
            ack,
            read
        });
    }
    function c(selectedOptions, optionLocalIdMap, allowUnresolvedOptions) {
        if (!allowUnresolvedOptions) {
            return {
                selectedOptionLocalIds: selectedOptions.map(optionLocalIdMap.getLocalIdForHash)
            };
        }
        const selectedOptionLocalIds = [];
        const unresolvedOptionHashes = [];
        for (const a of selectedOptions){
            if (optionLocalIdMap.includesHashes([
                a
            ])) {
                selectedOptionLocalIds.push(optionLocalIdMap.getLocalIdForHash(a));
            } else {
                unresolvedOptionHashes.push(a);
            }
        }
        if (unresolvedOptionHashes.length > 0) {
            return {
                selectedOptionLocalIds,
                unresolvedOptionHashes
            };
        }
        return {
            selectedOptionLocalIds
        };
    }
    l.protobufFromVote = e;
    l.voteFromProtobuf = u;
}, 98);