__d("WAWebSignalCommonUtils", [
    "WAByteBuffer",
    "WAWebSignalAddress",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (!(e.isUser() || e.isServer() || e.isPSA())) {
            throw r("err")(`Jid ${e.toString({
                legacy: true
            })} is not fully qualified, jid.server should be "s.whatsapp.net"`);
        }
        return f(e, t);
    }
    function s(e) {
        const t = new Uint8Array(1);
        self.crypto.getRandomValues(t);
        u(e, (t[0] & 15) + 1);
    }
    function u(e, t) {
        for(let n = 0; n < t; n++){
            e.writeUint8(t);
        }
    }
    function c(e) {
        return d(e);
    }
    function d(e) {
        if (typeof e === "string") {
            return o("WAByteBuffer").wrapString(e);
        }
        if (e instanceof Uint8Array) {
            return o("WAByteBuffer").wrapUint8Array(e);
        }
        if (e instanceof ArrayBuffer) {
            return o("WAByteBuffer").wrapArrayBuffer(e);
        }
        throw r("err")(`[wrapToArrayBuffer] Unknown input type ${typeof e}`);
    }
    function m(e) {
        return o("WAByteBuffer").wrapBufferToString(e);
    }
    function p(e, t) {
        if (!e || !t || e.byteLength !== t.byteLength) {
            return false;
        }
        for(let n = new DataView(e), r = new DataView(t), o = 0; o < n.byteLength; o++){
            if (n.getUint8(o) !== r.getUint8(o)) {
                return false;
            }
        }
        return true;
    }
    function _(e) {
        if (typeof e !== "string" || !e.match(/.*\.\d+/)) {
            const t = "Invalid SignalLikeProtocolAddress string - regex does not match";
            throw r("err")(t);
        }
        const n = e.split(".");
        if (n.length !== 2) {
            const o = "Invalid SignalLikeProtocolAddress string - wrong number of parts";
            throw r("err")(o);
        }
        const a = "_deprecated";
        const i = "_status";
        const l = "_pq";
        if (n[0].includes(a)) {
            return n[0].substr(0, n[0].length - a.length);
        }
        if (n[0].includes(i)) {
            return n[0].substr(0, n[0].length - i.length);
        }
        if (n[0].includes(l)) {
            return n[0].substr(0, n[0].length - l.length);
        }
        return n[0];
    }
    function f(e, t) {
        const n = 0;
        const r = new (o("WAWebSignalAddress")).SignalAddress(e, t);
        const a = r.toString();
        return `${a}.${n}`;
    }
    function g(t, n, r) {
        return `${t}::${e(n, r)}`;
    }
    const h = {
        name: "AES-CTR",
        length: 128,
        counter: new Uint8Array(16)
    };
    function y(e) {
        return self.crypto.subtle.generateKey({
            name: h.name,
            length: h.length
        }, false, [
            "encrypt",
            "decrypt"
        ]).then((t)=>self.crypto.subtle.encrypt(h, t, e).then((e)=>({
                    encKey: t,
                    value: e
                })));
    }
    function C(e) {
        return self.crypto.subtle.decrypt(h, e.encKey, e.value);
    }
    l.createSignalAddress = e;
    l.writeRandomPadMax16 = s;
    l.strToBuffer = c;
    l.bufferToStr = m;
    l.bufferEqual = p;
    l.getSignalLikeAddressName = _;
    l.createSignalLikeAddress = f;
    l.createSignalLikeSenderKeyName = g;
    l.encryptRegistrationMaterial = y;
    l.decryptRegistrationMaterial = C;
}, 98);