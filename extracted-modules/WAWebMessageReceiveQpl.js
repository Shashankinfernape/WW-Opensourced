__d("WAWebMessageReceiveQpl", [
    "QPLFlow",
    "WAWebLongTaskAccumulator",
    "WAWebMessageReceiveFlow",
    "qpl"
], function(t, n, r, o, a, i, l) {
    const e = r("qpl")._(891430343, "3728");
    const s = 300 * 1000;
    const u = 1000;
    const c = [].concat(o("WAWebMessageReceiveFlow").OFFLINE_RESUME_TOTAL_KEYS, [
        "rx_stanza_count",
        "rx_checkpoint_count",
        "rx_storage_commit_ms",
        "rx_checkpoint_signal_write_ms",
        "rx_evicted_flow_count"
    ]);
    const d = {
        storage_commit_end: "rx_storage_commit_ms",
        checkpoint_signal_write_end: "rx_checkpoint_signal_write_ms"
    };
    const m = new Map;
    const p = new Map(c.map((e)=>[
            e,
            0
        ]));
    const _ = new WeakMap;
    let f = null;
    let g = null;
    let h = null;
    const y = {
        start: C,
        addPoint: b,
        annotate: v,
        addCheckpointPoint: S,
        settleQueue: L,
        endWithReceipt: E,
        endWithFailure: k,
        addToOfflineResumeTotals: I,
        recordOfflineAck: T,
        resetOfflineResumeTotals: D,
        takeOfflineResumeTotals: x
    };
    function C({ chatType: n, isOffline: r, queueDepth: a, queueImpl: i, stanzaId: l, stanzaType: u }) {
        M(l, "superseded");
        w();
        if (r) {
            P("rx_stanza_count", 1);
            $(i);
        }
        const c = o("QPLFlow").startQPLFlow(e, {
            annotations: {
                bool: {
                    is_offline: r
                },
                int: {
                    queue_depth_offline: a.offline,
                    queue_depth_online: a.online
                },
                string: {
                    chat_type: n,
                    message_queue_impl: i,
                    stanza_type: u
                }
            },
            timeoutInMs: s
        });
        c.addPoint("queue_wait_start");
        m.set(l, {
            flow: c,
            handlerEnded: false,
            longTasksAtStart: o("WAWebLongTaskAccumulator").getLongTaskTotals(),
            storageCommitted: false
        });
    }
    function b(e, t) {
        const n = m.get(e);
        if (n != null) {
            n.flow.addPoint(t);
            if (t === "handler_end") {
                n.handlerEnded = true;
            }
        }
    }
    function v(e, t) {
        m.get(e)?.flow.addAnnotations(t);
    }
    function S(e, t) {
        R(e, t);
        e.forEach((e)=>{
            const n = m.get(e);
            if (n != null) {
                n.flow.addPoint(t);
                if (t === "storage_commit_end") {
                    n.storageCommitted = true;
                }
            }
        });
    }
    function R(e, t) {
        const n = self.performance.now();
        if (t === "storage_commit_start") {
            P("rx_checkpoint_count", 1);
        }
        const r = d[t];
        if (r == null) {
            _.set(e, n);
            return;
        }
        const o = _.get(e);
        if (o != null) {
            P(r, n - o);
        }
    }
    function L(e, t) {
        const n = m.get(e);
        if (n != null) {
            n.flow.addPoint("queue_settled");
            if (!n.handlerEnded) {
                n.flow.addAnnotations({
                    bool: {
                        queue_timed_out: true
                    }
                });
            }
            if (t) {
                k(e, "nack");
            }
        }
    }
    function E(e, t) {
        const n = A(e);
        if (n != null) {
            n.flow.addPoint("receipt_sent");
            n.flow.addAnnotations({
                bool: {
                    storage_committed_before_receipt: n.storageCommitted
                }
            });
            N(n);
            n.flow.endSuccess(t);
        }
    }
    function k(e, t) {
        const n = A(e);
        if (n != null) {
            N(n);
            n.flow.endFail(t);
        }
    }
    function I(e) {
        o("WAWebMessageReceiveFlow").OFFLINE_RESUME_TOTAL_KEYS.forEach((t)=>{
            const n = e[t];
            if (n != null) {
                P(t, n);
            }
        });
    }
    function T() {
        const e = self.performance.now();
        if (f == null) {
            f = e;
        }
        g = e;
    }
    function D() {
        c.forEach((e)=>p.set(e, 0));
        f = null;
        g = null;
        h = null;
    }
    function x(e) {
        const t = {};
        p.forEach((e, n)=>{
            t[n] = Math.round(e);
        });
        const n = f;
        const r = g;
        if (n != null && r != null) {
            t.rx_first_ack_offset_ms = Math.round(n - e);
            t.rx_last_ack_offset_ms = Math.round(r - e);
        }
        const o = h;
        D();
        if (o == null) {
            return {
                int: t
            };
        }
        return {
            int: t,
            string: {
                rx_message_queue_impl: o
            }
        };
    }
    function $(e) {
        h = h == null || h === e ? e : "mixed";
    }
    function P(e, t) {
        p.set(e, (p.get(e) ?? 0) + t);
    }
    function N(e) {
        const t = o("WAWebLongTaskAccumulator").getLongTaskAnnotationsSince(e.longTasksAtStart);
        if (t != null) {
            e.flow.addAnnotations(t);
        }
    }
    function M(e, t) {
        A(e)?.flow.endCancel(4, {
            string: {
                cancel_reason: t
            }
        });
    }
    function w() {
        if (!(m.size < u)) {
            const e = m.keys().next().value;
            if (e != null) {
                M(e, "evicted");
                P("rx_evicted_flow_count", 1);
            }
        }
    }
    function A(e) {
        const t = m.get(e);
        m.delete(e);
        return t;
    }
    l.MAX_OPEN_MESSAGE_RECEIVE_FLOWS = u;
    l.messageReceiveQplTracker = y;
}, 98);