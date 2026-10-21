__d("WAWebBulkUnscheduleScheduledMsgs", [
    "Promise",
    "WALogger",
    "WAWebChatCollection",
    "WAWebScheduledMsgActionLogger",
    "WAWebUnscheduleMsgAction",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const i = o("WAWebChatCollection").ChatCollection.get(t);
            if (i != null && a.length > 0) {
                o("WAWebScheduledMsgActionLogger").logScheduledMsgTapUnschedule(i, a.length);
            }
            yield a.reduce((acc, item)=>acc.then(()=>o("WAWebUnscheduleMsgAction").unscheduleMsgAction(t, item, {
                        shouldLogTap: false
                    }).catch((t)=>{
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[scheduled_msg][bulk-unschedule] failed to unschedule one message"
                        ]))).catching(r("getErrorSafe")(t)).sendLogs("scheduled-msg-bulk-unschedule-fail");
                    })), (s || (s = n("Promise"))).resolve());
        });
        return c.apply(this, arguments);
    }
    l.bulkUnscheduleScheduledMsgs = u;
}, 98);