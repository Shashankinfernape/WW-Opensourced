__d("WAWebSendForwardCounterIncrement", [
    "WAWebWorkerSafeBackendApi"
], function(t, n, r, o, a, i, l) {
    function e({ newsletterId: t, retriesRemaining: n, serverId: r }) {
        o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("incrementForwardCounterAPI", {
            newsletterId: t,
            retriesRemaining: n,
            serverId: r
        });
    }
    l.sendForwardCounterIncrement = e;
}, 98);