__d("WAWebPrefetchDevicesAction", [
    "WALogger",
    "WAWebChatGetters",
    "WAWebDeviceSyncManager",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = new Map;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!e.id.isBot() && !o("WAWebChatGetters").getIsGroup(e)) {
                const t = String(e.id);
                let n = u.get(t);
                if (!n) {
                    n = m(e);
                    u.set(t, n);
                }
                return n;
            }
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                let n;
                if (o("WAWebChatGetters").getIsUser(t)) {
                    n = [
                        t.id
                    ];
                } else if (o("WAWebChatGetters").getIsGroup(t)) {
                    n = t.groupMetadata?.participants.map(function(e) {
                        return e.id;
                    });
                }
                if (n == null || n.length === 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "prefetchDevices: no wids to sync"
                    ])));
                    return;
                }
                yield o("WAWebDeviceSyncManager").maybeSyncDeviceList(n);
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[prefetchDevices] failed: ",
                    ""
                ])), error).sendLogs("device-sync-manager-prefetch-devices-failed");
            }
        });
        return p.apply(this, arguments);
    }
    l.prefetchDevices = c;
}, 98);