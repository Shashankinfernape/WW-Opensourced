__d("WAWebThreadLoggingNotification", [
    "Promise",
    "WALogger",
    "WAWebThreadInteractionDataNotificationWamEvent",
    "WAWebThreadLoggingFalco",
    "WamThreadInteractionDataNotificationFalcoEvent",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const i = [];
            try {
                t.forEach((e)=>{
                    if (a) {
                        i.push(d(e));
                        return;
                    }
                    const t = new (o("WAWebThreadInteractionDataNotificationWamEvent")).ThreadInteractionDataNotificationWamEvent(m(e));
                    t.commit();
                });
                yield (s || (s = n("Promise"))).all(i);
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "ctlv2: error uploading Notification WAM event"
                ]))).catching(t instanceof Error ? t : r("err")(String(t))).sendLogs("thread-logging-notification-upload-failure");
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        const t = m(e);
        return o("WAWebThreadLoggingFalco").logThreadInteractionFalcoEvent(r("WamThreadInteractionDataNotificationFalcoEvent"), function() {
            return {
                thread_ds: t.threadDs,
                thread_id: t.threadId,
                is_a_group: t.isAGroup
            };
        });
    }
    function m({ event: t, threadDs: n, threadId: r }) {
        const o = t.contactInfo;
        return {
            threadDs: n,
            threadId: r,
            isAGroup: o.isAGroup
        };
    }
    l.ThreadInteractionNotificationWamTrigger = u;
    l.logThreadInteractionNotificationFalcoEvent = d;
}, 98);