__d("WAWebPrepareMessageSendingAction", [
    "Promise",
    "WALogger",
    "WAWebChatGetters",
    "WAWebEagerlyEstablishE2eeSessionChatAction",
    "WAWebPrefetchDevicesAction",
    "WAWebStateUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = o("WAWebStateUtils").unproxy(t);
            if (!o("WAWebChatGetters").getIsUser(r) && !o("WAWebChatGetters").getIsGroup(r) && !r.id.isStatus()) {
                return (s || (s = n("Promise"))).resolve();
            }
            try {
                if (o("WAWebChatGetters").getIsUser(r)) {
                    yield (s || (s = n("Promise"))).all([
                        o("WAWebEagerlyEstablishE2eeSessionChatAction").eagerlyEstablishE2EESession(r),
                        o("WAWebPrefetchDevicesAction").prefetchDevices(r)
                    ]);
                } else {
                    yield o("WAWebEagerlyEstablishE2eeSessionChatAction").eagerlyEstablishE2EESession(r);
                }
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "prepareChatForMessageSending: failed with error: ",
                    ""
                ])), error);
            }
        });
        return c.apply(this, arguments);
    }
    l.prepareChatForMessageSending = u;
}, 98);