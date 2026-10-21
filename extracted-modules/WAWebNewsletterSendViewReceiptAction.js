__d("WAWebNewsletterSendViewReceiptAction", [
    "WALogger",
    "WAMemoizeConcurrent",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterSendViewReceiptJob",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = r("WAMemoizeConcurrent")(function({ id }) {
        return id.toString();
    }, function(e) {
        return u(e.id);
    });
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (o("WAWebNewsletterGatingUtils").isNewsletterViewCountSendEnabled()) {
                const n = o("WAWebMsgCollection").MsgCollection.get(t);
                if (n != null && o("WAWebMsgGetters").getIsNewsletterMsg(n) && !n.viewed) {
                    const itemServerId = n.serverId;
                    if (itemServerId != null) {
                        const a = o("WAWebFrontendMsgGetters").getChat(n);
                        try {
                            const i = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(a.id.toString());
                            yield o("WAWebNewsletterSendViewReceiptJob").sendViewReceiptJob(i, {
                                itemServerId,
                                itemId: t.toString()
                            });
                            yield o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.updateMsgsViewed({
                                ids: [
                                    t
                                ]
                            });
                        } catch (t) {
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[sendViewReceipt] Error sending view receipt"
                            ]))).tags("newsletter");
                        }
                    }
                }
            }
        });
        return c.apply(this, arguments);
    }
    l.sendViewReceipt = s;
}, 98);