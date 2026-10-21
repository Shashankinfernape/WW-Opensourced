__d("WAWebBrokerBackendInterface", [
    "WAWebBrokerGlobalAppState",
    "WAWebCrashlog",
    "WAWebInvocationDispatcher"
], function(t, n, r, o, a, i, l) {
    const e = {
        setLogoutState: function(t) {
            r("WAWebBrokerGlobalAppState").isLogoutInProgress = t;
            return r("WAWebInvocationDispatcher").invoke("setLogoutState", [
                t
            ]);
        },
        sendLogs: function(t, n) {
            return o("WAWebCrashlog").sendLogs(t, {
                sampling: n?.sampling,
                separateEmployeeLog: n?.separateEmployeeLog,
                employeeSampling: n?.employeeSampling
            });
        },
        deleteDbEncKeyCache: function() {
            return r("WAWebInvocationDispatcher").invoke("deleteDbEncKeyCache", []);
        },
        initDatabaseEncnKey: function(t) {
            return r("WAWebInvocationDispatcher").invoke("initDatabaseEncnKey", [
                t
            ]);
        },
        generateFinalDbEncryptionAndFtsKey: function(t) {
            return r("WAWebInvocationDispatcher").invoke("generateFinalDbEncryptionAndFtsKey", [
                t
            ]);
        },
        setSchemaVersions: function(t) {
            return r("WAWebInvocationDispatcher").invoke("setSchemaVersions", [
                t
            ]);
        }
    };
    l.default = e;
}, 98);