__d("WATimeUtils", [
    "Promise",
    "WAHex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 60;
    const u = 5 * s;
    const c = 60 * s;
    const d = 24 * c;
    const m = 7 * d;
    const p = 365 * d;
    const _ = 60 * 1000;
    const f = c * 1000;
    const g = 24 * f;
    const h = 7 * g;
    const y = 1 << 31;
    const C = ~y;
    const b = y + 1;
    const v = {
        time: 0,
        day: -4
    };
    let S = 0;
    function R() {
        return S;
    }
    function L(e) {
        S = e;
    }
    function E(e) {
        return te(e).toUTCString();
    }
    function k(e) {
        const t = e | 0;
        return Math.max(b, Math.min(t, C));
    }
    function I(e) {
        return k(e / 1000);
    }
    function T(e) {
        if (typeof e !== "number") {
            if (o("WAHex").hexLongIsNegative(e)) {
                return b;
            }
            return C;
        }
        return k(e);
    }
    function D(e) {
        if (typeof e !== "number") {
            if (o("WAHex").hexLongIsNegative(e)) {
                return b;
            }
            return C;
        }
        return e;
    }
    function x(e) {
        if (e == null) {
            return e;
        }
        if (e > C) {
            return I(e);
        }
        return k(e);
    }
    function $() {
        return oe() - S * 1000;
    }
    function P(e) {
        return e;
    }
    function N(e) {
        return e;
    }
    function M(e) {
        return e * 1000;
    }
    function w(e, t) {
        return A(V(), e, t);
    }
    function A(e, t, n) {
        const r = Math.max(t + n - e, 0);
        return Math.min(1000 * r, ~(1 << 31));
    }
    function F(e, t) {
        const n = t ?? V();
        return k(Math.ceil(n + Math.max(e, 0)));
    }
    function O(e, t) {
        const n = t ?? V();
        return k(Math.ceil(n - Math.max(e, 0)));
    }
    const B = Math.pow(2, 48);
    function W(e) {
        if (e >= B) {
            return $() + 60000;
        }
        return e;
    }
    function q(e) {
        const t = Math.max(e - V(), 0);
        return Math.min(1000 * t, ~(1 << 31));
    }
    function U(t) {
        const r = q(t);
        return new (e || (e = n("Promise")))(function(e) {
            setTimeout(e, r);
        });
    }
    function V() {
        return k(Date.now() / 1000 - S);
    }
    function H() {
        return k(Date.now() / 1000);
    }
    function G() {
        return k(new Date().setHours(0, 0, 0, 0) / 1000 - S);
    }
    function z() {
        return Date.now() - S * 1000;
    }
    function j(e) {
        return Math.max(e - V(), 0);
    }
    function K(e) {
        return j(e) > 0;
    }
    function Q() {
        return performance.now();
    }
    function X(e) {
        return Math.floor(performance.now() - e);
    }
    function Y(e, t) {
        if (e < t) {
            return e;
        }
        return t;
    }
    const J = (()=>{
        function e() {
            const e = Q();
            this.$1 = e;
            this.$2 = e;
        }
        const t = e.prototype;
        t.reset = function() {
            this.$2 = Q();
        };
        t.elapsed = function() {
            return X(this.$2);
        };
        t.cumulative = function() {
            return X(this.$1);
        };
        return e;
    })();
    function Z(e, t, n) {
        return Math.abs(e - t) <= n;
    }
    function ee(e, t) {
        return Z(V(), e, t);
    }
    function te(e) {
        return new Date(e * 1000);
    }
    function ne(e, t) {
        if (Math.abs(e - t) > d) {
            return false;
        }
        const n = v.time === e ? v.day : te(e + S).getDay();
        const r = v.time === t ? v.day : te(t + S).getDay();
        v.time = t;
        v.day = r;
        return n === r;
    }
    function re(e) {
        const t = Number.parseInt(e, 16);
        if (Number.isFinite(t)) {
            return new Date(k(t) * 1000);
        }
        return null;
    }
    function oe() {
        return Date.now();
    }
    function ae(e) {
        const t = new Date(e);
        if (isNaN(t)) {
            return null;
        }
        return I(t.getTime());
    }
    function ie(e, t) {
        const n = Math.abs(e - t);
        return Math.ceil(n / g);
    }
    function le(e) {
        const t = 86400000;
        const n = new Date(e.getTime());
        const r = n.getUTCDay() || 7;
        n.setUTCDate(n.getUTCDate() + 4 - r);
        const o = new Date(Date.UTC(n.getUTCFullYear(), 0, 1));
        const a = Math.ceil(((n.getTime() - o.getTime()) / t + 1) / 7);
        return a;
    }
    l.MINUTE_SECONDS = s;
    l.FIVE_MINUTES = u;
    l.HOUR_SECONDS = c;
    l.DAY_SECONDS = d;
    l.WEEK_SECONDS = m;
    l.YEAR_SECONDS = p;
    l.MINUTE_MILLISECONDS = _;
    l.HOUR_MILLISECONDS = f;
    l.DAY_MILLISECONDS = g;
    l.WEEK_MILLISECONDS = h;
    l.DEFAULT_UNIXTIME = y;
    l.MAX_INT = C;
    l.getClockSkew = R;
    l.setClockSkew = L;
    l.toHttpHeaderDate = E;
    l.castToUnixTime = k;
    l.castMilliSecondsToUnixTime = I;
    l.castLongIntToUnixTime = T;
    l.castLongIntToMillisTime = D;
    l.castMillisTimeToUnixTime = x;
    l.millisTime = $;
    l.castToMillisTime = P;
    l.fromMillisTime = N;
    l.castUnixTimeToMillisTime = M;
    l.timeoutFor = w;
    l.timeoutForAt = A;
    l.futureUnixTime = F;
    l.pastUnixTime = O;
    l.miAdjustTimestamp = W;
    l.cappedMillisecondsUntil = q;
    l.delayUntil = U;
    l.unixTime = V;
    l.unixTimeWithoutClockSkewCorrection = H;
    l.midnight = G;
    l.unixTimeMs = z;
    l.secondsUntil = j;
    l.isInFuture = K;
    l.monotonicTime = Q;
    l.monotonicTimeSince = X;
    l.oldest = Y;
    l.MonotonicTimer = J;
    l.happenedWithinAt = Z;
    l.happenedWithin = ee;
    l.toDate = te;
    l.sameDay = ne;
    l.convertHexToDate = re;
    l.performanceAbsoluteNow = oe;
    l.convertISO8601DateFormatToUnixTime = ae;
    l.daysDiff = ie;
    l.weekOfYear = le;
}, 98);