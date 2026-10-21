__d("WAWebNewsletterLiveUpdatesManager", [
    "WALogger",
    "WAWebNewsletterSubscribeToLiveUpdatesAction",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (()=>{
        function t() {}
        const t_prototype = t.prototype;
        t_prototype.$3 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = yield o("WAWebNewsletterSubscribeToLiveUpdatesAction").subscribeToLiveUpdates(t);
                if (n == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[LiveUpdatesManager] Failed to subscribe to live updates"
                    ])));
                    return;
                }
                return n.duration;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.$4 = function(t, r) {
            const e = this;
            this.unsubscribe();
            this.$1 = self.setTimeout(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const n = yield e.$3(t);
                if (n != null) {
                    return e.$4(t, n);
                }
            }), r);
        };
        t_prototype.subscribe = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                this.unsubscribe();
                this.$2 = e;
                const t = yield this.$3(e);
                if (t != null) {
                    this.$4(e, t);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.unsubscribe = function() {
            self.clearTimeout(this.$1);
        };
        return t;
    })();
    const u = new s;
    l.LiveUpdatesManager = u;
}, 98);