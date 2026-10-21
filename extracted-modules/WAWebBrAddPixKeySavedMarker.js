__d("WAWebBrAddPixKeySavedMarker", [
    "WALogger",
    "WAWebBrAddPixKeyMessageOffer",
    "WAWebMsgCollection",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            try {
                const i = o("WAWebSchemaMessage").getMessageTable();
                const l = yield i.get(t.toString());
                const s = o("WAWebBrAddPixKeyMessageOffer").withAddPixKeyOfferSaved(l?.interactivePayload, n);
                if (l == null || s == null) {
                    return;
                }
                yield i.bulkCreateOrMerge([
                    {
                        id: l.id,
                        interactivePayload: s
                    }
                ]);
                o("WAWebMsgCollection").MsgCollection.get(t)?.set("interactivePayload", s);
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Add Pix key message: marking the saved offer failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("br-add-pix-key-saved-mark-failed");
            }
        });
        return u.apply(this, arguments);
    }
    l.markAddPixKeyMessageSaved = s;
}, 98);