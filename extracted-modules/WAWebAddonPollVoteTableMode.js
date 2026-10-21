__d("WAWebAddonPollVoteTableMode", [
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebDBPollsUpsertVotes",
    "WAWebMsgType",
    "WAWebPollsDbSerialization",
    "WAWebPollsVoteDataUtils",
    "WAWebPollsVotesSchema",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebPollsVoteDataUtils").voteDataToPollVoteMsgData(o("WAWebPollsDbSerialization").voteFromDbRow(e));
    }
    var s = {
        mode: o("WAWebAddonConstants").AddonTableMode.PollVote,
        bulkUpsert: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = e.map((e)=>{
                    if (e.kind !== o("WAWebMsgType").MsgKind.PollVoteDecrypted) {
                        throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedMsgType);
                    }
                    return o("WAWebPollsVoteDataUtils").pollVoteMsgDataToVoteData(e);
                });
                yield o("WAWebDBPollsUpsertVotes").upsertVotesDb(t);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkGetByParentAndSender: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = yield o("WAWebPollsVotesSchema").getTable().anyOf([
                    "parentMsgKey",
                    "sender"
                ], t.map((e)=>[
                        e[0].toString(),
                        e[1].toString()
                    ]));
                return n.map(e);
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        bulkGetByMsgKey: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkGetByParentMsgKey: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = yield o("WAWebPollsVotesSchema").getTable().anyOf([
                    "parentMsgKey"
                ], t.map((e)=>e.toString()));
                return n.map(e);
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        bulkGetByChatWid: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        bulkRemoveByMsgKey: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield o("WAWebPollsVotesSchema").getTable().bulkRemoveByIndex([
                    "msgKey"
                ], e.map((e)=>e.toString()));
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        getByMsgKey: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = (yield o("WAWebPollsVotesSchema").getTable().equals([
                    "msgKey"
                ], t.toString()))[0];
                if (n == null) {
                    return n;
                }
                return e(n);
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        updateAck: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                if (e.kind !== o("WAWebMsgType").MsgKind.PollVoteDecrypted && e.kind !== o("WAWebMsgType").MsgKind.PollVoteEncrypted) {
                    throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedMsgType);
                }
                yield o("WAWebPollsVotesSchema").getTable().merge([
                    e.pollUpdateParentKey.toString(),
                    r("nullthrows")(e.from).toString()
                ], {
                    ack: t
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        markAsRead: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield s.getByMsgKey(e);
                if (t != null) {
                    return s.bulkUpsert([
                        babelHelpers.extends({}, t, {
                            read: true
                        })
                    ]);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        getTableSize: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebPollsVotesSchema").getTable().count();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    l.pollVoteTableMode = s;
}, 98);