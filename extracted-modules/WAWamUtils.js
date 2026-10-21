__d("WAWamUtils", [
    "WABase64",
    "WALogger",
    "WAWamTypes",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let s;
    let u;
    const c = {
        [(u = o("WAWamTypes")).TYPES.INT]: "number",
        [u.TYPES.FLOAT]: "number",
        [u.TYPES.STRING]: "string",
        [u.TYPES.BOOL]: "boolean"
    };
    function d(e, t) {
        if (t == null || t.length === 0) {
            return e;
        }
        const n = new Map;
        for(let r = 0; r < e.length; r += 3){
            const o = e[r];
            n.set(o, r);
        }
        for (const [l, s, u] of t){
            if (u != null) {
                const d = n.get(l);
                if (d != null) {
                    const m = e[d + 2];
                    if (m !== void 0) {
                        continue;
                    }
                }
                const p = c[s];
                if (p === typeof u) {
                    if (d == null) {
                        n.set(l, e.length);
                        e.push(l, s, u);
                    } else {
                        e[d + 2] = u;
                    }
                }
            }
        }
        return e;
    }
    function m(e) {
        const t = new Map;
        const n = new Map;
        for(let a = 0; a < e.length; a += 4){
            const i = e[a];
            const l = e[a + 1];
            const u = e[a + 2];
            const c = e[a + 3];
            if (u === o("WAWamTypes").TYPES.FLOAT) {
                throw r("err")("Float attributes are currently not supported in runtime");
            }
            if (!Array.isArray(i)) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "logAttributes WAM channel is not an array"
                ]))).sendLogs("wam-log-attributes");
                return;
            }
            if (i.includes("regular")) {
                t.set(l, c);
            }
            if (i.includes("private")) {
                n.set(l, c);
            }
        }
        return {
            deltaRegular: t,
            deltaPrivate: n
        };
    }
    function p(e, t) {
        const n = [];
        t.forEach((t)=>{
            const r = t.channel;
            if (r == null) {
                if (e !== "regular") {
                    return;
                }
            } else if (r !== e) {
                return;
            }
            if (t.finished) {
                const a = new Uint8Array(o("WABase64").decodeB64(t.buffer));
                const i = t.key;
                n.push({
                    key: i,
                    content: a
                });
            }
        });
        return n;
    }
    function _(e) {
        return JSON.stringify([
            e.streamId,
            e.sequenceNumber,
            e.channel
        ]);
    }
    function f(e, t, n, r, a) {
        const i = _(e);
        return {
            bufferKey: i,
            meta: {
                streamId: e.streamId,
                sequenceNumber: e.sequenceNumber
            },
            bufferRow: {
                key: i,
                channel: t,
                streamId: n,
                buffer: o("WABase64").encodeB64(r),
                finished: a
            }
        };
    }
    function g(e) {
        let t = null;
        if (e) {
            t = e.sequenceNumber;
        }
        return t;
    }
    l.appendRawFields = d;
    l.getDeltaFromAttributes = m;
    l.getFinishedBuffers = p;
    l.asBufferEntry = f;
    l.getSequenceNumber = g;
}, 98);