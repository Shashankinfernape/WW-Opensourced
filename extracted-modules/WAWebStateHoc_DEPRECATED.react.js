__d("WAWebStateHoc_DEPRECATED.react", [
    "WALogger",
    "WAWebHocComponent_DEPRECATED.react",
    "WAWebStateConcern",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    function d(t, n, a) {
        let i;
        const componentName = o("WAWebHocComponent_DEPRECATED.react").getHocComponentDisplayName(t);
        if (!n && !a) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Assertion failed!"
            ]))).sendLogs(`StateHOC wrapping class with no concerns, check ${componentName}`);
        }
        const u = [];
        if (n) {
            for(const d in n){
                u.push(new (r("WAWebStateConcern"))({
                    componentName,
                    isStrong: true,
                    keys: n[d],
                    name: d
                }));
            }
        }
        if (a) {
            for(const m in a){
                if (n && Object.hasOwn(n, m)) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed!"
                    ]))).sendLogs(`Component has marked "${m}" as both a normal and weak concern, check ${componentName}`);
                }
                u.push(new (r("WAWebStateConcern"))({
                    componentName,
                    isStrong: false,
                    keys: a[m],
                    name: m
                }));
            }
        }
        i = ((e)=>{
            function n(t) {
                let r;
                r = e.call(this, t) || this;
                r._rr = function(e, t) {
                    r.setState(function(n) {
                        return {
                            proxies: babelHelpers.extends({}, n.proxies, {
                                [e.name]: e.createProxy(t)
                            })
                        };
                    });
                };
                const o = {};
                let a = false;
                for (const l of u){
                    const s = l.name;
                    const c = l.getModelAndValidate(n._getModelOrProxy(s, t));
                    if (c) {
                        const d = l.createProxy(c);
                        l.attachConcern({
                            model: c,
                            onChange: r._rr,
                            proxyBitMask: d.proxyBitMask
                        });
                        o[s] = d;
                    } else {
                        a = true;
                    }
                }
                r.state = {
                    props: t,
                    proxies: o,
                    hasBroken: a
                };
                return r;
            }
            babelHelpers.inheritsLoose(n, e);
            n._getModelOrProxy = function(t, n) {
                return n[t];
            };
            n.getDerivedStateFromProps = function(t, r) {
                const props = t;
                const o = babelHelpers.extends({}, r.proxies);
                let a = false;
                if (!r.hasBroken) {
                    const i = r.props;
                    for (const s of u){
                        const c = s.name;
                        const d = s.getModel(n._getModelOrProxy(c, i));
                        const m = s.getModelAndValidate(n._getModelOrProxy(c, t));
                        if (d !== m) {
                            if (m) {
                                o[c] = s.createProxy(m);
                            } else {
                                a = true;
                            }
                        }
                    }
                }
                return {
                    props,
                    proxies: o,
                    hasBroken: a
                };
            };
            const n_prototype = n.prototype;
            n_prototype.componentDidUpdate = function(t) {
                if (!this.state.hasBroken) {
                    for (const r of u){
                        const o = r.name;
                        const a = r.getModel(n._getModelOrProxy(o, t));
                        const i = r.getModelAndValidate(n._getModelOrProxy(o, this.props));
                        if (a !== i && (r.detachConcern(a, this._rr), i)) {
                            const l = this.state.proxies[o];
                            r.attachConcern({
                                model: i,
                                onChange: this._rr,
                                proxyBitMask: l.proxyBitMask
                            });
                        }
                    }
                }
            };
            n_prototype.componentWillUnmount = function() {
                if (!this.state.hasBroken) {
                    for (const t of u){
                        t.detachConcern(t.getModel(n._getModelOrProxy(t.name, this.props)), this._rr);
                    }
                }
            };
            n_prototype.render = function() {
                const state = this.state;
                const { hasBroken, proxies } = state;
                if (hasBroken) {
                    return null;
                }
                return c.jsx(t, babelHelpers.extends({
                    ref: this.setComponent
                }, this.props, proxies));
            };
            return n;
        })(o("WAWebHocComponent_DEPRECATED.react").WrappedComponent);
        i.displayName = `State(${componentName})`;
        i.wrappedComponent = null;
        return i;
    }
    l.default = d;
}, 98);