__d("WAWebPriorLogs", [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebSchemaSyncdLogs",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = n("$InternalEnum")({
        Empty: "",
        Regular: "regular",
        RegularLow: "regular_low",
        RegularHigh: "regular_high",
        CriticalBlock: "critical_block",
        CriticalUnblockLow: "critical_unblock_low"
    });
    const p = new Map;
    const _ = 210;
    const f = 200;
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = p.get(e) ?? 0;
            p.set(e, n + 1);
            if (n % _ === 0) {
                const r = yield o("WAWebSchemaSyncdLogs").getSyncdLogsTable().equals([
                    "collection"
                ], e);
                if (r.length < f) {
                    return;
                }
                const a = r.sort((e, t)=>e.ts - t.ts).slice(0, r.length - f).map((e)=>e.id);
                yield o("WAWebSchemaSyncdLogs").getSyncdLogsTable().bulkRemove(a);
            }
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(collection, log) {
            try {
                yield g(collection);
                yield o("WAWebSchemaSyncdLogs").getSyncdLogsTable().bulkCreate([
                    {
                        collection,
                        log,
                        ts: o("WATimeUtils").unixTimeMs()
                    }
                ]);
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "prior logs: error while writing to prior logs: ",
                    ""
                ])), error);
            }
        });
        return C.apply(this, arguments);
    }
    function b() {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = r("compactMap")([].concat(Array.from(m.members()), [
                ""
            ]), function(e) {
                return m.cast(e);
            });
            return S(e);
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = e.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const t = yield o("WAWebSchemaSyncdLogs").getSyncdLogsTable().equals([
                            "collection"
                        ], e);
                        const n = t.filter((e)=>o("WATimeUtils").happenedWithin(o("WATimeUtils").castMilliSecondsToUnixTime(e.ts), o("WATimeUtils").DAY_MILLISECONDS * 60));
                        const r = n.map((e)=>`${o("WATimeUtils").toHttpHeaderDate(o("WATimeUtils").castMilliSecondsToUnixTime(e.ts))}: ${e.log}\r\n`);
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "\r\n\r\nprior logs: category ",
                            ": \r\n\r\n"
                        ], [
                            "\\r\\n\\r\\nprior logs: category ",
                            ": \\r\\n\\r\\n"
                        ])), e);
                        for(let a = 20, i = 0; i < r.length; i += a){
                            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "",
                                ""
                            ])), r.slice(i, i + a));
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
                yield (d || (d = n("Promise"))).all(t ?? []);
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "prior logs: error while printing fatal logs: ",
                    ""
                ])), error);
            }
        });
        return R.apply(this, arguments);
    }
    l.WAWebLogCategory = m;
    l.writePriorLog = y;
    l.printAllPriorLogs = b;
    l.printPriorLogs = S;
}, 98);