__d("WAWebChatSendDeleteMsgsBridge", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBMessageDelete",
    "WAWebDeleteMessageForMeSync",
    "WAWebRequestDeleteAddOns",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i) {
            const l = [];
            const s = [];
            t.forEach((e)=>{
                l.push(e.id);
                s.push(String(e.rowId));
            });
            const u = yield r("WAWebDeleteMessageForMeSync").getDeleteForMeMutations(t, a);
            const c = l.map((e)=>e.toString());
            return o("WAWebSyncdCoreApi").lockForSync([
                "message",
                "label-association",
                "chat",
                "reporting-info",
                "message-association"
            ], u, function() {
                return o("WAWebDBMessageDelete").removeMessagesFromHistory(c, {
                    deleteAssociatedMsgs: false
                });
            }).then((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (c.length > 0) {
                        yield o("WAWebBackendApi").frontendSendAndReceive("deleteModelsForLastAddOnPreview", {
                            messagesIds: c
                        });
                        yield o("WAWebRequestDeleteAddOns").requestDeleteAddOns(i.toString(), c);
                    }
                    return e;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "remove messages from history failed"
                ]))).verbose().sendLogs("remove messages from history failed when send delete messages");
                throw r("err")("remove messages from history failed");
            });
        });
        return u.apply(this, arguments);
    }
    l.sendDeleteMsgs = s;
}, 98);