__d("WAWebCrashContextUtils", [
    "WAWebAppTracker",
    "WAWebWamEnumCrashType",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "native-crash-reporter";
    function s(t) {
        if (t == null || t === "") {
            return false;
        }
        return t.split(",").some((t)=>t.trim() === e);
    }
    let u = null;
    function c(e, t) {
        u = {
            endTime: e,
            duration: t
        };
    }
    function d() {
        return u;
    }
    function m() {
        u = null;
    }
    function p(e, t) {
        if (e === o("WAWebWamEnumCrashType").CRASH_TYPE.CRASH) {
            return o("WAWebAppTracker").AppTracker.getAppContext();
        }
        if (e === o("WAWebWamEnumCrashType").CRASH_TYPE.ANR || e === o("WAWebWamEnumCrashType").CRASH_TYPE.DISPATCHER_NOT_RESPONDING) {
            const n = g(t);
            return o("WAWebAppTracker").AppTracker.getAppContextWithLookback(n.duration, n.endTime);
        }
        return "";
    }
    function _(e, t) {
        if (r("isStringNullOrEmpty")(e)) {
            return t ?? "";
        }
        if (r("isStringNullOrEmpty")(t)) {
            return e ?? "";
        }
        const n = new Set([].concat(e.split("+"), t.split("+")));
        return Array.from(n, function(e) {
            return e.trim();
        }).filter(Boolean).sort().join("+");
    }
    function f(e) {
        if (e == null || e === "") {
            return "";
        }
        return e.replace(/WebHang > |NativeHang > |VisibleWindow|MinimizedWindow|ActiveWindow|ActiveCall/g, "").replace(/^[|: ]+/, "");
    }
    function g(e) {
        let t;
        if (e != null) {
            t = h(e);
        } else {
            t = d();
            m();
        }
        return t ?? {
            duration: 5000
        };
    }
    function h(e) {
        try {
            const t = JSON.parse(e);
            const n = new Date(t.reportedAt).getTime();
            const r = t.timeout.split(":");
            const o = parseInt(r[0], 10);
            const a = parseInt(r[1], 10);
            const i = parseFloat(r[2]);
            const l = (o * 3600 + a * 60 + i) * 1000;
            const s = self.performance.timeOrigin || Date.now() - self.performance.now();
            const u = n - s;
            const c = u + l;
            return {
                endTime: c,
                duration: l
            };
        } catch (e) {
            return null;
        }
    }
    l.NATIVE_CRASH_REPORTER_TAG = e;
    l.isPreviousSessionCrash = s;
    l.recordHangEvent = c;
    l.getCrashEventAppContext = p;
    l.mergeAppContexts = _;
    l.cleanLegacyAppContext = f;
}, 98);