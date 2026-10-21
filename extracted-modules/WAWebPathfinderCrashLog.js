__d("WAWebPathfinderCrashLog", [
    "WALogger",
    "WAWebLogForCrash",
    "WAWebPathfinderLogger",
    "WAWebPathfinderTraceEnvelope",
    "getErrorSafe",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = "wa:pathfinderTrace";
    const m = 20;
    const p = 4000;
    const _ = 128;
    const f = "dms,type,screen,target,dest,xN";
    const g = "clip_reasons";
    const h = "event_cap";
    const y = "char_budget";
    const C = 1000;
    const b = new Set([
        "SCREEN_CHANGED",
        "FOREGROUND",
        "BACKGROUND"
    ]);
    let v = false;
    let S = 0;
    let R = null;
    function L() {
        try {
            if (!r("justknobx")._("4997")) {
                return;
            }
            o("WAWebLogForCrash").onLogForCrashReady(function() {
                try {
                    v = true;
                    o("WAWebPathfinderLogger").registerPathfinderEmitObserver(E);
                } catch (error) {
                    $(()=>o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[pathfinder] crash-log observer registration failed"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("pathfinder-crashlog-init-error"));
                }
            });
        } catch (error) {
            $(()=>o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[pathfinder] crash-log init failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("pathfinder-crashlog-init-error"));
        }
    }
    function E(e) {
        try {
            if (!v) {
                return;
            }
            if (b.has(e)) {
                k();
                return;
            }
            const t = Date.now() - S;
            if (t >= C) {
                k();
            } else if (R == null) {
                R = self.setTimeout(k, C - t);
            }
        } catch (error) {
            $(()=>o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[pathfinder] crash-log emit handling failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("pathfinder-crashlog-emit-error"));
        }
    }
    function k() {
        try {
            if (R != null) {
                self.clearTimeout(R);
                R = null;
            }
            const e = I();
            if (e != null) {
                o("WAWebLogForCrash").logForCrash(d, e);
            }
            S = Date.now();
        } catch (error) {
            $(()=>o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[pathfinder] crash-log flush failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("pathfinder-crashlog-flush-error"));
        }
    }
    function I() {
        const e = o("WAWebPathfinderLogger").getPathfinderLogSnapshotWithMeta();
        const { entries, headClipped } = e;
        if (entries.length === 0) {
            return null;
        }
        const timestampMs = entries[entries.length - 1].timestampMs;
        const a = Math.max(0, entries.length - m);
        let dropped = a;
        const records = [];
        let s = a > 0 ? entries[a - 1].timestampMs : null;
        for(let u = a; u < entries.length; u++){
            records.push(D(entries[u], s));
            s = entries[u].timestampMs;
        }
        const clipReasons = [];
        if (headClipped) {
            clipReasons.push(o("WAWebPathfinderTraceEnvelope").CLIP_REASON_RING_CAPACITY);
        }
        if (a > 0) {
            clipReasons.push(h);
        }
        let d = T({
            anchorMs: timestampMs,
            clipReasons,
            dropped,
            records
        });
        for(d.length > p && records.length > 1 && (clipReasons.push(y), d = T({
            anchorMs: timestampMs,
            clipReasons,
            dropped,
            records
        })); d.length > p && records.length > 1;){
            records.shift();
            dropped++;
            d = T({
                anchorMs: timestampMs,
                clipReasons,
                dropped,
                records
            });
        }
        return d;
    }
    function T({ anchorMs, clipReasons, dropped, records }) {
        let a = `#pathfinder end=${anchorMs} cols=${f}`;
        if (clipReasons.length > 0) {
            a += ` ${g}=${clipReasons.join(",")}`;
        }
        const i = [
            a
        ];
        if (dropped > 0) {
            i.push(`#${dropped} older events dropped`);
        }
        return i.concat(records).join("\n");
    }
    function D(e, t) {
        const n = t != null ? e.timestampMs - t : 0;
        const r = [
            String(n),
            e.eventType,
            x(e.screenName),
            x(e.trackingId),
            x(e.destinationName),
            e.debounceCount != null && e.debounceCount > 1 ? String(e.debounceCount) : ""
        ];
        return `${r.join(",")}|`;
    }
    function x(e) {
        if (e == null) {
            return "";
        }
        const t = e.replace(/[,|\t\r\n]/g, " ");
        if (t.length > _) {
            return `${t.slice(0, _ - 1)}…`;
        }
        return t;
    }
    function $(e) {
        try {
            e();
        } catch (e) {}
    }
    l.initPathfinderCrashLog = L;
}, 98);