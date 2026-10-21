__d("WAWebPruneExpiredMessagesWithAddOns", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBEphemeralMessage",
    "WAWebMsgKey",
    "WAWebPageLoadLogging",
    "WAWebRequestDeleteAddOns",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WAWebPageLoadLogging").startPageLoadQplMeasure("pruneExpiredMessagesWithAddOns");
            const t = yield o("WAWebDBEphemeralMessage").pruneExpiredMessages();
            const t_length = t.length;
            if (t_length > 0) {
                const a = [];
                const i = new Set;
                t.forEach((e)=>{
                    const t = e.id.toString();
                    i.add(r("WAWebMsgKey").fromString(t).remote.toString());
                    a.push(t);
                });
                const l = Array.from(i.values()).join(",").toString();
                o("WAWebBackendApi").frontendFireAndForget("deleteModelsForLastAddOnPreview", {
                    messagesIds: a
                });
                yield o("WAWebRequestDeleteAddOns").requestDeleteAddOns(l, a);
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume] pruneExpiredMessagesWithAddOns ",
                    " msgs"
                ])), t_length);
            }
            o("WAWebPageLoadLogging").endPageLoadQplMeasure("pruneExpiredMessagesWithAddOns");
        });
        return u.apply(this, arguments);
    }
    l.pruneExpiredMessagesWithAddOns = s;
}, 98);