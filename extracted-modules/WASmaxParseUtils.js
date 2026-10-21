__d("WASmaxParseUtils", [
    "WABase64",
    "WABinary",
    "WACryptoUtils",
    "WADeepEquals",
    "WAHasProperty",
    "WAResultOrError",
    "WAStanzaUtils",
    "WAWapJid",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = o("WAResultOrError").makeResult();
    function s(t, n) {
        if (t.tag !== n) {
            return O(t, `to be <${n}>`);
        }
        return e;
    }
    function u(e, t) {
        if (B(e, t)) {
            return W(e, e.attrs[t]);
        }
        return O(e, `to have attribute "${t}"`);
    }
    function c(e, t, n, r) {
        const a = u(e, t);
        if (!a.success) {
            return a;
        }
        const i = n(a.value);
        if (i != null) {
            return o("WAResultOrError").makeResult(i);
        }
        return O(e, `to have "${t}"={${r}}, but instead has "${a.value}"`);
    }
    function d(e, t, n) {
        const r = P(e);
        if (!r.success) {
            return r;
        }
        const a = t(r.value);
        if (a != null) {
            return o("WAResultOrError").makeResult(a);
        }
        return O(e, `to have ${n} content, but instead has "${r.value}"`);
    }
    function m(t, n, r) {
        const o = u(t, n);
        if (o.success) {
            if (o.value !== r) {
                return O(t, `to have "${n}"="${r}", but instead has "${o.value}"`);
            }
        } else {
            return o;
        }
        return e;
    }
    function p(e, t) {
        return c(e, t, o("WAStanzaUtils").toStanzaId, "stanzaID");
    }
    function _(e, t) {
        return c(e, t, o("WAStanzaUtils").validateCallId, "callID");
    }
    function f(e, t) {
        return c(e, t, q, "integer");
    }
    function g(e, t, n, r) {
        const a = f(e, t);
        if (!a.success) {
            return a;
        }
        const i = a.value;
        if (n !== void 0 && i < n) {
            return O(e, `to have "${t}"={at least ${n}} but has value ${i}`);
        }
        if (r !== void 0 && i > r) {
            return O(e, `to have "${t}"={at most ${r}} but has value ${i}`);
        }
        return o("WAResultOrError").makeResult(i);
    }
    function h(e) {
        const t = e.content;
        if (t instanceof Uint8Array) {
            return O(e, "to have children");
        }
        return o("WAResultOrError").makeResult(t);
    }
    function y(t, n) {
        const r = h(t);
        if (!r.success) {
            return r;
        }
        const a = r.value;
        if (a == null) {
            return e;
        }
        let i = null;
        for (const s of a){
            if (s.tag === n) {
                if (i != null) {
                    return O(t, `to have 1 child <${n}>, but found more than 1`);
                }
                i = s;
            }
        }
        return o("WAResultOrError").makeResult(i);
    }
    function C(t, n, r) {
        const o = y(t, n);
        if (o.success) {
            if (o.value == null) {
                return e;
            }
            return r(o.value);
        }
        return o;
    }
    function b(e, t, n) {
        const r = C(e, t, n);
        if (!r.success) {
            return r;
        }
        const a = r.value;
        if (a == null) {
            return O(e, `to have 1 child <${t}>, but found 0`);
        }
        return o("WAResultOrError").makeResult(a);
    }
    function v(e, t) {
        const n = y(e, t);
        if (n.success) {
            if (n.value == null) {
                return O(e, `to have 1 child <${t}>, but found 0`);
            }
            return o("WAResultOrError").makeResult(n.value);
        }
        return n;
    }
    function S(e, t, n, r, a) {
        const i = U(e, t, n, r);
        if (!i.success) {
            return i;
        }
        const l = [];
        for(let s = 0; s < i.value.length; s++){
            const u = a(i.value[s]);
            if (!u.success) {
                return u;
            }
            l.push(u.value);
        }
        return o("WAResultOrError").makeResult(l);
    }
    function R(e, t, n, r, a) {
        const i = U(e, t, n, r);
        if (!i.success) {
            return i;
        }
        for(var l = i.value.length, s = 0; s < l; s++){
            const u = a(i.value[s]);
            if (!u.success) {
                return u;
            }
        }
        return o("WAResultOrError").makeResult(l);
    }
    function L(e, t, n) {
        const r = S(e, t, 0, 1 / 0, n);
        if (!r.success) {
            return r;
        }
        for(let a = 0; a < r.value.length; a++){
            if (!o("WADeepEquals").deepEqual(r.value[0], r.value[a])) {
                return O(e, "to have homogeneous children, but found two children that are not equal");
            }
        }
        return r;
    }
    function E(e, t, n) {
        const r = L(e, t, n);
        if (r.success) {
            return o("WAResultOrError").makeResult(r.value.length);
        }
        return r;
    }
    function k(t, n, r, o, a) {
        if (B(n, r)) {
            return t(n, r, o, a);
        }
        return e;
    }
    function I(t, n, r, a) {
        if (a == null) {
            return e;
        }
        const i = k(t, n, r);
        if (i.success) {
            if (i.value === a) {
                return o("WAResultOrError").makeResult(a);
            }
            if (i.value == null) {
                return e;
            }
            return O(n, `to have "${r}"={${a}}, but instead has "${i.value}"`);
        }
        return i;
    }
    function T(e, t, n, r) {
        const a = e(t, n);
        if (a.success) {
            if (a.value === r) {
                return o("WAResultOrError").makeResult(r);
            }
            return O(t, `to have "${n}"={${r}}, but instead has "${a.value}"`);
        }
        return a;
    }
    function D(e, t, n) {
        const r = e(t);
        if (r.success) {
            if (r.value === n) {
                return o("WAResultOrError").makeResult(n);
            }
            return O(t, `to have content "${n}", but instead has "${r.value}"`);
        }
        return r;
    }
    function x(e, t, n) {
        const r = u(e, t);
        if (!r.success) {
            return r;
        }
        const a = n[r.value];
        if (a != null) {
            return o("WAResultOrError").makeResult(a);
        }
        const i = Object.values(n).join("|");
        return O(e, `to have "${t}"={${i}}, but instead has "${r.value}"`);
    }
    function $(e, t) {
        const n = P(e);
        if (!n.success) {
            return n;
        }
        const r = t[n.value];
        if (r != null) {
            return o("WAResultOrError").makeResult(r);
        }
        const a = Object.values(t).join("|");
        return O(e, `to have content "${a}", but instead has "${n.value}"`);
    }
    function P(e) {
        const t = N(e);
        if (t.success) {
            try {
                const n = new (o("WABinary")).Binary(t.value);
                const a = n.readString(n.size());
                return o("WAResultOrError").makeResult(a);
            } catch (t) {
                return O(e, `to have string content, but run into decoding error: ${r("getErrorSafe")(t).message}`);
            }
        } else {
            return t;
        }
    }
    function N(e) {
        const t = e.content;
        if (t == null) {
            return O(e, "to have content");
        }
        if (Array.isArray(t)) {
            return O(e, "to have content, but has children instead");
        }
        return o("WAResultOrError").makeResult(t);
    }
    function M(e, t) {
        const n = N(e);
        if (n.success) {
            if (o("WACryptoUtils").uint8ArraysEqual(n.value, t)) {
                return o("WAResultOrError").makeResult(t);
            }
            return O(e, `to have content ":binary:${o("WABase64").encodeB64(t)}", but instead has ":binary:${o("WABase64").encodeB64(n.value)}"`);
        }
        return n;
    }
    function w(e, t, n) {
        const r = e.content;
        if (r == null) {
            if (t === void 0 || t < 1) {
                return o("WAResultOrError").makeResult(new Uint8Array([]));
            }
            return O(e, "to have content");
        }
        if (Array.isArray(r)) {
            return O(e, "to have content, but has children instead");
        }
        const a = r.length;
        if (t !== void 0 && a < t) {
            return O(e, `to have binary content at least ${t} bytes but has ${a} bytes`);
        }
        if (n !== void 0 && a > n) {
            return O(e, `to have binary content at most ${n} bytes but has ${a} bytes`);
        }
        return o("WAResultOrError").makeResult(r);
    }
    function A(e) {
        return d(e, q, "integer");
    }
    function F(e) {
        return e;
    }
    function O(e, t) {
        return o("WAResultOrError").makeError(`expected <${e.tag}>: ${t}`);
    }
    function B(e, t) {
        return r("WAHasProperty")(e.attrs, t);
    }
    function W(e, t) {
        if (t instanceof o("WAWapJid").WapJid) {
            return o("WAResultOrError").makeResult(t.toString());
        }
        if (typeof t === "string") {
            return o("WAResultOrError").makeResult(t);
        }
        return O(e, `decodeAsString: attribute is ${typeof t} not a string: ${String(t)}`);
    }
    function q(e) {
        const t = parseInt(e, 10);
        if (Number.isNaN(t)) {
            return null;
        }
        return t;
    }
    function U(e, t, n, r) {
        const a = h(e);
        if (!a.success) {
            return a;
        }
        const i = a.value;
        if (i == null) {
            if (n !== 0) {
                return O(e, `to have at least ${n} <${t}> children, but found 0`);
            }
            return o("WAResultOrError").makeResult([]);
        }
        const l = [];
        for (const u of i){
            if (u.tag === t) {
                l.push(u);
            }
        }
        const c = l.length;
        if (c < n) {
            return O(e, `to have at least ${n} <${t}> children, but found ${c}`);
        }
        if (c > r) {
            return O(e, `to have at most ${r} <${t}> children, but found ${c}`);
        }
        return o("WAResultOrError").makeResult(l);
    }
    function V(e, t, n) {
        const r = t.map((e, t)=>`${e}: ${n[t].error}`);
        return O(e, [
            `to match any of following mixins: ${t.join(", ")}, but all mixins failed.`
        ].concat(r).join(" "));
    }
    l.voidSuccess = e;
    l.assertTag = s;
    l.attrString = u;
    l.attrValidate = c;
    l.assertAttr = m;
    l.attrStanzaId = p;
    l.attrCallId = _;
    l.attrInt = f;
    l.attrIntRange = g;
    l.maybeChildren = h;
    l.optionalChild = y;
    l.optionalChildWithTag = C;
    l.childWithTag = b;
    l.flattenedChildWithTag = v;
    l.mapChildrenWithTag = S;
    l.countChildrenWithTag = R;
    l.mapHomogeneousChildrenWithTag = L;
    l.countHomogeneousChildrenWithTag = E;
    l.optional = k;
    l.optionalLiteral = I;
    l.literal = T;
    l.literalContent = D;
    l.attrStringEnum = x;
    l.contentStringEnum = $;
    l.contentString = P;
    l.contentBytes = N;
    l.contentLiteralBytes = M;
    l.contentBytesRange = w;
    l.contentInt = A;
    l.identity = F;
    l.errorMessage = O;
    l.errorMixinDisjunction = V;
}, 98);