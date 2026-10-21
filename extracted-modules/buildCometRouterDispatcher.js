__d("buildCometRouterDispatcher", [
    "cometRouterPopPushViewSource"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const n = babelHelpers.extends({}, e);
        if (t.actorID !== undefined) {
            n.actorID = t.actorID;
        }
        if (t.from !== undefined) {
            n.from = t.from;
        }
        if (t.tracePolicy !== undefined) {
            n.tracePolicy = t.tracePolicy;
        }
        if (t.url !== undefined) {
            n.url = t.url;
        }
        return n;
    }
    const s = (()=>{
        function t(e) {
            this.$1 = e;
        }
        const t_prototype = t.prototype;
        t_prototype.getRouterDispatcher = function() {
            return this.$1;
        };
        t_prototype.setRouterDispatcher = function(t) {
            this.$1 = t;
        };
        t_prototype.go = function(t, n) {
            return this.$1.go(t, n, {});
        };
        t_prototype.goTo = function(t, n) {
            return this.$1.goTo(t, n, {});
        };
        t_prototype.prefetchRouteQueries = function(t, n, r) {
            return this.$1.prefetchRouteQueries(t, n, r, {});
        };
        t_prototype.preloadRouteCode = function(t, n) {
            return this.$1.preloadRouteCode(t, n, {});
        };
        t_prototype.goBack = function(t) {
            return this.$1.goBack(t);
        };
        t_prototype.popPushView = function(t) {
            if (t?.source != null) {
                o("cometRouterPopPushViewSource").updateCometRouterPopPushViewSource(t.source);
            }
            return this.$1.popPushView();
        };
        t_prototype.prefetchRouteDefinition = function(t) {
            return this.$1.prefetchRouteDefinition(t);
        };
        t_prototype.withContext = function(n) {
            return this.$2(function(t) {
                return {
                    go: function(o, a, i) {
                        return t.go(o, a, e(n, i));
                    },
                    goTo: function(o, a, i) {
                        return t.goTo(o, a, e(n, i));
                    },
                    prefetchRouteQueries: function(o, a, i, l) {
                        return t.prefetchRouteQueries(o, a, i, e(n, l));
                    },
                    preloadRouteCode: function(o, a, i) {
                        return t.preloadRouteCode(o, a, e(n, i));
                    }
                };
            });
        };
        t_prototype.$2 = function(n = function() {
            return {};
        }) {
            const e = n(this.$1);
            return new t(babelHelpers.extends({}, this.$1, e));
        };
        t_prototype.withOverrides = function(t = function() {
            return {};
        }) {
            return this.$2(function(e) {
                const n = {
                    value: {}
                };
                const r = babelHelpers.extends({}, e, {
                    go: function(r, o) {
                        return e.go(r, o, n.value);
                    },
                    goAsync: function(r, o) {
                        return e.goAsync(r, o, n.value);
                    },
                    goTo: function(r, o) {
                        return e.goTo(r, o, n.value);
                    },
                    goToAsync: function(r, o) {
                        return e.goToAsync(r, o, n.value);
                    },
                    prefetchRouteQueries: function(r, o, a) {
                        return e.prefetchRouteQueries(r, o, a, n.value);
                    },
                    preloadRouteCode: function(r, o) {
                        return e.preloadRouteCode(r, o, n.value);
                    }
                });
                const o = babelHelpers.extends({}, r, t(r));
                function a(e) {
                    n.value = e;
                    return o;
                }
                return babelHelpers.extends({}, o, {
                    go: function(t, n, r) {
                        return a(r).go(t, n);
                    },
                    goAsync: function(t, n, r) {
                        return a(r).goAsync(t, n);
                    },
                    goTo: function(t, n, r) {
                        return a(r).goTo(t, n);
                    },
                    goToAsync: function(t, n, r) {
                        return a(r).goToAsync(t, n);
                    },
                    prefetchRouteQueries: function(t, n, r, o) {
                        return a(o).prefetchRouteQueries(t, n, r);
                    },
                    preloadRouteCode: function(t, n, r) {
                        return a(r).preloadRouteCode(t, n);
                    }
                });
            });
        };
        return t;
    })();
    l.Dispatcher = s;
}, 98);