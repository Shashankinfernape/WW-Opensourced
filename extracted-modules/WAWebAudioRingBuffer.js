__d("WAWebAudioRingBuffer", [
    "WALogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    class s {
        constructor(e, t, n){
            this.writePos = 0;
            this.readPos = 0;
            var r = this.calculateRequiredBufferSize(e, t);
            this.buffer = new Float32Array(r);
            this.name = n;
        }
        calculateRequiredBufferSize(t, n) {
            const e = Math.ceil(n / t) * t;
            const r = e * 2;
            const o = 64;
            const a = Math.ceil(r / o) * o;
            return a;
        }
        getAvailableSpace() {
            return (this.readPos - this.writePos - 1 + this.buffer.length) % this.buffer.length;
        }
        getDataLength() {
            return (this.writePos - this.readPos + this.buffer.length) % this.buffer.length;
        }
        write(n) {
            if (n.length !== 0) {
                const t = this.getAvailableSpace();
                if (t < n.length) {
                    const r = Math.max(n.length - t + 4, 4);
                    const a = Math.ceil(r / 4) * 4;
                    this.readPos = (this.readPos + a) % this.buffer.length;
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:",
                        "] overflow, readPos +",
                        ""
                    ])), this.name, a);
                }
                if (this.writePos + n.length <= this.buffer.length) {
                    this.buffer.set(n, this.writePos);
                    this.writePos += n.length;
                } else {
                    const i = this.buffer.length - this.writePos;
                    const l = n.length - i;
                    const s = new Float32Array(n.buffer, n.byteOffset, i);
                    const u = new Float32Array(n.buffer, n.byteOffset + Float32Array.BYTES_PER_ELEMENT * i, l);
                    this.buffer.set(s, this.writePos);
                    this.buffer.set(u, 0);
                    this.writePos = l;
                }
            }
        }
        read(t) {
            const e = this.getDataLength();
            const n = Math.min(t, e);
            if (n === 0) {
                return new Float32Array(0);
            }
            if (this.readPos + n <= this.buffer.length) {
                const r = this.buffer.subarray(this.readPos, this.readPos + n);
                this.readPos += n;
                return r;
            }
            const o = new Float32Array(n);
            const a = this.buffer.length - this.readPos;
            const i = n - a;
            o.set(this.buffer.subarray(this.readPos, this.buffer.length), 0);
            o.set(this.buffer.subarray(0, i), a);
            this.readPos = i;
            return o;
        }
        reset() {
            this.writePos = 0;
            this.readPos = 0;
        }
    }
    l.WAWebAudioRingBuffer = s;
}, 98);