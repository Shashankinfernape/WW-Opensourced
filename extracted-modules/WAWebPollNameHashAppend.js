__d("WAWebPollNameHashAppend", [
    "Promise",
    "WALogger",
    "WAWebAddonLogUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebPollNameHashHistoryUtils",
    "WAWebPollNameHashUtils",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const a = yield (u || (u = n("Promise"))).allSettled(t.map(_));
                if (o("WAWebAddonLogUtils").hasSettledWithError(a)) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[polls/tc] failed to build poll name hash entries"
                    ]))).sendLogs("poll-name-hash-append-failed");
                }
                const i = r("compactMap")(a, function(e) {
                    if (e.status === "fulfilled") {
                        return e.value;
                    }
                    return null;
                });
                if (i.length > 0) {
                    yield m(g(i));
                }
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[polls/tc] failed to append poll name hashes"
                ]))).sendLogs("poll-name-hash-append-failed");
            }
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = Array.from(e.keys());
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "message"
            ], (()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*([r]) {
                    const a = yield r.bulkGet(t);
                    const i = [];
                    for (const l of a){
                        if (!(l == null || !o("WAWebPollNameHashHistoryUtils").hasPollNameHashHistory(l))) {
                            const u = h(l.pollNameHashHistory, e.get(l.id) ?? []);
                            if (u != null) {
                                i.push({
                                    id: l.id,
                                    pollNameHashHistory: u
                                });
                            }
                        }
                    }
                    if (i.length > 0) {
                        yield r.bulkCreateOrMerge(i);
                    }
                });
                return function(e) {
                    return r.apply(this, arguments);
                };
            })());
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ parentMsg, protocolMsg }) {
            const protocolMsg_pollName = protocolMsg.pollName;
            const a = protocolMsg.id.id;
            if (parentMsg.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION || parentMsg.id.remote.isNewsletter() || a === o("WAWebPollNameHashHistoryUtils").ORIGINAL_POLL_VERSION_EDIT_STANZA_ID || protocolMsg_pollName == null || protocolMsg_pollName.length === 0) {
                return null;
            }
            const i = yield o("WAWebPollNameHashUtils").tryComputePollNameHash(protocolMsg_pollName);
            if (i == null) {
                return null;
            }
            return {
                parentMsgKey: parentMsg.id.toString(),
                entry: {
                    editStanzaId: a,
                    pollNameHash: i
                }
            };
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        const t = new Map;
        for (const n of e){
            const { entry, parentMsgKey } = n;
            const a = t.get(parentMsgKey);
            if (a != null) {
                a.push(entry);
            } else {
                t.set(parentMsgKey, [
                    entry
                ]);
            }
        }
        return t;
    }
    function h(pollNameHashHistory, t) {
        let n = pollNameHashHistory;
        for (const r of t){
            const { editStanzaId, pollNameHash } = r;
            if (o("WAWebPollNameHashHistoryUtils").getPollNameHashFor({
                pollNameHashHistory: n
            }, editStanzaId) == null) {
                n = o("WAWebPollNameHashHistoryUtils").appendPollNameHash(n, editStanzaId, pollNameHash);
            }
        }
        if (n === pollNameHashHistory) {
            return null;
        }
        return n;
    }
    l.appendPollNameHashesForEdits = c;
}, 98);