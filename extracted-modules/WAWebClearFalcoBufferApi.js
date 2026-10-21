__d("WAWebClearFalcoBufferApi", [
    "WALogger",
    "WAWebCanonicalWamFalcoBufferConstants",
    "WAWebLocalStorage",
    "WAWebStorageErrorHandlingUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 4194304;
    const d = 5;
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ force: t }) {
            if (r("WAWebLocalStorage") != null) {
                const n = t || f() > c || (yield o("WAWebStorageErrorHandlingUtils").isQuotaActuallyExceeded());
                if (n) {
                    const a = h();
                    if (a.length !== 0) {
                        try {
                            let i = 0;
                            const l = new Map;
                            a.forEach((e)=>{
                                const t = r("WAWebLocalStorage")[e];
                                if (typeof t === "string") {
                                    i += g(e + t);
                                }
                                r("WAWebLocalStorage").removeItem(e);
                                for (const n of _(e, t)){
                                    const a = `${n.queue}:${n.event}`;
                                    const s = l.get(a) ?? {
                                        count: 0,
                                        event: n.event,
                                        maxItemBytes: 0,
                                        queue: n.queue,
                                        totalItemBytes: 0
                                    };
                                    s.count++;
                                    s.maxItemBytes = Math.max(s.maxItemBytes, n.itemBytes);
                                    s.totalItemBytes += n.itemBytes;
                                    l.set(a, s);
                                }
                            });
                            const m = Array.from(l.values()).sort((e, t)=>t.totalItemBytes - e.totalItemBytes).slice(0, d);
                            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[falco] cleared ",
                                " keys (",
                                " estimated storage bytes); top event contributors by estimated item bytes: ",
                                ""
                            ])), a.length, i, JSON.stringify(m)).sendLogs("wam_falco_buffer_cleared");
                        } catch (e) {
                            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[falco] error clearing falco buffer"
                            ]))).catching(r("getErrorSafe")(e)).sendLogs("wam_falco_buffer_clear_error");
                        }
                    }
                }
            }
        });
        return p.apply(this, arguments);
    }
    function _(t, n) {
        if (typeof n !== "string") {
            return [];
        }
        try {
            const a = JSON.parse(n);
            let i = null;
            if (t === o("WAWebCanonicalWamFalcoBufferConstants").CANONICAL_WAM_FALCO_BUFFER_STORAGE_KEY) {
                i = a;
            } else if (a != null && typeof a === "object" && Array.isArray(a.items)) {
                i = a.items;
            }
            if (!Array.isArray(i)) {
                return [];
            }
            const l = [];
            const s = t.split("^$")[0];
            for (const u of i){
                if (u != null && typeof u === "object" && typeof u.name === "string") {
                    const c = u.name;
                    l.push({
                        event: c,
                        itemBytes: g(JSON.stringify(u)),
                        queue: s
                    });
                }
            }
            return l;
        } catch (t) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[falco] unable to read cleared event names"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("wam_falco_buffer_clear_count_error");
            return [];
        }
    }
    function f() {
        if (r("WAWebLocalStorage") == null) {
            return 0;
        }
        let e = 0;
        for (const t of Object.keys(r("WAWebLocalStorage"))){
            const o = r("WAWebLocalStorage")[t] ?? "";
            e += g(t + o);
        }
        return e;
    }
    function g(e) {
        return e.length * 2;
    }
    function h() {
        if (r("WAWebLocalStorage") == null) {
            return [];
        }
        return Object.keys(r("WAWebLocalStorage")).filter((e)=>e.includes("falco_queue_log") || e.includes("falco_queue_immediately") || e.includes("falco_queue_critical") || e === o("WAWebCanonicalWamFalcoBufferConstants").CANONICAL_WAM_FALCO_BUFFER_STORAGE_KEY);
    }
    l.clearFalcoBuffer = m;
}, 98);