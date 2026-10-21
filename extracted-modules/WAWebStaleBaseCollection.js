__d("WAWebStaleBaseCollection", [
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            let t;
            t = e.call(this) || this;
            t.listenTo(o("WAWebSocketModel").Socket, "change:stream", t.$StaleBaseCollection$p_1);
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.$StaleBaseCollection$p_2 = function() {
            e: {
                if (o("WAWebSocketModel").Socket.stream === o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED) {
                    this.forEach((e)=>{
                        if (e) {
                            e.stale = true;
                        }
                    });
                    break e;
                }
                if (o("WAWebSocketModel").Socket.stream === o("WAWebSocketConstants").SOCKET_STREAM.RESUMING || o("WAWebSocketModel").Socket.stream === o("WAWebSocketConstants").SOCKET_STREAM.SYNCING || o("WAWebSocketModel").Socket.stream === o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED) {
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${o("WAWebSocketModel").Socket.stream}`);
            }
        };
        t_prototype.$StaleBaseCollection$p_1 = function() {
            this.$StaleBaseCollection$p_2();
            if (this._cachePolicy.constructor.policy === o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD) {
                this._updateFromCache();
            }
        };
        t_prototype._markResultsNotStale = function(t) {
            const e = Array.isArray(t) ? t : [
                t
            ];
            e.filter(Boolean).forEach((e)=>{
                if (typeof e.stale === "undefined") {
                    e.stale = false;
                }
            });
        };
        t_prototype.gaddUp = function(t) {
            let stale = true;
            if (this.get(t.id)) {
                stale = false;
            }
            const n = babelHelpers.extends({
                stale
            }, t);
            const o = this.add(n, {
                merge: true
            })[0];
            if (o) {
                const a = o;
                if (o.stale) {
                    this.find(o.id);
                }
                return a;
            }
            throw r("err")(".gaddUp called without an id attr (id)");
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    l.StaleBaseCollection = e;
}, 98);