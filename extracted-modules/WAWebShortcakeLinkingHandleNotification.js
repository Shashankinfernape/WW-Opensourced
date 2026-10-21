__d("WAWebShortcakeLinkingHandleNotification", [
    "WALogger",
    "WASmaxMdSetPrimaryEphemeralIdentityNotificationRPC",
    "WASmaxMessageFallbackDeliverRPC",
    "WAWebCreateNackFromStanza",
    "WAWebNoop",
    "WAWebShortcakeLinkingApi",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c = null;
    function d(t) {
        const t_content = t.content;
        if (!Array.isArray(t_content) || t_content.length === 0) {
            return o("WASmaxMessageFallbackDeliverRPC").makeDeliverResponseBadStanza({
                ackError: o("WAWebCreateNackFromStanza").NackReason.ParsingError
            }, t);
        }
        const tag = t_content[0].tag;
        if (tag === "primary_ephemeral_identity") {
            return m(t);
        }
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "Shortcake: unhandled crsc_continuation child tag: ",
            ""
        ])), tag);
        return o("WASmaxMessageFallbackDeliverRPC").makeDeliverResponseBadStanza({
            ackError: o("WAWebCreateNackFromStanza").NackReason.ParsingError
        }, t);
    }
    function m(e) {
        const t = o("WASmaxMdSetPrimaryEphemeralIdentityNotificationRPC").receiveSetPrimaryEphemeralIdentityNotificationRPC(e);
        const { makeSetPrimaryEphemeralIdentityNotificationResponseAck, parsedRequest } = t;
        if (!parsedRequest) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: parse PrimaryEphemeralIdentity failed"
            ])));
            return o("WASmaxMessageFallbackDeliverRPC").makeDeliverResponseBadStanza({
                ackError: o("WAWebCreateNackFromStanza").NackReason.ParsingError
            }, e);
        }
        var i = o("WAWebShortcakeLinkingApi").handlePrimaryEphemeralIdentity(parsedRequest.primaryEphemeralIdentityElementValue).then(r("WAWebNoop")).catch((e)=>{
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: error handling PrimaryEphemeralIdentity: ",
                ""
            ])), r("getErrorSafe")(e).message);
        }).finally(()=>{
            if (c === i) {
                c = null;
            }
        });
        c = i;
        return makeSetPrimaryEphemeralIdentityNotificationResponseAck();
    }
    l.handleShortcakeLinkingNotification = d;
}, 98);