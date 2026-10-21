__d("cometVirtualizationMarginRecord", [], function(t, n, r, o, a, i) {
    "use strict";
    const version_1 = 2;
    const l = 200;
    const s = 400;
    const u = 2400;
    const c = 8;
    const d = 10000;
    const m = 20;
    const p = /^[a-zA-Z0-9_]{1,64}$/;
    const _ = new Set([
        "__proto__",
        "constructor",
        "prototype"
    ]);
    function f(e) {
        if (Number.isNaN(e) || e <= 0) {
            return String(s);
        }
        const t = Math.min(u, Math.max(s, e));
        return String(Math.floor(t / l) * l);
    }
    function g(e) {
        return !_.has(e) && p.test(e);
    }
    function h(e) {
        const t = Number(e);
        return Number.isInteger(t) && t >= s && t <= u && t % l === 0 && String(t) === e;
    }
    function y(e) {
        if (typeof e === "number" && Number.isFinite(e) && e > 0) {
            return e;
        }
        return null;
    }
    function C(sampleCount) {
        const t = y(sampleCount);
        if (t != null && Number.isInteger(t)) {
            return t;
        }
        return null;
    }
    function b(e) {
        if (typeof e === "number" && Number.isFinite(e) && e >= 0) {
            return e;
        }
        return null;
    }
    function v(sessionBase, t) {
        if (sessionBase == null || typeof sessionBase !== "object") {
            return null;
        }
        const { bottomMargin, sampleCount, topMargin } = sessionBase;
        const a = b(topMargin);
        const i = b(bottomMargin);
        const l = b(sampleCount);
        if (a == null || i == null || l == null || !Number.isInteger(l) || a > t || i > t) {
            return null;
        }
        return {
            bottomMargin: i,
            sampleCount: l,
            topMargin: a
        };
    }
    function S(e) {
        if (e === u) {
            return d;
        }
        return e + l;
    }
    function R(e, t) {
        if (e == null || typeof e !== "object") {
            return null;
        }
        const { bottomMargin, lastUpdated, sampleCount, sessionBase, topMargin } = e;
        const l = y(topMargin);
        const s = y(bottomMargin);
        const u = C(sampleCount);
        if (l == null || s == null || u == null || l > t || s > t) {
            return null;
        }
        const lastUpdated_1 = typeof lastUpdated === "number" && Number.isFinite(lastUpdated) ? lastUpdated : 0;
        return {
            bottomMargin: s,
            lastUpdated: lastUpdated_1,
            sampleCount: u,
            sessionBase: v(sessionBase, t),
            topMargin: l
        };
    }
    function L(t) {
        try {
            if (t == null || typeof t !== "object") {
                return null;
            }
            const { records, version } = t;
            if (version !== version_1 || records == null || typeof records !== "object") {
                return null;
            }
            const records_1 = {};
            for (const a of Object.keys(records)){
                if (g(a)) {
                    let i = null;
                    try {
                        i = records[a];
                    } catch (e) {
                        i = null;
                    }
                    if (!(i == null || typeof i !== "object")) {
                        const l = {};
                        for (const s of Object.keys(i)){
                            if (h(s)) {
                                let u = null;
                                try {
                                    u = R(i[s], S(Number(s)));
                                } catch (e) {
                                    u = null;
                                }
                                if (u != null) {
                                    l[s] = u;
                                }
                            }
                        }
                        if (Object.keys(l).length > 0) {
                            records_1[a] = l;
                        }
                    }
                }
            }
            return {
                records: records_1,
                version: version_1
            };
        } catch (e) {
            return null;
        }
    }
    function E() {
        return {
            records: {},
            version: version_1
        };
    }
    function k(e) {
        return Object.keys(e).reduce((acc, key)=>Math.max(acc, e[key].lastUpdated), 0);
    }
    function I({ records }) {
        if (records != null) {
            const n = Object.keys(records);
            n.forEach((e)=>{
                const n = records[e];
                const r = Object.keys(n);
                if (r.length === 0) {
                    delete records[e];
                    return;
                }
                if (!(r.length <= c)) {
                    r.sort((e, t)=>n[e].lastUpdated - n[t].lastUpdated).slice(0, r.length - c).forEach((e)=>{
                        delete n[e];
                    });
                }
            });
            const r = Object.keys(records);
            if (!(r.length <= m)) {
                r.sort((e, n)=>k(records[e]) - k(records[n])).slice(0, r.length - m).forEach((e)=>{
                    delete records[e];
                });
            }
        }
    }
    i.PERSISTED_MARGIN_VERSION = version_1;
    i.MAX_BUCKETS_PER_SURFACE = c;
    i.MAX_SURFACES = m;
    i.getScreenBucket = f;
    i.isValidSurface = g;
    i.parsePersistedMarginPayload = L;
    i.createEmptyPayload = E;
    i.pruneRecords = I;
}, 66);