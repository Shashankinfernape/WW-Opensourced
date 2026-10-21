__d("WADeprecatedSendIq", [
    "Promise",
    "WAAckParser",
    "WAComms",
    "WALogger",
    "WAParseIqResponse"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e, t) {
        return o("WAComms")._sendIq(e, false).then((e)=>o("WAParseIqResponse").parseIqResponse(e, t));
    }
    function c(e, t, n) {
        return o("WAComms")._sendIq(e, false).then((e)=>o("WAParseIqResponse").parseIqResponse(e, t, n));
    }
    function d(e, t, n) {
        return o("WAComms")._sendIq(e, false, n).then((e)=>o("WAParseIqResponse").parseIqResponse(e, t));
    }
    function m(e, t) {
        return o("WAComms")._sendIq(e, true).then((e)=>o("WAParseIqResponse").parseIqResponse(e, t));
    }
    function p(e, t) {
        return _(e, t).then(()=>{});
    }
    function _(t, r) {
        return new (s || (s = n("Promise")))(function(a) {
            const i = o("WAComms").singletonOrThrowIfUninitialized("deprecatedSendStanzaAndReturnAck");
            const l = function(t) {
                const e = o("WAAckParser").AckParser.parse(t);
                if (!e.error && o("WAAckParser").ackMatchesTemplate(e.success, r)) {
                    return t;
                }
                return null;
            };
            const u = {
                type: "ack",
                parseAndTest: l,
                resolve: a,
                stanza: t,
                attachedToSocketId: o("WAComms").DEFAULT_SOCKET_ID,
                orderedId: o("WAComms").getAndIncrementNextOrderedId()
            };
            i.addAckHandler(u);
            if (!i.isSocketConnected()) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Comms has no open socket, will send stanza when socket opens"
                ])));
                return;
            }
            i.callStanza(t).catch((e)=>{
                i.removeAckHandler(u);
                u.resolve((s || (s = n("Promise"))).reject(e));
            });
        });
    }
    function f(e, t) {
        o("WAComms").castSmaxStanza(e, t);
    }
    l.deprecatedSendIq = u;
    l.deprecatedSendIqErrorParser = c;
    l.deprecatedSendIqIfConnectedWithin = d;
    l.deprecatedSendIqWithoutRetry = m;
    l.deprecatedSendStanzaAndWaitForAck = p;
    l.deprecatedSendStanzaAndReturnAck = _;
    l.deprecatedCastStanza = f;
}, 98);