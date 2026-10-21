__d("WAWebSendAggregateDeliveryReceipts", [
    "$InternalEnum",
    "Promise",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBoolFunc",
    "WAWebDBMsgUtils",
    "WAWebHandleMsgMetaUtils",
    "WAWebMsgProcessingApiUtils",
    "WAWebPollsVotesSchema",
    "WAWebSchemaReactions",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = n("$InternalEnum").Mirrored([
        "Message",
        "Reaction",
        "PollVote",
        "NotSupportedAddon"
    ]);
    function u(e) {
        if (e.hasHideFailEnc) {
            if (o("WAWebHandleMsgMetaUtils").isPollVoteMsgMeta(e.msgMeta)) {
                return s.PollVote;
            }
            if (o("WAWebHandleMsgMetaUtils").isReactionMsgMeta(e.msgMeta)) {
                return s.Reaction;
            }
            return s.NotSupportedAddon;
        }
        return s.Message;
    }
    function c(e) {
        const t = new Map;
        e.forEach((e)=>{
            const r = u(e);
            const o = t.get(r) ?? t.set(r, []).get(r);
            o?.push(e);
        });
        return t;
    }
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = e.map(({ msgInfo: t })=>o("WAWebMsgProcessingApiUtils").messageInfoToKey(t));
            const a = o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd ? yield t(r) : r.map(o("WAWebBoolFunc").returnFalse);
            const i = new Set;
            const l = [];
            for (const [u, c] of a.entries()){
                if (c) {
                    i.add(r[u].toString());
                } else {
                    l.push(r[u].toString());
                }
            }
            if (l.length === 0) {
                return i;
            }
            const d = yield n(l);
            return new Set([].concat(Array.from(i), Array.from(d)));
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e === s.Message) {
                return d(t, function(e) {
                    return o("WAWebBackendApi").frontendSendAndReceive("hasMsgsInCollection", {
                        msgKeys: e
                    });
                }, (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const t = new Set;
                        return o("WAWebDBMsgUtils").getMsgsExistByMsgKey(e).then((n)=>{
                            for (const [o, a] of n.entries()){
                                if (a) {
                                    t.add(e[o]);
                                }
                            }
                            return t;
                        });
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            }
            if (e === s.Reaction) {
                return d(t, function(e) {
                    return o("WAWebBackendApi").frontendSendAndReceive("hasReactionsInCollection", {
                        msgKeys: e
                    });
                }, function(e) {
                    const t = new Set;
                    return o("WAWebSchemaReactions").getReactionsTable().anyOf([
                        "msgKey"
                    ], e).then((e)=>{
                        for (const n of e){
                            t.add(n.msgKey);
                        }
                        return t;
                    });
                });
            }
            if (e === s.PollVote) {
                return d(t, function(e) {
                    return o("WAWebBackendApi").frontendSendAndReceive("hasPollVotesInCollection", {
                        msgKeys: e
                    });
                }, function(e) {
                    return o("WAWebPollsVotesSchema").getTable().anyOf([
                        "msgKey"
                    ], e, {
                        shouldDecrypt: false
                    }).then((e)=>{
                        const t = new Set;
                        for (const n of e){
                            t.add(n.msgKey);
                        }
                        return t;
                    });
                });
            }
            if (e === s.NotSupportedAddon) {
                return new Set(t.map(({ msgInfo: t })=>o("WAWebMsgProcessingApiUtils").messageInfoToKey(t).toString()));
            }
            return (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            })();
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t, n]) {
            let r = [];
            const a = [];
            for (const i of n){
                if (i.msgReceivedTimes > 1) {
                    r.push({
                        isInDB: true,
                        receipt: i
                    });
                } else {
                    a.push(i);
                }
            }
            if (a.length > 0) {
                const l = yield p(t, a);
                r = r.concat(a.map((e)=>({
                        isInDB: l.has(o("WAWebMsgProcessingApiUtils").messageInfoToKey(e.msgInfo).toString()),
                        receipt: e
                    })));
            }
            return r;
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const o = c(t);
            const a = yield (e || (e = n("Promise"))).all(Array.from(o.entries(), f));
            return [].concat(...a);
        });
        return y.apply(this, arguments);
    }
    l.aggregateDeliveryReceipts = h;
}, 98);