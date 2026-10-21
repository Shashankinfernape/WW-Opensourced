__d("hyperionChannel", [
    "hyperionHook"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (()=>{
        function t() {
            this.$1 = new (e || (e = o("hyperionHook"))).Hook;
        }
        const t_prototype = t.prototype;
        t_prototype.pipe = function(t, n) {
            const e = this.$1.add(n ? function(e, ...o) {
                n(function() {
                    t.emit(e, ...o);
                });
            } : function(e, ...r) {
                t.emit(e, ...r);
            });
            e.$2 = t;
            return t;
        };
        t_prototype.unpipe = function(t) {
            return this.$1.removeIf(function(e) {
                return e.$2 === t;
            });
        };
        t_prototype.emit = function(t, ...r) {
            this.$1.call(t, ...r);
        };
        return t;
    })();
    const u = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.$Channel1 = Object.create(null);
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.$Channel2 = function(n) {
            let t = this.$Channel1[n];
            if (!t) {
                t = this.$Channel1[n] = new (e || (e = o("hyperionHook"))).Hook;
            }
            return t;
        };
        n_prototype.on = function(t) {
            return this.$Channel2(t);
        };
        n_prototype.addListener = function(t, n) {
            return this.on(t).add(n);
        };
        n_prototype.removeListener = function(t, n) {
            this.on(t).remove(n);
            return n;
        };
        n_prototype.emit = function(n, ...a) {
            this.$Channel2(n).call(...a);
            t.prototype.emit.call(...[
                this,
                n
            ].concat(a));
        };
        return n;
    })(s);
    const c = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.$PausableChannel1 = false;
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.pause = function() {
            this.$PausableChannel1 = true;
        };
        t_prototype.unpause = function() {
            this.$PausableChannel1 = false;
        };
        t_prototype.isPaused = function() {
            return this.$PausableChannel1;
        };
        t_prototype.emit = function(n, ...args) {
            if (!this.$PausableChannel1) {
                for(var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++){
                    o[a - 1] = arguments[a];
                }
                e.prototype.emit.call(...[
                    this,
                    n
                ].concat(o));
            }
        };
        return t;
    })(u);
    l.Channel = u;
    l.PausableChannel = c;
    l.PipeableEmitter = s;
}, 98);