__d("WAWebWamCodegenWamEvent", [
    "Promise",
    "WACamelCase",
    "WALogger",
    "WAWebWamCodegenUtils",
    "WAWebWamDroppedEventWamEvent",
    "WAWebWamInitQueue",
    "WAWebWamRuntimeProvider",
    "WAWebWamTypeHash"
], function(t, n, r, o, a, i, l) {
    const e = [
        "id",
        "privateStatsIdInt",
        "wamChannel",
        "weight"
    ];
    let s;
    let u;
    let c;
    let d;
    let m;
    let p = 1;
    const _ = new WeakMap;
    function f(e) {
        let t = _.get(e);
        if (t == null) {
            t = {};
            for(const n in e){
                const r = e[n];
                if (typeof r === "number") {
                    t[r] = n.toLowerCase();
                }
            }
            _.set(e, t);
        }
        return t;
    }
    const g = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this) || this;
            n.instanceId = p++;
            n.eventTime = Date.now();
            n.commitTime = void 0;
            n.startMarkers = {};
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const a = t.prototype;
        a.getValue = function(t) {
            return this.all[t];
        };
        a.getEventNameForFalco = function() {
            return this.$falcoEventName;
        };
        a.hasFalcoField = function(t) {
            return this.$falcoFieldMap?.[t] != null;
        };
        a.setFalcoField = function(t, n) {
            if (this.hasFalcoField(t)) {
                this.set({
                    [t]: n
                });
            }
        };
        a.resolveEnumValue = function(t, n) {
            if (typeof n !== "number") {
                return n;
            }
            const r = this.$rawProps?.[t];
            if (r == null) {
                return n;
            }
            const a = r[1];
            if (a != null && typeof a === "object" && !Object.values(o("WAWebWamCodegenUtils").TYPES).includes(a)) {
                const l = f(a);
                return l[n] ?? n;
            }
            return n;
        };
        a.getFieldsMapForFalco = function() {
            const e = this.$falcoFieldMap;
            if (e == null) {
                return null;
            }
            const t = {};
            const n = this.all;
            if (n == null) {
                return t;
            }
            for (const r of Object.keys(n)){
                const o = n[r];
                if (o != null) {
                    const a = e[r];
                    if (a != null) {
                        t[a] = o;
                    }
                }
            }
            return t;
        };
        a.runPreCommitValidation = function() {
            const e = this;
            this.validators.forEach(([n, a, i])=>{
                for (const l of n){
                    if (!l(e)) {
                        return;
                    }
                }
                for (const c of a){
                    if (e.getValue(r("WACamelCase")(c)) == null) {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            ".",
                            " should be nonnull"
                        ])), e.$className, c);
                        const d = new TypeError(`${e.$className}.${c} should be nonnull`);
                        d.stack;
                        throw d;
                    }
                }
                for (const [p, _] of i){
                    if (!p(e)) {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " event validator failed condition ",
                            ""
                        ])), e.$className, _);
                        const f = new TypeError(`${e.$className} event validator failed condition ${_}`);
                        f.stack;
                        throw f;
                    }
                }
            });
        };
        a.commit = function() {
            try {
                this.runPreCommitValidation();
            } catch (e) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "wam event failed validation: ",
                    ""
                ])), e);
                new (o("WAWebWamDroppedEventWamEvent")).WamDroppedEventWamEvent({
                    droppedEventCode: this.id,
                    droppedEventCount: 1
                }).commit();
                return;
            }
            const e = o("WAWebWamRuntimeProvider").getWamRuntime();
            if (e) {
                e.commit(this, false);
            } else {
                o("WAWebWamInitQueue").queueEvent(this, false);
            }
        };
        a.commitAndWaitForFlush = function(t = false) {
            this.runPreCommitValidation();
            const e = o("WAWebWamRuntimeProvider").getWamRuntime();
            if (e == null) {
                o("WAWebWamInitQueue").queueEvent(this, t);
                return (m || (m = n("Promise"))).resolve();
            }
            const r = e.commit(this, t);
            return r ?? (o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "commitAndWaitForFlush called before initWamRuntime"
            ]))), (m || (m = n("Promise"))).resolve());
        };
        a.setTime = function(t) {
            this.eventTime = t || Date.now();
        };
        return t;
    })(o("WAWebWamTypeHash").TypeHash);
    const h = ((t)=>{
        function n(n) {
            let r;
            r = t.call(this) || this;
            r.validators = [];
            const { id: a, privateStatsIdInt: i, wamChannel: l, weight: s } = n;
            const u = babelHelpers.objectWithoutPropertiesLoose(n, e);
            r.id = a;
            r.weight = s ?? 0;
            r.wamChannel = l ?? "regular";
            if (i != null) {
                r.privateStatsIdInt = i;
            }
            r.$className = `RawWamEvent (${r.id})`;
            r.all = u;
            r.set(r.all);
            for(const c in r.all){
                o("WAWebWamCodegenUtils").metrics.define({
                    eventName: r.$className,
                    fieldName: c,
                    id: Number(c),
                    type: "number"
                });
            }
            return r;
        }
        babelHelpers.inheritsLoose(n, t);
        const r = n.prototype;
        r.getEventNameForFalco = function() {
            return o("WAWebWamCodegenUtils").getFalcoMetadataForWamEventId(this.id)?.falcoEventName ?? null;
        };
        r.hasFalcoField = function(t) {
            return o("WAWebWamCodegenUtils").getFalcoMetadataForWamEventId(this.id)?.falcoFieldMap[t] != null;
        };
        r.setFalcoField = function(t, n) {
            const e = o("WAWebWamCodegenUtils").getFalcoMetadataForWamEventId(this.id);
            if (e != null) {
                for (const [a, i] of e.fieldIdToName){
                    if (i === t) {
                        o("WAWebWamCodegenUtils").metrics.define({
                            eventName: this.$className,
                            fieldName: String(a),
                            id: a,
                            type: "number"
                        });
                        this.all[String(a)] = n;
                        return;
                    }
                }
            }
        };
        r.getFieldsMapForFalco = function() {
            const e = o("WAWebWamCodegenUtils").getFalcoMetadataForWamEventId(this.id);
            if (e == null) {
                return null;
            }
            const t = {};
            const n = this.all;
            if (n == null) {
                return t;
            }
            for (const r of Object.keys(n)){
                const a = n[r];
                if (a != null) {
                    const i = e.fieldIdToName.get(Number(r));
                    if (i != null) {
                        const l = e.falcoFieldMap[i];
                        if (l != null) {
                            t[l] = a;
                        }
                    }
                }
            }
            return t;
        };
        return n;
    })(g);
    l.WamEvent = g;
    l.RawWamEvent = h;
}, 98);