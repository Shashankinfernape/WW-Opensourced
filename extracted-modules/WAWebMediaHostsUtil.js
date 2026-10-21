__d("WAWebMediaHostsUtil", [
    "WAMemoizeCache",
    "WAWebMediaHosts",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = "https://static.whatsapp.net";
    const s = o("WAMemoizeCache").memoizeWithArgs(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const t = yield o("WAWebMediaHosts").mediaHosts.getHostsInfoByBucket({
            preferredBuckets: [
                1
            ]
        });
        const t_selectedHost = t.selectedHost;
        if (t_selectedHost != null) {
            return `https://${t_selectedHost.hostname}`;
        }
        return e;
    }), function() {
        return "";
    });
    l.getStaticMediaHostName = s;
}, 98);