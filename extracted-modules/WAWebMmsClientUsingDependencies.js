__d("WAWebMmsClientUsingDependencies", [
    "WAWebMmsClientCheckIfUploadExistsMethod",
    "WAWebMmsClientUploadMethod"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebMmsClientUploadMethod").buildUploadMethodWithDependencies({
            mediaHosts: e.mediaHosts,
            networkStatus: e.networkStatus
        });
        const n = o("WAWebMmsClientCheckIfUploadExistsMethod").createCheckIfUploadExistsWithDependencies({
            mediaHosts: e.mediaHosts,
            networkStatus: e.networkStatus
        });
        return {
            upload: t,
            checkIfUploadExists: n
        };
    }
    l.createPartialMmsClientUsingDependencies = e;
}, 98);