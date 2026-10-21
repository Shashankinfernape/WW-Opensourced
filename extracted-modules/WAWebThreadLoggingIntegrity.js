__d("WAWebThreadLoggingIntegrity", [
    "Promise",
    "WALogger",
    "WAWebThreadInteractionDataIntegrityWamEvent",
    "WAWebThreadLoggingFalco",
    "WamThreadInteractionDataIntegrityFalcoEvent",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
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
                    const t = new (o("WAWebThreadInteractionDataIntegrityWamEvent")).ThreadInteractionDataIntegrityWamEvent(m(e));
                    t.commit();
                });
                yield (s || (s = n("Promise"))).all(i);
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "ctlv2: error uploading Integrity WAM event"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("thread-logging-integrity-upload-failure");
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        const t = m(e);
        return o("WAWebThreadLoggingFalco").logThreadInteractionFalcoEvent(r("WamThreadInteractionDataIntegrityFalcoEvent"), function() {
            return {
                thread_ds: t.threadDs,
                thread_id: t.threadId
            };
        });
    }
    function m({ threadDs: t, threadId: n }) {
        return {
            threadDs: t,
            threadId: n
        };
    }
    l.ThreadInteractionIntegrityWamTrigger = u;
    l.logThreadInteractionIntegrityFalcoEvent = d;
}, 98);