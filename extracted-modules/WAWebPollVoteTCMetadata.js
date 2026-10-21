__d("WAWebPollVoteTCMetadata", [
    "WALogger",
    "WAWebAck",
    "WAWebMsgGetters",
    "WAWebPollNameHashUtils",
    "WAWebPollsGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                return yield c(t);
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[polls/tc] failed to build outgoing poll vote metadata"
                ]))).sendLogs("poll-tc-vote-metadata-failed");
                return null;
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = o("WAWebMsgGetters").getPollName(e);
            if (!o("WAWebPollsGatingUtils").isPollTCSendingEnabled() || o("WAWebMsgGetters").getId(e).remote.isNewsletter() || n == null || n.length === 0 || p(e)) {
                return null;
            }
            const r = o("WAWebMsgGetters").getLatestEditMsgKey(e)?.id;
            const a = yield o("WAWebPollNameHashUtils").tryComputePollNameHash(n);
            if (a == null) {
                return null;
            }
            if (r != null && r.length > 0) {
                return {
                    pollNameHash: a,
                    lastEditStanzaId: r
                };
            }
            return {
                pollNameHash: a
            };
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        const t = e?.pollNameHash;
        if (t != null) {
            const n = e?.lastEditStanzaId;
            if (n != null && n.length > 0) {
                return {
                    pollNameHash: new Uint8Array(t),
                    lastEditStanzaId: n
                };
            }
            return {
                pollNameHash: new Uint8Array(t)
            };
        }
    }
    function p(e) {
        return o("WAWebMsgGetters").getLatestEditMsgKey(e)?.fromMe === true && (o("WAWebMsgGetters").getAck(e) ?? o("WAWebAck").ACK.CLOCK) < o("WAWebAck").ACK.SENT;
    }
    l.buildOutgoingPollVoteTCMetadata = s;
    l.pollVoteTCMetadataFromProto = m;
}, 98);