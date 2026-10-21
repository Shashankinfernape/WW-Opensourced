__d("WAWebSyncdQpl", [
    "WAWebOfflineHandler",
    "WAWebQplFlowWrapper",
    "WAWebSyncBootstrap",
    "WAWebSyncdMetrics",
    "err",
    "gkx",
    "justknobx",
    "qpl"
], function(t, n, r, o, a, i, l) {
    const e = r("qpl")._(891431212, "3270");
    let s = 0;
    const u = [
        "source"
    ];
    const c = 100;
    function d() {
        return Math.round(self.performance.now() / c) * c;
    }
    function m(e) {
        if (e?.string != null) {
            const t = {};
            Object.entries(e.string).forEach(([n, r])=>{
                if (!u.includes(n)) {
                    t[n] = r;
                }
            });
            e.string = t;
        }
    }
    function p(e, t) {
        if (t?.string?.source == null) {
            return e;
        }
        const t_string = t.string;
        const o = Object.keys(t_string).filter((e)=>u.includes(e));
        return [
            o.map((e)=>t_string[e]),
            e
        ].join("_");
    }
    function _() {
        if (r("WAWebSyncBootstrap").isSyncDBootstrapInProcess()) {
            return "bootstrap";
        }
        if (o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete()) {
            return "online";
        }
        return "offline_resume";
    }
    class f {
        constructor(){
            this.$3 = _();
            this.$4 = r("gkx")("26259") && r("justknobx")._("3998") && (this.$3 === "bootstrap" || this.$3 === "offline_resume");
            if (this.$4) {
                this.$1 = s++;
            }
        }
        $6() {
            if (!this.$4) {
                return false;
            }
            if (!this.$2) {
                throw r("err")("QPL instance ${this._instanceKey} is not started");
            }
            return true;
        }
        start() {
            if (this.$4) {
                this.$5 = o("WAWebQplFlowWrapper").QPL.markerStart(e, {
                    instanceKey: this.$1,
                    timestamp: d()
                });
                this.$2 = true;
                this.annotate({
                    when: this.$3
                });
            }
        }
        annotate(t) {
            if (this.$6()) {
                const e = o("WAWebSyncdMetrics").constructAnnotationsFromContext(t);
                m(e);
                if (e) {
                    this.$5?.annotate(e);
                }
            }
        }
        mark(t, n) {
            if (this.$6()) {
                const e = o("WAWebSyncdMetrics").constructAnnotationsFromContext(n);
                this.$7(t, e);
            }
        }
        markAnnotations(t, n) {
            if (this.$6()) {
                this.$7(t, n);
            }
        }
        $7(t, n) {
            const r = p(t, n);
            const o = babelHelpers.extends({}, n);
            m(o);
            this.$5?.addPoint(r, babelHelpers.extends({}, n && {
                data: o
            }, {
                timestamp: d()
            }));
        }
        end(t = false) {
            let e;
            if (this.$6()) {
                this.$2 = false;
                if ((e = this.$5) != null) {
                    e.end(t ? 3 : 2, {
                        timestamp: d()
                    });
                }
                this.$5 = null;
            }
        }
    }
    l.SyncdQPL = f;
}, 98);