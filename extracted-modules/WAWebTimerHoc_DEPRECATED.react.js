__d("WAWebTimerHoc_DEPRECATED.react", [
    "WALogger",
    "WAThrottle",
    "WAWebDebounce",
    "WAWebHocComponent_DEPRECATED.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = m || (m = o("react"));
    function _(t) {
        let n;
        n = ((n)=>{
            function a(...i_1) {
                let t;
                t = n.call(this, ...i_1) || this;
                t._timers = new Map;
                t._timerId = 0;
                t._unmounted = false;
                t.setInterval = function(n, r) {
                    if (t._unmounted) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!"
                        ]))).sendLogs("Setting interval after unmount");
                    }
                    const a = ++t._timerId;
                    const i = self.setInterval(n, r);
                    t._timers.set(a, function() {
                        self.clearInterval(i);
                        t._timers.delete(a);
                    });
                    return a;
                };
                t.clearInterval = function(e) {
                    const n = t._timers.get(e);
                    if (n) {
                        n();
                    }
                };
                t.setTimeout = function(e, n) {
                    if (t._unmounted) {
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!"
                        ]))).sendLogs("Setting timeout after unmount");
                    }
                    const r = t._cbWrapper(e);
                    const a = r[0];
                    const i = r[1];
                    const l = self.setTimeout(i, n);
                    t._timers.set(a, function() {
                        self.clearTimeout(l);
                        t._timers.delete(a);
                    });
                    return a;
                };
                t.clearTimeout = function(e) {
                    const n = t._timers.get(e);
                    if (n) {
                        n();
                    }
                };
                t.requestAnimationFrame = function(e) {
                    if (t._unmounted) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!"
                        ]))).sendLogs("Requesting animation frame after unmount");
                    }
                    const n = t._cbWrapper(e);
                    const r = n[0];
                    const a = n[1];
                    const i = window.requestAnimationFrame(a);
                    t._timers.set(r, function() {
                        window.cancelAnimationFrame(i);
                        t._timers.delete(r);
                    });
                    return r;
                };
                t.cancelAnimationFrame = function(e) {
                    const n = t._timers.get(e);
                    if (n) {
                        n();
                    }
                };
                t.throttle = function(e, n, r) {
                    if (t._unmounted) {
                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!"
                        ]))).sendLogs("Throttling after unmount");
                    }
                    const a = t._cbWrapper(e);
                    const i = a[0];
                    const l = a[1];
                    const s = o("WAThrottle").throttle(l, n, r);
                    const u = s.cancel.bind(s);
                    s.cancel = function() {
                        u();
                        t._timers.delete(i);
                    };
                    const d = function() {
                        if (!t._unmounted) {
                            t._timers.set(i, s.cancel);
                            s(...arguments);
                        }
                    };
                    d.cancel = s.cancel;
                    d.flush = s.flush;
                    d.reset = s.reset;
                    d.isPending = s.isPending;
                    return d;
                };
                t.debounce = function(e, n, a) {
                    if (t._unmounted) {
                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!"
                        ]))).sendLogs("Debouncing after unmount");
                    }
                    const l = t._cbWrapper(e);
                    const s = l[0];
                    const u = l[1];
                    const c = r("WAWebDebounce")(u, n, babelHelpers.extends({}, a, {
                        trailing: a?.trailing ?? true
                    }));
                    const m = c.cancel.bind(c);
                    const p = c.flush.bind(c);
                    c.cancel = function() {
                        m();
                        t._timers.delete(s);
                    };
                    c.flush = function() {
                        p();
                    };
                    const _ = function() {
                        if (!t._unmounted) {
                            t._timers.set(s, c.cancel);
                            c(...arguments);
                        }
                    };
                    _.cancel = c.cancel;
                    _.flush = c.flush;
                    _.reset = c.reset;
                    _.isPending = c.isPending;
                    return _;
                };
                t._cbWrapper = function(e) {
                    const n = ++t._timerId;
                    return [
                        n,
                        function() {
                            t._timers.delete(n);
                            e(...arguments);
                        }
                    ];
                };
                return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
            }
            babelHelpers.inheritsLoose(a, n);
            const a_prototype = a.prototype;
            a_prototype.componentWillUnmount = function() {
                this._unmounted = true;
                this._timers.forEach((e)=>e());
            };
            a_prototype.render = function() {
                return p.jsx(t, babelHelpers.extends({
                    ref: this.setComponent,
                    setInterval: this.setInterval,
                    clearInterval: this.clearInterval,
                    setTimeout: this.setTimeout,
                    clearTimeout: this.clearTimeout,
                    requestAnimationFrame: this.requestAnimationFrame,
                    cancelAnimationFrame: this.cancelAnimationFrame,
                    debounce: this.debounce,
                    throttle: this.throttle
                }, this.props));
            };
            return a;
        })(o("WAWebHocComponent_DEPRECATED.react").WrappedComponent);
        n.displayName = `Timer(${o("WAWebHocComponent_DEPRECATED.react").getHocComponentDisplayName(t)})`;
        n.wrappedComponent = null;
        return n;
    }
    l.default = _;
}, 98);