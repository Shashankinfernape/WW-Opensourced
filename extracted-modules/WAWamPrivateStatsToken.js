__d("WAWamPrivateStatsToken", [
    "WACryptoEd25519",
    "WACryptoPrimitives"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        return o("WACryptoEd25519").runInAllocationScope(function() {
            let n;
            const r = (n = o("WACryptoEd25519")).p3Element();
            const a = n.allocate(Uint8Array, 32);
            a.set(t);
            u(a);
            o("WACryptoPrimitives").lowlevel.scalarbase(r, a);
            const i = n.hashToPoint(e);
            const add = o("WACryptoPrimitives").lowlevel.add;
            add(i, r);
            const s = new Uint8Array(32);
            n.pack(s, i);
            return s;
        });
    }
    function s(e, t, n) {
        return o("WACryptoEd25519").runInAllocationScope(function() {
            const r = o("WACryptoEd25519").p3Element();
            if (o("WACryptoEd25519").unpack(r, e)) {
                return null;
            }
            const a = o("WACryptoEd25519").p3Element();
            if (o("WACryptoEd25519").unpackneg(a, n) !== 0) {
                return null;
            }
            const i = o("WACryptoEd25519").allocate(Uint8Array, 32);
            i.set(t);
            u(i);
            const l = o("WACryptoEd25519").p3Element();
            o("WACryptoPrimitives").lowlevel.scalarmult(l, a, i);
            const add = o("WACryptoPrimitives").lowlevel.add;
            add(r, l);
            const c = new Uint8Array(32);
            o("WACryptoEd25519").pack(c, r);
            return c;
        });
    }
    function u(e) {
        e[0] &= 248;
        e[31] &= 127;
        e[31] |= 64;
    }
    l.blindToken = e;
    l.unblindToken = s;
}, 98);