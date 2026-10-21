__d("WAWebCommsHandleStanza", [
    "WALogger",
    "WAWebCommsHandleLoggedInStanzaDeferred",
    "WAWebCommsHandleWorkerCompatibleStanza",
    "WAWebHandleStanzaCommon",
    "WAWebOfflineHandler",
    "WAWebVoipBackendEnqueueCallOfferPlaceholder",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a = 0) {
            try {
                const i = yield d(t, n, a);
                if (i != null) {
                    return i;
                }
            } catch (n) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleStanza] exception for tag:",
                    " type:",
                    " id:",
                    ""
                ])), t.tag, t.attrs?.type, t.attrs?.id);
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleStanza] ",
                    ""
                ])), r("getErrorSafe")(n).stack).sendLogs("handle-stanza");
            }
            return "NO_ACK";
        });
        return c.apply(this, arguments);
    }
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = e.attrs;
            if (r.offline) {
                const a = parseInt(r.t, 10);
                const i = parseInt(r.offline, 10);
                o("WAWebOfflineHandler").OfflineMessageHandler.newOfflineStanza(a, n, i);
            }
            if (e.tag === "iq") {
                return o("WAWebHandleStanzaCommon").handleIq(e);
            }
            const l = o("WAWebCommsHandleWorkerCompatibleStanza").handleWorkerCompatibleStanza(e);
            return l ?? (o("WAWebVoipBackendEnqueueCallOfferPlaceholder").maybeEnqueueCallOfferPlaceholderFromStanza(e), o("WAWebCommsHandleLoggedInStanzaDeferred").handleLoggedInStanza(e, t));
        });
        return m.apply(this, arguments);
    }
    l.default = u;
}, 98);