__d("WAWebHatchJsonReaders", [
    "WATypeUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return e != null && typeof e === "object" && !Array.isArray(e);
    }
    function s(e, t) {
        if (e == null || typeof e !== "object" || Array.isArray(e)) {
            return null;
        }
        return e[t];
    }
    function u(e, t) {
        const n = s(e, t);
        if (o("WATypeUtils").isString(n)) {
            return n;
        }
        return null;
    }
    function c(e, t) {
        const n = s(e, t);
        if (o("WATypeUtils").isNumber(n)) {
            return n;
        }
        return null;
    }
    function d(e, t) {
        const n = u(e, t);
        if (n != null && n !== "") {
            return n;
        }
        return null;
    }
    function m(e, t) {
        const n = c(e, t);
        if (n != null && Number.isInteger(n)) {
            return n;
        }
        return null;
    }
    function p(e, t) {
        const n = s(e, t);
        if (typeof n === "boolean") {
            return n;
        }
        return null;
    }
    function _(e, t) {
        return u(e, t) ?? "";
    }
    function f(e, t) {
        return _(e, t).trim();
    }
    function g(t, n) {
        const r = s(t, n);
        if (e(r)) {
            return r;
        }
        return null;
    }
    function h(e) {
        return e.trim() === "";
    }
    function y(e) {
        if (h(e)) {
            return "";
        }
        if (/(?:[!\.\?\u0589\u061D-\u061F\u06D4\u0700-\u0702\u07F9\u0837\u0839\u083D\u083E\u0964\u0965\u104A\u104B\u1362\u1367\u1368\u166E\u1735\u1736\u17D4\u17D5\u1803\u1809\u1944\u1945\u1AA8-\u1AAB\u1B4E\u1B4F\u1B5A\u1B5B\u1B5E\u1B5F\u1B7D-\u1B7F\u1C3B\u1C3C\u1C7E\u1C7F\u2024\u2026\u203C\u203D\u2047-\u2049\u2CF9-\u2CFB\u2E2E\u2E3C\u2E53\u2E54\u3002\uA4FF\uA60E\uA60F\uA6F3\uA6F7\uA876\uA877\uA8CE\uA8CF\uA92F\uA9C8\uA9C9\uAA5D-\uAA5F\uAAF0\uAAF1\uABEB\uFE12\uFE15\uFE16\uFE52\uFE56\uFE57\uFF01\uFF0E\uFF1F\uFF61]|\uD802[\uDE56\uDE57]|\uD803[\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47\uDC48\uDCBE-\uDCC1\uDD41-\uDD43\uDDC5\uDDC6\uDDCD\uDDDE\uDDDF\uDE38\uDE39\uDE3B\uDE3C\uDEA9\uDFD4\uDFD5]|\uD805[\uDC4B\uDC4C\uDDC2\uDDC3\uDDC9-\uDDD7\uDE41\uDE42\uDF3C-\uDF3E]|\uD806[\uDD44\uDD46\uDE42\uDE43\uDE9B\uDE9C]|\uD807[\uDC41\uDC42\uDEF7\uDEF8\uDF43\uDF44]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37\uDF38\uDF44]|\uD81B[\uDD6E\uDD6F\uDE98]|\uD82F\uDC9F|\uD836\uDE88)$/.test(e.trimEnd())) {
            return " ";
        }
        return ". ";
    }
    function C(e) {
        const t = e.trim();
        if (t === "") {
            return null;
        }
        return t;
    }
    function b(e, t) {
        const n = _(e, t);
        if (!h(n)) {
            return n;
        }
        const r = c(e, t);
        if (r != null) {
            return String(r);
        }
        return "";
    }
    function v(e, t) {
        const n = s(e, t);
        if (Array.isArray(n)) {
            return n;
        }
        return null;
    }
    function S(t, n) {
        return (v(t, n) ?? []).filter(e);
    }
    l.isObject = e;
    l.readField = s;
    l.readString = u;
    l.readNumber = c;
    l.readNonEmptyString = d;
    l.readInteger = m;
    l.readBool = p;
    l.readStringOrEmpty = _;
    l.readTrimmedString = f;
    l.readObject = g;
    l.isBlankText = h;
    l.sentenceGap = y;
    l.trimToNull = C;
    l.readTextOrNumber = b;
    l.readArray = v;
    l.readObjects = S;
}, 98);