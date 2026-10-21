__d("WAWebPollVoteAddonMessageProcessor", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebAddonConstants",
    "WAWebAddonCreateMsgProcessor",
    "WAWebAddonInfraError",
    "WAWebAddonLogUtils",
    "WAWebBackendApi",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebLastAddOnDBSerialization",
    "WAWebMsgType",
    "WAWebPollVoteAddonTCValidation",
    "WAWebPollVoteEncryptMsgData",
    "WAWebPollVoteFromHistorySyncMsg",
    "WAWebPollsExtractVotes",
    "WAWebPollsVoteDataUtils",
    "WAWebShouldUpdateLastAddOnPreview",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    var d = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessorDualEncrypted({
        isEnabled: function() {
            return o("WAWebABProps").getABPropConfigValue("unified_poll_vote_addon_infra_enabled");
        },
        convert: {
            fromHistorySyncMsg: r("WAWebPollVoteFromHistorySyncMsg"),
            toDualEncryptedMsgData: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                    if (e.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted) {
                        return e;
                    }
                    return o("WAWebPollVoteEncryptMsgData").encryptPollVoteMsgData(e, t);
                });
                function t(t, n) {
                    return e.apply(this, arguments);
                }
                return t;
            })(),
            toDualDecryptedMsgData: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                    if (e.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted) {
                        return e;
                    }
                    const n = yield o("WAWebPollsExtractVotes").extractVote(e, t);
                    return babelHelpers.extends({}, o("WAWebPollsVoteDataUtils").voteDataToPollVoteMsgData(n), {
                        pollUpdateMessageMetadata: e.pollUpdateMessageMetadata
                    });
                });
                function t(t, n) {
                    return e.apply(this, arguments);
                }
                return t;
            })()
        },
        updateCollection: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                return o("WAWebBackendApi").frontendSendAndReceive("upsertVotesModelCollection", {
                    votes: e.add.map(o("WAWebPollsVoteDataUtils").pollVoteMsgDataToVoteData),
                    votesToRemove: e.remove,
                    restoredFromDb: t === o("WAWebAddonConstants").AddonProcessMode.Hydration || t === o("WAWebAddonConstants").AddonProcessMode.HistorySync
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        beforeUpsert: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
                const a = r.parents;
                const i = [];
                const l = [];
                for (const m of t){
                    if (m.addonEncrypted) {
                        const p = a.getForAddon(m);
                        if (p == null) {
                            throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.MissingParentMsg);
                        }
                        l.push(d.convert.toDualDecryptedMsgData(m, p));
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[pollVoteMsgProcessor] Decrypting poll vote message"
                        ]))).sendLogs("unexpected encrypted poll vote", {
                            sampling: 0.01
                        });
                    } else {
                        i.push(m);
                    }
                }
                if (l.length !== 0) {
                    const _ = yield (c || (c = n("Promise"))).allSettled(l);
                    for (const f of _){
                        if (f.status === "fulfilled" && f.value.kind === o("WAWebMsgType").MsgKind.PollVoteDecrypted) {
                            i.push(f.value);
                        } else {
                            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "Cannot decrypt poll vote message: ",
                                ""
                            ])), f.reason);
                        }
                    }
                    if (o("WAWebAddonLogUtils").hasSettledWithError(_)) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[pollVoteMsgProcessor] Failed to decrypt poll vote message"
                        ]))).tags("messagings", "addons").sendLogs("poll-vote-decryption-error", {
                            sampling: 0.01
                        });
                    }
                }
                return o("WAWebPollVoteAddonTCValidation").validateAddonPollVotes(i, r);
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        afterUpsert: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = t.processMode;
                const r = yield o("WAWebPollVoteAddonTCValidation").getPollVoteParentsForProcessMode(e, t);
                yield o("WAWebShouldUpdateLastAddOnPreview").filterAndUpdateChatPreviews(e.map((e)=>{
                    let t;
                    try {
                        const n = r.getForAddon(e);
                        t = n?.pollHideVoterNames;
                    } catch (e) {}
                    return o("WAWebLastAddOnDBSerialization").lastAddOnPreviewCandidateFromVoteData(o("WAWebPollsVoteDataUtils").pollVoteMsgDataToVoteData(e), t);
                }));
                if (n !== o("WAWebAddonConstants").AddonProcessMode.HistorySync && n === o("WAWebAddonConstants").AddonProcessMode.OnlineReceive) {
                    yield o("WAWebDBMarkFutureproofMessagesReparsed").markFutureproofMessagesReparsed(e.map((e)=>e.id.toString()));
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        manageNotifications: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {});
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })()
    });
    l.default = d;
}, 98);