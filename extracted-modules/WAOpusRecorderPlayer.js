__d("WAOpusRecorderPlayer", [
    "Promise",
    "WABinary",
    "WABlobToArrayBuffer",
    "WALogger",
    "WAOpusRecorderWorkerClient"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = "audio/wav";
    let m;
    let p = 0;
    function _() {
        p++;
        if (!m) {
            m = new window.AudioContext;
        }
        return m;
    }
    function f() {
        p--;
        if (p === 0 && m) {
            try {
                m.close().catch((t)=>{
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "releaseAudioContext close async error: ",
                        ""
                    ])), t);
                });
            } catch (e) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "releaseAudioContext close sync error: ",
                    ""
                ])), e);
            }
            m = void 0;
        }
    }
    const g = (()=>{
        function e(e) {
            this.oggBlob = e;
        }
        const t = e.prototype;
        t.generateBlob = function() {
            return this.oggBlobToWAVBlob(this.oggBlob, 1);
        };
        t.oggBlobToWAVBlob = function(t, r = 2) {
            const e = this;
            let a = r;
            return new (c || (c = n("Promise")))(function(n) {
                const r = function(r) {
                    if (r.data == null) {
                        const t = function(t) {
                            l.forEach((e)=>{
                                for(let n = e[t] || e[0], r = 0; r < n.length; r++){
                                    s.push(n[r]);
                                }
                            });
                        };
                        for(let o = 0; o < a; o++){
                            t(o);
                        }
                        const i = e.encodeWAV(s, c, a);
                        const u = new Blob([
                            i.readByteArrayView()
                        ], {
                            type: d
                        });
                        f();
                        n(u);
                    } else {
                        l.push(r.data);
                        a = l[0].length;
                    }
                };
                const i = o("WAOpusRecorderWorkerClient").getOpusDecoderWorker(r);
                var l = [];
                var s = [];
                var c = _();
                const m = {
                    outputBufferSampleRate: c.sampleRate,
                    bufferLength: 4096
                };
                i.postMessage({
                    command: "decode-init",
                    config: m
                });
                o("WABlobToArrayBuffer").blobToArrayBuffer(t).then((e)=>{
                    i.postMessage({
                        command: "decode",
                        pages: new Uint8Array(e)
                    });
                    i.postMessage({
                        command: "decode-done"
                    });
                }).catch((e)=>{
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Player::oggBlobToWAVBlob error: ",
                        ""
                    ])), e);
                });
            });
        };
        t.encodeWAV = function(t, n, r) {
            const e = new (o("WABinary")).Binary(void 0, true);
            e.ensureCapacity(44 + t.length * 2);
            e.writeString("RIFF");
            e.writeUint32(36 + t.length * 2);
            e.writeString("WAVE");
            e.writeString("fmt ");
            e.writeUint32(16);
            e.writeUint16(1);
            e.writeUint16(r);
            e.writeUint32(n.sampleRate);
            e.writeUint32(n.sampleRate * r * 2);
            e.writeUint16(r * 2);
            e.writeUint16(16);
            e.writeString("data");
            e.writeUint32(t.length * 2);
            for(let a = 0; a < t.length; a++){
                let i = Math.max(-1, Math.min(t[a], 1));
                i *= i > 0 ? 32767 : 32768;
                e.writeInt16(Math.floor(i));
            }
            return e;
        };
        return e;
    })();
    l.default = g;
}, 98);