__d("BanzaiConsts", [], function(t, n, r, o, a, i) {
    const e = {
        SEND: "Banzai:SEND",
        OK: "Banzai:OK",
        ERROR: "Banzai:ERROR",
        SHUTDOWN: "Banzai:SHUTDOWN",
        BASIC: "basic",
        VITAL: "vital",
        BASIC_WAIT: 60000,
        BASIC_WAIT_COMET: 2000,
        VITAL_WAIT: 1000,
        BATCH_SIZE_LIMIT: 64000,
        EXPIRY: 86400000,
        BATCH_TIMEOUT: 10000,
        LAST_STORAGE_FLUSH: "banzai:last_storage_flush",
        STORAGE_FLUSH_INTERVAL: 43200000,
        ENSURE_LAZY_QUEUE_FLUSH_TIMEOUT: 30000,
        POST_READY: 0,
        POST_INFLIGHT: 1,
        POST_SENT: 2
    };
    i.default = e;
}, 66);