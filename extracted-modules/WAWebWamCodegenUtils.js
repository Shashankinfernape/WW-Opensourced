__d("WAWebWamCodegenUtils", [
    "WAUpperFirst",
    "WAWebWamCodegenGlobalMetrics",
    "WAWebWamCodegenWamEvent",
    "WAWebWamInitQueue",
    "WAWebWamRuntimeProvider",
    "WAWebWamTypeHash",
    "err",
    "gkx",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return e.replace(/([a-z]{2,})(\d)/g, "$1_$2").replace(/([A-Z])/g, "_$1").toLowerCase();
    }
    function s(e) {
        const t = e.replace(/([A-Z])/g, "_$1").toLowerCase().replace(/^_/, "");
        return `wam_${t}`;
    }
    const u = Object.freeze({
        BOOLEAN: "boolean",
        INTEGER: "integer",
        NUMBER: "number",
        STRING: "string",
        TIMER: "timer"
    });
    const c = new (o("WAWebWamCodegenGlobalMetrics")).Metrics;
    const d = {};
    const m = new Map;
    const p = r("justknobx")._("1600");
    function _(e) {
        return m.get(e);
    }
    function f({ id: n, name: a, privateStatsIdInt: i, props: l, validators: _, wamChannel: f, weight: g }) {
        const h = {
            id: n,
            weight: g,
            wamChannel: f,
            privateStatsIdInt: i,
            validators: _
        };
        const y = {};
        const C = [];
        const b = {};
        const v = new Map;
        for(const S in l){
            const R = l[S];
            const L = c.define({
                eventName: a,
                fieldName: S,
                id: R[0],
                type: R[1]
            });
            v.set(R[0], L.name);
            y[S] = L.validator;
            if (p) {
                b[S] = e(S);
            }
            if (R[1] === u.TIMER) {
                C.push(S);
            }
        }
        if (p) {
            const E = s(a);
            h.$falcoEventName = E;
            h.$falcoFieldMap = b;
            m.set(n, {
                falcoEventName: E,
                falcoFieldMap: b,
                fieldIdToName: v
            });
        }
        const k = o("WAWebWamTypeHash").defineTypeHash(a, y, o("WAWebWamCodegenWamEvent").WamEvent);
        C.forEach((e)=>{
            h[`mark${r("WAUpperFirst")(e)}`] = function() {
                const r = this.eventTime;
                const o = this.startMarkers;
                this[e] = Date.now() - (o[e]?.ts ?? r);
            };
            h[`start${r("WAUpperFirst")(e)}`] = function() {
                const t = Date.now();
                this.startMarkers[e] = {
                    ts: t
                };
            };
        });
        if (p) {
            h.$rawProps = l;
        }
        Object.assign(k.prototype, h);
        d[a] = k;
        return k;
    }
    function g(e, t = {}) {
        for(const n in e){
            const i = e[n];
            const l = i[2];
            let s = 1;
            if (r("gkx")("26259")) {
                s = l[1];
            }
            if (r("gkx")("26258")) {
                s = l[2];
            }
            const u = i[3] ?? "regular";
            const c = i.length === 5 ? i[4] : -1;
            return f({
                name: n,
                id: i[0],
                props: i[1],
                weight: s,
                wamChannel: u,
                privateStatsIdInt: c,
                validators: t[n] ?? []
            });
        }
        throw r("err")("defineEvent: empty definition");
    }
    const h = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.commitOnSet = true;
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebWamTypeHash").TypeHash);
    function y(e) {
        const t = {};
        const n = function() {
            const n = e[r];
            const a = n[0];
            const i = n[1];
            const l = n[2];
            const s = l === void 0 ? [
                "regular"
            ] : l;
            const u = c.defineGlobal(r, a, i, s);
            t[r] = {
                type: u.validator,
                set: function(t) {
                    if (this.commitOnSet) {
                        const e = o("WAWebWamRuntimeProvider").getWamRuntime();
                        if (e) {
                            e.set(u, t);
                        } else {
                            o("WAWebWamInitQueue").queueMetric(u, t);
                        }
                    }
                }
            };
        };
        for(var r in e){
            n();
        }
        const a = o("WAWebWamTypeHash").defineTypeHash("Global", t, h);
        return new a;
    }
    l.TYPES = u;
    l.metrics = c;
    l.events = d;
    l.getFalcoMetadataForWamEventId = _;
    l.defineEvents = g;
    l.defineGlobal = y;
}, 98);