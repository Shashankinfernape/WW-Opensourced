__d("WAWebBrAddPixKeyDeepLinkPrefill", [
    "WAWebUserPrefsTypes"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 56;
    const u = 100;
    const c = 64;
    const d = new Map([
        [
            (e = o("WAWebUserPrefsTypes")).PixKeyType.CPF,
            {
                maxLength: 14,
                shape: /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/
            }
        ],
        [
            e.PixKeyType.CNPJ,
            {
                maxLength: 18,
                shape: /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/
            }
        ],
        [
            e.PixKeyType.PHONE,
            {
                maxLength: 15,
                shape: /^\+55\d{10,11}$/
            }
        ],
        [
            e.PixKeyType.EMAIL,
            {
                maxLength: 77,
                shape: /^[^@\s]+@[^@\s]+$/
            }
        ],
        [
            e.PixKeyType.EVP,
            {
                maxLength: 36,
                shape: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
            }
        ]
    ]);
    const m = /(?:[\0-\x1F\x7F-\x9F\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u2028-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])/;
    const p = /^[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]+$/;
    const _ = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
    function f(e) {
        try {
            return decodeURIComponent(e);
        } catch (e) {
            return null;
        }
    }
    function g(e, t) {
        for (const n of e.split("&")){
            const r = n.indexOf("=");
            if (r !== -1 && f(n.slice(0, r)) === t) {
                return f(n.slice(r + 1));
            }
        }
        return null;
    }
    function h(e, t) {
        return e !== "" && e.length <= t && !m.test(e) && !p.test(e);
    }
    function y(e, t, n) {
        const r = e.get(t);
        if (r != null && h(r, n)) {
            return r;
        }
        return null;
    }
    function C(e) {
        const t = e.get("type");
        if (t == null || t === "") {
            return null;
        }
        return o("WAWebUserPrefsTypes").PixKeyType.cast(t.toUpperCase());
    }
    function b(e, t) {
        const n = d.get(t);
        return n != null && e.length <= n.maxLength && !m.test(e) && !_.test(e) && n.shape.test(e);
    }
    function v(e, t) {
        const n = g(e, "value");
        if (n != null && b(n, t)) {
            return n;
        }
        return null;
    }
    function S(e, t) {
        const a = C(e);
        if (a == null) {
            return null;
        }
        const i = v(t, a);
        if (i == null) {
            return null;
        }
        return {
            bankId: y(e, "bankid", c) ?? void 0,
            bankName: y(e, "bankname", u) ?? void 0,
            keyType: a,
            name: y(e, "name", s) ?? void 0,
            value: i
        };
    }
    l.MAX_NAME_LENGTH = s;
    l.isAcceptableCappedText = h;
    l.isAcceptablePixKeyValue = b;
    l.parseAddPixKeyPrefill = S;
}, 98);