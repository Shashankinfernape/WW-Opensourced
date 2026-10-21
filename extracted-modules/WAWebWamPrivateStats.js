__d("WAWebWamPrivateStats", [
    "Promise",
    "WALogger",
    "WARandomHex",
    "WAResolvable",
    "WATimeUtils",
    "WAWebWamEnumPsIdAction",
    "WAWebWamGlobals",
    "WAWebWamStorage",
    "WAWebWamUtils",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = {};
    const d = {};
    const m = {};
    o("WAWebWamGlobals").PrivateStatsAllIds.map((e)=>{
        c[e.keyHashInt] = e.key;
        d[e.key] = e.keyHashInt;
        m[e.key] = {
            value: e.keyHashInt,
            rotationPeriodDays: e.rotationPeriodDays
        };
    });
    c[0] = "none";
    d.none = 0;
    m.none = {
        value: "none",
        rotationPeriodDays: -1
    };
    let p = null;
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (p != null) {
                return p.promise;
            }
            const e = new (o("WAResolvable")).Resolvable;
            p = e;
            const t = [];
            const n = yield r("WAWebWamStorage").getPsMeta();
            const a = new Set;
            n.map((e)=>{
                a.add(e.key);
                if (m[e.key] === void 0) {
                    t.push(e.key);
                } else {
                    m[e.key].value = e.value;
                }
            });
            const i = Object.keys(m).filter((e)=>!a.has(e)).map((e)=>{
                if (e !== "none") {
                    m[e].value = o("WARandomHex").randomHex(16);
                }
                return {
                    key: e,
                    value: m[e].value,
                    rotateInDays: m[e].rotationPeriodDays,
                    creationTs: o("WATimeUtils").unixTime()
                };
            });
            yield r("WAWebWamStorage").addPsMeta(i);
            yield r("WAWebWamStorage").removePsMeta(t);
            i.map((e)=>o("WAWebWamUtils").logPsIdUpdate(o("WAWebWamEnumPsIdAction").PS_ID_ACTION.CREATED, d[e.key], e.rotateInDays));
            t.map((e)=>o("WAWebWamUtils").logPsIdUpdate(o("WAWebWamEnumPsIdAction").PS_ID_ACTION.DELETED, d[e], m[e].rotationPeriodDays));
            e.resolve();
        });
        return f.apply(this, arguments);
    }
    function g() {
        const e = new Map;
        o("WAWebWamGlobals").PrivateStatsAllIds.forEach((t)=>{
            e.set(t.keyHashInt, String(m[t.key].value));
        });
        return e;
    }
    function h(e) {
        if (p == null) {
            throw r("err")("can't call getPrivateStatsKeyFromInt without initializing");
        }
        return c[e];
    }
    function y(e) {
        if (e === "regular") {
            throw r("err")("tried to get psId for regular channel event");
        }
        if (p == null) {
            throw r("err")("can't call getLatestPrivateStatsIdValueFromKey without initializing");
        }
        return m[e].value;
    }
    function C() {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = [];
            if (p == null) {
                throw r("err")("can't call maybeRotatePsIds without initializing");
            }
            try {
                yield p.promise;
                const a = yield r("WAWebWamStorage").getPsMeta();
                yield (u || (u = n("Promise"))).all(a.map((()=>{
                    const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                        try {
                            const { creationTs: r, key: a, rotateInDays: i } = n;
                            if (R(r, i)) {
                                t.push(a);
                                yield v(a);
                            }
                        } catch (t) {
                            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "error while rotating PS id for key ",
                                ""
                            ])), n.key);
                        }
                    });
                    return function(e) {
                        return r.apply(this, arguments);
                    };
                })()));
            } catch (e) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "error while rotating PS ids ",
                    ""
                ])), e);
            }
            return t;
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WARandomHex").randomHex(16);
            m[e].value = t;
            yield r("WAWebWamStorage").updatePsMeta({
                key: e,
                rotateInDays: m[e].rotationPeriodDays,
                value: t,
                creationTs: o("WATimeUtils").unixTime()
            });
            o("WAWebWamUtils").logPsIdUpdate(o("WAWebWamEnumPsIdAction").PS_ID_ACTION.ROTATED, d[e], m[e].rotationPeriodDays);
        });
        return S.apply(this, arguments);
    }
    function R(e, t) {
        if (t === -1 || e == null) {
            return false;
        }
        const n = t * o("WATimeUtils").DAY_SECONDS;
        const r = Math.floor(o("WATimeUtils").unixTime() / n) * n;
        return e < r;
    }
    l.initPrivateStats = _;
    l.getPrivateStatsIdsForCoreWam = g;
    l.getPrivateStatsKeyFromInt = h;
    l.getLatestPrivateStatsIdValueFromKey = y;
    l.maybeRotatePsIds = C;
}, 98);