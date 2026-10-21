__d("WAWebTimeSpentLoggingBitArray", [
    "Promise",
    "WALogger",
    "WAWebPermanentStorage",
    "WAWebTsBitArrayWamEvent",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(e, t) {
        let i = `${e.bitmap[0]}`;
        for(let l = 1; l < e.bitmap.length; ++l){
            i += `:${e.bitmap[l]}`;
        }
        const s = [
            e.sessionId,
            e.sessionSeq,
            e.sessionCum,
            e.startTime,
            e.bitmapLen,
            e.relativeStartTimeMs ?? "",
            e.tsTimestampMs ?? "",
            e.unifiedSessionId ?? ""
        ];
        const u = `${s.join(":")}\$${i}`;
        const c = r("WAWebPermanentStorage").getItem(t);
        if (c == null) {
            r("WAWebPermanentStorage").setItem(t, u);
            return [
                e
            ];
        }
        const d = h(c);
        d.push(e);
        r("WAWebPermanentStorage").setItem(t, `${c}_${u}`);
        return d;
    }
    function _(t, a) {
        const i = p(t, a);
        (m || (m = n("Promise"))).all(i.map(g)).then(()=>r("WAWebPermanentStorage").removeItem(a)).catch(()=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[time-spent] error flushing events for ",
                "."
            ])), a);
        });
    }
    function f(e, t) {
        const a = r("WAWebPermanentStorage").getItem(e);
        if (a != null) {
            const i = h(a);
            if (i == null) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[time-spent] error parsing stashed bitarray data (",
                    ")"
                ])), e);
                return;
            }
            (m || (m = n("Promise"))).all(i.map(t)).then(()=>r("WAWebPermanentStorage").removeItem(e)).catch(()=>{
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[time-spent] error flushing events for ",
                    "."
                ])), e);
            });
        }
    }
    function g(e) {
        const r = Number(e.sessionId);
        const a = new (o("WAWebTsBitArrayWamEvent")).TsBitArrayWamEvent({
            tsSessionId: Number.isSafeInteger(r) ? r : -1,
            bitarrayLength: e.bitmapLen,
            bitarrayLow: e.bitmap[0],
            bitarrayHigh: e.bitmap[1] ?? void 0,
            cumulativeBits: e.sessionCum,
            relativeTimestampMs: e.relativeStartTimeMs ?? void 0,
            sessionSeq: e.sessionSeq
        });
        if (e.tsTimestampMs != null) {
            a.tsTimestampMs = e.tsTimestampMs;
        }
        if (e.unifiedSessionId != null) {
            a.unifiedSessionId = e.unifiedSessionId;
        }
        return a.commitAndWaitForFlush();
    }
    function h(e) {
        if (e.length === 0) {
            return [];
        }
        return r("compactMap")(e.split("_"), y);
    }
    function y(e) {
        let t;
        let n;
        let r;
        const a = e.split("$");
        const i = a[0];
        const l = a[1];
        const s = babelHelpers.arrayLikeToArray(a).slice(2);
        if (s.length || !l) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "Invalid stashed time spent event"
            ])));
            return;
        }
        const u = i.split(":");
        if (!(u.length >= 5 && u.length <= 8)) {
            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "Invalid stashed time spent event"
            ])));
            return;
        }
        const m = new Int32Array(l.split(":").map((e)=>Number(e)));
        const p = {
            sessionId: u[0],
            sessionSeq: Number(u[1]),
            sessionCum: Number(u[2]),
            startTime: Number(u[3]),
            bitmapLen: Number(u[4]),
            bitmap: m
        };
        if ((t = u[5]) != null && t.length) {
            p.relativeStartTimeMs = Number(u[5]);
        }
        if ((n = u[6]) != null && n.length) {
            p.tsTimestampMs = Number(u[6]);
        }
        if ((r = u[7]) != null && r.length) {
            p.unifiedSessionId = u[7];
        }
        return p;
    }
    l.stashBitarrayData = p;
    l.stashAndFlushBitarray = _;
    l.flushBitarrays = f;
    l.postTsBitArrayEvent = g;
    l.parseStashedBitarrayData = h;
}, 98);