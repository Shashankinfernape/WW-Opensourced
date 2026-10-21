__d("WAWebPollsInvalidateChatPollMsgsAction", [
    "WALogger",
    "WAWebDBPollsInvalidateChatPolls",
    "WAWebFrontendMsgGetters",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                yield o("WAWebDBPollsInvalidateChatPolls").invalidateChatPolls(t.id);
                t.msgs.filter((e)=>o("WAWebFrontendMsgGetters").getAsPollCreation(e) && !e.pollInvalidated).forEach((e)=>{
                    e.pollInvalidated = true;
                });
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[POLLS] Failed to invalidate polls with error: ",
                    ""
                ])), error);
            }
        });
        return u.apply(this, arguments);
    }
    l.invalidateChatPollMsgs = s;
}, 98);