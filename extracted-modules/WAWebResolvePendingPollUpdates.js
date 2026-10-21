__d("WAWebResolvePendingPollUpdates", [
    "Promise",
    "WACryptoUtils",
    "WALogger",
    "WAWebAddonGatingUtils",
    "WAWebAddonProcessMsgs",
    "WAWebBackendApi",
    "WAWebDBPollsPendingUpdatesStore",
    "WAWebDBPollsUpsertVotes",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPollNameHashHistoryUtils",
    "WAWebPollNameHashMismatchLogger",
    "WAWebPollNameHashUtils",
    "WAWebPollsVoteDataUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.map(m).filter(Boolean);
            yield (u || (u = n("Promise"))).all(t.map(p));
        });
        return d.apply(this, arguments);
    }
    function m({ parentMsg, protocolMsg }) {
        const protocolMsg_pollName = protocolMsg.pollName;
        const a = protocolMsg.id.id;
        if (parentMsg.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION || parentMsg.id.remote.isNewsletter() || a === o("WAWebPollNameHashHistoryUtils").ORIGINAL_POLL_VERSION_EDIT_STANZA_ID || protocolMsg_pollName == null || protocolMsg_pollName.length === 0) {
            return null;
        }
        return {
            parentMsgKey: parentMsg.id,
            editStanzaId: a,
            pollName: protocolMsg_pollName
        };
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield f(e);
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[polls/tc] failed to resolve parked poll updates for edit ",
                    ""
                ])), e.editStanzaId).catching(r("getErrorSafe")(error)).sendLogs("poll-tc-resolve-failed");
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ editStanzaId, parentMsgKey, pollName }) {
            const a = yield o("WAWebPollNameHashUtils").tryComputePollNameHash(pollName);
            if (a != null) {
                const i = yield C(parentMsgKey, editStanzaId);
                const l = [];
                for (const s of i){
                    const u = v(s, a, parentMsgKey);
                    if (u != null) {
                        l.push(u);
                    }
                }
                if (l.length > 0) {
                    yield h(l);
                }
            }
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(o("WAWebMsgType").MSG_TYPE.POLL_UPDATE)) {
                yield o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans(e.map(o("WAWebPollsVoteDataUtils").voteDataToPollVoteMsgData), null);
                return;
            }
            const votes = yield o("WAWebDBPollsUpsertVotes").upsertVotesDb(e);
            yield o("WAWebBackendApi").frontendSendAndReceive("upsertVotesModelCollection", {
                votes,
                votesToRemove: null,
                restoredFromDb: false
            });
        });
        return y.apply(this, arguments);
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = [
                e,
                o("WAWebLidMigrationUtils").getAlternateMsgKey(e)
            ].filter(Boolean);
            const a = yield (u || (u = n("Promise"))).all(r.map((e)=>o("WAWebDBPollsPendingUpdatesStore").drainForDependency({
                    parentMsgKey: e.toString(),
                    dependencyType: "edit",
                    dependencyId: t
                })));
            return a.flat();
        });
        return b.apply(this, arguments);
    }
    function v(t, n, parentMsgKey) {
        try {
            if (o("WACryptoUtils").uint8ArraysEqual(new Uint8Array(t.pollNameHash), n)) {
                return S(t, parentMsgKey);
            }
            o("WAWebPollNameHashMismatchLogger").logPollNameHashMismatch("pending-resolution-vote");
            return null;
        } catch (t) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[polls/tc] dropping malformed parked poll vote"
            ]))).sendLogs("poll-tc-malformed-parked-vote");
            return null;
        }
    }
    function S(e, parentMsgKey) {
        e: {
            if (e.payloadType === "vote") {
                const sender = o("WAWebWidFactory").createUserWidOrThrow(e.sender);
                return {
                    msgKey: r("WAWebMsgKey").fromString(e.msgKey),
                    parentMsgKey,
                    selectedOptionLocalIds: Array.from(new Uint8Array(e.selectedOptionLocalIds)),
                    senderTimestampMs: e.senderTimestampMs,
                    t: undefined,
                    sender,
                    ack: undefined,
                    read: o("WAWebUserPrefsMeUser").isMeAccount(sender)
                };
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e.payloadType}`);
        }
    }
    l.resolvePendingUpdatesForPollEdits = c;
}, 98);