__d("WAWebInvalidateEventsAction", [
    "WALogger",
    "WAWebDBEventInvalidateChatEvents",
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
                yield o("WAWebDBEventInvalidateChatEvents").invalidateChatEvents(t.id);
                t.msgs.filter((e)=>o("WAWebFrontendMsgGetters").getAsEventCreation(e) && !e.eventInvalidated).forEach((e)=>{
                    e.eventInvalidated = true;
                });
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[EVENTS] Failed to invalidate events with error: ",
                    ""
                ])), error);
            }
        });
        return u.apply(this, arguments);
    }
    l.invalidateEventMsgsForChat = s;
}, 98);