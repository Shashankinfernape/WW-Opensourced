__d("WAWebVoipWebTransportSendRingBuffer", [
    "WALogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 65536;
    const u = 64;
    const c = 2;
    const d = c * 4;
    const m = 0;
    const p = 1;
    const _ = 4;
    const f = 1000;
    const g = 4;
    let h = false;
    function y() {
        if (typeof SharedArrayBuffer !== "function") {
            return false;
        }
        return typeof crossOriginIsolated !== "boolean" || crossOriginIsolated;
    }
    function C(e) {
        const capacityBytes = e.byteLength - d;
        if (capacityBytes < _ + 2) {
            return null;
        }
        return {
            capacityBytes,
            dataU8: new Uint8Array(e, d, capacityBytes),
            header: new Int32Array(e, 0, c)
        };
    }
    function b() {
        if (!y()) {
            return null;
        }
        let ringBuffer;
        try {
            ringBuffer = new SharedArrayBuffer(d + s);
        } catch (error) {
            if (!h) {
                h = true;
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportSendRing] Ring allocation failed, staying on postMessage: ",
                    ""
                ])), String(error)).sendLogs("wt-send-ring-alloc-failed");
            }
            return null;
        }
        const n = C(ringBuffer);
        if (n == null) {
            return null;
        }
        const { capacityBytes, dataU8, header } = n;
        const l = new Uint8Array(_);
        const u = new DataView(l.buffer);
        function c(e, t) {
            const n = Math.min(t.byteLength, capacityBytes - e);
            dataU8.set(t.subarray(0, n), e);
            if (n < t.byteLength) {
                dataU8.set(t.subarray(n), 0);
            }
            return (e + t.byteLength) % capacityBytes;
        }
        function write(e) {
            const e_byteLength = e.byteLength;
            const n = _ + e_byteLength;
            if (e_byteLength <= 0 || n > capacityBytes - 1) {
                return false;
            }
            const o = Atomics.load(header, m);
            const a = Atomics.load(header, p);
            const s = (o - a + capacityBytes) % capacityBytes;
            if (n > capacityBytes - 1 - s) {
                return false;
            }
            u.setUint32(0, e_byteLength, true);
            const d = c(o, l);
            const f = c(d, new Uint8Array(e));
            Atomics.store(header, m, f);
            Atomics.notify(header, m, 1);
            return true;
        }
        return {
            producer: {
                write
            },
            ringBuffer
        };
    }
    function v(e, t, n) {
        const r = C(e);
        if (r == null) {
            return null;
        }
        const { capacityBytes, dataU8, header } = r;
        const l = new Uint8Array(_);
        const s = new DataView(l.buffer);
        let c = false;
        let d = 0;
        let h = null;
        let y = null;
        const b = {
            corruptRecords: 0,
            drainedRecords: 0,
            handlerErrors: 0
        };
        function v(e, t) {
            const n = Math.min(t.byteLength, capacityBytes - e);
            t.set(dataU8.subarray(e, e + n));
            if (n < t.byteLength) {
                t.set(dataU8.subarray(0, t.byteLength - n), n);
            }
        }
        function getRawOccupancyBytes() {
            return (Atomics.load(header, m) - Atomics.load(header, p) + capacityBytes) % capacityBytes;
        }
        function R(buffer) {
            try {
                t(buffer);
            } catch (error) {
                b.handlerErrors++;
                if (b.handlerErrors === 1) {
                    if (n != null) {
                        n(error);
                    }
                }
            }
        }
        function drain() {
            for(var e = 0, t = Atomics.load(header, p), n = Atomics.load(header, m), r = (n - t + capacityBytes) % capacityBytes; r > _ && e < u;){
                v(t, l);
                const a = s.getUint32(0, true);
                if (a <= 0 || a > r - _) {
                    b.corruptRecords++;
                    Atomics.store(header, p, n);
                    return e;
                }
                const c = new Uint8Array(a);
                v((t + _) % capacityBytes, c);
                const d = _ + a;
                t = (t + d) % capacityBytes;
                r -= d;
                Atomics.store(header, p, t);
                e++;
                b.drainedRecords++;
                R(c.buffer);
            }
            return e;
        }
        function E() {
            if (h != null) {
                self.clearTimeout(h);
                h = null;
            }
        }
        function k() {
            const e = y;
            if (e == null) {
                h = self.setTimeout(D, 0);
                return;
            }
            e.port2.postMessage(null);
        }
        function I() {
            if (typeof MessageChannel !== "function") {
                return null;
            }
            const e = new MessageChannel;
            e.port1.onmessage = function() {
                D();
            };
            return e;
        }
        function T() {
            const e = y;
            if (e != null) {
                y = null;
                e.port1.close();
                e.port2.close();
            }
        }
        function D() {
            h = null;
            if (c) {
                drain();
                x();
            }
        }
        function x() {
            if (c) {
                const e = Atomics.load(header, m);
                if (e !== Atomics.load(header, p)) {
                    k();
                    return;
                }
                if (Atomics.waitAsync == null) {
                    h = self.setTimeout(D, g);
                    return;
                }
                const n = Atomics.waitAsync(header, m, e, f);
                if (!n.async) {
                    k();
                    return;
                }
                d++;
                const r = d;
                n.value.then(()=>{
                    if (!(!c || r !== d)) {
                        D();
                    }
                });
            }
        }
        return {
            drain,
            getRawOccupancyBytes,
            getStats: function() {
                return babelHelpers.extends({}, b);
            },
            start: function() {
                if (!c) {
                    c = true;
                    y = I();
                    D();
                }
            },
            stop: function() {
                c = false;
                d++;
                E();
                T();
                Atomics.notify(header, m, 1);
            }
        };
    }
    l.WT_SEND_RING_CAPACITY_BYTES = s;
    l.WT_SEND_RING_MAX_DRAIN_RECORDS = u;
    l.createWebTransportSendRing = b;
    l.createWebTransportSendRingConsumer = v;
}, 98);