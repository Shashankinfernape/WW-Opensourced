__d("WAWebPollNameHashSeed", [
    "Promise",
    "WALogger",
    "WAWebCastToPollCreationMsg",
    "WAWebMsgType",
    "WAWebPollNameHashHistoryUtils",
    "WAWebPollNameHashUtils",
    "WAWebPollsGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebPollsGatingUtils").isPollTCReceivingEnabled() || !e.some((e)=>e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION)) {
                return e;
            }
            return (s || (s = n("Promise"))).all(e.map((e)=>{
                if (e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
                    return p(e);
                }
                return e;
            }));
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield f(e);
            if (t == null) {
                return e;
            }
            return babelHelpers.extends({}, e, {
                pollNameHashHistory: t
            });
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                return yield d(r("WAWebCastToPollCreationMsg")(t));
            } catch (n) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[polls/tc] failed to seed poll name hash history"
                ]))).sendLogs("poll-name-hash-seed-failed");
                return t;
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebPollsGatingUtils").isPollTCReceivingEnabled() || o("WAWebPollNameHashHistoryUtils").hasPollNameHashHistory(e) || e.id.remote.isNewsletter() || e.pollName.length === 0) {
                return null;
            }
            const t = yield o("WAWebPollNameHashUtils").tryComputePollNameHash(e.pollName);
            if (t == null) {
                return null;
            }
            return [
                {
                    editStanzaId: o("WAWebPollNameHashHistoryUtils").ORIGINAL_POLL_VERSION_EDIT_STANZA_ID,
                    pollNameHash: t
                }
            ];
        });
        return g.apply(this, arguments);
    }
    l.maybeSeedInitialPollNameHashes = u;
    l.maybeSeedInitialPollNameHashForOutgoing = d;
}, 98);