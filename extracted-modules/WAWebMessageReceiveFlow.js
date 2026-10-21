__d("WAWebMessageReceiveFlow", [
    "WAWebNullFunc",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "rx_queue_wait_ms",
        "rx_decrypt_ms",
        "rx_process_ms",
        "rx_decrypted_enc_count",
        "rx_signal_flush_ms",
        "rx_storage_txn_count"
    ];
    const s = {
        start: function() {},
        addPoint: function() {},
        annotate: function() {},
        addCheckpointPoint: function() {},
        settleQueue: function() {},
        endWithReceipt: function() {},
        endWithFailure: function() {},
        addToOfflineResumeTotals: function() {},
        recordOfflineAck: function() {},
        resetOfflineResumeTotals: function() {},
        takeOfflineResumeTotals: o("WAWebNullFunc").returnNull
    };
    let u = s;
    function c(e) {
        u = e;
    }
    function d(e, t, n) {
        const { isOffline, stanzaId } = e;
        u.start(e);
        return v(stanzaId, t(b(stanzaId, isOffline, n)));
    }
    function m() {
        u.resetOfflineResumeTotals();
    }
    function p(e) {
        return u.takeOfflineResumeTotals(e);
    }
    function _(e, t) {
        u.addCheckpointPoint(e, t);
    }
    function f(e, t) {
        const n = {
            int: {
                storage_batch_size: t.batchSize,
                storage_txn_count: t.transactionCount
            }
        };
        e.forEach((e)=>u.annotate(e, n));
        u.addToOfflineResumeTotals({
            rx_storage_txn_count: t.transactionCount
        });
    }
    function g(e, t) {
        if (e.length > 0) {
            u.recordOfflineAck();
        }
        e.forEach((e)=>u.endWithReceipt(e, {
                int: {
                    checkpoint_batch_size: t.batchSize,
                    checkpoint_signal_dirty_count: t.signalDirtyCount
                },
                string: {
                    receipt_path: "aggregated"
                }
            }));
    }
    function h(e) {
        e.forEach((e)=>u.endWithFailure(e, "nack"));
    }
    function y(e) {
        e.forEach((e)=>u.endWithFailure(e, "checkpoint_failed"));
    }
    function C(e, t) {
        let rx_decrypt_ms = 0;
        let rx_process_ms = 0;
        let rx_signal_flush_ms = 0;
        let i = 0;
        function l(e) {
            return s.apply(this, arguments);
        }
        function s() {
            s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = self.performance.now();
                const n = yield e();
                return [
                    n,
                    self.performance.now() - t
                ];
            });
            return s.apply(this, arguments);
        }
        return {
            timeDecrypt: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield l(e);
                    const n = t[0];
                    const o = t[1];
                    rx_decrypt_ms += o;
                    i++;
                    return n;
                });
                function t(t) {
                    return e.apply(this, arguments);
                }
                return t;
            })(),
            timeProcess: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield l(e);
                    const n = t[0];
                    const r = t[1];
                    rx_process_ms += r;
                    return n;
                });
                function t(t) {
                    return e.apply(this, arguments);
                }
                return t;
            })(),
            timeSignalFlush: (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    u.addPoint(e, "signal_flush_start");
                    const n = yield l(t);
                    const r = n[1];
                    rx_signal_flush_ms += r;
                    u.addPoint(e, "signal_flush_end");
                });
                function r(e) {
                    return t.apply(this, arguments);
                }
                return r;
            })(),
            finish: function() {
                u.annotate(e, {
                    int: {
                        decrypt_ms: Math.round(rx_decrypt_ms),
                        decrypted_enc_count: i,
                        process_ms: Math.round(rx_process_ms)
                    }
                });
                if (t) {
                    u.addToOfflineResumeTotals({
                        rx_decrypt_ms,
                        rx_decrypted_enc_count: i,
                        rx_process_ms,
                        rx_signal_flush_ms
                    });
                }
            }
        };
    }
    function b(stanzaId, isOffline, r) {
        const o = self.performance.now();
        return n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            u.addPoint(stanzaId, "queue_wait_end");
            if (isOffline) {
                u.addToOfflineResumeTotals({
                    rx_queue_wait_ms: self.performance.now() - o
                });
            }
            try {
                const n = yield r();
                u.addPoint(stanzaId, "handler_end");
                return n;
            } catch (error) {
                u.addPoint(stanzaId, "handler_end");
                u.endWithFailure(stanzaId, "handler_error");
                throw error;
            }
        });
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield t;
            u.settleQueue(e, n != null);
            return n;
        });
        return S.apply(this, arguments);
    }
    function R(e, t, n) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, decrypt_result) {
            try {
                yield t;
            } catch (error) {
                u.endWithFailure(e, "receipt_failed");
                throw error;
            }
            u.endWithReceipt(e, {
                string: {
                    decrypt_result,
                    receipt_path: "immediate"
                }
            });
        });
        return L.apply(this, arguments);
    }
    l.OFFLINE_RESUME_TOTAL_KEYS = e;
    l.setMessageReceiveFlowTracker = c;
    l.trackMessageReceive = d;
    l.resetOfflineResumeReceiveTotals = m;
    l.takeOfflineResumeReceiveTotals = p;
    l.markMessageReceiveCheckpoint = _;
    l.annotateMessageReceiveStorageCommit = f;
    l.endMessageReceiveWithAggregatedReceipt = g;
    l.endMessageReceiveWithNack = h;
    l.failMessageReceiveCheckpoint = y;
    l.startMessageReceiveDecryptTimer = C;
    l.trackMessageReceiveReceipt = R;
}, 98);