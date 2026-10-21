__d("WAWebRSAPublicKeyDer", [
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = 48;
    const s = 3;
    const u = 6;
    const c = 128;
    const d = [
        42,
        134,
        72,
        134,
        247,
        13,
        1,
        1,
        1
    ];
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Uint8Array((yield self.crypto.subtle.exportKey("spki", e)));
            return _(t);
        });
        return p.apply(this, arguments);
    }
    function _(t) {
        let next = h(t, g(t, 0, e)).next;
        const o = h(t, g(t, next, e));
        f(t, o.next);
        next = o.next + o.length;
        const a = h(t, g(t, next, s));
        if (t[a.next] !== 0) {
            throw r("err")("[WAFFLE] Unexpected unused bits in subjectPublicKey");
        }
        return t.slice(a.next + 1, a.next + a.length);
    }
    function f(e, next) {
        const n = h(e, g(e, next, u));
        if (n.length !== d.length || d.some((t, r)=>e[n.next + r] !== t)) {
            throw r("err")("[WAFFLE] Public key is not an RSA key");
        }
    }
    function g(e, t, n) {
        if (e[t] !== n) {
            throw r("err")("[WAFFLE] Malformed SPKI: unexpected DER tag");
        }
        return t + 1;
    }
    function h(e, t) {
        if (t >= e.length) {
            throw r("err")("[WAFFLE] Malformed SPKI: truncated DER length");
        }
        const n = e[t];
        if (n < c) {
            return y(e, n, t + 1);
        }
        const o = n - c;
        if (o === 0) {
            throw r("err")("[WAFFLE] Malformed SPKI: indefinite DER length");
        }
        const a = t + 1 + o;
        if (a > e.length) {
            throw r("err")("[WAFFLE] Malformed SPKI: truncated DER length");
        }
        let i = 0;
        for(let l = 0; l < o; l++){
            i = i * 256 + e[t + 1 + l];
        }
        return y(e, i, a);
    }
    function y(e, t, next) {
        if (next + t > e.length) {
            throw r("err")("[WAFFLE] Malformed SPKI: DER length exceeds buffer");
        }
        return {
            length: t,
            next
        };
    }
    l.getRSAPublicKeyDer = m;
}, 98);