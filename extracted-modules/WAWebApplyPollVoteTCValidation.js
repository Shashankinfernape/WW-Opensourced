__d("WAWebApplyPollVoteTCValidation", [
    "Promise",
    "WALogger",
    "WAWebAddonLogUtils",
    "WAWebDBPollsPendingUpdatesStore",
    "WAWebPollNameHashMismatchLogger",
    "WAWebValidatePollUpdateTC",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = [];
            const i = [];
            for (const l of t){
                const u = o("WAWebValidatePollUpdateTC").validatePollUpdateTC({
                    parentMsg: l.parentMsg,
                    voteMetadata: l.voteMetadata
                });
                e: {
                    const c = u;
                    if ((typeof c === "object" && c !== null || typeof c === "function") && c.kind === "pass") {
                        a.push(l.vote);
                        break e;
                    }
                    if ((typeof c === "object" && c !== null || typeof c === "function") && c.kind === "mismatch") {
                        o("WAWebPollNameHashMismatchLogger").logPollNameHashMismatch(r);
                        break e;
                    }
                    if ((typeof c === "object" && c !== null || typeof c === "function") && c.kind === "park" && "dependencyId" in c) {
                        const m = c.dependencyId;
                        i.push(d(l, m));
                        break e;
                    }
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${c}`);
                }
            }
            if (o("WAWebAddonLogUtils").hasSettledWithError((yield (s || (s = n("Promise"))).allSettled(i)))) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[polls/tc] failed to park poll votes awaiting an edit"
                ]))).sendLogs("poll-tc-park-failed");
            }
            return a;
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return o("WAWebDBPollsPendingUpdatesStore").enqueuePollPendingUpdate({
            parentMsgKey: e.parentMsgKey.toString(),
            sender: e.sender.toString(),
            payloadType: "vote",
            payloadKey: "",
            dependencyType: "edit",
            dependencyId: t,
            msgKey: e.voteMsgKey.toString(),
            senderTimestampMs: e.senderTimestampMs,
            pollNameHash: m(e.voteMetadata?.pollNameHash ?? new Uint8Array(0)),
            selectedOptionLocalIds: new Uint8Array(e.selectedOptionLocalIds).buffer
        });
    }
    function m(e) {
        return new Uint8Array(e).buffer;
    }
    l.applyPollVoteTCValidation = u;
}, 98);