__d("useWAWebForwardedNewsletterMessageClickHandler", [
    "WAJids",
    "WAWebChatEntryPoint",
    "WAWebMsgGetters",
    "WAWebNewsletterApiParse",
    "WAWebNewsletterExecApiCmd",
    "WAWebNewsletterOpenAtAction",
    "WAWebShowForwardedNewsletterMessageIndicator",
    "WAWebWamEnumTsSurface",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const n = o("react-compiler-runtime").c(5);
        let r;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebMsgGetters").getForwardedNewsletterMessageInfo,
                o("WAWebMsgGetters").getType
            ];
            n[0] = r;
        } else {
            r = n[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e, r);
        const i = a[0];
        const l = a[1];
        if (!o("WAWebShowForwardedNewsletterMessageIndicator").showForwardedNewsletterMessageIndicator(i, l, t)) {
            return null;
        }
        const { newsletterId, serverMessageId } = i;
        if (newsletterId == null) {
            return null;
        }
        let c;
        if (n[1] !== e.remote || n[2] !== newsletterId || n[3] !== serverMessageId) {
            c = function() {
                if (newsletterId === e.remote && serverMessageId != null) {
                    o("WAWebNewsletterOpenAtAction").openNewsletterAt({
                        newsletterJid: o("WAJids").toNewsletterJid(newsletterId.toJid()),
                        serverId: serverMessageId,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ForwardedNewsletterMessage
                    });
                } else {
                    o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd({
                        identifier: newsletterId.toString(),
                        identifierType: o("WAWebNewsletterApiParse").NewsletterIdentifierType.Id,
                        type: "view",
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ForwardedNewsletterMessage,
                        discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD,
                        serverId: serverMessageId
                    });
                }
            };
            n[1] = e.remote;
            n[2] = newsletterId;
            n[3] = serverMessageId;
            n[4] = c;
        } else {
            c = n[4];
        }
        return c;
    }
    l.useForwardedNewsletterMessageClickHandler = e;
}, 98);