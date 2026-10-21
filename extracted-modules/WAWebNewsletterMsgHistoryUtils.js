__d("WAWebNewsletterMsgHistoryUtils", [
    "Promise",
    "WAWebBackendApi",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterGetMessagesJob",
    "WAWebNewsletterSystemMessages",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterValidationUtils",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        if (e.serverId == null) {
            if (t.serverId == null) {
                return 0;
            }
            return 1;
        }
        if (t.serverId == null) {
            return -1;
        }
        return e.serverId - t.serverId;
    }
    function u(e, t = new Set) {
        const n = [];
        const r = ()=>{
            const serverId = e[i - 1].serverId;
            const serverId_1 = e[i].serverId;
            if (serverId_1 == null || serverId == null) {
                return 0;
            }
            const l = serverId_1 - serverId;
            if (l <= 1) {
                return 0;
            }
            const s = Array.from({
                length: l - 1
            }, function(e, t) {
                return t + serverId + 1;
            }).filter((e)=>e >= o("WAWebNewsletterSystemMessages").EARLIEST_AVAILABLE_MESSAGE_ID && !t.has(e));
            if (s.length <= 0) {
                return 0;
            }
            while(s.length > 0){
                n.push(s.splice(0, o("WAWebNewsletterGatingUtils").getMaxMsgCountFromServer()));
            }
        };
        let a;
        for(var i = 1; i < e.length; i++){
            a = r();
        }
        return n;
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ jid, msgs, range, serverIdsToSkip = new Set }) {
            if (msgs.length < 2 && range == null) {
                return msgs;
            }
            const serverId = msgs[0].serverId;
            const serverId_1 = msgs[msgs.length - 1].serverId;
            if (serverId == null || serverId_1 == null) {
                return [];
            }
            if (serverId >= o("WAWebNewsletterDBUtils").TEMPORARY_SERVER_ID_LOWER_BOUND || serverId_1 >= o("WAWebNewsletterDBUtils").TEMPORARY_SERVER_ID_LOWER_BOUND || serverId_1 - serverId + 1 === msgs.length && range == null) {
                return msgs;
            }
            let p;
            if (range != null) {
                const { end, start } = range;
                const g = {
                    serverId: Math.min(start, end) - 1
                };
                const h = {
                    serverId: Math.max(start, end) + 1
                };
                p = u([
                    g
                ].concat(msgs).concat(h), serverIdsToSkip);
            } else {
                p = u(msgs, serverIdsToSkip);
            }
            if (p.length === 0) {
                return msgs;
            }
            const y = p.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield o("WAWebNewsletterGetMessagesJob").getNewsletterMessages(o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(String(jid)), e.length, {
                        after: e[0] - 1
                    }).catch(o("WAWebNullFunc").returnNull);
                    if (t != null) {
                        o("WAWebBackendApi").frontendFireAndForget("updateNewsletterMessages", t);
                        yield o("WAWebNewsletterBackendAddOnsUtils").updateAddOnDbRecords(t);
                        return t.msgs;
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            const C = (yield (e || (e = n("Promise"))).all(y)).flat().filter(Boolean);
            o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecordsJob(C).fireAndForget();
            return msgs.concat(C).sort(s);
        });
        return d.apply(this, arguments);
    }
    l.identifyMsgGaps = u;
    l.fillMsgHistoryGaps = c;
}, 98);